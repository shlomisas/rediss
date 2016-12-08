<a id="top"></a>
# Simple Redis Toolkit (rediss)

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] 
<!--[![Coveralls Status][coveralls-image]][coveralls-url] -->
<!--[![OpenCollective Backers][backer-badge]][backer-url] [![OpenCollective Sponsors][sponsor-badge]][sponsor-url] -->

This project gives the ability to use redis with straight forward data-types without remember the Redis API.

**Motivation:**

```javascript

let redisObj = new RedisObj('mykey');

await redisObj.set({
    a: 5,
    b: 6
});

let data = await redisObj.get('mykey');

console.log(data); 

// Will print '{a: 5, b: 6}'
```

**Data types**

* [Simple object](#simpleobj-dt)
* [Set](#set-dt)

Simple Object {#simpleobj-dt}
df
d f
df ds
fds
 fsd
 f sd
 fds 
 fsd
 f sd
 fds
  fsd
  fds
  f fdsf
  df
  sdf
sdfdfdsfd [top](#top)

[downloads-image]: https://img.shields.io/npm/dm/rediss.svg
[npm-url]: https://www.npmjs.com/package/rediss
[npm-image]: https://img.shields.io/npm/v/rediss.svg

[travis-url]: https://travis-ci.org/shlomisas/rediss
[travis-image]: https://img.shields.io/travis/shlomisas/rediss/master.svg