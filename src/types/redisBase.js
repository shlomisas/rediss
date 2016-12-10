/**
 * Created by Shlomi
 */

import {RedisMissingClientError} from '../errors';

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
}
