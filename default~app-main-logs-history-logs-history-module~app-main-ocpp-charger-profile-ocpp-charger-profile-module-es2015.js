(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-main-logs-history-logs-history-module~app-main-ocpp-charger-profile-ocpp-charger-profile-module"],{

/***/ "QgV+":
/*!**********************************************************************************!*\
  !*** ./src/app/main/ocpp-charger-profile/ocpp-charger/ocpp-charger.component.ts ***!
  \**********************************************************************************/
/*! exports provided: Log, resizeColumnSetting, OcppChargerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return Log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeColumnSetting", function() { return resizeColumnSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OcppChargerComponent", function() { return OcppChargerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var app_shared_models_charger_charger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/models/charger/charger */ "fWnM");
/* harmony import */ var app_shared_components_charger_log_shared_dialog_charger_log_shared_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/components/charger-log-shared-dialog/charger-log-shared-dialog.component */ "2jzM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var app_shared_components_change_configuration_dialog_change_configuration_shared_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/components/change-configuration-dialog/change-configuration-shared-dialog.component */ "3cJY");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var mat_table_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mat-table-filter */ "6Ugt");
/* harmony import */ var app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/utils/message.constant */ "AgqY");
/* harmony import */ var app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/utils/chLogs.message */ "XcyY");
/* harmony import */ var app_main_logs_history_ack_json_modal_ack_json_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/main/logs-history/ack-json-modal/ack-json-modal.component */ "uouI");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fuse/animations */ "PVWW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var app_shared_services_charging_station_charging_station_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/shared/services/charging-station/charging-station.service */ "HZ2m");
/* harmony import */ var app_shared_services_charger_charger_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/shared/services/charger/charger.service */ "izXn");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! app/shared/services/rfid/rfid.service */ "QtQ4");
/* harmony import */ var app_shared_services_charging_profile_charging_profile_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! app/shared/services/charging-profile/charging-profile.service */ "qrAl");
/* harmony import */ var app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! app/shared/services/utility/utility.service */ "xb2s");
/* harmony import */ var app_shared_services_setCPOStation_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! app/shared/services/setCPOStation.service */ "FV7d");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive */ "EwFO");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular-material-components/datetime-picker */ "n1FK");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");


























































const _c0 = ["sorter1"];
const _c1 = ["onePaginator"];
const _c2 = ["sorter2"];
const _c3 = ["secondPaginator"];
const _c4 = ["sorter3"];
const _c5 = ["thirdPaginator"];
function OcppChargerComponent_ng_template_10_mat_card_8_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r36.client_name, " ");
} }
function OcppChargerComponent_ng_template_10_mat_card_8_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please select client ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OcppChargerComponent_ng_template_10_mat_card_8_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r37.cpo_name, " ");
} }
function OcppChargerComponent_ng_template_10_mat_card_8_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please select CPO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OcppChargerComponent_ng_template_10_mat_card_8_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_10_mat_card_8_button_30_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r38.getAllwhithCPO(); })("click", function OcppChargerComponent_ng_template_10_mat_card_8_button_30_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r40.value = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OcppChargerComponent_ng_template_10_mat_card_8_mat_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r41.station_name, " ");
} }
function OcppChargerComponent_ng_template_10_mat_card_8_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please select charging station ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OcppChargerComponent_ng_template_10_mat_card_8_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select Client");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-autocomplete", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function OcppChargerComponent_ng_template_10_mat_card_8_Template_mat_autocomplete_optionSelected_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.onClientChange($event.option.value.client_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OcppChargerComponent_ng_template_10_mat_card_8_mat_option_10_Template, 2, 2, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, OcppChargerComponent_ng_template_10_mat_card_8_mat_error_14_Template, 2, 0, "mat-error", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Select CPO's");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-autocomplete", 44, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function OcppChargerComponent_ng_template_10_mat_card_8_Template_mat_autocomplete_optionSelected_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r44.onCPOChange($event.option.value.cpo_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, OcppChargerComponent_ng_template_10_mat_card_8_mat_option_21_Template, 2, 2, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, OcppChargerComponent_ng_template_10_mat_card_8_mat_error_25_Template, 2, 0, "mat-error", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Select Charging Station");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, OcppChargerComponent_ng_template_10_mat_card_8_button_30_Template, 3, 0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-autocomplete", 44, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function OcppChargerComponent_ng_template_10_mat_card_8_Template_mat_autocomplete_optionSelected_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r45.onStationChange($event.option.value.station_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, OcppChargerComponent_ng_template_10_mat_card_8_mat_option_33_Template, 2, 2, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, OcppChargerComponent_ng_template_10_mat_card_8_mat_error_37_Template, 2, 0, "mat-error", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r2.displayCharClient);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 14, ctx_r2.filteredOptionsCharClient));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.form.get("charClient").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r2.displayCharCPO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 16, ctx_r2.filteredOptionsCharCPO));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.form.get("charCPO").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.stationvalue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r2.displayCharStat);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 18, ctx_r2.filteredOptionsCharStat));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.form.get("charStat").invalid);
} }
function OcppChargerComponent_ng_template_10_mat_header_cell_15_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Serial No \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_10_mat_header_cell_15_span_1_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r48.changeVisibility("serialSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OcppChargerComponent_ng_template_10_mat_header_cell_15_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_10_mat_header_cell_15_mat_form_field_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r50.filterEntity.serial_no = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_10_mat_header_cell_15_mat_form_field_2_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r52.changeVisibility("serialSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r47.filterEntity.serial_no);
} }
function OcppChargerComponent_ng_template_10_mat_header_cell_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OcppChargerComponent_ng_template_10_mat_header_cell_15_span_1_Template, 4, 0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OcppChargerComponent_ng_template_10_mat_header_cell_15_mat_form_field_2_Template, 4, 1, "mat-form-field", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.serialSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.serialSearch);
} }
function OcppChargerComponent_ng_template_10_mat_cell_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", row_r53.model_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r53.serial_no, " ");
} }
function OcppChargerComponent_ng_template_10_mat_header_cell_18_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Charger Id \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_10_mat_header_cell_18_span_1_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r56.changeVisibility("nameSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OcppChargerComponent_ng_template_10_mat_header_cell_18_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_10_mat_header_cell_18_mat_form_field_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r58.filterEntity.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_10_mat_header_cell_18_mat_form_field_2_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r60.changeVisibility("nameSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r55.filterEntity.name);
} }
function OcppChargerComponent_ng_template_10_mat_header_cell_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OcppChargerComponent_ng_template_10_mat_header_cell_18_span_1_Template, 4, 0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OcppChargerComponent_ng_template_10_mat_header_cell_18_mat_form_field_2_Template, 4, 1, "mat-form-field", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.nameSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.nameSearch);
} }
function OcppChargerComponent_ng_template_10_mat_cell_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", row_r61.model_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r61.name, " ");
} }
function OcppChargerComponent_ng_template_10_mat_header_cell_21_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Station \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_10_mat_header_cell_21_span_1_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r64.changeVisibility("stationSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OcppChargerComponent_ng_template_10_mat_header_cell_21_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_10_mat_header_cell_21_mat_form_field_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r66.filterEntity.station_name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_10_mat_header_cell_21_mat_form_field_2_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r68.changeVisibility("stationSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r63.filterEntity.station_name);
} }
function OcppChargerComponent_ng_template_10_mat_header_cell_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OcppChargerComponent_ng_template_10_mat_header_cell_21_span_1_Template, 4, 0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OcppChargerComponent_ng_template_10_mat_header_cell_21_mat_form_field_2_Template, 4, 1, "mat-form-field", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.stationSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.stationSearch);
} }
function OcppChargerComponent_ng_template_10_mat_cell_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r69.station_name, " ");
} }
function OcppChargerComponent_ng_template_10_mat_header_cell_24_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Current V \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_10_mat_header_cell_24_span_1_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r72.changeVisibility("currenVerSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OcppChargerComponent_ng_template_10_mat_header_cell_24_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_10_mat_header_cell_24_mat_form_field_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r74.filterEntity.version_name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_10_mat_header_cell_24_mat_form_field_2_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r76.changeVisibility("currenVerSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r71.filterEntity.version_name);
} }
function OcppChargerComponent_ng_template_10_mat_header_cell_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OcppChargerComponent_ng_template_10_mat_header_cell_24_span_1_Template, 4, 0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OcppChargerComponent_ng_template_10_mat_header_cell_24_mat_form_field_2_Template, 4, 1, "mat-form-field", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.currenVerSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.currenVerSearch);
} }
function OcppChargerComponent_ng_template_10_mat_cell_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r77.version_name, " ");
} }
function OcppChargerComponent_ng_template_10_mat_header_cell_27_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Of Guns \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_10_mat_header_cell_27_span_1_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r80.changeVisibility("noOfGunsSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OcppChargerComponent_ng_template_10_mat_header_cell_27_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_10_mat_header_cell_27_mat_form_field_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r82.filterEntity.no_of_guns = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_10_mat_header_cell_27_mat_form_field_2_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r84.changeVisibility("noOfGunsSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r79.filterEntity.no_of_guns);
} }
function OcppChargerComponent_ng_template_10_mat_header_cell_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OcppChargerComponent_ng_template_10_mat_header_cell_27_span_1_Template, 4, 0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OcppChargerComponent_ng_template_10_mat_header_cell_27_mat_form_field_2_Template, 4, 1, "mat-form-field", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r13.noOfGunsSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.noOfGunsSearch);
} }
function OcppChargerComponent_ng_template_10_mat_cell_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r85.no_of_guns, " ");
} }
function OcppChargerComponent_ng_template_10_mat_header_cell_30_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Address \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_10_mat_header_cell_30_span_1_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r88.changeVisibility("addressSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OcppChargerComponent_ng_template_10_mat_header_cell_30_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_10_mat_header_cell_30_mat_form_field_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r90.filterEntity.address1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_10_mat_header_cell_30_mat_form_field_2_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r92.changeVisibility("addressSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r87.filterEntity.address1);
} }
function OcppChargerComponent_ng_template_10_mat_header_cell_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OcppChargerComponent_ng_template_10_mat_header_cell_30_span_1_Template, 4, 0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OcppChargerComponent_ng_template_10_mat_header_cell_30_mat_form_field_2_Template, 4, 1, "mat-form-field", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r15.addressSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.addressSearch);
} }
function OcppChargerComponent_ng_template_10_mat_cell_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r93 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r93.address1, " ");
} }
function OcppChargerComponent_ng_template_10_mat_header_cell_33_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Available \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_10_mat_header_cell_33_span_1_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r97); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r96.changeVisibility("availableSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OcppChargerComponent_ng_template_10_mat_header_cell_33_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_10_mat_header_cell_33_mat_form_field_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r98.filterEntity.availableString = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_10_mat_header_cell_33_mat_form_field_2_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r100.changeVisibility("availableSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r95.filterEntity.availableString);
} }
function OcppChargerComponent_ng_template_10_mat_header_cell_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OcppChargerComponent_ng_template_10_mat_header_cell_33_span_1_Template, 4, 0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OcppChargerComponent_ng_template_10_mat_header_cell_33_mat_form_field_2_Template, 4, 1, "mat-form-field", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r17.availableSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.availableSearch);
} }
function OcppChargerComponent_ng_template_10_mat_cell_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r101 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r101.availableString, "");
} }
function OcppChargerComponent_ng_template_10_mat_header_cell_36_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_10_mat_header_cell_36_span_1_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r104.changeVisibility("statusSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OcppChargerComponent_ng_template_10_mat_header_cell_36_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_10_mat_header_cell_36_mat_form_field_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r106.filterEntity.statusString = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_10_mat_header_cell_36_mat_form_field_2_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r108.changeVisibility("statusSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r103.filterEntity.statusString);
} }
function OcppChargerComponent_ng_template_10_mat_header_cell_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OcppChargerComponent_ng_template_10_mat_header_cell_36_span_1_Template, 4, 0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OcppChargerComponent_ng_template_10_mat_header_cell_36_mat_form_field_2_Template, 4, 1, "mat-form-field", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r19.statusSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.statusSearch);
} }
function OcppChargerComponent_ng_template_10_mat_cell_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r109 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", row_r109.status == "Y" ? "green" : "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r109.statusString, " ");
} }
function OcppChargerComponent_ng_template_10_mat_header_cell_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OcppChargerComponent_ng_template_10_mat_cell_40_Template(rf, ctx) { if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_10_mat_cell_40_Template_mat_cell_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_10_mat_cell_40_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113); const element_r110 = ctx.$implicit; const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r112.manageChargerLog(element_r110); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "assessment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OcppChargerComponent_ng_template_10_mat_header_row_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row", 81);
} }
function OcppChargerComponent_ng_template_10_mat_row_42_Template(rf, ctx) { if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-row", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_10_mat_row_42_Template_mat_row_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r116); const row_r114 = ctx.$implicit; const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r115.getChargerDetails(row_r114); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c6 = function () { return [10, 30, 50, 100]; };
function OcppChargerComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118); const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r117.tableExport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "sim_card_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_10_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118); const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r119.pdfExport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "picture_as_pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OcppChargerComponent_ng_template_10_mat_card_8_Template, 38, 20, "mat-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-table", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, OcppChargerComponent_ng_template_10_mat_header_cell_15_Template, 3, 2, "mat-header-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, OcppChargerComponent_ng_template_10_mat_cell_16_Template, 2, 2, "mat-cell", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, OcppChargerComponent_ng_template_10_mat_header_cell_18_Template, 3, 2, "mat-header-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, OcppChargerComponent_ng_template_10_mat_cell_19_Template, 2, 2, "mat-cell", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, OcppChargerComponent_ng_template_10_mat_header_cell_21_Template, 3, 2, "mat-header-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, OcppChargerComponent_ng_template_10_mat_cell_22_Template, 2, 1, "mat-cell", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, OcppChargerComponent_ng_template_10_mat_header_cell_24_Template, 3, 2, "mat-header-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, OcppChargerComponent_ng_template_10_mat_cell_25_Template, 2, 1, "mat-cell", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, OcppChargerComponent_ng_template_10_mat_header_cell_27_Template, 3, 2, "mat-header-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, OcppChargerComponent_ng_template_10_mat_cell_28_Template, 2, 1, "mat-cell", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, OcppChargerComponent_ng_template_10_mat_header_cell_30_Template, 3, 2, "mat-header-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, OcppChargerComponent_ng_template_10_mat_cell_31_Template, 2, 1, "mat-cell", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](32, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, OcppChargerComponent_ng_template_10_mat_header_cell_33_Template, 3, 2, "mat-header-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, OcppChargerComponent_ng_template_10_mat_cell_34_Template, 2, 1, "mat-cell", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](35, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, OcppChargerComponent_ng_template_10_mat_header_cell_36_Template, 3, 2, "mat-header-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, OcppChargerComponent_ng_template_10_mat_cell_37_Template, 2, 3, "mat-cell", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](38, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, OcppChargerComponent_ng_template_10_mat_header_cell_39_Template, 3, 0, "mat-header-cell", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, OcppChargerComponent_ng_template_10_mat_cell_40_Template, 3, 0, "mat-cell", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, OcppChargerComponent_ng_template_10_mat_header_row_41_Template, 1, 0, "mat-header-row", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, OcppChargerComponent_ng_template_10_mat_row_42_Template, 1, 0, "mat-row", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "mat-paginator", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.localStorage.role_code != "END");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.dataSource)("exampleEntity", ctx_r0.filterEntity)("filterType", ctx_r0.filterType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c6));
} }
const _c7 = function () { return { color: "green" }; };
function OcppChargerComponent_ng_template_12_div_24_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " public");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c7));
} }
function OcppChargerComponent_ng_template_12_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OcppChargerComponent_ng_template_12_div_24_mat_icon_1_Template, 2, 2, "mat-icon", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r120.isOnline);
} }
const _c8 = function () { return { color: "red" }; };
function OcppChargerComponent_ng_template_12_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " public_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c8));
} }
function OcppChargerComponent_ng_template_12_div_88_Template(rf, ctx) { if (rf & 1) {
    const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_88_Template_mat_list_item_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r154); const item_r152 = ctx.$implicit; const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r153.changeConnectorAction(item_r152, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r152 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "config_", item_r152.table_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r152.title, " ");
} }
function OcppChargerComponent_ng_template_12_div_99_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OcppChargerComponent_ng_template_12_div_99_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OcppChargerComponent_ng_template_12_div_99_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OcppChargerComponent_ng_template_12_div_99_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OcppChargerComponent_ng_template_12_div_99_div_19_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " public");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c7));
} }
function OcppChargerComponent_ng_template_12_div_99_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OcppChargerComponent_ng_template_12_div_99_div_19_mat_icon_1_Template, 2, 2, "mat-icon", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r161.isOnline);
} }
function OcppChargerComponent_ng_template_12_div_99_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " public_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c8));
} }
function OcppChargerComponent_ng_template_12_div_99_div_30_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r181 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r181.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r181.name, " ");
} }
const _c9 = function () { return { standalone: true }; };
function OcppChargerComponent_ng_template_12_div_99_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Availability Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_30_Template_mat_select_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r184); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return connector_r155.availabilityType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OcppChargerComponent_ng_template_12_div_99_div_30_mat_option_7_Template, 2, 2, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_30_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r184); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r185.changeAvailability(connector_r155); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Perform ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", connector_r155.availabilityType)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r164.availabileTypes);
} }
function OcppChargerComponent_ng_template_12_div_99_div_31_tr_30_Template(rf, ctx) { if (rf & 1) {
    const _r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-checkbox", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_31_tr_30_Template_mat_checkbox_click_2_listener($event) { return $event.stopPropagation(); })("change", function OcppChargerComponent_ng_template_12_div_99_div_31_tr_30_Template_mat_checkbox_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r193); const item_r189 = ctx.$implicit; const ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); $event ? ctx_r192.selection.toggle(item_r189) : null; return ctx_r192.onCheckboxChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_31_tr_30_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r193); const item_r189 = ctx.$implicit; const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r194.changeConf(item_r189, connector_r155); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Change ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r189 = ctx.$implicit;
    const k_r190 = ctx.index;
    const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r188.selection.isSelected(item_r189));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r189.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r189.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "changeconf_", k_r190, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", item_r189.action === "N");
} }
function OcppChargerComponent_ng_template_12_div_99_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_31_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r198); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r196.selectedConfiguration(connector_r155); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " GetSelected Configuration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_31_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r198); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r199.getConfiguration(connector_r155); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Get All Configuration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_31_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r198); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r201.customConfiguration(connector_r155); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Change Custom Configuration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "table", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " key ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Value ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tbody", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, OcppChargerComponent_ng_template_12_div_99_div_31_tr_30_Template, 11, 5, "tr", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_31_Template_select_ngModelChange_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r198); const ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r203.pageSize = $event; })("click", function OcppChargerComponent_ng_template_12_div_99_div_31_Template_select_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r198); const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r204.pageSizeChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " 20 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_31_Template_mat_icon_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r198); const ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r205.downClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " chevron_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Page ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-icon", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_31_Template_mat_icon_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r198); const ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r206.upClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r165.count == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](31, 5, ctx_r165.configurationData, (ctx_r165.page - 1) * ctx_r165.pageSize, (ctx_r165.page - 1) * ctx_r165.pageSize + ctx_r165.pageSize));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r165.pageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r165.page, " of ", ctx_r165.math.ceil(ctx_r165.configurationData.length / ctx_r165.pageSize), "");
} }
function OcppChargerComponent_ng_template_12_div_99_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_32_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r211); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return connector_r155.location = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Retries(Integer)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_32_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r211); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return connector_r155.retries = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Retry Interval(Integer) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_32_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r211); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return connector_r155.reteryInterval = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_32_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r211); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return connector_r155.startDatePicker = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_32_Template_button_click_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r211); const _r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); _r207.open(); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "today");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "ngx-mat-datetime-picker", 219, 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_32_Template_input_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r211); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return connector_r155.endDatePicker = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_32_Template_button_click_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r211); const _r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34); _r208.open(); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "today");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "ngx-mat-datetime-picker", 219, 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_32_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r211); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r222.diagnostics(connector_r155); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Perform ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
    const _r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);
    const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c9))("value", connector_r155.location)("ngModel", connector_r155.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c9))("value", connector_r155.retries)("ngModel", connector_r155.retries);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c9))("value", connector_r155.reteryInterval)("ngModel", connector_r155.reteryInterval);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxMatDatetimePicker", _r207)("ngModel", connector_r155.startDatePicker)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](44, _c9))("min", ctx_r166.minDate)("max", ctx_r166.maxDate)("disabled", ctx_r166.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showSpinners", ctx_r166.showSpinners)("showSeconds", ctx_r166.showSeconds)("stepHour", ctx_r166.stepHour)("stepMinute", ctx_r166.stepMinute)("stepSecond", ctx_r166.stepSecond)("touchUi", ctx_r166.touchUi)("color", ctx_r166.color)("enableMeridian", ctx_r166.enableMeridian)("disableMinute", ctx_r166.disableMinute)("hideTime", ctx_r166.hideTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxMatDatetimePicker", _r208)("ngModel", connector_r155.endDatePicker)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](45, _c9))("min", ctx_r166.minDate)("max", ctx_r166.maxDate)("disabled", ctx_r166.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showSpinners", ctx_r166.showSpinners)("showSeconds", ctx_r166.showSeconds)("stepHour", ctx_r166.stepHour)("stepMinute", ctx_r166.stepMinute)("stepSecond", ctx_r166.stepSecond)("touchUi", ctx_r166.touchUi)("color", ctx_r166.color)("enableMeridian", ctx_r166.enableMeridian)("disableMinute", ctx_r166.disableMinute)("hideTime", ctx_r166.hideTime);
} }
function OcppChargerComponent_ng_template_12_div_99_div_33_mat_radio_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const op_r230 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r230.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", op_r230.name, "");
} }
function OcppChargerComponent_ng_template_12_div_99_div_33_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Use Dual Gun Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OcppChargerComponent_ng_template_12_div_99_div_33_mat_form_field_11_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r232 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r232);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r232.rf_id_no, " ");
} }
function OcppChargerComponent_ng_template_12_div_99_div_33_mat_form_field_11_Template(rf, ctx) { if (rf & 1) {
    const _r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "OCPP Id Tag");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_33_mat_form_field_11_Template_mat_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r235); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; return connector_r155.ocppIdTag = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OcppChargerComponent_ng_template_12_div_99_div_33_mat_form_field_11_mat_option_4_Template, 2, 2, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", connector_r155.ocppIdTag)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r227.ocppIDTag);
} }
function OcppChargerComponent_ng_template_12_div_99_div_33_mat_form_field_12_Template(rf, ctx) { if (rf & 1) {
    const _r239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Otp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_33_mat_form_field_12_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r239); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; return connector_r155.otp = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c9))("value", connector_r155.otp)("ngModel", connector_r155.otp);
} }
function OcppChargerComponent_ng_template_12_div_99_div_33_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r241 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r241.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r241.name, " ");
} }
function OcppChargerComponent_ng_template_12_div_99_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r244 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Choose Id Tag Type\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-radio-group", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_33_Template_mat_radio_group_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r244); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return connector_r155.selectedTagType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OcppChargerComponent_ng_template_12_div_99_div_33_mat_radio_button_7_Template, 2, 2, "mat-radio-button", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OcppChargerComponent_ng_template_12_div_99_div_33_div_9_Template, 3, 0, "div", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OcppChargerComponent_ng_template_12_div_99_div_33_mat_form_field_11_Template, 5, 4, "mat-form-field", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, OcppChargerComponent_ng_template_12_div_99_div_33_mat_form_field_12_Template, 4, 4, "mat-form-field", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " OCPP Charger Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-select", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, OcppChargerComponent_ng_template_12_div_99_div_33_mat_option_17_Template, 2, 2, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_33_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r244); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r245.remoteStart(connector_r155); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Perform ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r167.remoteStartform);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", connector_r155.selectedTagType)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r167.IDTageType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r167.isDualGunShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", connector_r155.selectedTagType == "RFID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", connector_r155.selectedTagType == "OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r167.ocppChargerProfile);
} }
function OcppChargerComponent_ng_template_12_div_99_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Id of the Active Transaction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_34_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r250); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return connector_r155.idOfActiveTransaction = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Current Active Transaction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_34_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r250); const ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r251.currentActiveId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_34_Template_mat_icon_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r250); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r252 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r252.getCurrentActiveID(connector_r155); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " file_copy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_34_Template_mat_icon_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r250); const ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const connector_r155 = ctx_r255.$implicit; const i_r156 = ctx_r255.index; const ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r254.showProperty(connector_r155, i_r156); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " wifi_protected_setup ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_34_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r250); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r256.remoteStop(connector_r155); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Perform ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c9))("value", connector_r155.idOfActiveTransaction)("ngModel", connector_r155.idOfActiveTransaction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c9))("ngModel", ctx_r168.currentActiveId);
} }
function OcppChargerComponent_ng_template_12_div_99_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r261 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_35_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r261); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r259.unlockConnector(connector_r155); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Perform ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OcppChargerComponent_ng_template_12_div_99_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r265 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_36_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r265); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return connector_r155.uplocation = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Retries(Integer) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_36_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r265); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return connector_r155.upretries = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Retry Interval(Integer) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_36_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r265); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return connector_r155.upreteryInterval = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Retrieve Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_36_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r265); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return connector_r155.upreteriveDatePicker = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_36_Template_button_click_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r265); const _r262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); _r262.open(); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "today");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "ngx-mat-datetime-picker", 219, 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_36_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r265); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r273 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r273.updateFirmware(connector_r155); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Perform ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
    const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c9))("value", connector_r155.uplocation)("ngModel", connector_r155.uplocation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c9))("value", connector_r155.upretries)("ngModel", connector_r155.upretries);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c9))("value", connector_r155.upreteryInterval)("ngModel", connector_r155.upreteryInterval);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxMatDatetimePicker", _r262)("ngModel", connector_r155.upreteriveDatePicker)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c9))("min", ctx_r170.minDate)("max", ctx_r170.maxDate)("disabled", ctx_r170.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showSpinners", ctx_r170.showSpinners)("showSeconds", ctx_r170.showSeconds)("stepHour", ctx_r170.stepHour)("stepMinute", ctx_r170.stepMinute)("stepSecond", ctx_r170.stepSecond)("touchUi", ctx_r170.touchUi)("color", ctx_r170.color)("enableMeridian", ctx_r170.enableMeridian)("disableMinute", ctx_r170.disableMinute)("hideTime", ctx_r170.hideTime);
} }
function OcppChargerComponent_ng_template_12_div_99_div_37_mat_radio_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const op_r279 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r279.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", op_r279.name, "");
} }
function OcppChargerComponent_ng_template_12_div_99_div_37_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r280 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r280);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r280.rf_id_no, " ");
} }
function OcppChargerComponent_ng_template_12_div_99_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r283 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Choose Id Tag Type\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-radio-group", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_37_Template_mat_radio_group_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r283); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return connector_r155.selectedTagType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OcppChargerComponent_ng_template_12_div_99_div_37_mat_radio_button_7_Template, 2, 2, "mat-radio-button", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Id Tag");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-select", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_37_Template_mat_select_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r283); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return connector_r155.idTag = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, OcppChargerComponent_ng_template_12_div_99_div_37_mat_option_14_Template, 2, 2, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Expiry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_37_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r283); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return connector_r155.expiryDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_37_Template_button_click_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r283); const _r278 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); _r278.open(); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "today");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "ngx-mat-datetime-picker", 219, 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_37_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r283); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r289.reserveNow(connector_r155); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Perform ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r278 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
    const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", connector_r155.selectedTagType)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r171.IDTageType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", connector_r155.idTag)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r171.ocppIDTag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxMatDatetimePicker", _r278)("ngModel", connector_r155.expiryDate)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c9))("min", ctx_r171.minDate)("max", ctx_r171.maxDate)("disabled", ctx_r171.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showSpinners", ctx_r171.showSpinners)("showSeconds", ctx_r171.showSeconds)("stepHour", ctx_r171.stepHour)("stepMinute", ctx_r171.stepMinute)("stepSecond", ctx_r171.stepSecond)("touchUi", ctx_r171.touchUi)("color", ctx_r171.color)("enableMeridian", ctx_r171.enableMeridian)("disableMinute", ctx_r171.disableMinute)("hideTime", ctx_r171.hideTime);
} }
function OcppChargerComponent_ng_template_12_div_99_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r294 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Id of the Cancel Transaction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_38_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r294); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return connector_r155.idOfCancelTransaction = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Current Cancel Transaction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_38_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r294); const ctx_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r295.currentCancelId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_38_Template_mat_icon_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r294); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r296.getCurrentCancelID(connector_r155); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " file_copy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_38_Template_mat_icon_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r294); const ctx_r299 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const connector_r155 = ctx_r299.$implicit; const i_r156 = ctx_r299.index; const ctx_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r298.showProperty(connector_r155, i_r156); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " wifi_protected_setup ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_38_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r294); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r300 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r300.cancelTransaction(connector_r155); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Perform ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c9))("value", connector_r155.idOfCancelTransaction)("ngModel", connector_r155.idOfCancelTransaction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c9))("ngModel", ctx_r172.currentCancelId);
} }
function OcppChargerComponent_ng_template_12_div_99_div_39_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r305 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r305);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r305.name, " ");
} }
function OcppChargerComponent_ng_template_12_div_99_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r308 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Vendor Id(String)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_39_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r308); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return connector_r155.vendorID = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Message Id(String) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_39_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r308); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return connector_r155.dataMessage = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-autocomplete", 246, 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, OcppChargerComponent_ng_template_12_div_99_div_39_mat_option_13_Template, 2, 2, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "expand_more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Data Tag");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_39_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r308); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return connector_r155.dataTag = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_39_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r308); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r313 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r313.dataTransferconnector(connector_r155); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Perform ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r303 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r173.dataTriggerGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", connector_r155.vendorID)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", connector_r155.dataMessage)("matAutocomplete", _r303);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r173.displayDataChildCmd);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 9, ctx_r173.filteredOptionsDataChildCmd));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", connector_r155.dataTag)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c9));
} }
function OcppChargerComponent_ng_template_12_div_99_div_40_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r319 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r319);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r319, " ");
} }
function OcppChargerComponent_ng_template_12_div_99_div_40_mat_radio_button_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const op_r320 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r320.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", op_r320.name, "");
} }
function OcppChargerComponent_ng_template_12_div_99_div_40_tr_35_Template(rf, ctx) { if (rf & 1) {
    const _r325 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-checkbox", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_40_tr_35_Template_mat_checkbox_click_2_listener($event) { return $event.stopPropagation(); })("change", function OcppChargerComponent_ng_template_12_div_99_div_40_tr_35_Template_mat_checkbox_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r325); const item_r321 = ctx.$implicit; const ctx_r324 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); $event ? ctx_r324.selection.toggle(item_r321) : null; return ctx_r324.onCheckboxChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r321 = ctx.$implicit;
    const ctx_r318 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r318.selection.isSelected(item_r321));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r321.rf_id_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 4, item_r321.expiry_date, "dd-MM-yyyy h:mm a"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 7, item_r321.created_date, "dd-MM-yyyy h:mm a"), " ");
} }
function OcppChargerComponent_ng_template_12_div_99_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r328 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "List Version (Integer) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_40_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r328); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return connector_r155.listVersion = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " local_library");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Update Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_40_Template_mat_select_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r328); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return connector_r155.updateType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, OcppChargerComponent_ng_template_12_div_99_div_40_mat_option_13_Template, 2, 2, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Selected Id Tag Type\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-radio-group", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_40_Template_mat_radio_group_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r328); const ctx_r331 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r331.locationListTagType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, OcppChargerComponent_ng_template_12_div_99_div_40_mat_radio_button_19_Template, 2, 2, "mat-radio-button", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "table", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " RFID TAG ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Expiry Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Created Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, OcppChargerComponent_ng_template_12_div_99_div_40_tr_35_Template, 12, 10, "tr", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "select", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_40_Template_select_ngModelChange_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r328); const ctx_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r332.pageSendSize = $event; })("click", function OcppChargerComponent_ng_template_12_div_99_div_40_Template_select_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r328); const ctx_r333 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r333.setPageSize(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " 20 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " 30 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_40_Template_button_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r328); const ctx_r334 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r334.curPage = ctx_r334.curPage - 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-icon", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "chevron_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_40_Template_button_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r328); const ctx_r335 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r335.curPage = ctx_r335.curPage + 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-icon", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_40_Template_button_click_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r328); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r336 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r336.sendLocalList(connector_r155); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Perform ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r174.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", connector_r155.listVersion)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", connector_r155.updateType)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r174.updateTypeList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r174.locationListTagType)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r174.localListIDTageType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](36, 16, ctx_r174.ocppIDTag, ctx_r174.curPage * ctx_r174.pageSendSize - ctx_r174.pageSendSize, ctx_r174.curPage * ctx_r174.pageSendSize));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r174.pageSendSize)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r174.curPage == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Page ", ctx_r174.curPage, " of ", ctx_r174.numberOfPages(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r174.curPage >= ctx_r174.ocppIDTag.length / ctx_r174.pageSendSize);
} }
function OcppChargerComponent_ng_template_12_div_99_div_41_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r341 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r341);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r341.name, " ");
} }
function OcppChargerComponent_ng_template_12_div_99_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r344 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Trigger Message ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_41_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r344); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return connector_r155.triggerMessage = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-autocomplete", 246, 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OcppChargerComponent_ng_template_12_div_99_div_41_mat_option_9_Template, 2, 2, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "expand_more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_41_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r344); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r345 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r345.dataTriggerMessage(connector_r155, ctx_r345.triggerMessageGroup); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Perform ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r339 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r175.triggerMessageGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", connector_r155.triggerMessage)("matAutocomplete", _r339);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r175.displayTriggMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, ctx_r175.filteredOptionsDataTriggMsg));
} }
function OcppChargerComponent_ng_template_12_div_99_div_42_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r350 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r350);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r350.value, " ");
} }
function OcppChargerComponent_ng_template_12_div_99_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r353 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Connector ID (Integer) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Duration (Integer) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Charging Rate Unit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_42_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r353); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return connector_r155.chargingRateUnit = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-autocomplete", 246, 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, OcppChargerComponent_ng_template_12_div_99_div_42_mat_option_18_Template, 2, 2, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "expand_more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_42_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r353); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r354 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r354.getCompositeSchedule(connector_r155); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Perform ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r348 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
    const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r176.getCompositeScheduleGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", connector_r155.chargingRateUnit)("matAutocomplete", _r348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r176.displayCharRateUnit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 5, ctx_r176.filteredOptionsCharRateUnit));
} }
function OcppChargerComponent_ng_template_12_div_99_div_43_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r359 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r359);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r359.value, " ");
} }
function OcppChargerComponent_ng_template_12_div_99_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r362 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ID (Integer) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Connector ID (Integer) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Availability Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_43_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r362); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return connector_r155.availabilityType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-autocomplete", 246, 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, OcppChargerComponent_ng_template_12_div_99_div_43_mat_option_18_Template, 2, 2, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "expand_more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Stack Level (Integer) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_43_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r362); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r363 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r363.clearChargingProfile(connector_r155); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Perform ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r357 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
    const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r177.clearChargingProfileGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", connector_r155.availabilityType)("matAutocomplete", _r357);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r177.displayAvailabilityType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 5, ctx_r177.filteredOptionsCharProfPurp));
} }
function OcppChargerComponent_ng_template_12_div_99_div_44_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r368 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r368);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r368.charging_profile_name, " ");
} }
function OcppChargerComponent_ng_template_12_div_99_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r371 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Connector ID(Integer) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "OCPP Charger Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_div_99_div_44_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r371); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return connector_r155.oCPPChargingProfile = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-autocomplete", 246, 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, OcppChargerComponent_ng_template_12_div_99_div_44_mat_option_13_Template, 2, 2, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "expand_more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_div_44_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r371); const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r372 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r372.setChargingProfile(connector_r155); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Perform ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r366 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const connector_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r178.setChargingProfileGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", connector_r155.oCPPChargingProfile)("matAutocomplete", _r366);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r178.displayOccpCharProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 5, ctx_r178.filteredOptionsCharProfile));
} }
function OcppChargerComponent_ng_template_12_div_99_Template(rf, ctx) { if (rf & 1) {
    const _r376 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OcppChargerComponent_ng_template_12_div_99_div_5_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OcppChargerComponent_ng_template_12_div_99_div_6_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OcppChargerComponent_ng_template_12_div_99_div_7_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OcppChargerComponent_ng_template_12_div_99_div_8_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, OcppChargerComponent_ng_template_12_div_99_div_19_Template, 2, 1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, OcppChargerComponent_ng_template_12_div_99_ng_template_20_Template, 2, 2, "ng-template", null, 98, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r376); const connector_r155 = ctx.$implicit; const i_r156 = ctx.index; const ctx_r375 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r375.showProperty(connector_r155, i_r156); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "i", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_div_99_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r376); const connector_r155 = ctx.$implicit; const i_r156 = ctx.index; const ctx_r377 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r377.hideProperty(connector_r155, i_r156); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "i", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "keyboard_arrow_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, OcppChargerComponent_ng_template_12_div_99_div_30_Template, 14, 4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, OcppChargerComponent_ng_template_12_div_99_div_31_Template, 52, 9, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, OcppChargerComponent_ng_template_12_div_99_div_32_Template, 41, 46, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, OcppChargerComponent_ng_template_12_div_99_div_33_Template, 24, 11, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, OcppChargerComponent_ng_template_12_div_99_div_34_Template, 21, 7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, OcppChargerComponent_ng_template_12_div_99_div_35_Template, 7, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, OcppChargerComponent_ng_template_12_div_99_div_36_Template, 31, 29, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, OcppChargerComponent_ng_template_12_div_99_div_37_Template, 30, 25, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, OcppChargerComponent_ng_template_12_div_99_div_38_Template, 22, 7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, OcppChargerComponent_ng_template_12_div_99_div_39_Template, 28, 13, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, OcppChargerComponent_ng_template_12_div_99_div_40_Template, 63, 24, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, OcppChargerComponent_ng_template_12_div_99_div_41_Template, 19, 7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, OcppChargerComponent_ng_template_12_div_99_div_42_Template, 28, 7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, OcppChargerComponent_ng_template_12_div_99_div_43_Template, 32, 7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, OcppChargerComponent_ng_template_12_div_99_div_44_Template, 23, 7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const connector_r155 = ctx.$implicit;
    const i_r156 = ctx.index;
    const _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
    const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r126.isOnline && connector_r155.current_status == "Preparing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r126.isOnline && (connector_r155.current_status == "Charging" || connector_r155.current_status == "Available" || connector_r155.current_status == "Finishing"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r126.isOnline && connector_r155.current_status == "Faulted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r126.isOnline || connector_r155.current_status == null || connector_r155.current_status == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Connector ", connector_r155.connector_no, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", connector_r155.connector_type_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r126.isOnline ? connector_r155 == null ? null : connector_r155.current_status : "Offline", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r126.isOnline)("ngIfElse", _r162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "down", i_r156, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "up", i_r156, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", i_r156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r126.connectorAction == "Change Availability");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r126.connectorAction == "Manage Configurations" && ctx_r126.selectedConnectorId == connector_r155.connector_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r126.connectorAction == "Get Diagnostics");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r126.connectorAction == "Remote Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r126.connectorAction == "Remote Stop");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r126.connectorAction == "Unlock Connector");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r126.connectorAction == "Update Firmware");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r126.connectorAction == "Reserve Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r126.connectorAction == "Cancel Reservation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r126.connectorAction == "Data Transfer" && ctx_r126.selectedConnectorId == connector_r155.connector_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r126.connectorAction == "Send Local List");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r126.connectorAction == "Trigger Message" && ctx_r126.selectedConnectorId == connector_r155.connector_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r126.connectorAction == "Get Composite Schedule" && ctx_r126.selectedConnectorId == connector_r155.connector_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r126.connectorAction == "Clear Charging Profile" && ctx_r126.selectedConnectorId == connector_r155.connector_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r126.connectorAction == "Set Charging Profile" && ctx_r126.selectedConnectorId == connector_r155.connector_no);
} }
function OcppChargerComponent_ng_template_12_mat_form_field_128_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const interval_r379 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", interval_r379.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", interval_r379.viewValue, " ");
} }
function OcppChargerComponent_ng_template_12_mat_form_field_128_Template(rf, ctx) { if (rf & 1) {
    const _r381 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Set Interval");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_mat_form_field_128_Template_mat_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r381); const ctx_r380 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r380.selectedInterval = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OcppChargerComponent_ng_template_12_mat_form_field_128_mat_option_4_Template, 2, 2, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r130.selectedInterval)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r130.intervals);
} }
function OcppChargerComponent_ng_template_12_mat_header_cell_152_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r385 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Action \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_mat_header_cell_152_span_1_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r385); const ctx_r384 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r384.changeLogsVisibility("actionSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OcppChargerComponent_ng_template_12_mat_header_cell_152_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r387 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_mat_header_cell_152_mat_form_field_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r387); const ctx_r386 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r386.filterLogEntity.action = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_mat_header_cell_152_mat_form_field_2_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r387); const ctx_r388 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r388.changeLogsVisibility("actionSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r383 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r383.filterLogEntity.action);
} }
const _c10 = function () { return { bottom: false, right: true, top: false, left: true }; };
function OcppChargerComponent_ng_template_12_mat_header_cell_152_Template(rf, ctx) { if (rf & 1) {
    const _r390 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resizeEnd", function OcppChargerComponent_ng_template_12_mat_header_cell_152_Template_mat_header_cell_resizeEnd_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r390); const ctx_r389 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r389.onResizeEnd($event, "action"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OcppChargerComponent_ng_template_12_mat_header_cell_152_span_1_Template, 4, 0, "span", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OcppChargerComponent_ng_template_12_mat_header_cell_152_mat_form_field_2_Template, 4, 1, "mat-form-field", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resizeColumn", true)("enableGhostResize", true)("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r133.actionSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r133.actionSearch);
} }
function OcppChargerComponent_ng_template_12_mat_cell_153_Template(rf, ctx) { if (rf & 1) {
    const _r394 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_mat_cell_153_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r394); const i_r392 = ctx.index; const ctx_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r393.selectElementContents("action", i_r392); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r391 = ctx.$implicit;
    const i_r392 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "action" + i_r392);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r391.action);
} }
function OcppChargerComponent_ng_template_12_mat_header_cell_155_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r398 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Request \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_mat_header_cell_155_span_1_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r398); const ctx_r397 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r397.changeLogsVisibility("requestSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OcppChargerComponent_ng_template_12_mat_header_cell_155_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r400 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_mat_header_cell_155_mat_form_field_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r400); const ctx_r399 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r399.filterLogEntity.charger_request = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_mat_header_cell_155_mat_form_field_2_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r400); const ctx_r401 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r401.changeLogsVisibility("requestSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r396 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r396.filterLogEntity.charger_request);
} }
function OcppChargerComponent_ng_template_12_mat_header_cell_155_Template(rf, ctx) { if (rf & 1) {
    const _r403 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resizeEnd", function OcppChargerComponent_ng_template_12_mat_header_cell_155_Template_mat_header_cell_resizeEnd_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r403); const ctx_r402 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r402.onResizeEnd($event, "charger_request"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OcppChargerComponent_ng_template_12_mat_header_cell_155_span_1_Template, 4, 0, "span", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OcppChargerComponent_ng_template_12_mat_header_cell_155_mat_form_field_2_Template, 4, 1, "mat-form-field", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resizeColumn", true)("enableGhostResize", true)("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r135.requestSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r135.requestSearch);
} }
function OcppChargerComponent_ng_template_12_mat_cell_156_Template(rf, ctx) { if (rf & 1) {
    const _r407 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_mat_cell_156_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r407); const i_r405 = ctx.index; const ctx_r406 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r406.selectElementContents("request", i_r405); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r404 = ctx.$implicit;
    const i_r405 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "request" + i_r405);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r404.charger_request, "");
} }
function OcppChargerComponent_ng_template_12_mat_header_cell_158_Template(rf, ctx) { if (rf & 1) {
    const _r409 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resizeEnd", function OcppChargerComponent_ng_template_12_mat_header_cell_158_Template_mat_header_cell_resizeEnd_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r409); const ctx_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r408.onResizeEnd($event, "request"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Request \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resizeColumn", true)("enableGhostResize", true)("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c10));
} }
function OcppChargerComponent_ng_template_12_mat_cell_159_Template(rf, ctx) { if (rf & 1) {
    const _r412 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_mat_cell_159_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r412); const row_r410 = ctx.$implicit; const ctx_r411 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r411.openAckJsonDialog(row_r410, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OcppChargerComponent_ng_template_12_mat_header_cell_161_Template(rf, ctx) { if (rf & 1) {
    const _r414 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resizeEnd", function OcppChargerComponent_ng_template_12_mat_header_cell_161_Template_mat_header_cell_resizeEnd_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r414); const ctx_r413 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r413.onResizeEnd($event, "response"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Response \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resizeColumn", true)("enableGhostResize", true)("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c10));
} }
function OcppChargerComponent_ng_template_12_mat_cell_162_Template(rf, ctx) { if (rf & 1) {
    const _r417 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_mat_cell_162_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r417); const row_r415 = ctx.$implicit; const ctx_r416 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r416.openAckJsonDialog(row_r415, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OcppChargerComponent_ng_template_12_mat_header_cell_164_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r421 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Response \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_mat_header_cell_164_span_1_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r421); const ctx_r420 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r420.changeLogsVisibility("responseSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OcppChargerComponent_ng_template_12_mat_header_cell_164_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r423 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_mat_header_cell_164_mat_form_field_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r423); const ctx_r422 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r422.filterLogEntity.charger_response = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_mat_header_cell_164_mat_form_field_2_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r423); const ctx_r424 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r424.changeLogsVisibility("responseSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r419 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r419.filterLogEntity.charger_response);
} }
function OcppChargerComponent_ng_template_12_mat_header_cell_164_Template(rf, ctx) { if (rf & 1) {
    const _r426 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resizeEnd", function OcppChargerComponent_ng_template_12_mat_header_cell_164_Template_mat_header_cell_resizeEnd_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r426); const ctx_r425 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r425.onResizeEnd($event, "charger_response"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OcppChargerComponent_ng_template_12_mat_header_cell_164_span_1_Template, 4, 0, "span", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OcppChargerComponent_ng_template_12_mat_header_cell_164_mat_form_field_2_Template, 4, 1, "mat-form-field", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resizeColumn", true)("enableGhostResize", true)("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r141.responseSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r141.responseSearch);
} }
function OcppChargerComponent_ng_template_12_mat_cell_165_Template(rf, ctx) { if (rf & 1) {
    const _r430 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_mat_cell_165_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r430); const i_r428 = ctx.index; const ctx_r429 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r429.selectElementContents("response", i_r428); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r427 = ctx.$implicit;
    const i_r428 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "response" + i_r428);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r427.charger_response, "");
} }
function OcppChargerComponent_ng_template_12_mat_header_cell_167_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r434 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Request Date \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_mat_header_cell_167_span_1_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r434); const ctx_r433 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r433.changeLogsVisibility("requestDSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OcppChargerComponent_ng_template_12_mat_header_cell_167_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_mat_header_cell_167_mat_form_field_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r436); const ctx_r435 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r435.filterLogEntity.request_date_string = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_mat_header_cell_167_mat_form_field_2_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r436); const ctx_r437 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r437.changeLogsVisibility("requestDSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r432 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r432.filterLogEntity.request_date_string);
} }
function OcppChargerComponent_ng_template_12_mat_header_cell_167_Template(rf, ctx) { if (rf & 1) {
    const _r439 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resizeEnd", function OcppChargerComponent_ng_template_12_mat_header_cell_167_Template_mat_header_cell_resizeEnd_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r439); const ctx_r438 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r438.onResizeEnd($event, "request_date"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OcppChargerComponent_ng_template_12_mat_header_cell_167_span_1_Template, 4, 0, "span", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OcppChargerComponent_ng_template_12_mat_header_cell_167_mat_form_field_2_Template, 4, 1, "mat-form-field", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resizeColumn", true)("enableGhostResize", true)("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r143.requestDSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r143.requestDSearch);
} }
function OcppChargerComponent_ng_template_12_mat_cell_168_Template(rf, ctx) { if (rf & 1) {
    const _r443 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_mat_cell_168_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r443); const i_r441 = ctx.index; const ctx_r442 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r442.selectElementContents("date", i_r441); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r440 = ctx.$implicit;
    const i_r441 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "date" + i_r441);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r440.request_date_string);
} }
function OcppChargerComponent_ng_template_12_mat_header_cell_170_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r447 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Response Date \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_mat_header_cell_170_span_1_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r447); const ctx_r446 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r446.changeLogsVisibility("responseDSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OcppChargerComponent_ng_template_12_mat_header_cell_170_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r449 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OcppChargerComponent_ng_template_12_mat_header_cell_170_mat_form_field_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r449); const ctx_r448 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r448.filterLogEntity.response_date_string = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_mat_header_cell_170_mat_form_field_2_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r449); const ctx_r450 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r450.changeLogsVisibility("responseDSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r445 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r445.filterLogEntity.response_date_string);
} }
function OcppChargerComponent_ng_template_12_mat_header_cell_170_Template(rf, ctx) { if (rf & 1) {
    const _r452 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resizeEnd", function OcppChargerComponent_ng_template_12_mat_header_cell_170_Template_mat_header_cell_resizeEnd_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r452); const ctx_r451 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r451.onResizeEnd($event, "response_date"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OcppChargerComponent_ng_template_12_mat_header_cell_170_span_1_Template, 4, 0, "span", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OcppChargerComponent_ng_template_12_mat_header_cell_170_mat_form_field_2_Template, 4, 1, "mat-form-field", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resizeColumn", true)("enableGhostResize", true)("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r145.responseDSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r145.responseDSearch);
} }
function OcppChargerComponent_ng_template_12_mat_cell_171_Template(rf, ctx) { if (rf & 1) {
    const _r456 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_mat_cell_171_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r456); const i_r454 = ctx.index; const ctx_r455 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r455.selectElementContents("resdate", i_r454); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r453 = ctx.$implicit;
    const i_r454 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "resdate" + i_r454);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r453.response_date_string, "");
} }
function OcppChargerComponent_ng_template_12_mat_header_row_172_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row", 81);
} }
function OcppChargerComponent_ng_template_12_mat_header_row_173_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row", 286);
} }
function OcppChargerComponent_ng_template_12_div_174_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-spinner", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c11 = function () { return [50, 100, 200, 500]; };
function OcppChargerComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r459 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Charger Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " ev_station");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Charger Code:\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Station:\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Status:\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, OcppChargerComponent_ng_template_12_div_24_Template, 2, 1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, OcppChargerComponent_ng_template_12_ng_template_25_Template, 3, 2, "ng-template", null, 98, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Last Ping Date(UTC) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-card", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Quick Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card-content", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r459); const ctx_r458 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r458.clearCache(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " clear_all");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Clear Cache ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Accepted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-icon", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " autorenew");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Reset\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-icon", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " arrow_drop_down ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-menu", 110, 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_Template_button_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r459); const ctx_r460 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r460.resetHard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Hard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_Template_button_click_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r459); const ctx_r461 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r461.resetSoft(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Soft ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Accepted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](70, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_Template_button_click_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r459); const ctx_r462 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r462.getLocalListVersion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-icon", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Get Local List Version ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Awaiting Response ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-sidenav-container", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-sidenav", 115, 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-toolbar", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "OCPP Operation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-list", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, OcppChargerComponent_ng_template_12_div_88_Template, 3, 2, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-sidenav-content", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-toolbar", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h6", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Connector Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-icon", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_Template_mat_icon_click_95_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r459); const ctx_r463 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r463.manageChargerLog(ctx_r463.chargerDetailsObj); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " assessment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, OcppChargerComponent_ng_template_12_div_99_Template, 45, 27, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "form", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-form-field", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "From Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "input", 134, 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "mat-datepicker-toggle", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "mat-datepicker", 137, 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-form-field", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "To Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "input", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "mat-datepicker-toggle", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "mat-datepicker", 137, 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "mat-icon", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_Template_mat_icon_click_122_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r459); const ctx_r464 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r464.getChargerLog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "filter_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "mat-slide-toggle", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OcppChargerComponent_ng_template_12_Template_mat_slide_toggle_change_125_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r459); const ctx_r465 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r465.onToggleChange($event.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Auto Refresh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](128, OcppChargerComponent_ng_template_12_mat_form_field_128_Template, 5, 4, "mat-form-field", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "button", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_Template_button_click_135_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r459); const ctx_r466 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r466.logsExport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "downloading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " \u00A0\u00A0Export Excel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "button", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_Template_button_click_139_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r459); const ctx_r467 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r467.newWindowOpen(ctx_r467.chargerDetailsObj); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "downloading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " \u00A0\u00A0Open New Window ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "button", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OcppChargerComponent_ng_template_12_Template_button_click_143_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r459); const ctx_r468 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r468.getChargerLog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "downloading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " \u00A0\u00A0Refresh Logs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "mat-table", 151, 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](151, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](152, OcppChargerComponent_ng_template_12_mat_header_cell_152_Template, 3, 6, "mat-header-cell", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](153, OcppChargerComponent_ng_template_12_mat_cell_153_Template, 3, 2, "mat-cell", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](154, 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](155, OcppChargerComponent_ng_template_12_mat_header_cell_155_Template, 3, 6, "mat-header-cell", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](156, OcppChargerComponent_ng_template_12_mat_cell_156_Template, 3, 2, "mat-cell", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](157, 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](158, OcppChargerComponent_ng_template_12_mat_header_cell_158_Template, 3, 4, "mat-header-cell", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](159, OcppChargerComponent_ng_template_12_mat_cell_159_Template, 3, 0, "mat-cell", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](160, 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](161, OcppChargerComponent_ng_template_12_mat_header_cell_161_Template, 3, 4, "mat-header-cell", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](162, OcppChargerComponent_ng_template_12_mat_cell_162_Template, 3, 0, "mat-cell", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](163, 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](164, OcppChargerComponent_ng_template_12_mat_header_cell_164_Template, 3, 6, "mat-header-cell", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](165, OcppChargerComponent_ng_template_12_mat_cell_165_Template, 3, 2, "mat-cell", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](166, 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](167, OcppChargerComponent_ng_template_12_mat_header_cell_167_Template, 3, 6, "mat-header-cell", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](168, OcppChargerComponent_ng_template_12_mat_cell_168_Template, 3, 2, "mat-cell", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](169, 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](170, OcppChargerComponent_ng_template_12_mat_header_cell_170_Template, 3, 6, "mat-header-cell", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](171, OcppChargerComponent_ng_template_12_mat_cell_171_Template, 3, 2, "mat-cell", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](172, OcppChargerComponent_ng_template_12_mat_header_row_172_Template, 1, 0, "mat-header-row", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](173, OcppChargerComponent_ng_template_12_mat_header_row_173_Template, 1, 0, "mat-header-row", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](174, OcppChargerComponent_ng_template_12_div_174_Template, 2, 0, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "mat-paginator", 37, 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](61);
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](113);
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](120);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.chargerDetailsObj == null ? null : ctx_r1.chargerDetailsObj.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.chargerDetailsObj == null ? null : ctx_r1.chargerDetailsObj.station_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isOnline)("ngIfElse", _r121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](31, 29, ctx_r1.newHeartBeatDate, "dd-MM-yyyy h:mm a"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](51, 32, ctx_r1.clearCacheDate, "short"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](70, 35, ctx_r1.resetDate, "short"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx_r1.isSidenavOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.chargingMenus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.chargerDetailsObj == null ? null : ctx_r1.chargerDetailsObj.connector_data)("ngForTrackBy", ctx_r1.trackById);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.chargerLogsform);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r128)("max", ctx_r1.currDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r129)("min", !!ctx_r1.form.value.fromDate ? ctx_r1.form.value.fromDate._d : "2020-01-01")("max", ctx_r1.currDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1.autoLogChacked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.autoLogChacked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r1.dataLogSource)("exampleEntity", ctx_r1.filterLogEntity)("filterType", ctx_r1.filterMainType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedLogColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedLogColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c11));
} }
const _c12 = function () { return { x: "50px" }; };
const _c13 = function (a1) { return { value: "*", params: a1 }; };
class Log {
}
class resizeColumnSetting {
}
function autocompleteObjectValidator() {
    return (control) => {
        if (typeof control.value === 'string') {
            return { 'invalidAutocompleteObject': { value: control.value } };
        }
        return null; /* valid option selected */
    };
}
class OcppChargerComponent {
    constructor(cdr, route, dialog, snackBar, chargingStationService, chargerService, fb, router, datepipe, rfidService, datePipe, chargingProfileService, _utilityService, setCpoStationService) {
        this.cdr = cdr;
        this.route = route;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.chargingStationService = chargingStationService;
        this.chargerService = chargerService;
        this.fb = fb;
        this.router = router;
        this.datepipe = datepipe;
        this.rfidService = rfidService;
        this.datePipe = datePipe;
        this.chargingProfileService = chargingProfileService;
        this._utilityService = _utilityService;
        this.setCpoStationService = setCpoStationService;
        this.isSidenavOpen = false;
        this.head = [['Serial No', 'Charger Display ID', 'Station', 'Current Version', 'No of Guns', 'Address', 'Available', 'Status']];
        this.displayedColumns = ['serial_no', 'name', 'station_name',
            'version_name', 'no_of_guns', 'Address', 'is_available', 'status', 'action'];
        this.displayedReservationColumns = ['Reservation ID', 'Charger Code', 'Connector ID', 'ID Tag', 'Type', 'Expriy Date', 'Status', 'Reservation Status', 'Unique ID', 'Action'];
        this.displayedConfigurationColumns = ['key', 'cValue', 'action'];
        this.selectedIndex = 0;
        this.isFirstTab = true;
        this.connectorCounts = [1, 2, 3];
        this.availabilityTypeList = ['Select', 'Inoperative', 'Operative'];
        this.updateTypeList = ['Select', 'Differential', 'Full'];
        this.actionClicked = false;
        this.mousetop = 0;
        this.mouseleft = 0;
        this.selectedConnectorId = 0;
        this.isOnline = false;
        this.isOffline = false;
        this.dataTransferMessage = [
            { child_command: 'GET_S_DNS', name: 'Get S Dns' },
            { child_command: 'GET_S_PORT', name: 'Get S Port' },
            { child_command: 'GET_S_HSURL', name: 'Get S Hsurl' },
            { child_command: 'GET_S_WIFISSID', name: 'Get S Wifissid' },
            { child_command: 'GET_S_WIFIPASS', name: 'Get S Wifipass' },
            { child_command: 'SET_S_DNS', name: 'Set S Dns' },
            { child_command: 'SET_S_PORT', name: 'Set S Port' },
            { child_command: 'SET_S_HSURL', name: 'Set S Hsurl' },
            { child_command: 'SET_S_WIFISSID', name: 'Set S Wifissid' },
            { child_command: 'SET_S_WIFIPASS', name: 'Set S Wifipass' },
            { child_command: 'CC_CONFIG', name: 'Cc Config' }
        ];
        this.triggerMessages = [
            { message: 'BOOT_NOTIFICATION', name: 'Boot Notification' },
            { message: 'STATUS_NOTIFICATION', name: 'Status Notification' },
            { message: 'DIAGNOSTICSSTATUS_NOTIFICATION', name: 'Diagnostics Status Notification' },
            { message: 'HEART_BEAT', name: 'Heart Beat' },
            { message: 'METER_VALUES', name: 'Meter Values' },
            { message: 'FIRMWARESTATUS_NOTIFICATION', name: 'Firmware Status Notifcation' }
        ];
        this.configurationData = [];
        this.disabled = false;
        this.showSpinners = true;
        this.showSeconds = true;
        this.touchUi = false;
        this.enableMeridian = false;
        this.stepHour = 1;
        this.stepMinute = 1;
        this.stepSecond = 1;
        this.pageSize = 5;
        this.occpPageSize = 10;
        this.page = 1;
        this.occpPage = 1;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["SelectionModel"](true, []);
        this.count = 0;
        this.isButtonEnable = false;
        this.IDTageType = [
            { "name": "RFID", ID: "D1" },
        ];
        this.selectedTagType = this.IDTageType[0].name;
        this.localListIDTageType = [
            { "name": "RFID", ID: "D1" },
            { "name": "OTP", ID: "D2" },
            { "name": "None(Clear List)", ID: "D3" }
        ];
        this.locationListTagType = this.localListIDTageType[0].name;
        this.serialSearch = false;
        this.nameSearch = false;
        this.stationSearch = false;
        this.currenVerSearch = false;
        this.noOfGunsSearch = false;
        this.addressSearch = false;
        this.availableSearch = false;
        this.statusSearch = false;
        this.alive = true;
        this.actionSearch = false;
        this.requestSearch = false;
        this.responseSearch = false;
        this.requestDSearch = false;
        this.responseDSearch = false;
        this.displayedLogColumns = ['action', 'charger_request', 'charger_response', 'request_date', 'response_date'];
        //logs : Log[];
        this.tempDate = new Date();
        this.autoLogChacked = true;
        this.intervals = [
            // { value: 5000, viewValue: '5 Second' },
            // { value: 10000, viewValue: '10 Second' },
            // { value: 15000, viewValue: '15 Second' },
            // { value: 30000, viewValue: '30 Second' },
            { value: 60000, viewValue: '1 Minutes' },
            { value: 300000, viewValue: '5 Minutes' },
            { value: 600000, viewValue: '10 Minutes' },
        ];
        this.selectedInterval = this.intervals[0].value;
        this.isLoading = true;
        this.isDualGunShow = false;
        //objectData: any;
        //chargerListTab: boolean = false;
        //secondTab: boolean = false;
        this.pageSendSize = 10;
        this.curPage = 1;
        this.pageChange = 10;
        this.routerUrl = router.routerState.snapshot.url;
        this.form = this.fb.group({
            charClient: ['', autocompleteObjectValidator()],
            charCPO: ['', autocompleteObjectValidator()],
            charStat: ['', autocompleteObjectValidator()],
            is_dual_gun: ['']
        });
        this.chargerLogsform = this.fb.group({
            toDate: [new Date()],
            fromDate: [new Date()],
        });
        this.triggerMessageGroup = this.fb.group({
            triggerMessage: ['', autocompleteObjectValidator()],
            connector_id: ['']
        });
        this.dataTriggerGroup = this.fb.group({
            dataMessage: ['', autocompleteObjectValidator()],
            connector_id: ['']
        });
        this.setChargingProfileGroup = this.fb.group({
            oCPPChargingProfile: ['', autocompleteObjectValidator()],
            connectorId: ['']
        });
        this.getCompositeScheduleGroup = this.fb.group({
            chargingRateUnit: ['', autocompleteObjectValidator()],
            connectorId: [''],
            duration: ['']
        });
        this.clearChargingProfileGroup = this.fb.group({
            availabilityType: ['', autocompleteObjectValidator()],
            connectorId: [''],
            Id: [''],
            stackLevel: ['']
        });
        this.remoteStartform = this.fb.group({
            is_dual_gun: ['']
        });
        this.math = Math;
        this.ocppIDTag = [];
    }
    ngOnInit() {
        this.initialize();
        this.defaultColumnSize();
        // this.checkforDynamicTabPermission();
        //this.localStorage = JSON.parse( localStorage.getItem('userDetails'));
        //this.stationDetails = JSON.parse( localStorage.getItem('station'));
        this.filteredOptionsDataTriggMsg = this.triggerMessageGroup.controls.triggerMessage.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(name => name ? this._filterTriggMsg(name) : this.triggerMessages));
        this.filteredOptionsDataChildCmd = this.dataTriggerGroup.controls.dataMessage.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(name => name ? this._filterDataChildCmd(name) : this.dataTransferMessage));
        this.filterEntity = new app_shared_models_charger_charger__WEBPACK_IMPORTED_MODULE_3__["Charger"]();
        this.filterType = mat_table_filter__WEBPACK_IMPORTED_MODULE_9__["MatTableFilter"].ANYWHERE;
        this.filterLogEntity = new Log();
        // this.dataSource.paginator = this.onePaginator;
        //  this.dataSource.sort = this.sorter1;
        //this.dataSourceConfiguration.paginator = this.secondPaginator;
        // this.dataSourceConfiguration.sort = this.sorter2;
        // s
    }
    defaultColumnSize() {
        this.resizeColumnSettings = [];
        for (var i = 0; i < this.displayedColumns.length; i++) {
            var columnSetting = new resizeColumnSetting();
            columnSetting.coulmnName = this.displayedColumns[i];
            columnSetting.csswidth = 0;
            this.resizeColumnSettings.push(columnSetting);
        }
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
    displayTriggMsg(triggerMessages) {
        return triggerMessages && triggerMessages.name ? triggerMessages.name : '';
    }
    _filterTriggMsg(name) {
        const filterValue = name.toLowerCase();
        return this.triggerMessages.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
    }
    displayDataChildCmd(dataTransferMessage) {
        return dataTransferMessage && dataTransferMessage.name ? dataTransferMessage.name : '';
    }
    _filterDataChildCmd(name) {
        const filterCMDValue = name.toLowerCase();
        return this.dataTransferMessage.filter(option => option.name.toLowerCase().indexOf(filterCMDValue) === 0);
    }
    initialize() {
        this.connectorAction = "";
        this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
        this.clientCpoStaDetails = JSON.parse(localStorage.getItem('clientCpoStaDetails'));
        this.getClients();
        if (this.localStorage.role_code == 'SC' || this.localStorage.role_code == 'SO') {
            this.form.get('charClient').disable();
            this.form.get('charCPO').disable();
        }
        else if (this.localStorage.role_code == 'CPO' || this.localStorage.role_code == 'ADMIN') {
            this.form.get('charClient').disable();
        }
        this.testMap = new Map();
        this.dynamicChargerList();
        this.filterEntity = new app_shared_models_charger_charger__WEBPACK_IMPORTED_MODULE_3__["Charger"]();
        this.filterMainType = mat_table_filter__WEBPACK_IMPORTED_MODULE_9__["MatTableFilter"].ANYWHERE;
        this.filterType = mat_table_filter__WEBPACK_IMPORTED_MODULE_9__["MatTableFilter"].ANYWHERE;
        //this.getAvailability();
        //this.stationDetails = JSON.parse( localStorage.getItem('station'));
        //this.filteredOptions();
        // const id = this.route.snapshot.params['id'];
        //  if(this.chargingStationService.dashboardIndex == 1){
        //   this.analyticsIndex = 1
        //   this.selectedIndex = this.analyticsIndex;
        //     this.dynamicChargerList();
        //   }else{
        //   this.selectedIndex = 0;
        //   }
        this.getChargingRateUnit();
        this.getChargingProgilePurpose();
        this.getOCPPChargerProfile();
    }
    // dynamicChargerList() {
    //   let params = {
    //     cpo_id: "",
    //     station_id: ""
    //   }
    //   this.chargerService.getDynamicChargersCW(this.localStorage.userId, params).subscribe((data: any) => {
    //     // this.logs = data;
    //     this.chargerLogs = data.data;
    //     for (var i = 0; i < this.chargerLogs.length; i++) {
    //       if (this.chargerLogs[i].status == 'N') {
    //         this.chargerLogs[i].statusString = 'Inactive';
    //       } else {
    //         this.chargerLogs[i].statusString = 'Active';
    //       }
    //       if (this.chargerLogs[i].is_available = 0) {
    //         this.chargerLogs[i].availableString = "No"
    //       } else {
    //         this.chargerLogs[i].availableString = "Yes"
    //       }
    //     }
    //     if (this.chargingStationService.dashboardIndex == 1) {
    //       this.directMoveDashboard(this.chargingStationService.chargerDashboard)
    //     }
    //     this.dataSource = new MatTableDataSource(this.chargerLogs);
    //     this.dataSource.paginator = this.onePaginator;
    //     this.dataSource.sort = this.sorter1;
    //   }, (err) => {
    //     this.snackBar.open(err, 'Dismiss', { duration: 3000 });
    //   })
    // }
    // getChargerbyCPO(id) {
    //   this.cpo_id_value = id;
    //   let params = {
    //     cpo_id: id,
    //     station_id: ""
    //   }
    //   this.chargerService.getDynamicChargersCW(this.localStorage.userId, params).subscribe((data: any) => {
    //     //
    //     //this.logs = data;
    //     this.chargerLogs = data.data;
    //     for (var i = 0; i < this.chargerLogs.length; i++) {
    //       if (this.chargerLogs[i].status == 'N') {
    //         this.chargerLogs[i].statusString = 'Inactive';
    //       } else {
    //         this.chargerLogs[i].statusString = 'Active';
    //       }
    //       if (this.chargerLogs[i].is_available = 0) {
    //         this.chargerLogs[i].availableString = "No"
    //       } else {
    //         this.chargerLogs[i].availableString = "Yes"
    //       }
    //     }
    //     this.dataSource = new MatTableDataSource(this.chargerLogs);
    //     this.dataSource.paginator = this.onePaginator;
    //     this.dataSource.sort = this.sorter1;
    //     //;
    //     // this.snackBar.open(data.message, 'Dismiss', { duration: 3000 });
    //   }, (err) => {
    //     this.snackBar.open(err, 'Dismiss', { duration: 3000 });
    //   })
    // }
    dynamicChargerList() {
        this.chargerService.getChargersDynamicFilterCCS(this.localStorage.userId, this.selectedClient_id, this.selectedCpo_id, this.selectedStation_id).subscribe((data) => {
            this.chargerLogs = data.data;
            for (var i = 0; i < this.chargerLogs.length; i++) {
                if (this.chargerLogs[i].status == 'N') {
                    this.chargerLogs[i].statusString = 'Inactive';
                }
                else {
                    this.chargerLogs[i].statusString = 'Active';
                }
                if (this.chargerLogs[i].is_available = 0) {
                    this.chargerLogs[i].availableString = "No";
                }
                else {
                    this.chargerLogs[i].availableString = "Yes";
                }
            }
            if (this.chargingStationService.dashboardIndex == 1) {
                this.directMoveDashboard(this.chargingStationService.chargerDashboard);
            }
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.chargerLogs);
            this.dataSource.paginator = this.onePaginator;
            this.dataSource.sort = this.sorter1;
            // this.snackBar.open(data.message, 'Dismiss', { duration: 3000 });
        }, (err) => {
            this.snackBar.open(err, 'Dismiss', { duration: 3000 });
        });
        // this.chargerService.getChargersByMappedStationId(id).subscribe(
        //   (data: any) => {
        //     //
        //     this.chargerLogs = data.data;
        //     for(var i=0; i < this.chargerLogs.length;i++){
        //       if(this.chargerLogs[i].status == 'N'){
        //         this.chargerLogs[i].statusString = 'Inactive';
        //       }else{
        //         this.chargerLogs[i].statusString = 'Active';
        //       }
        //       if(this.chargerLogs[i].is_available = 0){
        //         this.chargerLogs[i].availableString = "No"
        //       }else{
        //         this.chargerLogs[i].availableString = "Yes"
        //       }
        //     }
        //     this.dataSource = new MatTableDataSource(this.chargerLogs);
        //     this.dataSource.paginator = this.onePaginator;
        //     this.dataSource.sort = this.sorter1;
        //   }, (err) => {
        //   }
        // )
    }
    openDialogChargerDetails(data) {
        event.stopPropagation();
        let params = {
            data: data
        };
        const dialogRef = this.dialog.open(app_shared_components_charger_log_shared_dialog_charger_log_shared_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ChargerLogSharedDialogComponent"], {
            width: '1800px',
            height: '900px',
            data: params,
            autoFocus: false,
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(result => {
            //this.getChargersByMappedStationId(this.stationDetails.id);
        });
    }
    manageChargerLog(data) {
        //localStorage.setItem('station', JSON.stringify( data));
        this.chargerService.chargerDetail = data;
        // const url = this.router.serializeUrl(
        //   this.router.createUrlTree(['/logsandHistory/viewChargerLog'])
        // );
        this.router.navigate([]).then(result => { window.open(`/#/logsandHistory/viewChargerLog/${data.name}`, '_blank'); });
        // window.open(url, '_blank');
        //  this.router.navigate([]).then(result => {  window.open(url, '_blank'); });
        //this.router.navigate(['/logsandHistory/viewChargerLog']);
    }
    newWindowOpen(data) {
        this.chargerService.chargerDetail = data;
        this.router.navigate([]).then(result => { window.open(`/#/logsandHistory/viewChargerLog/${data.name}`, '_blank'); });
    }
    //startChargingStation(data){
    //let params = {
    // command:'START_CHARGING',
    // charger_id : data.name,
    // charger_sr_no : data.serial_no,
    //connector : 1
    //}
    //this.chargingStationService.startChargingStation(params).subscribe((data:any)=>{
    //    //
    //    this.logs = data;
    //     //;
    //     this.snackBar.open(data.message, 'Dismiss', { duration: 3000 });
    //},(err)=>{
    //   this.snackBar.open(err, 'Dismiss', { duration: 3000 });
    // })
    //}
    //stopChargingStation(data){
    // let params = {
    // command:'STOP_CHARGING',
    //   charger_id : data.name,
    //   charger_sr_no : data.serial_no,
    //  connector : 1
    // }
    // this.chargingStationService.startChargingStation(params).subscribe((data:any)=>{
    //   //
    //   this.logs = data;
    //    //;
    //this.snackBar.open(data.message, 'Dismiss', { duration: 3000 });
    // },(err)=>{
    //    this.snackBar.open(err, 'Dismiss', { duration: 3000 });
    //  })
    //}
    // filteredOptions() {
    //   this.filteredOptionsCharClient = this.form.controls.charClient.valueChanges
    //     .pipe(
    //       startWith(''),
    //       map(value => typeof value === 'string' ? value : value.client_name),
    //       map(name => name ? this._filterCharClient(name) : this.clientList)
    //     );
    //   this.filteredOptionsCharCPO = this.form.controls.charCPO.valueChanges
    //     .pipe(
    //       startWith(''),
    //       map(value => typeof value === 'string' ? value : value.cpo_name),
    //       map(name => name ? this._filterCharCPO(name) : this.cpoList)
    //     );
    //   this.filteredOptionsCharStat = this.form.controls.charStat.valueChanges
    //     .pipe(
    //       startWith(''),
    //       map(value => typeof value === 'string' ? value : value.station_name),
    //       map(name => name ? this._filterCharStat(name) : this.station)
    //     );
    // }
    onTabChange(event) {
        setTimeout(() => {
            switch (event.index) {
                case 0:
                    this.dataSource.paginator ? this.dataSource.paginator = this.onePaginator : null;
                    break;
                case 1:
                // this.dataSourceConfiguration.paginator ? this.dataSourceConfiguration.paginator = this.secondPaginator : null;
            }
        });
        switch (event.index) {
            case 0:
                // this.dataSource.paginator ? this.dataSource.paginator = this.onePaginator : null;
                break;
            case 1:
                var configurationTempData = [...this.configurationData];
                this.dataSourceConfiguration = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](configurationTempData);
                //this.dataSourceConfiguration.paginator ? this.dataSourceConfiguration.paginator = this.secondPaginator : null;
                this.dataSourceConfiguration.paginator = this.secondPaginator;
                this.dataSourceConfiguration.sort = this.sorter2;
                this.setDefaultConnectorAction();
        }
        this.selectedIndex = event.index;
    }
    getChargerDetails(row) {
        this.selectedIndex = 1;
        this.chargingStationService.dashboardIndex = 0;
        this.isFirstTab = false;
        this.chargerDetailsObj = row;
        this.getChargingMenu();
        this.getAvailability();
        this.getHeartBeat();
        this.setLogInterval();
        this.getOCPPTag(this.chargerDetailsObj.cpo_id);
        this.stationDetails = this.chargerDetailsObj.station_id;
        this.chargerID = this.chargerDetailsObj.name;
        this.getChargerLog();
        this.getChargerConnectorStatus();
        // this.getActiveTransactionId();
    }
    toggleMenu() {
        this.show = this.show == false ? true : false;
    }
    changeConnectorAction(selectedAction, event) {
        this.connectorAction = selectedAction.title;
        //var traget = event.target || event.srcElement || event.currentTraget;
        var actionElement = document.getElementById('config_' + selectedAction.table_id);
        actionElement.style.background = '#00acc1';
        actionElement.style.color = "#ffffff";
        actionElement.style.borderRadius = "8px";
        if (this.pastActionElement != null && this.pastActionElement != undefined) {
            this.pastActionElement.style.background = '#fff';
            this.pastActionElement.style.color = "#000000";
        }
        this.pastActionElement = actionElement;
        // if (this.connectorAction == 3) {
        //   // this.getAllConfigurationData();
        // }
        // if (this.connectorAction == 6) {
        // }
    }
    showProperty(connector, index) {
        this.isSidenavOpen = true;
        this.selectedConnectorId = connector.connector_no;
        this.currentActiveId = '';
        this.getActiveTransactionId(connector);
        this.getCancelTransactionId(connector);
        if (this.connectorAction == "Manage Configurations") {
            this.getConfiguration(connector);
        }
        var down = 'down' + index;
        var up = 'up' + index;
        for (var d = 0; d < this.chargerDetailsObj.connector_data.length; d++) {
            var firstDiv = document.getElementById('' + d);
            down = 'down' + d;
            up = 'up' + d;
            var downBtn = document.getElementById(down);
            var upBtn = document.getElementById(up);
            if (index == d) {
                firstDiv.style.display = 'block';
                downBtn.style.display = 'none';
                upBtn.style.display = 'block';
            }
            else {
                firstDiv.style.display = 'none';
                downBtn.style.display = 'block';
                upBtn.style.display = 'none';
            }
        }
        this.page = 1;
        this.occpPage = 1;
        //this.getAllConfigurationData();
    }
    hideProperty(connector, index) {
        var d = index;
        var firstDiv = document.getElementById(d);
        firstDiv.style.display = 'none';
        var down = 'down' + d;
        var up = 'up' + d;
        var downBtn = document.getElementById(down);
        downBtn.style.display = 'block';
        var upBtn = document.getElementById(up);
        upBtn.style.display = 'none';
    }
    changeAvailability(connector) {
        if (connector.availabilityType != null) {
            let params = {
                "command": "CHANGE_AVAILABILITY",
                "charger_id": this.chargerDetailsObj.name,
                "charger_sr_no": this.chargerDetailsObj.serial_no,
                "connector": connector.connector_no,
                "type": connector.availabilityType
            };
            this.chargingStationService.changeAvailability(params).subscribe((data) => {
                //
                if (data.status) {
                    this.logs = data;
                    this.snackBar.open(data.message, 'Dismiss', { duration: 3000 });
                }
                this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorMessage, 'Dismiss', { duration: 3000 });
                //;
            }, (err) => {
                this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].chargerAlreadyStarted, 'Dismiss', { duration: 3000 });
            });
        }
        else {
            this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorAvailabilty, 'Dismiss', { duration: 3000 });
            return;
        }
    }
    remoteStart(connector) {
        var formValues = this.remoteStartform.value;
        if (this.stationDetails != null && this.stationDetails != undefined) {
            let tagType;
            if (connector.selectedTagType == 'OTP') {
                tagType = 'OTP';
            }
            else {
                tagType = 'RF_ID';
            }
            if (connector.ocppIdTag != null) {
                let params = {
                    command: 'START_CHARGING',
                    charger_id: this.chargerDetailsObj.name,
                    charger_sr_no: this.chargerDetailsObj.serial_no,
                    connector: formValues.is_dual_gun == false ? +connector.connector_no : 0,
                    id_tag: connector.ocppIdTag.rf_id_no,
                    id_tag_type: tagType,
                    user_id: this.localStorage.userId,
                    command_source: "web",
                    device_id: null,
                    app_version: null,
                    os_version: null,
                    station_id: this.stationDetails,
                    mobile_no: null,
                    vehicle_id: null,
                    vehicle_number: null,
                    booking_id: " "
                };
                this.chargingStationService.startChargingStation(params).subscribe((data) => {
                    if (data.status) {
                        this.logs = data;
                        connector.ocppIDTag = "";
                        this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].chargerStarted, 'Dismiss', { duration: 3000 });
                    }
                    else {
                        // this.snackBar.open(ChLogsMessageConstant.errorMessage, 'Dismiss', { duration: 3000 });
                        this.snackBar.open(data.message, 'Dismiss', { duration: 3000 });
                        connector.ocppIDTag = "";
                    }
                }, (err) => {
                    this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorMessage, 'Dismiss', { duration: 3000 });
                });
            }
            else {
                if (connector.otp != null) {
                    let params = {
                        command: 'START_CHARGING',
                        charger_id: this.chargerDetailsObj.name,
                        charger_sr_no: this.chargerDetailsObj.serial_no,
                        connector: formValues.is_dual_gun == false ? +connector.connector_no : 0,
                        id_tag: connector.otp,
                        id_tag_type: tagType,
                        user_id: this.localStorage.userId,
                        command_source: "web",
                        device_id: null,
                        app_version: null,
                        os_version: null,
                        station_id: this.stationDetails,
                        mobile_no: null,
                        vehicle_id: null,
                        vehicle_number: null
                    };
                    this.chargingStationService.startChargingStation(params).subscribe((data) => {
                        if (data.status) {
                            this.logs = data;
                            connector.ocppIDTag = "";
                            this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].chargerStarted, 'Dismiss', { duration: 3000 });
                        }
                        else {
                            this.snackBar.open(data.message, 'Dismiss', { duration: 3000 });
                            connector.ocppIDTag = "";
                        }
                    }, (err) => {
                        this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorMessage, 'Dismiss', { duration: 3000 });
                    });
                }
                else {
                    this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorOCPPIdTag, 'Dismiss', { duration: 3000 });
                    return;
                }
            }
        }
        else {
            this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].stationNotFound, 'Dismiss', { duration: 3000 });
        }
    }
    cancelTransaction(connector) {
    }
    remoteStop(connector) {
        if (this.stationDetails != null && this.stationDetails != undefined) {
            if (connector.idOfActiveTransaction != null) {
                let params = {
                    command: 'STOP_CHARGING',
                    charger_id: this.chargerDetailsObj.name,
                    charger_sr_no: this.chargerDetailsObj.serial_no,
                    connector: +connector.connector_no,
                    //transaction_id:connector.idOfActiveTransaction.transaction_id //13357
                    transaction_id: connector.idOfActiveTransaction,
                    user_id: this.localStorage.userId,
                    command_source: "web",
                    device_id: null,
                    app_version: null,
                    os_version: null,
                    station_id: this.stationDetails,
                    mobile_no: null,
                    vehicle_id: null,
                    vehicle_number: null
                };
                this.chargingStationService.stopChargingStation(params).subscribe((data) => {
                    //
                    this.logs = data;
                    //;
                    if (data.status) {
                        this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].chargerStope, 'Dismiss', { duration: 3000 });
                    }
                }, (err) => {
                    this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorMessage, 'Dismiss', { duration: 3000 });
                });
            }
            else {
                this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorActiveTransactionID, 'Dismiss', { duration: 3000 });
                return;
            }
        }
        else {
            this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].stationNotFound, 'Dismiss', { duration: 3000 });
        }
    }
    unlockConnector(connector) {
        let params = {
            command: 'UNLOCK_CONNECTOR',
            charger_id: this.chargerDetailsObj.name,
            charger_sr_no: this.chargerDetailsObj.serial_no,
            connector: connector.connector_no
        };
        this.chargingStationService.unlockConnector(params).subscribe((data) => {
            //
            if (data.status) {
                this.logs = data;
                //;
                this.snackBar.open(data.message, 'Dismiss', { duration: 3000 });
            }
            else {
                this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].chargerOffline, 'Dismiss', { duration: 3000 });
            }
        }, (err) => {
            this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorMessage, 'Dismiss', { duration: 3000 });
        });
    }
    dataTransferconnector(connector) {
        if (connector.vendorID != null) {
            if (connector.dataMessage != null) {
                if (connector.dataTag != null) {
                    let params = {
                        command: 'DATA_TRANSFER',
                        child_command: connector.dataMessage.child_command,
                        charger_id: this.chargerDetailsObj.name,
                        charger_sr_no: this.chargerDetailsObj.serial_no,
                        connector: connector.connector_no,
                        vendor_id: connector.vendorID,
                        data: connector.dataTag //"10AC77010000000"//"cmsappstaging.Spark EV.in"
                    };
                    this.chargingStationService.dataTransfer(params).subscribe((data) => {
                        //
                        if (data.status) {
                            this.logs = data;
                            //;
                            this.snackBar.open(data.message, 'Dismiss', { duration: 3000 });
                        }
                        this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].chargerOffline, 'Dismiss', { duration: 3000 });
                    }, (err) => {
                        this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorMessage, 'Dismiss', { duration: 3000 });
                    });
                }
                else {
                    this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorDataTag, 'Dismiss', { duration: 3000 });
                }
            }
            else {
                this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorMessageID, 'Dismiss', { duration: 3000 });
            }
        }
        else {
            this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorVendorID, 'Dismiss', { duration: 3000 });
        }
    }
    actionDialog(event) {
        this.actionClicked = true;
        ;
        var xPosition = event.clientX;
        var yPosition = event.clientY;
        event.stopPropagation();
    }
    closeEvent() {
        this.actionClicked = false;
    }
    clearCache() {
        let params = {
            "command": "CLEAR_CACHE",
            charger_id: this.chargerDetailsObj.name,
            charger_sr_no: this.chargerDetailsObj.serial_no,
            connector: 1
        };
        this.chargingStationService.clearCache(params).subscribe((data) => {
            //
            //;
            if (data.status) {
                this.logs = data;
                this.clearCacheDate = new Date();
                this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].commandMessage, 'Dismiss', { duration: 3000 });
            }
            else {
                this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].chargerOffline, 'Dismiss', { duration: 3000 });
            }
        }, (err) => {
            this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorMessage, 'Dismiss', { duration: 3000 });
        });
    }
    resetSoft() {
        let params = {
            "command": "RESET_SOFT",
            charger_id: this.chargerDetailsObj.name,
            charger_sr_no: this.chargerDetailsObj.serial_no,
            connector: 1
        };
        this.chargingStationService.reset(params).subscribe((data) => {
            //
            if (data.status) {
                this.logs = data;
                this.resetDate = new Date();
                //;
                this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].commandMessage, 'Dismiss', { duration: 3000 });
            }
            else {
                this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].chargerOffline, 'Dismiss', { duration: 3000 });
            }
        }, (err) => {
            this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorMessage, 'Dismiss', { duration: 3000 });
        });
    }
    resetHard() {
        let params = {
            "command": "RESET_HARD",
            charger_id: this.chargerDetailsObj.name,
            charger_sr_no: this.chargerDetailsObj.serial_no,
            connector: 1
        };
        this.chargingStationService.reset(params).subscribe((data) => {
            //
            if (data.status) {
                this.logs = data;
                this.resetDate = new Date();
                //;
                this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].commandMessage, 'Dismiss', { duration: 3000 });
            }
            else {
                this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].chargerOffline, 'Dismiss', { duration: 3000 });
            }
        }, (err) => {
            this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorMessage, 'Dismiss', { duration: 3000 });
        });
    }
    getLocalListVersion() {
        let params = {
            "command": "GET_LOCAL_LIST_VERSION",
            charger_id: this.chargerDetailsObj.name,
            charger_sr_no: this.chargerDetailsObj.serial_no,
            connector: 1
        };
        this.chargingStationService.getLocalListVersion(params).subscribe((data) => {
            //
            if (data.status) {
                this.logs = data;
                //;
                this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].commandMessage, 'Dismiss', { duration: 3000 });
            }
            else {
                this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].chargerOffline, 'Dismiss', { duration: 3000 });
            }
        }, (err) => {
            this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorMessage, 'Dismiss', { duration: 3000 });
        });
    }
    getAvailability() {
        this.chargingStationService.getAvailabilityType().subscribe((data) => {
            //
            this.availabileTypes = data;
            //;
        }, (err) => { });
    }
    getChargingMenu() {
        let nav_list = this.localStorage.nav_list_with_tab;
        nav_list.filter((x) => {
            if (x.id === "ocppChargerProfile") {
                this.chargingMenus = x.children;
            }
        });
        // this.chargingStationService.getChargingMenus().subscribe((data: any) => {
        //   this.chargingMenus = data;
        //   //this.snackBar.open(data.message, 'Dismiss', { duration: 3000 });
        // }, (err) => {
        //   this.snackBar.open(ChLogsMessageConstant.errorMessage, 'Dismiss', { duration: 3000 });
        // })
    }
    diagnostics(connector) {
        if (connector.location != null) {
            if (connector.retries != null && connector.retries >= 0) {
                if (connector.reteryInterval != null && connector.reteryInterval >= 0) {
                    if (connector.startDatePicker != null) {
                        if (connector.endDatePicker != null) {
                            let cst_start_date = this.datepipe.transform(connector.startDatePicker, "yyyy-MM-dd'T'HH:mm:ss'Z'");
                            let cst_end_date = this.datepipe.transform(connector.endDatePicker, "yyyy-MM-dd'T'HH:mm:ss'Z'");
                            let params = {
                                command: "GET_DIAGNOSTICS",
                                charger_id: this.chargerDetailsObj.name,
                                charger_sr_no: this.chargerDetailsObj.serial_no,
                                connector: connector.connector_no,
                                location: connector.location,
                                retries: connector.retries,
                                retryInterval: connector.reteryInterval,
                                startTime: cst_start_date,
                                stopTime: cst_end_date
                            };
                            this.chargingStationService.getdiagnostics(params).subscribe((data) => {
                                //
                                if (data.status) {
                                    this.logs = data;
                                    //;
                                    this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].commandMessage, 'Dismiss', { duration: 3000 });
                                }
                                else {
                                    this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].chargerOffline, 'Dismiss', { duration: 3000 });
                                }
                            }, (err) => {
                                this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorMessage, 'Dismiss', { duration: 3000 });
                            });
                        }
                        else {
                            this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorEndTime, 'Dismiss', { duration: 3000 });
                        }
                    }
                    else {
                        this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorStartTime, 'Dismiss', { duration: 3000 });
                    }
                }
                else {
                    this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorRetryInterval, 'Dismiss', { duration: 3000 });
                }
            }
            else {
                this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorProvideRetrive, 'Dismiss', { duration: 3000 });
            }
        }
        else {
            this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorLocation, 'Dismiss', { duration: 3000 });
        }
    }
    updateFirmware(connector) {
        if (connector.uplocation != null) {
            if (connector.upretries != null && connector.upretries >= 0) {
                if (connector.upreteryInterval != null && connector.connector_no >= 0) {
                    if (connector.upreteriveDatePicker != null) {
                        let cst_reterive_date = this.datepipe.transform(connector.upreteriveDatePicker, "yyyy-MM-dd'T'HH:mm:ss'Z'");
                        let params = {
                            "command": "UPDATE_FIRMWARE",
                            charger_id: this.chargerDetailsObj.name,
                            charger_sr_no: this.chargerDetailsObj.serial_no,
                            connector: connector.connector_no,
                            "location": connector.uplocation,
                            "retries": connector.upretries,
                            "retryInterval": connector.upreteryInterval,
                            "retrieve_date": cst_reterive_date
                        };
                        this.chargingStationService.getUpdateFirmware(params).subscribe((data) => {
                            //
                            if (data.status) {
                                this.logs = data;
                                //;
                                this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].commandMessage, 'Dismiss', { duration: 3000 });
                            }
                            else {
                                this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].chargerOffline, 'Dismiss', { duration: 3000 });
                            }
                        }, (err) => {
                            this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorMessage, 'Dismiss', { duration: 3000 });
                        });
                    }
                    else {
                        this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorRetriveDateTime, 'Dismiss', { duration: 3000 });
                    }
                }
                else {
                    this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorRetryInterval, 'Dismiss', { duration: 3000 });
                }
            }
            else {
                this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorProvideRetrive, 'Dismiss', { duration: 3000 });
            }
        }
        else {
            this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorLocation, 'Dismiss', { duration: 3000 });
        }
    }
    dataTriggerMessage(connector, form) {
        if (connector.triggerMessage == null) {
            this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorTriggerMessage, 'Dismiss', { duration: 3000 });
        }
        else {
            let params = {
                command: connector.triggerMessage.message,
                charger_id: this.chargerDetailsObj.name,
                charger_sr_no: this.chargerDetailsObj.serial_no,
                connector: connector.connector_no
            };
            this.chargingStationService.getDataTriggerMessage(params).subscribe((data) => {
                //
                if (data.status) {
                    this.logs = data;
                    //;
                    this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].commandMessage, 'Dismiss', { duration: 3000 });
                }
                else {
                    this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].chargerOffline, 'Dismiss', { duration: 3000 });
                }
            }, (err) => {
                this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorMessage, 'Dismiss', { duration: 3000 });
            });
        }
    }
    selectedConfiguration(connector) {
        // this.configurationData = this.configurationData.filter( g=> !g.checked)
        if (this.selection.hasValue()) {
            for (var i = 0; i < this.selection.selected.length; i++) {
                var confItem = this.selection.selected[i];
                // if(this.selection.selected[i].newValue != null && this.selection.selected[i].newValue != undefined && this.selection.selected[i].newValue.length >0 ){
                //   let params = {
                //     command: "CHANGE_CONFIGURATION", 
                //     charger_id : this.chargerDetailsObj.name,
                //     charger_sr_no : this.chargerDetailsObj.serial_no,
                //     connector : connector.connector_no,
                //     value : confItem.newValue,
                //     key: confItem.key
                //   }
                //   this.chargingStationService.getChangeConfiguration(params).subscribe((data:any)=>{
                //     //
                //       this.logs = data;
                //       //;
                //   this.snackBar.open(data.message, 'Dismiss', { duration: 3000 });
                //   },(err)=>{
                //      this.snackBar.open(err, 'Dismiss', { duration: 3000 });
                //   })
                // }
                // else{
                let params = {
                    command: "CHANGE_CONFIGURATION",
                    charger_id: this.chargerDetailsObj.name,
                    charger_sr_no: this.chargerDetailsObj.serial_no,
                    connector: connector.connector_no,
                    value: confItem.cValue,
                    key: confItem.key
                };
                this.chargingStationService.getChangeConfiguration(params).subscribe((data) => {
                    //
                    //;
                    if (data.status) {
                        this.logs = data;
                        this.getConfiguration(connector);
                        this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].commandMessage, 'Dismiss', { duration: 3000 });
                    }
                    else {
                        this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].chargerOffline, 'Dismiss', { duration: 3000 });
                    }
                }, (err) => {
                    this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorMessage, 'Dismiss', { duration: 3000 });
                });
            }
        }
        else {
            this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorAtlestKey, 'Dismiss', { duration: 3000 });
        }
    }
    getAllConfiguration(connector) {
        let params = {
            command: "CHANGE_CONFIGURATION",
            charger_id: this.chargerDetailsObj.name,
            charger_sr_no: this.chargerDetailsObj.serial_no,
            connector: connector.connector_no,
            value: '',
            key: ''
        };
        this.chargingStationService.getChangeConfiguration(params).subscribe((data) => {
            //
            if (data.status) {
                this.logs = data;
                //;
                this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].commandMessage, 'Dismiss', { duration: 3000 });
            }
            else {
                this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].chargerOffline, 'Dismiss', { duration: 3000 });
            }
        }, (err) => {
            this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorMessage, 'Dismiss', { duration: 3000 });
        });
    }
    customConfiguration(connector) {
        var item = { isConfigEdit: false };
        let params = {
            data: item,
            connector: connector,
            chargerObj: this.chargerDetailsObj
        };
        const dialogRef = this.dialog.open(app_shared_components_change_configuration_dialog_change_configuration_shared_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ChangeConfigurationSharedDialogComponent"], {
            width: '700px',
            height: '410px',
            data: params,
            autoFocus: false,
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result != null && result != undefined) {
                let params = {
                    command: "CHANGE_CONFIGURATION",
                    charger_id: this.chargerDetailsObj.name,
                    charger_sr_no: this.chargerDetailsObj.serial_no,
                    connector: connector.connector_no,
                    value: result.cValue,
                    key: result.key
                };
                this.chargingStationService.getChangeConfiguration(params).subscribe((data) => {
                    //
                    if (data.status) {
                        this.logs = data;
                        this.getConfiguration(connector);
                        //;
                        this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].commandMessage, 'Dismiss', { duration: 3000 });
                    }
                    else {
                        this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].chargerOffline, 'Dismiss', { duration: 3000 });
                    }
                }, (err) => {
                    this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorMessage, 'Dismiss', { duration: 3000 });
                });
            }
            else {
                return;
            }
            //this.getChargersByMappedStationId(this.stationDetails.id);
        });
    }
    reserveNow(connector) {
        if (connector.idTag != null) {
            if (connector.expiryDate != null) {
                let cst_expiry_date = this.datepipe.transform(connector.expiryDate, "yyyy-MM-dd'T'HH:mm:ss'Z'");
                let params = {
                    command: "RESERVE_NOW",
                    charger_id: this.chargerDetailsObj.name,
                    charger_sr_no: this.chargerDetailsObj.serial_no,
                    connector: connector.connector_no,
                    id_tag: connector.idTag,
                    expiry_date: cst_expiry_date //"2020-12-03 14:56:53"
                };
                this.chargingStationService.getChangeConfiguration(params).subscribe((data) => {
                    //
                    if (data.status) {
                        this.logs = data;
                        //;
                        this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].commandMessage, 'Dismiss', { duration: 3000 });
                    }
                    else {
                        this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].chargerOffline, 'Dismiss', { duration: 3000 });
                    }
                }, (err) => {
                    this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorMessage, 'Dismiss', { duration: 3000 });
                });
            }
            else {
                this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorExpiryDate, 'Dismiss', { duration: 3000 });
            }
        }
        else {
            this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorIDTag, 'Dismiss', { duration: 3000 });
        }
    }
    replacer(key, value) {
        if (value instanceof Map) {
            return {
                dataType: 'Map',
                value: Array.from(value.entries()),
            };
        }
        else {
            return value;
        }
    }
    reviver(key, value) {
        if (typeof value === 'object' && value !== null) {
            if (value.dataType === 'Map') {
                return new Map(value.value);
            }
        }
        return value;
    }
    checkSameObjKey(map, key) {
        const keys = map.keys();
        let anotherKey = key;
        while (anotherKey = keys.next().value) {
            // YOUR COMPARISON HERE
            if (keys == anotherKey)
                return true;
        }
        return false;
    }
    getHeartBeat() {
        if (this.alive) {
            let params = {
                charger_id: this.chargerDetailsObj.name,
            };
            this.chargingStationService.getHeartBeat(params).subscribe((data) => {
                this.logs = data;
                this.newHeartBeatDate = this.logs.data.last_ping_datetime;
                this.setIntervel = this.logs.data.heartBeatInterval * 1000;
                if (data.status) {
                    // this.logs = data;
                    // this.setIntervel = this.logs.data.heartBeatInterval * 1000;
                    if (this.logs.message == "CHARGER_ONLINE") {
                        this.isOnline = true;
                        // this.newHeartBeatDate = new Date();
                        // this.newHeartBeatDate = this.logs.data.last_ping_datetime;
                        let lmap = localStorage.getItem('lastHeartBeat');
                        if (lmap != undefined && lmap != null) {
                            this.testMap = JSON.parse(lmap, this.reviver);
                        }
                        else {
                            this.testMap = new Map();
                        }
                        this.testMap.set(this.chargerDetailsObj.name, this.newHeartBeatDate);
                        this.storeValue = this.testMap;
                        let stringfy = JSON.stringify(this.testMap, this.replacer);
                        localStorage.setItem('lastHeartBeat', stringfy);
                    }
                    else {
                        let lmap = localStorage.getItem('lastHeartBeat');
                        this.testMap = JSON.parse(lmap, this.reviver);
                        if (this.testMap != null) {
                            if (this.testMap.has(this.chargerDetailsObj.name)) {
                                this.newHeartBeatDate = this.testMap.get(this.chargerDetailsObj.name);
                            }
                        }
                        this.isOnline = false;
                    }
                    setTimeout(() => {
                        this.alive; //<<<---using ()=> syntax
                        this.getHeartBeat();
                    }, this.setIntervel);
                }
                else {
                    this.isOnline = false;
                    this.setIntervel = 1 * 600000;
                    setTimeout(() => {
                        this.getHeartBeat();
                    }, this.setIntervel);
                }
            }, (err) => {
                this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorMessage, 'Dismiss', { duration: 3000 });
            });
        }
    }
    setLogInterval() {
        if (this.alive && this.autoLogChacked == true) {
            this.getChargerLog();
            this.getChargerConnectorStatus();
            this.getHeartBeat();
            setTimeout(() => {
                this.alive; //<<<---using ()=> syntax
                this.setLogInterval();
            }, this.selectedInterval);
        }
        else {
            this.getChargerLog();
        }
    }
    changeConf(item, connector) {
        item.isConfigEdit = true;
        let params = {
            data: item
        };
        const dialogRef = this.dialog.open(app_shared_components_change_configuration_dialog_change_configuration_shared_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ChangeConfigurationSharedDialogComponent"], {
            width: '700px',
            height: '410px',
            data: params,
            autoFocus: false,
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result != undefined) {
                if (result.newValue.length != 0) {
                    item.newValue = result.newValue;
                    let params = {
                        command: "CHANGE_CONFIGURATION",
                        charger_id: this.chargerDetailsObj.name,
                        charger_sr_no: this.chargerDetailsObj.serial_no,
                        connector: connector.connector_no,
                        value: item.newValue,
                        key: item.key
                    };
                    this.chargingStationService.getChangeConfiguration(params).subscribe((data) => {
                        //
                        if (data.status) {
                            this.logs = data;
                            //;
                            this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].commandMessage, 'Dismiss', { duration: 3000 });
                        }
                        else {
                            this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorMessage, 'Dismiss', { duration: 3000 });
                        }
                    }, (err) => {
                        this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorMessage, 'Dismiss', { duration: 3000 });
                    });
                }
                else {
                    this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].newValueMessage, 'Dismiss', { duration: 3000 });
                }
            }
            else {
                this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].newValueMessage, 'Dismiss', { duration: 3000 });
            }
            //this.getChargersByMappedStationId(this.stationDetails.id);
        });
    }
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.configurationData.length;
        // this.count++;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            // this.count--;
            this.configurationData.forEach(row => this.selection.select(row));
    }
    onCheckboxChange(e) {
        // var target = e.target;
        if (e.checked == true) {
            this.count++;
        }
        else {
            this.count--;
        }
    }
    getActiveTransactionId(connector) {
        let params = {
            charger_id: this.chargerDetailsObj.name,
            connector: +connector.connector_no
        };
        //;
        this.chargerService.getActiveTransactionId(params).subscribe((data) => {
            if (data.status) {
                this.idOfActiveTransaction = data.data;
                this.currentActiveId = this.idOfActiveTransaction;
            }
            else {
                this.idOfActiveTransaction = [];
                //this.snackBar.open(data.message, 'Dismiss', { duration: 3000 });
            }
        }, (err) => {
            this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorMessage, 'Dismiss', { duration: 3000 });
        });
    }
    getCancelTransactionId(connector) {
        let params = {
            charger_id: this.chargerDetailsObj.name,
            connector: +connector.connector_no
        };
        //;
        this.chargerService.getActiveTransactionId(params).subscribe((data) => {
            if (data.status) {
                this.idOfCancelTransaction = data.data;
                this.currentCancelId = this.idOfCancelTransaction;
            }
            else {
                this.idOfCancelTransaction = [];
                //this.snackBar.open(data.message, 'Dismiss', { duration: 3000 });
            }
        }, (err) => {
            this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorMessage, 'Dismiss', { duration: 3000 });
        });
    }
    getCurrentCancelID(connector) {
        connector.idOfCancelTransaction = this.currentCancelId;
    }
    getCurrentActiveID(connector) {
        connector.idOfActiveTransaction = this.currentActiveId;
    }
    getConfiguration(connector) {
        let params = {
            command: "GET_CONFIGURATION",
            charger_id: this.chargerDetailsObj.name,
            charger_sr_no: this.chargerDetailsObj.serial_no,
            connector: connector.connector_no,
            value: '',
            key: ''
        };
        this.chargingStationService.getConfiguration(params).subscribe((data) => {
            //
            if (data.status) {
                this.logs = data;
                this.configurationData = data.data;
                this.downClick();
                this.upClick();
            }
            else {
                // this.snackBar.open(MessageConstant.errorMessage, 'Dismiss', { duration: 3000 });
                this.snackBar.open(data.message, 'Dismiss', { duration: 3000 });
            }
            //;
            //this.snackBar.open(data.message, 'Dismiss', { duration: 3000 });
        }, (err) => {
            this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorMessage, 'Dismiss', { duration: 3000 });
        });
    }
    downClick() {
        if (Number(this.page) > 1) {
            this.page = Number(this.page) - 1;
        }
        else {
            this.page = 1;
        }
    }
    upClick() {
        if (this.configurationData && this.configurationData.length && this.configurationData.length > 0 && this.pageSize > 0) {
            var totalPage = Math.ceil(this.configurationData.length / this.pageSize);
            if (Number(this.page) < totalPage && Number(this.page) > 0) {
                this.page = Number(this.page) + 1;
            }
            else {
                this.page = totalPage;
            }
        }
        else {
            this.page = 1;
        }
    }
    pageSizeChange() {
        this.page = 1;
        this.downClick();
    }
    getOCPPTag(cpo_id) {
        if (cpo_id != null && cpo_id != undefined) {
            this.rfidService.getRFidsByCpoId(cpo_id).subscribe((data) => {
                //
                this.logs = data.data;
                var selectedList = [];
                if (data.status) {
                    this.curPage = 1;
                    this.ocppIDTag = data.data;
                    this.occpDownClick();
                    this.occpUpClick();
                }
                else {
                    this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_10__["MessageConstant"].errorMessage, 'Dismiss', { duration: 3000 });
                }
                //;
                //this.snackBar.open(data.message, 'Dismiss', { duration: 3000 });
            }, (err) => {
                this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorMessage, 'Dismiss', { duration: 3000 });
            });
        }
        else {
            this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].cpoNotFound, 'Dismiss', { duration: 3000 });
        }
    }
    numberOfPages() {
        return Math.ceil(this.ocppIDTag.length / this.pageSendSize);
    }
    setPageSize() {
        this.curPage = 1;
    }
    occpDownClick() {
        if (Number(this.occpPage) > 1) {
            this.occpPage = Number(this.occpPage) - 1;
        }
        else {
            this.occpPage = 1;
        }
    }
    occpUpClick() {
        if (this.ocppIDTag && this.ocppIDTag.length && this.ocppIDTag.length > 0 && this.occpPageSize > 0) {
            var totalocPage = Math.ceil(this.ocppIDTag.length / this.occpPageSize);
            if (Number(this.occpPage) < totalocPage && Number(this.occpPage) > 0) {
                this.occpPage = Number(this.occpPage) + 1;
            }
            else {
                this.occpPage = totalocPage;
            }
        }
        else {
            this.occpPage = 1;
        }
    }
    occPageSizeChange() {
        this.occpPage = 1;
        this.occpDownClick();
    }
    getAllCharger() {
        this.form.get('charCPO').setValue("");
        this.form.get('charStat').setValue("");
        this.dynamicChargerList();
        this.cdr.detectChanges();
    }
    getAllwhithCPO() {
        this.form.get('charCPO').setValue("");
        this.form.get('charStat').setValue("");
        this.onCPOChange(this.cpo_id_value);
        this.cdr.detectChanges();
    }
    cpoChangeEvent() {
        if (this.CPOvalue == null || this.CPOvalue == undefined) {
            // this.dynamicChargerList();
            // //this.cdr.detectChanges();
        }
        else if (this.CPOvalue.length == 0) {
            this.form.get('charStat').setValue("");
            this.dynamicChargerList();
            this.cdr.detectChanges();
        }
    }
    stationChangeEvent() {
        if (this.stationvalue == null || this.stationvalue == undefined) {
            // this.dynamicChargerList();
            //this.cdr.detectChanges();
        }
        else if (this.stationvalue.length == 0) {
            this.dynamicChargerList();
            this.cdr.detectChanges();
        }
    }
    changeVisibility(visibleOption, ev) {
        // visibleOption = !visibleOption;
        //nameSearch = false;
        //descSearch = false;
        ev.stopPropagation();
        if (visibleOption == 'nameSearch') {
            this.nameSearch = !this.nameSearch;
            this.filterEntity.name = '';
        }
        if (visibleOption == 'serialSearch') {
            this.serialSearch = !this.serialSearch;
            this.filterEntity.serial_no = '';
        }
        if (visibleOption == 'stationSearch') {
            this.stationSearch = !this.stationSearch;
            this.filterEntity.station_name = '';
        }
        if (visibleOption == 'currenVerSearch') {
            this.currenVerSearch = !this.currenVerSearch;
            this.filterEntity.current_version_name = '';
        }
        if (visibleOption == 'noOfGunsSearch') {
            this.noOfGunsSearch = !this.noOfGunsSearch;
            this.filterEntity.no_of_guns = null;
        }
        if (visibleOption == 'addressSearch') {
            this.addressSearch = !this.addressSearch;
            this.filterEntity.Address = '';
        }
        if (visibleOption == 'availableSearch') {
            this.availableSearch = !this.availableSearch;
            this.filterEntity.availableString = '';
        }
        if (visibleOption == 'statusSearch') {
            this.statusSearch = !this.statusSearch;
            this.filterEntity.statusString = '';
        }
    }
    tableExport() {
        this.exportedData = [];
        for (let i = 0; i < this.dataSource.filteredData.length; i++) {
            var chargerModel = this.dataSource.filteredData[i];
            var data = {
                'Serial No': chargerModel.serial_no, 'Charger Display ID': chargerModel.name, 'Station': chargerModel.station_name,
                'Current Version': chargerModel.current_version_id, 'No of Guns ': chargerModel.no_of_guns,
                'Address': chargerModel.Address, 'Available': chargerModel.availableString, 'Status': chargerModel.statusString
            };
            this.exportedData.push(data);
        }
        const workSheet = xlsx__WEBPACK_IMPORTED_MODULE_13__["utils"].json_to_sheet(this.exportedData);
        const workBook = xlsx__WEBPACK_IMPORTED_MODULE_13__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_13__["utils"].book_append_sheet(workBook, workSheet, 'SheetName');
        xlsx__WEBPACK_IMPORTED_MODULE_13__["writeFile"](workBook, 'Charger Logs.xlsx');
        //XLSX.writeFileAsync('OCPP Logs.xlsx',workBook, this.cb)
        //this.preloader.close();
    }
    pdfExport() {
        //this.preloader.open();
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_14__["jsPDF"]({ // set needed dimensions for any elemen
        });
        this.exportedData = [];
        for (let i = 0; i < this.dataSource.filteredData.length; i++) {
            var chrger = this.dataSource.filteredData[i];
            //this.exportedData.push({name: `name${i}`, description: `description${i}`,
            //statusString: `statusString${i}`});
            var data = [chrger.serial_no, chrger.name, chrger.station_name, chrger.current_version_id, chrger.no_of_guns, chrger.Address, chrger.availableString, chrger.statusString];
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
                doc.text('Charger Logs Report', doc.internal.pageSize.getWidth() / 2, 11, { align: 'center' });
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
        doc.save('Charger Logs report.pdf');
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
    ngOnDestroy() {
        this.alive = false;
        this.setIntervel = 8 * 2500000;
    }
    getConnectorStatus(connector) {
        let params = {
            command: "STATUS",
            charger_id: this.chargerDetailsObj.name,
            connector: connector.connector_no,
        };
        this.chargingStationService.getStatus(params).subscribe((data) => {
            //
            if (data.status) {
                this.logs = data;
                if (data.message == 'Preparing') {
                    return ('assets/images/connector.png');
                }
                else if (data.message == 'Charging') {
                    return ('assets/images/connector_online.png');
                }
                else {
                    return ('assets/images/connector_offline.png');
                }
            }
            else {
                return ('assets/images/connector_offline.png');
            }
        }, (err) => {
            return ('assets/images/connector_offline.png');
        });
    }
    getChargerLog() {
        this.isLoading = true;
        let formValues = this.chargerLogsform.value;
        let params = {
            charger_id: this.chargerDetailsObj.name,
            f_date: this.datePipe.transform(formValues.fromDate, "yyyy-MM-dd"),
            t_date: this.datePipe.transform(formValues.toDate, "yyyy-MM-dd"),
            connector: "",
        };
        this.chargerService.getChargerLogs(this.localStorage.userId, params).subscribe((data) => {
            //
            this.chLogs = data;
            //;
            if (this.chLogs.length > 0) {
                for (var i = 0; i < this.chLogs.length; i++) {
                    this.chLogs[i].request_date_string = this.datePipe.transform(this.chLogs[i].request_date, 'dd/MM/yyyy hh:mm:ss');
                    if (this.chLogs[i].response_date == null && this.chLogs[i].response_date == undefined) {
                        this.chLogs[i].response_date_string = "";
                    }
                    else {
                        this.chLogs[i].response_date_string = this.datePipe.transform(this.chLogs[i].response_date, 'dd/MM/yyyy hh:mm:ss');
                    }
                    if (this.chLogs[i].charger_response == null) {
                        this.chLogs[i].charger_response = "Awaiting Response";
                    }
                }
                this.isLoading = false;
                this.dataLogSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.chLogs);
                this.dataLogSource.paginator = this.thirdPaginator;
                this.dataLogSource.sort = this.sorter3;
            }
            else {
                this.isLoading = false;
                // this.snackBar.open('No logs found', 'Dismiss', { duration: 3000 });
            }
        }, (err) => {
        });
    }
    changeLogsVisibility(visibleOption, ev) {
        ev.stopPropagation();
        if (visibleOption == 'actionSearch') {
            this.actionSearch = !this.actionSearch;
            this.filterLogEntity.action = '';
        }
        if (visibleOption == 'requestSearch') {
            this.requestSearch = !this.requestSearch;
            this.filterLogEntity.charger_request = '';
        }
        if (visibleOption == 'responseSearch') {
            this.responseSearch = !this.responseSearch;
            this.filterLogEntity.charger_response = '';
        }
        if (visibleOption == 'requestDSearch') {
            this.requestDSearch = !this.requestDSearch;
            this.filterLogEntity.request_date_string = '';
        }
        if (visibleOption == 'responseDSearch') {
            this.responseDSearch = !this.responseDSearch;
            this.filterLogEntity.response_date_string = '';
        }
    }
    logsExport() {
        this.exportedData = [];
        for (let i = 0; i < this.chLogs.length; i++) {
            var logsModel = this.chLogs[i];
            //this.exportedData.push({name: `name${i}`, description: `description${i}`,
            //statusString: `statusString${i}`});
            var data = {
                'Action': logsModel.action, 'Request': logsModel.charger_request, 'Response': logsModel.charger_response,
                'Request Date': logsModel.request_date_string, 'Response Date': logsModel.response_date_string
            };
            this.exportedData.push(data);
        }
        const workSheet = xlsx__WEBPACK_IMPORTED_MODULE_13__["utils"].json_to_sheet(this.exportedData);
        const workBook = xlsx__WEBPACK_IMPORTED_MODULE_13__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_13__["utils"].book_append_sheet(workBook, workSheet, 'Charger log');
        xlsx__WEBPACK_IMPORTED_MODULE_13__["writeFile"](workBook, 'charger log.xlsx');
    }
    onToggleChange(enable) {
        this.autoLogChacked = enable;
    }
    onResizeEnd(event, displayedColumns) {
        if (event.edges.right) {
            const cssValue = event.rectangle.width + 'px';
            const columnElts = document.getElementsByClassName('mat-column-' + displayedColumns);
            for (let i = 0; i < columnElts.length; i++) {
                const currentEl = columnElts[i];
                currentEl.style.width = cssValue;
                this.cdr.detectChanges();
            }
            for (var i = 0; i < this.resizeColumnSettings.length; i++) {
                var columnSetting = this.resizeColumnSettings[i];
                if (columnSetting.coulmnName == displayedColumns) {
                    columnSetting.csswidth = event.rectangle.width;
                }
            }
        }
    }
    changeColumnSize() {
        for (var i = 0; i < this.resizeColumnSettings.length; i++) {
            var columnSetting = this.resizeColumnSettings[i];
            if (columnSetting.csswidth > 0) {
                const columnElts = document.getElementsByClassName('mat-column-' + columnSetting.coulmnName);
                for (let i = 0; i < columnElts.length; i++) {
                    const currentEl = columnElts[i];
                    currentEl.style.width = columnSetting.csswidth + 'px';
                    this.cdr.detectChanges();
                }
            }
        }
    }
    selectElementContents(elm, elid) {
        let el = document.getElementById(elm + elid);
        var range = document.createRange();
        range.selectNodeContents(el);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }
    openAckJsonDialog(data, isRequest) {
        let params = {};
        if (isRequest) {
            params = {
                action: 'REQUEST',
                data: data.charger_request
            };
        }
        else {
            params = {
                action: 'RESPONSE',
                data: data.charger_response
            };
        }
        const dialogRef = this.dialog.open(app_main_logs_history_ack_json_modal_ack_json_modal_component__WEBPACK_IMPORTED_MODULE_12__["AckModalComponent"], {
            width: '800px',
            data: params,
            autoFocus: false,
            panelClass: 'app-action-dialog',
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result != null) {
            }
        });
    }
    directMoveDashboard(analyticsdata) {
        const toSelect = this.chargerLogs.find(c => c.charger_id == analyticsdata.charger_id);
        this.getChargerDetails(toSelect);
    }
    // onResizeEnd(event: ResizeEvent, displayedColumns): void {
    // 	if (event.edges.right) {
    // 		const cssValue = event.rectangle.width + 'px';
    // 		const columnElts = document.getElementsByClassName('mat-column-' + displayedColumns);
    // 		for (let i = 0; i < columnElts.length; i++) {
    // 			const currentEl = columnElts[i] as HTMLDivElement;
    //       currentEl.style.width = cssValue;
    //       this.cdr.detectChanges();
    //     }
    //     for(var i =0; i < this.resizeColumnSettings.length;i++){
    //       var columnSetting  = this.resizeColumnSettings[i];
    //        if(columnSetting.coulmnName ==  displayedColumns){
    //         columnSetting.csswidth = event.rectangle.width;
    //        }
    //   }
    // 	}
    // }
    getChargerConnectorStatus() {
        this.chargingStationService.getchargerConnectorStatus(this.chargerID).subscribe((resp) => {
            if (resp.status == true) {
                this.connectorList = resp.data;
                this.chargerDetailsObj.connector_data = resp.data;
                for (var clist of this.connectorList) {
                    if (clist.is_dual_gun == 1) {
                        this.isDualGunShow = true;
                        //this.remoteStartform.get('is_dual_gun').enable();
                    }
                    else {
                        this.isDualGunShow = false;
                        //this.remoteStartform.get('is_dual_gun').disable();
                    }
                }
            }
            else {
                //return ('assets/images/connector_offline.png');
            }
        }, (err) => {
            //return ('assets/images/connector_offline.png');
        });
    }
    trackById(index, item) {
        return index;
    }
    getChargingRateUnit() {
        this.chargingProfileService.getChargingRateUnit().subscribe((resp) => {
            if (resp.status == true) {
                this.charRateUnit = resp.data;
                this.filteredOptionsCharRateUnit = this.getCompositeScheduleGroup.controls.chargingRateUnit.valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(value => typeof value === 'string' ? value : value.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(name => name ? this._filterChargingRateUnit(name) : this.charRateUnit));
            }
        }, (err) => {
        });
    }
    _filterChargingRateUnit(name) {
        const filterValue = name.toLowerCase();
        return this.charRateUnit.filter(option => option.value.toLowerCase().includes(filterValue));
    }
    displayCharRateUnit(item) {
        return item && item.value ? item.value : '';
    }
    getChargingProgilePurpose() {
        this.chargingProfileService.getChargingProfilePurpose().subscribe((resp) => {
            if (resp.status == true) {
                this.charProfPurpose = resp.data;
                this.filteredOptionsCharProfPurp = this.clearChargingProfileGroup.controls.availabilityType.valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(value => typeof value === 'string' ? value : value.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(name => name ? this._filterCharProfPurpose(name) : this.charProfPurpose));
            }
            else {
                //this.snackBar.open(MessageConstant.statusFalse, 'Dismiss', { duration: 5000 });
            }
        }, (err) => {
            ////
        });
    }
    _filterCharProfPurpose(name) {
        const filterValue = name.toLowerCase();
        return this.charProfPurpose.filter(option => option.value.toLowerCase().includes(filterValue));
    }
    displayAvailabilityType(item) {
        return item && item.value ? item.value : '';
    }
    getOCPPChargerProfile() {
        this.chargingProfileService.getChargerProfile().subscribe((resp) => {
            if (resp.status == true) {
                this.oCCPCharProfile = resp.data;
                this.filteredOptionsCharProfile = this.setChargingProfileGroup.controls.oCPPChargingProfile.valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(value => typeof value === 'string' ? value : value.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(name => name ? this._filterCharProfile(name) : this.oCCPCharProfile));
            }
            else {
                //this.snackBar.open(MessageConstant.statusFalse, 'Dismiss', { duration: 5000 });
            }
        }, (err) => {
            ////
        });
    }
    _filterCharProfile(name) {
        const filterValue = name.toLowerCase();
        return this.oCCPCharProfile.filter(option => option.charging_profile_name.toLowerCase().includes(filterValue));
    }
    displayOccpCharProfile(item) {
        return item && item.charging_profile_name ? item.charging_profile_name : '';
    }
    setDefaultConnectorAction() {
        var _a;
        let connector = (_a = this.chargerDetailsObj) === null || _a === void 0 ? void 0 : _a.connector_data[0];
        if (this.routerUrl.includes('ocppDashboard')) {
            this.connectorAction = 'Dashboard';
            this.showProperty(connector, 0);
        }
        if (this.routerUrl.includes('ocppChangeAvailability')) {
            this.connectorAction = 'Change Availability';
            this.showProperty(connector, 0);
        }
        if (this.routerUrl.includes('ocppManageConfigurations')) {
            this.connectorAction = 'Manage Configurations';
            this.showProperty(connector, 0);
        }
        if (this.routerUrl.includes('ocppGetDiagnostics')) {
            this.connectorAction = 'Get Diagnostics';
            this.showProperty(connector, 0);
        }
        if (this.routerUrl.includes('ocppRemoteStart')) {
            this.connectorAction = 'Remote Start';
            this.showProperty(connector, 0);
        }
        if (this.routerUrl.includes('ocppRemoteStop')) {
            this.connectorAction = 'Remote Stop';
            this.showProperty(connector, 0);
        }
        if (this.routerUrl.includes('ocppUnlockConnector')) {
            this.connectorAction = 'Unlock Connector';
            this.showProperty(connector, 0);
        }
        if (this.routerUrl.includes('ocppUpdateFirmware')) {
            this.connectorAction = 'Update Firmware';
            this.showProperty(connector, 0);
        }
        if (this.routerUrl.includes('ocppReserveNow')) {
            this.connectorAction = 'Reserve Now';
            this.showProperty(connector, 0);
        }
        if (this.routerUrl.includes('ocppCancelReservation')) {
            this.connectorAction = 'Cancel Reservation';
            this.showProperty(connector, 0);
        }
        if (this.routerUrl.includes('ocppDataTransfer')) {
            this.connectorAction = 'Data Transfer';
            this.showProperty(connector, 0);
        }
        if (this.routerUrl.includes('ocppSendLocalList')) {
            this.connectorAction = 'Send Local List';
            this.showProperty(connector, 0);
        }
        if (this.routerUrl.includes('ocppTriggerMessage')) {
            this.connectorAction = 'Trigger Message';
            this.showProperty(connector, 0);
        }
        if (this.routerUrl.includes('ocppGetCompositeSchedule')) {
            this.connectorAction = 'Get Composite Schedule';
            this.showProperty(connector, 0);
        }
        if (this.routerUrl.includes('ocppClearChargingProfile')) {
            this.connectorAction = 'Clear Charging Profile';
            this.showProperty(connector, 0);
        }
        if (this.routerUrl.includes('ocppSetChargingProfile')) {
            this.connectorAction = 'Set Charging Profile';
            this.showProperty(connector, 0);
        }
        if (this.routerUrl.includes('chargerLogs')) {
            this.connectorAction = 'Dashboard';
            this.showProperty(connector, 0);
        }
        for (var menu of this.chargingMenus) {
            if (menu.title === this.connectorAction) {
                this.defaultMenuItem = menu;
                this.changeConnectorAction(this.defaultMenuItem, undefined);
                break;
            }
        }
    }
    getCompositeSchedule(connector) {
        if (connector.chargingRateUnit != null && connector.chargingRateUnit != undefined) {
        }
        else {
            this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorChargingRateUnit, 'Dismiss', { duration: 3000 });
        }
    }
    clearChargingProfile(connector) {
        if (connector.availabilityType != null && connector.availabilityType != undefined) {
        }
        else {
            this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorAvailabilityType, 'Dismiss', { duration: 3000 });
        }
    }
    setChargingProfile(connector) {
        if (connector.oCPPChargingProfile != null && connector.oCPPChargingProfile != undefined) {
        }
        else {
            this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorOCPPChargingProfile, 'Dismiss', { duration: 3000 });
        }
    }
    sendLocalList(connector) {
        if (connector.listVersion != null && connector.listVersion != undefined) {
            if (connector.updateType != null && connector.updateType != undefined) {
            }
            else {
                this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorUpdateType, 'Dismiss', { duration: 3000 });
            }
        }
        else {
            this.snackBar.open(app_shared_utils_chLogs_message__WEBPACK_IMPORTED_MODULE_11__["ChLogsMessageConstant"].errorListVersion, 'Dismiss', { duration: 3000 });
        }
    }
    getClients() {
        let selectedClient;
        this.clientList = JSON.parse(localStorage.getItem('ClientList'));
        this.localClient = localStorage.getItem('selectedClient');
        if (this.localStorage.role_code != 'END') {
            if (this.clientList != null && this.clientList != undefined) {
                if (this.localClient != null || this.localClient != undefined) {
                    selectedClient = this.clientList.filter(client => client.client_id === Number(this.localClient));
                    const toSelect = selectedClient[0];
                    this.selectedClient_id = toSelect.client_id;
                    this.form.get('charClient').setValue(toSelect);
                    //this.cdr.detectChanges();
                    this.getCPOByClient(toSelect.client_id);
                }
                else {
                    const toSelect = this.clientList[0];
                    this.selectedClient_id = toSelect.client_id;
                    this.form.get('charClient').setValue(toSelect);
                    //this.cdr.detectChanges();
                    this.getCPOByClient(toSelect.client_id);
                }
                // const toSelect = this.clientList[0];
                // this.selectedClient_id = toSelect.client_id;
                // this.form.get('charClient').setValue(toSelect);
                // this.getCPOByClient(toSelect.client_id);
            }
            this.filteredOptionsCharClient = this.form.controls.charClient.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(value => typeof value === 'string' ? value : value.client_name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(name => name ? this._filterCharClient(name) : this.clientList));
        }
    }
    _filterCharClient(name) {
        this.form.get('charCPO').setValue('');
        this.form.get('charStat').setValue('');
        const filterValue = name.toLowerCase();
        return this.clientList.filter(option => option.client_name.toLowerCase().includes(filterValue));
    }
    displayCharClient(item) {
        return item && item.client_name ? item.client_name : '';
    }
    onClientChange(client_id) {
        this.cpoList = [];
        this.stationList = [];
        this.form.get('charCPO').setValue("");
        this.form.get('charStat').setValue("");
        this.selectedClient_id = client_id;
        this.setCPOStation(client_id);
    }
    getCPOByClient(client_id) {
        this.cpoList = JSON.parse(localStorage.getItem('CpoList'));
        if (this.localStorage.role_code != "END") {
            if (this.cpoList != null && this.cpoList != undefined) {
                const toSelect = this.cpoList.length == 1 ? this.cpoList[0] : this.cpoList[1];
                this.selectedCpo_id = toSelect.cpo_id;
                this.form.get('charCPO').setValue(toSelect);
                this.getStationByCPO(toSelect.cpo_id);
            }
            this.filteredOptionsCharCPO = this.form.controls.charCPO.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(value => typeof value === 'string' ? value : value.cpo_name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(name => name ? this._filterCharCPO(name) : this.cpoList));
        }
    }
    _filterCharCPO(name) {
        this.form.get('charStat').setValue('');
        const filterValue = name.toLowerCase();
        return this.cpoList.filter(option => option.cpo_name.toLowerCase().includes(filterValue));
    }
    displayCharCPO(item) {
        return item && item.cpo_name ? item.cpo_name : '';
    }
    onCPOChange(id) {
        this.stationList = [];
        this.form.get('charStat').setValue("");
        this.selectedCpo_id = id;
        this.getStationByCPO(id);
    }
    getStationByCPO(id) {
        this.stationList = JSON.parse(localStorage.getItem('StationList'));
        this.station = [];
        if (this.localStorage.role_code != 'END') {
            for (var i = 0; i < this.stationList.length; i++) {
                if (id == this.stationList[i].cpo_id) {
                    this.station.push(this.stationList[i]);
                }
                if (this.stationList[i].station_id == -1 && id != -1) {
                    this.station.push(this.stationList[i]);
                }
                if (id == -1) {
                    this.station.push(this.stationList[i]);
                }
            }
            if (this.station != null && this.station != undefined && this.station.length > 0) {
                //const toSelect = this.station[0];
                // const toSelect = this.station.length == 1 ? this.station[0] : this.station[1];
                let toSelect;
                if (this.selectedCpo_id == -1) {
                    toSelect = this.station[0];
                }
                else {
                    toSelect = this.station.length == 1 ? this.station[0] : this.station[1];
                }
                this.selectedStation_id = toSelect.station_id;
                this.form.get('charStat').setValue(toSelect);
                this.dynamicChargerList();
            }
            this.filteredOptionsCharStat = this.form.controls.charStat.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(value => typeof value === 'string' ? value : value.station_name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(station_name => station_name ? this._filterCharStat(station_name) : this.station));
        }
    }
    _filterCharStat(name) {
        const filterValue = name.toLowerCase();
        return this.station.filter(option => option.station_name.toLowerCase().includes(filterValue));
    }
    displayCharStat(item) {
        return item && item.station_name ? item.station_name : '';
    }
    onStationChange(event) {
        this.selectedStation_id = event;
        this.dynamicChargerList();
        //this.getAllClientChargers(event);
    }
    setCPOStation(client_id) {
        this.setCpoStationService.setCpoStationDetails(client_id);
        setTimeout(() => {
            this.getCPOByClient(client_id);
        }, 700);
    }
}
OcppChargerComponent.ɵfac = function OcppChargerComponent_Factory(t) { return new (t || OcppChargerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_charging_station_charging_station_service__WEBPACK_IMPORTED_MODULE_20__["ChargingStationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_charger_charger_service__WEBPACK_IMPORTED_MODULE_21__["ChargerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_23__["RfidService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_charging_profile_charging_profile_service__WEBPACK_IMPORTED_MODULE_24__["ChargingProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_25__["UtilityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_setCPOStation_service__WEBPACK_IMPORTED_MODULE_26__["SetCpoStationService"])); };
OcppChargerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OcppChargerComponent, selectors: [["app-ocpp-charger"]], viewQuery: function OcppChargerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, true, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sorter1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.onePaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sorter2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.secondPaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sorter3 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.thirdPaginator = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]])], decls: 13, vars: 8, consts: [["id", "CHARGER-LOGS", 2, "display", "block", "width", "100%"], ["id", "CHARGER-LOGS", "fxLayout", "row", 1, "page-layout", "simple", "right-sidebar"], ["fusePerfectScrollbar", "", 1, "center"], ["fxLayout", "column", "fxLayoutAlign", "space-between", 1, "header", "accent", "px-24", "pt-16", "pb-0"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [1, "mat-display-1", "my-0", "my-sm-24", "welcome-message"], ["id", "forms", "fxLayout", "column", 1, "page-layout", "simple", "fullwidth"], [1, "pt-0", "pb-0", "mt-0", "mb-0", 3, "selectedIndex", "selectedTabChange"], ["label", "Charger List"], ["matTabContent", "", "style", "overflow-x: hidden; overflow-y: hidden"], [3, "label", "disabled"], ["matTabContent", "", "style", "background-color: white"], [2, "text-align", "left", "margin-left", "16px", "margin-bottom", "10px", "margin-top", "10px"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Excel Download", 3, "click"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "PDF Download", 3, "click"], ["style", "padding: 16px !important", 4, "ngIf"], ["fxLayout", "row wrap", 1, "page-layout", "simple", "fullwidth", 2, "overflow", "scroll"], [1, "content", "mat-elevation-z8", 2, "min-width", "auto"], ["mat-table", "", "matTableFilter", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "exampleEntity", "filterType"], ["table1", "", "sorter1", "matSort"], ["matColumnDef", "serial_no"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "\n                                            cursor: pointer;\n                                            text-decoration: underline;\n                                        ", 3, "matTooltip", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "station_name"], ["mat-cell", "", "style", "cursor: pointer", 4, "matCellDef"], ["matColumnDef", "version_name"], ["matColumnDef", "no_of_guns"], ["matColumnDef", "Address"], ["matColumnDef", "is_available"], ["matColumnDef", "status"], ["mat-cell", "", 3, "color", 4, "matCellDef"], ["matColumnDef", "action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["onePaginator", ""], [2, "padding", "16px !important"], ["fxLayoutAlign", "start", "fxFlex", "1 0 auto", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "33", 1, "pr-4", 2, "height", "60px"], ["type", "text", "matInput", "", "formControlName", "charClient", 3, "matAutocomplete"], [3, "displayWith", "optionSelected"], ["autoClient", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", "matTooltip", "Please select client", 1, "secondary-text"], [4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "charCPO", 3, "matAutocomplete"], ["auto1", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select CPO", 1, "secondary-text"], ["type", "text", "matInput", "", "formControlName", "charStat", 3, "matAutocomplete"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["auto2", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select charging station", 1, "secondary-text"], [3, "value"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["class", "custom_font_size", "style", "display: flex", 4, "ngIf"], ["appearance", "outline", "style", "width: 70%", "class", "list_input", 4, "ngIf"], [1, "custom_font_size", 2, "display", "flex"], ["matSuffix", "", 3, "click"], ["appearance", "outline", 1, "list_input", 2, "width", "70%"], ["matInput", "", "placeholder", " Serial No ", 3, "ngModel", "ngModelChange"], ["mat-cell", "", 2, "cursor", "pointer", "text-decoration", "underline", 3, "matTooltip"], ["matInput", "", "placeholder", " Charger  ID ", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Station ", 3, "ngModel", "ngModelChange"], ["mat-cell", "", 2, "cursor", "pointer"], ["appearance", "outline", "style", "width: 110px", "class", "list_input", 4, "ngIf"], ["appearance", "outline", 1, "list_input", 2, "width", "110px"], ["matInput", "", "placeholder", " Current V ", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", " No Of Guns ", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", " Address ", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", " Available", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", " Status ", 3, "ngModel", "ngModelChange"], ["mat-cell", ""], ["mat-header-cell", ""], [1, "custom_font_size"], ["mat-cell", "", 3, "click"], ["color", "warn", "matTooltip", "Charger Logs", 2, "cursor", "pointer", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 3, "click"], [2, "padding", "20px", "background-color", "white"], ["fxLayout", "row wrap", "fxLayoutGap", "8px grid", 2, "padding-bottom", "10px"], ["fxFlex", "48", "fxFlex.lt-sm", "100"], [2, "min-height", "130px"], [2, "padding", "6px 20px 0px 0px"], [2, "font-size", "18px", "font-weight", "600"], ["fxLayout", "row wrap", "fxLayoutGap", "8px grid"], ["fxFlex", "20", "fxFlex.lt-sm", "100", 2, "align-items", "center"], ["color", "primary", "matTooltip", "Charger Code", 2, "cursor", "pointer", "font-size", "72px"], ["fxFlex", "60", "fxFlex.lt-sm", "100"], [2, "display", "block"], [1, "charger_label"], [1, "charger_dash_out"], [1, "charger_label", 2, "display", "inline-flex", "align-items", "center"], [4, "ngIf", "ngIfElse"], ["other_content", ""], ["fxFlex", "20", "fxFlex.lt-sm", "100"], ["fxFlex", "2"], [2, "margin", "9px"], ["fxLayout", "row wrap", "fxLayoutGap", "8px grid", 2, "align-items", "center"], ["fxFlex", "33", "fxFlex.lt-sm", "100"], [2, "display", "grid", "text-align", "center", "justify-content", "center"], ["mat-raised-button", "", "color", "primary", 1, "mt-8", 2, "padding", "0px !important", "width", "150px !important", 3, "click"], ["icon", "", "color", "white"], [1, "action_label"], [1, "action_action"], ["mat-raised-button", "", "color", "primary", 1, "mt-8", 2, "padding", "0px !important", "width", "150px !important", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["resetType", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "mt-8", 2, "padding", "0px !important", "width", "165px !important", 3, "click"], [1, "connector-container", 2, "min-height", "400px", "background", "white"], ["position", "end", "mode", "side", 1, "connector-sidenav", 3, "opened"], ["drawer", ""], ["color", "primary", 1, "connector-sidebar-toolbar"], [1, "connector-sidebar-scroll"], ["role", "list"], ["style", "cursor: pointer", 4, "ngFor", "ngForOf"], [2, "background-color", "white"], [1, "connector-wrap"], ["color", "primary", 1, "connector-toolbar"], [1, "m-0", "pl-16", "font-normal", "fz-1"], [1, "fill-space"], ["color", "white", "matTooltip", "Charger Logs", 2, "cursor", "pointer", 3, "click"], ["fxLayout", "row wrap", "fxLayoutGap", "8px grid", 2, "padding-top", "8px"], ["fxFlex", "98", "fxFlex.lt-sm", "100"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["fxLayout", "row wrap", 1, "page-layout", "simple", "fullwidth"], [1, "content", "mat-elevation-z8", 2, "padding-top", "30px", "padding-bottom", "30px"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "right center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["matInput", "", "formControlName", "fromDate", 3, "matDatepicker", "max"], ["fromDate", ""], ["matSuffix", "", 3, "for"], ["disabled", "false"], ["fDate", ""], ["matInput", "", "formControlName", "toDate", 3, "matDatepicker", "min", "max"], ["tDate", ""], ["fxFlex", "3"], ["color", "primary", "matTooltip", "Filter", 2, "cursor", "pointer", 3, "click"], ["fxFlex", "30", 2, "text-align", "end", "padding", "10px"], [3, "checked", "change"], ["style", "width: auto", 4, "ngIf"], [1, "log_box"], ["id", "title"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "primary", 2, "margin-left", "12px", 3, "click"], [1, "example-table-container"], ["mat-table", "", "matTableFilter", "", "matSort", "", 1, "reszieable", 2, "min-width", "100%", 3, "dataSource", "exampleEntity", "filterType"], ["table", "", "sorter3", "matSort"], ["mat-header-cell", "", "mat-sort-header", "", "mwlResizable", "", 3, "resizeColumn", "enableGhostResize", "resizeEdges", "resizeEnd", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "charger_request"], ["matColumnDef", "request"], ["matColumnDef", "response"], ["matColumnDef", "charger_response"], ["matColumnDef", "request_date"], ["matColumnDef", "response_date"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["style", "\n                                                    display: flex;\n                                                    justify-content: center;\n                                                    align-items: center;\n                                                    background: white;\n                                                ", 4, "ngIf"], ["thirdPaginator", ""], ["matTooltip", "Charger Online", 3, "ngStyle", 4, "ngIf"], ["matTooltip", "Charger Online", 3, "ngStyle"], ["matTooltip", "Charger Offline", 3, "ngStyle"], [2, "cursor", "pointer"], [1, "hoverClass", 3, "id", "click"], [2, "margin-bottom", "10px"], ["fxLayout", "row", "fxLayout.lt-sm", "column", "fxLayoutWrap", "wrap"], ["fxFlex", "80", "fxLayoutAlign", "start center", 1, "pr-1", 2, "font-weight", "normal"], [2, "padding-left", "8px"], [1, "connector_no"], [1, "connector_name"], ["fxFlex", "10", "fxLayoutAlign", "end center", 1, "pr-1"], ["mat-icon-button", "", 3, "id", "click"], ["matTooltip", "Show", 1, "material-icons"], ["mat-icon-button", "", 2, "display", "none", 3, "id", "click"], ["matTooltip", "Hide", 1, "material-icons"], [2, "display", "none", "margin-top", "20px", 3, "id"], ["src", "assets/images/connector.png", "alt", "image", 2, "width", "35px", "height", "auto"], ["src", "assets/images/connector_online.png", "alt", "image", 2, "width", "35px", "height", "auto"], ["src", "assets/images/connector_offline.png", "alt", "image", 2, "width", "35px", "height", "auto"], [1, "form-field-full"], ["appearance", "outline", "fxFlex", "50", 1, "pr-4"], ["required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["fxFlex", "100", 2, "text-align", "end"], ["mat-raised-button", "", "color", "primary", 1, "mr-8", 3, "click"], ["mat-raised-button", "", "color", "warn", 1, "mr-8"], ["fxLayout", "row wrap", "fxLayoutGap", "8px grid", 2, "align-items", "flex-end", "padding-top", "10px", "flex-direction", "row-reverse"], ["fxFlex", "100"], ["fxFlex", "33", 2, "align-items", "center"], [2, "display", "grid", "text-align", "center"], ["mat-raised-button", "", "color", "primary", 1, "mr-8", 3, "disabled", "click"], ["width", "100%", "cellpadding", "0", "cellspacing", "0", 1, "table", "table--bordered", "table--highlight", "fileUploadTable", 2, "margin-top", "20px", "table-layout", "fixed"], ["width", "5%"], ["width", "30%"], ["width", "20%", 1, "text-center"], [2, "height", "300px", "overflow", "scroll"], [4, "ngFor", "ngForOf"], [1, "pagination", "half-margin-bottom", "half-margin-top"], [1, "left-pag"], ["placeholder", "", 1, "selectDiv", 3, "ngModel", "ngModelChange", "click"], ["value", "5", "selected", "true"], ["value", "10"], ["value", "20"], [1, "right-pag"], [1, "s-20", 2, "cursor", "pointer", "margin", "3px", 3, "click"], [3, "checked", "click", "change"], [2, "width", "30%"], [2, "width", "45%", "text-align", "center", "word-wrap", "break-word", "word-break", "break-all"], [2, "text-align", "center"], ["mat-raised-button", "", "color", "primary", 1, "btn", 2, "line-height", "22px", 3, "id", "disabled", "click"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", 1, "form-field-full"], ["matInput", "", "placeholder", "", "required", "", 3, "ngModelOptions", "value", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "", "type", "number", "required", "", "min", "0", 3, "ngModelOptions", "value", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "", "readonly", "", "required", "", 3, "ngxMatDatetimePicker", "ngModel", "ngModelOptions", "min", "max", "disabled", "ngModelChange"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], [3, "showSpinners", "showSeconds", "stepHour", "stepMinute", "stepSecond", "touchUi", "color", "enableMeridian", "disableMinute", "hideTime"], ["startDatePicker", ""], ["appearance", "outline", "fxFlex", "49.5", 1, "pr-4"], ["matInput", "", "placeholder", "", "required", "", "readonly", "", 3, "ngxMatDatetimePicker", "ngModel", "ngModelOptions", "min", "max", "disabled", "ngModelChange"], ["endDatePicker", ""], ["mat-raised-button", "", "color", "warn", 1, "mr-8", 2, "margin-left", "1%"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", 1, "form-field-full", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto", 2, "align-items", "flex-end", "padding-top", "10px", "flex-direction", "row-reverse"], ["fxFlex", "50", 1, "pr-4"], ["name", "opList", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["style", "\n                                                                                            padding-right: 10px;\n                                                                                        ", "name", "opList", 3, "value", 4, "ngFor", "ngForOf"], ["fxFlex", "50", "class", "pr-4", 4, "ngIf"], ["fxFlex", "50", "appearance", "outline", 4, "ngIf"], ["disabled", "", 3, "ngModelOptions"], ["fxFlex", "100", "fxFlex.lt-sm", "100", 2, "text-align", "end"], ["name", "opList", 2, "padding-right", "10px", 3, "value"], ["formControlName", "is_dual_gun", 2, "float", "right"], ["fxFlex", "50", "appearance", "outline"], ["required", "", "required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["matInput", "", "placeholder", "", "disabled", "", "required", "", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["matSuffix", "", 2, "cursor", "pointer", 3, "click"], ["matInput", "", "placeholder", "", "required", "", 2, "text-transform", "lowercase", 3, "ngModelOptions", "value", "ngModel", "ngModelChange"], ["reteriveDatePicker", ""], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto", 2, "align-items", "flex-end", "padding-bottom", "10px", "flex-direction", "row-reverse"], ["Expirypicker", ""], ["matInput", "", "placeholder", "", "required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "text", "matInput", "", "formControlName", "dataMessage", "required", "", 3, "ngModel", "matAutocomplete", "ngModelChange"], [3, "displayWith"], ["auto4", "matAutocomplete"], ["matSuffix", "", 1, "secondary-text"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", 1, "mat-card", "p-24", 3, "formGroup"], ["matInput", "", "placeholder", "", "autocomplete", "off", "type", "number", "required", "", "min", "0", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["matSuffix", "", "matTooltip", "Get Local List Version"], ["name", "sittList", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["fxFlex", "100", 1, "pr-4"], ["width", "100%", "cellpadding", "0", "cellspacing", "0", 1, "table", "table--bordered", "table--highlight", "fileUploadTable", 2, "margin-top", "20px"], ["width", "10%"], ["width", "30%", 1, "text-center"], ["placeholder", "", 1, "selectDiv", 3, "ngModel", "ngModelOptions", "ngModelChange", "click"], ["value", "10", "selected", "selected"], ["value", "30"], ["type", "button", "mat-icon-button", "", 3, "disabled", "click"], [1, "s-20", 2, "cursor", "pointer", "margin", "3px"], [2, "width", "30%", "text-align", "center"], ["type", "text", "matInput", "", "formControlName", "triggerMessage", "required", "", 3, "ngModel", "matAutocomplete", "ngModelChange"], ["auto3", "matAutocomplete"], ["type", "number", "matInput", "", "formControlName", "connectorId", "value", "0", "min", "0"], ["type", "number", "matInput", "", "formControlName", "duration", "value", "0", "min", "0"], ["type", "text", "matInput", "", "formControlName", "chargingRateUnit", "required", "", 3, "ngModel", "matAutocomplete", "ngModelChange"], ["type", "number", "matInput", "", "formControlName", "Id", "value", "0", "min", "0"], ["type", "text", "matInput", "", "formControlName", "availabilityType", "required", "", 3, "ngModel", "matAutocomplete", "ngModelChange"], ["type", "number", "matInput", "", "formControlName", "stackLevel", "value", "0", "min", "0"], ["type", "text", "matInput", "", "formControlName", "oCPPChargingProfile", "required", "", 3, "ngModel", "matAutocomplete", "ngModelChange"], [2, "width", "auto"], ["name", "interval", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["mat-header-cell", "", "mat-sort-header", "", "mwlResizable", "", 3, "resizeColumn", "enableGhostResize", "resizeEdges", "resizeEnd"], ["class", "custom_font_size", "style", "\n                                                                display: flex;\n                                                            ", 4, "ngIf"], ["appearance", "outline", "class", "list_input", 4, "ngIf"], ["appearance", "outline", 1, "list_input"], ["matInput", "", "placeholder", " Action ", 3, "ngModel", "ngModelChange"], [3, "click"], ["matInput", "", "placeholder", " Request ", 3, "ngModel", "ngModelChange"], ["color", "primary", "matTooltip", "Request", 2, "cursor", "pointer", 3, "click"], ["color", "primary", "matTooltip", "Response", 2, "cursor", "pointer", 3, "click"], ["matInput", "", "placeholder", " Response ", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", " Request Date ", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", " Response Date ", 3, "ngModel", "ngModelChange"], ["mat-row", ""], [2, "display", "flex", "justify-content", "center", "align-items", "center", "background", "white"], ["mode", "indeterminate"]], template: function OcppChargerComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-tab-group", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTabChange", function OcppChargerComponent_Template_mat_tab_group_selectedTabChange_8_listener($event) { return ctx.onTabChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OcppChargerComponent_ng_template_10_Template, 45, 8, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-tab", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, OcppChargerComponent_ng_template_12_Template, 177, 39, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c12)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.menuArray == null ? null : ctx.menuArray.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", ctx.menuArray == null ? null : ctx.menuArray.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isFirstTab);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_27__["DefaultLayoutDirective"], _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_28__["FusePerfectScrollbarDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_27__["DefaultLayoutAlignDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__["MatTabContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_30__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], mat_table_filter__WEBPACK_IMPORTED_MODULE_9__["MatTableFilterDirective"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_card__WEBPACK_IMPORTED_MODULE_34__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_34__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_27__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_27__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_36__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__["MatSuffix"], _angular_material_core__WEBPACK_IMPORTED_MODULE_38__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__["MatSortHeader"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_39__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_39__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_39__["MatMenuItem"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_40__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_40__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_42__["MatList"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_40__["MatSidenavContent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_43__["MatDivider"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_44__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_44__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_44__["MatDatepicker"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_45__["MatSlideToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_46__["DefaultStyleDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_42__["MatListItem"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgForm"], _angular_material_select__WEBPACK_IMPORTED_MODULE_47__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_forms_forms_x"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_48__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NumberValueAccessor"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_49__["NgxMatDatetimeInput"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_49__["NgxMatDatetimePicker"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_50__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_50__["MatRadioButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_51__["MatProgressSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"]], styles: [".example-button-row .mat-button-base {\n  margin: 8px 8px 8px 0;\n}\n\n.example-flex-container {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.example-button-container {\n  display: flex;\n  justify-content: center;\n  width: 120px;\n}\n\n.mb-16 {\n  margin-bottom: 16px;\n}\n\n.mat-mini-fab .mat-button-wrapper {\n  line-height: normal !important;\n}\n\nmat-form-field.list_input div.mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\n.mat-header-cell .custom_font_size {\n  font-size: 15px !important;\n  text-align: left;\n  width: 130px;\n}\n\nmat-form-field.list_input div.mat-form-field-infix {\n  padding: 0.5em 0 0.5em 0 !important;\n}\n\n.log_box {\n  border: #3c5a86 1px solid;\n}\n\n.log_box #title {\n  position: relative;\n  top: -0.5em;\n  font-size: 18px;\n  margin-left: 1em;\n  display: inline;\n  background-color: white;\n}\n\n.example-table-container {\n  position: relative;\n  min-height: 200px;\n  max-height: 400px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcb2NwcC1jaGFyZ2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDRTtFQUNJLG1CQUFBO0FBRU47O0FBQUU7RUFFRyw4QkFBQTtBQUVMOztBQUFBO0VBQ0UsNEJBQUE7QUFHRjs7QUFEQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBSUY7O0FBRkE7RUFDRSxtQ0FBQTtBQUtGOztBQUhBO0VBQ0UseUJBQUE7QUFNRjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQU1GOztBQUpBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQU9GIiwiZmlsZSI6Im9jcHAtY2hhcmdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWJ1dHRvbi1yb3cgLm1hdC1idXR0b24tYmFzZSB7XHJcbiAgICBtYXJnaW46IDhweCA4cHggOHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWZsZXgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gIH1cclxuICAubWItMTZ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgfVxyXG4gIC5tYXQtbWluaS1mYWIgLm1hdC1idXR0b24td3JhcHBlciB7XHJcbiAgIFxyXG4gICAgIGxpbmUtaGVpZ2h0OiBub3JtYWwgIWltcG9ydGFudDsgXHJcbn1cclxubWF0LWZvcm0tZmllbGQubGlzdF9pbnB1dCAgZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XHJcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG4ubWF0LWhlYWRlci1jZWxsIC5jdXN0b21fZm9udF9zaXple1xyXG4gIGZvbnQtc2l6ZTogMTVweCAgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHdpZHRoOiAxMzBweDtcclxufVxyXG5tYXQtZm9ybS1maWVsZC5saXN0X2lucHV0IGRpdi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgcGFkZGluZzogMC41ZW0gMCAwLjVlbSAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxvZ19ib3gge1xyXG4gIGJvcmRlcjogIzNjNWE4NiAxcHggc29saWQ7XHJcbn1cclxuXHJcbi5sb2dfYm94ICN0aXRsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTAuNWVtO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZXhhbXBsZS10YWJsZS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4iXX0= */"], encapsulation: 2, data: { animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_16__["fuseAnimations"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OcppChargerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ocpp-charger',
                templateUrl: './ocpp-charger.component.html',
                styleUrls: ['./ocpp-charger.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_16__["fuseAnimations"],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_17__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBar"] }, { type: app_shared_services_charging_station_charging_station_service__WEBPACK_IMPORTED_MODULE_20__["ChargingStationService"] }, { type: app_shared_services_charger_charger_service__WEBPACK_IMPORTED_MODULE_21__["ChargerService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] }, { type: app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_23__["RfidService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] }, { type: app_shared_services_charging_profile_charging_profile_service__WEBPACK_IMPORTED_MODULE_24__["ChargingProfileService"] }, { type: app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_25__["UtilityService"] }, { type: app_shared_services_setCPOStation_service__WEBPACK_IMPORTED_MODULE_26__["SetCpoStationService"] }]; }, { sorter1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sorter1']
        }], onePaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['onePaginator', { read: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"] }]
        }], sorter2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sorter2']
        }], secondPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['secondPaginator', { read: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"] }]
        }], sorter3: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sorter3']
        }], thirdPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['thirdPaginator', { read: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"] }]
        }] }); })();


/***/ }),

/***/ "QtQ4":
/*!******************************************************!*\
  !*** ./src/app/shared/services/rfid/rfid.service.ts ***!
  \******************************************************/
/*! exports provided: RfidService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RfidService", function() { return RfidService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class RfidService {
    constructor(http) {
        this.http = http;
        this.apiUrl2 = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2}/rfid`;
    }
    create(params) {
        return this.http.post(`${this.apiUrl2}/crt`, params);
    }
    update(params) {
        return this.http.post(`${this.apiUrl2}/upd`, params);
    }
    createCpoRfidMapping(params) {
        return this.http.post(`${this.apiUrl2}/crtCpoRfidMapping`, params);
    }
    updatecpoRfidMapping(params) {
        return this.http.post(`${this.apiUrl2}/updCpoRfidMapping`, params);
    }
    getRFidnoById(id) {
        return this.http.get(`${this.apiUrl2}/gtRFidnoById/${id}`);
    }
    getAllRfid() {
        return this.http.get(`${this.apiUrl2}/gtRFids`);
    }
    delete(id, user_id) {
        return this.http.delete(`${this.apiUrl2}/dlt/${id}/${user_id}`);
    }
    unMapRFidCpoID(id, user_id) {
        return this.http.delete(`${this.apiUrl2}/unMapRFidCpoID/${id}/${user_id}`);
    }
    // getRFidsByCpoId(id){
    //   return this.http.get(`${this.apiUrl2}/getRFidsByCpoId/${id}`);
    // }
    getAllRFidsWithMappedCPOs(id) {
        return this.http.get(`${this.apiUrl2}/gtAllRFidsWithMappedCPOs/${id}`);
    }
    getCpoRFidMappingCW(id) {
        return this.http.get(`${this.apiUrl2}/gtCpoRFidMappingCW/${id}`);
    }
    getRFidsByCpoId(id) {
        return this.http.get(`${this.apiUrl2}/gtRFidsByCpoId/${id}`);
    }
    // Unmapped RFID
    getUnmappedRFIDByCpoId(cpo_id) {
        return this.http.get(`${this.apiUrl2}/unmappedRfidByCpoId/${cpo_id}`);
    }
    createRfidMappingwithDriver(params) {
        return this.http.post(`${this.apiUrl2}/rfdrivermapping/crt`, params);
    }
    // Get All RFID by login Id
    getAllRFIDbyCW(login_id, cpo_id) {
        if (cpo_id == null || cpo_id == undefined || cpo_id == "") {
            cpo_id = 0;
        }
        return this.http.get(`${this.apiUrl2}/gtRfidByClientwise/${login_id}/${cpo_id}`);
    }
    // ########################################################################################
    // ########################################################################################
    // ########################################################################################
    getRechargeLogsbyCCSW(login_id, cpo_id) {
        // if(cpo_id == null || cpo_id == undefined || cpo_id == "") {
        //   cpo_id = 0;
        // }
        return this.http.get(`${this.apiUrl2}/getRechargeLogsbyCCSW/${login_id}/${cpo_id}`);
    }
    updateBalance(params) {
        return this.http.post(`${this.apiUrl2}/updateBalance`, params);
    }
    getRechargeLogsByCpoId(params) {
        return this.http.post(`${this.apiUrl2}/getRechargeLogsByCpoId`, params);
    }
    getConsumptionLogsByCpoId(params) {
        return this.http.post(`${this.apiUrl2}/getConsumptionLogsByCpoId`, params);
    }
    // ########################################################################################
    // ########################################################################################
    // ########################################################################################
    unmappedRfIdDriver(map_id) {
        return this.http.delete(`${this.apiUrl2}/unmappedRfIdDriver/${map_id}`);
    }
}
RfidService.ɵfac = function RfidService_Factory(t) { return new (t || RfidService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RfidService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RfidService, factory: RfidService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RfidService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "UXJo":
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js ***!
  \**********************************************************************/
/*! exports provided: CKD_COPY_TO_CLIPBOARD_CONFIG, CdkCopyToClipboard, Clipboard, ClipboardModule, PendingCopy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CKD_COPY_TO_CLIPBOARD_CONFIG", function() { return CKD_COPY_TO_CLIPBOARD_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCopyToClipboard", function() { return CdkCopyToClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return Clipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardModule", function() { return ClipboardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingCopy", function() { return PendingCopy; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A pending copy-to-clipboard operation.
 *
 * The implementation of copying text to the clipboard modifies the DOM and
 * forces a relayout. This relayout can take too long if the string is large,
 * causing the execCommand('copy') to happen too long after the user clicked.
 * This results in the browser refusing to copy. This object lets the
 * relayout happen in a separate tick from copying by providing a copy function
 * that can be called later.
 *
 * Destroy must be called when no longer in use, regardless of whether `copy` is
 * called.
 */

class PendingCopy {
    constructor(text, _document) {
        this._document = _document;
        const textarea = this._textarea = this._document.createElement('textarea');
        const styles = textarea.style;
        // Hide the element for display and accessibility. Set a fixed position so the page layout
        // isn't affected. We use `fixed` with `top: 0`, because focus is moved into the textarea
        // for a split second and if it's off-screen, some browsers will attempt to scroll it into view.
        styles.position = 'fixed';
        styles.top = styles.opacity = '0';
        styles.left = '-999em';
        textarea.setAttribute('aria-hidden', 'true');
        textarea.value = text;
        this._document.body.appendChild(textarea);
    }
    /** Finishes copying the text. */
    copy() {
        const textarea = this._textarea;
        let successful = false;
        try { // Older browsers could throw if copy is not supported.
            if (textarea) {
                const currentFocus = this._document.activeElement;
                textarea.select();
                textarea.setSelectionRange(0, textarea.value.length);
                successful = this._document.execCommand('copy');
                if (currentFocus) {
                    currentFocus.focus();
                }
            }
        }
        catch (_a) {
            // Discard error.
            // Initial setting of {@code successful} will represent failure here.
        }
        return successful;
    }
    /** Cleans up DOM changes used to perform the copy operation. */
    destroy() {
        const textarea = this._textarea;
        if (textarea) {
            if (textarea.parentNode) {
                textarea.parentNode.removeChild(textarea);
            }
            this._textarea = undefined;
        }
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A service for copying text to the clipboard.
 */
class Clipboard {
    constructor(document) {
        this._document = document;
    }
    /**
     * Copies the provided text into the user's clipboard.
     *
     * @param text The string to copy.
     * @returns Whether the operation was successful.
     */
    copy(text) {
        const pendingCopy = this.beginCopy(text);
        const successful = pendingCopy.copy();
        pendingCopy.destroy();
        return successful;
    }
    /**
     * Prepares a string to be copied later. This is useful for large strings
     * which take too long to successfully render and be copied in the same tick.
     *
     * The caller must call `destroy` on the returned `PendingCopy`.
     *
     * @param text The string to copy.
     * @returns the pending copy operation.
     */
    beginCopy(text) {
        return new PendingCopy(text, this._document);
    }
}
Clipboard.ɵfac = function Clipboard_Factory(t) { return new (t || Clipboard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
Clipboard.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function Clipboard_Factory() { return new Clipboard(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); }, token: Clipboard, providedIn: "root" });
Clipboard.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Clipboard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token that can be used to provide the default options to `CdkCopyToClipboard`. */
const CKD_COPY_TO_CLIPBOARD_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('CKD_COPY_TO_CLIPBOARD_CONFIG');
/**
 * Provides behavior for a button that when clicked copies content into user's
 * clipboard.
 */
class CdkCopyToClipboard {
    constructor(_clipboard, _ngZone, config) {
        this._clipboard = _clipboard;
        this._ngZone = _ngZone;
        /** Content to be copied. */
        this.text = '';
        /**
         * How many times to attempt to copy the text. This may be necessary for longer text, because
         * the browser needs time to fill an intermediate textarea element and copy the content.
         */
        this.attempts = 1;
        /**
         * Emits when some text is copied to the clipboard. The
         * emitted value indicates whether copying was successful.
         */
        this.copied = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Copies that are currently being attempted. */
        this._pending = new Set();
        if (config && config.attempts != null) {
            this.attempts = config.attempts;
        }
    }
    /** Copies the current text to the clipboard. */
    copy(attempts = this.attempts) {
        if (attempts > 1) {
            let remainingAttempts = attempts;
            const pending = this._clipboard.beginCopy(this.text);
            this._pending.add(pending);
            const attempt = () => {
                const successful = pending.copy();
                if (!successful && --remainingAttempts && !this._destroyed) {
                    // We use 1 for the timeout since it's more predictable when flushing in unit tests.
                    this._currentTimeout = this._ngZone.runOutsideAngular(() => setTimeout(attempt, 1));
                }
                else {
                    this._currentTimeout = null;
                    this._pending.delete(pending);
                    pending.destroy();
                    this.copied.emit(successful);
                }
            };
            attempt();
        }
        else {
            this.copied.emit(this._clipboard.copy(this.text));
        }
    }
    ngOnDestroy() {
        if (this._currentTimeout) {
            clearTimeout(this._currentTimeout);
        }
        this._pending.forEach(copy => copy.destroy());
        this._pending.clear();
        this._destroyed = true;
    }
}
CdkCopyToClipboard.ɵfac = function CdkCopyToClipboard_Factory(t) { return new (t || CdkCopyToClipboard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Clipboard), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CKD_COPY_TO_CLIPBOARD_CONFIG, 8)); };
CdkCopyToClipboard.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CdkCopyToClipboard, selectors: [["", "cdkCopyToClipboard", ""]], hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CdkCopyToClipboard_click_HostBindingHandler() { return ctx.copy(); });
    } }, inputs: { text: ["cdkCopyToClipboard", "text"], attempts: ["cdkCopyToClipboardAttempts", "attempts"] }, outputs: { copied: "cdkCopyToClipboardCopied" } });
CdkCopyToClipboard.ctorParameters = () => [
    { type: Clipboard },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [CKD_COPY_TO_CLIPBOARD_CONFIG,] }] }
];
CdkCopyToClipboard.propDecorators = {
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkCopyToClipboard',] }],
    attempts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkCopyToClipboardAttempts',] }],
    copied: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['cdkCopyToClipboardCopied',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkCopyToClipboard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[cdkCopyToClipboard]',
                host: {
                    '(click)': 'copy()'
                }
            }]
    }], function () { return [{ type: Clipboard }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [CKD_COPY_TO_CLIPBOARD_CONFIG]
            }] }]; }, { text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkCopyToClipboard']
        }], attempts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkCopyToClipboardAttempts']
        }], copied: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['cdkCopyToClipboardCopied']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class ClipboardModule {
}
ClipboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ClipboardModule });
ClipboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ClipboardModule_Factory(t) { return new (t || ClipboardModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClipboardModule, { declarations: [CdkCopyToClipboard], exports: [CdkCopyToClipboard] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClipboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [CdkCopyToClipboard],
                exports: [CdkCopyToClipboard]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=clipboard.js.map

/***/ }),

/***/ "XcyY":
/*!************************************************!*\
  !*** ./src/app/shared/utils/chLogs.message.ts ***!
  \************************************************/
/*! exports provided: ChLogsMessageConstant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChLogsMessageConstant", function() { return ChLogsMessageConstant; });
class ChLogsMessageConstant {
}
ChLogsMessageConstant.errorMessage = 'Please try agin later';
ChLogsMessageConstant.commandMessage = 'Command has been send successfully. ';
ChLogsMessageConstant.chargerOffline = "Charger is offline";
ChLogsMessageConstant.errorAvailabilty = 'Please provide availability type.';
ChLogsMessageConstant.chargerAlreadyStarted = 'Charger is already started';
ChLogsMessageConstant.errorOCPPIdTag = 'Please provide ocpp id tag.';
ChLogsMessageConstant.errorOTP = 'Please provide valid otp.';
ChLogsMessageConstant.errorActiveTransactionID = 'Please provide active transaction id.';
ChLogsMessageConstant.errorDataTag = 'Please provide data tag.';
ChLogsMessageConstant.errorMessageID = "Please provide message id";
ChLogsMessageConstant.errorVendorID = "Please provide vendor id";
ChLogsMessageConstant.errorEndTime = "Please provide end date time.";
ChLogsMessageConstant.errorStartTime = "Please provide start date time.";
ChLogsMessageConstant.errorRetriveDateTime = "Please provide  retrive date time.";
ChLogsMessageConstant.errorTriggerMessage = "Please provide trigger message.";
ChLogsMessageConstant.errorRetryInterval = "Please provide retry interval.";
ChLogsMessageConstant.errorProvideRetrive = "Please provide retries.";
ChLogsMessageConstant.errorLocation = "Please provide location.";
ChLogsMessageConstant.chargerStarted = 'Charger started successfully';
ChLogsMessageConstant.chargerStope = 'Charger stoped successfully';
ChLogsMessageConstant.errorAtlestKey = "Select at least one key";
ChLogsMessageConstant.errorExpiryDate = "Please provide expiry date.";
ChLogsMessageConstant.errorIDTag = "Please provide id tag.";
ChLogsMessageConstant.newValueMessage = "New Value is not set";
ChLogsMessageConstant.cpoNotFound = " Charger is not assoicated with any cpo or station";
ChLogsMessageConstant.stationNotFound = "Charger is not assoicated with any cpo or station";
ChLogsMessageConstant.errorChargingRateUnit = "Please select charging rate unit";
ChLogsMessageConstant.errorAvailabilityType = "Please select Availability type";
ChLogsMessageConstant.errorOCPPChargingProfile = "Please select OCPP charging profile";
ChLogsMessageConstant.errorUpdateType = "Please provide update type";
ChLogsMessageConstant.errorListVersion = "Please provide list version";


/***/ }),

/***/ "fWnM":
/*!**************************************************!*\
  !*** ./src/app/shared/models/charger/charger.ts ***!
  \**************************************************/
/*! exports provided: Charger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Charger", function() { return Charger; });
class Charger {
}


/***/ }),

/***/ "qrAl":
/*!******************************************************************************!*\
  !*** ./src/app/shared/services/charging-profile/charging-profile.service.ts ***!
  \******************************************************************************/
/*! exports provided: ChargingProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargingProfileService", function() { return ChargingProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ChargingProfileService {
    //schedule_tab = false;
    // period_tab = false;
    constructor(http) {
        this.http = http;
        this.apiUrl2 = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2}/master/getActiveMasterConfigData`;
        this.apiUrl3 = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2}/Chargers`;
    }
    getChargerProfile() {
        return this.http.get(`${this.apiUrl3}/getChargerProfile/`);
    }
    getChargingProfilePurpose() {
        return this.http.get(`${this.apiUrl2}/ChargingProfilePurpose/`);
    }
    getRecurrencyKind() {
        return this.http.get(`${this.apiUrl2}/RecurrencyKind/`);
    }
    getChargingProfileKind() {
        return this.http.get(`${this.apiUrl2}/ChargingProfileKind/`);
    }
    getChargingRateUnit() {
        return this.http.get(`${this.apiUrl2}/ChargingRateUnit/`);
    }
    getNumberPhases() {
        return this.http.get(`${this.apiUrl2}/Number Phases`);
    }
    chargingProfileCreation(params) {
        return this.http.post(`${this.apiUrl3}/ChargingProfileCreation`, params);
    }
    chargingScheduleCreation(params) {
        return this.http.post(`${this.apiUrl3}/ChargingScheduleCreation`, params);
    }
    chargingSchedulePeriodCreation(params) {
        return this.http.post(`${this.apiUrl3}/ChargingSchedulePeriodCreation`, params);
    }
    getAllChargingProfileList() {
        return this.http.get(`${this.apiUrl3}/getAllChargingProfileList`);
    }
    chargingProfileDelete(id, login_id) {
        return this.http.delete(`${this.apiUrl3}/ChargingProfileDelete/${id}/${login_id}`);
    }
    chargingScheduleDelete(id, login_id) {
        return this.http.delete(`${this.apiUrl3}/ChargingScheduleDelete/${id}/${login_id}`);
    }
    chargingSchedulePeriodDelete(id, login_id) {
        return this.http.delete(`${this.apiUrl3}/ChargingSchedulePeriodDelete/${id}/${login_id}`);
    }
    updateChargingProfile(params) {
        return this.http.post(`${this.apiUrl3}/UpdateChargingProfile`, params);
    }
    updateChargingSchedule(params) {
        return this.http.post(`${this.apiUrl3}/UpdateChargingSchedule`, params);
    }
    updateChargingSchedulePeriod(params) {
        return this.http.post(`${this.apiUrl3}/UpdateChargingSchedulePeriod`, params);
    }
    getChargerSchedulePeriodByScheduleId(Schedule_id) {
        return this.http.get(`${this.apiUrl3}/getChargerSchedulePeriodByScheduleId/${Schedule_id}`);
    }
    getChargerScheduleByProfileId(profile_id) {
        return this.http.get(`${this.apiUrl3}/getChargerScheduleByProfileId/${profile_id}`);
    }
}
ChargingProfileService.ɵfac = function ChargingProfileService_Factory(t) { return new (t || ChargingProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ChargingProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChargingProfileService, factory: ChargingProfileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChargingProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "uouI":
/*!******************************************************************************!*\
  !*** ./src/app/main/logs-history/ack-json-modal/ack-json-modal.component.ts ***!
  \******************************************************************************/
/*! exports provided: AckModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AckModalComponent", function() { return AckModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/animations */ "PVWW");
/* harmony import */ var app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/utils/message.constant */ "AgqY");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var app_shared_components_ngx_json_viewer_ngx_json_viewer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/components/ngx-json-viewer/ngx-json-viewer.component */ "uEYc");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");














class AckModalComponent {
    constructor(dialogRef, data, snackBar, clipboard) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.snackBar = snackBar;
        this.clipboard = clipboard;
        this.expanded = true;
    }
    ngOnInit() {
        this.initialize();
    }
    initialize() {
        this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
        this.jsonData = JSON.parse(this.data.data);
        this.action = this.data.action;
    }
    copyJson() {
        this.clipboard.copy(JSON.stringify(this.jsonData));
        if (this.action == "REQUEST") {
            this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].requestCopied, 'Dismiss', { duration: 5000 });
        }
        else {
            this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].responseCopied, 'Dismiss', { duration: 5000 });
        }
    }
}
AckModalComponent.ɵfac = function AckModalComponent_Factory(t) { return new (t || AckModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__["Clipboard"])); };
AckModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AckModalComponent, selectors: [["app-acl-json-modal"]], decls: 11, vars: 2, consts: [[1, "action_toolbar"], ["fxLayout", "row wrap ", 1, "page-layout", "simple", "fullwidth"], [1, "content", "p-24"], [2, "max-height", "22vw", "overflow", "auto"], [3, "json", "expanded"], ["fxLayout", "row", "fxLayoutAlign", "start center", 2, "margin-top", "10px"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-raised-button", "", "color", "accent", "matTooltip", "Copy", 2, "cursor", "pointer", "margin-left", "10px", 3, "click"]], template: function AckModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Request/Response");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ngx-json-viewer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AckModalComponent_Template_button_click_7_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AckModalComponent_Template_button_click_9_listener() { return ctx.copyJson(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("json", ctx.jsonData)("expanded", ctx.expanded);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], app_shared_components_ngx_json_viewer_ngx_json_viewer_component__WEBPACK_IMPORTED_MODULE_8__["NgxJsonViewerComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2stanNvbi1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"], encapsulation: 2, data: { animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_2__["fuseAnimations"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AckModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-acl-json-modal',
                templateUrl: './ack-json-modal.component.html',
                styleUrls: ['./ack-json-modal.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_2__["fuseAnimations"]
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__["Clipboard"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~app-main-logs-history-logs-history-module~app-main-ocpp-charger-profile-ocpp-charger-profile-module-es2015.js.map