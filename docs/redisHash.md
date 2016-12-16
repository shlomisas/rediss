# Hash

Wrap [Redis Hash](https://redis.io/commands#hash)

_Implements most used Redis commands, rest commands will implement during time or upon request_

---

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

---

**Docs**

_Inherit more methods from [Redis Base](redisBase.doc)_

> async set(string fieldName, mixed data):boolean
> async set(object {field1: data1, field2: data2}):boolean (overload)
    
Set a value into one hash field name of multiple fields with multiple data

<sub>Wrap [HSET](https://redis.io/commands/hset) and [HMSET](https://redis.io/commands/hmset)</sub>

> async get(string fieldName):mixed

Will return an individual hash field value

<sub>Wrap [HGET](https://redis.io/commands/hget)</sub>

> async exists(string fieldName):boolean

Check if field is exist in hash

<sub>Wrap [HEXISTS](https://redis.io/commands/hexists)</sub>

> async remove(string fieldName):boolean

Will remove an hash field from Redis

<sub>Wrap [HDEL](https://redis.io/commands/hdel)</sub>

> async getAll():mixed

Will return hash field value

<sub>Wrap [HGETALL](https://redis.io/commands/hgetall)</sub>
