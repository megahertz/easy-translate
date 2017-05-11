/**
 * Plural rules for the gv (Manx, Gaelg, Gailck) language
 *
 * This plural file is generated from CLDR-DATA
 * (http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html)
 * using js-simple-plurals and universal-i18n
 *
 * @param {number} p
 * @return {number} 0 - one, 1 - two, 2 - few, 3 - many, 4 - other
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
module.exports = function (p) { var n = Math.abs(p)||0, i = Math.floor(n,10)||0, v = ((p+'').split('.')[1]||'').length, i10 = i % 10, i100 = i % 100; return v === 0 && i10 === 1 ? 0 : v === 0 && i10 === 2 ? 1 : v === 0 && i100 === 0 || i100 === 20 || i100 === 40 || i100 === 60 || i100 === 80 ? 2 : v !== 0 ? 3 : 4; };