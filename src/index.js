const RedisHelper = require('./utils/redisHelper');
const SimpleObject = require('./types/redisSimpleObject');
const Set = require('./types/redisSet');
const Hash = require('./types/redisHash');
const List = require('./types/redisList');
const PubSub = require('./types/redisPubsub');

module.exports = {
    setGlobalClient(client){
        RedisHelper.setGlobalClient(client);
    },
    RedisSimpleObject: SimpleObject,
    RedisSet: Set,
    RedisHash: Hash,
    RedisList: List,
    RedisPubSub: PubSub
};
