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
})({"XQ6K":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROOT_SWIPER_LOGINOVA = exports.ROOT_MODAL = exports.REACT_COMPONENT = void 0;
var REACT_COMPONENT = document.querySelector('.work-with-us__wrapper');
exports.REACT_COMPONENT = REACT_COMPONENT;
var ROOT_SWIPER_LOGINOVA = document.querySelector('.root_swiper_loginova');
exports.ROOT_SWIPER_LOGINOVA = ROOT_SWIPER_LOGINOVA;
var ROOT_MODAL = document.getElementById('ROOT_MODAL');
exports.ROOT_MODAL = ROOT_MODAL;
},{}],"dR6f":[function(require,module,exports) {
module.exports = "strata.fc1c2e7d.png";
},{}],"jeM7":[function(require,module,exports) {
module.exports = "dreamGirl.2ade30ef.jpg";
},{}],"PH2N":[function(require,module,exports) {
module.exports = "skate.0867d14c.jpg";
},{}],"eiVA":[function(require,module,exports) {
module.exports = "crazyGuitar.08954415.jpg";
},{}],"BUYj":[function(require,module,exports) {
module.exports = "ultrafioletGirl.d3363239.jpg";
},{}],"mFuE":[function(require,module,exports) {
module.exports = "japan.0c55567e.jpg";
},{}],"Wszx":[function(require,module,exports) {
module.exports = "dreamingGuy.d10dac76.png";
},{}],"ECyU":[function(require,module,exports) {
module.exports = "eye.f1f284c9.png";
},{}],"RFaF":[function(require,module,exports) {
module.exports = "jumpGuy.87c84eeb.png";
},{}],"jkvx":[function(require,module,exports) {
module.exports = "oldPhone.13b94063.png";
},{}],"Yujq":[function(require,module,exports) {
module.exports = "playingGuitar.d787f5ed.png";
},{}],"EgKB":[function(require,module,exports) {
module.exports = "play.2a4eab11.svg";
},{}],"tA49":[function(require,module,exports) {
module.exports = "book.a2814cc0.png";
},{}],"rNyV":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _var = require("../../constants/var.js");
var _youtubeLightbox = _interopRequireDefault(require("../../libs/youtubeLightbox/youtubeLightbox.js"));
var _strata = _interopRequireDefault(require("./img/strata.png"));
var _dreamGirl = _interopRequireDefault(require("./img/dreamGirl.jpg"));
var _skate = _interopRequireDefault(require("./img/skate.jpg"));
var _crazyGuitar = _interopRequireDefault(require("./img/crazyGuitar.jpg"));
var _ultrafioletGirl = _interopRequireDefault(require("./img/ultrafioletGirl.jpg"));
var _japan = _interopRequireDefault(require("./img/japan.jpg"));
var _dreamingGuy = _interopRequireDefault(require("./img/dreamingGuy.png"));
var _eye = _interopRequireDefault(require("./img/eye.png"));
var _jumpGuy = _interopRequireDefault(require("./img/jumpGuy.png"));
var _oldPhone = _interopRequireDefault(require("./img/oldPhone.png"));
var _playingGuitar = _interopRequireDefault(require("./img/playingGuitar.png"));
var _play = _interopRequireDefault(require("./img/play.svg"));
var _book = _interopRequireDefault(require("./img/book.png"));
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
var WorkWithUs = /*#__PURE__*/function () {
  function WorkWithUs() {
    _classCallCheck(this, WorkWithUs);
  }
  _createClass(WorkWithUs, [{
    key: "render",
    value: function render(logo, image, text, path, href) {
      _var.REACT_COMPONENT.innerHTML = '';
      var htmlContent = '';
      htmlContent = " \n        <div class=\"work-with-us__react-container react-component _invisible\" id=\"strataComponent\">\n            <div class=\"react-component__dinamic-block-container\">\n                <div class=\"react-component__img-wrapper\">\n                    <img src=".concat(logo, " alt=\"\" class=\"react-component__img-strata\">\n                </div>\n                \n                <div class=\"react-component__video-container\">\n                    <a class=\"react-component__link\" data-youtubeLightbox=\"true\">\n                        <img src=").concat(image, " alt=\"#\" class=\"react-component__img\">\n                        <img src=").concat(_play.default, " alt=\"#\" class=\"_icon\">\n                    </a>\n                </div>\n                <p class=\"react-component__text\">").concat(text, "</p>\n                <a href=").concat(href, " class=\"button-dinamic button-dinamic_blue react-component__btn\">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435\n                    <div class=\"button-dinamic__1\"></div>\n                    <div class=\"button-dinamic__2\"></div>\n                    <div class=\"button-dinamic__3\"></div>\n                    <div class=\"button-dinamic__4\"></div>\n                    <div class=\"button-dinamic__5\"></div>\n                    <div class=\"button-dinamic__6\"></div>\n                    <div class=\"button-dinamic__7\"></div>\n                    <div class=\"button-dinamic__8\"></div>\n                </a>\n            </div>\n            <div id=\"youtubelightbox\" class=\"youtubelightbox\" data-playing=\"false\">\n                <div class=\"youtubelightbox__centeredchild\">\n                    <div class=\"youtubelightbox__videowrapper\">\n                        <div id=\"youtubelightboxPlayer\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        ");
      _var.REACT_COMPONENT.innerHTML = htmlContent;
    }
  }, {
    key: "open",
    value: function open(logo, image, text, path, href) {
      this.render(logo, image, text, path, href);
      document.querySelector('.react-component').classList.add('_open');
      this.addListenerForPrepareLightBox();
      // youtubeLightbox.connect('youtubelightbox', 'youtubelightboxPlayer', '.react-component__video-container')
    }
  }, {
    key: "addListenerForChangingComponents",
    value: function addListenerForChangingComponents() {
      var _this = this;
      var strata = document.querySelector('.strata');
      var manue = document.querySelector('.manue');
      var serenity = document.querySelector('.serenity');
      var prostor = document.querySelector('.prostor');
      var malina = document.querySelector('.malina');
      var dragon = document.querySelector('.dragon');
      var allButtons = document.querySelectorAll('.work-with-us__item');
      var wrappers = document.querySelectorAll('.work-with-us__wrapper');
      strata.addEventListener('click', function () {
        var _iterator = _createForOfIteratorHelper(allButtons),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var button = _step.value;
            button.classList.remove('_active');
            button.setAttribute('data-active', 'false');
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
        var _iterator2 = _createForOfIteratorHelper(wrappers),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var wrapper = _step2.value;
            wrapper.classList.remove('work-with-us__anti-center');
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
        strata.classList.add('_active');
        strata.setAttribute('data-active', 'true');
        _this.open(_strata.default, _book.default, "\u0418\u0442\u0430\u043B\u044C\u044F\u043D\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A \u043E\u0434\u0435\u0436\u0434\u044B, \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0432 1974 \u0433\u043E\u0434\u0443. \n            \u042F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u043E\u043C \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u043A\u043E\u0439 \u043E\u0434\u0435\u0436\u0434\u044B \u0432\u043E \u0432\u0441\u0451\u043C \u043C\u0438\u0440\u0435. \u0428\u0442\u0430\u0431-\u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0440\u0430\u0441\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u0442\u0441\u044F \u0432 \u0411\u0430\u0440\u0441\u0435\u043B\u043E\u043D\u0435.", 'https://www.youtube.com/watch?v=jyetqrX2hYA', "./components/workWithUs/loginova/loginova.html");
      });
      manue.addEventListener('click', function () {
        var _iterator3 = _createForOfIteratorHelper(allButtons),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var button = _step3.value;
            button.classList.remove('_active');
            button.setAttribute('data-active', 'false');
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        ;
        var _iterator4 = _createForOfIteratorHelper(wrappers),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var wrapper = _step4.value;
            wrapper.classList.remove('work-with-us__anti-center');
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        ;
        manue.classList.add('_active');
        manue.setAttribute('data-active', 'true');
        _this.open(_dreamGirl.default, _oldPhone.default, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, minima!", 'https://www.youtube.com/watch?v=Z7wUyXJSHnk', "./components/workWithUs/levina/levina.html");
      });
      serenity.addEventListener('click', function () {
        var _iterator5 = _createForOfIteratorHelper(allButtons),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var button = _step5.value;
            button.classList.remove('_active');
            button.setAttribute('data-active', 'false');
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        ;
        var _iterator6 = _createForOfIteratorHelper(wrappers),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var wrapper = _step6.value;
            wrapper.classList.remove('work-with-us__anti-center');
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        ;
        serenity.classList.add('_active');
        serenity.setAttribute('data-active', 'true');
        _this.open(_skate.default, _dreamingGuy.default, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi officia harum corporis explicabo laborum\n             voluptates est eligendi possimus? Tempore!", 'https://www.youtube.com/watch?v=jyetqrX2hYA', "./components/workWithUs/larionov/larionov.html");
      });
      prostor.addEventListener('click', function () {
        var _iterator7 = _createForOfIteratorHelper(allButtons),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var button = _step7.value;
            button.classList.remove('_active');
            button.setAttribute('data-active', 'false');
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        ;
        var _iterator8 = _createForOfIteratorHelper(wrappers),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var wrapper = _step8.value;
            wrapper.classList.remove('work-with-us__anti-center');
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
        ;
        prostor.classList.add('_active');
        prostor.setAttribute('data-active', 'true');
        _this.open(_crazyGuitar.default, _playingGuitar.default, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, minima!', 'https://www.youtube.com/watch?v=Z7wUyXJSHnk', "./components/workWithUs/belov/belov.html");
      });
      malina.addEventListener('click', function () {
        var _iterator9 = _createForOfIteratorHelper(allButtons),
          _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var button = _step9.value;
            button.classList.remove('_active');
            button.setAttribute('data-active', 'false');
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
        ;
        var _iterator10 = _createForOfIteratorHelper(wrappers),
          _step10;
        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var wrapper = _step10.value;
            wrapper.classList.remove('work-with-us__anti-center');
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
        ;
        malina.classList.add('_active');
        malina.setAttribute('data-active', 'true');
        _this.open(_ultrafioletGirl.default, _jumpGuy.default, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi officia harum corporis explicabo laborum voluptates \n            est eligendi possimus? Tempore!", 'https://www.youtube.com/watch?v=jyetqrX2hYA', '#');
      });
      dragon.addEventListener('click', function () {
        var _iterator11 = _createForOfIteratorHelper(allButtons),
          _step11;
        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var button = _step11.value;
            button.classList.remove('_active');
            button.setAttribute('data-active', 'false');
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
        ;
        var _iterator12 = _createForOfIteratorHelper(wrappers),
          _step12;
        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var wrapper = _step12.value;
            wrapper.classList.remove('work-with-us__anti-center');
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
        ;
        dragon.classList.add('_active');
        dragon.setAttribute('data-active', 'true');
        _this.open(_japan.default, _eye.default, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, minima!', 'https://www.youtube.com/watch?v=Z7wUyXJSHnk', "#");
      });
    }
  }, {
    key: "addListenerForPrepareLightBox",
    value: function addListenerForPrepareLightBox() {
      var _this2 = this;
      var target = document.querySelector('.react-component__link');
      var strata = document.querySelector('.strata');
      var manue = document.querySelector('.manue');
      var serenity = document.querySelector('.serenity');
      var prostor = document.querySelector('.prostor');
      var malina = document.querySelector('.malina');
      var wrapper = document.querySelector('.work-with-us__wrapper');
      // const reactComponentImg = document.querySelector('.react-component__img');

      target.addEventListener('click', function () {
        var container = document.querySelector('.react-component__dinamic-block-container');
        if (!container.getAttribute('data-open-elem')) {
          container.classList.add('_increase');
          container.setAttribute('data-open-elem', 'true');
          document.querySelector('.work-with-us').classList.add('_increase');
          console.log('CLICK 1');
          wrapper.classList.add('work-with-us__anti-center');
        } else {
          _var.REACT_COMPONENT.innerHTML = "";
          if (strata.getAttribute('data-active') == 'true') {
            _this2.open(_strata.default, _book.default, "\u0418\u0442\u0430\u043B\u044C\u044F\u043D\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A \u043E\u0434\u0435\u0436\u0434\u044B, \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0432 1974 \u0433\u043E\u0434\u0443. \n                        \u042F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u043E\u043C \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u043A\u043E\u0439 \u043E\u0434\u0435\u0436\u0434\u044B \u0432\u043E \u0432\u0441\u0451\u043C \u043C\u0438\u0440\u0435. \u0428\u0442\u0430\u0431-\u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0440\u0430\u0441\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u0442\u0441\u044F \u0432 \u0411\u0430\u0440\u0441\u0435\u043B\u043E\u043D\u0435.", 'https://www.youtube.com/watch?v=jyetqrX2hYA', "./components/workWithUs/loginova/loginova.html");
            wrapper.classList.remove('work-with-us__anti-center');
            console.log('CLICK 2');
          } else if (manue.getAttribute('data-active') == 'true') {
            _this2.open(_dreamGirl.default, _oldPhone.default, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, minima!", 'https://www.youtube.com/watch?v=Z7wUyXJSHnk', "./components/workWithUs/levina/levina.html");
            wrapper.classList.remove('work-with-us__anti-center');
          } else if (serenity.getAttribute('data-active') == 'true') {
            _this2.open(_skate.default, _dreamingGuy.default, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi officia harum corporis explicabo laborum\n                        voluptates est eligendi possimus? Tempore!", 'https://www.youtube.com/watch?v=jyetqrX2hYA', "./components/workWithUs/larionov/larionov.html");
            wrapper.classList.remove('work-with-us__anti-center');
          } else if (prostor.getAttribute('data-active') == 'true') {
            _this2.open(_crazyGuitar.default, _playingGuitar.default, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, minima!', 'https://www.youtube.com/watch?v=Z7wUyXJSHnk', "./components/workWithUs/belov/belov.html");
            wrapper.classList.remove('work-with-us__anti-center');
          } else if (malina.getAttribute('data-active') == 'true') {
            _this2.open(_ultrafioletGirl.default, _jumpGuy.default, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi officia harum corporis explicabo laborum voluptates \n                        est eligendi possimus? Tempore!", 'https://www.youtube.com/watch?v=jyetqrX2hYA', '#');
            wrapper.classList.remove('work-with-us__anti-center');
          } else {
            _this2.open(_japan.default, _eye.default, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, minima!', 'https://www.youtube.com/watch?v=Z7wUyXJSHnk', "#");
            wrapper.classList.remove('work-with-us__anti-center');
          }
          ;
        }
        ;
      });
    }
  }]);
  return WorkWithUs;
}();
;
var _default = new WorkWithUs();
exports.default = _default;
},{"../../constants/var.js":"XQ6K","../../libs/youtubeLightbox/youtubeLightbox.js":"CQST","./img/strata.png":"dR6f","./img/dreamGirl.jpg":"jeM7","./img/skate.jpg":"PH2N","./img/crazyGuitar.jpg":"eiVA","./img/ultrafioletGirl.jpg":"BUYj","./img/japan.jpg":"mFuE","./img/dreamingGuy.png":"Wszx","./img/eye.png":"ECyU","./img/jumpGuy.png":"RFaF","./img/oldPhone.png":"jkvx","./img/playingGuitar.png":"Yujq","./img/play.svg":"EgKB","./img/book.png":"tA49"}],"CQST":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _var = require("../../constants/var.js");
var _WorkWithUs = _interopRequireDefault(require("../../components/workWithUs/WorkWithUs.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var YoutubeLightbox = /*#__PURE__*/function () {
  function YoutubeLightbox() {
    _classCallCheck(this, YoutubeLightbox);
    this.onYouTubeIframeAPIReady = '';
  }
  _createClass(YoutubeLightbox, [{
    key: "connect",
    value: function connect(youtubelightboxId, youtubelightboxPlayer, youtubelightboxCenteredChild) {
      var linksBtnsSelector = 'a[data-youtubeLightbox]';
      // const linksBtnsSelector = '.lightbox';
      // load Youtube API code asynchronously
      var tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      var isiOS = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)/i) != null; //boolean check for iOS devices

      var youtubelightbox = document.getElementById(youtubelightboxId);
      var player; // variable to hold new YT.Player() instance

      // Hide lightbox when clicked on
      youtubelightbox.addEventListener('click', function () {
        youtubelightbox.style.display = 'none';
        player.stopVideo();
        document.querySelector('.react-component__dinamic-block-container').classList.remove('_increase');
        document.querySelector('.work-with-us').classList.remove('_increase');
      }, false);

      // Exclude youtube iframe from above action
      document.querySelector(youtubelightboxCenteredChild).addEventListener('click', function (e) {
        e.stopPropagation();
      }, false);

      // define onYouTubeIframeAPIReady() function and initialize lightbox when API is ready
      this.onYouTubeIframeAPIReady = function () {
        createlightbox();
      };
      this.onYouTubeIframeAPIReady();
      document.addEventListener('keydown', function (event) {
        if (event.code == 'Escape') {
          if (youtubelightbox && player) {
            youtubelightbox.style.display = 'none';
            player.stopVideo();
          }
        }
      }, false);

      // Extracts the Youtube video ID from a well formed Youtube URL
      function getyoutubeid(link) {
        // Assumed Youtube URL formats
        // https://www.youtube.com/watch?v=Pe0jFDPHkzo
        // https://youtu.be/Pe0jFDPHkzo
        // https://www.youtube.com/v/Pe0jFDPHkzo
        // and more

        //See http://stackoverflow.com/a/6904504/4360074
        var youtubeidreg = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
        return youtubeidreg.exec(link)[1]; // return Youtube video ID portion of link
      }

      // Creates a new YT.Player() instance
      function createyoutubeplayer(videourl) {
        player = new YT.Player(youtubelightboxPlayer, {
          videoId: videourl,
          playerVars: {
            autoplay: 1
          }
        });
      }

      // Main Youtube lightbox function
      function createlightbox() {
        var targetlinks = document.querySelectorAll(linksBtnsSelector);
        for (var i = 0; i < targetlinks.length; i++) {
          var link = targetlinks[i];
          link._videoid = getyoutubeid(link); // store youtube video ID portion of link inside _videoid property
          targetlinks[i].addEventListener('click', function (e) {
            youtubelightbox.style.display = 'block';
            if (typeof player == 'undefined') {
              // if video player hasn't been created yet
              createyoutubeplayer(this._videoid);
            } else {
              if (isiOS) {
                // iOS devices can only use the "cue" related methods
                player.cueVideoById(this._videoid);
              } else {
                player.loadVideoById(this._videoid);
              }
            }
            e.preventDefault();
          }, false);
        }
        ;
      }
      ;
    }
  }, {
    key: "start",
    value: function start() {
      this.onYouTubeIframeAPIReady();
    }
  }]);
  return YoutubeLightbox;
}();
var _default = new YoutubeLightbox();
exports.default = _default;
},{"../../constants/var.js":"XQ6K","../../components/workWithUs/WorkWithUs.js":"rNyV"}]},{},["CQST"], null)