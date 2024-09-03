(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-main-customer-management-customer-management-module"],{

/***/ "TfQS":
/*!********************************************************************************!*\
  !*** ./src/app/main/customer-management/customer-management-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: CustomerManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerManagementRoutingModule", function() { return CustomerManagementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: 'registerChargerRequest',
        loadChildren: () => __webpack_require__.e(/*! import() | register-charger-request-register-charger-request-module */ "register-charger-request-register-charger-request-module").then(__webpack_require__.bind(null, /*! ./register-charger-request/register-charger-request.module */ "YnbE")).then(m => m.RegisterChargerRequestModule),
        data: { title: 'Register Charger Request', titleI18n: 'RegisterChargerRequest' },
    },
    {
        path: 'newEvStationRequest',
        loadChildren: () => __webpack_require__.e(/*! import() | EV-charging-station-request-EV-charging-station-request-module */ "EV-charging-station-request-EV-charging-station-request-module").then(__webpack_require__.bind(null, /*! ./EV-charging-station-request/EV-charging-station-request.module */ "IHw5")).then(m => m.EVChargingStationRequestModule),
        data: { title: 'EV Charging Station Request', titleI18n: 'EV Charging Station Request' },
    },
];
class CustomerManagementRoutingModule {
}
CustomerManagementRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CustomerManagementRoutingModule });
CustomerManagementRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CustomerManagementRoutingModule_Factory(t) { return new (t || CustomerManagementRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomerManagementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerManagementRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "sn2V":
/*!************************************************************************!*\
  !*** ./src/app/main/customer-management/customer-management.module.ts ***!
  \************************************************************************/
/*! exports provided: CustomerManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerManagementModule", function() { return CustomerManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ "PCNd");
/* harmony import */ var _customer_management_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-management-routing.module */ "TfQS");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "5HBU");





const COMPONENTS = [];
const COMPONENTS_DYNAMIC = [];
class CustomerManagementModule {
}
CustomerManagementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CustomerManagementModule });
CustomerManagementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CustomerManagementModule_Factory(t) { return new (t || CustomerManagementModule)(); }, imports: [[
            app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _customer_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomerManagementRoutingModule"],
            _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomerManagementModule, { imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        _customer_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomerManagementRoutingModule"],
        _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerManagementModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                    _customer_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomerManagementRoutingModule"],
                    _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                ],
                declarations: [COMPONENTS, COMPONENTS_DYNAMIC],
                entryComponents: [COMPONENTS_DYNAMIC]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=app-main-customer-management-customer-management-module-es2015.js.map