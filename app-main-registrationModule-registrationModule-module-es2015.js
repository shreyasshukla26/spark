(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-main-registrationModule-registrationModule-module"],{

/***/ "2yde":
/*!**********************************************************************!*\
  !*** ./src/app/main/registrationModule/registrationModule.module.ts ***!
  \**********************************************************************/
/*! exports provided: RegistrationModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationModuleModule", function() { return RegistrationModuleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ "PCNd");
/* harmony import */ var _registrationModule_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registrationModule-routing.module */ "DBz4");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "5HBU");





const COMPONENTS = [];
const COMPONENTS_DYNAMIC = [];
class RegistrationModuleModule {
}
RegistrationModuleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RegistrationModuleModule });
RegistrationModuleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RegistrationModuleModule_Factory(t) { return new (t || RegistrationModuleModule)(); }, imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _registrationModule_routing_module__WEBPACK_IMPORTED_MODULE_2__["RegistrationModuleRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegistrationModuleModule, { imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _registrationModule_routing_module__WEBPACK_IMPORTED_MODULE_2__["RegistrationModuleRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationModuleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _registrationModule_routing_module__WEBPACK_IMPORTED_MODULE_2__["RegistrationModuleRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]],
                declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
                entryComponents: COMPONENTS_DYNAMIC,
            }]
    }], null, null); })();


/***/ }),

/***/ "DBz4":
/*!******************************************************************************!*\
  !*** ./src/app/main/registrationModule/registrationModule-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: RegistrationModuleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationModuleRoutingModule", function() { return RegistrationModuleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: 'cpo',
        loadChildren: () => __webpack_require__.e(/*! import() | CPO-cpo-module */ "CPO-cpo-module").then(__webpack_require__.bind(null, /*! ./CPO/cpo.module */ "fBRh")).then(m => m.CpoModule),
        data: { title: 'CPO', titleI18n: 'cpo' },
    },
    {
        path: 'user',
        loadChildren: () => __webpack_require__.e(/*! import() | User-user-module */ "User-user-module").then(__webpack_require__.bind(null, /*! ./User/user.module */ "A0JP")).then(m => m.UserModule),
        data: { title: 'User', titleI18n: 'user' },
    },
    {
        path: 'customer',
        loadChildren: () => __webpack_require__.e(/*! import() | customer-registration-customer-module */ "customer-registration-customer-module").then(__webpack_require__.bind(null, /*! ./customer-registration/customer.module */ "2Drh")).then(m => m.CustomerModule),
        data: { title: 'Customer', titleI18n: 'customer' },
    },
    {
        path: 'vehicle',
        loadChildren: () => Promise.all(/*! import() | Vehicle-vehicle-module */[__webpack_require__.e("common"), __webpack_require__.e("Vehicle-vehicle-module")]).then(__webpack_require__.bind(null, /*! ./Vehicle/vehicle.module */ "NIpB")).then(m => m.VehicleModule),
        data: { title: 'Vehicle', titleI18n: 'vehicle' },
    }
];
class RegistrationModuleRoutingModule {
}
RegistrationModuleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RegistrationModuleRoutingModule });
RegistrationModuleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RegistrationModuleRoutingModule_Factory(t) { return new (t || RegistrationModuleRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegistrationModuleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationModuleRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=app-main-registrationModule-registrationModule-module-es2015.js.map