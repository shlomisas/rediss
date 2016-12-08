# Set

Wrap [Redis Set](https://redis.io/commands#set)

TBD

<!--**Example**-->

<!--```javascript-->
<!--let redisSet = new RedisSet('mykey');-->

<!--await redisSet.add('str1');-->
<!--await redisSet.add('str2');-->
<!--await redisSet.add('str2');-->

<!--let data = await redisSet.getAll('mykey');-->

<!--console.log(data); -->

<!--// Will print ['str1', 'str2']-->
<!--```-->

<!--**Docs**-->

<!--> constructor(key)-->

<!--The constructor assign the key for all future operations of this instance -->
<!--and we don't need to mention the key again and again-->

<!--> async add(mixed data):void-->

<!--Set a value into redis object, input data can be any type-->