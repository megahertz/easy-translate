'use strict';

var expect = require('chai').expect;
var t      = require('./index');
var ru     = require('./langs/ru');

t.load({
  language: 'ru',
  translations: {
    '{n} ball|{n} balls': '{n} мяч|{n} мяча|{n} мячей|{n} мячей',
    'hi {user}': 'привет {user}',
    'test': 'тест',
    'usage of {0} {1}': 'использование {0} {1}'
  },
  plural: ru
});

t.load({
  language: 'ru',
  category: 'second',
  translations: {
    'test': 'Тест'
  }
});

t.language('ru');

describe('easy-translate', function() {
  it('should translate a simple string', function() {
    expect(t('test')).to.equals('тест');
  });

  it('should return the same string if no translation', function() {
    expect(t('not exists')).to.equals('not exists');
  });

  it('should replace placeholders', function() {
    expect(t('hi {user}', { 'user': 'Mike' })).to.equals('привет Mike');
  });

  it('should use plurals', function() {
    expect(t('{n} ball|{n} balls', 1)).to.equals('1 мяч');
    expect(t('{n} ball|{n} balls', 2)).to.equals('2 мяча');
    expect(t('{n} ball|{n} balls', 5)).to.equals('5 мячей');
  });

  it('should replace a {n} placeholder', function() {
    expect(t('a {n}', 'ball')).to.equals('a ball');
    expect(t('number {n}', 3)).to.equals('number 3');
  });

  it('should use another category', function() {
    expect(t('test', { _category: 'second' })).to.equals('Тест');
  });

  it('should replace positional placeholders', function() {
    expect(t('usage of {0} {1}', 'position', 'placeholders'))
      .to.equals('использование position placeholders');

    expect(t('get {0}', 'value')).to.equal('get value');
  });
});
