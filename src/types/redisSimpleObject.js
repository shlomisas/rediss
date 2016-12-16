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

        return (await this._raw('set', ...args)) === 'OK';
    }

    async get(){
        this.beforeAction();
        return RedisHelper.decodeRedisData(await this._raw('get', this._key));
    }

    async getTTL(){
        this.beforeAction();
        return this._raw('ttl', this._key);
    }
}
