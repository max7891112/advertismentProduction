// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"KkeF":[function(require,module,exports) {
module.exports = "logo.62156480.svg";
},{}],"TGPn":[function(require,module,exports) {
module.exports = "mich0.fd2d7137.png";
},{}],"gqgf":[function(require,module,exports) {
module.exports = "mich1.f17a256e.png";
},{}],"YlYj":[function(require,module,exports) {
module.exports = "mich2.5868cc79.png";
},{}],"GSOy":[function(require,module,exports) {
module.exports = "mich3.2a2d7bc5.png";
},{}],"S3Qn":[function(require,module,exports) {
module.exports = "mich4.b36b8ddb.png";
},{}],"b5qp":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _logo = _interopRequireDefault(require("../menuBurger/img/logo.svg"));
var _mich = _interopRequireDefault(require("../menuBurger/img/mich0.png"));
var _mich2 = _interopRequireDefault(require("../menuBurger/img/mich1.png"));
var _mich3 = _interopRequireDefault(require("../menuBurger/img/mich2.png"));
var _mich4 = _interopRequireDefault(require("../menuBurger/img/mich3.png"));
var _mich5 = _interopRequireDefault(require("../menuBurger/img/mich4.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var MenuBurger = /*#__PURE__*/function () {
  function MenuBurger() {
    _classCallCheck(this, MenuBurger);
    // this.content = document.querySelector('.content');
    // this.contentAnorherPage = document.querySelector('.content-another-page');
    this.michIsReady = false;
  }
  _createClass(MenuBurger, [{
    key: "render",
    value: function render() {
      var REACT_MENU = document.querySelector('.menu-burger');
      var htmlContent = '';
      htmlContent = " \n            <div class=\"menu-burger__visible-elem\">\n            <div class=\"menu-burger__icon\">\n                <span></span>\n            </div>\n            </div>\n            <div class=\"menu-burger__main-container\">\n                <a href=\"#\" ><img src=".concat(_logo.default, " alt=\"logo\" class=\"menu-burger__logo _smooth-link\" data-goto=\".main-page\"></a> \n                <nav class=\"menu-burger__navigation\">\n                    <ul class=\"menu-burger__container\">\n                        <li class=\"menu-burger__item\"><a href=\"../../index.html#main-page\" ><span>\u0413\u043B\u0430\u0432\u043D\u0430\u044F</span></a></li>\n                        <li class=\"menu-burger__item\"><a href=\"../../index.html#our-service\"><span>\u041D\u0430\u0448\u0438 \u0443\u0441\u043B\u0443\u0433\u0438</span></a></li>\n                        <li class=\"menu-burger__item\"><a href=\"../../index.html#why\"><span>\u041F\u043E\u0447\u0435\u043C\u0443 \u043C\u044B?</span></a></li>\n                        <li class=\"menu-burger__item\"><a href=\"../../index.html#work-with-us\"><span>\u0420\u0435\u043A\u043B\u0430\u043C\u043E\u0434\u0430\u0442\u0435\u043B\u0438</span></a></li>\n                        <li class=\"menu-burger__item\"><a href=\"../../index.html#our-team\"><span>\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430</span></a></li>\n                        <li class=\"menu-burger__item\"><a href=\"../../index.html#cases\"><span>\u041A\u0435\u0439\u0441\u044B</span></a></li>\n                        <li class=\"menu-burger__item\"><a href=\"../../index.html#footer\"><span>\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</span></a></li>\n                    </ul>\n                </nav>\n                <div class=\"menu-burger__copyright\">\n                    <div class=\"menu-burger__line\"></div>\n                    <a href=\"https://vk.com/encendedor0111\" target=\"_blank\" class=\"menu-burger__michael-container\">\n                        <div class=\"menu-burger__img-container\" data-mich-container=\"true\">\n                            <img src=").concat(_mich.default, " alt=\"michael\" class=\"menu-burger__img _startMich\">\n                            <img src=").concat(_mich2.default, " alt=\"michael\" class=\"menu-burger__img hidden\">\n                            <img src=").concat(_mich3.default, " alt=\"michael\" class=\"menu-burger__img hidden\">\n                            <img src=").concat(_mich4.default, " alt=\"michael\" class=\"menu-burger__img hidden\">\n                            <img src=").concat(_mich5.default, " alt=\"michael\" class=\"menu-burger__img hidden _finishMich\">\n                        </div>\n                        <p class=\"menu-burger__michael-name\">Michael</p>\n                    </a>\n                    <div class=\"menu-burger__line\"></div>\n                </div>\n            </div>\n        ");
      REACT_MENU.innerHTML = htmlContent;
    }
  }, {
    key: "clickOnBurger",
    value: function clickOnBurger() {
      var burger = document.querySelector('.menu-burger__visible-elem');
      var mainContainer = document.querySelector('.menu-burger__main-container');
      burger.addEventListener('click', function () {
        mainContainer.classList.add('visible');
      });
    }
  }, {
    key: "removeBurger",
    value: function removeBurger() {
      var mainContainer = document.querySelector('.menu-burger__main-container');
      var content = '';
      if (document.querySelector('.content')) {
        content = document.querySelector('.content');
        content.addEventListener('mouseover', function () {
          mainContainer.classList.remove('visible');
        });
      }
    }
  }, {
    key: "changeImg",
    value: function changeImg() {
      var _this = this;
      var startLinks = document.querySelectorAll('._startMich');
      var finishLinks = document.querySelectorAll('._finishMich');
      var imgs = document.querySelector('.menu-burger__michael-container').querySelectorAll('img');
      var _iterator = _createForOfIteratorHelper(startLinks),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var link = _step.value;
          link.addEventListener('mouseover', function (event) {
            if (!_this.michIsReady) {
              setTimeout(function () {
                imgs[0].classList.add('hidden');
                imgs[1].classList.remove('hidden');
              }, 50);
              setTimeout(function () {
                imgs[1].classList.add('hidden');
                imgs[2].classList.remove('hidden');
              }, 100);
              setTimeout(function () {
                imgs[2].classList.add('hidden');
                imgs[3].classList.remove('hidden');
              }, 150);
              setTimeout(function () {
                imgs[3].classList.add('hidden');
                imgs[4].classList.remove('hidden');
                _this.michIsReady = true;
              }, 200);
            }
            ;
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var _iterator2 = _createForOfIteratorHelper(finishLinks),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _link = _step2.value;
          _link.addEventListener('mouseout', function (event) {
            if (_this.michIsReady) {
              setTimeout(function () {
                imgs[4].classList.add('hidden');
                imgs[3].classList.remove('hidden');
              }, 50);
              setTimeout(function () {
                imgs[3].classList.add('hidden');
                imgs[2].classList.remove('hidden');
              }, 100);
              setTimeout(function () {
                imgs[2].classList.add('hidden');
                imgs[1].classList.remove('hidden');
              }, 150);
              setTimeout(function () {
                imgs[1].classList.add('hidden');
                imgs[0].classList.remove('hidden');
                _this.michIsReady = false;
              }, 200);
            }
            ;
          });
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "smoothNavigation",
    value: function smoothNavigation() {
      var menuLinks = document.querySelectorAll('._smooth-link[data-goto]');
      if (menuLinks.length != 0) {
        var _iterator3 = _createForOfIteratorHelper(menuLinks),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var menuLink = _step3.value;
            menuLink.addEventListener('click', function (event) {
              var target = event.target;
              if (target.dataset.goto) {
                var gotoBlock = document.querySelector(target.dataset.goto);
                var gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
                window.scrollTo({
                  top: gotoBlockValue,
                  behavior: 'smooth'
                });
                event.preventDefault();
              }
            });
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    }
  }]);
  return MenuBurger;
}();
;
var _default = new MenuBurger();
exports.default = _default;
},{"../menuBurger/img/logo.svg":"KkeF","../menuBurger/img/mich0.png":"TGPn","../menuBurger/img/mich1.png":"gqgf","../menuBurger/img/mich2.png":"YlYj","../menuBurger/img/mich3.png":"GSOy","../menuBurger/img/mich4.png":"S3Qn"}],"XtEv":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mich = _interopRequireDefault(require("../../components/menuBurger/img/mich0.png"));
var _logo = _interopRequireDefault(require("../../components/menuBurger/img/logo.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var HeaderM = /*#__PURE__*/function () {
  function HeaderM() {
    _classCallCheck(this, HeaderM);
    this.REACT_MENU = document.querySelector('.header-m__react-menu');
  }
  _createClass(HeaderM, [{
    key: "render",
    value: function render() {
      var htmlContent = '';
      htmlContent = " \n        <div class=\"header-m__wrapper\">\n            <div class=\"header-m__burger-container\">\n                <div class=\"header-m__logo-burger\">\n                    <img src=".concat(_logo.default, " alt=\"logo\">\n                </div>\n                <nav class=\"header-m__navigation\">\n                    <ul class=\"header-m__list\">\n                        <li><a href=\"../../index.html#main-page-m\" ><span>\u0413\u043B\u0430\u0432\u043D\u0430\u044F</span></a></li>\n                        <li><a href=\"../../index.html#our-service-m\"><span>\u041D\u0430\u0448\u0438 \u0443\u0441\u043B\u0443\u0433\u0438</span></a></li>\n                        <li><a href=\"../../index.html#why-m\"><span>\u041F\u043E\u0447\u0435\u043C\u0443 \u043C\u044B?</span></a></li>\n                        <li><a href=\"../../index.html#work-with-us-m\"><span>\u0420\u0435\u043A\u043B\u0430\u043C\u043E\u0434\u0430\u0442\u0435\u043B\u0438</span></a></li>\n                        <li><a href=\"../../index.html#our-team-m\"><span>\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430</span></a></li>\n                        <li><a href=\"../../index.html#cases-m\"><span>\u041A\u0435\u0439\u0441\u044B</span></a></li>\n                        <li><a href=\"../../index.html#footer-m\"\"><span>\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</span></a></li>\n                    </ul>\n                </nav>\n                <div class=\"header-m__copyright\">\n                    <div class=\"header-m__line\"></div>\n                    <a href=\"https://vk.com/encendedor0111\" target=\"_blank\" class=\"header-m__mich\">\n                        <div class=\"header-m__img-container\">\n                            <img src=").concat(_mich.default, " alt=\"michael\">\n                        </div>\n                        <p class=\"header-m__michael-name\">Michael</p>\n                    </a>\n                    <div class=\"header-m__line\"></div>\n                </div>\n            </div>\n        </div>\n            \n        ");
      this.REACT_MENU.innerHTML = htmlContent;
    }
  }, {
    key: "clickOnBurger",
    value: function clickOnBurger() {
      var _this = this;
      var content = document.querySelector('body');
      var burger = document.querySelector('.header-m__icon');
      burger.addEventListener('click', function () {
        if (!burger.classList.contains('_moving')) {
          if (document.querySelector('.header-m__react-menu')) {
            _this.render();
          }
          var wrapper = document.querySelector('.header-m__wrapper');
          wrapper.classList.remove('hidden');
          wrapper.classList.add('_open');
          burger.classList.add('_moving');
          content.style.overflow = 'hidden';
        } else {
          var _wrapper = document.querySelector('.header-m__wrapper');
          _wrapper.classList.remove('_open');
          burger.classList.remove('_moving');
          content.style.overflow = 'visible';
          if (document.querySelector('.header-m__react-menu')) {
            setTimeout(function () {
              _this.REACT_MENU.innerHTML = '';
            }, 300);
          } else {
            setTimeout(function () {
              _wrapper.classList.add('hidden');
            }, 300);
          }
        }
        ;
      });
    }
  }, {
    key: "clickOnMenuItem",
    value: function clickOnMenuItem() {
      var _this2 = this;
      var menuItems = document.querySelector('.header-m__list').children;
      var burger = document.querySelector('.header-m__icon');
      var content = document.querySelector('body');
      var _iterator = _createForOfIteratorHelper(menuItems),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          item.addEventListener('click', function () {
            var wrapper = document.querySelector('.header-m__wrapper');
            wrapper.classList.remove('_open');
            burger.classList.remove('_moving');
            content.style.overflow = 'visible';
            if (document.querySelector('.header-m__react-menu')) {
              setTimeout(function () {
                _this2.REACT_MENU.innerHTML = '';
              }, 300);
            } else {
              setTimeout(function () {
                wrapper.classList.add('hidden');
              }, 300);
            }
            ;
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      ;
    }
  }]);
  return HeaderM;
}();
;
var _default = new HeaderM();
exports.default = _default;
},{"../../components/menuBurger/img/mich0.png":"TGPn","../../components/menuBurger/img/logo.svg":"KkeF"}],"Qtis":[function(require,module,exports) {
"use strict";

var _MenuBurger = _interopRequireDefault(require("../menuBurger/MenuBurger"));
var _headerM = _interopRequireDefault(require("../../components-m/header-m/header-m"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_MenuBurger.default.render();
_MenuBurger.default.clickOnBurger();
_MenuBurger.default.removeBurger();
_MenuBurger.default.changeImg();
_headerM.default.clickOnBurger();
},{"../menuBurger/MenuBurger":"b5qp","../../components-m/header-m/header-m":"XtEv"}]},{},["Qtis"], null)