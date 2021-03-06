/**
 * Plural rules for the hr (Croatian, hrvatski) language
 *
 * This plural file is generated from CLDR-DATA
 * (http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html)
 * using js-simple-plurals and universal-i18n
 *
 * @param {number} p
 * @return {number} 0 - one, 1 - few, 2 - other
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
module.exports = function (p) { var n = Math.abs(p)||0, i = Math.floor(n,10)||0, v = ((p+'').split('.')[1]||'').length, f = Math.floor((p+'').split('.')[1],10)||0, i10 = i % 10, i100 = i % 100, f10 = f % 10, f100 = f % 100; return v === 0 && i10 === 1 && i100 !== 11 || f10 === 1 && f100 !== 11 ? 0 : v === 0 && (i10 >= 2 && i10 <= 4) && !(i100 >= 12 && i100 <= 14) || (f10 >= 2 && f10 <= 4) && !(f100 >= 12 && f100 <= 14) ? 1 : 2; };