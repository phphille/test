/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _store = __webpack_require__(/*! ../shared/store */ \"./src/shared/store.js\");\n\nvar _store2 = _interopRequireDefault(_store);\n\nvar _index = __webpack_require__(/*! ../shared/index */ \"./src/shared/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _routes = __webpack_require__(/*! ../shared/routes */ \"./src/shared/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar serverApp = (0, _express2.default)();\n// import serialize from \"serialize-javascript\"\n\nserverApp.use((0, _cors2.default)());\nserverApp.use(_express2.default.static(\"public\"));\n\nserverApp.get(\"*\", function (req, res, next) {\n  // const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}\n  //\n  // const promise = activeRoute.fetchInitialData\n  //   ? activeRoute.fetchInitialData(req.path)\n  //   : Promise.resolve()\n  //\n  // promise.then((data) => {\n  // const context = { data }\n  // <ServerRouter location={req.url} context={context}>\n\n\n  var markup = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: _store2.default },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: req.url },\n      _react2.default.createElement(_index2.default, null)\n    )\n  ));\n\n  res.send(\"\\n      <!DOCTYPE html>\\n      <html>\\n        <head>\\n          <title>SSR with RR</title>\\n          <script src=\\\"/bundle.js\\\" defer></script>\\n          <script></script>\\n        </head>\\n\\n        <body>\\n          <div id=\\\"app\\\">\" + markup + \"</div>\\n        </body>\\n      </html>\\n    \");\n  // }).catch(next)\n});\n\nserverApp.listen(3000, function () {\n  console.log(\"Server is listening on port: 3000\");\n});\n\n/*\n  1) Just get shared App rendering to string on server then taking over on client.\n  2) Pass data to <App /> on server. Show diff. Add data to window then pick it up on the client too.\n  3) Instead of static data move to dynamic data (github gists)\n  4) add in routing.\n*/\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/shared/NoMatch.js":
/*!*******************************!*\
  !*** ./src/shared/NoMatch.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = NoMatch;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction NoMatch() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    'Four Oh Four'\n  );\n}\n\n//# sourceURL=webpack:///./src/shared/NoMatch.js?");

/***/ }),

/***/ "./src/shared/actions/actionCreators.js":
/*!**********************************************!*\
  !*** ./src/shared/actions/actionCreators.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.increment = increment;\nexports.addComment = addComment;\nexports.removeComment = removeComment;\n// increment\nfunction increment(index) {\n  return {\n    type: 'INCREMENT_LIKES',\n    index: index\n  };\n}\n\n// add comment\nfunction addComment(postId, author, comment) {\n  return {\n    type: 'ADD_COMMENT',\n    postId: postId,\n    author: author,\n    comment: comment\n  };\n}\n\n// remove comment\n\nfunction removeComment(postId, i) {\n  return {\n    type: 'REMOVE_COMMENT',\n    i: i,\n    postId: postId\n  };\n}\n\n//# sourceURL=webpack:///./src/shared/actions/actionCreators.js?");

/***/ }),

/***/ "./src/shared/components/App.js":
/*!**************************************!*\
  !*** ./src/shared/components/App.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actionCreators = __webpack_require__(/*! ../actions/actionCreators */ \"./src/shared/actions/actionCreators.js\");\n\nvar actionCreators = _interopRequireWildcard(_actionCreators);\n\nvar _Main = __webpack_require__(/*! ./Main */ \"./src/shared/components/Main.js\");\n\nvar _Main2 = _interopRequireDefault(_Main);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction mapStateToProps(state) {\n  return {\n    posts: state.posts,\n    comments: state.comments\n  };\n}\n\nfunction mapDispachToProps(dispatch) {\n  return (0, _redux.bindActionCreators)(actionCreators, dispatch);\n}\n\nvar App = (0, _reactRedux.connect)(mapStateToProps, mapDispachToProps)(_Main2.default);\n\nexports.default = App;\n\n//# sourceURL=webpack:///./src/shared/components/App.js?");

/***/ }),

/***/ "./src/shared/components/Comments.js":
/*!*******************************************!*\
  !*** ./src/shared/components/Comments.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Comments = function (_React$Component) {\n  _inherits(Comments, _React$Component);\n\n  function Comments() {\n    _classCallCheck(this, Comments);\n\n    return _possibleConstructorReturn(this, (Comments.__proto__ || Object.getPrototypeOf(Comments)).apply(this, arguments));\n  }\n\n  _createClass(Comments, [{\n    key: \"renderComment\",\n    value: function renderComment(comment, i) {\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"comment\", key: i },\n        _react2.default.createElement(\n          \"p\",\n          null,\n          _react2.default.createElement(\n            \"strong\",\n            null,\n            comment.user\n          ),\n          comment.text,\n          _react2.default.createElement(\n            \"button\",\n            { className: \"remove-comment\", onClick: this.props.removeComment.bind(null, this.props.params.postId, i) },\n            \"\\xD7\"\n          )\n        )\n      );\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit(e) {\n      e.preventDefault();\n      var postId = this.props.params.postId;\n\n      var author = this.refs.author.value;\n      var comment = this.refs.comment.value;\n      this.props.addComment(postId, author, comment);\n      this.refs.commentForm.reset();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"comments\" },\n        this.props.postComments.map(this.renderComment),\n        _react2.default.createElement(\n          \"form\",\n          { ref: \"commentForm\", className: \"comment-form\", onSubmit: this.handleSubmit },\n          _react2.default.createElement(\"input\", { type: \"text\", ref: \"author\", placeholder: \"author\" }),\n          _react2.default.createElement(\"input\", { type: \"text\", ref: \"comment\", placeholder: \"comment\" }),\n          _react2.default.createElement(\"input\", { type: \"submit\", hidden: true })\n        )\n      );\n    }\n  }]);\n\n  return Comments;\n}(_react2.default.Component);\n\nexports.default = Comments;\n\n//# sourceURL=webpack:///./src/shared/components/Comments.js?");

/***/ }),

/***/ "./src/shared/components/Main.js":
/*!***************************************!*\
  !*** ./src/shared/components/Main.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _PhotoGrid = __webpack_require__(/*! ./PhotoGrid */ \"./src/shared/components/PhotoGrid.js\");\n\nvar _PhotoGrid2 = _interopRequireDefault(_PhotoGrid);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Main = function (_React$Component) {\n  _inherits(Main, _React$Component);\n\n  function Main() {\n    _classCallCheck(this, Main);\n\n    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));\n  }\n\n  _createClass(Main, [{\n    key: 'render',\n    value: function render() {\n      console.log(this);\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h1',\n          null,\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/' },\n            'ihiuhiuh'\n          )\n        ),\n        _react2.default.createElement(_PhotoGrid2.default, this.props)\n      );\n    }\n  }]);\n\n  return Main;\n}(_react2.default.Component);\n\n;\n\nexports.default = Main;\n\n//# sourceURL=webpack:///./src/shared/components/Main.js?");

/***/ }),

/***/ "./src/shared/components/Photo.js":
/*!****************************************!*\
  !*** ./src/shared/components/Photo.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Photo = function (_React$Component) {\n  _inherits(Photo, _React$Component);\n\n  function Photo() {\n    _classCallCheck(this, Photo);\n\n    return _possibleConstructorReturn(this, (Photo.__proto__ || Object.getPrototypeOf(Photo)).apply(this, arguments));\n  }\n\n  _createClass(Photo, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          post = _props.post,\n          i = _props.i,\n          comments = _props.comments;\n\n      return _react2.default.createElement(\n        'figure',\n        { className: 'grid-figure' },\n        _react2.default.createElement(\n          'div',\n          { className: 'grid-photo-wrap' },\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/view/' + post.code },\n            _react2.default.createElement('img', { src: post.display_src, alt: post.caption, className: 'grid-photo' })\n          ),\n          _react2.default.createElement(\n            'span',\n            { key: post.likes, className: 'likes-heart' },\n            post.likes\n          )\n        ),\n        _react2.default.createElement(\n          'figcaption',\n          null,\n          _react2.default.createElement(\n            'p',\n            null,\n            post.caption\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'control-buttons' },\n            _react2.default.createElement(\n              'button',\n              { onClick: this.props.increment.bind(null, i), className: 'likes' },\n              '\\u2665 ',\n              post.likes\n            ),\n            _react2.default.createElement(\n              _reactRouterDom.Link,\n              { className: 'button', to: '/view/' + post.code },\n              _react2.default.createElement(\n                'span',\n                { className: 'comment-count' },\n                _react2.default.createElement('span', { className: 'speech-bubble' }),\n                comments[post.code] ? comments[post.code].length : 0\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Photo;\n}(_react2.default.Component);\n\nexports.default = Photo;\n\n//# sourceURL=webpack:///./src/shared/components/Photo.js?");

/***/ }),

/***/ "./src/shared/components/PhotoGrid.js":
/*!********************************************!*\
  !*** ./src/shared/components/PhotoGrid.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Photo = __webpack_require__(/*! ./Photo */ \"./src/shared/components/Photo.js\");\n\nvar _Photo2 = _interopRequireDefault(_Photo);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar PhotoGrid = function (_React$Component) {\n  _inherits(PhotoGrid, _React$Component);\n\n  function PhotoGrid() {\n    _classCallCheck(this, PhotoGrid);\n\n    return _possibleConstructorReturn(this, (PhotoGrid.__proto__ || Object.getPrototypeOf(PhotoGrid)).apply(this, arguments));\n  }\n\n  _createClass(PhotoGrid, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'photo-grid' },\n        this.props.posts.length ? this.props.posts.map(function (post, i) {\n          return _react2.default.createElement(_Photo2.default, _extends({}, _this2.props, { key: i, i: i, post: post }));\n        }) : _react2.default.createElement(\n          'div',\n          { className: 'loading-container' },\n          'LOADING'\n        )\n      );\n    }\n  }]);\n\n  return PhotoGrid;\n}(_react2.default.Component);\n\nexports.default = PhotoGrid;\n\n//# sourceURL=webpack:///./src/shared/components/PhotoGrid.js?");

/***/ }),

/***/ "./src/shared/components/Single.js":
/*!*****************************************!*\
  !*** ./src/shared/components/Single.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Photo = __webpack_require__(/*! ./Photo */ \"./src/shared/components/Photo.js\");\n\nvar _Photo2 = _interopRequireDefault(_Photo);\n\nvar _Comments = __webpack_require__(/*! ./Comments */ \"./src/shared/components/Comments.js\");\n\nvar _Comments2 = _interopRequireDefault(_Comments);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Single = function (_React$Component) {\n  _inherits(Single, _React$Component);\n\n  function Single() {\n    _classCallCheck(this, Single);\n\n    return _possibleConstructorReturn(this, (Single.__proto__ || Object.getPrototypeOf(Single)).apply(this, arguments));\n  }\n\n  _createClass(Single, [{\n    key: 'render',\n    value: function render() {\n      var postId = this.props.params.postId;\n\n\n      var i = this.props.posts.findIndex(function (post) {\n        return post.code === postId;\n      });\n      var post = this.props.posts[i];\n\n      var postComments = this.props.comments[postId] || [];\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'single-photo' },\n        _react2.default.createElement(_Photo2.default, _extends({ i: i, post: post }, this.props)),\n        _react2.default.createElement(_Comments2.default, _extends({ postComments: postComments }, this.props))\n      );\n    }\n  }]);\n\n  return Single;\n}(_react2.default.Component);\n\nexports.default = Single;\n\n//# sourceURL=webpack:///./src/shared/components/Single.js?");

/***/ }),

/***/ "./src/shared/data/comments.js":
/*!*************************************!*\
  !*** ./src/shared/data/comments.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar comments = {\n  \"BAhvZrRwcfu\": [{\n    \"text\": \"Totally need to try this.\",\n    \"user\": \"heavymetaladam\"\n  }],\n  \"BAcyDyQwcXX\": [{\n    \"text\": \"Wes. WE should have lunch.\",\n    \"user\": \"jdaveknox\"\n  }, {\n    \"text\": \"#adults\",\n    \"user\": \"jdaveknox\"\n  }, {\n    \"text\": \"@jdaveknox yes!\",\n    \"user\": \"wesbos\"\n  }, {\n    \"text\": \"😍 love Hamilton!\",\n    \"user\": \"willowtreemegs\"\n  }],\n  \"BAPIPRjQce9\": [{\n    \"text\": \"Those are cute! They're like silver dollar pancakes.\",\n    \"user\": \"rrsimonsen\"\n  }, {\n    \"text\": \"I like baby pancakes but gluten free please!! I'll bring the coffee!! See you in 6 days!!!!!! 😝😛😝♥️\",\n    \"user\": \"terzisn\"\n  }, {\n    \"text\": \"... and apparently growing baby. 👀. Yum.\",\n    \"user\": \"henrihelvetica\"\n  }, {\n    \"text\": \"@wesbos 👍 my daughter is a pancake eating machine!\",\n    \"user\": \"brentoage\"\n  }, {\n    \"text\": \"Nice stove!\",\n    \"user\": \"haaps\"\n  }, {\n    \"text\": \"Genius bottle use! Do you make a single batch of batter or make a lot and freeze it?\",\n    \"user\": \"gobananna\"\n  }, {\n    \"text\": \"@gobananna I just made a batch and put in in a FIFO bottle. Keeps in the fridge for a few days.\",\n    \"user\": \"wesbos\"\n  }, {\n    \"text\": \"@haaps thanks! It's a Jenn air - so nice to cool with!\",\n    \"user\": \"wesbos\"\n  }, {\n    \"text\": \"Where would you go and for how long, if you had location freedom? - Greg 🌎\",\n    \"user\": \"world_greg\"\n  }],\n  \"BAF_KY4wcRY\": [{\n    \"text\": \"Looking great Wes! I'd like to see the other side of the room too.\",\n    \"user\": \"axcdnt\"\n  }, {\n    \"text\": \"I've never caught your podcast. Have one right? Btw - they don't have a Canary pillow? 😝\",\n    \"user\": \"henrihelvetica\"\n  }, {\n    \"text\": \"Great way to start the year.\",\n    \"user\": \"pmgllc\"\n  }, {\n    \"text\": \"Are there 4k monitors?\",\n    \"user\": \"alexbaumgertner\"\n  }, {\n    \"text\": \"@axcdnt that is where I put all the junk. I'll have to clean that side too @henrihelvetica no podcast yet! @pmgllc ohh yeah! @alexbaumgertner yep - the main one is 4K - I'm loving it\",\n    \"user\": \"wesbos\"\n  }, {\n    \"text\": \"That chrome pillow. 😉\",\n    \"user\": \"imagesofthisandthat\"\n  }, {\n    \"text\": \"@wesbos is that the Dell 4k? The MacBook Pro powers it well? I also have a Retina™ / x1 setup as well. Very handy.\",\n    \"user\": \"henrihelvetica\"\n  }, {\n    \"text\": \"#minimalsetups\",\n    \"user\": \"wesbos\"\n  }],\n  \"_4jHytwcUA\": [{\n    \"text\": \"that is the sound of success!\",\n    \"user\": \"mdxprograms\"\n  }],\n  \"_zbaOlQcbn\": [{\n    \"text\": \"Did she get to eat her letter?\",\n    \"user\": \"pathiebert\"\n  }, {\n    \"text\": \"Nope @pathiebert! She has too much teeth now (8) so that would definitely be her first cavity 😉\",\n    \"user\": \"kaitbos\"\n  }],\n  \"_rmvQfQce8\": [{\n    \"text\": \"A+\",\n    \"user\": \"mrjoedee\"\n  }, {\n    \"text\": \"I recently went to a ramen place in Philly. So amazing!\",\n    \"user\": \"jrtashjian\"\n  }],\n  \"_ep9kiQcVy\": [{\n    \"text\": \"All bundled up!  Where ya goin?\",\n    \"user\": \"sophie_and_sadie\"\n  }],\n  \"_XpJcrwcSn\": [{\n    \"text\": \"Super congrats! That's wicked cool and looks great.\",\n    \"user\": \"pmgllc\"\n  }, {\n    \"text\": \"real live paper magazine? woah haha. flex box is awesome though, could rage quit without it\",\n    \"user\": \"tjholowaychuk2\"\n  }, {\n    \"text\": \"@tjholowaychuk2 haha yes! Old school stylez!\",\n    \"user\": \"wesbos\"\n  }],\n  \"_KnU7MwceA\": [],\n  \"_HMejJQcY5\": [{\n    \"text\": \"👌\",\n    \"user\": \"t_volpe\"\n  }, {\n    \"text\": \"Nice shot, mister!\",\n    \"user\": \"imagesofthisandthat\"\n  }],\n  \"_Fq2zmwcaz\": [{\n    \"text\": \"😍\",\n    \"user\": \"melsariffodeen\"\n  }, {\n    \"text\": \"Very cool!\",\n    \"user\": \"ka11away\"\n  }],\n  \"_A2r0aQcfD\": [{\n    \"text\": \"Uhu!\",\n    \"user\": \"lucascaixeta\"\n  }],\n  \"1rhFawccs\": [{\n    \"text\": \"What's your lighting source?\",\n    \"user\": \"seth_mcleod\"\n  }, {\n    \"text\": \"And what are you using for XLR mix adapter? I found a big price jump between $55 range and $170 range.\",\n    \"user\": \"pmgllc\"\n  }, {\n    \"text\": \"I still need a desk boom for mine mic. Nice upgrades\",\n    \"user\": \"stolinski\"\n  }],\n  \"pjx-gQcVi\": [],\n  \"oTZ0zQcWt\": [{\n    \"text\": \"Love the coat! Where's it from? Lol\",\n    \"user\": \"_lindersss\"\n  }],\n  \"mxKQoQcQh\": [],\n  \"hZh6IQcfN\": [{\n    \"text\": \"What do we gotta do to get some :)? @wesbos\",\n    \"user\": \"jonasbad\"\n  }, {\n    \"text\": \"Might drop by today - real quick. Trade you an illegal pin for these? Lol. @wesbos\",\n    \"user\": \"henrihelvetica\"\n  }, {\n    \"text\": \"I'm with @jonasbad on this. What we gotta do? :D\",\n    \"user\": \"datamoshr\"\n  }, {\n    \"text\": \"@jonasbad @datamoshr I'll post them up on my blog soon!\",\n    \"user\": \"wesbos\"\n  }, {\n    \"text\": \"Want\",\n    \"user\": \"kamuelafranco\"\n  }, {\n    \"text\": \"want!\",\n    \"user\": \"josemanuelxyz\"\n  }, {\n    \"text\": \"#Top\",\n    \"user\": \"gabrielvieira.me\"\n  }],\n  \"fasqlQceO\": [{\n    \"text\": \"Where's lux at? 💤?\",\n    \"user\": \"henrihelvetica\"\n  }, {\n    \"text\": \"Love this house during the holidays! And all other times of the year...\",\n    \"user\": \"danielleplas\"\n  }],\n  \"VBgtGQcSf\": [{\n    \"text\": \"@dogsandbrew\",\n    \"user\": \"likea_bos\"\n  }, {\n    \"text\": \"Next on my list!\",\n    \"user\": \"tomwalsham\"\n  }, {\n    \"text\": \"Is that from collective arts ?\",\n    \"user\": \"trevorb_91\"\n  }],\n  \"FpTyHQcau\": [{\n    \"text\": \"@kaitbos  that vest!!! 😍\",\n    \"user\": \"courtneyeveline\"\n  }, {\n    \"text\": \"I just love her! @kaitbos\",\n    \"user\": \"kalibrix\"\n  }, {\n    \"text\": \"@courtneyeveline I know! My friend gave it to her and I wanted a matching one but only Lux can pull it off. She's so fancy 😉\",\n    \"user\": \"kaitbos\"\n  }, {\n    \"text\": \"Char has that vest!!! Super cute!\",\n    \"user\": \"jennlensink\"\n  }, {\n    \"text\": \"You'll have to meet her soon @kalibrix!!\",\n    \"user\": \"kaitbos\"\n  }, {\n    \"text\": \"Haha @kaitbos so true, babies these days are sooo stylish. 😎\",\n    \"user\": \"courtneyeveline\"\n  }, {\n    \"text\": \"JavaScript 😄😆🙋\",\n    \"user\": \"lucascaixeta\"\n  }, {\n    \"text\": \"That hoodie is amazing! Where did you get it?\",\n    \"user\": \"br11x\"\n  }, {\n    \"text\": \"@br11x I did a teespring a few months ago - maybe I'll do another one soon\",\n    \"user\": \"wesbos\"\n  }],\n  \"B3eiIwcYV\": [{\n    \"text\": \"If you get in the mood for authentic Italian pizza, check out @backspaceaustin - it's👌🏻\",\n    \"user\": \"dessie.ann\"\n  }, {\n    \"text\": \"😱 jealous\",\n    \"user\": \"jenngbrewer\"\n  }]\n};\n\nexports.default = comments;\n\n//# sourceURL=webpack:///./src/shared/data/comments.js?");

/***/ }),

/***/ "./src/shared/data/posts.js":
/*!**********************************!*\
  !*** ./src/shared/data/posts.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nvar posts = [{\n   \"code\": \"BAcyDyQwcXX\",\n   \"caption\": \"Lunch #hamont\",\n   \"likes\": 56,\n   \"id\": \"1161022966406956503\",\n   \"display_src\": \"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12552326_495932673919321_1443393332_n.jpg\"\n}, {\n   \"code\": \"BAcJeJrQca9\",\n   \"caption\": \"Snow! ⛄️🌨❄️ #lifewithsnickers\",\n   \"likes\": 59,\n   \"id\": \"1160844458347054781\",\n   \"display_src\": \"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg\"\n}, {\n   \"code\": \"BAF_KY4wcRY\",\n   \"caption\": \"Cleaned my office and mounted my recording gear overhead. Stoked for 2016!\",\n   \"likes\": 79,\n   \"id\": \"1154606670337393752\",\n   \"display_src\": \"https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/e35/923995_1704188643150533_1383710275_n.jpg\"\n}, {\n   \"code\": \"BAPIPRjQce9\",\n   \"caption\": \"Making baby pancakes for one early rising baby. ☕️🍴\",\n   \"likes\": 47,\n   \"id\": \"1157179863266871229\",\n   \"display_src\": \"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12407480_1654828594805097_152207166_n.jpg\"\n}, {\n   \"code\": \"-hZh6IQcfN\",\n   \"caption\": \"New Stickers just came in. I'll do another mailing in a few weeks if you want some. #javascript\",\n   \"likes\": 66,\n   \"id\": \"1126293663140399053\",\n   \"display_src\": \"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/11875511_1562439187344831_813588280_n.jpg\"\n}, {\n   \"code\": \"-B3eiIwcYV\",\n   \"caption\": \"Tacos for breakfast. I love you Austin. 🇺🇸\",\n   \"likes\": 33,\n   \"id\": \"1117418173361145365\",\n   \"display_src\": \"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e35/11917950_927755223968499_1198055371_n.jpg\"\n}, {\n   \"code\": \"BAhvZrRwcfu\",\n   \"caption\": \"Tried poke for the first time at @pokehbar. Delicious! It's like a bowl of sushi\",\n   \"likes\": 30,\n   \"id\": \"1162418651480049646\",\n   \"display_src\": \"https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e35/12501993_1504179163220771_2060674913_n.jpg\"\n}, {\n   \"code\": \"BAAJqbOQcW5\",\n   \"caption\": \"Brunchin'\",\n   \"likes\": 40,\n   \"id\": \"1152964002473690553\",\n   \"display_src\": \"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/1516572_445736812276082_2116173059_n.jpg\"\n}, {\n   \"code\": \"_4jHytwcUA\",\n   \"caption\": \"2015 can be summed up with one baby and a many lines of code. And sometimes a coding baby. 👶🏼⌨\",\n   \"likes\": 62,\n   \"id\": \"1150824171912152320\",\n   \"display_src\": \"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e35/10723795_1149927178351091_1859033096_n.jpg\"\n}, {\n   \"code\": \"_zbaOlQcbn\",\n   \"caption\": \"Lekker Chocoladeletter\",\n   \"likes\": 52,\n   \"id\": \"1149382879529256679\",\n   \"display_src\": \"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12346073_1035047523184672_768982339_n.jpg\"\n}, {\n   \"code\": \"_rmvQfQce8\",\n   \"caption\": \"Just discovered the #hamont farmers market has a new ramen place! 🍜\",\n   \"likes\": 35,\n   \"id\": \"1147180903383025596\",\n   \"display_src\": \"https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/12331739_1671776806423597_995664526_n.jpg\"\n}, {\n   \"code\": \"_ep9kiQcVy\",\n   \"caption\": \"⛄️\",\n   \"likes\": 64,\n   \"id\": \"1143535906423162226\",\n   \"display_src\": \"https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/12354078_447337935474115_1484398925_n.jpg\"\n}, {\n   \"code\": \"_XpJcrwcSn\",\n   \"caption\": \"6 page spread on flexbox in this months netmag!\",\n   \"likes\": 74,\n   \"id\": \"1141561999742846119\",\n   \"display_src\": \"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12362588_1688046211438811_1395882545_n.jpg\"\n}, {\n   \"code\": \"_KnU7MwceA\",\n   \"caption\": \"Hanging out in my office waiting for 5:00 beers to come around.\",\n   \"likes\": 54,\n   \"id\": \"1137894817632733056\",\n   \"display_src\": \"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12301208_1533749386944985_1334730917_n.jpg\"\n}, {\n   \"code\": \"_HMejJQcY5\",\n   \"caption\": \"Today I learned that a long pull espresso is called a 'lungo'\",\n   \"likes\": 18,\n   \"id\": \"1136932306813044281\",\n   \"display_src\": \"https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/12357319_493317964181479_310198908_n.jpg\"\n}, {\n   \"code\": \"_Fq2zmwcaz\",\n   \"caption\": \"Awesome hand lettered gift from @eunibae and the HackerYou crew.\",\n   \"likes\": 48,\n   \"id\": \"1136502965197194931\",\n   \"display_src\": \"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12317458_1692845870986430_331905833_n.jpg\"\n}, {\n   \"code\": \"_A2r0aQcfD\",\n   \"caption\": \"Some serious hardware meet JavaScript hacks going down this week at hackeryou. Excited for demo day!\",\n   \"likes\": 57,\n   \"id\": \"1135147611821557699\",\n   \"display_src\": \"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12276809_750065668431999_184252508_n.jpg\"\n}, {\n   \"code\": \"-1rhFawccs\",\n   \"caption\": \"Some major audio upgrades coming to my next videos 😍\",\n   \"likes\": 39,\n   \"id\": \"1132002270913873708\",\n   \"display_src\": \"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12331333_1650987978502155_1162510634_n.jpg\"\n}, {\n   \"code\": \"-pjx-gQcVi\",\n   \"caption\": \"My baby and me. Thanks to @bearandsparrow for this one.\",\n   \"likes\": 81,\n   \"id\": \"1128590547628442978\",\n   \"display_src\": \"https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e35/12298962_863814057068027_460827278_n.jpg\"\n}, {\n   \"code\": \"-oTZ0zQcWt\",\n   \"caption\": \"It's too early. Send coffee.\",\n   \"likes\": 81,\n   \"id\": \"1128237044221461933\",\n   \"display_src\": \"https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e35/12328347_990748230999662_1512917342_n.jpg\"\n}, {\n   \"code\": \"-mxKQoQcQh\",\n   \"caption\": \"They both have figured it out. #lifewithsnickers\",\n   \"likes\": 47,\n   \"id\": \"1127804966031967265\",\n   \"display_src\": \"https://scontent.cdninstagram.com/hphotos-xtp1/t51.2885-15/e35/12256736_1758525004381641_1136705181_n.jpg\"\n}, {\n   \"code\": \"-fasqlQceO\",\n   \"caption\": \"Kaitlin decorated the house for the Christmas. So gezellig! #casabos\",\n   \"likes\": 46,\n   \"id\": \"1125735850454402958\",\n   \"display_src\": \"https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/e35/12277581_1028556737218368_1184190781_n.jpg\"\n}, {\n   \"code\": \"-VBgtGQcSf\",\n   \"caption\": \"Trying the new Hamilton Brewery beer. Big fan.\",\n   \"likes\": 27,\n   \"id\": \"1122810327591928991\",\n   \"display_src\": \"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12224456_175248682823294_1558707223_n.jpg\"\n}, {\n   \"code\": \"-FpTyHQcau\",\n   \"caption\": \"I'm in Austin for a conference and doing some training. Enjoying some local brew with my baby.\",\n   \"likes\": 82,\n   \"id\": \"1118481761857291950\",\n   \"display_src\": \"https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/e35/11326072_550275398458202_1726754023_n.jpg\"\n}];\n\nexports.default = posts;\n\n//# sourceURL=webpack:///./src/shared/data/posts.js?");

/***/ }),

/***/ "./src/shared/index.js":
/*!*****************************!*\
  !*** ./src/shared/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _routes = __webpack_require__(/*! ./routes */ \"./src/shared/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _NoMatch = __webpack_require__(/*! ./NoMatch */ \"./src/shared/NoMatch.js\");\n\nvar _NoMatch2 = _interopRequireDefault(_NoMatch);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Index = function (_Component) {\n  _inherits(Index, _Component);\n\n  function Index() {\n    _classCallCheck(this, Index);\n\n    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));\n  }\n\n  _createClass(Index, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        _reactRouterDom.Switch,\n        null,\n        _routes2.default.map(function (_ref) {\n          var path = _ref.path,\n              exact = _ref.exact,\n              Component = _ref.component,\n              rest = _objectWithoutProperties(_ref, ['path', 'exact', 'component']);\n\n          return _react2.default.createElement(_reactRouterDom.Route, { key: path, path: path, exact: exact, render: function render(props) {\n              return _react2.default.createElement(Component, _extends({}, props, rest));\n            } });\n        }),\n        _react2.default.createElement(_reactRouterDom.Route, { render: function render(props) {\n            return _react2.default.createElement(_NoMatch2.default, props);\n          } })\n      );\n    }\n  }]);\n\n  return Index;\n}(_react.Component);\n\nexports.default = Index;\n\n//# sourceURL=webpack:///./src/shared/index.js?");

/***/ }),

/***/ "./src/shared/reducers/comments.js":
/*!*****************************************!*\
  !*** ./src/shared/reducers/comments.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction postComments() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case 'ADD_COMMENT':\n      // return the new state with the new comment\n      return [].concat(_toConsumableArray(state), [{\n        user: action.author,\n        text: action.comment\n      }]);\n    case 'REMOVE_COMMENT':\n      // we need to return the new state without the deleted comment\n      return [].concat(_toConsumableArray(state.slice(0, action.i)), _toConsumableArray(state.slice(action.i + 1)));\n    default:\n      return state;\n  }\n  return state;\n}\n\nfunction comments() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments[1];\n\n  if (typeof action.postId !== 'undefined') {\n    return _extends({}, state, _defineProperty({}, action.postId, postComments(state[action.postId], action)));\n  }\n  return state;\n}\n\nexports.default = comments;\n\n//# sourceURL=webpack:///./src/shared/reducers/comments.js?");

/***/ }),

/***/ "./src/shared/reducers/index.js":
/*!**************************************!*\
  !*** ./src/shared/reducers/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reactRouterRedux = __webpack_require__(/*! react-router-redux */ \"react-router-redux\");\n\nvar _posts = __webpack_require__(/*! ./posts */ \"./src/shared/reducers/posts.js\");\n\nvar _posts2 = _interopRequireDefault(_posts);\n\nvar _comments = __webpack_require__(/*! ./comments */ \"./src/shared/reducers/comments.js\");\n\nvar _comments2 = _interopRequireDefault(_comments);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar rootReducer = (0, _redux.combineReducers)({ posts: _posts2.default, comments: _comments2.default, routing: _reactRouterRedux.routerReducer });\n\nexports.default = rootReducer;\n\n//# sourceURL=webpack:///./src/shared/reducers/index.js?");

/***/ }),

/***/ "./src/shared/reducers/posts.js":
/*!**************************************!*\
  !*** ./src/shared/reducers/posts.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction posts() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case 'INCREMENT_LIKES':\n      console.log(\"Incrementing Likes!!\");\n      var i = action.index;\n      return [].concat(_toConsumableArray(state.slice(0, i)), [// before the one we are updating\n      _extends({}, state[i], { likes: state[i].likes + 1 })], _toConsumableArray(state.slice(i + 1)));\n    default:\n      return state;\n  }\n}\n\nexports.default = posts;\n\n//# sourceURL=webpack:///./src/shared/reducers/posts.js?");

/***/ }),

/***/ "./src/shared/routes.js":
/*!******************************!*\
  !*** ./src/shared/routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _App = __webpack_require__(/*! ./components/App */ \"./src/shared/components/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _Single = __webpack_require__(/*! ./components/Single */ \"./src/shared/components/Single.js\");\n\nvar _Single2 = _interopRequireDefault(_Single);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import Grid from './Grid'\n// import { fetchPopularRepos } from './api'\n// fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop())\nvar routes = [{\n  path: '/',\n  exact: true,\n  component: _App2.default\n}, {\n  path: '/view/:postId',\n  component: _Single2.default\n}];\n\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/shared/routes.js?");

/***/ }),

/***/ "./src/shared/store.js":
/*!*****************************!*\
  !*** ./src/shared/store.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.history = undefined;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reactRouterRedux = __webpack_require__(/*! react-router-redux */ \"react-router-redux\");\n\nvar _history = __webpack_require__(/*! history */ \"history\");\n\nvar _index = __webpack_require__(/*! ./reducers/index */ \"./src/shared/reducers/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _comments = __webpack_require__(/*! ./data/comments */ \"./src/shared/data/comments.js\");\n\nvar _comments2 = _interopRequireDefault(_comments);\n\nvar _posts = __webpack_require__(/*! ./data/posts */ \"./src/shared/data/posts.js\");\n\nvar _posts2 = _interopRequireDefault(_posts);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// create an object for the default data\nvar defaultState = {\n  posts: _posts2.default,\n  comments: _comments2.default\n};\n\n// import the root reducer\n\n\nvar store = (0, _redux.createStore)(_index2.default, defaultState);\n\nvar history = exports.history = (0, _reactRouterRedux.syncHistoryWithStore)( false ? undefined : (0, _history.createMemoryHistory)(), store);\n\nif (false) {}\n\nexports.default = store;\n\n//# sourceURL=webpack:///./src/shared/store.js?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"history\");\n\n//# sourceURL=webpack:///external_%22history%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-router-redux":
/*!*************************************!*\
  !*** external "react-router-redux" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-redux\");\n\n//# sourceURL=webpack:///external_%22react-router-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ })

/******/ });