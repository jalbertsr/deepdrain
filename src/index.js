// @flow

'use strict'

function deep(obj: Object, path: string, _default: any): any {
  return path
    .split(/[. | [\]]/)
    .filter(path => path)
    .reduce(function(acc: Object, path: string) {
      if (acc) return acc[path] || _default
      else return acc || _default
    }, obj)
}

deep.default = deep
module.exports = deep
