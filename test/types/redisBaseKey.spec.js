/**
 * Created by Shlomi
 */

import chai from 'chai';

import config from '../config';
import RedisClient from '../../src/utils/redisClient';
import RedisSimpleObject from '../../src/types/redisSimpleObject';

let assert = chai.assert;

describe('Redis Base Key', () => {

    let _sampleData = [
        'str1',
        {a: 1, b: 2, c: 3}
    ];

    let _origTTL = 20;
    let _newTTL = 30;

    let _key = 'sample_key_object';
    let _instance;
    let _client;

    before(async () => {
        _client = new RedisClient(config.redis);
        _instance = new RedisSimpleObject(_key, {client: _client});

        // Clean current data from Redis
        return _instance.delete();
    });

    after(function() {
        if(_client){
            _client.quit();
        }
    });

    it('Should set the key with initial TTL', async () => {
        let res = await _instance.set(_sampleData[0], _origTTL);
        assert.deepEqual(res, true, 'should be equal');

        res = await _instance.ttl();
        assert.approximately(_origTTL, res, 0, 'should be in between');
    });

    it('Should set an invalid the key TTL', async () => {
        try{
            _instance.expire(-1);
        }catch(e){
            assert.deepEqual(e.message, `Invalid TTL value`);
        }
    });

    it('Should change the key TTL', async () => {
        let res = await _instance.expire(_newTTL);
        assert.deepEqual(res, true, 'should be equal');

        res = await _instance.ttl();

        if(_origTTL > _newTTL){
            assert.approximately(_origTTL, res, _newTTL, 'should be in between');
        }else{
            assert.approximately(_newTTL, res, _origTTL, 'should be in between');
        }
    });

    it('Should remove the key TTL', async () => {
        let res = await _instance.persist();
        assert.deepEqual(res, true, 'should be equal');

        res = await _instance.ttl();
        assert.deepEqual(res, -1, 'should be equal');
    });

    it('Should delete the key', async () => {
        let res = await _instance.delete();
        assert.deepEqual(res, true, 'should be equal');
    });
});