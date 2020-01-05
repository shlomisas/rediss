const RedisBase = require('./redisBase');

module.exports = class RedisBaseKey extends RedisBase {

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

    async exists(){
        this._beforeAction();
        return !!await this._raw('exists', this._key);
    }
}
