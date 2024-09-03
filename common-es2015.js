(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "/iNp":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/services/ev-space/govt-subsidy/govt-subsidy.service.ts ***!
  \*******************************************************************************/
/*! exports provided: GovtSubsidyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GovtSubsidyService", function() { return GovtSubsidyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class GovtSubsidyService {
    constructor(http) {
        this.http = http;
        this.apiUrl2 = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2}`;
    }
    getAllModels() {
        return this.http.get(`${this.apiUrl2}/vehicleModel/getAllModels/`);
    }
    getVehicleTypes() {
        return this.http.get(`${this.apiUrl2}/vehicleTypes/`);
    }
    subsidy(params) {
        return this.http.post(`${this.apiUrl2}/subsidy/subsidy/`, params);
    }
    getAllSubsidy() {
        return this.http.get(`${this.apiUrl2}/subsidy/getAllSubsidy/`);
    }
    getSubsidyByVehicleTypeId(id) {
        return this.http.get(`${this.apiUrl2}/subsidy/getSubsidyByVehicleType/${id}`);
    }
    getAllModerateSubsidyList() {
        return this.http.get(`${this.apiUrl2}/subsidy/getAllModerateSubsidyList/`);
    }
    updateSubsidy(params) {
        return this.http.post(`${this.apiUrl2}/subsidy/updateSubsidy/`, params);
    }
    deleteSubsidy(id, userId) {
        return this.http.delete(`${this.apiUrl2}/subsidy/deleteSubsidy/${id}/${userId}`);
    }
    publishSubsidy(params) {
        return this.http.post(`${this.apiUrl2}/subsidy/publishSubsidy/`, params);
    }
    moderateSubsidy(params) {
        return this.http.post(`${this.apiUrl2}/subsidy/moderateSubsidy/`, params);
    }
    update(params) {
        return this.http.post(`${this.apiUrl2}/updateState/`, params);
    }
    getCountryById(id) {
        return this.http.get(`${this.apiUrl2}/getStateById/${id}`);
    }
    delete(id, userId) {
        return this.http.delete(`${this.apiUrl2}/deleteState/${id}/${userId}`);
    }
    getAllStates() {
        return this.http.get(`${this.apiUrl2}/getAllStates`);
    }
    getAllState() {
        return this.http.get(`${this.apiUrl2}/getStates`);
    }
    getStateByCountry(id) {
        return this.http.get(`${this.apiUrl2}/getStateByCountry/${id}`);
    }
    createStatePINMapping(params) {
        return this.http.post(`${this.apiUrl2}/createStatePINMapping`, params);
    }
    getAllStatePINMapping() {
        return this.http.get(`${this.apiUrl2}/getAllStatePINMapping`);
    }
    allActivePINByStateId(state_id) {
        return this.http.get(`${this.apiUrl2}/allActivePINByStateId/${state_id}`);
    }
    deleteStatePINMapping(id, userId) {
        return this.http.delete(`${this.apiUrl2}/deleteStatePINMapping/${id}/${userId}`);
    }
    updateStatePinMapping(params) {
        return this.http.post(`${this.apiUrl2}/updateStatePinMapping`, params);
    }
}
GovtSubsidyService.ɵfac = function GovtSubsidyService_Factory(t) { return new (t || GovtSubsidyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
GovtSubsidyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GovtSubsidyService, factory: GovtSubsidyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GovtSubsidyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "/nqz":
/*!**************************************************!*\
  !*** ./src/app/shared/services/excel.service.ts ***!
  \**************************************************/
/*! exports provided: ExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelService", function() { return ExcelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);



class ExcelService {
    constructor() { }
    importFromFile(bstr) {
        /* read workbook */
        const wb = xlsx__WEBPACK_IMPORTED_MODULE_1__["read"](bstr, { type: 'binary' });
        /* grab first sheet */
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        /* save data */
        const data = (xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].sheet_to_json(ws, { header: 1 }));
        return data;
    }
    exportToFile(fileName, element_id) {
        if (!element_id)
            throw new Error('Element Id does not exists');
        let tbl = document.getElementById(element_id);
        let wb = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].table_to_book(tbl);
        xlsx__WEBPACK_IMPORTED_MODULE_1__["writeFile"](wb, fileName + '.xlsx');
    }
}
ExcelService.ɵfac = function ExcelService_Factory(t) { return new (t || ExcelService)(); };
ExcelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExcelService, factory: ExcelService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExcelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8laU":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/report/report.service.ts ***!
  \**********************************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ReportService {
    constructor(http) {
        this.http = http;
        this.apiUrl2 = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2}/report`;
        this.apiUrl3 = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2}/rfid`;
        this.apiUrl4 = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2}/analytics`;
    }
    // getTransactionReportCW(login_id,params){
    //   return this.http.post(`${this.apiUrl2}/getTransactionReportCW/${login_id}`,params);
    // }
    getCpoRFidMappingCW(login_id) {
        return this.http.get(`${this.apiUrl3}/getCpoRFidMappingCW/${login_id}`);
    }
    getChargerStatusDetailViewCW(login_id, params) {
        return this.http.post(`${this.apiUrl2}/getChargerStatusDetailViewCW/${login_id}`, params);
    }
    getAlarmReportDetailViewCW(login_id, params) {
        return this.http.post(`${this.apiUrl2}/getAlarmReportDetailViewCW/${login_id}`, params);
    }
    getChargerByLastTransactionCW(login_id, params) {
        return this.http.post(`${this.apiUrl2}/getChargerByLastTransactionCW/${login_id}`, params);
    }
    getSuccessTransactionCW(login_id, params) {
        return this.http.post(`${this.apiUrl2}/getSuccessTransactionCW/${login_id}`, params);
    }
    // getCancelledTransaction(login_id,params){
    //   return this.http.post(`${this.apiUrl4}/getCustomerPaymentSummaryMonth/${login_id}`,params);
    // }
    // getPendingTransaction(login_id,params){
    //   return this.http.post(`${this.apiUrl4}/getCustomerPaymentSummaryMonth/${login_id}`,params);
    // }
    getPendingTransactionCW(login_id, params) {
        return this.http.post(`${this.apiUrl2}/getPendingTransactionCW/${login_id}`, params);
    }
    // --------------------- new API with CSS ------------------------------------------------------------------------------
    getTransactionReportCCS(login_id, client_id, cpo_id, station_id, params) {
        return this.http.post(`${this.apiUrl2}/getTransactionReportCCS/${login_id}/${client_id}/${cpo_id}/${station_id}`, params);
    }
    getCpoRFidMappingCCS(login_id, client_id, cpo_id, station_id, params) {
        return this.http.get(`${this.apiUrl3}/getCpoRFidMappingCCS/${login_id}/${client_id}/${cpo_id}/${station_id}`);
    }
    getChargerStatusDetailViewCCS(login_id, client_id, cpo_id, station_id, params) {
        return this.http.post(`${this.apiUrl2}/getChargerStatusDetailViewCCS/${login_id}/${client_id}/${cpo_id}/${station_id}`, params);
    }
    getAlarmReportDetailViewCCS(login_id, client_id, cpo_id, station_id, params) {
        return this.http.post(`${this.apiUrl2}/getAlarmReportDetailViewCCS/${login_id}/${client_id}/${cpo_id}/${station_id}`, params);
    }
    getDetailTransactionReportCCS(login_id, client_id, cpo_id, station_id, params) {
        return this.http.post(`${this.apiUrl2}/getDetailTransactionReportCCS/${login_id}/${client_id}/${cpo_id}/${station_id}`, params);
    }
}
ReportService.ɵfac = function ReportService_Factory(t) { return new (t || ReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ReportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReportService, factory: ReportService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "E6JG":
/*!********************************************************************!*\
  !*** ./src/app/shared/services/menu-config/menu-config.service.ts ***!
  \********************************************************************/
/*! exports provided: MenuConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuConfigService", function() { return MenuConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class MenuConfigService {
    constructor(http) {
        this.http = http;
        this.apiUrl2 = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2}/menu`;
    }
    getMenuConfig(project_id, client_id) {
        return this.http.get(`${this.apiUrl2}/getMenusWithAlreadyMappedToClient/${project_id}/${client_id}`);
    }
    setClientMenuMapping(params) {
        return this.http.post(`${this.apiUrl2}/clientMenuMapping`, params);
    }
    getMenusByClientIdWithAlreadyMappedToRole(project_id, client_id, role_id) {
        return this.http.get(`${this.apiUrl2}/getMenusByClientIdWithAlreadyMappedToRole/${project_id}/${client_id}/${role_id}`);
    }
    setRoleMenuMapping(params) {
        return this.http.post(`${this.apiUrl2}/roleMenuMapping`, params);
    }
}
MenuConfigService.ɵfac = function MenuConfigService_Factory(t) { return new (t || MenuConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MenuConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuConfigService, factory: MenuConfigService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "HJ+f":
/*!******************************************************!*\
  !*** ./src/app/shared/services/user/role.service.ts ***!
  \******************************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class RoleService {
    constructor(http) {
        this.http = http;
        this.apiUrl2 = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2}/role`;
    }
    getRoles() {
        return this.http.get(`${this.apiUrl2}/getRoles`);
    }
    create(params) {
        return this.http.post(`${this.apiUrl2}/crt/`, params);
    }
    update(params) {
        return this.http.post(`${this.apiUrl2}/upd/`, params);
    }
    delete(id, userId) {
        return this.http.delete(`${this.apiUrl2}/dlt/${id}/${userId}`);
    }
    getRolesCW(userID, project_id) {
        return this.http.get(`${this.apiUrl2}/gtRoleCW/${userID}/${project_id}`);
    }
    getActiveRoles(userID, project_id) {
        return this.http.get(`${this.apiUrl2}/gtActiveRoleCW/${userID}/${project_id}`);
    }
    getActiveRolesByClientId(project_id, client_id) {
        return this.http.get(`${this.apiUrl2}/gtActiveRolesByClientId/${project_id}/${client_id}`);
    }
}
RoleService.ɵfac = function RoleService_Factory(t) { return new (t || RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RoleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoleService, factory: RoleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Iab2":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "K9qR":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/geographics/city.service.ts ***!
  \*************************************************************/
/*! exports provided: CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return CityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class CityService {
    constructor(http) {
        this.http = http;
        this.apiUrl2 = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2}/master`;
    }
    create(params) {
        return this.http.post(`${this.apiUrl2}/createCity/`, params);
    }
    update(params) {
        return this.http.post(`${this.apiUrl2}/updateCity/`, params);
    }
    getCityById(id) {
        return this.http.get(`${this.apiUrl2}/getCityById/${id}`);
    }
    delete(id, userId) {
        return this.http.delete(`${this.apiUrl2}/deleteCity/${id}/${userId}`);
    }
    getAllCity() {
        return this.http.get(`${this.apiUrl2}/getCities`);
    }
    getAllCities() {
        return this.http.get(`${this.apiUrl2}/getAllCities`);
    }
}
CityService.ɵfac = function CityService_Factory(t) { return new (t || CityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CityService, factory: CityService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "NJUq":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/geographics/state.service.ts ***!
  \**************************************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class StateService {
    constructor(http) {
        this.http = http;
        this.apiUrl2 = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2}/master`;
    }
    create(params) {
        return this.http.post(`${this.apiUrl2}/createState/`, params);
    }
    update(params) {
        return this.http.post(`${this.apiUrl2}/updateState/`, params);
    }
    getCountryById(id) {
        return this.http.get(`${this.apiUrl2}/getStateById/${id}`);
    }
    delete(id, userId) {
        return this.http.delete(`${this.apiUrl2}/deleteState/${id}/${userId}`);
    }
    getAllStates() {
        return this.http.get(`${this.apiUrl2}/getAllStates`);
    }
    getAllState() {
        return this.http.get(`${this.apiUrl2}/getStates`);
    }
    getStateByCountry(id) {
        return this.http.get(`${this.apiUrl2}/getStateByCountry/${id}`);
    }
    createStatePINMapping(params) {
        return this.http.post(`${this.apiUrl2}/createStatePINMapping`, params);
    }
    getAllStatePINMapping() {
        return this.http.get(`${this.apiUrl2}/getAllStatePINMapping`);
    }
    allActivePINByStateId(state_id) {
        return this.http.get(`${this.apiUrl2}/allActivePINByStateId/${state_id}`);
    }
    deleteStatePINMapping(id, userId) {
        return this.http.delete(`${this.apiUrl2}/deleteStatePINMapping/${id}/${userId}`);
    }
    updateStatePinMapping(params) {
        return this.http.post(`${this.apiUrl2}/updateStatePinMapping`, params);
    }
}
StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
StateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StateService, factory: StateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "NYyN":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/services/ev-space/ev-batteries/EV-batteries.service.ts ***!
  \*******************************************************************************/
/*! exports provided: EVBatteriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVBatteriesService", function() { return EVBatteriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class EVBatteriesService {
    constructor(http) {
        this.http = http;
        this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2}/evDealer`;
        this.apiUrl2 = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2}/evComponentDealer`;
        this.apiUrl3 = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2}`;
    }
    getAllEvDealer() {
        return this.http.get(`${this.apiUrl}/getAllEvDealer`);
    }
    createEvBattery(params) {
        return this.http.post(`${this.apiUrl}/evDealer`, params);
    }
    updateEvBattery(params) {
        return this.http.post(`${this.apiUrl}/updateEvDealer`, params);
    }
    deleteEvBattery(id, login_id) {
        return this.http.delete(`${this.apiUrl}/deleteEvDealer/${id}/${login_id}`);
    }
    publishEvBattery(params) {
        return this.http.post(`${this.apiUrl}/publishEvDealer`, params);
    }
    moderateEvBattery(params) {
        return this.http.post(`${this.apiUrl}/moderateEvDealer`, params);
    }
    getAllModerateEvBattery() {
        return this.http.get(`${this.apiUrl}/getAllModerateEvDealerList`);
    }
    getBatteryManufacturersById(manufacture_id) {
        return this.http.get(`${this.apiUrl}/getBatteryManufacturersById/${manufacture_id}`);
    }
    getFranchaise() {
        return this.http.get(`${this.apiUrl3}//master/getActiveMasterConfigData/Franchise`);
    }
    getPublishEvDealerListByKeys() {
        return this.http.get(`${this.apiUrl}/getPublishEvDealerListByKeys/EvBattery/`);
    }
    getModerateEvDealerListByKeys() {
        return this.http.get(`${this.apiUrl}/getModerateEvDealerListByKeys/EvBattery/`);
    }
}
EVBatteriesService.ɵfac = function EVBatteriesService_Factory(t) { return new (t || EVBatteriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
EVBatteriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EVBatteriesService, factory: EVBatteriesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EVBatteriesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "O4Xx":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/geographics/country.service.ts ***!
  \****************************************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class CountryService {
    constructor(http) {
        this.http = http;
        this.apiUrl2 = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2}/master`;
    }
    create(params) {
        return this.http.post(`${this.apiUrl2}/createCountry/`, params);
    }
    update(params) {
        return this.http.post(`${this.apiUrl2}/updateCountry/`, params);
    }
    getCountryById(id) {
        return this.http.get(`${this.apiUrl2}/getCountryById/${id}`);
    }
    delete(id, userID) {
        return this.http.delete(`${this.apiUrl2}/deleteCountry/${id}/${userID}`);
    }
    getAllCountry() {
        return this.http.get(`${this.apiUrl2}/getCountries`);
    }
    getAllCountries() {
        return this.http.get(`${this.apiUrl2}/getAllCountries`);
    }
}
CountryService.ɵfac = function CountryService_Factory(t) { return new (t || CountryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CountryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CountryService, factory: CountryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Okah":
/*!**************************************************************************!*\
  !*** ./src/app/shared/services/charging-model/charging-model.service.ts ***!
  \**************************************************************************/
/*! exports provided: ChargingModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargingModelService", function() { return ChargingModelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ChargingModelService {
    constructor(http) {
        this.http = http;
        this.apiUrl2 = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2}/chargingModel`;
    }
    create(params) {
        return this.http.post(`${this.apiUrl2}/crt/`, params);
    }
    update(params) {
        return this.http.post(`${this.apiUrl2}/upd/`, params);
    }
    getChargingModels() {
        return this.http.get(`${this.apiUrl2}/gtChargingModels`);
    }
    getChargingModelsAll() {
        return this.http.get(`${this.apiUrl2}/gtChargingModelsAll`);
    }
    getChargingModelById(id) {
        return this.http.get(`${this.apiUrl2}/gtChargingModelById/${id}`);
    }
    delete(id) {
        return this.http.delete(`${this.apiUrl2}/dlt/${id}`);
    }
}
ChargingModelService.ɵfac = function ChargingModelService_Factory(t) { return new (t || ChargingModelService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ChargingModelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChargingModelService, factory: ChargingModelService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChargingModelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "PNWe":
/*!*****************************************************!*\
  !*** ./src/app/shared/utils/validation-patterns.ts ***!
  \*****************************************************/
/*! exports provided: PATTERNS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATTERNS", function() { return PATTERNS; });
const PATTERNS = {
    ONLY_NUMBERS: /^(0|[1-9]\d*)?$/,
    TWO_DIGIT_DECIMAL: /^[0-9]+(\.[0-9]{1,2})?$/,
    THREE_DIGIT_DECIMAL: /^[0-9]\d{0,10}(\.\d{1,3})?%?$/
};


/***/ }),

/***/ "WZCh":
/*!*******************************************************************!*\
  !*** ./src/app/shared/services/master/vehicle/vehicle.service.ts ***!
  \*******************************************************************/
/*! exports provided: VehicleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleService", function() { return VehicleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class VehicleService {
    constructor(http) {
        this.http = http;
        this.apiUrl2 = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2;
    }
    register(params) {
        return this.http.post(`${this.apiUrl2}/vehicles`, params);
    }
    updateRegisteredVehicle(params) {
        return this.http.post(`${this.apiUrl2}/updateRegisteredVehicle`, params);
    }
    getVehicles() {
        ////
        return this.http.get(`${this.apiUrl2}/vehicles`);
    }
    getVModel_CTypeMapping() {
        ////
        return this.http.get(`${this.apiUrl2}/vModel_Ctypes`);
    }
    getPublishedVModel() {
        ////
        return this.http.get(`${this.apiUrl2}/publishedVModel`);
    }
    vModel_CTypeMap(params) {
        ////
        return this.http.post(`${this.apiUrl2}/vModel_Ctype`, params);
    }
    publishVModel_CTYpeWithoutModify(params) {
        return this.http.post(`${this.apiUrl2}/publishVModel_CTYpeWithoutModify`, params);
    }
    publishVModel_CTYpe(params) {
        return this.http.post(`${this.apiUrl2}/publishVModel_CTYpe`, params);
    }
    moderateVModel_CTYpeWithoutModify(params) {
        return this.http.post(`${this.apiUrl2}/moderateVModel_CTYpeWithoutModify`, params);
    }
    moderateVModel_CTYpe(params) {
        return this.http.post(`${this.apiUrl2}/moderateVModel_CTYpe`, params);
    }
    deleteRegisteredVehicle(id) {
        return this.http.delete(`${this.apiUrl2}/deleteRegisteredVehicle/${id}`);
    }
    deleteModrateVehicle(id, user_id) {
        return this.http.delete(`${this.apiUrl2}/dltC_Type_V_Model_Mapping/${id}/${user_id}`);
    }
}
VehicleService.ɵfac = function VehicleService_Factory(t) { return new (t || VehicleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
VehicleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VehicleService, factory: VehicleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "biaL":
/*!******************************************************!*\
  !*** ./src/app/shared/services/user/user.service.ts ***!
  \******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class UserService {
    constructor(http) {
        this.http = http;
        this.apiUrl2 = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2}/user`;
        this.apiUrl3 = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL3}`;
        this.apiUrl4 = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2}`;
    }
    create(params) {
        return this.http.post(`${this.apiUrl2}/crt/`, params);
    }
    update(params) {
        return this.http.post(`${this.apiUrl2}/upd/`, params);
    }
    getUsers() {
        return this.http.get(`${this.apiUrl2}/gtusers`);
    }
    getUsersCW(id) {
        return this.http.get(`${this.apiUrl2}/gtUsersCW/${id}`);
    }
    delete(id, userID) {
        return this.http.delete(`${this.apiUrl2}/dlt/${id}/${userID}`);
    }
    getCPOTypes() {
        let data = [{ id: 1, name: 'CPO' },
            { id: 2, name: 'Spark EV' },
            { id: 3, name: 'Atther' },
        ];
        return data;
    }
    getUserWiseChargerHistory(userId) {
        return this.http.get(`${this.apiUrl4}/user/userChargingHistory/${userId}`);
    }
    getUserChargingHistoryCW(login_id, params) {
        return this.http.post(`${this.apiUrl4}/user/getUserChargingHistoryCW/${login_id}`, params);
    }
    getActiveUsersCW(userId) {
        return this.http.get(`${this.apiUrl2}/getActiveUsersCW/${userId}`);
    }
    createUserStationMapping(params) {
        return this.http.post(`${this.apiUrl2}/createUserStationMapping/`, params);
    }
    getActiveUsersByClient(client_id) {
        return this.http.get(`${this.apiUrl2}/gtActiveUsersByClient/${client_id}`);
    }
    UserStationMappingV1(params) {
        return this.http.post(`${this.apiUrl2}/UserStationMappingV1/`, params);
    }
    getAllUserStationMapping(userId) {
        return this.http.get(`${this.apiUrl2}/getAllUserStationMapping/${userId}`);
    }
    updateUserStationMapping(params) {
        return this.http.post(`${this.apiUrl2}/updateUserStationMappingV1/`, params);
    }
    getStationListWithStationAssignedToUser(client_id, user_id) {
        return this.http.get(`${this.apiUrl2}/getStationListWithStationAssignedToUser/${client_id}/${user_id}`);
    }
    deleteUserStationMapping(id, userID) {
        return this.http.delete(`${this.apiUrl2}/deleteUserStationMapping/${id}/${userID}`);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "k3ne":
/*!****************************************************!*\
  !*** ./src/app/shared/services/cpo/cpo.service.ts ***!
  \****************************************************/
/*! exports provided: CpoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CpoService", function() { return CpoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class CpoService {
    constructor(http) {
        this.http = http;
        this.apiUrl2 = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2}/cpo`;
    }
    create(params) {
        return this.http.post(`${this.apiUrl2}/crt/`, params);
    }
    update(params) {
        return this.http.post(`${this.apiUrl2}/upd/`, params);
    }
    getCpos() {
        return this.http.get(`${this.apiUrl2}/getcposcw`);
    }
    getactivecposcw(login_id) {
        return this.http.get(`${this.apiUrl2}/gtActiveCposCW/${login_id}`);
    }
    getactivecposcwwithAll(login_id) {
        return this.http.get(`${this.apiUrl2}/gtActiveCposCWwithAll/${login_id}`);
    }
    getcposcw(login_id) {
        return this.http.get(`${this.apiUrl2}/gtcposcw/${login_id}`);
    }
    getCpoById(id) {
        return this.http.get(`${this.apiUrl2}/getCpoById/${id}`);
    }
    delete(id) {
        return this.http.delete(`${this.apiUrl2}/dlt/${id}`);
    }
    getCpoByClientId(id) {
        return this.http.get(`${this.apiUrl2}/gtCpoByClientId/${id}`);
    }
    getCpoByClientIdCW(id, user_id) {
        return this.http.get(`${this.apiUrl2}/getCpoByClientIdCW/${id}/${user_id}`);
    }
    getCpoRFidMappingCW(login_id) {
        return this.http.get(`${this.apiUrl2}/getCpoRFidMappingCW/${login_id}`);
    }
    getRFidsByCpoId(cpo_id) {
        return this.http.get(`${this.apiUrl2}/getCpoRFidMappingCW/${cpo_id}`);
    }
}
CpoService.ɵfac = function CpoService_Factory(t) { return new (t || CpoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CpoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CpoService, factory: CpoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CpoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "kxup":
/*!********************************************************************!*\
  !*** ./src/app/shared/services/menu-master/menu-master.service.ts ***!
  \********************************************************************/
/*! exports provided: MenuMasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuMasterService", function() { return MenuMasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class MenuMasterService {
    constructor(http) {
        this.http = http;
        this.apiUrl2 = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2}/menu`;
        this.apiUrl3 = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2}/master`;
    }
    getNavLevel() {
        return this.http.get(`${this.apiUrl2}/getNavLevel`);
    }
    getMenuType() {
        return this.http.get(`${this.apiUrl2}/getMenuType`);
    }
    getMenuIcon() {
        return this.http.get(`${this.apiUrl2}/getMenuIcon`);
    }
    getParentByNavLevel(id) {
        return this.http.get(`${this.apiUrl2}/getParentByNavLevel/${id}`);
    }
    getAllMenus() {
        return this.http.get(`${this.apiUrl2}/getAllMenus`);
    }
    getProject() {
        return this.http.get(`${this.apiUrl3}/getProjects`);
    }
    create(params) {
        return this.http.post(`${this.apiUrl2}/create`, params);
    }
    update(params) {
        return this.http.post(`${this.apiUrl2}/UpdateMenu`, params);
    }
    delete(id, login_id) {
        return this.http.delete(`${this.apiUrl2}/deleteMenu/${id}/${login_id}`); //deleteMenu/84/63
    }
}
MenuMasterService.ɵfac = function MenuMasterService_Factory(t) { return new (t || MenuMasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MenuMasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuMasterService, factory: MenuMasterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuMasterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "rSiO":
/*!************************************************************************!*\
  !*** ./src/app/shared/services/charger-batch/charger-batch.service.ts ***!
  \************************************************************************/
/*! exports provided: ChargerBatchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargerBatchService", function() { return ChargerBatchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ChargerBatchService {
    constructor(http) {
        this.http = http;
        this.apiUrl2 = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2}/chargerBatch`;
    }
    create(params) {
        return this.http.post(`${this.apiUrl2}/create/`, params);
    }
    update(params) {
        return this.http.post(`${this.apiUrl2}/update/`, params);
    }
    getChargerBatches() {
        return this.http.get(`${this.apiUrl2}/getChargerBatches`);
    }
    getChargerBatchById(id) {
        return this.http.get(`${this.apiUrl2}/getChargerBatchById/${id}`);
    }
    delete(id) {
        return this.http.delete(`${this.apiUrl2}/delete/${id}`);
    }
}
ChargerBatchService.ɵfac = function ChargerBatchService_Factory(t) { return new (t || ChargerBatchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ChargerBatchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChargerBatchService, factory: ChargerBatchService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChargerBatchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "t6AC":
/*!***************************************************************************!*\
  !*** ./src/app/shared/services/ev-space/ev-dealers/EV-dealers.service.ts ***!
  \***************************************************************************/
/*! exports provided: EVDealersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVDealersService", function() { return EVDealersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class EVDealersService {
    constructor(http) {
        this.http = http;
        this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2}/evDealer`;
        this.apiUrl2 = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2}/evComponentDealer`;
    }
    getAllEvDealer() {
        return this.http.get(`${this.apiUrl}/getAllEvDealer`);
    }
    createEvDealers(params) {
        return this.http.post(`${this.apiUrl}/evDealer`, params);
    }
    updateEvDealer(params) {
        return this.http.post(`${this.apiUrl}/updateEvDealer`, params);
    }
    deleteEvDealer(id, login_id) {
        return this.http.delete(`${this.apiUrl}/deleteEvDealer/${id}/${login_id}`);
    }
    publishEvDealer(params) {
        return this.http.post(`${this.apiUrl}/publishEvDealer`, params);
    }
    moderateEvDealer(params) {
        return this.http.post(`${this.apiUrl}/moderateEvDealer`, params);
    }
    getAllModerateEvDealer() {
        return this.http.get(`${this.apiUrl}/getAllModerateEvDealerList`);
    }
    getModerateEvDealerListByKeys() {
        return this.http.get(`${this.apiUrl}/getModerateEvDealerListByKeys/EvChargingStation`);
    }
    getPublishEvDealerListByKeys() {
        return this.http.get(`${this.apiUrl}/getPublishEvDealerListByKeys/EvChargingStation`);
    }
    // _______________EV Compnent Dealer API _____________________
    createComponent(params) {
        return this.http.post(`${this.apiUrl2}/componentDealer`, params);
    }
    getAllComponentDealer() {
        return this.http.get(`${this.apiUrl2}/getAllComponentDealer`);
    }
    deleteComponentDealer(id, login_id) {
        return this.http.delete(`${this.apiUrl2}/deleteComponentDealer/${id}/${login_id}`);
    }
    updateComponentDealer(params) {
        return this.http.post(`${this.apiUrl2}/updateComponentDealer`, params);
    }
    publishComponentDealer(params) {
        return this.http.post(`${this.apiUrl2}/publishComponentDealer`, params);
    }
    moderateComponentDealer(params) {
        return this.http.post(`${this.apiUrl2}/moderateComponentDealer`, params);
    }
    getAllModerateComponentDealer() {
        return this.http.get(`${this.apiUrl2}/getAllModerateComponentDealer`);
    }
    // _______________EV Dealership and Franchise Provider API _____________________
    getModerateEvDealershipListByKeys() {
        return this.http.get(`${this.apiUrl}/getModerateEvDealerListByKeys/EVDealerShip`);
    }
}
EVDealersService.ɵfac = function EVDealersService_Factory(t) { return new (t || EVDealersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
EVDealersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EVDealersService, factory: EVDealersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EVDealersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "tMSl":
/*!************************************************************!*\
  !*** ./src/app/shared/services/version/version.service.ts ***!
  \************************************************************/
/*! exports provided: VersionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionService", function() { return VersionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class VersionService {
    constructor(http) {
        this.http = http;
        this.apiUrl2 = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2}/version`;
    }
    create(params) {
        return this.http.post(`${this.apiUrl2}/create/`, params);
    }
    update(params) {
        return this.http.post(`${this.apiUrl2}/update/`, params);
    }
    getVersions() {
        return this.http.get(`${this.apiUrl2}/getVersions`);
    }
    getVersionById(id) {
        return this.http.get(`${this.apiUrl2}/getVersionById/${id}`);
    }
    delete(id) {
        return this.http.delete(`${this.apiUrl2}/delete/${id}`);
    }
}
VersionService.ɵfac = function VersionService_Factory(t) { return new (t || VersionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
VersionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VersionService, factory: VersionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VersionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zADy":
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/charger-type/charger-type.service.ts ***!
  \**********************************************************************/
/*! exports provided: ChargerTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargerTypeService", function() { return ChargerTypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ChargerTypeService {
    constructor(http) {
        this.http = http;
        this.apiUrl2 = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2}/chargerType`;
    }
    create(params) {
        return this.http.post(`${this.apiUrl2}/crt/`, params);
    }
    update(params) {
        return this.http.post(`${this.apiUrl2}/upd/`, params);
    }
    getChargerTypes() {
        return this.http.get(`${this.apiUrl2}/gtChargerTypes`);
    }
    getChargerTypeById(id) {
        return this.http.get(`${this.apiUrl2}/gtChargerTypeById/${id}`);
    }
    getActiveChargerTypes() {
        return this.http.get(`${this.apiUrl2}/gtActiveChargerTypes`);
    }
    delete(id) {
        return this.http.delete(`${this.apiUrl2}/dlt/${id}`);
    }
}
ChargerTypeService.ɵfac = function ChargerTypeService_Factory(t) { return new (t || ChargerTypeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ChargerTypeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChargerTypeService, factory: ChargerTypeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChargerTypeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map