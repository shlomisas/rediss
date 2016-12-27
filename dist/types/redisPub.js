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

class RedisPub extends _redisBase2.default {
    publish(channel, message) {
        var _this = this;

        return _asyncToGenerator(function* () {
            return !!(yield _this._raw('publish', channel, _redisHelper2.default.encodeRedisData(message)));
        })();
    }
}
exports.default = RedisPub;
module.exports = exports['default'];
//# sourceMappingURL=redisPub.js.map
