const RedisHelper = require('../utils/redisHelper');
const RedisBaseKey = require('./redisBaseKey');

module.exports = class RedisSet extends RedisBaseKey{

    async add(data){
        this._beforeAction();
        return !!await this._raw('sadd', this._key, RedisHelper.encodeRedisData(data));
    }

    async remove(data){
        this._beforeAction();
        return !!await this._raw('srem', this._key, RedisHelper.encodeRedisData(data));
    }

    async exists(data){
        this._beforeAction();
        return !!await this._raw('sismember', this._key, RedisHelper.encodeRedisData(data));
    }

    async size(){
        this._beforeAction();
        return this._raw('scard', this._key);
    }

    async getAll(){
        this._beforeAction();
        return RedisHelper.decodeArrayOfRedisData(await this._raw('smembers', this._key));
    }

    async getRands(count = 1){
        this._beforeAction();
        return RedisHelper.decodeArrayOfRedisData(await this._raw('srandmember', this._key, count));
    }

    async popRand(){
        this._beforeAction();
        return RedisHelper.decodeRedisData(await this._raw('spop', this._key));
    }
}
