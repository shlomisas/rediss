/**
 * Created by Shlomi
 */

import SimpleObject from './types/redisSimpleObject';
import Set from './types/redisSet';
import Hash from './types/redisHash';
import List from './types/redisList';
import PubSub from './types/redisPubsub';

export const RedisSimpleObject = SimpleObject;
export const RedisSet = Set;
export const RedisHash = Hash;
export const RedisList = List;
export const RedisPubSub = PubSub;