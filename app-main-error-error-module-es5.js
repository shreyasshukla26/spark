(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-main-error-error-module"], {
    /***/
    "00s5":
    /*!********************************************!*\
      !*** ./src/app/main/error/error.module.ts ***!
      \********************************************/

    /*! exports provided: ErrorModule */

    /***/
    function s5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorModule", function () {
        return ErrorModule;
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


      var _list_error_list_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./list-error/list-error.component */
      "vUOd");
      /* harmony import */


      var _error_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./error-routing.module */
      "t4nK");
      /* harmony import */


      var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fuse/shared.module */
      "5HBU");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");

      var COMPONENTS = [_list_error_list_error_component__WEBPACK_IMPORTED_MODULE_2__["ListErrorComponent"]];
      var COMPONENTS_DYNAMIC = [];

      var ErrorModule = function ErrorModule() {
        _classCallCheck(this, ErrorModule);
      };

      ErrorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ErrorModule
      });
      ErrorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ErrorModule_Factory(t) {
          return new (t || ErrorModule)();
        },
        imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _error_routing_module__WEBPACK_IMPORTED_MODULE_3__["ErrorRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ErrorModule, {
          declarations: [_list_error_list_error_component__WEBPACK_IMPORTED_MODULE_2__["ListErrorComponent"]],
          imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _error_routing_module__WEBPACK_IMPORTED_MODULE_3__["ErrorRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _error_routing_module__WEBPACK_IMPORTED_MODULE_3__["ErrorRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"]],
            declarations: [COMPONENTS, COMPONENTS_DYNAMIC],
            entryComponents: [COMPONENTS_DYNAMIC]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "t4nK":
    /*!****************************************************!*\
      !*** ./src/app/main/error/error-routing.module.ts ***!
      \****************************************************/

    /*! exports provided: ErrorRoutingModule */

    /***/
    function t4nK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorRoutingModule", function () {
        return ErrorRoutingModule;
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


      var _list_error_list_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./list-error/list-error.component */
      "vUOd");

      var routes = [{
        path: 'errorList',
        component: _list_error_list_error_component__WEBPACK_IMPORTED_MODULE_2__["ListErrorComponent"]
      }];

      var ErrorRoutingModule = function ErrorRoutingModule() {
        _classCallCheck(this, ErrorRoutingModule);
      };

      ErrorRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ErrorRoutingModule
      });
      ErrorRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ErrorRoutingModule_Factory(t) {
          return new (t || ErrorRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ErrorRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorRoutingModule, [{
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
    "vUOd":
    /*!***************************************************************!*\
      !*** ./src/app/main/error/list-error/list-error.component.ts ***!
      \***************************************************************/

    /*! exports provided: ErrorModel, ListErrorComponent */

    /***/
    function vUOd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorModel", function () {
        return ErrorModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListErrorComponent", function () {
        return ListErrorComponent;
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


      var mat_table_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! mat-table-filter */
      "6Ugt");
      /* harmony import */


      var _fuse_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fuse/animations */
      "PVWW");
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! xlsx */
      "EUZL");
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! jspdf */
      "i680");
      /* harmony import */


      var jspdf_autotable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! jspdf-autotable */
      "DaQG");
      /* harmony import */


      var jspdf_autotable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var app_shared_services_error_error_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! app/shared/services/error/error.service */
      "0EVA");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! app/shared/services/utility/utility.service */
      "xb2s");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive */
      "EwFO");
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


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");

      function ListErrorComponent_th_51_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User Name \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListErrorComponent_th_51_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r28.changeVisibility("userNameSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListErrorComponent_th_51_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListErrorComponent_th_51_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r30.filterEntity.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListErrorComponent_th_51_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r32.changeVisibility("userNameSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r27.filterEntity.username);
        }
      }

      function ListErrorComponent_th_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListErrorComponent_th_51_span_1_Template, 4, 0, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListErrorComponent_th_51_mat_form_field_2_Template, 4, 1, "mat-form-field", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.userNameSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.userNameSearch);
        }
      }

      function ListErrorComponent_td_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r33.username, " ");
        }
      }

      function ListErrorComponent_th_54_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Activity Name \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListErrorComponent_th_54_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r36.changeVisibility("activitySearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListErrorComponent_th_54_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListErrorComponent_th_54_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r38.filterEntity.activity_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListErrorComponent_th_54_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r40.changeVisibility("activitySearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r35.filterEntity.activity_name);
        }
      }

      function ListErrorComponent_th_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListErrorComponent_th_54_span_1_Template, 4, 0, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListErrorComponent_th_54_mat_form_field_2_Template, 4, 1, "mat-form-field", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.activitySearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.activitySearch);
        }
      }

      function ListErrorComponent_td_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r41 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r41.activity_name, " ");
        }
      }

      function ListErrorComponent_th_57_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Application Platform \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListErrorComponent_th_57_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r44.changeVisibility("applicationSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListErrorComponent_th_57_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListErrorComponent_th_57_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r46.filterEntity.application_platform = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListErrorComponent_th_57_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r48.changeVisibility("applicationSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r43.filterEntity.application_platform);
        }
      }

      function ListErrorComponent_th_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListErrorComponent_th_57_span_1_Template, 4, 0, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListErrorComponent_th_57_mat_form_field_2_Template, 4, 1, "mat-form-field", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.applicationSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.applicationSearch);
        }
      }

      function ListErrorComponent_td_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r49 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r49.application_platform, " ");
        }
      }

      function ListErrorComponent_th_60_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListErrorComponent_th_60_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r52.changeVisibility("emailSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListErrorComponent_th_60_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListErrorComponent_th_60_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r54.filterEntity.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListErrorComponent_th_60_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r56.changeVisibility("emailSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r51.filterEntity.email);
        }
      }

      function ListErrorComponent_th_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListErrorComponent_th_60_span_1_Template, 4, 0, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListErrorComponent_th_60_mat_form_field_2_Template, 4, 1, "mat-form-field", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.emailSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.emailSearch);
        }
      }

      function ListErrorComponent_td_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r57 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r57.email, " ");
        }
      }

      function ListErrorComponent_th_63_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Error Code \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListErrorComponent_th_63_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r60.changeVisibility("errorCodeSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListErrorComponent_th_63_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListErrorComponent_th_63_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r62.filterEntity.error_code = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListErrorComponent_th_63_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

            var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r64.changeVisibility("errorCodeSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r59.filterEntity.error_code);
        }
      }

      function ListErrorComponent_th_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListErrorComponent_th_63_span_1_Template, 4, 0, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListErrorComponent_th_63_mat_form_field_2_Template, 4, 1, "mat-form-field", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r12.errorCodeSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.errorCodeSearch);
        }
      }

      function ListErrorComponent_td_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r65 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r65.error_code, " ");
        }
      }

      function ListErrorComponent_th_66_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Error Description \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListErrorComponent_th_66_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

            var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r68.changeVisibility("errorDesiSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListErrorComponent_th_66_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListErrorComponent_th_66_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

            var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r70.filterEntity.error_discription = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListErrorComponent_th_66_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

            var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r72.changeVisibility("errorDesiSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r67.filterEntity.error_discription);
        }
      }

      function ListErrorComponent_th_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListErrorComponent_th_66_span_1_Template, 4, 0, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListErrorComponent_th_66_mat_form_field_2_Template, 4, 1, "mat-form-field", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r14.errorDesiSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.errorDesiSearch);
        }
      }

      function ListErrorComponent_td_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r73 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r73.error_discription, " ");
        }
      }

      function ListErrorComponent_th_69_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Project Code \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListErrorComponent_th_69_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

            var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r76.changeVisibility("projCodeSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListErrorComponent_th_69_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListErrorComponent_th_69_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r78.filterEntity.project_code = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListErrorComponent_th_69_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

            var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r80.changeVisibility("projCodeSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r75.filterEntity.project_code);
        }
      }

      function ListErrorComponent_th_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListErrorComponent_th_69_span_1_Template, 4, 0, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListErrorComponent_th_69_mat_form_field_2_Template, 4, 1, "mat-form-field", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r16.projCodeSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.projCodeSearch);
        }
      }

      function ListErrorComponent_td_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r81 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r81.project_code, " ");
        }
      }

      function ListErrorComponent_th_72_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Project Name \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListErrorComponent_th_72_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85);

            var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r84.changeVisibility("projNameSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListErrorComponent_th_72_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListErrorComponent_th_72_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87);

            var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r86.filterEntity.project_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListErrorComponent_th_72_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87);

            var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r88.changeVisibility("projNameSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r83.filterEntity.project_name);
        }
      }

      function ListErrorComponent_th_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListErrorComponent_th_72_span_1_Template, 4, 0, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListErrorComponent_th_72_mat_form_field_2_Template, 4, 1, "mat-form-field", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r18.projNameSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.projNameSearch);
        }
      }

      function ListErrorComponent_td_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r89 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r89.project_name, " ");
        }
      }

      function ListErrorComponent_th_75_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "URL \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListErrorComponent_th_75_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93);

            var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r92.changeVisibility("urlSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListErrorComponent_th_75_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListErrorComponent_th_75_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95);

            var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r94.filterEntity.url = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListErrorComponent_th_75_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95);

            var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r96.changeVisibility("urlSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r91.filterEntity.url);
        }
      }

      function ListErrorComponent_th_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListErrorComponent_th_75_span_1_Template, 4, 0, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListErrorComponent_th_75_mat_form_field_2_Template, 4, 1, "mat-form-field", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r20.urlSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.urlSearch);
        }
      }

      function ListErrorComponent_td_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r97 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r97.url, " ");
        }
      }

      function ListErrorComponent_th_78_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Created Date \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListErrorComponent_th_78_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101);

            var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r100.changeVisibility("convertDateSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListErrorComponent_th_78_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListErrorComponent_th_78_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103);

            var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r102.filterEntity.convertDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListErrorComponent_th_78_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103);

            var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r104.changeVisibility("convertDateSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r99.filterEntity.convertDate);
        }
      }

      function ListErrorComponent_th_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListErrorComponent_th_78_span_1_Template, 4, 0, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListErrorComponent_th_78_mat_form_field_2_Template, 4, 1, "mat-form-field", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r22.convertDateSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.convertDateSearch);
        }
      }

      function ListErrorComponent_td_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r105 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r105.convertDate, " ");
        }
      }

      function ListErrorComponent_tr_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 61);
        }
      }

      function ListErrorComponent_tr_81_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 62);
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

      var _c2 = function _c2() {
        return [10, 30, 50, 100];
      };

      var ErrorModel = function ErrorModel() {
        _classCallCheck(this, ErrorModel);
      };
      /**
       * @title Data table with sorting, pagination, and filtering.
       */


      var ListErrorComponent = /*#__PURE__*/function () {
        function ListErrorComponent(errorService, dialog, _utilityService, snackBar, cdr, datepipe, fb) {
          _classCallCheck(this, ListErrorComponent);

          this.errorService = errorService;
          this.dialog = dialog;
          this._utilityService = _utilityService;
          this.snackBar = snackBar;
          this.cdr = cdr;
          this.datepipe = datepipe;
          this.fb = fb;
          this.currDate = new Date();
          this.displayedColumns = ['username', 'activity_name', 'application_platform', 'email', 'error_code', 'error_discription', 'project_code', 'project_name', 'convertDate'];
          this.head = [['User Name ', 'Activity Name', 'Application Platform', 'Email', 'Error Code', 'Error Discription', 'Project Code', 'Project Name', 'Date']];
          this.userNameSearch = false;
          this.activitySearch = false;
          this.applicationSearch = false;
          this.emailSearch = false;
          this.errorCodeSearch = false;
          this.errorDesiSearch = false;
          this.projCodeSearch = false;
          this.projNameSearch = false;
          this.urlSearch = false;
          this.convertDateSearch = false;
          this.tempDate = new Date();
          this.errorForm = this.fb.group({
            name: [''],
            toDate: [new Date()],
            fromDate: [new Date(this.tempDate.setDate(this.tempDate.getDate() - 2))]
          });
        }

        _createClass(ListErrorComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            this._utilityService.activeMenuItems$.subscribe(function (menuItemSelecte) {
              _this.menuArray = menuItemSelecte;

              if (_this.menuArray == null || _this.menuArray == undefined || _this.menuArray.title == null || _this.menuArray.title == undefined) {
                _this.menuArray = JSON.parse(localStorage.getItem('activeMenuItems'));
              }

              _this.cdr.detectChanges();
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
            this.getErrorList();
            this.filterEntity = new ErrorModel();
            this.filterType = mat_table_filter__WEBPACK_IMPORTED_MODULE_4__["MatTableFilter"].ANYWHERE;
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
          key: "getErrorList",
          value: function getErrorList() {
            var _this2 = this;

            this.errorService.getAllErrorLog().subscribe(function (resp) {
              //;
              if (resp != null) {
                _this2.errorsLogs = resp.data;

                for (var i = 0; i < _this2.errorsLogs.length; i++) {
                  _this2.errorsLogs[i].convertDate = _this2.datepipe.transform(_this2.errorsLogs[i].created_date, 'dd/MM/yyyy hh:mm:ss');
                }

                _this2.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this2.errorsLogs);
                _this2.dataSource.paginator = _this2.paginator;
                _this2.dataSource.sort = _this2.sort;

                _this2.cdr.detectChanges();
              } else {
                return;
              }
            }, function (err) {});
          }
        }, {
          key: "changeVisibility",
          value: function changeVisibility(visibleOption, ev) {
            ev.stopPropagation();

            if (visibleOption == 'userNameSearch') {
              this.userNameSearch = !this.userNameSearch;
              this.filterEntity.username = "";
            }

            if (visibleOption == 'activitySearch') {
              this.activitySearch = !this.activitySearch;
              this.filterEntity.activity_name = "";
            }

            if (visibleOption == 'applicationSearch') {
              this.applicationSearch = !this.applicationSearch;
              this.filterEntity.application_platform = "";
            }

            if (visibleOption == 'emailSearch') {
              this.emailSearch = !this.emailSearch;
              this.filterEntity.email = "";
            }

            if (visibleOption == 'errorCodeSearch') {
              this.errorCodeSearch = !this.errorCodeSearch;
              this.filterEntity.error_code = "";
            }

            if (visibleOption == 'errorDesiSearch') {
              this.errorDesiSearch = !this.errorDesiSearch;
              this.filterEntity.error_discription = "";
            }

            if (visibleOption == 'projCodeSearch') {
              this.projCodeSearch = !this.projCodeSearch;
              this.filterEntity.project_code = "";
            }

            if (visibleOption == 'projNameSearch') {
              this.projNameSearch = !this.projNameSearch;
              this.filterEntity.project_name = "";
            }

            if (visibleOption == 'urlSearch') {
              this.urlSearch = !this.urlSearch;
              this.filterEntity.url = "";
            }

            if (visibleOption == 'convertDateSearch') {
              this.convertDateSearch = !this.convertDateSearch;
              this.filterEntity.convertDate = "";
            }
          }
        }, {
          key: "tableExport",
          value: function tableExport() {
            this.exportedData = [];

            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              var errorLogs = this.dataSource.filteredData[i];
              var data = {
                'User Name ': errorLogs.username,
                'Activity': errorLogs.activity_name,
                'Application Platform': errorLogs.application_platform,
                'Email': errorLogs.email,
                'Error Code': errorLogs.error_code,
                'Error Description': errorLogs.error_discription,
                'Project Code': errorLogs.project_code,
                'Project Name': errorLogs.project_name,
                'Created Date': errorLogs.convertDate
              };
              this.exportedData.push(data);
            }

            var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].json_to_sheet(this.exportedData);
            var workBook = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].book_append_sheet(workBook, workSheet, 'SheetName');
            xlsx__WEBPACK_IMPORTED_MODULE_6__["writeFile"](workBook, 'Error Logs.xlsx');
          }
        }, {
          key: "pdfExport",
          value: function pdfExport() {
            var _this3 = this;

            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_8__["jsPDF"]({// set needed dimensions for any elemen
            });
            this.exportedData = [];

            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              var errorLogs = this.dataSource.filteredData[i]; //this.exportedData.push({name: `name${i}`, description: `description${i}`,
              //statusString: `statusString${i}`});

              var data = [errorLogs.username, errorLogs.activity_name, errorLogs.application_platform, errorLogs.email, errorLogs.error_code, errorLogs.error_discription, errorLogs.project_code, errorLogs.project_name, errorLogs.convertDate];
              this.exportedData.push(data);
            }

            var img = new Image();
            var imgRight = new Image();
            var src = 'assets/images/logos/logo_sparkev_main.png';
            var srcSparkEV = 'assets/images/logos/logo_SparkEV_black.png';
            imgRight.src = srcSparkEV;
            var createdDate = new Date().toLocaleString('en-GB');
            img.src = src;
            doc.setFontSize(11);
            doc.setTextColor(100);
            doc.setFontSize(18);
            doc.autoTable({
              head: this.head,
              body: this.exportedData,
              theme: 'grid',
              headStyles: {
                fontStyle: 'majalla',
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
                doc.text('Error Logs Report', doc.internal.pageSize.getWidth() / 2, 11, {
                  align: 'center'
                });
                doc.setTextColor(211, 211, 211);
                doc.setFontSize(60);
                doc.setGState(doc.GState({
                  opacity: 0.6
                }));
                doc.text('Confidential/Not for Public use', 25, 285, null, 60);
                doc.setGState(doc.GState({
                  opacity: 1
                }));
                doc.setTextColor(100);
                doc.setFontSize(9);
                doc.text('Date:' + createdDate, 15, 18);
                doc.text('Generated By:' + _this3.localStorage.f_Name, 195, 18, {
                  align: 'right'
                });
                doc = _this3.addWaterMark(doc);
              }
            }); // below line for Open PDF document in new tab

            doc.output('dataurlnewwindow'); // below line for Download PDF document  

            doc.save('Error Logs report.pdf');
          }
        }, {
          key: "addWaterMark",
          value: function addWaterMark(doc) {
            var newpage = doc.getNumberOfPages();
            var i = doc.internal.getNumberOfPages();
            doc.setTextColor(100);
            doc.setFontSize(10); //Print Page 1 of 4 for example

            doc.text('Page ' + String(i) + ' of ' + String(newpage), 210 - 20, 297 - 10, null, null, "right");
            return doc;
          }
        }]);

        return ListErrorComponent;
      }();

      ListErrorComponent.ɵfac = function ListErrorComponent_Factory(t) {
        return new (t || ListErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_error_error_service__WEBPACK_IMPORTED_MODULE_10__["ErrorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_12__["UtilityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"]));
      };

      ListErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListErrorComponent,
        selectors: [["app-list-error"]],
        viewQuery: function ListErrorComponent_Query(rf, ctx) {
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
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]])],
        decls: 83,
        vars: 19,
        consts: [[2, "display", "block", "width", "100%"], ["id", "", "fxLayout", "row", 1, "page-layout", "simple", "right-sidebar"], ["fusePerfectScrollbar", "", 1, "center"], ["fxLayout", "column", "fxLayoutAlign", "space-between", 1, "header", "accent", "px-24", "pt-16", "pb-0"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [1, "mat-display-1", "my-0", "my-sm-24", "welcome-message"], [2, "text-align", "left", "margin-left", "10px", "margin-bottom", "10px", "margin-top", "10px"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Excel Download", 3, "click"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "PDF Download", 3, "click"], [2, "padding", "16px  !important"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "30", 1, "pr-4", 2, "height", "60px"], ["matInput", "", "placeholder", "", "formControlName", "name", "autocomplete", "password", 3, "keyup"], ["input", ""], ["matInput", "", "formControlName", "fromDate", "disabled", "", 3, "matDatepicker", "max"], ["fromDate", ""], ["matSuffix", "", 3, "for"], ["disabled", "false"], ["errorStratDate", ""], ["matInput", "", "formControlName", "toDate", "disabled", "", 3, "matDatepicker", "min", "max"], ["errorEndDate", ""], ["fxFlex", "10"], ["color", "primary", "matTooltip", "Filter", 2, "cursor", "pointer", 3, "click"], ["color", "primary", "matTooltip", "Refresh", 2, "cursor", "pointer", 3, "click"], ["fxLayout", "row wrap", 1, "page-layout", "simple", "fullwidth", 2, "overflow", "scroll"], [1, "content", 2, "min-width", "auto"], [1, "mat-elevation-z8"], ["mat-table", "", "matTableFilter", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "exampleEntity", "filterType"], ["matColumnDef", "username"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "activity_name"], ["matColumnDef", "application_platform"], ["matColumnDef", "email"], ["matColumnDef", "error_code"], ["matColumnDef", "error_discription"], ["matColumnDef", "project_code"], ["matColumnDef", "project_name"], ["matColumnDef", "url"], ["matColumnDef", "convertDate"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["class", "custom_font_size", "style", "display: flex;", 4, "ngIf"], ["appearance", "outline", "class", "list_input", 4, "ngIf"], [1, "custom_font_size", 2, "display", "flex"], ["matSuffix", "", 3, "click"], ["appearance", "outline", 1, "list_input"], ["matInput", "", "placeholder", "User Name", 3, "ngModel", "ngModelChange"], ["mat-cell", ""], ["matInput", "", "placeholder", "Activity Name", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Application Platform", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Email", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Error Code", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Error Description", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Project Code", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Project Name", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "URL", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Created Date", 3, "ngModel", "ngModelChange"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function ListErrorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Error List ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListErrorComponent_Template_button_click_8_listener() {
              return ctx.tableExport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "sim_card_download");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListErrorComponent_Template_button_click_12_listener() {
              return ctx.pdfExport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "picture_as_pdf");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ListErrorComponent_Template_input_keyup_23_listener($event) {
              return ctx.applyFilter($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "From Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-datepicker-toggle", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-datepicker", 18, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "To Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "mat-datepicker-toggle", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "mat-datepicker", 18, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListErrorComponent_Template_mat_icon_click_41_listener() {
              return ctx.getErrorList();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "filter_alt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListErrorComponent_Template_mat_icon_click_44_listener() {
              return ctx.getErrorList();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "refresh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "table", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](50, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ListErrorComponent_th_51_Template, 3, 2, "th", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ListErrorComponent_td_52_Template, 2, 1, "td", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](53, 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ListErrorComponent_th_54_Template, 3, 2, "th", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ListErrorComponent_td_55_Template, 2, 1, "td", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](56, 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ListErrorComponent_th_57_Template, 3, 2, "th", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, ListErrorComponent_td_58_Template, 2, 1, "td", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](59, 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, ListErrorComponent_th_60_Template, 3, 2, "th", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ListErrorComponent_td_61_Template, 2, 1, "td", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](62, 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, ListErrorComponent_th_63_Template, 3, 2, "th", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ListErrorComponent_td_64_Template, 2, 1, "td", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](65, 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, ListErrorComponent_th_66_Template, 3, 2, "th", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, ListErrorComponent_td_67_Template, 2, 1, "td", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](68, 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, ListErrorComponent_th_69_Template, 3, 2, "th", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, ListErrorComponent_td_70_Template, 2, 1, "td", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](71, 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, ListErrorComponent_th_72_Template, 3, 2, "th", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, ListErrorComponent_td_73_Template, 2, 1, "td", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](74, 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, ListErrorComponent_th_75_Template, 3, 2, "th", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, ListErrorComponent_td_76_Template, 2, 1, "td", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](77, 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, ListErrorComponent_th_78_Template, 3, 2, "th", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, ListErrorComponent_td_79_Template, 2, 1, "td", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, ListErrorComponent_tr_80_Template, 1, 0, "tr", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, ListErrorComponent_tr_81_Template, 1, 0, "tr", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "mat-paginator", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.errorForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r2)("max", ctx.currDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r3)("min", !!ctx.errorForm.value.fromDate ? ctx.errorForm.value.fromDate._d : "2020-01-01")("max", ctx.currDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("exampleEntity", ctx.filterEntity)("filterType", ctx.filterType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c2));
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutDirective"], _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_16__["FusePerfectScrollbarDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepicker"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], mat_table_filter__WEBPACK_IMPORTED_MODULE_4__["MatTableFilterDirective"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        styles: ["mat-form-field.list_input div.mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\n.mat-header-cell .custom_font_size {\n  font-size: 15px !important;\n  text-align: left;\n}\n\nmat-form-field.list_input div.mat-form-field-infix {\n  padding: 0.5em 0 0.5em 0 !important;\n}\n\ntable {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbGlzdC1lcnJvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQTtFQUNFLDRCQUFBO0FBWEY7O0FBYUE7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0FBVkY7O0FBWUE7RUFDRSxtQ0FBQTtBQVRGOztBQVlBO0VBQ0ksV0FBQTtBQVRKOztBQVlFO0VBQ0UsWUFBQTtBQVRKIiwiZmlsZSI6Imxpc3QtZXJyb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0YWJsZSB7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIH1cclxuICBcclxuLy8gICB0ZCwgdGgge1xyXG4vLyAgICAgd2lkdGg6IDI1JTtcclxuLy8gICB9XHJcbm1hdC1mb3JtLWZpZWxkLmxpc3RfaW5wdXQgIGRpdi5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xyXG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1oZWFkZXItY2VsbCAuY3VzdG9tX2ZvbnRfc2l6ZXtcclxuICBmb250LXNpemU6IDE1cHggICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5tYXQtZm9ybS1maWVsZC5saXN0X2lucHV0IGRpdi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgcGFkZGluZzogMC41ZW0gMCAwLjVlbSAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICB0aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gICJdfQ== */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListErrorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-list-error',
            templateUrl: './list-error.component.html',
            styleUrls: ['./list-error.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]]
          }]
        }], function () {
          return [{
            type: app_shared_services_error_error_service__WEBPACK_IMPORTED_MODULE_10__["ErrorService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]
          }, {
            type: app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_12__["UtilityService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBar"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"]
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

    }
  }]);
})();
//# sourceMappingURL=app-main-error-error-module-es5.js.map