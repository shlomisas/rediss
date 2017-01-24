# Base

Wrap [Redis Base](https://redis.io/commands#generic)

_Implements most used Redis commands, rest commands will implement during time or upon request_

---

**Example**

An abstract class that all other types inherit from. 

---

**Docs**

> constructor(key:string, options:object)

The constructor assign the key for all future operations of this instance 
and we don't need to mention the key again and again

Options includes:
    
- `client`, an instance of some Redis client that exposed all Redis commands as methods names, e.g. [IORedis](https://www.npmjs.com/package/ioredis)

You cna set a global client to the library to avoid the need to redefine the client for each new instance, here is an example:

```javascript

import RedisClient from 'ioredis';
import rediss, {RedisList} from 'rediss';

rediss.setGlobalClient(new RedisClient());

let list = new RedisList('someKey');

await list.push('bla bla bla');

````

> async expire(ttl:number):boolean

Set expiration `ttl` seconds to the key

<sub>Wrap [EXPIRE](https://redis.io/commands/expire)</sub>

> async persist():boolean

Remove the ttl of a key to be persist on Redis

<sub>Wrap [PERSIST](https://redis.io/commands/persist)</sub>

> async ttl():void

Get the remain time-to-leave of this object

<sub>Wrap [TTL](https://redis.io/commands/ttl)</sub>


> async delete():void

Will delete the key

<sub>Wrap [DEL](https://redis.io/commands/del)</sub>
