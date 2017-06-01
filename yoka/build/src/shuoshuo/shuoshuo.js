/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(178)
	var __weex_template__ = __webpack_require__(182)
	var __weex_style__ = __webpack_require__(183)
	var __weex_script__ = __webpack_require__(184)

	__weex_define__('@weex-component/2c8151d1dc4fb0a8648a8623f5d0a72c', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/2c8151d1dc4fb0a8648a8623f5d0a72c',undefined,undefined)

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(5);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(56);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(6), __esModule: true };

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(7);
	__webpack_require__(51);
	module.exports = __webpack_require__(55).f('iterator');

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(8)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(11)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(9)
	  , defined   = __webpack_require__(10);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(12)
	  , $export        = __webpack_require__(13)
	  , redefine       = __webpack_require__(28)
	  , hide           = __webpack_require__(18)
	  , has            = __webpack_require__(29)
	  , Iterators      = __webpack_require__(30)
	  , $iterCreate    = __webpack_require__(31)
	  , setToStringTag = __webpack_require__(47)
	  , getPrototypeOf = __webpack_require__(49)
	  , ITERATOR       = __webpack_require__(48)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(14)
	  , core      = __webpack_require__(15)
	  , ctx       = __webpack_require__(16)
	  , hide      = __webpack_require__(18)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 14 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 15 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(17);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(19)
	  , createDesc = __webpack_require__(27);
	module.exports = __webpack_require__(23) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(20)
	  , IE8_DOM_DEFINE = __webpack_require__(22)
	  , toPrimitive    = __webpack_require__(26)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(23) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(21);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(23) && !__webpack_require__(24)(function(){
	  return Object.defineProperty(__webpack_require__(25)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(24)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(21)
	  , document = __webpack_require__(14).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(21);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18);

/***/ },
/* 29 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(32)
	  , descriptor     = __webpack_require__(27)
	  , setToStringTag = __webpack_require__(47)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(18)(IteratorPrototype, __webpack_require__(48)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(20)
	  , dPs         = __webpack_require__(33)
	  , enumBugKeys = __webpack_require__(45)
	  , IE_PROTO    = __webpack_require__(42)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(25)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(46).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(19)
	  , anObject = __webpack_require__(20)
	  , getKeys  = __webpack_require__(34);

	module.exports = __webpack_require__(23) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(35)
	  , enumBugKeys = __webpack_require__(45);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(29)
	  , toIObject    = __webpack_require__(36)
	  , arrayIndexOf = __webpack_require__(39)(false)
	  , IE_PROTO     = __webpack_require__(42)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(37)
	  , defined = __webpack_require__(10);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(38);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(36)
	  , toLength  = __webpack_require__(40)
	  , toIndex   = __webpack_require__(41);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(9)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(9)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(43)('keys')
	  , uid    = __webpack_require__(44);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(14)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(14).document && document.documentElement;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(19).f
	  , has = __webpack_require__(29)
	  , TAG = __webpack_require__(48)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(43)('wks')
	  , uid        = __webpack_require__(44)
	  , Symbol     = __webpack_require__(14).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(29)
	  , toObject    = __webpack_require__(50)
	  , IE_PROTO    = __webpack_require__(42)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(10);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(52);
	var global        = __webpack_require__(14)
	  , hide          = __webpack_require__(18)
	  , Iterators     = __webpack_require__(30)
	  , TO_STRING_TAG = __webpack_require__(48)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(53)
	  , step             = __webpack_require__(54)
	  , Iterators        = __webpack_require__(30)
	  , toIObject        = __webpack_require__(36);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(11)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(48);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(57), __esModule: true };

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(58);
	__webpack_require__(69);
	__webpack_require__(70);
	__webpack_require__(71);
	module.exports = __webpack_require__(15).Symbol;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(14)
	  , has            = __webpack_require__(29)
	  , DESCRIPTORS    = __webpack_require__(23)
	  , $export        = __webpack_require__(13)
	  , redefine       = __webpack_require__(28)
	  , META           = __webpack_require__(59).KEY
	  , $fails         = __webpack_require__(24)
	  , shared         = __webpack_require__(43)
	  , setToStringTag = __webpack_require__(47)
	  , uid            = __webpack_require__(44)
	  , wks            = __webpack_require__(48)
	  , wksExt         = __webpack_require__(55)
	  , wksDefine      = __webpack_require__(60)
	  , keyOf          = __webpack_require__(61)
	  , enumKeys       = __webpack_require__(62)
	  , isArray        = __webpack_require__(65)
	  , anObject       = __webpack_require__(20)
	  , toIObject      = __webpack_require__(36)
	  , toPrimitive    = __webpack_require__(26)
	  , createDesc     = __webpack_require__(27)
	  , _create        = __webpack_require__(32)
	  , gOPNExt        = __webpack_require__(66)
	  , $GOPD          = __webpack_require__(68)
	  , $DP            = __webpack_require__(19)
	  , $keys          = __webpack_require__(34)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(67).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(64).f  = $propertyIsEnumerable;
	  __webpack_require__(63).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(12)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(18)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(44)('meta')
	  , isObject = __webpack_require__(21)
	  , has      = __webpack_require__(29)
	  , setDesc  = __webpack_require__(19).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(24)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(14)
	  , core           = __webpack_require__(15)
	  , LIBRARY        = __webpack_require__(12)
	  , wksExt         = __webpack_require__(55)
	  , defineProperty = __webpack_require__(19).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(34)
	  , toIObject = __webpack_require__(36);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(34)
	  , gOPS    = __webpack_require__(63)
	  , pIE     = __webpack_require__(64);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 64 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(38);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(36)
	  , gOPN      = __webpack_require__(67).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(35)
	  , hiddenKeys = __webpack_require__(45).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(64)
	  , createDesc     = __webpack_require__(27)
	  , toIObject      = __webpack_require__(36)
	  , toPrimitive    = __webpack_require__(26)
	  , has            = __webpack_require__(29)
	  , IE8_DOM_DEFINE = __webpack_require__(22)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(23) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 69 */
/***/ function(module, exports) {

	

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(60)('asyncIterator');

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(60)('observable');

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(73);
	__webpack_require__(77);
	__webpack_require__(81);
	__webpack_require__(85);
	__webpack_require__(89);
	__webpack_require__(93);
	__webpack_require__(101);
	__webpack_require__(105);
	__webpack_require__(109);
	__webpack_require__(113);
	__webpack_require__(114);


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(74)
	var __weex_style__ = __webpack_require__(75)
	var __weex_script__ = __webpack_require__(76)

	__weex_define__('@weex-component/wxc-button', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['btn', 'btn-' + (this.type), 'btn-sz-' + (this.size)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['btn-txt', 'btn-txt-' + (this.type), 'btn-txt-sz-' + (this.size)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = {
	  "btn": {
	    "marginBottom": 0,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#333333"
	  },
	  "btn-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "borderColor": "rgb(40,96,144)"
	  },
	  "btn-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "borderColor": "rgb(76,174,76)"
	  },
	  "btn-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "borderColor": "rgb(70,184,218)"
	  },
	  "btn-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "borderColor": "rgb(238,162,54)"
	  },
	  "btn-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "borderColor": "rgb(212,63,58)"
	  },
	  "btn-link": {
	    "borderColor": "rgba(0,0,0,0)",
	    "borderRadius": 0
	  },
	  "btn-txt-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-txt-primary": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-success": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-info": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-warning": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-danger": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-link": {
	    "color": "rgb(51,122,183)"
	  },
	  "btn-sz-large": {
	    "width": 300,
	    "height": 100,
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 40,
	    "paddingRight": 40,
	    "borderRadius": 15
	  },
	  "btn-sz-middle": {
	    "width": 240,
	    "height": 80,
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "borderRadius": 10
	  },
	  "btn-sz-small": {
	    "width": 170,
	    "height": 60,
	    "paddingTop": 12,
	    "paddingBottom": 12,
	    "paddingLeft": 25,
	    "paddingRight": 25,
	    "borderRadius": 7
	  },
	  "btn-txt-sz-large": {
	    "fontSize": 45
	  },
	  "btn-txt-sz-middle": {
	    "fontSize": 35
	  },
	  "btn-txt-sz-small": {
	    "fontSize": 30
	  }
	}

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    type: 'default',
	    size: 'large',
	    value: ''
	  }},
	  methods: {}
	};}
	/* generated by weex-loader */


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(78)
	var __weex_style__ = __webpack_require__(79)
	var __weex_script__ = __webpack_require__(80)

	__weex_define__('@weex-component/wxc-hn', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['h' + (this.level)]},
	  "style": {
	    "justifyContent": "center"
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['txt-h' + (this.level)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = {
	  "h1": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h2": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h3": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "txt-h1": {
	    "fontSize": 70
	  },
	  "txt-h2": {
	    "fontSize": 52
	  },
	  "txt-h3": {
	    "fontSize": 42
	  }
	}

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    level: 1,
	    value: ''
	  }},
	  methods: {}
	};}
	/* generated by weex-loader */


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(82)
	var __weex_style__ = __webpack_require__(83)
	var __weex_script__ = __webpack_require__(84)

	__weex_define__('@weex-component/wxc-list-item', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "item"
	  ],
	  "events": {
	    "touchstart": "touchstart",
	    "touchend": "touchend"
	  },
	  "style": {
	    "backgroundColor": function () {return this.bgColor}
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	}

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = {
	  "item": {
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 35,
	    "paddingRight": 35,
	    "height": 160,
	    "justifyContent": "center",
	    "borderBottomWidth": 1,
	    "borderColor": "#dddddd"
	  }
	}

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    bgColor: '#ffffff'
	  }},
	  methods: {
	    touchstart: function touchstart() {},
	    touchend: function touchend() {}
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(86)
	var __weex_style__ = __webpack_require__(87)
	var __weex_script__ = __webpack_require__(88)

	__weex_define__('@weex-component/wxc-panel', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['panel', 'panel-' + (this.type)]},
	  "style": {
	    "borderWidth": function () {return this.border}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['panel-header', 'panel-header-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingHead},
	        "paddingBottom": function () {return this.paddingHead},
	        "paddingLeft": function () {return this.paddingHead*1.5},
	        "paddingRight": function () {return this.paddingHead*1.5}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    },
	    {
	      "type": "div",
	      "classList": function () {return ['panel-body', 'panel-body-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingBody},
	        "paddingBottom": function () {return this.paddingBody},
	        "paddingLeft": function () {return this.paddingBody*1.5},
	        "paddingRight": function () {return this.paddingBody*1.5}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = {
	  "panel": {
	    "marginBottom": 20,
	    "backgroundColor": "#ffffff",
	    "borderColor": "#dddddd",
	    "borderWidth": 1
	  },
	  "panel-primary": {
	    "borderColor": "rgb(40,96,144)"
	  },
	  "panel-success": {
	    "borderColor": "rgb(76,174,76)"
	  },
	  "panel-info": {
	    "borderColor": "rgb(70,184,218)"
	  },
	  "panel-warning": {
	    "borderColor": "rgb(238,162,54)"
	  },
	  "panel-danger": {
	    "borderColor": "rgb(212,63,58)"
	  },
	  "panel-header": {
	    "backgroundColor": "#f5f5f5",
	    "fontSize": 40,
	    "color": "#333333"
	  },
	  "panel-header-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "color": "#ffffff"
	  },
	  "panel-header-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "color": "#ffffff"
	  },
	  "panel-header-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "color": "#ffffff"
	  },
	  "panel-header-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "color": "#ffffff"
	  },
	  "panel-header-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "color": "#ffffff"
	  }
	}

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    type: 'default',
	    title: '',
	    paddingBody: 20,
	    paddingHead: 20,
	    dataClass: '',
	    border: 0
	  }},
	  ready: function ready() {}
	};}
	/* generated by weex-loader */


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(90)
	var __weex_style__ = __webpack_require__(91)
	var __weex_script__ = __webpack_require__(92)

	__weex_define__('@weex-component/wxc-tip', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['tip', 'tip-' + (this.type)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['tip-txt', 'tip-txt-' + (this.type)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = {
	  "tip": {
	    "paddingLeft": 36,
	    "paddingRight": 36,
	    "paddingTop": 36,
	    "paddingBottom": 36,
	    "borderRadius": 10
	  },
	  "tip-txt": {
	    "fontSize": 28
	  },
	  "tip-success": {
	    "backgroundColor": "#dff0d8",
	    "borderColor": "#d6e9c6"
	  },
	  "tip-txt-success": {
	    "color": "#3c763d"
	  },
	  "tip-info": {
	    "backgroundColor": "#d9edf7",
	    "borderColor": "#bce8f1"
	  },
	  "tip-txt-info": {
	    "color": "#31708f"
	  },
	  "tip-warning": {
	    "backgroundColor": "#fcf8e3",
	    "borderColor": "#faebcc"
	  },
	  "tip-txt-warning": {
	    "color": "#8a6d3b"
	  },
	  "tip-danger": {
	    "backgroundColor": "#f2dede",
	    "borderColor": "#ebccd1"
	  },
	  "tip-txt-danger": {
	    "color": "#a94442"
	  }
	}

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    type: 'success',
	    value: ''
	  }}
	};}
	/* generated by weex-loader */


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(94)
	var __weex_style__ = __webpack_require__(95)
	var __weex_script__ = __webpack_require__(96)

	__weex_define__('@weex-component/wxc-countdown', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "overflow": "hidden",
	    "flexDirection": "row"
	  },
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	}

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = {
	  "wrap": {
	    "overflow": "hidden"
	  }
	}

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _assign = __webpack_require__(97);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	    data: function () {return {
	        now: 0,
	        remain: 0,
	        time: {
	            elapse: 0,
	            D: '0',
	            DD: '0',
	            h: '0',
	            hh: '00',
	            H: '0',
	            HH: '0',
	            m: '0',
	            mm: '00',
	            M: '0',
	            MM: '0',
	            s: '0',
	            ss: '00',
	            S: '0',
	            SS: '0'
	        },
	        outofview: false
	    }},
	    ready: function ready() {
	        if (this.remain <= 0) {
	            return;
	        }

	        this.now = Date.now();
	        this.nextTick();
	    },
	    methods: {
	        nextTick: function nextTick() {
	            if (this.outofview) {
	                setTimeout(this.nextTick.bind(this), 1000);
	            } else {
	                this.time.elapse = parseInt((Date.now() - this.now) / 1000);

	                if (this.calc()) {
	                    this.$emit('tick', (0, _assign2.default)({}, this.time));
	                    setTimeout(this.nextTick.bind(this), 1000);
	                } else {
	                    this.$emit('alarm', (0, _assign2.default)({}, this.time));
	                }
	                this._app.updateActions();
	            }
	        },
	        format: function format(str) {
	            if (str.length >= 2) {
	                return str;
	            } else {
	                return '0' + str;
	            }
	        },
	        calc: function calc() {
	            var remain = this.remain - this.time.elapse;
	            if (remain < 0) {
	                remain = 0;
	            }
	            this.time.D = String(parseInt(remain / 86400));
	            this.time.DD = this.format(this.time.D);
	            this.time.h = String(parseInt((remain - parseInt(this.time.D) * 86400) / 3600));
	            this.time.hh = this.format(this.time.h);
	            this.time.H = String(parseInt(remain / 3600));
	            this.time.HH = this.format(this.time.H);
	            this.time.m = String(parseInt((remain - parseInt(this.time.H) * 3600) / 60));
	            this.time.mm = this.format(this.time.m);
	            this.time.M = String(parseInt(remain / 60));
	            this.time.MM = this.format(this.time.M);
	            this.time.s = String(remain - parseInt(this.time.M) * 60);
	            this.time.ss = this.format(this.time.s);
	            this.time.S = String(remain);
	            this.time.SS = this.format(this.time.S);

	            return remain > 0;
	        },
	        appeared: function appeared() {
	            this.outofview = false;
	        },
	        disappeared: function disappeared() {
	            this.outofview = true;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(99);
	module.exports = __webpack_require__(15).Object.assign;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(13);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(100)});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(34)
	  , gOPS     = __webpack_require__(63)
	  , pIE      = __webpack_require__(64)
	  , toObject = __webpack_require__(50)
	  , IObject  = __webpack_require__(37)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(24)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(102)
	var __weex_style__ = __webpack_require__(103)
	var __weex_script__ = __webpack_require__(104)

	__weex_define__('@weex-component/wxc-marquee', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrap"
	  ],
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "div",
	      "id": "anim",
	      "classList": [
	        "anim"
	      ],
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = {
	  "wrap": {
	    "overflow": "hidden",
	    "position": "relative"
	  },
	  "anim": {
	    "flexDirection": "column",
	    "position": "absolute",
	    "transform": "translateY(0) translateZ(0)"
	  }
	}

/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	    data: function () {return {
	        step: 0,
	        count: 0,
	        index: 1,
	        duration: 0,
	        interval: 0,
	        outofview: false
	    }},
	    ready: function ready() {
	        if (this.interval > 0 && this.step > 0 && this.duration > 0) {
	            this.nextTick();
	        }
	    },
	    methods: {
	        nextTick: function nextTick() {
	            var self = this;
	            if (this.outofview) {
	                setTimeout(self.nextTick.bind(self), self.interval);
	            } else {
	                setTimeout(function () {
	                    self.animation(self.nextTick.bind(self));
	                }, self.interval);
	            }
	        },
	        animation: function animation(cb) {
	            var self = this;
	            var offset = -self.step * self.index;
	            var $animation = __weex_require__('@weex-module/animation');
	            $animation.transition(this.$el('anim'), {
	                styles: {
	                    transform: 'translateY(' + String(offset) + 'px) translateZ(0)'
	                },
	                timingFunction: 'ease',
	                duration: self.duration
	            }, function () {
	                self.index = (self.index + 1) % self.count;
	                self.$emit('change', {
	                    index: self.index,
	                    count: self.count
	                });
	                cb && cb();
	            });
	        },
	        appeared: function appeared() {
	            this.outofview = false;
	        },
	        disappeared: function disappeared() {
	            this.outofview = true;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(106)
	var __weex_style__ = __webpack_require__(107)
	var __weex_script__ = __webpack_require__(108)

	__weex_define__('@weex-component/wxc-navbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "height": function () {return this.height},
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "attr": {
	    "dataRole": function () {return this.dataRole}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "right-text"
	      ],
	      "style": {
	        "color": function () {return this.rightItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "right",
	        "value": function () {return this.rightItemTitle}
	      },
	      "shown": function () {return !this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "right-image"
	      ],
	      "attr": {
	        "naviItemPosition": "right",
	        "src": function () {return this.rightItemSrc}
	      },
	      "shown": function () {return this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "left-text"
	      ],
	      "style": {
	        "color": function () {return this.leftItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "left",
	        "value": function () {return this.leftItemTitle}
	      },
	      "shown": function () {return !this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "left-image"
	      ],
	      "attr": {
	        "naviItemPosition": "left",
	        "src": function () {return this.leftItemSrc}
	      },
	      "shown": function () {return this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "center-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "naviItemPosition": "center",
	        "value": function () {return this.title}
	      }
	    }
	  ]
	}

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "width": 750
	  },
	  "right-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "right": 32,
	    "textAlign": "right",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "left-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "left": 32,
	    "textAlign": "left",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "center-text": {
	    "position": "absolute",
	    "bottom": 25,
	    "left": 172,
	    "right": 172,
	    "textAlign": "center",
	    "fontSize": 36,
	    "fontWeight": "bold"
	  },
	  "left-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "left": 28,
	    "width": 50,
	    "height": 50
	  },
	  "right-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "right": 28,
	    "width": 50,
	    "height": 50
	  }
	}

/***/ },
/* 108 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    dataRole: 'navbar',

	    backgroundColor: 'black',

	    height: 88,

	    title: "",

	    titleColor: 'black',

	    rightItemSrc: '',

	    rightItemTitle: '',

	    rightItemColor: 'black',

	    leftItemSrc: '',

	    leftItemTitle: '',

	    leftItemColor: 'black'
	  }},
	  methods: {
	    onclickrightitem: function onclickrightitem(e) {
	      this.$dispatch('naviBar.rightItem.click', {});
	    },
	    onclickleftitem: function onclickleftitem(e) {
	      this.$dispatch('naviBar.leftItem.click', {});
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(105)
	var __weex_template__ = __webpack_require__(110)
	var __weex_style__ = __webpack_require__(111)
	var __weex_script__ = __webpack_require__(112)

	__weex_define__('@weex-component/wxc-navpage', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 110 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "wxc-navbar",
	      "attr": {
	        "dataRole": function () {return this.dataRole},
	        "height": function () {return this.height},
	        "backgroundColor": function () {return this.backgroundColor},
	        "title": function () {return this.title},
	        "titleColor": function () {return this.titleColor},
	        "leftItemSrc": function () {return this.leftItemSrc},
	        "leftItemTitle": function () {return this.leftItemTitle},
	        "leftItemColor": function () {return this.leftItemColor},
	        "rightItemSrc": function () {return this.rightItemSrc},
	        "rightItemTitle": function () {return this.rightItemTitle},
	        "rightItemColor": function () {return this.rightItemColor}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "wrapper"
	      ],
	      "style": {
	        "marginTop": function () {return this.height}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 111 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "width": 750
	  }
	}

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    dataRole: 'navbar',
	    backgroundColor: 'black',
	    height: 88,
	    title: "",
	    titleColor: 'black',
	    rightItemSrc: '',
	    rightItemTitle: '',
	    rightItemColor: 'black',
	    leftItemSrc: '',
	    leftItemTitle: '',
	    leftItemColor: 'black'
	  }}
	};}
	/* generated by weex-loader */


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(114)
	var __weex_template__ = __webpack_require__(118)
	var __weex_style__ = __webpack_require__(119)
	var __weex_script__ = __webpack_require__(120)

	__weex_define__('@weex-component/wxc-tabbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(115)
	var __weex_style__ = __webpack_require__(116)
	var __weex_script__ = __webpack_require__(117)

	__weex_define__('@weex-component/wxc-tabitem', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "events": {
	    "click": "onclickitem"
	  },
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "top-line"
	      ],
	      "attr": {
	        "src": "http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "tab-icon"
	      ],
	      "attr": {
	        "src": function () {return this.icon}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "tab-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    }
	  ]
	}

/***/ },
/* 116 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 88
	  },
	  "top-line": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "height": 2
	  },
	  "tab-icon": {
	    "marginTop": 5,
	    "width": 40,
	    "height": 40
	  },
	  "tab-text": {
	    "marginTop": 5,
	    "textAlign": "center",
	    "fontSize": 20
	  }
	}

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    index: 0,
	    title: '',
	    titleColor: '#000000',
	    icon: '',
	    backgroundColor: '#ffffff'
	  }},
	  methods: {
	    onclickitem: function onclickitem(e) {
	      var vm = this;
	      var params = {
	        index: vm.index
	      };
	      vm.$dispatch('tabItem.onClick', params);
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "embed",
	      "classList": [
	        "content"
	      ],
	      "style": {
	        "visibility": function () {return this.visibility}
	      },
	      "repeat": function () {return this.tabItems},
	      "attr": {
	        "src": function () {return this.src},
	        "type": "weex"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "tabbar"
	      ],
	      "append": "tree",
	      "children": [
	        {
	          "type": "wxc-tabitem",
	          "repeat": function () {return this.tabItems},
	          "attr": {
	            "index": function () {return this.index},
	            "icon": function () {return this.icon},
	            "title": function () {return this.title},
	            "titleColor": function () {return this.titleColor}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 0,
	    "marginBottom": 88
	  },
	  "tabbar": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 88
	  }
	}

/***/ },
/* 120 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    tabItems: [],
	    selectedIndex: 0,
	    selectedColor: '#ff0000',
	    unselectedColor: '#000000'
	  }},
	  created: function created() {
	    this.selected(this.selectedIndex);

	    this.$on('tabItem.onClick', function (e) {
	      var detail = e.detail;
	      this.selectedIndex = detail.index;
	      this.selected(detail.index);

	      var params = {
	        index: detail.index
	      };
	      this.$dispatch('tabBar.onClick', params);
	    });
	  },
	  methods: {
	    selected: function selected(index) {
	      for (var i = 0; i < this.tabItems.length; i++) {
	        var tabItem = this.tabItems[i];
	        if (i == index) {
	          tabItem.icon = tabItem.selectedImage;
	          tabItem.titleColor = this.selectedColor;
	          tabItem.visibility = 'visible';
	        } else {
	          tabItem.icon = tabItem.image;
	          tabItem.titleColor = this.unselectedColor;
	          tabItem.visibility = 'hidden';
	        }
	      }
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 121 */
/***/ function(module, exports) {

	var BASE_URL = {
	    //js.taoguba.com.cn/weex/storm (传线上环境注意下一行换成https) 192.168.1.10:8080   192.168.1.15:8080  192.168.1.18:8080   192.168.1.19:8080
	    IP: '192.168.1.15:8080',
	    HTTP: 'http://',
	    API_URL: 'http://api.taoguba.sp/',
	    appzhiboWebSocet: "wss://ws.taoguba.sp/appzhibo",//app 直播websocket地址
	    M_TAOGUBA: 'https://m.taoguba.com.cn/mViewTopic?',
	    token: 'web_4132&3751ED8EE6534A18B979035E66C53123',
	    COM_IMAGE_URL: 'https://image.taoguba.com.cn',
	    SHUOSHUO: "https://shuo.taoguba.sp/mWeiboSingle?",//说说
	    Article: "https://m.taoguba.sp/Article/",//帖子
	    //加入发布需要清除dns缓存的所有js路径
	    //     https://js.taoguba.com.cn/weex/storm/storm/build/src/slider-pager.js
	    //     https://js.taoguba.com.cn/weex/storm/storm/build/src/stocknews/stocknews.js
	    //     https://js.taoguba.com.cn/weex/storm/storm/build/src/stocknews/stockdetail.js
	    //     https://js.taoguba.com.cn/weex/storm/storm/build/src/shuoshuo/shuoshuo.js
	    //     https://js.taoguba.com.cn/weex/storm/storm/build/src/dayanalysis/dayanalysis.js
	    //     https://js.taoguba.com.cn/weex/storm/storm/build/src/meeting/meeting-pager.js
	    //     https://js.taoguba.com.cn/weex/storm/storm/build/src/meeting/meetingtime.js
	    //     https://js.taoguba.com.cn/weex/storm/storm/build/src/meeting/meetingdetail.js
	};


	var API = {
	    apiGetForums: 'free/topic/apiGetForums',
	    apiGetAnalysisNews: 'visitor/live/analysisNews',//每日分析
	    apiGetNews: 'visitor/live/getNews',//新闻直播(getNews)
	    apiGetComplainMessage: 'visitor/live/getComplainMessage',//获得吐槽内容
	    apiGetTucaoList: 'visitor/live/getTucaoList',//吐槽列表
	    apiGetTzrlData: 'visitor/live/getTzrlData',//投资日历列表
	    apiGetRedPoint: 'visitor/live/getRedPoint',//新消息小红点(getRedPoint),
	    apiGetIsOpenSpan: 'comp/visitor/live/getIsOpenSpan',//查询滚动条是否开启
	    apiInsertOpenFlag: 'comp/visitor/live/insertOpenFlag',//关闭打开滚动条 post
	    apiUsefulShuo: "comp/shuo/apiUsefulShuo",// 将说说赞
	};

	exports.getArticle = function () {
	    var article;
	    article = BASE_URL.Article;
	    return article;
	};

	exports.getShuoShuo = function () {
	    var shuo;
	    shuo = BASE_URL.SHUOSHUO;
	    return shuo;
	};
	exports.apiInsertOpenFlag = function () {
	    var url;
	    if (typeof window === 'object') {
	        url = BASE_URL.API_URL + API.apiInsertOpenFlag + '?';
	    } else {
	        url = API.apiInsertOpenFlag;
	    }
	    console.log('apiInsertOpenFlag==' + url);
	    return url;
	};
	exports.apiGetIsOpenSpan = function () {
	    var url;
	    if (typeof window === 'object') {
	        url = BASE_URL.API_URL + API.apiGetIsOpenSpan + '?';
	    } else {
	        url = API.apiGetIsOpenSpan;
	    }
	    console.log('apiGetIsOpenSpan==' + url);
	    return url;
	};
	exports.apiGetRedPoint = function () {
	    var url;
	    if (typeof window === 'object') {
	        url = BASE_URL.API_URL + API.apiGetRedPoint + '?';
	    } else {
	        url = API.apiGetRedPoint;
	    }
	    console.log('apiGetRedPoint==' + url);
	    return url;
	};

	exports.apiGetTzrlData = function () {
	    var url;
	    if (typeof window === 'object') {
	        url = BASE_URL.API_URL + API.apiGetTzrlData + '?';
	    } else {
	        url = API.apiGetTzrlData;
	    }
	    console.log('apiGetTzrlData==' + url);
	    return url;
	};

	exports.apiGetTucaoList = function () {
	    var url;
	    if (typeof window === 'object') {
	        url = BASE_URL.API_URL + API.apiGetTucaoList + '?';
	    } else {
	        url = API.apiGetTucaoList;
	    }
	    console.log('apiGetTucaoList==' + url);
	    return url;
	};

	exports.apiGetComplainMessage = function () {
	    var url;
	    if (typeof window === 'object') {
	        url = BASE_URL.API_URL + API.apiGetComplainMessage + '?';
	    } else {
	        url = API.apiGetComplainMessage;
	    }
	    console.log('apiGetComplainMessage==' + url);
	    return url;
	};

	exports.getDefaultUrl = function (name) {
	    var url;
	    url = getBaseUrl(name, true) + name + ".js";
	    console.log('getDefaultUrl==' + url);
	    return url;
	};

	exports.getDefaultPathUrl = function (path) {
	    var url;
	    url = getBaseUrl(path, true) + path;
	    console.log('getPathUrl==' + url);
	    return url;
	};

	exports.getPathUrl = function (path, isnative) {
	    var url;
	    url = getBaseUrl(path, isnative) + path;
	    console.log('getPathUrl==' + url);
	    return url;
	};

	//获取线上资源文件地址
	exports.getImageUrl = function (path) {
	    var url;
	    if (typeof window === 'object') {
	        url = BASE_URL.HTTP + BASE_URL.IP + '/storm' + path.substring(1, path.length);
	    } else {
	        url = BASE_URL.HTTP + BASE_URL.IP + '/storm' + path.substring(1, path.length);
	        ;
	    }
	    return url;
	};

	//接口资源的图片地址
	exports.getComImageUrl = function getComImageUrl(oimgurl) {
	    ///img/2016/06/28/5idxarp0p8zi.jpg
	    //./img/2016/06/28/5idxarp0p8zi.jpg
	    //../img/2016/06/28/5idxarp0p8zi.jpg
	    //2016/06/28/5idxarp0p8zi.jpg
	    if (oimgurl == null || oimgurl == 'null') {
	        oimgurl = '';
	    }
	    console.log(oimgurl);
	    oimgurl = oimgurl.replace('../', './').replace('./', '');
	    if (oimgurl.indexOf('http') >= 0 || oimgurl.indexOf('www') >= 0) {
	    } else {
	        oimgurl = BASE_URL.COM_IMAGE_URL + '/' + oimgurl;
	    }
	    return oimgurl;
	},
	    exports.getLogoImageUrl = function getLogoImageUrl(oimgurl) {
	        //2016/06/28/5idxarp0p8zi.jpg
	        if (oimgurl == null || oimgurl == 'null') {
	            oimgurl = 'user_icon_60.png';
	        }
	        oimgurl = oimgurl.replace('../', './').replace('./', '');
	        if (oimgurl.indexOf('http') >= 0 || oimgurl.indexOf('www') >= 0) {
	        } else {
	            oimgurl = BASE_URL.COM_IMAGE_URL + '/img/' + oimgurl;
	        }
	        return oimgurl;
	    },


	    exports.getToken = function () {
	        var token;
	        token = BASE_URL.token;
	        console.log('getToken==' + token);
	        return token;
	    };


	exports.apiGetForums = function () {
	    var url;
	    if (typeof window === 'object') {
	        url = BASE_URL.API_URL + API.apiGetForums + '?';
	    } else {
	        url = API.apiGetForums;
	    }
	    console.log('apiGetForums==' + url);
	    return url;
	};

	exports.apiGetAnalysisNews = function () {
	    var url;
	    if (typeof window === 'object') {
	        url = BASE_URL.API_URL + API.apiGetAnalysisNews + '?';
	    } else {
	        url = API.apiGetAnalysisNews;
	    }
	    console.log('apiGetAnalysisNews==' + url);
	    return url;
	};

	exports.apiGetNews = function () {
	    var url;
	    if (typeof window === 'object') {
	        url = BASE_URL.API_URL + API.apiGetNews + '?';
	    } else {
	        url = API.apiGetNews;
	    }
	    console.log('apiGetNews==' + url);
	    return url;
	};


	function getBaseUrl(bundleUrl, isnav) {
	    bundleUrl = new String(bundleUrl);
	    var nativeBase;
	    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

	    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	    if (isAndroidAssets) {
	        nativeBase = 'file://assets/build/';
	    }
	    else if (isiOSAssets) {
	        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	    }
	    else {
	        //'localhost:8080';
	        var host = BASE_URL.IP;
	        // var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
	        // if (matches && matches.length >= 2) {
	        //     host = matches[1];
	        // }

	        if (typeof window === 'object') {
	            if (host.endsWith(':8080/yoka') || host.endsWith(':12580/yoka')) {
	                host = host.replace('/yoka', '');
	                // console.log('replace local test storm name');
	            }
	        }

	        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
	        //网页 http://localhost:8080/index.html?page=./dist/weexbar/stocknews.js
	        //android 原生 http://192.168.1.15:12580/dist/mainlist.js
	        if (typeof window === 'object') {
	            nativeBase = isnav ? BASE_URL.HTTP + host + '/index.html?page=./yoka/build/src/' : BASE_URL.HTTP + host + '/yoka/build/src/';
	        } else {
	            nativeBase = BASE_URL.HTTP + host + '/yoka/build/src/';
	            //放在官方仓库 'incubator-weex/examples/TGB_WEEX' 文件夹下编译的话，路径用这个
	            // nativeBase = 'http://' + host.replace("8080","12580") + '/examples/build/TGB_WEEX/storm/src/';
	        }
	    }

	    return nativeBase;
	};
	function getApiUrl(apiurl) {
	    var url;
	    //apiurl = new String(apiurl);
	    if (typeof window === 'object') {
	        //http://api.taoguba.cu/free/topic/getFocusList
	        ///free/topic/apiGetForums?
	        url = BASE_URL.API_URL + apiurl;
	    } else {
	        url = apiurl;
	    }
	    // console.log('getApiUrl=='+url);
	    return url;
	};

	exports.getUrlParam = function getUrlParam(key) {
	    var reg = new RegExp('[?|&]' + key + '=([^&]+)')
	    var match = location.search.match(reg)
	    return match && match[1]
	}
	exports.getMTaoguba = function getMTaoguba(murl) {
	    var url;
	    ////http://m.taoguba.com.cn/mViewTopic?topicID=1293091&replyID=890&pageNo=1
	    //https://m.taoguba.com.cn/Article/1657029/1
	    // murl = new String(murl);
	    url = BASE_URL.M_TAOGUBA + murl;
	    // console.log('getMTaoguba=='+url);
	    return url;
	};
	exports.getaZhiboWebSocet = function getaZhiboWebSocet() {
	    return BASE_URL.appzhiboWebSocet;
	};
	exports.getApiUsefulShuo = function getApiUsefulShuo() {
	    return API.apiUsefulShuo;
	};


/***/ },
/* 122 */
/***/ function(module, exports) {

	// export function formatDate(date, fmt) {
	exports.formatDate = function (date, fmt) {
	   if (/(y+)/.test(fmt)) {
	    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	   }
	  var o = {
	    'M+': date.getMonth() + 1,
	    'd+': date.getDate(),
	    'h+': date.getHours(),
	    'm+': date.getMinutes(),
	    's+': date.getSeconds()
	  };
	  for (var k in o) {
	    if (new RegExp("("+ k +")").test(fmt)) {
	      var str = o[k] + '';
	      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
	    }
	  }
	  return fmt;
	}

	function padLeftZero(str) {
	  return ('00' + str).substr(str.length);
	}


	//不够位数就在之前补足0
	function prefixInteger(num, length) {
	  return (Array(length).join('0') + num).slice(-length);
	}

	exports.formatTime = function (timeStamp) {
	  // timeStamp = parseInt(timeStamp);
	  //如果timeStamp不是字符串或数字或不存在
	  // if (typeof(timeStamp) != 'number'||!timeStamp) {
	  //   timeStamp = Date.parse(new Date());
	  // }
	  if(timeStamp < 140000000000) {
	    timeStamp = timeStamp * 1000;
	  }

	  var dateTime = new Date(timeStamp);

	  var year = dateTime.getFullYear();
	  var month = dateTime.getMonth() + 1;
	  month = prefixInteger(month,2);
	  var day = dateTime.getDate();
	  var hour = dateTime.getHours();
	  var minute = dateTime.getMinutes();
	  var second = dateTime.getSeconds();
	  var now = new Date();
	  var now_new =new Date().getTime();  //typescript转换写法

	  var milliseconds = 0;
	  var timeSpanStr;
	  var a_minute = 1000 * 60;
	  var an_hour = a_minute * 60;
	  var a_day = an_hour * 24;
	  var a_month = a_day * 30;


	  var milliseconds = now_new - timeStamp;
	    
	  if (milliseconds <= a_minute) {
	      if(day ==now.getDay()){
	          timeSpanStr = '刚刚';
	      }else {
	          if(year == now.getFullYear()){
	              timeSpanStr = month + '-' + day;
	          }else{
	              timeSpanStr = year + '-' + month + '-' + day;
	          }
	      }
	  }
	  else if (a_minute < milliseconds && milliseconds <= an_hour) {
	    if(day ==now.getDay()){
	        timeSpanStr = Math.round((milliseconds / (1000 * 60))) + '分钟前';
	    }else {
	        if(year == now.getFullYear()){
	            timeSpanStr = month + '-' + day;
	        }else{
	            timeSpanStr = year + '-' + month + '-' + day;
	        }
	    }
	  }
	  else if (an_hour < milliseconds && milliseconds <= a_day) {
	      if(day ==now.getDay()){
	          timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60)) + '小时前';
	      }else {
	          if(year == now.getFullYear()){
	              timeSpanStr = month + '-' + day;
	          }else{
	              timeSpanStr = year + '-' + month + '-' + day;
	          }
	      }
	  }
	  // else if (a_day < milliseconds && milliseconds <= a_month) {
	  //   timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60 * 24)) + '天前';
	  // }
	  else if (milliseconds > a_day && year == now.getFullYear()) {
	    timeSpanStr = month + '-' + day;
	    // timeSpanStr = month + '-' + day + ' ' + hour + ':' + minute;
	  } else {
	    timeSpanStr = year + '-' + month + '-' + day;
	  }
	  return timeSpanStr;

	}

/***/ },
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(128), __esModule: true };

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(15)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(130)
	var __weex_style__ = __webpack_require__(131)
	var __weex_script__ = __webpack_require__(132)

	__weex_define__('@weex-component/navbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 130 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "div",
	      "shown": function () {return this.showStatusBar},
	      "classList": function () {return ['status_bar_ios', 'status_bar-' + (this.type)]}
	    },
	    {
	      "type": "div",
	      "classList": function () {return ['nav_bar', 'nav_bar-' + (this.type)]},
	      "children": [
	        {
	          "type": "div",
	          "classList": function () {return ['nav_back', 'nav_back-' + (this.type)]},
	          "events": {
	            "click": "nativeback"
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "img"
	              ],
	              "attr": {
	                "src": function () {return this.getImgUrl('./images/leftw_')}
	              },
	              "shown": function () {return this.shownleft}
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "nav_title"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": function () {return ['nav_text', 'nav_text-' + (this.type), 'nav_text_top-' + (this.nav_text_top)]},
	              "attr": {
	                "value": function () {return this.title}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "nav_right_menu"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": function () {return ['nav_right_menu', 'nav_back-' + (this.type)]},
	              "shown": function () {return this.shown},
	              "events": {
	                "click": "onright"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "img_menu"
	                  ],
	                  "attr": {
	                    "src": function () {return this.getImgUrl('./images/quanq_')}
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": function () {return ['nav_line', '', 'nav_line-' + (this.type)]}
	    }
	  ]
	}

/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports = {
	  "nav_bar": {
	    "display": "flex",
	    "flexDirection": "row",
	    "flex": 1,
	    "height": "45wx"
	  },
	  "nav_bar-0": {
	    "backgroundColor": "#1191f6"
	  },
	  "nav_bar-1": {
	    "backgroundColor": "#192c46"
	  },
	  "nav_text": {
	    "fontSize": "20wx",
	    "flex": 1,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "marginTop": 20
	  },
	  "nav_text_top-0": {
	    "marginTop": 30
	  },
	  "nav_text_top-1": {
	    "marginTop": 1
	  },
	  "nav_text-0": {
	    "color": "#FFFFFF"
	  },
	  "nav_text-1": {
	    "color": "#55aad8"
	  },
	  "nav_title": {
	    "flex": 1,
	    "marginLeft": 10,
	    "marginRight": 10,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "nav_back": {
	    "justifyContent": "center",
	    "alignItems": "center",
	    "width": "45wx",
	    "height": "45wx"
	  },
	  "nav_right_menu": {
	    "width": 45,
	    "height": 45,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "img": {
	    "width": "45wx",
	    "height": "45wx",
	    "padding": "11.5wx"
	  },
	  "nav_back-0": {
	    "backgroundColor:active": "#0E7BF6"
	  },
	  "nav_back-1": {
	    "backgroundColor:active": "#132237"
	  },
	  "nav_right_menu-0": {
	    "backgroundColor": "#0E7BF6"
	  },
	  "nav_right_menu-1": {
	    "backgroundColor": "#132237"
	  },
	  "img_menu": {
	    "width": 60,
	    "height": 20
	  },
	  "nav_line": {
	    "height": 1
	  },
	  "nav_line-0": {
	    "backgroundColor": "#D8D8D8"
	  },
	  "nav_line-1": {
	    "backgroundColor": "#192c46"
	  },
	  "status_bar_ios": {
	    "height": "20wx"
	  },
	  "status_bar-0": {
	    "backgroundColor": "#1191f6"
	  },
	  "status_bar-1": {
	    "backgroundColor": "#192c46"
	  }
	}

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _typeof2 = __webpack_require__(4);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(72);
	var taoguba = __webpack_require__(121);
	var navigator = __weex_require__('@weex-module/navigator');
	module.exports = {
	    data: function () {return {
	        title: '  ',
	        type: 0,
	        shown: false,
	        showStatusBar: 0,
	        nav_text_top: 0,
	        shownleft: false

	    }},
	    created: function created() {
	        this.platform = this.$getConfig().env.platform;
	        if (this.platform == 'iOS') {
	            this.showStatusBar = 1;
	        }
	        if ((typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object') {
	            this.nav_text_top = 1;
	        } else {
	            this.nav_text_top = 0;
	        }
	    },
	    ready: function ready() {},

	    methods: {
	        nativeback: function nativeback(e) {
	            var params = {
	                'animated': 'true'
	            };
	            navigator.pop(params, function (event) {});
	        },
	        onright: function onright(e) {
	            console.log('navbar == onright');
	        },

	        getImgUrl: function getImgUrl(url) {
	            url = url + this.type + '.png';
	            return taoguba.getImageUrl(url);
	        },

	        setLeftImage: function setLeftImage(res) {
	            this.leftImage = res;
	        },

	        setRightImage: function setRightImage(res) {
	            this.rightImage = res;
	        }

	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(179)
	var __weex_style__ = __webpack_require__(180)
	var __weex_script__ = __webpack_require__(181)

	__weex_define__('@weex-component/shuoshuo_item', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 179 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "item"
	  ],
	  "events": {
	    "click": "onclickTucao"
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "time"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": function () {return ['createdt', 'createdt-' + (this.skinType)]},
	          "shown": function () {return this.shuoshuoitem.newrefresh},
	          "attr": {
	            "value": function () {return this.formatTime(this.shuoshuoitem.refreshtime)}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "news-content"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "news-image"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "logo"
	              ],
	              "shown": function () {return this.shuoshuoitem.selfuser==0},
	              "attr": {
	                "src": function () {return this.shuoshuoitem.img}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "news-shuoshuo"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": function () {return ['rightname', 'rightname-' + (this.shuoshuoitem.selfuser)]},
	              "children": [
	                {
	                  "type": "text",
	                  "classList": function () {return ['userName', 'userName-' + (this.skinType)]},
	                  "attr": {
	                    "value": function () {return this.shuoshuoitem.userName}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": function () {return ['shuoshuo', '', 'shuoshuo_' + (this.platform), 'shuoshuo-' + (this.shuoshuoitem.selfuser) + '-' + (this.skinType)]},
	              "children": [
	                {
	                  "type": "div",
	                  "classList": function () {return ['center_content_class', 'center_content_class-' + (this.shuoshuoitem.selfuser) + '-' + (this.skinType)]},
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": function () {return ['content', 'content-' + (this.shuoshuoitem.selfuser) + '-' + (this.skinType)]},
	                      "attr": {
	                        "value": function () {return this.shuoshuoitem.content}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": function () {return ['refContent', 'refContent-' + (this.shuoshuoitem.selfuser) + '-' + (this.skinType)]},
	                      "shown": function () {return this.shuoshuoitem.refContent.length>0},
	                      "attr": {
	                        "value": function () {return this.shuoshuoitem.refContent}
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "news-image"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "logo"
	              ],
	              "shown": function () {return this.shuoshuoitem.selfuser==1},
	              "attr": {
	                "src": function () {return this.shuoshuoitem.img}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 180 */
/***/ function(module, exports) {

	module.exports = {
	  "item": {
	    "flex": 1,
	    "width": 750,
	    "padding": "10wx",
	    "flexDirection": "column"
	  },
	  "news-content": {
	    "flexDirection": "row",
	    "flex": 1
	  },
	  "news-shuoshuo": {
	    "flex": 1,
	    "flexDirection": "column",
	    "margin": "10wx"
	  },
	  "news-image": {
	    "justifyContent": "flex-start",
	    "alignItems": "flex-start",
	    "width": "35wx",
	    "height": "35wx"
	  },
	  "logo": {
	    "width": "35wx",
	    "height": "35wx"
	  },
	  "userName": {
	    "fontSize": "13wx",
	    "justifyContent": "flex-end",
	    "alignItems": "flex-end"
	  },
	  "userName-0": {
	    "color": "#bbbbbb"
	  },
	  "userName-1": {
	    "color": "#999999"
	  },
	  "rightname-0": {
	    "justifyContent": "flex-start",
	    "alignItems": "flex-start"
	  },
	  "rightname-1": {
	    "justifyContent": "flex-end",
	    "alignItems": "flex-end"
	  },
	  "content": {
	    "fontSize": "14wx",
	    "color": "#000000",
	    "flex": 1,
	    "maxWidth": 460
	  },
	  "content-0-0": {
	    "color": "#666666"
	  },
	  "content-0-1": {
	    "color": "#999999"
	  },
	  "content-1-0": {
	    "color": "#666666"
	  },
	  "content-1-1": {
	    "color": "#000000"
	  },
	  "refContent": {
	    "fontSize": "12wx",
	    "maxWidth": 460,
	    "paddingTop": "8wx"
	  },
	  "refContent-0-0": {
	    "color": "#888888"
	  },
	  "refContent-0-1": {
	    "color": "#999999"
	  },
	  "refContent-1-0": {
	    "color": "#888888"
	  },
	  "refContent-1-1": {
	    "color": "#000000"
	  },
	  "center_content_class": {
	    "borderRadius": "8wx",
	    "padding": "8wx"
	  },
	  "center_content_class-0-0": {
	    "backgroundColor": "#DDDDDD"
	  },
	  "center_content_class-0-1": {
	    "backgroundColor": "#0e1929"
	  },
	  "center_content_class-1-0": {
	    "backgroundColor": "#a9d964"
	  },
	  "center_content_class-1-1": {
	    "backgroundColor": "#a9d964"
	  },
	  "shuoshuo": {
	    "flex": 1,
	    "paddingRight": "10wx",
	    "paddingLeft": "10wx",
	    "marginTop": "10wx",
	    "borderRadius": "8wx"
	  },
	  "shuoshuo_android": {
	    "flexDirection": "row"
	  },
	  "shuoshuo-0-0": {
	    "justifyContent": "flex-start",
	    "alignItems": "flex-start"
	  },
	  "shuoshuo-0-1": {
	    "justifyContent": "flex-start",
	    "alignItems": "flex-start"
	  },
	  "shuoshuo-1-0": {
	    "justifyContent": "flex-end",
	    "alignItems": "flex-end"
	  },
	  "shuoshuo-1-1": {
	    "justifyContent": "flex-end",
	    "alignItems": "flex-end"
	  },
	  "time": {
	    "alignItems": "center",
	    "justifyContent": "center",
	    "flex": 1
	  },
	  "createdt": {
	    "fontSize": "12wx"
	  },
	  "createdt-0": {
	    "color": "#666666"
	  },
	  "createdt-1": {
	    "color": "#999999"
	  }
	}

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(72);
	var date = __webpack_require__(122);
	var modal = __weex_require__('@weex-module/modal');
	var event = __weex_require__('@weex-module/event');
	var stream = __weex_require__('@weex-module/stream');
	var storage = __weex_require__('@weex-module/storage');
	var weexEventModule = __weex_require__('@weex-module/weexEventModule');
	var taoguba = __webpack_require__(121);
	module.exports = {
	    created: function created() {
	        var self = this;
	        this.platform = this.$getConfig().env.platform;
	        var skinType = this.$getConfig().skinType;
	        if (skinType == undefined) {
	            skinType = 0;
	        }
	        self.skinType = skinType;
	    },
	    data: function () {return {
	        platform: '',
	        shuoshuoitem: {
	            "seq": null,
	            "feedID": 2920462,
	            "type": null,
	            "topicID": 2920324,
	            "createdt": 1492571764000,
	            "content": "@开心一刻018 大在",
	            "userName": "帅八戒",
	            "userID": 3881,
	            "img": null,
	            "upNum": 0,
	            "refUserName": "股市直播",
	            "refUserID": 1100914,
	            "refContent": "市场再现个股“闪崩”，宁波精达、凯恩股份跌停。",
	            "fromType": "TC",
	            height: 120,
	            myrichvalue: [],
	            newrefresh: false,
	            refreshtime: 1492571764000,
	            selfuser: 0 },
	        skinType: 0

	    }},
	    methods: {

	        formatTime: function formatTime(time) {
	            var strTime;
	            if (this.platform == 'android') {
	                strTime = weexEventModule.TimeFormate("1", time, "yyyy-MM-dd HH:mm");
	            } else {
	                strTime = date.formatDate(new Date(time), "yyyy-MM-dd hh:mm");
	            }
	            return strTime;
	        },
	        onclickTucao: function onclickTucao() {
	            if (this.platform == 'iOS') {
	                if (event.userLoginState() != '1') {
	                    var json = {
	                        feedID: this.shuoshuoitem.topicID,
	                        refMsgUserID: this.shuoshuoitem.refUserID,
	                        refMsgID: this.shuoshuoitem.topicID,
	                        type: 'O',
	                        topicID: this.shuoshuoitem.topicID,
	                        preText: "@" + this.shuoshuoitem.userName + "  "
	                    };
	                    event.enterToEdit(json);
	                }
	            } else if (this.platform == 'android') {
	                if (weexEventModule.getStartJoinInTGBActivityFlag() != '1') {
	                    var optionJson = [{
	                        "intentKey": "CURRENT_SEND_MODE_KEY",
	                        "intentKeyValueClassName": "int",
	                        "intentKeyValue": 20

	                    }, {
	                        "intentKey": "USERNAME_KEY",
	                        "intentKeyValueClassName": "String",
	                        "intentKeyValue": this.shuoshuoitem.userName
	                    }, {
	                        "intentKey": "MSG_AND_REMSG_BEAN_KEY",
	                        "intentKeyValueClassName": "MsgAndReMsgBean",
	                        "intentKeyValue": "{\"feedID\":" + this.shuoshuoitem.topicID + ",\"refMsgUserID\":" + this.shuoshuoitem.refUserID + ",\"refMsgID\":" + this.shuoshuoitem.topicID + "}"
	                    }];
	                    weexEventModule.startOtherNativeActivity2('com.taoguba.app.activity.SendEditActivity', optionJson);
	                }
	            } else {}
	        }

	    },
	    ready: function ready() {}
	};}
	/* generated by weex-loader */


/***/ },
/* 182 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "list",
	      "classList": function () {return ['list', 'list-' + (this.skinType)]},
	      "children": [
	        {
	          "type": "refresh",
	          "classList": function () {return ['refresh-view', 'refresh-view-' + (this.skinType)]},
	          "attr": {
	            "display": function () {return this.refresh_display},
	            "refreshing": function () {return this.refreshing}
	          },
	          "events": {
	            "refresh": "onrefresh"
	          },
	          "children": [
	            {
	              "type": "loading-indicator",
	              "classList": [
	                "indicator"
	              ]
	            },
	            {
	              "type": "text",
	              "classList": function () {return ['refresh-arrow', 'refresh-arrow-' + (this.skinType)]},
	              "attr": {
	                "value": "查看更多吐槽消息"
	              }
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "repeat": {
	            "expression": function () {return this.shuoshuoArray},
	            "value": "shuoshuoitem"
	          },
	          "id": function () {return this.shuoshuoitem.idfeedID},
	          "children": [
	            {
	              "type": "shuoshuo_item",
	              "id": "sub",
	              "attr": {
	                "shuoshuoitem": function () {return this.shuoshuoitem}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 183 */
/***/ function(module, exports) {

	module.exports = {
	  "list": {
	    "width": 750
	  },
	  "list-0": {
	    "backgroundColor": "#f5f5f5"
	  },
	  "list-1": {
	    "backgroundColor": "#15253d"
	  },
	  "loading-view": {
	    "width": 750,
	    "height": "50wx",
	    "display": "flex",
	    "MsFlexAlign": "center",
	    "WebkitAlignItems": "center",
	    "WebkitBoxAlign": "center",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "loading-view-1": {
	    "backgroundColor": "#15253d"
	  },
	  "loading-view-0": {
	    "backgroundColor": "#f5f5f5"
	  },
	  "refresh-arrow": {
	    "marginTop": "3wx",
	    "height": "12wx",
	    "width": "200wx",
	    "fontSize": "12wx",
	    "textAlign": "center",
	    "alignItems": "center"
	  },
	  "refresh-arrow-0": {
	    "color": "#BBBBBB"
	  },
	  "refresh-arrow-1": {
	    "color": "#666666"
	  },
	  "refresh-view": {
	    "width": 750,
	    "height": "40wx",
	    "display": "flex",
	    "MsFlexAlign": "center",
	    "WebkitAlignItems": "center",
	    "WebkitBoxAlign": "center",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "refresh-view-0": {
	    "backgroundColor": "#f5f5f5"
	  },
	  "refresh-view-1": {
	    "backgroundColor": "#15253d"
	  },
	  "indicator": {
	    "height": "25wx",
	    "width": "25wx",
	    "color": "#889967"
	  }
	}

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _typeof2 = __webpack_require__(4);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _stringify = __webpack_require__(127);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var date = __webpack_require__(122);
	__webpack_require__(72);
	__webpack_require__(129);
	__webpack_require__(178);
	var stream = __weex_require__('@weex-module/stream');
	var modal = __weex_require__('@weex-module/modal');
	var dom = __weex_require__('@weex-module/dom');
	var websocket = __weex_require__('@weex-module/webSocket');
	var weexEventModule = __weex_require__('@weex-module/weexEventModule');
	var ios_event = __weex_require__('@weex-module/event');

	var taoguba = __webpack_require__(121);
	var utils = __webpack_require__(185);
	var weexModalUIModule = __weex_require__('@weex-module/weexModalUIModule');
	module.exports = {

	    data: function () {return {
	        refreshing: 'false',
	        refresh_display: 'hide',
	        shuoshuoArray: [],
	        test: 's-test',
	        msg: '下拉刷新',
	        textClass: 'dayclass',
	        TAG: 'shuoshuo.we',
	        skinType: 0,
	        showLoading: 'hide',
	        pageNo: 1,
	        isFirst: 1,
	        feedID: 0,
	        platform: '',
	        loginUserId: '',
	        newDate: new Date().getTime()
	    }},

	    methods: {
	        autoRefresh: function autoRefresh() {
	            var self = this;
	            self.pageNo = 0;
	            this.$call('timer', 'setTimeout', function () {
	                self.refreshing = "true";
	                self.isFirst = 0;
	            }, 200);
	        },
	        scrollToBottom: function scrollToBottom(e) {
	            var self = this;
	            console.log('scrollToElement');
	            if (self.shuoshuoArray.length > 0) {
	                var id = self.shuoshuoArray[self.shuoshuoArray.length - 1].idfeedID;
	                var offset = self.shuoshuoArray.length - 1;
	                var el = this.$el(id);
	                dom.scrollToElement(el, { offset: offset });
	            }
	        },
	        onloading: function onloading(e) {
	            console.log('onloading');
	            var self = this;
	            self.showLoading = 'show';
	            self.pageNo = self.pageNo + 1;
	            self.refresh();
	        },
	        onrefresh: function onrefresh(e) {

	            var self = this;
	            self.msg = '下拉刷新';
	            self.pageNo = self.pageNo + 1;
	            self.refresh_display = 'show';
	            this.$call('timer', 'setTimeout', function () {
	                self.refresh_display = 'hide';
	            }, 2000);
	            self.refresh();
	        },

	        refresh: function refresh() {
	            var self = this;
	            var url = taoguba.apiGetTucaoList();
	            var body = {};

	            if (self.platform == 'iOS' || self.platform == 'android') {
	                body.url = url;
	                body.pageNo = self.pageNo;
	                body.feedID = self.feedID;
	            }
	            stream.fetch({
	                method: 'GET',
	                url: url + 'pageNo=' + self.pageNo + '&feedID=' + self.feedID,
	                body: body,
	                headers: {
	                    'Content-Type': 'application/x-www-form-urlencoded',
	                    token: taoguba.getToken()
	                }
	            }, function (ret) {
	                self.refresh_display = 'hide';
	                self.showLoading = 'hide';
	                self.refreshing = "false";
	                var result = (0, _stringify2.default)(ret);

	                console.log("self.loginUserId :" + self.loginUserId);

	                if (!ret.ok) {} else {
	                    if (self.pageNo == 1) {
	                        self.shuoshuoArray.splice(0, self.shuoshuoArray.length);
	                    }
	                    var json = ret.data;

	                    if (json && (typeof json === 'undefined' ? 'undefined' : (0, _typeof3.default)(json)) != 'object') {
	                        try {
	                            json = eval('(' + ret.data + ')');
	                        } catch (e) {}
	                    }
	                    var resultStatus;
	                    if ((typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object' || self.platform == 'iOS') {
	                        if (json && json.status == true) {
	                            resultStatus = '1';
	                        } else {
	                            resultStatus = '0';
	                        }
	                    } else {
	                        resultStatus = weexEventModule.isStatus(json.errorCode, json.status);
	                    }


	                    if (resultStatus == '1') {
	                        if (json.dto) {
	                            if (json.dto && json.dto.length > 0) {

	                                for (var i = 0; i < json.dto.length; i++) {
	                                    var stockitem = json.dto[i];
	                                    stockitem.img = taoguba.getLogoImageUrl(stockitem.img);
	                                    var content = stockitem.content;
	                                    content = utils.ubball(content);

	                                    if (content.length > 50) {
	                                        content = content.substring(0, 50);
	                                    }
	                                    stockitem.content = content;

	                                    var refContent = stockitem.refContent;
	                                    refContent = utils.ubball(refContent);

	                                    if (refContent.length > 50) {
	                                        refContent = refContent.substring(0, 50);
	                                    } else {
	                                        refContent = refContent;
	                                    }
	                                    stockitem.refContent = refContent;
	                                    if (stockitem.fromType == "TC") {
	                                        stockitem.refContent = '';
	                                    }

	                                    var refreshtime = stockitem.createdt;
	                                    if (Math.abs(self.newDate - stockitem.createdt) >= 30 * 60 * 1000 || i == 0) {
	                                        stockitem.newrefresh = true;
	                                        self.newDate = stockitem.createdt;
	                                    } else {

	                                        stockitem.newrefresh = false;
	                                    }
	                                    stockitem.refreshtime = refreshtime;

	                                    if (self.loginUserId == stockitem.userID) {
	                                        stockitem.selfuser = 1;
	                                    } else {
	                                        stockitem.selfuser = 0;
	                                    }

	                                    self.feedID = stockitem.feedID;
	                                    stockitem.idfeedID = 'id' + stockitem.feedID;

	                                    self.shuoshuoArray.unshift(stockitem);
	                                }

	                                if (self.pageNo == 1) {
	                                    self.$call('timer', 'setTimeout', function () {
	                                        self.scrollToBottom();
	                                    }, 2000);
	                                }
	                            } else {
	                                if (self.pageNo == 1) {
	                                    if (self.platform == 'iOS') {} else if (self.platform == 'android') {
	                                        weexModalUIModule.toast("木有新的数据");
	                                    }
	                                } else {
	                                    if (self.platform == 'iOS') {} else if (self.platform == 'android') {
	                                        weexModalUIModule.toast("木有更多数据");
	                                    } else {
	                                        console.log("木有更多数据");
	                                    }
	                                }
	                            }
	                        }
	                    } else {
	                        if ((typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) == 'object') {
	                            console.log(json.errorMessage);
	                        } else {
	                            weexModalUIModule.toast(json.errorMessage);
	                        }
	                    }
	                }
	            }, function (res) {});
	        },
	        connect: function connect() {
	            websocket.WebSocket(taoguba.getaZhiboWebSocet(), '');
	            var self = this;
	            self.onopeninfo = 'connecting...';
	            websocket.onopen = function (e) {
	                self.onopeninfo = 'websocket open';
	                console.log('onopen==');
	            };
	            websocket.onmessage = function (ret) {
	                self.onmessage = ret.data;
	                console.log('onmessage==' + ret.data);
	                var json = ret.data;

	                if (json && (typeof json === 'undefined' ? 'undefined' : (0, _typeof3.default)(json)) != 'object') {
	                    try {
	                        json = eval('(' + ret.data + ')');
	                    } catch (e) {}
	                }
	                if (json.reply && 'TUCAO' == json.reply) {
	                    self.receiveStockItem(json.dto);
	                }
	            };
	            websocket.onerror = function (e) {
	                self.onerrorinfo = e.data;
	                console.log('onerrorinfo==' + e.data);
	            };
	            websocket.onclose = function (e) {
	                self.onopeninfo = '';
	                self.onerrorinfo = e.code;
	                console.log('onclose==' + e.code);
	            };
	        },
	        send: function send(e) {},
	        close: function close(e) {
	            websocket.close();
	        },
	        receiveStockItem: function receiveStockItem(cstockitem) {
	            var self = this;
	            var stockitem = cstockitem;
	            stockitem.img = taoguba.getLogoImageUrl(stockitem.img);

	            if (stockitem.fromType != "TC") {
	                if (stockitem.refContent && stockitem.refContent.length > 50) {
	                    stockitem.refContent = stockitem.refContent.substring(0, 50) + '...';
	                } else {
	                    stockitem.refContent = stockitem.refContent;
	                }
	            } else {
	                stockitem.refContent = '';
	            }
	            var refreshtime = stockitem.createdt;
	            if (Math.abs(self.newDate - stockitem.createdt) >= 30 * 60 * 1000) {
	                stockitem.newrefresh = true;
	                self.newDate = stockitem.createdt;
	            } else {

	                stockitem.newrefresh = false;
	            }
	            stockitem.refreshtime = refreshtime;

	            if (self.loginUserId == stockitem.userID) {
	                stockitem.selfuser = 1;
	            } else {
	                stockitem.selfuser = 0;
	            }
	            self.feedID = stockitem.feedID;
	            stockitem.idfeedID = 'id' + stockitem.feedID;
	            self.shuoshuoArray.push(stockitem);

	            if (self.pageNo == 1) {
	                self.$call('timer', 'setTimeout', function () {
	                    self.scrollToBottom();
	                }, 2000);
	            }
	        }
	    },
	    created: function created() {
	        var self = this;
	        self.platform = self.$getConfig().env.platform;
	        console.log("self.platform :" + self.platform);
	        var skinType = this.$getConfig().skinType;
	        if (skinType == undefined) {
	            skinType = 0;
	        }
	        self.skinType = skinType;

	        if (self.platform === 'android') {
	            self.loginUserId = weexEventModule.getUserID();
	        }
	        if (self.platform === 'iOS') {
	            self.loginUserId = ios_event.getUserID();
	        }

	        console.log("self.loginUserId :" + self.loginUserId);

	        self.connect();
	    },
	    destroyed: function destroyed() {
	        var self = this;
	        self.close();
	    },
	    ready: function ready() {
	        var self = this;
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 185 */
/***/ function(module, exports) {

	exports.ubball = function ubball(strContent) {
	    if(strContent ==null){
	        return;
	    }
	    strContent = strContent.replace(/\[gguba\](.+?)\[\/gguba\]/ig,function($1){
	        $1 = $1.replace("[gguba]","");
	        $1 = $1.replace("[/gguba]","");
	        return $1;
	    });
	    strContent = strContent.replace(/\[gubar\](.+?)\[\/gubar\]/ig,function($1){
	        $1 = $1.replace("[gubar]","");
	        $1 = $1.replace("[/gubar]","");
	        return $1;});
	    strContent = strContent.replace(/\[tag\](.+?)\[\/tag\]/ig,function($1){
	        $1 = $1.replace("[tag]","");
	        $1 = $1.replace("[/tag]","");
	        return $1;});
	    return strContent;
	}

	//refContent =  utils.replaceAll(refContent,/\[gubar\](.+?)\[\/gubar\]/ig,'','[gubar]','[/gubar]');
	exports.replaceAll = function replaceAll(sourcestr,regExp,replacestr,tagstr,tagstr2) {
	    if(sourcestr ==null){
	        return;
	    }
	    sourcestr = sourcestr.replace(regExp,function($1){
	        if(replacestr==null){
	            replacestr='';
	        }
	        $1 = $1.replace(tagstr,replacestr);
	        if(tagstr2!=null){
	            $1 = $1.replace(tagstr2,replacestr);
	        }
	        return $1;
	    });

	    return sourcestr;
	}

	// String.prototype.replaceAll = function (FindText, RepText) {
	//     var regExp = new RegExp(FindText, "gm");
	//     return this.replace(regExp, RepText);
	// }

/***/ }
/******/ ]);