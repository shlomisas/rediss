'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redisHelper = require('../utils/redisHelper');

var _redisHelper2 = _interopRequireDefault(_redisHelper);

var _redisBase = require('./redisBase');

var _redisBase2 = _interopRequireDefault(_redisBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by Shlomi
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

class RedisSub extends _redisBase2.default {

    subscribe(channel) {
        var _this = this;

        return _asyncToGenerator(function* () {
            let cmd = _redisHelper2.default.isGlobString(channel) ? 'psubscribe' : 'subscribe';
            return !!(yield _this._raw(cmd, channel));
        })();
    }

    unsubscribe(channel) {
        var _this2 = this;

        return _asyncToGenerator(function* () {
            let cmd = _redisHelper2.default.isGlobString(channel) ? 'punsubscribe' : 'unsubscribe';
            return !!(yield _this2._raw(cmd, channel));
        })();
    }

    onMessage(callback) {
        this._client.on('message', (channel, message) => {
            callback(channel, _redisHelper2.default.decodeRedisData(message));
        });

        this._client.on('pmessage', (pattern, channel, message) => {
            callback(channel, _redisHelper2.default.decodeRedisData(message), pattern);
        });
    }
}
exports.default = RedisSub;
module.exports = exports['default'];
//# sourceMappingURL=redisSub.js.map
