(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-main-user-management-user-management-module"],{

/***/ "MqQu":
/*!************************************************************************!*\
  !*** ./src/app/main/user-management/user-management-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: UserManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementRoutingModule", function() { return UserManagementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: 'user',
        loadChildren: () => Promise.all(/*! import() | user-user-module */[__webpack_require__.e("common"), __webpack_require__.e("user-user-module")]).then(__webpack_require__.bind(null, /*! ./user/user.module */ "jnC1")).then(m => m.UserModule),
        data: { title: 'User' }
    },
    {
        path: 'role-permission',
        loadChildren: () => __webpack_require__.e(/*! import() | role-permission-role-permission-module */ "role-permission-role-permission-module").then(__webpack_require__.bind(null, /*! ./role-permission/role-permission.module */ "lCTU")).then(m => m.RolePermissionModule),
        data: { title: 'RolePermission' }
    },
    {
        path: 'end-user',
        loadChildren: () => Promise.all(/*! import() | end-user-end-user-module */[__webpack_require__.e("common"), __webpack_require__.e("end-user-end-user-module")]).then(__webpack_require__.bind(null, /*! ./end-user/end-user.module */ "HEoN")).then(m => m.EndUserModule),
        data: { title: 'RolePermission' }
    },
    {
        path: 'role',
        loadChildren: () => Promise.all(/*! import() | role-role-module */[__webpack_require__.e("common"), __webpack_require__.e("role-role-module")]).then(__webpack_require__.bind(null, /*! ./role/role.module */ "HD5H")).then(m => m.RoleModule),
        data: { title: 'Role' }
    },
    {
        path: 'user-role',
        loadChildren: () => Promise.all(/*! import() | user-role-user-role-module */[__webpack_require__.e("common"), __webpack_require__.e("user-role-user-role-module")]).then(__webpack_require__.bind(null, /*! ./user-role/user-role.module */ "AgWt")).then(m => m.UserRoleModule),
        data: { title: 'user-role' }
    },
    {
        path: 'user-role-activity',
        loadChildren: () => Promise.all(/*! import() | user-role-activity-user-role-activity-module */[__webpack_require__.e("common"), __webpack_require__.e("user-role-activity-user-role-activity-module")]).then(__webpack_require__.bind(null, /*! ./user-role-activity/user-role-activity.module */ "JH8l")).then(m => m.UserRoleActivityModule),
        data: { title: 'user-role-activity' }
    },
    {
        path: 'manage-role-permission',
        loadChildren: () => Promise.all(/*! import() | manage-role-permission-manage-role-permission-module */[__webpack_require__.e("common"), __webpack_require__.e("manage-role-permission-manage-role-permission-module")]).then(__webpack_require__.bind(null, /*! ./manage-role-permission/manage-role-permission.module */ "vtBV")).then(m => m.ManageRolePermissionModule),
        data: { title: 'manage-role-permission' }
    },
    {
        path: 'manageUserStation',
        loadChildren: () => Promise.all(/*! import() | manage-user-station-manage-user-station-module */[__webpack_require__.e("common"), __webpack_require__.e("manage-user-station-manage-user-station-module")]).then(__webpack_require__.bind(null, /*! ./manage-user-station/manage-user-station.module */ "0H2J")).then(m => m.ManageUserStationModule),
        data: { title: 'manage-user-station' }
    }
];
class UserManagementRoutingModule {
}
UserManagementRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserManagementRoutingModule });
UserManagementRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserManagementRoutingModule_Factory(t) { return new (t || UserManagementRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserManagementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserManagementRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "pJvU":
/*!****************************************************************!*\
  !*** ./src/app/main/user-management/user-management.module.ts ***!
  \****************************************************************/
/*! exports provided: UserManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementModule", function() { return UserManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ "PCNd");
/* harmony import */ var _user_management_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-management-routing.module */ "MqQu");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/shared.module */ "5HBU");







const COMPONENTS = [];
const COMPONENTS_DYNAMIC = [];
class UserManagementModule {
}
UserManagementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserManagementModule });
UserManagementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserManagementModule_Factory(t) { return new (t || UserManagementModule)(); }, imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _user_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserManagementRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__["FuseSharedModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserManagementModule, { imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _user_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserManagementRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__["FuseSharedModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserManagementModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _user_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserManagementRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__["FuseSharedModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"]],
                declarations: [COMPONENTS, COMPONENTS_DYNAMIC],
                entryComponents: [COMPONENTS_DYNAMIC]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=app-main-user-management-user-management-module-es2015.js.map