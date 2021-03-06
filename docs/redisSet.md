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

// Will print ['str1', 'str3', 'str4']
console.log(data); 

```

---

**Docs**

_Inherit more methods from [Redis Base](redisBase.md)_

> async add(mixed data):boolean

Add a record into a Redis set

<sub>Wrap [SADD](https://redis.io/commands/sadd)</sub>

> async remove(mixed data):boolean

Remove a record from a Redis set

<sub>Wrap [SREM](https://redis.io/commands/srem)</sub>

> async exists(mixed data):boolean

Check if data is exists in a Redis set

<sub>Wrap [SISMEMBER](https://redis.io/commands/sismember)</sub>

> async size():int

Get a Redis set size (length)

<sub>Wrap [SCARD](https://redis.io/commands/scard)</sub>

> async getAll():array

Get all records from a Redis set

<sub>Wrap [SMEMBERS](https://redis.io/commands/smembers)</sub>

> async getRands(count):array

Get random `count` records form a Redis set

<sub>Wrap [SRANDMEMBER](https://redis.io/commands/srandmember)</sub>

> async popRand(count):mixed

POP random record form a Redis set

<sub>Wrap [SPOP](https://redis.io/commands/spop)</sub>
