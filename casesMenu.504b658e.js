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
})({"b5qp":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
    this.content = document.querySelector('.content');
    this.burger = document.querySelector('.menu-burger__visible-elem');
    this.mainContainer = document.querySelector('.menu-burger__main-container');
    this.imgContainer = document.querySelector('.menu-burger__michael-container');
    this.imgs = this.imgContainer.querySelectorAll('img');
    this.michIsReady = false;
  }
  _createClass(MenuBurger, [{
    key: "clickOnBurger",
    value: function clickOnBurger() {
      var _this = this;
      this.burger.addEventListener('click', function () {
        _this.mainContainer.classList.add('visible');
      });
    }
  }, {
    key: "removeBurger",
    value: function removeBurger() {
      var _this2 = this;
      this.content.addEventListener('mouseover', function () {
        _this2.mainContainer.classList.remove('visible');
      });
    }
  }, {
    key: "changeImg",
    value: function changeImg() {
      var _this3 = this;
      var startLinks = document.querySelectorAll('._startMich');
      var finishLinks = document.querySelectorAll('._finishMich');
      var _iterator = _createForOfIteratorHelper(startLinks),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var link = _step.value;
          link.addEventListener('mouseover', function (event) {
            if (!_this3.michIsReady) {
              setTimeout(function () {
                _this3.imgs[0].classList.add('hidden');
                _this3.imgs[1].classList.remove('hidden');
              }, 50);
              setTimeout(function () {
                _this3.imgs[1].classList.add('hidden');
                _this3.imgs[2].classList.remove('hidden');
              }, 100);
              setTimeout(function () {
                _this3.imgs[2].classList.add('hidden');
                _this3.imgs[3].classList.remove('hidden');
              }, 150);
              setTimeout(function () {
                _this3.imgs[3].classList.add('hidden');
                _this3.imgs[4].classList.remove('hidden');
                _this3.michIsReady = true;
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
            if (_this3.michIsReady) {
              setTimeout(function () {
                _this3.imgs[4].classList.add('hidden');
                _this3.imgs[3].classList.remove('hidden');
              }, 50);
              setTimeout(function () {
                _this3.imgs[3].classList.add('hidden');
                _this3.imgs[2].classList.remove('hidden');
              }, 100);
              setTimeout(function () {
                _this3.imgs[2].classList.add('hidden');
                _this3.imgs[1].classList.remove('hidden');
              }, 150);
              setTimeout(function () {
                _this3.imgs[1].classList.add('hidden');
                _this3.imgs[0].classList.remove('hidden');
                _this3.michIsReady = false;
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
},{}],"Qtis":[function(require,module,exports) {
"use strict";

var _MenuBurger = _interopRequireDefault(require("../menuBurger/MenuBurger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_MenuBurger.default.clickOnBurger();
_MenuBurger.default.removeBurger();
_MenuBurger.default.changeImg();
},{"../menuBurger/MenuBurger":"b5qp"}]},{},["Qtis"], null)