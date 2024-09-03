(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rfid-recharge-rfid-recharge-module"], {
    /***/
    "5eun":
    /*!***********************************************************************************************************************!*\
      !*** ./src/app/main/asset/rfid-management/rfid-recharge/energy-consumption-logs/energy-consumption-logs.component.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: RECHARGE_HISTORY, EnergyConsumptionLogsComponent */

    /***/
    function eun(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RECHARGE_HISTORY", function () {
        return RECHARGE_HISTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnergyConsumptionLogsComponent", function () {
        return EnergyConsumptionLogsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../action-dialog/action-dialog.component */
      "iRig");
      /* harmony import */


      var app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/utils/message.constant */
      "AgqY");
      /* harmony import */


      var mat_table_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! mat-table-filter */
      "6Ugt");
      /* harmony import */


      var _fuse_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fuse/animations */
      "PVWW");
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! xlsx */
      "EUZL");
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! jspdf */
      "i680");
      /* harmony import */


      var jspdf_autotable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! jspdf-autotable */
      "DaQG");
      /* harmony import */


      var jspdf_autotable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! app/shared/services/cpo/cpo.service */
      "k3ne");
      /* harmony import */


      var app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! app/shared/services/rfid/rfid.service */
      "QtQ4");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function EnergyConsumptionLogsComponent_mat_card_8_mat_option_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r23.name, " ");
        }
      }

      function EnergyConsumptionLogsComponent_mat_card_8_mat_error_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select cpo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EnergyConsumptionLogsComponent_mat_card_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select CPO ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-autocomplete", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function EnergyConsumptionLogsComponent_mat_card_8_Template_mat_autocomplete_optionSelected_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.onCPOChange($event.option.value.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EnergyConsumptionLogsComponent_mat_card_8_mat_option_10_Template, 2, 2, "mat-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "expand_more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "account_circle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EnergyConsumptionLogsComponent_mat_card_8_mat_error_17_Template, 2, 0, "mat-error", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "From Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 33, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function EnergyConsumptionLogsComponent_mat_card_8_Template_input_dateChange_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.onChangeDateFilter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-datepicker-toggle", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "mat-datepicker", 36, 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "To Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function EnergyConsumptionLogsComponent_mat_card_8_Template_input_dateChange_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.onChangeDateFilter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-datepicker-toggle", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-datepicker", 36, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r0.displayCPO);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 12, ctx_r0.filteredOptionsCPO));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("CPO").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r21)("max", ctx_r0.currDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r22)("min", !!ctx_r0.form.value.fromDate ? ctx_r0.form.value.fromDate._d : "2020-01-01")("max", ctx_r0.currDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r22);
        }
      }

      function EnergyConsumptionLogsComponent_th_14_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CPO Name \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnergyConsumptionLogsComponent_th_14_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r30.changeVisibility("cpoSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EnergyConsumptionLogsComponent_th_14_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EnergyConsumptionLogsComponent_th_14_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r32.filterEntity.cpo_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnergyConsumptionLogsComponent_th_14_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r34.changeVisibility("cpoSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r29.filterEntity.cpo_name);
        }
      }

      function EnergyConsumptionLogsComponent_th_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EnergyConsumptionLogsComponent_th_14_span_1_Template, 4, 0, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EnergyConsumptionLogsComponent_th_14_mat_form_field_2_Template, 4, 1, "mat-form-field", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.cpoSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.cpoSearch);
        }
      }

      function EnergyConsumptionLogsComponent_td_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r35.cpo_name);
        }
      }

      function EnergyConsumptionLogsComponent_th_17_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "RFID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnergyConsumptionLogsComponent_th_17_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r38.changeVisibility("rfidNoSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EnergyConsumptionLogsComponent_th_17_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EnergyConsumptionLogsComponent_th_17_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r40.filterEntity.rf_id_no = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnergyConsumptionLogsComponent_th_17_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r42.changeVisibility("rfidNoSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r37.filterEntity.rf_id_no);
        }
      }

      function EnergyConsumptionLogsComponent_th_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EnergyConsumptionLogsComponent_th_17_span_1_Template, 4, 0, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EnergyConsumptionLogsComponent_th_17_mat_form_field_2_Template, 4, 1, "mat-form-field", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.rfidNoSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.rfidNoSearch);
        }
      }

      function EnergyConsumptionLogsComponent_td_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r43 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r43.rf_id_no);
        }
      }

      function EnergyConsumptionLogsComponent_th_20_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Bill Amount \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnergyConsumptionLogsComponent_th_20_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r46.changeVisibility("billedAmountSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EnergyConsumptionLogsComponent_th_20_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EnergyConsumptionLogsComponent_th_20_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r48.filterEntity.billed_amt = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnergyConsumptionLogsComponent_th_20_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r50.changeVisibility("billedAmountSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r45.filterEntity.billed_amt);
        }
      }

      function EnergyConsumptionLogsComponent_th_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EnergyConsumptionLogsComponent_th_20_span_1_Template, 4, 0, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EnergyConsumptionLogsComponent_th_20_mat_form_field_2_Template, 4, 1, "mat-form-field", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.billedAmountSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.billedAmountSearch);
        }
      }

      function EnergyConsumptionLogsComponent_td_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r51 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r51.billed_amt);
        }
      }

      function EnergyConsumptionLogsComponent_th_23_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Start time ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnergyConsumptionLogsComponent_th_23_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r54.changeVisibility("startTimeSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EnergyConsumptionLogsComponent_th_23_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EnergyConsumptionLogsComponent_th_23_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r56.filterEntity.start_time = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnergyConsumptionLogsComponent_th_23_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r58.changeVisibility("startTimeSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r53.filterEntity.start_time);
        }
      }

      function EnergyConsumptionLogsComponent_th_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EnergyConsumptionLogsComponent_th_23_span_1_Template, 4, 0, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EnergyConsumptionLogsComponent_th_23_mat_form_field_2_Template, 4, 1, "mat-form-field", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.startTimeSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.startTimeSearch);
        }
      }

      function EnergyConsumptionLogsComponent_td_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r59 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r59.start_time, " ");
        }
      }

      function EnergyConsumptionLogsComponent_th_26_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Stop time ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnergyConsumptionLogsComponent_th_26_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r62.changeVisibility("stopTimeSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EnergyConsumptionLogsComponent_th_26_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EnergyConsumptionLogsComponent_th_26_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);

            var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r64.filterEntity.stop_time = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnergyConsumptionLogsComponent_th_26_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);

            var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r66.changeVisibility("stopTimeSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r61.filterEntity.stop_time);
        }
      }

      function EnergyConsumptionLogsComponent_th_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EnergyConsumptionLogsComponent_th_26_span_1_Template, 4, 0, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EnergyConsumptionLogsComponent_th_26_mat_form_field_2_Template, 4, 1, "mat-form-field", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.stopTimeSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.stopTimeSearch);
        }
      }

      function EnergyConsumptionLogsComponent_td_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r67 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r67.stop_time, " ");
        }
      }

      function EnergyConsumptionLogsComponent_th_29_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transaction Date \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnergyConsumptionLogsComponent_th_29_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

            var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r70.changeVisibility("transactionDateSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EnergyConsumptionLogsComponent_th_29_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EnergyConsumptionLogsComponent_th_29_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

            var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r72.filterEntity.transaction_date = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnergyConsumptionLogsComponent_th_29_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

            var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r74.changeVisibility("transactionDateSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r69.filterEntity.transaction_date);
        }
      }

      function EnergyConsumptionLogsComponent_th_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EnergyConsumptionLogsComponent_th_29_span_1_Template, 4, 0, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EnergyConsumptionLogsComponent_th_29_mat_form_field_2_Template, 4, 1, "mat-form-field", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.transactionDateSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.transactionDateSearch);
        }
      }

      function EnergyConsumptionLogsComponent_td_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r75 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r75.transaction_date, " ");
        }
      }

      function EnergyConsumptionLogsComponent_th_32_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Duration \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnergyConsumptionLogsComponent_th_32_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r78.changeVisibility("durationSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EnergyConsumptionLogsComponent_th_32_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EnergyConsumptionLogsComponent_th_32_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81);

            var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r80.filterEntity.duration = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnergyConsumptionLogsComponent_th_32_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81);

            var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r82.changeVisibility("durationSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r77.filterEntity.duration);
        }
      }

      function EnergyConsumptionLogsComponent_th_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EnergyConsumptionLogsComponent_th_32_span_1_Template, 4, 0, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EnergyConsumptionLogsComponent_th_32_mat_form_field_2_Template, 4, 1, "mat-form-field", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r13.durationSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.durationSearch);
        }
      }

      function EnergyConsumptionLogsComponent_td_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r83 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r83.duration);
        }
      }

      function EnergyConsumptionLogsComponent_tr_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 55);
        }
      }

      function EnergyConsumptionLogsComponent_tr_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 56);
        }
      }

      var _c0 = function _c0() {
        return [10, 30, 50, 100];
      };

      var RECHARGE_HISTORY = function RECHARGE_HISTORY() {
        _classCallCheck(this, RECHARGE_HISTORY);
      };

      var EnergyConsumptionLogsComponent = /*#__PURE__*/function () {
        function EnergyConsumptionLogsComponent(dialog, snackBar, fb, cpoService, rfidService, datePipe) {
          _classCallCheck(this, EnergyConsumptionLogsComponent);

          this.dialog = dialog;
          this.snackBar = snackBar;
          this.fb = fb;
          this.cpoService = cpoService;
          this.rfidService = rfidService;
          this.datePipe = datePipe;
          this.head = [["CPO Name", "RFID No", "Bill Amount", "Start Amount", "Stop Amount", "Transaction Date", "Duration"]];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
          this.clientNameSearch = false;
          this.cpoSearch = false;
          this.durationSearch = false;
          this.stationNameSearch = false;
          this.rfidNoSearch = false;
          this.amountSearch = false;
          this.billedAmountSearch = false;
          this.startTimeSearch = false;
          this.stopTimeSearch = false;
          this.transactionDateSearch = false;
          this.chargAmountSearch = false;
          this.createdDateSearch = false;
          this.statusSearch = false;
          this.transactionid = false;
          this.stationid = false;
          this.tranactionDate = false;
          this.form = this.fb.group({
            CPO: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required],
            toDate: [""],
            fromDate: [""]
          });
        }

        _createClass(EnergyConsumptionLogsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.localStorage = JSON.parse(localStorage.getItem("userDetails"));
            this.columns = [{
              field: "cpo_name"
            }, {
              field: "rf_id_no"
            }, {
              field: "billed_amt"
            }, {
              field: "start_time"
            }, {
              field: "stop_time"
            }, {
              field: "transaction_date"
            }, {
              field: "duration"
            }];
            this.displayedColumns = this.columns.map(function (column) {
              return column.field;
            });
            this.getactivecposcw(this.localStorage.userId);
            this.filterEntity = new RECHARGE_HISTORY();
            this.filterType = mat_table_filter__WEBPACK_IMPORTED_MODULE_6__["MatTableFilter"].ANYWHERE;
          }
        }, {
          key: "getactivecposcw",
          value: function getactivecposcw(id) {
            var _this = this;

            this.cpoService.getactivecposcwwithAll(id).subscribe(function (data) {
              _this.cposName = data;

              if (_this.localStorage.role_code != "END") {
                if (_this.cposName != null && _this.cposName != undefined) {
                  var toSelect = _this.cposName[0];
                  _this.selectedCpo_id = toSelect.id;

                  _this.form.get("CPO").setValue(toSelect); // if (this.localStorage.role_code == "CPO") {
                  //     this.form.get("CPO").disable();
                  // }
                  // this.getrfidRechargeHistory(this.selectedCpo_id);


                  _this.getrfidRechargeHistory();
                }

                _this.filteredOptionsCPO = _this.form.controls.CPO.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(""), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (value) {
                  return typeof value === "string" ? value : value.name;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (name) {
                  return name ? _this._filterCPO(name) : _this.cposName;
                }));
              }
            }, function (err) {});
          }
        }, {
          key: "displayCPO",
          value: function displayCPO(item) {
            return item && item.name ? item.name : "";
          }
        }, {
          key: "_filterCPO",
          value: function _filterCPO(name) {
            var filterValue = name.toLowerCase();
            return this.cposName.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "onCPOChange",
          value: function onCPOChange(cpo_id) {
            this.selectedCpo_id = cpo_id;
            this.getrfidRechargeHistory();
          }
        }, {
          key: "onChangeDateFilter",
          value: function onChangeDateFilter() {
            this.getrfidRechargeHistory();
          }
        }, {
          key: "getrfidRechargeHistory",
          value: function getrfidRechargeHistory() {
            var _this2 = this;

            var formValues = this.form.value;
            var fromDate = this.datePipe.transform(formValues.fromDate, "dd-MM-yyyy");
            var toDate = this.datePipe.transform(formValues.toDate, "dd-MM-yyyy");
            var params = {
              cpo_id: formValues.CPO.id,
              fromDate: fromDate,
              toDate: toDate
            };
            this.rfidService.getConsumptionLogsByCpoId(params).subscribe(function (resp) {
              if (resp.status) {
                _this2.rfidRechargeHistory = resp.data;

                for (var i = 0; i < _this2.rfidRechargeHistory.length; i++) {
                  _this2.rfidRechargeHistory[i].start_time = _this2.datePipe.transform(_this2.rfidRechargeHistory[i].start_time, "dd/MM/yyyy h:mm:ss a");
                  _this2.rfidRechargeHistory[i].stop_time = _this2.datePipe.transform(_this2.rfidRechargeHistory[i].stop_time, "dd/MM/yyyy h:mm:ss a");
                  _this2.rfidRechargeHistory[i].transaction_date = _this2.datePipe.transform(_this2.rfidRechargeHistory[i].transaction_date, "dd/MM/yyyy h:mm:ss a");
                }

                _this2.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this2.rfidRechargeHistory);
                _this2.dataSource.paginator = _this2.paginator;
                _this2.dataSource.sort = _this2.sort;
              } else {
                _this2.rfidRechargeHistory = [];
                _this2.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this2.rfidRechargeHistory);
                _this2.dataSource.paginator = _this2.paginator;
                _this2.dataSource.sort = _this2.sort;

                _this2.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].NoRecordFoundMessage, "Dismiss", {
                  duration: 3000
                });

                return;
              }
            }, function (err) {});
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(event) {
            var filterValue = event.target.value;
            this.dataSource.filter = filterValue.trim().toLowerCase();

            if (this.dataSource.paginator) {
              this.dataSource.paginator.firstPage();
            }
          }
        }, {
          key: "openDialog",
          value: function openDialog(action, data) {
            var _this3 = this;

            var params = {
              action: action,
              data: data
            };
            var dialogRef = this.dialog.open(_action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ActionDialogComponent"], {
              width: "1200px",
              data: params,
              panelClass: "app-action-dialog",
              autoFocus: false,
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              setTimeout(function () {
                // this.getrfidRechargeHistory(this.selectedCpo_id);
                _this3.getrfidRechargeHistory();
              }, 1000);
            });
          }
        }, {
          key: "changeVisibility",
          value: function changeVisibility(visibleOption, ev) {
            ev.stopPropagation();

            if (visibleOption == "cpoSearch") {
              this.cpoSearch = !this.cpoSearch;
              this.filterEntity.cpo_name = "";
            }

            if (visibleOption == "rfidNoSearch") {
              this.rfidNoSearch = !this.rfidNoSearch;
              this.filterEntity.rf_id_no = "";
            }

            if (visibleOption == "billedAmountSearch") {
              this.billedAmountSearch = !this.billedAmountSearch;
              this.filterEntity.billed_amt = "";
            }

            if (visibleOption == "startTimeSearch") {
              this.startTimeSearch = !this.startTimeSearch;
              this.filterEntity.start_time = "";
            }

            if (visibleOption == "stopTimeSearch") {
              this.stopTimeSearch = !this.stopTimeSearch;
              this.filterEntity.stop_time = "";
            }

            if (visibleOption == "transactionDateSearch") {
              this.transactionDateSearch = !this.transactionDateSearch;
              this.filterEntity.transaction_date = "";
            }

            if (visibleOption == "createdDateSearch") {
              this.createdDateSearch = !this.createdDateSearch;
              this.filterEntity.station_id = "";
            }

            if (visibleOption == "durationSearch") {
              this.durationSearch = !this.durationSearch;
              this.filterEntity.duration = "";
            }
          }
        }, {
          key: "tableExport",
          value: function tableExport() {
            this.exportedData = [];

            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              var rechargeHistoryModel = this.dataSource.filteredData[i]; //this.exportedData.push({name: `name${i}`, description: `description${i}`,
              //statusString: `statusString${i}`});

              var data = {
                "CPO Name": rechargeHistoryModel.cpo_name,
                "RFID No": rechargeHistoryModel.rf_id_no,
                "Bill Amount": rechargeHistoryModel.billed_amt,
                "Start Time": rechargeHistoryModel.start_time,
                "Stop Time": rechargeHistoryModel.stop_time,
                "Transaction Date": rechargeHistoryModel.transaction_date,
                "Duration": rechargeHistoryModel.duration
              };
              this.exportedData.push(data);
            }

            var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].json_to_sheet(this.exportedData);
            var workBook = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].book_append_sheet(workBook, workSheet, "sales disptch");
            xlsx__WEBPACK_IMPORTED_MODULE_8__["writeFile"](workBook, "RFID By Cpo.xlsx");
          }
        }, {
          key: "pdfExport",
          value: function pdfExport() {
            var _this4 = this;

            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_9__["jsPDF"]({// set needed dimensions for any elemen
            });
            this.exportedData = [];

            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              var rechargeHistoryModel = this.dataSource.filteredData[i]; //this.exportedData.push({name: `name${i}`, description: `description${i}`,
              //statusString: `statusString${i}`});

              var data = [rechargeHistoryModel.cpo_name, rechargeHistoryModel.rf_id_no, rechargeHistoryModel.billed_amt, rechargeHistoryModel.start_time, rechargeHistoryModel.stop_time, rechargeHistoryModel.transaction_date, rechargeHistoryModel.duration];
              this.exportedData.push(data);
            }

            var img = new Image();
            var imgRight = new Image();
            var src = "assets/images/logos/logo_sparkev_main.png";
            var srcSparkEV = "assets/images/logos/logo_SparkEV_black.png";
            imgRight.src = srcSparkEV;
            var createdDate = new Date().toLocaleString("en-GB");
            img.src = src;
            doc.setFontSize(11);
            doc.setTextColor(100);
            doc.setFontSize(18);
            doc.autoTable({
              head: this.head,
              body: this.exportedData,
              theme: "grid",
              headStyles: {
                fontStyle: "majalla",
                fillColor: [11, 148, 68]
              },
              styles: {
                cellPadding: 1,
                fontSize: 8
              },
              margin: {
                top: 22
              },
              didDrawCell: function didDrawCell(data) {},
              didDrawPage: function didDrawPage(data) {
                doc.addImage(img, 15, 7, 15, 6);
                doc.addImage(imgRight, 170, 7, 25, 6);
                doc.text("Charging Station Report", doc.internal.pageSize.getWidth() / 2, 11, {
                  align: "center"
                });
                doc.setTextColor(211, 211, 211);
                doc.setFontSize(60);
                doc.setGState(doc.GState({
                  opacity: 0.6
                }));
                doc.text("Confidential/Not for Public use", 25, 285, null, 60);
                doc.setGState(doc.GState({
                  opacity: 1
                }));
                doc.setTextColor(100);
                doc.setFontSize(9);
                doc.text("Date:" + createdDate, 15, 18);
                doc.text("Generated By:" + _this4.localStorage.f_Name, 195, 18, {
                  align: "right"
                });
                doc = _this4.addWaterMark(doc);
              }
            }); // below line for Open PDF document in new tab

            doc.output("dataurlnewwindow"); // below line for Download PDF document

            doc.save("Charging Station report.pdf");
          }
        }, {
          key: "addWaterMark",
          value: function addWaterMark(doc) {
            var newpage = doc.getNumberOfPages();
            var i = doc.internal.getNumberOfPages();
            doc.setTextColor(100);
            doc.setFontSize(10); //Print Page 1 of 4 for example

            doc.text("Page " + String(i) + " of " + String(newpage), 210 - 20, 297 - 10, null, null, "right");
            return doc;
          }
        }]);

        return EnergyConsumptionLogsComponent;
      }();

      EnergyConsumptionLogsComponent.ɵfac = function EnergyConsumptionLogsComponent_Factory(t) {
        return new (t || EnergyConsumptionLogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_16__["CpoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_17__["RfidService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]));
      };

      EnergyConsumptionLogsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EnergyConsumptionLogsComponent,
        selectors: [["app-energy-consumption-logs"]],
        viewQuery: function EnergyConsumptionLogsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]])],
        decls: 37,
        vars: 8,
        consts: [[2, "text-align", "left", "margin-left", "10px", "margin-bottom", "10px", "margin-top", "10px"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Excel Download", 3, "click"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "PDF Download", 3, "click"], ["style", "padding: 16px !important", 4, "ngIf"], ["fxLayout", "row wrap", 1, "page-layout", "simple", "fullwidth", 2, "overflow", "scroll"], [1, "content", 2, "min-width", "auto"], [1, "mat-elevation-z8"], ["mat-table", "", "matTableFilter", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "exampleEntity", "filterType"], ["matColumnDef", "cpo_name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "rf_id_no"], ["matColumnDef", "billed_amt"], ["matColumnDef", "start_time"], ["matColumnDef", "stop_time"], ["matColumnDef", "transaction_date"], ["matColumnDef", "duration"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], [2, "padding", "16px !important"], ["fxLayoutAlign", "start", "fxFlex", "1 0 auto", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "33", 2, "height", "60px"], ["type", "text", "matInput", "", "formControlName", "CPO", 3, "matAutocomplete"], [3, "displayWith", "optionSelected"], ["auto2", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 2, "display", "flex"], ["matSuffix", "", 1, "secondary-text"], ["matSuffix", "", "matTooltip", "Please enter cpo name", 1, "secondary-text"], [4, "ngIf"], ["appearance", "outline", "fxFlex", "33", 1, "pr-4", 2, "height", "60px"], ["matInput", "", "formControlName", "fromDate", 3, "matDatepicker", "max", "dateChange"], ["fromDate", ""], ["matSuffix", "", 3, "for"], ["disabled", "false"], ["fDate", ""], ["matInput", "", "formControlName", "toDate", 3, "matDatepicker", "min", "max", "dateChange"], ["tDate", ""], [3, "value"], ["mat-header-cell", "", "mat-sort-header", ""], ["class", "custom_font_size", "style", "display: flex", 4, "ngIf"], ["appearance", "outline", "style", "width: 140px", "class", "list_input", 4, "ngIf"], [1, "custom_font_size", 2, "display", "flex"], ["matSuffix", "", 3, "click"], ["appearance", "outline", 1, "list_input", 2, "width", "140px"], ["matInput", "", "placeholder", "  CPO Name ", 3, "ngModel", "ngModelChange"], ["mat-cell", ""], ["matInput", "", "placeholder", " RFID ", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Billed Amount", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Start Time", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Stop Time", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", " Transaction Date ", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", " Duration ", 3, "ngModel", "ngModelChange"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function EnergyConsumptionLogsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnergyConsumptionLogsComponent_Template_button_click_1_listener() {
              return ctx.tableExport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "sim_card_download");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnergyConsumptionLogsComponent_Template_button_click_5_listener() {
              return ctx.pdfExport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "picture_as_pdf");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EnergyConsumptionLogsComponent_mat_card_8_Template, 33, 14, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EnergyConsumptionLogsComponent_th_14_Template, 3, 2, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EnergyConsumptionLogsComponent_td_15_Template, 2, 1, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EnergyConsumptionLogsComponent_th_17_Template, 3, 2, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EnergyConsumptionLogsComponent_td_18_Template, 2, 1, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EnergyConsumptionLogsComponent_th_20_Template, 3, 2, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EnergyConsumptionLogsComponent_td_21_Template, 2, 1, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, EnergyConsumptionLogsComponent_th_23_Template, 3, 2, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, EnergyConsumptionLogsComponent_td_24_Template, 2, 1, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, EnergyConsumptionLogsComponent_th_26_Template, 3, 2, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, EnergyConsumptionLogsComponent_td_27_Template, 2, 1, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](28, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, EnergyConsumptionLogsComponent_th_29_Template, 3, 2, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, EnergyConsumptionLogsComponent_td_30_Template, 2, 1, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](31, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, EnergyConsumptionLogsComponent_th_32_Template, 3, 2, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, EnergyConsumptionLogsComponent_td_33_Template, 2, 1, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, EnergyConsumptionLogsComponent_tr_34_Template, 1, 0, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, EnergyConsumptionLogsComponent_tr_35_Template, 1, 0, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "mat-paginator", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.localStorage.role_code != "END");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("exampleEntity", ctx.filterEntity)("filterType", ctx.filterType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["DefaultLayoutDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], mat_table_filter__WEBPACK_IMPORTED_MODULE_6__["MatTableFilterDirective"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepicker"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]],
        styles: ["mat-form-field.list_input div.mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\n.mat-header-cell .custom_font_size {\n  font-size: 15px !important;\n  text-align: left;\n}\n\nmat-form-field.list_input div.mat-form-field-infix {\n  padding: 0.5em 0 0.5em 0 !important;\n}\n\ntable {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxlbmVyZ3ktY29uc3VtcHRpb24tbG9ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FBQ0o7O0FBQ0E7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxtQ0FBQTtBQUdKOztBQUFBO0VBQ0ksV0FBQTtBQUdKOztBQUFBO0VBQ0ksWUFBQTtBQUdKIiwiZmlsZSI6ImVuZXJneS1jb25zdW1wdGlvbi1sb2dzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQubGlzdF9pbnB1dCBkaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtaGVhZGVyLWNlbGwgLmN1c3RvbV9mb250X3NpemUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbm1hdC1mb3JtLWZpZWxkLmxpc3RfaW5wdXQgZGl2Lm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICAgIHBhZGRpbmc6IDAuNWVtIDAgMC41ZW0gMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuIl19 */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_7__["fuseAnimations"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnergyConsumptionLogsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-energy-consumption-logs",
            templateUrl: "./energy-consumption-logs.component.html",
            styleUrls: ["./energy-consumption-logs.component.scss"],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_7__["fuseAnimations"],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]]
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBar"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"]
          }, {
            type: app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_16__["CpoService"]
          }, {
            type: app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_17__["RfidService"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], {
              "static": true
            }]
          }],
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "8b/9":
    /*!*********************************************************************************!*\
      !*** ./src/app/main/asset/rfid-management/rfid-recharge/list/list.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: RFID, ListComponent */

    /***/
    function b9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RFID", function () {
        return RFID;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
        return ListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../action-dialog/action-dialog.component */
      "iRig");
      /* harmony import */


      var app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/utils/message.constant */
      "AgqY");
      /* harmony import */


      var mat_table_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! mat-table-filter */
      "6Ugt");
      /* harmony import */


      var _fuse_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fuse/animations */
      "PVWW");
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! xlsx */
      "EUZL");
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! jspdf */
      "i680");
      /* harmony import */


      var jspdf_autotable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! jspdf-autotable */
      "DaQG");
      /* harmony import */


      var jspdf_autotable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! app/shared/services/cpo/cpo.service */
      "k3ne");
      /* harmony import */


      var app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! app/shared/services/rfid/rfid.service */
      "QtQ4");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function ListComponent_mat_card_8_mat_option_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r17.name, " ");
        }
      }

      function ListComponent_mat_card_8_mat_error_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select cpo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_mat_card_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select CPO ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-autocomplete", 24, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function ListComponent_mat_card_8_Template_mat_autocomplete_optionSelected_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.onCPOChange($event.option.value.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListComponent_mat_card_8_mat_option_10_Template, 2, 2, "mat-option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "expand_more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "account_circle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ListComponent_mat_card_8_mat_error_17_Template, 2, 0, "mat-error", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r0.displayCPO);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 5, ctx_r0.filteredOptionsCPO));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("CPO").invalid);
        }
      }

      function ListComponent_th_14_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Client Name \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_14_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r22.changeVisibility("clientNameSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_th_14_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_th_14_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r24.filterEntity.client_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_14_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r26.changeVisibility("clientNameSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r21.filterEntity.client_name);
        }
      }

      function ListComponent_th_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_th_14_span_1_Template, 4, 0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_th_14_mat_form_field_2_Template, 4, 1, "mat-form-field", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.clientNameSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.clientNameSearch);
        }
      }

      function ListComponent_td_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r27.client_name, " ");
        }
      }

      function ListComponent_th_17_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CPO Name \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_17_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r30.changeVisibility("cpoSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_th_17_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_th_17_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r32.filterEntity.cpo_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_17_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r34.changeVisibility("cpoSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r29.filterEntity.cpo_name);
        }
      }

      function ListComponent_th_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_th_17_span_1_Template, 4, 0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_th_17_mat_form_field_2_Template, 4, 1, "mat-form-field", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.cpoSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.cpoSearch);
        }
      }

      function ListComponent_td_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r35.cpo_name);
        }
      }

      function ListComponent_th_20_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Station Name \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_20_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r38.changeVisibility("stationNameSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_th_20_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_th_20_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r40.filterEntity.station_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_20_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r42.changeVisibility("stationNameSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r37.filterEntity.station_name);
        }
      }

      function ListComponent_th_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_th_20_span_1_Template, 4, 0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_th_20_mat_form_field_2_Template, 4, 1, "mat-form-field", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.stationNameSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.stationNameSearch);
        }
      }

      function ListComponent_td_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r43 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r43.station_name, " ");
        }
      }

      function ListComponent_th_23_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "RFID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_23_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r46.changeVisibility("rfidNoSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_th_23_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_th_23_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r48.filterEntity.rf_id_no = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_23_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r50.changeVisibility("rfidNoSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r45.filterEntity.rf_id_no);
        }
      }

      function ListComponent_th_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_th_23_span_1_Template, 4, 0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_th_23_mat_form_field_2_Template, 4, 1, "mat-form-field", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.rfidNoSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.rfidNoSearch);
        }
      }

      function ListComponent_td_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r51 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r51.rf_id_no);
        }
      }

      function ListComponent_th_26_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Balance \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_26_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r54.changeVisibility("balanceSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_th_26_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_th_26_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r56.filterEntity.balance = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_26_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r58.changeVisibility("balanceSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r53.filterEntity.balance);
        }
      }

      function ListComponent_th_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_th_26_span_1_Template, 4, 0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_th_26_mat_form_field_2_Template, 4, 1, "mat-form-field", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.balanceSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.balanceSearch);
        }
      }

      function ListComponent_td_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r59 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r59.balance);
        }
      }

      function ListComponent_ng_container_28_th_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_ng_container_28_td_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_ng_container_28_td_2_Template_mat_icon_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);

            var element_r62 = ctx.$implicit;

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r63.openDialog("EDIT", element_r62);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_ng_container_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_ng_container_28_th_1_Template, 3, 0, "th", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_ng_container_28_td_2_Template, 4, 0, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ListComponent_tr_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 50);
        }
      }

      function ListComponent_tr_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 51);
        }
      }

      var _c0 = function _c0() {
        return [10, 30, 50, 100];
      };

      var RFID = function RFID() {
        _classCallCheck(this, RFID);
      };

      var ListComponent = /*#__PURE__*/function () {
        function ListComponent(dialog, snackBar, fb, cpoService, rfidService) {
          _classCallCheck(this, ListComponent);

          this.dialog = dialog;
          this.snackBar = snackBar;
          this.fb = fb;
          this.cpoService = cpoService;
          this.rfidService = rfidService;
          this.head = [["Client Name", "CPO Name", "Station Name", "RFID", "Balance", "Action"]];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
          this.clientNameSearch = false;
          this.cpoSearch = false;
          this.stationNameSearch = false;
          this.rfidNoSearch = false;
          this.balanceSearch = false;
          this.chargAmountSearch = false;
          this.statusSearch = false;
          this.form = this.fb.group({
            CPO: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]
          });
        }

        _createClass(ListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.localStorage = JSON.parse(localStorage.getItem("userDetails"));
            this.columns = [{
              field: "client_name"
            }, {
              field: "cpo_name"
            }, {
              field: "station_name"
            }, {
              field: "rf_id_no"
            }, {
              field: "balance"
            }, {
              field: "action",
              show: this.localStorage.role_code !== "CPO" && this.localStorage.role_code != "END"
            }]; // Filter out the columns that should not be displayed

            this.displayedColumns = this.columns.filter(function (column) {
              return column.show !== false;
            }).map(function (column) {
              return column.field;
            });
            this.getactivecposcw(this.localStorage.userId);
            this.filterEntity = new RFID();
            this.filterType = mat_table_filter__WEBPACK_IMPORTED_MODULE_6__["MatTableFilter"].ANYWHERE;
          }
        }, {
          key: "getactivecposcw",
          value: function getactivecposcw(id) {
            var _this5 = this;

            this.cpoService.getactivecposcwwithAll(id).subscribe(function (data) {
              console.log('data');
              console.log(data);
              _this5.cposName = data;

              if (_this5.localStorage.role_code != "END") {
                if (_this5.cposName != null && _this5.cposName != undefined) {
                  var toSelect = _this5.cposName[0];
                  console.log("toselect");
                  console.log(toSelect);
                  _this5.selectedCpo_id = toSelect.id;

                  _this5.form.get("CPO").setValue(toSelect);

                  if (_this5.localStorage.role_code == "CPO") {
                    _this5.form.get("CPO").disable();
                  }

                  _this5.getRfidRecharge(_this5.selectedCpo_id);
                }

                _this5.filteredOptionsCPO = _this5.form.controls.CPO.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(""), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (value) {
                  return typeof value === "string" ? value : value.name;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (name) {
                  return name ? _this5._filterCPO(name) : _this5.cposName;
                }));
              }
            }, function (err) {});
          }
        }, {
          key: "displayCPO",
          value: function displayCPO(item) {
            return item && item.name ? item.name : "";
          }
        }, {
          key: "_filterCPO",
          value: function _filterCPO(name) {
            var filterValue = name.toLowerCase();
            return this.cposName.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "onCPOChange",
          value: function onCPOChange(cpo_id) {
            this.selectedCpo_id = cpo_id;
            this.getRfidRecharge(cpo_id);
          }
        }, {
          key: "getRfidRecharge",
          value: function getRfidRecharge(cpo_id) {
            var _this6 = this;

            this.rfidService.getRechargeLogsbyCCSW(this.localStorage.userId, cpo_id).subscribe(function (resp) {
              if (resp.status) {
                _this6.rfidRecharge = resp.data;
                _this6.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this6.rfidRecharge);
                _this6.dataSource.paginator = _this6.paginator;
                _this6.dataSource.sort = _this6.sort;
              } else {
                _this6.rfidRecharge = [];
                _this6.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this6.rfidRecharge);
                _this6.dataSource.paginator = _this6.paginator;
                _this6.dataSource.sort = _this6.sort;

                _this6.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].NoRecordFoundMessage, "Dismiss", {
                  duration: 3000
                });

                return;
              }
            }, function (err) {});
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(event) {
            var filterValue = event.target.value;
            this.dataSource.filter = filterValue.trim().toLowerCase();

            if (this.dataSource.paginator) {
              this.dataSource.paginator.firstPage();
            }
          }
        }, {
          key: "openDialog",
          value: function openDialog(action, data) {
            var _this7 = this;

            var params = {
              action: action,
              data: data
            };
            var dialogRef = this.dialog.open(_action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ActionDialogComponent"], {
              width: "1200px",
              data: params,
              panelClass: "app-action-dialog",
              autoFocus: false,
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              setTimeout(function () {
                _this7.getRfidRecharge(_this7.selectedCpo_id);
              }, 1000);
            });
          }
        }, {
          key: "changeVisibility",
          value: function changeVisibility(visibleOption, ev) {
            ev.stopPropagation();

            if (visibleOption == "clientNameSearch") {
              this.clientNameSearch = !this.clientNameSearch;
              this.filterEntity.client_name = "";
            }

            if (visibleOption == "cpoSearch") {
              this.cpoSearch = !this.cpoSearch;
              this.filterEntity.cpo_name = "";
            }

            if (visibleOption == "stationNameSearch") {
              this.stationNameSearch = !this.stationNameSearch;
              this.filterEntity.station_name = "";
            }

            if (visibleOption == "stationNameSearch") {
              this.stationNameSearch = !this.stationNameSearch;
              this.filterEntity.station_name = "";
            }

            if (visibleOption == "rfidNoSearch") {
              this.rfidNoSearch = !this.rfidNoSearch;
              this.filterEntity.rf_id_no = "";
            }

            if (visibleOption == "balanceSearch") {
              this.balanceSearch = !this.balanceSearch;
              this.filterEntity.balance = "";
            } // if (visibleOption == "chargAmountSearch") {
            //     this.chargAmountSearch = !this.chargAmountSearch;
            //     this.filterEntity.charging_amt = "";
            // }

          }
        }, {
          key: "tableExport",
          value: function tableExport() {
            this.exportedData = [];

            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              var rfidRechargeModel = this.dataSource.filteredData[i]; //this.exportedData.push({name: `name${i}`, description: `description${i}`,
              //statusString: `statusString${i}`});

              var data = {
                "Client Name": rfidRechargeModel.client_name,
                "CPO Name": rfidRechargeModel.cpo_name,
                "Station Name": rfidRechargeModel.station_name,
                "RFID No": rfidRechargeModel.rf_id_no,
                "Balance": rfidRechargeModel.balance
              };
              this.exportedData.push(data);
            }

            var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].json_to_sheet(this.exportedData);
            var workBook = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].book_append_sheet(workBook, workSheet, "sales disptch");
            xlsx__WEBPACK_IMPORTED_MODULE_8__["writeFile"](workBook, "RFID By Cpo.xlsx");
          }
        }, {
          key: "pdfExport",
          value: function pdfExport() {
            var _this8 = this;

            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_9__["jsPDF"]({// set needed dimensions for any elemen
            });
            this.exportedData = [];

            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              var rfidRechargeModel = this.dataSource.filteredData[i]; //this.exportedData.push({name: `name${i}`, description: `description${i}`,
              //statusString: `statusString${i}`});

              var data = [rfidRechargeModel.client_name, rfidRechargeModel.cpo_name, rfidRechargeModel.station_name, rfidRechargeModel.rf_id_no, rfidRechargeModel.balance];
              this.exportedData.push(data);
            }

            var img = new Image();
            var imgRight = new Image();
            var src = "assets/images/logos/logo_sparkev_main.png";
            var srcSparkEV = "assets/images/logos/logo_SparkEV_black.png";
            imgRight.src = srcSparkEV;
            var createdDate = new Date().toLocaleString("en-GB");
            img.src = src;
            doc.setFontSize(11);
            doc.setTextColor(100);
            doc.setFontSize(18);
            doc.autoTable({
              head: this.head,
              body: this.exportedData,
              theme: "grid",
              headStyles: {
                fontStyle: "majalla",
                fillColor: [11, 148, 68]
              },
              styles: {
                cellPadding: 1,
                fontSize: 8
              },
              margin: {
                top: 22
              },
              didDrawCell: function didDrawCell(data) {},
              didDrawPage: function didDrawPage(data) {
                doc.addImage(img, 15, 7, 15, 6);
                doc.addImage(imgRight, 170, 7, 25, 6);
                doc.text("Charging Station Report", doc.internal.pageSize.getWidth() / 2, 11, {
                  align: "center"
                });
                doc.setTextColor(211, 211, 211);
                doc.setFontSize(60);
                doc.setGState(doc.GState({
                  opacity: 0.6
                }));
                doc.text("Confidential/Not for Public use", 25, 285, null, 60);
                doc.setGState(doc.GState({
                  opacity: 1
                }));
                doc.setTextColor(100);
                doc.setFontSize(9);
                doc.text("Date:" + createdDate, 15, 18);
                doc.text("Generated By:" + _this8.localStorage.f_Name, 195, 18, {
                  align: "right"
                });
                doc = _this8.addWaterMark(doc);
              }
            }); // below line for Open PDF document in new tab

            doc.output("dataurlnewwindow"); // below line for Download PDF document

            doc.save("Charging Station report.pdf");
          }
        }, {
          key: "addWaterMark",
          value: function addWaterMark(doc) {
            var newpage = doc.getNumberOfPages();
            var i = doc.internal.getNumberOfPages();
            doc.setTextColor(100);
            doc.setFontSize(10); //Print Page 1 of 4 for example

            doc.text("Page " + String(i) + " of " + String(newpage), 210 - 20, 297 - 10, null, null, "right");
            return doc;
          }
        }]);

        return ListComponent;
      }();

      ListComponent.ɵfac = function ListComponent_Factory(t) {
        return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_15__["CpoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_16__["RfidService"]));
      };

      ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListComponent,
        selectors: [["app-list"]],
        viewQuery: function ListComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
          }
        },
        decls: 32,
        vars: 9,
        consts: [[2, "text-align", "left", "margin-left", "10px", "margin-bottom", "10px", "margin-top", "10px"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Excel Download", 3, "click"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "PDF Download", 3, "click"], ["style", "padding: 16px !important", 4, "ngIf"], ["fxLayout", "row wrap", 1, "page-layout", "simple", "fullwidth", 2, "overflow", "scroll"], [1, "content", 2, "min-width", "auto"], [1, "mat-elevation-z8"], ["mat-table", "", "matTableFilter", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "exampleEntity", "filterType"], ["matColumnDef", "client_name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "cpo_name"], ["matColumnDef", "station_name"], ["matColumnDef", "rf_id_no"], ["matColumnDef", "balance"], ["matColumnDef", "action", 4, "ngIf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], [2, "padding", "16px !important"], ["fxLayoutAlign", "start", "fxFlex", "1 0 auto", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "50", 2, "height", "60px"], ["type", "text", "matInput", "", "formControlName", "CPO", 3, "matAutocomplete"], [3, "displayWith", "optionSelected"], ["auto2", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 2, "display", "flex"], ["matSuffix", "", 1, "secondary-text"], ["matSuffix", "", "matTooltip", "Please enter cpo name", 1, "secondary-text"], [4, "ngIf"], [3, "value"], ["mat-header-cell", "", "mat-sort-header", ""], ["class", "custom_font_size", "style", "display: flex", 4, "ngIf"], ["appearance", "outline", "style", "width: 140px", "class", "list_input", 4, "ngIf"], [1, "custom_font_size", 2, "display", "flex"], ["matSuffix", "", 3, "click"], ["appearance", "outline", 1, "list_input", 2, "width", "140px"], ["matInput", "", "placeholder", " Client Name ", 3, "ngModel", "ngModelChange"], ["mat-cell", ""], ["matInput", "", "placeholder", "  CPO Name ", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "  Station Name ", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", " RFID ", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Balance", 3, "ngModel", "ngModelChange"], ["matColumnDef", "action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-cell", ""], [1, "custom_font_size"], [2, "display", "flex"], ["color", "primary", "matTooltip", "Edit", 2, "cursor", "pointer", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function ListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_button_click_1_listener() {
              return ctx.tableExport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "sim_card_download");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_button_click_5_listener() {
              return ctx.pdfExport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "picture_as_pdf");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ListComponent_mat_card_8_Template, 18, 7, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ListComponent_th_14_Template, 3, 2, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ListComponent_td_15_Template, 2, 1, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ListComponent_th_17_Template, 3, 2, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ListComponent_td_18_Template, 2, 1, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ListComponent_th_20_Template, 3, 2, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ListComponent_td_21_Template, 2, 1, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ListComponent_th_23_Template, 3, 2, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ListComponent_td_24_Template, 2, 1, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ListComponent_th_26_Template, 3, 2, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ListComponent_td_27_Template, 2, 1, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ListComponent_ng_container_28_Template, 3, 0, "ng-container", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ListComponent_tr_29_Template, 1, 0, "tr", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ListComponent_tr_30_Template, 1, 0, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-paginator", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.localStorage.role_code != "END");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("exampleEntity", ctx.filterEntity)("filterType", ctx.filterType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.localStorage.role_code !== "CPO");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["DefaultLayoutDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], mat_table_filter__WEBPACK_IMPORTED_MODULE_6__["MatTableFilterDirective"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatSuffix"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_20__["AsyncPipe"]],
        styles: ["mat-form-field.list_input div.mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\n.mat-header-cell .custom_font_size {\n  font-size: 15px !important;\n  text-align: left;\n}\n\nmat-form-field.list_input div.mat-form-field-infix {\n  padding: 0.5em 0 0.5em 0 !important;\n}\n\ntable {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBO0VBQ0ksNEJBQUE7QUFYSjs7QUFhQTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7QUFWSjs7QUFZQTtFQUNJLG1DQUFBO0FBVEo7O0FBWUE7RUFDSSxXQUFBO0FBVEo7O0FBWUE7RUFDSSxZQUFBO0FBVEoiLCJmaWxlIjoibGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRhYmxlIHtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgdGQsIHRoIHtcclxuLy8gICAgIHdpZHRoOiAyNSU7XHJcbi8vICAgfVxyXG5tYXQtZm9ybS1maWVsZC5saXN0X2lucHV0IGRpdi5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1oZWFkZXItY2VsbCAuY3VzdG9tX2ZvbnRfc2l6ZSB7XHJcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxubWF0LWZvcm0tZmllbGQubGlzdF9pbnB1dCBkaXYubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgcGFkZGluZzogMC41ZW0gMCAwLjVlbSAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4iXX0= */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_7__["fuseAnimations"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-list",
            templateUrl: "./list.component.html",
            styleUrls: ["./list.component.scss"],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_7__["fuseAnimations"]
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBar"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"]
          }, {
            type: app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_15__["CpoService"]
          }, {
            type: app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_16__["RfidService"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], {
              "static": true
            }]
          }],
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "8p0C":
    /*!**********************************************************************************!*\
      !*** ./src/app/main/asset/rfid-management/rfid-recharge/rfid-recharge.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: RfidRechargeModule */

    /***/
    function p0C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RfidRechargeModule", function () {
        return RfidRechargeModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _rfid_recharge_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./rfid-recharge-routing.module */
      "WSoX");
      /* harmony import */


      var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./list/list.component */
      "8b/9");
      /* harmony import */


      var _rfid_recharge_crud_rfid_recharge_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./rfid-recharge-crud/rfid-recharge-crud.component */
      "RaWR");
      /* harmony import */


      var _action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./action-dialog/action-dialog.component */
      "iRig");
      /* harmony import */


      var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fuse/shared.module */
      "5HBU");
      /* harmony import */


      var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var _recharge_history_recharge_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./recharge-history/recharge-history.component */
      "Dw5M");
      /* harmony import */


      var _energy_consumption_logs_energy_consumption_logs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./energy-consumption-logs/energy-consumption-logs.component */
      "5eun");

      var COMPONENTS = [_rfid_recharge_crud_rfid_recharge_crud_component__WEBPACK_IMPORTED_MODULE_3__["RfidRechargeCrudComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]];
      var COMPONENTS_DYNAMIC = [_action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ActionDialogComponent"]];

      var RfidRechargeModule = function RfidRechargeModule() {
        _classCallCheck(this, RfidRechargeModule);
      };

      RfidRechargeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: RfidRechargeModule
      });
      RfidRechargeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function RfidRechargeModule_Factory(t) {
          return new (t || RfidRechargeModule)();
        },
        imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _rfid_recharge_routing_module__WEBPACK_IMPORTED_MODULE_1__["RfidRechargeRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__["FuseSharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RfidRechargeModule, {
          declarations: [_rfid_recharge_crud_rfid_recharge_crud_component__WEBPACK_IMPORTED_MODULE_3__["RfidRechargeCrudComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"], _action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ActionDialogComponent"], _recharge_history_recharge_history_component__WEBPACK_IMPORTED_MODULE_7__["RechargeHistoryComponent"], _energy_consumption_logs_energy_consumption_logs_component__WEBPACK_IMPORTED_MODULE_8__["EnergyConsumptionLogsComponent"]],
          imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _rfid_recharge_routing_module__WEBPACK_IMPORTED_MODULE_1__["RfidRechargeRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__["FuseSharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RfidRechargeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _rfid_recharge_routing_module__WEBPACK_IMPORTED_MODULE_1__["RfidRechargeRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__["FuseSharedModule"]],
            declarations: [COMPONENTS, COMPONENTS_DYNAMIC, _recharge_history_recharge_history_component__WEBPACK_IMPORTED_MODULE_7__["RechargeHistoryComponent"], _energy_consumption_logs_energy_consumption_logs_component__WEBPACK_IMPORTED_MODULE_8__["EnergyConsumptionLogsComponent"]],
            entryComponents: [COMPONENTS_DYNAMIC]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Dw5M":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/main/asset/rfid-management/rfid-recharge/recharge-history/recharge-history.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: RECHARGE_HISTORY, RechargeHistoryComponent */

    /***/
    function Dw5M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RECHARGE_HISTORY", function () {
        return RECHARGE_HISTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RechargeHistoryComponent", function () {
        return RechargeHistoryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../action-dialog/action-dialog.component */
      "iRig");
      /* harmony import */


      var app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/utils/message.constant */
      "AgqY");
      /* harmony import */


      var mat_table_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! mat-table-filter */
      "6Ugt");
      /* harmony import */


      var _fuse_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fuse/animations */
      "PVWW");
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! xlsx */
      "EUZL");
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! jspdf */
      "i680");
      /* harmony import */


      var jspdf_autotable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! jspdf-autotable */
      "DaQG");
      /* harmony import */


      var jspdf_autotable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! app/shared/services/cpo/cpo.service */
      "k3ne");
      /* harmony import */


      var app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! app/shared/services/rfid/rfid.service */
      "QtQ4");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function RechargeHistoryComponent_mat_card_8_mat_option_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r19.name, " ");
        }
      }

      function RechargeHistoryComponent_mat_card_8_mat_error_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select cpo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RechargeHistoryComponent_mat_card_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select CPO ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-autocomplete", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function RechargeHistoryComponent_mat_card_8_Template_mat_autocomplete_optionSelected_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.onCPOChange($event.option.value.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RechargeHistoryComponent_mat_card_8_mat_option_10_Template, 2, 2, "mat-option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "expand_more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "account_circle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RechargeHistoryComponent_mat_card_8_mat_error_17_Template, 2, 0, "mat-error", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "From Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 31, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function RechargeHistoryComponent_mat_card_8_Template_input_dateChange_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.onChangeDateFilter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-datepicker-toggle", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "mat-datepicker", 34, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "To Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function RechargeHistoryComponent_mat_card_8_Template_input_dateChange_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.onChangeDateFilter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-datepicker-toggle", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-datepicker", 34, 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r0.displayCPO);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 12, ctx_r0.filteredOptionsCPO));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("CPO").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r17)("max", ctx_r0.currDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r18)("min", !!ctx_r0.form.value.fromDate ? ctx_r0.form.value.fromDate._d : "2020-01-01")("max", ctx_r0.currDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r18);
        }
      }

      function RechargeHistoryComponent_th_14_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CPO Name \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RechargeHistoryComponent_th_14_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r26.changeVisibility("cpoSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RechargeHistoryComponent_th_14_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RechargeHistoryComponent_th_14_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r28.filterEntity.cpo_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RechargeHistoryComponent_th_14_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r30.changeVisibility("cpoSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r25.filterEntity.cpo_name);
        }
      }

      function RechargeHistoryComponent_th_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RechargeHistoryComponent_th_14_span_1_Template, 4, 0, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RechargeHistoryComponent_th_14_mat_form_field_2_Template, 4, 1, "mat-form-field", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.cpoSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.cpoSearch);
        }
      }

      function RechargeHistoryComponent_td_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r31.cpo_name);
        }
      }

      function RechargeHistoryComponent_th_17_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "RFID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RechargeHistoryComponent_th_17_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r34.changeVisibility("rfidNoSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RechargeHistoryComponent_th_17_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RechargeHistoryComponent_th_17_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r36.filterEntity.rf_id_no = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RechargeHistoryComponent_th_17_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r38.changeVisibility("rfidNoSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r33.filterEntity.rf_id_no);
        }
      }

      function RechargeHistoryComponent_th_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RechargeHistoryComponent_th_17_span_1_Template, 4, 0, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RechargeHistoryComponent_th_17_mat_form_field_2_Template, 4, 1, "mat-form-field", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.rfidNoSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.rfidNoSearch);
        }
      }

      function RechargeHistoryComponent_td_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r39.rf_id_no);
        }
      }

      function RechargeHistoryComponent_th_20_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Amount \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RechargeHistoryComponent_th_20_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r42.changeVisibility("amountSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RechargeHistoryComponent_th_20_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RechargeHistoryComponent_th_20_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r44.filterEntity.amount = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RechargeHistoryComponent_th_20_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r46.changeVisibility("amountSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r41.filterEntity.amount);
        }
      }

      function RechargeHistoryComponent_th_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RechargeHistoryComponent_th_20_span_1_Template, 4, 0, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RechargeHistoryComponent_th_20_mat_form_field_2_Template, 4, 1, "mat-form-field", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.amountSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.amountSearch);
        }
      }

      function RechargeHistoryComponent_td_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r47 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r47.amount);
        }
      }

      function RechargeHistoryComponent_th_23_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Charging Amount ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RechargeHistoryComponent_th_23_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r50.changeVisibility("chargAmountSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RechargeHistoryComponent_th_23_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RechargeHistoryComponent_th_23_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r52.filterEntity.charging_amt = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RechargeHistoryComponent_th_23_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r54.changeVisibility("chargAmountSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r49.filterEntity.charging_amt);
        }
      }

      function RechargeHistoryComponent_th_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RechargeHistoryComponent_th_23_span_1_Template, 4, 0, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RechargeHistoryComponent_th_23_mat_form_field_2_Template, 4, 1, "mat-form-field", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.chargAmountSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.chargAmountSearch);
        }
      }

      function RechargeHistoryComponent_td_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r55 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r55.charging_amt, " ");
        }
      }

      function RechargeHistoryComponent_th_26_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Created Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RechargeHistoryComponent_th_26_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r58.changeVisibility("createdDateSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RechargeHistoryComponent_th_26_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RechargeHistoryComponent_th_26_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r60.filterEntity.created_date = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RechargeHistoryComponent_th_26_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r62.changeVisibility("createdDateSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r57.filterEntity.created_date);
        }
      }

      function RechargeHistoryComponent_th_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RechargeHistoryComponent_th_26_span_1_Template, 4, 0, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RechargeHistoryComponent_th_26_mat_form_field_2_Template, 4, 1, "mat-form-field", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.createdDateSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.createdDateSearch);
        }
      }

      function RechargeHistoryComponent_td_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r63 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r63.created_date, " ");
        }
      }

      function RechargeHistoryComponent_tr_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 51);
        }
      }

      function RechargeHistoryComponent_tr_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 52);
        }
      }

      var _c0 = function _c0() {
        return [10, 30, 50, 100];
      };

      var RECHARGE_HISTORY = function RECHARGE_HISTORY() {
        _classCallCheck(this, RECHARGE_HISTORY);
      };

      var RechargeHistoryComponent = /*#__PURE__*/function () {
        function RechargeHistoryComponent(dialog, snackBar, fb, cpoService, rfidService, datePipe) {
          _classCallCheck(this, RechargeHistoryComponent);

          this.dialog = dialog;
          this.snackBar = snackBar;
          this.fb = fb;
          this.cpoService = cpoService;
          this.rfidService = rfidService;
          this.datePipe = datePipe;
          this.head = [["CPO Name", "RFID", "Amount", "Charging Amount", "Created Date"]];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
          this.clientNameSearch = false;
          this.cpoSearch = false;
          this.stationNameSearch = false;
          this.rfidNoSearch = false;
          this.amountSearch = false;
          this.chargAmountSearch = false;
          this.createdDateSearch = false;
          this.statusSearch = false;
          this.form = this.fb.group({
            CPO: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required],
            toDate: [""],
            fromDate: [""]
          });
        }

        _createClass(RechargeHistoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.localStorage = JSON.parse(localStorage.getItem("userDetails")); // if (this.localStorage.role_code == "CPO") {
            //     this.form.get("CPO").disable();
            // }

            this.columns = [{
              field: "cpo_name"
            }, {
              field: "rf_id_no"
            }, {
              field: "amount"
            }, {
              field: "charging_amt"
            }, {
              field: "created_date"
            }];
            this.displayedColumns = this.columns.map(function (column) {
              return column.field;
            });
            this.getactivecposcw(this.localStorage.userId);
            this.filterEntity = new RECHARGE_HISTORY();
            this.filterType = mat_table_filter__WEBPACK_IMPORTED_MODULE_6__["MatTableFilter"].ANYWHERE;
          }
        }, {
          key: "getactivecposcw",
          value: function getactivecposcw(id) {
            var _this9 = this;

            this.cpoService.getactivecposcwwithAll(id).subscribe(function (data) {
              _this9.cposName = data;

              if (_this9.localStorage.role_code != "END") {
                if (_this9.cposName != null && _this9.cposName != undefined) {
                  var toSelect = _this9.cposName[0];
                  console.log("CPO Data:", toSelect);
                  _this9.selectedCpo_id = toSelect.id;

                  _this9.form.get("CPO").setValue(toSelect); // this.getrfidRechargeHistory(this.selectedCpo_id);


                  _this9.getrfidRechargeHistory();
                }

                _this9.filteredOptionsCPO = _this9.form.controls.CPO.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(""), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (value) {
                  return typeof value === "string" ? value : value.name;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (name) {
                  return name ? _this9._filterCPO(name) : _this9.cposName;
                }));
              }
            }, function (err) {});
          }
        }, {
          key: "displayCPO",
          value: function displayCPO(item) {
            return item && item.name ? item.name : "";
          }
        }, {
          key: "_filterCPO",
          value: function _filterCPO(name) {
            var filterValue = name.toLowerCase();
            return this.cposName.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "onCPOChange",
          value: function onCPOChange(cpo_id) {
            this.selectedCpo_id = cpo_id;
            this.getrfidRechargeHistory();
          }
        }, {
          key: "onChangeDateFilter",
          value: function onChangeDateFilter() {
            this.getrfidRechargeHistory();
          }
        }, {
          key: "getrfidRechargeHistory",
          value: function getrfidRechargeHistory() {
            var _this10 = this;

            var formValues = this.form.value;
            var fromDate = this.datePipe.transform(formValues.fromDate, "dd-MM-yyyy");
            var toDate = this.datePipe.transform(formValues.toDate, "dd-MM-yyyy");
            console.log("formValues");
            console.log(formValues);
            var params = {
              cpo_id: formValues.CPO.id,
              fromDate: fromDate,
              toDate: toDate
            };
            this.rfidService.getRechargeLogsByCpoId(params).subscribe(function (resp) {
              if (resp.status) {
                _this10.rfidRechargeHistory = resp.data;

                for (var i = 0; i < _this10.rfidRechargeHistory.length; i++) {
                  _this10.rfidRechargeHistory[i].created_date = _this10.datePipe.transform(_this10.rfidRechargeHistory[i].created_date, "dd/MM/yyyy h:mm:ss a");
                }

                _this10.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this10.rfidRechargeHistory);
                _this10.dataSource.paginator = _this10.paginator;
                _this10.dataSource.sort = _this10.sort;
              } else {
                _this10.rfidRechargeHistory = [];
                _this10.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this10.rfidRechargeHistory);
                _this10.dataSource.paginator = _this10.paginator;
                _this10.dataSource.sort = _this10.sort;

                _this10.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].NoRecordFoundMessage, "Dismiss", {
                  duration: 3000
                });

                return;
              }
            }, function (err) {});
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(event) {
            var filterValue = event.target.value;
            this.dataSource.filter = filterValue.trim().toLowerCase();

            if (this.dataSource.paginator) {
              this.dataSource.paginator.firstPage();
            }
          }
        }, {
          key: "openDialog",
          value: function openDialog(action, data) {
            var _this11 = this;

            var params = {
              action: action,
              data: data
            };
            var dialogRef = this.dialog.open(_action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ActionDialogComponent"], {
              width: "1200px",
              data: params,
              panelClass: "app-action-dialog",
              autoFocus: false,
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              setTimeout(function () {
                // this.getrfidRechargeHistory(this.selectedCpo_id);
                _this11.getrfidRechargeHistory();
              }, 1000);
            });
          }
        }, {
          key: "changeVisibility",
          value: function changeVisibility(visibleOption, ev) {
            ev.stopPropagation();

            if (visibleOption == "cpoSearch") {
              this.cpoSearch = !this.cpoSearch;
              this.filterEntity.cpo_name = "";
            }

            if (visibleOption == "rfidNoSearch") {
              this.rfidNoSearch = !this.rfidNoSearch;
              this.filterEntity.rf_id_no = "";
            }

            if (visibleOption == "amountSearch") {
              this.amountSearch = !this.amountSearch;
              this.filterEntity.amount = "";
            }

            if (visibleOption == "chargAmountSearch") {
              this.chargAmountSearch = !this.chargAmountSearch;
              this.filterEntity.charging_amt = "";
            }

            if (visibleOption == "createdDateSearch") {
              this.createdDateSearch = !this.createdDateSearch;
              this.filterEntity.created_date = "";
            }
          }
        }, {
          key: "tableExport",
          value: function tableExport() {
            this.exportedData = [];

            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              var rechargeHistoryModel = this.dataSource.filteredData[i]; //this.exportedData.push({name: `name${i}`, description: `description${i}`,
              //statusString: `statusString${i}`});

              var data = {
                "CPO Name": rechargeHistoryModel.cpo_name,
                "RFID No": rechargeHistoryModel.rf_id_no,
                Amount: rechargeHistoryModel.amount,
                "Charging Amount": rechargeHistoryModel.charging_amt,
                "Created Date": rechargeHistoryModel.created_date
              };
              this.exportedData.push(data);
            }

            var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].json_to_sheet(this.exportedData);
            var workBook = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].book_append_sheet(workBook, workSheet, "sales disptch");
            xlsx__WEBPACK_IMPORTED_MODULE_8__["writeFile"](workBook, "RFID By Cpo.xlsx");
          }
        }, {
          key: "pdfExport",
          value: function pdfExport() {
            var _this12 = this;

            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_9__["jsPDF"]({// set needed dimensions for any elemen
            });
            this.exportedData = [];

            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              var rechargeHistoryModel = this.dataSource.filteredData[i]; //this.exportedData.push({name: `name${i}`, description: `description${i}`,
              //statusString: `statusString${i}`});

              var data = [rechargeHistoryModel.cpo_name, rechargeHistoryModel.rf_id_no, rechargeHistoryModel.amount, rechargeHistoryModel.charging_amt, rechargeHistoryModel.created_date];
              this.exportedData.push(data);
            }

            var img = new Image();
            var imgRight = new Image();
            var src = "assets/images/logos/logo_sparkev_main.png";
            var srcSparkEV = "assets/images/logos/logo_SparkEV_black.png";
            imgRight.src = srcSparkEV;
            var createdDate = new Date().toLocaleString("en-GB");
            img.src = src;
            doc.setFontSize(11);
            doc.setTextColor(100);
            doc.setFontSize(18);
            doc.autoTable({
              head: this.head,
              body: this.exportedData,
              theme: "grid",
              headStyles: {
                fontStyle: "majalla",
                fillColor: [11, 148, 68]
              },
              styles: {
                cellPadding: 1,
                fontSize: 8
              },
              margin: {
                top: 22
              },
              didDrawCell: function didDrawCell(data) {},
              didDrawPage: function didDrawPage(data) {
                doc.addImage(img, 15, 7, 15, 6);
                doc.addImage(imgRight, 170, 7, 25, 6);
                doc.text("Charging Station Report", doc.internal.pageSize.getWidth() / 2, 11, {
                  align: "center"
                });
                doc.setTextColor(211, 211, 211);
                doc.setFontSize(60);
                doc.setGState(doc.GState({
                  opacity: 0.6
                }));
                doc.text("Confidential/Not for Public use", 25, 285, null, 60);
                doc.setGState(doc.GState({
                  opacity: 1
                }));
                doc.setTextColor(100);
                doc.setFontSize(9);
                doc.text("Date:" + createdDate, 15, 18);
                doc.text("Generated By:" + _this12.localStorage.f_Name, 195, 18, {
                  align: "right"
                });
                doc = _this12.addWaterMark(doc);
              }
            }); // below line for Open PDF document in new tab

            doc.output("dataurlnewwindow"); // below line for Download PDF document

            doc.save("Charging Station report.pdf");
          }
        }, {
          key: "addWaterMark",
          value: function addWaterMark(doc) {
            var newpage = doc.getNumberOfPages();
            var i = doc.internal.getNumberOfPages();
            doc.setTextColor(100);
            doc.setFontSize(10); //Print Page 1 of 4 for example

            doc.text("Page " + String(i) + " of " + String(newpage), 210 - 20, 297 - 10, null, null, "right");
            return doc;
          }
        }]);

        return RechargeHistoryComponent;
      }();

      RechargeHistoryComponent.ɵfac = function RechargeHistoryComponent_Factory(t) {
        return new (t || RechargeHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_16__["CpoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_17__["RfidService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]));
      };

      RechargeHistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RechargeHistoryComponent,
        selectors: [["app-recharge-history"]],
        viewQuery: function RechargeHistoryComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]])],
        decls: 31,
        vars: 8,
        consts: [[2, "text-align", "left", "margin-left", "10px", "margin-bottom", "10px", "margin-top", "10px"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Excel Download", 3, "click"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "PDF Download", 3, "click"], ["style", "padding: 16px !important", 4, "ngIf"], ["fxLayout", "row wrap", 1, "page-layout", "simple", "fullwidth", 2, "overflow", "scroll"], [1, "content", 2, "min-width", "auto"], [1, "mat-elevation-z8"], ["mat-table", "", "matTableFilter", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "exampleEntity", "filterType"], ["matColumnDef", "cpo_name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "rf_id_no"], ["matColumnDef", "amount"], ["matColumnDef", "charging_amt"], ["matColumnDef", "created_date"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], [2, "padding", "16px !important"], ["fxLayoutAlign", "start", "fxFlex", "1 0 auto", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "33", 2, "height", "60px"], ["type", "text", "matInput", "", "formControlName", "CPO", 3, "matAutocomplete"], [3, "displayWith", "optionSelected"], ["auto2", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 2, "display", "flex"], ["matSuffix", "", 1, "secondary-text"], ["matSuffix", "", "matTooltip", "Please enter cpo name", 1, "secondary-text"], [4, "ngIf"], ["appearance", "outline", "fxFlex", "33", 1, "pr-4", 2, "height", "60px"], ["matInput", "", "formControlName", "fromDate", 3, "matDatepicker", "max", "dateChange"], ["fromDate", ""], ["matSuffix", "", 3, "for"], ["disabled", "false"], ["fDate", ""], ["matInput", "", "formControlName", "toDate", 3, "matDatepicker", "min", "max", "dateChange"], ["tDate", ""], [3, "value"], ["mat-header-cell", "", "mat-sort-header", ""], ["class", "custom_font_size", "style", "display: flex", 4, "ngIf"], ["appearance", "outline", "style", "width: 140px", "class", "list_input", 4, "ngIf"], [1, "custom_font_size", 2, "display", "flex"], ["matSuffix", "", 3, "click"], ["appearance", "outline", 1, "list_input", 2, "width", "140px"], ["matInput", "", "placeholder", "  CPO Name ", 3, "ngModel", "ngModelChange"], ["mat-cell", ""], ["matInput", "", "placeholder", " RFID ", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Amount", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Charging Amount", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Created Date", 3, "ngModel", "ngModelChange"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function RechargeHistoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RechargeHistoryComponent_Template_button_click_1_listener() {
              return ctx.tableExport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "sim_card_download");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RechargeHistoryComponent_Template_button_click_5_listener() {
              return ctx.pdfExport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "picture_as_pdf");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RechargeHistoryComponent_mat_card_8_Template, 33, 14, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RechargeHistoryComponent_th_14_Template, 3, 2, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RechargeHistoryComponent_td_15_Template, 2, 1, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RechargeHistoryComponent_th_17_Template, 3, 2, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RechargeHistoryComponent_td_18_Template, 2, 1, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RechargeHistoryComponent_th_20_Template, 3, 2, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RechargeHistoryComponent_td_21_Template, 2, 1, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RechargeHistoryComponent_th_23_Template, 3, 2, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RechargeHistoryComponent_td_24_Template, 2, 1, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RechargeHistoryComponent_th_26_Template, 3, 2, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RechargeHistoryComponent_td_27_Template, 2, 1, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RechargeHistoryComponent_tr_28_Template, 1, 0, "tr", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RechargeHistoryComponent_tr_29_Template, 1, 0, "tr", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-paginator", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.localStorage.role_code != "END");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("exampleEntity", ctx.filterEntity)("filterType", ctx.filterType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["DefaultLayoutDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], mat_table_filter__WEBPACK_IMPORTED_MODULE_6__["MatTableFilterDirective"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepicker"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]],
        styles: ["mat-form-field.list_input div.mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\n.mat-header-cell .custom_font_size {\n  font-size: 15px !important;\n  text-align: left;\n}\n\nmat-form-field.list_input div.mat-form-field-infix {\n  padding: 0.5em 0 0.5em 0 !important;\n}\n\ntable {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxyZWNoYXJnZS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUFDSjs7QUFDQTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLG1DQUFBO0FBR0o7O0FBQUE7RUFDSSxXQUFBO0FBR0o7O0FBQUE7RUFDSSxZQUFBO0FBR0oiLCJmaWxlIjoicmVjaGFyZ2UtaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkLmxpc3RfaW5wdXQgZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG4ubWF0LWhlYWRlci1jZWxsIC5jdXN0b21fZm9udF9zaXplIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5tYXQtZm9ybS1maWVsZC5saXN0X2lucHV0IGRpdi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgICBwYWRkaW5nOiAwLjVlbSAwIDAuNWVtIDAgIWltcG9ydGFudDtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_7__["fuseAnimations"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RechargeHistoryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-recharge-history",
            templateUrl: "./recharge-history.component.html",
            styleUrls: ["./recharge-history.component.scss"],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_7__["fuseAnimations"],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]]
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBar"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"]
          }, {
            type: app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_16__["CpoService"]
          }, {
            type: app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_17__["RfidService"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], {
              "static": true
            }]
          }],
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "QtQ4":
    /*!******************************************************!*\
      !*** ./src/app/shared/services/rfid/rfid.service.ts ***!
      \******************************************************/

    /*! exports provided: RfidService */

    /***/
    function QtQ4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RfidService", function () {
        return RfidService;
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

      var RfidService = /*#__PURE__*/function () {
        function RfidService(http) {
          _classCallCheck(this, RfidService);

          this.http = http;
          this.apiUrl2 = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2, "/rfid");
        }

        _createClass(RfidService, [{
          key: "create",
          value: function create(params) {
            return this.http.post("".concat(this.apiUrl2, "/crt"), params);
          }
        }, {
          key: "update",
          value: function update(params) {
            return this.http.post("".concat(this.apiUrl2, "/upd"), params);
          }
        }, {
          key: "createCpoRfidMapping",
          value: function createCpoRfidMapping(params) {
            return this.http.post("".concat(this.apiUrl2, "/crtCpoRfidMapping"), params);
          }
        }, {
          key: "updatecpoRfidMapping",
          value: function updatecpoRfidMapping(params) {
            return this.http.post("".concat(this.apiUrl2, "/updCpoRfidMapping"), params);
          }
        }, {
          key: "getRFidnoById",
          value: function getRFidnoById(id) {
            return this.http.get("".concat(this.apiUrl2, "/gtRFidnoById/").concat(id));
          }
        }, {
          key: "getAllRfid",
          value: function getAllRfid() {
            return this.http.get("".concat(this.apiUrl2, "/gtRFids"));
          }
        }, {
          key: "delete",
          value: function _delete(id, user_id) {
            return this.http["delete"]("".concat(this.apiUrl2, "/dlt/").concat(id, "/").concat(user_id));
          }
        }, {
          key: "unMapRFidCpoID",
          value: function unMapRFidCpoID(id, user_id) {
            return this.http["delete"]("".concat(this.apiUrl2, "/unMapRFidCpoID/").concat(id, "/").concat(user_id));
          } // getRFidsByCpoId(id){
          //   return this.http.get(`${this.apiUrl2}/getRFidsByCpoId/${id}`);
          // }

        }, {
          key: "getAllRFidsWithMappedCPOs",
          value: function getAllRFidsWithMappedCPOs(id) {
            return this.http.get("".concat(this.apiUrl2, "/gtAllRFidsWithMappedCPOs/").concat(id));
          }
        }, {
          key: "getCpoRFidMappingCW",
          value: function getCpoRFidMappingCW(id) {
            return this.http.get("".concat(this.apiUrl2, "/gtCpoRFidMappingCW/").concat(id));
          }
        }, {
          key: "getRFidsByCpoId",
          value: function getRFidsByCpoId(id) {
            return this.http.get("".concat(this.apiUrl2, "/gtRFidsByCpoId/").concat(id));
          } // Unmapped RFID

        }, {
          key: "getUnmappedRFIDByCpoId",
          value: function getUnmappedRFIDByCpoId(cpo_id) {
            return this.http.get("".concat(this.apiUrl2, "/unmappedRfidByCpoId/").concat(cpo_id));
          }
        }, {
          key: "createRfidMappingwithDriver",
          value: function createRfidMappingwithDriver(params) {
            return this.http.post("".concat(this.apiUrl2, "/rfdrivermapping/crt"), params);
          } // Get All RFID by login Id

        }, {
          key: "getAllRFIDbyCW",
          value: function getAllRFIDbyCW(login_id, cpo_id) {
            if (cpo_id == null || cpo_id == undefined || cpo_id == "") {
              cpo_id = 0;
            }

            return this.http.get("".concat(this.apiUrl2, "/gtRfidByClientwise/").concat(login_id, "/").concat(cpo_id));
          } // ########################################################################################
          // ########################################################################################
          // ########################################################################################

        }, {
          key: "getRechargeLogsbyCCSW",
          value: function getRechargeLogsbyCCSW(login_id, cpo_id) {
            // if(cpo_id == null || cpo_id == undefined || cpo_id == "") {
            //   cpo_id = 0;
            // }
            return this.http.get("".concat(this.apiUrl2, "/getRechargeLogsbyCCSW/").concat(login_id, "/").concat(cpo_id));
          }
        }, {
          key: "updateBalance",
          value: function updateBalance(params) {
            return this.http.post("".concat(this.apiUrl2, "/updateBalance"), params);
          }
        }, {
          key: "getRechargeLogsByCpoId",
          value: function getRechargeLogsByCpoId(params) {
            return this.http.post("".concat(this.apiUrl2, "/getRechargeLogsByCpoId"), params);
          }
        }, {
          key: "getConsumptionLogsByCpoId",
          value: function getConsumptionLogsByCpoId(params) {
            return this.http.post("".concat(this.apiUrl2, "/getConsumptionLogsByCpoId"), params);
          } // ########################################################################################
          // ########################################################################################
          // ########################################################################################

        }, {
          key: "unmappedRfIdDriver",
          value: function unmappedRfIdDriver(map_id) {
            return this.http["delete"]("".concat(this.apiUrl2, "/unmappedRfIdDriver/").concat(map_id));
          }
        }]);

        return RfidService;
      }();

      RfidService.ɵfac = function RfidService_Factory(t) {
        return new (t || RfidService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      RfidService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RfidService,
        factory: RfidService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RfidService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
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
    "RaWR":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/main/asset/rfid-management/rfid-recharge/rfid-recharge-crud/rfid-recharge-crud.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: RfidRechargeCrudComponent, SunnyTabContentComponent, RainyTabContentComponent, FoggyTabContentComponent */

    /***/
    function RaWR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RfidRechargeCrudComponent", function () {
        return RfidRechargeCrudComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SunnyTabContentComponent", function () {
        return SunnyTabContentComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RainyTabContentComponent", function () {
        return RainyTabContentComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FoggyTabContentComponent", function () {
        return FoggyTabContentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fuse/animations */
      "PVWW");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/utility/utility.service */
      "xb2s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive */
      "EwFO");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function RfidRechargeCrudComponent_a_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tabLink_r1 = ctx.$implicit;

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", tabLink_r1.link)("active", _r3.isActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tabLink_r1.label, " ");
        }
      }

      var _c0 = function _c0() {
        return {
          x: "50px"
        };
      };

      var _c1 = function _c1(a1) {
        return {
          value: "*",
          params: a1
        };
      };
      /**
       * @title Basic use of the tab group
       */


      var RfidRechargeCrudComponent = /*#__PURE__*/function () {
        function RfidRechargeCrudComponent(router, cdr, _utilityService) {
          _classCallCheck(this, RfidRechargeCrudComponent);

          this.router = router;
          this.cdr = cdr;
          this._utilityService = _utilityService;
          this.tabLinks = [// { label: 'RFID', link: 'list' },
            // { label: 'Add New', link: 'create' }
          ];
          this.tempLinks = [];
        }

        _createClass(RfidRechargeCrudComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this13 = this;

            this._utilityService.activeMenuItems$.subscribe(function (menuItemSelecte) {
              _this13.menuArray = menuItemSelecte;

              if (_this13.menuArray == null || _this13.menuArray == undefined || _this13.menuArray.title == null || _this13.menuArray.title == undefined) {
                _this13.menuArray = JSON.parse(localStorage.getItem("activeMenuItems"));
              }

              _this13.cdr.detectChanges();
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.localStorage = JSON.parse(localStorage.getItem("userDetails"));
            var nav_list = this.localStorage.nav_list_with_tab;
            nav_list.filter(function (x) {
              if (x.id === "assetManagement") {
                _this14.objectData = x;

                if (_this14.objectData.children != undefined && _this14.objectData.children != null) {
                  _this14.objectData.children.filter(function (y) {
                    if (y.id === "rfidManagement") {
                      _this14.objectChildData = y;

                      if (_this14.objectChildData.children != undefined && _this14.objectChildData.children != null) {
                        _this14.objectChildData.children.filter(function (z) {
                          _this14.childData = z;

                          if (z.id === "rfid-recharge") {
                            var isDefaultRoutePermeted = false;

                            if (_this14.childData.children != undefined && _this14.childData.children != null) {
                              _this14.childData.children.filter(function (t) {
                                if (t.id === "list") {
                                  isDefaultRoutePermeted = true;

                                  _this14.tempLinks.push({
                                    label: "RFID",
                                    link: "list"
                                  });
                                }

                                if (t.id === "recharge-history") {
                                  _this14.tempLinks.push({
                                    label: "Recharge history",
                                    link: "recharge-history"
                                  });
                                }

                                if (t.id === "energy-consumption-logs") {
                                  _this14.tempLinks.push({
                                    label: "Energy Consumption Logs",
                                    link: "energy-consumption-logs"
                                  });
                                }
                              });
                            }

                            _this14.tabLinks = _this14.tempLinks;

                            if (!isDefaultRoutePermeted) {
                              _this14.router.navigate(["/assetManagement/rfidManagement/rfid-recharge/crud/" + _this14.tempLinks[0].link]);
                            }
                          }
                        });
                      }
                    }
                  });
                }
              }
            });
          }
        }]);

        return RfidRechargeCrudComponent;
      }();

      RfidRechargeCrudComponent.ɵfac = function RfidRechargeCrudComponent_Factory(t) {
        return new (t || RfidRechargeCrudComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]));
      };

      RfidRechargeCrudComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RfidRechargeCrudComponent,
        selectors: [["app-rfid-recharge-crud"]],
        decls: 10,
        vars: 6,
        consts: [[2, "display", "block", "width", "100%"], ["id", "", "fxLayout", "row", 1, "page-layout", "simple", "right-sidebar"], ["fusePerfectScrollbar", "", 1, "center"], ["fxLayout", "column", "fxLayoutAlign", "space-between", 1, "header", "accent", "px-24", "pt-16", "pb-0"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [1, "mat-display-1", "my-0", "my-sm-24", "welcome-message"], ["mat-tab-nav-bar", "", "aria-label", "weather navigation links"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active"], ["rla", "routerLinkActive"]],
        template: function RfidRechargeCrudComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RfidRechargeCrudComponent_a_8_Template, 3, 3, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.menuArray == null ? null : ctx.menuArray.title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabLinks);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_5__["FusePerfectScrollbarDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabNav"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZmlkLXJlY2hhcmdlLWNydWQuY29tcG9uZW50LnNjc3MifQ== */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RfidRechargeCrudComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-rfid-recharge-crud",
            templateUrl: "./rfid-recharge-crud.component.html",
            styleUrls: ["./rfid-recharge-crud.component.scss"],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]
          }];
        }, null);
      })();

      var SunnyTabContentComponent = function SunnyTabContentComponent() {
        _classCallCheck(this, SunnyTabContentComponent);
      };

      SunnyTabContentComponent.ɵfac = function SunnyTabContentComponent_Factory(t) {
        return new (t || SunnyTabContentComponent)();
      };

      SunnyTabContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SunnyTabContentComponent,
        selectors: [["sunny-routed-content"]],
        decls: 1,
        vars: 0,
        template: function SunnyTabContentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Having a lot of light from the sun.");
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SunnyTabContentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "sunny-routed-content",
            template: "Having a lot of light from the sun."
          }]
        }], null, null);
      })();

      var RainyTabContentComponent = function RainyTabContentComponent() {
        _classCallCheck(this, RainyTabContentComponent);
      };

      RainyTabContentComponent.ɵfac = function RainyTabContentComponent_Factory(t) {
        return new (t || RainyTabContentComponent)();
      };

      RainyTabContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RainyTabContentComponent,
        selectors: [["rainy-routed-content"]],
        decls: 1,
        vars: 0,
        template: function RainyTabContentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "A rainy period of time is one when it rains a lot");
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RainyTabContentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "rainy-routed-content",
            template: "A rainy period of time is one when it rains a lot"
          }]
        }], null, null);
      })();

      var FoggyTabContentComponent = function FoggyTabContentComponent() {
        _classCallCheck(this, FoggyTabContentComponent);
      };

      FoggyTabContentComponent.ɵfac = function FoggyTabContentComponent_Factory(t) {
        return new (t || FoggyTabContentComponent)();
      };

      FoggyTabContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FoggyTabContentComponent,
        selectors: [["foggy-routed-content"]],
        decls: 1,
        vars: 0,
        template: function FoggyTabContentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "If the weather is foggy, there is fog");
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FoggyTabContentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "foggy-routed-content",
            template: "If the weather is foggy, there is fog"
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "WSoX":
    /*!******************************************************************************************!*\
      !*** ./src/app/main/asset/rfid-management/rfid-recharge/rfid-recharge-routing.module.ts ***!
      \******************************************************************************************/

    /*! exports provided: RfidRechargeRoutingModule */

    /***/
    function WSoX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RfidRechargeRoutingModule", function () {
        return RfidRechargeRoutingModule;
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


      var _rfid_recharge_crud_rfid_recharge_crud_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./rfid-recharge-crud/rfid-recharge-crud.component */
      "RaWR");
      /* harmony import */


      var app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/interceptors/auth-gaurd */
      "9gca");
      /* harmony import */


      var _rfid_recharge_crud_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./rfid-recharge-crud/routes */
      "uu4l");

      var routes = [{
        path: "crud",
        component: _rfid_recharge_crud_rfid_recharge_crud_component__WEBPACK_IMPORTED_MODULE_2__["RfidRechargeCrudComponent"],
        canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: _rfid_recharge_crud_routes__WEBPACK_IMPORTED_MODULE_4__["TABS_DEMO_ROUTES"]
      }];

      var RfidRechargeRoutingModule = function RfidRechargeRoutingModule() {
        _classCallCheck(this, RfidRechargeRoutingModule);
      };

      RfidRechargeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: RfidRechargeRoutingModule
      });
      RfidRechargeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function RfidRechargeRoutingModule_Factory(t) {
          return new (t || RfidRechargeRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RfidRechargeRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RfidRechargeRoutingModule, [{
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
    "iRig":
    /*!***************************************************************************************************!*\
      !*** ./src/app/main/asset/rfid-management/rfid-recharge/action-dialog/action-dialog.component.ts ***!
      \***************************************************************************************************/

    /*! exports provided: ActionDialogComponent */

    /***/
    function iRig(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionDialogComponent", function () {
        return ActionDialogComponent;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _fuse_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fuse/animations */
      "PVWW");
      /* harmony import */


      var app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/rfid/rfid.service */
      "QtQ4");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var _c0 = ["toggleElement"];

      function ActionDialogComponent_mat_error_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter amount. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_error_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Special character are not allowed");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var ActionDialogComponent = /*#__PURE__*/function () {
        function ActionDialogComponent(fb, rfidService, snackBar, datePipe, dialogRef, data) {
          _classCallCheck(this, ActionDialogComponent);

          this.fb = fb;
          this.rfidService = rfidService;
          this.snackBar = snackBar;
          this.datePipe = datePipe;
          this.dialogRef = dialogRef;
          this.data = data;
          this.isEditMode = false;
          this.status = false;
        }

        _createClass(ActionDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialize();
          }
        }, {
          key: "initialize",
          value: function initialize() {
            this.localStorage = JSON.parse(localStorage.getItem("userDetails"));
            this.params = this.data;
            this.isEditMode = this.params.action == "CREATE" ? false : true;
            this.form = this.fb.group({
              amount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]*$/)]]
            }); // if (this.isEditMode) {
            //     this.assignValues(this.params);
            // }
          }
        }, {
          key: "close",
          value: function close() {
            this.dialogRef.close();
          }
        }, {
          key: "closeActionPanel",
          value: function closeActionPanel() {
            this.dialogRef.close();
          }
        }, {
          key: "onYesClick",
          value: function onYesClick() {
            var _this15 = this;

            if (this.form.valid) {
              var formValues = this.form.value;
              var params = {
                rfid: this.params.data.id,
                cpo_id: this.params.data.cpo_id,
                station_id: this.params.data.station_id,
                amount: formValues.amount,
                expiry_date: this.datePipe.transform(new Date(), "yyyy-MM-dd"),
                created_date: this.datePipe.transform(new Date(), "yyyy-MM-dd"),
                created_by: this.localStorage.userId,
                status: this.status == true ? "Y" : "N"
              };

              if (this.isEditMode) {
                params.id = this.params.data.id, params.modify_by = this.localStorage.userId;
              } else {
                params.created_by = this.localStorage.userId;
              }

              if (this.isEditMode) {
                this.rfidService.updateBalance(params).subscribe(function (data) {
                  _this15.snackBar.open("Record updated successfully!", "Dismiss", {
                    duration: 5000
                  });

                  _this15.dialogRef.close();
                }, function (err) {
                  _this15.snackBar.open("Please try again", "Dismiss", {
                    duration: 5000
                  });
                });
              }

              this.dialogRef.close(params);
            }

            return;
          }
        }]);

        return ActionDialogComponent;
      }();

      ActionDialogComponent.ɵfac = function ActionDialogComponent_Factory(t) {
        return new (t || ActionDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_5__["RfidService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]));
      };

      ActionDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ActionDialogComponent,
        selectors: [["app-action-dialog"]],
        viewQuery: function ActionDialogComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ref = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]])],
        decls: 21,
        vars: 4,
        consts: [["id", "dialog_action_close", "matTooltip", "Close window", 1, "material-icons-outlined", 2, "cursor", "pointer", "color", "white", 3, "click"], [1, "action_toolbar"], [2, "padding", "24px", "max-height", "22vw", "overflow", "auto"], ["id", "forms", "fxLayout", "column", 1, "page-layout", "simple", "fullwidth"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", "name", "form", 1, "mat-card", "mat-elevation-z4", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "50", 1, "pr-4"], ["matInput", "", "placeholder", "", "formControlName", "amount", "autocomplete", "off", "required", ""], ["matSuffix", "", "matTooltip", "Please enter amount", 1, "secondary-text"], [4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "start center", 2, "padding-top", "10px"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "mr-8", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "warn", 1, "mr-8", 3, "click"]],
        template: function ActionDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ActionDialogComponent_Template_mat_icon_click_0_listener() {
              return ctx.closeActionPanel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "RFID Recharge");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ActionDialogComponent_mat_error_14_Template, 2, 0, "mat-error", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ActionDialogComponent_mat_error_15_Template, 2, 0, "mat-error", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ActionDialogComponent_Template_button_click_17_listener() {
              return ctx.onYesClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ActionDialogComponent_Template_button_click_19_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("amount").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("amount").hasError("pattern"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isEditMode ? "Save" : "Save", " ");
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ActionDialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: "app-action-dialog",
            templateUrl: "./action-dialog.component.html",
            styleUrls: ["./action-dialog.component.scss"],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_5__["RfidService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, {
          ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["toggleElement"]
          }]
        });
      })();
      /***/

    },

    /***/
    "uu4l":
    /*!***************************************************************************************!*\
      !*** ./src/app/main/asset/rfid-management/rfid-recharge/rfid-recharge-crud/routes.ts ***!
      \***************************************************************************************/

    /*! exports provided: TABS_DEMO_ROUTES */

    /***/
    function uu4l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TABS_DEMO_ROUTES", function () {
        return TABS_DEMO_ROUTES;
      });
      /* harmony import */


      var app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! app/shared/interceptors/auth-gaurd */
      "9gca");
      /* harmony import */


      var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../list/list.component */
      "8b/9");
      /* harmony import */


      var _recharge_history_recharge_history_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../recharge-history/recharge-history.component */
      "Dw5M");
      /* harmony import */


      var _energy_consumption_logs_energy_consumption_logs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../energy-consumption-logs/energy-consumption-logs.component */
      "5eun");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var TABS_DEMO_ROUTES = [{
        path: "list",
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"],
        canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
      }, {
        path: "recharge-history",
        component: _recharge_history_recharge_history_component__WEBPACK_IMPORTED_MODULE_2__["RechargeHistoryComponent"],
        canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
      }, {
        path: "energy-consumption-logs",
        component: _energy_consumption_logs_energy_consumption_logs_component__WEBPACK_IMPORTED_MODULE_3__["EnergyConsumptionLogsComponent"],
        canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
      }, {
        path: "",
        redirectTo: "list",
        pathMatch: "full"
      }];
      /***/
    }
  }]);
})();
//# sourceMappingURL=rfid-recharge-rfid-recharge-module-es5.js.map