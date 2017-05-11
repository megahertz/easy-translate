/**
 * Plural rules for the tl (Tagalog, Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔) language
 *
 * This plural file is generated from CLDR-DATA
 * (http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html)
 * using js-simple-plurals and universal-i18n
 *
 * @param {number} p
 * @return {number} 0 - one, 1 - other
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
module.exports = function (p) { var n = Math.abs(p)||0, i = Math.floor(n,10)||0, v = ((p+'').split('.')[1]||'').length, f = Math.floor((p+'').split('.')[1],10)||0, i10 = i % 10, f10 = f % 10; return v === 0 && i === 1 || i === 2 || i === 3 || v === 0 && i10 !== 4 && i10 !== 6 && i10 !== 9 || v !== 0 && f10 !== 4 && f10 !== 6 && f10 !== 9 ? 0 : 1; };