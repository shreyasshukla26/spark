(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-main-driver-driver-rfid-driver-rfid-module"],{

/***/ "4vxN":
/*!***********************************************************************!*\
  !*** ./src/app/main/driver/driver-rfid/driver-rfid-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: DriverRfidRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverRfidRoutingModule", function() { return DriverRfidRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _driver_rfid_crud_driver_rfid_crud_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./driver-rfid-crud/driver-rfid-crud.component */ "o7Bx");
/* harmony import */ var app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/interceptors/auth-gaurd */ "9gca");
/* harmony import */ var _driver_rfid_crud_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./driver-rfid-crud/routes */ "lZ2X");







const routes = [
    {
        path: "crud", component: _driver_rfid_crud_driver_rfid_crud_component__WEBPACK_IMPORTED_MODULE_2__["DriverRfidCrudComponent"], canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], children: _driver_rfid_crud_routes__WEBPACK_IMPORTED_MODULE_4__["TABS_DEMO_ROUTES"]
    }
];
class DriverRfidRoutingModule {
}
DriverRfidRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DriverRfidRoutingModule });
DriverRfidRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DriverRfidRoutingModule_Factory(t) { return new (t || DriverRfidRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DriverRfidRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DriverRfidRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "6yN1":
/*!******************************************************************************!*\
  !*** ./src/app/main/driver/driver-rfid/view-dialog/view-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: ViewDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDialogComponent", function() { return ViewDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ViewDialogComponent {
    constructor() { }
    ngOnInit() {
    }
}
ViewDialogComponent.ɵfac = function ViewDialogComponent_Factory(t) { return new (t || ViewDialogComponent)(); };
ViewDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewDialogComponent, selectors: [["app-view-dialog"]], decls: 2, vars: 0, template: function ViewDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "view-dialog works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-dialog',
                templateUrl: './view-dialog.component.html',
                styleUrls: ['./view-dialog.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8iSY":
/*!****************************************************************!*\
  !*** ./src/app/main/driver/driver-rfid/list/list.component.ts ***!
  \****************************************************************/
/*! exports provided: RFID_Map_Driver, ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RFID_Map_Driver", function() { return RFID_Map_Driver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/components/confirm-dialog/confirm-dialog.component */ "2nsM");
/* harmony import */ var mat_table_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mat-table-filter */ "6Ugt");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var app_shared_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/services/driver/driver.service */ "SHc3");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/shared/services/cpo/cpo.service */ "k3ne");
/* harmony import */ var app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/shared/services/rfid/rfid.service */ "QtQ4");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ "FKr1");






























function ListComponent_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r19.name, " ");
} }
function ListComponent_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select cpo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_mat_header_cell_33_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CPO Name \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_33_span_1_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.changeVisibility("cpoSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_mat_header_cell_33_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_mat_header_cell_33_mat_form_field_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.filterEntity.cpo_name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_33_mat_form_field_2_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.changeVisibility("cpoSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r21.filterEntity.cpo_name);
} }
function ListComponent_mat_header_cell_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_mat_header_cell_33_span_1_Template, 4, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_mat_header_cell_33_mat_form_field_2_Template, 4, 1, "mat-form-field", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.cpoSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.cpoSearch);
} }
function ListComponent_mat_cell_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r27.cpo_name, " ");
} }
function ListComponent_mat_header_cell_36_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Driver Name \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_36_span_1_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.changeVisibility("driverNameSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_mat_header_cell_36_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_mat_header_cell_36_mat_form_field_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.filterEntity.driver_name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_36_mat_form_field_2_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.changeVisibility("driverNameSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r29.filterEntity.driver_name);
} }
function ListComponent_mat_header_cell_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_mat_header_cell_36_span_1_Template, 4, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_mat_header_cell_36_mat_form_field_2_Template, 4, 1, "mat-form-field", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.driverNameSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.driverNameSearch);
} }
function ListComponent_mat_cell_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r35.driver_name != null ? row_r35.driver_name : "----", " ");
} }
function ListComponent_mat_header_cell_39_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "RFID Name \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_39_span_1_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.changeVisibility("rfidNameSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_mat_header_cell_39_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_mat_header_cell_39_mat_form_field_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.filterEntity.rfid_name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_39_mat_form_field_2_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.changeVisibility("rfidNameSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r37.filterEntity.rfid_name);
} }
function ListComponent_mat_header_cell_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_mat_header_cell_39_span_1_Template, 4, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_mat_header_cell_39_mat_form_field_2_Template, 4, 1, "mat-form-field", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.rfidNameSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.rfidNameSearch);
} }
function ListComponent_mat_cell_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r43.name, " ");
} }
function ListComponent_mat_header_cell_42_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " RFID \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_42_span_1_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r46.changeVisibility("rfidNoSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_mat_header_cell_42_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_mat_header_cell_42_mat_form_field_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r48.filterEntity.RF_ID_no = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_42_mat_form_field_2_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r50.changeVisibility("rfidNoSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r45.filterEntity.RF_ID_no);
} }
function ListComponent_mat_header_cell_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_mat_header_cell_42_span_1_Template, 4, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_mat_header_cell_42_mat_form_field_2_Template, 4, 1, "mat-form-field", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.rfidNoSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.rfidNoSearch);
} }
function ListComponent_mat_cell_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r51.RF_ID_no, " ");
} }
function ListComponent_mat_header_cell_45_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_45_span_1_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r54.changeVisibility("statusSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_mat_header_cell_45_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_mat_header_cell_45_mat_form_field_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r56.filterEntity.statusString = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_45_mat_form_field_2_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r58.changeVisibility("statusSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r53.filterEntity.statusString);
} }
function ListComponent_mat_header_cell_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_mat_header_cell_45_span_1_Template, 4, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_mat_header_cell_45_mat_form_field_2_Template, 4, 1, "mat-form-field", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.statusSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.statusSearch);
} }
function ListComponent_mat_cell_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", row_r59.ismapped == "Y" ? "green" : "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r59.statusString, " ");
} }
function ListComponent_mat_header_cell_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_mat_cell_49_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_cell_49_mat_icon_1_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const element_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.delete(element_r60); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_mat_cell_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_mat_cell_49_mat_icon_1_Template, 2, 0, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r60.ismapped == "Y");
} }
function ListComponent_mat_header_cell_51_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Balance \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_51_span_1_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r67.changeVisibility("balanceSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "npm run start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_mat_header_cell_51_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_mat_header_cell_51_mat_form_field_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r69.filterEntity.balance = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_51_mat_form_field_2_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r71.changeVisibility("balanceSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r66.filterEntity.balance);
} }
function ListComponent_mat_header_cell_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_mat_header_cell_51_span_1_Template, 4, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_mat_header_cell_51_mat_form_field_2_Template, 4, 1, "mat-form-field", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r15.balanceSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.balanceSearch);
} }
function ListComponent_mat_cell_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r72.balance, " ");
} }
function ListComponent_mat_header_row_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row", 54);
} }
function ListComponent_mat_header_row_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row", 55);
} }
const _c0 = function () { return [10, 30, 50, 100]; };
class RFID_Map_Driver {
}
/**
 * @title Data table with sorting, pagination, and filtering.
 */
class ListComponent {
    constructor(driverService, dialog, snackBar, fb, cpoService, rfidService) {
        // Create 100 users
        // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
        this.driverService = driverService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.fb = fb;
        this.cpoService = cpoService;
        this.rfidService = rfidService;
        this.head = [['CPO Name', 'Driver Name', 'RFID Name', 'RFID No.', 'Status', 'balance']];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]([]);
        this.clientSearch = false;
        this.cpoSearch = false;
        this.rfidNameSearch = false;
        this.driverNameSearch = false;
        this.rfidNoSearch = false;
        this.balanceSearch = false;
        this.statusSearch = false;
        this.selectedCpo_id = 0;
        // Assign the data to the data source for the table to render
        this.form = this.fb.group({
            CPO: ['']
        });
    }
    ngOnInit() {
        this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
        this.columns = [
            {
                field: 'cpo_name'
            },
            {
                field: 'driver_name'
            },
            {
                field: 'rfid_name'
            },
            {
                field: 'rfid_no'
            },
            {
                field: 'balance'
            },
            {
                field: 'status'
            },
            {
                field: 'action'
            },
        ];
        this.displayedColumns = this.columns.map(column => column.field);
        this.getactivecposcw(this.localStorage.userId);
        this.filterEntity = new RFID_Map_Driver();
        this.filterType = mat_table_filter__WEBPACK_IMPORTED_MODULE_7__["MatTableFilter"].ANYWHERE;
        // this.getRfidByCpoData();
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    getRfidByCpoData(cpo_id) {
        this.rfidService.getAllRFIDbyCW(this.localStorage.userId, cpo_id).subscribe((resp) => {
            if (resp.status == true) {
                this.rfidByCpoData = resp.data;
                for (var i = 0; i < this.rfidByCpoData.length; i++) {
                    if (this.rfidByCpoData[i].ismapped == 'N') {
                        this.rfidByCpoData[i].statusString = 'Not Mapped';
                    }
                    else {
                        this.rfidByCpoData[i].statusString = 'Mapped';
                    }
                }
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.rfidByCpoData);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }
            else {
                // this.snackBar.open(MessageConstant.NoRecordFoundMessage, 'Dismiss', { duration: 3000 })
                return;
            }
        }, (err) => { });
    }
    getactivecposcw(id) {
        this.cpoService.getactivecposcwwithAll(id).subscribe((data) => {
            //;
            this.cposName = data;
            if (this.localStorage.role_code != "END") {
                if (this.cposName != null && this.cposName != undefined) {
                    // const toSelect = this.cposName.length == 1 ? this.cposName[0] : this.cposName[1];
                    // this.selectedCpo_id = toSelect.cpo_id;
                    // this.form.get('CPO').setValue(toSelect);
                    // this.form.get('CPO').disable();
                    // this.getRfidByCpoData(this.localStorage.cpo_id);
                    const toSelect = this.cposName[0];
                    this.selectedCpo_id = toSelect.id;
                    this.form.get('CPO').setValue(toSelect);
                    if (this.localStorage.role_code == "CPO") {
                        this.form.get('CPO').disable();
                    }
                    this.getRfidByCpoData(this.selectedCpo_id);
                }
                this.filteredOptionsCPO = this.form.controls.CPO.valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(name => name ? this._filterCPO(name) : this.cposName));
            }
        }, (err) => { });
    }
    displayCPO(item) {
        return item && item.name ? item.name : '';
    }
    displayClient(item) {
        return item && item.name ? item.name : '';
    }
    _filterCPO(name) {
        const filterValue = name.toLowerCase();
        return this.cposName.filter(option => option.name.toLowerCase().includes(filterValue));
    }
    delete(element) {
        this.confirmDialogRef = this.dialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["FuseConfirmDialogComponent"], {
            disableClose: true
        });
        this.confirmDialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.rfidService.unmappedRfIdDriver(element.driver_id).subscribe((data) => {
                    this.getRfidByCpoData(this.selectedCpo_id);
                    this.snackBar.open('Deleted successfully', 'Dismiss', { duration: 2000 });
                }, (err) => {
                });
            }
            this.confirmDialogRef = null;
        });
    }
    onCPOChange(cpo_id) {
        this.selectedCpo_id = cpo_id;
        this.getRfidByCpoData(cpo_id);
    }
    changeVisibility(visibleOption, ev) {
        ev.stopPropagation();
        if (visibleOption == 'cpoSearch') {
            this.cpoSearch = !this.cpoSearch;
            this.filterEntity.cpo_name = "";
        }
        if (visibleOption == 'driverNameSearch') {
            this.driverNameSearch = !this.driverNameSearch;
            this.filterEntity.driver_name = "";
        }
        if (visibleOption == 'rfidNameSearch') {
            this.rfidNameSearch = !this.rfidNameSearch;
            this.filterEntity.rfid_name = "";
        }
        if (visibleOption == 'rfidNoSearch') {
            this.rfidNoSearch = !this.rfidNoSearch;
            this.filterEntity.RF_ID_no = '';
        }
        if (visibleOption == 'statusSearch') {
            this.statusSearch = !this.statusSearch;
            this.filterEntity.statusString = '';
        }
        if (visibleOption == 'balanceSearch') {
            this.balanceSearch = !this.balanceSearch;
            this.filterEntity.balance = "";
        }
    }
    tableExport() {
        this.exportedData = [];
        for (let i = 0; i < this.dataSource.filteredData.length; i++) {
            var rfidByCpoData = this.dataSource.filteredData[i];
            var data = {
                'CPO Name': rfidByCpoData.cpo_name,
                'Driver Name': rfidByCpoData.driver_name,
                'RFID Name': rfidByCpoData.name,
                'RFID No': rfidByCpoData.RF_ID_no,
                'Status': rfidByCpoData.statusString
            };
            this.exportedData.push(data);
        }
        const workSheet = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].json_to_sheet(this.exportedData);
        const workBook = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].book_append_sheet(workBook, workSheet, 'Driver List');
        xlsx__WEBPACK_IMPORTED_MODULE_1__["writeFile"](workBook, 'Driver List.xlsx');
    }
    pdfExport() {
        //this.preloader.open();
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__["jsPDF"]({ // set needed dimensions for any elemen
        });
        this.exportedData = [];
        for (let i = 0; i < this.dataSource.filteredData.length; i++) {
            var rfidByCpoData = this.dataSource.filteredData[i];
            var data = [rfidByCpoData.cpo_name, rfidByCpoData.driver_name, rfidByCpoData.name, rfidByCpoData.RF_ID_no, rfidByCpoData.statusString];
            this.exportedData.push(data);
        }
        var img = new Image();
        var imgRight = new Image();
        var src = 'assets/images/logos/logo_sparkev_main.png';
        var srcSparkEV = 'assets/images/logos/logo_SparkEV_black.png';
        imgRight.src = srcSparkEV;
        var createdDate = new Date().toLocaleString(('en-GB'));
        img.src = src;
        doc.setFontSize(11);
        doc.setTextColor(100);
        doc.setFontSize(18);
        doc.autoTable({
            head: this.head,
            body: this.exportedData,
            theme: 'grid',
            headStyles: { fontStyle: 'majalla', fillColor: [11, 148, 68] },
            styles: {
                cellPadding: 1,
                fontSize: 8,
            },
            margin: { top: 22 },
            didDrawCell: data => {
            },
            didDrawPage: data => {
                doc.addImage(img, 15, 7, 15, 6);
                doc.addImage(imgRight, 170, 7, 25, 6);
                doc.text('Driver List Report', doc.internal.pageSize.getWidth() / 2, 11, { align: 'center' });
                doc.setTextColor(211, 211, 211);
                doc.setFontSize(60);
                doc.setGState(doc.GState({ opacity: 0.6 }));
                doc.text('Confidential/Not for Public use', 25, 285, null, 60);
                doc.setGState(doc.GState({ opacity: 1 }));
                doc.setTextColor(100);
                doc.setFontSize(9);
                doc.text('Date:' + createdDate, 15, 18);
                doc.text('Generated By:' + this.localStorage.f_Name, 195, 18, { align: 'right' });
                doc = this.addWaterMark(doc);
            }
        });
        // below line for Open PDF document in new tab
        doc.output('dataurlnewwindow');
        //this.preloader.close();
        // below line for Download PDF document  
        doc.save('Driver List report.pdf');
    }
    addWaterMark(doc) {
        var newpage = doc.getNumberOfPages();
        const i = doc.internal.getNumberOfPages();
        doc.setTextColor(100);
        doc.setFontSize(10);
        //Print Page 1 of 4 for example
        doc.text('Page ' + String(i) + ' of ' + String(newpage), 210 - 20, 297 - 10, null, null, "right");
        return doc;
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_9__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_13__["CpoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_14__["RfidService"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], viewQuery: function ListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 56, vars: 14, consts: [["fxLayout", "row wrap", 1, "matero-row"], ["fxFlex", "100", 1, "matero-col"], [2, "text-align", "left", "margin-left", "16px", "margin-bottom", "10px", "margin-top", "10px"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Excel Download", 3, "click"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "PDF Download", 3, "click"], [1, "form-field-full", 3, "formGroup"], ["fxLayout", "row wrap", "fxLayoutGap", "8px grid"], ["appearance", "outline", "fxFlex", "50", 2, "height", "60px"], ["type", "text", "matInput", "", "formControlName", "CPO", 3, "matAutocomplete"], [3, "displayWith", "optionSelected"], ["auto2", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 2, "display", "flex"], ["matSuffix", "", 1, "secondary-text"], ["matSuffix", "", "matTooltip", "Please enter cpo name", 1, "secondary-text"], [4, "ngIf"], [1, ""], ["fxLayout", "row wrap", 1, "page-layout", "simple", "fullwidth", 2, "overflow", "scroll"], [1, "content", 2, "min-width", "auto"], ["mat-table", "", "matTableFilter", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "exampleEntity", "filterType"], ["matColumnDef", "cpo_name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "driver_name"], ["matColumnDef", "rfid_name"], ["matColumnDef", "rfid_no"], ["matColumnDef", "status"], ["mat-cell", "", 3, "color", 4, "matCellDef"], ["matColumnDef", "action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "balance"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], [3, "value"], ["mat-header-cell", "", "mat-sort-header", ""], ["class", "custom_font_size", "style", "display: flex;", 4, "ngIf"], ["appearance", "outline", "style", "width: 70%;", "class", "list_input", 4, "ngIf"], [1, "custom_font_size", 2, "display", "flex"], ["matSuffix", "", 3, "click"], ["appearance", "outline", 1, "list_input", 2, "width", "70%"], ["matInput", "", "placeholder", " CPO Name ", 3, "ngModel", "ngModelChange"], ["mat-cell", ""], ["matInput", "", "placeholder", " Driver Name ", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "RFID Name", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", " RFID No.", 3, "ngModel", "ngModelChange"], ["appearance", "outline", "style", "width: 110px", "class", "list_input", 4, "ngIf"], ["appearance", "outline", 1, "list_input", 2, "width", "110px"], ["matInput", "", "placeholder", "Status", 3, "ngModel", "ngModelChange"], ["mat-header-cell", ""], [1, "custom_font_size"], ["color", "warn", "matTooltip", "Remove", "style", "cursor:pointer", 3, "click", 4, "ngIf"], ["color", "warn", "matTooltip", "Remove", 2, "cursor", "pointer", 3, "click"], ["matInput", "", "placeholder", " Balance.", 3, "ngModel", "ngModelChange"], ["mat-header-row", ""], ["mat-row", ""]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_button_click_3_listener() { return ctx.tableExport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "sim_card_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_button_click_7_listener() { return ctx.pdfExport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "picture_as_pdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Select CPO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-autocomplete", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function ListComponent_Template_mat_autocomplete_optionSelected_18_listener($event) { return ctx.onCPOChange($event.option.value.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ListComponent_mat_option_20_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "account_circle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ListComponent_mat_error_27_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](32, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ListComponent_mat_header_cell_33_Template, 3, 2, "mat-header-cell", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ListComponent_mat_cell_34_Template, 2, 1, "mat-cell", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](35, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ListComponent_mat_header_cell_36_Template, 3, 2, "mat-header-cell", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ListComponent_mat_cell_37_Template, 2, 1, "mat-cell", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](38, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ListComponent_mat_header_cell_39_Template, 3, 2, "mat-header-cell", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ListComponent_mat_cell_40_Template, 2, 1, "mat-cell", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](41, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ListComponent_mat_header_cell_42_Template, 3, 2, "mat-header-cell", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ListComponent_mat_cell_43_Template, 2, 1, "mat-cell", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](44, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ListComponent_mat_header_cell_45_Template, 3, 2, "mat-header-cell", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ListComponent_mat_cell_46_Template, 2, 3, "mat-cell", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](47, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ListComponent_mat_header_cell_48_Template, 3, 0, "mat-header-cell", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ListComponent_mat_cell_49_Template, 2, 1, "mat-cell", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](50, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ListComponent_mat_header_cell_51_Template, 3, 2, "mat-header-cell", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ListComponent_mat_cell_52_Template, 2, 1, "mat-cell", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ListComponent_mat_header_row_53_Template, 1, 0, "mat-header-row", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ListComponent_mat_header_row_54_Template, 1, 0, "mat-header-row", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "mat-paginator", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayCPO);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 11, ctx.filteredOptionsCPO));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("CPO").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("exampleEntity", ctx.filterEntity)("filterType", ctx.filterType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], mat_table_filter__WEBPACK_IMPORTED_MODULE_7__["MatTableFilterDirective"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortHeader"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_23__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.scss']
            }]
    }], function () { return [{ type: app_shared_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_9__["DriverService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"] }, { type: app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_13__["CpoService"] }, { type: app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_14__["RfidService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }]
        }] }); })();


/***/ }),

/***/ "ALJ5":
/*!********************************************************************!*\
  !*** ./src/app/main/driver/driver-rfid/create/create.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/animations */ "PVWW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/client/client.service */ "LKWI");
/* harmony import */ var app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/cpo/cpo.service */ "k3ne");
/* harmony import */ var app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/rfid/rfid.service */ "QtQ4");
/* harmony import */ var app_shared_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/driver/driver.service */ "SHc3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "FKr1");






















const _c0 = ["toggleElement"];
function CreateComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r13.name, " ");
} }
function CreateComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter client name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r14.name, " ");
} }
function CreateComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter CPO name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_mat_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r15.name, " ");
} }
function CreateComponent_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter Driver name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_mat_option_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r16.RF_ID_no, " ");
} }
function CreateComponent_mat_error_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter RFID name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CreateComponent {
    constructor(fb, snackBar, clientService, cpoService, rfidService, driverService, router) {
        this.fb = fb;
        this.snackBar = snackBar;
        this.clientService = clientService;
        this.cpoService = cpoService;
        this.rfidService = rfidService;
        this.driverService = driverService;
        this.router = router;
        this.status = false;
    }
    ngOnInit() {
        this.initialize();
    }
    initialize() {
        this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
        this.form = this.fb.group({
            client_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            cpo_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            rfid_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            driver_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            status: this.status ? 'Y' : 'N'
        });
        this.getClientName();
    }
    onCPOChange(cpo_id) {
        this.getUnmappedRFIDByCpoId(cpo_id);
        this.getUnmappedDriverByCpoId(cpo_id);
        this.form.get('driver_name').setValue("");
        this.form.get('rfid_name').setValue("");
    }
    getUnmappedRFIDByCpoId(cpo_id) {
        this.rfidService.getUnmappedRFIDByCpoId(cpo_id).subscribe((resp) => {
            this.rfid_name = resp.data;
            this.setupRFIDFilter();
        });
    }
    setupRFIDFilter() {
        this.filteredOptionsRFID = this.setupFilter(this.form.controls.rfid_name, this.rfid_name, 'RF_ID_no');
    }
    setupFilter(control, data, key) {
        return control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value[key]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterOptions(name, data, key) : data));
    }
    _filterOptions(value, data, key) {
        const filterValue = value.toLowerCase();
        return data.filter(option => option[key].toLowerCase().includes(filterValue));
    }
    displayRFIDName(item) {
        return (item === null || item === void 0 ? void 0 : item.RF_ID_no) || '';
    }
    getUnmappedDriverByCpoId(cpo_id) {
        this.driverService.getUnmappedDriverByCpoId(cpo_id).subscribe((resp) => {
            this.driver_name = resp.data;
            this.filteredOptionsDriver = this.setupFilter(this.form.controls.driver_name, this.driver_name, 'name');
        });
    }
    displayDriverName(item) {
        return (item === null || item === void 0 ? void 0 : item.name) || '';
    }
    getClientName() {
        this.clientService.getActiveClientsCW(this.localStorage.userId).subscribe(data => {
            this.client_name = data;
            const toSelect = this.client_name.find(c => c.id == this.localStorage.client_id);
            this.form.get('client_name').setValue(toSelect);
            this.filteredOptionsClient = this.setupFilter(this.form.controls.client_name, this.client_name, 'name');
            this.getCpoByclient(toSelect.id);
        });
    }
    onClientChange(event) {
        this.getCpoByclient(event);
        this.form.get('cpo_name').setValue("");
        this.form.get('driver_name').setValue("");
        this.form.get('rfid_name').setValue("");
    }
    displayClientName(item) {
        return (item === null || item === void 0 ? void 0 : item.name) || '';
    }
    getCpoByclient(id) {
        this.cpoService.getCpoByClientId(id).subscribe(data => {
            this.cposName = data;
            this.filteredOptionsClientCPO = this.setupFilter(this.form.controls.cpo_name, this.cposName, 'name');
        });
    }
    displayCPOName(item) {
        return (item === null || item === void 0 ? void 0 : item.name) || '';
    }
    onSubmit() {
        const formValues = this.form.value;
        const params = {
            rfid_id: formValues.rfid_name.rfid_id,
            driver_id: formValues.driver_name.driver_id,
            status: this.status ? 'Y' : 'N',
            created_by: this.localStorage.userId
        };
        this.rfidService.createRfidMappingwithDriver(params).subscribe((data) => {
            if (data.status) {
                this.snackBar.open('DRIVER-RFID mapped!', 'Dismiss', { duration: 5000 });
                this.router.navigate(['/driverManagement/driverRfid/crud/list']);
            }
            else {
                this.snackBar.open('Something went wrong!', 'Dismiss', { duration: 5000 });
                this.router.navigate(['/driverManagement/driverRfid/crud/list']);
            }
        }, (err) => {
            // 
            this.snackBar.open('Please try again', 'Dismiss', { duration: 5000 });
        });
    }
    updateStatus(event) {
        this.status = event.checked;
        this.ref.checked = this.status;
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_6__["CpoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_7__["RfidService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_8__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-create"]], viewQuery: function CreateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ref = _t.first);
    } }, decls: 70, vars: 27, consts: [["id", "forms", "fxLayout", "column", 1, "page-layout", "simple", "fullwidth"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", "name", "form", 1, "mat-card", "mat-elevation-z4", "p-24", 3, "formGroup", "submit", "keydown.enter"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "50", 1, "pr-4"], ["type", "text", "matInput", "", "formControlName", "client_name", 3, "matAutocomplete"], [3, "displayWith", "optionSelected"], ["clientNameAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 2, "display", "flex"], ["matSuffix", "", 1, "secondary-text"], ["matSuffix", "", "matTooltip", "Please enter client", 1, "secondary-text"], [4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "cpo_name", 3, "matAutocomplete"], ["cpoNameAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please enter cpo name", 1, "secondary-text"], ["type", "text", "matInput", "", "formControlName", "driver_name", 3, "matAutocomplete"], [3, "displayWith"], ["driverAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please enter Driver name", 1, "secondary-text"], ["type", "text", "matInput", "", "formControlName", "rfid_name", 3, "matAutocomplete"], ["rfidAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please enter RFID name", 1, "secondary-text"], ["fxFlex", "50"], ["color", "primary", 1, "example-margin", 3, "checked", "change"], ["toggleElement", ""], ["fxLayout", "row", "fxLayoutAlign", "start center", 2, "padding-top", "10px"], ["mat-raised-button", "", "color", "primary", 1, "mr-8"], ["mat-raised-button", "", "color", "warn", "type", "button", "routerLink", "/assetManagement/rfidManagement/cpo-rfid/crud/list", 1, "mr-8"], [3, "value"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CreateComponent_Template_form_submit_1_listener() { return ctx.onSubmit(); })("keydown.enter", function CreateComponent_Template_form_keydown_enter_1_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Client Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-autocomplete", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function CreateComponent_Template_mat_autocomplete_optionSelected_7_listener($event) { return ctx.onClientChange($event.option.value.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CreateComponent_mat_option_9_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CreateComponent_mat_error_16_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "CPO Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-autocomplete", 5, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function CreateComponent_Template_mat_autocomplete_optionSelected_21_listener($event) { return ctx.onCPOChange($event.option.value.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CreateComponent_mat_option_23_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CreateComponent_mat_error_30_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Driver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-autocomplete", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CreateComponent_mat_option_38_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, CreateComponent_mat_error_45_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "RFID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-autocomplete", 16, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, CreateComponent_mat_option_52_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, CreateComponent_mat_error_59_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-slide-toggle", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateComponent_Template_mat_slide_toggle_change_62_listener($event) { return ctx.updateStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayClientName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 19, ctx.filteredOptionsClient));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("client_name").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayCPOName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 21, ctx.filteredOptionsClientCPO));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("cpo_name").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayDriverName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 23, ctx.filteredOptionsDriver));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("driver_name").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayRFIDName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 25, ctx.filteredOptionsRFID));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("rfid_name").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.status ? "Active" : "Inactive", "");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"], encapsulation: 2, data: { animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_2__["fuseAnimations"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create',
                templateUrl: './create.component.html',
                styleUrls: ['./create.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_2__["fuseAnimations"]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"] }, { type: app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_6__["CpoService"] }, { type: app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_7__["RfidService"] }, { type: app_shared_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_8__["DriverService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }]; }, { ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["toggleElement"]
        }] }); })();


/***/ }),

/***/ "Fl+Z":
/*!***************************************************************!*\
  !*** ./src/app/main/driver/driver-rfid/driver-rfid.module.ts ***!
  \***************************************************************/
/*! exports provided: DriverRfidModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverRfidModule", function() { return DriverRfidModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _driver_rfid_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./driver-rfid-routing.module */ "4vxN");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create/create.component */ "ALJ5");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "8iSY");
/* harmony import */ var _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-dialog/view-dialog.component */ "6yN1");
/* harmony import */ var _action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action-dialog/action-dialog.component */ "STkw");
/* harmony import */ var _driver_rfid_crud_driver_rfid_crud_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./driver-rfid-crud/driver-rfid-crud.component */ "o7Bx");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/shared.module */ "5HBU");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/shared.module */ "PCNd");











const COMPONENTS = [_driver_rfid_crud_driver_rfid_crud_component__WEBPACK_IMPORTED_MODULE_7__["DriverRfidCrudComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_3__["CreateComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]];
const COMPONENTS_DYNAMIC = [_action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ActionDialogComponent"], _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ViewDialogComponent"]];
class DriverRfidModule {
}
DriverRfidModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DriverRfidModule });
DriverRfidModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DriverRfidModule_Factory(t) { return new (t || DriverRfidModule)(); }, imports: [[
            app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _driver_rfid_routing_module__WEBPACK_IMPORTED_MODULE_2__["DriverRfidRoutingModule"],
            _fuse_shared_module__WEBPACK_IMPORTED_MODULE_8__["FuseSharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DriverRfidModule, { declarations: [_driver_rfid_crud_driver_rfid_crud_component__WEBPACK_IMPORTED_MODULE_7__["DriverRfidCrudComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_3__["CreateComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ActionDialogComponent"], _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ViewDialogComponent"]], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _driver_rfid_routing_module__WEBPACK_IMPORTED_MODULE_2__["DriverRfidRoutingModule"],
        _fuse_shared_module__WEBPACK_IMPORTED_MODULE_8__["FuseSharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DriverRfidModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [COMPONENTS, COMPONENTS_DYNAMIC],
                imports: [
                    app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _driver_rfid_routing_module__WEBPACK_IMPORTED_MODULE_2__["DriverRfidRoutingModule"],
                    _fuse_shared_module__WEBPACK_IMPORTED_MODULE_8__["FuseSharedModule"],
                ],
                entryComponents: [COMPONENTS_DYNAMIC]
            }]
    }], null, null); })();


/***/ }),

/***/ "STkw":
/*!**********************************************************************************!*\
  !*** ./src/app/main/driver/driver-rfid/action-dialog/action-dialog.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ActionDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionDialogComponent", function() { return ActionDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ActionDialogComponent {
    constructor() { }
    ngOnInit() {
    }
}
ActionDialogComponent.ɵfac = function ActionDialogComponent_Factory(t) { return new (t || ActionDialogComponent)(); };
ActionDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionDialogComponent, selectors: [["app-action-dialog"]], decls: 2, vars: 0, template: function ActionDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "action-dialog works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-action-dialog',
                templateUrl: './action-dialog.component.html',
                styleUrls: ['./action-dialog.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lZ2X":
/*!********************************************************************!*\
  !*** ./src/app/main/driver/driver-rfid/driver-rfid-crud/routes.ts ***!
  \********************************************************************/
/*! exports provided: TABS_DEMO_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABS_DEMO_ROUTES", function() { return TABS_DEMO_ROUTES; });
/* harmony import */ var app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/interceptors/auth-gaurd */ "9gca");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create/create.component */ "ALJ5");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list/list.component */ "8iSY");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



const TABS_DEMO_ROUTES = [
    { path: 'create', canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]], component: _create_create_component__WEBPACK_IMPORTED_MODULE_1__["CreateComponent"] },
    { path: 'list', canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]], component: _list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"] },
    { path: '', redirectTo: 'list', pathMatch: 'full' },
];


/***/ }),

/***/ "o7Bx":
/*!****************************************************************************************!*\
  !*** ./src/app/main/driver/driver-rfid/driver-rfid-crud/driver-rfid-crud.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DriverRfidCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverRfidCrudComponent", function() { return DriverRfidCrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/utility/utility.service */ "xb2s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive */ "EwFO");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function DriverRfidCrudComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tabLink_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", tabLink_r1.link)("active", _r3.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tabLink_r1.label, " ");
} }
const _c0 = function () { return { x: "50px" }; };
const _c1 = function (a1) { return { value: "*", params: a1 }; };
class DriverRfidCrudComponent {
    constructor(router, cdr, _utilityService) {
        this.router = router;
        this.cdr = cdr;
        this._utilityService = _utilityService;
        // Nav bar demo
        this.tabLinks = [
        // { label: 'Clients', link: 'list' },
        // { label: 'Add New', link: 'create' }
        ];
        this.tempLinks = [];
    }
    ngAfterViewInit() {
        this._utilityService.activeMenuItems$.subscribe(menuItemSelecte => {
            this.menuArray = menuItemSelecte;
            if (this.menuArray == null || this.menuArray == undefined || this.menuArray.title == null || this.menuArray.title == undefined) {
                this.menuArray = JSON.parse(localStorage.getItem('activeMenuItems'));
            }
            this.cdr.detectChanges();
        });
    }
    ngOnInit() {
        this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
        let nav_list = this.localStorage.nav_list_with_tab;
        nav_list.filter((x) => {
            if (x.id === "manageDriver") {
                this.objectData = x;
                if (this.objectData.children != null && this.objectData.children != undefined) {
                    this.objectData.children.filter((y) => {
                        if (y.id === "manageDriverRfid") {
                            this.objectChildData = y;
                            let isDefaultRoutePermeted = false;
                            if (this.objectChildData.children != null && this.objectChildData.children != undefined) {
                                this.objectChildData.children.filter((z) => {
                                    if (z.id === "list") {
                                        isDefaultRoutePermeted = true;
                                        this.tempLinks.push({ label: 'List', link: 'list' });
                                    }
                                    if (z.id === "create") {
                                        this.tempLinks.push({ label: 'Add New', link: 'create' });
                                    }
                                });
                            }
                            this.tabLinks = this.tempLinks;
                            if (!isDefaultRoutePermeted) {
                                this.router.navigate(['/driverManagement/driverRfid/crud/' + this.tempLinks[0].link]);
                            }
                        }
                    });
                }
            }
        });
    }
}
DriverRfidCrudComponent.ɵfac = function DriverRfidCrudComponent_Factory(t) { return new (t || DriverRfidCrudComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"])); };
DriverRfidCrudComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DriverRfidCrudComponent, selectors: [["app-driver-rfid-crud"]], decls: 10, vars: 6, consts: [[2, "display", "block", "width", "100%"], ["id", "", "fxLayout", "row", 1, "page-layout", "simple", "right-sidebar"], ["fusePerfectScrollbar", "", 1, "center"], ["fxLayout", "column", "fxLayoutAlign", "space-between", 1, "header", "accent", "px-24", "pt-16", "pb-0"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [1, "mat-display-1", "my-0", "my-sm-24", "welcome-message"], ["mat-tab-nav-bar", "", "aria-label", "weather navigation links"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active"], ["rla", "routerLinkActive"]], template: function DriverRfidCrudComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DriverRfidCrudComponent_a_8_Template, 3, 3, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.menuArray == null ? null : ctx.menuArray.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabLinks);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_4__["FusePerfectScrollbarDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabNav"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcml2ZXItcmZpZC1jcnVkLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DriverRfidCrudComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-driver-rfid-crud',
                templateUrl: './driver-rfid-crud.component.html',
                styleUrls: ['./driver-rfid-crud.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=app-main-driver-driver-rfid-driver-rfid-module-es2015.js.map