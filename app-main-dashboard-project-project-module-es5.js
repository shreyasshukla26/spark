(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-main-dashboard-project-project-module"], {
    /***/
    "JAYn":
    /*!**********************************************************!*\
      !*** ./src/app/main/dashboard/project/project.module.ts ***!
      \**********************************************************/

    /*! exports provided: ProjectDashboardModule */

    /***/
    function JAYn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectDashboardModule", function () {
        return ProjectDashboardModule;
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
        path: 'monitoringReports',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | app-main-dashboard-project-monitoring-reports-monitoring-reports-module */
          [__webpack_require__.e("common"), __webpack_require__.e("app-main-dashboard-project-monitoring-reports-monitoring-reports-module")]).then(__webpack_require__.bind(null,
          /*! app/main/dashboard/project/monitoring-reports/monitoring-reports.module */
          "GIZ4")).then(function (m) {
            return m.MonitoringReportsModule;
          });
        }
      }, {
        path: 'paymentReports',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | app-main-dashboard-project-payment-reports-payment-reports-module */
          [__webpack_require__.e("common"), __webpack_require__.e("app-main-dashboard-project-payment-reports-payment-reports-module")]).then(__webpack_require__.bind(null,
          /*! app/main/dashboard/project/payment-reports/payment-reports.module */
          "nkhS")).then(function (m) {
            return m.PaymentReportsModule;
          });
        }
      }];

      var ProjectDashboardModule = function ProjectDashboardModule() {
        _classCallCheck(this, ProjectDashboardModule);
      };

      ProjectDashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProjectDashboardModule
      });
      ProjectDashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ProjectDashboardModule_Factory(t) {
          return new (t || ProjectDashboardModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__["FuseSharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectDashboardModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__["FuseSharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectDashboardModule, [{
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
//# sourceMappingURL=app-main-dashboard-project-project-module-es5.js.map