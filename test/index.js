/**
 * jstransformer-myth <https://github.com/jstransformers/jstransformer-myth>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var fs = require('fs');
var test = require('testit');
var assert = require('assert');
var transform = require('../index');

test('should transform legacy css to css (.render)', function(done) {
  var actual = transform.render('body {\n  font-size: 12px;\n}');
  var expected = 'body {\n  font-size: 12px;\n}';

  assert.strictEqual(actual, expected);
  done();
});

test('should support variables (.render)', function(done) {
  var actual = transform.render(':root {\n  --purple: #e3fd5a;\n}\nbody {\n  color: var(--purple);\n}');
  var expected = 'body {\n  color: #e3fd5a;\n}';

  assert.strictEqual(actual, expected);
  done();
});

test('should support calc (.render)', function(done) {
  var actual = transform.render('pre {\n  margin: calc(50px * 2);\n}');
  var expected = 'pre {\n  margin: 100px;\n}';

  assert.strictEqual(actual, 'pre {\n  margin: 100px;\n}');
  done();
});

test('should render from a given filepath, synchronously', function(done) {
  var actual = transform.renderFile('./test/fixtures/myth.in.css');
  var expected = fs.readFileSync('./test/fixtures/myth.out.css', 'utf8');

  assert.strictEqual(actual, expected);
  done();
});

test('should render myth file asynchronously (promise)', function(done) {
  var promise = transform.renderFileAsync('./test/fixtures/myth.in.css');
  var expected = fs.readFileSync('./test/fixtures/myth.out.css', 'utf8');

  promise.then(function(actual) {
    assert.strictEqual(actual, expected);
    done();
  });
});
