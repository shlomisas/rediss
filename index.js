/**
 * Created by Shlomi
 */

import SimpleObject from './src/types/redisSimpleObject';
import Set from './src/types/redisSet';
import Hash from './src/types/redisHash';
import List from './src/types/redisList';
import PubSub from './src/types/redisPubsub';

export const RedisSimpleObject = SimpleObject;
export const RedisSet = Set;
export const RedisHash = Hash;
export const RedisList = List;
export const RedisPubSub = PubSub;