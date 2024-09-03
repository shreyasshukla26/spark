(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-main-endUser-end-user-module"], {
    /***/
    "j4tg":
    /*!*********************************************************!*\
      !*** ./src/app/main/endUser/end-user-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: EndUserRoutingModule */

    /***/
    function j4tg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EndUserRoutingModule", function () {
        return EndUserRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: 'end-user',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | end-user-map-end-user-map-module */
          "end-user-map-end-user-map-module").then(__webpack_require__.bind(null,
          /*! ./end-user-map/end-user-map.module */
          "XEfX")).then(function (m) {
            return m.EndUserMapModule;
          });
        },
        data: {
          title: 'User'
        }
      }];

      var EndUserRoutingModule = function EndUserRoutingModule() {
        _classCallCheck(this, EndUserRoutingModule);
      };

      EndUserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: EndUserRoutingModule
      });
      EndUserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function EndUserRoutingModule_Factory(t) {
          return new (t || EndUserRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EndUserRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EndUserRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "nmET":
    /*!*************************************************!*\
      !*** ./src/app/main/endUser/end-user.module.ts ***!
      \*************************************************/

    /*! exports provided: EndUserModule */

    /***/
    function nmET(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EndUserModule", function () {
        return EndUserModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var _end_user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./end-user-routing.module */
      "j4tg");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fuse/shared.module */
      "5HBU");

      var COMPONENTS = [];
      var COMPONENTS_DYNAMIC = [];

      var EndUserModule = function EndUserModule() {
        _classCallCheck(this, EndUserModule);
      };

      EndUserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: EndUserModule
      });
      EndUserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function EndUserModule_Factory(t) {
          return new (t || EndUserModule)();
        },
        imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _end_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["EndUserRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__["FuseSharedModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EndUserModule, {
          imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _end_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["EndUserRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__["FuseSharedModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EndUserModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _end_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["EndUserRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__["FuseSharedModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"]],
            declarations: [COMPONENTS, COMPONENTS_DYNAMIC],
            entryComponents: [COMPONENTS_DYNAMIC]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=app-main-endUser-end-user-module-es5.js.map