(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charger-charger-management-module"], {
    /***/
    "5Mf5":
    /*!**********************************************************************************************!*\
      !*** ./src/app/main/asset/charger/product-dispatch/action-dialog/action-dialog.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: ActionDialogComponent */

    /***/
    function Mf5(module, __webpack_exports__, __webpack_require__) {
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


      var app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/utils/message.constant */
      "AgqY");
      /* harmony import */


      var _fuse_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fuse/animations */
      "PVWW");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var app_shared_services_charger_charger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/services/charger/charger.service */
      "izXn");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/shared/services/countries.service */
      "XtJy");
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


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var _c0 = ["toggleElement"];
      var _c1 = ["toggleChargerAsElement"];

      function ActionDialogComponent_mat_error_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter expiry date ");

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
        function ActionDialogComponent(fb, chargerService, snackBar, datePipe, dialogRef, data, countryService) {
          _classCallCheck(this, ActionDialogComponent);

          this.fb = fb;
          this.chargerService = chargerService;
          this.snackBar = snackBar;
          this.datePipe = datePipe;
          this.dialogRef = dialogRef;
          this.data = data;
          this.countryService = countryService;
          this.isEditMode = false;
          this.status = false;
          this.maxDate = new Date();
          this.chargerAs = false;
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
            this.params = this.data;
            this.isEditMode = this.params.action == 'CREATE' ? false : true;
            this.form = this.fb.group({
              client_name: [''],
              name: [''],
              serial_no: [''],
              dispatch_date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              status: this.status == true ? 'Y' : 'N',
              chargerAs: this.chargerAs == true ? 1 : 0
            });

            if (this.isEditMode) {
              this.assignValues(this.params);
            } //this.getCountry();

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
            var _this = this;

            if (this.form.valid) {
              var formValues = this.form.value;
              var params = {
                dispatch_date: this.datePipe.transform(formValues.dispatch_date, "yyyy-MM-dd"),
                is_private: this.chargerAs == true ? 1 : 0,
                status: this.status == true ? 'Y' : 'N' // tslint:disable-next-line: semicolon

              }; // tslint:disable-next-line: no-//

              if (this.isEditMode) {
                params.id = this.params.data.id, params.modify_by = this.localStorage.userId;
              } else {
                params.created_by = this.localStorage.userId;
              }

              if (this.isEditMode) {
                this.chargerService.getUpdateClientCharger(params).subscribe(function (data) {
                  _this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].recordUpdateMessage, 'Dismiss', {
                    duration: 5000
                  });

                  _this.dialogRef.close();
                }, function (err) {
                  _this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].errorMessage, 'Dismiss', {
                    duration: 5000
                  });
                });
              } else {
                this.chargerService.getProductDispatch(params).subscribe(function (data) {
                  _this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].salesDispatch, 'Dismiss', {
                    duration: 5000
                  });

                  _this.dialogRef.close();
                }, function (err) {
                  _this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].errorMessage, 'Dismiss', {
                    duration: 5000
                  });
                });
              }

              this.dialogRef.close(params);
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
            this.form.get('client_name').setValue(params.data.client_name);
            this.form.get('name').setValue(params.data.name);
            this.form.get('serial_no').setValue(params.data.serial_no);
            this.form.get('dispatch_date').setValue(params.data.dispatch_date);
            this.chargerAs = params.data.is_private = 1 ? true : undefined; //  is_private:this.chargerAs == true? 1:0,

            this.status = params.data.status == 'Y' ? true : false;
          }
        }, {
          key: "updateStatus",
          value: function updateStatus(event) {
            this.status = event.checked;
            this.ref.checked = this.status;
          }
        }, {
          key: "updateChargerAsStatus",
          value: function updateChargerAsStatus(event) {
            this.chargerAs = event.checked;
            this.chargerAsRef.checked = this.chargerAs;
          }
        }]);

        return ActionDialogComponent;
      }();

      ActionDialogComponent.ɵfac = function ActionDialogComponent_Factory(t) {
        return new (t || ActionDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_charger_charger_service__WEBPACK_IMPORTED_MODULE_6__["ChargerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_8__["CountriesService"]));
      };

      ActionDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ActionDialogComponent,
        selectors: [["app-action-dialog"]],
        viewQuery: function ActionDialogComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ref = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chargerAsRef = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])],
        decls: 51,
        vars: 10,
        consts: [["id", "dialog_action_close", "matTooltip", "Close window", 1, "material-icons-outlined", 2, "cursor", "pointer", "color", "white", 3, "click"], [1, "action_toolbar"], [2, "padding", "24px", "max-height", "22vw", "overflow", "auto"], ["id", "forms", "fxLayout", "column", 1, "page-layout", "simple", "fullwidth"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", "name", "form", 1, "mat-elevation-z4", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "33", 1, "pr-4"], ["type", "text", "matInput", "", "formControlName", "client_name", "readonly", "", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "client name", 1, "secondary-text"], ["type", "text", "matInput", "", "formControlName", "name", "readonly", "", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Name", 1, "secondary-text"], ["type", "text", "matInput", "", "formControlName", "serial_no", "readonly", "", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Serial number", 1, "secondary-text"], ["matInput", "", "formControlName", "dispatch_date", "disabled", "", 3, "matDatepicker", "max"], ["matSuffix", "", 2, "display", "flex"], ["matTooltip", "Please enter expiry date", 1, "secondary-text", 2, "padding-top", "7px"], [3, "for"], ["disabled", "false"], ["dp3", ""], [4, "ngIf"], ["fxFlex", "16"], ["color", "primary", 1, "example-margin", 3, "checked", "change"], ["toggleElement", ""], ["fxFlex", "16", 1, "pr-4"], ["toggleChargerAsElement", ""], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["mat-raised-button", "", "color", "primary", 1, "mr-8", 3, "click"], ["mat-raised-button", "", "color", "warn", 1, "mr-8", 3, "click"]],
        template: function ActionDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionDialogComponent_Template_mat_icon_click_0_listener() {
              return ctx.closeActionPanel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sales Dispatch");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Client ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Serial No ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Dispatch Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-datepicker-toggle", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-datepicker", 17, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ActionDialogComponent_mat_error_37_Template, 2, 0, "mat-error", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-slide-toggle", 21, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ActionDialogComponent_Template_mat_slide_toggle_change_39_listener($event) {
              return ctx.updateStatus($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-slide-toggle", 21, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ActionDialogComponent_Template_mat_slide_toggle_change_43_listener($event) {
              return ctx.updateChargerAsStatus($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionDialogComponent_Template_button_click_47_listener() {
              return ctx.onYesClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionDialogComponent_Template_button_click_49_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0)("max", ctx.maxDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("dispatch_date").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.status);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.status ? "Active" : "Inactive", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.chargerAs);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.chargerAs ? "Private" : "Public", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isEditMode ? "Save" : "Save", "");
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
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
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: app_shared_services_charger_charger_service__WEBPACK_IMPORTED_MODULE_6__["ChargerService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_8__["CountriesService"]
          }];
        }, {
          ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["toggleElement"]
          }],
          chargerAsRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["toggleChargerAsElement"]
          }]
        });
      })();
      /***/

    },

    /***/
    "8iHA":
    /*!******************************************************************************************!*\
      !*** ./src/app/main/asset/charger/product-dispatch/view-dialog/view-dialog.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: ViewDialogComponent */

    /***/
    function iHA(module, __webpack_exports__, __webpack_require__) {
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


      var app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/utils/message.constant */
      "AgqY");
      /* harmony import */


      var _fuse_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fuse/animations */
      "PVWW");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var app_shared_services_charger_charger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/services/charger/charger.service */
      "izXn");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/shared/services/countries.service */
      "XtJy");
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


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var _c0 = ["toggleElement"];
      var _c1 = ["toggleChargerAsElement"];

      function ViewDialogComponent_mat_error_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter expiry date ");

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
        function ViewDialogComponent(fb, chargerService, snackBar, datePipe, dialogRef, data, countryService) {
          _classCallCheck(this, ViewDialogComponent);

          this.fb = fb;
          this.chargerService = chargerService;
          this.snackBar = snackBar;
          this.datePipe = datePipe;
          this.dialogRef = dialogRef;
          this.data = data;
          this.countryService = countryService;
          this.isEditMode = false;
          this.status = false;
          this.maxDate = new Date();
          this.chargerAs = false;
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
              client_name: [''],
              name: [''],
              serial_no: [''],
              dispatch_date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              status: this.status == true ? 'Y' : 'N',
              chargerAs: this.chargerAs == true ? 0 : 1
            });

            if (this.isEditMode) {
              this.assignValues(this.params);
            } //this.getCountry();

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
            var _this2 = this;

            if (this.form.valid) {
              var formValues = this.form.value;
              var params = {
                dispatch_date: this.datePipe.transform(formValues.dispatch_date, "yyyy-MM-dd"),
                status: this.status == true ? 'Y' : 'N' // tslint:disable-next-line: semicolon

              }; // tslint:disable-next-line: no-//

              if (this.isEditMode) {
                params.id = this.params.data.id, params.modify_by = this.localStorage.userId;
              } else {
                params.created_by = this.localStorage.userId;
              }

              if (this.isEditMode) {
                this.chargerService.getUpdateClientCharger(params).subscribe(function (data) {
                  _this2.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].recordUpdateMessage, 'Dismiss', {
                    duration: 5000
                  });

                  _this2.dialogRef.close();
                }, function (err) {
                  _this2.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].errorMessage, 'Dismiss', {
                    duration: 5000
                  });
                });
              } else {
                this.chargerService.getProductDispatch(params).subscribe(function (data) {
                  _this2.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].salesDispatch, 'Dismiss', {
                    duration: 5000
                  });

                  _this2.dialogRef.close();
                }, function (err) {
                  _this2.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].errorMessage, 'Dismiss', {
                    duration: 5000
                  });
                });
              }

              this.dialogRef.close(params);
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
            this.form.get('client_name').setValue(params.data.client_name);
            this.form.get('name').setValue(params.data.name);
            this.form.get('serial_no').setValue(params.data.serial_no);
            this.form.get('dispatch_date').setValue(params.data.dispatch_date);
            this.status = params.data.status == 'Y' ? true : false;
          }
        }, {
          key: "updateStatus",
          value: function updateStatus(event) {
            this.status = event.checked;
            this.ref.checked = this.status;
          }
        }, {
          key: "updateChargerAsStatus",
          value: function updateChargerAsStatus(event) {
            this.chargerAs = event.checked;
            this.chargerAsRef.checked = this.chargerAs;
          }
        }]);

        return ViewDialogComponent;
      }();

      ViewDialogComponent.ɵfac = function ViewDialogComponent_Factory(t) {
        return new (t || ViewDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_charger_charger_service__WEBPACK_IMPORTED_MODULE_6__["ChargerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_8__["CountriesService"]));
      };

      ViewDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ViewDialogComponent,
        selectors: [["app-view-dialog"]],
        viewQuery: function ViewDialogComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ref = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chargerAsRef = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])],
        decls: 40,
        vars: 10,
        consts: [["id", "dialog_action_close", "matTooltip", "Close window", 1, "material-icons-outlined", 2, "cursor", "pointer", "color", "white", 3, "click"], [1, "action_toolbar"], [2, "padding", "24px", "max-height", "22vw", "overflow", "auto"], ["id", "forms", "fxLayout", "column", 1, "page-layout", "simple", "fullwidth"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", "name", "form", 1, "mat-elevation-z4", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "33", 1, "pr-4"], ["type", "text", "matInput", "", "formControlName", "client_name", "readonly", "", "autocomplete", "off"], ["type", "text", "matInput", "", "formControlName", "name", "readonly", "", "autocomplete", "off"], ["type", "text", "matInput", "", "formControlName", "serial_no", "readonly", "", "autocomplete", "off"], ["matInput", "", "formControlName", "dispatch_date", "disabled", "", 3, "matDatepicker", "max"], ["matSuffix", "", 3, "disabled", "for"], ["disabled", "false"], ["dp3", ""], [4, "ngIf"], ["fxFlex", "16"], ["disabled", "", "color", "primary", 1, "example-margin", 3, "checked", "change"], ["toggleElement", ""], ["fxFlex", "10", 1, "pr-4"], ["color", "primary", "disabled", "", 1, "example-margin", 3, "checked", "change"], ["toggleChargerAsElement", ""], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["mat-raised-button", "", "color", "warn", 1, "mr-8", 3, "click"]],
        template: function ViewDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewDialogComponent_Template_mat_icon_click_0_listener() {
              return ctx.closeActionPanel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sales Dispatch");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Client ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Serial No ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Dispatch Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-datepicker-toggle", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-datepicker", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ViewDialogComponent_mat_error_28_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-slide-toggle", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ViewDialogComponent_Template_mat_slide_toggle_change_30_listener($event) {
              return ctx.updateStatus($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-slide-toggle", 19, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ViewDialogComponent_Template_mat_slide_toggle_change_34_listener($event) {
              return ctx.updateChargerAsStatus($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewDialogComponent_Template_button_click_38_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0)("max", ctx.maxDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true)("for", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("dispatch_date").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.status);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.status ? "Active" : "Inactive", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.chargerAs);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.chargerAs ? "Private" : "Public", " ");
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"],
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
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: app_shared_services_charger_charger_service__WEBPACK_IMPORTED_MODULE_6__["ChargerService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_8__["CountriesService"]
          }];
        }, {
          ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["toggleElement"]
          }],
          chargerAsRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["toggleChargerAsElement"]
          }]
        });
      })();
      /***/

    },

    /***/
    "AOCH":
    /*!************************************************************************************!*\
      !*** ./src/app/main/asset/charger/product-dispatch/add-list/add-list.component.ts ***!
      \************************************************************************************/

    /*! exports provided: Client, AddListComponent */

    /***/
    function AOCH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Client", function () {
        return Client;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddListComponent", function () {
        return AddListComponent;
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
      "5Mf5");
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


      var xlsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! xlsx */
      "EUZL");
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../view-dialog/view-dialog.component */
      "8iHA");
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! jspdf */
      "i680");
      /* harmony import */


      var jspdf_autotable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! jspdf-autotable */
      "DaQG");
      /* harmony import */


      var jspdf_autotable__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var app_shared_services_charger_charger_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! app/shared/services/charger/charger.service */
      "izXn");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var app_shared_services_charging_station_charging_station_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! app/shared/services/charging-station/charging-station.service */
      "HZ2m");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive */
      "EwFO");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");

      function AddListComponent_mat_card_10_mat_option_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r28.client_name, " ");
        }
      }

      function AddListComponent_mat_card_10_mat_error_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please select client ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddListComponent_mat_card_10_mat_option_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r29.cpo_name, " ");
        }
      }

      function AddListComponent_mat_card_10_mat_error_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please select CPO ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddListComponent_mat_card_10_mat_option_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r30.station_name, " ");
        }
      }

      function AddListComponent_mat_card_10_mat_error_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please select charging station ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddListComponent_mat_card_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select Client");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-autocomplete", 35, 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function AddListComponent_mat_card_10_Template_mat_autocomplete_optionSelected_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r31.onClientChange($event.option.value.client_id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AddListComponent_mat_card_10_mat_option_10_Template, 2, 2, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "expand_more ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddListComponent_mat_card_10_mat_error_14_Template, 2, 0, "mat-error", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Select CPO's");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-autocomplete", 35, 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function AddListComponent_mat_card_10_Template_mat_autocomplete_optionSelected_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r33.onCPOChange($event.option.value.cpo_id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AddListComponent_mat_card_10_mat_option_21_Template, 2, 2, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "expand_more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddListComponent_mat_card_10_mat_error_25_Template, 2, 0, "mat-error", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Select Charging Station");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-autocomplete", 35, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function AddListComponent_mat_card_10_Template_mat_autocomplete_optionSelected_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r34.onStationChange($event.option.value.station_id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AddListComponent_mat_card_10_mat_option_32_Template, 2, 2, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " expand_more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AddListComponent_mat_card_10_mat_error_36_Template, 2, 0, "mat-error", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r0.displayCharClient);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 13, ctx_r0.filteredOptionsCharClient));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("charClient").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r0.displayCharCPO);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 15, ctx_r0.filteredOptionsCharCPO));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("charCPO").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r0.displayCharStat);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 17, ctx_r0.filteredOptionsCharStat));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("charStat").invalid);
        }
      }

      function AddListComponent_th_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddListComponent_th_16_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return $event ? ctx_r35.masterToggle() : null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1.selection.hasValue() && ctx_r1.isAllSelected())("indeterminate", ctx_r1.selection.hasValue() && !ctx_r1.isAllSelected())("aria-label", ctx_r1.checkboxLabel());
        }
      }

      function AddListComponent_td_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddListComponent_td_17_Template_mat_checkbox_click_1_listener($event) {
            return $event.stopPropagation();
          })("change", function AddListComponent_td_17_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

            var row_r37 = ctx.$implicit;

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r39.showOptions($event, row_r37);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r37 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r2.selection.isSelected(row_r37))("aria-label", ctx_r2.checkboxLabel(row_r37));
        }
      }

      function AddListComponent_th_19_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Client Name \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddListComponent_th_19_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r43.changeVisibility("clientSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddListComponent_th_19_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddListComponent_th_19_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r45.filterEntity.client_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddListComponent_th_19_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r47.changeVisibility("clientSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r42.filterEntity.client_name);
        }
      }

      function AddListComponent_th_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddListComponent_th_19_span_1_Template, 4, 0, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddListComponent_th_19_mat_form_field_2_Template, 4, 1, "mat-form-field", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.clientSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.clientSearch);
        }
      }

      function AddListComponent_td_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r48 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r48.client_name, " ");
        }
      }

      function AddListComponent_th_22_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddListComponent_th_22_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r51.changeVisibility("nameSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddListComponent_th_22_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddListComponent_th_22_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r53.filterEntity.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddListComponent_th_22_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r55.changeVisibility("nameSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r50.filterEntity.name);
        }
      }

      function AddListComponent_th_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddListComponent_th_22_span_1_Template, 4, 0, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddListComponent_th_22_mat_form_field_2_Template, 4, 1, "mat-form-field", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.nameSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.nameSearch);
        }
      }

      function AddListComponent_td_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r56 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r56.name, " ");
        }
      }

      function AddListComponent_th_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Charger Nickname");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddListComponent_td_26_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddListComponent_td_26_div_1_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

            var row_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return row_r57.nick_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", row_r57.nick_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r58.isEnabled)("ngModel", row_r57.nick_name);
        }
      }

      function AddListComponent_td_26_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r57.nick_name, " ");
        }
      }

      function AddListComponent_td_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddListComponent_td_26_div_1_Template, 3, 3, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddListComponent_td_26_div_2_Template, 2, 1, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r57 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r57.is_enable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !row_r57.is_enable);
        }
      }

      function AddListComponent_th_28_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Serial No \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddListComponent_th_28_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r67.changeVisibility("serialSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddListComponent_th_28_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddListComponent_th_28_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

            var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r69.filterEntity.serial_no = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddListComponent_th_28_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r71.changeVisibility("serialSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r66.filterEntity.serial_no);
        }
      }

      function AddListComponent_th_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddListComponent_th_28_span_1_Template, 4, 0, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddListComponent_th_28_mat_form_field_2_Template, 4, 1, "mat-form-field", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.serialSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.serialSearch);
        }
      }

      function AddListComponent_td_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r72 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r72.serial_no, " ");
        }
      }

      function AddListComponent_th_31_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Model Name \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddListComponent_th_31_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

            var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r75.changeVisibility("modelSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddListComponent_th_31_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddListComponent_th_31_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78);

            var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r77.filterEntity.model_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddListComponent_th_31_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78);

            var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r79.changeVisibility("modelSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r74.filterEntity.model_name);
        }
      }

      function AddListComponent_th_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddListComponent_th_31_span_1_Template, 4, 0, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddListComponent_th_31_mat_form_field_2_Template, 4, 1, "mat-form-field", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.modelSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.modelSearch);
        }
      }

      function AddListComponent_td_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r80 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r80.model_name, " ");
        }
      }

      function AddListComponent_th_34_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddListComponent_th_34_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84);

            var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r83.changeVisibility("statusSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddListComponent_th_34_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddListComponent_th_34_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86);

            var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r85.filterEntity.statusString = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddListComponent_th_34_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86);

            var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r87.changeVisibility("statusSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r82.filterEntity.statusString);
        }
      }

      function AddListComponent_th_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddListComponent_th_34_span_1_Template, 4, 0, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddListComponent_th_34_mat_form_field_2_Template, 4, 1, "mat-form-field", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r13.statusSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.statusSearch);
        }
      }

      function AddListComponent_td_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r88 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", row_r88.status == "Y" ? "green" : "red");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r88.statusString, " ");
        }
      }

      function AddListComponent_th_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddListComponent_td_38_Template(rf, ctx) {
        if (rf & 1) {
          var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddListComponent_td_38_Template_mat_icon_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

            var element_r89 = ctx.$implicit;

            var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r90.viewDialog("VIEW", element_r89);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddListComponent_td_38_Template_mat_icon_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

            var element_r89 = ctx.$implicit;

            var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r92.openDialog("EDIT", element_r89);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddListComponent_td_38_Template_mat_icon_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

            var element_r89 = ctx.$implicit;

            var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r93["delete"](element_r89.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddListComponent_tr_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 70);
        }
      }

      function AddListComponent_tr_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 71);
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

      var Client = function Client() {
        _classCallCheck(this, Client);

        this.is_enable = false;
      };
      /**
       * @title Data table with sorting, pagination, and filtering.
       */


      var AddListComponent = /*#__PURE__*/function () {
        function AddListComponent(chargerService, dialog, snackBar, fb, chargingStationService) {
          _classCallCheck(this, AddListComponent);

          this.chargerService = chargerService;
          this.dialog = dialog;
          this.snackBar = snackBar;
          this.fb = fb;
          this.chargingStationService = chargingStationService;
          this.displayedColumns = ['select', 'client_name', 'name', 'nick_name', 'serial_no', 'model_name'];
          this.head = [['Client Name', 'Name', 'Serial Number', 'Model Name', 'Status']];
          this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_14__["SelectionModel"](true, []);
          this.clientSearch = false;
          this.nameSearch = false;
          this.serialSearch = false;
          this.modelSearch = false;
          this.statusSearch = false;
          this.is_enable = false;
          this.form = this.fb.group({
            charClient: ['', [autocompleteObjectValidator()]],
            charCPO: ['', [autocompleteObjectValidator()]],
            charStat: ['', [autocompleteObjectValidator()]]
          });
        }

        _createClass(AddListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
            this.clientCpoStaDetails = JSON.parse(localStorage.getItem('clientCpoStaDetails')); //this.getAllClientChargers(this.localStorage.userId);

            this.filterEntity = new Client();
            this.filterType = mat_table_filter__WEBPACK_IMPORTED_MODULE_6__["MatTableFilter"].ANYWHERE;
            this.getClients();
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
          key: "getAllClientChargers",
          value: function getAllClientChargers(id) {
            var _this3 = this;

            this.chargerService.getAllClientChargers(id).subscribe(function (data) {
              if (data != null) {
                _this3.allChargers = data;

                for (var i = 0; i < _this3.allChargers.length; i++) {
                  if (_this3.allChargers[i].status == 'N') {
                    _this3.allChargers[i].statusString = 'Inactive';
                  } else {
                    _this3.allChargers[i].statusString = 'Active';
                  }
                }

                _this3.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this3.allChargers);
                _this3.dataSource.paginator = _this3.paginator;
                _this3.dataSource.sort = _this3.sort;
              } else {
                _this3.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].NoRecordFoundMessage, 'Dismiss', {
                  duration: 3000
                });

                return;
              }
            }, function (err) {});
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var _this4 = this;

            this.confirmDialogRef = this.dialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__["FuseConfirmDialogComponent"], {
              disableClose: true
            }); //this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

            this.confirmDialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                _this4.chargerService.deleteChargerFromClient(id, _this4.localStorage.userId).subscribe(function (data) {
                  _this4.getAllClientChargers(_this4.localStorage.userId);

                  _this4.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].deleteMessage, 'Dismiss', {
                    duration: 2000
                  });
                }, function (err) {});
              }

              _this4.confirmDialogRef = null;
            });
          }
        }, {
          key: "openDialog",
          value: function openDialog(action, data) {
            var _this5 = this;

            var params = {
              action: action,
              data: data
            };
            var dialogRef = this.dialog.open(_action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ActionDialogComponent"], {
              width: '800px',
              data: params,
              autoFocus: false,
              disableClose: true,
              panelClass: 'app-action-dialog'
            });
            dialogRef.afterClosed().subscribe(function (result) {
              // this.moderate(result);
              _this5.getAllClientChargers(_this5.localStorage.userId);
            });
          }
        }, {
          key: "changeVisibility",
          value: function changeVisibility(visibleOption, ev) {
            // visibleOption = !visibleOption;
            //nameSearch = false;
            //descSearch = false;
            ev.stopPropagation();

            if (visibleOption == 'clientSearch') {
              this.clientSearch = !this.clientSearch;
              this.filterEntity.client_name = "";
            }

            if (visibleOption == 'nameSearch') {
              this.nameSearch = !this.nameSearch;
              this.filterEntity.name = "";
            }

            if (visibleOption == 'serialSearch') {
              this.serialSearch = !this.serialSearch;
              this.filterEntity.serial_no = "";
            }

            if (visibleOption == 'modelSearch') {
              this.modelSearch = !this.modelSearch;
              this.filterEntity.model_name = "";
            }

            if (visibleOption == 'statusSearch') {
              this.statusSearch = !this.statusSearch;
              this.filterEntity.statusString = "";
            }
          }
        }, {
          key: "tableExport",
          value: function tableExport() {
            this.exportedData = [];

            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              var chargerModel = this.dataSource.filteredData[i]; //this.exportedData.push({name: `name${i}`, description: `description${i}`,
              //statusString: `statusString${i}`});

              var data = {
                'Client Name': chargerModel.client_name,
                'Name': chargerModel.name,
                'Serial No': chargerModel.serial_no,
                'Model Name': chargerModel.model_name,
                'Status': chargerModel.statusString
              };
              this.exportedData.push(data);
            }

            var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].json_to_sheet(this.exportedData);
            var workBook = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].book_append_sheet(workBook, workSheet, 'sales disptch');
            xlsx__WEBPACK_IMPORTED_MODULE_9__["writeFile"](workBook, 'Sales Dispatch.xlsx');
          }
        }, {
          key: "viewDialog",
          value: function viewDialog(action, data) {
            var _this6 = this;

            var params = {
              action: action,
              data: data
            };
            var dialogRef = this.dialog.open(_view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ViewDialogComponent"], {
              width: '800px',
              data: params,
              panelClass: 'app-action-dialog',
              autoFocus: false,
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              // this.moderate(result);
              _this6.getClients();
            });
          }
        }, {
          key: "pdfExport",
          value: function pdfExport() {
            var _this7 = this;

            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_11__["jsPDF"]({// set needed dimensions for any elemen 
            });
            this.exportedData = [];

            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              var chrger = this.dataSource.filteredData[i]; //this.exportedData.push({name: `name${i}`, description: `description${i}`,
              //statusString: `statusString${i}`});

              var data = [chrger.client_name, chrger.name, chrger.serial_no, chrger.model_name, chrger.statusString];
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
                doc.text('Product Dispatch Report', doc.internal.pageSize.getWidth() / 2, 11, {
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
                doc.text('Generated By:' + _this7.localStorage.f_Name, 195, 18, {
                  align: 'right'
                });
                doc = _this7.addWaterMark(doc);
              }
            }); // below line for Open PDF document in new tab

            doc.output('dataurlnewwindow'); // below line for Download PDF document  

            doc.save('Product Dispatch Report.pdf');
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
        }, {
          key: "getClients",
          value: function getClients() {
            var _this8 = this;

            this.clientList = JSON.parse(localStorage.getItem('ClientList'));

            if (this.localStorage.role_code != 'END') {
              if (this.clientList != null && this.clientList != undefined) {
                var toSelect = this.clientList[0];
                this.form.get('charClient').setValue(toSelect);
                this.getCPOByClient(toSelect.client_id);
              }

              this.filteredOptionsCharClient = this.form.controls.charClient.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (value) {
                return typeof value === 'string' ? value : value.client_name;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (name) {
                return name ? _this8._filterCharClient(name) : _this8.clientList;
              }));
            }
          }
        }, {
          key: "_filterCharClient",
          value: function _filterCharClient(name) {
            this.form.get('charCPO').setValue('');
            this.form.get('charStat').setValue('');
            var filterValue = name.toLowerCase();
            return this.clientList.filter(function (option) {
              return option.client_name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "displayCharClient",
          value: function displayCharClient(item) {
            return item && item.client_name ? item.client_name : '';
          }
        }, {
          key: "onClientChange",
          value: function onClientChange(client_id) {
            this.cpoList = [];
            this.stationList = [];
            this.form.get('charCPO').setValue("");
            this.form.get('charStat').setValue("");
            this.getCPOByClient(client_id);
          }
        }, {
          key: "getCPOByClient",
          value: function getCPOByClient(client_id) {
            var _this9 = this;

            this.cpoList = JSON.parse(localStorage.getItem('CpoList'));

            if (this.localStorage.role_code != "END") {
              if (this.cpoList != null && this.cpoList != undefined) {
                var toSelect = this.cpoList.length == 1 ? this.cpoList[0] : this.cpoList[1];
                this.form.get('charCPO').setValue(toSelect);
                this.getStationByCPO(toSelect.cpo_id);
              }

              this.filteredOptionsCharCPO = this.form.controls.charCPO.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (value) {
                return typeof value === 'string' ? value : value.cpo_name;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (name) {
                return name ? _this9._filterCharCPO(name) : _this9.cpoList;
              }));
            }
          }
        }, {
          key: "_filterCharCPO",
          value: function _filterCharCPO(name) {
            this.form.get('charStat').setValue('');
            var filterValue = name.toLowerCase();
            return this.cpoList.filter(function (option) {
              return option.cpo_name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "displayCharCPO",
          value: function displayCharCPO(item) {
            return item && item.cpo_name ? item.cpo_name : '';
          }
        }, {
          key: "onCPOChange",
          value: function onCPOChange(id) {
            this.stationList = [];
            this.form.get('charStat').setValue("");
            this.getStationByCPO(id);
          }
        }, {
          key: "getStationByCPO",
          value: function getStationByCPO(id) {
            var _this10 = this;

            this.stationList = JSON.parse(localStorage.getItem('StationList'));
            this.station = [];

            if (this.localStorage.role_code != "END") {
              for (var i = 0; i < this.stationList.length; i++) {
                if (id == this.stationList[i].cpo_id) {
                  this.station.push(this.stationList[i]);
                }

                if (id == -1) {
                  this.station.push(this.stationList[i]);
                }
              }

              if (this.station != null && this.station != undefined && this.station.length > 0) {
                var toSelect = this.station[0];
                this.form.get('charStat').setValue(toSelect);
                this.getAllClientChargers(this.localStorage.userId);
              }

              this.filteredOptionsCharStat = this.form.controls.charStat.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (value) {
                return typeof value === 'string' ? value : value.station_name;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (station_name) {
                return station_name ? _this10._filterCharStat(station_name) : _this10.station;
              }));
            }
          }
        }, {
          key: "_filterCharStat",
          value: function _filterCharStat(name) {
            var filterValue = name.toLowerCase();
            return this.station.filter(function (option) {
              return option.station_name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "displayCharStat",
          value: function displayCharStat(item) {
            return item && item.station_name ? item.station_name : '';
          }
        }, {
          key: "onStationChange",
          value: function onStationChange(event) {
            this.getAllClientChargers(this.localStorage.userId); //this.getAllClientChargers(event);
          }
        }, {
          key: "isAllSelected",
          value: function isAllSelected() {
            if (this.dataSource != null) {
              var numSelected = this.selection.selected.length;
              var selected_item = this.selection.selected;
              var numRows = this.dataSource.data.length; //this.check(selected_item);

              return numSelected === numRows;
            }
          }
          /** Selects all rows if they are not all selected; otherwise clear selection. */

        }, {
          key: "masterToggle",
          value: function masterToggle() {
            var _this$selection;

            if (this.isAllSelected()) {
              this.check();
              this.selection.clear();
              return;
            }

            (_this$selection = this.selection).select.apply(_this$selection, _toConsumableArray(this.dataSource.data));

            this.check();
          }
          /** The label for the checkbox on the passed row */

        }, {
          key: "checkboxLabel",
          value: function checkboxLabel(row) {
            if (!row) {
              // this.is_enable = !this.is_enable;
              return "".concat(this.isAllSelected() ? 'deselect' : 'select', " all");
            }

            return "".concat(this.selection.isSelected(row) ? 'deselect' : 'select', " row ").concat(row.name + 1);
          }
        }, {
          key: "addName",
          value: function addName() {
            var _this11 = this;

            if (this.selection.selected.length > 0) {
              var params = {
                data: this.selection.selected.map(function (v) {
                  return {
                    id: v.charger_id,
                    nick_name: v.nick_name
                  };
                })
              };
              params.loginid = this.localStorage.userId;
              params.updatedby = this.localStorage.userId;
              this.chargerService.updateNickName(params).subscribe(function (data) {
                _this11.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].recordUpdateMessage, 'Dismiss', {
                  duration: 5000
                });

                _this11.getClients();

                _this11.selection.clear();
              }, function (err) {
                _this11.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].errorMessage, 'Dismiss', {
                  duration: 5000
                });
              });
            } else {
              this.snackBar.open("Please select at least one charger", 'Dismiss', {
                duration: 5000
              });
            }
          }
        }, {
          key: "showOptions",
          value: function showOptions(event, row) {
            if (event.checked == true) {
              row.is_enable = true;
              this.selection.selected.push(row); //this.is_enable[row].id = true;
            } else {
              row.is_enable = false;

              for (var i = 0; i < this.selection.selected.length; i++) {
                if (this.selection.selected[i].id === row.id) {
                  this.selection.selected.splice(i, 1);
                  break;
                }
              }
            }
          }
        }, {
          key: "allSelected",
          value: function allSelected(event) {
            if (event.checked == true) {
              this.dataSource.filteredData.forEach(function (part, index, theArray) {
                this.dataSource.filteredData[index].is_enabled = true;
              });
            }
          }
        }, {
          key: "check",
          value: function check() {
            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              this.dataSource.filteredData[i].is_enable = !this.dataSource.filteredData[i].is_enable;
            } // this.dataSource.filteredData.forEach(function(is_enable, index, theArray) {
            //   this.dataSource.filteredData[index].is_enabled =  !this.dataSource.filteredData[index].is_enabled;
            // });

          }
        }]);

        return AddListComponent;
      }();

      AddListComponent.ɵfac = function AddListComponent_Factory(t) {
        return new (t || AddListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_charger_charger_service__WEBPACK_IMPORTED_MODULE_15__["ChargerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_charging_station_charging_station_service__WEBPACK_IMPORTED_MODULE_19__["ChargingStationService"]));
      };

      AddListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddListComponent,
        selectors: [["app-add-list"]],
        viewQuery: function AddListComponent_Query(rf, ctx) {
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
        decls: 44,
        vars: 13,
        consts: [["id", "", "fxLayout", "row", 1, "page-layout", "simple", "right-sidebar"], ["fusePerfectScrollbar", "", 1, "center"], ["fxLayout", "column", "fxLayoutAlign", "space-between", 1, "header", "accent", "px-24", "pt-16", "pb-0"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [1, "mat-display-1", "my-0", "my-sm-24", "welcome-message"], [2, "text-align", "left", "margin-left", "10px", "margin-bottom", "10px", "margin-top", "10px"], ["mat-raised-button", "", "color", "primary", "mat-stroked-button", "", "matTooltip", "Add Nickname", 1, "mr-8", 2, "float", "right", 3, "disabled", "click"], [1, "ml-2", "excelIcon"], ["style", "padding:16px  !important;display:none;", 4, "ngIf"], ["fxLayout", "row wrap", 1, "page-layout", "simple", "fullwidth", 2, "overflow", "scroll"], [1, "content", 2, "min-width", "auto"], [1, ""], ["mat-table", "", "matTableFilter", "", "matSort", "", "mat-sort", "", 1, "mat-elevation-z8", 3, "dataSource", "exampleEntity", "filterType"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "client_name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "name"], ["matColumnDef", "nick_name"], ["matColumnDef", "serial_no"], ["matColumnDef", "model_name"], ["matColumnDef", "status"], ["mat-cell", "", 3, "color", 4, "matCellDef"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [2, "background-color", "white"], ["flex", "100", 2, "display", "flex", "align-items", "center"], [3, "pageSizeOptions"], [2, "padding", "16px  !important", "display", "none"], ["fxLayoutAlign", "start", "fxFlex", "1 0 auto", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "33", 1, "pr-4", 2, "height", "60px"], ["type", "text", "matInput", "", "formControlName", "charClient", "readonly", "", 3, "matAutocomplete"], [3, "displayWith", "optionSelected"], ["autoClient", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", "matTooltip", "Please select client", 1, "secondary-text"], [4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "charCPO", "readonly", "", 3, "matAutocomplete"], ["auto1", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select CPO", 1, "secondary-text"], ["type", "text", "matInput", "", "formControlName", "charStat", "readonly", "", 3, "matAutocomplete"], ["auto2", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select charging station", 1, "secondary-text"], [3, "value"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "aria-label", "change"], ["mat-cell", ""], [3, "checked", "aria-label", "click", "change"], ["mat-header-cell", "", "mat-sort-header", ""], ["class", "custom_font_size", "style", "display: flex;", 4, "ngIf"], ["appearance", "outline", "class", "list_input", 4, "ngIf"], [1, "custom_font_size", 2, "display", "flex"], ["matSuffix", "", 3, "click"], ["appearance", "outline", 1, "list_input"], ["matInput", "", "placeholder", " Client Name ", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", " Name", 3, "ngModel", "ngModelChange"], ["appearance", "outline", 1, "pr-4", 2, "height", "48px"], ["matInput", "", "placeholder", "Nickname", "maxlength", "20", 3, "value", "disabled", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Serial no", 3, "ngModel", "ngModelChange"], ["appearance", "outline", "style", "width: 70%;", "class", "list_input", 4, "ngIf"], ["appearance", "outline", 1, "list_input", 2, "width", "70%"], ["matInput", "", "placeholder", " Model Name ", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Status", 3, "ngModel", "ngModelChange"], [1, "custom_font_size"], ["color", "primary", "matTooltip", "View", 2, "cursor", "pointer", 3, "click"], ["color", "primary", "matTooltip", "Edit", 2, "cursor", "pointer", 3, "click"], ["color", "warn", "matTooltip", "Remove", 2, "cursor", "pointer", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function AddListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dispatched Chargers ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddListComponent_Template_button_click_7_listener() {
              return ctx.addName();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Update Nickname");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AddListComponent_mat_card_10_Template, 37, 19, "mat-card", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AddListComponent_th_16_Template, 2, 3, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AddListComponent_td_17_Template, 2, 2, "td", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddListComponent_th_19_Template, 3, 2, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AddListComponent_td_20_Template, 2, 1, "td", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AddListComponent_th_22_Template, 3, 2, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AddListComponent_td_23_Template, 2, 1, "td", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddListComponent_th_25_Template, 2, 0, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AddListComponent_td_26_Template, 3, 2, "td", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AddListComponent_th_28_Template, 3, 2, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AddListComponent_td_29_Template, 2, 1, "td", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AddListComponent_th_31_Template, 3, 2, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AddListComponent_td_32_Template, 2, 1, "td", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](33, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AddListComponent_th_34_Template, 3, 2, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AddListComponent_td_35_Template, 2, 3, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](36, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AddListComponent_th_37_Template, 3, 0, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AddListComponent_td_38_Template, 9, 0, "td", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AddListComponent_tr_39_Template, 1, 0, "tr", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AddListComponent_tr_40_Template, 1, 0, "tr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "mat-paginator", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.dataSource || (ctx.dataSource == null ? null : ctx.dataSource.data == null ? null : ctx.dataSource.data.length) == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.localStorage.role_code != "END");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("exampleEntity", ctx.filterEntity)("filterType", ctx.filterType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutDirective"], _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_21__["FusePerfectScrollbarDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], mat_table_filter__WEBPACK_IMPORTED_MODULE_6__["MatTableFilterDirective"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_card__WEBPACK_IMPORTED_MODULE_25__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_25__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatSuffix"], _angular_material_core__WEBPACK_IMPORTED_MODULE_30__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["MaxLengthValidator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_24__["AsyncPipe"]],
        styles: ["mat-form-field.list_input div.mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\n.mat-header-cell .custom_font_size {\n  font-size: 15px !important;\n  text-align: left;\n}\n\nmat-form-field.list_input div.mat-form-field-infix {\n  padding: 0.5em 0 0.5em 0 !important;\n}\n\ntable {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhZGQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQTtFQUNFLDRCQUFBO0FBWEY7O0FBYUE7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0FBVkY7O0FBWUE7RUFDRSxtQ0FBQTtBQVRGOztBQVdBO0VBQ0ksV0FBQTtBQVJKOztBQVdFO0VBQ0UsWUFBQTtBQVJKIiwiZmlsZSI6ImFkZC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGFibGUge1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIC5tYXQtZm9ybS1maWVsZCB7XHJcbi8vICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgdGQsIHRoIHtcclxuLy8gICAgIHdpZHRoOiAyNSU7XHJcbi8vICAgfVxyXG5tYXQtZm9ybS1maWVsZC5saXN0X2lucHV0ICBkaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcclxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtaGVhZGVyLWNlbGwgLmN1c3RvbV9mb250X3NpemV7XHJcbiAgZm9udC1zaXplOiAxNXB4ICAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxubWF0LWZvcm0tZmllbGQubGlzdF9pbnB1dCBkaXYubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gIHBhZGRpbmc6IDAuNWVtIDAgMC41ZW0gMCAhaW1wb3J0YW50O1xyXG59XHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICB0aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gICJdfQ== */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_7__["fuseAnimations"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-list',
            templateUrl: './add-list.component.html',
            styleUrls: ['./add-list.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_7__["fuseAnimations"]
          }]
        }], function () {
          return [{
            type: app_shared_services_charger_charger_service__WEBPACK_IMPORTED_MODULE_15__["ChargerService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialog"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBar"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormBuilder"]
          }, {
            type: app_shared_services_charging_station_charging_station_service__WEBPACK_IMPORTED_MODULE_19__["ChargingStationService"]
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
    "THMh":
    /*!*****************************************************************!*\
      !*** ./src/app/main/asset/charger/charger-management.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ChargerManagementModule */

    /***/
    function THMh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChargerManagementModule", function () {
        return ChargerManagementModule;
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


      var _charger_management_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./charger-management-routing.module */
      "xbdY");
      /* harmony import */


      var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fuse/shared.module */
      "5HBU");
      /* harmony import */


      var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular-material-components/datetime-picker */
      "n1FK"); // import { CreateComponent } from './create/create.component';
      // import { ListComponent } from './list/list.component';
      // import { ChargingStationRoutingModule } from './charging-station-routing.module';
      //import {MatTableExporterModule} from 'mat-table-exporter';


      var CUSTOM_DATE_FORMATS = {
        parse: {
          dateInput: 'l, LTS'
        },
        display: {
          dateInput: 'YYYY-MM-DD HH:mm:ss',
          monthYearLabel: 'MMM YYYY',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY'
        }
      };
      var COMPONENTS = [];
      var COMPONENTS_DYNAMIC = [];

      var ChargerManagementModule = function ChargerManagementModule() {
        _classCallCheck(this, ChargerManagementModule);
      };

      ChargerManagementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ChargerManagementModule
      });
      ChargerManagementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ChargerManagementModule_Factory(t) {
          return new (t || ChargerManagementModule)();
        },
        providers: [{
          provide: _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_4__["NGX_MAT_DATE_FORMATS"],
          useValue: CUSTOM_DATE_FORMATS
        }],
        imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"], _charger_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChargerManagementRoutingModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_4__["NgxMatDatetimePickerModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_4__["NgxMatNativeDateModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_4__["NgxMatTimepickerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChargerManagementModule, {
          imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"], _charger_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChargerManagementRoutingModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_4__["NgxMatDatetimePickerModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_4__["NgxMatNativeDateModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_4__["NgxMatTimepickerModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChargerManagementModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"], _charger_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChargerManagementRoutingModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_4__["NgxMatDatetimePickerModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_4__["NgxMatNativeDateModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_4__["NgxMatTimepickerModule"]],
            declarations: [COMPONENTS, COMPONENTS_DYNAMIC],
            entryComponents: [COMPONENTS_DYNAMIC],
            providers: [{
              provide: _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_4__["NGX_MAT_DATE_FORMATS"],
              useValue: CUSTOM_DATE_FORMATS
            }]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "xbdY":
    /*!*************************************************************************!*\
      !*** ./src/app/main/asset/charger/charger-management-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: ChargerManagementRoutingModule */

    /***/
    function xbdY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChargerManagementRoutingModule", function () {
        return ChargerManagementRoutingModule;
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


      var _product_dispatch_add_list_add_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./product-dispatch/add-list/add-list.component */
      "AOCH");

      var routes = [{
        path: 'chargers',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | chargers-chargers-module */
          [__webpack_require__.e("common"), __webpack_require__.e("chargers-chargers-module")]).then(__webpack_require__.bind(null,
          /*! ./chargers/chargers.module */
          "JbEd")).then(function (m) {
            return m.ChargersModule;
          });
        },
        data: {
          title: 'charger'
        }
      }, {
        path: 'salesDispatch',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | product-dispatch-product-dispatch-module */
          [__webpack_require__.e("common"), __webpack_require__.e("product-dispatch-product-dispatch-module")]).then(__webpack_require__.bind(null,
          /*! ./product-dispatch/product-dispatch.module */
          "T/OE")).then(function (m) {
            return m.ProductDispatchModule;
          });
        },
        data: {
          title: 'On Board'
        }
      }, {
        path: 'dispatchedChargers',
        component: _product_dispatch_add_list_add_list_component__WEBPACK_IMPORTED_MODULE_2__["AddListComponent"],
        data: {
          title: 'Dispatch Charger'
        }
      }];

      var ChargerManagementRoutingModule = function ChargerManagementRoutingModule() {
        _classCallCheck(this, ChargerManagementRoutingModule);
      };

      ChargerManagementRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ChargerManagementRoutingModule
      });
      ChargerManagementRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ChargerManagementRoutingModule_Factory(t) {
          return new (t || ChargerManagementRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChargerManagementRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChargerManagementRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=charger-charger-management-module-es5.js.map