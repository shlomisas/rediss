# Set

Wrap [Redis Set](https://redis.io/commands#set)

---

**Example**

```javascript
let redisSet = new RedisSet('mykey');

await redisSet.add('str1');
await redisSet.add('str2');
await redisSet.add('str3');
await redisSet.add('str4');

await redisSet.remove('str2');

let data = await redisSet.getAll();

console.log(data); 

// Will print ['str1', 'str3', 'str4']
```

---

**Docs**

> constructor(key)

The constructor assign the key for all future operations of this instance 
and we don't need to mention the key again and again

> async delete():void

Will delete the set from Redis

<sub>Wrap [DEL](https://redis.io/commands/del)</sub>

> async add(mixed data):void

Add a record into a Redis set

<sub>Wrap [SADD](https://redis.io/commands/sadd)</sub>

> async remove(mixed data):void

Remove a record from a Redis set

<sub>Wrap [SREM](https://redis.io/commands/srem)</sub>

> async exists(mixed data):bool

Check if data is exists in a Redis set

<sub>Wrap [SISMEMBER](https://redis.io/commands/sismember)</sub>

> async size():void

Get a Redis set size (length)

<sub>Wrap [SCARD](https://redis.io/commands/scard)</sub>

> async getAll():void

Get all records from a Redis set

<sub>Wrap [SMEMBERS](https://redis.io/commands/smembers)</sub>

> async getRands(count):void

Get random `count` records form a Redis set

<sub>Wrap [SRANDMEMBER](https://redis.io/commands/srandmember)</sub>

> async popRand(count):void

POP random record form a Redis set

<sub>Wrap [SPOP](https://redis.io/commands/spop)</sub>
