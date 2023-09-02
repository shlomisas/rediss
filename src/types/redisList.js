const RedisHelper = require('../utils/redisHelper');
const RedisBaseKey = require('./redisBaseKey');

module.exports = class RedisList extends RedisBaseKey {
    async push(data){
        return this._raw('rpush', this._key, RedisHelper.encodeRedisData(data));
    }

    async unshift(data){
        return this._raw('lpush', this._key, RedisHelper.encodeRedisData(data));
    }

    async pop(){
        return RedisHelper.decodeRedisData(await this._raw('rpop', this._key));
    }

    async shift(){
        return RedisHelper.decodeRedisData(await this._raw('lpop', this._key));
    }

    async getAt(index){
        return RedisHelper.decodeRedisData(await this._raw('lindex', this._key, index));
    }

    async updateAt(index, data) {
        return RedisHelper.decodeRedisData(await this._raw('lset', this._key, index, RedisHelper.encodeRedisData(data)));
    }

    async getAll(start = 0, length = -1){
        return RedisHelper.decodeArrayOfRedisData(await this._raw('lrange', this._key, start, length));
    }

    async splice(start, length = -1){
        return RedisHelper.decodeArrayOfRedisData(await this._raw('ltrim', this._key, start, length));
    }

    async length(){
        return this._raw('llen', this._key);
    }

    async remove(what, count = 0){
        return this._raw('lrem', this._key, count, what);
    }

    async getLast(){
        const length = await this.length();
        if(!length) return;
        return this.getAt(length - 1);
    }
}
