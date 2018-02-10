# deepdrain
Library for accessing arbitrarily nested, possibly nullable properties on a JavaScript object or array.

Simple smaller and faster than [lodash/get](https://lodash.com/docs/4.17.5#get) , facebook's [idx](https://github.com/facebookincubator/idx) and rambda methods. 
Also f*ck [underscore/propertyOf](http://underscorejs.org/#propertyOf)

## Install

###### npm 
```
npm install deepdrain 
```

###### yarn
```
yarn install deepdrain
```

## Example 

```javascript

var myCat = {
  name: 'garfiled'
  description: {
    city: 'BCN'
    hobby: {
      pasta: 'lasagna'
      sleep: true
    }
  }
}

var myValue = deep(myObject, 'description.food.pasta', 'N/A')
// lasagna

var myValue = deep(myObject, 'description.age', 5)
// 5

```
