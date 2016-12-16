/**
 * Created by Shlomi
 */

import {RedisMissingClientError, RedisInvalidCommandError} from '../errors';

export default class RedisBase{

    _client;
    _key;

    constructor(key, options = {}){
        this._key = key;
        this._client = options.client;
    }

    /**
     * @throws RedisMissingClientError
     */
    _beforeAction(){
        if(!this._client) throw new RedisMissingClientError();
    }

    async _raw(cmd){
        this._beforeAction();

        if(typeof this._client[cmd] !== 'function') throw new RedisInvalidCommandError();

        let args = [...arguments].splice(1);
        return this._client[cmd](args);
    }

    // Redis actions
    async expire(ttl){
        this._beforeAction();
        return !!await this._raw('expire', this._key, ttl);
    }

    async ttl(){
        this._beforeAction();
        return this._raw('ttl', this._key);
    }

    async delete(){
        this._beforeAction();
        return !!await this._raw('del', this._key);
    }
}
