# Pubsub

Wrap [Redis PUBSUB](https://redis.io/commands#pubsub)

_Implements most used Redis commands, rest commands will implement during time or upon request_

---

**Example**

```javascript

let pubClient = new RedisClient();
let subClient = new RedisClient();

let redisPubsub = new RedisPubsub(pubClient, subClient);

redisPubsub.subscribe('channel*');

redisPubsub.onMessage((channel, data, pattern) => {

    // Will print `channel1`
    console.log(channel);
    
    // Will print {a: 1, b: 2, c: 3}
    console.log(data);
    
    // Will print `channel*`
    console.log(pattern);
    
});

redisPubsub.publish('channel1', {a: 1, b: 2, c: 3});

```

---

**Docs**

> constructor(pubClient:object, subClient:object)

`pubClient` and `subClient` are instances of a Redis client that exposed all Redis commands as methods names
I recommend to use [IORedis](https://www.npmjs.com/package/ioredis) because the tests are using it.

> async subscribe(channel:<string|RegExp>):boolean

Subscribe to `channel`
If `channel` is a [global-style](https://en.wikipedia.org/wiki/Glob_(programming)), it'll subscribe to all channels matched this pattern

<sub>Wrap [SUBSCRIBE](https://redis.io/commands/subscribe) and [PSUBSCRIBE](https://redis.io/commands/psubscribe)</sub> 

> async unsubscribe(channel:<string|RegExp>):boolean

Unsubscribe to `channel`. 
If `channel` is a [global-style](https://en.wikipedia.org/wiki/Glob_(programming)), it'll unsubscribe from all channels matched this pattern

<sub>Wrap [UNSUBSCRIBE](https://redis.io/commands/unsubscribe) and [PUNSUBSCRIBE](https://redis.io/commands/punsubscribe)</sub>

> async publish(channel:string):boolean

Publish a message to `channel`

<sub>Wrap [PUBLISH](https://redis.io/commands/publish)

> async onMessage(callback:function):boolean

Listen to messages and get them on `callback`, `callback` signature is:
    
    callback(channel:string, data:mixed, [pattern:string]);
    
* `channel`, the channel where the message broadcast to
* `data`, the message but converted to JavaScript data (JSON to object etc.)
* `pattern`, optional, if the message were broadcast in patterned channel, the pattern name will appear here.