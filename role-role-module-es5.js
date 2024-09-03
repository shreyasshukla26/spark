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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["role-role-module"], {
    /***/
    "3grB":
    /*!**********************************************************************!*\
      !*** ./src/app/main/user-management/role/create/create.component.ts ***!
      \**********************************************************************/

    /*! exports provided: CreateComponent */

    /***/
    function grB(module, __webpack_exports__, __webpack_require__) {
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


      var app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! app/shared/utils/message.constant */
      "AgqY");
      /* harmony import */


      var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fuse/animations */
      "PVWW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var app_shared_services_user_role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/user/role.service */
      "HJ+f");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/shared/services/client/client.service */
      "LKWI");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
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

      var _c0 = ["toggleElement"];

      function CreateComponent_mat_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r9.name, " ");
        }
      }

      function CreateComponent_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select client ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateComponent_mat_error_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateComponent_mat_error_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Special character are not allowed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateComponent_mat_error_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateComponent_mat_error_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Special character is not allowed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateComponent_mat_error_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Special character is not allowed ");

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

      var CreateComponent = /*#__PURE__*/function () {
        function CreateComponent(fb, roleService, snackBar, router, clientService) {
          _classCallCheck(this, CreateComponent);

          this.fb = fb;
          this.roleService = roleService;
          this.snackBar = snackBar;
          this.router = router;
          this.clientService = clientService;
          this.status = true;
        }

        _createClass(CreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialize();
            this.getClients();
          }
        }, {
          key: "initialize",
          value: function initialize() {
            this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
            this.form = this.fb.group({
              client: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z0-9 ]*$/)]],
              name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z0-9 ]*$/)]],
              description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z0-9 ]*$/)]],
              status: [{
                value: false
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            if (this.form.valid) {
              var formValues = this.form.value;
              var params = {
                client_id: formValues.client.id,
                code: formValues.code,
                name: formValues.name,
                project_id: this.localStorage.project_id,
                description: formValues.description,
                status: this.status == true ? 'Y' : 'N',
                created_by: this.localStorage.userId
              };
              this.roleService.create(params).subscribe(function (resp) {
                if (resp.status == true) {
                  _this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_2__["MessageConstant"].roleCreated, 'Dismiss', {
                    duration: 5000
                  });

                  _this.router.navigate(['/userManagement/role/crud/list']);
                } else if (resp.status == false) {
                  _this.snackBar.open(resp.message, 'Dismiss', {
                    duration: 5000
                  });
                } else {
                  _this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_2__["MessageConstant"].errorMessage, 'Dismiss', {
                    duration: 5000
                  });
                }
              }, function (err) {
                _this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_2__["MessageConstant"].errorMessage, 'Dismiss', {
                  duration: 5000
                });
              });
            } else {
              return;
            }
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
            this.ref.checked = this.status;
          }
        }, {
          key: "getClients",
          value: function getClients() {
            var _this2 = this;

            this.clientService.getActiveClientsCW(this.localStorage.userId).subscribe(function (data) {
              _this2.clients = data;

              var toSelect = _this2.clients.find(function (c) {
                return c.id == _this2.localStorage.client_id;
              });

              _this2.form.get('client').setValue(toSelect);

              _this2.filteredOptionsClient = _this2.form.controls.client.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
                return typeof value === 'string' ? value : value.name;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (name) {
                return name ? _this2._filterClientModels(name) : _this2.clients;
              }));
            }, function (err) {});
          }
        }, {
          key: "displayClient",
          value: function displayClient(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "_filterClientModels",
          value: function _filterClientModels(name) {
            var filterValue = name.toLowerCase();
            return this.clients.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }]);

        return CreateComponent;
      }();

      CreateComponent.ɵfac = function CreateComponent_Factory(t) {
        return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_user_role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_8__["ClientService"]));
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ref = _t.first);
          }
        },
        decls: 50,
        vars: 14,
        consts: [["id", "forms", "fxLayout", "column", 1, "page-layout", "simple", "fullwidth"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", "name", "form", 1, "mat-card", "mat-elevation-z4", "p-24", 3, "formGroup", "submit", "keydown.enter"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "50", 1, "pr-4"], ["type", "text", "matInput", "", "formControlName", "client", "autocomplete", "off", "required", "", 3, "matAutocomplete"], [3, "displayWith"], ["clientAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 2, "display", "flex"], ["matSuffix", "", 1, "secondary-text"], ["matSuffix", "", "matTooltip", "Please enter client name", 1, "secondary-text"], [4, "ngIf"], ["matInput", "", "placeholder", "", "autocomplete", "off", "formControlName", "code", "maxlength", "20", "required", ""], ["matSuffix", "", "matTooltip", "Please enter code", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "name", "maxlength", "30", "required", "", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter name", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "description", "maxlength", "100", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter description", 1, "secondary-text"], ["fxFlex", "50", "color", "primary", 1, "example-margin", 2, "margin-bottom", "10px", 3, "checked", "change"], ["toggleElement", ""], ["fxLayout", "row", "fxLayoutAlign", "start center", 2, "margin-top", "10px"], ["mat-raised-button", "", "color", "primary", 1, "mr-8"], ["mat-raised-button", "", "color", "warn", "type", "button", "routerLink", "/userManagement/role/crud/list", 1, "mr-8"], [3, "value"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Client");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CreateComponent_mat_error_16_Template, 2, 0, "mat-error", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CreateComponent_mat_error_23_Template, 2, 0, "mat-error", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CreateComponent_mat_error_24_Template, 2, 0, "mat-error", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CreateComponent_mat_error_32_Template, 2, 0, "mat-error", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CreateComponent_mat_error_33_Template, 2, 0, "mat-error", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, CreateComponent_mat_error_40_Template, 2, 0, "mat-error", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-slide-toggle", 18, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateComponent_Template_mat_slide_toggle_change_42_listener($event) {
              return ctx.updateStatus($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Cancel");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayClient);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 12, ctx.filteredOptionsClient));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("client").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("name").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("name").hasError("pattern"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("name").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("name").hasError("pattern"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("description").hasError("pattern"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.status);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.status ? "Active" : "Inactive", " ");
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-create',
            templateUrl: './create.component.html',
            styleUrls: ['./create.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: app_shared_services_user_role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }, {
            type: app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_8__["ClientService"]
          }];
        }, {
          ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["toggleElement"]
          }]
        });
      })();
      /***/

    },

    /***/
    "5ARe":
    /*!****************************************************************************!*\
      !*** ./src/app/main/user-management/role/role-crud/role-crud.component.ts ***!
      \****************************************************************************/

    /*! exports provided: RoleCrudComponent, SunnyTabContentComponent, RainyTabContentComponent, FoggyTabContentComponent */

    /***/
    function ARe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoleCrudComponent", function () {
        return RoleCrudComponent;
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

      function RoleCrudComponent_a_8_Template(rf, ctx) {
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


      var RoleCrudComponent = /*#__PURE__*/function () {
        function RoleCrudComponent(router, cdr, _utilityService) {
          _classCallCheck(this, RoleCrudComponent);

          this.router = router;
          this.cdr = cdr;
          this._utilityService = _utilityService; // Nav bar demo

          this.tabLinks = [// { label: 'List', link: 'list' },
            // { label: 'Add New', link: 'create' }
          ];
          this.tempLinks = [];
        }

        _createClass(RoleCrudComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
            var nav_list = this.localStorage.nav_list_with_tab;
            nav_list.filter(function (x) {
              if (x.id === "userManagement") {
                _this3.objectData = x;

                if (_this3.objectData.children != null && _this3.objectData.children != undefined) {
                  _this3.objectData.children.filter(function (y) {
                    if (y.id === "mangeRole") {
                      _this3.objectChildData = y;

                      if (_this3.objectChildData.children != undefined && _this3.objectChildData.children != null) {
                        _this3.objectChildData.children.filter(function (z) {
                          var isDefaultRoutePermeted = false;

                          if (z.id === "list") {
                            isDefaultRoutePermeted = true;

                            _this3.tempLinks.push({
                              label: 'Manage Role',
                              link: 'list'
                            });
                          }

                          if (z.id === "addNew") {
                            _this3.tempLinks.push({
                              label: 'Add New',
                              link: 'create'
                            });
                          }

                          _this3.tabLinks = _this3.tempLinks;

                          if (!isDefaultRoutePermeted) {
                            _this3.router.navigate(['/userManagement/role/crud/' + _this3.tempLinks[0].link]);
                          }
                        });
                      }
                    }
                  });
                }
              }
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this4 = this;

            this._utilityService.activeMenuItems$.subscribe(function (menuItemSelecte) {
              _this4.menuArray = menuItemSelecte;

              if (_this4.menuArray == null || _this4.menuArray == undefined || _this4.menuArray.title == null || _this4.menuArray.title == undefined) {
                _this4.menuArray = JSON.parse(localStorage.getItem('activeMenuItems'));
              }

              _this4.cdr.detectChanges();
            });
          }
        }]);

        return RoleCrudComponent;
      }();

      RoleCrudComponent.ɵfac = function RoleCrudComponent_Factory(t) {
        return new (t || RoleCrudComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]));
      };

      RoleCrudComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RoleCrudComponent,
        selectors: [["app-role-crud"]],
        decls: 10,
        vars: 6,
        consts: [[2, "display", "block", "width", "100%"], ["id", "", "fxLayout", "row", 1, "page-layout", "simple", "right-sidebar"], ["fusePerfectScrollbar", "", 1, "center"], ["fxLayout", "column", "fxLayoutAlign", "space-between", 1, "header", "accent", "px-24", "pt-16", "pb-0"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [1, "mat-display-1", "my-0", "my-sm-24", "welcome-message"], ["mat-tab-nav-bar", "", "aria-label", "weather navigation links"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active"], ["rla", "routerLinkActive"]],
        template: function RoleCrudComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RoleCrudComponent_a_8_Template, 3, 3, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.menuArray == null ? null : ctx.menuArray.title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabLinks);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_5__["FusePerfectScrollbarDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabNav"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlLWNydWQuY29tcG9uZW50LnNjc3MifQ== */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleCrudComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-role-crud',
            templateUrl: './role-crud.component.html',
            styleUrls: ['./role-crud.component.scss'],
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
    "HD5H":
    /*!**********************************************************!*\
      !*** ./src/app/main/user-management/role/role.module.ts ***!
      \**********************************************************/

    /*! exports provided: RoleModule */

    /***/
    function HD5H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoleModule", function () {
        return RoleModule;
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
      "3grB");
      /* harmony import */


      var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list/list.component */
      "n8sW");
      /* harmony import */


      var _action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./action-dialog/action-dialog.component */
      "VoIL");
      /* harmony import */


      var _role_crud_role_crud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./role-crud/role-crud.component */
      "5ARe");
      /* harmony import */


      var _role_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./role-routing.module */
      "Rl8u");
      /* harmony import */


      var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fuse/shared.module */
      "5HBU");
      /* harmony import */


      var _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./view-dialog/view-dialog.component */
      "NLQL");
      /* harmony import */


      var _role_menu_role_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../role-menu/role-menu.component */
      "uXHb"); // import { ClientCrudComponent } from './client-crud/client-crud.component';


      var COMPONENTS = [_role_crud_role_crud_component__WEBPACK_IMPORTED_MODULE_5__["RoleCrudComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_2__["CreateComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"], _role_menu_role_menu_component__WEBPACK_IMPORTED_MODULE_9__["RoleMenuComponent"]];
      var COMPONENTS_DYNAMIC = [_action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ActionDialogComponent"], _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ViewDialogComponent"]];

      var RoleModule = function RoleModule() {
        _classCallCheck(this, RoleModule);
      };

      RoleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: RoleModule
      });
      RoleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function RoleModule_Factory(t) {
          return new (t || RoleModule)();
        },
        imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _role_routing_module__WEBPACK_IMPORTED_MODULE_6__["RoleRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoleModule, {
          declarations: [_role_crud_role_crud_component__WEBPACK_IMPORTED_MODULE_5__["RoleCrudComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_2__["CreateComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"], _role_menu_role_menu_component__WEBPACK_IMPORTED_MODULE_9__["RoleMenuComponent"], _action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ActionDialogComponent"], _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ViewDialogComponent"]],
          imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _role_routing_module__WEBPACK_IMPORTED_MODULE_6__["RoleRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _role_routing_module__WEBPACK_IMPORTED_MODULE_6__["RoleRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"]],
            declarations: [COMPONENTS, COMPONENTS_DYNAMIC],
            entryComponents: [COMPONENTS_DYNAMIC]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "NLQL":
    /*!********************************************************************************!*\
      !*** ./src/app/main/user-management/role/view-dialog/view-dialog.component.ts ***!
      \********************************************************************************/

    /*! exports provided: ViewDialogComponent */

    /***/
    function NLQL(module, __webpack_exports__, __webpack_require__) {
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _fuse_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fuse/animations */
      "PVWW");
      /* harmony import */


      var app_shared_services_user_role_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/services/user/role.service */
      "HJ+f");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/shared/services/client/client.service */
      "LKWI");
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

      var _c0 = ["toggleElement"];

      function ViewDialogComponent_mat_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r9.name, " ");
        }
      }

      function ViewDialogComponent_mat_error_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select client ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_error_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_error_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Special character are not allowed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_error_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_error_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Special character is not allowed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_error_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Special character is not allowed ");

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
        function ViewDialogComponent(fb, roleService, snackBar, clientService, dialogRef, data) {
          _classCallCheck(this, ViewDialogComponent);

          this.fb = fb;
          this.roleService = roleService;
          this.snackBar = snackBar;
          this.clientService = clientService;
          this.dialogRef = dialogRef;
          this.data = data;
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
            this.getClients();
            this.isEditMode = this.params.action == 'CREATE' ? false : true;
            this.form = this.fb.group({
              client: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z0-9]*$/)]],
              name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z0-9]*$/)]],
              description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z0-9]*$/)]]
            });

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
            var _this5 = this;

            if (this.form.valid) {
              var formValues = this.form.value;
              var params = {
                name: formValues.name,
                description: formValues.description,
                status: this.status == true ? 'Y' : 'N' // tslint:disable-next-line: semicolon

              }; // tslint:disable-next-line: no-//

              if (this.isEditMode) {
                params.id = this.params.data.id, params.modify_by = this.localStorage.userId;
              } else {
                params.created_by = this.localStorage.userId;
              }

              if (this.isEditMode) {
                this.roleService.update(params).subscribe(function (data) {
                  _this5.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].recordUpdateMessage, 'Dismiss', {
                    duration: 5000
                  });

                  _this5.dialogRef.close();
                }, function (err) {
                  _this5.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].errorMessage, 'Dismiss', {
                    duration: 5000
                  });
                });
              } else {
                this.roleService.create(params).subscribe(function (data) {
                  _this5.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].chargerNCreate, 'Dismiss', {
                    duration: 5000
                  });

                  _this5.dialogRef.close();
                }, function (err) {
                  _this5.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].errorMessage, 'Dismiss', {
                    duration: 5000
                  });
                });
              }

              this.dialogRef.close(params);
            }

            return;
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('email').hasError('required') ? 'You must enter a value' : form.get('email').hasError('email') ? 'Not a valid email' : '';
          }
        }, {
          key: "assignValues",
          value: function assignValues(params) {
            this.form.get('code').setValue(params.data.name);
            this.form.get('name').setValue(params.data.name);
            this.form.get('description').setValue(params.data.description);
            this.status = params.data.status == 'Y' ? true : false;
          }
        }, {
          key: "updateStatus",
          value: function updateStatus(event) {
            this.status = event.checked;
            this.ref.checked = this.status;
          }
        }, {
          key: "getClients",
          value: function getClients() {
            var _this6 = this;

            this.clientService.getActiveClientsCW(this.localStorage.userId).subscribe(function (data) {
              _this6.clients = data;

              if (_this6.isEditMode) {
                var toSelect = _this6.clients.find(function (c) {
                  return c.id == _this6.params.data.client_id;
                });

                _this6.form.get('client').setValue(toSelect);
              }

              _this6.filteredOptionsClient = _this6.form.controls.client.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
                return typeof value === 'string' ? value : value.name;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (name) {
                return name ? _this6._filterClientModels(name) : _this6.clients;
              }));
            }, function (err) {});
          }
        }, {
          key: "displayClient",
          value: function displayClient(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "_filterClientModels",
          value: function _filterClientModels(name) {
            var filterValue = name.toLowerCase();
            return this.clients.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }]);

        return ViewDialogComponent;
      }();

      ViewDialogComponent.ɵfac = function ViewDialogComponent_Factory(t) {
        return new (t || ViewDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_user_role_service__WEBPACK_IMPORTED_MODULE_6__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_8__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ref = _t.first);
          }
        },
        decls: 52,
        vars: 14,
        consts: [["id", "dialog_action_close", "matTooltip", "Close window", 1, "material-icons-outlined", 2, "cursor", "pointer", "color", "white", 3, "click"], [1, "action_toolbar"], ["id", "forms", "fxLayout", "column", 1, "page-layout", "simple", "fullwidth"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", "name", "form", 1, "mat-card", "mat-elevation-z4", "p-24", 2, "padding-top", "8px", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "50", 1, "pr-4"], ["type", "text", "matInput", "", "formControlName", "client", "readonly", "", "autocomplete", "off", 3, "matAutocomplete"], [3, "displayWith"], ["clientAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 2, "display", "flex"], ["matSuffix", "", 1, "secondary-text"], ["matSuffix", "", "matTooltip", "Please enter client name", 1, "secondary-text"], [4, "ngIf"], ["matInput", "", "placeholder", "", "autocomplete", "off", "readonly", "", "formControlName", "code", "maxlength", "200"], ["matSuffix", "", "matTooltip", "Please enter code", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "name", "maxlength", "30", "readonly", "", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter name", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "description", "maxlength", "100", "autocomplete", "off", "readonly", ""], ["matSuffix", "", "matTooltip", "Please enter description", 1, "secondary-text"], ["disabled", "true", "fxFlex", "50", "color", "primary", 1, "example-margin", 2, "margin-bottom", "10px", 3, "checked", "change"], ["toggleElement", ""], ["fxLayout", "row", "fxLayoutAlign", "start center", 2, "margin-top", "10px"], ["mat-raised-button", "", "color", "accent", 1, "mr-8", 3, "click"], [3, "value"]],
        template: function ViewDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewDialogComponent_Template_mat_icon_click_0_listener() {
              return ctx.closeActionPanel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Manage Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Client");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-autocomplete", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ViewDialogComponent_mat_option_13_Template, 2, 2, "mat-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ViewDialogComponent_mat_error_20_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ViewDialogComponent_mat_error_27_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ViewDialogComponent_mat_error_28_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ViewDialogComponent_mat_error_36_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ViewDialogComponent_mat_error_37_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ViewDialogComponent_mat_error_44_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-slide-toggle", 20, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ViewDialogComponent_Template_mat_slide_toggle_change_46_listener($event) {
              return ctx.updateStatus($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewDialogComponent_Template_button_click_50_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayClient);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 12, ctx.filteredOptionsClient));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("client").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("code").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("code").hasError("pattern"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("name").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("name").hasError("pattern"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("description").hasError("pattern"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.status);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.status ? "Active" : "Inactive", " ");
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
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
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: app_shared_services_user_role_service__WEBPACK_IMPORTED_MODULE_6__["RoleService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
          }, {
            type: app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_8__["ClientService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, {
          ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["toggleElement"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Rl8u":
    /*!******************************************************************!*\
      !*** ./src/app/main/user-management/role/role-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: RoleRoutingModule */

    /***/
    function Rl8u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoleRoutingModule", function () {
        return RoleRoutingModule;
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


      var _role_crud_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./role-crud/routes */
      "Zkpj");
      /* harmony import */


      var _role_crud_role_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./role-crud/role-crud.component */
      "5ARe");
      /* harmony import */


      var _role_menu_role_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../role-menu/role-menu.component */
      "uXHb");
      /* harmony import */


      var app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/interceptors/auth-gaurd */
      "9gca");

      var routes = [{
        path: 'crud',
        component: _role_crud_role_crud_component__WEBPACK_IMPORTED_MODULE_3__["RoleCrudComponent"],
        canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        children: _role_crud_routes__WEBPACK_IMPORTED_MODULE_2__["TABS_DEMO_ROUTES"]
      }, {
        path: 'roleMenuMappings',
        component: _role_menu_role_menu_component__WEBPACK_IMPORTED_MODULE_4__["RoleMenuComponent"],
        canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
      }];

      var RoleRoutingModule = function RoleRoutingModule() {
        _classCallCheck(this, RoleRoutingModule);
      };

      RoleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: RoleRoutingModule
      });
      RoleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function RoleRoutingModule_Factory(t) {
          return new (t || RoleRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoleRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleRoutingModule, [{
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
    "VoIL":
    /*!************************************************************************************!*\
      !*** ./src/app/main/user-management/role/action-dialog/action-dialog.component.ts ***!
      \************************************************************************************/

    /*! exports provided: ActionDialogComponent */

    /***/
    function VoIL(module, __webpack_exports__, __webpack_require__) {
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var app_shared_services_user_role_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/services/user/role.service */
      "HJ+f");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/shared/services/client/client.service */
      "LKWI");
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

      var _c0 = ["toggleElement"];

      function ActionDialogComponent_mat_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r9.name, " ");
        }
      }

      function ActionDialogComponent_mat_error_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select client ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_error_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_error_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Special character are not allowed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_error_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_error_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Special character is not allowed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_error_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Special character is not allowed ");

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
        function ActionDialogComponent(fb, roleService, snackBar, clientService, dialogRef, data) {
          _classCallCheck(this, ActionDialogComponent);

          this.fb = fb;
          this.roleService = roleService;
          this.snackBar = snackBar;
          this.clientService = clientService;
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
            this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
            this.getClients();
            this.params = this.data;
            this.isEditMode = this.params.action == 'CREATE' ? false : true;
            this.form = this.fb.group({
              client: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z0-9 ]*$/)]],
              name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z0-9 ]*$/)]],
              description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z0-9 ]*$/)]]
            });

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

            if (this.form.valid) {
              var formValues = this.form.value;
              var params = {
                client_id: formValues.client.id,
                code: formValues.code,
                name: formValues.name,
                project_id: this.localStorage.project_id,
                description: formValues.description,
                status: this.status == true ? 'Y' : 'N' // tslint:disable-next-line: semicolon

              }; // tslint:disable-next-line: no-//

              if (this.isEditMode) {
                params.id = this.params.data.id, params.modify_by = this.localStorage.userId;
              } else {
                params.created_by = this.localStorage.userId;
              }

              if (this.isEditMode) {
                this.roleService.update(params).subscribe(function (data) {
                  _this7.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].recordUpdateMessage, 'Dismiss', {
                    duration: 5000
                  });

                  _this7.dialogRef.close();
                }, function (err) {
                  _this7.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].errorMessage, 'Dismiss', {
                    duration: 5000
                  });
                });
              } else {
                this.roleService.create(params).subscribe(function (data) {
                  _this7.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].chargerNCreate, 'Dismiss', {
                    duration: 5000
                  });

                  _this7.dialogRef.close();
                }, function (err) {
                  _this7.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].errorMessage, 'Dismiss', {
                    duration: 5000
                  });
                });
              }

              this.dialogRef.close(params);
            }

            return;
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('email').hasError('required') ? 'You must enter a value' : form.get('email').hasError('email') ? 'Not a valid email' : '';
          }
        }, {
          key: "assignValues",
          value: function assignValues(params) {
            this.form.get('code').setValue(params.data.code);
            this.form.get('name').setValue(params.data.name);
            this.form.get('description').setValue(params.data.description);
            this.status = params.data.status == 'Y' ? true : false;
          }
        }, {
          key: "updateStatus",
          value: function updateStatus(event) {
            this.status = event.checked;
            this.ref.checked = this.status;
          }
        }, {
          key: "getClients",
          value: function getClients() {
            var _this8 = this;

            this.clientService.getActiveClientsCW(this.localStorage.userId).subscribe(function (data) {
              _this8.clients = data;

              if (_this8.isEditMode) {
                var toSelect = _this8.clients.find(function (c) {
                  return c.id == _this8.params.data.client_id;
                });

                _this8.form.get('client').setValue(toSelect);
              }

              _this8.filteredOptionsClient = _this8.form.controls.client.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (value) {
                return typeof value === 'string' ? value : value.name;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (name) {
                return name ? _this8._filterClientModels(name) : _this8.clients;
              }));
            }, function (err) {});
          }
        }, {
          key: "displayClient",
          value: function displayClient(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "_filterClientModels",
          value: function _filterClientModels(name) {
            var filterValue = name.toLowerCase();
            return this.clients.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }]);

        return ActionDialogComponent;
      }();

      ActionDialogComponent.ɵfac = function ActionDialogComponent_Factory(t) {
        return new (t || ActionDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_user_role_service__WEBPACK_IMPORTED_MODULE_6__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_8__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ref = _t.first);
          }
        },
        decls: 54,
        vars: 14,
        consts: [["id", "dialog_action_close", "matTooltip", "Close window", 1, "material-icons-outlined", 2, "cursor", "pointer", "color", "white", 3, "click"], [1, "action_toolbar"], ["id", "forms", "fxLayout", "column", 1, "page-layout", "simple", "fullwidth"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", "name", "form", 1, "mat-card", "mat-elevation-z4", "p-24", 2, "padding-top", "8px", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "50", 1, "pr-4"], ["type", "text", "matInput", "", "formControlName", "client", "autocomplete", "off", "required", "", 3, "matAutocomplete"], [3, "displayWith"], ["clientAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 2, "display", "flex"], ["matSuffix", "", 1, "secondary-text"], ["matSuffix", "", "matTooltip", "Please enter client name", 1, "secondary-text"], [4, "ngIf"], ["matInput", "", "placeholder", "", "autocomplete", "off", "formControlName", "code", "maxlength", "200", "required", ""], ["matSuffix", "", "matTooltip", "Please enter code", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "name", "maxlength", "30", "required", "", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter name", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "description", "maxlength", "100", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter description", 1, "secondary-text"], ["fxFlex", "50", "color", "primary", 1, "example-margin", 2, "margin-bottom", "10px", 3, "checked", "change"], ["toggleElement", ""], ["fxLayout", "row", "fxLayoutAlign", "start center", 2, "margin-top", "10px"], ["mat-raised-button", "", "color", "accent", 1, "mr-8", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "mr-8", 3, "click"], [3, "value"]],
        template: function ActionDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionDialogComponent_Template_mat_icon_click_0_listener() {
              return ctx.closeActionPanel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Manage Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Client");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-autocomplete", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ActionDialogComponent_mat_option_13_Template, 2, 2, "mat-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ActionDialogComponent_mat_error_20_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ActionDialogComponent_mat_error_27_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ActionDialogComponent_mat_error_28_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ActionDialogComponent_mat_error_36_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ActionDialogComponent_mat_error_37_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ActionDialogComponent_mat_error_44_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-slide-toggle", 20, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ActionDialogComponent_Template_mat_slide_toggle_change_46_listener($event) {
              return ctx.updateStatus($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionDialogComponent_Template_button_click_50_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionDialogComponent_Template_button_click_52_listener() {
              return ctx.onYesClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayClient);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 12, ctx.filteredOptionsClient));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("client").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("code").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("code").hasError("pattern"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("name").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("name").hasError("pattern"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("description").hasError("pattern"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.status);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.status ? "Active" : "Inactive", " ");
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["AsyncPipe"]],
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
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: app_shared_services_user_role_service__WEBPACK_IMPORTED_MODULE_6__["RoleService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
          }, {
            type: app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_8__["ClientService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, {
          ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["toggleElement"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Zkpj":
    /*!***************************************************************!*\
      !*** ./src/app/main/user-management/role/role-crud/routes.ts ***!
      \***************************************************************/

    /*! exports provided: TABS_DEMO_ROUTES */

    /***/
    function Zkpj(module, __webpack_exports__, __webpack_require__) {
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
      "3grB");
      /* harmony import */


      var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../list/list.component */
      "n8sW");
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
    "n8sW":
    /*!******************************************************************!*\
      !*** ./src/app/main/user-management/role/list/list.component.ts ***!
      \******************************************************************/

    /*! exports provided: Role, ListComponent */

    /***/
    function n8sW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Role", function () {
        return Role;
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
      "VoIL");
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


      var _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../view-dialog/view-dialog.component */
      "NLQL");
      /* harmony import */


      var app_shared_services_user_role_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! app/shared/services/user/role.service */
      "HJ+f");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
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

      function ListComponent_th_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ID ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_td_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r16.id, " ");
        }
      }

      function ListComponent_th_16_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Role Name \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_16_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r19.changeVisibility("nameSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_th_16_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_th_16_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r21.filterEntity.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_16_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r23.changeVisibility("nameSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r18.filterEntity.name);
        }
      }

      function ListComponent_th_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_th_16_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_th_16_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.nameSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.nameSearch);
        }
      }

      function ListComponent_td_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r24.name, " ");
        }
      }

      function ListComponent_th_19_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Client \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_19_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r27.changeVisibility("clientSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_th_19_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_th_19_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r29.filterEntity.client_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_19_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r31.changeVisibility("clientSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r26.filterEntity.client_name);
        }
      }

      function ListComponent_th_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_th_19_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_th_19_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.clientSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.clientSearch);
        }
      }

      function ListComponent_td_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r32.client_name, " ");
        }
      }

      function ListComponent_th_22_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Code \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_22_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r35.changeVisibility("codeSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_th_22_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_th_22_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r37.filterEntity.code = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_22_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r39.changeVisibility("codeSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r34.filterEntity.code);
        }
      }

      function ListComponent_th_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_th_22_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_th_22_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.codeSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.codeSearch);
        }
      }

      function ListComponent_td_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r40 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r40.code, " ");
        }
      }

      function ListComponent_th_25_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_25_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r43.changeVisibility("descSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_th_25_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_th_25_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r45.filterEntity.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_25_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r47.changeVisibility("descSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r42.filterEntity.description);
        }
      }

      function ListComponent_th_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_th_25_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_th_25_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.descSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.descSearch);
        }
      }

      function ListComponent_td_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r48 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r48.description, " ");
        }
      }

      function ListComponent_th_28_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_28_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r51.changeVisibility("statusSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_th_28_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_th_28_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r53.filterEntity.statusString = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_28_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r55.changeVisibility("statusSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r50.filterEntity.statusString);
        }
      }

      function ListComponent_th_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_th_28_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_th_28_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.statusSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.statusSearch);
        }
      }

      function ListComponent_td_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r56 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", row_r56.status == "Y" ? "green" : "red");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r56.statusString, " ");
        }
      }

      function ListComponent_th_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_td_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_td_32_Template_mat_icon_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

            var element_r57 = ctx.$implicit;

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r58.viewDialog(element_r57);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_td_32_Template_mat_icon_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

            var element_r57 = ctx.$implicit;

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r60.openDialog("EDIT", element_r57);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_td_32_Template_mat_icon_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

            var element_r57 = ctx.$implicit;

            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r61["delete"](element_r57.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_tr_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 36);
        }
      }

      function ListComponent_tr_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 37);
        }
      }

      var _c0 = function _c0() {
        return [10, 30, 50, 100];
      };

      var Role = function Role() {
        _classCallCheck(this, Role);
      };
      /**
       * @title Data table with sorting, pagination, and filtering.
       */


      var ListComponent = /*#__PURE__*/function () {
        function ListComponent(roleService, dialog, snackBar) {
          _classCallCheck(this, ListComponent);

          // Create 100 users
          // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
          this.roleService = roleService;
          this.dialog = dialog;
          this.snackBar = snackBar;
          this.displayedColumns = ['name', 'client', 'code', 'description', 'status', 'action'];
          this.head = [['Role Name', 'Client', 'Code', 'Description', 'Status']];
          this.clientSearch = false;
          this.codeSearch = false;
          this.nameSearch = false;
          this.descSearch = false;
          this.statusSearch = false; // Assign the data to the data source for the table to render
        }

        _createClass(ListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
            this.getRolesCW();
            this.filterEntity = new Role();
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
          key: "getRolesCW",
          value: function getRolesCW() {
            var _this9 = this;

            this.roleService.getRolesCW(this.localStorage.userId, this.localStorage.project_id).subscribe(function (resp) {
              if (resp.data != null) {
                _this9.roles = resp.data;

                for (var i = 0; i < _this9.roles.length; i++) {
                  if (_this9.roles[i].status == 'N') {
                    _this9.roles[i].statusString = 'Inactive';
                  } else {
                    _this9.roles[i].statusString = 'Active';
                  }
                }

                _this9.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this9.roles);
                _this9.dataSource.paginator = _this9.paginator;
                _this9.dataSource.sort = _this9.sort;
              } else {
                _this9.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].NoRecordFoundMessage, 'Dismiss', {
                  duration: 5000
                });

                return;
              }
            }, function (err) {});
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var _this10 = this;

            this.confirmDialogRef = this.dialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__["FuseConfirmDialogComponent"], {
              disableClose: true
            }); //this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

            this.confirmDialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                _this10.roleService["delete"](id, _this10.localStorage.userId).subscribe(function (data) {
                  if (data.status == true) {
                    _this10.getRolesCW();

                    _this10.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].deleteMessage, 'Dismiss', {
                      duration: 5000
                    });
                  } else {
                    _this10.snackBar.open(data.message, 'Dismiss', {
                      duration: 5000
                    });
                  }
                }, function (err) {});
              }

              _this10.confirmDialogRef = null;
            });
          }
        }, {
          key: "viewDialog",
          value: function viewDialog(data) {
            var _this11 = this;

            var params = {
              action: 'View',
              data: data
            };
            var dialogRef = this.dialog.open(_view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_12__["ViewDialogComponent"], {
              width: '800px',
              data: params,
              autoFocus: false,
              panelClass: 'app-action-dialog',
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              _this11.getRolesCW();
            });
          }
        }, {
          key: "openDialog",
          value: function openDialog(action, data) {
            var _this12 = this;

            var params = {
              action: action,
              data: data
            };
            var dialogRef = this.dialog.open(_action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ActionDialogComponent"], {
              width: '800px',
              data: params,
              autoFocus: false,
              panelClass: 'app-action-dialog',
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              // this.moderate(result);
              _this12.getRolesCW();
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

            if (visibleOption == 'codeSearch') {
              this.codeSearch = !this.codeSearch;
              this.filterEntity.code = "";
            }

            if (visibleOption == 'nameSearch') {
              this.nameSearch = !this.nameSearch;
              this.filterEntity.name = "";
            }

            if (visibleOption == 'descSearch') {
              this.descSearch = !this.descSearch;
              this.filterEntity.description = "";
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

            for (var i = 0; i < this.roles.length; i++) {
              var role = this.roles[i]; //this.exportedData.push({name: `name${i}`, description: `description${i}`,
              //statusString: `statusString${i}`});

              var data = {
                'Role Name': role.name,
                'Client': role.client_name,
                'Code': role.code,
                'Description': role.description,
                'Status': role.statusString
              };
              this.exportedData.push(data);
            }

            var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].json_to_sheet(this.exportedData);
            var workBook = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].book_append_sheet(workBook, workSheet, 'SheetName');
            xlsx__WEBPACK_IMPORTED_MODULE_9__["writeFile"](workBook, 'Role.xlsx'); //XLSX.writeFileAsync('OCPP Logs.xlsx',workBook, this.cb)
            //this.preloader.close();
          }
        }, {
          key: "pdfExport",
          value: function pdfExport() {
            var _this13 = this;

            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_10__["jsPDF"]({// set needed dimensions for any elemen
            });
            this.exportedData = [];

            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              var chrger = this.dataSource.filteredData[i]; //this.exportedData.push({name: `name${i}`, description: `description${i}`,
              //statusString: `statusString${i}`});

              var data = [chrger.name, chrger.client_name, chrger.code, chrger.description, chrger.statusString];
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
                doc.text('Role Report', doc.internal.pageSize.getWidth() / 2, 11, {
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
                doc.text('Generated By:' + _this13.localStorage.f_Name, 195, 18, {
                  align: 'right'
                });
                doc = _this13.addWaterMark(doc);
              }
            }); // below line for Open PDF document in new tab

            doc.output('dataurlnewwindow'); // below line for Download PDF document  

            doc.save('Role report.pdf');
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
        return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_user_role_service__WEBPACK_IMPORTED_MODULE_13__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBar"]));
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
        decls: 36,
        vars: 7,
        consts: [[2, "text-align", "left", "margin-left", "10px", "margin-bottom", "10px", "margin-top", "10px"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Excel Download", 3, "click"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "PDF Download", 3, "click"], ["fxLayout", "row wrap", 1, "page-layout", "simple", "fullwidth", 2, "overflow", "scroll"], [1, "content", 2, "min-width", "auto"], ["mat-table", "", "matTableFilter", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "exampleEntity", "filterType"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "client"], ["matColumnDef", "code"], ["matColumnDef", "description"], ["matColumnDef", "status"], ["mat-cell", "", 3, "color", 4, "matCellDef"], ["matColumnDef", "action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["class", "custom_font_size", "style", "display: flex;", 4, "ngIf"], ["appearance", "outline", "class", "list_input", 4, "ngIf"], [1, "custom_font_size", 2, "display", "flex"], ["matSuffix", "", 3, "click"], ["appearance", "outline", 1, "list_input"], ["matInput", "", "placeholder", "Role Name", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Client", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Code", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Description", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Status", 3, "ngModel", "ngModelChange"], ["mat-header-cell", ""], ["color", "primary", "matTooltip", "View", 2, "cursor", "pointer", 3, "click"], ["color", "primary", "matTooltip", "Edit", 2, "cursor", "pointer", 3, "click"], ["color", "warn", "matTooltip", "Remove", 2, "cursor", "pointer", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ListComponent_th_13_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ListComponent_td_14_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ListComponent_th_16_Template, 3, 2, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ListComponent_td_17_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ListComponent_th_19_Template, 3, 2, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ListComponent_td_20_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ListComponent_th_22_Template, 3, 2, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ListComponent_td_23_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ListComponent_th_25_Template, 3, 2, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ListComponent_td_26_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ListComponent_th_28_Template, 3, 2, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ListComponent_td_29_Template, 2, 3, "td", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ListComponent_th_31_Template, 3, 0, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ListComponent_td_32_Template, 9, 0, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ListComponent_tr_33_Template, 1, 0, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ListComponent_tr_34_Template, 1, 0, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-paginator", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("exampleEntity", ctx.filterEntity)("filterType", ctx.filterType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], mat_table_filter__WEBPACK_IMPORTED_MODULE_6__["MatTableFilterDirective"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        styles: ["mat-form-field.list_input div.mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\nmat-form-field.list_input div.mat-form-field-infix {\n  padding: 0.5em 0 0.5em 0 !important;\n}\n\ntable {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUM7RUFDQyw0QkFBQTtBQVpGOztBQWVBO0VBQ0UsbUNBQUE7QUFaRjs7QUFjQTtFQUNJLFdBQUE7QUFYSjs7QUFjRTtFQUNFLFlBQUE7QUFYSiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGFibGUge1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIC5tYXQtZm9ybS1maWVsZCB7XHJcbi8vICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgdGQsIHRoIHtcclxuLy8gICAgIHdpZHRoOiAyNSU7XHJcbi8vICAgfVxyXG5cclxuIG1hdC1mb3JtLWZpZWxkLmxpc3RfaW5wdXQgIGRpdi5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xyXG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkLmxpc3RfaW5wdXQgZGl2Lm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICBwYWRkaW5nOiAwLjVlbSAwIDAuNWVtIDAgIWltcG9ydGFudDtcclxufVxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICJdfQ== */"],
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
            type: app_shared_services_user_role_service__WEBPACK_IMPORTED_MODULE_13__["RoleService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBar"]
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
    "uXHb":
    /*!***********************************************************************!*\
      !*** ./src/app/main/user-management/role-menu/role-menu.component.ts ***!
      \***********************************************************************/

    /*! exports provided: TodoItemNodeTest, ActionNode, TodoItemFlatNode, ActionMenuNode, ChecklistDatabase, RoleMenuComponent */

    /***/
    function uXHb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodoItemNodeTest", function () {
        return TodoItemNodeTest;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionNode", function () {
        return ActionNode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodoItemFlatNode", function () {
        return TodoItemFlatNode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionMenuNode", function () {
        return ActionMenuNode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChecklistDatabase", function () {
        return ChecklistDatabase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoleMenuComponent", function () {
        return RoleMenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _fuse_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fuse/animations */
      "PVWW");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "FvrZ");
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/tree */
      "8yBR");
      /* harmony import */


      var app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! app/shared/utils/message.constant */
      "AgqY");
      /* harmony import */


      var app_shared_services_menu_config_menu_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! app/shared/services/menu-config/menu-config.service */
      "E6JG");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! app/shared/services/client/client.service */
      "LKWI");
      /* harmony import */


      var app_shared_services_user_role_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! app/shared/services/user/role.service */
      "HJ+f");
      /* harmony import */


      var app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! app/shared/services/utility/utility.service */
      "xb2s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive */
      "EwFO");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");

      var _c0 = ["tree"];
      var _c1 = ["toggleElement"];
      var _c2 = ["toggleCollasped"];

      function RoleMenuComponent_mat_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r12.name, " ");
        }
      }

      function RoleMenuComponent_mat_error_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select client ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RoleMenuComponent_mat_option_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 38);

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

      function RoleMenuComponent_mat_error_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select client ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RoleMenuComponent_mat_tree_node_62_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree-node", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-checkbox", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RoleMenuComponent_mat_tree_node_62_Template_mat_checkbox_change_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var node_r14 = ctx.$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.todoLeafItemSelectionToggle(node_r14);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r14 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r9.checklistSelection.isSelected(node_r14));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](node_r14.item);
        }
      }

      function RoleMenuComponent_mat_tree_node_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree-node", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RoleMenuComponent_mat_tree_node_64_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree-node", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-checkbox", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RoleMenuComponent_mat_tree_node_64_Template_mat_checkbox_change_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var node_r18 = ctx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.todoItemSelectionToggle(node_r18);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r18 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Toggle " + node_r18.item);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.treeControl.isExpanded(node_r18) ? "expand_more" : "chevron_right", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r11.descendantsAllSelected(node_r18))("indeterminate", ctx_r11.descendantsPartiallySelected(node_r18));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](node_r18.item);
        }
      }

      var _c3 = function _c3() {
        return {
          x: "50px"
        };
      };

      var _c4 = function _c4(a1) {
        return {
          value: "*",
          params: a1
        };
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

      var TodoItemNodeTest = function TodoItemNodeTest() {
        _classCallCheck(this, TodoItemNodeTest);

        this.isSelected = false;
      };

      var ActionNode = function ActionNode() {
        _classCallCheck(this, ActionNode);
      };
      /** Flat to-do item node with expandable and level information */


      var TodoItemFlatNode = function TodoItemFlatNode() {
        _classCallCheck(this, TodoItemFlatNode);

        this.isSelected = false;
      };

      var ActionMenuNode = function ActionMenuNode() {
        _classCallCheck(this, ActionMenuNode);
      };

      var ChecklistDatabase = /*#__PURE__*/function () {
        function ChecklistDatabase(_menuConfigService, changeDetectorRef) {
          _classCallCheck(this, ChecklistDatabase);

          this._menuConfigService = _menuConfigService;
          this.changeDetectorRef = changeDetectorRef;
          this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
          this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
          this.initialize();
        }

        _createClass(ChecklistDatabase, [{
          key: "initialize",
          value: function initialize() {
            this.getRoleMenuList(this.localStorage.project_id, this.localStorage.client_id, this.localStorage.role_id);
          }
        }, {
          key: "getRoleMenuList",
          value: function getRoleMenuList(project_id, client_id, role_id) {
            var _this14 = this;

            this._menuConfigService.getMenusByClientIdWithAlreadyMappedToRole(project_id, client_id, role_id).subscribe(function (resp) {
              if (resp.status == true) {
                var menuConfigLit = [];
                var menuChildList = [];

                for (var index = 0; index < resp.data.length; index++) {
                  var menuCfg = resp.data[index];

                  if (menuCfg.parent_id == null) {
                    menuConfigLit.push(menuCfg);
                  } else {
                    var parentMenu = _this14.getParentMenu(menuConfigLit, menuCfg.parent_id);

                    menuChildList = parentMenu.children;

                    if (undefined == menuChildList) {
                      menuChildList = [];
                      parentMenu.children = menuChildList;
                    }

                    menuChildList.push(menuCfg);
                  }
                }

                _this14.changeDetectorRef.detectChanges();

                var data = _this14.buildFileTree(menuConfigLit, 0);

                _this14.dataChange.next(data);
              } else {}
            }, function (err) {});
          }
        }, {
          key: "getParentMenu",
          value: function getParentMenu(menuConfigList, parent_id) {
            var parentMenu;

            for (var index = 0; index < menuConfigList.length; index++) {
              var menuConfig = menuConfigList[index];

              if (menuConfig.menu_id == parent_id) {
                parentMenu = menuConfig;
                break;
              } else {
                var menuChildList = menuConfig.children;

                if (undefined != menuChildList) {
                  parentMenu = this.getParentMenu(menuChildList, parent_id);

                  if (parentMenu != undefined) {
                    break;
                  }
                }
              }
            }

            return parentMenu;
          }
        }, {
          key: "buildFileTree",
          value: function buildFileTree(menudata, level) {
            var todoItemList = [];

            for (var index = 0; index < menudata.length; index++) {
              var menuCfg = menudata[index];
              var node = new TodoItemFlatNode();
              node.item = menuCfg.title;
              node.id = menuCfg.id;
              node.title = menuCfg.title;
              node.menu_id = menuCfg.menu_id;
              node.map_id = menuCfg.map_id;
              node.parent_id = menuCfg.parent_id;
              node.rm_map_id = menuCfg.rm_map_id;
              this.changeDetectorRef.detectChanges();
              if (menuCfg.children != undefined) node.children = this.buildFileTree(menuCfg.children, level + 1);
              todoItemList.push(node);
            }

            return todoItemList;
          }
        }, {
          key: "insertItem",
          value: function insertItem(parent, name) {
            if (parent.children) {
              parent.children.push({
                item: name
              });
              this.dataChange.next(this.data);
            }
          }
        }, {
          key: "updateItem",
          value: function updateItem(node, name) {
            node.item = name;
            this.dataChange.next(this.data);
          }
        }, {
          key: "data",
          get: function get() {
            return this.dataChange.value;
          }
        }]);

        return ChecklistDatabase;
      }();

      ChecklistDatabase.ɵfac = function ChecklistDatabase_Factory(t) {
        return new (t || ChecklistDatabase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](app_shared_services_menu_config_menu_config_service__WEBPACK_IMPORTED_MODULE_10__["MenuConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      ChecklistDatabase.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ChecklistDatabase,
        factory: ChecklistDatabase.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChecklistDatabase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: app_shared_services_menu_config_menu_config_service__WEBPACK_IMPORTED_MODULE_10__["MenuConfigService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, null);
      })();

      var RoleMenuComponent = /*#__PURE__*/function () {
        function RoleMenuComponent(snackBar, menuConfigService, changeDetectorRef, fb, clientService, _database, roleService, _utilityService) {
          var _this15 = this;

          _classCallCheck(this, RoleMenuComponent);

          this.snackBar = snackBar;
          this.menuConfigService = menuConfigService;
          this.changeDetectorRef = changeDetectorRef;
          this.fb = fb;
          this.clientService = clientService;
          this._database = _database;
          this.roleService = roleService;
          this._utilityService = _utilityService;
          this.actionMenu = false;
          this.menuNode = false;
          this.flatNodeMap = new Map();
          this.menuAction = {
            name: 'select All',
            completed: false,
            subMenu: [{
              name: 'Add/Update',
              completed: false
            }, {
              name: 'Delete',
              completed: false
            }, {
              name: 'Download',
              completed: false
            }]
          };
          /** Map from nested node to flattened node. This helps us to keep the same object for selection */

          this.nestedNodeMap = new Map();
          /** A selected parent node to be inserted */

          this.selectedParent = null;
          /** The new item's name */

          this.newItemName = '';
          /** The selection for checklist */

          this.checklistSelection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](true
          /* multiple */
          );
          this.selectChange = false;
          this.collaspedChange = false;
          this.selectedMenus = [];

          this.getLevel = function (node) {
            return node.level;
          };

          this.isExpandable = function (node) {
            return node.expandable;
          };

          this.menu_id = function (node) {
            return node.menu_id;
          };

          this.parent_id = function (node) {
            return node.parent_id;
          };

          this.getChildren = function (node) {
            return node.children;
          };

          this.hasChild = function (_, _nodeData) {
            return _nodeData.expandable;
          };

          this.hasNoContent = function (_, _nodeData) {
            return _nodeData.item === '';
          };
          /**
           * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
           */


          this.transformer = function (node, level) {
            var _a;

            var existingNode = _this15.nestedNodeMap.get(node);

            var flatNode = existingNode && existingNode.item === node.item ? existingNode : new TodoItemFlatNode();
            flatNode.item = node.item;
            flatNode.level = level;
            flatNode.menu_id = node.menu_id;
            flatNode.parent_id = node.parent_id;
            flatNode.expandable = !!((_a = node.children) === null || _a === void 0 ? void 0 : _a.length);

            _this15.flatNodeMap.set(flatNode, node);

            _this15.nestedNodeMap.set(node, flatNode);

            if (node.rm_map_id != null) {
              _this15.nodeSelectionToggle(flatNode);
            }

            return flatNode;
          };

          this.allComplete = false;
          this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_8__["MatTreeFlattener"](this.transformer, this.getLevel, this.isExpandable, this.getChildren);
          this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["FlatTreeControl"](this.getLevel, this.isExpandable);
          this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_8__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
          this.getMenuListClientWise();
        }

        _createClass(RoleMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialize();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this16 = this;

            this._utilityService.activeMenuItems$.subscribe(function (menuItemSelecte) {
              _this16.menuArray = menuItemSelecte;

              if (_this16.menuArray == null || _this16.menuArray == undefined || _this16.menuArray.title == null || _this16.menuArray.title == undefined) {
                _this16.menuArray = JSON.parse(localStorage.getItem('activeMenuItems'));
              }

              _this16.changeDetectorRef.detectChanges();
            });

            this.treeControl.expandAll();
          }
        }, {
          key: "initialize",
          value: function initialize() {
            this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
            this.roleMenuForm = this.fb.group({
              client: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              role: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
            this.getClients();
            this.getRolesList(this.localStorage.client_id);
          }
        }, {
          key: "getMenuListClientWise",
          value: function getMenuListClientWise() {
            var _this17 = this;

            this._database.dataChange.subscribe(function (data) {
              _this17.dataSource.data = data;

              _this17.treeControl.expandAll();
            });
          }
        }, {
          key: "nodeSelectionToggle",
          value: function nodeSelectionToggle(node) {
            var _this$checklistSelect, _this$checklistSelect2;

            this.checklistSelection.toggle(node);
            var descendants = this.treeControl.getDescendants(node);
            this.checklistSelection.isSelected(node) ? (_this$checklistSelect = this.checklistSelection).select.apply(_this$checklistSelect, _toConsumableArray(descendants).concat([node])) : (_this$checklistSelect2 = this.checklistSelection).deselect.apply(_this$checklistSelect2, _toConsumableArray(descendants).concat([node]));
            this.changeDetectorRef.markForCheck();
          }
        }, {
          key: "checkParentIsSelected",
          value: function checkParentIsSelected(data) {
            var _this18 = this;

            var _loop = function _loop() {
              var node = data[k];

              if (node.children != undefined) {
                (function () {
                  var children = node.children;

                  _this18.checkParentIsSelected(children);

                  var result = false;

                  for (i = 0; i < children.length; i++) {
                    var isSelected = _this18.selectedMenus.filter(function (t) {
                      return children[i].menu_id == t.menu_id;
                    });

                    if (isSelected != null && isSelected.length > 0) {
                      result = true;
                      break;
                    }
                  }

                  if (result == true) {
                    var isAlreadyPush = _this18.selectedMenus.filter(function (t) {
                      return node.menu_id == t.menu_id;
                    });

                    if (isAlreadyPush == null || isAlreadyPush.length == 0) {
                      _this18.selectedMenus.push(node);
                    }
                  }
                })();
              }
            };

            for (var k = 0; k < data.length; k++) {
              var i;

              _loop();
            }
          }
        }, {
          key: "openSubmit",
          value: function openSubmit() {
            var _this19 = this;

            var formValues = this.roleMenuForm.value; ////

            this.selectedMenus = [];
            this.selectedMenus = _toConsumableArray(this.checklistSelection.selected);
            this.checkParentIsSelected(this.dataSource.data); //;

            var params = {
              role_id: formValues.role.id,
              menus: this.selectedMenus.map(function (v) {
                return {
                  menu_id: v.menu_id
                };
              }),
              status: "Y",
              created_by: this.localStorage.userId
            };
            this.menuConfigService.setRoleMenuMapping(params).subscribe(function (resp) {
              // 
              if (resp.status = true) {
                _this19.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_9__["MessageConstant"].roleMenuMappedSucess, 'Dismiss', {
                  duration: 5000
                });

                _this19._database.getRoleMenuList(_this19.localStorage.project_id, formValues.client.id, formValues.role.id);
              } else {
                _this19.snackBar.open('Please try again', 'Dismiss', {
                  duration: 5000
                });
              }
            }, function (err) {
              // 
              _this19.snackBar.open('Please try again', 'Dismiss', {
                duration: 5000
              });
            });
          }
        }, {
          key: "getClients",
          value: function getClients() {
            var _this20 = this;

            this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
            this.clientService.getActiveClientsCW(this.localStorage.userId).subscribe(function (data) {
              _this20.clients = data;

              var toSelect = _this20.clients.find(function (c) {
                return c.id == _this20.localStorage.client_id;
              });

              _this20.roleMenuForm.get('client').setValue(toSelect);

              _this20.selectedClientID = toSelect.id;
              _this20.filteredOptionsClient = _this20.roleMenuForm.controls.client.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (value) {
                return typeof value === 'string' ? value : value.name;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (name) {
                return name ? _this20._filterClientModels(name) : _this20.clients;
              }));
            }, function (err) {});
          }
        }, {
          key: "displayClient",
          value: function displayClient(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "_filterClientModels",
          value: function _filterClientModels(name) {
            var filterValue = name.toLowerCase();
            return this.clients.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "onClientChange",
          value: function onClientChange(value) {
            //this.dataSource.data =[];
            //this._database.dataChange.next(null);
            //this.checklistSelection.clear();
            //this.descendantsAllSelected( this.checklistSelection.);
            //this._database.getRoleMenuList(this.localStorage.project_id,value.id);
            this.getRolesList(value.id);
            this.roleMenuForm.get('role').setValue('');
            this.selectedClientID = value.id; //this.getMenuListClientWise();
          }
        }, {
          key: "getRolesList",
          value: function getRolesList(client_id) {
            var _this21 = this;

            this.roles = [];
            this.roleService.getActiveRolesByClientId(this.localStorage.project_id, client_id).subscribe(function (resp) {
              if (resp.status = true) {
                _this21.roles = resp.data;

                var toSelect = _this21.roles.find(function (c) {
                  return c.id == _this21.localStorage.role_id;
                });

                if (toSelect != null) {
                  if (toSelect.id = _this21.localStorage.role_id) {
                    _this21.roleMenuForm.get('role').setValue(toSelect);
                  }
                }

                _this21.filteredOptionsRole = _this21.roleMenuForm.controls.role.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (value) {
                  return typeof value === 'string' ? value : value.name;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (name) {
                  return name ? _this21._filterRoleModels(name) : _this21.roles;
                })); //this._database.getRoleMenuList(this.localStorage.project_id,client_id,toSelect.id); 
              }
            }, function (err) {});
          }
        }, {
          key: "displayRole",
          value: function displayRole(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "_filterRoleModels",
          value: function _filterRoleModels(name) {
            var filterValue = name.toLowerCase();
            return this.roles.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "onRoleChange",
          value: function onRoleChange(value) {
            this.checklistSelection.clear();

            this._database.getRoleMenuList(this.localStorage.project_id, this.selectedClientID, value.id);
          }
          /** Whether all the descendants of the node are selected. */
          // descendantsAllSelected(node: TodoItemFlatNode): boolean {
          //   const descendants = this.treeControl.getDescendants(node);
          //   if (!descendants.length) {
          //     return this.checklistSelection.isSelected(node);
          //   }
          //   const selected = this.checklistSelection.isSelected(node);
          //   const allSelected = descendants.every(child => this.checklistSelection.isSelected(child));
          //   if (!selected && allSelected) {
          //     this.checklistSelection.select(node);
          //   }
          //   return allSelected;
          // }

        }, {
          key: "descendantsAllSelected",
          value: function descendantsAllSelected(node) {
            var _this22 = this;

            var descendants = this.treeControl.getDescendants(node);
            var descAllSelected = descendants.length > 0 && descendants.every(function (child) {
              _this22.changeDetectorRef.markForCheck();

              return _this22.checklistSelection.isSelected(child);
            });
            return descAllSelected;
          }
          /** Whether part of the descendants are selected */

        }, {
          key: "descendantsPartiallySelected",
          value: function descendantsPartiallySelected(node) {
            var _this23 = this;

            var descendants = this.treeControl.getDescendants(node);
            var result = descendants.some(function (child) {
              return _this23.checklistSelection.isSelected(child);
            });
            return result && !this.descendantsAllSelected(node);
          }
          /** Toggle the to-do item selection. Select/deselect all the descendants node */

        }, {
          key: "todoItemSelectionToggle",
          value: function todoItemSelectionToggle(node) {
            var _this$checklistSelect3,
                _this$checklistSelect4,
                _this24 = this;

            this.checklistSelection.toggle(node);
            var descendants = this.treeControl.getDescendants(node);
            this.checklistSelection.isSelected(node) ? (_this$checklistSelect3 = this.checklistSelection).select.apply(_this$checklistSelect3, _toConsumableArray(descendants)) : (_this$checklistSelect4 = this.checklistSelection).deselect.apply(_this$checklistSelect4, _toConsumableArray(descendants)); // Force update for the parent

            descendants.forEach(function (child) {
              return _this24.checklistSelection.isSelected(child);
            });
            this.checkAllParentsSelection(node);
            this.actionMenu = true;
            this.menuNode = true;
          }
          /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */

        }, {
          key: "todoLeafItemSelectionToggle",
          value: function todoLeafItemSelectionToggle(node) {
            this.checklistSelection.toggle(node);
            this.checkAllParentsSelection(node);
          }
          /* Checks all the parents when a leaf node is selected/unselected */

        }, {
          key: "checkAllParentsSelection",
          value: function checkAllParentsSelection(node) {
            var parent = this.getParentNode(node);

            while (parent) {
              this.checkRootNodeSelection(parent);
              parent = this.getParentNode(parent);
            }

            this.actionMenu = true;
          }
          /** Check root node checked state and change it accordingly */

        }, {
          key: "checkRootNodeSelection",
          value: function checkRootNodeSelection(node) {
            var _this25 = this;

            var nodeSelected = this.checklistSelection.isSelected(node);
            var descendants = this.treeControl.getDescendants(node);
            var descAllSelected = descendants.length > 0 && descendants.every(function (child) {
              return _this25.checklistSelection.isSelected(child);
            });

            if (nodeSelected && !descAllSelected) {
              this.checklistSelection.deselect(node);
            } else if (!nodeSelected && descAllSelected) {
              this.checklistSelection.select(node);
            }
          }
          /* Get the parent node of a node */

        }, {
          key: "getParentNode",
          value: function getParentNode(node) {
            var currentLevel = this.getLevel(node);

            if (currentLevel < 1) {
              return null;
            }

            var startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

            for (var i = startIndex; i >= 0; i--) {
              var currentNode = this.treeControl.dataNodes[i];

              if (this.getLevel(currentNode) < currentLevel) {
                return currentNode;
              }
            }

            return null;
          }
          /** Select the category so we can insert the new item. */

        }, {
          key: "addNewItem",
          value: function addNewItem(node) {
            var parentNode = this.flatNodeMap.get(node);

            this._database.insertItem(parentNode, '');

            this.treeControl.expand(node);
          }
          /** Save the node to database */

        }, {
          key: "saveNode",
          value: function saveNode(node, itemValue) {
            var nestedNode = this.flatNodeMap.get(node);

            this._database.updateItem(nestedNode, itemValue);
          }
        }, {
          key: "updateAllComplete",
          value: function updateAllComplete() {
            this.allComplete = this.menuAction.subMenu != null && this.menuAction.subMenu.every(function (t) {
              return t.completed;
            });
          }
        }, {
          key: "someComplete",
          value: function someComplete(node) {
            var _this26 = this;

            var descendants = this.treeControl.getDescendants(node);
            var result = descendants.some(function (child) {
              return _this26.checklistSelection.isSelected(child);
            });
            return result && !this.descendantsAllSelected(node); // if (node.this.menuAction.subMenu == null) {
            // return false;
            // }
            //return node.this.menuAction.subMenu.filter(t => t.completed).length > 0 && !this.allComplete;
          }
        }, {
          key: "setAll",
          value: function setAll(completed) {
            this.allComplete = completed;

            if (this.menuAction.subMenu == null) {
              return;
            }

            this.menuAction.subMenu.forEach(function (t) {
              return t.completed = completed;
            });
          }
        }, {
          key: "updateSelectChange",
          value: function updateSelectChange(event) {
            this.selectChange = event.checked;
            this.ref.checked = this.selectChange;

            if (this.selectChange == true) {
              this.checklistSelection.clear();
              this.selectAll(); // this.treeControl.collapseAll();
            } else {
              this.unSelectAll();
              this.checklistSelection.clear(); //this.checklistSelection.selected
              //this.treeControl.expandAll();
            }
          }
        }, {
          key: "updatecollaspedChange",
          value: function updatecollaspedChange(event) {
            this.collaspedChange = event.checked;
            this.collaspedRef.checked = this.collaspedChange;

            if (this.collaspedChange == true) {
              this.treeControl.collapseAll();
            } else {
              this.treeControl.expandAll();
            }
          }
        }, {
          key: "selectAll",
          value: function selectAll() {
            for (var i = 0; i < this.treeControl.dataNodes.length; i++) {
              if (!this.checklistSelection.isSelected(this.treeControl.dataNodes[i])) this.checklistSelection.toggle(this.treeControl.dataNodes[i]);
              this.treeControl.expand(this.treeControl.dataNodes[i]);
            }
          }
        }, {
          key: "unSelectAll",
          value: function unSelectAll() {
            for (var i = 0; i < this.treeControl.dataNodes.length; i++) {
              if (!this.checklistSelection.isSelected(this.treeControl.dataNodes[i])) this.checklistSelection.toggle(this.treeControl.dataNodes[i]);
              this.treeControl.expand(this.treeControl.dataNodes[i]);
            }
          }
        }]);

        return RoleMenuComponent;
      }();

      RoleMenuComponent.ɵfac = function RoleMenuComponent_Factory(t) {
        return new (t || RoleMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_menu_config_menu_config_service__WEBPACK_IMPORTED_MODULE_10__["MenuConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_12__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ChecklistDatabase), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_user_role_service__WEBPACK_IMPORTED_MODULE_13__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_14__["UtilityService"]));
      };

      RoleMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RoleMenuComponent,
        selectors: [["app-role-menu"]],
        viewQuery: function RoleMenuComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tree = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ref = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.collaspedRef = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([ChecklistDatabase, _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])],
        decls: 65,
        vars: 28,
        consts: [[2, "display", "block", "width", "100%"], ["id", "", "fxLayout", "row", 1, "page-layout", "simple", "right-sidebar"], ["fusePerfectScrollbar", "", 1, "center"], ["fxLayout", "column", "fxLayoutAlign", "space-between", 1, "header", "accent", "px-24", "pt-16", "pb-0"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [1, "mat-display-1", "my-0", "my-sm-24", "welcome-message"], ["id", "forms", "fxLayout", "column", 1, "page-layout", "simple", "fullwidth"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", "name", "roleMenuForm", 1, "mat-card", "mat-elevation-z4", "p-24", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "30", 1, "pr-4"], ["type", "text", "matInput", "", "formControlName", "client", "autocomplete", "off", "required", "", 3, "matAutocomplete"], [3, "displayWith", "optionSelected"], ["clientAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 2, "display", "flex"], ["matSuffix", "", 1, "secondary-text"], ["matSuffix", "", "matTooltip", "Please enter client name", 1, "secondary-text"], [4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "role", "autocomplete", "off", "required", "", 3, "matAutocomplete"], ["roleAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please enter role name", 1, "secondary-text"], ["fxFlex", "20"], ["fxLayout", "row", "fxLayoutAlign", "start center", 2, "margin-bottom", "18px"], ["color", "primary", 1, "example-margin", 3, "checked", "change"], ["toggleElement", ""], ["toggleCollasped", ""], ["fxFlex", "20", 2, "margin-bottom", "18px"], ["mat-raised-button", "", "color", "primary", 1, "mr-8", 2, "float", "right", 3, "click"], ["fxFlex", "100", "fxFlex.lt-sm", "100", 2, "margin-top", "20px"], [1, "connector-toolbar", 2, "background-color", "#00acc1 !important", "color", "white"], [1, "m-0", "pl-16", "font-normal", "fz-1"], ["mat-icon-button", "", 1, "mr-16"], ["fxLayout", "row wrap", 2, "padding-top", "20px"], ["fxFlex", "100", "fxFlex.lt-sm", "100"], [3, "dataSource", "treeControl"], ["tree", ""], ["matTreeNodeToggle", "", "matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], [3, "value"], ["matTreeNodeToggle", "", "matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], [1, "checklist-leaf-node", 3, "checked", "change"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], [3, "checked", "indeterminate", "change"]],
        template: function RoleMenuComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Client");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-autocomplete", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function RoleMenuComponent_Template_mat_autocomplete_optionSelected_14_listener($event) {
              return ctx.onClientChange($event.option.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RoleMenuComponent_mat_option_16_Template, 2, 2, "mat-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "account_circle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RoleMenuComponent_mat_error_23_Template, 2, 0, "mat-error", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-autocomplete", 11, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function RoleMenuComponent_Template_mat_autocomplete_optionSelected_28_listener($event) {
              return ctx.onRoleChange($event.option.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RoleMenuComponent_mat_option_30_Template, 2, 2, "mat-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "account_circle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RoleMenuComponent_mat_error_37_Template, 2, 0, "mat-error", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-slide-toggle", 23, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RoleMenuComponent_Template_mat_slide_toggle_change_40_listener($event) {
              return ctx.updateSelectChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " \xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-slide-toggle", 23, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RoleMenuComponent_Template_mat_slide_toggle_change_44_listener($event) {
              return ctx.updatecollaspedChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoleMenuComponent_Template_button_click_48_listener() {
              return ctx.openSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-toolbar", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h6", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " \xA0Menu List ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-tree", 34, 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, RoleMenuComponent_mat_tree_node_62_Template, 4, 2, "mat-tree-node", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, RoleMenuComponent_mat_tree_node_63_Template, 2, 0, "mat-tree-node", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, RoleMenuComponent_mat_tree_node_64_Template, 6, 5, "mat-tree-node", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c3)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.menuArray == null ? null : ctx.menuArray.title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.roleMenuForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayClient);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 21, ctx.filteredOptionsClient));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.roleMenuForm.get("client").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayRole);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 23, ctx.filteredOptionsRole));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.roleMenuForm.get("client").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.selectChange);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.selectChange ? "Select All" : "Un Select All", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.collaspedChange);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.collaspedChange ? "Collasped" : "Un Collasped", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("align-self", "center");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.hasNoContent);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.hasChild);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutDirective"], _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_16__["FusePerfectScrollbarDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButton"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__["MatToolbar"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_8__["MatTree"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_8__["MatTreeNodeDef"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatError"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_8__["MatTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_8__["MatTreeNodeToggle"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_8__["MatTreeNodePadding"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__["MatCheckbox"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
        styles: [".fill-space {\n  flex: 1 1 auto;\n}\n\n.mat-toolbar-row, .mat-toolbar-single-row {\n  height: 40px !important;\n  border-radius: 10px;\n}\n\n#checkboxes label {\n  float: left;\n}\n\nul {\n  margin: 0;\n  list-style: none;\n  float: left;\n}\n\nli {\n  height: 30p;\n}\n\n.cb-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: left;\n  flex-flow: row;\n}\n\n.mat-checkbox {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccm9sZS1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksY0FBQTtBQURKOztBQUdFO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUNDO0VBQ0MsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUFBO0VBQ0UsV0FBQTtBQUdGOztBQURBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFJRjs7QUFEQTtFQUNFLGlCQUFBO0FBSUYiLCJmaWxlIjoicm9sZS1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGwtc3BhY2Uge1xyXG4gICAgLy8gVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LlxyXG4gICAgLy8gRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC5cclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuICAubWF0LXRvb2xiYXItcm93LCAubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XHJcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuI2NoZWNrYm94ZXMgbGFiZWwge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbiB1bCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxubGl7XHJcbiAgaGVpZ2h0OiAzMHA7XHJcbn1cclxuLmNiLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICBmbGV4LWZsb3c6IHJvdztcclxufVxyXG5cclxuLm1hdC1jaGVja2JveCB7XHJcbiAgbWFyZ2luLWxlZnQ6MjBweDtcclxufSBcclxuXHJcblxyXG4iXX0= */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleMenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-role-menu',
            templateUrl: './role-menu.component.html',
            styleUrls: ['./role-menu.component.scss'],
            providers: [ChecklistDatabase, _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
          }]
        }], function () {
          return [{
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"]
          }, {
            type: app_shared_services_menu_config_menu_config_service__WEBPACK_IMPORTED_MODULE_10__["MenuConfigService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_12__["ClientService"]
          }, {
            type: ChecklistDatabase
          }, {
            type: app_shared_services_user_role_service__WEBPACK_IMPORTED_MODULE_13__["RoleService"]
          }, {
            type: app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_14__["UtilityService"]
          }];
        }, {
          tree: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['tree']
          }],
          ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["toggleElement"]
          }],
          collaspedRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["toggleCollasped"]
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=role-role-module-es5.js.map