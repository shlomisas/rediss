'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ioredis = require('ioredis');

var _ioredis2 = _interopRequireDefault(_ioredis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Singleton class
class RedisClient extends _ioredis2.default {}
exports.default = RedisClient; /**
                                * Created by Shlomi
                                */

module.exports = exports['default'];
//# sourceMappingURL=redisClient.js.map
