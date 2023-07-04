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
})({"constants/var.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROOT_SWIPER_LOGINOVA = exports.ROOT_MODALS = exports.REACT_COMPONENT = void 0;
var REACT_COMPONENT = document.querySelector('.work-with-us__wrapper');
exports.REACT_COMPONENT = REACT_COMPONENT;
var ROOT_SWIPER_LOGINOVA = document.querySelector('.root_swiper_loginova');
exports.ROOT_SWIPER_LOGINOVA = ROOT_SWIPER_LOGINOVA;
var ROOT_MODALS = document.querySelectorAll('.ROOT_MODAL');
exports.ROOT_MODALS = ROOT_MODALS;
},{}],"components/workWithUs/img/strata.png":[function(require,module,exports) {
module.exports = "/strata.055535ed.png";
},{}],"components/workWithUs/img/dreamGirl.jpg":[function(require,module,exports) {
module.exports = "/dreamGirl.84c1a030.jpg";
},{}],"components/workWithUs/img/skate.jpg":[function(require,module,exports) {
module.exports = "/skate.282d2f37.jpg";
},{}],"components/workWithUs/img/crazyGuitar.jpg":[function(require,module,exports) {
module.exports = "/crazyGuitar.82eb3cad.jpg";
},{}],"components/workWithUs/img/ultrafioletGirl.jpg":[function(require,module,exports) {
module.exports = "/ultrafioletGirl.c47c0b3e.jpg";
},{}],"components/workWithUs/img/japan.jpg":[function(require,module,exports) {
module.exports = "/japan.1e358199.jpg";
},{}],"components/workWithUs/img/dreamingGuy.png":[function(require,module,exports) {
module.exports = "/dreamingGuy.9e3c1ede.png";
},{}],"components/workWithUs/img/eye.png":[function(require,module,exports) {
module.exports = "/eye.a3522c3b.png";
},{}],"components/workWithUs/img/jumpGuy.png":[function(require,module,exports) {
module.exports = "/jumpGuy.52f239d2.png";
},{}],"components/workWithUs/img/oldPhone.png":[function(require,module,exports) {
module.exports = "/oldPhone.8797b59f.png";
},{}],"components/workWithUs/img/playingGuitar.png":[function(require,module,exports) {
module.exports = "/playingGuitar.998bf05f.png";
},{}],"components/workWithUs/img/play.svg":[function(require,module,exports) {
module.exports = "/play.647adaf7.svg";
},{}],"components/workWithUs/img/book.png":[function(require,module,exports) {
module.exports = "/book.43b89172.png";
},{}],"components/workWithUs/WorkWithUs.js":[function(require,module,exports) {
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
        strata.classList.add('_active');
        strata.setAttribute('data-active', 'true');
        _this.open(_strata.default, _book.default, "\u0418\u0442\u0430\u043B\u044C\u044F\u043D\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A \u043E\u0434\u0435\u0436\u0434\u044B, \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0432 1974 \u0433\u043E\u0434\u0443. \n            \u042F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u043E\u043C \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u043A\u043E\u0439 \u043E\u0434\u0435\u0436\u0434\u044B \u0432\u043E \u0432\u0441\u0451\u043C \u043C\u0438\u0440\u0435. \u0428\u0442\u0430\u0431-\u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0440\u0430\u0441\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u0442\u0441\u044F \u0432 \u0411\u0430\u0440\u0441\u0435\u043B\u043E\u043D\u0435.", 'https://www.youtube.com/watch?v=jyetqrX2hYA', "./components/workWithUs/loginova/loginova.html");
      });
      manue.addEventListener('click', function () {
        var _iterator2 = _createForOfIteratorHelper(allButtons),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var button = _step2.value;
            button.classList.remove('_active');
            button.setAttribute('data-active', 'false');
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        manue.classList.add('_active');
        manue.setAttribute('data-active', 'true');
        _this.open(_dreamGirl.default, _oldPhone.default, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, minima!", 'https://www.youtube.com/watch?v=Z7wUyXJSHnk', "./components/workWithUs/levina/levina.html");
      });
      serenity.addEventListener('click', function () {
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
        serenity.classList.add('_active');
        serenity.setAttribute('data-active', 'true');
        _this.open(_skate.default, _dreamingGuy.default, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi officia harum corporis explicabo laborum\n             voluptates est eligendi possimus? Tempore!", 'https://www.youtube.com/watch?v=jyetqrX2hYA', "./components/workWithUs/larionov/larionov.html");
      });
      prostor.addEventListener('click', function () {
        var _iterator4 = _createForOfIteratorHelper(allButtons),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var button = _step4.value;
            button.classList.remove('_active');
            button.setAttribute('data-active', 'false');
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        prostor.classList.add('_active');
        prostor.setAttribute('data-active', 'true');
        _this.open(_crazyGuitar.default, _playingGuitar.default, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, minima!', 'https://www.youtube.com/watch?v=Z7wUyXJSHnk', "./components/workWithUs/belov/belov.html");
      });
      malina.addEventListener('click', function () {
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
        malina.classList.add('_active');
        malina.setAttribute('data-active', 'true');
        _this.open(_ultrafioletGirl.default, _jumpGuy.default, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi officia harum corporis explicabo laborum voluptates \n            est eligendi possimus? Tempore!", 'https://www.youtube.com/watch?v=jyetqrX2hYA', '#');
      });
      dragon.addEventListener('click', function () {
        var _iterator6 = _createForOfIteratorHelper(allButtons),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var button = _step6.value;
            button.classList.remove('_active');
            button.setAttribute('data-active', 'false');
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
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
      target.addEventListener('click', function () {
        var container = document.querySelector('.react-component__dinamic-block-container');
        if (!container.getAttribute('data-open-elem')) {
          container.classList.add('_increase');
          container.setAttribute('data-open-elem', 'true');
          document.querySelector('.work-with-us').classList.add('_increase');
        } else {
          _var.REACT_COMPONENT.innerHTML = "";
          if (strata.getAttribute('data-active') == 'true') {
            _this2.open(_strata.default, _book.default, "\u0418\u0442\u0430\u043B\u044C\u044F\u043D\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A \u043E\u0434\u0435\u0436\u0434\u044B, \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0432 1974 \u0433\u043E\u0434\u0443. \n                        \u042F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u043E\u043C \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u043A\u043E\u0439 \u043E\u0434\u0435\u0436\u0434\u044B \u0432\u043E \u0432\u0441\u0451\u043C \u043C\u0438\u0440\u0435. \u0428\u0442\u0430\u0431-\u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0440\u0430\u0441\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u0442\u0441\u044F \u0432 \u0411\u0430\u0440\u0441\u0435\u043B\u043E\u043D\u0435.", 'https://www.youtube.com/watch?v=jyetqrX2hYA', "./components/workWithUs/loginova/loginova.html");
          } else if (manue.getAttribute('data-active') == 'true') {
            _this2.open(_dreamGirl.default, _oldPhone.default, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, minima!", 'https://www.youtube.com/watch?v=Z7wUyXJSHnk', "./components/workWithUs/levina/levina.html");
          } else if (serenity.getAttribute('data-active') == 'true') {
            _this2.open(_skate.default, _dreamingGuy.default, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi officia harum corporis explicabo laborum\n                        voluptates est eligendi possimus? Tempore!", 'https://www.youtube.com/watch?v=jyetqrX2hYA', "./components/workWithUs/larionov/larionov.html");
          } else if (prostor.getAttribute('data-active') == 'true') {
            _this2.open(_crazyGuitar.default, _playingGuitar.default, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, minima!', 'https://www.youtube.com/watch?v=Z7wUyXJSHnk', "./components/workWithUs/belov/belov.html");
          } else if (malina.getAttribute('data-active') == 'true') {
            _this2.open(_ultrafioletGirl.default, _jumpGuy.default, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi officia harum corporis explicabo laborum voluptates \n                        est eligendi possimus? Tempore!", 'https://www.youtube.com/watch?v=jyetqrX2hYA', '#');
          } else {
            _this2.open(_japan.default, _eye.default, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, minima!', 'https://www.youtube.com/watch?v=Z7wUyXJSHnk', "#");
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
},{"../../constants/var.js":"constants/var.js","../../libs/youtubeLightbox/youtubeLightbox.js":"libs/youtubeLightbox/youtubeLightbox.js","./img/strata.png":"components/workWithUs/img/strata.png","./img/dreamGirl.jpg":"components/workWithUs/img/dreamGirl.jpg","./img/skate.jpg":"components/workWithUs/img/skate.jpg","./img/crazyGuitar.jpg":"components/workWithUs/img/crazyGuitar.jpg","./img/ultrafioletGirl.jpg":"components/workWithUs/img/ultrafioletGirl.jpg","./img/japan.jpg":"components/workWithUs/img/japan.jpg","./img/dreamingGuy.png":"components/workWithUs/img/dreamingGuy.png","./img/eye.png":"components/workWithUs/img/eye.png","./img/jumpGuy.png":"components/workWithUs/img/jumpGuy.png","./img/oldPhone.png":"components/workWithUs/img/oldPhone.png","./img/playingGuitar.png":"components/workWithUs/img/playingGuitar.png","./img/play.svg":"components/workWithUs/img/play.svg","./img/book.png":"components/workWithUs/img/book.png"}],"libs/youtubeLightbox/youtubeLightbox.js":[function(require,module,exports) {
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
},{"../../constants/var.js":"constants/var.js","../../components/workWithUs/WorkWithUs.js":"components/workWithUs/WorkWithUs.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56790" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","libs/youtubeLightbox/youtubeLightbox.js"], null)
//# sourceMappingURL=/youtubeLightbox.0a1a9037.js.map