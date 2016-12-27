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

class RedisSimpleObject extends _redisBaseKey2.default {
    set(data, ttl) {
        var _this = this;

        return _asyncToGenerator(function* () {
            _this._beforeAction();
            data = _redisHelper2.default.encodeRedisData(data);

            let args = [_this._key, data];

            if (ttl > 0) {
                args.push('EX');
                args.push(ttl);
            }

            return (yield _this._raw('set', ...args)) === 'OK';
        })();
    }

    get() {
        var _this2 = this;

        return _asyncToGenerator(function* () {
            _this2._beforeAction();
            return _redisHelper2.default.decodeRedisData((yield _this2._raw('get', _this2._key)));
        })();
    }
}
exports.default = RedisSimpleObject;
module.exports = exports['default'];
//# sourceMappingURL=redisSimpleObject.js.map
