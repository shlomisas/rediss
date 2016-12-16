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

data = await redisHash.shift({block: true});

console.log(data);
// Will print 'str5'

data = await redisHash.length();

console.log(data); 
// Will print 4
```

---

**Docs**

> constructor(key)

The constructor assign the key for all future operations of this instance 
and we don't need to mention the key again and again

> async delete():void

Will delete the list from Redis
Wrap [DEL](https://redis.io/commands/del)

> async push(mixed data):void
    
Insert an element into the end of the list
Wrap [RPUSH](https://redis.io/commands/rpush)

> async unshift(mixed data):void
    
Insert an element into the beginning of the list
Wrap [LPUSH](https://redis.io/commands/lpush)

> async pop(object options):void

Pop the last element of the list
Wrap [RPOP](https://redis.io/commands/rpop)

> async shift():void

Pop the first element of the list
Wrap [LPOP](https://redis.io/commands/lpop)

> async getAt(int index):void
    
Returns the element at `index` in the list
Wrap [LINDEX](https://redis.io/commands/lindex)

> async getAll(int start = 0, int length = -1):void
    
Returns `length` number of elements from the `start` point of the list, 
calling the function with the default arguments will return all elements in the list
Wrap [LRANGE](https://redis.io/commands/lrange)

> async length():void
    
Get the length of the list
Wrap [LLEN](https://redis.io/commands/llen)
