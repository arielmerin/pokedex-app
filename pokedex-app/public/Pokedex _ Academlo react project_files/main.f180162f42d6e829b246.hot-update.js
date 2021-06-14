webpackHotUpdate("main",{

/***/ "./src/views/PokemonPage.js":
/*!**********************************!*\
  !*** ./src/views/PokemonPage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _services_getPokeByName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/getPokeByName */ "./src/services/getPokeByName.js");
/* harmony import */ var use_color_thief__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-color-thief */ "./node_modules/use-color-thief/dist/use-color-thief.esm.js");
/* harmony import */ var _services_Capitalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/Capitalize */ "./src/services/Capitalize.js");
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../breakpoints */ "./src/breakpoints.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/ariel/Desktop/Pokedex-academlo/pokedex-app/src/views/PokemonPage.js",
    _s = __webpack_require__.$Refresh$.signature();









const NumberContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  	display: flex;
  	font-size: 0.8rem;
  	justify-content: center;
  	align-items: center;
  	width: 12%;
  	margin: 2px 0;
  	color: ${props => props.colorS || 'black'};
  	border-radius: 10rem;
  	background-color: white;
	`;
_c = NumberContainer;
const StatContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  	display: flex;
  	flex-wrap: wrap;
  	width: 90%;
  	justify-content: space-evenly;
`;
_c2 = StatContainer;
const StatTotal = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	display: flex;
	width: 80%;
	color: white;
	margin: 2px 0;
	border-radius: 10rem;
	background-color: white;
	`;
_c3 = StatTotal;
const Stat = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
		width: ${props => `${props.porcentage}%` || '0%'};
		background-color: ${props => props.colorP || 'white'};
		margin: 2px;
		font-size: 0.8rem;
		border-radius: 10rem;
	`;
_c4 = Stat;
const NameStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1`
	width: 100%;
	color: white;
    margin-top: 0px;
`;
_c5 = NameStyled;
const PokemonPageStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
		background: ${props => props.colorB || '#fff'};
		height: 100%;
		min-height: 100vh;
		display: flex;
		flex-wrap: wrap;
		overflow: hidden;
		grid-gap: 10px;
		width: 100vw;
		justify-content: center;
	`;
_c6 = PokemonPageStyled;
const PokemonImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	display: flex;
	width: 100%;
`;
_c7 = PokemonImageContainer;
const PokemonImage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
	display: flex;
	max-width: 90vw;
	margin: 0 auto;
`;
_c8 = PokemonImage;
const InfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	display: flex;
	flex-wrap: wrap;
    align-items: flex-end;
    justify-content: center;
	width: 80vw;
	min-width:250px;	
`;
_c9 = InfoContainer;
const NumerStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h3`
color: white;
width: 100vw;
`;
_c10 = NumerStyled;
const StatsArrayContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
width: 80vw;

`;
_c11 = StatsArrayContainer;

const PokemonPage = () => {
  _s();

  const [avColor, setAvColor] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('white');
  const [img, setImg] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const [types, setTypes] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [name, setName] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const [numPokedex, setNumPokedex] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const [statsArray, setStatsArray] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    id
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Object(_services_getPokeByName__WEBPACK_IMPORTED_MODULE_3__["default"])(id).then(res => {
      setImg(res.data.sprites.other["official-artwork"].front_default);
      setName(res.data.name);
      setNumPokedex(res.data.order);
      setTypes(res.data.types.slice());
      setStatsArray(res.data.stats);
    });
  }, [id]);
  const source = img;
  const {
    color,
    palette
  } = Object(use_color_thief__WEBPACK_IMPORTED_MODULE_4__["default"])(source, {
    format: 'hex',
    colorCount: 10,
    quality: 10
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (color) {
      setAvColor(color);
    }
  }, [palette, color]);
  const listTypesImages = types.map((value, index) => {
    const name = Object(_services_Capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(value.type.name);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "img-container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
        src: `./${name}.png`,
        alt: name
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 4
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 10
    }, undefined);
  });
  const listTypes = types.map((value, index) => {
    const name = Object(_services_Capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(value.type.name);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
      children: [name, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 10
    }, undefined);
  });
  const listStats = statsArray.map((vale, index) => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(StatContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(StatTotal, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(Stat, {
          porcentage: vale.base_stat,
          colorP: palette[index] || avColor,
          children: [" ", vale.stat.name, "  "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 5
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 4
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(NumberContainer, {
        colorS: avColor,
        children: [vale.base_stat, "%"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 4
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 10
    }, undefined);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(PokemonPageStyled, {
    colorB: avColor,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(PokemonImageContainer, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(PokemonImage, {
        id: name,
        src: img,
        alt: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(InfoContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(NameStyled, {
        children: Object(_services_Capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(name)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 6
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(NumerStyled, {
        children: numPokedex
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 6
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(StatsArrayContainer, {
        children: statsArray && listStats
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 6
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/pokedex",
        children: "home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 6
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: `/pokemon/${name}/encounters`,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
          children: "Encounters"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 6
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 144,
    columnNumber: 3
  }, undefined);
};

_s(PokemonPage, "MWBghPriZpTSWVAL6jZci4EWJuM=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"], use_color_thief__WEBPACK_IMPORTED_MODULE_4__["default"]];
});

_c12 = PokemonPage;
/* harmony default export */ __webpack_exports__["default"] = (PokemonPage);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;

__webpack_require__.$Refresh$.register(_c, "NumberContainer");
__webpack_require__.$Refresh$.register(_c2, "StatContainer");
__webpack_require__.$Refresh$.register(_c3, "StatTotal");
__webpack_require__.$Refresh$.register(_c4, "Stat");
__webpack_require__.$Refresh$.register(_c5, "NameStyled");
__webpack_require__.$Refresh$.register(_c6, "PokemonPageStyled");
__webpack_require__.$Refresh$.register(_c7, "PokemonImageContainer");
__webpack_require__.$Refresh$.register(_c8, "PokemonImage");
__webpack_require__.$Refresh$.register(_c9, "InfoContainer");
__webpack_require__.$Refresh$.register(_c10, "NumerStyled");
__webpack_require__.$Refresh$.register(_c11, "StatsArrayContainer");
__webpack_require__.$Refresh$.register(_c12, "PokemonPage");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.f180162f42d6e829b246.hot-update.js.map