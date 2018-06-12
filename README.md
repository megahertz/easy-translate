# easy-translate
[![Build Status](https://travis-ci.org/megahertz/easy-translate.svg?branch=master)](https://travis-ci.org/megahertz/easy-translate)
[![NPM version](https://badge.fury.io/js/easy-translate.svg)](https://badge.fury.io/js/easy-translate)
[![Dependencies status](https://david-dm.org/megahertz/easy-translate/status.svg)](https://david-dm.org/megahertz/easy-translate)

## Description

A very simple translation library in commonjs format. It uses almost
the same approach as Yii 1 and Drupal. Can be used in node.js as well
as in a browser.

## Installation

Install with [npm](https://npmjs.org/package/easy-translate):

    npm install easy-translate

## Usage

```js
var t       = require('easy-translate');
var package = require('./package.json');

t.language('ru');

console.log(t('Hello!'));
// → Привет

console.log(t('It\'s {0} v{1}', package.name, package.version));
// → Это easy-translate v1.0.0

console.log(t('This library can be found at {url}.', {
  url: package.homepage
}));
// → Вы можете найти эту библиотеку по адресу https://github.com/mega…

var count = Object.keys(package.dependencies).length;
console.log(t('It has {0} {0|dependency|dependencies}.', count));
// → Она содержит 0 зависимостей

console.log(t('The current language is {0}.', t.language()));
// Текущий язык - ru
```

### Load translations
```js
// Load built-in plural rules for specified language
var plural = require('easy-translate/langs/ru.js');

t.load({
  language: 'ru',
  translations: {
    'Hello!': 'Привет',
    'It has {0} {0|dependency|dependencies}.': 'Она содержит {0} {0|зависимость|зависимости|зависимостей}.',
    'It\'s {0} v{1}': 'Это {0} v{1}',
    'The current language is {0}.': 'Текущий язык - {0}.',
    'This library can be found at {url}.': 'Вы можете найти эту библиотеку по адресу {url}'
  },
  plural: plural
});
```

### Methods

#### t(message: string, params?: any, ...otherParams?: any[]): string
Translate a string

**params** can be:

 - a string, number (template {0} or {n} or {s})
 - an array (templates {0}, {1}, …)
 - an object (templates {user}, {id}, …), also it has special values:
     - _lang: use this language instead of the current
     - _category: by default, all strings a loaded from category app

**otherParams** is used for positional templates {0}, {1}, …

#### t.load(languageData: LanguageData)
Loads translations

**languageData** is object:

 - language: string
 - category: string, "app" by default
 - translations: object similar to { 'Hello': 'Привет', … }
 - plural: function with plural rules for specified language. This
    library already contains plural rules for 200 languages. See
    [langs](langs) folder.

#### t.language(): string
Get the current language

#### t.language(language: string)
Set the current language

### Template language

`t('test')` Just returns a translation

`t('hi {user}', { 'user': 'Mike' })` Replace '{user}' by 'Mike'

`t('It\'s {0} v{1}', name, version)` Replace '{0}' by the first
  argument, {1} by the second

`t('{0|dog|dogs}', 2)` Choose plural form corresponding to params and
a plural rule for the language.

`t('{n}', 1)` `t('{s}', 1)` - Aliases for {0}

## License

Licensed under MIT.
