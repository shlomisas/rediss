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

    it(`Should get data's TTL`, async () => {

        let res = await _instance.getTTL();

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
        assert.deepEqual(res, 1, 'should be equal');

        res = await _instance.get();
        assert.isNull(res, 'should be null');

    });

});