/**
 * Created by Shlomi
 */

import chai from 'chai';

import config from '../config';
import RedisClient from '../../src/utils/redisClient';
import RedisSet from '../../src/types/redisSet';

let assert = chai.assert;

describe('Redis Set', () => {

    let _stringValue = 'member 1';
    let _objValue = {a: 1, b: 2};
    let _booleanValue = false;

    let ttl = 2; // in seconds
    let _instance;
    let _client;

    before(async () => {
        _client = new RedisClient(config.redis);
        _instance = new RedisSet('test_set_key', {client: _client});

        // Clean current data from Redis
        return _instance.delete();
    });

    after(function() {
        if(_client){
            _client.quit();
        }
    });

    it('Should add a String member', async () => {
        let res = await _instance.add(_stringValue);
        assert.equal(res, 1, 'should be equal');
    });

    it('Should add an Object member', async () => {
        let res = await _instance.add(_objValue);
        assert.equal(res, 1, 'should be equal');
    });

    it('Should add an Boolean member', async () => {
        let res = await _instance.add(_booleanValue);
        assert.equal(res, 1, 'should be equal');
    });

    it('Should get the size of set', async () => {
        let res = await _instance.size();
        assert.equal(res, 3, 'should be equal');
    });

    it('Should check if String member is exists', async () => {
        let res = await _instance.exists(_stringValue);
        assert.isTrue(res, 'should be true');
    });

    it('Should check if Object member is exists', async () => {
        let res = await _instance.exists(_objValue);
        assert.isTrue(res, 'should be true');
    });

    it('Should check if Boolean member exists', async () => {
        let res = await _instance.exists(_booleanValue);
        assert.isTrue(res, 'should be false');
    });

    it('Should get all members in set', async () => {
        let res = await _instance.getAll();
        assert.isArray(res, 'should be an array');
        assert.lengthOf(res, 3, 'should be same length');
    });

    it('Should get random members in set', async () => {
        let res = await _instance.getRands(2);

        assert.isArray(res, 'should be an array');
        assert.lengthOf(res, 2, 'should be same length');
    });

    it('Should remove member from set', async () => {
        let res = await _instance.remove(_booleanValue);
        assert.equal(res, 1, 'should be equal');
    });

    it('Should get the size of set (again..)', async () => {
        let res = await _instance.size();
        assert.equal(res, 2, 'should be equal');
    });

    it('Should pop random members in set', async () => {
        let res = await _instance.popRand();

        assert.isDefined(res, 'should be same length');
    });

    it('Should get the size of set (and again..)', async () => {
        let res = await _instance.size();
        assert.equal(res, 1, 'should be equal');
    });

    it('Should delete the set', async () => {
        let res = await _instance.delete();
        assert.equal(res, 1, 'should be equal');
    });

});
