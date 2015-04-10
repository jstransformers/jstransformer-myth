/**
 * jstransformer-myth <https://github.com/jstransformers/jstransformer-myth>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var myth = require('myth');

exports.name = 'myth';
exports.outputFormat = 'css';

exports.render = function _render(str, options) {
  return myth(str, options);
};
