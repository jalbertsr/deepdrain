# deepdrain

[![npm](https://img.shields.io/npm/dt/deepdrain.svg)](https://www.npmjs.com/package/deepdrain)
[![Travis](https://img.shields.io/travis/jalbertsr/deepdrain.svg)](https://travis-ci.org/jalbertsr/deepdrain)
[![npm](https://img.shields.io/npm/v/deepdrain.svg)](https://www.npmjs.com/package/deepdrain)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/badges/shields.svg)](https://github.com/jalbertsr/deepdrain/tree/master)

`deep` is a utility function for traversing properties on objects and arrays.

If an intermediate property is either null or undefined, it is instead returned.
The purpose of this function is to simplify extracting properties from a chain
of maybe-typed properties.

This module exists as a stop-gap solution because JavaScript does not currently
support [optional chaining](https://github.com/tc39/proposal-optional-chaining).

Simpler, smaller and faster than [lodash/get](https://lodash.com/docs/4.17.5#get) , facebook's [idx](https://github.com/facebookincubator/idx) and rambda methods. 
Also f*ck [underscore/propertyOf](http://underscorejs.org/#propertyOf).

## Install

###### npm 
```
npm install deepdrain 
```

###### yarn
```
yarn add deepdrain
```

## Description 

```javascript
deep(obj, path, defaultValue)

obj: Object | Array
path: Array
defaultValue: any
```

## Example 

```javascript

var deep = require('deepdrain')

var obj = {
  animal: {
    cat: ['meow', 'miau', 'nya-ong', 'meu'],
    dog: 'woof'
  }
}

deep(obj, ['animal', 'cat', '2'])
// nya-ong

deep(obj, ['animal', 'age'], 5)
// 5

```
