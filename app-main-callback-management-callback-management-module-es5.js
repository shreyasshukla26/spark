(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-main-callback-management-callback-management-module"], {
    /***/
    "jKTB":
    /*!************************************************************************!*\
      !*** ./src/app/main/callback-management/callback-management.module.ts ***!
      \************************************************************************/

    /*! exports provided: CallbackManagementModule */

    /***/
    function jKTB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CallbackManagementModule", function () {
        return CallbackManagementModule;
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


      var _callback_management_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./callback-management-routing.module */
      "yX58");
      /* harmony import */


      var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fuse/shared.module */
      "5HBU"); // import { CreateComponent } from './create/create.component';
      // import { ListComponent } from './list/list.component';
      // import { ChargingStationRoutingModule } from './charging-station-routing.module';


      var COMPONENTS = [];
      var COMPONENTS_DYNAMIC = [];

      var CallbackManagementModule = function CallbackManagementModule() {
        _classCallCheck(this, CallbackManagementModule);
      };

      CallbackManagementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CallbackManagementModule
      });
      CallbackManagementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CallbackManagementModule_Factory(t) {
          return new (t || CallbackManagementModule)();
        },
        imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _callback_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["CallbackManagementRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CallbackManagementModule, {
          imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _callback_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["CallbackManagementRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallbackManagementModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _callback_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["CallbackManagementRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]],
            declarations: [COMPONENTS, COMPONENTS_DYNAMIC],
            entryComponents: [COMPONENTS_DYNAMIC]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "yX58":
    /*!********************************************************************************!*\
      !*** ./src/app/main/callback-management/callback-management-routing.module.ts ***!
      \********************************************************************************/

    /*! exports provided: CallbackManagementRoutingModule */

    /***/
    function yX58(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CallbackManagementRoutingModule", function () {
        return CallbackManagementRoutingModule;
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
        path: 'callback',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | callback-callback-module */
          "callback-callback-module").then(__webpack_require__.bind(null,
          /*! ./callback/callback.module */
          "UYZh")).then(function (m) {
            return m.CallbackModule;
          });
        },
        data: {
          title: 'Call Back'
        }
      }];

      var CallbackManagementRoutingModule = function CallbackManagementRoutingModule() {
        _classCallCheck(this, CallbackManagementRoutingModule);
      };

      CallbackManagementRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CallbackManagementRoutingModule
      });
      CallbackManagementRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CallbackManagementRoutingModule_Factory(t) {
          return new (t || CallbackManagementRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CallbackManagementRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallbackManagementRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=app-main-callback-management-callback-management-module-es5.js.map