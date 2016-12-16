# Base

Wrap [Redis Base](https://redis.io/commands#generic)

_Implements most used Redis commands, rest commands will implement during time or upon request_

---

**Example**

An abstract class that all other types inherit from. 

---

**Docs**

> constructor(key)

The constructor assign the key for all future operations of this instance 
and we don't need to mention the key again and again

> async expire(ttl:number):boolean

Set expiration `ttl` seconds to the key

<sub>Wrap [EXPIRE](https://redis.io/commands/expire)</sub>

> async persist():boolean

Remove the ttl of a key to be persist on Redis

<sub>Wrap [PERSIST](https://redis.io/commands/persist)</sub>

> async ttl():void

Will delete the key

<sub>Wrap [DEL](https://redis.io/commands/del)</sub>


> async delete():void

Will delete the key

<sub>Wrap [DEL](https://redis.io/commands/del)</sub>
