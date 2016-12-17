# **User Friendly Redis Toolkit**

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] 
<!--[![Coveralls Status][coveralls-image]][coveralls-url] -->
<!--[![OpenCollective Backers][backer-badge]][backer-url] [![OpenCollective Sponsors][sponsor-badge]][sponsor-url] -->

Use Redis' commands straight-forward, with no need to remember the complicated Redis API in mind.

## Contribute

Since wrap all Redis commands can take long time, you're welcome to contribute ;)

## Support

Tested on Redis 2.8.2400

## Install 

`npm i rediss -S`

## Docs 

### **Data types**

_Note: objects can save mixed JavaScript data, it's means that when saving a value will fetch exactly as saved - with the same type, 
objects will internally `JSON.stringify` before save and `JSON.parse` after fetch_

* [Redis Base](docs/redisBase.md)
* [Redis Simple object](docs/redisSimpleObject.md)
* [Redis Set](docs/redisSet.md)
* [Redis Hash](docs/redisHash.md)
* [Redis List](docs/redisList.md)
* [Redis PUBSUB](docs/redisPubsub.md)

### **Errors**

**RedisError**

A readonly error that contain the reason something has failed

[downloads-image]: https://img.shields.io/npm/dm/rediss.svg
[npm-url]: https://www.npmjs.com/package/rediss
[npm-image]: https://img.shields.io/npm/v/rediss.svg

[travis-url]: https://travis-ci.org/shlomisas/rediss
[travis-image]: https://img.shields.io/travis/shlomisas/rediss/master.svg