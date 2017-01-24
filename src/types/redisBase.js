/**
 * Created by Shlomi
 */

import RedisHelper from '../utils/redisHelper';
import {RedisMissingClientError, RedisInvalidCommandError} from '../errors';

export default class RedisBase{

    _client;

    constructor(client){
        this._client = client || RedisHelper.getGlobalClient();
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
}
