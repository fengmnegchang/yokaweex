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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(142)
	var __weex_style__ = __webpack_require__(143)
	var __weex_script__ = __webpack_require__(144)

	__weex_define__('@weex-component/9ce8c5696a901e1e935421bcb1cbb4e5', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/9ce8c5696a901e1e935421bcb1cbb4e5',undefined,undefined)

/***/ },

/***/ 87:
/***/ function(module, exports) {

	var BASE_URL = {
	    //https://github.com/fengmnegchang/yokaweex
	    IP: 'github.com/fengmnegchang/yokaweex',
	    HTTP: 'https://',

	};

	var YOKA = {
	    edittj:"http://brandservice.yoka.com/v1/?_c=cmsbrandindex&_a=getCmsForZhuNew&_moduleId=29&channel=23&column=103&skip=45&limit=15&p=",

	};

	exports.getedittj = function () {
	    var url = YOKA.edittj;
	    console.log('edittj==' + url);
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
	        url = BASE_URL.HTTP + BASE_URL.IP + '/yoka' + path.substring(1, path.length);
	    } else {
	        url = BASE_URL.HTTP + BASE_URL.IP + '/yoka' + path.substring(1, path.length);
	        ;
	    }
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


	exports.getUrlParam = function getUrlParam(key) {
	    var reg = new RegExp('[?|&]' + key + '=([^&]+)')
	    var match = location.search.match(reg)
	    return match && match[1]
	}


/***/ },

/***/ 142:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "scroller",
	      "classList": [
	        "scroller"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "row"
	          ],
	          "repeat": {
	            "expression": function () {return this.rows},
	            "value": "row"
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "ref": "mainlist_text_day_night_ref",
	                "value": function () {return this.row}
	              },
	              "classList": function () {return [this.textClass]},
	              "events": {
	                "click": "openitem"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 143:
/***/ function(module, exports) {

	module.exports = {
	  "scroller": {
	    "borderWidth": 3,
	    "borderStyle": "solid",
	    "borderColor": "rgb(162,217,192)",
	    "marginLeft": 1,
	    "marginRight": 1
	  },
	  "row": {
	    "height": 150,
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "paddingLeft": 30,
	    "borderBottomWidth": 2,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#DDDDDD"
	  },
	  "dayclass": {
	    "color": "#666666",
	    "fontSize": 40,
	    "fontWeight": "bold"
	  },
	  "nightclass": {
	    "color": "#ff0000",
	    "fontSize": 40,
	    "fontWeight": "bold"
	  }
	}

/***/ },

/***/ 144:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var navigator = __weex_require__('@weex-module/navigator');

	var yoka = __webpack_require__(87);

	var globalEventModule = __weex_require__('@weex-module/globalEvent');
	exports.default = {
	    data: {
	        rows: [],
	        themetype: 0,
	        textClass: 'dayclass',
	        TAG: 'mainlist.we'
	    },
	    created: function created() {
	        this.themetype = this.$getConfig().themetype;
	        this.rows.push('fashion/edittj');
	        this.rows.push('fashion/focuspager');
	        this.rows.push('tabbar');
	        this.rows.push('scroller-demo');
	        this.rows.push('list-demo');
	        this.getOptions();
	    },
	    ready: function ready() {
	        var self = this;
	        globalEventModule.addEventListener("mainlist_text_day_night", function (options) {
	            self.themetype = options.themetype;
	            if (self.themetype == 0) {
	                self.textClass = 'dayclass';
	            } else {
	                self.textClass = 'nightclass';
	            }
	        });
	    },

	    methods: {
	        openitem: function openitem(event) {
	            var name = event.target.attr.value;

	            navigator.push({
	                url: yoka.getDefaultUrl(name),
	                animated: "true"
	            }, function (event) {});
	        },

	        getOptions: function getOptions() {},

	        changeSkin: function changeSkin(themetype) {
	            if (this.themetype == 0) {
	                this.textClass = 'dayclass';
	            } else {
	                this.textClass = 'nightclass';
	            }
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });