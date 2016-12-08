/**
 * Created by Shlomi
 */

import Redis from 'ioredis';

// Singleton class
export default class RedisClient extends Redis{
    static _instance;

    constructor(){
        if(!RedisClient._instance){
            RedisClient._instance = this;
        }

        return RedisClient._instance;
    }
}