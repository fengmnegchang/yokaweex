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

	var __weex_template__ = __webpack_require__(169)
	var __weex_style__ = __webpack_require__(170)
	var __weex_script__ = __webpack_require__(171)

	__weex_define__('@weex-component/6c9cccbea86bf74c7058b742900f51b5', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/6c9cccbea86bf74c7058b742900f51b5',undefined,undefined)

/***/ },

/***/ 121:
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

/***/ 169:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['item', 'item-' + (this.skinType)]},
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
	            "value": function () {return (this.dateNums(this.meetingitem.dateNum)) + '（' + (this.meetingitem.week) + '）'}
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
	      "events": {
	        "click": "pinlunMore"
	      },
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

/***/ 170:
/***/ function(module, exports) {

	module.exports = {
	  "item": {
	    "marginLeft": "16wx",
	    "marginRight": "16wx",
	    "paddingTop": "10wx",
	    "marginTop": "8wx"
	  },
	  "item-0": {
	    "borderColor": "#DDDDDD"
	  },
	  "item-1": {
	    "borderColor": "#0e1929"
	  },
	  "news-content": {
	    "marginLeft": "5wx",
	    "marginRight": "5wx"
	  },
	  "stock": {
	    "marginTop": "2.5wx"
	  },
	  "meeting_date": {
	    "fontSize": "14wx",
	    "justifyContent": "flex-start",
	    "alignItems": "flex-start"
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
	    "marginLeft": "5wx",
	    "marginRight": "5wx",
	    "marginTop": "15wx",
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
	    "paddingLeft": "15wx",
	    "paddingBottom": "5wx",
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

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var taoguba = __webpack_require__(121);
	var navigator = __weex_require__('@weex-module/navigator');
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
	        getImgUrl: function getImgUrl(url) {
	            return taoguba.getImageUrl(url);
	        },
	        pinlunMore: function pinlunMore() {
	            this._parent.findMore();
	        }
	    }

	};}
	/* generated by weex-loader */


/***/ }

/******/ });