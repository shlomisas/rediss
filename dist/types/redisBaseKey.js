'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redisBase = require('./redisBase');

var _redisBase2 = _interopRequireDefault(_redisBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by Shlomi
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

class RedisBaseKey extends _redisBase2.default {

    constructor(key, options = {}) {
        super(options.client);
        this._key = key;
    }

    // Redis actions
    expire(ttl) {
        var _this = this;

        return _asyncToGenerator(function* () {
            if (ttl <= 0) throw new Error('Invalid TTL value');
            _this._beforeAction();
            return !!(yield _this._raw('expire', _this._key, ttl));
        })();
    }

    persist() {
        var _this2 = this;

        return _asyncToGenerator(function* () {
            _this2._beforeAction();
            return !!(yield _this2._raw('persist', _this2._key));
        })();
    }

    ttl() {
        var _this3 = this;

        return _asyncToGenerator(function* () {
            _this3._beforeAction();
            return _this3._raw('ttl', _this3._key);
        })();
    }

    delete() {
        var _this4 = this;

        return _asyncToGenerator(function* () {
            _this4._beforeAction();
            return !!(yield _this4._raw('del', _this4._key));
        })();
    }
}
exports.default = RedisBaseKey;
module.exports = exports['default'];
//# sourceMappingURL=redisBaseKey.js.map
