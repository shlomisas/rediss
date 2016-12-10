/**
 * Created by Shlomi
 */

import RedisHelper from '../utils/redisHelper';

import RedisBase from './redisBase';

export default class RedisHash extends RedisBase{
    async set(fieldName, data){
        this.beforeAction();

        if(typeof fieldName === 'object'){

            let fields = fieldName;
            let args = [];

            let fieldNames = Object.keys(fields);

            for(let tmpFieldName of fieldNames){
                args.push(tmpFieldName);
                args.push(fields[tmpFieldName]);
            }

            return this.raw('hmset', this._key, ...args);

        }else{
            return this.raw('hset', this._key, fieldName, RedisHelper.encodeRedisData(data));
        }
    }

    async get(fieldName){
        this.beforeAction();
        return this.raw('hget', this._key, fieldName);
    }

    async exists(fieldName){
        this.beforeAction();
        return !!await this.raw('hexists', this._key, fieldName);
    }

    async remove(fieldName){
        this.beforeAction();
        return this.raw('hdel', this._key, fieldName);
    }

    async getAll(){
        this.beforeAction();

        return this.raw('hgetall', this._key);
    }
}
