/**
 * Created by Shlomi
 */

import {StaticClassError, RedisInvalidDataError} from '../errors';

export default class RedisHelper{
    constructor(){
        throw new StaticClassError();
    }

    /**
     *
     * @param data {String|Number|Object|Boolean}
     * @return String
     */
    static encodeRedisData(data){

        if(typeof data === 'string') return data;
        if(typeof data === 'number') return String(data);
        if(typeof data === 'boolean') return String(data);
        if(typeof data === 'object' && data !== null){
            try{
                return JSON.stringify(data);
            }catch(e){
                // no-op
            }
        }

        throw new RedisInvalidDataError(data);
    }

    /**
     * @param data String
     * @return {String|Number|Object|Boolean}
     */
    static decodeRedisData(data){

        if(data === null) return data;
        if(typeof data === 'string' && data.trim() === "") return data;

        if(!isNaN(data)) return Number(data);
        if(data === 'true' || data === 'false') return data === 'true';

        try{
            return JSON.parse(data);
        }catch(e){
            // no-op
        }

        return data;

    }

    /**
     * Decode array elements with RedisHelper.decodeRedisData
     * @param data Array
     * @return {Array}
     */
    static decodeArrayOfRedisData(data){

        if(!data || !data.length) return;

        let newData = [];

        for(let piece of data){
            newData.push(RedisHelper.decodeRedisData(piece));
        }

        return newData;
    }

    static isGlobString(str){
        return str && (str.includes('*') ||
            str.includes('?') ||
            (str.includes('[') && str.includes(']')))
    }
}
