/**
 * Created by Shlomi
 */

import RedisHelper from '../utils/redisHelper';

import RedisBase from './redisBase';

export default class RedisList extends RedisBase{
    async push(data){
        return !! await this._raw('rpush', this._key, RedisHelper.encodeRedisData(data));
    }

    async unshift(data){
        return !! await this._raw('lpush', this._key, RedisHelper.encodeRedisData(data));
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

    async getAll(start = 0, length = -1){
        return RedisHelper.decodeArrayOfRedisData(await this._raw('lrange', this._key, start, length));
    }

    async length(){
        return this._raw('llen', this._key);
    }
}
