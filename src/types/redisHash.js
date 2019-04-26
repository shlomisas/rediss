const RedisHelper = require('../utils/redisHelper');
const RedisBaseKey = require('./redisBaseKey');

module.exports = class RedisHash extends RedisBaseKey{
    async set(fieldName, data){
        this._beforeAction();

        if(typeof fieldName === 'object'){

            let fields = fieldName;
            let args = [];

            let fieldNames = Object.keys(fields);

            for(let tmpFieldName of fieldNames){
                args.push(tmpFieldName);
                args.push(fields[tmpFieldName]);
            }

            return (await this._raw('hmset', this._key, ...args)) === 'OK';

        }else{
            return !!await this._raw('hset', this._key, fieldName, RedisHelper.encodeRedisData(data));
        }
    }

    async get(fieldName){
        this._beforeAction();
        return RedisHelper.decodeRedisData( await this._raw('hget', this._key, fieldName));
    }

    async exists(fieldName){
        this._beforeAction();
        return !!await this._raw('hexists', this._key, fieldName);
    }

    async remove(fieldName){
        this._beforeAction();
        return !!await this._raw('hdel', this._key, fieldName);
    }

    async getAll(){
        this._beforeAction();
        return this._raw('hgetall', this._key);
    }
}
