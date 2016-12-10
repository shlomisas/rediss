/**
 * Created by Shlomi
 */

import RedisHelper from '../utils/redisHelper';

import RedisBase from './redisBase';

export default class RedisSet extends RedisBase{

    async add(data){
        this.beforeAction();

        return this.raw('sadd', this._key, RedisHelper.encodeRedisData(data));
    }

    async remove(data){
        this.beforeAction();
        return this.raw('srem', this._key, RedisHelper.encodeRedisData(data));
    }

    async exists(data){
        this.beforeAction();
        return !!await this.raw('sismember', this._key, RedisHelper.encodeRedisData(data));
    }

    async size(){
        this.beforeAction();
        return this.raw('scard', this._key);
    }

    async getAll(){
        this.beforeAction();

        let data = await this.raw('smembers', this._key);
        return RedisHelper.decodeArrayOfRedisData(data);
    }

    async getRands(count = 1){
        this.beforeAction();

        let data = await this.raw('srandmember', this._key, count);
        return RedisHelper.decodeArrayOfRedisData(data);
    }

    async popRand(){
        this.beforeAction();

        let data = await this.raw('spop', this._key);
        return RedisHelper.decodeRedisData(data);
    }
}
