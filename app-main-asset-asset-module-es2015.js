(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-main-asset-asset-module"],{

/***/ "J87w":
/*!****************************************************!*\
  !*** ./src/app/main/asset/asset-routing.module.ts ***!
  \****************************************************/
/*! exports provided: AssetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetRoutingModule", function() { return AssetRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




// import { ChargerCrudComponent } from './charger-crud/charger-crud.component';
// import { TABS_DEMO_ROUTES } from './charger-crud/routes';
const routes = [
    {
        path: 'chargerTypeManagement',
        loadChildren: () => Promise.all(/*! import() | charger-type-charger-type-module */[__webpack_require__.e("common"), __webpack_require__.e("charger-type-charger-type-module")]).then(__webpack_require__.bind(null, /*! ./charger-type/charger-type.module */ "9dZ2")).then(m => m.ChargerTypeModule),
        data: { title: 'Charger Type', titleI18n: 'charger' },
    },
    {
        path: 'alarmConfiguation',
        loadChildren: () => Promise.all(/*! import() | alarm-configuration-alarm-configuration-module */[__webpack_require__.e("common"), __webpack_require__.e("alarm-configuration-alarm-configuration-module")]).then(__webpack_require__.bind(null, /*! ./alarm-configuration/alarm-configuration.module */ "Pq8p")).then(m => m.AlarmConfigurationModule),
        data: { title: 'Charger Type', titleI18n: 'charger' },
    },
    {
        path: 'chargingModel',
        // loadChildren: () => import('./configuration/charger-model/charging-model.module').then(m => m.ChargingModelModule),
        loadChildren: () => Promise.all(/*! import() | charger-model-charging-model-module */[__webpack_require__.e("common"), __webpack_require__.e("charger-model-charging-model-module")]).then(__webpack_require__.bind(null, /*! ./charger-model/charging-model.module */ "Ozft")).then(m => m.ChargingModelModule),
        data: { title: 'Charging Model', titleI18n: 'chargingModel' },
    },
    {
        path: 'chargerManagement',
        loadChildren: () => __webpack_require__.e(/*! import() | charger-charger-management-module */ "charger-charger-management-module").then(__webpack_require__.bind(null, /*! ./charger/charger-management.module */ "THMh")).then(m => m.ChargerManagementModule),
        data: { title: 'Charger', titleI18n: 'charger' },
    },
    {
        path: 'vehicleManagement',
        loadChildren: () => __webpack_require__.e(/*! import() | vehicle-vehicle-module */ "vehicle-vehicle-module").then(__webpack_require__.bind(null, /*! ./vehicle/vehicle.module */ "i/W4")).then(m => m.VehicleModule),
        // loadChildren: () => import('./configuration/vehicle/vehicle.module').then(m => m.VehicleModule),
        data: { title: 'Vehicle Management', titleI18n: 'vehicle' },
    },
    {
        path: 'rfidManagement',
        loadChildren: () => __webpack_require__.e(/*! import() | rfid-management-rfid-management-module */ "rfid-management-rfid-management-module").then(__webpack_require__.bind(null, /*! ./rfid-management/rfid-management.module */ "DZ/b")).then(m => m.RfidManagementModule),
        // loadChildren: () => import('./configuration/vehicle/vehicle.module').then(m => m.VehicleModule),
        data: { title: 'RFID Management', titleI18n: 'rfidManagement' },
    },
];
class AssetRoutingModule {
}
AssetRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AssetRoutingModule });
AssetRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AssetRoutingModule_Factory(t) { return new (t || AssetRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AssetRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssetRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "NdFN":
/*!********************************************!*\
  !*** ./src/app/main/asset/asset.module.ts ***!
  \********************************************/
/*! exports provided: AssetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetModule", function() { return AssetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ "PCNd");
/* harmony import */ var _asset_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset-routing.module */ "J87w");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "5HBU");





const COMPONENTS = [];
const COMPONENTS_DYNAMIC = [];
class AssetModule {
}
AssetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AssetModule });
AssetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AssetModule_Factory(t) { return new (t || AssetModule)(); }, imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _asset_routing_module__WEBPACK_IMPORTED_MODULE_2__["AssetRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AssetModule, { imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _asset_routing_module__WEBPACK_IMPORTED_MODULE_2__["AssetRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssetModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _asset_routing_module__WEBPACK_IMPORTED_MODULE_2__["AssetRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]],
                declarations: [COMPONENTS, COMPONENTS_DYNAMIC],
                entryComponents: [COMPONENTS_DYNAMIC]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=app-main-asset-asset-module-es2015.js.map