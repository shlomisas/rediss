/**
 * Created by Shlomi
 */

const Redis = require('ioredis');

// Singleton class
module.exports = class RedisClient extends Redis{}
