(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-main-tariff-management-tariff-management-module"],{

/***/ "7Nli":
/*!****************************************************************************!*\
  !*** ./src/app/main/tariff-management/tariff-management-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: TariffManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TariffManagementRoutingModule", function() { return TariffManagementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: 'manageTariff',
        loadChildren: () => Promise.all(/*! import() | manage-tariff-manage-tariff-module */[__webpack_require__.e("common"), __webpack_require__.e("manage-tariff-manage-tariff-module")]).then(__webpack_require__.bind(null, /*! ./manage-tariff/manage-tariff.module */ "BEIN")).then(m => m.ManageTariffModule),
        data: { title: 'Manage Tariff' }
    },
    {
        path: 'taxSetting',
        loadChildren: () => Promise.all(/*! import() | tax-setting-tax-setting-module */[__webpack_require__.e("common"), __webpack_require__.e("tax-setting-tax-setting-module")]).then(__webpack_require__.bind(null, /*! ./tax-setting/tax-setting.module */ "DqIx")).then(m => m.TaxSettingModule),
        data: { title: 'Tax Setting' }
    },
    {
        path: 'launchTariff',
        loadChildren: () => Promise.all(/*! import() | launch-tariff-launch-tariff-module */[__webpack_require__.e("common"), __webpack_require__.e("launch-tariff-launch-tariff-module")]).then(__webpack_require__.bind(null, /*! ./launch-tariff/launch-tariff.module */ "ORlv")).then(m => m.LaunchTariffModule),
        data: { title: 'Tax Setting' }
    },
];
class TariffManagementRoutingModule {
}
TariffManagementRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TariffManagementRoutingModule });
TariffManagementRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TariffManagementRoutingModule_Factory(t) { return new (t || TariffManagementRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TariffManagementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TariffManagementRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "FXUK":
/*!********************************************************************!*\
  !*** ./src/app/main/tariff-management/tariff-management.module.ts ***!
  \********************************************************************/
/*! exports provided: TariffManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TariffManagementModule", function() { return TariffManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ "PCNd");
/* harmony import */ var _tariff_management_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tariff-management-routing.module */ "7Nli");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "5HBU");





const COMPONENTS = [];
const COMPONENTS_DYNAMIC = [];
class TariffManagementModule {
}
TariffManagementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TariffManagementModule });
TariffManagementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TariffManagementModule_Factory(t) { return new (t || TariffManagementModule)(); }, imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _tariff_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["TariffManagementRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TariffManagementModule, { imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _tariff_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["TariffManagementRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TariffManagementModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _tariff_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["TariffManagementRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]],
                declarations: [COMPONENTS, COMPONENTS_DYNAMIC],
                entryComponents: [COMPONENTS_DYNAMIC]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=app-main-tariff-management-tariff-management-module-es2015.js.map