/**
 * Created by Shlomi
 */

import chai from 'chai';

import RedisHelper from '../../src/utils/redisHelper';

let assert = chai.assert;

describe('Redis Helper', () => {

    // Expected Errors

    it('Should throw error on invalid redis data (function)', () => {
        try{
            RedisHelper.encodeRedisData(function(){});
        }catch(e){
            assert.equal(e.message, 'Invalid data for Redis', 'should be equal');
        }
    });

    // Encode

    it('Should encode String to redis data', () => {

        let data = 'str test';
        let encodedData = RedisHelper.encodeRedisData(data);

        assert.equal(data, encodedData, 'should be equal');
    });

    it('Should encode Boolean to redis data', () => {

        let data = true;
        let encodedData = RedisHelper.encodeRedisData(data);

        assert.isString(encodedData, 'should be string');
        assert.equal(encodedData, 'true', 'should be equal');
    });

    it('Should encode Object to redis data', () => {

        let data = {
            a: 5,
            b: 9
        };
        let encodedData = RedisHelper.encodeRedisData(data);

        assert.isString(encodedData, 'should be string');
        assert.equal(encodedData, '{"a":5,"b":9}', 'should be equal');
    });

    // Decode
    it('Should decode String from redis data', () => {

        let data = 'str test';
        let encodedData = RedisHelper.decodeRedisData(data);

        assert.equal(data, encodedData, 'should be equal');
    });

    it('Should decode Boolean from redis data', () => {

        let data1 = 'true';
        let encodedData1 = RedisHelper.decodeRedisData(data1);

        assert.isTrue(encodedData1, 'should be true');

        let data2 = 'false';
        let encodedData2 = RedisHelper.decodeRedisData(data2);

        assert.isFalse(encodedData2, 'should be true');
    });

    it('Should decode Object from redis data', () => {

        let data = '{"a":5,"b":9, "c": 10, "d": {"z": "what\'s up?"}}';
        let encodedData = RedisHelper.decodeRedisData(data);

        assert.deepEqual(encodedData, {
            'a': 5,
            'b': 9,
            'c': 10,
            'd': {
                'z': 'what\'s up?'
            }
        }, 'should be decoded object');
    });

    it('Should decode Weird situations from redis data', () => {

        let data = null;
        let encodedData = RedisHelper.decodeRedisData(data);
        assert.equal(encodedData, data, 'should be null');

        data = '';
        encodedData = RedisHelper.decodeRedisData(data);
        assert.equal(encodedData, data, 'should be empty string');

        data = '   ';
        encodedData = RedisHelper.decodeRedisData(data);
        assert.equal(encodedData, data, 'should be empty string');
    });
});
