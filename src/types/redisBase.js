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
    beforeAction(){
        if(!this._client) throw new RedisMissingClientError();
    }

    async delete(){
        this.beforeAction();
        return this._client.del(this._key);
    }

    async _raw(cmd){
        this.beforeAction();

        if(typeof this._client[cmd] !== 'function') throw new RedisInvalidCommandError();

        let args = [...arguments].splice(1);
        return this._client[cmd](args);
    }
}
