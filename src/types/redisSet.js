/**
 * Created by Shlomi
 */

import RedisHelper from '../utils/redisHelper';

import RedisBase from './redisBase';

export default class RedisSet extends RedisBase{

    async add(data){
        this.beforeAction();
        return !!await this._raw('sadd', this._key, RedisHelper.encodeRedisData(data));
    }

    async remove(data){
        this.beforeAction();
        return !!await this._raw('srem', this._key, RedisHelper.encodeRedisData(data));
    }

    async exists(data){
        this.beforeAction();
        return !!await this._raw('sismember', this._key, RedisHelper.encodeRedisData(data));
    }

    async size(){
        this.beforeAction();
        return this._raw('scard', this._key);
    }

    async getAll(){
        this.beforeAction();
        return RedisHelper.decodeArrayOfRedisData(await this._raw('smembers', this._key));
    }

    async getRands(count = 1){
        this.beforeAction();
        return RedisHelper.decodeArrayOfRedisData(await this._raw('srandmember', this._key, count));
    }

    async popRand(){
        this.beforeAction();
        return RedisHelper.decodeRedisData(await this._raw('spop', this._key));
    }
}
