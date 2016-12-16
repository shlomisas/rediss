# List

Wrap [Redis List](https://redis.io/commands#list)

_Implements most used Redis commands, rest commands will implement during time or upon request_

---

**Example**

```javascript
let redisList = new RedisList('mykey');

await redisList.push('str1');
await redisList.push({a: 5, b: 6});
await redisList.push('str2');
await redisList.push('str3');
await redisList.push('str4');
await redisList.unshift('str5');

let data = await redisHash.getAt(1);

console.log(data); 
// Will print {a: 5, b: 6}

data = await redisHash.pop();

console.log(data); 
// Will print 'str4'

data = await redisHash.shift();

console.log(data);
// Will print 'str5'

data = await redisHash.length();

console.log(data); 
// Will print 4
```

---

**Docs**

_Inherit more methods from [Redis Base](redisBase.doc)_

> async push(mixed data):boolean
    
Insert an element into the end of the list

<sub>Wrap [RPUSH](https://redis.io/commands/rpush)</sup>

> async unshift(mixed data):boolean
    
Insert an element into the beginning of the list

<sub>Wrap [LPUSH](https://redis.io/commands/lpush)</sub>

> async pop(object options):mixed

Pop the last element of the list

<sub>Wrap [RPOP](https://redis.io/commands/rpop)</sub>

> async shift():mixed

Pop the first element of the list

<sub>Wrap [LPOP](https://redis.io/commands/lpop)</sub>

> async getAt(int index):mixed
    
Returns the element at `index` in the list

<sub>Wrap [LINDEX](https://redis.io/commands/lindex)</sub>

> async getAll(int start = 0, int length = -1):array
    
Returns `length` number of elements from the `start` point of the list, 
calling the function with the default arguments will return all elements in the list

<sub>Wrap [LRANGE](https://redis.io/commands/lrange)</sub>

> async length():int
    
Get the length of the list

<sub>Wrap [LLEN](https://redis.io/commands/llen)</sub>
