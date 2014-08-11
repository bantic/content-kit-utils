QUnit.module('node-utils');

var NodeUtils = require('content-kit-utils/node-utils');

function getObjectSize(obj) {
  var size = 0, key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) { size++; }
  }
  return size;
}

test('createElement', function() {
  ok (1);
});

test('textOfNode', function() {
  ok (1);
});

test('unwrapNode', function() {
  ok (1);
});

test('attributesForNode', function() {
  var el = document.createElement('div');
  el.innerHTML = '<a href="http://google.com/" target="_blank" bool="false" nothing="" something>link</a>';

  var attributes = NodeUtils.attributesForNode(el.firstChild);

  equal (getObjectSize(attributes), 3);
  equal (attributes.href, 'http://google.com/');
  equal (attributes.target, '_blank');
  equal (attributes.bool, 'false');
});
