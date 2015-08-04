'use strict';

var myth = require('myth');

exports.name = 'myth';
exports.inputFormats = ['css', 'myth'];
exports.outputFormat = 'css';

exports.render = function _render(str, options) {
  return myth(str, options);
};
