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
  var lang     = (params && params._lang)     || currentLang;

  translations[lang] = translations[lang] || {};

  if (
    translations[lang][category] &&
    translations[lang][category][message])
  {
    message = translations[lang][category][message];
  }

  if (params === undefined) {
    return message;
  }

  if (arguments.length > 2) {
    params = Array.prototype.splice.call(arguments, 1);
  }

  return message.replace(/{([^}]+)}/g, template(lang, params));
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

function template(lang, params) {
  return function matcher(match, body) {
    var value = resolveVariable(body, params);
    if (value !== undefined) {
      return value;
    }

    // {n|dog|dogs}
    if (body.indexOf('|') > -1) {
      var chunks = body.split('|');
      var variable = chunks.shift();
      var pluralRule = translations[lang].plural || translations.en.plural;
      var number = resolveVariable(variable, params) || 0;
      return chunks[pluralRule(number) || 0];
    }

    // If no mappings return the source substring
    return '{' + body + '}';
  };
}

function resolveVariable(variableName, params) {
  // {0} when param is not an array
  if (variableName === '0' && !isArray(params)) {
    return params;
  }

  // {0} {1} {var_name}
  if (params[variableName] !== undefined) {
    return params[variableName];
  }

  // {s} {n}
  if (variableName === 's' || variableName === 'n') {
    return params;
  }
}

function isArray(r) {
  return Object.prototype.toString.call(r) === '[object Array]';
}
