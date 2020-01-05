const RedisHelper = require('../utils/redisHelper');
const { RedisMissingClientError, RedisInvalidCommandError } = require('../errors');

module.exports = class RedisBase{
    constructor(client){
        this._client = client || RedisHelper.getGlobalClient();
    }

    /**
     * @throws RedisMissingClientError
     */
    _beforeAction(){
        if(!this._client) throw new RedisMissingClientError();
    }

    async _raw(cmd, ...args){
        this._beforeAction();

        if(typeof this._client[cmd] !== 'function') throw new RedisInvalidCommandError();

        return this._client[cmd](args);
    }

    setClient(client){
        this._client = client;
        return this;
    }
}
