(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-main-manage-geographics-manage-geographics-module"], {
    /***/
    "CpYk":
    /*!******************************************************************************!*\
      !*** ./src/app/main/manage-geographics/manage-geographics-routing.module.ts ***!
      \******************************************************************************/

    /*! exports provided: ManageGeographicsRoutingModule */

    /***/
    function CpYk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageGeographicsRoutingModule", function () {
        return ManageGeographicsRoutingModule;
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
        path: 'manageCountry',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | manage-country-manage-country-module */
          [__webpack_require__.e("common"), __webpack_require__.e("manage-country-manage-country-module")]).then(__webpack_require__.bind(null,
          /*! ./manage-country/manage-country.module */
          "dxTH")).then(function (m) {
            return m.ManageCountryModule;
          });
        },
        data: {
          title: 'CoprateUser'
        }
      }, {
        path: 'manageState',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | manage-state-manage-state-module */
          [__webpack_require__.e("common"), __webpack_require__.e("manage-state-manage-state-module")]).then(__webpack_require__.bind(null,
          /*! ./manage-state/manage-state.module */
          "Oh2b")).then(function (m) {
            return m.ManageStateModule;
          });
        },
        data: {
          title: 'CoprateUser'
        }
      }, {
        path: 'manageCity',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | manage-city-manage-city-module */
          [__webpack_require__.e("common"), __webpack_require__.e("manage-city-manage-city-module")]).then(__webpack_require__.bind(null,
          /*! ./manage-city/manage-city.module */
          "AKhi")).then(function (m) {
            return m.ManageCityModule;
          });
        },
        data: {
          title: 'CoprateUser'
        }
      }, {
        path: 'manageStatePin',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | manage-state-pin-manage-state-pin-module */
          [__webpack_require__.e("common"), __webpack_require__.e("manage-state-pin-manage-state-pin-module")]).then(__webpack_require__.bind(null,
          /*! ./manage-state-pin/manage-state-pin.module */
          "mXO8")).then(function (m) {
            return m.ManageStatePinModule;
          });
        },
        data: {
          title: 'manageStatePin'
        }
      }];

      var ManageGeographicsRoutingModule = function ManageGeographicsRoutingModule() {
        _classCallCheck(this, ManageGeographicsRoutingModule);
      };

      ManageGeographicsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ManageGeographicsRoutingModule
      });
      ManageGeographicsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ManageGeographicsRoutingModule_Factory(t) {
          return new (t || ManageGeographicsRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ManageGeographicsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageGeographicsRoutingModule, [{
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
    "vXbG":
    /*!**********************************************************************!*\
      !*** ./src/app/main/manage-geographics/manage-geographics.module.ts ***!
      \**********************************************************************/

    /*! exports provided: ManageGeographicsModule */

    /***/
    function vXbG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageGeographicsModule", function () {
        return ManageGeographicsModule;
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


      var _manage_geographics_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./manage-geographics-routing.module */
      "CpYk");
      /* harmony import */


      var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fuse/shared.module */
      "5HBU"); // import { CreateComponent } from './create/create.component';
      // import { ListComponent } from './list/list.component';
      // import { ChargingStationRoutingModule } from './charging-station-routing.module';


      var COMPONENTS = [];
      var COMPONENTS_DYNAMIC = [];

      var ManageGeographicsModule = function ManageGeographicsModule() {
        _classCallCheck(this, ManageGeographicsModule);
      };

      ManageGeographicsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ManageGeographicsModule
      });
      ManageGeographicsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ManageGeographicsModule_Factory(t) {
          return new (t || ManageGeographicsModule)();
        },
        imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _manage_geographics_routing_module__WEBPACK_IMPORTED_MODULE_2__["ManageGeographicsRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ManageGeographicsModule, {
          imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _manage_geographics_routing_module__WEBPACK_IMPORTED_MODULE_2__["ManageGeographicsRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageGeographicsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _manage_geographics_routing_module__WEBPACK_IMPORTED_MODULE_2__["ManageGeographicsRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]],
            declarations: [COMPONENTS, COMPONENTS_DYNAMIC],
            entryComponents: [COMPONENTS_DYNAMIC]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=app-main-manage-geographics-manage-geographics-module-es5.js.map