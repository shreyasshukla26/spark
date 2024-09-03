(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["EV-dealers-EV-dealers-module"], {
    /***/
    "Ixmc":
    /*!***********************************************************************!*\
      !*** ./src/app/main/EV-space/EV-dealers/EV-dealers-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: EVDealersRoutingModule */

    /***/
    function Ixmc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EVDealersRoutingModule", function () {
        return EVDealersRoutingModule;
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
        path: 'evChargingStationFranchise',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | EV-charging-station-franchise-EV-charging-station-franchise-module */
          [__webpack_require__.e("common"), __webpack_require__.e("EV-charging-station-franchise-EV-charging-station-franchise-module")]).then(__webpack_require__.bind(null,
          /*! ./EV-charging-station-franchise/EV-charging-station-franchise.module */
          "kHC9")).then(function (m) {
            return m.EVChargingStationFranchiseModule;
          });
        },
        data: {
          title: 'EV Charging Station Franchise',
          titleI18n: 'EV-charging-station-franchise'
        }
      }, {
        path: 'evBatteryManufacturers',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | EV-battery-manufacturers-EV-battery-manufacturers-module */
          [__webpack_require__.e("common"), __webpack_require__.e("EV-battery-manufacturers-EV-battery-manufacturers-module")]).then(__webpack_require__.bind(null,
          /*! ./EV-battery-manufacturers/EV-battery-manufacturers.module */
          "86gK")).then(function (m) {
            return m.EVBatteryManufacturersModule;
          });
        },
        data: {
          title: 'EV Battery Manufactures',
          titleI18n: 'EV Battery Manufactures'
        }
      }, {
        path: 'evDealerShipFranchise',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | EV-dealership-franchise-provider-EV-dealership-franchise-provider-module */
          [__webpack_require__.e("common"), __webpack_require__.e("EV-dealership-franchise-provider-EV-dealership-franchise-provider-module")]).then(__webpack_require__.bind(null,
          /*! ./EV-dealership-franchise-provider/EV-dealership-franchise-provider.module */
          "nOAk")).then(function (m) {
            return m.EVChargingStationFranchiseModule;
          });
        },
        data: {
          title: 'EV Dealership Franchise Provider',
          titleI18n: 'EV Dealership Franchise Provider'
        }
      }];

      var EVDealersRoutingModule = function EVDealersRoutingModule() {
        _classCallCheck(this, EVDealersRoutingModule);
      };

      EVDealersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: EVDealersRoutingModule
      });
      EVDealersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function EVDealersRoutingModule_Factory(t) {
          return new (t || EVDealersRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EVDealersRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EVDealersRoutingModule, [{
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
    "zhR+":
    /*!***************************************************************!*\
      !*** ./src/app/main/EV-space/EV-dealers/EV-dealers.module.ts ***!
      \***************************************************************/

    /*! exports provided: EVDealersModule */

    /***/
    function zhR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EVDealersModule", function () {
        return EVDealersModule;
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


      var _EV_dealers_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./EV-dealers-routing.module */
      "Ixmc");
      /* harmony import */


      var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fuse/shared.module */
      "5HBU");

      var COMPONENTS = [];
      var COMPONENTS_DYNAMIC = [];

      var EVDealersModule = function EVDealersModule() {
        _classCallCheck(this, EVDealersModule);
      };

      EVDealersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: EVDealersModule
      });
      EVDealersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function EVDealersModule_Factory(t) {
          return new (t || EVDealersModule)();
        },
        imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _EV_dealers_routing_module__WEBPACK_IMPORTED_MODULE_2__["EVDealersRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EVDealersModule, {
          imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _EV_dealers_routing_module__WEBPACK_IMPORTED_MODULE_2__["EVDealersRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EVDealersModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _EV_dealers_routing_module__WEBPACK_IMPORTED_MODULE_2__["EVDealersRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]],
            declarations: [],
            entryComponents: []
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=EV-dealers-EV-dealers-module-es5.js.map