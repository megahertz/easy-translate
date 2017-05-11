# easy-translate
[![Build Status](https://travis-ci.org/megahertz/easy-translate.svg?branch=master)](https://travis-ci.org/megahertz/easy-translate)
[![NPM version](https://badge.fury.io/js/easy-translate.svg)](https://badge.fury.io/js/easy-translate)
[![Dependencies status](https://david-dm.org/megahertz/easy-translate/status.svg)](https://david-dm.org/megahertz/easy-translate)

## Description

A very simple translation library for node.js. It uses the same approach
as Yii 1 and Drupal.

## Installation

Install with [npm](https://npmjs.org/package/easy-translate):

    npm install easy-translate

## Usage

```js
var t       = require('easy-translate');
var package = require('./package.json');

t.language('ru');

console.log(t('Hello!'));
console.log(t('This library can be found at {url}.', {
  url: package.homepage
}));

var count = Object.kesy(package.dependencies).length;
var depText = t('{n} dependency|{n} dependencies', count);
console.log(t('It has {depCount}.', depText);
console.log(t('The current lanugage is {n}.', t.language());
```

### Load translations
// Load built-in plural rules for specified language
var plural = require('easy-translate/langs/ru.js');

```js
t.load({
  language: 'ru',
  translations: {
    '{n} dependency|{n} dependencies': '{n} зависимость|{n} зависимости|{n} зависимостей|{n} зависимостей'
    'Hello!': 'Привет',
    'It has {depCount}.': 'Она содержит {depCount}.',
    'The current lanugage is {n}.': 'Текущий язык - {n}.',
    'This library can be found at {url}.': 'Вы можете найти эту библиотеку на {url}'
  },
  plural: plural
});
```

## License

Licensed under MIT.
