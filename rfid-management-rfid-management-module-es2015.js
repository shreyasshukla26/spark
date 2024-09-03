(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rfid-management-rfid-management-module"],{

/***/ "COLl":
/*!******************************************************************************!*\
  !*** ./src/app/main/asset/rfid-management/rfid-management-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: RfidManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RfidManagementRoutingModule", function() { return RfidManagementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: "rfid",
        loadChildren: () => __webpack_require__.e(/*! import() | rfid-rfid-module */ "rfid-rfid-module").then(__webpack_require__.bind(null, /*! ./rfid/rfid.module */ "lm3b")).then((m) => m.RfidModule),
        data: { title: "RFID" },
    },
    {
        path: "cpo-rfid",
        loadChildren: () => Promise.all(/*! import() | cpo-rfid-cpo-rfid-module */[__webpack_require__.e("common"), __webpack_require__.e("cpo-rfid-cpo-rfid-module")]).then(__webpack_require__.bind(null, /*! ./cpo-rfid/cpo-rfid.module */ "cDtw")).then((m) => m.CpoRfidModule),
        data: { title: "On Board" },
    },
    {
        path: "rfid-recharge",
        loadChildren: () => Promise.all(/*! import() | rfid-recharge-rfid-recharge-module */[__webpack_require__.e("common"), __webpack_require__.e("rfid-recharge-rfid-recharge-module")]).then(__webpack_require__.bind(null, /*! ./rfid-recharge/rfid-recharge.module */ "8p0C")).then((m) => m.RfidRechargeModule),
        data: {
            title: "RFID Recharge"
        }
    },
];
class RfidManagementRoutingModule {
}
RfidManagementRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RfidManagementRoutingModule });
RfidManagementRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RfidManagementRoutingModule_Factory(t) { return new (t || RfidManagementRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RfidManagementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RfidManagementRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "DZ/b":
/*!**********************************************************************!*\
  !*** ./src/app/main/asset/rfid-management/rfid-management.module.ts ***!
  \**********************************************************************/
/*! exports provided: RfidManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RfidManagementModule", function() { return RfidManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ "PCNd");
/* harmony import */ var _rfid_management_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rfid-management-routing.module */ "COLl");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "5HBU");



// import { CreateComponent } from './create/create.component';
// import { ListComponent } from './list/list.component';
// import { ChargingStationRoutingModule } from './charging-station-routing.module';


const COMPONENTS = [];
const COMPONENTS_DYNAMIC = [];
class RfidManagementModule {
}
RfidManagementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RfidManagementModule });
RfidManagementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RfidManagementModule_Factory(t) { return new (t || RfidManagementModule)(); }, imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _rfid_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["RfidManagementRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RfidManagementModule, { imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _rfid_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["RfidManagementRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RfidManagementModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _rfid_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["RfidManagementRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]],
                declarations: [COMPONENTS, COMPONENTS_DYNAMIC],
                entryComponents: [COMPONENTS_DYNAMIC]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=rfid-management-rfid-management-module-es2015.js.map