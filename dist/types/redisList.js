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

class RedisList extends _redisBaseKey2.default {
    push(data) {
        var _this = this;

        return _asyncToGenerator(function* () {
            return _this._raw('rpush', _this._key, _redisHelper2.default.encodeRedisData(data));
        })();
    }

    unshift(data) {
        var _this2 = this;

        return _asyncToGenerator(function* () {
            return _this2._raw('lpush', _this2._key, _redisHelper2.default.encodeRedisData(data));
        })();
    }

    pop() {
        var _this3 = this;

        return _asyncToGenerator(function* () {
            return _redisHelper2.default.decodeRedisData((yield _this3._raw('rpop', _this3._key)));
        })();
    }

    shift() {
        var _this4 = this;

        return _asyncToGenerator(function* () {
            return _redisHelper2.default.decodeRedisData((yield _this4._raw('lpop', _this4._key)));
        })();
    }

    getAt(index) {
        var _this5 = this;

        return _asyncToGenerator(function* () {
            return _redisHelper2.default.decodeRedisData((yield _this5._raw('lindex', _this5._key, index)));
        })();
    }

    getAll(start = 0, length = -1) {
        var _this6 = this;

        return _asyncToGenerator(function* () {
            return _redisHelper2.default.decodeArrayOfRedisData((yield _this6._raw('lrange', _this6._key, start, length)));
        })();
    }

    length() {
        var _this7 = this;

        return _asyncToGenerator(function* () {
            return _this7._raw('llen', _this7._key);
        })();
    }

    remove(what, count = 0) {
        var _this8 = this;

        return _asyncToGenerator(function* () {
            return _this8._raw('lrem', _this8._key, count, what);
        })();
    }
}
exports.default = RedisList;
module.exports = exports['default'];
//# sourceMappingURL=redisList.js.map
