'use strict'

module.exports = function (obj, path, _default) {
  return path
    .split(/[. | [\]]/)
    .filter(path => path)
    .reduce(function (acc, path) {
      if (acc) return acc[path] || _default
      else return acc || _default
    }, obj)
}
