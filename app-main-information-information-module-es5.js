(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-main-information-information-module"], {
    /***/
    "+rJ6":
    /*!********************************************************!*\
      !*** ./src/app/main/information/information.module.ts ***!
      \********************************************************/

    /*! exports provided: InformationModule */

    /***/
    function rJ6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InformationModule", function () {
        return InformationModule;
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


      var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./about-us/about-us.component */
      "n4lA");
      /* harmony import */


      var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./contact-us/contact-us.component */
      "Teuu");
      /* harmony import */


      var _refund_and_cancellationPolicy_refund_and_cancellationPolicy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./refund-and-cancellationPolicy/refund-and-cancellationPolicy.component */
      "LWT1");
      /* harmony import */


      var _product_and_services_product_and_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./product-and-services/product-and-services.component */
      "vyGZ");
      /* harmony import */


      var _privacy_and_policy_privacy_and_policy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./privacy-and-policy/privacy-and-policy.component */
      "ymRM");
      /* harmony import */


      var _information_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./information-routing.module */
      "BEN9");
      /* harmony import */


      var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @fuse/shared.module */
      "5HBU");

      var COMPONENTS = [_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__["AboutUsComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"], _refund_and_cancellationPolicy_refund_and_cancellationPolicy_component__WEBPACK_IMPORTED_MODULE_4__["RefundAndCancellationPolicy"], _product_and_services_product_and_services_component__WEBPACK_IMPORTED_MODULE_5__["ProductAndServicesComponent"], _privacy_and_policy_privacy_and_policy_component__WEBPACK_IMPORTED_MODULE_6__["PrivacyAndPolicyComponent"]]; //const COMPONENTS_DYNAMIC =[ActionDialogComponent,ViewDialogComponent];

      var InformationModule = function InformationModule() {
        _classCallCheck(this, InformationModule);
      };

      InformationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: InformationModule
      });
      InformationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function InformationModule_Factory(t) {
          return new (t || InformationModule)();
        },
        imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _information_routing_module__WEBPACK_IMPORTED_MODULE_7__["InformationRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_8__["FuseSharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InformationModule, {
          declarations: [_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__["AboutUsComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"], _refund_and_cancellationPolicy_refund_and_cancellationPolicy_component__WEBPACK_IMPORTED_MODULE_4__["RefundAndCancellationPolicy"], _product_and_services_product_and_services_component__WEBPACK_IMPORTED_MODULE_5__["ProductAndServicesComponent"], _privacy_and_policy_privacy_and_policy_component__WEBPACK_IMPORTED_MODULE_6__["PrivacyAndPolicyComponent"]],
          imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _information_routing_module__WEBPACK_IMPORTED_MODULE_7__["InformationRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_8__["FuseSharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InformationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _information_routing_module__WEBPACK_IMPORTED_MODULE_7__["InformationRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_8__["FuseSharedModule"]],
            declarations: [COMPONENTS]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "BEN9":
    /*!****************************************************************!*\
      !*** ./src/app/main/information/information-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: InformationRoutingModule */

    /***/
    function BEN9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InformationRoutingModule", function () {
        return InformationRoutingModule;
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


      var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./about-us/about-us.component */
      "n4lA");
      /* harmony import */


      var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./contact-us/contact-us.component */
      "Teuu");
      /* harmony import */


      var _refund_and_cancellationPolicy_refund_and_cancellationPolicy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./refund-and-cancellationPolicy/refund-and-cancellationPolicy.component */
      "LWT1");
      /* harmony import */


      var _product_and_services_product_and_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./product-and-services/product-and-services.component */
      "vyGZ");
      /* harmony import */


      var _privacy_and_policy_privacy_and_policy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./privacy-and-policy/privacy-and-policy.component */
      "ymRM");

      var routes = [{
        path: 'aboutUs',
        component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__["AboutUsComponent"]
      }, {
        path: 'contactUs',
        component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"]
      }, {
        path: 'privacyAndPolicy',
        component: _privacy_and_policy_privacy_and_policy_component__WEBPACK_IMPORTED_MODULE_6__["PrivacyAndPolicyComponent"]
      }, {
        path: 'refundAndCellationPolicy',
        component: _refund_and_cancellationPolicy_refund_and_cancellationPolicy_component__WEBPACK_IMPORTED_MODULE_4__["RefundAndCancellationPolicy"]
      }, {
        path: 'productAndServices',
        component: _product_and_services_product_and_services_component__WEBPACK_IMPORTED_MODULE_5__["ProductAndServicesComponent"]
      }];

      var InformationRoutingModule = function InformationRoutingModule() {
        _classCallCheck(this, InformationRoutingModule);
      };

      InformationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: InformationRoutingModule
      });
      InformationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function InformationRoutingModule_Factory(t) {
          return new (t || InformationRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InformationRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InformationRoutingModule, [{
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
    "LWT1":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/main/information/refund-and-cancellationPolicy/refund-and-cancellationPolicy.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: RefundAndCancellationPolicy */

    /***/
    function LWT1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RefundAndCancellationPolicy", function () {
        return RefundAndCancellationPolicy;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/master/master.service */
      "auZQ");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive */
      "EwFO");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

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

      var RefundAndCancellationPolicy = /*#__PURE__*/function () {
        function RefundAndCancellationPolicy(fb, masterService, snackBar, router) {
          _classCallCheck(this, RefundAndCancellationPolicy);

          this.fb = fb;
          this.masterService = masterService;
          this.snackBar = snackBar;
          this.router = router;
        }

        _createClass(RefundAndCancellationPolicy, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialize();
          }
        }, {
          key: "initialize",
          value: function initialize() {}
        }]);

        return RefundAndCancellationPolicy;
      }();

      RefundAndCancellationPolicy.ɵfac = function RefundAndCancellationPolicy_Factory(t) {
        return new (t || RefundAndCancellationPolicy)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      RefundAndCancellationPolicy.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RefundAndCancellationPolicy,
        selectors: [["app-refund-and-cancellationPolicy"]],
        decls: 19,
        vars: 4,
        consts: [[2, "display", "block", "width", "100%"], ["id", "", "fxLayout", "row", 1, "page-layout", "simple", "right-sidebar"], ["fusePerfectScrollbar", "", 1, "center"], ["fxLayout", "column", "fxLayoutAlign", "space-between", 1, "header", "accent", "p-16", "pb-0"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [1, "mat-display-1", "my-0", "my-sm-24", "welcome-message"], [2, "min-height", "700px"]],
        template: function RefundAndCancellationPolicy_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Refund & Cancellation Policy (Developing Policies and Procedures Documentation)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " The service being provided by Spark EV or Its business partners, OEMs or Service Partners, is for charging of EVs at the charging stations owned and/or operated by various CPO\u2019s. The cost of charging a vehicle can be paid in advance or after the charging facility has been availed which would be based on business rules and policies by service partners or CPOs. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "To accelerate transition to sustainable energy by playing in integrated energy chain with our products & solutions and help businesses to reduce carbon footprint, power urban transport, and integrate renewable energy with grid.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "In case the cost has been prepaid before availing the charging facility, any balance amount due after the charging has happened will be refunded to original mode of payment. Any excess charging over and above the prepaid amount will have to be paid by the consumer after the charging.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Once the consumer\u2019s electric vehicle has been charged,Spark EV reserves the right to charge the cost of charging from the consumer.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Customer can cancel the booking any time after the booking has been done till prespecified minutes of starting time slot. In case of no show tillprespecified minutes after the starting time the booking would be cancelled by default. Customer would be charged the booking and or convenience fee which was shown at the time of booking in case of no show or cancellation of booking.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0)));
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_7__["FusePerfectScrollbarDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWZ1bmQtYW5kLWNhbmNlbGxhdGlvblBvbGljeS5jb21wb25lbnQuc2NzcyJ9 */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefundAndCancellationPolicy, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-refund-and-cancellationPolicy',
            templateUrl: './refund-and-cancellationPolicy.component.html',
            styleUrls: ['./refund-and-cancellationPolicy.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Teuu":
    /*!*********************************************************************!*\
      !*** ./src/app/main/information/contact-us/contact-us.component.ts ***!
      \*********************************************************************/

    /*! exports provided: ContactUsComponent */

    /***/
    function Teuu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function () {
        return ContactUsComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/master/master.service */
      "auZQ");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive */
      "EwFO");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

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

      var ContactUsComponent = /*#__PURE__*/function () {
        function ContactUsComponent(fb, masterService, snackBar, router) {
          _classCallCheck(this, ContactUsComponent);

          this.fb = fb;
          this.masterService = masterService;
          this.snackBar = snackBar;
          this.router = router;
        }

        _createClass(ContactUsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialize();
          }
        }, {
          key: "initialize",
          value: function initialize() {}
        }]);

        return ContactUsComponent;
      }();

      ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) {
        return new (t || ContactUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      ContactUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactUsComponent,
        selectors: [["app-contact-us"]],
        decls: 27,
        vars: 4,
        consts: [[2, "display", "block", "width", "100%"], ["id", "", "fxLayout", "row", 1, "page-layout", "simple", "right-sidebar"], ["fusePerfectScrollbar", "", 1, "center"], ["fxLayout", "column", "fxLayoutAlign", "space-between", 1, "header", "accent", "px-24", "pt-16", "pb-0"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [1, "mat-display-1", "my-0", "my-sm-24", "welcome-message"], [2, "height", "700px"], [2, "font-size", "20px"], ["href", "https://www.Spark-EV-ps.com/contact-us.html"]],
        template: function ContactUsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact Us ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "For any queries, you can reach us at");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Spark EV Tele-Systems Limited");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Plot No 38, Institutional Area, Sector 32");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Gurgaon 122001, Haryana, India.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Email: contactus@SparkEV.in");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Web: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "https://www.Spark-EV-ps.com/contact-us.html");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0)));
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_7__["FusePerfectScrollbarDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIn0= */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactUsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-contact-us',
            templateUrl: './contact-us.component.html',
            styleUrls: ['./contact-us.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "n4lA":
    /*!*****************************************************************!*\
      !*** ./src/app/main/information/about-us/about-us.component.ts ***!
      \*****************************************************************/

    /*! exports provided: AboutUsComponent */

    /***/
    function n4lA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () {
        return AboutUsComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/master/master.service */
      "auZQ");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive */
      "EwFO");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

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

      var AboutUsComponent = /*#__PURE__*/function () {
        function AboutUsComponent(fb, masterService, snackBar, router) {
          _classCallCheck(this, AboutUsComponent);

          this.fb = fb;
          this.masterService = masterService;
          this.snackBar = snackBar;
          this.router = router;
        }

        _createClass(AboutUsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialize();
          }
        }, {
          key: "initialize",
          value: function initialize() {}
        }]);

        return AboutUsComponent;
      }();

      AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) {
        return new (t || AboutUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutUsComponent,
        selectors: [["app-about-us"]],
        decls: 24,
        vars: 4,
        consts: [[2, "display", "block", "width", "100%"], ["id", "", "fxLayout", "row", 1, "page-layout", "simple", "right-sidebar"], ["fusePerfectScrollbar", "", 1, "center"], ["fxLayout", "column", "fxLayoutAlign", "space-between", 1, "header", "accent", "p-16", "pb-0"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [1, "mat-display-1", "my-0", "my-sm-24", "welcome-message"], [2, "min-height", "700px"], [2, "font-weight", "bold"], [2, "font-size", "1.17em"]],
        template: function AboutUsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About Us ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Who we are");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Founded in 1994, Spark EV Tele-Systems is a company which operates in 3 keybusiness areas around vertical markets of telecom, storage and green mobility. We are a verticallyintegrated company with over 20 years of experience in designing, engineering and manufacturingproducts and solutions for needs of today and future. Our goal to accelerate the electrification of vehicles in India by providing EV charging infrastructure and Li-ion batteries for all types of vehicles with technology that is global, cost which is affordable quality that is world class. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Vision");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "To accelerate transition to sustainable energy by playing in integrated energy chain with our products & solutions and help businesses to reduce carbon footprint, power urban transport, and integrate renewable energy with grid.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Mission");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "To provide best-engineered products & solutions for our markets that are globally complaint,technology forward and intelligent for needs of today & tomorrow in a way that creates value for our customers, vendors, employees and shareholders.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0)));
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_7__["FusePerfectScrollbarDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC11cy5jb21wb25lbnQuc2NzcyJ9 */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-about-us',
            templateUrl: './about-us.component.html',
            styleUrls: ['./about-us.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vyGZ":
    /*!*****************************************************************************************!*\
      !*** ./src/app/main/information/product-and-services/product-and-services.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: ProductAndServicesComponent */

    /***/
    function vyGZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductAndServicesComponent", function () {
        return ProductAndServicesComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/master/master.service */
      "auZQ");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive */
      "EwFO");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

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

      var ProductAndServicesComponent = /*#__PURE__*/function () {
        function ProductAndServicesComponent(fb, masterService, snackBar, router) {
          _classCallCheck(this, ProductAndServicesComponent);

          this.fb = fb;
          this.masterService = masterService;
          this.snackBar = snackBar;
          this.router = router;
        }

        _createClass(ProductAndServicesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialize();
          }
        }, {
          key: "initialize",
          value: function initialize() {}
        }]);

        return ProductAndServicesComponent;
      }();

      ProductAndServicesComponent.ɵfac = function ProductAndServicesComponent_Factory(t) {
        return new (t || ProductAndServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      ProductAndServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductAndServicesComponent,
        selectors: [["app-product-and-services"]],
        decls: 13,
        vars: 4,
        consts: [[2, "display", "block", "width", "100%"], ["id", "", "fxLayout", "row", 1, "page-layout", "simple", "right-sidebar"], ["fusePerfectScrollbar", "", 1, "center"], ["fxLayout", "column", "fxLayoutAlign", "space-between", 1, "header", "accent", "p-16", "pb-0"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [1, "mat-display-1", "my-0", "my-sm-24", "welcome-message"], [2, "min-height", "700px"]],
        template: function ProductAndServicesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Products And Services ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Spark EV offers the Service to a user for getting his/her Electric Vehicle charged at various charging station subject to the agreement with the Terms & Conditions of the Service. The user can get his/her vehicle charged at any charging stations listed with Spark EV. The users can book and pay for the service using the payment gateway in the mobile app available to the users. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "The details of past transactions for the charging can be viewed (upto 1 year) in the application and as per commercial agreement with your service provider or business entities that they have got done under the services provided by Spark EV. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0)));
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_7__["FusePerfectScrollbarDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWFuZC1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductAndServicesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product-and-services',
            templateUrl: './product-and-services.component.html',
            styleUrls: ['./product-and-services.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ymRM":
    /*!*************************************************************************************!*\
      !*** ./src/app/main/information/privacy-and-policy/privacy-and-policy.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: PrivacyAndPolicyComponent */

    /***/
    function ymRM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyAndPolicyComponent", function () {
        return PrivacyAndPolicyComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/master/master.service */
      "auZQ");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive */
      "EwFO");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

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

      var PrivacyAndPolicyComponent = /*#__PURE__*/function () {
        function PrivacyAndPolicyComponent(fb, masterService, snackBar, router) {
          _classCallCheck(this, PrivacyAndPolicyComponent);

          this.fb = fb;
          this.masterService = masterService;
          this.snackBar = snackBar;
          this.router = router;
        }

        _createClass(PrivacyAndPolicyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialize();
          }
        }, {
          key: "initialize",
          value: function initialize() {}
        }]);

        return PrivacyAndPolicyComponent;
      }();

      PrivacyAndPolicyComponent.ɵfac = function PrivacyAndPolicyComponent_Factory(t) {
        return new (t || PrivacyAndPolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      PrivacyAndPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PrivacyAndPolicyComponent,
        selectors: [["app-privacy-and-policy"]],
        decls: 143,
        vars: 4,
        consts: [[2, "display", "block", "width", "100%"], ["id", "", "fxLayout", "row", 1, "page-layout", "simple", "right-sidebar"], ["fusePerfectScrollbar", "", 1, "center"], ["fxLayout", "column", "fxLayoutAlign", "space-between", 1, "header", "accent", "p-16", "pb-0"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [1, "mat-display-1", "my-0", "my-sm-24", "welcome-message"], [2, "min-height", "700px"], ["id", "note"], [2, "font-style", "italic"]],
        template: function PrivacyAndPolicyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Privacy Policy (Developing Policies and Procedures Documentation) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " privacy policy (Privacy Policy) is subject to change at any time without notice. To make sure you are aware of any changes, please view this Privacy Policy periodically.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " This Policy will explain how we collect and use information that personally identifies you (\"personal information\") as well as non-personal information about your interaction with the application. Protecting your privacy and ensuring that your personal information is held securely is very important to Spark EV. We want you to be confident that we are looking after your interests and that is why we have set out our information practices in this Privacy Policy. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "This Privacy Policy describes our practices in connection with information privacy on personal data we process through your individual/corporate use of the Chargex Application that shall enable you to start and stop charging, manage your business, chargers, status and various diagnostics along with user management.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "In this Privacy Policy, \u201CPersonal information\u201D means information that can be used to identify an individual, either from that information alone, or from that information and other information we have access to about that individual. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "By visiting this portal or App, you agree to be bound by the terms and conditions of this Privacy Policy. If you do not agree, please do not use or access our portal or mobile APP. By mere use of the portal or APP, you expressly consent to our use and disclosure of your personal information in accordance with this Privacy Policy. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "This Privacy Policy is subject to our Terms of Use.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Collection of User Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Application usage in regards of App and web both, application collect and store your personal information and other information (except payment mode related details) which iprovided by you from time to time. Our primary goal in doing so is to provide you a safe, efficient, smooth and customized experience. This allows us to provide services and features that most likely meet your needs, and to customize our portal to make your experience safer and easier. More importantly, while doing so we collect personal information from you that we consider necessary for achieving this purpose.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Being on an application user and/or using application services via any medium or modes, necessary to provide your personal information including but not limited to your name, contact details, vehicle details etc. Once you give us your personal information, you are not anonymous to us. Where possible, we indicate which fields are required and which fields are optional. You have the option not to provide information by choosing not to use the application via any mode such as web and App. We may automatically track certain information about you based upon your behaviour on our applications. We might use this information to do internal research on our users' demographics, interests and behaviour to better understand, protect and serve our users. This information shall use to compiled and analysed on an aggregated basis. Your personal information may also be analyse to provide you customized information, or information with a customized approach on our application. This information may include user redirection information, whether user is been directly landed on our application or redirected from any third party application along with the IP address.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Use data collection devices such as \"cookies\" on the application to help analyse our application workflow, measure promotional effectiveness, and promote trust and safety.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "We collect personally identifiable information (email address, name, phone number etc.) from you when you set up an account with us. While you may be able to browse some sections of our portal without being a registered member, access to certain activities/features do require registration. We reserve the right to use your contact information to send you offers based on your previous orders and your interests.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Use of Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Use of personal information is only to provide best and personal care services on request or call. To the extent we use your personal information to market to you, we will provide you the ability to opt-out of such uses, which can done by removing application login access and remove the credentials for security purpose.We may use your personal information to resolve disputes; troubleshoot problems; help promote a safe service; collect money; measure consumer interest in our services, inform you about online and offline offers, products, services, and updates; customize your experience; detect and protect us against error, fraud and other criminal activity; enforce our terms and conditions; and as otherwise described to you at the time of collection.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "In our efforts to continuous improvements of our service offerings, we collect and analyse demographic and profile data about our users' activity on our application. Identification and use your IP address to help diagnose problems with our server, and to administer our portal/app. Your IP address and location, is also used to help identify you and to gather broad demographic information.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "We may occasionally ask you to complete optional online surveys. These surveys may ask you for contact information and demographic information (like pin code, age, or income level). We use this data to tailor your experience at our portal, providing you with content that we think you might be interested in and to display content according to your preferences.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Information You Voluntarily Provide Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "When you register an account with us, we may collect your contact details, such as your email address, phone number, profile access and account linking in case of smart device features (Alexa, Google Home, etc). During your interaction with our Products, we may further collect your nickname, profile picture, country code, language preference or time zone information into your account.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "When using feedback and suggestion features in our Products, we will collect your email address, mobile phone number and your feedback content to address your problems and solve device failures on a timely basis.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Information We Collect Automatically");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Device Information: When you interact with our Product, we automatically collect device information, such as the Charger serial number, IP address, URL associated, IP address, wireless connection information, operating system type and version, application version number, push notification identifier, log files, and mobile network information.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Usage Data: During your interaction with our Sites and Services, we automatically collect usage data relating to visits, clicks, downloads, messages sent/received, and other usage of our Sites and Services. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Location Information: We may collect information about your real-time precise or non-precise geo-location when you use our specific Products or Services, such as robot cleaner and weather service.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Purposes and legal basis for processing Personal Data");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "The purpose for which we may process information about you are as follows:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Provide You Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Improve Our Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "To provide marketing and promotional materials to you on our Products and Services. If we do so, each communication we send you will contain instructions permitting you to opt-out of receiving future communications of that nature. The legal basis for this processing is your consent. Additionally, if you consent to participate in our lottery, contest or other promotions, we may use your personal data to manage such activities.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Your Rights Relating to Your Personal Data");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "We respect your rights and control over your personal data. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "You may:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Request access to the personal data that we process about you;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Request that we correct inaccurate or incomplete personal information about you;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Request deletion of personal data about you;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Request restrictions, temporarily or permanently, on our processing of some or all personal data about you");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Request transfer of personal information to you or a third party where we process the data based on your consent or a contract with you, and where our processing is automated; and");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Opt-out or object to our use of personal data about you where our use is based on your consent or our legitimate interests.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Information Sharing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "We may share personal information with our other corporate entities and affiliates to help detect and prevent identity theft, fraud and other potentially illegal acts; correlate related or multiple accounts to prevent abuse of our services. Those entities and affiliates may not market to you as a result of such sharing unless you explicitly opt-in.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "We may disclose personal information if required to do so by the Indian laws or in the good faith belief that such disclosure is reasonably necessary to respond to subpoenas, court orders, or other legal process. We may disclose personal information to law enforcement offices, third party rights owners, or others in the good faith belief that such disclosure is reasonably necessary to enforce our Terms of Use or Privacy Policy; respond to claims that an advertisement, posting or other content violates the rights of a third party; or protect the rights, property or personal safety of our users or the general public.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Third Party Application Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Application is being integrated with various payment mode and corresponding gateways. Application linked to payment gateways, (Which may collect personally identifiable information about you). Our applicationwould not be responsible for the privacy practices or the content of those linked portals. Whatever data is transmitted to those other portals like Credit Card/Debit Card information, BHIM information, UPI information etc. that you as a user provide to these other payment portals are protected under the data prevention policies of those portals itself and do not come under the purview of our data protection policy. On request we provide access to the data prevention policies of the linked portals to our users.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Information Security Safeguards");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "We use commercially reasonable physical, administrative, and technical safeguards to preserve the integrity and security of your personal information. If you have reason to believe that your interaction with us is no longer secure (for example, if you feel that the security of any account you might have with us has been compromised), you must immediately notify us of the problem by emailing us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Choice \u2013 Opt/Out");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "User is liable and self-driven to use our services and application also facilitates all users with the opportunity to opt-out of receiving non-essential (promotional, marketing-related) communications from us (if at all you receive such communications in the future), after setting up an account.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Promotions/Advertisements");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "We may use third-party advertising companies to serve ads when you visit our application. These promotions/ads may use information (not including your name, address, email address, or telephone number) about your visits to this and other portals/APP in order to provide advertisements about goods and services of interest to you. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Your Service Buy Consent/Agreement");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "By using application services via any mode App or web, and/ or by providing your information, you consent to the collection and use of the information you disclose on the portal and/or software application in accordance with this Privacy Policy, including but not limited to your consent for sharing your information as per this Privacy Policy. If we decide to change our Privacy Policy, we will post those changes on this page so that you are always aware of what information we collect, how we use it, and under what circumstances we disclose it. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Legal application and jurisdiction");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "This policy is formulated in accordance with the laws of the Republic of India and shall be governed by the laws of the Republic of India.If you have any questions about our practices or this Privacy Policy, please contact us as follows:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Spark EV Tele-Systems Limited ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " Plot No 38, Institutional Area, Sector 32 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Gurgaon 122001, Haryana, India ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " Email: contactus@Spark EV.in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "QUESTIONS?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Please contact us at contactus@Spark EV.in regarding any questions regarding this Privacy Policy.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0)));
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_7__["FusePerfectScrollbarDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"]],
        styles: ["li {\n  padding-bottom: 8px;\n}\n\n#note {\n  font-size: 13px !important;\n}\n\nh2 {\n  font-size: 1.5em;\n}\n\nh3 {\n  font-size: 1.17em;\n}\n\ni {\n  font-style: italic;\n}\n\nh5 {\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJpdmFjeS1hbmQtcG9saWN5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjs7QUFDQTtFQUNJLDBCQUFBO0FBRUo7O0FBQUE7RUFDSSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksaUJBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0FBS0o7O0FBSEE7RUFDSSxtQkFBQTtBQU1KIiwiZmlsZSI6InByaXZhY3ktYW5kLXBvbGljeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxpe1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxufVxyXG4jbm90ZSB7XHJcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxufVxyXG5oMntcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjE3ZW07XHJcbn1cclxuaSB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuaDV7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG5cclxuIl19 */"],
        encapsulation: 2,
        data: {
          animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyAndPolicyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-privacy-and-policy',
            templateUrl: './privacy-and-policy.component.html',
            styleUrls: ['./privacy-and-policy.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=app-main-information-information-module-es5.js.map