(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-main-user-management-user-management-module"], {
    /***/
    "MqQu":
    /*!************************************************************************!*\
      !*** ./src/app/main/user-management/user-management-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: UserManagementRoutingModule */

    /***/
    function MqQu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserManagementRoutingModule", function () {
        return UserManagementRoutingModule;
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
        path: 'user',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | user-user-module */
          [__webpack_require__.e("common"), __webpack_require__.e("user-user-module")]).then(__webpack_require__.bind(null,
          /*! ./user/user.module */
          "jnC1")).then(function (m) {
            return m.UserModule;
          });
        },
        data: {
          title: 'User'
        }
      }, {
        path: 'role-permission',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | role-permission-role-permission-module */
          "role-permission-role-permission-module").then(__webpack_require__.bind(null,
          /*! ./role-permission/role-permission.module */
          "lCTU")).then(function (m) {
            return m.RolePermissionModule;
          });
        },
        data: {
          title: 'RolePermission'
        }
      }, {
        path: 'end-user',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | end-user-end-user-module */
          [__webpack_require__.e("common"), __webpack_require__.e("end-user-end-user-module")]).then(__webpack_require__.bind(null,
          /*! ./end-user/end-user.module */
          "HEoN")).then(function (m) {
            return m.EndUserModule;
          });
        },
        data: {
          title: 'RolePermission'
        }
      }, {
        path: 'role',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | role-role-module */
          [__webpack_require__.e("common"), __webpack_require__.e("role-role-module")]).then(__webpack_require__.bind(null,
          /*! ./role/role.module */
          "HD5H")).then(function (m) {
            return m.RoleModule;
          });
        },
        data: {
          title: 'Role'
        }
      }, {
        path: 'user-role',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | user-role-user-role-module */
          [__webpack_require__.e("common"), __webpack_require__.e("user-role-user-role-module")]).then(__webpack_require__.bind(null,
          /*! ./user-role/user-role.module */
          "AgWt")).then(function (m) {
            return m.UserRoleModule;
          });
        },
        data: {
          title: 'user-role'
        }
      }, {
        path: 'user-role-activity',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | user-role-activity-user-role-activity-module */
          [__webpack_require__.e("common"), __webpack_require__.e("user-role-activity-user-role-activity-module")]).then(__webpack_require__.bind(null,
          /*! ./user-role-activity/user-role-activity.module */
          "JH8l")).then(function (m) {
            return m.UserRoleActivityModule;
          });
        },
        data: {
          title: 'user-role-activity'
        }
      }, {
        path: 'manage-role-permission',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | manage-role-permission-manage-role-permission-module */
          [__webpack_require__.e("common"), __webpack_require__.e("manage-role-permission-manage-role-permission-module")]).then(__webpack_require__.bind(null,
          /*! ./manage-role-permission/manage-role-permission.module */
          "vtBV")).then(function (m) {
            return m.ManageRolePermissionModule;
          });
        },
        data: {
          title: 'manage-role-permission'
        }
      }, {
        path: 'manageUserStation',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | manage-user-station-manage-user-station-module */
          [__webpack_require__.e("common"), __webpack_require__.e("manage-user-station-manage-user-station-module")]).then(__webpack_require__.bind(null,
          /*! ./manage-user-station/manage-user-station.module */
          "0H2J")).then(function (m) {
            return m.ManageUserStationModule;
          });
        },
        data: {
          title: 'manage-user-station'
        }
      }];

      var UserManagementRoutingModule = function UserManagementRoutingModule() {
        _classCallCheck(this, UserManagementRoutingModule);
      };

      UserManagementRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UserManagementRoutingModule
      });
      UserManagementRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UserManagementRoutingModule_Factory(t) {
          return new (t || UserManagementRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserManagementRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserManagementRoutingModule, [{
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
    "pJvU":
    /*!****************************************************************!*\
      !*** ./src/app/main/user-management/user-management.module.ts ***!
      \****************************************************************/

    /*! exports provided: UserManagementModule */

    /***/
    function pJvU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserManagementModule", function () {
        return UserManagementModule;
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


      var _user_management_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-management-routing.module */
      "MqQu");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fuse/shared.module */
      "5HBU");

      var COMPONENTS = [];
      var COMPONENTS_DYNAMIC = [];

      var UserManagementModule = function UserManagementModule() {
        _classCallCheck(this, UserManagementModule);
      };

      UserManagementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UserManagementModule
      });
      UserManagementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UserManagementModule_Factory(t) {
          return new (t || UserManagementModule)();
        },
        imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _user_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserManagementRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__["FuseSharedModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserManagementModule, {
          imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _user_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserManagementRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__["FuseSharedModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserManagementModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _user_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserManagementRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__["FuseSharedModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"]],
            declarations: [COMPONENTS, COMPONENTS_DYNAMIC],
            entryComponents: [COMPONENTS_DYNAMIC]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=app-main-user-management-user-management-module-es5.js.map