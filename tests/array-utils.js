QUnit.module('array-utils');

var ArrayUtils = require('content-kit-utils/array-utils');

test('toArray: NodeList', function() {
  var fixtureEl = document.createElement('div');
  document.body.appendChild(fixtureEl);

  for (var i = 0; i < 10; i++) {
    fixtureEl.appendChild(document.createElement('p'));
  }

  var array = ArrayUtils.toArray(fixtureEl.childNodes);

  ok (array);
  ok (array instanceof Array);
  equal (array.length, 10);
});

test('toArray: empty', function() {
  var array = ArrayUtils.toArray();
  ok (array);
  ok (array instanceof Array);
  equal (array.length, 0);

  array = ArrayUtils.toArray(null);
  ok (array);
  ok (array instanceof Array);
  equal (array.length, 0);
});

test('sumSparseArray', function() {
  var array = [];
  array[5] = 10;
  array[500] = 10;
  array[99] = 10;

  equal (ArrayUtils.sumSparseArray(array), 30);
});

test('sumSparseArray: string indexes', function() {
  var array = [];
  array['5'] = 10;
  array['500'] = 10;
  array['99'] = 10;

  equal (ArrayUtils.sumSparseArray(array), 30);
});

test('sumSparseArray: empty', function() {
  equal (ArrayUtils.sumSparseArray(null), 0);
  equal (ArrayUtils.sumSparseArray(), 0);
});
