(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cpo-rfid-cpo-rfid-module"], {
    /***/
    "0Uwj":
    /*!**********************************************************************************************!*\
      !*** ./src/app/main/asset/rfid-management/cpo-rfid/cpo-rfid-crud/cpo-rfid-crud.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: CpoRfidCrudComponent, SunnyTabContentComponent, RainyTabContentComponent, FoggyTabContentComponent */

    /***/
    function Uwj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CpoRfidCrudComponent", function () {
        return CpoRfidCrudComponent;
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

      function CpoRfidCrudComponent_a_8_Template(rf, ctx) {
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


      var CpoRfidCrudComponent = /*#__PURE__*/function () {
        function CpoRfidCrudComponent(router, cdr, _utilityService) {
          _classCallCheck(this, CpoRfidCrudComponent);

          this.router = router;
          this.cdr = cdr;
          this._utilityService = _utilityService;
          this.tabLinks = [// { label: 'CPO-RFID', link: 'list' },
            // { label: 'Add New', link: 'create' }
          ];
          this.tempLinks = [];
        }

        _createClass(CpoRfidCrudComponent, [{
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
            var _this2 = this;

            this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
            var nav_list = this.localStorage.nav_list_with_tab;
            nav_list.filter(function (x) {
              if (x.id === "assetManagement") {
                _this2.objectData = x;

                if (_this2.objectData.children != undefined && _this2.objectData.children != null) {
                  _this2.objectData.children.filter(function (y) {
                    if (y.id === "rfidManagement") {
                      _this2.objectChildData = y;

                      if (_this2.objectChildData.children != undefined && _this2.objectChildData.children != null) {
                        _this2.objectChildData.children.filter(function (z) {
                          _this2.childData = z;

                          if (z.id === "cpo-rfid") {
                            var isDefaultRoutePermeted = false;

                            if (_this2.childData.children != undefined && _this2.childData.children != null) {
                              _this2.childData.children.filter(function (t) {
                                if (t.id === "cpo-rfId") {
                                  isDefaultRoutePermeted = true;

                                  _this2.tempLinks.push({
                                    label: 'CPO-RFID',
                                    link: 'list'
                                  });
                                }

                                if (t.id === "addNew") {
                                  _this2.tempLinks.push({
                                    label: 'Add New',
                                    link: 'create'
                                  });
                                }
                              });
                            }

                            _this2.tabLinks = _this2.tempLinks;

                            if (!isDefaultRoutePermeted) {
                              _this2.router.navigate(['/assetManagement/rfidManagement/cpo-rfid/crud/' + _this2.tempLinks[0].link]);
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

        return CpoRfidCrudComponent;
      }();

      CpoRfidCrudComponent.ɵfac = function CpoRfidCrudComponent_Factory(t) {
        return new (t || CpoRfidCrudComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]));
      };

      CpoRfidCrudComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CpoRfidCrudComponent,
        selectors: [["app-cpo-rfid-crud"]],
        decls: 10,
        vars: 6,
        consts: [[2, "display", "block", "width", "100%"], ["id", "", "fxLayout", "row", 1, "page-layout", "simple", "right-sidebar"], ["fusePerfectScrollbar", "", 1, "center"], ["fxLayout", "column", "fxLayoutAlign", "space-between", 1, "header", "accent", "px-24", "pt-16", "pb-0"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [1, "mat-display-1", "my-0", "my-sm-24", "welcome-message"], ["mat-tab-nav-bar", "", "aria-label", "weather navigation links"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active"], ["rla", "routerLinkActive"]],
        template: function CpoRfidCrudComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CpoRfidCrudComponent_a_8_Template, 3, 3, "a", 7);

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
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcG8tcmZpZC1jcnVkLmNvbXBvbmVudC5zY3NzIn0= */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CpoRfidCrudComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-cpo-rfid-crud',
            templateUrl: './cpo-rfid-crud.component.html',
            styleUrls: ['./cpo-rfid-crud.component.scss'],
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
    "BsQd":
    /*!**********************************************************************************************!*\
      !*** ./src/app/main/asset/rfid-management/cpo-rfid/action-dialog/action-dialog.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: ActionDialogComponent */

    /***/
    function BsQd(module, __webpack_exports__, __webpack_require__) {
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


      var _fuse_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fuse/animations */
      "PVWW");
      /* harmony import */


      var app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/client/client.service */
      "LKWI");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/shared/services/cpo/cpo.service */
      "k3ne");
      /* harmony import */


      var app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/shared/services/rfid/rfid.service */
      "QtQ4");
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


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var _c0 = ["toggleElement"];

      function ActionDialogComponent_mat_option_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r8.name, " ");
        }
      }

      function ActionDialogComponent_mat_error_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter client ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_option_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);

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

      function ActionDialogComponent_mat_error_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter CPO name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionDialogComponent_mat_option_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r10.rfid_no, " ");
        }
      }

      var ActionDialogComponent = /*#__PURE__*/function () {
        function ActionDialogComponent(fb, clientService, snackBar, dialogRef, data, cpoService, rfidService) {
          _classCallCheck(this, ActionDialogComponent);

          this.fb = fb;
          this.clientService = clientService;
          this.snackBar = snackBar;
          this.dialogRef = dialogRef;
          this.data = data;
          this.cpoService = cpoService;
          this.rfidService = rfidService;
          this.isEditMode = false;
          this.status = false;
        }

        _createClass(ActionDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialize();
            this.getClientName(); // this.getAllRfid();
          }
        }, {
          key: "initialize",
          value: function initialize() {
            this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
            this.params = this.data;
            this.rfidList = this.params.rfidData;
            this.isEditMode = this.params.action == 'CREATE' ? false : true;
            this.form = this.fb.group({
              client_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              cpo_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              rfidlist: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              status: this.status == true ? 'Y' : 'N'
            });

            if (this.isEditMode) {
              this.assignValues(this.params);
              this.getClientName();
              this.getAllRfid(this.params.data.cpo_id);
              this.getCpoByclient(this.params.data.CLIENT_ID); //  this.getAllRfidbyCPOid(this.params.data.cpo_id);
            }
          }
        }, {
          key: "getClientName",
          value: function getClientName() {
            var _this3 = this;

            //;
            this.clientService.getActiveClientsCW(this.localStorage.userId).subscribe(function (data) {
              //;
              _this3.client_name = data;

              if (_this3.isEditMode) {
                //;
                var toSelect = _this3.client_name.find(function (c) {
                  return c.id == _this3.params.data.CLIENT_ID;
                });

                _this3.form.get('client_name').setValue(toSelect);

                _this3.filteredOptionsClient = _this3.form.controls.client_name.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                  return typeof value === 'string' ? value : value.name;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) {
                  return name ? _this3._filterClient(name) : _this3.client_name;
                }));
              }
            }, function (err) {//;
            });
          }
        }, {
          key: "displayClientName",
          value: function displayClientName(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "displayCPOName",
          value: function displayCPOName(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "_filterClient",
          value: function _filterClient(name) {
            var filterValue = name.toLowerCase();
            return this.client_name.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "_filterClientCPO",
          value: function _filterClientCPO(name) {
            var filterValue = name.toLowerCase();
            return this.cposName.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "onClientChange",
          value: function onClientChange(event) {
            this.getCpoByclient(event);
            this.form.get('cpo_name').setValue("");
          }
        }, {
          key: "getCpoByclient",
          value: function getCpoByclient(id) {
            var _this4 = this;

            this.cpoService.getCpoByClientId(id).subscribe(function (data) {
              _this4.cposName = data;

              if (_this4.isEditMode) {
                //;
                var toSelect = _this4.cposName.find(function (c) {
                  return c.id == _this4.params.data.cpo_id;
                });

                _this4.form.get('cpo_name').setValue(toSelect);

                _this4.filteredOptionsClientCPO = _this4.form.controls.cpo_name.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                  return typeof value === 'string' ? value : value.name;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) {
                  return name ? _this4._filterClientCPO(name) : _this4.cposName;
                }));
              }
            }, function (err) {});
          }
        }, {
          key: "getAllRfid",
          value: function getAllRfid(id) {
            var _this5 = this;

            this.rfidService.getAllRFidsWithMappedCPOs(id).subscribe(function (data) {
              _this5.ListRFID = data.data;
              var selectedList = [];

              for (var i = 0; i < _this5.ListRFID.length; i++) {
                var rfid = _this5.ListRFID[i];

                if (rfid.id != null && rfid.id != undefined) {
                  selectedList.push(rfid);
                }
              } // for (let i = 0; i < this.ListRFID.length; i++) {
              //     var rfid = this.ListRFID[i];
              //   for (let k = 0; k < this.rfidList.length; k++){
              //     var cpoRfID = this.rfidList[k];
              //     if(rfid.id +'' == cpoRfID.id+''){
              //       selectedList.push(rfid);
              //     }
              //   }
              //   //const toSelect = this.ListRFID.find(c => c.id == this.params.data.rfid_id);
              //   //this.form.get('rfidlist').setValue([toSelect]);
              // }


              _this5.form.get('rfidlist').setValue(selectedList); // this.getAllRfidbyCPOid(this.params.data.cpo_id)
              // if(this.isEditMode){
              //   this.form.get('rfidlist').setValue(this.ListRFID);
              // }

            }, function (err) {//;
            });
          }
        }, {
          key: "getAllRfidbyCPOid",
          value: function getAllRfidbyCPOid(id) {
            var _this6 = this;

            this.rfidService.getRFidsByCpoId(id).subscribe(function (data) {
              //;
              _this6.selectedRFID = data.data; // for (let i = 0; i < this.ListRFID.length; i++){
              //   const toSelect = this.ListRFID.find(c => c.id == this.params.data.cpo_id);
              //   this.form.get('rfidlist').setValue(toSelect);
              // }
              // this.form.get('rfidlist').setValue(this.selectedRFID);
            }, function (err) {//;
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
          key: "onYesClick",
          value: function onYesClick() {
            var _this7 = this;

            var formValues = this.form.value;
            var params = {
              client_id: formValues.client_name.id,
              cpo_id: formValues.cpo_name.id,
              // rfid_data  : formValues.rfidlist,
              rfid_data: formValues.rfidlist.map(function (v) {
                return {
                  id: v.rfid_id
                };
              }),
              status: this.status == true ? 'Y' : 'N' // tslint:disable-next-line: semicolon

            }; // tslint:disable-next-line: no-//

            if (this.isEditMode) {
              params.id = this.params.data.id, params.modify_by = this.localStorage.userId;
            } else {
              params.created_by = this.localStorage.userId;
            }

            if (this.isEditMode) {
              this.rfidService.updatecpoRfidMapping(params).subscribe(function (data) {
                _this7.snackBar.open('Record updated successfully!', 'Dismiss', {
                  duration: 5000
                });

                _this7.dialogRef.close();
              }, function (err) {
                _this7.snackBar.open('Please try again', 'Dismiss', {
                  duration: 5000
                });
              });
            } else {
              this.rfidService.createCpoRfidMapping(params).subscribe(function (data) {
                _this7.snackBar.open('CPO-Rfid  created!', 'Dismiss', {
                  duration: 5000
                });

                _this7.dialogRef.close();
              }, function (err) {
                _this7.snackBar.open('Please try again', 'Dismiss', {
                  duration: 5000
                });
              });
            }

            this.dialogRef.close(params);
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('email').hasError('required') ? 'You must enter a value' : form.get('email').hasError('email') ? 'Not a valid email' : '';
          }
        }, {
          key: "assignValues",
          value: function assignValues(params) {
            //this.form.get('client_name').setValue(params.data.client_name);
            //this.form.get('cpo_name').setValue(params.data.cpo_name);
            this.form.get('rfidlist').setValue(params.data.rfidlist);
            this.status = params.data.status == 'Y' ? true : false;
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
        return new (t || ActionDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_7__["CpoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_8__["RfidService"]));
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
        decls: 53,
        vars: 17,
        consts: [["id", "dialog_action_close", "matTooltip", "Close window", 1, "material-icons-outlined", 2, "cursor", "pointer", "color", "white", 3, "click"], [1, "action_toolbar"], [2, "padding", "24px", "max-height", "22vw", "overflow", "auto"], ["id", "forms", "fxLayout", "column", 1, "page-layout", "simple", "fullwidth"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", "name", "form", 1, "mat-elevation-z4", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "50", 1, "pr-4"], ["type", "text", "matInput", "", "formControlName", "client_name", 3, "matAutocomplete"], [3, "displayWith", "optionSelected"], ["clientNameAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 2, "display", "flex"], ["matSuffix", "", 1, "secondary-text"], ["matSuffix", "", "matTooltip", "Please enter client", 1, "secondary-text"], [4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "cpo_name", 3, "matAutocomplete"], [3, "displayWith"], ["cpoNameAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please enter cpo name", 1, "secondary-text"], ["appearance", "outline", "fxFlex", "49", 1, "pr-4"], ["formControlName", "rfidlist", "multiple", ""], ["matSuffix", "", "matTooltip", "Please enter rfid list", 1, "secondary-text"], ["fxFlex", "50"], ["color", "primary", 1, "example-margin", 3, "checked", "change"], ["toggleElement", ""], ["fxLayout", "row", "fxLayoutAlign", "start center", 2, "padding-top", "10px"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "mr-8", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "warn", 1, "mr-8", 3, "click"], [3, "value"]],
        template: function ActionDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionDialogComponent_Template_mat_icon_click_0_listener() {
              return ctx.closeActionPanel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "CPO-RFID Mapping");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Client Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-autocomplete", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function ActionDialogComponent_Template_mat_autocomplete_optionSelected_12_listener($event) {
              return ctx.onClientChange($event.option.value.id);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ActionDialogComponent_mat_option_14_Template, 2, 2, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ActionDialogComponent_mat_error_21_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "CPO Name");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ActionDialogComponent_mat_error_35_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "RFID List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-select", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ActionDialogComponent_mat_option_41_Template, 2, 2, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-slide-toggle", 23, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ActionDialogComponent_Template_mat_slide_toggle_change_45_listener($event) {
              return ctx.updateStatus($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionDialogComponent_Template_button_click_49_listener() {
              return ctx.onYesClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionDialogComponent_Template_button_click_51_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayClientName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 13, ctx.filteredOptionsClient));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("client_name").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayCPOName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 15, ctx.filteredOptionsClientCPO));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("cpo_name").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ListRFID);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.status);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.status ? "Active" : "Inactive", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isEditMode ? "Save" : "Save");
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"]],
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
            type: app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"]
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
            type: app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_7__["CpoService"]
          }, {
            type: app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_8__["RfidService"]
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
    "Enpa":
    /*!********************************************************************************!*\
      !*** ./src/app/main/asset/rfid-management/cpo-rfid/create/create.component.ts ***!
      \********************************************************************************/

    /*! exports provided: CreateComponent */

    /***/
    function Enpa(module, __webpack_exports__, __webpack_require__) {
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


      var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fuse/animations */
      "PVWW");
      /* harmony import */


      var app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/master/master.service */
      "auZQ");
      /* harmony import */


      var app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/client/client.service */
      "LKWI");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/shared/services/cpo/cpo.service */
      "k3ne");
      /* harmony import */


      var app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! app/shared/services/rfid/rfid.service */
      "QtQ4");
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


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
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
          var option_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r8.name, " ");
        }
      }

      function CreateComponent_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter client name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateComponent_mat_option_23_Template(rf, ctx) {
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

      function CreateComponent_mat_error_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter CPO name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateComponent_mat_option_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r10.rfid_no, " ");
        }
      }

      var CreateComponent = /*#__PURE__*/function () {
        function CreateComponent(fb, masterService, clientService, snackBar, router, cpoService, rfidService) {
          _classCallCheck(this, CreateComponent);

          this.fb = fb;
          this.masterService = masterService;
          this.clientService = clientService;
          this.snackBar = snackBar;
          this.router = router;
          this.cpoService = cpoService;
          this.rfidService = rfidService;
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
              client_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              cpo_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              rfidlist: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              status: this.status == true ? 'Y' : 'N'
            });
            this.filteredOptions();
            this.getClientName(); //this.getAllRfid();
          } // get rfidlist(): FormControl {
          //   return this.form.get('rfidlist') as FormControl;
          // }

        }, {
          key: "onCPOChange",
          value: function onCPOChange(id) {
            //this.getSelectedRFIDbyCPO(id);
            this.getAllRfidByCPO(id);
          } // getSelectedRFIDbyCPO(id){
          //   this.rfidService.getRFidsByCpoId(id).subscribe(
          //     (data:any)=>{
          //       //;
          //       this.rfidList = data.data;
          //        },(err)=>{
          //       //;
          //     }
          //   )
          // }

        }, {
          key: "getAllRfidByCPO",
          value: function getAllRfidByCPO(id) {
            var _this8 = this;

            //;
            this.rfidService.getAllRFidsWithMappedCPOs(id).subscribe(function (data) {
              _this8.ListRFID = data.data; // this.rfidList = data.data;

              var selectedList = [];

              for (var i = 0; i < _this8.ListRFID.length; i++) {
                var rfid = _this8.ListRFID[i];

                if (rfid.id != null && rfid.id != undefined) {
                  selectedList.push(rfid);
                }
              }

              _this8.form.get('rfidlist').setValue(selectedList);
            }, function (err) {//;
            });
          }
        }, {
          key: "getClientName",
          value: function getClientName() {
            var _this9 = this;

            //;
            this.clientService.getActiveClientsCW(this.localStorage.userId).subscribe(function (data) {
              //;
              _this9.client_name = data;

              var toSelect = _this9.client_name.find(function (c) {
                return c.id == _this9.localStorage.client_id;
              });

              _this9.form.get('client_name').setValue(toSelect);

              _this9.filteredOptionsClient = _this9.form.controls.client_name.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
                return typeof value === 'string' ? value : value.name;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (name) {
                return name ? _this9._filterClient(name) : _this9.client_name;
              }));

              _this9.getCpoByclient(toSelect.id);
            }, function (err) {//;
            });
          }
        }, {
          key: "filteredOptions",
          value: function filteredOptions() {
            var _this10 = this;

            this.filteredOptionsClient = this.form.controls.client_name.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
              return typeof value === 'string' ? value : value.name;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (name) {
              return name ? _this10._filterClient(name) : _this10.client_name;
            }));
            this.filteredOptionsClientCPO = this.form.controls.cpo_name.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
              return typeof value === 'string' ? value : value.name;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (name) {
              return name ? _this10._filterClientCPO(name) : _this10.cposName;
            }));
          }
        }, {
          key: "displayClientName",
          value: function displayClientName(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "displayCPOName",
          value: function displayCPOName(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "_filterClient",
          value: function _filterClient(name) {
            var filterValue = name.toLowerCase();
            return this.client_name.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "_filterClientCPO",
          value: function _filterClientCPO(name) {
            var filterValue = name.toLowerCase();
            return this.cposName.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "onClientChange",
          value: function onClientChange(event) {
            this.getCpoByclient(event);
            this.form.get('cpo_name').setValue("");
          }
        }, {
          key: "getCpoByclient",
          value: function getCpoByclient(id) {
            var _this11 = this;

            this.cpoService.getCpoByClientId(id).subscribe(function (data) {
              _this11.cposName = data;
              _this11.filteredOptionsClientCPO = _this11.form.controls.cpo_name.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
                return typeof value === 'string' ? value : value.name;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (name) {
                return name ? _this11._filterClientCPO(name) : _this11.cposName;
              }));
            }, function (err) {});
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this12 = this;

            var formValues = this.form.value; ////
            //;

            var params = {
              client_id: formValues.client_name.id,
              cpo_id: formValues.cpo_name.id,
              //rfid_data :formValues.rfidlist.map(v => v.rfid_id),
              //rfid_data :formValues.rfidlist,
              rfid_data: formValues.rfidlist.map(function (v) {
                return {
                  id: v.rfid_id
                };
              }),
              status: this.status == true ? 'Y' : 'N',
              created_by: this.localStorage.userId
            };
            this.rfidService.createCpoRfidMapping(params).subscribe(function (data) {
              // 
              _this12.snackBar.open('CPO-RFID mapped!', 'Dismiss', {
                duration: 5000
              });

              _this12.router.navigate(['/assetManagement/rfidManagement/cpo-rfid/crud/list']);
            }, function (err) {
              // 
              _this12.snackBar.open('Please try again', 'Dismiss', {
                duration: 5000
              });
            });
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('email').hasError('required') ? 'You must enter a value' : form.get('email').hasError('email') ? 'Not a valid email' : '';
          } // onRFIDRemoved(rfid: string) {
          //   const rfids = this.form.controls.rfidlist.value as string[];
          //   this.removeFirst(rfids, rfid);
          //   this.form.controls.rfidlist.setValue(rfids); // To trigger change detection
          // }
          // private removeFirst<T>(array: T[], toRemove: T): void {
          //   const index = array.indexOf(toRemove);
          //   if (index !== -1) {
          //     array.splice(index, 1);
          //   }
          // }

        }, {
          key: "updateStatus",
          value: function updateStatus(event) {
            this.status = event.checked;
            this.ref.checked = this.status;
          }
        }, {
          key: "onRfidChange",
          value: function onRfidChange(event) {}
        }]);

        return CreateComponent;
      }();

      CreateComponent.ɵfac = function CreateComponent_Factory(t) {
        return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_4__["MasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_8__["CpoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_9__["RfidService"]));
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
        decls: 48,
        vars: 16,
        consts: [["id", "forms", "fxLayout", "column", 1, "page-layout", "simple", "fullwidth"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", "name", "form", 1, "mat-card", "mat-elevation-z4", "p-24", 3, "formGroup", "submit", "keydown.enter"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "50", 1, "pr-4"], ["type", "text", "matInput", "", "formControlName", "client_name", 3, "matAutocomplete"], [3, "displayWith", "optionSelected"], ["clientNameAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 2, "display", "flex"], ["matSuffix", "", 1, "secondary-text"], ["matSuffix", "", "matTooltip", "Please enter client", 1, "secondary-text"], [4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "cpo_name", 3, "matAutocomplete"], ["cpoNameAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please enter cpo name", 1, "secondary-text"], ["formControlName", "rfidlist", "multiple", "", 3, "selectionChange"], ["matSuffix", "", "matTooltip", "Please enter rfid list", 1, "secondary-text"], ["fxFlex", "50"], ["color", "primary", 1, "example-margin", 3, "checked", "change"], ["toggleElement", ""], ["fxLayout", "row", "fxLayoutAlign", "start center", 2, "padding-top", "10px"], ["mat-raised-button", "", "color", "primary", 1, "mr-8"], ["mat-raised-button", "", "color", "warn", "type", "button", "routerLink", "/assetManagement/rfidManagement/cpo-rfid/crud/list", 1, "mr-8"], [3, "value"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Client Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-autocomplete", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function CreateComponent_Template_mat_autocomplete_optionSelected_7_listener($event) {
              return ctx.onClientChange($event.option.value.id);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function CreateComponent_Template_mat_autocomplete_optionSelected_21_listener($event) {
              return ctx.onCPOChange($event.option.value.id);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "RFID List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-select", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function CreateComponent_Template_mat_select_selectionChange_35_listener($event) {
              return ctx.onRfidChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, CreateComponent_mat_option_36_Template, 2, 2, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-slide-toggle", 18, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateComponent_Template_mat_slide_toggle_change_40_listener($event) {
              return ctx.updateStatus($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayClientName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 12, ctx.filteredOptionsClient));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("client_name").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayCPOName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 14, ctx.filteredOptionsClientCPO));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("cpo_name").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ListRFID);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.status);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.status ? "Active" : "Inactive", "");
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"]],
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
            type: app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_4__["MasterService"]
          }, {
            type: app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }, {
            type: app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_8__["CpoService"]
          }, {
            type: app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_9__["RfidService"]
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
    "TYrW":
    /*!******************************************************************************************!*\
      !*** ./src/app/main/asset/rfid-management/cpo-rfid/view-dialog/view-dialog.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: ViewDialogComponent */

    /***/
    function TYrW(module, __webpack_exports__, __webpack_require__) {
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


      var app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/client/client.service */
      "LKWI");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/shared/services/cpo/cpo.service */
      "k3ne");
      /* harmony import */


      var app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/shared/services/rfid/rfid.service */
      "QtQ4");
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


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var _c0 = ["toggleElement"];

      function ViewDialogComponent_mat_option_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r8.name, " ");
        }
      }

      function ViewDialogComponent_mat_error_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter client ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_option_25_Template(rf, ctx) {
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

      function ViewDialogComponent_mat_error_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter CPO name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewDialogComponent_mat_option_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r10.rfid_no, " ");
        }
      }

      var ViewDialogComponent = /*#__PURE__*/function () {
        function ViewDialogComponent(fb, clientService, snackBar, dialogRef, data, cpoService, rfidService) {
          _classCallCheck(this, ViewDialogComponent);

          this.fb = fb;
          this.clientService = clientService;
          this.snackBar = snackBar;
          this.dialogRef = dialogRef;
          this.data = data;
          this.cpoService = cpoService;
          this.rfidService = rfidService;
          this.isEditMode = false;
          this.status = false;
        }

        _createClass(ViewDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialize();
            this.getClientName(); // this.getAllRfid();
          }
        }, {
          key: "initialize",
          value: function initialize() {
            this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
            this.params = this.data;
            this.rfidList = this.params.rfidData;
            this.isEditMode = this.params.action == 'CREATE' ? false : true;
            this.form = this.fb.group({
              client_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              cpo_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              rfidlist: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });

            if (this.isEditMode) {
              this.assignValues(this.params);
              this.getClientName();
              this.getAllRfid(this.params.data.cpo_id);
              this.getCpoByclient(this.params.data.CLIENT_ID); //  this.getAllRfidbyCPOid(this.params.data.cpo_id);
            }
          }
        }, {
          key: "getClientName",
          value: function getClientName() {
            var _this13 = this;

            //;
            this.clientService.getActiveClientsCW(this.localStorage.userId).subscribe(function (data) {
              //;
              _this13.client_name = data;

              if (_this13.isEditMode) {
                //;
                var toSelect = _this13.client_name.find(function (c) {
                  return c.id == _this13.params.data.CLIENT_ID;
                });

                _this13.form.get('client_name').setValue(toSelect);

                _this13.filteredOptionsClient = _this13.form.controls.client_name.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                  return typeof value === 'string' ? value : value.name;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) {
                  return name ? _this13._filterClient(name) : _this13.client_name;
                }));
              }
            }, function (err) {//;
            });
          }
        }, {
          key: "displayClientName",
          value: function displayClientName(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "displayCPOName",
          value: function displayCPOName(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "_filterClient",
          value: function _filterClient(name) {
            var filterValue = name.toLowerCase();
            return this.client_name.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "_filterClientCPO",
          value: function _filterClientCPO(name) {
            var filterValue = name.toLowerCase();
            return this.cposName.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "onClientChange",
          value: function onClientChange(event) {
            this.getCpoByclient(event);
          }
        }, {
          key: "getCpoByclient",
          value: function getCpoByclient(id) {
            var _this14 = this;

            this.cpoService.getCpoByClientId(id).subscribe(function (data) {
              _this14.cposName = data;

              if (_this14.isEditMode) {
                //;
                var toSelect = _this14.cposName.find(function (c) {
                  return c.id == _this14.params.data.cpo_id;
                });

                _this14.form.get('cpo_name').setValue(toSelect);

                _this14.filteredOptionsClientCPO = _this14.form.controls.cpo_name.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
                  return typeof value === 'string' ? value : value.name;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) {
                  return name ? _this14._filterClientCPO(name) : _this14.cposName;
                }));
              }
            }, function (err) {});
          }
        }, {
          key: "getAllRfid",
          value: function getAllRfid(id) {
            var _this15 = this;

            this.rfidService.getAllRFidsWithMappedCPOs(id).subscribe(function (data) {
              _this15.ListRFID = data.data;
              var selectedList = [];

              for (var i = 0; i < _this15.ListRFID.length; i++) {
                var rfid = _this15.ListRFID[i];

                if (rfid.id != null && rfid.id != undefined) {
                  selectedList.push(rfid);
                }
              } // for (let i = 0; i < this.ListRFID.length; i++) {
              //     var rfid = this.ListRFID[i];
              //   for (let k = 0; k < this.rfidList.length; k++){
              //     var cpoRfID = this.rfidList[k];
              //     if(rfid.id +'' == cpoRfID.id+''){
              //       selectedList.push(rfid);
              //     }
              //   }
              //   //const toSelect = this.ListRFID.find(c => c.id == this.params.data.rfid_id);
              //   //this.form.get('rfidlist').setValue([toSelect]);
              // }


              _this15.form.get('rfidlist').setValue(selectedList); // this.getAllRfidbyCPOid(this.params.data.cpo_id)
              // if(this.isEditMode){
              //   this.form.get('rfidlist').setValue(this.ListRFID);
              // }

            }, function (err) {//;
            });
          }
        }, {
          key: "getAllRfidbyCPOid",
          value: function getAllRfidbyCPOid(id) {
            var _this16 = this;

            this.rfidService.getRFidsByCpoId(id).subscribe(function (data) {
              //;
              _this16.selectedRFID = data.data; // for (let i = 0; i < this.ListRFID.length; i++){
              //   const toSelect = this.ListRFID.find(c => c.id == this.params.data.cpo_id);
              //   this.form.get('rfidlist').setValue(toSelect);
              // }
              // this.form.get('rfidlist').setValue(this.selectedRFID);
            }, function (err) {//;
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
          key: "onYesClick",
          value: function onYesClick() {
            var _this17 = this;

            var formValues = this.form.value;
            var params = {
              client_id: formValues.client_name.id,
              cpo_id: formValues.cpo_name.id,
              // rfid_data  : formValues.rfidlist,
              rfid_data: formValues.rfidlist.map(function (v) {
                return {
                  id: v.rfid_id
                };
              }),
              status: this.status == true ? 'Y' : 'N' // tslint:disable-next-line: semicolon

            }; // tslint:disable-next-line: no-//

            if (this.isEditMode) {
              params.id = this.params.data.id, params.modify_by = this.localStorage.userId;
            } else {
              params.created_by = this.localStorage.userId;
            }

            if (this.isEditMode) {
              this.rfidService.updatecpoRfidMapping(params).subscribe(function (data) {
                _this17.snackBar.open('Record updated successfully!', 'Dismiss', {
                  duration: 5000
                });

                _this17.dialogRef.close();
              }, function (err) {
                _this17.snackBar.open('Please try again', 'Dismiss', {
                  duration: 5000
                });
              });
            } else {
              this.rfidService.createCpoRfidMapping(params).subscribe(function (data) {
                _this17.snackBar.open('CPO-Rfid  created!', 'Dismiss', {
                  duration: 5000
                });

                _this17.dialogRef.close();
              }, function (err) {
                _this17.snackBar.open('Please try again', 'Dismiss', {
                  duration: 5000
                });
              });
            }

            this.dialogRef.close(params);
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(form) {
            return form.get('email').hasError('required') ? 'You must enter a value' : form.get('email').hasError('email') ? 'Not a valid email' : '';
          }
        }, {
          key: "assignValues",
          value: function assignValues(params) {
            // this.form.get('client_name').setValue(params.data.client_name);
            //this.form.get('cpo_name').setValue(params.data.cpo_name);
            this.form.get('rfidlist').setValue(params.data.rfidlist);
            this.status = params.data.status == 'Y' ? true : false;
          }
        }, {
          key: "updateStatus",
          value: function updateStatus(event) {
            this.status = event.checked;
            this.ref.checked = this.status;
          }
        }]);

        return ViewDialogComponent;
      }();

      ViewDialogComponent.ɵfac = function ViewDialogComponent_Factory(t) {
        return new (t || ViewDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_7__["CpoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_8__["RfidService"]));
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
        decls: 43,
        vars: 16,
        consts: [["id", "dialog_action_close", "matTooltip", "Close window", 1, "material-icons-outlined", 2, "cursor", "pointer", "color", "white", 3, "click"], [1, "action_toolbar"], [2, "padding", "24px", "max-height", "22vw", "overflow", "auto"], ["id", "forms", "fxLayout", "column", 1, "page-layout", "simple", "fullwidth"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", "name", "form", 1, "mat-elevation-z4", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "50", 1, "pr-4"], ["type", "text", "readonly", "", "matInput", "", "formControlName", "client_name", 3, "matAutocomplete"], [3, "displayWith", "optionSelected"], ["clientNameAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 1, "secondary-text"], [4, "ngIf"], ["type", "text", "readonly", "", "matInput", "", "formControlName", "cpo_name", 3, "matAutocomplete"], [3, "displayWith"], ["cpoNameAuto", "matAutocomplete"], ["appearance", "outline", "fxFlex", "49", 1, "pr-4"], ["disabled", "", "formControlName", "rfidlist", "multiple", ""], ["fxFlex", "50"], ["color", "primary", "disabled", "", 1, "example-margin", 3, "checked", "change"], ["toggleElement", ""], ["fxLayout", "row", "fxLayoutAlign", "start center", 2, "padding-top", "10px"], ["mat-raised-button", "", "type", "button", "color", "warn", 1, "mr-8", 3, "click"], [3, "value"]],
        template: function ViewDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewDialogComponent_Template_mat_icon_click_0_listener() {
              return ctx.closeActionPanel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "CPO-RFID Mapping");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Client Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-autocomplete", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function ViewDialogComponent_Template_mat_autocomplete_optionSelected_12_listener($event) {
              return ctx.onClientChange($event.option.value.id);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "CPO Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-autocomplete", 14, 15);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "RFID List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-select", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ViewDialogComponent_mat_option_35_Template, 2, 2, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-slide-toggle", 19, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ViewDialogComponent_Template_mat_slide_toggle_change_37_listener($event) {
              return ctx.updateStatus($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewDialogComponent_Template_button_click_41_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayClientName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 12, ctx.filteredOptionsClient));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("client_name").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayCPOName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 14, ctx.filteredOptionsClientCPO));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("cpo_name").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ListRFID);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.status);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.status ? "Active" : "Inactive", " ");
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["AsyncPipe"]],
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
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"]
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
            type: app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_7__["CpoService"]
          }, {
            type: app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_8__["RfidService"]
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
    "UBV7":
    /*!****************************************************************************!*\
      !*** ./src/app/main/asset/rfid-management/cpo-rfid/list/list.component.ts ***!
      \****************************************************************************/

    /*! exports provided: RFID, Group, ListComponent */

    /***/
    function UBV7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RFID", function () {
        return RFID;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Group", function () {
        return Group;
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
      "BsQd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var mat_table_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! mat-table-filter */
      "6Ugt");
      /* harmony import */


      var _fuse_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @fuse/animations */
      "PVWW");
      /* harmony import */


      var _fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @fuse/components/confirm-dialog/confirm-dialog.component */
      "2nsM");
      /* harmony import */


      var _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../view-dialog/view-dialog.component */
      "TYrW");
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! xlsx */
      "EUZL");
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! jspdf */
      "i680");
      /* harmony import */


      var jspdf_autotable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! jspdf-autotable */
      "DaQG");
      /* harmony import */


      var jspdf_autotable__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! app/shared/services/client/client.service */
      "LKWI");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! app/shared/services/cpo/cpo.service */
      "k3ne");
      /* harmony import */


      var app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! app/shared/services/rfid/rfid.service */
      "QtQ4");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function ListComponent_mat_option_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 35);

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

      function ListComponent_mat_error_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select cpo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_mat_header_cell_33_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Client Name \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_33_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r20.changeVisibility("clientSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_mat_header_cell_33_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_mat_header_cell_33_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r22.filterEntity.client_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_33_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r24.changeVisibility("clientSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r19.filterEntity.client_name);
        }
      }

      function ListComponent_mat_header_cell_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_mat_header_cell_33_span_1_Template, 4, 0, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_mat_header_cell_33_mat_form_field_2_Template, 4, 1, "mat-form-field", 38);

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

      function ListComponent_mat_cell_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r25.client_name, " ");
        }
      }

      function ListComponent_mat_header_cell_36_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CPO Name \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_36_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r28.changeVisibility("cpoSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_mat_header_cell_36_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_mat_header_cell_36_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r30.filterEntity.cpo_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_36_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r32.changeVisibility("cpoSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r27.filterEntity.cpo_name);
        }
      }

      function ListComponent_mat_header_cell_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_mat_header_cell_36_span_1_Template, 4, 0, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_mat_header_cell_36_mat_form_field_2_Template, 4, 1, "mat-form-field", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.cpoSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.cpoSearch);
        }
      }

      function ListComponent_mat_cell_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r33.cpo_name, " ");
        }
      }

      function ListComponent_mat_header_cell_39_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "RFID No \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_39_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r36.changeVisibility("rfidSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_mat_header_cell_39_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_mat_header_cell_39_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r38.filterEntity.rfid_no = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_39_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r40.changeVisibility("rfidSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r35.filterEntity.rfid_no);
        }
      }

      function ListComponent_mat_header_cell_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_mat_header_cell_39_span_1_Template, 4, 0, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_mat_header_cell_39_mat_form_field_2_Template, 4, 1, "mat-form-field", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.rfidSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.rfidSearch);
        }
      }

      function ListComponent_mat_cell_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r41 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r41.rf_id_no, " ");
        }
      }

      function ListComponent_mat_header_cell_42_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_42_span_1_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r44.changeVisibility("statusSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_mat_header_cell_42_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_mat_header_cell_42_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r46.filterEntity.statusString = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_42_mat_form_field_2_Template_mat_icon_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r48.changeVisibility("statusSearch", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r43.filterEntity.statusString);
        }
      }

      function ListComponent_mat_header_cell_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_mat_header_cell_42_span_1_Template, 4, 0, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_mat_header_cell_42_mat_form_field_2_Template, 4, 1, "mat-form-field", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.statusSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.statusSearch);
        }
      }

      function ListComponent_mat_cell_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r49 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", row_r49.status == "Y" ? "green" : "red");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r49.statusString, " ");
        }
      }

      function ListComponent_mat_header_cell_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_mat_cell_46_Template(rf, ctx) {
        if (rf & 1) {
          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_cell_46_Template_mat_icon_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

            var element_r50 = ctx.$implicit;

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r51.viewDialog("VIEW", element_r50);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_cell_46_Template_mat_icon_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

            var element_r50 = ctx.$implicit;

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r53.openDialog("EDIT", element_r50);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_cell_46_Template_mat_icon_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

            var element_r50 = ctx.$implicit;

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r54["delete"](element_r50);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_mat_header_row_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row", 54);
        }
      }

      function ListComponent_mat_header_row_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row", 55);
        }
      }

      function ListComponent_mat_cell_50_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_less");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_mat_cell_50_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_mat_cell_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_mat_cell_50_mat_icon_1_Template, 2, 0, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_mat_cell_50_mat_icon_2_Template, 2, 0, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var group_r56 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", group_r56.expanded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !group_r56.expanded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", group_r56[ctx_r15.groupByColumns[group_r56.level - 1]], " (", group_r56.totalCounts, ")");
        }
      }

      function ListComponent_mat_row_51_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-row", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_row_51_Template_mat_row_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

            var row_r59 = ctx.$implicit;

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r60.groupHeaderClick(row_r59);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["groupHeader"];
      };

      var _c1 = function _c1() {
        return [10, 30, 50, 100];
      };

      var RFID = function RFID() {
        _classCallCheck(this, RFID);
      };

      var Group = function Group() {
        _classCallCheck(this, Group);

        this.level = 0;
        this.expanded = false;
        this.totalCounts = 0;
      };
      /**
       * @title Data table with sorting, pagination, and filtering.
       */


      var ListComponent = /*#__PURE__*/function () {
        function ListComponent(clientService, dialog, snackBar, fb, cpoService, rfidService) {
          _classCallCheck(this, ListComponent);

          // Create 100 users
          // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
          this.clientService = clientService;
          this.dialog = dialog;
          this.snackBar = snackBar;
          this.fb = fb;
          this.cpoService = cpoService;
          this.rfidService = rfidService; //displayedColumns: string[] = [ 'client_name', 'cpo_name','rfid_no','status','action'];
          //dataSource: MatTableDataSource<RFID>;

          this.head = [['Client Name', 'CPO Name', 'RFID Number', 'Status']];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
          this.groupByColumns = [];
          this.expandedRfid = [];
          this.expandedSubRfid = [];
          this.clientSearch = false;
          this.cpoSearch = false;
          this.rfidSearch = false;
          this.statusSearch = false; // Assign the data to the data source for the table to render

          this.form = this.fb.group({
            client: [''],
            CPO: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
        }

        _createClass(ListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.localStorage = JSON.parse(localStorage.getItem('userDetails')); // this.getClients();
            // this.getClient();
            // this.getCPOS();

            this.columns = [{
              field: 'client_name'
            }, {
              field: 'cpo_name'
            }, {
              field: 'rfid_no'
            }, {
              field: 'status'
            }, {
              field: 'action'
            }];
            this.displayedColumns = this.columns.map(function (column) {
              return column.field;
            });
            this.groupByColumns = ['cpo_name'];
            this.getactivecposcw(this.localStorage.userId);
            this.filterEntity = new RFID();
            this.filterType = mat_table_filter__WEBPACK_IMPORTED_MODULE_7__["MatTableFilter"].ANYWHERE;
            this.getCpoRFidMappingCW();
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(event) {
            var filterValue = event.target.value;
            this.dataSource.filter = filterValue.trim().toLowerCase();

            if (this.dataSource.paginator) {
              this.dataSource.paginator.firstPage();
            }
          } // getClients(){
          //   this.clientService.getClients().subscribe(
          //     (data:any)=>{
          //       this.clients = data;
          //       this.dataSource = new MatTableDataSource(this.clients);
          //       this.dataSource.paginator = this.paginator;
          //       this.dataSource.sort = this.sort;
          //     },(err)=>{
          //     }
          //   )
          // }
          // getClient() {
          //   //;
          //   this.clientService.getClientById(this.localStorage.client_id).subscribe(
          //     (data: any) => {
          //      // ;
          //       this.clientName = data;
          //       this.filteredOptionsClient = this.form.controls.client.valueChanges
          //         .pipe(
          //           startWith(''),
          //           map(value => typeof value === 'string' ? value : value.name),
          //           map(name => name ? this._filterClient(name) : this.clientName)
          //         );
          //     }, (err) => { }
          //   )
          // }
          // onClientChange(id){
          //   this.getactivecposcw(id);
          // }

        }, {
          key: "getCpoRFidMappingCW",
          value: function getCpoRFidMappingCW() {
            var _this18 = this;

            this.rfidService.getCpoRFidMappingCW(this.localStorage.userId).subscribe(function (resp) {
              if (resp.status == true) {
                // this.cpoRfid = resp;
                _this18.allData = resp.data;

                for (var i = 0; i < _this18.allData.length; i++) {
                  if (_this18.allData[i].status == 'N') {
                    _this18.allData[i].statusString = 'Inactive';
                  } else {
                    _this18.allData[i].statusString = 'Active';
                  }
                }

                _this18.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this18.allData); //this.dataSource.data = this.getGroups(this.allData, this.groupByColumns);

                _this18.dataSource.paginator = _this18.paginator;
                _this18.dataSource.sort = _this18.sort;
              } else {
                // this.snackBar.open(MessageConstant.NoRecordFoundMessage, 'Dismiss', { duration: 3000 })
                return;
              }
            }, function (err) {});
          }
        }, {
          key: "getactivecposcw",
          value: function getactivecposcw(id) {
            var _this19 = this;

            this.cpoService.getactivecposcwwithAll(id).subscribe(function (data) {
              _this19.cposName = data;

              if (_this19.localStorage.role_code != "END") {
                if (_this19.cposName != null && _this19.cposName != undefined) {
                  var toSelect = _this19.cposName[0];
                  _this19.selectedCpo_id = toSelect.id;

                  _this19.form.get("CPO").setValue(toSelect);

                  if (_this19.localStorage.role_code == "CPO") {
                    _this19.form.get("CPO").disable();
                  }

                  _this19.getRfidbyCpoid(_this19.selectedCpo_id);
                }

                _this19.filteredOptionsCPO = _this19.form.controls.CPO.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(""), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (value) {
                  return typeof value === "string" ? value : value.name;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (name) {
                  return name ? _this19._filterCPO(name) : _this19.cposName;
                }));
              }
            }, function (err) {});
          }
        }, {
          key: "onCPOChange",
          value: function onCPOChange(id) {
            this.getRfidbyCpoid(id);
            this.dataSource.data = []; //this.getCpoRFidMappingCW();

            this.localCpoid = id;
          }
        }, {
          key: "getRfidbyCpoid",
          value: function getRfidbyCpoid(id) {
            var _this20 = this;

            this.rfidService.getRFidsByCpoId(id).subscribe(function (resp) {
              if (resp.status == true) {
                _this20.rfid = resp.data;
                _this20.allData = resp.data;

                for (var i = 0; i < _this20.allData.length; i++) {
                  if (_this20.allData[i].status == 'N') {
                    _this20.allData[i].statusString = 'Inactive';
                  } else {
                    _this20.allData[i].statusString = 'Active';
                  }
                }

                _this20.dataSource.data = _this20.getGroups(_this20.allData, _this20.groupByColumns); //this.dataSource = new MatTableDataSource(this.rfid);

                _this20.dataSource.paginator = _this20.paginator;
                _this20.dataSource.sort = _this20.sort; // this.dataSource._pageData = (data: any[]) => {
                //   const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
                //   // find start/end index with groups excluded
                //   const filter = data.filter(r => !r.isGroup).splice(startIndex, this.paginator.pageSize);
                //   const start = filter[0];
                //   const end = filter[filter.length - 1];
                //   // return all data between first and last item (including groups)
                //   return data.slice().splice(data.indexOf(start), data.indexOf(end));
                // }
              } else {//this.snackBar.open(MessageConstant.NoRecordFoundMessage, 'Dismiss', { duration: 3000 })
                }
            }, function (err) {//;
            });
          }
        }, {
          key: "displayCPO",
          value: function displayCPO(item) {
            return item && item.name ? item.name : '';
          }
        }, {
          key: "displayClient",
          value: function displayClient(item) {
            return item && item.name ? item.name : '';
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
          key: "_filterClient",
          value: function _filterClient(name) {
            var filterValue = name.toLowerCase();
            return this.clientName.filter(function (option) {
              return option.name.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "delete",
          value: function _delete(element) {
            var _this21 = this;

            this.confirmDialogRef = this.dialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["FuseConfirmDialogComponent"], {
              disableClose: true
            }); //this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

            this.confirmDialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                _this21.rfidService.unMapRFidCpoID(element.map_id, _this21.localStorage.userId).subscribe(function (data) {
                  _this21.getRfidbyCpoid(_this21.localCpoid);

                  _this21.getCpoRFidMappingCW(); //this.getClient();


                  _this21.snackBar.open('Deleted successfully', 'Dismiss', {
                    duration: 2000
                  });
                }, function (err) {});
              }

              _this21.confirmDialogRef = null;
            });
          }
        }, {
          key: "openDialog",
          value: function openDialog(action, data) {
            var _this22 = this;

            var params = {
              action: action,
              data: data,
              rfidData: this.rfid
            };
            var dialogRef = this.dialog.open(_action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ActionDialogComponent"], {
              width: '800px',
              data: params,
              panelClass: 'app-action-dialog',
              autoFocus: false,
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              _this22.getRfidbyCpoid(_this22.localCpoid); // this.moderate(result);
              // this.getClients();

            });
          }
        }, {
          key: "viewDialog",
          value: function viewDialog(action, data) {
            var _this23 = this;

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
              _this23.getRfidbyCpoid(_this23.localCpoid);
            });
          }
        }, {
          key: "groupHeaderClick",
          value: function groupHeaderClick(row) {
            if (row.expanded) {
              row.expanded = false;
              this.dataSource.data = this.getGroups(this.allData, this.groupByColumns);
            } else {
              row.expanded = true;
              this.expandedRfid = row;
              this.dataSource.data = this.addGroupsNew(this._allGroup, this.allData, this.groupByColumns, row);
            }
          }
        }, {
          key: "getGroups",
          value: function getGroups(data, groupByColumns) {
            var rootGroup = new Group();
            rootGroup.expanded = false;
            return this.getGroupList(data, 0, groupByColumns, rootGroup);
          }
        }, {
          key: "getGroupList",
          value: function getGroupList(data) {
            var _this24 = this;

            var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var groupByColumns = arguments.length > 2 ? arguments[2] : undefined;
            var parent = arguments.length > 3 ? arguments[3] : undefined;

            if (level >= groupByColumns.length) {
              return data;
            }

            var groups = this.uniqueBy(data.map(function (row) {
              var result = new Group();
              result.level = level + 1;

              for (var i = 0; i <= level; i++) {
                result[groupByColumns[i]] = row[groupByColumns[i]];
              }

              return result;
            }), JSON.stringify);
            var currentColumn = groupByColumns[level];
            var subGroups = [];
            groups.forEach(function (group) {
              var rowsInGroup = data.filter(function (row) {
                return group[currentColumn] === row[currentColumn];
              });
              group.totalCounts = rowsInGroup.length;
              _this24.expandedSubRfid = [];
            });
            groups = groups.sort(function (a, b) {
              var isAsc = 'asc';
              return _this24.compare(a.cpo_name, b.cpo_name, isAsc);
            });
            this._allGroup = groups;
            return groups;
          }
        }, {
          key: "addGroupsNew",
          value: function addGroupsNew(allGroup, data, groupByColumns, dataRow) {
            var rootGroup = new Group();
            rootGroup.expanded = true;
            return this.getSublevelNew(allGroup, data, 0, groupByColumns, rootGroup, dataRow);
          }
        }, {
          key: "getSublevelNew",
          value: function getSublevelNew(allGroup, data, level, groupByColumns, parent, dataRow) {
            var _this25 = this;

            if (level >= groupByColumns.length) {
              return data;
            }

            var currentColumn = groupByColumns[level];
            var subGroups = [];
            allGroup.forEach(function (group) {
              var rowsInGroup = data.filter(function (row) {
                return group[currentColumn] === row[currentColumn];
              });
              group.totalCounts = rowsInGroup.length;

              if (group.cpo_name == dataRow.cpo_name.toString()) {
                group.expanded = dataRow.expanded;

                var subGroup = _this25.getSublevelNew(allGroup, rowsInGroup, level + 1, groupByColumns, group, dataRow.cpo_name.toString());

                _this25.expandedSubRfid = subGroup;
                subGroup.unshift(group);
                subGroups = subGroups.concat(subGroup);
              } else {
                subGroups = subGroups.concat(group);
              }
            });
            return subGroups;
          }
        }, {
          key: "uniqueBy",
          value: function uniqueBy(a, key) {
            var seen = {};
            return a.filter(function (item) {
              var k = key(item);
              return seen.hasOwnProperty(k) ? false : seen[k] = true;
            });
          }
        }, {
          key: "isGroup",
          value: function isGroup(index, item) {
            return item.level;
          }
        }, {
          key: "onSortData",
          value: function onSortData(sort) {
            var _this26 = this;

            var data = this.allData;
            var index = data.findIndex(function (x) {
              return x['level'] == 1;
            });

            if (sort.active && sort.direction !== '') {
              if (index > -1) {
                data.splice(index, 1);
              }

              data = data.sort(function (a, b) {
                var isAsc = sort.direction === 'asc';

                switch (sort.active) {
                  case 'client_name':
                    return _this26.compare(a.client_name, b.client_name, isAsc);

                  case 'cpo_name':
                    return _this26.compare(a.cpo_name, b.cpo_name, isAsc);

                  case 'rfid_no':
                    return _this26.compare(a.rfid_no, b.rfid_no, isAsc);

                  case 'status':
                    return _this26.compare(a.status, b.status, isAsc);

                  case 'action':
                    return _this26.compare(a.action, b.action, isAsc);

                  default:
                    return 0;
                }
              });
            }

            this.dataSource.data = this.addGroupsNew(this._allGroup, data, this.groupByColumns, this.expandedRfid);
          }
        }, {
          key: "compare",
          value: function compare(a, b, isAsc) {
            return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
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

            if (visibleOption == 'cpoSearch') {
              this.cpoSearch = !this.cpoSearch;
              this.filterEntity.cpo_name = "";
            }

            if (visibleOption == 'rfidSearch') {
              this.rfidSearch = !this.rfidSearch;
              this.filterEntity.rfid_no = "";
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
                'Client Name ': chargerModel.client_name,
                'CPO Name': chargerModel.cpo_name,
                'RFID No': chargerModel.rf_id_no,
                'Status': chargerModel.statusString
              };
              this.exportedData.push(data);
            }

            var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_11__["utils"].json_to_sheet(this.exportedData);
            var workBook = xlsx__WEBPACK_IMPORTED_MODULE_11__["utils"].book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_11__["utils"].book_append_sheet(workBook, workSheet, 'CPO-Rfid List');
            xlsx__WEBPACK_IMPORTED_MODULE_11__["writeFile"](workBook, 'CPO-Rfid List.xlsx');
          }
        }, {
          key: "pdfExport",
          value: function pdfExport() {
            var _this27 = this;

            //this.preloader.open();
            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_12__["jsPDF"]({// set needed dimensions for any element
            });
            this.exportedData = [];

            for (var i = 0; i < this.dataSource.filteredData.length; i++) {
              var chrger = this.dataSource.filteredData[i]; //this.exportedData.push({name: `name${i}`, description: `description${i}`,
              //statusString: `statusString${i}`});

              var data = [chrger.client_name, chrger.cpo_name, chrger.rf_id_no, chrger.statusString];
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
                doc.text('CPO-Rfid List Report', doc.internal.pageSize.getWidth() / 2, 11, {
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
                doc.text('Generated By:' + _this27.localStorage.f_Name, 195, 18, {
                  align: 'right'
                });
                doc = _this27.addWaterMark(doc);
              }
            }); // below line for Open PDF document in new tab

            doc.output('dataurlnewwindow'); //this.preloader.close();
            // below line for Download PDF document  

            doc.save('CPO-Rfid List report.pdf');
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
        return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_14__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_17__["CpoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_18__["RfidService"]));
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
        decls: 53,
        vars: 17,
        consts: [["fxLayout", "row wrap", 1, "matero-row"], ["fxFlex", "100", 1, "matero-col"], [2, "text-align", "left", "margin-left", "16px", "margin-bottom", "10px", "margin-top", "10px"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Excel Download", 3, "click"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "PDF Download", 3, "click"], [1, "form-field-full", 3, "formGroup"], ["fxLayout", "row wrap", "fxLayoutGap", "8px grid"], ["appearance", "outline", "fxFlex", "50", 2, "height", "60px"], ["type", "text", "matInput", "", "formControlName", "CPO", 3, "matAutocomplete"], [3, "displayWith", "optionSelected"], ["auto2", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 2, "display", "flex"], ["matSuffix", "", 1, "secondary-text"], ["matSuffix", "", "matTooltip", "Please enter cpo name", 1, "secondary-text"], [4, "ngIf"], [1, ""], ["fxLayout", "row wrap", 1, "page-layout", "simple", "fullwidth", 2, "overflow", "scroll"], [1, "content", 2, "min-width", "auto"], ["mat-table", "", "matTableFilter", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "exampleEntity", "filterType"], ["matColumnDef", "client_name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "cpo_name"], ["matColumnDef", "rfid_no"], ["matColumnDef", "status"], ["mat-cell", "", 3, "color", 4, "matCellDef"], ["matColumnDef", "action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "groupHeader"], ["colspan", "999", 4, "matCellDef"], [3, "click", 4, "matRowDef", "matRowDefColumns", "matRowDefWhen"], [3, "pageSizeOptions"], [3, "value"], ["mat-header-cell", "", "mat-sort-header", ""], ["class", "custom_font_size", "style", "display: flex;", 4, "ngIf"], ["appearance", "outline", "style", "width: 70%;", "class", "list_input", 4, "ngIf"], [1, "custom_font_size", 2, "display", "flex"], ["matSuffix", "", 3, "click"], ["appearance", "outline", 1, "list_input", 2, "width", "70%"], ["matInput", "", "placeholder", " Client Name ", 3, "ngModel", "ngModelChange"], ["mat-cell", ""], ["matInput", "", "placeholder", " CPO Name ", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", " Rfid No.", 3, "ngModel", "ngModelChange"], ["appearance", "outline", "style", "width: 110px", "class", "list_input", 4, "ngIf"], ["appearance", "outline", 1, "list_input", 2, "width", "110px"], ["matInput", "", "placeholder", "Status", 3, "ngModel", "ngModelChange"], ["mat-header-cell", ""], [1, "custom_font_size"], ["color", "primary", "matTooltip", "View", 2, "cursor", "pointer", 3, "click"], ["color", "primary", "matTooltip", "Edit", 2, "cursor", "pointer", 3, "click"], ["color", "warn", "matTooltip", "Remove", 2, "cursor", "pointer", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["colspan", "999"], [3, "click"]],
        template: function ListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_button_click_3_listener() {
              return ctx.tableExport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "sim_card_download");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_button_click_7_listener() {
              return ctx.pdfExport();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function ListComponent_Template_mat_autocomplete_optionSelected_18_listener($event) {
              return ctx.onCPOChange($event.option.value.id);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ListComponent_mat_cell_43_Template, 2, 3, "mat-cell", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](44, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ListComponent_mat_header_cell_45_Template, 3, 0, "mat-header-cell", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ListComponent_mat_cell_46_Template, 9, 0, "mat-cell", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ListComponent_mat_header_row_47_Template, 1, 0, "mat-header-row", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ListComponent_mat_header_row_48_Template, 1, 0, "mat-header-row", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](49, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ListComponent_mat_cell_50_Template, 5, 4, "mat-cell", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ListComponent_mat_row_51_Template, 1, 0, "mat-row", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "mat-paginator", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayCPO);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 13, ctx.filteredOptionsCPO));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("CPO").invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("exampleEntity", ctx.filterEntity)("filterType", ctx.filterType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0))("matRowDefWhen", ctx.isGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1));
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], mat_table_filter__WEBPACK_IMPORTED_MODULE_7__["MatTableFilterDirective"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_27__["AsyncPipe"]],
        styles: ["mat-form-field.list_input div.mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\n.mat-header-cell .custom_font_size {\n  font-size: 15px !important;\n  text-align: left;\n}\n\nmat-form-field.list_input div.mat-form-field-infix {\n  padding: 0.5em 0 0.5em 0 !important;\n}\n\ntable {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0UsNEJBQUE7QUFaRjs7QUFjQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7QUFYRjs7QUFhQTtFQUNFLG1DQUFBO0FBVkY7O0FBYUE7RUFDSSxXQUFBO0FBVko7O0FBYUU7RUFDRSxZQUFBO0FBVkoiLCJmaWxlIjoibGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRhYmxlIHtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAubWF0LWZvcm0tZmllbGQge1xyXG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIHRkLCB0aCB7XHJcbi8vICAgICB3aWR0aDogMjUlO1xyXG4vLyAgIH1cclxuICBcclxubWF0LWZvcm0tZmllbGQubGlzdF9pbnB1dCAgZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XHJcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG4ubWF0LWhlYWRlci1jZWxsIC5jdXN0b21fZm9udF9zaXple1xyXG4gIGZvbnQtc2l6ZTogMTVweCAgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbm1hdC1mb3JtLWZpZWxkLmxpc3RfaW5wdXQgZGl2Lm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICBwYWRkaW5nOiAwLjVlbSAwIDAuNWVtIDAgIWltcG9ydGFudDtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIHRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAiXX0= */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_8__["fuseAnimations"]
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
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_8__["fuseAnimations"]
          }]
        }], function () {
          return [{
            type: app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_14__["ClientService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBar"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
          }, {
            type: app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_17__["CpoService"]
          }, {
            type: app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_18__["RfidService"]
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
    "VKI1":
    /*!*****************************************************************************!*\
      !*** ./src/app/main/asset/rfid-management/cpo-rfid/cpo-rfid-crud/routes.ts ***!
      \*****************************************************************************/

    /*! exports provided: TABS_DEMO_ROUTES */

    /***/
    function VKI1(module, __webpack_exports__, __webpack_require__) {
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
      "Enpa");
      /* harmony import */


      var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../list/list.component */
      "UBV7");
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
    "cDtw":
    /*!************************************************************************!*\
      !*** ./src/app/main/asset/rfid-management/cpo-rfid/cpo-rfid.module.ts ***!
      \************************************************************************/

    /*! exports provided: CpoRfidModule */

    /***/
    function cDtw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CpoRfidModule", function () {
        return CpoRfidModule;
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


      var _cpo_rfid_crud_cpo_rfid_crud_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cpo-rfid-crud/cpo-rfid-crud.component */
      "0Uwj");
      /* harmony import */


      var _create_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./create/create.component */
      "Enpa");
      /* harmony import */


      var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./list/list.component */
      "UBV7");
      /* harmony import */


      var _cpo_rfid_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cpo-rfid-routing.module */
      "giG/");
      /* harmony import */


      var _action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./action-dialog/action-dialog.component */
      "BsQd");
      /* harmony import */


      var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fuse/shared.module */
      "5HBU");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./view-dialog/view-dialog.component */
      "TYrW");

      var COMPONENTS = [_cpo_rfid_crud_cpo_rfid_crud_component__WEBPACK_IMPORTED_MODULE_2__["CpoRfidCrudComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_3__["CreateComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]];
      var COMPONENTS_DYNAMIC = [_action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ActionDialogComponent"], _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ViewDialogComponent"]];

      var CpoRfidModule = function CpoRfidModule() {
        _classCallCheck(this, CpoRfidModule);
      };

      CpoRfidModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CpoRfidModule
      });
      CpoRfidModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CpoRfidModule_Factory(t) {
          return new (t || CpoRfidModule)();
        },
        imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _cpo_rfid_routing_module__WEBPACK_IMPORTED_MODULE_5__["CpoRfidRoutingModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CpoRfidModule, {
          declarations: [_cpo_rfid_crud_cpo_rfid_crud_component__WEBPACK_IMPORTED_MODULE_2__["CpoRfidCrudComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_3__["CreateComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ActionDialogComponent"], _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ViewDialogComponent"]],
          imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _cpo_rfid_routing_module__WEBPACK_IMPORTED_MODULE_5__["CpoRfidRoutingModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CpoRfidModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _cpo_rfid_routing_module__WEBPACK_IMPORTED_MODULE_5__["CpoRfidRoutingModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"]],
            declarations: [COMPONENTS, COMPONENTS_DYNAMIC],
            entryComponents: [COMPONENTS_DYNAMIC]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "giG/":
    /*!********************************************************************************!*\
      !*** ./src/app/main/asset/rfid-management/cpo-rfid/cpo-rfid-routing.module.ts ***!
      \********************************************************************************/

    /*! exports provided: CpoRfidRoutingModule */

    /***/
    function giG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CpoRfidRoutingModule", function () {
        return CpoRfidRoutingModule;
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


      var _cpo_rfid_crud_cpo_rfid_crud_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cpo-rfid-crud/cpo-rfid-crud.component */
      "0Uwj");
      /* harmony import */


      var _cpo_rfid_crud_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cpo-rfid-crud/routes */
      "VKI1");
      /* harmony import */


      var app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/interceptors/auth-gaurd */
      "9gca");

      var routes = [{
        path: 'crud',
        component: _cpo_rfid_crud_cpo_rfid_crud_component__WEBPACK_IMPORTED_MODULE_2__["CpoRfidCrudComponent"],
        canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: _cpo_rfid_crud_routes__WEBPACK_IMPORTED_MODULE_3__["TABS_DEMO_ROUTES"]
      }];

      var CpoRfidRoutingModule = function CpoRfidRoutingModule() {
        _classCallCheck(this, CpoRfidRoutingModule);
      };

      CpoRfidRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CpoRfidRoutingModule
      });
      CpoRfidRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CpoRfidRoutingModule_Factory(t) {
          return new (t || CpoRfidRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CpoRfidRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CpoRfidRoutingModule, [{
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
//# sourceMappingURL=cpo-rfid-cpo-rfid-module-es5.js.map