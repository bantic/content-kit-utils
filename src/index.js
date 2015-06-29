import { toArray, sumSparseArray } from './array-utils';
import { textOfNode, unwrapNode, attributesForNode } from './node-utils';
import { mergeWithOptions, merge, inherit } from './object-utils';
import { trim, trimLeft, underscore, sanitizeWhitespace, injectIntoString } from './string-utils';

export {
  toArray,
  sumSparseArray,
  textOfNode,
  unwrapNode,
  attributesForNode,
  mergeWithOptions,
  merge,
  inherit,
  trim,
  trimLeft,
  underscore,
  sanitizeWhitespace,
  injectIntoString
};

// needs a default export to be compatible with
// broccoli-multi-builder
export default {};
