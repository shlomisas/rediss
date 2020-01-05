# **User Friendly Redis Toolkit**

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] ![node](https://img.shields.io/node/v/rediss.svg)
<!--[![Coveralls Status][coveralls-image]][coveralls-url] -->
<!--[![OpenCollective Backers][backer-badge]][backer-url] [![OpenCollective Sponsors][sponsor-badge]][sponsor-url] -->

Use Redis' commands straight-forward, with no need to remember the complicated Redis API in mind.

## Motivation

```javascript
let redisList = new RedisList('mykey');

let index = await redisList.push('str1');
let data = await redisList.pop();

console.log(index); // Will print 0
console.log(data); // Will print 'str1'

```

## Contribute

Since wrap all Redis commands can take long time, you're welcome to contribute ;)

## Support
* Node > 10
* Tested on Redis 2.8.2400

## Install

`npm i rediss -S`

## Docs

### **Data types**

_Note: objects can save mixed JavaScript data, it's means that when saving a value will fetch exactly as saved - with the same type,
objects will internally `JSON.stringify` before save and `JSON.parse` after fetch_

* [Redis Base](docs/redisBase.md) (abstract)
* [Redis Simple object](docs/redisSimpleObject.md) inherit Redis Base
* [Redis Set](docs/redisSet.md) inherit Redis Base
* [Redis Hash](docs/redisHash.md) inherit Redis Base
* [Redis List](docs/redisList.md) inherit Redis Base
* [Redis PUBSUB](docs/redisPubsub.md)

### **Errors**

**RedisError**

A readonly error that contain the reason something has failed

[downloads-image]: https://img.shields.io/npm/dm/rediss.svg
[npm-url]: https://www.npmjs.com/package/rediss
[npm-image]: https://img.shields.io/npm/v/rediss.svg

[travis-url]: https://travis-ci.org/shlomisas/rediss
[travis-image]: https://img.shields.io/travis/shlomisas/rediss/master.svg
