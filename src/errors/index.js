/**
 * Created by Shlomi
 */

import VError from 'verror';

export class BaseError extends VError{}
export class StaticClassError extends BaseError{
    constructor(){
        super('Static class cannot initiate');
    }
}

export class RedisError extends BaseError{}
export class RedisMissingClientError extends RedisError{
    constructor(){
        super('Redis client not found');
    }
}

export class RedisInvalidCommandError extends RedisError{

    _cmd;

    constructor(cmd){
        super('Invalid Redis command');
        this._cmd = cmd;
    }
}

export class RedisInvalidDataError extends RedisError{

    _data;

    constructor(data){
        super('Invalid data for Redis');
        this._data = data;
    }
}