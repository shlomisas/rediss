# Simple Object

Wrap [Redis Strings](https://redis.io/commands#string)

_Implements most used Redis commands, rest commands will implement during time or upon request_

---

**Example**

```javascript
let redisObj = new RedisSimpleObject('mykey');

await redisObj.set('str1');

let data = await redisObj.get();

// Will print 'str1'
console.log(data);

```

---

**Docs**

_Inherit more methods from [Redis Base](redisBase.md)_

> async set(mixed data, ttl):boolean

Set a value into redis object, input data can be any type
You can optionally provide TTL in seconds to expire the object when the time comes

<sub>Wrap [SET](https://redis.io/commands/set)</sub>

> async get(array data):mixed

Will return the data from redis, if what stored is JSONable the data returned will convert back to a JS Object

<sub>Wrap [GET](https://redis.io/commands/get)</sub>
<sub>Wrap [GET](https://redis.io/commands/mget)</sub>

> async getTTL():mixed

Will return the remaining time to live of of this object

<sub>Wrap [GET](https://redis.io/commands/get)</sub>

> async exists():boolean

Will return boolean answer if the object exists

<sub>Wrap [GET](https://redis.io/commands/exists)</sub>
