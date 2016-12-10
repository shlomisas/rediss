# Simple Object

Wrap [Redis Strings](https://redis.io/commands#string)

_Implements most used Redis commands, rest commands will implement during time or upon request_

**Example**

```javascript
let redisObj = new RedisObj('mykey');

await redisObj.set('str1');

let data = await redisObj.get('mykey');

console.log(data); 

// Will print 'str1'
```

**Docs**

> constructor(key)

The constructor assign the key for all future operations of this instance 
and we don't need to mention the key again and again

> async set(mixed data):void
    
Set a value into redis object, input data can be any type
Wrap [SET](https://redis.io/commands/set)

> async get():mixed

Will return the data from redis, if what stored is JSONable the data returned will convert back to a JS Object
Wrap [GET](https://redis.io/commands/get)

> async getTTL():mixed

Will return the remaining time to live of of this object
Wrap [GET](https://redis.io/commands/get)
 
> async delete():void

Will delete the object from Redis
Wrap [DEL](https://redis.io/commands/del)