/**
 * Created by Shlomi
 */

import chai from 'chai';

import config from '../config';
import RedisClient from '../../src/utils/redisClient';
import RedisSimpleObject from '../../src/types/redisSimpleObject';

let assert = chai.assert;

describe('Redis Simple Object', () => {

    let _ttl = process.env.TRAVIS ? 5 : 2; // in seconds
    let _instance;
    let _client;

    before(async () => {
        _client = new RedisClient(config.redis);
        _instance = new RedisSimpleObject('test_rso_key', {client: _client});

        // Clean current data from Redis
        return _instance.delete();
    });

    after(function() {
        if(_client){
            _client.quit();
        }
    });

    it('Should set data', async () => {

        let res = await _instance.set({
            a: 5,
            b: 6
        }, _ttl);

        assert.deepEqual(res, true, 'should be equal');

    });

    it('Should get data', async () => {

        let res = await _instance.get();

        assert.deepEqual(res, {
            a: 5,
            b: 6
        }, 'should be equal');

    });

    it('Should check data existance', async () => {
        let res = await _instance.exists();

        assert.equal(res, true, 'should be equal');
    });

    it('Should check fake data existance', async () => {
        const instance = new RedisSimpleObject('fake_rso_key', {client: _client});

        let res = await instance.exists();

        assert.equal(res, false, 'should be equal');
    });

    it('Should get multiple data', async () => {

        let instance1 = new RedisSimpleObject('test_rso_key', {client: _client});
        let instance2 = new RedisSimpleObject('test_rso_key1', {client: _client});

        await instance1.set({
            a: 5,
            b: 6
        }, _ttl);
        await instance2.set('3', _ttl);

        let res = await _instance.get(['test_rso_key', 'test_rso_key1']);

        assert.deepEqual(res, [{
            a: 5,
            b: 6
        }, 3], 'should be equal');

    });

    it('Should get only relevant multiple data', async () => {

        let ttl = 1;
        let instance1 = new RedisSimpleObject('test_rso_key', {client: _client});
        let instance2 = new RedisSimpleObject('test_rso_key1', {client: _client});

        await instance1.set({
            a: 5,
            b: 6
        }, _ttl);
        await instance2.set('3', ttl);

        await new Promise((resolve, reject) => setTimeout(resolve, ttl*1000));

        let res = await _instance.get(['test_rso_key', 'test_rso_key1']);

        assert.deepEqual(res, [{
            a: 5,
            b: 6
        }, null], 'should be equal');

    });

    it(`Should get data's TTL`, async () => {

        let res = await _instance.ttl();

        assert.isAbove(res, 0, 'should be above');
        assert.isAtMost(res, _ttl, 'should be below');

    });

    it('Should not get an expired data', async () => {

        await new Promise((resolve, reject) => {
            setTimeout(resolve, _ttl*1000);
        });

        let res = await _instance.get();

        assert.isNull(res, 'should be undefined');

    });

    it('Should delete data', async () => {

        let data = true;

        let res = await _instance.set(data);
        assert.deepEqual(res, true, 'should be equal');

        res = await _instance.get();
        assert.isTrue(res, data, 'should be equal');

        res = await _instance.delete();
        assert.deepEqual(res, true, 'should be equal');

        res = await _instance.get();
        assert.isNull(res, 'should be null');

    });

});
