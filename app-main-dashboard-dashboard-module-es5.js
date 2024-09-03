(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-main-dashboard-dashboard-module"], {
    /***/
    "GEmG":
    /*!****************************************************!*\
      !*** ./src/app/main/dashboard/dashboard.module.ts ***!
      \****************************************************/

    /*! exports provided: DashboardModule */

    /***/
    function GEmG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fuse/shared.module */
      "5HBU");

      var routes = [{
        path: 'analytics',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | app-main-dashboard-analytics-analytics-module */
          [__webpack_require__.e("common"), __webpack_require__.e("app-main-dashboard-analytics-analytics-module")]).then(__webpack_require__.bind(null,
          /*! app/main/dashboard/analytics/analytics.module */
          "ef+W")).then(function (m) {
            return m.AnalyticsDashboardModule;
          });
        }
      }, {
        path: 'project',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | app-main-dashboard-project-project-module */
          "app-main-dashboard-project-project-module").then(__webpack_require__.bind(null,
          /*! app/main/dashboard/project/project.module */
          "JAYn")).then(function (m) {
            return m.ProjectDashboardModule;
          });
        }
      }];

      var DashboardModule = function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      };

      DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DashboardModule
      });
      DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DashboardModule_Factory(t) {
          return new (t || DashboardModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__["FuseSharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__["FuseSharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__["FuseSharedModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=app-main-dashboard-dashboard-module-es5.js.map