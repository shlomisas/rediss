/**
 * Created by Shlomi
 */

import RedisPub from './redisPub';
import RedisSub from './redisSub';

export default class RedisPubSub{

    _redisPub;
    _redisSub;

    constructor(pubClient, subClient){
        if(pubClient){
            this._redisPub = new RedisPub(pubClient);
        }

        if(subClient){
            this._redisSub = new RedisSub(subClient);
        }
    }

    async subscribe(){
        return this._redisSub.subscribe(...arguments);
    }

    async unsubscribe(){
        return this._redisSub.unsubscribe(...arguments);
    }

    async onMessage(){
        return this._redisSub.onMessage(...arguments);
    }

    async publish(){
        return this._redisPub.publish(...arguments);
    }

}
