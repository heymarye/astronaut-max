/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/background.png":
/*!***********************************!*\
  !*** ./src/assets/background.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/assets/hills.png":
/*!******************************!*\
  !*** ./src/assets/hills.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/assets/platform.png":
/*!*********************************!*\
  !*** ./src/assets/platform.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_background_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/background.png */ "./src/assets/background.png");
/* harmony import */ var _assets_platform_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/platform.png */ "./src/assets/platform.png");
/* harmony import */ var _assets_hills_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/hills.png */ "./src/assets/hills.png");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
canvas.width = 1640;
canvas.height = 924;
var gravity = 0.5;
var scrollOffset = 0;

function createImage(imgSrc) {
  var image = new Image();
  image.src = imgSrc;
  return image;
}

var platform = createImage(_assets_platform_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
var hill = createImage(_assets_hills_png__WEBPACK_IMPORTED_MODULE_2__["default"]);

var Sprite = /*#__PURE__*/function () {
  function Sprite(_ref) {
    var position = _ref.position,
        _ref$offset = _ref.offset,
        offset = _ref$offset === void 0 ? {
      x: 0,
      y: 0
    } : _ref$offset,
        image = _ref.image,
        _ref$scale = _ref.scale,
        scale = _ref$scale === void 0 ? 1 : _ref$scale,
        _ref$framesMax = _ref.framesMax,
        framesMax = _ref$framesMax === void 0 ? 1 : _ref$framesMax;

    _classCallCheck(this, Sprite);

    this.position = position;
    this.offset = offset;
    this.image = image;
    this.width = image.width;
    this.height = image.height;
    this.scale = scale;
    this.framesMax = framesMax;
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    this.framesHold = 17;
  }

  _createClass(Sprite, [{
    key: "draw",
    value: function draw() {
      context.drawImage(this.image, //Crop Image by Frames
      this.framesCurrent * (this.image.width / this.framesMax), 0, this.image.width / this.framesMax, this.image.height, this.position.x - this.offset.x, this.position.y - this.offset.y, this.image.width / this.framesMax * this.scale, this.image.height * this.scale);
    }
  }, {
    key: "animateFrames",
    value: function animateFrames() {
      this.framesElapsed++;

      if (this.framesElapsed % this.framesHold === 0) {
        if (this.framesCurrent < this.framesMax - 1) {
          this.framesCurrent++;
        } else {
          this.framesCurrent = 0;
        }
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.animateFrames();
    }
  }]);

  return Sprite;
}();

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 30;
    this.heigth = 30;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      context.fillStyle = '#6181ed';
      context.fillRect(this.position.x, this.position.y, this.width, this.heigth);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y; //Gravity

      if (this.position.y + this.heigth + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      }
    }
  }]);

  return Player;
}();

var player = new Player();
var background = new Sprite({
  position: {
    x: -3,
    y: -5
  },
  image: createImage(_assets_background_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
  scale: 1.3
});
var hills = [new Sprite({
  position: {
    x: 0,
    y: 225
  },
  image: hill
})];
var platforms = [new Sprite({
  position: {
    x: -1,
    y: 800
  },
  image: platform
}), new Sprite({
  position: {
    x: platform.width - 3,
    y: 800
  },
  image: platform
}), new Sprite({
  position: {
    x: platform.width * 2 + 300,
    y: 800
  },
  image: platform
}), new Sprite({
  position: {
    x: platform.width * 4,
    y: 500
  },
  image: platform
})];
var keys = {
  left: {
    pressed: false
  },
  right: {
    pressed: false
  }
};
window.addEventListener('keydown', function (_ref2) {
  var keyCode = _ref2.keyCode;

  switch (keyCode) {
    case 65:
      keys.left.pressed = true;
      break;

    case 68:
      keys.right.pressed = true;
      break;

    case 87:
      if (event.repeat) {
        return;
      }

      player.velocity.y -= 20;
      break;
  }
});
window.addEventListener('keyup', function (_ref3) {
  var keyCode = _ref3.keyCode;

  switch (keyCode) {
    case 65:
      keys.left.pressed = false;
      break;

    case 68:
      keys.right.pressed = false;
      break;
  }
});

function init() {
  player = new Player();
  background = new Sprite({
    position: {
      x: -3,
      y: -5
    },
    image: createImage(_assets_background_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
    scale: 1.3
  });
  hills = [new Sprite({
    position: {
      x: 0,
      y: 225
    },
    image: hill
  })];
  platforms = [new Sprite({
    position: {
      x: -1,
      y: 800
    },
    image: platform
  }), new Sprite({
    position: {
      x: platform.width - 3,
      y: 800
    },
    image: platform
  }), new Sprite({
    position: {
      x: platform.width * 2 + 300,
      y: 800
    },
    image: platform
  }), new Sprite({
    position: {
      x: platform.width * 4,
      y: 500
    },
    image: platform
  })];
}

function animate() {
  requestAnimationFrame(animate);
  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, canvas.width, canvas.height);
  background.update();
  hills.forEach(function (hill) {
    hill.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();

  if (keys.left.pressed && player.position.x > 100) {
    player.velocity.x = -5;
  } else if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = 5;
  } else {
    player.velocity.x = 0;

    if (keys.left.pressed) {
      scrollOffset -= 5;
      hills.forEach(function (hill) {
        hill.position.x += 3;
      });
      platforms.forEach(function (platform) {
        platform.position.x += 5;
      });
    } else if (keys.right.pressed) {
      scrollOffset += 5;
      hills.forEach(function (hill) {
        hill.position.x -= 3;
      });
      platforms.forEach(function (platform) {
        platform.position.x -= 5;
      });
    }
  } //Platform Collision Detection


  platforms.forEach(function (platform) {
    if (player.position.y + player.heigth <= platform.position.y && player.position.y + player.heigth + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  }); //Win Condition

  if (scrollOffset > 10000) {
    console.log('You win!');
  } //Lose Condition


  if (player.position.y > canvas.height) {
    console.log('You lose!');
    init();
  }
}

animate();

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map