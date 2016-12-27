'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redisHelper = require('../utils/redisHelper');

var _redisHelper2 = _interopRequireDefault(_redisHelper);

var _redisBaseKey = require('./redisBaseKey');

var _redisBaseKey2 = _interopRequireDefault(_redisBaseKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by Shlomi
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

class RedisHash extends _redisBaseKey2.default {
    set(fieldName, data) {
        var _this = this;

        return _asyncToGenerator(function* () {
            _this._beforeAction();

            if (typeof fieldName === 'object') {

                let fields = fieldName;
                let args = [];

                let fieldNames = Object.keys(fields);

                for (let tmpFieldName of fieldNames) {
                    args.push(tmpFieldName);
                    args.push(fields[tmpFieldName]);
                }

                return (yield _this._raw('hmset', _this._key, ...args)) === 'OK';
            } else {
                return !!(yield _this._raw('hset', _this._key, fieldName, _redisHelper2.default.encodeRedisData(data)));
            }
        })();
    }

    get(fieldName) {
        var _this2 = this;

        return _asyncToGenerator(function* () {
            _this2._beforeAction();
            return _this2._raw('hget', _this2._key, fieldName);
        })();
    }

    exists(fieldName) {
        var _this3 = this;

        return _asyncToGenerator(function* () {
            _this3._beforeAction();
            return !!(yield _this3._raw('hexists', _this3._key, fieldName));
        })();
    }

    remove(fieldName) {
        var _this4 = this;

        return _asyncToGenerator(function* () {
            _this4._beforeAction();
            return !!(yield _this4._raw('hdel', _this4._key, fieldName));
        })();
    }

    getAll() {
        var _this5 = this;

        return _asyncToGenerator(function* () {
            _this5._beforeAction();
            return _this5._raw('hgetall', _this5._key);
        })();
    }
}
exports.default = RedisHash;
module.exports = exports['default'];
//# sourceMappingURL=redisHash.js.map
