const chai = require('chai');

const entryPoint  = require('../../src/index');
const config = require('../config');
const RedisClient = require('../../src/utils/redisClient');
const RedisList  = require('../../src/types/redisList');

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
    let _key = 'test_list_key';

    before(async () => {
        _client = new RedisClient(config.redis);
        entryPoint.setGlobalClient(_client);

        _instance = new RedisList(_key);

        // Clean current data from Redis
        await _instance.delete();
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

    it('Should return true since the list exists', async () => {
        let elem = await _instance.exists();
        assert.deepEqual(elem, true, 'should be true');
    });

    it('Should get the size of the list', async () => {
        let elem = await _instance.length();
        assert.deepEqual(elem, 5, 'should be equal');
    });

    it('Should get the last item from the list', async () => {
        let elem = await _instance.getLast();
        assert.deepEqual(elem, _sampleData[3], 'should be equal');
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

    it('Should remove an item', async () => {
        let res = await _instance.remove(_sampleData[2]);
        assert.deepEqual(res, 1, 'should be equal');
    });

    it('Should get all items from the list', async () => {
        let elems = await _instance.getAll();
        let length = await _instance.length();

        assert.deepEqual(elems.length, length, 'should be equal');

        assert.deepEqual(elems[0], _sampleData[0], 'should be equal');
        assert.deepEqual(elems[1], _sampleData[1], 'should be equal');
    });
});
