(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "/iNp":
    /*!*******************************************************************************!*\
      !*** ./src/app/shared/services/ev-space/govt-subsidy/govt-subsidy.service.ts ***!
      \*******************************************************************************/

    /*! exports provided: GovtSubsidyService */

    /***/
    function iNp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GovtSubsidyService", function () {
        return GovtSubsidyService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var GovtSubsidyService = /*#__PURE__*/function () {
        function GovtSubsidyService(http) {
          _classCallCheck(this, GovtSubsidyService);

          this.http = http;
          this.apiUrl2 = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2);
        }

        _createClass(GovtSubsidyService, [{
          key: "getAllModels",
          value: function getAllModels() {
            return this.http.get("".concat(this.apiUrl2, "/vehicleModel/getAllModels/"));
          }
        }, {
          key: "getVehicleTypes",
          value: function getVehicleTypes() {
            return this.http.get("".concat(this.apiUrl2, "/vehicleTypes/"));
          }
        }, {
          key: "subsidy",
          value: function subsidy(params) {
            return this.http.post("".concat(this.apiUrl2, "/subsidy/subsidy/"), params);
          }
        }, {
          key: "getAllSubsidy",
          value: function getAllSubsidy() {
            return this.http.get("".concat(this.apiUrl2, "/subsidy/getAllSubsidy/"));
          }
        }, {
          key: "getSubsidyByVehicleTypeId",
          value: function getSubsidyByVehicleTypeId(id) {
            return this.http.get("".concat(this.apiUrl2, "/subsidy/getSubsidyByVehicleType/").concat(id));
          }
        }, {
          key: "getAllModerateSubsidyList",
          value: function getAllModerateSubsidyList() {
            return this.http.get("".concat(this.apiUrl2, "/subsidy/getAllModerateSubsidyList/"));
          }
        }, {
          key: "updateSubsidy",
          value: function updateSubsidy(params) {
            return this.http.post("".concat(this.apiUrl2, "/subsidy/updateSubsidy/"), params);
          }
        }, {
          key: "deleteSubsidy",
          value: function deleteSubsidy(id, userId) {
            return this.http["delete"]("".concat(this.apiUrl2, "/subsidy/deleteSubsidy/").concat(id, "/").concat(userId));
          }
        }, {
          key: "publishSubsidy",
          value: function publishSubsidy(params) {
            return this.http.post("".concat(this.apiUrl2, "/subsidy/publishSubsidy/"), params);
          }
        }, {
          key: "moderateSubsidy",
          value: function moderateSubsidy(params) {
            return this.http.post("".concat(this.apiUrl2, "/subsidy/moderateSubsidy/"), params);
          }
        }, {
          key: "update",
          value: function update(params) {
            return this.http.post("".concat(this.apiUrl2, "/updateState/"), params);
          }
        }, {
          key: "getCountryById",
          value: function getCountryById(id) {
            return this.http.get("".concat(this.apiUrl2, "/getStateById/").concat(id));
          }
        }, {
          key: "delete",
          value: function _delete(id, userId) {
            return this.http["delete"]("".concat(this.apiUrl2, "/deleteState/").concat(id, "/").concat(userId));
          }
        }, {
          key: "getAllStates",
          value: function getAllStates() {
            return this.http.get("".concat(this.apiUrl2, "/getAllStates"));
          }
        }, {
          key: "getAllState",
          value: function getAllState() {
            return this.http.get("".concat(this.apiUrl2, "/getStates"));
          }
        }, {
          key: "getStateByCountry",
          value: function getStateByCountry(id) {
            return this.http.get("".concat(this.apiUrl2, "/getStateByCountry/").concat(id));
          }
        }, {
          key: "createStatePINMapping",
          value: function createStatePINMapping(params) {
            return this.http.post("".concat(this.apiUrl2, "/createStatePINMapping"), params);
          }
        }, {
          key: "getAllStatePINMapping",
          value: function getAllStatePINMapping() {
            return this.http.get("".concat(this.apiUrl2, "/getAllStatePINMapping"));
          }
        }, {
          key: "allActivePINByStateId",
          value: function allActivePINByStateId(state_id) {
            return this.http.get("".concat(this.apiUrl2, "/allActivePINByStateId/").concat(state_id));
          }
        }, {
          key: "deleteStatePINMapping",
          value: function deleteStatePINMapping(id, userId) {
            return this.http["delete"]("".concat(this.apiUrl2, "/deleteStatePINMapping/").concat(id, "/").concat(userId));
          }
        }, {
          key: "updateStatePinMapping",
          value: function updateStatePinMapping(params) {
            return this.http.post("".concat(this.apiUrl2, "/updateStatePinMapping"), params);
          }
        }]);

        return GovtSubsidyService;
      }();

      GovtSubsidyService.ɵfac = function GovtSubsidyService_Factory(t) {
        return new (t || GovtSubsidyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      GovtSubsidyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GovtSubsidyService,
        factory: GovtSubsidyService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GovtSubsidyService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "/nqz":
    /*!**************************************************!*\
      !*** ./src/app/shared/services/excel.service.ts ***!
      \**************************************************/

    /*! exports provided: ExcelService */

    /***/
    function nqz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExcelService", function () {
        return ExcelService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! xlsx */
      "EUZL");
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);

      var ExcelService = /*#__PURE__*/function () {
        function ExcelService() {
          _classCallCheck(this, ExcelService);
        }

        _createClass(ExcelService, [{
          key: "importFromFile",
          value: function importFromFile(bstr) {
            /* read workbook */
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_1__["read"](bstr, {
              type: 'binary'
            });
            /* grab first sheet */

            var wsname = wb.SheetNames[0];
            var ws = wb.Sheets[wsname];
            /* save data */

            var data = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].sheet_to_json(ws, {
              header: 1
            });
            return data;
          }
        }, {
          key: "exportToFile",
          value: function exportToFile(fileName, element_id) {
            if (!element_id) throw new Error('Element Id does not exists');
            var tbl = document.getElementById(element_id);
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].table_to_book(tbl);
            xlsx__WEBPACK_IMPORTED_MODULE_1__["writeFile"](wb, fileName + '.xlsx');
          }
        }]);

        return ExcelService;
      }();

      ExcelService.ɵfac = function ExcelService_Factory(t) {
        return new (t || ExcelService)();
      };

      ExcelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ExcelService,
        factory: ExcelService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExcelService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "8laU":
    /*!**********************************************************!*\
      !*** ./src/app/shared/services/report/report.service.ts ***!
      \**********************************************************/

    /*! exports provided: ReportService */

    /***/
    function laU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportService", function () {
        return ReportService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ReportService = /*#__PURE__*/function () {
        function ReportService(http) {
          _classCallCheck(this, ReportService);

          this.http = http;
          this.apiUrl2 = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2, "/report");
          this.apiUrl3 = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2, "/rfid");
          this.apiUrl4 = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2, "/analytics");
        } // getTransactionReportCW(login_id,params){
        //   return this.http.post(`${this.apiUrl2}/getTransactionReportCW/${login_id}`,params);
        // }


        _createClass(ReportService, [{
          key: "getCpoRFidMappingCW",
          value: function getCpoRFidMappingCW(login_id) {
            return this.http.get("".concat(this.apiUrl3, "/getCpoRFidMappingCW/").concat(login_id));
          }
        }, {
          key: "getChargerStatusDetailViewCW",
          value: function getChargerStatusDetailViewCW(login_id, params) {
            return this.http.post("".concat(this.apiUrl2, "/getChargerStatusDetailViewCW/").concat(login_id), params);
          }
        }, {
          key: "getAlarmReportDetailViewCW",
          value: function getAlarmReportDetailViewCW(login_id, params) {
            return this.http.post("".concat(this.apiUrl2, "/getAlarmReportDetailViewCW/").concat(login_id), params);
          }
        }, {
          key: "getChargerByLastTransactionCW",
          value: function getChargerByLastTransactionCW(login_id, params) {
            return this.http.post("".concat(this.apiUrl2, "/getChargerByLastTransactionCW/").concat(login_id), params);
          }
        }, {
          key: "getSuccessTransactionCW",
          value: function getSuccessTransactionCW(login_id, params) {
            return this.http.post("".concat(this.apiUrl2, "/getSuccessTransactionCW/").concat(login_id), params);
          } // getCancelledTransaction(login_id,params){
          //   return this.http.post(`${this.apiUrl4}/getCustomerPaymentSummaryMonth/${login_id}`,params);
          // }
          // getPendingTransaction(login_id,params){
          //   return this.http.post(`${this.apiUrl4}/getCustomerPaymentSummaryMonth/${login_id}`,params);
          // }

        }, {
          key: "getPendingTransactionCW",
          value: function getPendingTransactionCW(login_id, params) {
            return this.http.post("".concat(this.apiUrl2, "/getPendingTransactionCW/").concat(login_id), params);
          } // --------------------- new API with CSS ------------------------------------------------------------------------------

        }, {
          key: "getTransactionReportCCS",
          value: function getTransactionReportCCS(login_id, client_id, cpo_id, station_id, params) {
            return this.http.post("".concat(this.apiUrl2, "/getTransactionReportCCS/").concat(login_id, "/").concat(client_id, "/").concat(cpo_id, "/").concat(station_id), params);
          }
        }, {
          key: "getCpoRFidMappingCCS",
          value: function getCpoRFidMappingCCS(login_id, client_id, cpo_id, station_id, params) {
            return this.http.get("".concat(this.apiUrl3, "/getCpoRFidMappingCCS/").concat(login_id, "/").concat(client_id, "/").concat(cpo_id, "/").concat(station_id));
          }
        }, {
          key: "getChargerStatusDetailViewCCS",
          value: function getChargerStatusDetailViewCCS(login_id, client_id, cpo_id, station_id, params) {
            return this.http.post("".concat(this.apiUrl2, "/getChargerStatusDetailViewCCS/").concat(login_id, "/").concat(client_id, "/").concat(cpo_id, "/").concat(station_id), params);
          }
        }, {
          key: "getAlarmReportDetailViewCCS",
          value: function getAlarmReportDetailViewCCS(login_id, client_id, cpo_id, station_id, params) {
            return this.http.post("".concat(this.apiUrl2, "/getAlarmReportDetailViewCCS/").concat(login_id, "/").concat(client_id, "/").concat(cpo_id, "/").concat(station_id), params);
          }
        }, {
          key: "getDetailTransactionReportCCS",
          value: function getDetailTransactionReportCCS(login_id, client_id, cpo_id, station_id, params) {
            return this.http.post("".concat(this.apiUrl2, "/getDetailTransactionReportCCS/").concat(login_id, "/").concat(client_id, "/").concat(cpo_id, "/").concat(station_id), params);
          }
        }]);

        return ReportService;
      }();

      ReportService.ɵfac = function ReportService_Factory(t) {
        return new (t || ReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      ReportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ReportService,
        factory: ReportService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "E6JG":
    /*!********************************************************************!*\
      !*** ./src/app/shared/services/menu-config/menu-config.service.ts ***!
      \********************************************************************/

    /*! exports provided: MenuConfigService */

    /***/
    function E6JG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuConfigService", function () {
        return MenuConfigService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var MenuConfigService = /*#__PURE__*/function () {
        function MenuConfigService(http) {
          _classCallCheck(this, MenuConfigService);

          this.http = http;
          this.apiUrl2 = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2, "/menu");
        }

        _createClass(MenuConfigService, [{
          key: "getMenuConfig",
          value: function getMenuConfig(project_id, client_id) {
            return this.http.get("".concat(this.apiUrl2, "/getMenusWithAlreadyMappedToClient/").concat(project_id, "/").concat(client_id));
          }
        }, {
          key: "setClientMenuMapping",
          value: function setClientMenuMapping(params) {
            return this.http.post("".concat(this.apiUrl2, "/clientMenuMapping"), params);
          }
        }, {
          key: "getMenusByClientIdWithAlreadyMappedToRole",
          value: function getMenusByClientIdWithAlreadyMappedToRole(project_id, client_id, role_id) {
            return this.http.get("".concat(this.apiUrl2, "/getMenusByClientIdWithAlreadyMappedToRole/").concat(project_id, "/").concat(client_id, "/").concat(role_id));
          }
        }, {
          key: "setRoleMenuMapping",
          value: function setRoleMenuMapping(params) {
            return this.http.post("".concat(this.apiUrl2, "/roleMenuMapping"), params);
          }
        }]);

        return MenuConfigService;
      }();

      MenuConfigService.ɵfac = function MenuConfigService_Factory(t) {
        return new (t || MenuConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      MenuConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MenuConfigService,
        factory: MenuConfigService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuConfigService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "HJ+f":
    /*!******************************************************!*\
      !*** ./src/app/shared/services/user/role.service.ts ***!
      \******************************************************/

    /*! exports provided: RoleService */

    /***/
    function HJF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoleService", function () {
        return RoleService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var RoleService = /*#__PURE__*/function () {
        function RoleService(http) {
          _classCallCheck(this, RoleService);

          this.http = http;
          this.apiUrl2 = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2, "/role");
        }

        _createClass(RoleService, [{
          key: "getRoles",
          value: function getRoles() {
            return this.http.get("".concat(this.apiUrl2, "/getRoles"));
          }
        }, {
          key: "create",
          value: function create(params) {
            return this.http.post("".concat(this.apiUrl2, "/crt/"), params);
          }
        }, {
          key: "update",
          value: function update(params) {
            return this.http.post("".concat(this.apiUrl2, "/upd/"), params);
          }
        }, {
          key: "delete",
          value: function _delete(id, userId) {
            return this.http["delete"]("".concat(this.apiUrl2, "/dlt/").concat(id, "/").concat(userId));
          }
        }, {
          key: "getRolesCW",
          value: function getRolesCW(userID, project_id) {
            return this.http.get("".concat(this.apiUrl2, "/gtRoleCW/").concat(userID, "/").concat(project_id));
          }
        }, {
          key: "getActiveRoles",
          value: function getActiveRoles(userID, project_id) {
            return this.http.get("".concat(this.apiUrl2, "/gtActiveRoleCW/").concat(userID, "/").concat(project_id));
          }
        }, {
          key: "getActiveRolesByClientId",
          value: function getActiveRolesByClientId(project_id, client_id) {
            return this.http.get("".concat(this.apiUrl2, "/gtActiveRolesByClientId/").concat(project_id, "/").concat(client_id));
          }
        }]);

        return RoleService;
      }();

      RoleService.ɵfac = function RoleService_Factory(t) {
        return new (t || RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      RoleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RoleService,
        factory: RoleService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Iab2":
    /*!*******************************************************!*\
      !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function Iab2(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

      (function (a, b) {
        if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = b, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
      })(this, function () {
        "use strict";

        function b(a, b) {
          return "undefined" == typeof b ? b = {
            autoBom: !1
          } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
            autoBom: !b
          }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
            type: a.type
          }) : a;
        }

        function c(a, b, c) {
          var d = new XMLHttpRequest();
          d.open("GET", a), d.responseType = "blob", d.onload = function () {
            g(d.response, b, c);
          }, d.onerror = function () {
            console.error("could not download file");
          }, d.send();
        }

        function d(a) {
          var b = new XMLHttpRequest();
          b.open("HEAD", a, !1);

          try {
            b.send();
          } catch (a) {}

          return 200 <= b.status && 299 >= b.status;
        }

        function e(a) {
          try {
            a.dispatchEvent(new MouseEvent("click"));
          } catch (c) {
            var b = document.createEvent("MouseEvents");
            b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
          }
        }

        var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
            a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
            g = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype && !a ? function (b, g, h) {
          var i = f.URL || f.webkitURL,
              j = document.createElement("a");
          g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
            i.revokeObjectURL(j.href);
          }, 4E4), setTimeout(function () {
            e(j);
          }, 0));
        } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
          if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);else if (d(f)) c(f, g, h);else {
            var i = document.createElement("a");
            i.href = f, i.target = "_blank", setTimeout(function () {
              e(i);
            });
          }
        } : function (b, d, e, g) {
          if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
          var h = "application/octet-stream" === b.type,
              i = /constructor/i.test(f.HTMLElement) || f.safari,
              j = /CriOS\/[\d]+/.test(navigator.userAgent);

          if ((j || h && i || a) && "undefined" != typeof FileReader) {
            var k = new FileReader();
            k.onloadend = function () {
              var a = k.result;
              a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
            }, k.readAsDataURL(b);
          } else {
            var l = f.URL || f.webkitURL,
                m = l.createObjectURL(b);
            g ? g.location = m : location.href = m, g = null, setTimeout(function () {
              l.revokeObjectURL(m);
            }, 4E4);
          }
        });
        f.saveAs = g.saveAs = g, true && (module.exports = g);
      }); //# sourceMappingURL=FileSaver.min.js.map

      /***/

    },

    /***/
    "K9qR":
    /*!*************************************************************!*\
      !*** ./src/app/shared/services/geographics/city.service.ts ***!
      \*************************************************************/

    /*! exports provided: CityService */

    /***/
    function K9qR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CityService", function () {
        return CityService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var CityService = /*#__PURE__*/function () {
        function CityService(http) {
          _classCallCheck(this, CityService);

          this.http = http;
          this.apiUrl2 = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2, "/master");
        }

        _createClass(CityService, [{
          key: "create",
          value: function create(params) {
            return this.http.post("".concat(this.apiUrl2, "/createCity/"), params);
          }
        }, {
          key: "update",
          value: function update(params) {
            return this.http.post("".concat(this.apiUrl2, "/updateCity/"), params);
          }
        }, {
          key: "getCityById",
          value: function getCityById(id) {
            return this.http.get("".concat(this.apiUrl2, "/getCityById/").concat(id));
          }
        }, {
          key: "delete",
          value: function _delete(id, userId) {
            return this.http["delete"]("".concat(this.apiUrl2, "/deleteCity/").concat(id, "/").concat(userId));
          }
        }, {
          key: "getAllCity",
          value: function getAllCity() {
            return this.http.get("".concat(this.apiUrl2, "/getCities"));
          }
        }, {
          key: "getAllCities",
          value: function getAllCities() {
            return this.http.get("".concat(this.apiUrl2, "/getAllCities"));
          }
        }]);

        return CityService;
      }();

      CityService.ɵfac = function CityService_Factory(t) {
        return new (t || CityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      CityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CityService,
        factory: CityService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CityService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "NJUq":
    /*!**************************************************************!*\
      !*** ./src/app/shared/services/geographics/state.service.ts ***!
      \**************************************************************/

    /*! exports provided: StateService */

    /***/
    function NJUq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StateService", function () {
        return StateService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var StateService = /*#__PURE__*/function () {
        function StateService(http) {
          _classCallCheck(this, StateService);

          this.http = http;
          this.apiUrl2 = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2, "/master");
        }

        _createClass(StateService, [{
          key: "create",
          value: function create(params) {
            return this.http.post("".concat(this.apiUrl2, "/createState/"), params);
          }
        }, {
          key: "update",
          value: function update(params) {
            return this.http.post("".concat(this.apiUrl2, "/updateState/"), params);
          }
        }, {
          key: "getCountryById",
          value: function getCountryById(id) {
            return this.http.get("".concat(this.apiUrl2, "/getStateById/").concat(id));
          }
        }, {
          key: "delete",
          value: function _delete(id, userId) {
            return this.http["delete"]("".concat(this.apiUrl2, "/deleteState/").concat(id, "/").concat(userId));
          }
        }, {
          key: "getAllStates",
          value: function getAllStates() {
            return this.http.get("".concat(this.apiUrl2, "/getAllStates"));
          }
        }, {
          key: "getAllState",
          value: function getAllState() {
            return this.http.get("".concat(this.apiUrl2, "/getStates"));
          }
        }, {
          key: "getStateByCountry",
          value: function getStateByCountry(id) {
            return this.http.get("".concat(this.apiUrl2, "/getStateByCountry/").concat(id));
          }
        }, {
          key: "createStatePINMapping",
          value: function createStatePINMapping(params) {
            return this.http.post("".concat(this.apiUrl2, "/createStatePINMapping"), params);
          }
        }, {
          key: "getAllStatePINMapping",
          value: function getAllStatePINMapping() {
            return this.http.get("".concat(this.apiUrl2, "/getAllStatePINMapping"));
          }
        }, {
          key: "allActivePINByStateId",
          value: function allActivePINByStateId(state_id) {
            return this.http.get("".concat(this.apiUrl2, "/allActivePINByStateId/").concat(state_id));
          }
        }, {
          key: "deleteStatePINMapping",
          value: function deleteStatePINMapping(id, userId) {
            return this.http["delete"]("".concat(this.apiUrl2, "/deleteStatePINMapping/").concat(id, "/").concat(userId));
          }
        }, {
          key: "updateStatePinMapping",
          value: function updateStatePinMapping(params) {
            return this.http.post("".concat(this.apiUrl2, "/updateStatePinMapping"), params);
          }
        }]);

        return StateService;
      }();

      StateService.ɵfac = function StateService_Factory(t) {
        return new (t || StateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      StateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: StateService,
        factory: StateService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "NYyN":
    /*!*******************************************************************************!*\
      !*** ./src/app/shared/services/ev-space/ev-batteries/EV-batteries.service.ts ***!
      \*******************************************************************************/

    /*! exports provided: EVBatteriesService */

    /***/
    function NYyN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EVBatteriesService", function () {
        return EVBatteriesService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var EVBatteriesService = /*#__PURE__*/function () {
        function EVBatteriesService(http) {
          _classCallCheck(this, EVBatteriesService);

          this.http = http;
          this.apiUrl = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2, "/evDealer");
          this.apiUrl2 = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2, "/evComponentDealer");
          this.apiUrl3 = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2);
        }

        _createClass(EVBatteriesService, [{
          key: "getAllEvDealer",
          value: function getAllEvDealer() {
            return this.http.get("".concat(this.apiUrl, "/getAllEvDealer"));
          }
        }, {
          key: "createEvBattery",
          value: function createEvBattery(params) {
            return this.http.post("".concat(this.apiUrl, "/evDealer"), params);
          }
        }, {
          key: "updateEvBattery",
          value: function updateEvBattery(params) {
            return this.http.post("".concat(this.apiUrl, "/updateEvDealer"), params);
          }
        }, {
          key: "deleteEvBattery",
          value: function deleteEvBattery(id, login_id) {
            return this.http["delete"]("".concat(this.apiUrl, "/deleteEvDealer/").concat(id, "/").concat(login_id));
          }
        }, {
          key: "publishEvBattery",
          value: function publishEvBattery(params) {
            return this.http.post("".concat(this.apiUrl, "/publishEvDealer"), params);
          }
        }, {
          key: "moderateEvBattery",
          value: function moderateEvBattery(params) {
            return this.http.post("".concat(this.apiUrl, "/moderateEvDealer"), params);
          }
        }, {
          key: "getAllModerateEvBattery",
          value: function getAllModerateEvBattery() {
            return this.http.get("".concat(this.apiUrl, "/getAllModerateEvDealerList"));
          }
        }, {
          key: "getBatteryManufacturersById",
          value: function getBatteryManufacturersById(manufacture_id) {
            return this.http.get("".concat(this.apiUrl, "/getBatteryManufacturersById/").concat(manufacture_id));
          }
        }, {
          key: "getFranchaise",
          value: function getFranchaise() {
            return this.http.get("".concat(this.apiUrl3, "//master/getActiveMasterConfigData/Franchise"));
          }
        }, {
          key: "getPublishEvDealerListByKeys",
          value: function getPublishEvDealerListByKeys() {
            return this.http.get("".concat(this.apiUrl, "/getPublishEvDealerListByKeys/EvBattery/"));
          }
        }, {
          key: "getModerateEvDealerListByKeys",
          value: function getModerateEvDealerListByKeys() {
            return this.http.get("".concat(this.apiUrl, "/getModerateEvDealerListByKeys/EvBattery/"));
          }
        }]);

        return EVBatteriesService;
      }();

      EVBatteriesService.ɵfac = function EVBatteriesService_Factory(t) {
        return new (t || EVBatteriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      EVBatteriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: EVBatteriesService,
        factory: EVBatteriesService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EVBatteriesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "O4Xx":
    /*!****************************************************************!*\
      !*** ./src/app/shared/services/geographics/country.service.ts ***!
      \****************************************************************/

    /*! exports provided: CountryService */

    /***/
    function O4Xx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountryService", function () {
        return CountryService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var CountryService = /*#__PURE__*/function () {
        function CountryService(http) {
          _classCallCheck(this, CountryService);

          this.http = http;
          this.apiUrl2 = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2, "/master");
        }

        _createClass(CountryService, [{
          key: "create",
          value: function create(params) {
            return this.http.post("".concat(this.apiUrl2, "/createCountry/"), params);
          }
        }, {
          key: "update",
          value: function update(params) {
            return this.http.post("".concat(this.apiUrl2, "/updateCountry/"), params);
          }
        }, {
          key: "getCountryById",
          value: function getCountryById(id) {
            return this.http.get("".concat(this.apiUrl2, "/getCountryById/").concat(id));
          }
        }, {
          key: "delete",
          value: function _delete(id, userID) {
            return this.http["delete"]("".concat(this.apiUrl2, "/deleteCountry/").concat(id, "/").concat(userID));
          }
        }, {
          key: "getAllCountry",
          value: function getAllCountry() {
            return this.http.get("".concat(this.apiUrl2, "/getCountries"));
          }
        }, {
          key: "getAllCountries",
          value: function getAllCountries() {
            return this.http.get("".concat(this.apiUrl2, "/getAllCountries"));
          }
        }]);

        return CountryService;
      }();

      CountryService.ɵfac = function CountryService_Factory(t) {
        return new (t || CountryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      CountryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CountryService,
        factory: CountryService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Okah":
    /*!**************************************************************************!*\
      !*** ./src/app/shared/services/charging-model/charging-model.service.ts ***!
      \**************************************************************************/

    /*! exports provided: ChargingModelService */

    /***/
    function Okah(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChargingModelService", function () {
        return ChargingModelService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ChargingModelService = /*#__PURE__*/function () {
        function ChargingModelService(http) {
          _classCallCheck(this, ChargingModelService);

          this.http = http;
          this.apiUrl2 = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2, "/chargingModel");
        }

        _createClass(ChargingModelService, [{
          key: "create",
          value: function create(params) {
            return this.http.post("".concat(this.apiUrl2, "/crt/"), params);
          }
        }, {
          key: "update",
          value: function update(params) {
            return this.http.post("".concat(this.apiUrl2, "/upd/"), params);
          }
        }, {
          key: "getChargingModels",
          value: function getChargingModels() {
            return this.http.get("".concat(this.apiUrl2, "/gtChargingModels"));
          }
        }, {
          key: "getChargingModelsAll",
          value: function getChargingModelsAll() {
            return this.http.get("".concat(this.apiUrl2, "/gtChargingModelsAll"));
          }
        }, {
          key: "getChargingModelById",
          value: function getChargingModelById(id) {
            return this.http.get("".concat(this.apiUrl2, "/gtChargingModelById/").concat(id));
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"]("".concat(this.apiUrl2, "/dlt/").concat(id));
          }
        }]);

        return ChargingModelService;
      }();

      ChargingModelService.ɵfac = function ChargingModelService_Factory(t) {
        return new (t || ChargingModelService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      ChargingModelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ChargingModelService,
        factory: ChargingModelService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChargingModelService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "PNWe":
    /*!*****************************************************!*\
      !*** ./src/app/shared/utils/validation-patterns.ts ***!
      \*****************************************************/

    /*! exports provided: PATTERNS */

    /***/
    function PNWe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PATTERNS", function () {
        return PATTERNS;
      });

      var PATTERNS = {
        ONLY_NUMBERS: /^(0|[1-9]\d*)?$/,
        TWO_DIGIT_DECIMAL: /^[0-9]+(\.[0-9]{1,2})?$/,
        THREE_DIGIT_DECIMAL: /^[0-9]\d{0,10}(\.\d{1,3})?%?$/
      };
      /***/
    },

    /***/
    "WZCh":
    /*!*******************************************************************!*\
      !*** ./src/app/shared/services/master/vehicle/vehicle.service.ts ***!
      \*******************************************************************/

    /*! exports provided: VehicleService */

    /***/
    function WZCh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VehicleService", function () {
        return VehicleService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var VehicleService = /*#__PURE__*/function () {
        function VehicleService(http) {
          _classCallCheck(this, VehicleService);

          this.http = http;
          this.apiUrl2 = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2;
        }

        _createClass(VehicleService, [{
          key: "register",
          value: function register(params) {
            return this.http.post("".concat(this.apiUrl2, "/vehicles"), params);
          }
        }, {
          key: "updateRegisteredVehicle",
          value: function updateRegisteredVehicle(params) {
            return this.http.post("".concat(this.apiUrl2, "/updateRegisteredVehicle"), params);
          }
        }, {
          key: "getVehicles",
          value: function getVehicles() {
            ////
            return this.http.get("".concat(this.apiUrl2, "/vehicles"));
          }
        }, {
          key: "getVModel_CTypeMapping",
          value: function getVModel_CTypeMapping() {
            ////
            return this.http.get("".concat(this.apiUrl2, "/vModel_Ctypes"));
          }
        }, {
          key: "getPublishedVModel",
          value: function getPublishedVModel() {
            ////
            return this.http.get("".concat(this.apiUrl2, "/publishedVModel"));
          }
        }, {
          key: "vModel_CTypeMap",
          value: function vModel_CTypeMap(params) {
            ////
            return this.http.post("".concat(this.apiUrl2, "/vModel_Ctype"), params);
          }
        }, {
          key: "publishVModel_CTYpeWithoutModify",
          value: function publishVModel_CTYpeWithoutModify(params) {
            return this.http.post("".concat(this.apiUrl2, "/publishVModel_CTYpeWithoutModify"), params);
          }
        }, {
          key: "publishVModel_CTYpe",
          value: function publishVModel_CTYpe(params) {
            return this.http.post("".concat(this.apiUrl2, "/publishVModel_CTYpe"), params);
          }
        }, {
          key: "moderateVModel_CTYpeWithoutModify",
          value: function moderateVModel_CTYpeWithoutModify(params) {
            return this.http.post("".concat(this.apiUrl2, "/moderateVModel_CTYpeWithoutModify"), params);
          }
        }, {
          key: "moderateVModel_CTYpe",
          value: function moderateVModel_CTYpe(params) {
            return this.http.post("".concat(this.apiUrl2, "/moderateVModel_CTYpe"), params);
          }
        }, {
          key: "deleteRegisteredVehicle",
          value: function deleteRegisteredVehicle(id) {
            return this.http["delete"]("".concat(this.apiUrl2, "/deleteRegisteredVehicle/").concat(id));
          }
        }, {
          key: "deleteModrateVehicle",
          value: function deleteModrateVehicle(id, user_id) {
            return this.http["delete"]("".concat(this.apiUrl2, "/dltC_Type_V_Model_Mapping/").concat(id, "/").concat(user_id));
          }
        }]);

        return VehicleService;
      }();

      VehicleService.ɵfac = function VehicleService_Factory(t) {
        return new (t || VehicleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      VehicleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: VehicleService,
        factory: VehicleService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "biaL":
    /*!******************************************************!*\
      !*** ./src/app/shared/services/user/user.service.ts ***!
      \******************************************************/

    /*! exports provided: UserService */

    /***/
    function biaL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var UserService = /*#__PURE__*/function () {
        function UserService(http) {
          _classCallCheck(this, UserService);

          this.http = http;
          this.apiUrl2 = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2, "/user");
          this.apiUrl3 = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL3);
          this.apiUrl4 = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2);
        }

        _createClass(UserService, [{
          key: "create",
          value: function create(params) {
            return this.http.post("".concat(this.apiUrl2, "/crt/"), params);
          }
        }, {
          key: "update",
          value: function update(params) {
            return this.http.post("".concat(this.apiUrl2, "/upd/"), params);
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            return this.http.get("".concat(this.apiUrl2, "/gtusers"));
          }
        }, {
          key: "getUsersCW",
          value: function getUsersCW(id) {
            return this.http.get("".concat(this.apiUrl2, "/gtUsersCW/").concat(id));
          }
        }, {
          key: "delete",
          value: function _delete(id, userID) {
            return this.http["delete"]("".concat(this.apiUrl2, "/dlt/").concat(id, "/").concat(userID));
          }
        }, {
          key: "getCPOTypes",
          value: function getCPOTypes() {
            var data = [{
              id: 1,
              name: 'CPO'
            }, {
              id: 2,
              name: 'Spark EV'
            }, {
              id: 3,
              name: 'Atther'
            }];
            return data;
          }
        }, {
          key: "getUserWiseChargerHistory",
          value: function getUserWiseChargerHistory(userId) {
            return this.http.get("".concat(this.apiUrl4, "/user/userChargingHistory/").concat(userId));
          }
        }, {
          key: "getUserChargingHistoryCW",
          value: function getUserChargingHistoryCW(login_id, params) {
            return this.http.post("".concat(this.apiUrl4, "/user/getUserChargingHistoryCW/").concat(login_id), params);
          }
        }, {
          key: "getActiveUsersCW",
          value: function getActiveUsersCW(userId) {
            return this.http.get("".concat(this.apiUrl2, "/getActiveUsersCW/").concat(userId));
          }
        }, {
          key: "createUserStationMapping",
          value: function createUserStationMapping(params) {
            return this.http.post("".concat(this.apiUrl2, "/createUserStationMapping/"), params);
          }
        }, {
          key: "getActiveUsersByClient",
          value: function getActiveUsersByClient(client_id) {
            return this.http.get("".concat(this.apiUrl2, "/gtActiveUsersByClient/").concat(client_id));
          }
        }, {
          key: "UserStationMappingV1",
          value: function UserStationMappingV1(params) {
            return this.http.post("".concat(this.apiUrl2, "/UserStationMappingV1/"), params);
          }
        }, {
          key: "getAllUserStationMapping",
          value: function getAllUserStationMapping(userId) {
            return this.http.get("".concat(this.apiUrl2, "/getAllUserStationMapping/").concat(userId));
          }
        }, {
          key: "updateUserStationMapping",
          value: function updateUserStationMapping(params) {
            return this.http.post("".concat(this.apiUrl2, "/updateUserStationMappingV1/"), params);
          }
        }, {
          key: "getStationListWithStationAssignedToUser",
          value: function getStationListWithStationAssignedToUser(client_id, user_id) {
            return this.http.get("".concat(this.apiUrl2, "/getStationListWithStationAssignedToUser/").concat(client_id, "/").concat(user_id));
          }
        }, {
          key: "deleteUserStationMapping",
          value: function deleteUserStationMapping(id, userID) {
            return this.http["delete"]("".concat(this.apiUrl2, "/deleteUserStationMapping/").concat(id, "/").concat(userID));
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "k3ne":
    /*!****************************************************!*\
      !*** ./src/app/shared/services/cpo/cpo.service.ts ***!
      \****************************************************/

    /*! exports provided: CpoService */

    /***/
    function k3ne(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CpoService", function () {
        return CpoService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var CpoService = /*#__PURE__*/function () {
        function CpoService(http) {
          _classCallCheck(this, CpoService);

          this.http = http;
          this.apiUrl2 = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2, "/cpo");
        }

        _createClass(CpoService, [{
          key: "create",
          value: function create(params) {
            return this.http.post("".concat(this.apiUrl2, "/crt/"), params);
          }
        }, {
          key: "update",
          value: function update(params) {
            return this.http.post("".concat(this.apiUrl2, "/upd/"), params);
          }
        }, {
          key: "getCpos",
          value: function getCpos() {
            return this.http.get("".concat(this.apiUrl2, "/getcposcw"));
          }
        }, {
          key: "getactivecposcw",
          value: function getactivecposcw(login_id) {
            return this.http.get("".concat(this.apiUrl2, "/gtActiveCposCW/").concat(login_id));
          }
        }, {
          key: "getactivecposcwwithAll",
          value: function getactivecposcwwithAll(login_id) {
            return this.http.get("".concat(this.apiUrl2, "/gtActiveCposCWwithAll/").concat(login_id));
          }
        }, {
          key: "getcposcw",
          value: function getcposcw(login_id) {
            return this.http.get("".concat(this.apiUrl2, "/gtcposcw/").concat(login_id));
          }
        }, {
          key: "getCpoById",
          value: function getCpoById(id) {
            return this.http.get("".concat(this.apiUrl2, "/getCpoById/").concat(id));
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"]("".concat(this.apiUrl2, "/dlt/").concat(id));
          }
        }, {
          key: "getCpoByClientId",
          value: function getCpoByClientId(id) {
            return this.http.get("".concat(this.apiUrl2, "/gtCpoByClientId/").concat(id));
          }
        }, {
          key: "getCpoByClientIdCW",
          value: function getCpoByClientIdCW(id, user_id) {
            return this.http.get("".concat(this.apiUrl2, "/getCpoByClientIdCW/").concat(id, "/").concat(user_id));
          }
        }, {
          key: "getCpoRFidMappingCW",
          value: function getCpoRFidMappingCW(login_id) {
            return this.http.get("".concat(this.apiUrl2, "/getCpoRFidMappingCW/").concat(login_id));
          }
        }, {
          key: "getRFidsByCpoId",
          value: function getRFidsByCpoId(cpo_id) {
            return this.http.get("".concat(this.apiUrl2, "/getCpoRFidMappingCW/").concat(cpo_id));
          }
        }]);

        return CpoService;
      }();

      CpoService.ɵfac = function CpoService_Factory(t) {
        return new (t || CpoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      CpoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CpoService,
        factory: CpoService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CpoService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "kxup":
    /*!********************************************************************!*\
      !*** ./src/app/shared/services/menu-master/menu-master.service.ts ***!
      \********************************************************************/

    /*! exports provided: MenuMasterService */

    /***/
    function kxup(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuMasterService", function () {
        return MenuMasterService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var MenuMasterService = /*#__PURE__*/function () {
        function MenuMasterService(http) {
          _classCallCheck(this, MenuMasterService);

          this.http = http;
          this.apiUrl2 = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2, "/menu");
          this.apiUrl3 = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2, "/master");
        }

        _createClass(MenuMasterService, [{
          key: "getNavLevel",
          value: function getNavLevel() {
            return this.http.get("".concat(this.apiUrl2, "/getNavLevel"));
          }
        }, {
          key: "getMenuType",
          value: function getMenuType() {
            return this.http.get("".concat(this.apiUrl2, "/getMenuType"));
          }
        }, {
          key: "getMenuIcon",
          value: function getMenuIcon() {
            return this.http.get("".concat(this.apiUrl2, "/getMenuIcon"));
          }
        }, {
          key: "getParentByNavLevel",
          value: function getParentByNavLevel(id) {
            return this.http.get("".concat(this.apiUrl2, "/getParentByNavLevel/").concat(id));
          }
        }, {
          key: "getAllMenus",
          value: function getAllMenus() {
            return this.http.get("".concat(this.apiUrl2, "/getAllMenus"));
          }
        }, {
          key: "getProject",
          value: function getProject() {
            return this.http.get("".concat(this.apiUrl3, "/getProjects"));
          }
        }, {
          key: "create",
          value: function create(params) {
            return this.http.post("".concat(this.apiUrl2, "/create"), params);
          }
        }, {
          key: "update",
          value: function update(params) {
            return this.http.post("".concat(this.apiUrl2, "/UpdateMenu"), params);
          }
        }, {
          key: "delete",
          value: function _delete(id, login_id) {
            return this.http["delete"]("".concat(this.apiUrl2, "/deleteMenu/").concat(id, "/").concat(login_id)); //deleteMenu/84/63
          }
        }]);

        return MenuMasterService;
      }();

      MenuMasterService.ɵfac = function MenuMasterService_Factory(t) {
        return new (t || MenuMasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      MenuMasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MenuMasterService,
        factory: MenuMasterService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuMasterService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "rSiO":
    /*!************************************************************************!*\
      !*** ./src/app/shared/services/charger-batch/charger-batch.service.ts ***!
      \************************************************************************/

    /*! exports provided: ChargerBatchService */

    /***/
    function rSiO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChargerBatchService", function () {
        return ChargerBatchService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ChargerBatchService = /*#__PURE__*/function () {
        function ChargerBatchService(http) {
          _classCallCheck(this, ChargerBatchService);

          this.http = http;
          this.apiUrl2 = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2, "/chargerBatch");
        }

        _createClass(ChargerBatchService, [{
          key: "create",
          value: function create(params) {
            return this.http.post("".concat(this.apiUrl2, "/create/"), params);
          }
        }, {
          key: "update",
          value: function update(params) {
            return this.http.post("".concat(this.apiUrl2, "/update/"), params);
          }
        }, {
          key: "getChargerBatches",
          value: function getChargerBatches() {
            return this.http.get("".concat(this.apiUrl2, "/getChargerBatches"));
          }
        }, {
          key: "getChargerBatchById",
          value: function getChargerBatchById(id) {
            return this.http.get("".concat(this.apiUrl2, "/getChargerBatchById/").concat(id));
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"]("".concat(this.apiUrl2, "/delete/").concat(id));
          }
        }]);

        return ChargerBatchService;
      }();

      ChargerBatchService.ɵfac = function ChargerBatchService_Factory(t) {
        return new (t || ChargerBatchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      ChargerBatchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ChargerBatchService,
        factory: ChargerBatchService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChargerBatchService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "t6AC":
    /*!***************************************************************************!*\
      !*** ./src/app/shared/services/ev-space/ev-dealers/EV-dealers.service.ts ***!
      \***************************************************************************/

    /*! exports provided: EVDealersService */

    /***/
    function t6AC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EVDealersService", function () {
        return EVDealersService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var EVDealersService = /*#__PURE__*/function () {
        function EVDealersService(http) {
          _classCallCheck(this, EVDealersService);

          this.http = http;
          this.apiUrl = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2, "/evDealer");
          this.apiUrl2 = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2, "/evComponentDealer");
        }

        _createClass(EVDealersService, [{
          key: "getAllEvDealer",
          value: function getAllEvDealer() {
            return this.http.get("".concat(this.apiUrl, "/getAllEvDealer"));
          }
        }, {
          key: "createEvDealers",
          value: function createEvDealers(params) {
            return this.http.post("".concat(this.apiUrl, "/evDealer"), params);
          }
        }, {
          key: "updateEvDealer",
          value: function updateEvDealer(params) {
            return this.http.post("".concat(this.apiUrl, "/updateEvDealer"), params);
          }
        }, {
          key: "deleteEvDealer",
          value: function deleteEvDealer(id, login_id) {
            return this.http["delete"]("".concat(this.apiUrl, "/deleteEvDealer/").concat(id, "/").concat(login_id));
          }
        }, {
          key: "publishEvDealer",
          value: function publishEvDealer(params) {
            return this.http.post("".concat(this.apiUrl, "/publishEvDealer"), params);
          }
        }, {
          key: "moderateEvDealer",
          value: function moderateEvDealer(params) {
            return this.http.post("".concat(this.apiUrl, "/moderateEvDealer"), params);
          }
        }, {
          key: "getAllModerateEvDealer",
          value: function getAllModerateEvDealer() {
            return this.http.get("".concat(this.apiUrl, "/getAllModerateEvDealerList"));
          }
        }, {
          key: "getModerateEvDealerListByKeys",
          value: function getModerateEvDealerListByKeys() {
            return this.http.get("".concat(this.apiUrl, "/getModerateEvDealerListByKeys/EvChargingStation"));
          }
        }, {
          key: "getPublishEvDealerListByKeys",
          value: function getPublishEvDealerListByKeys() {
            return this.http.get("".concat(this.apiUrl, "/getPublishEvDealerListByKeys/EvChargingStation"));
          } // _______________EV Compnent Dealer API _____________________

        }, {
          key: "createComponent",
          value: function createComponent(params) {
            return this.http.post("".concat(this.apiUrl2, "/componentDealer"), params);
          }
        }, {
          key: "getAllComponentDealer",
          value: function getAllComponentDealer() {
            return this.http.get("".concat(this.apiUrl2, "/getAllComponentDealer"));
          }
        }, {
          key: "deleteComponentDealer",
          value: function deleteComponentDealer(id, login_id) {
            return this.http["delete"]("".concat(this.apiUrl2, "/deleteComponentDealer/").concat(id, "/").concat(login_id));
          }
        }, {
          key: "updateComponentDealer",
          value: function updateComponentDealer(params) {
            return this.http.post("".concat(this.apiUrl2, "/updateComponentDealer"), params);
          }
        }, {
          key: "publishComponentDealer",
          value: function publishComponentDealer(params) {
            return this.http.post("".concat(this.apiUrl2, "/publishComponentDealer"), params);
          }
        }, {
          key: "moderateComponentDealer",
          value: function moderateComponentDealer(params) {
            return this.http.post("".concat(this.apiUrl2, "/moderateComponentDealer"), params);
          }
        }, {
          key: "getAllModerateComponentDealer",
          value: function getAllModerateComponentDealer() {
            return this.http.get("".concat(this.apiUrl2, "/getAllModerateComponentDealer"));
          } // _______________EV Dealership and Franchise Provider API _____________________

        }, {
          key: "getModerateEvDealershipListByKeys",
          value: function getModerateEvDealershipListByKeys() {
            return this.http.get("".concat(this.apiUrl, "/getModerateEvDealerListByKeys/EVDealerShip"));
          }
        }]);

        return EVDealersService;
      }();

      EVDealersService.ɵfac = function EVDealersService_Factory(t) {
        return new (t || EVDealersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      EVDealersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: EVDealersService,
        factory: EVDealersService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EVDealersService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "tMSl":
    /*!************************************************************!*\
      !*** ./src/app/shared/services/version/version.service.ts ***!
      \************************************************************/

    /*! exports provided: VersionService */

    /***/
    function tMSl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VersionService", function () {
        return VersionService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var VersionService = /*#__PURE__*/function () {
        function VersionService(http) {
          _classCallCheck(this, VersionService);

          this.http = http;
          this.apiUrl2 = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2, "/version");
        }

        _createClass(VersionService, [{
          key: "create",
          value: function create(params) {
            return this.http.post("".concat(this.apiUrl2, "/create/"), params);
          }
        }, {
          key: "update",
          value: function update(params) {
            return this.http.post("".concat(this.apiUrl2, "/update/"), params);
          }
        }, {
          key: "getVersions",
          value: function getVersions() {
            return this.http.get("".concat(this.apiUrl2, "/getVersions"));
          }
        }, {
          key: "getVersionById",
          value: function getVersionById(id) {
            return this.http.get("".concat(this.apiUrl2, "/getVersionById/").concat(id));
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"]("".concat(this.apiUrl2, "/delete/").concat(id));
          }
        }]);

        return VersionService;
      }();

      VersionService.ɵfac = function VersionService_Factory(t) {
        return new (t || VersionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      VersionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: VersionService,
        factory: VersionService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VersionService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zADy":
    /*!**********************************************************************!*\
      !*** ./src/app/shared/services/charger-type/charger-type.service.ts ***!
      \**********************************************************************/

    /*! exports provided: ChargerTypeService */

    /***/
    function zADy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChargerTypeService", function () {
        return ChargerTypeService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ChargerTypeService = /*#__PURE__*/function () {
        function ChargerTypeService(http) {
          _classCallCheck(this, ChargerTypeService);

          this.http = http;
          this.apiUrl2 = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2, "/chargerType");
        }

        _createClass(ChargerTypeService, [{
          key: "create",
          value: function create(params) {
            return this.http.post("".concat(this.apiUrl2, "/crt/"), params);
          }
        }, {
          key: "update",
          value: function update(params) {
            return this.http.post("".concat(this.apiUrl2, "/upd/"), params);
          }
        }, {
          key: "getChargerTypes",
          value: function getChargerTypes() {
            return this.http.get("".concat(this.apiUrl2, "/gtChargerTypes"));
          }
        }, {
          key: "getChargerTypeById",
          value: function getChargerTypeById(id) {
            return this.http.get("".concat(this.apiUrl2, "/gtChargerTypeById/").concat(id));
          }
        }, {
          key: "getActiveChargerTypes",
          value: function getActiveChargerTypes() {
            return this.http.get("".concat(this.apiUrl2, "/gtActiveChargerTypes"));
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"]("".concat(this.apiUrl2, "/dlt/").concat(id));
          }
        }]);

        return ChargerTypeService;
      }();

      ChargerTypeService.ɵfac = function ChargerTypeService_Factory(t) {
        return new (t || ChargerTypeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      ChargerTypeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ChargerTypeService,
        factory: ChargerTypeService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChargerTypeService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map