(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-main-coprate-mgmt-coprate-mgmt-module"],{

/***/ "EwCP":
/*!**********************************************************!*\
  !*** ./src/app/main/coprate-mgmt/coprate-mgmt.module.ts ***!
  \**********************************************************/
/*! exports provided: CoprateMgmtModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoprateMgmtModule", function() { return CoprateMgmtModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ "PCNd");
/* harmony import */ var _coprate_mgmt_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coprate-mgmt-routing.module */ "KOkT");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "5HBU");



// import { CreateComponent } from './create/create.component';
// import { ListComponent } from './list/list.component';
// import { ChargingStationRoutingModule } from './charging-station-routing.module';


const COMPONENTS = [];
const COMPONENTS_DYNAMIC = [];
class CoprateMgmtModule {
}
CoprateMgmtModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoprateMgmtModule });
CoprateMgmtModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoprateMgmtModule_Factory(t) { return new (t || CoprateMgmtModule)(); }, imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _coprate_mgmt_routing_module__WEBPACK_IMPORTED_MODULE_2__["CoprateMgmtRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoprateMgmtModule, { imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _coprate_mgmt_routing_module__WEBPACK_IMPORTED_MODULE_2__["CoprateMgmtRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoprateMgmtModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _coprate_mgmt_routing_module__WEBPACK_IMPORTED_MODULE_2__["CoprateMgmtRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]],
                declarations: [COMPONENTS, COMPONENTS_DYNAMIC],
                entryComponents: [COMPONENTS_DYNAMIC]
            }]
    }], null, null); })();


/***/ }),

/***/ "KOkT":
/*!******************************************************************!*\
  !*** ./src/app/main/coprate-mgmt/coprate-mgmt-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: CoprateMgmtRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoprateMgmtRoutingModule", function() { return CoprateMgmtRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: 'coprate-user',
        loadChildren: () => Promise.all(/*! import() | coprate-user-coprate-user-module */[__webpack_require__.e("common"), __webpack_require__.e("coprate-user-coprate-user-module")]).then(__webpack_require__.bind(null, /*! ./coprate-user/coprate-user.module */ "XKeE")).then(m => m.CoprateUserModule),
        data: { title: 'CoprateUser' }
    }
];
class CoprateMgmtRoutingModule {
}
CoprateMgmtRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoprateMgmtRoutingModule });
CoprateMgmtRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoprateMgmtRoutingModule_Factory(t) { return new (t || CoprateMgmtRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoprateMgmtRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoprateMgmtRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=app-main-coprate-mgmt-coprate-mgmt-module-es2015.js.map