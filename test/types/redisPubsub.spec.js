const chai = require('chai');

const config = require('../config');
const RedisClient = require('../../src/utils/redisClient');
const RedisPubsub = require('../../src/types/redisPubsub');

let assert = chai.assert;

describe('Redis PUBSUB', () => {

    let _channels = [
        'channel1',
        'channel2',
        'channe*'
    ];

    let _sampleData = [
        {a: 1, b: 2, c: 3},
        'str1'
    ];

    let _instance;
    let _client1;
    let _client2;

    beforeEach(async () => {
        _client1 = new RedisClient(config.redis);
        _client2 = new RedisClient(config.redis);

        _instance = new RedisPubsub(_client1, _client2);
    });

    afterEach(function() {
        if(_client1){
            _client1.quit();
            _client1 = null;
        }

        if(_client2){
            _client2.quit();
            _client1 = null;
        }

        _instance = null;
    });

    it('Should subscribe to channel', done => {
        (async () => {
            try{
                await _instance.subscribe(_channels[0]);

                _instance.onMessage((channel, data) => {
                    try{
                        assert.deepEqual(channel, _channels[0], 'should be equal');
                        assert.deepEqual(data, _sampleData[0], 'should be equal');
                        done();
                    }catch(e){
                        done(e);
                    }
                });

                await _instance.publish(_channels[0], _sampleData[0]);
            }catch(e){
                done(e);
            }
        })();
    });

    it('Should subscribe to channel with glob pattern', done => {
        (async () => {
            try{

                let subChannel = _channels[2];
                let pubChannel = _channels[1];

                await _instance.subscribe(subChannel);

                _instance.onMessage((channel, data, pattern) => {
                    assert.deepEqual(channel, pubChannel, 'should be equal');
                    assert.deepEqual(data, _sampleData[1], 'should be equal');
                    assert.deepEqual(pattern, subChannel, 'should be equal');
                    done();
                });

                await _instance.publish(pubChannel, _sampleData[1]);
            }catch(e){
                done(e);
            }
        })();
    });
});
