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

        return this.raw('set', ...args);
    }

    async get(){
        this.beforeAction();
        let data = await this.raw('get', this._key);
        return RedisHelper.decodeRedisData(data);
    }

    async getTTL(){
        this.beforeAction();
        return this.raw('ttl', this._key);
    }
}
