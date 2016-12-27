'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redisPub = require('./redisPub');

var _redisPub2 = _interopRequireDefault(_redisPub);

var _redisSub = require('./redisSub');

var _redisSub2 = _interopRequireDefault(_redisSub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by Shlomi
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

class RedisPubSub {

    constructor(pubClient, subClient) {
        if (pubClient) {
            this._redisPub = new _redisPub2.default(pubClient);
        }

        if (subClient) {
            this._redisSub = new _redisSub2.default(subClient);
        }
    }

    subscribe() {
        var _this = this,
            _arguments = arguments;

        return _asyncToGenerator(function* () {
            return _this._redisSub.subscribe(..._arguments);
        })();
    }

    unsubscribe() {
        var _this2 = this,
            _arguments2 = arguments;

        return _asyncToGenerator(function* () {
            return _this2._redisSub.unsubscribe(..._arguments2);
        })();
    }

    onMessage() {
        var _this3 = this,
            _arguments3 = arguments;

        return _asyncToGenerator(function* () {
            return _this3._redisSub.onMessage(..._arguments3);
        })();
    }

    publish() {
        var _this4 = this,
            _arguments4 = arguments;

        return _asyncToGenerator(function* () {
            return _this4._redisPub.publish(..._arguments4);
        })();
    }

}
exports.default = RedisPubSub;
module.exports = exports['default'];
//# sourceMappingURL=redisPubsub.js.map
