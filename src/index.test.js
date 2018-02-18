'use strict'

const expect = require('chai').expect
const deep = require('./index')

describe('should return the value from the given path', function () {
  it('simple object path: "animal.cat"', function () {
    const obj = {
      animal: {
        cat: 'meow',
        dog: 'woof'
      }
    }
    const result = deep(obj, ['animal', 'dog'])
    expect(result).to.equal('woof')
  })
  it('simple array path: "animal.cat[2]"', function () {
    const obj = {
      animal: {
        cat: ['meow', 'miau', 'nya-ong', 'meu'],
        dog: 'woof'
      }
    }
    const result = deep(obj, ['animal', 'cat', '2'])
    expect(result).to.equal('nya-ong')
  })

  it('complex path: "animal.cats[2].name"', function () {
    const obj = {
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
    const result = deep(obj, ['animal', 'cats', '2', 'name'])
    expect(result).to.equal('Muggy')
  })

  it('matrix path: "animal.cats[2][1]"', function () {
    const obj = {
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
    const result = deep(obj, ['animal', 'cats', '3', '1'])
    expect(result).to.equal('meu')
  })

  it('default value in a nonexistent property: "animal.cat.name"', function () {
    const obj = {
      animal: {
        cat: {
          sound: 'miau'
        },
        dog: 'woof'
      }
    }
    const result = deep(obj, ['animal', 'cat', 'name'], 'Ben')
    expect(result).to.equal('Ben')
  })

  it('default value in a null object: "animal.cat.name"', function () {
    const obj = {
      animal: {
        cat: null,
        dog: 'woof'
      }
    }
    const result = deep(obj, ['animal', 'cat', 'name'], 'Ben')
    expect(result).to.equal('Ben')
  })

  it('default value in an undefined object: "animal.cat.name"', function () {
    const obj = {
      animal: {
        dog: 'woof'
      }
    }
    const result = deep(obj, ['animal', 'cat', 'name'], 'Ben')
    expect(result).to.equal('Ben')
  })
})
