QUnit.module('string-utils');

var StringUtils = require('string-utils');

test('trim', function() {
  ok (1);
});

test('trimLeft', function() {
  ok (1);
});

test('underscore', function() {
  equal (StringUtils.underscore('one'), 'one');
  equal (StringUtils.underscore('two words'), 'two_words');
  equal (StringUtils.underscore(' trimmed it   '), 'trimmed_it');
  equal (StringUtils.underscore('dashed-word'), 'dashed_word');
  equal (StringUtils.underscore('already_underscored'), 'already_underscored');
});

test('sanitizeWhitespace', function() {
  ok (1);
});

test('injectIntoString', function() {
  ok (1);
});
