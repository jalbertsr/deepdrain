'use strict'

function deep(obj, path, _default) {
  return path
    .reduce(function(acc, path) {
      if (acc) return acc[path] || _default
      else return acc || _default
    }, obj)
}

deep.default = deep
module.exports = deep
