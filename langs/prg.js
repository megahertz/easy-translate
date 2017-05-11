/**
 * Plural rules for the prg  language
 *
 * This plural file is generated from CLDR-DATA
 * (http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html)
 * using js-simple-plurals and universal-i18n
 *
 * @param {number} p
 * @return {number} 0 - zero, 1 - one, 2 - other
 *
 * @example
 * var plural = require('js-simple-plural/plurals/en');
 * function pluralize_en(number, one, many) {
 *     var rules = [one, many];
 *     var position = plural(number)
 *     return rules[position];
 * }
 *
 * console.log('2 ' + pluralize_en(2, 'day', 'days')); // prints '2 days'
 */
module.exports = function (p) { var n = Math.abs(p)||0, v = ((p+'').split('.')[1]||'').length, f = Math.floor((p+'').split('.')[1],10)||0, n10 = n % 10, n100 = n % 100, f100 = f % 100, f10 = f % 10; return n10 === 0 || (n100 >= 11 && n100 <= 19) || v === 2 && (f100 >= 11 && f100 <= 19) ? 0 : n10 === 1 && n100 !== 11 || v === 2 && f10 === 1 && f100 !== 11 || v !== 2 && f10 === 1 ? 1 : 2; };