/**
 * Created by Shlomi
 */

import chai from 'chai';

import RedisClient from '../src/utils/redisClient';
import RedisSimpleObject from '../src/utils/redisSimpleObject';

let assert = chai.assert;

describe('Redis Simple Object', () => {

    let ttl = 2; // in seconds
    let _instance;

    before(() => {

        let client = new RedisClient({
            port: 6379,
            host: '127.0.0.1',
            db: 0
        });

        _instance = new RedisSimpleObject('test_rso_key', {client});
    });

    it('Should set the data to Redis', async () => {

        let res = await _instance.set({
            a: 5,
            b: 6
        }, ttl);

        assert.equal(res, 'OK', 'should be equal');

    });

    it('Should get the data from Redis', async () => {

        let res = await _instance.get();

        assert.deepEqual(res, {
            a: 5,
            b: 6
        }, 'should be equal');

    });

    it('Should not get the data from Redis due to expiration', async () => {

        await new Promise((resolve, reject) => {
            setTimeout(resolve, ttl*1000);
        });

        let res = await _instance.get();

        assert.isNull(res, 'should be undefined');

    });

    it('Should delete the data from Redis', async () => {

        let data = true;

        let res = await _instance.set(data);
        assert.equal(res, 'OK', 'should be equal');

        res = await _instance.get();
        assert.isTrue(res, data, 'should be equal');

        res = await _instance.delete();
        assert.equal(res, 1, 'should be equal');

        res = await _instance.get();
        assert.isNull(res, 'should be null');

    });

});
