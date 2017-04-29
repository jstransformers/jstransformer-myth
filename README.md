# jstransformer-myth

[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-myth.svg)](https://greenkeeper.io/)

[Myth](http://npm.im/myth) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-myth/master.svg)](https://travis-ci.org/jstransformers/jstransformer-myth)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-myth/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-myth)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-myth/master.svg)](http://david-dm.org/jstransformers/jstransformer-myth)
[![NPM version](https://img.shields.io/npm/v/jstransformer-myth.svg)](https://www.npmjs.org/package/jstransformer-myth)

## Installation

    npm install jstransformer-myth

## API

```js
var myth = require('jstransformer')(require('jstransformer-myth'));
var opts = {};

myth.render('pre {\n  margin: calc(50px * 2);\n}', opts).body;
//=> 'pre {\n  margin: 100px;\n}'


var promise = myth.renderFileAsync('./path/to/hello.myth', opts);
promise.then(function(data) {
  console.log(data.body);
  //=> 'pre {\n  margin: 100px;\n}'
});
```

**future.css**

```css
:root {
  --purple: #a6c776;
  --size: 1.2rem;
}

@custom-media --narrow-window screen and (max-width: 30em);

@media (--narrow-window) {
  html {
    font-size: var(--size);
  }
}

a {
  color: var(--purple);
}
```

will be transformed to

```css
@media screen and (max-width: 30em) {
  html {
    font-size: 1.2rem;
  }
}

a {
  color: #a6c776;
}
```

## License

MIT
