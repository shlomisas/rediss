/**
 * Created by Shlomi
 */

import RedisHelper from '../utils/redisHelper';

import RedisBase from './redisBase';

export default class RedisSet extends RedisBase{

    async add(data){
        this.beforeAction();

        return this._client.sadd(this._key, RedisHelper.encodeRedisData(data));
    }

    async remove(data){
        this.beforeAction();
        return this._client.srem(this._key, RedisHelper.encodeRedisData(data));
    }

    async exist(data){
        this.beforeAction();
        return !!await this._client.sismember(this._key, RedisHelper.encodeRedisData(data));
    }

    async size(){
        this.beforeAction();
        return this._client.scard(this._key);
    }

    async getAll(){
        this.beforeAction();

        let data = await this._client.smembers(this._key);
        return RedisHelper.decodeArrayOfRedisData(data);
    }

    async getRands(count = 1){
        this.beforeAction();

        let data = await this._client.srandmember(this._key, count);
        return RedisHelper.decodeArrayOfRedisData(data);
    }

    async popRand(){
        this.beforeAction();

        let data = await this._client.spop(this._key);
        return RedisHelper.decodeRedisData(data);
    }
}
