/**
 * Created by Shlomi
 */

import RedisBase from './redisBase';

export default class RedisBaseKey extends RedisBase{

    _key;

    constructor(key, options = {}){
        super(options.client);
        this._key = key;
    }

    // Redis actions
    async expire(ttl){
        if(ttl <=0 ) throw new Error('Invalid TTL value');
        this._beforeAction();
        return !!await this._raw('expire', this._key, ttl);
    }

    async persist(){
        this._beforeAction();
        return !!await this._raw('persist', this._key);
    }

    async ttl(){
        this._beforeAction();
        return this._raw('ttl', this._key);
    }

    async delete(keys){
        this._beforeAction();
        if (keys) {
            await this._raw('del', ...keys);
            return true;
        }
        return !!await this._raw('del', this._key);
    }
}
