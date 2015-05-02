import { sanitizeWhitespace } from './string-utils';
import { toArray } from './array-utils';

/**
 * Returns plain-text of a `Node`
 */
function textOfNode(node) {
  var text = node.textContent || node.innerText;
  return text ? sanitizeWhitespace(text) : '';
}

/**
 * Replaces a `Node` with its children
 */
function unwrapNode(node) {
  if (node.hasChildNodes()) {
    var children = toArray(node.childNodes);
    var len = children.length;
    var parent = node.parentNode, i;
    for (i = 0; i < len; i++) {
      parent.insertBefore(children[i], node);
    }
  }
}

/**
 * Extracts attributes of a `Node` to a hash of key/value pairs
 */
function attributesForNode(node, blacklist) {
  var attrs = node.attributes;
  var len = attrs && attrs.length;
  var i, attr, name, hash;
  
  for (i = 0; i < len; i++) {
    attr = attrs[i];
    name = attr.name;
    if (attr.specified && attr.value) {
      if (blacklist && (name in blacklist)) { continue; }
      hash = hash || {};
      hash[name] = attr.value;
    }
  }
  return hash;
}

export { textOfNode, unwrapNode, attributesForNode };
