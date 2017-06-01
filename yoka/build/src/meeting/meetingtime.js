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

	__webpack_require__(140)
	var __weex_template__ = __webpack_require__(144)
	var __weex_style__ = __webpack_require__(145)
	var __weex_script__ = __webpack_require__(146)

	__weex_define__('@weex-component/873a685bd72aa8e715f402c0d94a7d5c', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/873a685bd72aa8e715f402c0d94a7d5c',undefined,undefined)

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
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
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
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(141)
	var __weex_style__ = __webpack_require__(142)
	var __weex_script__ = __webpack_require__(143)

	__weex_define__('@weex-component/meeting_item', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 141 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['item', 'item-' + (this.skinType), 'itemClass_' + (this.platform) + '-' + (this.skinType)]},
	  "events": {
	    "click": "todetail"
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "news-content"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": function () {return ['meeting_date', 'meeting_date-' + (this.skinType)]},
	          "attr": {
	            "value": function () {return (this.dateNums(this.meetingitem.dateNum)) + ' （' + (this.meetingitem.week) + '）'}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": function () {return ['line', 'lineClass-' + (this.skinType)]}
	    },
	    {
	      "type": "div",
	      "classList": [
	        "meeting-stock"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": function () {return ['subject', 'subject-' + (this.skinType)]},
	          "attr": {
	            "value": function () {return this.meetingitem.subject}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "meeting-stock"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": function () {return ['meeting_date', 'stock', 'meeting_date-' + (this.skinType)]},
	          "attr": {
	            "value": "影响个股："
	          }
	        },
	        {
	          "type": "div",
	          "shown": function () {return !this.is_ios_text},
	          "children": [
	            {
	              "type": "mystockview",
	              "attr": {
	                "value": function () {return this.meetingitem.myrichvalue}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "events": {
	            "click": "voidMethod"
	          },
	          "shown": function () {return this.is_ios_text},
	          "children": [
	            {
	              "type": "myrichtext",
	              "attr": {
	                "value": function () {return this.meetingitem.myrichvalue}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "meeting-stock"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": function () {return ['meeting_date', 'meeting_date-' + (this.skinType)]},
	          "attr": {
	            "value": "影响概念："
	          }
	        },
	        {
	          "type": "text",
	          "classList": function () {return ['meeting_s_content', 'meeting_s_content-' + (this.skinType)]},
	          "attr": {
	            "value": function () {return this.itemtags(this.meetingitem.tags)}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "news_bottom"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "img"
	          ],
	          "attr": {
	            "src": function () {return this.getImgUrl('././images/pinglun.png')}
	          }
	        },
	        {
	          "type": "text",
	          "classList": function () {return ['txt', 'textClass-' + (this.skinType)]},
	          "attr": {
	            "value": function () {return this.meetingitem.tuCaoNum}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 142 */
/***/ function(module, exports) {

	module.exports = {
	  "item": {
	    "borderWidth": "1wx",
	    "borderRadius": "5wx",
	    "margin": "8wx",
	    "padding": "10wx",
	    "flex": 1
	  },
	  "item-0": {
	    "borderColor": "#DDDDDD"
	  },
	  "item-1": {
	    "borderColor": "#0e1929"
	  },
	  "itemClass_android-0": {
	    "backgroundColor:active": "#dddddd"
	  },
	  "itemClass_android-1": {
	    "backgroundColor:active": "#132237"
	  },
	  "news-content": {
	    "marginLeft": "1wx",
	    "marginRight": "15wx"
	  },
	  "meeting_date": {
	    "fontSize": "14wx",
	    "justifyContent": "flex-start",
	    "alignItems": "flex-start"
	  },
	  "stock": {
	    "marginTop": "2.5wx"
	  },
	  "meeting_date-0": {
	    "color": "#333333"
	  },
	  "meeting_date-1": {
	    "color": "#999999"
	  },
	  "line": {
	    "height": "1wx",
	    "marginLeft": 10,
	    "marginRight": 10,
	    "marginTop": 10,
	    "marginBottom": 10
	  },
	  "lineClass-0": {
	    "backgroundColor": "#DDDDDD"
	  },
	  "lineClass-1": {
	    "backgroundColor": "#0e1929"
	  },
	  "meeting-stock": {
	    "marginTop": "12wx",
	    "flex": 1,
	    "flexDirection": "row"
	  },
	  "meeting_s_content": {
	    "fontSize": "14wx",
	    "justifyContent": "flex-start",
	    "alignItems": "flex-start",
	    "flex": 1,
	    "color": "#999999"
	  },
	  "news_bottom": {
	    "marginTop": "15wx",
	    "marginBottom": "0wx",
	    "flexDirection": "row",
	    "flex": 1,
	    "justifyContent": "flex-end"
	  },
	  "img": {
	    "width": "15wx",
	    "height": "12wx"
	  },
	  "txt": {
	    "fontSize": "13wx",
	    "marginLeft": "5wx",
	    "marginTop": "-1wx"
	  },
	  "textClass-0": {
	    "color": "#BBBBBB"
	  },
	  "textClass-1": {
	    "color": "#666666"
	  },
	  "subject": {
	    "flex": 1,
	    "fontSize": "16wx",
	    "fontWeight": "bold"
	  },
	  "subject-0": {
	    "color": "#333333"
	  },
	  "subject-1": {
	    "color": "#999999"
	  }
	}

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _typeof2 = __webpack_require__(4);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _stringify = __webpack_require__(127);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var taoguba = __webpack_require__(121);
	var navigator = __weex_require__('@weex-module/navigator');
	var weexNavigator = __weex_require__('@weex-module/weexNavigatorModule');
	var weexEventModule = __weex_require__('@weex-module/weexEventModule');
	module.exports = {
	    created: function created() {
	        this.platform = this.$getConfig().env.platform;
	        if (this.platform == 'iOS') {
	            this.is_ios_text = 1;
	        }
	        var cskinType = this.$getConfig().skinType;
	        if (cskinType == undefined) {
	            cskinType = taoguba.getUrlParam('skinType');
	        }
	        this.skinType = cskinType;
	    },
	    data: function () {return {
	        platform: '',
	        is_ios_text: 0,
	        skinType: 0,
	        meetingitem: {
	            "seq": 21,
	            "dateNum": 20170401,
	            "monthNum": 201704,
	            "week": "星期六",
	            "subject": "中国（深圳）IT领袖峰会",
	            "tags": [],
	            "stocks": [],
	            "feedid": 2918689,
	            "tuCaoNum": 7,
	            myrichvalue: {}
	        }
	    }},
	    methods: {
	        dateNums: function dateNums(dateNum) {
	            var strdateNum = dateNum + '';
	            strdateNum = strdateNum.substring(0, 4) + '-' + strdateNum.substring(4, 6) + '-' + strdateNum.substring(6, 8);
	            return strdateNum;
	        },
	        itemstocks: function itemstocks(stocks) {
	            var strstock = ' ';
	            for (var i = 0; i < stocks.length; i++) {
	                strstock = strstock + stocks[i].name + ',';
	            }
	            return strstock.substring(0, strstock.length - 1);
	        },
	        itemtags: function itemtags(tags) {
	            var strtags = ' ';
	            for (var i = 0; i < tags.length; i++) {
	                strtags = strtags + tags[i].name + ',';
	            }
	            return strtags.substring(0, strtags.length - 1);
	        },

	        todetail: function todetail(event) {
	            console.log('todetail');
	            var name = "meeting/meetingdetail";
	            var self = this;

	            var meetingitem = (0, _stringify2.default)(self.meetingitem);

	            var url = taoguba.getDefaultUrl(name) + '?topicID=' + self.meetingitem.feedid + '&type=R&pageSize=10&meetingitem=' + encodeURIComponent(meetingitem);
	            var params = {
	                'url': url,
	                'animated': 'true',
	                'options': {
	                    'topicID': self.meetingitem.feedid,
	                    'type': 'R',
	                    'pageSize': 10,
	                    'meetingitem': encodeURIComponent(meetingitem)
	                }
	            };
	            if ((typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object' || this.platform == 'iOS') {
	                navigator.push(params, function (event) {});
	            } else {
	                weexNavigator.push(params, function (event) {});
	            }
	        },
	        getImgUrl: function getImgUrl(url) {
	            return taoguba.getImageUrl(url);
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 144 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "list",
	      "classList": [
	        "list"
	      ],
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
	                "value": "下拉刷新"
	              }
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "repeat": {
	            "expression": function () {return this.meetingArray},
	            "value": "meetingitem"
	          },
	          "id": function () {return this.meetingitem.idseq},
	          "children": [
	            {
	              "type": "meeting_item",
	              "attr": {
	                "meetingitem": function () {return this.meetingitem}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 145 */
/***/ function(module, exports) {

	module.exports = {
	  "list": {
	    "width": 750
	  },
	  "content_class-0": {
	    "backgroundColor": "#f5f5f5"
	  },
	  "content_class-1": {
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
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _typeof2 = __webpack_require__(4);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _stringify = __webpack_require__(127);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(140);
	var stream = __weex_require__('@weex-module/stream');
	var modal = __weex_require__('@weex-module/modal');
	var taoguba = __webpack_require__(121);
	var date = __webpack_require__(122);
	var weexEventModule = __weex_require__('@weex-module/weexEventModule');
	var weexModalUIModule = __weex_require__('@weex-module/weexModalUIModule');
	var dom = __weex_require__('@weex-module/dom');

	module.exports = {
	    data: function () {return {
	        refreshing: 'false',
	        refresh_display: 'hide',
	        meetingArray: [],
	        test: 's-test',
	        msg: '下拉刷新',
	        ctHeight: 800,
	        isFirst: 1,
	        skinType: 0,
	        showLoading: 'hide',
	        type: 'D',
	        dateTime: date.formatDate(new Date(), "yyyyMM"),
	        pageNo: 1,
	        platform: '',
	        offset: 0,
	        myRichTextColor: ['#666666', '#999999'],
	        tagTextColor: ['#1191f6', '#005e91']
	    }},

	    methods: {
	        autoRefresh: function autoRefresh() {
	            var self = this;
	            this.$call('timer', 'setTimeout', function () {
	                self.refreshing = 'true';
	            }, 50);
	        },
	        scrollToNow: function scrollToNow(e) {
	            var self = this;
	            console.log('scrollToNow');
	            if (self.meetingArray.length > 0) {
	                var id = self.meetingArray[self.offset].idseq;
	                var offset = self.offset;
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
	            self.refresh_display = 'show';
	            self.refresh();
	        },

	        refresh: function refresh() {
	            this.isFirst = 0;
	            var self = this;
	            var url = taoguba.apiGetTzrlData();
	            var body = {};

	            if (self.platform == 'iOS' || self.platform == 'android') {
	                body.url = url;
	                body.type = self.type;
	                body.dateTime = self.dateTime;
	            }

	            stream.fetch({
	                method: 'GET',
	                url: url + 'type=' + self.type + '&dateTime=' + self.dateTime,
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

	                if (!ret.ok) {} else {
	                    if (self.pageNo == 1) {
	                        self.meetingArray.splice(0, self.meetingArray.length);
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
	                            if (json.dto.listCalendar && json.dto.listCalendar.length > 0) {

	                                for (var i = 0; i < json.dto.listCalendar.length; i++) {
	                                    var meetingitem = json.dto.listCalendar[i];
	                                    meetingitem.idseq = 'id' + meetingitem.seq;

	                                    var currentDate = date.formatDate(new Date(), "yyyyMMdd");
	                                    if (Math.abs(currentDate - meetingitem.dateNum) == 0) {
	                                        if (self.offset == 0) {
	                                            self.offset = i;
	                                        }
	                                        console.log('datenum==' + meetingitem.dateNum);
	                                    }

	                                    if (meetingitem.stocks && meetingitem.stocks.length > 0) {
	                                        var strstock = ' ';
	                                        for (var j = 0; j < meetingitem.stocks.length; j++) {
	                                            strstock = strstock + '[gubar]' + meetingitem.stocks[j].name + '[/gubar]   ';
	                                        }
	                                        strstock.substring(0, strstock.length - 1);
	                                        var myrichvaluejson = {
	                                            content: strstock,
	                                            myrichvalue: [],
	                                            "gravity": "",
	                                            lines: 3,
	                                            tagTextColor: self.tagTextColor[self.skinType]
	                                        };

	                                        var myrich = {};
	                                        myrich.strText = strstock;
	                                        myrich.strTextColor = self.myRichTextColor[self.skinType];
	                                        myrich.strTextSize = 15;
	                                        myrich.onClickType = 0;
	                                        myrichvaluejson.myrichvalue.push(myrich);

	                                        meetingitem.myrichvalue = myrichvaluejson;
	                                    } else {
	                                        meetingitem.myrichvalue = '';
	                                    }
	                                    self.meetingArray.push(meetingitem);
	                                }
	                                if (self.type == 'D') {
	                                    self.$call('timer', 'setTimeout', function () {
	                                        self.scrollToNow();
	                                    }, 3000);
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
	        }
	    },
	    created: function created() {

	        this.ctHeight = this.$getConfig().env.deviceHeight - 320;
	        this.platform = this.$getConfig().env.platform;
	        var cskinType = this.$getConfig().skinType;
	        ;
	        if (this.platform != 'iOS' && this.platform != 'android') {
	            cskinType = taoguba.getUrlParam('skinType');
	        }
	        if (cskinType == undefined) {
	            cskinType = 0;
	        }
	        this.skinType = cskinType;
	    },
	    ready: function ready() {}
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);