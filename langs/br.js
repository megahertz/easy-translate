/**
 * Plural rules for the br (Breton, brezhoneg) language
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
module.exports = function (p) { var n = Math.abs(p)||0, n10 = n % 10, n100 = n % 100, n1000000 = n % 1000000; return n10 === 1 && n100 !== 11 && n100 !== 71 && n100 !== 91 ? 0 : n10 === 2 && n100 !== 12 && n100 !== 72 && n100 !== 92 ? 1 : (n10 >= 3 && n10 <= 4) || n10 === 9 && !(n100 >= 10 && n100 <= 19) && !(n100 >= 70 && n100 <= 79) && !(n100 >= 90 && n100 <= 99) ? 2 : n !== 0 && n1000000 === 0 ? 3 : 4; };