/**
 * Created by Shlomi
 */

import chai from 'chai';

import config from '../config';
import RedisClient from '../../src/utils/redisClient';
import RedisList from '../../src/types/redisList';

let assert = chai.assert;

describe('Redis List', () => {

    let _sampleData = [
        'str1',
        {a: 1, b: 2, c: 3},
        'str2',
        'str3',
        'str4'
    ];

    let _instance;
    let _client;

    before(async () => {
        _client = new RedisClient(config.redis);
        _instance = new RedisList('test_list_key', {client: _client});

        // Clean current data from Redis
        return _instance.delete();
    });

    after(function() {
        if(_client){
            _client.quit();
        }
    });

    it('Should add initial items to the list', async () => {

        let res = await _instance.push(_sampleData[0]);
        assert.deepEqual(res, 1, 'should be equal');

        res = await _instance.push(_sampleData[1]);
        assert.deepEqual(res, 2, 'should be equal');

        res = await _instance.push(_sampleData[2]);
        assert.deepEqual(res, 3, 'should be equal');

        res = await _instance.push(_sampleData[3]);
        assert.deepEqual(res, 4, 'should be equal');

        res = await _instance.unshift(_sampleData[4]);
        assert.deepEqual(res, 5, 'should be equal');
    });

    it('Should get all items from the list', async () => {

        let elem = await _instance.getAt(0);
        assert.deepEqual(elem, _sampleData[4], 'should be equal');

        elem = await _instance.getAt(1);
        assert.deepEqual(elem, _sampleData[0], 'should be equal');

        elem = await _instance.getAt(2);
        assert.deepEqual(elem, _sampleData[1], 'should be equal');

        elem = await _instance.getAt(3);
        assert.deepEqual(elem, _sampleData[2], 'should be equal');

        elem = await _instance.getAt(4);
        assert.deepEqual(elem, _sampleData[3], 'should be equal');
    });

    it('Should get the size of the list', async () => {
        let elem = await _instance.length();
        assert.deepEqual(elem, 5, 'should be equal');
    });

    it('Should pop the last item from the list', async () => {
        let elem = await _instance.pop();
        assert.deepEqual(elem, _sampleData[3], 'should be equal');
    });

    it('Should get the size of the list after pop', async () => {
        let elem = await _instance.length();
        assert.deepEqual(elem, 4, 'should be equal');
    });

    it('Should shift the first item from the list', async () => {
        let elem = await _instance.shift();
        assert.deepEqual(elem, _sampleData[4], 'should be equal');
    });

    it('Should get all items from the list', async () => {
        let elems = await _instance.getAll();
        let length = await _instance.length();

        assert.deepEqual(elems.length, length, 'should be equal');

        assert.deepEqual(elems[0], _sampleData[0], 'should be equal');
        assert.deepEqual(elems[1], _sampleData[1], 'should be equal');
        assert.deepEqual(elems[2], _sampleData[2], 'should be equal');
    });
});
