var RegExpTrim        = /^\s+|\s+$/g;
var RegExpTrimLeft    = /^\s+/;
var RegExpWSChars     = /(\r\n|\n|\r|\t)/gm;
var RegExpMultiWS     = /\s+/g;
var RegExpNonAlphaNum = /[^a-zA-Z\d]/g;

/**
 * String.prototype.trim polyfill
 * Removes whitespace at beginning and end of string
 */
function trim(string) {
  return string ? (string + '').replace(RegExpTrim, '') : '';
}

/**
 * String.prototype.trimLeft polyfill
 * Removes whitespace at beginning of string
 */
function trimLeft(string) {
  return string ? (string + '').replace(RegExpTrimLeft, '') : '';
}

/**
 * Replaces non-alphanumeric chars with underscores
 */
function underscore(string) {
  return string ? trim(string + '').replace(RegExpNonAlphaNum, '_') : '';
}

/**
 * Cleans line breaks, tabs, then multiple occuring whitespaces.
 */
function sanitizeWhitespace(string) {
  return string ? (string + '').replace(RegExpWSChars, '').replace(RegExpMultiWS, ' ') : '';
}

/**
 * Injects a string into another string at the index specified
 */
function injectIntoString(string, injection, index) {
  return string.substr(0, index) + injection + string.substr(index);
}

export { trim, trimLeft, underscore, sanitizeWhitespace, injectIntoString };
