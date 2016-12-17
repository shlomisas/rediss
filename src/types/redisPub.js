/**
 * Created by Shlomi
 */

import RedisHelper from '../utils/redisHelper';

import RedisBase from './redisBase';

export default class RedisPub extends RedisBase{
    async publish(channel, message){
        return !!await this._raw('publish', channel, RedisHelper.encodeRedisData(message));
    }
}
