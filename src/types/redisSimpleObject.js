/**
 * Created by Shlomi
 */

import RedisHelper from '../utils/redisHelper';

import RedisBaseKey from './redisBaseKey';

export default class RedisSimpleObject extends RedisBaseKey{
    async set(data, ttl){
        this._beforeAction();
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

    async get(keys){
        this._beforeAction();
        if (keys) {
            return RedisHelper.decodeRedisData(await this._raw('mget', ...keys));
        }
        return RedisHelper.decodeRedisData(await this._raw('get', this._key));
    }

    async exists(){
        this._beforeAction();
        return !!await this._raw('exists', this._key);
    }
}
