(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["EV-fleet-EV-fleet-module"], {
    /***/
    "/L+0":
    /*!*******************************************************************!*\
      !*** ./src/app/main/EV-space/EV-fleet/create/create.component.ts ***!
      \*******************************************************************/

    /*! exports provided: CreateComponent */

    /***/
    function L0(module, __webpack_exports__, __webpack_require__) {
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


      var app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/utils/message.constant */
      "AgqY");
      /* harmony import */


      var _fuse_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fuse/animations */
      "PVWW");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/services/ev-space/ev-fleet.service */
      "ze/K");
      /* harmony import */


      var app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/shared/services/master/master.service */
      "auZQ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_shared_services_ev_space_govt_subsidy_govt_subsidy_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! app/shared/services/ev-space/govt-subsidy/govt-subsidy.service */
      "/iNp");
      /* harmony import */


      var app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! app/shared/services/countries.service */
      "XtJy");
      /* harmony import */


      var app_shared_services_charger_type_charger_type_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! app/shared/services/charger-type/charger-type.service */
      "zADy");
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


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var _c0 = ["toggleElement"];

      function CreateComponent_mat_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 31);

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

      function CreateComponent_mat_error_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select brand ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateComponent_mat_option_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r14.name, " ");
        }
      }

      function CreateComponent_mat_error_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select vehicle type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateComponent_mat_option_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r15.name, " ");
        }
      }

      function CreateComponent_mat_error_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select connector type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateComponent_mat_option_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r16.name, " ");
        }
      }

      function CreateComponent_mat_error_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select charger type ");

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
        function CreateComponent(fb, snackBar, evFleetService, masterService, router, govtSubsidyService, countryService, chargerTypeService) {
          _classCallCheck(this, CreateComponent);

          this.fb = fb;
          this.snackBar = snackBar;
          this.evFleetService = evFleetService;
          this.masterService = masterService;
          this.router = router;
          this.govtSubsidyService = govtSubsidyService;
          this.countryService = countryService;
          this.chargerTypeService = chargerTypeService;
          this.status = true;
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
              brand: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              vehicle: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              connector_type: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              charger_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              name: [''],
              driver_range: [''],
              image: [''],
              status: this.status == true ? 'M' : 'N'
            });
            this.getVehicle();
            this.getBrands();
            this.getConnectorTypes();
            this.getChargerTypes();
          }
        }, {
          key: "getVehicle",
          value: function getVehicle() {
            var _this = this;

            this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
            this.govtSubsidyService.getVehicleTypes().subscribe(function (resp) {
              _this.vehicles = resp; //console.log(this.vehicles)

              _this.filteredOptionsVehicle = _this.form.controls.vehicle.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
                return typeof value === 'string' ? value : value.name;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (name) {
                return name ? _this._filtervehiclesModels(name) : _this.vehicles;
              }));
            }, function (err) {});
          }
        }, {
          key: "displayVehicle",
          value: function displayVehicle(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "_filtervehiclesModels",
          value: function _filtervehiclesModels(name) {
            var filterValue = name.toLowerCase();
            return this.vehicles.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "getBrands",
          value: function getBrands() {
            var _this2 = this;

            this.masterService.getBrands().subscribe(function (data) {
              _this2.brands = data; //console.log(this.brands)

              _this2.filteredOptionsBrand = _this2.form.controls.brand.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
                return typeof value === 'string' ? value : value.name;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (name) {
                return name ? _this2._filterBrands(name) : _this2.brands;
              }));
            }, function (err) {});
          }
        }, {
          key: "_filterBrands",
          value: function _filterBrands(name) {
            var filterValue = name.toLowerCase();
            return this.brands.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "displayBrand",
          value: function displayBrand(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "getConnectorTypes",
          value: function getConnectorTypes() {
            var _this3 = this;

            this.masterService.getConnectorTypes().subscribe(function (resp) {
              _this3.connectorTypes = resp; //console.log(this.connectorTypes)

              _this3.filteredConnecterType = _this3.form.controls.connector_type.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
                return typeof value === 'string' ? value : value.name;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (name) {
                return name ? _this3._filterConnectorType(name) : _this3.connectorTypes;
              }));
            }, function (err) {});
          }
        }, {
          key: "displayConnectorType",
          value: function displayConnectorType(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "_filterConnectorType",
          value: function _filterConnectorType(name) {
            var filterValue = name.toLowerCase();
            return this.connectorTypes.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "getChargerTypes",
          value: function getChargerTypes() {
            var _this4 = this;

            this.chargerTypeService.getChargerTypes().subscribe(function (resp) {
              if (resp != null) {
                _this4.chargersType = resp; //console.log(this.chargersType)

                _this4.filteredChargerType = _this4.form.controls.charger_type.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
                  return typeof value === 'string' ? value : value.name;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (name) {
                  return name ? _this4._filterChargerType(name) : _this4.chargersType;
                }));
              }
            }, function (err) {});
          }
        }, {
          key: "displayChargerType",
          value: function displayChargerType(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "_filterChargerType",
          value: function _filterChargerType(name) {
            var filterValue = name.toLowerCase();
            return this.chargersType.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this5 = this;

            if (this.form.valid) {
              var formValues = this.form.value;
              var params = {
                brand_id: formValues.brand.id,
                vehicle_type_id: formValues.vehicle.id,
                connector_type_id: formValues.connector_type.id,
                charger_type_id: formValues.charger_type.id,
                name: formValues.name,
                driver_range: formValues.driver_range == '' ? 0 : formValues.driver_range,
                image_url: formValues.image,
                status: this.status == true ? 'M' : 'N',
                created_by: this.localStorage.userId
              };
              this.evFleetService.createEvFleet(params).subscribe(function (resp) {
                if (resp.status == true) {
                  _this5.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].evFleetCreate, 'Dismiss', {
                    duration: 5000
                  });

                  _this5.router.navigate(['/evSpace/evFleet/crud/listModerate']);
                } else {
                  _this5.snackBar.open(resp.message, 'Dismiss', {
                    duration: 5000
                  });
                }
              }, function (err) {
                _this5.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].errorMessage, 'Dismiss', {
                  duration: 5000
                });
              });
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
        }]);

        return CreateComponent;
      }();

      CreateComponent.ɵfac = function CreateComponent_Factory(t) {
        return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_6__["EVFleetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_ev_space_govt_subsidy_govt_subsidy_service__WEBPACK_IMPORTED_MODULE_9__["GovtSubsidyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_10__["CountriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_charger_type_charger_type_service__WEBPACK_IMPORTED_MODULE_11__["ChargerTypeService"]));
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
        decls: 83,
        vars: 27,
        consts: [["id", "forms", "fxLayout", "column", 1, "page-layout", "simple", "fullwidth"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", "name", "form", 1, "mat-card", "mat-elevation-z4", "p-24", 3, "formGroup", "submit", "keydown.enter"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "50", 1, "pr-4"], ["type", "text", "matInput", "", "formControlName", "brand", "autocomplete", "off", "required", "", 3, "matAutocomplete"], [3, "displayWith"], ["brandAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 1, "secondary-text"], [4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "vehicle", "autocomplete", "off", "required", "", 3, "matAutocomplete"], ["vehicleAuto", "matAutocomplete"], ["type", "text", "matInput", "", "formControlName", "connector_type", "autocomplete", "off", "required", "", 3, "matAutocomplete"], ["stateAuto", "matAutocomplete"], ["matSuffix", "", 2, "display", "flex"], ["matSuffix", "", "matTooltip", "Please select connector type", 1, "secondary-text"], ["type", "text", "matInput", "", "formControlName", "charger_type", "autocomplete", "off", "required", "", 3, "matAutocomplete"], ["chargerAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select charger type", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "name", "type", "text", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter mobile", 1, "secondary-text"], ["matInput", "", "formControlName", "driver_range", "type", "number", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter driver range", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "image", "type", "text", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "select image", 1, "secondary-text"], ["fxFlex", "50", "fxFlex.lt-sm", "100"], ["disabled", "", "color", "primary", 1, "example-margin", 3, "checked", "change"], ["toggleElement", ""], ["fxLayout", "row", "fxLayoutAlign", "start center", 2, "padding-top", "10px"], ["mat-raised-button", "", "color", "primary", 1, "mr-8"], ["mat-raised-button", "", "color", "warn", "type", "button", "routerLink", "/evSpace/evFleet/crud/listModerate", 1, "mr-8"], [3, "value"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-autocomplete", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CreateComponent_mat_option_9_Template, 2, 2, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CreateComponent_mat_error_13_Template, 2, 0, "mat-error", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Vehicle Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-autocomplete", 5, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CreateComponent_mat_option_20_Template, 2, 2, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CreateComponent_mat_error_24_Template, 2, 0, "mat-error", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Connector Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-autocomplete", 5, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CreateComponent_mat_option_32_Template, 2, 2, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CreateComponent_mat_error_39_Template, 2, 0, "mat-error", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Charger Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-autocomplete", 5, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, CreateComponent_mat_option_46_Template, 2, 2, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-icon", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, CreateComponent_mat_error_53_Template, 2, 0, "mat-error", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-icon", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Driver Range");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-icon", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Image Url");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-icon", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-slide-toggle", 26, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateComponent_Template_mat_slide_toggle_change_75_listener($event) {
              return ctx.updateStatus($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayBrand);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 19, ctx.filteredOptionsBrand));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("brand").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayVehicle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 21, ctx.filteredOptionsVehicle));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("vehicle").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayConnectorType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 23, ctx.filteredConnecterType));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("connector_type").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayChargerType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 25, ctx.filteredChargerType));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("charger_type").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.status);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.status ? "Moderate" : "Inactive", "");
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltip"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
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
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
          }, {
            type: app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_6__["EVFleetService"]
          }, {
            type: app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
          }, {
            type: app_shared_services_ev_space_govt_subsidy_govt_subsidy_service__WEBPACK_IMPORTED_MODULE_9__["GovtSubsidyService"]
          }, {
            type: app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_10__["CountriesService"]
          }, {
            type: app_shared_services_charger_type_charger_type_service__WEBPACK_IMPORTED_MODULE_11__["ChargerTypeService"]
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
    "1CSc":
    /*!*********************************************************************************!*\
      !*** ./src/app/main/EV-space/EV-fleet/action-dialog/action-dialog.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: ActionDialogComponent */

    /***/
    function CSc(module, __webpack_exports__, __webpack_require__) {
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


      var app_shared_services_ev_space_govt_subsidy_govt_subsidy_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/services/ev-space/govt-subsidy/govt-subsidy.service */
      "/iNp");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/shared/services/master/master.service */
      "auZQ");
      /* harmony import */


      var app_shared_services_charger_type_charger_type_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! app/shared/services/charger-type/charger-type.service */
      "zADy");
      /* harmony import */


      var app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! app/shared/services/ev-space/ev-fleet.service */
      "ze/K");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var _c0 = ["toggleElement"];

      function ActionDialogComponent_mat_option_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 34);

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

      function ActionDialogComponent_mat_error_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select brand ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_option_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r14.name, " ");
        }
      }

      function ActionDialogComponent_mat_error_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select vehicle type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_option_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r15.name, " ");
        }
      }

      function ActionDialogComponent_mat_error_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select connector type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_option_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r16.name, " ");
        }
      }

      function ActionDialogComponent_mat_error_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select charger type ");

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
        function ActionDialogComponent(fb, govtSubsidyService, snackBar, masterService, dialogRef, data, chargerTypeService, evFleetService) {
          _classCallCheck(this, ActionDialogComponent);

          this.fb = fb;
          this.govtSubsidyService = govtSubsidyService;
          this.snackBar = snackBar;
          this.masterService = masterService;
          this.dialogRef = dialogRef;
          this.data = data;
          this.chargerTypeService = chargerTypeService;
          this.evFleetService = evFleetService;
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
            this.params = this.data; //console.log( this.params)

            this.isEditMode = this.params.action == 'CREATE' ? false : true;
            this.form = this.fb.group({
              brand: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              vehicle: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              connector_type: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              charger_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              name: [''],
              driver_range: [''],
              image: [''],
              status: this.status == true ? 'M' : 'N'
            });
            this.getVehicle();
            this.getBrands();
            this.getConnectorTypes();
            this.getChargerTypes();

            if (this.isEditMode) {
              this.assignValues(this.params);
            }
          }
        }, {
          key: "getVehicle",
          value: function getVehicle() {
            var _this6 = this;

            this.govtSubsidyService.getVehicleTypes().subscribe(function (resp) {
              _this6.vehicles = resp;

              if (_this6.isEditMode) {
                var toSelect = _this6.vehicles.find(function (c) {
                  return c.id == _this6.params.data.vehicle_type_id;
                });

                _this6.form.get('vehicle').setValue(toSelect);
              }

              _this6.filteredOptionsVehicle = _this6.form.controls.vehicle.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                return typeof value === 'string' ? value : value.name;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) {
                return name ? _this6._filterVehicleModels(name) : _this6.vehicles;
              }));
            }, function (err) {});
          }
        }, {
          key: "displayVehicle",
          value: function displayVehicle(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "_filterVehicleModels",
          value: function _filterVehicleModels(name) {
            var filterValue = name.toLowerCase();
            return this.vehicles.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
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
          key: "getBrands",
          value: function getBrands() {
            var _this7 = this;

            this.masterService.getBrands().subscribe(function (data) {
              _this7.brands = data;

              if (_this7.isEditMode) {
                var toSelect = _this7.brands.find(function (c) {
                  return c.id == _this7.params.data.brand_id;
                });

                _this7.form.get('brand').setValue(toSelect);
              }

              _this7.filteredOptionsBrand = _this7.form.controls.brand.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                return typeof value === 'string' ? value : value.name;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) {
                return name ? _this7._filterBrands(name) : _this7.brands;
              }));
            }, function (err) {});
          }
        }, {
          key: "_filterBrands",
          value: function _filterBrands(name) {
            var filterValue = name.toLowerCase();
            return this.brands.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "displayBrand",
          value: function displayBrand(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "getConnectorTypes",
          value: function getConnectorTypes() {
            var _this8 = this;

            this.masterService.getConnectorTypes().subscribe(function (resp) {
              _this8.connectorTypes = resp;

              if (_this8.isEditMode) {
                var toSelect = _this8.connectorTypes.find(function (c) {
                  return c.id == _this8.params.data.connector_type_id;
                });

                _this8.form.get('connector_type').setValue(toSelect);
              }

              _this8.filteredConnecterType = _this8.form.controls.connector_type.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                return typeof value === 'string' ? value : value.name;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) {
                return name ? _this8._filterConnectorType(name) : _this8.connectorTypes;
              }));
            }, function (err) {});
          }
        }, {
          key: "displayConnectorType",
          value: function displayConnectorType(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "_filterConnectorType",
          value: function _filterConnectorType(name) {
            var filterValue = name.toLowerCase();
            return this.connectorTypes.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "getChargerTypes",
          value: function getChargerTypes() {
            var _this9 = this;

            this.chargerTypeService.getChargerTypes().subscribe(function (resp) {
              if (resp != null) {
                _this9.chargersType = resp;

                if (_this9.isEditMode) {
                  var toSelect = _this9.chargersType.find(function (c) {
                    return c.id == _this9.params.data.charger_type_id;
                  });

                  _this9.form.get('charger_type').setValue(toSelect);
                }

                _this9.filteredChargerType = _this9.form.controls.charger_type.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                  return typeof value === 'string' ? value : value.name;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) {
                  return name ? _this9._filterChargerType(name) : _this9.chargersType;
                }));
              }
            }, function (err) {});
          }
        }, {
          key: "displayChargerType",
          value: function displayChargerType(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "_filterChargerType",
          value: function _filterChargerType(name) {
            var filterValue = name.toLowerCase();
            return this.chargersType.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "onYesClick",
          value: function onYesClick() {
            var _this10 = this;

            if (this.form.valid) {
              var formValues = this.form.value;
              var params = {
                brand_id: formValues.brand.id,
                vehicle_type_id: formValues.vehicle.id,
                connector_type_id: formValues.connector_type.id,
                charger_type_id: formValues.charger_type.id,
                name: formValues.name,
                driver_range: formValues.driver_range == '' ? 0 : formValues.driver_range,
                image_url: formValues.image_url,
                status: this.status == true ? 'M' : 'N'
              };

              if (this.isEditMode) {
                params.id = this.params.data.id, params.modify_by = this.localStorage.userId;
              } else {
                params.created_by = this.localStorage.userId;
              }

              if (this.isEditMode) {
                this.evFleetService.updateEvFleet(params).subscribe(function (resp) {
                  if (resp.status == true) {
                    _this10.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_4__["MessageConstant"].recordUpdateMessage, 'Dismiss', {
                      duration: 5000
                    });

                    _this10.dialogRef.close();
                  }
                }, function (err) {
                  _this10.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_4__["MessageConstant"].errorMessage, 'Dismiss', {
                    duration: 5000
                  });
                });
              } else {
                this.evFleetService.createEvFleet(params).subscribe(function (data) {
                  _this10.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_4__["MessageConstant"].evFleetCreate, 'Dismiss', {
                    duration: 5000
                  });

                  _this10.dialogRef.close();
                }, function (err) {
                  _this10.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_4__["MessageConstant"].errorMessage, 'Dismiss', {
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
            this.form.get('name').setValue(params.data.name);
            this.form.get('driver_range').setValue(params.data.driver_range);
            this.form.get('image').setValue(params.data.image_url);
            this.status = params.data.status == 'M' ? true : false;
          }
        }, {
          key: "updateStatus",
          value: function updateStatus(event) {
            this.status = event.checked;
            this.ref.checked = this.status;
          }
        }]);

        return ActionDialogComponent;
      }();

      ActionDialogComponent.ɵfac = function ActionDialogComponent_Factory(t) {
        return new (t || ActionDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_ev_space_govt_subsidy_govt_subsidy_service__WEBPACK_IMPORTED_MODULE_6__["GovtSubsidyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_8__["MasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_charger_type_charger_type_service__WEBPACK_IMPORTED_MODULE_9__["ChargerTypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_10__["EVFleetService"]));
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
        decls: 88,
        vars: 29,
        consts: [["id", "dialog_action_close", "matTooltip", "Close window", 1, "material-icons-outlined", 2, "cursor", "pointer", "color", "white", 3, "click"], [1, "action_toolbar"], [2, "padding", "24px", "max-height", "22vw", "overflow", "auto"], ["id", "forms", "fxLayout", "column", 1, "page-layout", "simple", "fullwidth"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", "name", "form", 1, "mat-elevation-z4", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "50", 1, "pr-4"], ["type", "text", "matInput", "", "formControlName", "brand", "autocomplete", "off", "required", "", 3, "matAutocomplete"], [3, "displayWith"], ["brandAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 1, "secondary-text"], [4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "vehicle", "autocomplete", "off", "required", "", 3, "matAutocomplete"], ["vehicleAuto", "matAutocomplete"], ["type", "text", "matInput", "", "formControlName", "connector_type", "autocomplete", "off", "required", "", 3, "matAutocomplete"], ["stateAuto", "matAutocomplete"], ["matSuffix", "", 2, "display", "flex"], ["matSuffix", "", "matTooltip", "Please select connector type", 1, "secondary-text"], ["type", "text", "matInput", "", "formControlName", "charger_type", "autocomplete", "off", "required", "", 3, "matAutocomplete"], ["chargerAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select charger type", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "name", "type", "text", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter mobile", 1, "secondary-text"], ["matInput", "", "formControlName", "driver_range", "type", "number", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter driver range", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "image", "type", "text", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "select image", 1, "secondary-text"], ["fxFlex", "50", "fxFlex.lt-sm", "100"], ["disabled", "", "color", "primary", 1, "example-margin", 3, "checked", "change"], ["toggleElement", ""], ["fxLayout", "row", "fxLayoutAlign", "start center", 2, "padding-top", "10px"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "mr-8", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "warn", 1, "mr-8", 3, "click"], [3, "value"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-autocomplete", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ActionDialogComponent_mat_option_14_Template, 2, 2, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ActionDialogComponent_mat_error_18_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Vehicle Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-autocomplete", 8, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ActionDialogComponent_mat_option_25_Template, 2, 2, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ActionDialogComponent_mat_error_29_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Connector Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-autocomplete", 8, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ActionDialogComponent_mat_option_37_Template, 2, 2, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ActionDialogComponent_mat_error_44_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Charger Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-autocomplete", 8, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ActionDialogComponent_mat_option_51_Template, 2, 2, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-icon", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, ActionDialogComponent_mat_error_58_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Driver Range");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-icon", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Image Url");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-icon", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-slide-toggle", 29, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ActionDialogComponent_Template_mat_slide_toggle_change_80_listener($event) {
              return ctx.updateStatus($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionDialogComponent_Template_button_click_84_listener() {
              return ctx.onYesClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionDialogComponent_Template_button_click_86_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.menuArray == null ? null : ctx.menuArray.title, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayBrand);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 21, ctx.filteredOptionsBrand));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("brand").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayVehicle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 23, ctx.filteredOptionsVehicle));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("vehicle").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayConnectorType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 25, ctx.filteredConnecterType));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("connector_type").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayChargerType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 27, ctx.filteredChargerType));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("charger_type").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.status);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.status ? "Moderate" : "Inactive", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isEditMode ? "Save" : "Save");
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatError"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"],
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
            type: app_shared_services_ev_space_govt_subsidy_govt_subsidy_service__WEBPACK_IMPORTED_MODULE_6__["GovtSubsidyService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
          }, {
            type: app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_8__["MasterService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: app_shared_services_charger_type_charger_type_service__WEBPACK_IMPORTED_MODULE_9__["ChargerTypeService"]
          }, {
            type: app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_10__["EVFleetService"]
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
    "4dja":
    /*!***********************************************************!*\
      !*** ./src/app/main/EV-space/EV-fleet/EV-fleet.module.ts ***!
      \***********************************************************/

    /*! exports provided: EVFleetModule */

    /***/
    function dja(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EVFleetModule", function () {
        return EVFleetModule;
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
      "/L+0");
      /* harmony import */


      var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list/list.component */
      "MWfe");
      /* harmony import */


      var _action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./action-dialog/action-dialog.component */
      "1CSc");
      /* harmony import */


      var _EV_fleet_crud_EV_fleet_crud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./EV-fleet-crud/EV-fleet-crud.component */
      "h/WB");
      /* harmony import */


      var _EV_fleet_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./EV-fleet-routing.module */
      "zmIt");
      /* harmony import */


      var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fuse/shared.module */
      "5HBU");
      /* harmony import */


      var _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./view-dialog/view-dialog.component */
      "Puw5");
      /* harmony import */


      var _list4Wheelers_list4Wheelers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./list4Wheelers/list4Wheelers.component */
      "oelk");
      /* harmony import */


      var _list2Wheeler_list2Wheelers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./list2Wheeler/list2Wheelers.component */
      "KmPu");
      /* harmony import */


      var _list3Wheeler_list3Wheelers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./list3Wheeler/list3Wheelers.component */
      "zUWn");
      /* harmony import */


      var _electric_truck_manufactures_electric_truck_manufactures_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./electric-truck-manufactures/electric-truck-manufactures.component */
      "ho7L");
      /* harmony import */


      var _electric_bus_manufactures_electric_bus_manufactures_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./electric-bus-manufactures/electric-bus-manufactures.component */
      "pSd6");
      /* harmony import */


      var _electric_cycle_manufactures_electric_cycle_manufactures_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./electric-cycle-manufactures/electric-cycle-manufactures.component */
      "TCjq");

      var COMPONENTS = [_EV_fleet_crud_EV_fleet_crud_component__WEBPACK_IMPORTED_MODULE_5__["EVFleetCrudComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_2__["CreateComponent"], _list2Wheeler_list2Wheelers_component__WEBPACK_IMPORTED_MODULE_10__["List2WheelersComponent"], _electric_cycle_manufactures_electric_cycle_manufactures_component__WEBPACK_IMPORTED_MODULE_14__["ElectricCycleManufacturesComponent"], _list4Wheelers_list4Wheelers_component__WEBPACK_IMPORTED_MODULE_9__["List4WheelersComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"], _list3Wheeler_list3Wheelers_component__WEBPACK_IMPORTED_MODULE_11__["List3WheelersComponent"], _electric_truck_manufactures_electric_truck_manufactures_component__WEBPACK_IMPORTED_MODULE_12__["ElectricTruckManufacturesComponent"], _electric_bus_manufactures_electric_bus_manufactures_component__WEBPACK_IMPORTED_MODULE_13__["ElectricBusManufacturesComponent"]];
      var COMPONENTS_DYNAMIC = [_action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ActionDialogComponent"], _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ViewDialogComponent"]];

      var EVFleetModule = function EVFleetModule() {
        _classCallCheck(this, EVFleetModule);
      };

      EVFleetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: EVFleetModule
      });
      EVFleetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function EVFleetModule_Factory(t) {
          return new (t || EVFleetModule)();
        },
        imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _EV_fleet_routing_module__WEBPACK_IMPORTED_MODULE_6__["EVFleetRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EVFleetModule, {
          declarations: [_EV_fleet_crud_EV_fleet_crud_component__WEBPACK_IMPORTED_MODULE_5__["EVFleetCrudComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_2__["CreateComponent"], _list2Wheeler_list2Wheelers_component__WEBPACK_IMPORTED_MODULE_10__["List2WheelersComponent"], _electric_cycle_manufactures_electric_cycle_manufactures_component__WEBPACK_IMPORTED_MODULE_14__["ElectricCycleManufacturesComponent"], _list4Wheelers_list4Wheelers_component__WEBPACK_IMPORTED_MODULE_9__["List4WheelersComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"], _list3Wheeler_list3Wheelers_component__WEBPACK_IMPORTED_MODULE_11__["List3WheelersComponent"], _electric_truck_manufactures_electric_truck_manufactures_component__WEBPACK_IMPORTED_MODULE_12__["ElectricTruckManufacturesComponent"], _electric_bus_manufactures_electric_bus_manufactures_component__WEBPACK_IMPORTED_MODULE_13__["ElectricBusManufacturesComponent"], _action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ActionDialogComponent"], _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ViewDialogComponent"]],
          imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _EV_fleet_routing_module__WEBPACK_IMPORTED_MODULE_6__["EVFleetRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EVFleetModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _EV_fleet_routing_module__WEBPACK_IMPORTED_MODULE_6__["EVFleetRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"]],
            declarations: [COMPONENTS, COMPONENTS_DYNAMIC],
            entryComponents: [COMPONENTS_DYNAMIC]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "KmPu":
    /*!********************************************************************************!*\
      !*** ./src/app/main/EV-space/EV-fleet/list2Wheeler/list2Wheelers.component.ts ***!
      \********************************************************************************/

    /*! exports provided: TwoWheelersManufactures, List2WheelersComponent */

    /***/
    function KmPu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TwoWheelersManufactures", function () {
        return TwoWheelersManufactures;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "List2WheelersComponent", function () {
        return List2WheelersComponent;
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
      "1CSc");
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


      var _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../view-dialog/view-dialog.component */
      "Puw5");
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! app/shared/services/ev-space/ev-fleet.service */
      "ze/K");
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


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function List2WheelersComponent_th_13_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vehicle Brand \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List2WheelersComponent_th_13_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r18.changeVisibility("brandSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function List2WheelersComponent_th_13_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function List2WheelersComponent_th_13_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r20.filterEntity.vehicle_brand_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List2WheelersComponent_th_13_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r22.changeVisibility("brandSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r17.filterEntity.vehicle_brand_name);
        }
      }

      function List2WheelersComponent_th_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, List2WheelersComponent_th_13_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, List2WheelersComponent_th_13_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.brandSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.brandSearch);
        }
      }

      function List2WheelersComponent_td_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r23.vehicle_brand_name, " ");
        }
      }

      function List2WheelersComponent_th_16_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vehicle Type \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List2WheelersComponent_th_16_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r26.changeVisibility("typeSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function List2WheelersComponent_th_16_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function List2WheelersComponent_th_16_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r28.filterEntity.vehicle_type_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List2WheelersComponent_th_16_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r30.changeVisibility("typeSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r25.filterEntity.vehicle_type_name);
        }
      }

      function List2WheelersComponent_th_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, List2WheelersComponent_th_16_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, List2WheelersComponent_th_16_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.typeSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.typeSearch);
        }
      }

      function List2WheelersComponent_td_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r31.vehicle_type_name, " ");
        }
      }

      function List2WheelersComponent_th_19_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vehicle Model \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List2WheelersComponent_th_19_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r34.changeVisibility("modelSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function List2WheelersComponent_th_19_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function List2WheelersComponent_th_19_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r36.filterEntity.vehicle_model_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List2WheelersComponent_th_19_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r38.changeVisibility("modelSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r33.filterEntity.vehicle_model_name);
        }
      }

      function List2WheelersComponent_th_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, List2WheelersComponent_th_19_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, List2WheelersComponent_th_19_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.modelSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.modelSearch);
        }
      }

      function List2WheelersComponent_td_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r39.vehicle_model_name, " ");
        }
      }

      function List2WheelersComponent_th_22_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List2WheelersComponent_th_22_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r42.changeVisibility("descSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function List2WheelersComponent_th_22_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function List2WheelersComponent_th_22_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r44.filterEntity.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List2WheelersComponent_th_22_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r46.changeVisibility("descSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r41.filterEntity.description);
        }
      }

      function List2WheelersComponent_th_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, List2WheelersComponent_th_22_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, List2WheelersComponent_th_22_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.descSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.descSearch);
        }
      }

      function List2WheelersComponent_td_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r47 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r47.description, " ");
        }
      }

      function List2WheelersComponent_th_25_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Created Date \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List2WheelersComponent_th_25_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r50.changeVisibility("dateConvertSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function List2WheelersComponent_th_25_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function List2WheelersComponent_th_25_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r52.filterEntity.dateConvert = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List2WheelersComponent_th_25_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r54.changeVisibility("dateConvertSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r49.filterEntity.dateConvert);
        }
      }

      function List2WheelersComponent_th_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, List2WheelersComponent_th_25_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, List2WheelersComponent_th_25_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.dateConvertSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.dateConvertSearch);
        }
      }

      function List2WheelersComponent_td_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r55 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r55.dateConvert, " ");
        }
      }

      function List2WheelersComponent_th_28_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List2WheelersComponent_th_28_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r58.changeVisibility("statusSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function List2WheelersComponent_th_28_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function List2WheelersComponent_th_28_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r60.filterEntity.statusString = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List2WheelersComponent_th_28_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r62.changeVisibility("statusSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r57.filterEntity.statusString);
        }
      }

      function List2WheelersComponent_th_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, List2WheelersComponent_th_28_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, List2WheelersComponent_th_28_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

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

      function List2WheelersComponent_td_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r63 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", row_r63.status == "Y" ? "green" : "red");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r63.statusString, " ");
        }
      }

      function List2WheelersComponent_th_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function List2WheelersComponent_td_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List2WheelersComponent_td_32_Template_mat_icon_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66);

            var element_r64 = ctx.$implicit;

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r65.viewDialog("Publish", element_r64, "modrateAction");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " published_with_changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function List2WheelersComponent_tr_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 37);
        }
      }

      function List2WheelersComponent_tr_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 38);
        }
      }

      var _c0 = function _c0() {
        return [10, 30, 50, 100];
      };

      var TwoWheelersManufactures = function TwoWheelersManufactures() {
        _classCallCheck(this, TwoWheelersManufactures);
      };

      var List2WheelersComponent = /*#__PURE__*/function () {
        function List2WheelersComponent(evFleetService, dialog, snackBar, datepipe) {
          _classCallCheck(this, List2WheelersComponent);

          this.evFleetService = evFleetService;
          this.dialog = dialog;
          this.snackBar = snackBar;
          this.datepipe = datepipe;
          this.displayedColumns = ['vehicle_brand_name', 'vehicle_type_name', 'vehicle_model_name', 'description', 'dateConvert', 'status', 'action'];
          this.head = [['Vehicle Brand', 'Vehicle Type', 'Vehicle Model', 'Description', 'Created Date', 'Status']];
          this.brandSearch = false;
          this.modelSearch = false;
          this.typeSearch = false;
          this.descSearch = false;
          this.roadSearch = false;
          this.statusSearch = false;
          this.dateConvertSearch = false;
        }

        _createClass(List2WheelersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
            this.get2WheelerManufacture();
            this.filterEntity = new TwoWheelersManufactures();
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
          key: "get2WheelerManufacture",
          value: function get2WheelerManufacture() {
            var _this11 = this;

            this.evFleetService.getTwoWheelerVehicle().subscribe(function (resp) {
              if (resp.status == true) {
                _this11.twoWheeler = resp.data;

                for (var i = 0; i < _this11.twoWheeler.length; i++) {
                  _this11.twoWheeler[i].dateConvert = _this11.datepipe.transform(_this11.twoWheeler[i].created_date, 'dd/MM/yyyy hh:mm:ss');

                  if (_this11.twoWheeler[i].status == 'N') {
                    _this11.twoWheeler[i].statusString = 'Inactive';
                  } else {
                    _this11.twoWheeler[i].statusString = 'Active';
                  }
                }

                _this11.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this11.twoWheeler);
                _this11.dataSource.paginator = _this11.paginator;
                _this11.dataSource.sort = _this11.sort;
              } else {
                _this11.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].NoRecordFoundMessage, 'Dismiss', {
                  duration: 3000
                });

                return;
              }
            }, function (err) {});
          } // delete(id){
          //   this.confirmDialogRef = this.dialog.open(FuseConfirmDialogComponent, {
          //     disableClose: true
          // });
          // }

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
              _this12.get2WheelerManufacture();
            });
          }
        }, {
          key: "viewDialog",
          value: function viewDialog(action, data, buttonAction) {
            var _this13 = this;

            var params = {
              action: action,
              data: data,
              buttonAction: buttonAction
            };
            var dialogRef = this.dialog.open(_view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ViewDialogComponent"], {
              width: '800px',
              data: params,
              panelClass: 'app-action-dialog',
              autoFocus: false,
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              _this13.get2WheelerManufacture();
            });
          }
        }, {
          key: "changeVisibility",
          value: function changeVisibility(visibleOption, ev) {
            ev.stopPropagation();

            if (visibleOption == 'brandSearch') {
              this.brandSearch = !this.brandSearch;
              this.filterEntity.vehicle_brand_name = '';
            }

            if (visibleOption == 'modelSearch') {
              this.modelSearch = !this.modelSearch;
              this.filterEntity.vehicle_model_name = '';
            }

            if (visibleOption == 'typeSearch') {
              this.typeSearch = !this.typeSearch;
              this.filterEntity.vehicle_type_name = '';
            }

            if (visibleOption == 'descSearch') {
              this.descSearch = !this.descSearch;
              this.filterEntity.description = '';
            }

            if (visibleOption == 'statusSearch') {
              this.statusSearch = !this.statusSearch;
              this.filterEntity.statusString = '';
            }

            if (visibleOption == 'dateConvertSearch') {
              this.dateConvertSearch = !this.dateConvertSearch;
              this.filterEntity.dateConvert = '';
            }
          }
        }, {
          key: "tableExport",
          value: function tableExport() {
            this.exportedData = [];

            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              var fleet2Wheeler = this.dataSource.filteredData[i];
              var data = {
                'Vehicle Brand': fleet2Wheeler.vehicle_brand_name,
                'Vechicle Type': fleet2Wheeler.vehicle_type_name,
                'Vehicle Model': fleet2Wheeler.vehicle_model_name,
                'Description': fleet2Wheeler.description,
                'Created Date': fleet2Wheeler.created_date,
                'Status': fleet2Wheeler.statusString
              };
              this.exportedData.push(data);
            }

            var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].json_to_sheet(this.exportedData);
            var workBook = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].book_append_sheet(workBook, workSheet, 'Ev Fleet 2Wheelers List');
            xlsx__WEBPACK_IMPORTED_MODULE_9__["writeFile"](workBook, 'Ev Fleet 2Wheelers.xlsx');
          }
        }, {
          key: "pdfExport",
          value: function pdfExport() {
            var _this14 = this;

            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_10__["jsPDF"]({});
            this.exportedData = [];

            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              var fleet2Wheeler = this.dataSource.filteredData[i];
              var data = [fleet2Wheeler.vehicle_brand_name, fleet2Wheeler.vehicle_type_name, fleet2Wheeler.vehicle_model_name, fleet2Wheeler.description, fleet2Wheeler.created_date, fleet2Wheeler.statusString];
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
                doc.text('Ev Fleet 2Wheelers List Report', doc.internal.pageSize.getWidth() / 2, 11, {
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
                doc.text('Generated By:' + _this14.localStorage.f_Name, 195, 18, {
                  align: 'right'
                });
                doc = _this14.addWaterMark(doc);
              }
            }); // below line for Open PDF document in new tab

            doc.output('dataurlnewwindow'); // below line for Download PDF document  

            doc.save('Ev Fleet 2Wheelers.pdf');
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

        return List2WheelersComponent;
      }();

      List2WheelersComponent.ɵfac = function List2WheelersComponent_Factory(t) {
        return new (t || List2WheelersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_13__["EVFleetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]));
      };

      List2WheelersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: List2WheelersComponent,
        selectors: [["app-list2Wheelers"]],
        viewQuery: function List2WheelersComponent_Query(rf, ctx) {
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
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]])],
        decls: 36,
        vars: 7,
        consts: [[2, "text-align", "left", "margin-left", "10px", "margin-bottom", "10px", "margin-top", "10px"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Excel Download", 3, "click"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "PDF Download", 3, "click"], ["fxLayout", "row wrap", 1, "page-layout", "simple", "fullwidth", 2, "overflow", "scroll"], [1, "content", 2, "min-width", "auto"], [1, "mat-elevation-z8"], ["mat-table", "", "matTableFilter", "", "matSort", "", "mat-sort", "", 1, "mat-elevation-z8", 3, "dataSource", "exampleEntity", "filterType"], ["matColumnDef", "vehicle_brand_name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "vehicle_type_name"], ["matColumnDef", "vehicle_model_name"], ["matColumnDef", "description"], ["matColumnDef", "dateConvert"], ["matColumnDef", "status"], ["mat-cell", "", 3, "color", 4, "matCellDef"], ["matColumnDef", "action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["class", "custom_font_size", "style", "display: flex;", 4, "ngIf"], ["appearance", "outline", "class", "list_input", 4, "ngIf"], [1, "custom_font_size", 2, "display", "flex"], ["matSuffix", "", 3, "click"], ["appearance", "outline", 1, "list_input"], ["matInput", "", "placeholder", "Vehicle Brand", 3, "ngModel", "ngModelChange"], ["mat-cell", ""], ["matInput", "", "placeholder", "Vehicle Type", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Vehicle Model", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Description", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", " Created Date", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Status", 3, "ngModel", "ngModelChange"], ["mat-header-cell", ""], [1, "custom_font_size"], ["color", "primary", "matTooltip", "Moderate", 2, "cursor", "pointer", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function List2WheelersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List2WheelersComponent_Template_button_click_1_listener() {
              return ctx.tableExport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "sim_card_download");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List2WheelersComponent_Template_button_click_5_listener() {
              return ctx.pdfExport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "picture_as_pdf");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, List2WheelersComponent_th_13_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, List2WheelersComponent_td_14_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, List2WheelersComponent_th_16_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, List2WheelersComponent_td_17_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, List2WheelersComponent_th_19_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, List2WheelersComponent_td_20_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, List2WheelersComponent_th_22_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, List2WheelersComponent_td_23_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, List2WheelersComponent_th_25_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, List2WheelersComponent_td_26_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, List2WheelersComponent_th_28_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, List2WheelersComponent_td_29_Template, 2, 3, "td", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, List2WheelersComponent_th_31_Template, 3, 0, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, List2WheelersComponent_td_32_Template, 4, 0, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, List2WheelersComponent_tr_33_Template, 1, 0, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, List2WheelersComponent_tr_34_Template, 1, 0, "tr", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-paginator", 20);

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
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], mat_table_filter__WEBPACK_IMPORTED_MODULE_6__["MatTableFilterDirective"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        styles: ["mat-form-field.list_input div.mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\n.mat-header-cell .custom_font_size {\n  font-size: 15px !important;\n  text-align: left;\n}\n\nmat-form-field.list_input div.mat-form-field-infix {\n  padding: 0.5em 0 0.5em 0 !important;\n}\n\ntable {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGxpc3QyV2hlZWxlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFDRSw0QkFBQTtBQVhGOztBQWFBO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtBQVZGOztBQVlBO0VBQ0UsbUNBQUE7QUFURjs7QUFZQTtFQUNJLFdBQUE7QUFUSjs7QUFZRTtFQUNFLFlBQUE7QUFUSiIsImZpbGUiOiJsaXN0MldoZWVsZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGFibGUge1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIC5tYXQtZm9ybS1maWVsZCB7XHJcbi8vICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgdGQsIHRoIHtcclxuLy8gICAgIHdpZHRoOiAyNSU7XHJcbi8vICAgfVxyXG5tYXQtZm9ybS1maWVsZC5saXN0X2lucHV0ICBkaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcclxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtaGVhZGVyLWNlbGwgLmN1c3RvbV9mb250X3NpemV7XHJcbiAgZm9udC1zaXplOiAxNXB4ICAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxubWF0LWZvcm0tZmllbGQubGlzdF9pbnB1dCBkaXYubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gIHBhZGRpbmc6IDAuNWVtIDAgMC41ZW0gMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICJdfQ== */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_7__["fuseAnimations"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](List2WheelersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-list2Wheelers',
            templateUrl: './list2Wheelers.component.html',
            styleUrls: ['./list2Wheelers.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_7__["fuseAnimations"],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]]
          }]
        }], function () {
          return [{
            type: app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_13__["EVFleetService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBar"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]
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
    "MWfe":
    /*!***************************************************************!*\
      !*** ./src/app/main/EV-space/EV-fleet/list/list.component.ts ***!
      \***************************************************************/

    /*! exports provided: ModerateList, ListComponent */

    /***/
    function MWfe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModerateList", function () {
        return ModerateList;
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
      "1CSc");
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
      "Puw5");
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! xlsx */
      "EUZL");
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_10__);
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! app/shared/services/ev-space/ev-fleet.service */
      "ze/K");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
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


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
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

      function ListComponent_th_13_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Brand Name \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_13_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r16.changeVisibility("brandSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_th_13_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_th_13_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r18.filterEntity.brand_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_13_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r20.changeVisibility("brandSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r15.filterEntity.brand_name);
        }
      }

      function ListComponent_th_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_th_13_span_1_Template, 4, 0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_th_13_mat_form_field_2_Template, 4, 1, "mat-form-field", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.brandSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.brandSearch);
        }
      }

      function ListComponent_td_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r21.brand_name, " ");
        }
      }

      function ListComponent_th_16_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vehicle Type \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_16_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r24.changeVisibility("vehicleSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_th_16_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_th_16_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r26.filterEntity.vehicleType_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_16_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r28.changeVisibility("vehicleSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r23.filterEntity.vehicleType_name);
        }
      }

      function ListComponent_th_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_th_16_span_1_Template, 4, 0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_th_16_mat_form_field_2_Template, 4, 1, "mat-form-field", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.vehicleSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.vehicleSearch);
        }
      }

      function ListComponent_td_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r29.vehicleType_name, " ");
        }
      }

      function ListComponent_th_19_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_19_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r32.changeVisibility("nameSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_th_19_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_th_19_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r34.filterEntity.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_19_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r36.changeVisibility("nameSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r31.filterEntity.name);
        }
      }

      function ListComponent_th_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_th_19_span_1_Template, 4, 0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_th_19_mat_form_field_2_Template, 4, 1, "mat-form-field", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.nameSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.nameSearch);
        }
      }

      function ListComponent_td_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r37.name, " ");
        }
      }

      function ListComponent_th_22_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Created Date \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_22_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r40.changeVisibility("dateConvertSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_th_22_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_th_22_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r42.filterEntity.dateConvert = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_22_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r44.changeVisibility("dateConvertSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r39.filterEntity.dateConvert);
        }
      }

      function ListComponent_th_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_th_22_span_1_Template, 4, 0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_th_22_mat_form_field_2_Template, 4, 1, "mat-form-field", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.dateConvertSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.dateConvertSearch);
        }
      }

      function ListComponent_td_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r45 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r45.dateConvert, " ");
        }
      }

      function ListComponent_th_25_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_25_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r48.changeVisibility("statusSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_th_25_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_th_25_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r50.filterEntity.statusString = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_25_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
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

      function ListComponent_th_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_th_25_span_1_Template, 4, 0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_th_25_mat_form_field_2_Template, 4, 1, "mat-form-field", 22);

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

      function ListComponent_td_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 27);

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

      function ListComponent_th_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_td_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_td_29_Template_mat_icon_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56);

            var element_r54 = ctx.$implicit;

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r55.viewDialog("VIEW", element_r54, "viewAction");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_td_29_Template_mat_icon_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56);

            var element_r54 = ctx.$implicit;

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r57.openDialog("EDIT", element_r54);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_td_29_Template_mat_icon_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56);

            var element_r54 = ctx.$implicit;

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r58.viewDialog("Publish", element_r54, "publishAction");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " published_with_changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_td_29_Template_mat_icon_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56);

            var element_r54 = ctx.$implicit;

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r59["delete"](element_r54.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_tr_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 38);
        }
      }

      function ListComponent_tr_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 39);
        }
      }

      var _c0 = function _c0() {
        return [10, 30, 50, 100];
      };

      var ModerateList = function ModerateList() {
        _classCallCheck(this, ModerateList);
      };

      var ListComponent = /*#__PURE__*/function () {
        function ListComponent(evFleetService, dialog, snackBar, datepipe) {
          _classCallCheck(this, ListComponent);

          this.evFleetService = evFleetService;
          this.dialog = dialog;
          this.snackBar = snackBar;
          this.datepipe = datepipe;
          this.displayedColumns = ['brand_name', 'vehicleType_name', 'name', 'dateConvert', 'status', 'action'];
          this.head = [['Brand Name', 'Vehicle Type', 'Name', 'Created Date', 'Status']];
          this.brandSearch = false;
          this.vehicleSearch = false;
          this.nameSearch = false;
          this.capcitySearch = false;
          this.roadSearch = false;
          this.statusSearch = false;
          this.dateConvertSearch = false;
        }

        _createClass(ListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
            this.getModrateList();
            this.filterEntity = new ModerateList();
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
          key: "getModrateList",
          value: function getModrateList() {
            var _this15 = this;

            this.evFleetService.getAllModerateVehicle().subscribe(function (resp) {
              if (resp != null) {
                _this15.moderateList = resp.data;

                for (var i = 0; i < _this15.moderateList.length; i++) {
                  _this15.moderateList[i].dateConvert = _this15.datepipe.transform(_this15.moderateList[i].created_date, 'dd/MM/yyyy hh:mm:ss');

                  if (_this15.moderateList[i].status == 'N') {
                    _this15.moderateList[i].statusString = 'Inactive';
                  } else {
                    _this15.moderateList[i].statusString = 'Moderate';
                  }
                }

                _this15.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this15.moderateList);
                _this15.dataSource.paginator = _this15.paginator;
                _this15.dataSource.sort = _this15.sort;
              } else {
                _this15.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].NoRecordFoundMessage, 'Dismiss', {
                  duration: 3000
                });

                return;
              }
            }, function (err) {});
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var _this16 = this;

            this.confirmDialogRef = this.dialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__["FuseConfirmDialogComponent"], {
              disableClose: true
            });
            this.confirmDialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                _this16.evFleetService.deleteEvFleet(id, _this16.localStorage.userId).subscribe(function (resp) {
                  if (resp.status == true) {
                    _this16.getModrateList();

                    _this16.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].deleteMessage, 'Dismiss', {
                      duration: 2000
                    });
                  }
                }, function (err) {});
              }

              _this16.confirmDialogRef = null;
            });
          }
        }, {
          key: "openDialog",
          value: function openDialog(action, data) {
            var _this17 = this;

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
              _this17.getModrateList();
            });
          }
        }, {
          key: "viewDialog",
          value: function viewDialog(action, data, buttonAction) {
            var _this18 = this;

            var params = {
              action: action,
              data: data,
              buttonAction: buttonAction
            };
            var dialogRef = this.dialog.open(_view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ViewDialogComponent"], {
              width: '800px',
              data: params,
              panelClass: 'app-action-dialog',
              autoFocus: false,
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              _this18.getModrateList();
            });
          }
        }, {
          key: "changeVisibility",
          value: function changeVisibility(visibleOption, ev) {
            ev.stopPropagation();

            if (visibleOption == 'brandSearch') {
              this.brandSearch = !this.brandSearch;
              this.filterEntity.brand_name = '';
            }

            if (visibleOption == 'vehicleSearch') {
              this.vehicleSearch = !this.vehicleSearch;
              this.filterEntity.vehicleType_name = '';
            }

            if (visibleOption == 'nameSearch') {
              this.nameSearch = !this.nameSearch;
              this.filterEntity.name = '';
            }

            if (visibleOption == 'statusSearch') {
              this.statusSearch = !this.statusSearch;
              this.filterEntity.statusString = '';
            }

            if (visibleOption == 'dateConvertSearch') {
              this.dateConvertSearch = !this.dateConvertSearch;
              this.filterEntity.dateConvert = '';
            }
          }
        }, {
          key: "tableExport",
          value: function tableExport() {
            this.exportedData = [];

            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              var moderateModel = this.dataSource.filteredData[i];
              var data = {
                'Brand Name': moderateModel.brand_name,
                'Vechicle Type': moderateModel.vehicleType_name,
                'Name': moderateModel.name,
                'Created Date': moderateModel.dateConvert,
                'Status': moderateModel.statusString
              };
              this.exportedData.push(data);
            }

            var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].json_to_sheet(this.exportedData);
            var workBook = xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].book_append_sheet(workBook, workSheet, 'Ev Fleet Modrate List');
            xlsx__WEBPACK_IMPORTED_MODULE_10__["writeFile"](workBook, 'Ev Fleet Modrate.xlsx');
          }
        }, {
          key: "pdfExport",
          value: function pdfExport() {
            var _this19 = this;

            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_11__["jsPDF"]({});
            this.exportedData = [];

            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              var moderateModel = this.dataSource.filteredData[i];
              var data = [moderateModel.brand_name, moderateModel.vehicleType_name, moderateModel.name, moderateModel.dateConvert, moderateModel.statusString];
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
                doc.text('Ev Fleet Modrate List', doc.internal.pageSize.getWidth() / 2, 11, {
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
                doc.text('Generated By:' + _this19.localStorage.f_Name, 195, 18, {
                  align: 'right'
                });
                doc = _this19.addWaterMark(doc);
              }
            }); // below line for Open PDF document in new tab

            doc.output('dataurlnewwindow'); // below line for Download PDF document  

            doc.save('Ev Fleet Modrate.pdf');
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
        return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_14__["EVFleetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]));
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
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]])],
        decls: 33,
        vars: 7,
        consts: [[2, "text-align", "left", "margin-left", "10px", "margin-bottom", "10px", "margin-top", "10px"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Excel Download", 3, "click"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "PDF Download", 3, "click"], ["fxLayout", "row wrap", 1, "page-layout", "simple", "fullwidth", 2, "overflow", "scroll"], [1, "content", 2, "min-width", "auto"], [1, "mat-elevation-z8"], ["mat-table", "", "matTableFilter", "", "matSort", "", "mat-sort", "", 1, "mat-elevation-z8", 3, "dataSource", "exampleEntity", "filterType"], ["matColumnDef", "brand_name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "vehicleType_name"], ["matColumnDef", "name"], ["matColumnDef", "dateConvert"], ["matColumnDef", "status"], ["mat-cell", "", 3, "color", 4, "matCellDef"], ["matColumnDef", "action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["class", "custom_font_size", "style", "display: flex;", 4, "ngIf"], ["appearance", "outline", "class", "list_input", 4, "ngIf"], [1, "custom_font_size", 2, "display", "flex"], ["matSuffix", "", 3, "click"], ["appearance", "outline", 1, "list_input"], ["matInput", "", "placeholder", "Brand Name", 3, "ngModel", "ngModelChange"], ["mat-cell", ""], ["matInput", "", "placeholder", " Vehicle Type ", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Name ", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", " Created Date", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Status", 3, "ngModel", "ngModelChange"], ["mat-header-cell", ""], [1, "custom_font_size"], ["color", "primary", "matTooltip", "View", 2, "cursor", "pointer", 3, "click"], ["color", "primary", "matTooltip", "Edit", 2, "cursor", "pointer", 3, "click"], ["color", "primary", "matTooltip", "Publish", 2, "cursor", "pointer", 3, "click"], ["color", "warn", "matTooltip", "Remove", 2, "cursor", "pointer", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ListComponent_th_13_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ListComponent_td_14_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ListComponent_th_16_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ListComponent_td_17_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ListComponent_th_19_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ListComponent_td_20_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ListComponent_th_22_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ListComponent_td_23_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ListComponent_th_25_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ListComponent_td_26_Template, 2, 3, "td", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ListComponent_th_28_Template, 3, 0, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ListComponent_td_29_Template, 12, 0, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ListComponent_tr_30_Template, 1, 0, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ListComponent_tr_31_Template, 1, 0, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "mat-paginator", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("exampleEntity", ctx.filterEntity)("filterType", ctx.filterType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], mat_table_filter__WEBPACK_IMPORTED_MODULE_6__["MatTableFilterDirective"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        styles: ["mat-form-field.list_input div.mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\n.mat-header-cell .custom_font_size {\n  font-size: 15px !important;\n  text-align: left;\n}\n\nmat-form-field.list_input div.mat-form-field-infix {\n  padding: 0.5em 0 0.5em 0 !important;\n}\n\ntable {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFDRSw0QkFBQTtBQVhGOztBQWFBO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtBQVZGOztBQVlBO0VBQ0UsbUNBQUE7QUFURjs7QUFZQTtFQUNJLFdBQUE7QUFUSjs7QUFZRTtFQUNFLFlBQUE7QUFUSiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGFibGUge1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIC5tYXQtZm9ybS1maWVsZCB7XHJcbi8vICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgdGQsIHRoIHtcclxuLy8gICAgIHdpZHRoOiAyNSU7XHJcbi8vICAgfVxyXG5tYXQtZm9ybS1maWVsZC5saXN0X2lucHV0ICBkaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcclxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtaGVhZGVyLWNlbGwgLmN1c3RvbV9mb250X3NpemV7XHJcbiAgZm9udC1zaXplOiAxNXB4ICAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxubWF0LWZvcm0tZmllbGQubGlzdF9pbnB1dCBkaXYubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gIHBhZGRpbmc6IDAuNWVtIDAgMC41ZW0gMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICJdfQ== */"],
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
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_7__["fuseAnimations"],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]]
          }]
        }], function () {
          return [{
            type: app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_14__["EVFleetService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBar"]
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
    "Puw5":
    /*!*****************************************************************************!*\
      !*** ./src/app/main/EV-space/EV-fleet/view-dialog/view-dialog.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ViewDialogComponent */

    /***/
    function Puw5(module, __webpack_exports__, __webpack_require__) {
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


      var app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/utils/message.constant */
      "AgqY");
      /* harmony import */


      var _fuse_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fuse/animations */
      "PVWW");
      /* harmony import */


      var app_shared_services_ev_space_govt_subsidy_govt_subsidy_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/services/ev-space/govt-subsidy/govt-subsidy.service */
      "/iNp");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/shared/services/master/master.service */
      "auZQ");
      /* harmony import */


      var app_shared_services_charger_type_charger_type_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! app/shared/services/charger-type/charger-type.service */
      "zADy");
      /* harmony import */


      var app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! app/shared/services/ev-space/ev-fleet.service */
      "ze/K");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var _c0 = ["toggleElement"];

      function ViewDialogComponent_mat_option_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r15.name, " ");
        }
      }

      function ViewDialogComponent_mat_error_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select brand ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_option_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r16.name, " ");
        }
      }

      function ViewDialogComponent_mat_error_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select vehicle type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_option_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 34);

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

      function ViewDialogComponent_mat_error_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select connector type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_option_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 34);

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

      function ViewDialogComponent_mat_error_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select charger type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_button_84_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewDialogComponent_button_84_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.onPublish();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Publish");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_button_85_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewDialogComponent_button_85_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.onModrate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Moderate");

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
        function ViewDialogComponent(fb, govtSubsidyService, snackBar, masterService, dialogRef, data, chargerTypeService, evFleetService) {
          _classCallCheck(this, ViewDialogComponent);

          this.fb = fb;
          this.govtSubsidyService = govtSubsidyService;
          this.snackBar = snackBar;
          this.masterService = masterService;
          this.dialogRef = dialogRef;
          this.data = data;
          this.chargerTypeService = chargerTypeService;
          this.evFleetService = evFleetService;
          this.isEditMode = false;
          this.status = false;
          this.isPublish = false;
          this.isModrate = false;
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
            this.menuArray = JSON.parse(localStorage.getItem('activeMenuItems'));
            this.params = this.data;
            this.isEditMode = this.params.action == 'CREATE' ? false : true;
            this.isPublish = this.params.buttonAction == 'publishAction' ? true : false;
            this.isModrate = this.params.buttonAction == 'modrateAction' ? true : false;
            this.form = this.fb.group({
              brand: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              vehicle: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              connector_type: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              charger_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              name: [''],
              driver_range: [''],
              image: [''],
              status: this.status == true ? 'M' : 'N'
            });
            this.getVehicle();
            this.getBrands();
            this.getConnectorTypes();
            this.getChargerTypes();

            if (this.isEditMode) {
              this.assignValues(this.params);
            }
          }
        }, {
          key: "getVehicle",
          value: function getVehicle() {
            var _this20 = this;

            this.govtSubsidyService.getVehicleTypes().subscribe(function (resp) {
              _this20.vehicles = resp;

              if (_this20.isEditMode) {
                var toSelect = _this20.vehicles.find(function (c) {
                  return c.id == _this20.params.data.vehicle_type_id;
                });

                _this20.form.get('vehicle').setValue(toSelect);
              }

              _this20.filteredOptionsVehicle = _this20.form.controls.vehicle.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                return typeof value === 'string' ? value : value.name;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) {
                return name ? _this20._filterVehicleModels(name) : _this20.vehicles;
              }));
            }, function (err) {});
          }
        }, {
          key: "displayVehicle",
          value: function displayVehicle(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "_filterVehicleModels",
          value: function _filterVehicleModels(name) {
            var filterValue = name.toLowerCase();
            return this.vehicles.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
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
          key: "getBrands",
          value: function getBrands() {
            var _this21 = this;

            this.masterService.getBrands().subscribe(function (data) {
              _this21.brands = data;

              if (_this21.isEditMode) {
                var toSelect = _this21.brands.find(function (c) {
                  return c.id == _this21.params.data.brand_id;
                });

                _this21.form.get('brand').setValue(toSelect);
              }

              _this21.filteredOptionsBrand = _this21.form.controls.brand.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                return typeof value === 'string' ? value : value.name;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) {
                return name ? _this21._filterBrands(name) : _this21.brands;
              }));
            }, function (err) {});
          }
        }, {
          key: "_filterBrands",
          value: function _filterBrands(name) {
            var filterValue = name.toLowerCase();
            return this.brands.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "displayBrand",
          value: function displayBrand(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "getConnectorTypes",
          value: function getConnectorTypes() {
            var _this22 = this;

            this.masterService.getConnectorTypes().subscribe(function (resp) {
              _this22.connectorTypes = resp;

              if (_this22.isEditMode) {
                var toSelect = _this22.connectorTypes.find(function (c) {
                  return c.id == _this22.params.data.connector_type_id;
                });

                _this22.form.get('connector_type').setValue(toSelect);
              }

              _this22.filteredConnecterType = _this22.form.controls.connector_type.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                return typeof value === 'string' ? value : value.name;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) {
                return name ? _this22._filterConnectorType(name) : _this22.connectorTypes;
              }));
            }, function (err) {});
          }
        }, {
          key: "displayConnectorType",
          value: function displayConnectorType(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "_filterConnectorType",
          value: function _filterConnectorType(name) {
            var filterValue = name.toLowerCase();
            return this.connectorTypes.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "getChargerTypes",
          value: function getChargerTypes() {
            var _this23 = this;

            this.chargerTypeService.getChargerTypes().subscribe(function (resp) {
              if (resp != null) {
                _this23.chargersType = resp;

                if (_this23.isEditMode) {
                  var toSelect = _this23.chargersType.find(function (c) {
                    return c.id == _this23.params.data.charger_type_id;
                  });

                  _this23.form.get('charger_type').setValue(toSelect);
                }

                _this23.filteredChargerType = _this23.form.controls.charger_type.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                  return typeof value === 'string' ? value : value.name;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) {
                  return name ? _this23._filterChargerType(name) : _this23.chargersType;
                }));
              }
            }, function (err) {});
          }
        }, {
          key: "displayChargerType",
          value: function displayChargerType(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "_filterChargerType",
          value: function _filterChargerType(name) {
            var filterValue = name.toLowerCase();
            return this.chargersType.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "assignValues",
          value: function assignValues(params) {
            this.form.get('name').setValue(params.data.name);
            this.form.get('driver_range').setValue(params.data.driver_range);
            this.form.get('image').setValue(params.data.image_url);
            this.status = params.data.status == 'M' ? true : false;
          }
        }, {
          key: "updateStatus",
          value: function updateStatus(event) {
            this.status = event.checked;
            this.ref.checked = this.status;
          }
        }, {
          key: "onPublish",
          value: function onPublish() {
            var _this24 = this;

            var params = {
              id: this.params.data.id,
              status: "Y",
              modify_by: this.localStorage.userId
            };
            this.evFleetService.publishEvFleet(params).subscribe(function (resp) {
              if (resp.status == true) {
                _this24.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_4__["MessageConstant"].recordUpdateMessage, 'Dismiss', {
                  duration: 5000
                });

                _this24.dialogRef.close();
              }
            }, function (err) {
              _this24.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_4__["MessageConstant"].errorMessage, 'Dismiss', {
                duration: 5000
              });

              _this24.dialogRef.close();
            });
          }
        }, {
          key: "onModrate",
          value: function onModrate() {
            var _this25 = this;

            var params = {
              id: this.params.data.id,
              status: "M",
              modify_by: this.localStorage.userId
            };
            this.evFleetService.moderateEvFleet(params).subscribe(function (resp) {
              if (resp.status == true) {
                _this25.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_4__["MessageConstant"].recordUpdateMessage, 'Dismiss', {
                  duration: 5000
                });

                _this25.dialogRef.close();
              }
            }, function (err) {
              _this25.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_4__["MessageConstant"].errorMessage, 'Dismiss', {
                duration: 5000
              });

              _this25.dialogRef.close();
            });
          }
        }]);

        return ViewDialogComponent;
      }();

      ViewDialogComponent.ɵfac = function ViewDialogComponent_Factory(t) {
        return new (t || ViewDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_ev_space_govt_subsidy_govt_subsidy_service__WEBPACK_IMPORTED_MODULE_6__["GovtSubsidyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_8__["MasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_charger_type_charger_type_service__WEBPACK_IMPORTED_MODULE_9__["ChargerTypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_10__["EVFleetService"]));
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
        decls: 88,
        vars: 30,
        consts: [["id", "dialog_action_close", "matTooltip", "Close window", 1, "material-icons-outlined", 2, "cursor", "pointer", "color", "white", 3, "click"], [1, "action_toolbar"], [2, "padding", "24px", "max-height", "22vw", "overflow", "auto"], ["id", "forms", "fxLayout", "column", 1, "page-layout", "simple", "fullwidth"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", "name", "form", 1, "mat-elevation-z4", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "50", 1, "pr-4"], ["type", "text", "matInput", "", "formControlName", "brand", "autocomplete", "off", "readonly", "", 3, "matAutocomplete"], [3, "displayWith"], ["brandAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 1, "secondary-text"], [4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "vehicle", "autocomplete", "off", "readonly", "", 3, "matAutocomplete"], ["vehicleAuto", "matAutocomplete"], ["type", "text", "matInput", "", "formControlName", "connector_type", "autocomplete", "off", "readonly", "", 3, "matAutocomplete"], ["stateAuto", "matAutocomplete"], ["matSuffix", "", 2, "display", "flex"], ["matSuffix", "", "matTooltip", "Please select connector type", 1, "secondary-text"], ["type", "text", "matInput", "", "formControlName", "charger_type", "autocomplete", "off", "readonly", "", 3, "matAutocomplete"], ["chargerAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select charger type", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "name", "type", "text", "autocomplete", "off", "readonly", ""], ["matSuffix", "", "matTooltip", "Please enter mobile", 1, "secondary-text"], ["matInput", "", "formControlName", "driver_range", "type", "number", "autocomplete", "off", "readonly", ""], ["matSuffix", "", "matTooltip", "Please enter driver range", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "image", "type", "text", "autocomplete", "off", "readonly", ""], ["matSuffix", "", "matTooltip", "select image", 1, "secondary-text"], ["fxFlex", "50", "fxFlex.lt-sm", "100"], ["disabled", "", "color", "primary", 1, "example-margin", 3, "checked", "change"], ["toggleElement", ""], ["fxLayout", "row", "fxLayoutAlign", "start center", 2, "padding-top", "10px"], ["mat-raised-button", "", "color", "primary", "type", "button", "class", "mr-8", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "type", "button", "color", "warn", 1, "mr-8", 3, "click"], [3, "value"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "mr-8", 3, "click"]],
        template: function ViewDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewDialogComponent_Template_mat_icon_click_0_listener() {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-autocomplete", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ViewDialogComponent_mat_option_14_Template, 2, 2, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ViewDialogComponent_mat_error_18_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Vehicle Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-autocomplete", 8, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ViewDialogComponent_mat_option_25_Template, 2, 2, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ViewDialogComponent_mat_error_29_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Connector Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-autocomplete", 8, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ViewDialogComponent_mat_option_37_Template, 2, 2, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ViewDialogComponent_mat_error_44_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Charger Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-autocomplete", 8, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ViewDialogComponent_mat_option_51_Template, 2, 2, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-icon", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, ViewDialogComponent_mat_error_58_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Driver Range");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-icon", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Image Url");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-icon", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-slide-toggle", 29, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ViewDialogComponent_Template_mat_slide_toggle_change_80_listener($event) {
              return ctx.updateStatus($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, ViewDialogComponent_button_84_Template, 2, 0, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, ViewDialogComponent_button_85_Template, 2, 0, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewDialogComponent_Template_button_click_86_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.menuArray == null ? null : ctx.menuArray.title, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayBrand);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 22, ctx.filteredOptionsBrand));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("brand").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayVehicle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 24, ctx.filteredOptionsVehicle));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("vehicle").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayConnectorType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 26, ctx.filteredConnecterType));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("connector_type").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayChargerType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 28, ctx.filteredChargerType));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("charger_type").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.status);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.status ? "Moderate" : "Inactive", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPublish);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isModrate);
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatError"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__["AsyncPipe"]],
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
            type: app_shared_services_ev_space_govt_subsidy_govt_subsidy_service__WEBPACK_IMPORTED_MODULE_6__["GovtSubsidyService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
          }, {
            type: app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_8__["MasterService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: app_shared_services_charger_type_charger_type_service__WEBPACK_IMPORTED_MODULE_9__["ChargerTypeService"]
          }, {
            type: app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_10__["EVFleetService"]
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
    "TCjq":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/main/EV-space/EV-fleet/electric-cycle-manufactures/electric-cycle-manufactures.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: ElectricCycleManufactures, ElectricCycleManufacturesComponent */

    /***/
    function TCjq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElectricCycleManufactures", function () {
        return ElectricCycleManufactures;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElectricCycleManufacturesComponent", function () {
        return ElectricCycleManufacturesComponent;
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
      "1CSc");
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


      var _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../view-dialog/view-dialog.component */
      "Puw5");
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! app/shared/services/ev-space/ev-fleet.service */
      "ze/K");
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


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function ElectricCycleManufacturesComponent_th_13_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vehicle Brand \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricCycleManufacturesComponent_th_13_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r18.changeVisibility("brandSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ElectricCycleManufacturesComponent_th_13_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ElectricCycleManufacturesComponent_th_13_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r20.filterEntity.vehicle_brand_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricCycleManufacturesComponent_th_13_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r22.changeVisibility("brandSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r17.filterEntity.vehicle_brand_name);
        }
      }

      function ElectricCycleManufacturesComponent_th_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ElectricCycleManufacturesComponent_th_13_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ElectricCycleManufacturesComponent_th_13_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.brandSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.brandSearch);
        }
      }

      function ElectricCycleManufacturesComponent_td_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r23.vehicle_brand_name, " ");
        }
      }

      function ElectricCycleManufacturesComponent_th_16_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vehicle Type \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricCycleManufacturesComponent_th_16_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r26.changeVisibility("typeSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ElectricCycleManufacturesComponent_th_16_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ElectricCycleManufacturesComponent_th_16_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r28.filterEntity.vehicle_type_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricCycleManufacturesComponent_th_16_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r30.changeVisibility("typeSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r25.filterEntity.vehicle_type_name);
        }
      }

      function ElectricCycleManufacturesComponent_th_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ElectricCycleManufacturesComponent_th_16_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ElectricCycleManufacturesComponent_th_16_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.typeSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.typeSearch);
        }
      }

      function ElectricCycleManufacturesComponent_td_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r31.vehicle_type_name, " ");
        }
      }

      function ElectricCycleManufacturesComponent_th_19_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vehicle Model \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricCycleManufacturesComponent_th_19_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r34.changeVisibility("modelSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ElectricCycleManufacturesComponent_th_19_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ElectricCycleManufacturesComponent_th_19_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r36.filterEntity.vehicle_model_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricCycleManufacturesComponent_th_19_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r38.changeVisibility("modelSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r33.filterEntity.vehicle_model_name);
        }
      }

      function ElectricCycleManufacturesComponent_th_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ElectricCycleManufacturesComponent_th_19_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ElectricCycleManufacturesComponent_th_19_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.modelSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.modelSearch);
        }
      }

      function ElectricCycleManufacturesComponent_td_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r39.vehicle_model_name, " ");
        }
      }

      function ElectricCycleManufacturesComponent_th_22_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricCycleManufacturesComponent_th_22_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r42.changeVisibility("descSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ElectricCycleManufacturesComponent_th_22_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ElectricCycleManufacturesComponent_th_22_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r44.filterEntity.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricCycleManufacturesComponent_th_22_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r46.changeVisibility("descSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r41.filterEntity.description);
        }
      }

      function ElectricCycleManufacturesComponent_th_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ElectricCycleManufacturesComponent_th_22_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ElectricCycleManufacturesComponent_th_22_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.descSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.descSearch);
        }
      }

      function ElectricCycleManufacturesComponent_td_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r47 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r47.description, " ");
        }
      }

      function ElectricCycleManufacturesComponent_th_25_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Created Date \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricCycleManufacturesComponent_th_25_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r50.changeVisibility("dateConvertSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ElectricCycleManufacturesComponent_th_25_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ElectricCycleManufacturesComponent_th_25_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r52.filterEntity.dateConvert = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricCycleManufacturesComponent_th_25_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r54.changeVisibility("dateConvertSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r49.filterEntity.dateConvert);
        }
      }

      function ElectricCycleManufacturesComponent_th_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ElectricCycleManufacturesComponent_th_25_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ElectricCycleManufacturesComponent_th_25_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.dateConvertSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.dateConvertSearch);
        }
      }

      function ElectricCycleManufacturesComponent_td_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r55 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r55.dateConvert, " ");
        }
      }

      function ElectricCycleManufacturesComponent_th_28_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricCycleManufacturesComponent_th_28_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r58.changeVisibility("statusSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ElectricCycleManufacturesComponent_th_28_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ElectricCycleManufacturesComponent_th_28_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r60.filterEntity.statusString = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricCycleManufacturesComponent_th_28_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r62.changeVisibility("statusSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r57.filterEntity.statusString);
        }
      }

      function ElectricCycleManufacturesComponent_th_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ElectricCycleManufacturesComponent_th_28_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ElectricCycleManufacturesComponent_th_28_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

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

      function ElectricCycleManufacturesComponent_td_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r63 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", row_r63.status == "Y" ? "green" : "red");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r63.statusString, " ");
        }
      }

      function ElectricCycleManufacturesComponent_th_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ElectricCycleManufacturesComponent_td_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricCycleManufacturesComponent_td_32_Template_mat_icon_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66);

            var element_r64 = ctx.$implicit;

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r65.viewDialog("Publish", element_r64, "modrateAction");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " published_with_changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ElectricCycleManufacturesComponent_tr_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 37);
        }
      }

      function ElectricCycleManufacturesComponent_tr_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 38);
        }
      }

      var _c0 = function _c0() {
        return [10, 30, 50, 100];
      };

      var ElectricCycleManufactures = function ElectricCycleManufactures() {
        _classCallCheck(this, ElectricCycleManufactures);
      };

      var ElectricCycleManufacturesComponent = /*#__PURE__*/function () {
        function ElectricCycleManufacturesComponent(evFleetService, dialog, snackBar, datepipe) {
          _classCallCheck(this, ElectricCycleManufacturesComponent);

          this.evFleetService = evFleetService;
          this.dialog = dialog;
          this.snackBar = snackBar;
          this.datepipe = datepipe;
          this.displayedColumns = ['vehicle_brand_name', 'vehicle_type_name', 'vehicle_model_name', 'description', 'dateConvert', 'status', 'action'];
          this.head = [['Vehicle Brand', 'Vehicle Type', 'Vehicle Model', 'Description', 'Created Date', 'Status']];
          this.brandSearch = false;
          this.modelSearch = false;
          this.typeSearch = false;
          this.descSearch = false;
          this.roadSearch = false;
          this.statusSearch = false;
          this.dateConvertSearch = false;
        }

        _createClass(ElectricCycleManufacturesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
            this.getEvCycleManufacture();
            this.filterEntity = new ElectricCycleManufactures();
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
          key: "getEvCycleManufacture",
          value: function getEvCycleManufacture() {
            var _this26 = this;

            this.evFleetService.getEvCycleVehicle().subscribe(function (resp) {
              if (resp.status == true) {
                _this26.electricCycle = resp.data;

                for (var i = 0; i < _this26.electricCycle.length; i++) {
                  _this26.electricCycle[i].dateConvert = _this26.datepipe.transform(_this26.electricCycle[i].created_date, 'dd/MM/yyyy hh:mm:ss');

                  if (_this26.electricCycle[i].status == 'N') {
                    _this26.electricCycle[i].statusString = 'Inactive';
                  } else {
                    _this26.electricCycle[i].statusString = 'Active';
                  }
                }

                _this26.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this26.electricCycle);
                _this26.dataSource.paginator = _this26.paginator;
                _this26.dataSource.sort = _this26.sort;
              } else {
                _this26.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].NoRecordFoundMessage, 'Dismiss', {
                  duration: 3000
                });

                return;
              }
            }, function (err) {});
          } // delete(id){
          //   this.confirmDialogRef = this.dialog.open(FuseConfirmDialogComponent, {
          //     disableClose: true
          // });
          // }

        }, {
          key: "openDialog",
          value: function openDialog(action, data) {
            var _this27 = this;

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
              _this27.getEvCycleManufacture();
            });
          }
        }, {
          key: "viewDialog",
          value: function viewDialog(action, data, buttonAction) {
            var _this28 = this;

            var params = {
              action: action,
              data: data,
              buttonAction: buttonAction
            };
            var dialogRef = this.dialog.open(_view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ViewDialogComponent"], {
              width: '800px',
              data: params,
              panelClass: 'app-action-dialog',
              autoFocus: false,
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              _this28.getEvCycleManufacture();
            });
          }
        }, {
          key: "changeVisibility",
          value: function changeVisibility(visibleOption, ev) {
            ev.stopPropagation();

            if (visibleOption == 'brandSearch') {
              this.brandSearch = !this.brandSearch;
              this.filterEntity.vehicle_brand_name = '';
            }

            if (visibleOption == 'modelSearch') {
              this.modelSearch = !this.modelSearch;
              this.filterEntity.vehicle_model_name = '';
            }

            if (visibleOption == 'typeSearch') {
              this.typeSearch = !this.typeSearch;
              this.filterEntity.vehicle_type_name = '';
            }

            if (visibleOption == 'descSearch') {
              this.descSearch = !this.descSearch;
              this.filterEntity.description = '';
            }

            if (visibleOption == 'statusSearch') {
              this.statusSearch = !this.statusSearch;
              this.filterEntity.statusString = '';
            }

            if (visibleOption == 'dateConvertSearch') {
              this.dateConvertSearch = !this.dateConvertSearch;
              this.filterEntity.dateConvert = '';
            }
          }
        }, {
          key: "tableExport",
          value: function tableExport() {
            this.exportedData = [];

            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              var fleet2Wheeler = this.dataSource.filteredData[i];
              var data = {
                'Vehicle Brand': fleet2Wheeler.vehicle_brand_name,
                'Vechicle Type': fleet2Wheeler.vehicle_type_name,
                'Vehicle Model': fleet2Wheeler.vehicle_model_name,
                'Description': fleet2Wheeler.description,
                'Created Date': fleet2Wheeler.created_date,
                'Status': fleet2Wheeler.statusString
              };
              this.exportedData.push(data);
            }

            var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].json_to_sheet(this.exportedData);
            var workBook = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].book_append_sheet(workBook, workSheet, 'Electric Cycle Manufactures List');
            xlsx__WEBPACK_IMPORTED_MODULE_9__["writeFile"](workBook, 'ElectricCycleManufactures.xlsx');
          }
        }, {
          key: "pdfExport",
          value: function pdfExport() {
            var _this29 = this;

            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_10__["jsPDF"]({});
            this.exportedData = [];

            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              var fleet2Wheeler = this.dataSource.filteredData[i];
              var data = [fleet2Wheeler.vehicle_brand_name, fleet2Wheeler.vehicle_type_name, fleet2Wheeler.vehicle_model_name, fleet2Wheeler.description, fleet2Wheeler.created_date, fleet2Wheeler.statusString];
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
                doc.text('Electric Cycle Manufactures List', doc.internal.pageSize.getWidth() / 2, 11, {
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
                doc.text('Generated By:' + _this29.localStorage.f_Name, 195, 18, {
                  align: 'right'
                });
                doc = _this29.addWaterMark(doc);
              }
            }); // below line for Open PDF document in new tab

            doc.output('dataurlnewwindow'); // below line for Download PDF document  

            doc.save('ElectricCycleManufactures.pdf');
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

        return ElectricCycleManufacturesComponent;
      }();

      ElectricCycleManufacturesComponent.ɵfac = function ElectricCycleManufacturesComponent_Factory(t) {
        return new (t || ElectricCycleManufacturesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_13__["EVFleetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]));
      };

      ElectricCycleManufacturesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ElectricCycleManufacturesComponent,
        selectors: [["app-electric-cycle-manufactures"]],
        viewQuery: function ElectricCycleManufacturesComponent_Query(rf, ctx) {
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
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]])],
        decls: 36,
        vars: 7,
        consts: [[2, "text-align", "left", "margin-left", "10px", "margin-bottom", "10px", "margin-top", "10px"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Excel Download", 3, "click"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "PDF Download", 3, "click"], ["fxLayout", "row wrap", 1, "page-layout", "simple", "fullwidth", 2, "overflow", "scroll"], [1, "content", 2, "min-width", "auto"], [1, "mat-elevation-z8"], ["mat-table", "", "matTableFilter", "", "matSort", "", "mat-sort", "", 1, "mat-elevation-z8", 3, "dataSource", "exampleEntity", "filterType"], ["matColumnDef", "vehicle_brand_name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "vehicle_type_name"], ["matColumnDef", "vehicle_model_name"], ["matColumnDef", "description"], ["matColumnDef", "dateConvert"], ["matColumnDef", "status"], ["mat-cell", "", 3, "color", 4, "matCellDef"], ["matColumnDef", "action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["class", "custom_font_size", "style", "display: flex;", 4, "ngIf"], ["appearance", "outline", "class", "list_input", 4, "ngIf"], [1, "custom_font_size", 2, "display", "flex"], ["matSuffix", "", 3, "click"], ["appearance", "outline", 1, "list_input"], ["matInput", "", "placeholder", "Vehicle Brand", 3, "ngModel", "ngModelChange"], ["mat-cell", ""], ["matInput", "", "placeholder", "Vehicle Type", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Vehicle Model", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Description", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", " Created Date", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Status", 3, "ngModel", "ngModelChange"], ["mat-header-cell", ""], [1, "custom_font_size"], ["color", "primary", "matTooltip", "Moderate", 2, "cursor", "pointer", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function ElectricCycleManufacturesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricCycleManufacturesComponent_Template_button_click_1_listener() {
              return ctx.tableExport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "sim_card_download");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricCycleManufacturesComponent_Template_button_click_5_listener() {
              return ctx.pdfExport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "picture_as_pdf");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ElectricCycleManufacturesComponent_th_13_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ElectricCycleManufacturesComponent_td_14_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ElectricCycleManufacturesComponent_th_16_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ElectricCycleManufacturesComponent_td_17_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ElectricCycleManufacturesComponent_th_19_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ElectricCycleManufacturesComponent_td_20_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ElectricCycleManufacturesComponent_th_22_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ElectricCycleManufacturesComponent_td_23_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ElectricCycleManufacturesComponent_th_25_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ElectricCycleManufacturesComponent_td_26_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ElectricCycleManufacturesComponent_th_28_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ElectricCycleManufacturesComponent_td_29_Template, 2, 3, "td", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ElectricCycleManufacturesComponent_th_31_Template, 3, 0, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ElectricCycleManufacturesComponent_td_32_Template, 4, 0, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ElectricCycleManufacturesComponent_tr_33_Template, 1, 0, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ElectricCycleManufacturesComponent_tr_34_Template, 1, 0, "tr", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-paginator", 20);

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
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], mat_table_filter__WEBPACK_IMPORTED_MODULE_6__["MatTableFilterDirective"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        styles: ["mat-form-field.list_input div.mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\n.mat-header-cell .custom_font_size {\n  font-size: 15px !important;\n  text-align: left;\n}\n\nmat-form-field.list_input div.mat-form-field-infix {\n  padding: 0.5em 0 0.5em 0 !important;\n}\n\ntable {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGVsZWN0cmljLWN5Y2xlLW1hbnVmYWN0dXJlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQTtFQUNFLDRCQUFBO0FBWEY7O0FBYUE7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0FBVkY7O0FBWUE7RUFDRSxtQ0FBQTtBQVRGOztBQVlBO0VBQ0ksV0FBQTtBQVRKOztBQVlFO0VBQ0UsWUFBQTtBQVRKIiwiZmlsZSI6ImVsZWN0cmljLWN5Y2xlLW1hbnVmYWN0dXJlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRhYmxlIHtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAubWF0LWZvcm0tZmllbGQge1xyXG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIHRkLCB0aCB7XHJcbi8vICAgICB3aWR0aDogMjUlO1xyXG4vLyAgIH1cclxubWF0LWZvcm0tZmllbGQubGlzdF9pbnB1dCAgZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XHJcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG4ubWF0LWhlYWRlci1jZWxsIC5jdXN0b21fZm9udF9zaXple1xyXG4gIGZvbnQtc2l6ZTogMTVweCAgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbm1hdC1mb3JtLWZpZWxkLmxpc3RfaW5wdXQgZGl2Lm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICBwYWRkaW5nOiAwLjVlbSAwIDAuNWVtIDAgIWltcG9ydGFudDtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIHRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAiXX0= */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_7__["fuseAnimations"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ElectricCycleManufacturesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-electric-cycle-manufactures',
            templateUrl: './electric-cycle-manufactures.component.html',
            styleUrls: ['./electric-cycle-manufactures.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_7__["fuseAnimations"],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]]
          }]
        }], function () {
          return [{
            type: app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_13__["EVFleetService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBar"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]
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
    "eg4j":
    /*!****************************************************************!*\
      !*** ./src/app/main/EV-space/EV-fleet/EV-fleet-crud/routes.ts ***!
      \****************************************************************/

    /*! exports provided: TABS_DEMO_ROUTES */

    /***/
    function eg4j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TABS_DEMO_ROUTES", function () {
        return TABS_DEMO_ROUTES;
      });
      /* harmony import */


      var _list_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../list/list.component */
      "MWfe");
      /* harmony import */


      var _create_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../create/create.component */
      "/L+0");
      /* harmony import */


      var app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! app/shared/interceptors/auth-gaurd */
      "9gca");
      /* harmony import */


      var _list2Wheeler_list2Wheelers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../list2Wheeler/list2Wheelers.component */
      "KmPu");
      /* harmony import */


      var _list4Wheelers_list4Wheelers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../list4Wheelers/list4Wheelers.component */
      "oelk");
      /* harmony import */


      var _list3Wheeler_list3Wheelers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../list3Wheeler/list3Wheelers.component */
      "zUWn");
      /* harmony import */


      var _electric_bus_manufactures_electric_bus_manufactures_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../electric-bus-manufactures/electric-bus-manufactures.component */
      "pSd6");
      /* harmony import */


      var _electric_truck_manufactures_electric_truck_manufactures_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../electric-truck-manufactures/electric-truck-manufactures.component */
      "ho7L");
      /* harmony import */


      var _electric_cycle_manufactures_electric_cycle_manufactures_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../electric-cycle-manufactures/electric-cycle-manufactures.component */
      "TCjq");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var TABS_DEMO_ROUTES = [{
        path: 'create',
        canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        component: _create_create_component__WEBPACK_IMPORTED_MODULE_1__["CreateComponent"]
      }, {
        path: 'listModerate',
        canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_0__["ListComponent"]
      }, {
        path: 'list2WheelersManufactures',
        canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        component: _list2Wheeler_list2Wheelers_component__WEBPACK_IMPORTED_MODULE_3__["List2WheelersComponent"]
      }, {
        path: 'list4WheelersManufactures',
        canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        component: _list4Wheelers_list4Wheelers_component__WEBPACK_IMPORTED_MODULE_4__["List4WheelersComponent"]
      }, {
        path: 'list3WheelersManufactures',
        canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        component: _list3Wheeler_list3Wheelers_component__WEBPACK_IMPORTED_MODULE_5__["List3WheelersComponent"]
      }, {
        path: 'listElectricBusManufactures',
        canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        component: _electric_bus_manufactures_electric_bus_manufactures_component__WEBPACK_IMPORTED_MODULE_6__["ElectricBusManufacturesComponent"]
      }, {
        path: 'listElectricTruckManufactures',
        canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        component: _electric_truck_manufactures_electric_truck_manufactures_component__WEBPACK_IMPORTED_MODULE_7__["ElectricTruckManufacturesComponent"]
      }, {
        path: 'listEvCycleManufactures',
        canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        component: _electric_cycle_manufactures_electric_cycle_manufactures_component__WEBPACK_IMPORTED_MODULE_8__["ElectricCycleManufacturesComponent"]
      }, {
        path: '',
        redirectTo: 'listModerate',
        pathMatch: 'full'
      }];
      /***/
    },

    /***/
    "h/WB":
    /*!*********************************************************************************!*\
      !*** ./src/app/main/EV-space/EV-fleet/EV-fleet-crud/EV-fleet-crud.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: EVFleetCrudComponent */

    /***/
    function hWB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EVFleetCrudComponent", function () {
        return EVFleetCrudComponent;
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

      function EVFleetCrudComponent_a_8_Template(rf, ctx) {
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


      var EVFleetCrudComponent = /*#__PURE__*/function () {
        function EVFleetCrudComponent(router, cdr, _utilityService) {
          _classCallCheck(this, EVFleetCrudComponent);

          this.router = router;
          this.cdr = cdr;
          this._utilityService = _utilityService;
          this.tabLinks = [// { label: '4 Wheelers', link: 'list4WheelersManufactures' },
            // { label: '3 Wheelers', link: 'list3WheelersManufactures' },
            // { label: '2 Wheelers', link: 'list2WheelersManufactures' },
            // { label: 'Electric Bus', link: 'listElectricBusManufactures' },
            // { label: 'Electric Truck', link: 'listElectricTruckManufactures' },
            // { label: 'Electric Cycle', link: 'listEvCycleManufactures' },
            // { label: 'Moderate', link: 'listModerate' },
            // { label: 'Add New', link: 'create' }
          ];
          this.tempLinks = [];
        }

        _createClass(EVFleetCrudComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this30 = this;

            this._utilityService.activeMenuItems$.subscribe(function (menuItemSelecte) {
              _this30.menuArray = menuItemSelecte;

              if (_this30.menuArray == null || _this30.menuArray == undefined || _this30.menuArray.title == null || _this30.menuArray.title == undefined) {
                _this30.menuArray = JSON.parse(localStorage.getItem('activeMenuItems'));
              }

              _this30.cdr.detectChanges();
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this31 = this;

            this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
            var nav_list = this.localStorage.nav_list_with_tab;
            nav_list.filter(function (x) {
              if (x.id === "evSpace") {
                _this31.objectData = x;

                if (_this31.objectData.children != undefined && _this31.objectData.children != null) {
                  _this31.objectData.children.filter(function (y) {
                    if (y.id === "evFleet") {
                      _this31.objectChildData = y;
                      var isDefaultRoutePermeted = false;

                      if (_this31.objectChildData.children != null && _this31.objectChildData.children != undefined) {
                        _this31.objectChildData.children.filter(function (z) {
                          if (z.id === "2wheelers manufactures") {
                            isDefaultRoutePermeted = true;

                            _this31.tempLinks.push({
                              label: '2 Wheelers',
                              link: 'list2WheelersManufactures'
                            });
                          }

                          if (z.id === "3wheelers manufactures") {
                            _this31.tempLinks.push({
                              label: '3 Wheelers',
                              link: 'list3WheelersManufactures'
                            });
                          }

                          if (z.id === "4wheelers manufactures") {
                            _this31.tempLinks.push({
                              label: '4 Wheelers',
                              link: 'list4WheelersManufactures'
                            });
                          }

                          if (z.id === "evCyclesManufactures") {
                            _this31.tempLinks.push({
                              label: 'Electric Cycle',
                              link: 'listEvCycleManufactures'
                            });
                          }

                          if (z.id === "electricBusManufactures") {
                            _this31.tempLinks.push({
                              label: 'Electric Bus',
                              link: 'listElectricBusManufactures'
                            });
                          }

                          if (z.id === "electricTruckManufactures") {
                            _this31.tempLinks.push({
                              label: 'Electric Truck',
                              link: 'listElectricTruckManufactures'
                            });
                          }

                          if (z.id === "moderate") {
                            _this31.tempLinks.push({
                              label: 'Moderate',
                              link: 'listModerate'
                            });
                          }

                          if (z.id === "create") {
                            _this31.tempLinks.push({
                              label: 'Add New',
                              link: 'create'
                            });
                          }
                        });
                      }

                      _this31.tabLinks = _this31.tempLinks;

                      if (!isDefaultRoutePermeted) {
                        _this31.router.navigate(['/evSpace/evFleet/crud' + _this31.tempLinks[0].link]);
                      }
                    }
                  });
                }
              }
            });
          }
        }]);

        return EVFleetCrudComponent;
      }();

      EVFleetCrudComponent.ɵfac = function EVFleetCrudComponent_Factory(t) {
        return new (t || EVFleetCrudComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]));
      };

      EVFleetCrudComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EVFleetCrudComponent,
        selectors: [["app-EV-fleet-crud"]],
        decls: 10,
        vars: 6,
        consts: [[2, "display", "block", "width", "100%"], ["id", "", "fxLayout", "row", 1, "page-layout", "simple", "right-sidebar"], ["fusePerfectScrollbar", "", 1, "center"], ["fxLayout", "column", "fxLayoutAlign", "space-between", 1, "header", "accent", "px-24", "pt-16", "pb-0"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [1, "mat-display-1", "my-0", "my-sm-24", "welcome-message"], ["mat-tab-nav-bar", "", "aria-label", "weather navigation links"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active"], ["rla", "routerLinkActive"]],
        template: function EVFleetCrudComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EVFleetCrudComponent_a_8_Template, 3, 3, "a", 7);

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
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJFVi1mbGVldC1jcnVkLmNvbXBvbmVudC5zY3NzIn0= */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EVFleetCrudComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-EV-fleet-crud',
            templateUrl: './EV-fleet-crud.component.html',
            styleUrls: ['./EV-fleet-crud.component.scss'],
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
      /***/

    },

    /***/
    "ho7L":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/main/EV-space/EV-fleet/electric-truck-manufactures/electric-truck-manufactures.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: ElectricTruckManufactures, ElectricTruckManufacturesComponent */

    /***/
    function ho7L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElectricTruckManufactures", function () {
        return ElectricTruckManufactures;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElectricTruckManufacturesComponent", function () {
        return ElectricTruckManufacturesComponent;
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
      "1CSc");
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


      var _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../view-dialog/view-dialog.component */
      "Puw5");
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! app/shared/services/ev-space/ev-fleet.service */
      "ze/K");
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


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function ElectricTruckManufacturesComponent_th_13_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vehicle Brand \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricTruckManufacturesComponent_th_13_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r18.changeVisibility("brandSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ElectricTruckManufacturesComponent_th_13_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ElectricTruckManufacturesComponent_th_13_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r20.filterEntity.vehicle_brand_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricTruckManufacturesComponent_th_13_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r22.changeVisibility("brandSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r17.filterEntity.vehicle_brand_name);
        }
      }

      function ElectricTruckManufacturesComponent_th_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ElectricTruckManufacturesComponent_th_13_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ElectricTruckManufacturesComponent_th_13_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.brandSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.brandSearch);
        }
      }

      function ElectricTruckManufacturesComponent_td_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r23.vehicle_brand_name, " ");
        }
      }

      function ElectricTruckManufacturesComponent_th_16_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vehicle Type \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricTruckManufacturesComponent_th_16_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r26.changeVisibility("typeSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ElectricTruckManufacturesComponent_th_16_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ElectricTruckManufacturesComponent_th_16_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r28.filterEntity.vehicle_type_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricTruckManufacturesComponent_th_16_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r30.changeVisibility("typeSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r25.filterEntity.vehicle_type_name);
        }
      }

      function ElectricTruckManufacturesComponent_th_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ElectricTruckManufacturesComponent_th_16_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ElectricTruckManufacturesComponent_th_16_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.typeSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.typeSearch);
        }
      }

      function ElectricTruckManufacturesComponent_td_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r31.vehicle_type_name, " ");
        }
      }

      function ElectricTruckManufacturesComponent_th_19_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vehicle Model \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricTruckManufacturesComponent_th_19_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r34.changeVisibility("modelSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ElectricTruckManufacturesComponent_th_19_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ElectricTruckManufacturesComponent_th_19_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r36.filterEntity.vehicle_model_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricTruckManufacturesComponent_th_19_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r38.changeVisibility("modelSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r33.filterEntity.vehicle_model_name);
        }
      }

      function ElectricTruckManufacturesComponent_th_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ElectricTruckManufacturesComponent_th_19_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ElectricTruckManufacturesComponent_th_19_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.modelSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.modelSearch);
        }
      }

      function ElectricTruckManufacturesComponent_td_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r39.vehicle_model_name, " ");
        }
      }

      function ElectricTruckManufacturesComponent_th_22_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricTruckManufacturesComponent_th_22_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r42.changeVisibility("descSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ElectricTruckManufacturesComponent_th_22_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ElectricTruckManufacturesComponent_th_22_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r44.filterEntity.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricTruckManufacturesComponent_th_22_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r46.changeVisibility("descSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r41.filterEntity.description);
        }
      }

      function ElectricTruckManufacturesComponent_th_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ElectricTruckManufacturesComponent_th_22_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ElectricTruckManufacturesComponent_th_22_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.descSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.descSearch);
        }
      }

      function ElectricTruckManufacturesComponent_td_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r47 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r47.description, " ");
        }
      }

      function ElectricTruckManufacturesComponent_th_25_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Created Date \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricTruckManufacturesComponent_th_25_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r50.changeVisibility("dateConvertSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ElectricTruckManufacturesComponent_th_25_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ElectricTruckManufacturesComponent_th_25_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r52.filterEntity.dateConvert = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricTruckManufacturesComponent_th_25_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r54.changeVisibility("dateConvertSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r49.filterEntity.dateConvert);
        }
      }

      function ElectricTruckManufacturesComponent_th_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ElectricTruckManufacturesComponent_th_25_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ElectricTruckManufacturesComponent_th_25_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.dateConvertSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.dateConvertSearch);
        }
      }

      function ElectricTruckManufacturesComponent_td_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r55 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r55.dateConvert, " ");
        }
      }

      function ElectricTruckManufacturesComponent_th_28_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricTruckManufacturesComponent_th_28_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r58.changeVisibility("statusSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ElectricTruckManufacturesComponent_th_28_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ElectricTruckManufacturesComponent_th_28_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r60.filterEntity.statusString = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricTruckManufacturesComponent_th_28_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r62.changeVisibility("statusSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r57.filterEntity.statusString);
        }
      }

      function ElectricTruckManufacturesComponent_th_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ElectricTruckManufacturesComponent_th_28_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ElectricTruckManufacturesComponent_th_28_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

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

      function ElectricTruckManufacturesComponent_td_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r63 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", row_r63.status == "Y" ? "green" : "red");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r63.statusString, " ");
        }
      }

      function ElectricTruckManufacturesComponent_th_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ElectricTruckManufacturesComponent_td_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricTruckManufacturesComponent_td_32_Template_mat_icon_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66);

            var element_r64 = ctx.$implicit;

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r65.viewDialog("Publish", element_r64, "modrateAction");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " published_with_changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ElectricTruckManufacturesComponent_tr_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 37);
        }
      }

      function ElectricTruckManufacturesComponent_tr_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 38);
        }
      }

      var _c0 = function _c0() {
        return [10, 30, 50, 100];
      };

      var ElectricTruckManufactures = function ElectricTruckManufactures() {
        _classCallCheck(this, ElectricTruckManufactures);
      };

      var ElectricTruckManufacturesComponent = /*#__PURE__*/function () {
        function ElectricTruckManufacturesComponent(evFleetService, dialog, snackBar, datepipe) {
          _classCallCheck(this, ElectricTruckManufacturesComponent);

          this.evFleetService = evFleetService;
          this.dialog = dialog;
          this.snackBar = snackBar;
          this.datepipe = datepipe;
          this.displayedColumns = ['vehicle_brand_name', 'vehicle_type_name', 'vehicle_model_name', 'description', 'dateConvert', 'status', 'action'];
          this.head = [['Vehicle Brand', 'Vehicle Type', 'Vehicle Model', 'Description', 'Created Date', 'Status']];
          this.brandSearch = false;
          this.modelSearch = false;
          this.typeSearch = false;
          this.descSearch = false;
          this.roadSearch = false;
          this.statusSearch = false;
          this.dateConvertSearch = false;
        }

        _createClass(ElectricTruckManufacturesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
            this.getEvTruckManufacture();
            this.filterEntity = new ElectricTruckManufactures();
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
          key: "getEvTruckManufacture",
          value: function getEvTruckManufacture() {
            var _this32 = this;

            this.evFleetService.getEvTruckVehicle().subscribe(function (resp) {
              if (resp.status == true) {
                _this32.electricTruck = resp.data;

                for (var i = 0; i < _this32.electricTruck.length; i++) {
                  _this32.electricTruck[i].dateConvert = _this32.datepipe.transform(_this32.electricTruck[i].created_date, 'dd/MM/yyyy hh:mm:ss');

                  if (_this32.electricTruck[i].status == 'N') {
                    _this32.electricTruck[i].statusString = 'Inactive';
                  } else {
                    _this32.electricTruck[i].statusString = 'Active';
                  }
                }

                _this32.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this32.electricTruck);
                _this32.dataSource.paginator = _this32.paginator;
                _this32.dataSource.sort = _this32.sort;
              } else {
                _this32.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].NoRecordFoundMessage, 'Dismiss', {
                  duration: 3000
                });

                return;
              }
            }, function (err) {});
          } // delete(id){
          //   this.confirmDialogRef = this.dialog.open(FuseConfirmDialogComponent, {
          //     disableClose: true
          // });
          // }

        }, {
          key: "openDialog",
          value: function openDialog(action, data) {
            var _this33 = this;

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
              _this33.getEvTruckManufacture();
            });
          }
        }, {
          key: "viewDialog",
          value: function viewDialog(action, data, buttonAction) {
            var _this34 = this;

            var params = {
              action: action,
              data: data,
              buttonAction: buttonAction
            };
            var dialogRef = this.dialog.open(_view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ViewDialogComponent"], {
              width: '800px',
              data: params,
              panelClass: 'app-action-dialog',
              autoFocus: false,
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              _this34.getEvTruckManufacture();
            });
          }
        }, {
          key: "changeVisibility",
          value: function changeVisibility(visibleOption, ev) {
            ev.stopPropagation();

            if (visibleOption == 'brandSearch') {
              this.brandSearch = !this.brandSearch;
              this.filterEntity.vehicle_brand_name = '';
            }

            if (visibleOption == 'modelSearch') {
              this.modelSearch = !this.modelSearch;
              this.filterEntity.vehicle_model_name = '';
            }

            if (visibleOption == 'typeSearch') {
              this.typeSearch = !this.typeSearch;
              this.filterEntity.vehicle_type_name = '';
            }

            if (visibleOption == 'descSearch') {
              this.descSearch = !this.descSearch;
              this.filterEntity.description = '';
            }

            if (visibleOption == 'statusSearch') {
              this.statusSearch = !this.statusSearch;
              this.filterEntity.statusString = '';
            }

            if (visibleOption == 'dateConvertSearch') {
              this.dateConvertSearch = !this.dateConvertSearch;
              this.filterEntity.dateConvert = '';
            }
          }
        }, {
          key: "tableExport",
          value: function tableExport() {
            this.exportedData = [];

            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              var fleet2Wheeler = this.dataSource.filteredData[i];
              var data = {
                'Vehicle Brand': fleet2Wheeler.vehicle_brand_name,
                'Vechicle Type': fleet2Wheeler.vehicle_type_name,
                'Vehicle Model': fleet2Wheeler.vehicle_model_name,
                'Description': fleet2Wheeler.description,
                'Created Date': fleet2Wheeler.created_date,
                'Status': fleet2Wheeler.statusString
              };
              this.exportedData.push(data);
            }

            var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].json_to_sheet(this.exportedData);
            var workBook = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].book_append_sheet(workBook, workSheet, 'Electric Truck Manufactures List');
            xlsx__WEBPACK_IMPORTED_MODULE_9__["writeFile"](workBook, 'ElectricTruckManufactures.xlsx');
          }
        }, {
          key: "pdfExport",
          value: function pdfExport() {
            var _this35 = this;

            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_10__["jsPDF"]({});
            this.exportedData = [];

            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              var fleet2Wheeler = this.dataSource.filteredData[i];
              var data = [fleet2Wheeler.vehicle_brand_name, fleet2Wheeler.vehicle_type_name, fleet2Wheeler.vehicle_model_name, fleet2Wheeler.description, fleet2Wheeler.created_date, fleet2Wheeler.statusString];
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
                doc.text('Electric Truck Manufactures List Report', doc.internal.pageSize.getWidth() / 2, 11, {
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
                doc.text('Generated By:' + _this35.localStorage.f_Name, 195, 18, {
                  align: 'right'
                });
                doc = _this35.addWaterMark(doc);
              }
            }); // below line for Open PDF document in new tab

            doc.output('dataurlnewwindow'); // below line for Download PDF document  

            doc.save('ElectricTruckManufactures.pdf');
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

        return ElectricTruckManufacturesComponent;
      }();

      ElectricTruckManufacturesComponent.ɵfac = function ElectricTruckManufacturesComponent_Factory(t) {
        return new (t || ElectricTruckManufacturesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_13__["EVFleetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]));
      };

      ElectricTruckManufacturesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ElectricTruckManufacturesComponent,
        selectors: [["app-electric-truck-manufactures"]],
        viewQuery: function ElectricTruckManufacturesComponent_Query(rf, ctx) {
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
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]])],
        decls: 36,
        vars: 7,
        consts: [[2, "text-align", "left", "margin-left", "10px", "margin-bottom", "10px", "margin-top", "10px"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Excel Download", 3, "click"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "PDF Download", 3, "click"], ["fxLayout", "row wrap", 1, "page-layout", "simple", "fullwidth", 2, "overflow", "scroll"], [1, "content", 2, "min-width", "auto"], [1, "mat-elevation-z8"], ["mat-table", "", "matTableFilter", "", "matSort", "", "mat-sort", "", 1, "mat-elevation-z8", 3, "dataSource", "exampleEntity", "filterType"], ["matColumnDef", "vehicle_brand_name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "vehicle_type_name"], ["matColumnDef", "vehicle_model_name"], ["matColumnDef", "description"], ["matColumnDef", "dateConvert"], ["matColumnDef", "status"], ["mat-cell", "", 3, "color", 4, "matCellDef"], ["matColumnDef", "action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["class", "custom_font_size", "style", "display: flex;", 4, "ngIf"], ["appearance", "outline", "class", "list_input", 4, "ngIf"], [1, "custom_font_size", 2, "display", "flex"], ["matSuffix", "", 3, "click"], ["appearance", "outline", 1, "list_input"], ["matInput", "", "placeholder", "Vehicle Brand", 3, "ngModel", "ngModelChange"], ["mat-cell", ""], ["matInput", "", "placeholder", "Vehicle Type", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Vehicle Model", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Description", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", " Created Date", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Status", 3, "ngModel", "ngModelChange"], ["mat-header-cell", ""], [1, "custom_font_size"], ["color", "primary", "matTooltip", "Moderate", 2, "cursor", "pointer", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function ElectricTruckManufacturesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricTruckManufacturesComponent_Template_button_click_1_listener() {
              return ctx.tableExport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "sim_card_download");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricTruckManufacturesComponent_Template_button_click_5_listener() {
              return ctx.pdfExport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "picture_as_pdf");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ElectricTruckManufacturesComponent_th_13_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ElectricTruckManufacturesComponent_td_14_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ElectricTruckManufacturesComponent_th_16_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ElectricTruckManufacturesComponent_td_17_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ElectricTruckManufacturesComponent_th_19_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ElectricTruckManufacturesComponent_td_20_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ElectricTruckManufacturesComponent_th_22_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ElectricTruckManufacturesComponent_td_23_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ElectricTruckManufacturesComponent_th_25_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ElectricTruckManufacturesComponent_td_26_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ElectricTruckManufacturesComponent_th_28_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ElectricTruckManufacturesComponent_td_29_Template, 2, 3, "td", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ElectricTruckManufacturesComponent_th_31_Template, 3, 0, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ElectricTruckManufacturesComponent_td_32_Template, 4, 0, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ElectricTruckManufacturesComponent_tr_33_Template, 1, 0, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ElectricTruckManufacturesComponent_tr_34_Template, 1, 0, "tr", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-paginator", 20);

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
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], mat_table_filter__WEBPACK_IMPORTED_MODULE_6__["MatTableFilterDirective"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        styles: ["mat-form-field.list_input div.mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\n.mat-header-cell .custom_font_size {\n  font-size: 15px !important;\n  text-align: left;\n}\n\nmat-form-field.list_input div.mat-form-field-infix {\n  padding: 0.5em 0 0.5em 0 !important;\n}\n\ntable {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGVsZWN0cmljLXRydWNrLW1hbnVmYWN0dXJlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQTtFQUNFLDRCQUFBO0FBWEY7O0FBYUE7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0FBVkY7O0FBWUE7RUFDRSxtQ0FBQTtBQVRGOztBQVlBO0VBQ0ksV0FBQTtBQVRKOztBQVlFO0VBQ0UsWUFBQTtBQVRKIiwiZmlsZSI6ImVsZWN0cmljLXRydWNrLW1hbnVmYWN0dXJlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRhYmxlIHtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAubWF0LWZvcm0tZmllbGQge1xyXG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIHRkLCB0aCB7XHJcbi8vICAgICB3aWR0aDogMjUlO1xyXG4vLyAgIH1cclxubWF0LWZvcm0tZmllbGQubGlzdF9pbnB1dCAgZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XHJcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG4ubWF0LWhlYWRlci1jZWxsIC5jdXN0b21fZm9udF9zaXple1xyXG4gIGZvbnQtc2l6ZTogMTVweCAgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbm1hdC1mb3JtLWZpZWxkLmxpc3RfaW5wdXQgZGl2Lm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICBwYWRkaW5nOiAwLjVlbSAwIDAuNWVtIDAgIWltcG9ydGFudDtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIHRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAiXX0= */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_7__["fuseAnimations"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ElectricTruckManufacturesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-electric-truck-manufactures',
            templateUrl: './electric-truck-manufactures.component.html',
            styleUrls: ['./electric-truck-manufactures.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_7__["fuseAnimations"],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]]
          }]
        }], function () {
          return [{
            type: app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_13__["EVFleetService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBar"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]
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
    "oelk":
    /*!*********************************************************************************!*\
      !*** ./src/app/main/EV-space/EV-fleet/list4Wheelers/list4Wheelers.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: FourWheelersManufactures, List4WheelersComponent */

    /***/
    function oelk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FourWheelersManufactures", function () {
        return FourWheelersManufactures;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "List4WheelersComponent", function () {
        return List4WheelersComponent;
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
      "1CSc");
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


      var _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../view-dialog/view-dialog.component */
      "Puw5");
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! app/shared/services/ev-space/ev-fleet.service */
      "ze/K");
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


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function List4WheelersComponent_th_13_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vehicle Brand \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List4WheelersComponent_th_13_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r18.changeVisibility("brandSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function List4WheelersComponent_th_13_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function List4WheelersComponent_th_13_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r20.filterEntity.vehicle_brand_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List4WheelersComponent_th_13_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r22.changeVisibility("brandSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r17.filterEntity.vehicle_brand_name);
        }
      }

      function List4WheelersComponent_th_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, List4WheelersComponent_th_13_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, List4WheelersComponent_th_13_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.brandSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.brandSearch);
        }
      }

      function List4WheelersComponent_td_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r23.vehicle_brand_name, " ");
        }
      }

      function List4WheelersComponent_th_16_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vehicle Type \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List4WheelersComponent_th_16_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r26.changeVisibility("typeSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function List4WheelersComponent_th_16_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function List4WheelersComponent_th_16_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r28.filterEntity.vehicle_type_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List4WheelersComponent_th_16_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r30.changeVisibility("typeSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r25.filterEntity.vehicle_type_name);
        }
      }

      function List4WheelersComponent_th_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, List4WheelersComponent_th_16_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, List4WheelersComponent_th_16_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.typeSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.typeSearch);
        }
      }

      function List4WheelersComponent_td_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r31.vehicle_type_name, " ");
        }
      }

      function List4WheelersComponent_th_19_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vehicle Model \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List4WheelersComponent_th_19_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r34.changeVisibility("modelSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function List4WheelersComponent_th_19_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function List4WheelersComponent_th_19_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r36.filterEntity.vehicle_model_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List4WheelersComponent_th_19_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r38.changeVisibility("modelSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r33.filterEntity.vehicle_model_name);
        }
      }

      function List4WheelersComponent_th_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, List4WheelersComponent_th_19_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, List4WheelersComponent_th_19_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.modelSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.modelSearch);
        }
      }

      function List4WheelersComponent_td_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r39.vehicle_model_name, " ");
        }
      }

      function List4WheelersComponent_th_22_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List4WheelersComponent_th_22_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r42.changeVisibility("descSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function List4WheelersComponent_th_22_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function List4WheelersComponent_th_22_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r44.filterEntity.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List4WheelersComponent_th_22_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r46.changeVisibility("descSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r41.filterEntity.description);
        }
      }

      function List4WheelersComponent_th_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, List4WheelersComponent_th_22_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, List4WheelersComponent_th_22_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.descSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.descSearch);
        }
      }

      function List4WheelersComponent_td_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r47 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r47.description, " ");
        }
      }

      function List4WheelersComponent_th_25_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Created Date \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List4WheelersComponent_th_25_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r50.changeVisibility("dateConvertSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function List4WheelersComponent_th_25_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function List4WheelersComponent_th_25_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r52.filterEntity.dateConvert = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List4WheelersComponent_th_25_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r54.changeVisibility("dateConvertSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r49.filterEntity.dateConvert);
        }
      }

      function List4WheelersComponent_th_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, List4WheelersComponent_th_25_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, List4WheelersComponent_th_25_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.dateConvertSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.dateConvertSearch);
        }
      }

      function List4WheelersComponent_td_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r55 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r55.dateConvert, " ");
        }
      }

      function List4WheelersComponent_th_28_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List4WheelersComponent_th_28_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r58.changeVisibility("statusSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function List4WheelersComponent_th_28_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function List4WheelersComponent_th_28_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r60.filterEntity.statusString = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List4WheelersComponent_th_28_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r62.changeVisibility("statusSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r57.filterEntity.statusString);
        }
      }

      function List4WheelersComponent_th_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, List4WheelersComponent_th_28_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, List4WheelersComponent_th_28_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

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

      function List4WheelersComponent_td_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r63 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", row_r63.status == "Y" ? "green" : "red");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r63.statusString, " ");
        }
      }

      function List4WheelersComponent_th_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function List4WheelersComponent_td_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List4WheelersComponent_td_32_Template_mat_icon_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66);

            var element_r64 = ctx.$implicit;

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r65.viewDialog("Moderate", element_r64, "modrateAction");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " published_with_changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function List4WheelersComponent_tr_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 37);
        }
      }

      function List4WheelersComponent_tr_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 38);
        }
      }

      var _c0 = function _c0() {
        return [10, 30, 50, 100];
      };

      var FourWheelersManufactures = function FourWheelersManufactures() {
        _classCallCheck(this, FourWheelersManufactures);
      };

      var List4WheelersComponent = /*#__PURE__*/function () {
        function List4WheelersComponent(evFleetService, dialog, snackBar, datepipe) {
          _classCallCheck(this, List4WheelersComponent);

          this.evFleetService = evFleetService;
          this.dialog = dialog;
          this.snackBar = snackBar;
          this.datepipe = datepipe;
          this.displayedColumns = ['vehicle_brand_name', 'vehicle_type_name', 'vehicle_model_name', 'description', 'dateConvert', 'status', 'action'];
          this.head = [['Vehicle Brand', 'Vehicle Type', 'Vehicle Model', 'Description', 'Created Date', 'Status']];
          this.brandSearch = false;
          this.modelSearch = false;
          this.typeSearch = false;
          this.descSearch = false;
          this.roadSearch = false;
          this.statusSearch = false;
          this.dateConvertSearch = false;
        }

        _createClass(List4WheelersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
            this.get4WheelerManufacture();
            this.filterEntity = new FourWheelersManufactures();
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
          key: "get4WheelerManufacture",
          value: function get4WheelerManufacture() {
            var _this36 = this;

            this.evFleetService.getFourLMVWheelerVehicle().subscribe(function (resp) {
              if (resp.status == true) {
                _this36.fourWheeler = resp.data;

                for (var i = 0; i < _this36.fourWheeler.length; i++) {
                  _this36.fourWheeler[i].dateConvert = _this36.datepipe.transform(_this36.fourWheeler[i].created_date, 'dd/MM/yyyy hh:mm:ss');

                  if (_this36.fourWheeler[i].status == 'N') {
                    _this36.fourWheeler[i].statusString = 'Inactive';
                  } else {
                    _this36.fourWheeler[i].statusString = 'Active';
                  }
                }

                _this36.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this36.fourWheeler);
                _this36.dataSource.paginator = _this36.paginator;
                _this36.dataSource.sort = _this36.sort;
              } else {
                _this36.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].NoRecordFoundMessage, 'Dismiss', {
                  duration: 3000
                });

                return;
              }
            }, function (err) {});
          }
        }, {
          key: "openDialog",
          value: function openDialog(action, data) {
            var _this37 = this;

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
              _this37.get4WheelerManufacture();
            });
          }
        }, {
          key: "viewDialog",
          value: function viewDialog(action, data, buttonAction) {
            var _this38 = this;

            var params = {
              action: action,
              data: data,
              buttonAction: buttonAction
            };
            var dialogRef = this.dialog.open(_view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ViewDialogComponent"], {
              width: '800px',
              data: params,
              panelClass: 'app-action-dialog',
              autoFocus: false,
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              _this38.get4WheelerManufacture();
            });
          }
        }, {
          key: "changeVisibility",
          value: function changeVisibility(visibleOption, ev) {
            ev.stopPropagation();

            if (visibleOption == 'brandSearch') {
              this.brandSearch = !this.brandSearch;
              this.filterEntity.vehicle_brand_name = '';
            }

            if (visibleOption == 'modelSearch') {
              this.modelSearch = !this.modelSearch;
              this.filterEntity.vehicle_model_name = '';
            }

            if (visibleOption == 'typeSearch') {
              this.typeSearch = !this.typeSearch;
              this.filterEntity.vehicle_type_name = '';
            }

            if (visibleOption == 'descSearch') {
              this.descSearch = !this.descSearch;
              this.filterEntity.description = '';
            }

            if (visibleOption == 'statusSearch') {
              this.statusSearch = !this.statusSearch;
              this.filterEntity.statusString = '';
            }

            if (visibleOption == 'dateConvertSearch') {
              this.dateConvertSearch = !this.dateConvertSearch;
              this.filterEntity.dateConvert = '';
            }
          }
        }, {
          key: "tableExport",
          value: function tableExport() {
            this.exportedData = [];

            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              var fleet4Wheeler = this.dataSource.filteredData[i];
              var data = {
                'Vehicle Brand': fleet4Wheeler.vehicle_brand_name,
                'Vechicle Type': fleet4Wheeler.vehicle_type_name,
                'Vehicle Model': fleet4Wheeler.vehicle_model_name,
                'Description': fleet4Wheeler.description,
                'Created Date': fleet4Wheeler.dateConvert,
                'Status': fleet4Wheeler.statusString
              };
              this.exportedData.push(data);
            }

            var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].json_to_sheet(this.exportedData);
            var workBook = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].book_append_sheet(workBook, workSheet, 'Ev Fleet 4Wheelers List');
            xlsx__WEBPACK_IMPORTED_MODULE_9__["writeFile"](workBook, 'Ev Fleet 4Wheelers.xlsx');
          }
        }, {
          key: "pdfExport",
          value: function pdfExport() {
            var _this39 = this;

            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_10__["jsPDF"]({});
            this.exportedData = [];

            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              var fleet4Wheeler = this.dataSource.filteredData[i];
              var data = [fleet4Wheeler.vehicle_brand_name, fleet4Wheeler.vehicle_type_name, fleet4Wheeler.vehicle_model_name, fleet4Wheeler.description, fleet4Wheeler.dateConvert, fleet4Wheeler.statusString];
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
                doc.text('Ev Fleet 4Wheelers List Report', doc.internal.pageSize.getWidth() / 2, 11, {
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
                doc.text('Generated By:' + _this39.localStorage.f_Name, 195, 18, {
                  align: 'right'
                });
                doc = _this39.addWaterMark(doc);
              }
            }); // below line for Open PDF document in new tab

            doc.output('dataurlnewwindow'); // below line for Download PDF document  

            doc.save('Ev Fleet 4Wheelers.pdf');
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

        return List4WheelersComponent;
      }();

      List4WheelersComponent.ɵfac = function List4WheelersComponent_Factory(t) {
        return new (t || List4WheelersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_13__["EVFleetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]));
      };

      List4WheelersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: List4WheelersComponent,
        selectors: [["app-list4Wheelers"]],
        viewQuery: function List4WheelersComponent_Query(rf, ctx) {
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
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]])],
        decls: 36,
        vars: 7,
        consts: [[2, "text-align", "left", "margin-left", "10px", "margin-bottom", "10px", "margin-top", "10px"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Excel Download", 3, "click"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "PDF Download", 3, "click"], ["fxLayout", "row wrap", 1, "page-layout", "simple", "fullwidth", 2, "overflow", "scroll"], [1, "content", 2, "min-width", "auto"], [1, "mat-elevation-z8"], ["mat-table", "", "matTableFilter", "", "matSort", "", "mat-sort", "", 1, "mat-elevation-z8", 3, "dataSource", "exampleEntity", "filterType"], ["matColumnDef", "vehicle_brand_name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "vehicle_type_name"], ["matColumnDef", "vehicle_model_name"], ["matColumnDef", "description"], ["matColumnDef", "dateConvert"], ["matColumnDef", "status"], ["mat-cell", "", 3, "color", 4, "matCellDef"], ["matColumnDef", "action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["class", "custom_font_size", "style", "display: flex;", 4, "ngIf"], ["appearance", "outline", "class", "list_input", 4, "ngIf"], [1, "custom_font_size", 2, "display", "flex"], ["matSuffix", "", 3, "click"], ["appearance", "outline", 1, "list_input"], ["matInput", "", "placeholder", "Vehicle Brand", 3, "ngModel", "ngModelChange"], ["mat-cell", ""], ["matInput", "", "placeholder", "Vehicle Type", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Vehicle Model", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Description", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", " Created Date", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Status", 3, "ngModel", "ngModelChange"], ["mat-header-cell", ""], [1, "custom_font_size"], ["color", "primary", "matTooltip", "Moderate", 2, "cursor", "pointer", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function List4WheelersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List4WheelersComponent_Template_button_click_1_listener() {
              return ctx.tableExport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "sim_card_download");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List4WheelersComponent_Template_button_click_5_listener() {
              return ctx.pdfExport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "picture_as_pdf");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, List4WheelersComponent_th_13_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, List4WheelersComponent_td_14_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, List4WheelersComponent_th_16_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, List4WheelersComponent_td_17_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, List4WheelersComponent_th_19_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, List4WheelersComponent_td_20_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, List4WheelersComponent_th_22_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, List4WheelersComponent_td_23_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, List4WheelersComponent_th_25_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, List4WheelersComponent_td_26_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, List4WheelersComponent_th_28_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, List4WheelersComponent_td_29_Template, 2, 3, "td", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, List4WheelersComponent_th_31_Template, 3, 0, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, List4WheelersComponent_td_32_Template, 4, 0, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, List4WheelersComponent_tr_33_Template, 1, 0, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, List4WheelersComponent_tr_34_Template, 1, 0, "tr", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-paginator", 20);

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
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], mat_table_filter__WEBPACK_IMPORTED_MODULE_6__["MatTableFilterDirective"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        styles: ["mat-form-field.list_input div.mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\n.mat-header-cell .custom_font_size {\n  font-size: 15px !important;\n  text-align: left;\n}\n\nmat-form-field.list_input div.mat-form-field-infix {\n  padding: 0.5em 0 0.5em 0 !important;\n}\n\ntable {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGxpc3Q0V2hlZWxlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFDRSw0QkFBQTtBQVhGOztBQWFBO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtBQVZGOztBQVlBO0VBQ0UsbUNBQUE7QUFURjs7QUFZQTtFQUNJLFdBQUE7QUFUSjs7QUFZRTtFQUNFLFlBQUE7QUFUSiIsImZpbGUiOiJsaXN0NFdoZWVsZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGFibGUge1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIC5tYXQtZm9ybS1maWVsZCB7XHJcbi8vICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgdGQsIHRoIHtcclxuLy8gICAgIHdpZHRoOiAyNSU7XHJcbi8vICAgfVxyXG5tYXQtZm9ybS1maWVsZC5saXN0X2lucHV0ICBkaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcclxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtaGVhZGVyLWNlbGwgLmN1c3RvbV9mb250X3NpemV7XHJcbiAgZm9udC1zaXplOiAxNXB4ICAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxubWF0LWZvcm0tZmllbGQubGlzdF9pbnB1dCBkaXYubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gIHBhZGRpbmc6IDAuNWVtIDAgMC41ZW0gMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICJdfQ== */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_7__["fuseAnimations"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](List4WheelersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-list4Wheelers',
            templateUrl: './list4Wheelers.component.html',
            styleUrls: ['./list4Wheelers.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_7__["fuseAnimations"],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]]
          }]
        }], function () {
          return [{
            type: app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_13__["EVFleetService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBar"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]
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
    "pSd6":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/main/EV-space/EV-fleet/electric-bus-manufactures/electric-bus-manufactures.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: ElectricBusManufactures, ElectricBusManufacturesComponent */

    /***/
    function pSd6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElectricBusManufactures", function () {
        return ElectricBusManufactures;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElectricBusManufacturesComponent", function () {
        return ElectricBusManufacturesComponent;
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
      "1CSc");
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


      var _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../view-dialog/view-dialog.component */
      "Puw5");
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! app/shared/services/ev-space/ev-fleet.service */
      "ze/K");
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


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function ElectricBusManufacturesComponent_th_13_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vehicle Brand \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricBusManufacturesComponent_th_13_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r18.changeVisibility("brandSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ElectricBusManufacturesComponent_th_13_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ElectricBusManufacturesComponent_th_13_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r20.filterEntity.vehicle_brand_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricBusManufacturesComponent_th_13_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r22.changeVisibility("brandSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r17.filterEntity.vehicle_brand_name);
        }
      }

      function ElectricBusManufacturesComponent_th_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ElectricBusManufacturesComponent_th_13_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ElectricBusManufacturesComponent_th_13_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.brandSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.brandSearch);
        }
      }

      function ElectricBusManufacturesComponent_td_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r23.vehicle_brand_name, " ");
        }
      }

      function ElectricBusManufacturesComponent_th_16_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vehicle Type \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricBusManufacturesComponent_th_16_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r26.changeVisibility("typeSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ElectricBusManufacturesComponent_th_16_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ElectricBusManufacturesComponent_th_16_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r28.filterEntity.vehicle_type_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricBusManufacturesComponent_th_16_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r30.changeVisibility("typeSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r25.filterEntity.vehicle_type_name);
        }
      }

      function ElectricBusManufacturesComponent_th_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ElectricBusManufacturesComponent_th_16_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ElectricBusManufacturesComponent_th_16_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.typeSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.typeSearch);
        }
      }

      function ElectricBusManufacturesComponent_td_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r31.vehicle_type_name, " ");
        }
      }

      function ElectricBusManufacturesComponent_th_19_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vehicle Model \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricBusManufacturesComponent_th_19_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r34.changeVisibility("modelSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ElectricBusManufacturesComponent_th_19_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ElectricBusManufacturesComponent_th_19_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r36.filterEntity.vehicle_model_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricBusManufacturesComponent_th_19_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r38.changeVisibility("modelSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r33.filterEntity.vehicle_model_name);
        }
      }

      function ElectricBusManufacturesComponent_th_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ElectricBusManufacturesComponent_th_19_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ElectricBusManufacturesComponent_th_19_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.modelSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.modelSearch);
        }
      }

      function ElectricBusManufacturesComponent_td_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r39.vehicle_model_name, " ");
        }
      }

      function ElectricBusManufacturesComponent_th_22_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricBusManufacturesComponent_th_22_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r42.changeVisibility("descSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ElectricBusManufacturesComponent_th_22_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ElectricBusManufacturesComponent_th_22_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r44.filterEntity.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricBusManufacturesComponent_th_22_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r46.changeVisibility("descSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r41.filterEntity.description);
        }
      }

      function ElectricBusManufacturesComponent_th_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ElectricBusManufacturesComponent_th_22_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ElectricBusManufacturesComponent_th_22_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.descSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.descSearch);
        }
      }

      function ElectricBusManufacturesComponent_td_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r47 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r47.description, " ");
        }
      }

      function ElectricBusManufacturesComponent_th_25_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Created Date \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricBusManufacturesComponent_th_25_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r50.changeVisibility("dateConvertSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ElectricBusManufacturesComponent_th_25_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ElectricBusManufacturesComponent_th_25_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r52.filterEntity.dateConvert = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricBusManufacturesComponent_th_25_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r54.changeVisibility("dateConvertSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r49.filterEntity.dateConvert);
        }
      }

      function ElectricBusManufacturesComponent_th_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ElectricBusManufacturesComponent_th_25_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ElectricBusManufacturesComponent_th_25_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.dateConvertSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.dateConvertSearch);
        }
      }

      function ElectricBusManufacturesComponent_td_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r55 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r55.dateConvert, " ");
        }
      }

      function ElectricBusManufacturesComponent_th_28_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricBusManufacturesComponent_th_28_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r58.changeVisibility("statusSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ElectricBusManufacturesComponent_th_28_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ElectricBusManufacturesComponent_th_28_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r60.filterEntity.statusString = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricBusManufacturesComponent_th_28_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r62.changeVisibility("statusSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r57.filterEntity.statusString);
        }
      }

      function ElectricBusManufacturesComponent_th_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ElectricBusManufacturesComponent_th_28_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ElectricBusManufacturesComponent_th_28_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

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

      function ElectricBusManufacturesComponent_td_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r63 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", row_r63.status == "Y" ? "green" : "red");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r63.statusString, " ");
        }
      }

      function ElectricBusManufacturesComponent_th_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ElectricBusManufacturesComponent_td_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricBusManufacturesComponent_td_32_Template_mat_icon_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66);

            var element_r64 = ctx.$implicit;

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r65.viewDialog("Publish", element_r64, "modrateAction");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " published_with_changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ElectricBusManufacturesComponent_tr_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 37);
        }
      }

      function ElectricBusManufacturesComponent_tr_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 38);
        }
      }

      var _c0 = function _c0() {
        return [10, 30, 50, 100];
      };

      var ElectricBusManufactures = function ElectricBusManufactures() {
        _classCallCheck(this, ElectricBusManufactures);
      };

      var ElectricBusManufacturesComponent = /*#__PURE__*/function () {
        function ElectricBusManufacturesComponent(evFleetService, dialog, snackBar, datepipe) {
          _classCallCheck(this, ElectricBusManufacturesComponent);

          this.evFleetService = evFleetService;
          this.dialog = dialog;
          this.snackBar = snackBar;
          this.datepipe = datepipe;
          this.displayedColumns = ['vehicle_brand_name', 'vehicle_type_name', 'vehicle_model_name', 'description', 'dateConvert', 'status', 'action'];
          this.head = [['Vehicle Brand', 'Vehicle Type', 'Vehicle Model', 'Description', 'Created Date', 'Status']];
          this.brandSearch = false;
          this.modelSearch = false;
          this.typeSearch = false;
          this.descSearch = false;
          this.roadSearch = false;
          this.statusSearch = false;
          this.dateConvertSearch = false;
        }

        _createClass(ElectricBusManufacturesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
            this.getEvBusManufacture();
            this.filterEntity = new ElectricBusManufactures();
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
          key: "getEvBusManufacture",
          value: function getEvBusManufacture() {
            var _this40 = this;

            this.evFleetService.getEvBusVehicle().subscribe(function (resp) {
              if (resp.status == true) {
                _this40.electricBus = resp.data;

                for (var i = 0; i < _this40.electricBus.length; i++) {
                  _this40.electricBus[i].dateConvert = _this40.datepipe.transform(_this40.electricBus[i].created_date, 'dd/MM/yyyy hh:mm:ss');

                  if (_this40.electricBus[i].status == 'N') {
                    _this40.electricBus[i].statusString = 'Inactive';
                  } else {
                    _this40.electricBus[i].statusString = 'Active';
                  }
                }

                _this40.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this40.electricBus);
                _this40.dataSource.paginator = _this40.paginator;
                _this40.dataSource.sort = _this40.sort;
              } else {
                _this40.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].NoRecordFoundMessage, 'Dismiss', {
                  duration: 3000
                });

                return;
              }
            }, function (err) {});
          } // delete(id){
          //   this.confirmDialogRef = this.dialog.open(FuseConfirmDialogComponent, {
          //     disableClose: true
          // });
          // }

        }, {
          key: "openDialog",
          value: function openDialog(action, data) {
            var _this41 = this;

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
              _this41.getEvBusManufacture();
            });
          }
        }, {
          key: "viewDialog",
          value: function viewDialog(action, data, buttonAction) {
            var _this42 = this;

            var params = {
              action: action,
              data: data,
              buttonAction: buttonAction
            };
            var dialogRef = this.dialog.open(_view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ViewDialogComponent"], {
              width: '800px',
              data: params,
              panelClass: 'app-action-dialog',
              autoFocus: false,
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              _this42.getEvBusManufacture();
            });
          }
        }, {
          key: "changeVisibility",
          value: function changeVisibility(visibleOption, ev) {
            ev.stopPropagation();

            if (visibleOption == 'brandSearch') {
              this.brandSearch = !this.brandSearch;
              this.filterEntity.vehicle_brand_name = '';
            }

            if (visibleOption == 'modelSearch') {
              this.modelSearch = !this.modelSearch;
              this.filterEntity.vehicle_model_name = '';
            }

            if (visibleOption == 'typeSearch') {
              this.typeSearch = !this.typeSearch;
              this.filterEntity.vehicle_type_name = '';
            }

            if (visibleOption == 'descSearch') {
              this.descSearch = !this.descSearch;
              this.filterEntity.description = '';
            }

            if (visibleOption == 'statusSearch') {
              this.statusSearch = !this.statusSearch;
              this.filterEntity.statusString = '';
            }

            if (visibleOption == 'dateConvertSearch') {
              this.dateConvertSearch = !this.dateConvertSearch;
              this.filterEntity.dateConvert = '';
            }
          }
        }, {
          key: "tableExport",
          value: function tableExport() {
            this.exportedData = [];

            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              var fleet2Wheeler = this.dataSource.filteredData[i];
              var data = {
                'Vehicle Brand': fleet2Wheeler.vehicle_brand_name,
                'Vechicle Type': fleet2Wheeler.vehicle_type_name,
                'Vehicle Model': fleet2Wheeler.vehicle_model_name,
                'Description': fleet2Wheeler.description,
                'Created Date': fleet2Wheeler.created_date,
                'Status': fleet2Wheeler.statusString
              };
              this.exportedData.push(data);
            }

            var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].json_to_sheet(this.exportedData);
            var workBook = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].book_append_sheet(workBook, workSheet, 'Electric Bus Manufactures List');
            xlsx__WEBPACK_IMPORTED_MODULE_9__["writeFile"](workBook, 'ElectricBusManufactures.xlsx');
          }
        }, {
          key: "pdfExport",
          value: function pdfExport() {
            var _this43 = this;

            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_10__["jsPDF"]({});
            this.exportedData = [];

            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              var fleet2Wheeler = this.dataSource.filteredData[i];
              var data = [fleet2Wheeler.vehicle_brand_name, fleet2Wheeler.vehicle_type_name, fleet2Wheeler.vehicle_model_name, fleet2Wheeler.description, fleet2Wheeler.created_date, fleet2Wheeler.statusString];
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
                doc.text('Electric Bus Manufactures List', doc.internal.pageSize.getWidth() / 2, 11, {
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
                doc.text('Generated By:' + _this43.localStorage.f_Name, 195, 18, {
                  align: 'right'
                });
                doc = _this43.addWaterMark(doc);
              }
            }); // below line for Open PDF document in new tab

            doc.output('dataurlnewwindow'); // below line for Download PDF document  

            doc.save('ElectricBusManufacturesList.pdf');
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

        return ElectricBusManufacturesComponent;
      }();

      ElectricBusManufacturesComponent.ɵfac = function ElectricBusManufacturesComponent_Factory(t) {
        return new (t || ElectricBusManufacturesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_13__["EVFleetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]));
      };

      ElectricBusManufacturesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ElectricBusManufacturesComponent,
        selectors: [["app-electric-bus-manufactures"]],
        viewQuery: function ElectricBusManufacturesComponent_Query(rf, ctx) {
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
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]])],
        decls: 36,
        vars: 7,
        consts: [[2, "text-align", "left", "margin-left", "10px", "margin-bottom", "10px", "margin-top", "10px"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Excel Download", 3, "click"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "PDF Download", 3, "click"], ["fxLayout", "row wrap", 1, "page-layout", "simple", "fullwidth", 2, "overflow", "scroll"], [1, "content", 2, "min-width", "auto"], [1, "mat-elevation-z8"], ["mat-table", "", "matTableFilter", "", "matSort", "", "mat-sort", "", 1, "mat-elevation-z8", 3, "dataSource", "exampleEntity", "filterType"], ["matColumnDef", "vehicle_brand_name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "vehicle_type_name"], ["matColumnDef", "vehicle_model_name"], ["matColumnDef", "description"], ["matColumnDef", "dateConvert"], ["matColumnDef", "status"], ["mat-cell", "", 3, "color", 4, "matCellDef"], ["matColumnDef", "action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["class", "custom_font_size", "style", "display: flex;", 4, "ngIf"], ["appearance", "outline", "class", "list_input", 4, "ngIf"], [1, "custom_font_size", 2, "display", "flex"], ["matSuffix", "", 3, "click"], ["appearance", "outline", 1, "list_input"], ["matInput", "", "placeholder", "Vehicle Brand", 3, "ngModel", "ngModelChange"], ["mat-cell", ""], ["matInput", "", "placeholder", "Vehicle Type", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Vehicle Model", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Description", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", " Created Date", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Status", 3, "ngModel", "ngModelChange"], ["mat-header-cell", ""], [1, "custom_font_size"], ["color", "primary", "matTooltip", "Moderate", 2, "cursor", "pointer", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function ElectricBusManufacturesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricBusManufacturesComponent_Template_button_click_1_listener() {
              return ctx.tableExport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "sim_card_download");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElectricBusManufacturesComponent_Template_button_click_5_listener() {
              return ctx.pdfExport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "picture_as_pdf");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ElectricBusManufacturesComponent_th_13_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ElectricBusManufacturesComponent_td_14_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ElectricBusManufacturesComponent_th_16_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ElectricBusManufacturesComponent_td_17_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ElectricBusManufacturesComponent_th_19_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ElectricBusManufacturesComponent_td_20_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ElectricBusManufacturesComponent_th_22_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ElectricBusManufacturesComponent_td_23_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ElectricBusManufacturesComponent_th_25_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ElectricBusManufacturesComponent_td_26_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ElectricBusManufacturesComponent_th_28_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ElectricBusManufacturesComponent_td_29_Template, 2, 3, "td", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ElectricBusManufacturesComponent_th_31_Template, 3, 0, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ElectricBusManufacturesComponent_td_32_Template, 4, 0, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ElectricBusManufacturesComponent_tr_33_Template, 1, 0, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ElectricBusManufacturesComponent_tr_34_Template, 1, 0, "tr", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-paginator", 20);

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
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], mat_table_filter__WEBPACK_IMPORTED_MODULE_6__["MatTableFilterDirective"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        styles: ["mat-form-field.list_input div.mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\n.mat-header-cell .custom_font_size {\n  font-size: 15px !important;\n  text-align: left;\n}\n\nmat-form-field.list_input div.mat-form-field-infix {\n  padding: 0.5em 0 0.5em 0 !important;\n}\n\ntable {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGVsZWN0cmljLWJ1cy1tYW51ZmFjdHVyZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFDRSw0QkFBQTtBQVhGOztBQWFBO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtBQVZGOztBQVlBO0VBQ0UsbUNBQUE7QUFURjs7QUFZQTtFQUNJLFdBQUE7QUFUSjs7QUFZRTtFQUNFLFlBQUE7QUFUSiIsImZpbGUiOiJlbGVjdHJpYy1idXMtbWFudWZhY3R1cmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGFibGUge1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIC5tYXQtZm9ybS1maWVsZCB7XHJcbi8vICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgdGQsIHRoIHtcclxuLy8gICAgIHdpZHRoOiAyNSU7XHJcbi8vICAgfVxyXG5tYXQtZm9ybS1maWVsZC5saXN0X2lucHV0ICBkaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcclxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtaGVhZGVyLWNlbGwgLmN1c3RvbV9mb250X3NpemV7XHJcbiAgZm9udC1zaXplOiAxNXB4ICAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxubWF0LWZvcm0tZmllbGQubGlzdF9pbnB1dCBkaXYubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gIHBhZGRpbmc6IDAuNWVtIDAgMC41ZW0gMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICJdfQ== */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_7__["fuseAnimations"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ElectricBusManufacturesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-electric-bus-manufactures',
            templateUrl: './electric-bus-manufactures.component.html',
            styleUrls: ['./electric-bus-manufactures.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_7__["fuseAnimations"],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]]
          }]
        }], function () {
          return [{
            type: app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_13__["EVFleetService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBar"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]
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
    "zUWn":
    /*!********************************************************************************!*\
      !*** ./src/app/main/EV-space/EV-fleet/list3Wheeler/list3Wheelers.component.ts ***!
      \********************************************************************************/

    /*! exports provided: ThreeWheelersManufactures, List3WheelersComponent */

    /***/
    function zUWn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThreeWheelersManufactures", function () {
        return ThreeWheelersManufactures;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "List3WheelersComponent", function () {
        return List3WheelersComponent;
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
      "1CSc");
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


      var _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../view-dialog/view-dialog.component */
      "Puw5");
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! app/shared/services/ev-space/ev-fleet.service */
      "ze/K");
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


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function List3WheelersComponent_th_13_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vehicle Brand \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List3WheelersComponent_th_13_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r18.changeVisibility("brandSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function List3WheelersComponent_th_13_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function List3WheelersComponent_th_13_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r20.filterEntity.vehicle_brand_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List3WheelersComponent_th_13_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r22.changeVisibility("brandSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r17.filterEntity.vehicle_brand_name);
        }
      }

      function List3WheelersComponent_th_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, List3WheelersComponent_th_13_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, List3WheelersComponent_th_13_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.brandSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.brandSearch);
        }
      }

      function List3WheelersComponent_td_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r23.vehicle_brand_name, " ");
        }
      }

      function List3WheelersComponent_th_16_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vehicle Type \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List3WheelersComponent_th_16_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r26.changeVisibility("typeSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function List3WheelersComponent_th_16_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function List3WheelersComponent_th_16_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r28.filterEntity.vehicle_type_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List3WheelersComponent_th_16_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r30.changeVisibility("typeSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r25.filterEntity.vehicle_type_name);
        }
      }

      function List3WheelersComponent_th_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, List3WheelersComponent_th_16_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, List3WheelersComponent_th_16_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.typeSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.typeSearch);
        }
      }

      function List3WheelersComponent_td_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r31.vehicle_type_name, " ");
        }
      }

      function List3WheelersComponent_th_19_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vehicle Model \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List3WheelersComponent_th_19_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r34.changeVisibility("modelSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function List3WheelersComponent_th_19_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function List3WheelersComponent_th_19_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r36.filterEntity.vehicle_model_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List3WheelersComponent_th_19_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r38.changeVisibility("modelSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r33.filterEntity.vehicle_model_name);
        }
      }

      function List3WheelersComponent_th_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, List3WheelersComponent_th_19_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, List3WheelersComponent_th_19_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.modelSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.modelSearch);
        }
      }

      function List3WheelersComponent_td_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r39.vehicle_model_name, " ");
        }
      }

      function List3WheelersComponent_th_22_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List3WheelersComponent_th_22_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r42.changeVisibility("descSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function List3WheelersComponent_th_22_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function List3WheelersComponent_th_22_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r44.filterEntity.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List3WheelersComponent_th_22_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r46.changeVisibility("descSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r41.filterEntity.description);
        }
      }

      function List3WheelersComponent_th_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, List3WheelersComponent_th_22_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, List3WheelersComponent_th_22_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.descSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.descSearch);
        }
      }

      function List3WheelersComponent_td_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r47 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r47.description, " ");
        }
      }

      function List3WheelersComponent_th_25_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Created Date \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List3WheelersComponent_th_25_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r50.changeVisibility("dateConvertSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function List3WheelersComponent_th_25_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function List3WheelersComponent_th_25_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r52.filterEntity.dateConvert = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List3WheelersComponent_th_25_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r54.changeVisibility("dateConvertSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r49.filterEntity.dateConvert);
        }
      }

      function List3WheelersComponent_th_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, List3WheelersComponent_th_25_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, List3WheelersComponent_th_25_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.dateConvertSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.dateConvertSearch);
        }
      }

      function List3WheelersComponent_td_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r55 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r55.dateConvert, " ");
        }
      }

      function List3WheelersComponent_th_28_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List3WheelersComponent_th_28_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r58.changeVisibility("statusSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function List3WheelersComponent_th_28_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function List3WheelersComponent_th_28_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r60.filterEntity.statusString = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List3WheelersComponent_th_28_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r62.changeVisibility("statusSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r57.filterEntity.statusString);
        }
      }

      function List3WheelersComponent_th_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, List3WheelersComponent_th_28_span_1_Template, 4, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, List3WheelersComponent_th_28_mat_form_field_2_Template, 4, 1, "mat-form-field", 23);

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

      function List3WheelersComponent_td_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r63 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", row_r63.status == "Y" ? "green" : "red");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r63.statusString, " ");
        }
      }

      function List3WheelersComponent_th_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function List3WheelersComponent_td_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List3WheelersComponent_td_32_Template_mat_icon_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66);

            var element_r64 = ctx.$implicit;

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r65.viewDialog("Publish", element_r64, "modrateAction");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " published_with_changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function List3WheelersComponent_tr_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 37);
        }
      }

      function List3WheelersComponent_tr_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 38);
        }
      }

      var _c0 = function _c0() {
        return [10, 30, 50, 100];
      };

      var ThreeWheelersManufactures = function ThreeWheelersManufactures() {
        _classCallCheck(this, ThreeWheelersManufactures);
      };

      var List3WheelersComponent = /*#__PURE__*/function () {
        function List3WheelersComponent(evFleetService, dialog, snackBar, datepipe) {
          _classCallCheck(this, List3WheelersComponent);

          this.evFleetService = evFleetService;
          this.dialog = dialog;
          this.snackBar = snackBar;
          this.datepipe = datepipe;
          this.displayedColumns = ['vehicle_brand_name', 'vehicle_type_name', 'vehicle_model_name', 'description', 'dateConvert', 'status', 'action'];
          this.head = [['Vehicle Brand', 'Vehicle Type', 'Vehicle Model', 'Description', 'Created Date', 'Status']];
          this.brandSearch = false;
          this.modelSearch = false;
          this.typeSearch = false;
          this.descSearch = false;
          this.roadSearch = false;
          this.statusSearch = false;
          this.dateConvertSearch = false;
        }

        _createClass(List3WheelersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
            this.get2WheelerManufacture();
            this.filterEntity = new ThreeWheelersManufactures();
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
          key: "get2WheelerManufacture",
          value: function get2WheelerManufacture() {
            var _this44 = this;

            this.evFleetService.getThreeWheelerVehicle().subscribe(function (resp) {
              if (resp.status == true) {
                _this44.threeWheeler = resp.data;

                for (var i = 0; i < _this44.threeWheeler.length; i++) {
                  _this44.threeWheeler[i].dateConvert = _this44.datepipe.transform(_this44.threeWheeler[i].created_date, 'dd/MM/yyyy hh:mm:ss');

                  if (_this44.threeWheeler[i].status == 'N') {
                    _this44.threeWheeler[i].statusString = 'Inactive';
                  } else {
                    _this44.threeWheeler[i].statusString = 'Active';
                  }
                }

                _this44.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this44.threeWheeler);
                _this44.dataSource.paginator = _this44.paginator;
                _this44.dataSource.sort = _this44.sort;
              } else {
                _this44.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].NoRecordFoundMessage, 'Dismiss', {
                  duration: 3000
                });

                return;
              }
            }, function (err) {});
          } // delete(id){
          //   this.confirmDialogRef = this.dialog.open(FuseConfirmDialogComponent, {
          //     disableClose: true
          // });
          // }

        }, {
          key: "openDialog",
          value: function openDialog(action, data) {
            var _this45 = this;

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
              _this45.get2WheelerManufacture();
            });
          }
        }, {
          key: "viewDialog",
          value: function viewDialog(action, data, buttonAction) {
            var _this46 = this;

            var params = {
              action: action,
              data: data,
              buttonAction: buttonAction
            };
            var dialogRef = this.dialog.open(_view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ViewDialogComponent"], {
              width: '800px',
              data: params,
              panelClass: 'app-action-dialog',
              autoFocus: false,
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              _this46.get2WheelerManufacture();
            });
          }
        }, {
          key: "changeVisibility",
          value: function changeVisibility(visibleOption, ev) {
            ev.stopPropagation();

            if (visibleOption == 'brandSearch') {
              this.brandSearch = !this.brandSearch;
              this.filterEntity.vehicle_brand_name = '';
            }

            if (visibleOption == 'modelSearch') {
              this.modelSearch = !this.modelSearch;
              this.filterEntity.vehicle_model_name = '';
            }

            if (visibleOption == 'typeSearch') {
              this.typeSearch = !this.typeSearch;
              this.filterEntity.vehicle_type_name = '';
            }

            if (visibleOption == 'descSearch') {
              this.descSearch = !this.descSearch;
              this.filterEntity.description = '';
            }

            if (visibleOption == 'statusSearch') {
              this.statusSearch = !this.statusSearch;
              this.filterEntity.statusString = '';
            }

            if (visibleOption == 'dateConvertSearch') {
              this.dateConvertSearch = !this.dateConvertSearch;
              this.filterEntity.dateConvert = '';
            }
          }
        }, {
          key: "tableExport",
          value: function tableExport() {
            this.exportedData = [];

            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              var fleet2Wheeler = this.dataSource.filteredData[i];
              var data = {
                'Vehicle Brand': fleet2Wheeler.vehicle_brand_name,
                'Vechicle Type': fleet2Wheeler.vehicle_type_name,
                'Vehicle Model': fleet2Wheeler.vehicle_model_name,
                'Description': fleet2Wheeler.description,
                'Created Date': fleet2Wheeler.dateConvert,
                'Status': fleet2Wheeler.statusString
              };
              this.exportedData.push(data);
            }

            var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].json_to_sheet(this.exportedData);
            var workBook = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].book_append_sheet(workBook, workSheet, 'Ev Fleet 3Wheelers List');
            xlsx__WEBPACK_IMPORTED_MODULE_9__["writeFile"](workBook, 'Ev Fleet 3Wheelers.xlsx');
          }
        }, {
          key: "pdfExport",
          value: function pdfExport() {
            var _this47 = this;

            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_10__["jsPDF"]({});
            this.exportedData = [];

            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              var fleet2Wheeler = this.dataSource.filteredData[i];
              var data = [fleet2Wheeler.vehicle_brand_name, fleet2Wheeler.vehicle_type_name, fleet2Wheeler.vehicle_model_name, fleet2Wheeler.description, fleet2Wheeler.dateConvert, fleet2Wheeler.statusString];
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
                doc.text('Ev Fleet 2Wheelers List Report', doc.internal.pageSize.getWidth() / 2, 11, {
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
                doc.text('Generated By:' + _this47.localStorage.f_Name, 195, 18, {
                  align: 'right'
                });
                doc = _this47.addWaterMark(doc);
              }
            }); // below line for Open PDF document in new tab

            doc.output('dataurlnewwindow'); // below line for Download PDF document  

            doc.save('Ev Fleet 3Wheelers.pdf');
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

        return List3WheelersComponent;
      }();

      List3WheelersComponent.ɵfac = function List3WheelersComponent_Factory(t) {
        return new (t || List3WheelersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_13__["EVFleetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]));
      };

      List3WheelersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: List3WheelersComponent,
        selectors: [["app-list3Wheelers"]],
        viewQuery: function List3WheelersComponent_Query(rf, ctx) {
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
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]])],
        decls: 36,
        vars: 7,
        consts: [[2, "text-align", "left", "margin-left", "10px", "margin-bottom", "10px", "margin-top", "10px"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Excel Download", 3, "click"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "PDF Download", 3, "click"], ["fxLayout", "row wrap", 1, "page-layout", "simple", "fullwidth", 2, "overflow", "scroll"], [1, "content", 2, "min-width", "auto"], [1, "mat-elevation-z8"], ["mat-table", "", "matTableFilter", "", "matSort", "", "mat-sort", "", 1, "mat-elevation-z8", 3, "dataSource", "exampleEntity", "filterType"], ["matColumnDef", "vehicle_brand_name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "vehicle_type_name"], ["matColumnDef", "vehicle_model_name"], ["matColumnDef", "description"], ["matColumnDef", "dateConvert"], ["matColumnDef", "status"], ["mat-cell", "", 3, "color", 4, "matCellDef"], ["matColumnDef", "action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["class", "custom_font_size", "style", "display: flex;", 4, "ngIf"], ["appearance", "outline", "class", "list_input", 4, "ngIf"], [1, "custom_font_size", 2, "display", "flex"], ["matSuffix", "", 3, "click"], ["appearance", "outline", 1, "list_input"], ["matInput", "", "placeholder", "Vehicle Brand", 3, "ngModel", "ngModelChange"], ["mat-cell", ""], ["matInput", "", "placeholder", "Vehicle Type", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Vehicle Model", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Description", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", " Created Date", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Status", 3, "ngModel", "ngModelChange"], ["mat-header-cell", ""], [1, "custom_font_size"], ["color", "primary", "matTooltip", "Moderate", 2, "cursor", "pointer", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function List3WheelersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List3WheelersComponent_Template_button_click_1_listener() {
              return ctx.tableExport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "sim_card_download");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function List3WheelersComponent_Template_button_click_5_listener() {
              return ctx.pdfExport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "picture_as_pdf");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, List3WheelersComponent_th_13_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, List3WheelersComponent_td_14_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, List3WheelersComponent_th_16_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, List3WheelersComponent_td_17_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, List3WheelersComponent_th_19_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, List3WheelersComponent_td_20_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, List3WheelersComponent_th_22_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, List3WheelersComponent_td_23_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, List3WheelersComponent_th_25_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, List3WheelersComponent_td_26_Template, 2, 1, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, List3WheelersComponent_th_28_Template, 3, 2, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, List3WheelersComponent_td_29_Template, 2, 3, "td", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, List3WheelersComponent_th_31_Template, 3, 0, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, List3WheelersComponent_td_32_Template, 4, 0, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, List3WheelersComponent_tr_33_Template, 1, 0, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, List3WheelersComponent_tr_34_Template, 1, 0, "tr", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-paginator", 20);

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
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], mat_table_filter__WEBPACK_IMPORTED_MODULE_6__["MatTableFilterDirective"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        styles: ["mat-form-field.list_input div.mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\n.mat-header-cell .custom_font_size {\n  font-size: 15px !important;\n  text-align: left;\n}\n\nmat-form-field.list_input div.mat-form-field-infix {\n  padding: 0.5em 0 0.5em 0 !important;\n}\n\ntable {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGxpc3QzV2hlZWxlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFDRSw0QkFBQTtBQVhGOztBQWFBO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtBQVZGOztBQVlBO0VBQ0UsbUNBQUE7QUFURjs7QUFZQTtFQUNJLFdBQUE7QUFUSjs7QUFZRTtFQUNFLFlBQUE7QUFUSiIsImZpbGUiOiJsaXN0M1doZWVsZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGFibGUge1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIC5tYXQtZm9ybS1maWVsZCB7XHJcbi8vICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgdGQsIHRoIHtcclxuLy8gICAgIHdpZHRoOiAyNSU7XHJcbi8vICAgfVxyXG5tYXQtZm9ybS1maWVsZC5saXN0X2lucHV0ICBkaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcclxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtaGVhZGVyLWNlbGwgLmN1c3RvbV9mb250X3NpemV7XHJcbiAgZm9udC1zaXplOiAxNXB4ICAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxubWF0LWZvcm0tZmllbGQubGlzdF9pbnB1dCBkaXYubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gIHBhZGRpbmc6IDAuNWVtIDAgMC41ZW0gMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICJdfQ== */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_7__["fuseAnimations"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](List3WheelersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-list3Wheelers',
            templateUrl: './list3Wheelers.component.html',
            styleUrls: ['./list3Wheelers.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_7__["fuseAnimations"],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]]
          }]
        }], function () {
          return [{
            type: app_shared_services_ev_space_ev_fleet_service__WEBPACK_IMPORTED_MODULE_13__["EVFleetService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBar"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]
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
    "ze/K":
    /*!**************************************************************!*\
      !*** ./src/app/shared/services/ev-space/ev-fleet.service.ts ***!
      \**************************************************************/

    /*! exports provided: EVFleetService */

    /***/
    function zeK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EVFleetService", function () {
        return EVFleetService;
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

      var EVFleetService = /*#__PURE__*/function () {
        function EVFleetService(http) {
          _classCallCheck(this, EVFleetService);

          this.http = http;
          this.apiUrl2 = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2, "/vehicleModel");
        } // getVehicleManufacturesById(id){
        //     return this.http.get(`${this.apiUrl2}/getVehicleManufacturesById/${id}`);
        // }


        _createClass(EVFleetService, [{
          key: "getTwoWheelerVehicle",
          value: function getTwoWheelerVehicle() {
            return this.http.get("".concat(this.apiUrl2, "/getVehicleManufacturesByVehicleType/Two Wheeler"));
          }
        }, {
          key: "getThreeWheelerVehicle",
          value: function getThreeWheelerVehicle() {
            return this.http.get("".concat(this.apiUrl2, "/getVehicleManufacturesByVehicleType/Three Wheeler"));
          }
        }, {
          key: "getFourLMVWheelerVehicle",
          value: function getFourLMVWheelerVehicle() {
            return this.http.get("".concat(this.apiUrl2, "/getVehicleManufacturesByVehicleType/Four Wheeler"));
          }
        }, {
          key: "getEvCycleVehicle",
          value: function getEvCycleVehicle() {
            return this.http.get("".concat(this.apiUrl2, "/getVehicleManufacturesByVehicleType/Electric Cycle"));
          }
        }, {
          key: "getEvBusVehicle",
          value: function getEvBusVehicle() {
            return this.http.get("".concat(this.apiUrl2, "/getVehicleManufacturesByVehicleType/Electric Bus"));
          }
        }, {
          key: "getEvTruckVehicle",
          value: function getEvTruckVehicle() {
            return this.http.get("".concat(this.apiUrl2, "/getVehicleManufacturesByVehicleType/Electric Truck"));
          }
        }, {
          key: "getAllModerateVehicle",
          value: function getAllModerateVehicle() {
            return this.http.get("".concat(this.apiUrl2, "/getAllModerateVehicle"));
          }
        }, {
          key: "deleteEvFleet",
          value: function deleteEvFleet(id, login_id) {
            return this.http["delete"]("".concat(this.apiUrl2, "/delete/").concat(id, "/").concat(login_id));
          }
        }, {
          key: "publishEvFleet",
          value: function publishEvFleet(params) {
            return this.http.post("".concat(this.apiUrl2, "/publish"), params);
          }
        }, {
          key: "moderateEvFleet",
          value: function moderateEvFleet(params) {
            return this.http.post("".concat(this.apiUrl2, "/moderate"), params);
          }
        }, {
          key: "createEvFleet",
          value: function createEvFleet(params) {
            return this.http.post("".concat(this.apiUrl2, "/create"), params);
          }
        }, {
          key: "updateEvFleet",
          value: function updateEvFleet(params) {
            return this.http.post("".concat(this.apiUrl2, "/update"), params);
          }
        }]);

        return EVFleetService;
      }();

      EVFleetService.ɵfac = function EVFleetService_Factory(t) {
        return new (t || EVFleetService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      EVFleetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: EVFleetService,
        factory: EVFleetService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EVFleetService, [{
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
    "zmIt":
    /*!*******************************************************************!*\
      !*** ./src/app/main/EV-space/EV-fleet/EV-fleet-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: EVFleetRoutingModule */

    /***/
    function zmIt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EVFleetRoutingModule", function () {
        return EVFleetRoutingModule;
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


      var _EV_fleet_crud_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./EV-fleet-crud/routes */
      "eg4j");
      /* harmony import */


      var _EV_fleet_crud_EV_fleet_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./EV-fleet-crud/EV-fleet-crud.component */
      "h/WB");
      /* harmony import */


      var app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/interceptors/auth-gaurd */
      "9gca");

      var routes = [{
        path: 'crud',
        component: _EV_fleet_crud_EV_fleet_crud_component__WEBPACK_IMPORTED_MODULE_3__["EVFleetCrudComponent"],
        canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: _EV_fleet_crud_routes__WEBPACK_IMPORTED_MODULE_2__["TABS_DEMO_ROUTES"]
      }];

      var EVFleetRoutingModule = function EVFleetRoutingModule() {
        _classCallCheck(this, EVFleetRoutingModule);
      };

      EVFleetRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: EVFleetRoutingModule
      });
      EVFleetRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function EVFleetRoutingModule_Factory(t) {
          return new (t || EVFleetRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EVFleetRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EVFleetRoutingModule, [{
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
//# sourceMappingURL=EV-fleet-EV-fleet-module-es5.js.map