'use strict'

var myth = require('myth')
var extend = require('extend-shallow')

exports.name = 'myth'
exports.outputFormat = 'css'

exports.render = function (str, options, locals) {
  return myth(str, extend({}, options, locals))
}
