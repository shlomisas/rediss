'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RedisPubSub = exports.RedisList = exports.RedisHash = exports.RedisSet = exports.RedisSimpleObject = undefined;

var _redisHelper = require('./utils/redisHelper');

var _redisHelper2 = _interopRequireDefault(_redisHelper);

var _redisSimpleObject = require('./types/redisSimpleObject');

var _redisSimpleObject2 = _interopRequireDefault(_redisSimpleObject);

var _redisSet = require('./types/redisSet');

var _redisSet2 = _interopRequireDefault(_redisSet);

var _redisHash = require('./types/redisHash');

var _redisHash2 = _interopRequireDefault(_redisHash);

var _redisList = require('./types/redisList');

var _redisList2 = _interopRequireDefault(_redisList);

var _redisPubsub = require('./types/redisPubsub');

var _redisPubsub2 = _interopRequireDefault(_redisPubsub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Shlomi
 */

const RedisSimpleObject = exports.RedisSimpleObject = _redisSimpleObject2.default;
const RedisSet = exports.RedisSet = _redisSet2.default;
const RedisHash = exports.RedisHash = _redisHash2.default;
const RedisList = exports.RedisList = _redisList2.default;
const RedisPubSub = exports.RedisPubSub = _redisPubsub2.default;

exports.default = {
    setGlobalClient(client) {
        _redisHelper2.default.setGlobalClient(client);
    }
};
//# sourceMappingURL=index.js.map
