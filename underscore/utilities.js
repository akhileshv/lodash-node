/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="node" -o ./underscore/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

module.exports = {
  'escape': require('./utilities/escape'),
  'identity': require('./utilities/identity'),
  'mixin': require('./utilities/mixin'),
  'noConflict': require('./utilities/noConflict'),
  'noop': require('./utilities/noop'),
  'now': require('./utilities/now'),
  'random': require('./utilities/random'),
  'result': require('./utilities/result'),
  'template': require('./utilities/template'),
  'templateSettings': require('./utilities/templateSettings'),
  'times': require('./utilities/times'),
  'unescape': require('./utilities/unescape'),
  'uniqueId': require('./utilities/uniqueId')
};
