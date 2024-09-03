(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vehicle-vehicle-module"], {
    /***/
    "6YuS":
    /*!**************************************************************!*\
      !*** ./src/app/main/asset/vehicle/vehicle-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: VehicleRoutingModule */

    /***/
    function YuS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VehicleRoutingModule", function () {
        return VehicleRoutingModule;
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
        path: 'onBoard',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | vehicle-onBoard-vehicle-onBoard-module */
          [__webpack_require__.e("common"), __webpack_require__.e("vehicle-onBoard-vehicle-onBoard-module")]).then(__webpack_require__.bind(null,
          /*! ./vehicle-onBoard/vehicle-onBoard.module */
          "8WGi")).then(function (m) {
            return m.VehicleOnBoardModule;
          });
        },
        data: {
          title: 'On Board'
        }
      }];

      var VehicleRoutingModule = function VehicleRoutingModule() {
        _classCallCheck(this, VehicleRoutingModule);
      };

      VehicleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: VehicleRoutingModule
      });
      VehicleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function VehicleRoutingModule_Factory(t) {
          return new (t || VehicleRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VehicleRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleRoutingModule, [{
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
    "i/W4":
    /*!******************************************************!*\
      !*** ./src/app/main/asset/vehicle/vehicle.module.ts ***!
      \******************************************************/

    /*! exports provided: VehicleModule */

    /***/
    function iW4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VehicleModule", function () {
        return VehicleModule;
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


      var _vehicle_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./vehicle-routing.module */
      "6YuS");
      /* harmony import */


      var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fuse/shared.module */
      "5HBU"); // import { CreateComponent } from './create/create.component';
      // import { ListComponent } from './list/list.component';
      // import { ChargingStationRoutingModule } from './charging-station-routing.module';


      var COMPONENTS = [];
      var COMPONENTS_DYNAMIC = [];

      var VehicleModule = function VehicleModule() {
        _classCallCheck(this, VehicleModule);
      };

      VehicleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: VehicleModule
      });
      VehicleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function VehicleModule_Factory(t) {
          return new (t || VehicleModule)();
        },
        imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"], _vehicle_routing_module__WEBPACK_IMPORTED_MODULE_2__["VehicleRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VehicleModule, {
          imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"], _vehicle_routing_module__WEBPACK_IMPORTED_MODULE_2__["VehicleRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"], _vehicle_routing_module__WEBPACK_IMPORTED_MODULE_2__["VehicleRoutingModule"]],
            declarations: [COMPONENTS, COMPONENTS_DYNAMIC],
            entryComponents: [COMPONENTS_DYNAMIC]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=vehicle-vehicle-module-es5.js.map