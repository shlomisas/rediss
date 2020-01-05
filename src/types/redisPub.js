const RedisHelper = require('../utils/redisHelper');
const RedisBase = require('./redisBase');

module.exports = class RedisPub extends RedisBase{
    async publish(channel, message){
        return !!await this._raw('publish', channel, RedisHelper.encodeRedisData(message));
    }
}
