# deepdrain
`deep` is a utility function for traversing properties on objects and arrays.

If an intermediate property is either null or undefined, it is instead returned.
The purpose of this function is to simplify extracting properties from a chain
of maybe-typed properties.

This module exists as a stop-gap solution because JavaScript does not currently
support [optional chaining](https://github.com/tc39/proposal-optional-chaining).

Simple smaller and faster than [lodash/get](https://lodash.com/docs/4.17.5#get) , facebook's [idx](https://github.com/facebookincubator/idx) and rambda methods. 
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

## Example 

```javascript

const { deep } = require('deepdrain')

const myCat = {
  name: 'garfiled',
  description: {
    city: 'BCN',
    hobby: {
      pasta: 'lasagna',
      sleep: true
    }
  }
}

deep(myCat, 'description.hobby.pasta', 'N/A')
// lasagna

deep(myCat, 'description.age', 5)
// 5

```
