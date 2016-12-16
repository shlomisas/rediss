/**
 * Created by Shlomi
 */

import chai from 'chai';

import config from '../config';
import RedisClient from '../../src/utils/redisClient';
import RedisHash from '../../src/types/redisHash';

let assert = chai.assert;

describe('Redis Hash', () => {

    let _sampleObj = {
        firstName: 'Shlomi',
        lastName: 'Sasson',
        email: 'something@dude.com'
    };

    let _instance;
    let _client;

    before(async () => {
        _client = new RedisClient(config.redis);
        _instance = new RedisHash('test_hash_key', {client: _client});

        // Clean current data from Redis
        return _instance.delete();
    });

    after(function() {
        if(_client){
            _client.quit();
        }
    });

    it('Should add one object field', async () => {

        let fieldName = Object.keys(_sampleObj)[0];

        let res = await _instance.set(fieldName, _sampleObj[fieldName]);
        assert.deepEqual(res, true, 'should be equal');
    });

    it('Should all object fields', async () => {
        let res = await _instance.set(_sampleObj);
        assert.deepEqual(res, true, 'should be equal');
    });

    it('Should get object field', async () => {

        let fieldName = Object.keys(_sampleObj)[2];

        let res = await _instance.get(fieldName);
        assert.deepEqual(res, _sampleObj[fieldName], 'should be equal');
    });

    it('Should get true cause object field exist', async () => {

        let fieldName = Object.keys(_sampleObj)[1];

        let res = await _instance.exists(fieldName);
        assert.isTrue(res, 'should be true');
    });

    it('Should get false cause object field is not exist', async () => {
        let res = await _instance.exists('bla bla bla');
        assert.isFalse(res, 'should be false');
    });

    it('Should remove object field', async () => {

        let fieldName = Object.keys(_sampleObj)[1];

        let res = await _instance.remove(fieldName);
        assert.deepEqual(res, true, 'should be equal');
    });

    it('Should get false cause object field has removed', async () => {

        let fieldName = Object.keys(_sampleObj)[1];

        let res = await _instance.exists(fieldName);
        assert.isFalse(res, 'should be false');
    });

    it('Should get whole object', async () => {
        let res = await _instance.getAll();

        let fieldName0 = Object.keys(_sampleObj)[0];
        let fieldName2 = Object.keys(_sampleObj)[2];

        assert.deepEqual(res[fieldName0], _sampleObj[fieldName0], 'should be equal');
        assert.deepEqual(res[fieldName2], _sampleObj[fieldName2], 'should be equal');
    });

    it('Should delete the object', async () => {
        let res = await _instance.delete();

        assert.deepEqual(res, true, 'should be equal');
    });
});
