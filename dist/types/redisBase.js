'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redisHelper = require('../utils/redisHelper');

var _redisHelper2 = _interopRequireDefault(_redisHelper);

var _errors = require('../errors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by Shlomi
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

class RedisBase {

    constructor(client) {
        this._client = client || _redisHelper2.default.getGlobalClient();
    }

    /**
     * @throws RedisMissingClientError
     */
    _beforeAction() {
        if (!this._client) throw new _errors.RedisMissingClientError();
    }

    _raw(cmd) {
        var _this = this,
            _arguments = arguments;

        return _asyncToGenerator(function* () {
            _this._beforeAction();

            if (typeof _this._client[cmd] !== 'function') throw new _errors.RedisInvalidCommandError();

            let args = [..._arguments].splice(1);
            return _this._client[cmd](args);
        })();
    }
}
exports.default = RedisBase;
module.exports = exports['default'];
//# sourceMappingURL=redisBase.js.map
