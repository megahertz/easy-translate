/**
 * Plural rules for the ar (Arabic, العربية) language
 *
 * This plural file is generated from CLDR-DATA
 * (http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html)
 * using js-simple-plurals and universal-i18n
 *
 * @param {number} p
 * @return {number} 0 - zero, 1 - one, 2 - two, 3 - few, 4 - many, 5 - other
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
module.exports = function (p) { var n = Math.abs(p)||0, n100 = n % 100; return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : (n100 >= 3 && n100 <= 10) ? 3 : (n100 >= 11 && n100 <= 99) ? 4 : 5; };