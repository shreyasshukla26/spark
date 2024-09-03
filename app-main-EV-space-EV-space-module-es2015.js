(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-main-EV-space-EV-space-module"],{

/***/ "2dNU":
/*!**********************************************************!*\
  !*** ./src/app/main/EV-space/EV-space-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: EVSpaceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVSpaceRoutingModule", function() { return EVSpaceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: 'evDealer',
        loadChildren: () => __webpack_require__.e(/*! import() | EV-dealers-EV-dealers-module */ "EV-dealers-EV-dealers-module").then(__webpack_require__.bind(null, /*! ./EV-dealers/EV-dealers.module */ "zhR+")).then(m => m.EVDealersModule),
        data: { title: 'EV Dealers', titleI18n: 'EV-Dealers' },
    },
    {
        path: 'govtSubsidy',
        loadChildren: () => Promise.all(/*! import() | subsidy-subsidy-module */[__webpack_require__.e("common"), __webpack_require__.e("subsidy-subsidy-module")]).then(__webpack_require__.bind(null, /*! ./subsidy/subsidy.module */ "vvAt")).then(m => m.SubsidyModule),
        data: { title: 'Govt Subsidy', titleI18n: 'Govt Subsidy' },
    },
    {
        path: 'evFleet',
        loadChildren: () => Promise.all(/*! import() | EV-fleet-EV-fleet-module */[__webpack_require__.e("common"), __webpack_require__.e("EV-fleet-EV-fleet-module")]).then(__webpack_require__.bind(null, /*! ./EV-fleet/EV-fleet.module */ "4dja")).then(m => m.EVFleetModule),
        data: { title: 'Ev Fleet', titleI8n: 'Ev Fleet' }
    },
    {
        path: 'evComponentsManufactures',
        loadChildren: () => Promise.all(/*! import() | EV-components--manufacturers-EV-components-manufacturers-module */[__webpack_require__.e("common"), __webpack_require__.e("EV-components--manufacturers-EV-components-manufacturers-module")]).then(__webpack_require__.bind(null, /*! ./EV-components -manufacturers/EV-components-manufacturers.module */ "txcp")).then(m => m.EVComponentsManufacturersModule),
        data: { title: 'EV Components Manufactures', titleI18n: 'EV Components Manufactures' },
    },
];
class EVSpaceRoutingModule {
}
EVSpaceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EVSpaceRoutingModule });
EVSpaceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EVSpaceRoutingModule_Factory(t) { return new (t || EVSpaceRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EVSpaceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EVSpaceRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Lxi8":
/*!**************************************************!*\
  !*** ./src/app/main/EV-space/EV-space.module.ts ***!
  \**************************************************/
/*! exports provided: EVSpaceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVSpaceModule", function() { return EVSpaceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ "PCNd");
/* harmony import */ var _EV_space_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EV-space-routing.module */ "2dNU");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "5HBU");





const COMPONENTS = [];
const COMPONENTS_DYNAMIC = [];
class EVSpaceModule {
}
EVSpaceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EVSpaceModule });
EVSpaceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EVSpaceModule_Factory(t) { return new (t || EVSpaceModule)(); }, imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _EV_space_routing_module__WEBPACK_IMPORTED_MODULE_2__["EVSpaceRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EVSpaceModule, { imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _EV_space_routing_module__WEBPACK_IMPORTED_MODULE_2__["EVSpaceRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EVSpaceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _EV_space_routing_module__WEBPACK_IMPORTED_MODULE_2__["EVSpaceRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]],
                declarations: [COMPONENTS, COMPONENTS_DYNAMIC],
                entryComponents: [COMPONENTS_DYNAMIC]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=app-main-EV-space-EV-space-module-es2015.js.map