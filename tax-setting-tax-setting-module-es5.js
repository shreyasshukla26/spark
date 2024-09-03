(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tax-setting-tax-setting-module"], {
    /***/
    "8sBX":
    /*!**********************************************************************************!*\
      !*** ./src/app/main/tariff-management/tax-setting/tax-setting-routing.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: TaxSettingRoutingModule */

    /***/
    function sBX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaxSettingRoutingModule", function () {
        return TaxSettingRoutingModule;
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


      var _tax_setting_crud_tax_setting_crud_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tax-setting-crud/tax-setting-crud.component */
      "QpJi");
      /* harmony import */


      var _tax_setting_crud_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tax-setting-crud/routes */
      "9Bon");
      /* harmony import */


      var app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/interceptors/auth-gaurd */
      "9gca");

      var routes = [{
        path: 'crud',
        component: _tax_setting_crud_tax_setting_crud_component__WEBPACK_IMPORTED_MODULE_2__["TaxSettingCrudComponent"],
        canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: _tax_setting_crud_routes__WEBPACK_IMPORTED_MODULE_3__["TABS_DEMO_ROUTES"]
      }];

      var TaxSettingRoutingModule = function TaxSettingRoutingModule() {
        _classCallCheck(this, TaxSettingRoutingModule);
      };

      TaxSettingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TaxSettingRoutingModule
      });
      TaxSettingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TaxSettingRoutingModule_Factory(t) {
          return new (t || TaxSettingRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TaxSettingRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaxSettingRoutingModule, [{
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
    "9Bon":
    /*!*******************************************************************************!*\
      !*** ./src/app/main/tariff-management/tax-setting/tax-setting-crud/routes.ts ***!
      \*******************************************************************************/

    /*! exports provided: TABS_DEMO_ROUTES */

    /***/
    function Bon(module, __webpack_exports__, __webpack_require__) {
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


      var _create_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../create/create.component */
      "z3cr");
      /* harmony import */


      var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../list/list.component */
      "jWtu");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var TABS_DEMO_ROUTES = [{
        path: 'create',
        component: _create_create_component__WEBPACK_IMPORTED_MODULE_1__["CreateComponent"],
        canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
      }, {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"],
        canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
      }, {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }];
      /***/
    },

    /***/
    "DqIx":
    /*!**************************************************************************!*\
      !*** ./src/app/main/tariff-management/tax-setting/tax-setting.module.ts ***!
      \**************************************************************************/

    /*! exports provided: TaxSettingModule */

    /***/
    function DqIx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaxSettingModule", function () {
        return TaxSettingModule;
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


      var _create_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./create/create.component */
      "z3cr");
      /* harmony import */


      var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list/list.component */
      "jWtu");
      /* harmony import */


      var _action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./action-dialog/action-dialog.component */
      "R7xT");
      /* harmony import */


      var _tax_setting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tax-setting-routing.module */
      "8sBX");
      /* harmony import */


      var _tax_setting_crud_tax_setting_crud_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tax-setting-crud/tax-setting-crud.component */
      "QpJi");
      /* harmony import */


      var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fuse/shared.module */
      "5HBU");
      /* harmony import */


      var _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./view-dialog/view-dialog.component */
      "Kgu8");

      var COMPONENTS = [_tax_setting_crud_tax_setting_crud_component__WEBPACK_IMPORTED_MODULE_6__["TaxSettingCrudComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_2__["CreateComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]];
      var COMPONENTS_DYNAMIC = [_view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ViewDialogComponent"], _action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ActionDialogComponent"]];

      var TaxSettingModule = function TaxSettingModule() {
        _classCallCheck(this, TaxSettingModule);
      };

      TaxSettingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TaxSettingModule
      });
      TaxSettingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TaxSettingModule_Factory(t) {
          return new (t || TaxSettingModule)();
        },
        imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _tax_setting_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaxSettingRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TaxSettingModule, {
          declarations: [_tax_setting_crud_tax_setting_crud_component__WEBPACK_IMPORTED_MODULE_6__["TaxSettingCrudComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_2__["CreateComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"], _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ViewDialogComponent"], _action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ActionDialogComponent"]],
          imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _tax_setting_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaxSettingRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaxSettingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _tax_setting_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaxSettingRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"]],
            declarations: [COMPONENTS, COMPONENTS_DYNAMIC],
            entryComponents: [COMPONENTS_DYNAMIC]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Kgu8":
    /*!*****************************************************************************************!*\
      !*** ./src/app/main/tariff-management/tax-setting/view-dialog/view-dialog.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: ViewDialogComponent */

    /***/
    function Kgu8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewDialogComponent", function () {
        return ViewDialogComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _fuse_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fuse/animations */
      "PVWW");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_shared_services_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/shared/services/menu-master/menu-master.service */
      "kxup");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var _c0 = ["activeElement"];

      function ViewDialogComponent_mat_option_14_Template(rf, ctx) {
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

      function ViewDialogComponent_mat_error_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select nav level");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_option_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r24.title, " ");
        }
      }

      function ViewDialogComponent_mat_error_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select parent Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_option_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r25.name, " ");
        }
      }

      function ViewDialogComponent_mat_error_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_error_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter nav Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_error_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Special character are not allowed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_error_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_error_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Special character are not allowed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_option_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r26.name, " ");
        }
      }

      function ViewDialogComponent_mat_error_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_option_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r27.name, " ");
        }
      }

      function ViewDialogComponent_mat_error_90_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_error_95_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter icon url");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_error_101_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter url");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_error_106_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter display order ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function autocompleteObjectValidator() {
        return function (control) {
          if (typeof control.value === 'string') {
            return {
              'invalidAutocompleteObject': {
                value: control.value
              }
            };
          }

          return null;
          /* valid option selected */
        };
      }

      var ViewDialogComponent = /*#__PURE__*/function () {
        // messageConstant = MessageConstant;
        function ViewDialogComponent(fb, snackBar, dialogRef, data, router, menuMasterService) {
          _classCallCheck(this, ViewDialogComponent);

          this.fb = fb;
          this.snackBar = snackBar;
          this.dialogRef = dialogRef;
          this.data = data;
          this.router = router;
          this.menuMasterService = menuMasterService;
          this.isEditMode = false;
          this.status = false;
        }

        _createClass(ViewDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialize();
          }
        }, {
          key: "initialize",
          value: function initialize() {
            this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
            this.params = this.data;
            this.isEditMode = this.params.action == 'CREATE' ? false : true;
            this.form = this.fb.group({
              nav_level: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              project: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              parent_id: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              nav_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              // code: ['', [ Validators.pattern(/^[a-zA-Z0-9]*$/)]],
              title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z0-9 ]*$/)]],
              //description: ['',[Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
              type: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              icon: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              icon_url: [''],
              url: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              display_ord: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              status: this.status == true ? 'Y' : 'N'
            });

            if (this.isEditMode) {
              this.assignValues(this.params);
            }

            this.getNavLevel();
            this.getParentByNavLevel(this.params.data.nav_level);
            this.getProject();
            this.getType();
            this.getMenuIcon();
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
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('email').hasError('required') ? 'You must enter a value' : form.get('email').hasError('email') ? 'Not a valid email' : '';
          }
        }, {
          key: "assignValues",
          value: function assignValues(params) {
            this.form.get('nav_id').setValue(params.data.nav_id);
            this.form.get('title').setValue(this.params.data.title);
            this.form.get('icon_url').setValue(params.data.icon_url);
            this.form.get('url').setValue(params.data.url);
            this.form.get('display_ord').setValue(params.data.display_order);
            this.status = this.params.data.status == 'Y' ? true : false;
          }
        }, {
          key: "getNavLevel",
          value: function getNavLevel() {
            var _this = this;

            this.menuMasterService.getNavLevel().subscribe(function (resp) {
              if (resp.status == true) {
                _this.nav_level = resp.data.nav_level; //this.display_order = resp.data.next_display_order;

                if (_this.isEditMode) {
                  var toSelect = _this.nav_level.find(function (c) {
                    return c == _this.params.data.nav_level;
                  });

                  _this.form.get('nav_level').setValue(toSelect);

                  _this.filteredOptionsNavLevel = _this.form.controls.nav_level.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                    return typeof value === 'string' ? value : value;
                  }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) {
                    return name ? _this._filterNavLevel(name) : _this.nav_level;
                  }));
                }
              }
            }, function (err) {});
          }
        }, {
          key: "onNavLevelChange",
          value: function onNavLevelChange($navLevel_id) {
            //console.log($navLevel_id);
            this.form.get('parent_id').setValue('');
            this.getParentByNavLevel($navLevel_id); //this.form.get('display_ord').setValue( this.display_order);
          }
        }, {
          key: "_filterNavLevel",
          value: function _filterNavLevel(name) {
            var filterValue = name.toLowerCase();
            return this.nav_level.filter(function (option) {
              return option.toString().toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "displayNavLevel",
          value: function displayNavLevel(item) {
            return item && item ? item : '';
          }
        }, {
          key: "getProject",
          value: function getProject() {
            var _this2 = this;

            this.menuMasterService.getProject().subscribe(function (resp) {
              if (resp != null) {
                _this2.project = resp;

                if (_this2.isEditMode) {
                  var toSelect = _this2.project.find(function (c) {
                    return c.id == _this2.params.data.project_id;
                  });

                  _this2.form.get('project').setValue(toSelect);

                  _this2.filteredOptionsProject = _this2.form.controls.project.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                    return typeof value === 'string' ? value : value.code;
                  }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) {
                    return name ? _this2._filterProject(name) : _this2.project;
                  }));
                }
              }
            }, function (err) {});
          }
        }, {
          key: "_filterProject",
          value: function _filterProject(name) {
            var filterValue = name.toLowerCase();
            return this.project.filter(function (option) {
              return option.code.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "displayProject",
          value: function displayProject(item) {
            return item && item.code ? item.code : '';
          }
        }, {
          key: "getType",
          value: function getType() {
            var _this3 = this;

            this.menuMasterService.getMenuType().subscribe(function (resp) {
              if (resp.status == true) {
                _this3.menuType = resp.data;

                if (_this3.isEditMode) {
                  var toSelect = _this3.menuType.find(function (c) {
                    return c.type == _this3.params.data.type;
                  });

                  _this3.form.get('type').setValue(toSelect);

                  _this3.filteredOptionsMenuType = _this3.form.controls.type.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                    return typeof value === 'string' ? value : value.type;
                  }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) {
                    return name ? _this3._filterMenuType(name) : _this3.menuType;
                  }));
                }
              }
            }, function (err) {});
          }
        }, {
          key: "_filterMenuType",
          value: function _filterMenuType(name) {
            var filterValue = name.toLowerCase();
            return this.menuType.filter(function (option) {
              return option.type.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "displayType",
          value: function displayType(item) {
            return item && item.type ? item.type : '';
          }
        }, {
          key: "getMenuIcon",
          value: function getMenuIcon() {
            var _this4 = this;

            this.menuMasterService.getMenuIcon().subscribe(function (resp) {
              if (resp.status == true) {
                _this4.menuIcon = resp.data;

                if (_this4.isEditMode) {
                  var toSelect = _this4.menuIcon.find(function (c) {
                    return c.icon == _this4.params.data.icon;
                  });

                  _this4.form.get('icon').setValue(toSelect);

                  _this4.filteredOptionsMenuIcon = _this4.form.controls.icon.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                    return typeof value === 'string' ? value : value.icon;
                  }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) {
                    return name ? _this4._filterMenuIcon(name) : _this4.menuIcon;
                  }));
                }
              }
            }, function (err) {});
          }
        }, {
          key: "_filterMenuIcon",
          value: function _filterMenuIcon(name) {
            var filterValue = name.toLowerCase();
            return this.menuIcon.filter(function (option) {
              return option.icon == null ? false : option.icon.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "displayIcon",
          value: function displayIcon(item) {
            return item && item.icon ? item.icon : '';
          }
        }, {
          key: "getParentByNavLevel",
          value: function getParentByNavLevel(navLevel_id) {
            var _this5 = this;

            this.menuMasterService.getParentByNavLevel(navLevel_id).subscribe(function (resp) {
              if (resp.status == true) {
                _this5.parentId = resp.data;

                if (_this5.isEditMode) {
                  var toSelect = _this5.parentId.find(function (c) {
                    return c.id == _this5.params.data.parent_id;
                  });

                  _this5.form.get('parent_id').setValue(toSelect);

                  _this5.filteredOptionsParentId = _this5.form.controls.parent_id.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                    return typeof value === 'string' ? value : value == null ? '' : value.title;
                  }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) {
                    return name ? _this5._filterParentId(name) : _this5.parentId;
                  }));
                }
              }
            }, function (err) {});
          }
        }, {
          key: "_filterParentId",
          value: function _filterParentId(name) {
            var filterValue = name.toLowerCase();
            return this.parentId.filter(function (option) {
              return option.title.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "displayParentId",
          value: function displayParentId(item) {
            return item && item.title ? item.title : '';
          }
        }, {
          key: "updateStatus",
          value: function updateStatus(event) {
            this.status = event.checked;
            this.active.checked = this.status;
          }
        }]);

        return ViewDialogComponent;
      }();

      ViewDialogComponent.ɵfac = function ViewDialogComponent_Factory(t) {
        return new (t || ViewDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_7__["MenuMasterService"]));
      };

      ViewDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ViewDialogComponent,
        selectors: [["app-view-dialog"]],
        viewQuery: function ViewDialogComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.active = _t.first);
          }
        },
        decls: 116,
        vars: 41,
        consts: [["id", "dialog_action_close", "matTooltip", "Close window", 1, "material-icons-outlined", 2, "cursor", "pointer", "color", "white", 3, "click"], [1, "action_toolbar"], [2, "padding", "24px", "max-height", "32vw", "overflow", "auto"], ["id", "forms", "fxLayout", "column", 1, "page-layout", "simple", "fullwidth", "mat-dialog"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", "name", "form", 1, "", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "25", 1, "pr-4"], ["type", "text", "matInput", "", "formControlName", "nav_level", "autocomplete", "off", "readonly", "", 3, "matAutocomplete"], [3, "displayWith", "optionSelected"], ["navLevelAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 2, "display", "flex"], ["matSuffix", "", 1, "secondary-text"], ["matSuffix", "", "matTooltip", "Please select nav level", 1, "secondary-text"], [4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "parent_id", "autocomplete", "off", "readonly", "", 3, "matAutocomplete"], [3, "displayWith"], ["parentIdAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select parant Id", 1, "secondary-text"], ["type", "text", "matInput", "", "formControlName", "project", "autocomplete", "off", "readonly", "", 3, "matAutocomplete"], ["projectAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select project", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "nav_id", "maxlength", "200", "autocomplete", "off", "readonly", "", 2, "text-transform", "lowercase"], ["matInput", "", "placeholder", "", "formControlName", "title", "maxlength", "200", "autocomplete", "off", "readonly", ""], ["type", "text", "matInput", "", "formControlName", "type", "autocomplete", "off", "readonly", "", 3, "matAutocomplete"], ["typeAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select type", 1, "secondary-text"], ["type", "text", "matInput", "", "formControlName", "icon", "autocomplete", "off", "readonly", "", 3, "matAutocomplete"], ["iconAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select icon", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "icon_url", "maxlength", "200", "autocomplete", "off", "readonly", "", 2, "text-transform", "lowercase"], ["appearance", "outline", "fxFlex", "24", 1, "pr-4"], ["matInput", "", "placeholder", "", "formControlName", "url", "maxlength", "500", "autocomplete", "off", "readonly", "", 2, "text-transform", "lowercase"], ["matInput", "", "placeholder", "", "formControlName", "display_ord", "autocomplete", "off", "readonly", ""], ["fxFlex", "12", 1, "pr-4"], [1, "sm-txt", "mr-20"], ["color", "primary", 1, "example-margin", "sm-txt", "mt-10", 3, "checked", "disabled", "change"], ["activeElement", ""], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["mat-raised-button", "", "type", "button", "color", "warn", 1, "mr-8", 3, "click"], [3, "value"]],
        template: function ViewDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewDialogComponent_Template_mat_icon_click_0_listener() {
              return ctx.closeActionPanel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Menu Master");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nav Level");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-autocomplete", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function ViewDialogComponent_Template_mat_autocomplete_optionSelected_12_listener($event) {
              return ctx.onNavLevelChange($event.option.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ViewDialogComponent_mat_option_14_Template, 2, 2, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " model_training");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ViewDialogComponent_mat_error_21_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Parent ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-autocomplete", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ViewDialogComponent_mat_option_28_Template, 2, 2, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-icon", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "help ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ViewDialogComponent_mat_error_35_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-autocomplete", 16, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ViewDialogComponent_mat_option_42_Template, 2, 2, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-icon", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " precision_manufacturing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ViewDialogComponent_mat_error_49_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Nav ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ViewDialogComponent_mat_error_54_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ViewDialogComponent_mat_error_55_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ViewDialogComponent_mat_error_61_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ViewDialogComponent_mat_error_62_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-autocomplete", 16, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, ViewDialogComponent_mat_option_69_Template, 2, 2, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](70, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-icon", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, ViewDialogComponent_mat_error_76_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-autocomplete", 16, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, ViewDialogComponent_mat_option_83_Template, 2, 2, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](84, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-icon", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "model_training ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, ViewDialogComponent_mat_error_90_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Icon Url");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, ViewDialogComponent_mat_error_95_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-form-field", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Url");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, ViewDialogComponent_mat_error_101_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-form-field", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Display Order");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "input", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, ViewDialogComponent_mat_error_106_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-label", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-slide-toggle", 36, 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ViewDialogComponent_Template_mat_slide_toggle_change_110_listener($event) {
              return ctx.updateStatus($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewDialogComponent_Template_button_click_114_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

            var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68);

            var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayNavLevel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 31, ctx.filteredOptionsNavLevel));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("nav_level").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayParentId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 33, ctx.filteredOptionsParentId));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("parent_id").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayProject);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 35, ctx.filteredOptionsProject));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("project").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("nav_id").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("nav_id").hasError("pattern"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("title").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("title").hasError("pattern"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](70, 37, ctx.filteredOptionsMenuType));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("type").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayIcon);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](84, 39, ctx.filteredOptionsMenuIcon));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("icon").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("icon_url").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("url").errors == null ? null : ctx.form.get("url").errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("display_ord").errors == null ? null : ctx.form.get("display_ord").errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.status)("disabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.status ? "Active" : "Inactive", " ");
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["AsyncPipe"]],
        styles: [".mat-dialog {\n  margin: 0 -24px;\n  padding: 0 24px;\n  max-height: 65vh;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHZpZXctZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJ2aWV3LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9ne1xyXG4gICAgbWFyZ2luOiAwIC0yNHB4O1xyXG4gICAgcGFkZGluZzogMCAyNHB4O1xyXG4gICAgbWF4LWhlaWdodDogNjV2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbiJdfQ== */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewDialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-view-dialog',
            templateUrl: './view-dialog.component.html',
            styleUrls: ['./view-dialog.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: app_shared_services_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_7__["MenuMasterService"]
          }];
        }, {
          active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["activeElement"]
          }]
        });
      })();
      /***/

    },

    /***/
    "QpJi":
    /*!***************************************************************************************************!*\
      !*** ./src/app/main/tariff-management/tax-setting/tax-setting-crud/tax-setting-crud.component.ts ***!
      \***************************************************************************************************/

    /*! exports provided: TaxSettingCrudComponent, SunnyTabContentComponent, RainyTabContentComponent, FoggyTabContentComponent */

    /***/
    function QpJi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaxSettingCrudComponent", function () {
        return TaxSettingCrudComponent;
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

      function TaxSettingCrudComponent_a_8_Template(rf, ctx) {
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


      var TaxSettingCrudComponent = /*#__PURE__*/function () {
        function TaxSettingCrudComponent(router, cdr, _utilityService) {
          _classCallCheck(this, TaxSettingCrudComponent);

          this.router = router;
          this.cdr = cdr;
          this._utilityService = _utilityService;
          this.tabLinks = [{
            label: 'Tax Setting',
            link: 'list'
          }, {
            label: 'Add New',
            link: 'create'
          }];
          this.tempLinks = [];
        }

        _createClass(TaxSettingCrudComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
            var nav_list = this.localStorage.nav_list_with_tab; // nav_list.filter((x) => {
            //   if (x.id === "menuManagement") {
            //     this.objectData = x;
            //     this.objectData.children.filter((y) => {
            //       if (y.id === "crud") {
            //         this.objectChildData = y;
            //         let isDefaultRoutePermeted = false;
            //         this.objectChildData.children.filter((z) => {
            //           if (z.id === "menuMaster") {
            //             isDefaultRoutePermeted = true;
            //             this.tempLinks.push({ label: 'Menu Master', link: 'list' });
            //           }
            //           if (z.id === "addNew") {
            //             this.tempLinks.push({ label: 'Add New', link: 'create' });
            //           }
            //         });
            //         this.tabLinks = this.tempLinks;
            //         if (!isDefaultRoutePermeted) {
            //           this.router.navigate(['/menuManagement/crud/crud/' + this.tempLinks[0].link]);
            //         }
            //       }
            //     });
            //   }
            // });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this6 = this;

            this._utilityService.activeMenuItems$.subscribe(function (menuItemSelecte) {
              _this6.menuArray = menuItemSelecte;

              if (_this6.menuArray == null || _this6.menuArray == undefined || _this6.menuArray.title == null || _this6.menuArray.title == undefined) {
                _this6.menuArray = JSON.parse(localStorage.getItem('activeMenuItems'));
              }

              _this6.cdr.detectChanges();
            });
          }
        }]);

        return TaxSettingCrudComponent;
      }();

      TaxSettingCrudComponent.ɵfac = function TaxSettingCrudComponent_Factory(t) {
        return new (t || TaxSettingCrudComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]));
      };

      TaxSettingCrudComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TaxSettingCrudComponent,
        selectors: [["app-tax-setting-crud"]],
        decls: 10,
        vars: 6,
        consts: [[2, "display", "block", "width", "100%"], ["id", "", "fxLayout", "row", 1, "page-layout", "simple", "right-sidebar"], ["fusePerfectScrollbar", "", 1, "center"], ["fxLayout", "column", "fxLayoutAlign", "space-between", 1, "header", "accent", "px-24", "pt-16", "pb-0"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [1, "mat-display-1", "my-0", "my-sm-24", "welcome-message"], ["mat-tab-nav-bar", "", "aria-label", "weather navigation links"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active"], ["rla", "routerLinkActive"]],
        template: function TaxSettingCrudComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TaxSettingCrudComponent_a_8_Template, 3, 3, "a", 7);

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
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXgtc2V0dGluZy1jcnVkLmNvbXBvbmVudC5zY3NzIn0= */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaxSettingCrudComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-tax-setting-crud',
            templateUrl: './tax-setting-crud.component.html',
            styleUrls: ['./tax-setting-crud.component.scss'],
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
            selector: 'sunny-routed-content',
            template: 'Having a lot of light from the sun.'
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
            selector: 'rainy-routed-content',
            template: 'A rainy period of time is one when it rains a lot'
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
            selector: 'foggy-routed-content',
            template: 'If the weather is foggy, there is fog'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "R7xT":
    /*!*********************************************************************************************!*\
      !*** ./src/app/main/tariff-management/tax-setting/action-dialog/action-dialog.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: ActionDialogComponent */

    /***/
    function R7xT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionDialogComponent", function () {
        return ActionDialogComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/utils/message.constant */
      "AgqY");
      /* harmony import */


      var _fuse_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fuse/animations */
      "PVWW");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_shared_services_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/shared/services/menu-master/menu-master.service */
      "kxup");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var _c0 = ["activeElement"];

      function ActionDialogComponent_mat_option_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r23, " ");
        }
      }

      function ActionDialogComponent_mat_error_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select nav level");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_option_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r24.title, " ");
        }
      }

      function ActionDialogComponent_mat_error_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select parent Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_option_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r25.code, " ");
        }
      }

      function ActionDialogComponent_mat_error_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_error_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter nav Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_error_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Special character are not allowed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_error_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_error_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Special character are not allowed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_option_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r26.type, " ");
        }
      }

      function ActionDialogComponent_mat_error_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_option_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r27.icon, " ");
        }
      }

      function ActionDialogComponent_mat_error_90_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_error_95_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter icon url");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_error_101_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter url");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_error_106_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter display order ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function autocompleteObjectValidator() {
        return function (control) {
          if (typeof control.value === 'string') {
            return {
              'invalidAutocompleteObject': {
                value: control.value
              }
            };
          }

          return null;
          /* valid option selected */
        };
      }

      var ActionDialogComponent = /*#__PURE__*/function () {
        function ActionDialogComponent(fb, snackBar, dialogRef, data, router, menuMasterService) {
          _classCallCheck(this, ActionDialogComponent);

          this.fb = fb;
          this.snackBar = snackBar;
          this.dialogRef = dialogRef;
          this.data = data;
          this.router = router;
          this.menuMasterService = menuMasterService;
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
            this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
            this.menuArray = JSON.parse(localStorage.getItem('activeMenuItems'));
            this.params = this.data;
            this.isEditMode = this.params.action == 'CREATE' ? false : true;
            this.form = this.fb.group({
              nav_level: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              project: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              parent_id: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              nav_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z0-9 ]*$/)]],
              type: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              icon: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              icon_url: [''],
              url: [''],
              display_ord: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              status: this.status == true ? 'Y' : 'N'
            });
            this.getNavLevel();
            this.getParentByNavLevel(this.params.data.nav_level);
            this.getProject();
            this.getType();
            this.getMenuIcon();

            if (this.isEditMode) {
              this.assignValues(this.params);
            }
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
            var _this7 = this;

            var formValues = this.form.value; //console.log(formValues); 

            if (formValues.nav_level == 1) {
              this.form.get('parent_id').setValue(null);
              this.form.get('parent_id').clearValidators();
            }

            if (this.form.valid) {
              var _formValues = this.form.value;
              var params = {
                nav_level: _formValues.nav_level,
                project_id: _formValues.project.id,
                parent_id: _formValues.parent_id == null ? null : _formValues.parent_id.id,
                nav_id: _formValues.nav_id,
                title: _formValues.title,
                type: _formValues.type.type,
                icon: _formValues.icon.icon,
                icon_url: _formValues.icon_url,
                url: _formValues.url == "" ? null : _formValues.url,
                display_order: _formValues.display_ord,
                status: this.status == true ? 'Y' : 'N'
              };

              if (this.isEditMode) {
                params.id = this.params.data.id, params.modify_by = this.localStorage.userId;
              } else {
                params.created_by = this.localStorage.userId;
              }

              if (this.isEditMode) {
                this.menuMasterService.update(params).subscribe(function (resp) {
                  if (resp.status == true) {
                    _this7.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_4__["MessageConstant"].recordUpdateMessage, 'Dismiss', {
                      duration: 5000
                    });

                    _this7.dialogRef.close();
                  } else {
                    _this7.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_4__["MessageConstant"].errorMessage, 'Dismiss', {
                      duration: 5000
                    });
                  }
                }, function (err) {
                  _this7.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_4__["MessageConstant"].errorMessage, 'Dismiss', {
                    duration: 5000
                  });
                });
              } else {
                this.menuMasterService.create(params).subscribe(function (resp) {
                  _this7.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_4__["MessageConstant"].menuMasterCreate, 'Dismiss', {
                    duration: 5000
                  }); // this.router.navigate(['/chargingModel/crud/list']);


                  _this7.dialogRef.close();
                }, function (err) {
                  _this7.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_4__["MessageConstant"].errorMessage, 'Dismiss', {
                    duration: 5000
                  });
                });
              }

              this.dialogRef.close(params);
            } else {
              this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_4__["MessageConstant"].errorMessage, 'Dismiss', {
                duration: 5000
              });
            }
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('email').hasError('required') ? 'You must enter a value' : form.get('email').hasError('email') ? 'Not a valid email' : '';
          }
        }, {
          key: "assignValues",
          value: function assignValues(params) {
            this.form.get('nav_id').setValue(params.data.nav_id);
            this.form.get('title').setValue(this.params.data.title);
            this.form.get('icon_url').setValue(params.data.icon_url);
            this.form.get('url').setValue(params.data.url);
            this.form.get('display_ord').setValue(params.data.display_order);
            this.status = this.params.data.status == 'Y' ? true : false;
          }
        }, {
          key: "getNavLevel",
          value: function getNavLevel() {
            var _this8 = this;

            this.menuMasterService.getNavLevel().subscribe(function (resp) {
              if (resp.status == true) {
                _this8.nav_level = resp.data.nav_level; //this.display_order = resp.data.next_display_order;

                if (_this8.isEditMode) {
                  var toSelect = _this8.nav_level.find(function (c) {
                    return c == _this8.params.data.nav_level;
                  });

                  _this8.form.get('nav_level').setValue(toSelect);
                }

                _this8.filteredOptionsNavLevel = _this8.form.controls.nav_level.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                  return typeof value === 'string' ? value : value;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                  return value ? _this8._filterNavLevel(value) : _this8.nav_level;
                }));
              }
            }, function (err) {});
          }
        }, {
          key: "onNavLevelChange",
          value: function onNavLevelChange(navLevel_id) {
            //console.log($navLevel_id);
            this.form.get('parent_id').setValue('');
            this.getParentByNavLevel(navLevel_id); //this.form.get('display_ord').setValue( this.display_order);
          }
        }, {
          key: "_filterNavLevel",
          value: function _filterNavLevel(value) {
            var filterValue = value.toString().toLowerCase();
            return this.nav_level.filter(function (option) {
              return option.toString().toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "displayNavLevel",
          value: function displayNavLevel(item) {
            return item && item ? item : '';
          }
        }, {
          key: "getProject",
          value: function getProject() {
            var _this9 = this;

            this.menuMasterService.getProject().subscribe(function (resp) {
              if (resp != null) {
                _this9.project = resp;

                if (_this9.isEditMode) {
                  var toSelect = _this9.project.find(function (c) {
                    return c.id == _this9.params.data.project_id;
                  });

                  _this9.form.get('project').setValue(toSelect);
                }

                _this9.filteredOptionsProject = _this9.form.controls.project.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                  return typeof value === 'string' ? value : value.code;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (code) {
                  return code ? _this9._filterProject(code) : _this9.project;
                }));
              }
            }, function (err) {});
          }
        }, {
          key: "_filterProject",
          value: function _filterProject(code) {
            var filterValue = code.toLowerCase();
            return this.project.filter(function (option) {
              return option.code.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "displayProject",
          value: function displayProject(item) {
            return item && item.code ? item.code : '';
          }
        }, {
          key: "getType",
          value: function getType() {
            var _this10 = this;

            this.menuMasterService.getMenuType().subscribe(function (resp) {
              if (resp.status == true) {
                _this10.menuType = resp.data;

                if (_this10.isEditMode) {
                  var toSelect = _this10.menuType.find(function (c) {
                    return c.type == _this10.params.data.type;
                  });

                  _this10.form.get('type').setValue(toSelect);
                }

                _this10.filteredOptionsMenuType = _this10.form.controls.type.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                  return typeof value === 'string' ? value : value.type;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) {
                  return name ? _this10._filterMenuType(name) : _this10.menuType;
                }));
              }
            }, function (err) {});
          }
        }, {
          key: "_filterMenuType",
          value: function _filterMenuType(name) {
            var filterValue = name.toLowerCase();
            return this.menuType.filter(function (option) {
              return option.type.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "displayType",
          value: function displayType(item) {
            return item && item.type ? item.type : '';
          }
        }, {
          key: "getMenuIcon",
          value: function getMenuIcon() {
            var _this11 = this;

            this.menuMasterService.getMenuIcon().subscribe(function (resp) {
              if (resp.status == true) {
                _this11.menuIcon = resp.data;

                if (_this11.isEditMode) {
                  var toSelect = _this11.menuIcon.find(function (c) {
                    return c.icon == _this11.params.data.icon;
                  });

                  _this11.form.get('icon').setValue(toSelect);
                }

                _this11.filteredOptionsMenuIcon = _this11.form.controls.icon.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                  return typeof value === 'string' ? value : value.icon;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) {
                  return name ? _this11._filterMenuIcon(name) : _this11.menuIcon;
                }));
              }
            }, function (err) {});
          }
        }, {
          key: "_filterMenuIcon",
          value: function _filterMenuIcon(name) {
            var filterValue = name.toLowerCase();
            return this.menuIcon.filter(function (option) {
              return option.icon == null ? false : option.icon.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "displayIcon",
          value: function displayIcon(item) {
            return item && item.icon ? item.icon : '';
          }
        }, {
          key: "getParentByNavLevel",
          value: function getParentByNavLevel(navLevel_id) {
            var _this12 = this;

            this.menuMasterService.getParentByNavLevel(navLevel_id).subscribe(function (resp) {
              if (resp.status == true) {
                _this12.parentId = resp.data;

                if (_this12.isEditMode) {
                  if (navLevel_id != 1) {
                    var toSelect = _this12.parentId.find(function (c) {
                      return c.id == _this12.params.data.parent_id;
                    });

                    _this12.form.get('parent_id').setValue(toSelect);
                  } else {
                    _this12.form.get('parent_id').setValue(null);

                    _this12.form.get('parent_id').clearValidators();
                  }
                }

                _this12.filteredOptionsParentId = _this12.form.controls.parent_id.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                  return typeof value === 'string' ? value : value == null ? '' : value.title;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) {
                  return name ? _this12._filterParentId(name) : _this12.parentId;
                }));
              }
            }, function (err) {});
          }
        }, {
          key: "_filterParentId",
          value: function _filterParentId(name) {
            var filterValue = name.toLowerCase();
            return this.parentId.filter(function (option) {
              return option.title.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "displayParentId",
          value: function displayParentId(item) {
            return item && item.title ? item.title : '';
          }
        }, {
          key: "updateStatus",
          value: function updateStatus(event) {
            this.status = event.checked;
            this.active.checked = this.status;
          }
        }]);

        return ActionDialogComponent;
      }();

      ActionDialogComponent.ɵfac = function ActionDialogComponent_Factory(t) {
        return new (t || ActionDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_8__["MenuMasterService"]));
      };

      ActionDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ActionDialogComponent,
        selectors: [["app-action-dialog"]],
        viewQuery: function ActionDialogComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.active = _t.first);
          }
        },
        decls: 118,
        vars: 42,
        consts: [["id", "dialog_action_close", "matTooltip", "Close window", 1, "material-icons-outlined", 2, "cursor", "pointer", "color", "white", 3, "click"], [1, "action_toolbar"], [2, "padding", "24px", "max-height", "32vw", "overflow", "auto"], ["id", "forms", "fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", 1, ""], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", "name", "form", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "25", 1, "pr-4"], ["type", "text", "matInput", "", "formControlName", "nav_level", "autocomplete", "off", "required", "", 3, "matAutocomplete"], [3, "displayWith", "optionSelected"], ["navLevelAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 2, "display", "flex"], ["matSuffix", "", 1, "secondary-text"], ["matSuffix", "", "matTooltip", "Please select nav level", 1, "secondary-text"], [4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "parent_id", "autocomplete", "off", "required", "", 3, "matAutocomplete"], [3, "displayWith"], ["parentIdAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select parant Id", 1, "secondary-text"], ["type", "text", "matInput", "", "formControlName", "project", "autocomplete", "off", "required", "", 3, "matAutocomplete"], ["projectAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select project", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "nav_id", "maxlength", "200", "required", "", "autocomplete", "off", 2, "text-transform", "none"], ["matInput", "", "placeholder", "", "formControlName", "title", "maxlength", "200", "required", "", "autocomplete", "off"], ["type", "text", "matInput", "", "formControlName", "type", "required", "", "autocomplete", "off", 3, "matAutocomplete"], ["typeAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select type", 1, "secondary-text"], ["type", "text", "matInput", "", "formControlName", "icon", "required", "", "autocomplete", "off", 3, "matAutocomplete"], ["iconAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select icon", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "icon_url", "maxlength", "200", "autocomplete", "off", 2, "text-transform", "none"], ["appearance", "outline", "fxFlex", "24", 1, "pr-4"], ["matInput", "", "placeholder", "", "formControlName", "url", "maxlength", "500", "autocomplete", "off", 2, "text-transform", "none"], ["matInput", "", "placeholder", "", "formControlName", "display_ord", "required", "", "autocomplete", "off"], ["fxFlex", "12", 1, "pr-4"], [1, "sm-txt", "mr-20"], ["color", "primary", 1, "example-margin", "sm-txt", "mt-10", 3, "checked", "change"], ["activeElement", ""], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "mr-8", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "warn", 1, "mr-8", 3, "click"], [3, "value"]],
        template: function ActionDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionDialogComponent_Template_mat_icon_click_0_listener() {
              return ctx.closeActionPanel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nav Level");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-autocomplete", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function ActionDialogComponent_Template_mat_autocomplete_optionSelected_12_listener($event) {
              return ctx.onNavLevelChange($event.option.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ActionDialogComponent_mat_option_14_Template, 2, 2, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " model_training");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ActionDialogComponent_mat_error_21_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Parent ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-autocomplete", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ActionDialogComponent_mat_option_28_Template, 2, 2, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-icon", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "help ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ActionDialogComponent_mat_error_35_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-autocomplete", 16, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ActionDialogComponent_mat_option_42_Template, 2, 2, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-icon", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " precision_manufacturing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ActionDialogComponent_mat_error_49_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Nav ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ActionDialogComponent_mat_error_54_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ActionDialogComponent_mat_error_55_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ActionDialogComponent_mat_error_61_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ActionDialogComponent_mat_error_62_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-autocomplete", 16, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, ActionDialogComponent_mat_option_69_Template, 2, 2, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](70, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-icon", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, ActionDialogComponent_mat_error_76_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-autocomplete", 16, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, ActionDialogComponent_mat_option_83_Template, 2, 2, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](84, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-icon", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "model_training ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, ActionDialogComponent_mat_error_90_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Icon Url");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, ActionDialogComponent_mat_error_95_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-form-field", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Url");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, ActionDialogComponent_mat_error_101_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-form-field", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Display Order");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "input", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, ActionDialogComponent_mat_error_106_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-label", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-slide-toggle", 36, 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ActionDialogComponent_Template_mat_slide_toggle_change_110_listener($event) {
              return ctx.updateStatus($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionDialogComponent_Template_button_click_114_listener() {
              return ctx.onYesClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionDialogComponent_Template_button_click_116_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

            var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68);

            var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.menuArray == null ? null : ctx.menuArray.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayNavLevel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 32, ctx.filteredOptionsNavLevel));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("nav_level").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayParentId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 34, ctx.filteredOptionsParentId));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("parent_id").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayProject);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 36, ctx.filteredOptionsProject));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("project").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("nav_id").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("nav_id").hasError("pattern"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("title").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("title").hasError("pattern"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](70, 38, ctx.filteredOptionsMenuType));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("type").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayIcon);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](84, 40, ctx.filteredOptionsMenuIcon));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("icon").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("icon_url").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("url").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("display_ord").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.status);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.status ? "Active" : "Inactive", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isEditMode ? "Save" : "Save", "");
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["AsyncPipe"]],
        styles: [".mat-dialog {\n  margin: 0 -24px;\n  padding: 0 24px;\n  max-height: 65vh;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFjdGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6ImFjdGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZ3tcclxuICAgIG1hcmdpbjogMCAtMjRweDtcclxuICAgIHBhZGRpbmc6IDAgMjRweDtcclxuICAgIG1heC1oZWlnaHQ6IDY1dmg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufSJdfQ== */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionDialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-action-dialog',
            templateUrl: './action-dialog.component.html',
            styleUrls: ['./action-dialog.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }, {
            type: app_shared_services_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_8__["MenuMasterService"]
          }];
        }, {
          active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["activeElement"]
          }]
        });
      })();
      /***/

    },

    /***/
    "jWtu":
    /*!***************************************************************************!*\
      !*** ./src/app/main/tariff-management/tax-setting/list/list.component.ts ***!
      \***************************************************************************/

    /*! exports provided: TariffManagement, ListComponent */

    /***/
    function jWtu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TariffManagement", function () {
        return TariffManagement;
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
      "R7xT");
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


      var _fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @fuse/components/confirm-dialog/confirm-dialog.component */
      "2nsM");
      /* harmony import */


      var _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../view-dialog/view-dialog.component */
      "Kgu8");
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! jspdf */
      "i680");
      /* harmony import */


      var jspdf_autotable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! jspdf-autotable */
      "DaQG");
      /* harmony import */


      var jspdf_autotable__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! xlsx */
      "EUZL");
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var app_shared_services_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! app/shared/services/menu-master/menu-master.service */
      "kxup");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function ListComponent_mat_header_cell_13_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_13_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r16.changeVisibility("titleSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_mat_header_cell_13_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_mat_header_cell_13_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r18.filterEntity.title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_13_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r20.changeVisibility("titleSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r15.filterEntity.title);
        }
      }

      function ListComponent_mat_header_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_mat_header_cell_13_span_1_Template, 4, 0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_mat_header_cell_13_mat_form_field_2_Template, 4, 1, "mat-form-field", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.titleSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.titleSearch);
        }
      }

      function ListComponent_mat_cell_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r21.title, " ");
        }
      }

      function ListComponent_mat_header_cell_16_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Type \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_16_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r24.changeVisibility("navlevelSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_mat_header_cell_16_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_mat_header_cell_16_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r26.filterEntity.nav_level = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_16_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r28.changeVisibility("navlevelSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r23.filterEntity.nav_level);
        }
      }

      function ListComponent_mat_header_cell_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_mat_header_cell_16_span_1_Template, 4, 0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_mat_header_cell_16_mat_form_field_2_Template, 4, 1, "mat-form-field", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.navlevelSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.navlevelSearch);
        }
      }

      function ListComponent_mat_cell_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r29.nav_level, " ");
        }
      }

      function ListComponent_mat_header_cell_19_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Charger/Session \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_19_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r32.changeVisibility("typeSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_mat_header_cell_19_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_mat_header_cell_19_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r34.filterEntity.type = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_19_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r36.changeVisibility("typeSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r31.filterEntity.type);
        }
      }

      function ListComponent_mat_header_cell_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_mat_header_cell_19_span_1_Template, 4, 0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_mat_header_cell_19_mat_form_field_2_Template, 4, 1, "mat-form-field", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.typeSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.typeSearch);
        }
      }

      function ListComponent_mat_cell_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r37.type, " ");
        }
      }

      function ListComponent_mat_header_cell_22_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_22_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r40.changeVisibility("statusSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_mat_header_cell_22_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_mat_header_cell_22_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r42.filterEntity.statusString = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_22_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r44.changeVisibility("statusSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r39.filterEntity.statusString);
        }
      }

      function ListComponent_mat_header_cell_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_mat_header_cell_22_span_1_Template, 4, 0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_mat_header_cell_22_mat_form_field_2_Template, 4, 1, "mat-form-field", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.statusSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.statusSearch);
        }
      }

      function ListComponent_mat_cell_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r45 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", row_r45.status == "Y" ? "green" : "red");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r45.statusString, " ");
        }
      }

      function ListComponent_mat_header_cell_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_mat_cell_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_cell_26_Template_mat_icon_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var element_r46 = ctx.$implicit;

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r47.viewDialog("VIEW", element_r46);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_cell_26_Template_mat_icon_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var element_r46 = ctx.$implicit;

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r49.openDialog("EDIT", element_r46);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_cell_26_Template_mat_icon_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var element_r46 = ctx.$implicit;

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r50["delete"](element_r46.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_mat_header_row_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row", 38);
        }
      }

      function ListComponent_mat_row_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
        }
      }

      var _c0 = function _c0() {
        return [10, 30, 50, 100];
      };

      var TariffManagement = function TariffManagement() {
        _classCallCheck(this, TariffManagement);
      };
      /**
       * @title Data table with sorting, pagination, and filtering.
       */


      var ListComponent = /*#__PURE__*/function () {
        //messageConstant = MessageConstant;
        function ListComponent(dialog, menuMasterService, snackBar, cdr) {
          _classCallCheck(this, ListComponent);

          this.dialog = dialog;
          this.menuMasterService = menuMasterService;
          this.snackBar = snackBar;
          this.cdr = cdr;
          this.displayedColumns = ['nav_level', 'title', 'type', 'status', 'action'];
          this.head = [['Title', 'Type', 'Display Order', 'Icon', 'Url', 'Nav Level', 'Nav Id', 'Status']];
          this.titleSearch = false;
          this.navlevelSearch = false;
          this.typeSearch = false;
          this.disp_ordSearch = false;
          this.iconSearch = false;
          this.urlSearch = false;
          this.nav_idSearch = false;
          this.statusSearch = false;
        }

        _createClass(ListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
            this.getMenuMaster();
            this.filterEntity = new TariffManagement();
            this.filterType = mat_table_filter__WEBPACK_IMPORTED_MODULE_6__["MatTableFilter"].ANYWHERE;
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
          key: "getMenuMaster",
          value: function getMenuMaster() {
            var _this13 = this;

            this.menuMasterService.getAllMenus().subscribe(function (resp) {
              if (resp.status == true) {
                _this13.tariffData = resp.data;

                for (var i = 0; i < _this13.tariffData.length; i++) {
                  if (_this13.tariffData[i].status == 'N') {
                    _this13.tariffData[i].statusString = 'Inactive';
                  } else {
                    _this13.tariffData[i].statusString = 'Active';
                  }

                  if (_this13.tariffData[i].title == null) {
                    _this13.tariffData[i].title = '';
                  }
                }

                _this13.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this13.tariffData);
                _this13.dataSource.paginator = _this13.paginator;
                _this13.dataSource.sort = _this13.sort;
              } else {
                _this13.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].NoRecordFoundMessage, 'Dismiss', {
                  duration: 3000
                });

                return;
              }
            }, function (err) {});
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var _this14 = this;

            this.confirmDialogRef = this.dialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__["FuseConfirmDialogComponent"], {
              disableClose: true
            }); //this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

            this.confirmDialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                _this14.menuMasterService["delete"](id, _this14.localStorage.userId).subscribe(function (resp) {
                  if (resp.status == true) {
                    _this14.getMenuMaster();

                    _this14.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].deleteMessage, 'Dismiss', {
                      duration: 2000
                    });

                    _this14.cdr.detectChanges();
                  } else {
                    _this14.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].errorMessage, 'Dismiss', {
                      duration: 2000
                    });
                  }
                }, function (err) {
                  _this14.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].errorMessage, 'Dismiss', {
                    duration: 2000
                  });
                });
              }

              _this14.confirmDialogRef = null;
            });
          }
        }, {
          key: "viewDialog",
          value: function viewDialog(action, data) {
            var _this15 = this;

            var params = {
              action: action,
              data: data
            };
            var dialogRef = this.dialog.open(_view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ViewDialogComponent"], {
              width: '1400px',
              data: params,
              panelClass: 'app-action-dialog',
              autoFocus: false,
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              // this.moderate(result);
              _this15.getMenuMaster();
            });
          }
        }, {
          key: "openDialog",
          value: function openDialog(action, data) {
            var _this16 = this;

            // this.snackBar.open('Unable to proceed, In prgress','Dismiss');
            // return false;
            var params = {
              action: action,
              data: data
            };
            var dialogRef = this.dialog.open(_action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ActionDialogComponent"], {
              width: '1400px',
              data: params,
              autoFocus: false,
              disableClose: true,
              panelClass: 'app-action-dialog'
            });
            dialogRef.afterClosed().subscribe(function (result) {
              _this16.getMenuMaster();

              _this16.cdr.detectChanges();
            });
          }
        }, {
          key: "changeVisibility",
          value: function changeVisibility(visibleOption, ev) {
            ev.stopPropagation();

            if (visibleOption == 'titleSearch') {
              this.titleSearch = !this.titleSearch;
              this.filterEntity.title = '';
            }

            if (visibleOption == 'typeSearch') {
              this.typeSearch = !this.typeSearch;
              this.filterEntity.type = '';
            }

            if (visibleOption == 'disp_ordSearch') {
              this.disp_ordSearch = !this.disp_ordSearch;
              this.filterEntity.display_order = null;
            }

            if (visibleOption == 'iconSearch') {
              this.iconSearch = !this.iconSearch;
              this.filterEntity.icon = '';
            }

            if (visibleOption == 'urlSearch') {
              this.urlSearch = !this.urlSearch;
              this.filterEntity.url = '';
            }

            if (visibleOption == 'nav_idSearch') {
              this.nav_idSearch = !this.nav_idSearch;
              this.filterEntity.nav_id = '';
            }

            if (visibleOption == 'statusSearch') {
              this.statusSearch = !this.statusSearch;
              this.filterEntity.statusString = '';
            }

            if (visibleOption == 'navlevelSearch') {
              this.navlevelSearch = !this.navlevelSearch;
              this.filterEntity.nav_level = null;
            }
          }
        }, {
          key: "tableExport",
          value: function tableExport() {
            this.exportedData = [];

            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              var menuMaster = this.dataSource.filteredData[i];
              var data = {
                'Title': menuMaster.title,
                'Type': menuMaster.type,
                'Display Order': menuMaster.display_order,
                'Icon': menuMaster.icon,
                'Url ': menuMaster.url,
                'Nav Level': menuMaster.nav_level,
                'Nav ID': menuMaster.nav_id,
                'Status': menuMaster.statusString
              };
              this.exportedData.push(data);
            }

            var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_12__["utils"].json_to_sheet(this.exportedData);
            var workBook = xlsx__WEBPACK_IMPORTED_MODULE_12__["utils"].book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_12__["utils"].book_append_sheet(workBook, workSheet, 'SheetName');
            xlsx__WEBPACK_IMPORTED_MODULE_12__["writeFile"](workBook, 'MenuMaster.xlsx');
          }
        }, {
          key: "pdfExport",
          value: function pdfExport() {
            var _this17 = this;

            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_10__["jsPDF"]({// set needed dimensions for any elemen
            });
            this.exportedData = [];

            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              var menuMaster = this.dataSource.filteredData[i]; //this.exportedData.push({name: `name${i}`, description: `description${i}`,
              //statusString: `statusString${i}`});

              var data = [menuMaster.title, menuMaster.type, menuMaster.display_order, menuMaster.icon, menuMaster.url, menuMaster.nav_level, menuMaster.nav_id, menuMaster.statusString];
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
                doc.text('MenuMaster Report', doc.internal.pageSize.getWidth() / 2, 11, {
                  align: 'center'
                });
                doc.setTextColor(211, 211, 211);
                doc.setFontSize(60);
                doc.setGState(doc.GState({
                  opacity: 0.6
                }));
                doc.text('Confidential/Not For Public Use', 25, 285, null, 60);
                doc.setGState(doc.GState({
                  opacity: 1
                }));
                doc.setTextColor(100);
                doc.setFontSize(9);
                doc.text('Date:' + createdDate, 15, 18);
                doc.text('Generated By:' + _this17.localStorage.f_Name, 195, 18, {
                  align: 'right'
                });
                doc = _this17.addWaterMark(doc);
              }
            }); // below line for Open PDF document in new tab

            doc.output('dataurlnewwindow'); // below line for Download PDF document  

            doc.save('MenuMaster report.pdf');
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

        return ListComponent;
      }();

      ListComponent.ɵfac = function ListComponent_Factory(t) {
        return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_14__["MenuMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
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
        decls: 31,
        vars: 8,
        consts: [[2, "text-align", "left", "margin-left", "10px", "margin-bottom", "10px", "margin-top", "10px"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Excel Download", 3, "click"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "PDF Download", 3, "click"], ["fxLayout", "row wrap", 1, "page-layout", "simple", "fullwidth", 2, "overflow", "scroll"], [1, "content", 2, "min-width", "auto"], ["matSort", "", "matTableFilter", "", 3, "exampleEntity", "filterType", "dataSource"], ["table", ""], ["matColumnDef", "title"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nav_level"], ["matColumnDef", "type"], ["matColumnDef", "status"], ["mat-cell", "", 3, "color", 4, "matCellDef"], ["matColumnDef", "action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [4, "matHeaderRowDef", "matHeaderRowDefSticky"], [3, "pageSizeOptions"], ["paginator", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["class", "custom_font_size", "style", "display: flex;", 4, "ngIf"], ["appearance", "outline", "style", "width: 70%;", "class", "list_input", 4, "ngIf"], [1, "custom_font_size", 2, "display", "flex"], ["matSuffix", "", 3, "click"], ["appearance", "outline", 1, "list_input", 2, "width", "70%"], ["matInput", "", "placeholder", "Title ", 3, "ngModel", "ngModelChange"], ["mat-cell", ""], ["matInput", "", "placeholder", "Nav Level ", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", " Type", 3, "ngModel", "ngModelChange"], ["appearance", "outline", "style", "width: 100px;", "class", "list_input", 4, "ngIf"], ["appearance", "outline", 1, "list_input", 2, "width", "100px"], ["matInput", "", "placeholder", "Status", 3, "ngModel", "ngModelChange"], ["mat-header-cell", ""], [1, "custom_font_size"], ["color", "primary", "matTooltip", "View", 2, "cursor", "pointer", 3, "click"], ["color", "primary", "matTooltip", "Edit", 2, "cursor", "pointer", 3, "click"], ["color", "warn", "matTooltip", "Remove", 2, "cursor", "pointer", 3, "click"], ["mat-row", ""]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-table", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ListComponent_mat_header_cell_13_Template, 3, 2, "mat-header-cell", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ListComponent_mat_cell_14_Template, 2, 1, "mat-cell", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ListComponent_mat_header_cell_16_Template, 3, 2, "mat-header-cell", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ListComponent_mat_cell_17_Template, 2, 1, "mat-cell", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ListComponent_mat_header_cell_19_Template, 3, 2, "mat-header-cell", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ListComponent_mat_cell_20_Template, 2, 1, "mat-cell", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ListComponent_mat_header_cell_22_Template, 3, 2, "mat-header-cell", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ListComponent_mat_cell_23_Template, 2, 3, "mat-cell", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ListComponent_mat_header_cell_25_Template, 3, 0, "mat-header-cell", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ListComponent_mat_cell_26_Template, 9, 0, "mat-cell", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ListComponent_mat_header_row_27_Template, 1, 0, "mat-header-row", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ListComponent_mat_row_28_Template, 1, 0, "mat-row", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "mat-paginator", 18, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("exampleEntity", ctx.filterEntity)("filterType", ctx.filterType)("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], mat_table_filter__WEBPACK_IMPORTED_MODULE_6__["MatTableFilterDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        styles: ["mat-form-field.list_input div.mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\n.mat-header-cell .custom_font_size {\n  font-size: 15px !important;\n  text-align: left;\n}\n\nmat-form-field.list_input div.mat-form-field-infix {\n  padding: 0.5em 0 0.5em 0 !important;\n}\n\ntable {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFDRSw0QkFBQTtBQVhGOztBQWFBO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtBQVZGOztBQVlBO0VBQ0UsbUNBQUE7QUFURjs7QUFZQTtFQUNJLFdBQUE7QUFUSjs7QUFZRTtFQUNFLFlBQUE7QUFUSiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGFibGUge1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIC5tYXQtZm9ybS1maWVsZCB7XHJcbi8vICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgdGQsIHRoIHtcclxuLy8gICAgIHdpZHRoOiAyNSU7XHJcbi8vICAgfVxyXG5tYXQtZm9ybS1maWVsZC5saXN0X2lucHV0ICBkaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcclxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtaGVhZGVyLWNlbGwgLmN1c3RvbV9mb250X3NpemV7XHJcbiAgZm9udC1zaXplOiAxNXB4ICAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxubWF0LWZvcm0tZmllbGQubGlzdF9pbnB1dCBkaXYubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gIHBhZGRpbmc6IDAuNWVtIDAgMC41ZW0gMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICAiXX0= */"],
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
            selector: 'app-list',
            templateUrl: './list.component.html',
            styleUrls: ['./list.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_7__["fuseAnimations"]
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"]
          }, {
            type: app_shared_services_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_14__["MenuMasterService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBar"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
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
    "z3cr":
    /*!*******************************************************************************!*\
      !*** ./src/app/main/tariff-management/tax-setting/create/create.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: CreateComponent */

    /***/
    function z3cr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateComponent", function () {
        return CreateComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var app_shared_utils_validation_patterns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! app/shared/utils/validation-patterns */
      "PNWe");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_shared_services_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/services/menu-master/menu-master.service */
      "kxup");
      /* harmony import */


      var app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/shared/services/countries.service */
      "XtJy");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var _c0 = ["activeElement"];

      function CreateComponent_mat_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r7.name, " ");
        }
      }

      function CreateComponent_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select country ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateComponent_mat_error_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter tax name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateComponent_mat_error_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Special character are not allowed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateComponent_mat_error_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter tax value");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateComponent_div_29_mat_option_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r13.name, " ");
        }
      }

      function CreateComponent_div_29_mat_error_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select state");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateComponent_div_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "State/Province");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-autocomplete", 5, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CreateComponent_div_29_mat_option_10_Template, 2, 2, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "expand_more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "location_city ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CreateComponent_div_29_mat_error_17_Template, 2, 0, "mat-error", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Tax Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Tax Value");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Add Row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_div_29_Template_button_click_34_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.addVariableFG();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "add_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_div_29_Template_button_click_37_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var i_r9 = ctx.index;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.removeVariableFG(i_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var variable_r8 = ctx.$implicit;
          var i_r9 = ctx.index;

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" State Tax: ", i_r9 + 1, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r6.displayState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, ctx_r6.filteredOptionState));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", variable_r8.get("state").invalid);
        }
      }

      function autocompleteObjectValidator() {
        return function (control) {
          if (typeof control.value === 'string') {
            return {
              'invalidAutocompleteObject': {
                value: control.value
              }
            };
          }

          return null;
          /* valid option selected */
        };
      }

      var CreateComponent = /*#__PURE__*/function () {
        function CreateComponent(fb, snackBar, router, menuMasterService, countryService) {
          _classCallCheck(this, CreateComponent);

          this.fb = fb;
          this.snackBar = snackBar;
          this.router = router;
          this.menuMasterService = menuMasterService;
          this.countryService = countryService;
          this.status = false;
          this.typeList = ['Flat', 'Variable'];
          this.quataList = ['Time', 'Energy'];
          this.timeBoolean = false;
          this.energyBoolean = false;
          this.flatBoolean = false;
          this.variableBoolean = false;
        }

        _createClass(CreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialize();
            this.form.get('noOfVariable').setValue(this.form.value.stateTaxForm.length);
          }
        }, {
          key: "initialize",
          value: function initialize() {
            var fgroup = this.createVariableFG();
            this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
            this.createVariableFG();
            this.form = this.fb.group({
              country: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              tax_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              tax_value: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              status: this.status == true ? 'Y' : 'N',
              stateTaxForm: this.fb.array([fgroup]),
              noOfVariable: [{
                value: '',
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(app_shared_utils_validation_patterns__WEBPACK_IMPORTED_MODULE_2__["PATTERNS"].ONLY_NUMBERS)]]
            });
            this.getAllCountry();
            this.getAllState(fgroup);
          }
        }, {
          key: "createVariableFG",
          value: function createVariableFG() {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
              taxanme: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
              taxvalue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {// let formValues = this.form.value;
            // if(formValues.nav_level == "1" ){
            //   this.form.get('parent_id').setValue(null);
            //   this.form.get('parent_id').clearValidators();
            // }else{
            //   this.form.get('parent_id').setValidators([autocompleteObjectValidator(),Validators.required])
            // }
            // if (this.form.valid) {
            //   //console.log(formValues);
            //   let params = {
            //     nav_level:formValues.nav_level,
            //     project_id:formValues.project.id,
            //     parent_id: formValues.parent_id == "" ? null  : formValues.parent_id.id,
            //     nav_id:formValues.nav_id,
            //     title:formValues.title,
            //     type:formValues.type.type,
            //     icon:formValues.icon.icon,
            //     icon_url:formValues.icon_url,
            //     url:formValues.url == "" ? null : formValues.url,
            //     display_order:formValues.display_ord,
            //     status: this.status == true ? 'Y' : 'N',
            //     created_by: this.localStorage.userId,
            //   }
            //   //console.log(params)
            //   this.menuMasterService.create(params).subscribe(
            //     (resp:any) => {
            //       if(resp.status == true){
            //         //console.log(params,resp.data);
            //         this.snackBar.open(MessageConstant.menuMasterCreate, 'Dismiss', { duration: 5000 });
            //         this.router.navigate(['/menuManagement/crud/list/']);
            //       }else{
            //         this.snackBar.open(resp.message, 'Dismiss', { duration: 5000 });
            //       }
            //     },(err) =>{
            //       this.snackBar.open(MessageConstant.errorMessage, 'Dismiss', { duration: 5000 });
            //      }
            //   );
            // }else{
            //   this.snackBar.open(MessageConstant.formInvalid, 'Dismiss', { duration: 5000 });
            // }
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('email').hasError('required') ? 'You must enter a value' : form.get('email').hasError('email') ? 'Not a valid email' : '';
          }
        }, {
          key: "updateStatus",
          value: function updateStatus(event) {
            this.status = event.checked;
            this.active.checked = this.status;
          }
        }, {
          key: "addVariableFG",
          value: function addVariableFG() {
            var stateTaxForm = this.form.get('stateTaxForm');
            var fgroup = this.createVariableFG();
            stateTaxForm.push(fgroup);
            this.form.get('noOfVariable').setValue(this.form.value.stateTaxForm.length);
          }
        }, {
          key: "removeVariableFG",
          value: function removeVariableFG(i) {
            var stateTaxForm = this.form.get('stateTaxForm');

            if (stateTaxForm.length > 1) {
              stateTaxForm.removeAt(i);
            } else {
              stateTaxForm.reset();
            }

            this.form.get('noOfVariable').setValue(this.form.value.stateTaxForm.length);
          }
        }, {
          key: "getAllCountry",
          value: function getAllCountry() {
            var _this18 = this;

            this.countryService.getAllCountry().subscribe(function (resp) {
              _this18.countries = resp;
              _this18.filteredOptionCountry = _this18.form.controls.country.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                return typeof value === 'string' ? value : value.name;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) {
                return name ? _this18._filterCountry(name) : _this18.countries;
              }));
            }, function (err) {});
          }
        }, {
          key: "displayCountry",
          value: function displayCountry(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "_filterCountry",
          value: function _filterCountry(name) {
            var filterValue = name.toLowerCase();
            return this.countries.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "getAllState",
          value: function getAllState(fgroup) {
            var _this19 = this;

            this.countryService.getAllState().subscribe(function (resp) {
              _this19.states = resp;
              _this19.filteredOptionState = fgroup.controls.state.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                return typeof value === 'string' ? value : value.name;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) {
                return name ? _this19._filterState(name) : _this19.states;
              }));
            }, function (err) {});
          }
        }, {
          key: "displayState",
          value: function displayState(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "_filterState",
          value: function _filterState(name) {
            var filterValue = name.toLowerCase();
            return this.states.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }]);

        return CreateComponent;
      }();

      CreateComponent.ɵfac = function CreateComponent_Factory(t) {
        return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_6__["MenuMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_7__["CountriesService"]));
      };

      CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateComponent,
        selectors: [["app-create"]],
        viewQuery: function CreateComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.active = _t.first);
          }
        },
        decls: 35,
        vars: 11,
        consts: [["id", "forms", "fxLayout", "column", 1, "page-layout", "simple", "fullwidth"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", "name", "form", 1, "mat-card", "mat-elevation-z4", "p-24", 3, "formGroup", "submit", "keydown.enter"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "33", 1, "pr-4"], ["type", "text", "matInput", "", "formControlName", "country", "autocomplete", "off", "required", "", 3, "matAutocomplete"], [3, "displayWith"], ["countryAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 2, "display", "flex"], ["matSuffix", "", 1, "secondary-text"], ["matSuffix", "", "matTooltip", "Please select country", 1, "secondary-text"], [4, "ngIf"], ["matInput", "", "placeholder", "", "formControlName", "tax_name", "maxlength", "200", "required", "", "autocomplete", "off"], ["matInput", "", "placeholder", "", "type", "number", "formControlName", "tax_value", "maxlength", "200", "autocomplete", "off"], ["formArrayName", "stateTaxForm"], ["fxLayout", "column", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["mat-raised-button", "", "color", "primary", 1, "mr-8"], ["mat-raised-button", "", "color", "warn", "type", "button", "routerLink", "tariffManagement/taxSetting/crud/list", 1, "mr-8"], [3, "value"], ["fxLayout", "column", 3, "formGroupName"], ["type", "text", "matInput", "", "formControlName", "state", "autocomplete", "off", "required", "", 3, "matAutocomplete"], ["stateAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select state", 1, "secondary-text"], ["matInput", "", "formControlName", "taxanme", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter tax name ", 1, "secondary-text"], ["matInput", "", "formControlName", "taxvalue", "autocomplete", "off", "type", "number"], ["matSuffix", "", "matTooltip", "Please enter tax value ", 1, "secondary-text"], ["flex", "20", 1, "add-row"], [1, "sm-txt"], ["type", "button", "mat-icon-button", "", "color", "primary", "aria-label", "Add", "matTooltip", "Add", 1, "float-left", 3, "click"], ["type", "button", "mat-icon-button", "", "color", "warn", "aria-label", "Remove/clear", "matTooltip", "Remove", 1, "float-left", 3, "click"]],
        template: function CreateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CreateComponent_Template_form_submit_1_listener() {
              return ctx.onSubmit();
            })("keydown.enter", function CreateComponent_Template_form_keydown_enter_1_listener($event) {
              return $event.preventDefault();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-autocomplete", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CreateComponent_mat_option_9_Template, 2, 2, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "location_city ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CreateComponent_mat_error_16_Template, 2, 0, "mat-error", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Tax Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CreateComponent_mat_error_21_Template, 2, 0, "mat-error", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CreateComponent_mat_error_22_Template, 2, 0, "mat-error", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Tax Value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CreateComponent_mat_error_27_Template, 2, 0, "mat-error", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CreateComponent_div_29_Template, 40, 8, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayCountry);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 9, ctx.filteredOptionCountry));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("country").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("tax_name").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("tax_name").hasError("pattern"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("tax_value").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.form.get("stateTaxForm")["controls"]);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]],
        styles: [".cstm-input[_ngcontent-%COMP%] {\n  padding-right: 25px !important;\n}\n\n.add-row[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: right;\n}\n\n.sm-txt[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.mr-20[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\n.pt-20[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.mt-20[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.mt-10[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0oiLCJmaWxlIjoiY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNzdG0taW5wdXR7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLmFkZC1yb3d7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uc20tdHh0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubXItMjB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5wdC0yMHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ubXQtMjB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLm10LTEwe1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-create',
            templateUrl: './create.component.html',
            styleUrls: ['./create.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: app_shared_services_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_6__["MenuMasterService"]
          }, {
            type: app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_7__["CountriesService"]
          }];
        }, {
          active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["activeElement"]
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=tax-setting-tax-setting-module-es5.js.map