'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RedisInvalidDataError = exports.RedisInvalidCommandError = exports.RedisMissingClientError = exports.RedisError = exports.StaticClassError = exports.BaseError = undefined;

var _verror = require('verror');

var _verror2 = _interopRequireDefault(_verror);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BaseError extends _verror2.default {}
exports.BaseError = BaseError; /**
                                * Created by Shlomi
                                */

class StaticClassError extends BaseError {
    constructor() {
        super('Static class cannot initiate');
    }
}

exports.StaticClassError = StaticClassError;
class RedisError extends BaseError {}
exports.RedisError = RedisError;
class RedisMissingClientError extends RedisError {
    constructor() {
        super('Redis client not found');
    }
}

exports.RedisMissingClientError = RedisMissingClientError;
class RedisInvalidCommandError extends RedisError {

    constructor(cmd) {
        super('Invalid Redis command');
        this._cmd = cmd;
    }
}

exports.RedisInvalidCommandError = RedisInvalidCommandError;
class RedisInvalidDataError extends RedisError {

    constructor(data) {
        super('Invalid data for Redis');
        this._data = data;
    }
}
exports.RedisInvalidDataError = RedisInvalidDataError;
//# sourceMappingURL=index.js.map
