# Hash

Wrap [Redis Hash](https://redis.io/commands#hash)

_Implements most used Redis commands, rest commands will implement during time or upon request_

**Example**

```javascript
let redisHash = new RedisHash('mykey');

await redisHash.set('field1', 'str1');
await redisHash.set('field2', {a: 5, b: 6});

let data = await redisHash.get('field2');

console.log(data); 

// Will print {a: 5, b: 6}

data = await redisHash.getAll();

console.log(data); 

// Will print {field1: 'str1', field2: {a: 5, b: 6}}
```

**Docs**

> constructor(key)

The constructor assign the key for all future operations of this instance 
and we don't need to mention the key again and again

> async set(string fieldName, mixed data):void
> async set(object {field1: data1, field2: data2}):void (overload)
    
Set a value into one hash field name of multiple fields with multiple data
Wrap [HSET](https://redis.io/commands/hset) and [HMSET](https://redis.io/commands/hmset)

> async get(string fieldName):mixed

Will return an individual hash field value
Wrap [HGET](https://redis.io/commands/hget)

> async exists(string fieldName):bool

Check if field is exist in hash
Wrap [HEXISTS](https://redis.io/commands/hexists)

> async remove(string fieldName):void

Will remove an hash field from Redis
Wrap [HDEL](https://redis.io/commands/hdel)

> async getAll():mixed

Will return hash field value
Wrap [HGETALL](https://redis.io/commands/hgetall)

> async delete():void

Will delete the set from Redis
Wrap [DEL](https://redis.io/commands/del)