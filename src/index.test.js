'use strict'

var expect = require('chai').expect
var deep = require('./index')

describe('should return the value from the given path', function () {
  it('simple object path: "animal.cat"', function () {
    var obj = {
      animal: {
        cat: 'meow',
        dog: 'woof'
      }
    }
    var result = deep(obj, ['animal', 'dog'])
    expect(result).to.equal('woof')
  })
  it('simple array path: "animal.cat[2]"', function () {
    var obj = {
      animal: {
        cat: ['meow', 'miau', 'nya-ong', 'meu'],
        dog: 'woof'
      }
    }
    var result = deep(obj, ['animal', 'cat', '2'])
    expect(result).to.equal('nya-ong')
  })

  it('complex path: "animal.cats[2].name"', function () {
    var obj = {
      animal: {
        cats: [
          {
            name: 'monet',
            sound: 'meow'
          },
          {
            name: 'Ben',
            sound: 'miau'
          },
          {
            name: 'Muggy',
            sound: 'nya-ong'
          },
          {
            name: 'Sasha',
            sound: 'meu'
          }
        ],
        dog: 'woof'
      }
    }
    var result = deep(obj, ['animal', 'cats', '2', 'name'])
    expect(result).to.equal('Muggy')
  })

  it('matrix path: "animal.cats[2][1]"', function () {
    var obj = {
      animal: {
        cats: [
          ['monet', 'meow'],
          ['Ben', 'miau'],
          ['Muggy', 'nya-ong'],
          ['Sasha', 'meu']
        ],
        dog: 'woof'
      }
    }
    var result = deep(obj, ['animal', 'cats', '3', '1'])
    expect(result).to.equal('meu')
  })

  it('default value in a nonexistent property: "animal.cat.name"', function () {
    var obj = {
      animal: {
        cat: {
          sound: 'miau'
        },
        dog: 'woof'
      }
    }
    var result = deep(obj, ['animal', 'cat', 'name'], 'Ben')
    expect(result).to.equal('Ben')
  })

  it('default value in a null object: "animal.cat.name"', function () {
    var obj = {
      animal: {
        cat: null,
        dog: 'woof'
      }
    }
    var result = deep(obj, ['animal', 'cat', 'name'], 'Ben')
    expect(result).to.equal('Ben')
  })

  it('default value in an undefined object: "animal.cat.name"', function () {
    var obj = {
      animal: {
        dog: 'woof'
      }
    }
    var result = deep(obj, ['animal', 'cat', 'name'], 'Ben')
    expect(result).to.equal('Ben')
  })
})
