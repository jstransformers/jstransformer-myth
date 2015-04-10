/**
 * jstransformer-myth <https://github.com/jstransformers/jstransformer-myth>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var fs = require('fs');
var test = require('assertit');
var transformer = require('jstransformer');
var transform = transformer(require('../index'));

test('should transform legacy css to css (.render)', function(done) {
  var actual = transform.render('body {\n  font-size: 12px;\n}');
  var expected = 'body {\n  font-size: 12px;\n}';

  test.equal(actual.body, expected);
  done();
});

test('should support variables (.render)', function(done) {
  var actual = transform.render(':root {\n  --purple: #e3fd5a;\n}\nbody {\n  color: var(--purple);\n}');
  var expected = 'body {\n  color: #e3fd5a;\n}';

  test.equal(actual.body, expected);
  done();
});

test('should support calc (.render)', function(done) {
  var actual = transform.render('pre {\n  margin: calc(50px * 2);\n}');
  var expected = 'pre {\n  margin: 100px;\n}';

  test.equal(actual.body, 'pre {\n  margin: 100px;\n}');
  done();
});

test('should render from a given filepath, synchronously', function(done) {
  var actual = transform.renderFile('./test/fixture.css');
  var expected = fs.readFileSync('./test/expected.css', 'utf8');

  test.equal(actual.body, expected);
  done();
});

test('should render myth file asynchronously (promise)', function(done) {
  var promise = transform.renderFileAsync('./test/fixture.css');
  var expected = fs.readFileSync('./test/expected.css', 'utf8');

  promise.then(function(actual) {
    test.equal(actual.body, expected);
    done();
  });
});
