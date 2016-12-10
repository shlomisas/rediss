# **Developer friendly Redis toolkit**

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] 
<!--[![Coveralls Status][coveralls-image]][coveralls-url] -->
<!--[![OpenCollective Backers][backer-badge]][backer-url] [![OpenCollective Sponsors][sponsor-badge]][sponsor-url] -->

This project gives the ability to use Redis with straight forward data-types objects without remember the native Redis API.

Tested on Redis v2.8.2400

## Install 

`npm i rediss`

## Docs

### **Data types**

_Note: most of types can save mixed JavaScript types, it's means saving some value will fetch it exactly with the same type, 
objects will internally `JSON.stringify` before save and `JSON.parse` after fetch_

* [Simple object](docs/simpleObject.md)
* [Set](docs/set.md)

### **Errors**

**RedisError**

A readonly error that contain the reason something has failed

[downloads-image]: https://img.shields.io/npm/dm/rediss.svg
[npm-url]: https://www.npmjs.com/package/rediss
[npm-image]: https://img.shields.io/npm/v/rediss.svg

[travis-url]: https://travis-ci.org/shlomisas/rediss
[travis-image]: https://img.shields.io/travis/shlomisas/rediss/master.svg