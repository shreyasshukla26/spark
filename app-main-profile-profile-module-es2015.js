(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-main-profile-profile-module"],{

/***/ "4Kt6":
/*!********************************************************!*\
  !*** ./src/app/main/profile/profile-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_layout_profile_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-layout/profile-layout.component */ "VyIv");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overview/overview.component */ "CTFb");






const routes = [
    {
        path: '',
        component: _profile_layout_profile_layout_component__WEBPACK_IMPORTED_MODULE_2__["ProfileLayoutComponent"],
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            {
                path: 'overview',
                component: _overview_overview_component__WEBPACK_IMPORTED_MODULE_3__["ProfileOverviewComponent"],
                data: { title: 'Profile Overview' },
            }
            //   {
            //     path: 'settings',
            //     component: ProfileSettingsComponent,
            //     data: { title: 'Profile Settings' },
            //   },
        ],
    },
];
class ProfileRoutingModule {
}
ProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileRoutingModule });
ProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileRoutingModule_Factory(t) { return new (t || ProfileRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "CTFb":
/*!*************************************************************!*\
  !*** ./src/app/main/profile/overview/overview.component.ts ***!
  \*************************************************************/
/*! exports provided: ProfileOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileOverviewComponent", function() { return ProfileOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var app_shared_services_account_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/account/account.service */ "K86D");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ProfileOverviewComponent_mat_tab_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Vehicle Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileOverviewComponent_mat_tab_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Assigned CPO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProfileOverviewComponent {
    constructor(snackBar, accountService, router) {
        this.snackBar = snackBar;
        this.accountService = accountService;
        this.router = router;
        this.selectedIndex = 0;
        this.endUserTab = false;
        this.cmsUserTab = false;
    }
    ngOnInit() {
        this.initialize();
        this.getUserInfo();
    }
    initialize() {
        this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
    }
    getUserInfo() {
        this.accountService.getUserInfo(this.localStorage.userId).subscribe((data) => {
            this.userInfo = data;
            this.userObj = data;
            if (this.userObj[0].user_type == "END") {
                this.endUserTab = true;
                this.cmsUserTab = false;
            }
            else {
                this.endUserTab = false;
                this.cmsUserTab = true;
            }
        }, (err) => { });
    }
}
ProfileOverviewComponent.ɵfac = function ProfileOverviewComponent_Factory(t) { return new (t || ProfileOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_account_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ProfileOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileOverviewComponent, selectors: [["app-profile-overview"]], decls: 12, vars: 2, consts: [[1, "m--16"], ["label", "Profile"], [1, "m-16"], ["label", "Vehicle Details", 4, "ngIf"], ["label", "Assigned CPO", 4, "ngIf"], ["label", "Selected Product"], ["label", "Vehicle Details"], ["label", "Assigned CPO"]], template: function ProfileOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileOverviewComponent_mat_tab_6_Template, 4, 0, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileOverviewComponent_mat_tab_7_Template, 4, 0, "mat-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Selected Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.endUserTab);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cmsUserTab);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-overview',
                templateUrl: './overview.component.html',
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }, { type: app_shared_services_account_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "KX/I":
/*!************************************************!*\
  !*** ./src/app/main/profile/profile.module.ts ***!
  \************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ "PCNd");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-routing.module */ "4Kt6");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password/change-password.component */ "i0nJ");
/* harmony import */ var _profile_layout_profile_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-layout/profile-layout.component */ "VyIv");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overview/overview.component */ "CTFb");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/settings.component */ "aE4m");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/shared.module */ "5HBU");









const COMPONENTS = [_profile_layout_profile_layout_component__WEBPACK_IMPORTED_MODULE_4__["ProfileLayoutComponent"], _overview_overview_component__WEBPACK_IMPORTED_MODULE_5__["ProfileOverviewComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["ProfileSettingsComponent"]];
const COMPONENTS_DYNAMIC = [_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordComponent"]];
class ProfileModule {
}
ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileModule });
ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileModule_Factory(t) { return new (t || ProfileModule)(); }, imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileModule, { declarations: [_profile_layout_profile_layout_component__WEBPACK_IMPORTED_MODULE_4__["ProfileLayoutComponent"], _overview_overview_component__WEBPACK_IMPORTED_MODULE_5__["ProfileOverviewComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["ProfileSettingsComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordComponent"]], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"]],
                declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
                entryComponents: COMPONENTS_DYNAMIC,
            }]
    }], null, null); })();


/***/ }),

/***/ "VyIv":
/*!*************************************************************************!*\
  !*** ./src/app/main/profile/profile-layout/profile-layout.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProfileLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileLayoutComponent", function() { return ProfileLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../change-password/change-password.component */ "i0nJ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/animations */ "PVWW");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var app_shared_services_account_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/account/account.service */ "K86D");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/countries.service */ "XtJy");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive */ "EwFO");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

























function ProfileLayoutComponent_mat_error_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter first name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileLayoutComponent_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter middle name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileLayoutComponent_mat_error_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter last name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileLayoutComponent_mat_error_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter date of birth ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileLayoutComponent_mat_error_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileLayoutComponent_mat_error_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter employee code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileLayoutComponent_mat_error_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter user name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileLayoutComponent_mat_error_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter mobile number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileLayoutComponent_mat_error_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter alternative mobile number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileLayoutComponent_mat_error_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter pan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileLayoutComponent_mat_error_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter aadhar number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileLayoutComponent_mat_error_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter address line ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileLayoutComponent_mat_error_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter address line ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileLayoutComponent_mat_error_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter pin code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileLayoutComponent_mat_option_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r27.name, " ");
} }
function ProfileLayoutComponent_mat_error_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select city ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileLayoutComponent_mat_option_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r28.name, " ");
} }
function ProfileLayoutComponent_mat_error_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select state ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileLayoutComponent_mat_option_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r29.name, " ");
} }
function ProfileLayoutComponent_mat_error_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileLayoutComponent_mat_error_150_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter landmark ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileLayoutComponent_mat_tab_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Vehicle Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileLayoutComponent_mat_tab_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Assigned CPO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { x: "50px" }; };
const _c1 = function (a1) { return { value: "*", params: a1 }; };
function autocompleteObjectValidator() {
    return (control) => {
        if (typeof control.value === 'string') {
            return { 'invalidAutocompleteObject': { value: control.value } };
        }
        return null; /* valid option selected */
    };
}
class ProfileLayoutComponent {
    constructor(fb, dialog, accountService, snackBar, cdr, countryService) {
        this.fb = fb;
        this.dialog = dialog;
        this.accountService = accountService;
        this.snackBar = snackBar;
        this.cdr = cdr;
        this.countryService = countryService;
        this.selectedIndex = 0;
        this.endUserTab = false;
        this.cmsUserTab = false;
        this.reactiveForm = this.fb.group({
            f_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            m_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            l_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            aadhar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            address1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            address2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            alt_mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            employee_code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            landmark: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    ngOnInit() {
        this.initialize();
        this.getUserInfo();
    }
    initialize() {
        this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
        //this.getCountry();
    }
    getUserInfo() {
        this.accountService.getUserInfo(this.localStorage.userId).subscribe((data) => {
            this.userInfo = data;
            this.userObj = data[0];
            this.getAllCountry();
            this.getAllState(this.userObj.country_id);
            this.getAllCity(this.userObj.state_id);
            this.assignValues(this.userObj);
            if (this.userObj.user_type == "END") {
                this.endUserTab = true;
                this.cmsUserTab = false;
            }
            else {
                this.endUserTab = false;
                this.cmsUserTab = true;
            }
        }, (err) => { });
    }
    assignValues(userObj) {
        this.reactiveForm.get('f_name').setValue(userObj.f_Name);
        this.reactiveForm.get('m_name').setValue(userObj.m_name);
        this.reactiveForm.get('l_name').setValue(userObj.l_Name);
        this.reactiveForm.get('dob').setValue(userObj.dob);
        this.reactiveForm.get('email').setValue(userObj.email);
        this.reactiveForm.get('employee_code').setValue(userObj.employee_code);
        this.reactiveForm.get('username').setValue(userObj.username);
        this.reactiveForm.get('mobile').setValue(userObj.mobile);
        this.reactiveForm.get('alt_mobile').setValue(userObj.alt_mobile);
        this.reactiveForm.get('pan').setValue(userObj.PAN);
        this.reactiveForm.get('aadhar').setValue(userObj.aadhar);
        //this.reactiveForm.get('city').setValue(userObj.city_id);
        //this.reactiveForm.get('state').setValue(userObj.state_id);
        //this.reactiveForm.get('country').setValue(userObj.country_id);
        this.reactiveForm.get('landmark').setValue(userObj.landmark);
        this.reactiveForm.get('pin').setValue(userObj.PIN);
    }
    openDialog() {
        // let params = {
        //  action : action,
        //   data : data
        //}
        const dialogRef = this.dialog.open(_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__["ChangePasswordComponent"], {
            width: '1200px',
        });
        dialogRef.afterClosed().subscribe(result => {
            // this.moderate(result);
            // this.getPlantChargers();
            this.cdr.detectChanges();
        });
    }
    getErrorMessage(form) {
        return form.get('email').hasError('required')
            ? 'You must enter a value'
            : form.get('email').hasError('email')
                ? 'Not a valid email'
                : '';
    }
    getStateCountry() {
        this.pin_code_id = this.reactiveForm.value.pincode;
        //;
        this.countryService.getCountryStateByPIN(this.pin_code_id).subscribe((data) => {
            //this.form.reset();
            if (data != undefined && data != null && data.length > 0) {
                this.state_id = data[0].state_id;
                //;
                this.countryService.getCountryByState(this.state_id).subscribe((countrydata) => {
                    //this.form.reset();
                    this.countries = countrydata;
                    const toSelect = this.countries.find(c => c.id == data[0].country_id);
                    this.reactiveForm.get('country').setValue(toSelect);
                    this.filteredOptionCountry = this.reactiveForm.controls.country.valueChanges
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterCountry(name) : this.countries));
                    //; 
                    this.country_id = data[0].country_id;
                    this.countryService.getStateByCountry(this.country_id).subscribe((statedata) => {
                        //this.form.reset();
                        this.states = statedata;
                        const toSelect = this.states.find(c => c.id == data[0].state_id);
                        this.reactiveForm.get('state').setValue(toSelect);
                        this.filteredOptionState = this.reactiveForm.controls.state.valueChanges
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterState(name) : this.states));
                    }, (err) => {
                    });
                    //; 
                    this.state_id = data[0].state_id;
                    this.countryService.getCityByState(this.state_id).subscribe((Citydata) => {
                        //this.form.reset();
                        this.cities = Citydata;
                        //const toSelect = this.states.find(c => c.id == data[0].state_id);
                        // this.form.get('state').setValue(toSelect);
                        this.filteredOptionCity = this.reactiveForm.controls.city.valueChanges
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.reactiveForm), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterCity(name) : this.cities));
                    }, (err) => {
                    });
                }, (err) => {
                });
            }
            else {
            }
        }, (err) => {
        });
    }
    onCountryChange(event) {
        this.countries = [];
        this.getAllCountry();
        this.getStatesByCountry(event);
        //this.form.get('pincode').setValue("");
        this.reactiveForm.get('state').setValue("");
        this.reactiveForm.get('city').setValue("");
    }
    getStatesByCountry(state) {
        this.state_id = state.id;
        this.countryService.getStateByCountry(this.state_id).subscribe((statedata) => {
            //this.form.reset();
            this.states = statedata;
            // const toSelect = this.states.find(c => c.id == data[0].state_id);
            // this.form.get('state').setValue(toSelect);
            this.filteredOptionState = this.reactiveForm.controls.state.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterState(name) : this.states));
        }, (err) => {
        });
    }
    onStateChange(event) {
        this.getCitiesByStates(event);
        this.getCountryByState(event);
        this.reactiveForm.get('city').setValue("");
        //this.form.get('pincode').setValue("");
    }
    onCityChange(event) {
        //this.form.get('pincode').setValue("");
    }
    getCitiesByStates(stateId) {
        this.state_id = stateId.id;
        this.countryService.getCityByState(this.state_id).subscribe((citiesdata) => {
            this.cities = citiesdata;
            this.filteredOptionCity = this.reactiveForm.controls.city.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterCity(name) : this.cities));
        }, (err) => {
        });
    }
    getCountryByState(stateId) {
        this.state_id = stateId.id;
        this.countryService.getCountryByState(this.state_id).subscribe((countrydata) => {
            //this.form.reset();
            this.countries = countrydata;
            const toSelect = this.countries.find(c => c.id == countrydata[0].id);
            this.reactiveForm.get('country').setValue(toSelect);
            this.filteredOptionCountry = this.reactiveForm.controls.country.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterCountry(name) : this.countries));
        }, (err) => {
        });
    }
    displayCountry(item) {
        return item && item.name ? item.name : '';
    }
    _filterCountry(name) {
        const filterValue = name.toLowerCase();
        return this.countries.filter(option => option.name.toLowerCase().includes(filterValue));
    }
    displayState(item) {
        return item && item.name ? item.name : '';
    }
    _filterState(name) {
        const filterValue = name.toLowerCase();
        return this.states.filter(option => option.name.toLowerCase().includes(filterValue));
    }
    displayCity(item) {
        return item && item.name ? item.name : '';
    }
    _filterCity(name) {
        const filterValue = name.toLowerCase();
        return this.cities.filter(option => option.name.toLowerCase().includes(filterValue));
    }
    getAllCountry() {
        this.countryService.getAllCountry().subscribe((data) => {
            //;
            this.countries = data;
            //;
            const toSelect = this.countries.find(c => c.id == this.userObj.country_id);
            this.reactiveForm.get('country').setValue(toSelect);
            this.filteredOptionCountry = this.reactiveForm.controls.country.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), 
            //tap(() => this.form.controls.chargingModel.setValue(toSelect)),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterCountry(name) : this.countries));
        }, (err) => {
        });
    }
    getAllState(countryID) {
        this.countryService.getStateByCountry(countryID).subscribe((data) => {
            //;
            this.states = data;
            //;
            const toSelect = this.states.find(c => c.id == this.userObj.state_id);
            this.reactiveForm.get('state').setValue(toSelect);
            this.filteredOptionState = this.reactiveForm.controls.state.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), 
            //tap(() => this.form.controls.chargingModel.setValue(toSelect)),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterState(name) : this.states));
        }, (err) => {
        });
    }
    getAllCity(stateID) {
        //this.getCitiesByStatesOnInit(state_id);
        this.countryService.getCityByState(stateID).subscribe((data) => {
            //;
            this.cities = data;
            //;
            const toSelect = this.cities.find(c => c.id == this.userObj.city_id);
            this.reactiveForm.get('city').setValue(toSelect);
            this.filteredOptionCity = this.reactiveForm.controls.city.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), 
            //tap(() => this.form.controls.chargingModel.setValue(toSelect)),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterCity(name) : this.cities));
        }, (err) => {
        });
    }
}
ProfileLayoutComponent.ɵfac = function ProfileLayoutComponent_Factory(t) { return new (t || ProfileLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_account_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_8__["CountriesService"])); };
ProfileLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileLayoutComponent, selectors: [["app-profile-layout"]], decls: 156, vars: 44, consts: [[2, "display", "block", "width", "100%"], ["id", "", "fxLayout", "row", 1, "page-layout", "simple", "right-sidebar"], ["fusePerfectScrollbar", "", 1, "center"], ["fxLayout", "column", "fxLayoutAlign", "space-between", 1, "header", "accent", "px-24", "pt-16", "pb-0"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [1, "mat-display-1", "my-0", "my-sm-24", "welcome-message"], ["id", "forms", "fxLayout", "column", 1, "page-layout", "simple", "fullwidth"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "20px", "fxFlex", "1 0 auto", 1, "p-24"], ["fxFlex", "20", 1, "pr-4"], [1, "text-center"], ["src", "assets/images/avatar.png", "alt", "", "width", "80", 1, "m-b-8", "r-full"], [1, "m-t-0", "m-b-8", "f-w-400"], [1, "m-t-0", "m-b-8"], ["mat-raised-button", "", "color", "accent", 1, "m-l-8", 3, "click"], ["fxFlex", "80"], [1, "m--16"], ["label", "Profile"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", "name", "form", 1, "mat-card", "mat-elevation-z4", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["fxFlex", "33", "appearance", "outline", 1, "pr-4"], ["matInput", "", "placeholder", "", "formControlName", "f_name", "required", ""], [4, "ngIf"], ["matInput", "", "placeholder", "", "formControlName", "m_name"], ["matInput", "", "placeholder", "", "formControlName", "l_name", "required", ""], ["fxFlex", "50", "appearance", "outline", 1, "pr-4"], ["matInput", "", "formControlName", "dob", "disabled", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["disabled", "false"], ["dp3", ""], ["matInput", "", "placeholder", "", "formControlName", "email", "required", "", 2, "text-transform", "none"], ["matInput", "", "placeholder", "", "formControlName", "employee_code", "required", ""], ["matInput", "", "placeholder", "", "formControlName", "username", "required", "", 2, "text-transform", "none"], ["matInput", "", "placeholder", "", "formControlName", "mobile", "required", ""], ["matInput", "", "placeholder", "", "formControlName", "alt_mobile", "required", ""], ["matInput", "", "placeholder", "", "formControlName", "pan", "required", ""], ["matInput", "", "placeholder", "", "formControlName", "aadhar", "required", ""], ["matInput", "", "placeholder", "", "formControlName", "address1", "required", ""], ["matInput", "", "placeholder", "", "formControlName", "address2", "required", ""], ["matInput", "", "placeholder", " ", "formControlName", "pin", "required", "", 3, "change"], ["fxFlex", "50", "appearance", "outline", 1, "example-full-width", "pr-4"], ["type", "text", "matInput", "", "formControlName", "city", 3, "matAutocomplete"], [3, "displayWith"], ["cityAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 1, "secondary-text"], ["appearance", "outline", "fxFlex", "50", 1, "example-full-width", "pr-4"], ["type", "text", "matInput", "", "formControlName", "state", 3, "matAutocomplete"], [3, "displayWith", "optionSelected"], ["stateAuto", "matAutocomplete"], ["type", "text", "matInput", "", "formControlName", "country", 3, "matAutocomplete"], ["countryAuto", "matAutocomplete"], ["matInput", "", "placeholder", "", "formControlName", "landmark", "required", ""], ["fxLayout", "row", "fxLayoutAlign", "end center"], ["mat-raised-button", "", "color", "primary", 1, "m-t-8"], ["label", "Vehicle Details", 4, "ngIf"], ["label", "Assigned CPO", 4, "ngIf"], [3, "value"], ["label", "Vehicle Details"], [1, "m-16"], ["label", "Assigned CPO"]], template: function ProfileLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Personal Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileLayoutComponent_Template_button_click_17_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-tab-group", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-tab", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ProfileLayoutComponent_mat_error_32_Template, 2, 0, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Middle Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ProfileLayoutComponent_mat_error_37_Template, 2, 0, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ProfileLayoutComponent_mat_error_42_Template, 2, 0, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Date Of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "mat-datepicker-toggle", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "mat-datepicker", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ProfileLayoutComponent_mat_error_51_Template, 2, 0, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-form-field", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ProfileLayoutComponent_mat_error_56_Template, 2, 0, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-form-field", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Employee Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ProfileLayoutComponent_mat_error_62_Template, 2, 0, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-form-field", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, ProfileLayoutComponent_mat_error_67_Template, 2, 0, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-form-field", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, ProfileLayoutComponent_mat_error_73_Template, 2, 0, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-form-field", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Alternate Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, ProfileLayoutComponent_mat_error_78_Template, 2, 0, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-form-field", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Pan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, ProfileLayoutComponent_mat_error_84_Template, 2, 0, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-form-field", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Aadhar Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, ProfileLayoutComponent_mat_error_89_Template, 2, 0, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Address Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-form-field", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Address Line 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, ProfileLayoutComponent_mat_error_99_Template, 2, 0, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-form-field", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Address Line 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, ProfileLayoutComponent_mat_error_104_Template, 2, 0, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-form-field", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Pin Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProfileLayoutComponent_Template_input_change_109_listener() { return ctx.getStateCountry(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, ProfileLayoutComponent_mat_error_110_Template, 2, 0, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "mat-form-field", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "mat-autocomplete", 41, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, ProfileLayoutComponent_mat_option_117_Template, 2, 2, "mat-option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](118, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "mat-icon", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, ProfileLayoutComponent_mat_error_121_Template, 2, 0, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "mat-form-field", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "mat-autocomplete", 47, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function ProfileLayoutComponent_Template_mat_autocomplete_optionSelected_127_listener($event) { return ctx.onStateChange($event.option.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](129, ProfileLayoutComponent_mat_option_129_Template, 2, 2, "mat-option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](130, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "mat-icon", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](133, ProfileLayoutComponent_mat_error_133_Template, 2, 0, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "mat-form-field", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "mat-autocomplete", 47, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function ProfileLayoutComponent_Template_mat_autocomplete_optionSelected_138_listener($event) { return ctx.onCountryChange($event.option.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](140, ProfileLayoutComponent_mat_option_140_Template, 2, 2, "mat-option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](141, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "mat-icon", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](144, ProfileLayoutComponent_mat_error_144_Template, 2, 0, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "mat-form-field", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Landmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](150, ProfileLayoutComponent_mat_error_150_Template, 2, 0, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](154, ProfileLayoutComponent_mat_tab_154_Template, 4, 0, "mat-tab", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](155, ProfileLayoutComponent_mat_tab_155_Template, 4, 0, "mat-tab", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](116);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](128);
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](42, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c0)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userObj == null ? null : ctx.userObj.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userObj == null ? null : ctx.userObj.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.reactiveForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reactiveForm.get("f_name").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reactiveForm.get("m_name").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reactiveForm.get("l_name").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reactiveForm.get("dob").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reactiveForm.get("email").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reactiveForm.get("employee_code").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reactiveForm.get("username").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reactiveForm.get("mobile").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reactiveForm.get("alt_mobile").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reactiveForm.get("pan").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reactiveForm.get("aadhar").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reactiveForm.get("address1").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reactiveForm.get("address2").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reactiveForm.get("pin").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayCity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](118, 35, ctx.filteredOptionCity));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reactiveForm.get("city").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](130, 37, ctx.filteredOptionState));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reactiveForm.get("state").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayCountry);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](141, 39, ctx.filteredOptionCountry));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reactiveForm.get("country").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reactiveForm.get("landmark").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.endUserTab);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cmsUserTab);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_10__["FusePerfectScrollbarDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepicker"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDivider"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["AsyncPipe"]], encapsulation: 2, data: { animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-layout',
                templateUrl: './profile-layout.component.html',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: app_shared_services_account_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_8__["CountriesService"] }]; }, null); })();


/***/ }),

/***/ "aE4m":
/*!*************************************************************!*\
  !*** ./src/app/main/profile/settings/settings.component.ts ***!
  \*************************************************************/
/*! exports provided: ProfileSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSettingsComponent", function() { return ProfileSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_shared_services_account_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/account/account.service */ "K86D");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function ProfileSettingsComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileSettingsComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getErrorMessage(ctx_r1.reactiveForm), "");
} }
function ProfileSettingsComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileSettingsComponent_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter tele");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProfileSettingsComponent {
    constructor(fb, accountService) {
        this.fb = fb;
        this.accountService = accountService;
        this.reactiveForm = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            tele: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    ngOnInit() {
        this.initialize();
        this.getUserInfo();
    }
    initialize() {
        this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
    }
    getUserInfo() {
        this.accountService.getUserInfo(this.localStorage.userId).subscribe((data) => {
            this.userObj = data[0];
            this.assignValues(this.userObj);
        }, (err) => { });
    }
    assignValues(userObj) {
        this.reactiveForm.get('username').setValue(userObj.username);
        this.reactiveForm.get('email').setValue(userObj.email);
        this.reactiveForm.get('mobile').setValue(userObj.mobile);
        this.reactiveForm.get('tele').setValue(userObj.alt_mobile);
    }
    getErrorMessage(form) {
        return form.get('email').hasError('required')
            ? 'You must enter a value'
            : form.get('email').hasError('email')
                ? 'Not a valid email'
                : '';
    }
}
ProfileSettingsComponent.ɵfac = function ProfileSettingsComponent_Factory(t) { return new (t || ProfileSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_account_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"])); };
ProfileSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileSettingsComponent, selectors: [["app-profile-settings"]], decls: 37, vars: 5, consts: [[1, "form-field-full", 3, "formGroup"], ["fxLayout", "row wrap", "fxLayoutGap", "8px grid"], ["fxFlex", "50", "fxFlex.lt-md", "100"], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "username", "readonly", "", "required", ""], [4, "ngIf"], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "email", "readonly", "", "required", ""], ["matInput", "", "placeholder", "Simple placeholder", "type", "number", "formControlName", "mobile", "required", ""], ["matSuffix", ""], ["matInput", "", "placeholder", "Simple placeholder", "type", "number", "formControlName", "tele", "required", ""], ["fxLayout", "row", "fxLayoutAlign", "end center"], ["mat-raised-button", "", "color", "primary", 1, "m-t-8"]], template: function ProfileSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProfileSettingsComponent_mat_error_11_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProfileSettingsComponent_mat_error_17_Template, 2, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "smartphone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProfileSettingsComponent_mat_error_25_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Tele");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ProfileSettingsComponent_mat_error_33_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.reactiveForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reactiveForm.get("username").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reactiveForm.get("email").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reactiveForm.get("mobile").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reactiveForm.get("tele").invalid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-settings',
                templateUrl: './settings.component.html',
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: app_shared_services_account_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "i0nJ":
/*!***************************************************************************!*\
  !*** ./src/app/main/profile/change-password/change-password.component.ts ***!
  \***************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var app_shared_services_account_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/account/account.service */ "K86D");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");















const _c0 = ["toggleElement"];
const _c1 = ["toggleAvailable"];
function ChangePasswordComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter current password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter new password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter confirm password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is inconsistent! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ChangePasswordComponent {
    constructor(fb, snackBar, accountService, dialogRef, data) {
        this.fb = fb;
        this.snackBar = snackBar;
        this.accountService = accountService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.isEditMode = false;
        this.status = false;
        this.confirmValidator = (control) => {
            if (!control.value) {
                return { error: true, required: true };
            }
            else if (control.value !== this.form.controls.password.value) {
                return { error: true, confirm: true };
            }
        };
    }
    ngOnInit() {
        this.initialize();
    }
    initialize() {
        this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
        // this.params = this.data;
        //this.isEditMode = this.params.action == 'CREATE' ? false : true;
        this.form = this.fb.group({
            currentPassword: [''],
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            cnPassword: ['', [this.confirmValidator]]
        });
    }
    togglePasswordFieldType() {
        this.isPasswordFieldType = !this.isPasswordFieldType;
    }
    togglePasswordConfirmFieldType() {
        this.isPasswordConfirmFieldType = !this.isPasswordConfirmFieldType;
    }
    close() {
        this.dialogRef.close();
    }
    onYesClick() {
        //if(this.form.valid){
        let formValues = this.form.value;
        let formMobileValues = this.form.value;
        let params = {
            id: this.localStorage.userId,
            password: formValues.newPassword,
            registration_origin: "WEB",
            modify_by: this.localStorage.userId,
        };
        //
        this.accountService.updatePassword(params).subscribe((res) => {
            //
            this.logs = res;
            this.snackBar.open(res.message, 'Dismiss', { duration: 3000 });
        }, (err) => {
            //this.snackBar.open(MessageConstant.errorMessage, 'Dismiss', { duration: 3000 });
            // this.router.navigateByUrl('/login');   
        });
        // }else{
        // //  this.snackBar.open(MessageConstant.validOTPError, 'Dismiss', { duration: 5000 });
        // }
        this.dialogRef.close();
    }
    getErrorMessage(form) {
        return form.get('email').hasError('required')
            ? 'You must enter a value'
            : form.get('email').hasError('email')
                ? 'Not a valid email'
                : '';
    }
    assignValues(params) {
        this.form.get('currentPassword').setValue(params.data.currentPassword);
        this.form.get('newPassword').setValue(params.data.newPassword);
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_account_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["app-change-password"]], viewQuery: function ChangePasswordComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ref = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toggleAvailable = _t.first);
    } }, decls: 33, vars: 12, consts: [["id", "forms", "fxLayout", "column", 1, "page-layout", "simple", "fullwidth"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", "name", "form", 1, "", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["fxFlex", "100", "appearance", "outline", 1, "example-full-width", "pr-4"], ["matInput", "", "placeholder", "", "formControlName", "currentPassword", "required", "", 2, "text-transform", "none", 3, "type"], ["matSuffix", "", 3, "click"], [4, "ngIf"], ["matInput", "", "placeholder", "", "formControlName", "newPassword", "required", "", 2, "text-transform", "none", 3, "type"], ["matInput", "", "placeholder", "", "formControlName", "cnPassword", "required", "", 2, "text-transform", "none", 3, "type"], ["fxLayout", "row", "fxLayoutAlign", "end center"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "m-t-8", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "warn", 1, "m-t-8", 2, "margin-left", "1%", 3, "click"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Current Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_mat_icon_click_8_listener() { return ctx.togglePasswordFieldType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ChangePasswordComponent_mat_error_10_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_mat_icon_click_16_listener() { return ctx.togglePasswordConfirmFieldType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ChangePasswordComponent_mat_error_18_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_mat_icon_click_24_listener() { return ctx.togglePasswordConfirmFieldType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ChangePasswordComponent_mat_error_26_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ChangePasswordComponent_mat_error_27_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_29_listener() { return ctx.onYesClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_31_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.isPasswordFieldType ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isPasswordFieldType ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("currentPassword").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.isPasswordConfirmFieldType ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isPasswordConfirmFieldType ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("newPassword").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.isPasswordConfirmFieldType ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isPasswordConfirmFieldType ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("cnPassword").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("cnPassword").hasError("confirm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isEditMode ? "Save" : "Save");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-change-password',
                templateUrl: './change-password.component.html',
                styleUrls: ['./change-password.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: app_shared_services_account_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, { ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["toggleElement"]
        }], toggleAvailable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["toggleAvailable"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=app-main-profile-profile-module-es2015.js.map