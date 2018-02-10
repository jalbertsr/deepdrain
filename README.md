# deepdrain
Library for accessing arbitrarily nested, possibly nullable properties on a JavaScript object or array.

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
