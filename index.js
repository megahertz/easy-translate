'use strict';

var translations = {
  en: {
    plural: function(n) { return Math.floor(Math.abs(n)) === 1 ? 0 : 1; }
  }
};
var currentLang = 'en';

t.default = t;
t.load = load;
t.language = language;
module.exports = t;


function t(message, params) {
  /* jshint -W074 */
  var category = (params && params._category) || 'app';

  translations[currentLang] = translations[currentLang] || {};

  if (
    translations[currentLang][category] &&
    translations[currentLang][category][message])
  {
    message = translations[currentLang][category][message];
  }

  if (undefined === params) {
    return message;
  }

  if (arguments.length > 2) {
    var args = Array.prototype.splice.call(arguments, 1);
    message = applyParams(message, args);
  } else if (typeof params === 'object') {
    message = applyParams(message, params);
  } else if (typeof params === 'number' && message.indexOf('|') > -1) {
    message = applyPluralForm(
      message,
      params,
      translations[currentLang].plural || translations.en.plural
    );
  } else if (arguments.length === 2 && message.indexOf('{0}') > -1) {
    message = applyParams(message, [params]);
  }

  if (message.indexOf('{n}') > -1) {
    message = message.replace('{n}', params);
  }

  return message;
}

function load(data) {
  /* jshint -W074 */
  var language = data.language;
  var category = data.category || 'app';
  var messages = data.translations || [];

  if (!translations[language]) {
    translations[language] = {};
  }

  if (!translations[language][category]) {
    translations[language][category] = {};
  }

  for (var i in messages) {
    if (!messages.hasOwnProperty(i)) {
      continue;
    }

    translations[language][category][i] = messages[i];
  }

  if (data.plural) {
    if (typeof data.plural === 'string') {
      /* jshint -W061*/
      data.plural = eval('data.plural');
    }

    translations[language].plural = data.plural;
  }
}

function language(lang) {
  if (lang) {
    currentLang = lang;
    return;
  }

  return currentLang;
}

function applyParams(message, params) {
  for (var i in params) {
    if (!params.hasOwnProperty(i)) {
      continue;
    }

    message = message.replace(new RegExp('\\{' + i + '\\}', 'g'), params[i]);
  }

  return message;
}

function applyPluralForm(message, number, rules) {
  var chunks = Array.isArray(message) ? message : message.split('|');
  var result = chunks[rules(number)];
  if (undefined === result) {
    result = chunks[0];
  }

  return result;
}
