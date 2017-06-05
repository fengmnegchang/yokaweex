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

	var __weex_template__ = __webpack_require__(181)
	var __weex_style__ = __webpack_require__(182)
	var __weex_script__ = __webpack_require__(183)

	__weex_define__('@weex-component/84398169940627efa20881ba5ade01c7', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/84398169940627efa20881ba5ade01c7',undefined,undefined)

/***/ },

/***/ 127:
/***/ function(module, exports) {

	var BASE_URL = {
	    //win 执行start npm run build:native  npm run build:browser  npm run serve &  npm run dev:yoka
	    //raw.githubusercontent.com/fengmnegchang/yokaweex/master 192.168.1.15:8080 192.168.1.9:8080
	    IP: 'raw.githubusercontent.com/fengmnegchang/yokaweex/master',
	    HTTP: 'https://',//https:// http://

	};

	var YOKA = {
	    edittj:"http://brandservice.yoka.com/v1/?_c=cmsbrandindex&_a=getCmsForZhuNew&_moduleId=29&channel=23&column=103&skip=45&limit=15&p=",
	    fashion_focus:"http://www.yoka.com/club/",
	    fashion_foot_tag:"http://www.yoka.com/club/",
	    beauty:"http://www.yoka.com/beauty/",
	    yokam:"http://www.yoka.com/dna/m/",

	};
	exports.getyokam = function () {
	    var url = YOKA.yokam;
	    console.log('yokam==' + url);
	    return url;
	};
	exports.getbeauty = function () {
	    var url = YOKA.beauty;
	    console.log('beauty==' + url);
	    return url;
	};
	exports.getfashionfoottag = function () {
	    var url = YOKA.fashion_foot_tag;
	    console.log('fashion_foot_tag==' + url);
	    return url;
	};
	exports.getfashionfocus = function () {
	    var url = YOKA.fashion_focus;
	    console.log('fashion_focus==' + url);
	    return url;
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

	    }
	    console.log('getImageUrl=='+url);
	    return url;
	};

	exports.getUrl = function (path) {
	    var url;
	    if (typeof window === 'object') {
	        url = BASE_URL.HTTP+BASE_URL.IP+'/'+path;

	    }else{
	        url =  BASE_URL.HTTP +BASE_URL.IP + '/index.html?page=./' +path;
	    }

	    console.log('getUrl==' + url);
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

/***/ 181:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "id": "menu",
	      "classList": function () {return ['menu', 'menu-' + (this.showmenu)]},
	      "style": {
	        "height": function () {return this.deviceHeight}
	      },
	      "events": {
	        "click": "close"
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "menu-header"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "menu-header-title"
	              ],
	              "attr": {
	                "value": "主题"
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "id": "main",
	      "classList": function () {return ['panel', 'panel-' + (this.showmenu)]},
	      "style": {
	        "height": function () {return this.deviceHeight}
	      },
	      "events": {
	        "click": "toggle"
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "btn-hamburger"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "style": {
	                "width": 50,
	                "height": 50
	              },
	              "attr": {
	                "src": function () {return this.srcmenu}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "tooltip"
	              ],
	              "attr": {
	                "value": "点击打开"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 182:
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "flexDirection": "row"
	  },
	  "panel": {
	    "width": 750,
	    "backgroundColor": "#00BDFF"
	  },
	  "panel-0": {
	    "left": 0
	  },
	  "panel-1": {
	    "left": 500
	  },
	  "menu": {
	    "backgroundColor": "#1D1F20",
	    "backgroundImage": "linear-gradient(145deg, #1D1F20, #404348)",
	    "right": -750,
	    "position": "absolute",
	    "width": 750
	  },
	  "menu-0": {
	    "right": -750
	  },
	  "menu-1": {
	    "right": 0
	  },
	  "btn-hamburger": {
	    "top": 0,
	    "right": 0,
	    "bottom": 0,
	    "left": 0,
	    "flexDirection": "row"
	  },
	  "tooltip": {
	    "fontSize": 30,
	    "color": "#000000"
	  },
	  "menu-header": {
	    "padding": 20
	  }
	}

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var yoka = __webpack_require__(127);
	module.exports = {
	    data: function () {return {
	        srcmenu: yoka.getUrl('/html/images/menu.png'),
	        showmenu: 0,
	        deviceHeight: 0,
	        platform: ''

	    }},
	    created: function created() {
	        var self = this;
	        self.platform = self.$getConfig().env.platform;
	        self.deviceHeight = self.$getConfig().env.deviceHeight;
	    },
	    ready: function ready() {
	        var self = this;
	    },

	    methods: {
	        toggle: function toggle(e) {
	            this.showmenu = 1;
	        },
	        close: function close(e) {
	            this.showmenu = 0;
	        }

	    }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });