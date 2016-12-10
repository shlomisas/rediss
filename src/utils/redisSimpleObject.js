/**
 * Created by Shlomi
 */

import RedisHelper from '../utils/redisHelper';

import RedisBase from './redisBase';

export default class RedisSimpleObject extends RedisBase{
    async set(data, ttl){
        this.beforeAction();
        data = RedisHelper.encodeRedisData(data);

        let args = [
            this._key,
            data
        ];

        if(ttl > 0){
            args.push('EX');
            args.push(ttl);
        }

        return this._client.set(...args);
    }

    async get(){
        this.beforeAction();
        let data = await this._client.get(this._key);
        return RedisHelper.decodeRedisData(data);
    }

    async delete(){
        this.beforeAction();
        return this._client.del(this._key);
    }
}
