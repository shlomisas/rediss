const RedisHelper = require('../utils/redisHelper');
const RedisBase = require('./redisBase');

module.exports = class RedisSub extends RedisBase {
    async subscribe(channel){
        let cmd = RedisHelper.isGlobString(channel) ? 'psubscribe' : 'subscribe';
        return !!await this._raw(cmd, channel);
    }

    async unsubscribe(channel){
        let cmd = RedisHelper.isGlobString(channel) ? 'punsubscribe' : 'unsubscribe';
        return !!await this._raw(cmd, channel);
    }

    onMessage(callback){
        this._client.on('message', (channel, message) => {
            callback(channel, RedisHelper.decodeRedisData(message));
        });

        this._client.on('pmessage', (pattern, channel, message) => {
            callback(channel, RedisHelper.decodeRedisData(message), pattern);
        });
    }
}
