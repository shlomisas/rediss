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

class RedisSet extends _redisBaseKey2.default {

    add(data) {
        var _this = this;

        return _asyncToGenerator(function* () {
            _this._beforeAction();
            return !!(yield _this._raw('sadd', _this._key, _redisHelper2.default.encodeRedisData(data)));
        })();
    }

    remove(data) {
        var _this2 = this;

        return _asyncToGenerator(function* () {
            _this2._beforeAction();
            return !!(yield _this2._raw('srem', _this2._key, _redisHelper2.default.encodeRedisData(data)));
        })();
    }

    exists(data) {
        var _this3 = this;

        return _asyncToGenerator(function* () {
            _this3._beforeAction();
            return !!(yield _this3._raw('sismember', _this3._key, _redisHelper2.default.encodeRedisData(data)));
        })();
    }

    size() {
        var _this4 = this;

        return _asyncToGenerator(function* () {
            _this4._beforeAction();
            return _this4._raw('scard', _this4._key);
        })();
    }

    getAll() {
        var _this5 = this;

        return _asyncToGenerator(function* () {
            _this5._beforeAction();
            return _redisHelper2.default.decodeArrayOfRedisData((yield _this5._raw('smembers', _this5._key)));
        })();
    }

    getRands(count = 1) {
        var _this6 = this;

        return _asyncToGenerator(function* () {
            _this6._beforeAction();
            return _redisHelper2.default.decodeArrayOfRedisData((yield _this6._raw('srandmember', _this6._key, count)));
        })();
    }

    popRand() {
        var _this7 = this;

        return _asyncToGenerator(function* () {
            _this7._beforeAction();
            return _redisHelper2.default.decodeRedisData((yield _this7._raw('spop', _this7._key)));
        })();
    }
}
exports.default = RedisSet;
module.exports = exports['default'];
//# sourceMappingURL=redisSet.js.map
