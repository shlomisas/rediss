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

> async set(mixed data):boolean
    
Set a value into redis object, input data can be any type

<sub>Wrap [SET](https://redis.io/commands/set)</sub>

> async get():mixed

Will return the data from redis, if what stored is JSONable the data returned will convert back to a JS Object

<sub>Wrap [GET](https://redis.io/commands/get)</sub>

> async getTTL():mixed

Will return the remaining time to live of of this object

<sub>Wrap [GET](https://redis.io/commands/get)</sub>
