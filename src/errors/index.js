const VError = require('verror');

class BaseError extends VError{}
class RedisError extends BaseError{}
class RedisInvalidDataError extends RedisError {

    constructor(data){
        super('Invalid data for Redis');
        this._data = data;
    }
}
class RedisInvalidCommandError extends RedisError {

    constructor(cmd){
        super('Invalid Redis command');
        this._cmd = cmd;
    }
}
class RedisMissingClientError extends RedisError{
    constructor(){
        super('Redis client not found');
    }
}
class StaticClassError extends BaseError{
    constructor(){
        super('Static class cannot initiate');
    }
}
module.exports = {
    RedisInvalidDataError,
    RedisInvalidCommandError,
    RedisMissingClientError,
    RedisError,
    StaticClassError,
    BaseError
}
