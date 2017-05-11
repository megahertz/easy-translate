/**
 * Plural rules for the dsb  language
 *
 * This plural file is generated from CLDR-DATA
 * (http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html)
 * using js-simple-plurals and universal-i18n
 *
 * @param {number} p
 * @return {number} 0 - one, 1 - two, 2 - few, 3 - other
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
module.exports = function (p) { var n = Math.abs(p)||0, i = Math.floor(n,10)||0, v = ((p+'').split('.')[1]||'').length, f = Math.floor((p+'').split('.')[1],10)||0, i100 = i % 100, f100 = f % 100; return v === 0 && i100 === 1 || f100 === 1 ? 0 : v === 0 && i100 === 2 || f100 === 2 ? 1 : v === 0 && (i100 >= 3 && i100 <= 4) || (f100 >= 3 && f100 <= 4) ? 2 : 3; };