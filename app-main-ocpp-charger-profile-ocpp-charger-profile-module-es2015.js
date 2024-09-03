(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-main-ocpp-charger-profile-ocpp-charger-profile-module"],{

/***/ "1M8m":
/*!**************************************************************************!*\
  !*** ./src/app/main/ocpp-charger-profile/ocpp-charger-profile.module.ts ***!
  \**************************************************************************/
/*! exports provided: OccpChargerProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccpChargerProfileModule", function() { return OccpChargerProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-material-components/datetime-picker */ "n1FK");
/* harmony import */ var _ocpp_charger_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ocpp-charger-profile-routing.module */ "W63r");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/shared.module */ "5HBU");
/* harmony import */ var _ocpp_charger_ocpp_charger_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ocpp-charger/ocpp-charger.component */ "QgV+");







const COMPONENTS = [_ocpp_charger_ocpp_charger_component__WEBPACK_IMPORTED_MODULE_5__["OcppChargerComponent"]];
const COMPONENTS_DYNAMIC = [];
class OccpChargerProfileModule {
}
OccpChargerProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OccpChargerProfileModule });
OccpChargerProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OccpChargerProfileModule_Factory(t) { return new (t || OccpChargerProfileModule)(); }, imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _ocpp_charger_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["OccpChargerProfileRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__["NgxMatDatetimePickerModule"],
            _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__["NgxMatNativeDateModule"],
            _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerModule"],]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OccpChargerProfileModule, { declarations: [_ocpp_charger_ocpp_charger_component__WEBPACK_IMPORTED_MODULE_5__["OcppChargerComponent"]], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _ocpp_charger_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["OccpChargerProfileRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__["NgxMatDatetimePickerModule"],
        _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__["NgxMatNativeDateModule"],
        _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OccpChargerProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _ocpp_charger_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["OccpChargerProfileRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__["NgxMatDatetimePickerModule"],
                    _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__["NgxMatNativeDateModule"],
                    _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerModule"],],
                declarations: [COMPONENTS, COMPONENTS_DYNAMIC],
                entryComponents: [COMPONENTS_DYNAMIC]
            }]
    }], null, null); })();


/***/ }),

/***/ "W63r":
/*!**********************************************************************************!*\
  !*** ./src/app/main/ocpp-charger-profile/ocpp-charger-profile-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: OccpChargerProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccpChargerProfileRoutingModule", function() { return OccpChargerProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/interceptors/auth-gaurd */ "9gca");
/* harmony import */ var _ocpp_charger_ocpp_charger_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ocpp-charger/ocpp-charger.component */ "QgV+");






const routes = [
    {
        path: 'ocppDashboard', component: _ocpp_charger_ocpp_charger_component__WEBPACK_IMPORTED_MODULE_3__["OcppChargerComponent"], canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'ocppChangeAvailability', component: _ocpp_charger_ocpp_charger_component__WEBPACK_IMPORTED_MODULE_3__["OcppChargerComponent"], canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'ocppManageConfigurations', component: _ocpp_charger_ocpp_charger_component__WEBPACK_IMPORTED_MODULE_3__["OcppChargerComponent"], canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'ocppGetDiagnostic', component: _ocpp_charger_ocpp_charger_component__WEBPACK_IMPORTED_MODULE_3__["OcppChargerComponent"], canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'ocppRemoteStart', component: _ocpp_charger_ocpp_charger_component__WEBPACK_IMPORTED_MODULE_3__["OcppChargerComponent"], canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'ocppRemoteStop', component: _ocpp_charger_ocpp_charger_component__WEBPACK_IMPORTED_MODULE_3__["OcppChargerComponent"], canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'ocppUnlockConnector', component: _ocpp_charger_ocpp_charger_component__WEBPACK_IMPORTED_MODULE_3__["OcppChargerComponent"], canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'ocppUpdateFirmware', component: _ocpp_charger_ocpp_charger_component__WEBPACK_IMPORTED_MODULE_3__["OcppChargerComponent"], canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'ocppReserveNow', component: _ocpp_charger_ocpp_charger_component__WEBPACK_IMPORTED_MODULE_3__["OcppChargerComponent"], canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'ocppCancelReservation', component: _ocpp_charger_ocpp_charger_component__WEBPACK_IMPORTED_MODULE_3__["OcppChargerComponent"], canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'ocppDataTransfer', component: _ocpp_charger_ocpp_charger_component__WEBPACK_IMPORTED_MODULE_3__["OcppChargerComponent"], canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'ocppSendLocalList', component: _ocpp_charger_ocpp_charger_component__WEBPACK_IMPORTED_MODULE_3__["OcppChargerComponent"], canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'ocppTriggerMessage', component: _ocpp_charger_ocpp_charger_component__WEBPACK_IMPORTED_MODULE_3__["OcppChargerComponent"], canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'ocppGetCompositeSchedule', component: _ocpp_charger_ocpp_charger_component__WEBPACK_IMPORTED_MODULE_3__["OcppChargerComponent"], canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'ocppClearChargingProfile', component: _ocpp_charger_ocpp_charger_component__WEBPACK_IMPORTED_MODULE_3__["OcppChargerComponent"], canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'ocppSetChargingProfile', component: _ocpp_charger_ocpp_charger_component__WEBPACK_IMPORTED_MODULE_3__["OcppChargerComponent"], canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
];
class OccpChargerProfileRoutingModule {
}
OccpChargerProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OccpChargerProfileRoutingModule });
OccpChargerProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OccpChargerProfileRoutingModule_Factory(t) { return new (t || OccpChargerProfileRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OccpChargerProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OccpChargerProfileRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=app-main-ocpp-charger-profile-ocpp-charger-profile-module-es2015.js.map