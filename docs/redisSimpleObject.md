# Simple Object

Wrap [Redis Strings](https://redis.io/commands#string)

_Implements most used Redis commands, rest commands will implement during time or upon request_

---

**Example**

```javascript
let redisObj = new RedisObj('mykey');

await redisObj.set('str1', 30);

let data = await redisObj.get();

console.log(data); 

// Will print 'str1'
```

---

**Docs**

> constructor(key)

The constructor assign the key for all future operations of this instance 
and we don't need to mention the key again and again

> async delete():void

Will delete the object from Redis

<sub>Wrap [DEL](https://redis.io/commands/del)</sub>

> async set(mixed data):void
    
Set a value into redis object, input data can be any type

<sub>Wrap [SET](https://redis.io/commands/set)</sub>

> async get():mixed

Will return the data from redis, if what stored is JSONable the data returned will convert back to a JS Object

<sub>Wrap [GET](https://redis.io/commands/get)</sub>

> async getTTL():mixed

Will return the remaining time to live of of this object

<sub>Wrap [GET](https://redis.io/commands/get)</sub>
