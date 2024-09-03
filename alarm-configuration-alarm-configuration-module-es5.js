(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alarm-configuration-alarm-configuration-module"], {
    /***/
    "31xo":
    /*!***************************************************************************!*\
      !*** ./src/app/main/asset/alarm-configuration/create/create.component.ts ***!
      \***************************************************************************/

    /*! exports provided: CreateComponent */

    /***/
    function xo(module, __webpack_exports__, __webpack_require__) {
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var app_shared_services_charger_type_charger_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/charger-type/charger-type.service */
      "zADy");
      /* harmony import */


      var app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/master/master.service */
      "auZQ");
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


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");

      var _c0 = ["toggleElement"];
      var _c1 = ["rfidToggleElement"];
      var _c2 = ["activeElement"];

      function CreateComponent_mat_option_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 30);

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

      function CreateComponent_mat_error_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select Model");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateComponent_mat_option_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r18.name, " ");
        }
      }

      function CreateComponent_mat_error_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select Client");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateComponent_mat_error_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateComponent_th_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Alarm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateComponent_td_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r19.alarm, " ");
        }
      }

      function CreateComponent_th_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateComponent_td_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-checkbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateComponent_th_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateComponent_td_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-checkbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateComponent_th_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "creativity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateComponent_td_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-checkbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateComponent_tr_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 33);
        }
      }

      function CreateComponent_tr_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 34);
        }
      }

      var ELEMENT_DATA = [{
        alarm: 'Alarm1',
        sms: 1.0079,
        email: 'H',
        creativity: 'kjhhb',
        model: 'model',
        client: 'c1',
        mobile: 54555
      }, {
        alarm: 'Alarm2',
        sms: 1.0079,
        email: 'H',
        creativity: 'kjhhb',
        model: 'model',
        client: 'c1',
        mobile: 54555
      }, {
        alarm: 'Alarm3',
        sms: 1.0079,
        email: 'H',
        creativity: 'kjhhb',
        model: 'model',
        client: 'c1',
        mobile: 54555
      }, {
        alarm: 'Alarm4',
        sms: 1.0079,
        email: 'H',
        creativity: 'kjhhb',
        model: 'model',
        client: 'c1',
        mobile: 54555
      }, {
        alarm: 'Alarm5',
        sms: 1.0079,
        email: 'H',
        creativity: 'kjhhb',
        model: 'model',
        client: 'c1',
        mobile: 54555
      }, {
        alarm: 'Alarm6',
        sms: 1.0079,
        email: 'H',
        creativity: 'kjhhb',
        model: 'model',
        client: 'c1',
        mobile: 54555
      }, {
        alarm: 'Alarm7',
        sms: 1.0079,
        email: 'H',
        creativity: 'kjhhb',
        model: 'model',
        client: 'c1',
        mobile: 54555
      }, {
        alarm: 'Alarm8',
        sms: 1.0079,
        email: 'H',
        creativity: 'kjhhb',
        model: 'model',
        client: 'c1',
        mobile: 54555
      }, {
        alarm: 'Alarm9',
        sms: 1.0079,
        email: 'H',
        creativity: 'kjhhb',
        model: 'model',
        client: 'c1',
        mobile: 54555
      }];

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
        //messageConstant = MessageConstant;
        function CreateComponent(fb, chargerTypeService, masterService, snackBar, router, clientService) {
          _classCallCheck(this, CreateComponent);

          this.fb = fb;
          this.chargerTypeService = chargerTypeService;
          this.masterService = masterService;
          this.snackBar = snackBar;
          this.router = router;
          this.clientService = clientService;
          this.displayedColumns = ['alarm', 'sms', 'email', 'creativity'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](ELEMENT_DATA);
          this.status = false;
        }

        _createClass(CreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialize();
          }
        }, {
          key: "initialize",
          value: function initialize() {
            this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
            this.form = this.fb.group({
              model: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              client: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/[0-9]/)]],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z0-9 ]*$/)]]
            });
            this.getChargingModel();
            this.getClient(); //this.getManufacturers();
            //this.getChargerModelTypes();
            //this.getCommunicationProtocols(); 
          }
          /*onSubmit(){
            //;
            if(this.form.valid){
              let formValues = this.form.value;
              
              let params : AlarmModel = {
                model : formValues.model,
                client : formValues.client ,
                mobile : formValues.mobile ,
                email : formValues.email ,
              }
          
              this.chargingModelService.create(params).subscribe(
                (data:any )=>{
                  this.snackBar.open(MessageConstant.chargerCreateMessage, 'Dismiss', { duration: 5000 });
                  this.router.navigate(['/assetManagement/alarmConfiguation/crud/list']);
          
                },
                (err)=>{
                  ////
                  this.snackBar.open(MessageConstant.errorMessage, 'Dismiss', { duration: 5000 });
                }
              )
            }
            else{
              return;
            }
          
          }*/

        }, {
          key: "abc",
          value: function abc() {
            this.form;
          }
        }, {
          key: "getClient",
          value: function getClient() {
            var _this = this;

            this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
            this.clientService.getActiveClientsCW(this.localStorage.userId).subscribe(function (data) {
              _this.clients = data;
              _this.filteredOptionsClient = _this.form.controls.client.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
                return typeof value === 'string' ? value : value.name;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (name) {
                return name ? _this._filterClients(name) : _this.clients;
              }));
            }, function (err) {});
          }
        }, {
          key: "getChargingModel",
          value: function getChargingModel() {
            var _this2 = this;

            this.masterService.getChargerModelTypes().subscribe(function (data) {
              _this2.chargerModelTypes = data;
              _this2.filteredOptionsModel = _this2.form.controls.chargerModelType.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
                return typeof value === 'string' ? value : value.name;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (name) {
                return name ? _this2._filterModel(name) : _this2.chargerModelTypes;
              }));
            }, function (err) {});
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('email').hasError('required') ? 'You must enter a value' : form.get('email').hasError('email') ? 'Not a valid email' : '';
          }
        }, {
          key: "displayModel",
          value: function displayModel(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "displayClient",
          value: function displayClient(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "_filterModel",
          value: function _filterModel(name) {
            var filterValue = name.toLowerCase();
            return this.chargerModelTypes.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "_filterClients",
          value: function _filterClients(name) {
            var filterValue = name.toLowerCase();
            return this.clients.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }]);

        return CreateComponent;
      }();

      CreateComponent.ɵfac = function CreateComponent_Factory(t) {
        return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_charger_type_charger_type_service__WEBPACK_IMPORTED_MODULE_4__["ChargerTypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_5__["MasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_8__["ClientService"]));
      };

      CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateComponent,
        selectors: [["app-create"]],
        viewQuery: function CreateComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ref = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rfid = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.active = _t.first);
          }
        },
        decls: 60,
        vars: 17,
        consts: [["id", "forms", "fxLayout", "column", 1, "page-layout", "simple", "fullwidth"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", "name", "form", 1, "mat-card", "mat-elevation-z4", "p-24", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "50", 1, "pr-4"], ["type", "text", "matInput", "", "formControlName", "model", "autocomplete", "off", "required", "", 3, "matAutocomplete"], ["matSuffix", "", 1, "secondary-text"], [3, "displayWith"], ["modelAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", "matTooltip", "Please select model", 1, "secondary-text"], [4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "client", "autocomplete", "off", "required", "", 3, "matAutocomplete"], ["clientAuto", "matAutocomplete"], ["matInput", "", "placeholder", "", "formControlName", "mobile", "maxlength", "10", "autocomplete", "off"], ["matInput", "", "placeholder", "", "formControlName", "email", "maxlength", "50", "required", "", "autocomplete", "off"], ["fxLayout", "row wrap", 1, "page-layout", "simple", "fullwidth", 2, "overflow", "scroll"], [1, "content", 2, "min-width", "auto"], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "alarm"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "sms"], ["matColumnDef", "email"], ["matColumnDef", "creativity"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["mat-raised-button", "", "color", "primary", 1, "mr-8"], ["mat-raised-button", "", "color", "warn", "routerLink", "/assetManagement/alarmConfiguation/crud/list", 1, "mr-8"], [3, "value"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
        template: function CreateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Model");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-autocomplete", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CreateComponent_mat_option_11_Template, 2, 2, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "model_training");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CreateComponent_mat_error_15_Template, 2, 0, "mat-error", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Client");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-autocomplete", 6, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CreateComponent_mat_option_24_Template, 2, 2, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CreateComponent_mat_error_26_Template, 2, 0, "mat-error", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, CreateComponent_mat_error_36_Template, 2, 0, "mat-error", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "table", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](41, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, CreateComponent_th_42_Template, 2, 0, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, CreateComponent_td_43_Template, 2, 1, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](44, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, CreateComponent_th_45_Template, 2, 0, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, CreateComponent_td_46_Template, 2, 0, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](47, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, CreateComponent_th_48_Template, 2, 0, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, CreateComponent_td_49_Template, 2, 0, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](50, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, CreateComponent_th_51_Template, 2, 0, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, CreateComponent_td_52_Template, 2, 0, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, CreateComponent_tr_53_Template, 1, 0, "tr", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, CreateComponent_tr_54_Template, 1, 0, "tr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayModel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 13, ctx.filteredOptionsModel));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("model").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayClient);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 15, ctx.filteredOptionsClient));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("client").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("email").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"]],
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
            type: app_shared_services_charger_type_charger_type_service__WEBPACK_IMPORTED_MODULE_4__["ChargerTypeService"]
          }, {
            type: app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_5__["MasterService"]
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
          }],
          rfid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["rfidToggleElement"]
          }],
          active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["activeElement"]
          }]
        });
      })();
      /***/

    },

    /***/
    "62qQ":
    /*!***********************************************************************************!*\
      !*** ./src/app/main/asset/alarm-configuration/alarm-configuration-crud/routes.ts ***!
      \***********************************************************************************/

    /*! exports provided: TABS_DEMO_ROUTES */

    /***/
    function qQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TABS_DEMO_ROUTES", function () {
        return TABS_DEMO_ROUTES;
      });
      /* harmony import */


      var _create_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../create/create.component */
      "31xo");
      /* harmony import */


      var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../list/list.component */
      "j5Iw");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var TABS_DEMO_ROUTES = [{
        path: 'create',
        component: _create_create_component__WEBPACK_IMPORTED_MODULE_0__["CreateComponent"]
      }, {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"]
      }, {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }];
      /***/
    },

    /***/
    "Hm2W":
    /*!*************************************************************************************!*\
      !*** ./src/app/main/asset/alarm-configuration/view-dialog/view-dialog.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: ViewDialogComponent */

    /***/
    function Hm2W(module, __webpack_exports__, __webpack_require__) {
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


      var app_shared_utils_validation_patterns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/utils/validation-patterns */
      "PNWe");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/utils/message.constant */
      "AgqY");
      /* harmony import */


      var _fuse_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @fuse/animations */
      "PVWW");
      /* harmony import */


      var app_shared_services_charger_type_charger_type_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/shared/services/charger-type/charger-type.service */
      "zADy");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var app_shared_services_charging_model_charging_model_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! app/shared/services/charging-model/charging-model.service */
      "Okah");
      /* harmony import */


      var app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! app/shared/services/master/master.service */
      "auZQ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var _c0 = ["toggleElement"];
      var _c1 = ["rfidToggleElement"];
      var _c2 = ["activeElement"];

      function ViewDialogComponent_mat_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 39);

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

      function ViewDialogComponent_mat_error_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select charger model");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_option_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 39);

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

      function ViewDialogComponent_mat_error_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select manufacturer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_option_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 39);

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

      function ViewDialogComponent_mat_error_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select charger model type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_error_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Special Character are not allowed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_error_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_error_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Special Character are not allowed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_error_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Special Character are not allowed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_option_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r28.name, " ");
        }
      }

      function ViewDialogComponent_mat_error_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select communication protocol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_option_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var communication_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", communication_r29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](communication_r29);
        }
      }

      function ViewDialogComponent_mat_error_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter communication mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_error_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter card reader type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_error_85_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter no. of connectors ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_error_86_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Only numbers are allowed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_div_107_mat_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r40 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r40.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r40.name, " ");
        }
      }

      function ViewDialogComponent_div_107_mat_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r41 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r41.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r41.name, " ");
        }
      }

      function ViewDialogComponent_div_107_mat_option_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r42 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r42.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r42.name, " ");
        }
      }

      function ViewDialogComponent_div_107_mat_error_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Only numbers are allowed (e.g. 00.00)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_div_107_mat_error_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Only numbers are allowed (e.g. 00.00)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_div_107_mat_error_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Only numbers are allowed (e.g. 00.00)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_div_107_mat_error_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Only numbers are allowed (e.g. 00.00)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_div_107_mat_error_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Only numbers are allowed (e.g. 00.00)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_div_107_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Connector Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ViewDialogComponent_div_107_mat_option_8_Template, 2, 2, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "I/O Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ViewDialogComponent_div_107_mat_option_13_Template, 2, 2, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Current Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-select", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ViewDialogComponent_div_107_mat_option_18_Template, 2, 2, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Voltage(V)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ViewDialogComponent_div_107_mat_error_23_Template, 2, 0, "mat-error", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Phase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ViewDialogComponent_div_107_mat_error_28_Template, 2, 0, "mat-error", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Max. Amp.(A)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ViewDialogComponent_div_107_mat_error_34_Template, 2, 0, "mat-error", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Power(KW)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ViewDialogComponent_div_107_mat_error_39_Template, 2, 0, "mat-error", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Frequency(Hz)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ViewDialogComponent_div_107_mat_error_44_Template, 2, 0, "mat-error", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cf_r30 = ctx.$implicit;
          var i_r31 = ctx.index;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Connector ", i_r31 + 1, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.connectorTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.ioTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.currentTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cf_r30.get("voltage").errors == null ? null : cf_r30.get("voltage").errors.pattern);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cf_r30.get("phase").errors == null ? null : cf_r30.get("phase").errors.pattern);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cf_r30.get("maxAmp").errors == null ? null : cf_r30.get("maxAmp").errors.pattern);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cf_r30.get("power").errors == null ? null : cf_r30.get("power").errors.pattern);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cf_r30.get("frequency").errors == null ? null : cf_r30.get("frequency").errors.pattern);
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
        function ViewDialogComponent(fb, chargerTypeService, snackBar, dialogRef, data, chargingModelService, masterService, router) {
          _classCallCheck(this, ViewDialogComponent);

          this.fb = fb;
          this.chargerTypeService = chargerTypeService;
          this.snackBar = snackBar;
          this.dialogRef = dialogRef;
          this.data = data;
          this.chargingModelService = chargingModelService;
          this.masterService = masterService;
          this.router = router;
          this.isEditMode = false;
          this.batteryBackup = false;
          this.rfidCardReader = false;
          this.status = false;
          this.communicationModeData = ['LAN', 'SIM', 'WIFI'];
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
            this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
            this.form = this.fb.group({
              chargerType: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              manufacturer: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              chargerModelType: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              batteryBackup: [{
                value: false
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z0-9]*$/)]],
              name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z0-9 ]*$/)]],
              description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z0-9 ]*$/)]],
              communicationProtocol: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              communicationMode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              cardReaderType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              noOfConnectors: [{
                value: '',
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(app_shared_utils_validation_patterns__WEBPACK_IMPORTED_MODULE_3__["PATTERNS"].ONLY_NUMBERS)]],
              connectorForm: this.fb.array([this.createConnectorFG()])
            });
            this.getChargetTypes();
            this.getManufacturers();
            this.getChargerModelTypes();
            this.getCommunicationProtocols();
            this.getConnectorTypes();
            this.getIOTypes();
            this.getCurrentTypes();
            this.form.get('noOfConnectors').setValue(this.form.value.connectorForm.length);

            if (this.isEditMode) {
              this.assignValues(this.params);
            }

            this.filteredOptions();
          }
        }, {
          key: "createConnectorFG",
          value: function createConnectorFG() {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              connectorType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
              ioType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
              currentType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
              voltage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(app_shared_utils_validation_patterns__WEBPACK_IMPORTED_MODULE_3__["PATTERNS"].THREE_DIGIT_DECIMAL)]),
              phase: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(app_shared_utils_validation_patterns__WEBPACK_IMPORTED_MODULE_3__["PATTERNS"].THREE_DIGIT_DECIMAL)]),
              maxAmp: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(app_shared_utils_validation_patterns__WEBPACK_IMPORTED_MODULE_3__["PATTERNS"].THREE_DIGIT_DECIMAL)]),
              power: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(app_shared_utils_validation_patterns__WEBPACK_IMPORTED_MODULE_3__["PATTERNS"].THREE_DIGIT_DECIMAL)]),
              frequency: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(app_shared_utils_validation_patterns__WEBPACK_IMPORTED_MODULE_3__["PATTERNS"].THREE_DIGIT_DECIMAL)])
            });
          }
        }, {
          key: "addConnectorFG",
          value: function addConnectorFG() {
            var connectorForm = this.form.get('connectorForm');
            connectorForm.push(this.createConnectorFG());
            this.form.get('noOfConnectors').setValue(this.form.value.connectorForm.length);
          }
        }, {
          key: "removeConnectorFG",
          value: function removeConnectorFG(i) {
            var connectorForm = this.form.get('connectorForm');

            if (connectorForm.length > 1) {
              connectorForm.removeAt(i);
            } else {
              connectorForm.reset();
            }

            this.form.get('noOfConnectors').setValue(this.form.value.connectorForm.length);
          }
        }, {
          key: "getChargetTypes",
          value: function getChargetTypes() {
            var _this3 = this;

            this.chargerTypeService.getChargerTypes().subscribe(function (data) {
              _this3.chargerTypes = data;

              if (_this3.isEditMode) {
                var toSelect = _this3.chargerTypes.find(function (c) {
                  return c.id == _this3.params.data.charger_type_id;
                });

                _this3.form.get('chargerType').setValue(toSelect);

                _this3.filteredOptionsCharType = _this3.form.controls.chargerType.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), //tap(() => this.form.controls.chargerType.setValue(toSelect)),
                //tap(() => this.form.get('chargerType').setValue({name:toSelect.name, id:toSelect.id})),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
                  return typeof value === 'string' ? value : value.name;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (name) {
                  return name ? _this3._filterCharType(name) : _this3.chargerTypes;
                }));
              }
            }, function (err) {});
          }
        }, {
          key: "getManufacturers",
          value: function getManufacturers() {
            var _this4 = this;

            this.masterService.getManufacturers().subscribe(function (data) {
              _this4.manufacturers = data;

              if (_this4.isEditMode) {
                var toSelect = _this4.manufacturers.find(function (c) {
                  return c.id == _this4.params.data.manufacturer_id;
                });

                _this4.form.get('manufacturer').setValue(toSelect);

                _this4.filteredOptionsManufacturer = _this4.form.controls.manufacturer.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), // tap(() => this.form.controls.manufacturer.setValue(toSelect)),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
                  return typeof value === 'string' ? value : value.name;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (name) {
                  return name ? _this4._filterManfacturer(name) : _this4.manufacturers;
                }));
              }
            }, function (err) {});
          }
        }, {
          key: "getChargerModelTypes",
          value: function getChargerModelTypes() {
            var _this5 = this;

            this.masterService.getChargerModelTypes().subscribe(function (data) {
              _this5.chargerModelTypes = data;

              if (_this5.isEditMode) {
                var toSelect = _this5.chargerModelTypes.find(function (c) {
                  return c.id == _this5.params.data.charger_model_type_id;
                });

                _this5.form.get('chargerModelType').setValue(toSelect);

                _this5.filteredOptionsCharModelType = _this5.form.controls.chargerModelType.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), //tap(() => this.form.controls.chargerModelType.setValue(toSelect)),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
                  return typeof value === 'string' ? value : value.name;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (name) {
                  return name ? _this5._filterCharModelType(name) : _this5.chargerModelTypes;
                }));
              }
            }, function (err) {});
          }
        }, {
          key: "getCommunicationProtocols",
          value: function getCommunicationProtocols() {
            var _this6 = this;

            this.masterService.getCommunicationProtocols().subscribe(function (data) {
              _this6.communicationProtocols = data;

              if (_this6.isEditMode) {
                var toSelect = _this6.communicationProtocols.find(function (c) {
                  return c.id == _this6.params.data.communication_protocol_id;
                });

                _this6.form.get('communicationProtocol').setValue(toSelect);

                _this6.filteredOptionsCommunicationProto = _this6.form.controls.communicationProtocol.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), //tap(() => this.form.controls.communicationProtocol.setValue(toSelect)),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
                  return typeof value === 'string' ? value : value.name;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (name) {
                  return name ? _this6._filterCommunicationProtocol(name) : _this6.communicationProtocols;
                }));
              }
            }, function (err) {});
          }
        }, {
          key: "getConnectorTypes",
          value: function getConnectorTypes() {
            var _this7 = this;

            this.masterService.getConnectorTypes().subscribe(function (data) {
              _this7.connectorTypes = data; // if(this.isEditMode){
              //   
              //   const toSelect = this.manufacturers.find(c => c.id == this.params.data.manufacturer_id);
              //   this.form.get('manufacturer').setValue(toSelect.id);
              // }
            }, function (err) {});
          }
        }, {
          key: "getIOTypes",
          value: function getIOTypes() {
            var _this8 = this;

            this.masterService.getIOTypes().subscribe(function (data) {
              _this8.ioTypes = data; // if(this.isEditMode){
              //   
              //   const toSelect = this.manufacturers.find(c => c.id == this.params.data.manufacturer_id);
              //   this.form.get('manufacturer').setValue(toSelect.id);
              // }
            }, function (err) {});
          }
        }, {
          key: "getCurrentTypes",
          value: function getCurrentTypes() {
            var _this9 = this;

            this.masterService.getCurrentTypes().subscribe(function (data) {
              _this9.currentTypes = data; // if(this.isEditMode){
              //   
              //   const toSelect = this.manufacturers.find(c => c.id == this.params.data.manufacturer_id);
              //   this.form.get('manufacturer').setValue(toSelect.id);
              // }
            }, function (err) {});
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
            var _this10 = this;

            if (this.form.valid) {
              var formValues = this.form.value;
              var connectors = [];
              formValues.connectorForm.forEach(function (item) {
                connectors.push({
                  connector_type_id: item.connectorType,
                  io_type_id: item.ioType,
                  current_type_id: item.currentType,
                  voltage: item.voltage,
                  phase: item.phase,
                  max_amp: item.maxAmp,
                  power: item.power,
                  frequency: item.frequency,
                  status: 'Y',
                  created_by: _this10.localStorage.userId
                });
              });
              var params = {
                charger_type_id: formValues.chargerType.id,
                manufacturer_id: formValues.manufacturer.id,
                charger_model_type_id: formValues.chargerModelType.id,
                battery_backup: this.batteryBackup == true ? 'Y' : 'N',
                code: formValues.code,
                name: formValues.name,
                description: formValues.description,
                communication_protocol_id: formValues.communicationProtocol.id,
                communication_mode: formValues.communicationMode,
                card_reader_type: formValues.cardReaderType,
                no_of_connectors: formValues.connectorForm.length,
                connector_data: connectors,
                status: this.status == true ? 'Y' : 'N',
                created_by: this.localStorage.userId
              };

              if (this.isEditMode) {
                params.id = this.params.data.id, params.modify_by = this.localStorage.userId;
              } else {
                params.created_by = this.localStorage.userId;
              }

              if (this.isEditMode) {
                this.chargingModelService.update(params).subscribe(function (data) {
                  _this10.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].recordUpdateMessage, 'Dismiss', {
                    duration: 5000
                  });

                  _this10.dialogRef.close();
                }, function (err) {
                  _this10.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].errorMessage, 'Dismiss', {
                    duration: 5000
                  });
                });
              } else {
                this.chargingModelService.create(params).subscribe(function (data) {
                  _this10.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].chargerCreateMessage, 'Dismiss', {
                    duration: 5000
                  }); // this.router.navigate(['/chargingModel/crud/list']);


                  _this10.dialogRef.close();
                }, function (err) {
                  _this10.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].errorMessage, 'Dismiss', {
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
            var temp = new Array();
            temp = this.params.data.communication_mode.split(",");
            this.form.get('communicationMode').setValue(temp);
            this.form.get('cardReaderType').setValue(params.data.card_reader_type);
            this.form.get('noOfConnectors').setValue(params.data.no_of_connectors);
            this.status = params.data.status == 'Y' ? true : false;
            this.batteryBackup = params.data.battery_backup == 'Y' ? true : false;
            this.assignValuesFG(params.data.connector_data);
          }
        }, {
          key: "assignValuesFG",
          value: function assignValuesFG(data) {
            var _this11 = this;

            var connector_data = [];
            data.forEach(function (connector) {
              _this11.addConnectorFG();

              connector_data.push({
                id: connector.id,
                model_id: connector.model_id,
                connectorType: connector.connector_type_id,
                ioType: connector.io_type_id,
                currentType: connector.current_type_id,
                voltage: connector.voltage,
                phase: connector.phase,
                maxAmp: connector.max_amp,
                power: connector.power,
                frequency: connector.frequency,
                status: connector.status,
                created_date: connector.created_date,
                created_by: connector.created_by,
                modify_date: connector.modify_date,
                modify_by: connector.modify_by
              });
            });
            this.removeConnectorFG(data.length);
            var connectorForm = this.form.get('connectorForm');
            connectorForm.patchValue(connector_data);
          }
        }, {
          key: "clkBatteryBackup",
          value: function clkBatteryBackup(event) {
            this.batteryBackup = event.checked;
            this.ref.checked = this.batteryBackup;
          }
        }, {
          key: "clkRfidCardReader",
          value: function clkRfidCardReader(event) {
            this.rfidCardReader = event.checked;
            this.rfid.checked = this.rfidCardReader;
          }
        }, {
          key: "updateStatus",
          value: function updateStatus(event) {
            this.status = event.checked;
            this.active.checked = this.status;
          }
        }, {
          key: "filteredOptions",
          value: function filteredOptions() {
            var _this12 = this;

            this.filteredOptionsCharType = this.form.controls.chargerType.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
              return typeof value === 'string' ? value : value.name;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (name) {
              return name ? _this12._filterCharType(name) : _this12.chargerTypes;
            }));
            this.filteredOptionsManufacturer = this.form.controls.manufacturer.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
              return typeof value === 'string' ? value : value.name;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (name) {
              return name ? _this12._filterManfacturer(name) : _this12.manufacturers;
            }));
            this.filteredOptionsCharModelType = this.form.controls.chargerModelType.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
              return typeof value === 'string' ? value : value.name;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (name) {
              return name ? _this12._filterCharModelType(name) : _this12.chargerModelTypes;
            }));
            this.filteredOptionsCommunicationProto = this.form.controls.communicationProtocol.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
              return typeof value === 'string' ? value : value.name;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (name) {
              return name ? _this12._filterCommunicationProtocol(name) : _this12.communicationProtocols;
            }));
          }
        }, {
          key: "displayCharType",
          value: function displayCharType(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "displayManfacturer",
          value: function displayManfacturer(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "displayCharModelType",
          value: function displayCharModelType(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "displayCommunicationProto",
          value: function displayCommunicationProto(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "_filterCharType",
          value: function _filterCharType(name) {
            var filterValue = name.toLowerCase();
            return this.chargerTypes.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "_filterManfacturer",
          value: function _filterManfacturer(name) {
            var filterValue = name.toLowerCase();
            return this.manufacturers.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "_filterCharModelType",
          value: function _filterCharModelType(name) {
            var filterValue = name.toLowerCase();
            return this.chargerModelTypes.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "_filterCommunicationProtocol",
          value: function _filterCommunicationProtocol(name) {
            var filterValue = name.toLowerCase();
            return this.communicationProtocols.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }]);

        return ViewDialogComponent;
      }();

      ViewDialogComponent.ɵfac = function ViewDialogComponent_Factory(t) {
        return new (t || ViewDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_charger_type_charger_type_service__WEBPACK_IMPORTED_MODULE_7__["ChargerTypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_charging_model_charging_model_service__WEBPACK_IMPORTED_MODULE_9__["ChargingModelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_10__["MasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]));
      };

      ViewDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ViewDialogComponent,
        selectors: [["app-view-dialog"]],
        viewQuery: function ViewDialogComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ref = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rfid = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.active = _t.first);
          }
        },
        decls: 111,
        vars: 41,
        consts: [["id", "dialog_action_close", "matTooltip", "Close window", 1, "material-icons-outlined", 2, "cursor", "pointer", "color", "white", 3, "click"], [1, "action_toolbar"], [2, "padding", "24px", "max-height", "32vw", "overflow", "auto"], ["id", "forms", "fxLayout", "column", 1, "page-layout", "simple", "fullwidth", "mat-dialog"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", "name", "form", 1, "", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "25", 1, "pr-4"], ["type", "text", "matInput", "", "readonly", "", "formControlName", "chargerType", "autocomplete", "off", "required", "", 3, "matAutocomplete"], ["matSuffix", "", 1, "secondary-text"], [3, "displayWith"], ["chargerTypeAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["type", "text", "matInput", "", "readonly", "", "formControlName", "manufacturer", "autocomplete", "off", "required", "", 3, "matAutocomplete"], ["manufacturerAuto", "matAutocomplete"], ["type", "text", "readonly", "", "matInput", "", "formControlName", "chargerModelType", "autocomplete", "off", "required", "", 3, "matAutocomplete"], ["chargerModelTypeAuto", "matAutocomplete"], ["matInput", "", "placeholder", "", "readonly", "", "formControlName", "code", "maxlength", "20", "autocomplete", "off"], ["matInput", "", "placeholder", "", "readonly", "", "formControlName", "name", "maxlength", "50", "required", "", "autocomplete", "off"], ["matInput", "", "placeholder", "", "readonly", "", "formControlName", "description", "maxlength", "200", "autocomplete", "off"], ["type", "text", "matInput", "", "readonly", "", "formControlName", "communicationProtocol", "required", "", "autocomplete", "off", 3, "matAutocomplete"], ["communicationProtocolAuto", "matAutocomplete"], ["formControlName", "communicationMode", "disabled", "", "multiple", ""], ["matInput", "", "placeholder", "", "readonly", "", "formControlName", "cardReaderType", "autocomplete", "off"], ["matInput", "", "numbersOnly", "", "readonly", "", "placeholder", "", "formControlName", "noOfConnectors", "required", "", "autocomplete", "off"], ["fxFlex", "15", 1, "pr-4"], [1, "sm-txt", "mr-20"], ["disabled", "", "color", "primary", 1, "example-margin", "sm-txt", "mt-10", 3, "checked", "change"], ["toggleElement", ""], ["fxFlex", "17", 1, "pr-4"], ["rfidToggleElement", ""], ["fxFlex", "18", 1, "pr-4"], ["disabled", "", "color", "primary", 1, "example-margin", 3, "checked", "change"], ["activeElement", ""], [2, "box-shadow", "none!important"], ["formArrayName", "connectorForm"], ["fxLayout", "column", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["mat-raised-button", "", "type", "button", "color", "warn", 1, "mr-8", 3, "click"], [3, "value"], ["fxLayout", "column", 3, "formGroupName"], ["appearance", "outline", "fxFlex", "20", 1, "pr-4"], ["disabled", "", "formControlName", "connectorType"], ["disabled", "", "formControlName", "ioType"], ["disabled", "", "formControlName", "currentType"], ["matInput", "", "readonly", "", "formControlName", "voltage", "autocomplete", "off"], ["matInput", "", "readonly", "", "placeholder", "", "formControlName", "phase", "autocomplete", "off"], ["readonly", "", "matInput", "", "placeholder", "", "formControlName", "maxAmp", "autocomplete", "off"], ["matInput", "", "readonly", "", "placeholder", "", "formControlName", "power", "autocomplete", "off"], ["readonly", "", "matInput", "", "placeholder", "", "formControlName", "frequency", "autocomplete", "off"]],
        template: function ViewDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewDialogComponent_Template_mat_icon_click_0_listener() {
              return ctx.closeActionPanel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Variants");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Charger Model");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-autocomplete", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ViewDialogComponent_mat_option_16_Template, 2, 2, "mat-option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ViewDialogComponent_mat_error_18_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Manufacturer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-autocomplete", 9, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ViewDialogComponent_mat_option_27_Template, 2, 2, "mat-option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ViewDialogComponent_mat_error_29_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Charger Model Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-autocomplete", 9, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ViewDialogComponent_mat_option_38_Template, 2, 2, "mat-option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ViewDialogComponent_mat_error_40_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ViewDialogComponent_mat_error_45_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ViewDialogComponent_mat_error_51_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ViewDialogComponent_mat_error_52_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ViewDialogComponent_mat_error_57_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Communication Protocol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-autocomplete", 9, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, ViewDialogComponent_mat_option_66_Template, 2, 2, "mat-option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ViewDialogComponent_mat_error_68_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Communication Mode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-select", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, ViewDialogComponent_mat_option_73_Template, 2, 2, "mat-option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, ViewDialogComponent_mat_error_74_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Card Reader Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, ViewDialogComponent_mat_error_80_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "No. Of Connectors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, ViewDialogComponent_mat_error_85_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, ViewDialogComponent_mat_error_86_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-label", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Battery Backup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-slide-toggle", 27, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ViewDialogComponent_Template_mat_slide_toggle_change_90_listener($event) {
              return ctx.clkBatteryBackup($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-label", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "RFID card reader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-slide-toggle", 27, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ViewDialogComponent_Template_mat_slide_toggle_change_96_listener($event) {
              return ctx.clkRfidCardReader($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-label", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-slide-toggle", 32, 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ViewDialogComponent_Template_mat_slide_toggle_change_102_listener($event) {
              return ctx.updateStatus($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-card", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, ViewDialogComponent_div_107_Template, 45, 10, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "button", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewDialogComponent_Template_button_click_109_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);

            var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayCharType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 33, ctx.filteredOptionsCharType));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("chargerType").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayManfacturer);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 35, ctx.filteredOptionsManufacturer));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("manufacturer").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayCharModelType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 37, ctx.filteredOptionsCharModelType));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("chargerModelType").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("code").hasError("pattern"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("name").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("name").hasError("pattern"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("description").hasError("pattern"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayCommunicationProto);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](67, 39, ctx.filteredOptionsCommunicationProto));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("communicationProtocol").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.communicationModeData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("communicationMode").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("cardReaderType").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("noOfConnectors").errors == null ? null : ctx.form.get("noOfConnectors").errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("noOfConnectors").errors == null ? null : ctx.form.get("noOfConnectors").errors.pattern);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.batteryBackup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.batteryBackup ? "Yes" : "No", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.rfidCardReader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.rfidCardReader ? "Yes" : "No", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.status);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.status ? "Active" : "Inactive", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.form.get("connectorForm")["controls"]);
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatSuffix"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelect"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["AsyncPipe"]],
        styles: [".mat-dialog {\n  margin: 0 -24px;\n  padding: 0 24px;\n  max-height: 65vh;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHZpZXctZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJ2aWV3LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9ne1xyXG4gICAgbWFyZ2luOiAwIC0yNHB4O1xyXG4gICAgcGFkZGluZzogMCAyNHB4O1xyXG4gICAgbWF4LWhlaWdodDogNjV2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59Il19 */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_6__["fuseAnimations"]
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
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_6__["fuseAnimations"]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: app_shared_services_charger_type_charger_type_service__WEBPACK_IMPORTED_MODULE_7__["ChargerTypeService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: app_shared_services_charging_model_charging_model_service__WEBPACK_IMPORTED_MODULE_9__["ChargingModelService"]
          }, {
            type: app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_10__["MasterService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
          }];
        }, {
          ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["toggleElement"]
          }],
          rfid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["rfidToggleElement"]
          }],
          active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["activeElement"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Pq8p":
    /*!******************************************************************************!*\
      !*** ./src/app/main/asset/alarm-configuration/alarm-configuration.module.ts ***!
      \******************************************************************************/

    /*! exports provided: AlarmConfigurationModule */

    /***/
    function Pq8p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlarmConfigurationModule", function () {
        return AlarmConfigurationModule;
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
      "31xo");
      /* harmony import */


      var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list/list.component */
      "j5Iw");
      /* harmony import */


      var _action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./action-dialog/action-dialog.component */
      "zCgA");
      /* harmony import */


      var _alarm_configuration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./alarm-configuration-routing.module */
      "UsdY");
      /* harmony import */


      var _alarm_configuration_crud_alarm_configuration_crud_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./alarm-configuration-crud/alarm-configuration-crud.component */
      "bUb2");
      /* harmony import */


      var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fuse/shared.module */
      "5HBU");
      /* harmony import */


      var _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./view-dialog/view-dialog.component */
      "Hm2W");

      var COMPONENTS = [_alarm_configuration_crud_alarm_configuration_crud_component__WEBPACK_IMPORTED_MODULE_6__["AlarmConfigurationCrudComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_2__["CreateComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]];
      var COMPONENTS_DYNAMIC = [_view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ViewDialogComponent"], _action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ActionDialogComponent"]];

      var AlarmConfigurationModule = function AlarmConfigurationModule() {
        _classCallCheck(this, AlarmConfigurationModule);
      };

      AlarmConfigurationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AlarmConfigurationModule
      });
      AlarmConfigurationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AlarmConfigurationModule_Factory(t) {
          return new (t || AlarmConfigurationModule)();
        },
        imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _alarm_configuration_routing_module__WEBPACK_IMPORTED_MODULE_5__["AlarmConfigurationRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AlarmConfigurationModule, {
          declarations: [_alarm_configuration_crud_alarm_configuration_crud_component__WEBPACK_IMPORTED_MODULE_6__["AlarmConfigurationCrudComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_2__["CreateComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"], _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ViewDialogComponent"], _action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ActionDialogComponent"]],
          imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _alarm_configuration_routing_module__WEBPACK_IMPORTED_MODULE_5__["AlarmConfigurationRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlarmConfigurationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _alarm_configuration_routing_module__WEBPACK_IMPORTED_MODULE_5__["AlarmConfigurationRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"]],
            declarations: [COMPONENTS, COMPONENTS_DYNAMIC],
            entryComponents: [COMPONENTS_DYNAMIC]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "UsdY":
    /*!**************************************************************************************!*\
      !*** ./src/app/main/asset/alarm-configuration/alarm-configuration-routing.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: AlarmConfigurationRoutingModule */

    /***/
    function UsdY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlarmConfigurationRoutingModule", function () {
        return AlarmConfigurationRoutingModule;
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


      var _alarm_configuration_crud_alarm_configuration_crud_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./alarm-configuration-crud//alarm-configuration-crud.component */
      "bUb2");
      /* harmony import */


      var _alarm_configuration_crud_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./alarm-configuration-crud/routes */
      "62qQ");

      var routes = [{
        path: 'crud',
        component: _alarm_configuration_crud_alarm_configuration_crud_component__WEBPACK_IMPORTED_MODULE_2__["AlarmConfigurationCrudComponent"],
        children: _alarm_configuration_crud_routes__WEBPACK_IMPORTED_MODULE_3__["TABS_DEMO_ROUTES"]
      }];

      var AlarmConfigurationRoutingModule = function AlarmConfigurationRoutingModule() {
        _classCallCheck(this, AlarmConfigurationRoutingModule);
      };

      AlarmConfigurationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AlarmConfigurationRoutingModule
      });
      AlarmConfigurationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AlarmConfigurationRoutingModule_Factory(t) {
          return new (t || AlarmConfigurationRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AlarmConfigurationRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlarmConfigurationRoutingModule, [{
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
    "bUb2":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/main/asset/alarm-configuration/alarm-configuration-crud/alarm-configuration-crud.component.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: AlarmConfigurationCrudComponent, SunnyTabContentComponent, RainyTabContentComponent, FoggyTabContentComponent */

    /***/
    function bUb2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlarmConfigurationCrudComponent", function () {
        return AlarmConfigurationCrudComponent;
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


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive */
      "EwFO");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function AlarmConfigurationCrudComponent_a_8_Template(rf, ctx) {
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


      var AlarmConfigurationCrudComponent = /*#__PURE__*/function () {
        function AlarmConfigurationCrudComponent() {
          _classCallCheck(this, AlarmConfigurationCrudComponent);

          // Nav bar demo
          this.tabLinks = [{
            label: 'Alarm Configuration',
            link: 'list'
          }, {
            label: 'Add New',
            link: 'create'
          }];
        }

        _createClass(AlarmConfigurationCrudComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.menuArray = JSON.parse(localStorage.getItem('activeMenuItems'));
          }
        }]);

        return AlarmConfigurationCrudComponent;
      }();

      AlarmConfigurationCrudComponent.ɵfac = function AlarmConfigurationCrudComponent_Factory(t) {
        return new (t || AlarmConfigurationCrudComponent)();
      };

      AlarmConfigurationCrudComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AlarmConfigurationCrudComponent,
        selectors: [["app-alarm-configuration-crud"]],
        decls: 10,
        vars: 6,
        consts: [[2, "display", "block", "width", "100%"], ["id", "", "fxLayout", "row", 1, "page-layout", "simple", "right-sidebar"], ["fusePerfectScrollbar", "", 1, "center"], ["fxLayout", "column", "fxLayoutAlign", "space-between", 1, "header", "accent", "px-24", "pt-16", "pb-0"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [1, "mat-display-1", "my-0", "my-sm-24", "welcome-message"], ["mat-tab-nav-bar", "", "aria-label", "weather navigation links"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active"], ["rla", "routerLinkActive"]],
        template: function AlarmConfigurationCrudComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AlarmConfigurationCrudComponent_a_8_Template, 3, 3, "a", 7);

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
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_3__["FusePerfectScrollbarDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabNav"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabLink"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGFybS1jb25maWd1cmF0aW9uLWNydWQuY29tcG9uZW50LnNjc3MifQ== */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlarmConfigurationCrudComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-alarm-configuration-crud',
            templateUrl: './alarm-configuration-crud.component.html',
            styleUrls: ['./alarm-configuration-crud.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
          }]
        }], null, null);
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
    "j5Iw":
    /*!***********************************************************************!*\
      !*** ./src/app/main/asset/alarm-configuration/list/list.component.ts ***!
      \***********************************************************************/

    /*! exports provided: ChargingModel, ListComponent */

    /***/
    function j5Iw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChargingModel", function () {
        return ChargingModel;
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
      "zCgA");
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
      "Hm2W");
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! xlsx */
      "EUZL");
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var app_shared_services_charging_model_charging_model_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! app/shared/services/charging-model/charging-model.service */
      "Okah");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");

      function ListComponent_th_10_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Code \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_10_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r16.changeVisibility("codeSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_th_10_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_th_10_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r18.filterEntity.code = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_10_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r20.changeVisibility("codeSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r15.filterEntity.code);
        }
      }

      function ListComponent_th_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_th_10_span_1_Template, 4, 0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_th_10_mat_form_field_2_Template, 4, 1, "mat-form-field", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.codeSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.codeSearch);
        }
      }

      function ListComponent_td_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r21.code, " ");
        }
      }

      function ListComponent_th_13_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_13_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r24.changeVisibility("nameSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_th_13_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_th_13_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r26.filterEntity.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_13_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r28.changeVisibility("nameSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r23.filterEntity.name);
        }
      }

      function ListComponent_th_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_th_13_span_1_Template, 4, 0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_th_13_mat_form_field_2_Template, 4, 1, "mat-form-field", 21);

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

      function ListComponent_td_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r29.name, " ");
        }
      }

      function ListComponent_th_16_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Charger Type \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_16_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r32.changeVisibility("chargerTypeSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_th_16_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_th_16_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r34.filterEntity.charger_type_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_16_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r36.changeVisibility("chargerTypeSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r31.filterEntity.charger_type_name);
        }
      }

      function ListComponent_th_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_th_16_span_1_Template, 4, 0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_th_16_mat_form_field_2_Template, 4, 1, "mat-form-field", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.chargerTypeSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.chargerTypeSearch);
        }
      }

      function ListComponent_td_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r37.charger_type_name, " ");
        }
      }

      function ListComponent_th_19_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Manufacturer \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_19_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r40.changeVisibility("manfactureSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_th_19_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_th_19_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r42.filterEntity.manufacturer_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_19_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r44.changeVisibility("manfactureSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r39.filterEntity.manufacturer_name);
        }
      }

      function ListComponent_th_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_th_19_span_1_Template, 4, 0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_th_19_mat_form_field_2_Template, 4, 1, "mat-form-field", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.manfactureSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.manfactureSearch);
        }
      }

      function ListComponent_td_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r45 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r45.manufacturer_name, " ");
        }
      }

      function ListComponent_th_22_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_22_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r48.changeVisibility("statusSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_th_22_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_th_22_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r50.filterEntity.statusString = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_22_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r52.changeVisibility("statusSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r47.filterEntity.statusString);
        }
      }

      function ListComponent_th_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_th_22_span_1_Template, 4, 0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_th_22_mat_form_field_2_Template, 4, 1, "mat-form-field", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.statusSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.statusSearch);
        }
      }

      function ListComponent_td_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r53 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", row_r53.status == "Y" ? "green" : "red");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r53.statusString, " ");
        }
      }

      function ListComponent_th_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_td_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_td_26_Template_mat_icon_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56);

            var element_r54 = ctx.$implicit;

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r55.viewDialog("VIEW", element_r54);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_td_26_Template_mat_icon_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56);

            var element_r54 = ctx.$implicit;

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r57.openDialog("EDIT", element_r54);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_td_26_Template_mat_icon_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56);

            var element_r54 = ctx.$implicit;

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r58["delete"](element_r54.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_tr_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 36);
        }
      }

      function ListComponent_tr_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 37);
        }
      }

      var _c0 = function _c0() {
        return [10, 30, 50, 100];
      };

      var ChargingModel = function ChargingModel() {
        _classCallCheck(this, ChargingModel);
      };
      /**
       * @title Data table with sorting, pagination, and filtering.
       */


      var ListComponent = /*#__PURE__*/function () {
        //messageConstant = MessageConstant;
        function ListComponent(chargingModelService, dialog, snackBar, cdr) {
          _classCallCheck(this, ListComponent);

          this.chargingModelService = chargingModelService;
          this.dialog = dialog;
          this.snackBar = snackBar;
          this.cdr = cdr;
          this.displayedColumns = ['code', 'name', 'charger_type_name', 'manufacturer_name', 'status', 'action'];
          this.codeSearch = false;
          this.nameSearch = false;
          this.chargerTypeSearch = false;
          this.manfactureSearch = false;
          this.cModelTypeSearch = false;
          this.batteryBackupSearch = false;
          this.communicationSearch = false;
          this.communicationModeSearch = false;
          this.cardReaderSearch = false;
          this.noConnectorSearch = false;
          this.statusSearch = false;
        }

        _createClass(ListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getChargingModels();
            this.filterEntity = new ChargingModel();
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
          key: "getChargingModels",
          value: function getChargingModels() {
            var _this13 = this;

            this.chargingModelService.getChargingModelsAll().subscribe(function (data) {
              //;
              if (data != null) {
                _this13.charginModels = data;

                for (var i = 0; i < _this13.charginModels.length; i++) {
                  if (_this13.charginModels[i].status == 'N') {
                    _this13.charginModels[i].statusString = 'Inactive';
                  } else {
                    _this13.charginModels[i].statusString = 'Active';
                  }
                }

                _this13.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this13.charginModels);
                _this13.dataSource.paginator = _this13.paginator;
                _this13.dataSource.sort = _this13.sort;

                _this13.cdr.detectChanges();
              } else {
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
                _this14.chargingModelService["delete"](id).subscribe(function (data) {
                  ;

                  _this14.getChargingModels();

                  _this14.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].deleteMessage, 'Dismiss', {
                    duration: 2000
                  });

                  _this14.cdr.detectChanges();
                }, function (err) {});
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
              _this15.getChargingModels();
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
              _this16.getChargingModels();

              _this16.cdr.detectChanges();
            });
          }
        }, {
          key: "changeVisibility",
          value: function changeVisibility(visibleOption, ev) {
            // visibleOption = !visibleOption;
            //nameSearch = false;
            //descSearch = false;
            ev.stopPropagation();

            if (visibleOption == 'codeSearch') {
              this.codeSearch = !this.codeSearch;
              this.filterEntity.code = "";
            }

            if (visibleOption == 'nameSearch') {
              this.nameSearch = !this.nameSearch;
              this.filterEntity.name = "";
            }

            if (visibleOption == 'chargerTypeSearch') {
              this.chargerTypeSearch = !this.chargerTypeSearch;
              this.filterEntity.charger_type_name = "";
            }

            if (visibleOption == 'manfactureSearch') {
              this.manfactureSearch = !this.manfactureSearch;
              this.filterEntity.manufacturer_name = "";
            }

            if (visibleOption == 'cModelTypeSearch') {
              this.cModelTypeSearch = !this.cModelTypeSearch;
              this.filterEntity.charger_type_name = "";
            }

            if (visibleOption == 'batteryBackupSearch') {
              this.batteryBackupSearch = !this.batteryBackupSearch;
              this.filterEntity.battery_backup = "";
            }

            if (visibleOption == 'communicationSearch') {
              this.communicationSearch = !this.communicationSearch;
              this.filterEntity.communication_protocol_name = "";
            }

            if (visibleOption == 'communicationModeSearch') {
              this.communicationModeSearch = !this.communicationModeSearch;
              this.filterEntity.communication_mode = "";
            }

            if (visibleOption == 'cardReaderSearch') {
              this.cardReaderSearch = !this.cardReaderSearch;
              this.filterEntity.card_reader_type = "";
            }

            if (visibleOption == 'noConnectorSearch') {
              this.noConnectorSearch = !this.noConnectorSearch;
              this.filterEntity.no_of_connectors = null;
            }

            if (visibleOption == 'statusSearch') {
              this.statusSearch = !this.statusSearch;
              this.filterEntity.statusString = "";
            }
          }
        }, {
          key: "tableExport",
          value: function tableExport() {
            // const tab = document.getElementById('mapTable');
            // const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(tab);//converts a DOM TABLE element to a worksheet
            // const wb: XLSX.WorkBook = XLSX.utils.book_new();
            // XLSX.utils.book_append_sheet(wb, ws, 'Mapped Charger');
            // /* save to file */
            // XLSX.writeFile(wb, 'Mapped Charger.xlsx');
            //this.preloader.open();
            this.exportedData = [];

            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              var chargerModel = this.dataSource.filteredData[i]; //this.exportedData.push({name: `name${i}`, description: `description${i}`,
              //statusString: `statusString${i}`});

              var data = {
                'Code': chargerModel.code,
                'Name': chargerModel.name,
                'Charger Type': chargerModel.charger_type_name,
                'Manufacturer': chargerModel.manufacturer_name,
                'Charger Model Type ': chargerModel.charger_model_type_name,
                'Battery Backup': chargerModel.battery_backup,
                'Communication Protocol': chargerModel.communication_protocol_name,
                'Communication Mode': chargerModel.communication_mode,
                'Card Reader Type': chargerModel.card_reader_type,
                'No Of Connectors': chargerModel.no_of_connectors,
                'Status': chargerModel.statusString
              };
              this.exportedData.push(data);
            }

            var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].json_to_sheet(this.exportedData);
            var workBook = xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].book_append_sheet(workBook, workSheet, 'SheetName');
            xlsx__WEBPACK_IMPORTED_MODULE_10__["writeFile"](workBook, 'Varients.xlsx'); //XLSX.writeFileAsync('OCPP Logs.xlsx',workBook, this.cb)
            //this.preloader.close();
          }
        }]);

        return ListComponent;
      }();

      ListComponent.ɵfac = function ListComponent_Factory(t) {
        return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_charging_model_charging_model_service__WEBPACK_IMPORTED_MODULE_11__["ChargingModelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
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
        decls: 30,
        vars: 7,
        consts: [[2, "text-align", "left", "margin-left", "10px", "margin-bottom", "10px", "margin-top", "10px"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["fxLayout", "row wrap", 1, "page-layout", "simple", "fullwidth", 2, "overflow", "scroll"], [1, "content", 2, "min-width", "auto"], [1, ""], ["mat-table", "", "matTableFilter", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "exampleEntity", "filterType"], ["matColumnDef", "code"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "charger_type_name"], ["matColumnDef", "manufacturer_name"], ["matColumnDef", "status"], ["mat-cell", "", 3, "color", 4, "matCellDef"], ["matColumnDef", "action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["class", "custom_font_size", "style", "display: flex;", 4, "ngIf"], ["appearance", "outline", "class", "list_input", 4, "ngIf"], [1, "custom_font_size", 2, "display", "flex"], ["matSuffix", "", 3, "click"], ["appearance", "outline", 1, "list_input"], ["matInput", "", "placeholder", "Code", 3, "ngModel", "ngModelChange"], ["mat-cell", ""], ["matInput", "", "placeholder", "Name", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Charger Type", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Manufacturer", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Status", 3, "ngModel", "ngModelChange"], ["mat-header-cell", ""], [1, "custom_font_size"], ["color", "primary", "matTooltip", "View", 2, "cursor", "pointer", 3, "click"], ["color", "primary", "matTooltip", "Edit", 2, "cursor", "pointer", 3, "click"], ["color", "warn", "matTooltip", "Remove", 2, "cursor", "pointer", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function ListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_button_click_1_listener() {
              return ctx.tableExport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "downloading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \xA0\xA0Export Excel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListComponent_th_10_Template, 3, 2, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ListComponent_td_11_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ListComponent_th_13_Template, 3, 2, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ListComponent_td_14_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ListComponent_th_16_Template, 3, 2, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ListComponent_td_17_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ListComponent_th_19_Template, 3, 2, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ListComponent_td_20_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ListComponent_th_22_Template, 3, 2, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ListComponent_td_23_Template, 2, 3, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ListComponent_th_25_Template, 3, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ListComponent_td_26_Template, 9, 0, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ListComponent_tr_27_Template, 1, 0, "tr", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ListComponent_tr_28_Template, 1, 0, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "mat-paginator", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("exampleEntity", ctx.filterEntity)("filterType", ctx.filterType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultLayoutDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], mat_table_filter__WEBPACK_IMPORTED_MODULE_6__["MatTableFilterDirective"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
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
            type: app_shared_services_charging_model_charging_model_service__WEBPACK_IMPORTED_MODULE_11__["ChargingModelService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBar"]
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
    "zCgA":
    /*!*****************************************************************************************!*\
      !*** ./src/app/main/asset/alarm-configuration/action-dialog/action-dialog.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: ActionDialogComponent */

    /***/
    function zCgA(module, __webpack_exports__, __webpack_require__) {
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


      var app_shared_utils_validation_patterns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/utils/validation-patterns */
      "PNWe");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/utils/message.constant */
      "AgqY");
      /* harmony import */


      var _fuse_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @fuse/animations */
      "PVWW");
      /* harmony import */


      var app_shared_services_charger_type_charger_type_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/shared/services/charger-type/charger-type.service */
      "zADy");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var app_shared_services_charging_model_charging_model_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! app/shared/services/charging-model/charging-model.service */
      "Okah");
      /* harmony import */


      var app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! app/shared/services/master/master.service */
      "auZQ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var _c0 = ["toggleElement"];
      var _c1 = ["rfidToggleElement"];
      var _c2 = ["activeElement"];

      function ActionDialogComponent_mat_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 50);

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

      function ActionDialogComponent_mat_error_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select charger model");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_option_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 50);

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

      function ActionDialogComponent_mat_error_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select manufacturer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_option_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 50);

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

      function ActionDialogComponent_mat_error_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select charger model type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_error_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Special Character are not allowed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_error_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_error_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Special Character are not allowed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_error_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Special Character are not allowed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_option_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r28.name, " ");
        }
      }

      function ActionDialogComponent_mat_error_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select communication protocol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_option_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var communication_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", communication_r29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](communication_r29);
        }
      }

      function ActionDialogComponent_mat_error_90_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter communication mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_error_98_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter card reader type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_error_105_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter no. of connectors ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_error_106_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Only numbers are allowed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_div_127_mat_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r40 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r40.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r40.name, " ");
        }
      }

      function ActionDialogComponent_div_127_mat_option_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r41 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r41.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r41.name, " ");
        }
      }

      function ActionDialogComponent_div_127_mat_option_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r42 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r42.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r42.name, " ");
        }
      }

      function ActionDialogComponent_div_127_mat_error_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Only numbers are allowed (e.g. 00.00)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_div_127_mat_error_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Only numbers are allowed (e.g. 00.00)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_div_127_mat_error_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Only numbers are allowed (e.g. 00.00)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_div_127_mat_error_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Only numbers are allowed (e.g. 00.00)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_div_127_mat_error_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Only numbers are allowed (e.g. 00.00)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_div_127_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Connector Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ActionDialogComponent_div_127_mat_option_8_Template, 2, 2, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "I/O Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-select", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ActionDialogComponent_div_127_mat_option_15_Template, 2, 2, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Current Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-select", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ActionDialogComponent_div_127_mat_option_22_Template, 2, 2, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Voltage(V)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ActionDialogComponent_div_127_mat_error_31_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Phase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-icon", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ActionDialogComponent_div_127_mat_error_38_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Max. Amp.(A)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ActionDialogComponent_div_127_mat_error_46_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Power(KW)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-icon", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ActionDialogComponent_div_127_mat_error_53_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-form-field", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Frequency(Hz)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-icon", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, ActionDialogComponent_div_127_mat_error_60_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-label", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Add Row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionDialogComponent_div_127_Template_button_click_64_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r43.addConnectorFG();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "add_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionDialogComponent_div_127_Template_button_click_67_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

            var i_r31 = ctx.index;

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r45.removeConnectorFG(i_r31);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cf_r30 = ctx.$implicit;
          var i_r31 = ctx.index;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Connector ", i_r31 + 1, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.connectorTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.ioTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.currentTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cf_r30.get("voltage").errors == null ? null : cf_r30.get("voltage").errors.pattern);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cf_r30.get("phase").errors == null ? null : cf_r30.get("phase").errors.pattern);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cf_r30.get("maxAmp").errors == null ? null : cf_r30.get("maxAmp").errors.pattern);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cf_r30.get("power").errors == null ? null : cf_r30.get("power").errors.pattern);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cf_r30.get("frequency").errors == null ? null : cf_r30.get("frequency").errors.pattern);
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
        // messageConstant = MessageConstant;
        function ActionDialogComponent(fb, chargerTypeService, snackBar, dialogRef, data, chargingModelService, masterService, router) {
          _classCallCheck(this, ActionDialogComponent);

          this.fb = fb;
          this.chargerTypeService = chargerTypeService;
          this.snackBar = snackBar;
          this.dialogRef = dialogRef;
          this.data = data;
          this.chargingModelService = chargingModelService;
          this.masterService = masterService;
          this.router = router;
          this.isEditMode = false;
          this.batteryBackup = false;
          this.rfidCardReader = false;
          this.status = false;
          this.communicationModeData = ['LAN', 'SIM', 'WIFI'];
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
            this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
            this.form = this.fb.group({
              chargerType: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              manufacturer: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              chargerModelType: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              batteryBackup: [{
                value: false
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z0-9]*$/)]],
              name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z0-9 ]*$/)]],
              description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z0-9 ]*$/)]],
              communicationProtocol: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              communicationMode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              cardReaderType: [''],
              noOfConnectors: [{
                value: '',
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(app_shared_utils_validation_patterns__WEBPACK_IMPORTED_MODULE_3__["PATTERNS"].ONLY_NUMBERS)]],
              connectorForm: this.fb.array([this.createConnectorFG()])
            });
            this.getChargetTypes();
            this.getManufacturers();
            this.getChargerModelTypes();
            this.getCommunicationProtocols();
            this.getConnectorTypes();
            this.getIOTypes();
            this.getCurrentTypes();
            this.form.get('noOfConnectors').setValue(this.form.value.connectorForm.length);

            if (this.isEditMode) {
              this.assignValues(this.params);
            }

            this.filteredOptions();
          }
        }, {
          key: "createConnectorFG",
          value: function createConnectorFG() {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              connectorType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
              ioType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
              currentType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
              voltage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(app_shared_utils_validation_patterns__WEBPACK_IMPORTED_MODULE_3__["PATTERNS"].THREE_DIGIT_DECIMAL)]),
              phase: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(app_shared_utils_validation_patterns__WEBPACK_IMPORTED_MODULE_3__["PATTERNS"].THREE_DIGIT_DECIMAL)]),
              maxAmp: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(app_shared_utils_validation_patterns__WEBPACK_IMPORTED_MODULE_3__["PATTERNS"].THREE_DIGIT_DECIMAL)]),
              power: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(app_shared_utils_validation_patterns__WEBPACK_IMPORTED_MODULE_3__["PATTERNS"].THREE_DIGIT_DECIMAL)]),
              frequency: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(app_shared_utils_validation_patterns__WEBPACK_IMPORTED_MODULE_3__["PATTERNS"].THREE_DIGIT_DECIMAL)])
            });
          }
        }, {
          key: "addConnectorFG",
          value: function addConnectorFG() {
            var connectorForm = this.form.get('connectorForm');
            connectorForm.push(this.createConnectorFG());
            this.form.get('noOfConnectors').setValue(this.form.value.connectorForm.length);
          }
        }, {
          key: "removeConnectorFG",
          value: function removeConnectorFG(i) {
            var connectorForm = this.form.get('connectorForm');

            if (connectorForm.length > 1) {
              connectorForm.removeAt(i);
            } else {
              connectorForm.reset();
            }

            this.form.get('noOfConnectors').setValue(this.form.value.connectorForm.length);
          }
        }, {
          key: "getChargetTypes",
          value: function getChargetTypes() {
            var _this17 = this;

            this.chargerTypeService.getActiveChargerTypes().subscribe(function (resp) {
              if (resp.status == true) {
                if (resp.data.length > 0) {
                  _this17.chargerTypes = resp.data;

                  if (_this17.isEditMode) {
                    var toSelect = _this17.chargerTypes.find(function (c) {
                      return c.id == _this17.params.data.charger_type_id;
                    });

                    _this17.form.get('chargerType').setValue(toSelect);

                    _this17.filteredOptionsCharType = _this17.form.controls.chargerType.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), //tap(() => this.form.controls.chargerType.setValue(toSelect)),
                    //tap(() => this.form.get('chargerType').setValue({name:toSelect.name, id:toSelect.id})),
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
                      return typeof value === 'string' ? value : value.name;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (name) {
                      return name ? _this17._filterCharType(name) : _this17.chargerTypes;
                    }));
                  }
                } else {
                  _this17.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].NoRecordFoundMessage, 'Dismiss', {
                    duration: 2000
                  });
                }
              }
            }, function (err) {});
          }
        }, {
          key: "getManufacturers",
          value: function getManufacturers() {
            var _this18 = this;

            this.masterService.getManufacturers().subscribe(function (data) {
              _this18.manufacturers = data;

              if (_this18.isEditMode) {
                var toSelect = _this18.manufacturers.find(function (c) {
                  return c.id == _this18.params.data.manufacturer_id;
                });

                _this18.form.get('manufacturer').setValue(toSelect);

                _this18.filteredOptionsManufacturer = _this18.form.controls.manufacturer.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), // tap(() => this.form.controls.manufacturer.setValue(toSelect)),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
                  return typeof value === 'string' ? value : value.name;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (name) {
                  return name ? _this18._filterManfacturer(name) : _this18.manufacturers;
                }));
              }
            }, function (err) {});
          }
        }, {
          key: "getChargerModelTypes",
          value: function getChargerModelTypes() {
            var _this19 = this;

            this.masterService.getChargerModelTypes().subscribe(function (data) {
              _this19.chargerModelTypes = data;

              if (_this19.isEditMode) {
                var toSelect = _this19.chargerModelTypes.find(function (c) {
                  return c.id == _this19.params.data.charger_model_type_id;
                });

                _this19.form.get('chargerModelType').setValue(toSelect);

                _this19.filteredOptionsCharModelType = _this19.form.controls.chargerModelType.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), //tap(() => this.form.controls.chargerModelType.setValue(toSelect)),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
                  return typeof value === 'string' ? value : value.name;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (name) {
                  return name ? _this19._filterCharModelType(name) : _this19.chargerModelTypes;
                }));
              }
            }, function (err) {});
          }
        }, {
          key: "getCommunicationProtocols",
          value: function getCommunicationProtocols() {
            var _this20 = this;

            this.masterService.getCommunicationProtocols().subscribe(function (data) {
              _this20.communicationProtocols = data;

              if (_this20.isEditMode) {
                var toSelect = _this20.communicationProtocols.find(function (c) {
                  return c.id == _this20.params.data.communication_protocol_id;
                });

                _this20.form.get('communicationProtocol').setValue(toSelect);

                _this20.filteredOptionsCommunicationProto = _this20.form.controls.communicationProtocol.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), //tap(() => this.form.controls.communicationProtocol.setValue(toSelect)),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
                  return typeof value === 'string' ? value : value.name;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (name) {
                  return name ? _this20._filterCommunicationProtocol(name) : _this20.communicationProtocols;
                }));
              }
            }, function (err) {});
          }
        }, {
          key: "getConnectorTypes",
          value: function getConnectorTypes() {
            var _this21 = this;

            this.masterService.getConnectorTypes().subscribe(function (data) {
              _this21.connectorTypes = data; // if(this.isEditMode){
              //   
              //   const toSelect = this.manufacturers.find(c => c.id == this.params.data.manufacturer_id);
              //   this.form.get('manufacturer').setValue(toSelect.id);
              // }
            }, function (err) {});
          }
        }, {
          key: "getIOTypes",
          value: function getIOTypes() {
            var _this22 = this;

            this.masterService.getIOTypes().subscribe(function (data) {
              _this22.ioTypes = data; // if(this.isEditMode){
              //   
              //   const toSelect = this.manufacturers.find(c => c.id == this.params.data.manufacturer_id);
              //   this.form.get('manufacturer').setValue(toSelect.id);
              // }
            }, function (err) {});
          }
        }, {
          key: "getCurrentTypes",
          value: function getCurrentTypes() {
            var _this23 = this;

            this.masterService.getCurrentTypes().subscribe(function (data) {
              _this23.currentTypes = data; // if(this.isEditMode){
              //   
              //   const toSelect = this.manufacturers.find(c => c.id == this.params.data.manufacturer_id);
              //   this.form.get('manufacturer').setValue(toSelect.id);
              // }
            }, function (err) {});
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
            var _this24 = this;

            if (this.form.valid) {
              var formValues = this.form.value;
              var connectors = [];
              formValues.connectorForm.forEach(function (item) {
                connectors.push({
                  connector_type_id: item.connectorType,
                  io_type_id: item.ioType,
                  current_type_id: item.currentType,
                  voltage: item.voltage,
                  phase: item.phase,
                  max_amp: item.maxAmp,
                  power: item.power,
                  frequency: item.frequency,
                  status: 'Y',
                  created_by: _this24.localStorage.userId
                });
              });
              var params = {
                charger_type_id: formValues.chargerType.id,
                manufacturer_id: formValues.manufacturer.id,
                charger_model_type_id: formValues.chargerModelType.id,
                battery_backup: this.batteryBackup == true ? 'Y' : 'N',
                code: formValues.code,
                name: formValues.name,
                description: formValues.description,
                communication_protocol_id: formValues.communicationProtocol.id,
                communication_mode: formValues.communicationMode,
                card_reader_type: formValues.cardReaderType,
                no_of_connectors: formValues.connectorForm.length,
                connector_data: connectors,
                status: this.status == true ? 'Y' : 'N',
                created_by: this.localStorage.userId
              };

              if (this.isEditMode) {
                params.id = this.params.data.id, params.modify_by = this.localStorage.userId;
              } else {
                params.created_by = this.localStorage.userId;
              }

              if (this.isEditMode) {
                this.chargingModelService.update(params).subscribe(function (data) {
                  _this24.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].recordUpdateMessage, 'Dismiss', {
                    duration: 5000
                  });

                  _this24.dialogRef.close();
                }, function (err) {
                  _this24.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].errorMessage, 'Dismiss', {
                    duration: 5000
                  });
                });
              } else {
                this.chargingModelService.create(params).subscribe(function (data) {
                  _this24.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].chargerCreateMessage, 'Dismiss', {
                    duration: 5000
                  }); // this.router.navigate(['/chargingModel/crud/list']);


                  _this24.dialogRef.close();
                }, function (err) {
                  _this24.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].errorMessage, 'Dismiss', {
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
            var temp = new Array();
            temp = this.params.data.communication_mode.split(",");
            this.form.get('communicationMode').setValue(temp);
            this.form.get('cardReaderType').setValue(params.data.card_reader_type);
            this.form.get('noOfConnectors').setValue(params.data.no_of_connectors);
            this.status = params.data.status == 'Y' ? true : false;
            this.batteryBackup = params.data.battery_backup == 'Y' ? true : false;
            this.assignValuesFG(params.data.connector_data);
          }
        }, {
          key: "assignValuesFG",
          value: function assignValuesFG(data) {
            var _this25 = this;

            var connector_data = [];
            data.forEach(function (connector) {
              _this25.addConnectorFG();

              connector_data.push({
                id: connector.id,
                model_id: connector.model_id,
                connectorType: connector.connector_type_id,
                ioType: connector.io_type_id,
                currentType: connector.current_type_id,
                voltage: connector.voltage,
                phase: connector.phase,
                maxAmp: connector.max_amp,
                power: connector.power,
                frequency: connector.frequency,
                status: connector.status,
                created_date: connector.created_date,
                created_by: connector.created_by,
                modify_date: connector.modify_date,
                modify_by: connector.modify_by
              });
            });
            this.removeConnectorFG(data.length);
            var connectorForm = this.form.get('connectorForm');
            connectorForm.patchValue(connector_data);
          }
        }, {
          key: "clkBatteryBackup",
          value: function clkBatteryBackup(event) {
            this.batteryBackup = event.checked;
            this.ref.checked = this.batteryBackup;
          }
        }, {
          key: "clkRfidCardReader",
          value: function clkRfidCardReader(event) {
            this.rfidCardReader = event.checked;
            this.rfid.checked = this.rfidCardReader;
          }
        }, {
          key: "updateStatus",
          value: function updateStatus(event) {
            this.status = event.checked;
            this.active.checked = this.status;
          }
        }, {
          key: "filteredOptions",
          value: function filteredOptions() {
            var _this26 = this;

            this.filteredOptionsCharType = this.form.controls.chargerType.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
              return typeof value === 'string' ? value : value.name;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (name) {
              return name ? _this26._filterCharType(name) : _this26.chargerTypes;
            }));
            this.filteredOptionsManufacturer = this.form.controls.manufacturer.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
              return typeof value === 'string' ? value : value.name;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (name) {
              return name ? _this26._filterManfacturer(name) : _this26.manufacturers;
            }));
            this.filteredOptionsCharModelType = this.form.controls.chargerModelType.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
              return typeof value === 'string' ? value : value.name;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (name) {
              return name ? _this26._filterCharModelType(name) : _this26.chargerModelTypes;
            }));
            this.filteredOptionsCommunicationProto = this.form.controls.communicationProtocol.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
              return typeof value === 'string' ? value : value.name;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (name) {
              return name ? _this26._filterCommunicationProtocol(name) : _this26.communicationProtocols;
            }));
          }
        }, {
          key: "displayCharType",
          value: function displayCharType(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "displayManfacturer",
          value: function displayManfacturer(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "displayCharModelType",
          value: function displayCharModelType(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "displayCommunicationProto",
          value: function displayCommunicationProto(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "_filterCharType",
          value: function _filterCharType(name) {
            var filterValue = name.toLowerCase();
            return this.chargerTypes.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "_filterManfacturer",
          value: function _filterManfacturer(name) {
            var filterValue = name.toLowerCase();
            return this.manufacturers.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "_filterCharModelType",
          value: function _filterCharModelType(name) {
            var filterValue = name.toLowerCase();
            return this.chargerModelTypes.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "_filterCommunicationProtocol",
          value: function _filterCommunicationProtocol(name) {
            var filterValue = name.toLowerCase();
            return this.communicationProtocols.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }]);

        return ActionDialogComponent;
      }();

      ActionDialogComponent.ɵfac = function ActionDialogComponent_Factory(t) {
        return new (t || ActionDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_charger_type_charger_type_service__WEBPACK_IMPORTED_MODULE_7__["ChargerTypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_charging_model_charging_model_service__WEBPACK_IMPORTED_MODULE_9__["ChargingModelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_10__["MasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]));
      };

      ActionDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ActionDialogComponent,
        selectors: [["app-action-dialog"]],
        viewQuery: function ActionDialogComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ref = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rfid = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.active = _t.first);
          }
        },
        decls: 133,
        vars: 42,
        consts: [["id", "dialog_action_close", "matTooltip", "Close window", 1, "material-icons-outlined", 2, "cursor", "pointer", "color", "white", 3, "click"], [1, "action_toolbar"], [2, "padding", "24px", "max-height", "32vw", "overflow", "auto"], ["id", "forms", "fxLayout", "column", 1, "page-layout", "simple", "fullwidth", "mat-dialog"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", "name", "form", 1, "", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "25", 1, "pr-4"], ["type", "text", "matInput", "", "formControlName", "chargerType", "autocomplete", "off", "required", "", 3, "matAutocomplete"], ["matSuffix", "", 1, "secondary-text"], [3, "displayWith"], ["chargerTypeAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", "matTooltip", "Please select charger model", 1, "secondary-text"], [4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "manufacturer", "autocomplete", "off", "required", "", 3, "matAutocomplete"], ["manufacturerAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select manufacturer", 1, "secondary-text"], ["type", "text", "matInput", "", "formControlName", "chargerModelType", "autocomplete", "off", "required", "", 3, "matAutocomplete"], ["chargerModelTypeAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select charger model type", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "code", "maxlength", "20", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter code", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "name", "maxlength", "50", "required", "", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter name", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "description", "maxlength", "200", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter description", 1, "secondary-text"], ["type", "text", "matInput", "", "formControlName", "communicationProtocol", "required", "", "autocomplete", "off", 3, "matAutocomplete"], ["communicationProtocolAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select communication protocol", 1, "secondary-text"], ["formControlName", "communicationMode", "multiple", ""], ["matSuffix", "", "matTooltip", "Please enter communication mode", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "cardReaderType", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter card reader type", 1, "secondary-text"], ["matInput", "", "numbersOnly", "", "placeholder", "", "formControlName", "noOfConnectors", "required", "", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter no. of connectors", 1, "secondary-text"], ["fxFlex", "15", 1, "pr-4"], [1, "sm-txt", "mr-20"], ["color", "primary", 1, "example-margin", "sm-txt", "mt-10", 3, "checked", "change"], ["toggleElement", ""], ["fxFlex", "17", 1, "pr-4"], ["rfidToggleElement", ""], ["fxFlex", "18", 1, "pr-4"], ["color", "primary", 1, "example-margin", 3, "checked", "change"], ["activeElement", ""], [2, "box-shadow", "none!important"], ["formArrayName", "connectorForm"], ["fxLayout", "column", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "mr-8", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "warn", 1, "mr-8", 3, "click"], [3, "value"], ["fxLayout", "column", 3, "formGroupName"], ["appearance", "outline", "fxFlex", "20", 1, "pr-4"], ["formControlName", "connectorType"], ["matSuffix", "", "matTooltip", "Please enter connector type", 1, "secondary-text"], ["formControlName", "ioType"], ["matSuffix", "", "matTooltip", "Please enter I/O type", 1, "secondary-text"], ["formControlName", "currentType"], ["matSuffix", "", "matTooltip", "Please enter current type", 1, "secondary-text"], ["matInput", "", "formControlName", "voltage", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter voltage ", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "phase", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter phase", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "maxAmp", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter max Amp.", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "power", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter power", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "frequency", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter frequency", 1, "secondary-text"], [1, "add-row"], [1, "sm-txt"], ["type", "button", "mat-icon-button", "", "color", "primary", "aria-label", "Add", "matTooltip", "Add", 1, "float-left", 3, "click"], ["type", "button", "mat-icon-button", "", "color", "warn", "aria-label", "Remove/clear", "matTooltip", "Remove", 1, "float-left", 3, "click"]],
        template: function ActionDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionDialogComponent_Template_mat_icon_click_0_listener() {
              return ctx.closeActionPanel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Models");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Charger Model");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-autocomplete", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ActionDialogComponent_mat_option_16_Template, 2, 2, "mat-option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "model_training");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ActionDialogComponent_mat_error_20_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Manufacturer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-autocomplete", 9, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ActionDialogComponent_mat_option_29_Template, 2, 2, "mat-option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "precision_manufacturing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ActionDialogComponent_mat_error_33_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Charger Model Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-autocomplete", 9, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ActionDialogComponent_mat_option_42_Template, 2, 2, "mat-option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "format_list_bulleted");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ActionDialogComponent_mat_error_46_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-icon", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "qr_code_scanner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ActionDialogComponent_mat_error_53_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "badge");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ActionDialogComponent_mat_error_61_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ActionDialogComponent_mat_error_62_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-icon", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, ActionDialogComponent_mat_error_69_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Communication Protocol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-autocomplete", 9, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, ActionDialogComponent_mat_option_78_Template, 2, 2, "mat-option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](79, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-icon", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "import_contacts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, ActionDialogComponent_mat_error_82_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Communication Mode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-select", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, ActionDialogComponent_mat_option_87_Template, 2, 2, "mat-option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-icon", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "burst_mode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, ActionDialogComponent_mat_error_90_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Card Reader Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-icon", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "chrome_reader_mode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, ActionDialogComponent_mat_error_98_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "No. Of Connectors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "input", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-icon", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, ActionDialogComponent_mat_error_105_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, ActionDialogComponent_mat_error_106_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-label", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Battery Backup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-slide-toggle", 37, 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ActionDialogComponent_Template_mat_slide_toggle_change_110_listener($event) {
              return ctx.clkBatteryBackup($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-label", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "RFID card reader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "mat-slide-toggle", 37, 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ActionDialogComponent_Template_mat_slide_toggle_change_116_listener($event) {
              return ctx.clkRfidCardReader($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "mat-label", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "mat-slide-toggle", 42, 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ActionDialogComponent_Template_mat_slide_toggle_change_122_listener($event) {
              return ctx.updateStatus($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "mat-card", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](127, ActionDialogComponent_div_127_Template, 70, 10, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionDialogComponent_Template_button_click_129_listener() {
              return ctx.onYesClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionDialogComponent_Template_button_click_131_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

            var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayCharType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 34, ctx.filteredOptionsCharType));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("chargerType").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayManfacturer);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 36, ctx.filteredOptionsManufacturer));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("manufacturer").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayCharModelType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 38, ctx.filteredOptionsCharModelType));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("chargerModelType").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("code").hasError("pattern"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("name").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("name").hasError("pattern"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("description").hasError("pattern"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayCommunicationProto);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](79, 40, ctx.filteredOptionsCommunicationProto));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("communicationProtocol").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.communicationModeData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("communicationMode").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("cardReaderType").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("noOfConnectors").errors == null ? null : ctx.form.get("noOfConnectors").errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("noOfConnectors").errors == null ? null : ctx.form.get("noOfConnectors").errors.pattern);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.batteryBackup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.batteryBackup ? "Yes" : "No", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.rfidCardReader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.rfidCardReader ? "Yes" : "No", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.status);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.status ? "Active" : "Inactive", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.form.get("connectorForm")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isEditMode ? "Save" : "Save");
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatSuffix"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelect"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["AsyncPipe"]],
        styles: [".mat-dialog {\n  margin: 0 -24px;\n  padding: 0 24px;\n  max-height: 65vh;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFjdGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6ImFjdGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZ3tcclxuICAgIG1hcmdpbjogMCAtMjRweDtcclxuICAgIHBhZGRpbmc6IDAgMjRweDtcclxuICAgIG1heC1oZWlnaHQ6IDY1dmg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufSJdfQ== */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_6__["fuseAnimations"]
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
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_6__["fuseAnimations"]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: app_shared_services_charger_type_charger_type_service__WEBPACK_IMPORTED_MODULE_7__["ChargerTypeService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: app_shared_services_charging_model_charging_model_service__WEBPACK_IMPORTED_MODULE_9__["ChargingModelService"]
          }, {
            type: app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_10__["MasterService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
          }];
        }, {
          ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["toggleElement"]
          }],
          rfid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["rfidToggleElement"]
          }],
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
//# sourceMappingURL=alarm-configuration-alarm-configuration-module-es5.js.map