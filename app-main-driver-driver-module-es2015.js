(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-main-driver-driver-module"],{

/***/ "3Fb3":
/*!******************************************************************!*\
  !*** ./src/app/main/driver/driver-crud/driver-crud.component.ts ***!
  \******************************************************************/
/*! exports provided: DriverCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverCrudComponent", function() { return DriverCrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ "PVWW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/utility/utility.service */ "xb2s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive */ "EwFO");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function DriverCrudComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tabLink_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", tabLink_r1.link)("active", _r3.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tabLink_r1.label, " ");
} }
const _c0 = function () { return { x: "50px" }; };
const _c1 = function (a1) { return { value: "*", params: a1 }; };
class DriverCrudComponent {
    constructor(router, cdr, _utilityService) {
        this.router = router;
        this.cdr = cdr;
        this._utilityService = _utilityService;
        // Nav bar demo
        this.tabLinks = [
        // { label: 'Clients', link: 'list' },
        // { label: 'Add New', link: 'create' }
        ];
        this.tempLinks = [];
    }
    ngAfterViewInit() {
        this._utilityService.activeMenuItems$.subscribe(menuItemSelecte => {
            this.menuArray = menuItemSelecte;
            if (this.menuArray == null || this.menuArray == undefined || this.menuArray.title == null || this.menuArray.title == undefined) {
                this.menuArray = JSON.parse(localStorage.getItem('activeMenuItems'));
            }
            this.cdr.detectChanges();
        });
    }
    ngOnInit() {
        this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
        let nav_list = this.localStorage.nav_list_with_tab;
        nav_list.filter((x) => {
            if (x.id === "manageDriver") {
                this.objectData = x;
                if (this.objectData.children != null && this.objectData.children != undefined) {
                    this.objectData.children.filter((y) => {
                        if (y.id === "crud") {
                            this.objectChildData = y;
                            let isDefaultRoutePermeted = false;
                            if (this.objectChildData.children != null && this.objectChildData.children != undefined) {
                                this.objectChildData.children.filter((z) => {
                                    if (z.id === "list") {
                                        isDefaultRoutePermeted = true;
                                        this.tempLinks.push({ label: 'List', link: 'list' });
                                    }
                                    if (z.id === "create") {
                                        this.tempLinks.push({ label: 'Add New', link: 'create' });
                                    }
                                });
                            }
                            this.tabLinks = this.tempLinks;
                            if (!isDefaultRoutePermeted) {
                                this.router.navigate(['/driverManagement/crud/' + this.tempLinks[0].link]);
                            }
                        }
                    });
                }
            }
        });
    }
}
DriverCrudComponent.ɵfac = function DriverCrudComponent_Factory(t) { return new (t || DriverCrudComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"])); };
DriverCrudComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DriverCrudComponent, selectors: [["app-driver-crud"]], decls: 10, vars: 6, consts: [[2, "display", "block", "width", "100%"], ["id", "", "fxLayout", "row", 1, "page-layout", "simple", "right-sidebar"], ["fusePerfectScrollbar", "", 1, "center"], ["fxLayout", "column", "fxLayoutAlign", "space-between", 1, "header", "accent", "px-24", "pt-16", "pb-0"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [1, "mat-display-1", "my-0", "my-sm-24", "welcome-message"], ["mat-tab-nav-bar", "", "aria-label", "weather navigation links"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active"], ["rla", "routerLinkActive"]], template: function DriverCrudComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DriverCrudComponent_a_8_Template, 3, 3, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.menuArray == null ? null : ctx.menuArray.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabLinks);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_5__["FusePerfectScrollbarDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabNav"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcml2ZXItY3J1ZC5jb21wb25lbnQuc2NzcyJ9 */"], encapsulation: 2, data: { animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DriverCrudComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-driver-crud',
                templateUrl: './driver-crud.component.html',
                styleUrls: ['./driver-crud.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"] }]; }, null); })();


/***/ }),

/***/ "9F6C":
/*!****************************************************!*\
  !*** ./src/app/main/driver/list/list.component.ts ***!
  \****************************************************/
/*! exports provided: Driver, ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Driver", function() { return Driver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mat_table_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mat-table-filter */ "6Ugt");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/components/confirm-dialog/confirm-dialog.component */ "2nsM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../action-dialog/action-dialog.component */ "b3ZU");
/* harmony import */ var _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../view-dialog/view-dialog.component */ "ElkQ");
/* harmony import */ var app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/shared/utils/message.constant */ "AgqY");
/* harmony import */ var app_shared_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/shared/services/driver/driver.service */ "SHc3");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/shared/services/cpo/cpo.service */ "k3ne");
/* harmony import */ var app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/shared/services/rfid/rfid.service */ "QtQ4");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ "FKr1");


































function ListComponent_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r15.name, " ");
} }
function ListComponent_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select cpo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_mat_header_cell_33_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CPO Name \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_33_span_1_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.changeVisibility("cpoSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_mat_header_cell_33_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_mat_header_cell_33_mat_form_field_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.filterEntity.cpo_name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_33_mat_form_field_2_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.changeVisibility("cpoSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r17.filterEntity.cpo_name);
} }
function ListComponent_mat_header_cell_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_mat_header_cell_33_span_1_Template, 4, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_mat_header_cell_33_mat_form_field_2_Template, 4, 1, "mat-form-field", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.cpoSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.cpoSearch);
} }
function ListComponent_mat_cell_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r23.cpo_name, " ");
} }
function ListComponent_mat_header_cell_36_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_36_span_1_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.changeVisibility("nameSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_mat_header_cell_36_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_mat_header_cell_36_mat_form_field_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.filterEntity.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_36_mat_form_field_2_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.changeVisibility("nameSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r25.filterEntity.name);
} }
function ListComponent_mat_header_cell_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_mat_header_cell_36_span_1_Template, 4, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_mat_header_cell_36_mat_form_field_2_Template, 4, 1, "mat-form-field", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.nameSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.nameSearch);
} }
function ListComponent_mat_cell_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r31.name, " ");
} }
function ListComponent_mat_header_cell_39_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_39_span_1_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.changeVisibility("mobileSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_mat_header_cell_39_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_mat_header_cell_39_mat_form_field_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.filterEntity.mobile = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_39_mat_form_field_2_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.changeVisibility("mobileSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r33.filterEntity.mobile);
} }
function ListComponent_mat_header_cell_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_mat_header_cell_39_span_1_Template, 4, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_mat_header_cell_39_mat_form_field_2_Template, 4, 1, "mat-form-field", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.mobileSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.mobileSearch);
} }
function ListComponent_mat_cell_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r39.mobile, " ");
} }
function ListComponent_mat_header_cell_42_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_42_span_1_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.changeVisibility("statusSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_mat_header_cell_42_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_mat_header_cell_42_mat_form_field_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r44.filterEntity.statusString = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_header_cell_42_mat_form_field_2_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r46.changeVisibility("statusSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r41.filterEntity.statusString);
} }
function ListComponent_mat_header_cell_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_mat_header_cell_42_span_1_Template, 4, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_mat_header_cell_42_mat_form_field_2_Template, 4, 1, "mat-form-field", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.statusSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.statusSearch);
} }
function ListComponent_mat_cell_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", row_r47.status == "Y" ? "green" : "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r47.statusString, " ");
} }
function ListComponent_mat_header_cell_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_mat_cell_46_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_cell_46_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const element_r48 = ctx.$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.viewDialog("VIEW", element_r48); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_cell_46_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const element_r48 = ctx.$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.openDialog("EDIT", element_r48); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_cell_46_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const element_r48 = ctx.$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.delete(element_r48); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_mat_header_row_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row", 51);
} }
function ListComponent_mat_header_row_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row", 52);
} }
const _c0 = function () { return [10, 30, 50, 100]; };
class Driver {
}
/**
 * @title Data table with sorting, pagination, and filtering.
 */
class ListComponent {
    constructor(driverService, dialog, snackBar, fb, cpoService, rfidService) {
        // Create 100 users
        // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
        this.driverService = driverService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.fb = fb;
        this.cpoService = cpoService;
        this.rfidService = rfidService;
        this.head = [['CPO Name', 'Driver Name', 'Mobile', 'Status']];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]([]);
        this.groupByColumns = [];
        this.expandedRfid = [];
        this.expandedSubRfid = [];
        this.clientSearch = false;
        this.cpoSearch = false;
        this.nameSearch = false;
        this.mobileSearch = false;
        this.statusSearch = false;
        this.selectedCpo_id = 0;
        // Assign the data to the data source for the table to render
        this.form = this.fb.group({
            CPO: ['']
        });
    }
    ngOnInit() {
        this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
        this.columns = [
            {
                field: 'cpo_name'
            },
            {
                field: 'name'
            },
            {
                field: 'mobile'
            },
            {
                field: 'status'
            },
            {
                field: 'action'
            }
        ];
        this.displayedColumns = this.columns.map(column => column.field);
        this.getactivecposcw(this.localStorage.userId);
        this.filterEntity = new Driver();
        this.filterType = mat_table_filter__WEBPACK_IMPORTED_MODULE_4__["MatTableFilter"].ANYWHERE;
        // this.getDriverData(this.selectedCpo_id);
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    getDriverData(cpo_id) {
        this.driverService.getDriverById(this.localStorage.userId, cpo_id).subscribe((resp) => {
            if (resp.status == true) {
                this.driverData = resp.data;
                for (var i = 0; i < this.driverData.length; i++) {
                    if (this.driverData[i].status == 'N') {
                        this.driverData[i].statusString = 'Inactive';
                    }
                    else {
                        this.driverData[i].statusString = 'Active';
                    }
                }
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.driverData);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }
            else {
                this.driverData = [];
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.driverData);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
                this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_12__["MessageConstant"].NoRecordFoundMessage, 'Dismiss', { duration: 3000 });
                return;
            }
        }, (err) => { });
    }
    getactivecposcw(id) {
        this.cpoService.getactivecposcwwithAll(id).subscribe((data) => {
            //;
            this.cposName = data;
            if (this.localStorage.role_code != "END") {
                if (this.cposName != null && this.cposName != undefined) {
                    // const toSelect = this.cposName.length == 1 ? this.cposName[0] : this.cposName[1];
                    const toSelect = this.cposName[0];
                    this.selectedCpo_id = toSelect.id;
                    this.form.get('CPO').setValue(toSelect);
                    if (this.localStorage.role_code == "CPO") {
                        this.form.get('CPO').disable();
                    }
                    this.getDriverData(this.selectedCpo_id);
                }
                this.filteredOptionsCPO = this.form.controls.CPO.valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(name => name ? this._filterCPO(name) : this.cposName));
            }
        }, (err) => { });
    }
    displayCPO(item) {
        return item && item.name ? item.name : '';
    }
    displayClient(item) {
        return item && item.name ? item.name : '';
    }
    _filterCPO(name) {
        const filterValue = name.toLowerCase();
        return this.cposName.filter(option => option.name.toLowerCase().includes(filterValue));
    }
    delete(element) {
        this.confirmDialogRef = this.dialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__["FuseConfirmDialogComponent"], {
            disableClose: true
        });
        this.confirmDialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.driverService.delete(element.id).subscribe((data) => {
                    this.getDriverData(this.selectedCpo_id);
                    this.snackBar.open('Deleted successfully', 'Dismiss', { duration: 2000 });
                }, (err) => {
                });
            }
            this.confirmDialogRef = null;
        });
    }
    onCPOChange(cpo_id) {
        this.selectedCpo_id = cpo_id;
        this.getDriverData(cpo_id);
    }
    openDialog(action, data) {
        let params = {
            action: action,
            data: data,
            rfidData: this.rfid
        };
        const dialogRef = this.dialog.open(_action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ActionDialogComponent"], {
            width: '800px',
            data: params,
            panelClass: 'app-action-dialog',
            autoFocus: false,
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(result => {
            this.getDriverData(this.selectedCpo_id);
        });
    }
    viewDialog(action, data) {
        let params = {
            action: action,
            data: data
        };
        const dialogRef = this.dialog.open(_view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ViewDialogComponent"], {
            width: '800px',
            data: params,
            panelClass: 'app-action-dialog',
            autoFocus: false,
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(result => {
            // this.moderate(result);
            this.getDriverData(this.selectedCpo_id);
        });
    }
    changeVisibility(visibleOption, ev) {
        ev.stopPropagation();
        if (visibleOption == 'cpoSearch') {
            this.cpoSearch = !this.cpoSearch;
            this.filterEntity.cpo_name = "";
        }
        if (visibleOption == 'nameSearch') {
            this.nameSearch = !this.nameSearch;
            this.filterEntity.name = "";
        }
        if (visibleOption == 'mobileSearch') {
            this.mobileSearch = !this.mobileSearch;
            this.filterEntity.mobile = '';
        }
        if (visibleOption == 'statusSearch') {
            this.statusSearch = !this.statusSearch;
            this.filterEntity.statusString = '';
        }
    }
    tableExport() {
        this.exportedData = [];
        for (let i = 0; i < this.dataSource.filteredData.length; i++) {
            var driverData = this.dataSource.filteredData[i];
            var data = {
                'CPO Name': driverData.cpo_name,
                'Name': driverData.name,
                'Mobile': driverData.mobile,
                'Status': driverData.statusString
            };
            this.exportedData.push(data);
        }
        const workSheet = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].json_to_sheet(this.exportedData);
        const workBook = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].book_append_sheet(workBook, workSheet, 'Driver List');
        xlsx__WEBPACK_IMPORTED_MODULE_1__["writeFile"](workBook, 'Driver List.xlsx');
    }
    pdfExport() {
        //this.preloader.open();
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__["jsPDF"]({ // set needed dimensions for any elemen
        });
        this.exportedData = [];
        for (let i = 0; i < this.dataSource.filteredData.length; i++) {
            var driverData = this.dataSource.filteredData[i];
            var data = [driverData.cpo_name, driverData.name, driverData.mobile, driverData.statusString];
            this.exportedData.push(data);
        }
        var img = new Image();
        var imgRight = new Image();
        var src = 'assets/images/logos/logo_sparkev_main.png';
        var srcSparkEV = 'assets/images/logos/logo_SparkEV_black.png';
        imgRight.src = srcSparkEV;
        var createdDate = new Date().toLocaleString(('en-GB'));
        img.src = src;
        doc.setFontSize(11);
        doc.setTextColor(100);
        doc.setFontSize(18);
        doc.autoTable({
            head: this.head,
            body: this.exportedData,
            theme: 'grid',
            headStyles: { fontStyle: 'majalla', fillColor: [11, 148, 68] },
            styles: {
                cellPadding: 1,
                fontSize: 8,
            },
            margin: { top: 22 },
            didDrawCell: data => {
            },
            didDrawPage: data => {
                doc.addImage(img, 15, 7, 15, 6);
                doc.addImage(imgRight, 170, 7, 25, 6);
                doc.text('Driver List Report', doc.internal.pageSize.getWidth() / 2, 11, { align: 'center' });
                doc.setTextColor(211, 211, 211);
                doc.setFontSize(60);
                doc.setGState(doc.GState({ opacity: 0.6 }));
                doc.text('Confidential/Not for Public use', 25, 285, null, 60);
                doc.setGState(doc.GState({ opacity: 1 }));
                doc.setTextColor(100);
                doc.setFontSize(9);
                doc.text('Date:' + createdDate, 15, 18);
                doc.text('Generated By:' + this.localStorage.f_Name, 195, 18, { align: 'right' });
                doc = this.addWaterMark(doc);
            }
        });
        // below line for Open PDF document in new tab
        doc.output('dataurlnewwindow');
        //this.preloader.close();
        // below line for Download PDF document  
        doc.save('Driver List report.pdf');
    }
    addWaterMark(doc) {
        var newpage = doc.getNumberOfPages();
        const i = doc.internal.getNumberOfPages();
        doc.setTextColor(100);
        doc.setFontSize(10);
        //Print Page 1 of 4 for example
        doc.text('Page ' + String(i) + ' of ' + String(newpage), 210 - 20, 297 - 10, null, null, "right");
        return doc;
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_13__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_17__["CpoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_18__["RfidService"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], viewQuery: function ListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 50, vars: 14, consts: [["fxLayout", "row wrap", 1, "matero-row"], ["fxFlex", "100", 1, "matero-col"], [2, "text-align", "left", "margin-left", "16px", "margin-bottom", "10px", "margin-top", "10px"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Excel Download", 3, "click"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "PDF Download", 3, "click"], [1, "form-field-full", 3, "formGroup"], ["fxLayout", "row wrap", "fxLayoutGap", "8px grid"], ["appearance", "outline", "fxFlex", "50", 2, "height", "60px"], ["type", "text", "matInput", "", "formControlName", "CPO", 3, "matAutocomplete"], [3, "displayWith", "optionSelected"], ["auto2", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 2, "display", "flex"], ["matSuffix", "", 1, "secondary-text"], ["matSuffix", "", "matTooltip", "Please enter cpo name", 1, "secondary-text"], [4, "ngIf"], [1, ""], ["fxLayout", "row wrap", 1, "page-layout", "simple", "fullwidth", 2, "overflow", "scroll"], [1, "content", 2, "min-width", "auto"], ["mat-table", "", "matTableFilter", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "exampleEntity", "filterType"], ["matColumnDef", "cpo_name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "mobile"], ["matColumnDef", "status"], ["mat-cell", "", 3, "color", 4, "matCellDef"], ["matColumnDef", "action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], [3, "value"], ["mat-header-cell", "", "mat-sort-header", ""], ["class", "custom_font_size", "style", "display: flex;", 4, "ngIf"], ["appearance", "outline", "style", "width: 70%;", "class", "list_input", 4, "ngIf"], [1, "custom_font_size", 2, "display", "flex"], ["matSuffix", "", 3, "click"], ["appearance", "outline", 1, "list_input", 2, "width", "70%"], ["matInput", "", "placeholder", " CPO Name ", 3, "ngModel", "ngModelChange"], ["mat-cell", ""], ["matInput", "", "placeholder", "Name", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", " Mobile No.", 3, "ngModel", "ngModelChange"], ["appearance", "outline", "style", "width: 110px", "class", "list_input", 4, "ngIf"], ["appearance", "outline", 1, "list_input", 2, "width", "110px"], ["matInput", "", "placeholder", "Status", 3, "ngModel", "ngModelChange"], ["mat-header-cell", ""], [1, "custom_font_size"], ["color", "primary", "matTooltip", "View", 2, "cursor", "pointer", 3, "click"], ["color", "primary", "matTooltip", "Edit", 2, "cursor", "pointer", 3, "click"], ["color", "warn", "matTooltip", "Remove", 2, "cursor", "pointer", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_button_click_3_listener() { return ctx.tableExport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "sim_card_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_button_click_7_listener() { return ctx.pdfExport(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function ListComponent_Template_mat_autocomplete_optionSelected_18_listener($event) { return ctx.onCPOChange($event.option.value.id); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "mat-paginator", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayCPO);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 11, ctx.filteredOptionsCPO));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("CPO").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("exampleEntity", ctx.filterEntity)("filterType", ctx.filterType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], mat_table_filter__WEBPACK_IMPORTED_MODULE_4__["MatTableFilterDirective"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSortHeader"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_27__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.scss']
            }]
    }], function () { return [{ type: app_shared_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_13__["DriverService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBar"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormBuilder"] }, { type: app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_17__["CpoService"] }, { type: app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_18__["RfidService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], { static: true }]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], { static: true }]
        }] }); })();


/***/ }),

/***/ "CQk/":
/*!***************************************************!*\
  !*** ./src/app/main/driver/driver-crud/routes.ts ***!
  \***************************************************/
/*! exports provided: TABS_DEMO_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABS_DEMO_ROUTES", function() { return TABS_DEMO_ROUTES; });
/* harmony import */ var app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/interceptors/auth-gaurd */ "9gca");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create/create.component */ "kkQa");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list/list.component */ "9F6C");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



const TABS_DEMO_ROUTES = [
    { path: 'create', canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]], component: _create_create_component__WEBPACK_IMPORTED_MODULE_1__["CreateComponent"] },
    { path: 'list', canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]], component: _list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"] },
    { path: '', redirectTo: 'list', pathMatch: 'full' },
];


/***/ }),

/***/ "ElkQ":
/*!******************************************************************!*\
  !*** ./src/app/main/driver/view-dialog/view-dialog.component.ts ***!
  \******************************************************************/
/*! exports provided: ViewDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDialogComponent", function() { return ViewDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/countries.service */ "XtJy");
/* harmony import */ var app_shared_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/driver/driver.service */ "SHc3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/cpo/cpo.service */ "k3ne");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "FKr1");






















const _c0 = ["toggleElement"];
function ViewDialogComponent_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r22.name, " ");
} }
function ViewDialogComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select CPO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewDialogComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewDialogComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Special character are not allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewDialogComponent_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter mobile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewDialogComponent_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mobile number must be 10 digit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewDialogComponent_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter address line ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewDialogComponent_mat_error_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter address line ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewDialogComponent_mat_error_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter pin code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewDialogComponent_mat_error_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter valid pin code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewDialogComponent_mat_option_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r23.name, " ");
} }
function ViewDialogComponent_mat_error_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewDialogComponent_mat_option_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r24.name, " ");
} }
function ViewDialogComponent_mat_error_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select state ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewDialogComponent_mat_option_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r25.name, " ");
} }
function ViewDialogComponent_mat_error_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select city ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewDialogComponent_mat_error_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter landmark ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function autocompleteObjectValidator() {
    return (control) => {
        if (typeof control.value === 'string') {
            return { 'invalidAutocompleteObject': { value: control.value } };
        }
        return null; /* valid option selected */
    };
}
class ViewDialogComponent {
    constructor(fb, data, countryService, dialogRef, driverService, snackBar, cpoService) {
        this.fb = fb;
        this.data = data;
        this.countryService = countryService;
        this.dialogRef = dialogRef;
        this.driverService = driverService;
        this.snackBar = snackBar;
        this.cpoService = cpoService;
        this.isEditMode = false;
        this.status = false;
    }
    ngOnInit() {
        this.initialize();
    }
    initialize() {
        this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
        this.params = this.data;
        this.isEditMode = this.params.action == 'CREATE' ? false : true;
        this.form = this.fb.group({
            cpo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z0-9 ]*$/)]],
            addressLine1: [''],
            addressLine2: [''],
            landmark: [''],
            city: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            state: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            country: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            pincode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$')]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
            status: this.status == true ? 'Y' : 'N'
        });
        // Disable all form controls
        Object.keys(this.form.controls).forEach(key => {
            this.form.get(key).disable();
        });
        this.getCpos();
        this.getAllCountry();
        this.getAllState(this.params.data.country_id);
        this.getAllCity(this.params.data.state_id);
        if (this.isEditMode) {
            this.assignValues(this.params);
        }
    }
    getAllCountry() {
        this.countryService.getAllCountry().subscribe((data) => {
            //;
            this.countries = data;
            if (this.isEditMode) {
                //;
                const toSelect = this.countries.find(c => c.id == this.params.data.country_id);
                this.form.get('country').setValue(toSelect);
                this.filteredOptionCountry = this.form.controls.country.valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), 
                //tap(() => this.form.controls.chargingModel.setValue(toSelect)),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterCountry(name) : this.countries));
            }
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
    getAllState(countryID) {
        this.countryService.getStateByCountry(countryID).subscribe((data) => {
            //;
            this.states = data;
            if (this.isEditMode) {
                //;
                const toSelect = this.states.find(c => c.id == this.params.data.state_id);
                this.form.get('state').setValue(toSelect);
                this.filteredOptionState = this.form.controls.state.valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), 
                //tap(() => this.form.controls.chargingModel.setValue(toSelect)),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterState(name) : this.states));
            }
        }, (err) => {
        });
    }
    displayState(item) {
        return item && item.name ? item.name : '';
    }
    _filterState(name) {
        const filterValue = name.toLowerCase();
        return this.states.filter(option => option.name.toLowerCase().includes(filterValue));
    }
    getAllCity(stateID) {
        //this.getCitiesByStatesOnInit(state_id);
        this.countryService.getCityByState(stateID).subscribe((data) => {
            //;
            this.cities = data;
            if (this.isEditMode) {
                //;
                const toSelect = this.cities.find(c => c.id == this.params.data.city_id);
                this.form.get('city').setValue(toSelect);
                this.filteredOptionCity = this.form.controls.city.valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), 
                //tap(() => this.form.controls.chargingModel.setValue(toSelect)),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterCity(name) : this.cities));
            }
        }, (err) => {
        });
    }
    displayCity(item) {
        return item && item.name ? item.name : '';
    }
    _filterCity(name) {
        const filterValue = name.toLowerCase();
        return this.cities.filter(option => option.name.toLowerCase().includes(filterValue));
    }
    assignValues(params) {
        // this.form.get('cpo').setValue(params.data.name);
        this.form.get('name').setValue(params.data.name);
        this.form.get('addressLine1').setValue(params.data.address1);
        this.form.get('addressLine2').setValue(params.data.address2);
        this.form.get('landmark').setValue(params.data.landmark);
        this.form.get('city').setValue(params.data.city_id);
        this.form.get('state').setValue(params.data.state_id);
        this.form.get('country').setValue(params.data.country_id);
        this.form.get('pincode').setValue(params.data.PIN);
        this.form.get('mobile').setValue(params.data.mobile);
        this.status = params.data.status == 'Y' ? true : false;
    }
    closeActionPanel() {
        this.dialogRef.close();
    }
    close() {
        this.dialogRef.close();
    }
    getCpos() {
        this.cpoService.getactivecposcw(this.localStorage.userId).subscribe((data) => {
            this.cpos = data;
            if (this.isEditMode) {
                const toSelect = this.cpos.find(c => c.id == this.params.data.cpo_id);
                this.form.get('cpo').setValue(toSelect);
                this.filteredOptionsCPO = this.form.controls.cpo.valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterCPO(name) : this.cpos));
            }
        }, (err) => {
        });
    }
    _filterCPO(name) {
        const filterValue = name.toLowerCase();
        return this.cpos.filter(option => option.name.toLowerCase().includes(filterValue));
    }
    displayCPO(item) {
        return item && item.name ? item.name : '';
    }
    getStateCountry() {
        this.pin_code_id = this.form.value.pincode;
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
                    this.form.get('country').setValue(toSelect);
                    this.filteredOptionCountry = this.form.controls.country.valueChanges
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterCountry(name) : this.countries));
                    //; 
                    this.country_id = data[0].country_id;
                    this.countryService.getStateByCountry(this.country_id).subscribe((statedata) => {
                        //this.form.reset();
                        this.states = statedata;
                        const toSelect = this.states.find(c => c.id == data[0].state_id);
                        this.form.get('state').setValue(toSelect);
                        this.filteredOptionState = this.form.controls.state.valueChanges
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
                        this.filteredOptionCity = this.form.controls.city.valueChanges
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterCity(name) : this.cities));
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
    getStatesByCountry(state) {
        this.state_id = state.id;
        this.countryService.getStateByCountry(this.state_id).subscribe((statedata) => {
            //this.form.reset();
            this.states = statedata;
            // const toSelect = this.states.find(c => c.id == data[0].state_id);
            // this.form.get('state').setValue(toSelect);
            this.filteredOptionState = this.form.controls.state.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterState(name) : this.states));
        }, (err) => {
        });
    }
    getCitiesByStates(stateId) {
        this.state_id = stateId.id;
        this.countryService.getCityByState(this.state_id).subscribe((citiesdata) => {
            //this.form.reset();
            this.cities = citiesdata;
            // const toSelect = this.states.find(c => c.id == data[0].state_id);
            // this.form.get('state').setValue(toSelect);
            this.filteredOptionCity = this.form.controls.city.valueChanges
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
            this.form.get('country').setValue(toSelect);
            this.filteredOptionCountry = this.form.controls.country.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterCountry(name) : this.countries));
        }, (err) => {
        });
    }
    updateStatus(event) {
        this.status = event.checked;
        this.ref.checked = this.status;
    }
}
ViewDialogComponent.ɵfac = function ViewDialogComponent_Factory(t) { return new (t || ViewDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_4__["CountriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_5__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_7__["CpoService"])); };
ViewDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewDialogComponent, selectors: [["app-view-dialog"]], viewQuery: function ViewDialogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ref = _t.first);
    } }, decls: 120, vars: 36, consts: [["id", "dialog_action_close", "matTooltip", "Close window", 1, "material-icons-outlined", 2, "cursor", "pointer", "color", "white", 3, "click"], [1, "action_toolbar"], [2, "padding", "24px", "max-height", "32vw", "overflow", "auto"], ["id", "forms", "fxLayout", "column", 1, "page-layout", "simple", "fullwidth"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", "name", "form", 1, "mat-elevation-z4", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "50", 1, "pr-4"], ["type", "text", "matInput", "", "formControlName", "cpo", "required", "", 3, "matAutocomplete"], [3, "displayWith"], ["cpoAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 2, "display", "flex"], ["matSuffix", "", 1, "secondary-text"], ["matSuffix", "", "matTooltip", "Please enter CPO name", 1, "secondary-text"], [4, "ngIf"], ["matInput", "", "placeholder", "", "formControlName", "name", "maxlength", "200", "required", "", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter client name", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "mobile", "type", "number", "required", "", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter mobile", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "addressLine1", "required", "", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter address line", 1, "secondary-text"], ["fxLayout", "row ", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["matInput", "", "placeholder", "", "formControlName", "addressLine2", "required", "", "autocomplete", "off"], ["matInput", "", "placeholder", " ", "formControlName", "pincode", "type", "number", "autocomplete", "off", "required", "", 3, "change"], ["matSuffix", "", "matTooltip", "Please enter pin code", 1, "secondary-text"], ["fxLayout", "row ", "fxLayoutAlign", "start center ", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["type", "text", "matInput", "", "formControlName", "country", "autocomplete", "off", "required", "", 3, "matAutocomplete"], ["countryAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select country", 1, "secondary-text"], ["type", "text", "matInput", "", "formControlName", "state", "autocomplete", "off", "required", "", 3, "matAutocomplete"], ["stateAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select state", 1, "secondary-text"], ["type", "text", "matInput", "", "formControlName", "city", "autocomplete", "off", "required", "", 3, "matAutocomplete"], ["cityAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select city", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "landmark", "maxlength", "50", "required", "", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter landmark", 1, "secondary-text"], ["fxFlex", "50", "color", "primary", 1, "example-margin", 3, "checked", "change"], ["toggleElement", ""], ["fxLayout", "row", "fxLayoutAlign", "start center", 2, "padding-top", "10px"], ["mat-raised-button", "", "type", "button", "color", "warn", 1, "mr-8", 3, "click"], [3, "value"]], template: function ViewDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewDialogComponent_Template_mat_icon_click_0_listener() { return ctx.closeActionPanel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "View Driver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "CPO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-autocomplete", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ViewDialogComponent_mat_option_14_Template, 2, 2, "mat-option", 10);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ViewDialogComponent_mat_error_21_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ViewDialogComponent_mat_error_28_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ViewDialogComponent_mat_error_29_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "settings_cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ViewDialogComponent_mat_error_37_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ViewDialogComponent_mat_error_38_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Address Line 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ViewDialogComponent_mat_error_45_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Address Line 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ViewDialogComponent_mat_error_53_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Pin Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ViewDialogComponent_Template_input_change_57_listener() { return ctx.getStateCountry(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "fiber_pin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, ViewDialogComponent_mat_error_60_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ViewDialogComponent_mat_error_61_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-autocomplete", 8, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, ViewDialogComponent_mat_option_69_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](70, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "location_city");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, ViewDialogComponent_mat_error_76_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-autocomplete", 8, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, ViewDialogComponent_mat_option_83_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](84, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-icon", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "location_city");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, ViewDialogComponent_mat_error_90_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-autocomplete", 8, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, ViewDialogComponent_mat_option_98_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](99, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-icon", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "location_city");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, ViewDialogComponent_mat_error_105_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Landmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-icon", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "emoji_flags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, ViewDialogComponent_mat_error_112_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-slide-toggle", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ViewDialogComponent_Template_mat_slide_toggle_change_114_listener($event) { return ctx.updateStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewDialogComponent_Template_button_click_118_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](82);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayCPO);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 28, ctx.filteredOptionsCPO));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("cpo").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("name").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("name").hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("mobile").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("mobile").hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("addressLine1").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("addressLine2").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("pincode").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("pincode").hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayCountry);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](70, 30, ctx.filteredOptionCountry));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("country").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](84, 32, ctx.filteredOptionState));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("state").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayCity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](99, 34, ctx.filteredOptionCity));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("city").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("landmark").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.status ? "Active" : "Inactive", " ");
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-dialog',
                templateUrl: './view-dialog.component.html',
                styleUrls: ['./view-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_4__["CountriesService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: app_shared_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_5__["DriverService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_7__["CpoService"] }]; }, { ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["toggleElement"]
        }] }); })();


/***/ }),

/***/ "G5iI":
/*!******************************************************!*\
  !*** ./src/app/main/driver/driver-routing.module.ts ***!
  \******************************************************/
/*! exports provided: DriverRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverRoutingModule", function() { return DriverRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _driver_crud_driver_crud_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./driver-crud/driver-crud.component */ "3Fb3");
/* harmony import */ var app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/interceptors/auth-gaurd */ "9gca");
/* harmony import */ var _driver_crud_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./driver-crud/routes */ "CQk/");







const routes = [
    {
        path: 'crud', component: _driver_crud_driver_crud_component__WEBPACK_IMPORTED_MODULE_2__["DriverCrudComponent"], canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], children: _driver_crud_routes__WEBPACK_IMPORTED_MODULE_4__["TABS_DEMO_ROUTES"]
    },
    {
        path: 'driverRfid',
        canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | app-main-driver-driver-rfid-driver-rfid-module */ "app-main-driver-driver-rfid-driver-rfid-module").then(__webpack_require__.bind(null, /*! app/main/driver/driver-rfid/driver-rfid.module */ "Fl+Z")).then(m => m.DriverRfidModule),
    },
];
class DriverRoutingModule {
}
DriverRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DriverRoutingModule });
DriverRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DriverRoutingModule_Factory(t) { return new (t || DriverRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DriverRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DriverRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "QtQ4":
/*!******************************************************!*\
  !*** ./src/app/shared/services/rfid/rfid.service.ts ***!
  \******************************************************/
/*! exports provided: RfidService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RfidService", function() { return RfidService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class RfidService {
    constructor(http) {
        this.http = http;
        this.apiUrl2 = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2}/rfid`;
    }
    create(params) {
        return this.http.post(`${this.apiUrl2}/crt`, params);
    }
    update(params) {
        return this.http.post(`${this.apiUrl2}/upd`, params);
    }
    createCpoRfidMapping(params) {
        return this.http.post(`${this.apiUrl2}/crtCpoRfidMapping`, params);
    }
    updatecpoRfidMapping(params) {
        return this.http.post(`${this.apiUrl2}/updCpoRfidMapping`, params);
    }
    getRFidnoById(id) {
        return this.http.get(`${this.apiUrl2}/gtRFidnoById/${id}`);
    }
    getAllRfid() {
        return this.http.get(`${this.apiUrl2}/gtRFids`);
    }
    delete(id, user_id) {
        return this.http.delete(`${this.apiUrl2}/dlt/${id}/${user_id}`);
    }
    unMapRFidCpoID(id, user_id) {
        return this.http.delete(`${this.apiUrl2}/unMapRFidCpoID/${id}/${user_id}`);
    }
    // getRFidsByCpoId(id){
    //   return this.http.get(`${this.apiUrl2}/getRFidsByCpoId/${id}`);
    // }
    getAllRFidsWithMappedCPOs(id) {
        return this.http.get(`${this.apiUrl2}/gtAllRFidsWithMappedCPOs/${id}`);
    }
    getCpoRFidMappingCW(id) {
        return this.http.get(`${this.apiUrl2}/gtCpoRFidMappingCW/${id}`);
    }
    getRFidsByCpoId(id) {
        return this.http.get(`${this.apiUrl2}/gtRFidsByCpoId/${id}`);
    }
    // Unmapped RFID
    getUnmappedRFIDByCpoId(cpo_id) {
        return this.http.get(`${this.apiUrl2}/unmappedRfidByCpoId/${cpo_id}`);
    }
    createRfidMappingwithDriver(params) {
        return this.http.post(`${this.apiUrl2}/rfdrivermapping/crt`, params);
    }
    // Get All RFID by login Id
    getAllRFIDbyCW(login_id, cpo_id) {
        if (cpo_id == null || cpo_id == undefined || cpo_id == "") {
            cpo_id = 0;
        }
        return this.http.get(`${this.apiUrl2}/gtRfidByClientwise/${login_id}/${cpo_id}`);
    }
    // ########################################################################################
    // ########################################################################################
    // ########################################################################################
    getRechargeLogsbyCCSW(login_id, cpo_id) {
        // if(cpo_id == null || cpo_id == undefined || cpo_id == "") {
        //   cpo_id = 0;
        // }
        return this.http.get(`${this.apiUrl2}/getRechargeLogsbyCCSW/${login_id}/${cpo_id}`);
    }
    updateBalance(params) {
        return this.http.post(`${this.apiUrl2}/updateBalance`, params);
    }
    getRechargeLogsByCpoId(params) {
        return this.http.post(`${this.apiUrl2}/getRechargeLogsByCpoId`, params);
    }
    getConsumptionLogsByCpoId(params) {
        return this.http.post(`${this.apiUrl2}/getConsumptionLogsByCpoId`, params);
    }
    // ########################################################################################
    // ########################################################################################
    // ########################################################################################
    unmappedRfIdDriver(map_id) {
        return this.http.delete(`${this.apiUrl2}/unmappedRfIdDriver/${map_id}`);
    }
}
RfidService.ɵfac = function RfidService_Factory(t) { return new (t || RfidService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RfidService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RfidService, factory: RfidService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RfidService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "R8kj":
/*!**********************************************!*\
  !*** ./src/app/main/driver/driver.module.ts ***!
  \**********************************************/
/*! exports provided: DriverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverModule", function() { return DriverModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/shared.module */ "PCNd");
/* harmony import */ var _driver_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./driver-routing.module */ "G5iI");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "9F6C");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create/create.component */ "kkQa");
/* harmony import */ var _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-dialog/view-dialog.component */ "ElkQ");
/* harmony import */ var _action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./action-dialog/action-dialog.component */ "b3ZU");
/* harmony import */ var _driver_crud_driver_crud_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./driver-crud/driver-crud.component */ "3Fb3");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fuse/shared.module */ "5HBU");











const COMPONENTS = [_driver_crud_driver_crud_component__WEBPACK_IMPORTED_MODULE_8__["DriverCrudComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]];
const COMPONENTS_DYNAMIC = [_action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ActionDialogComponent"], _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ViewDialogComponent"]];
class DriverModule {
}
DriverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DriverModule });
DriverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DriverModule_Factory(t) { return new (t || DriverModule)(); }, imports: [[
            app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _driver_routing_module__WEBPACK_IMPORTED_MODULE_3__["DriverRoutingModule"],
            _fuse_shared_module__WEBPACK_IMPORTED_MODULE_9__["FuseSharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DriverModule, { declarations: [_driver_crud_driver_crud_component__WEBPACK_IMPORTED_MODULE_8__["DriverCrudComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ActionDialogComponent"], _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ViewDialogComponent"]], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _driver_routing_module__WEBPACK_IMPORTED_MODULE_3__["DriverRoutingModule"],
        _fuse_shared_module__WEBPACK_IMPORTED_MODULE_9__["FuseSharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DriverModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [COMPONENTS, COMPONENTS_DYNAMIC],
                imports: [
                    app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _driver_routing_module__WEBPACK_IMPORTED_MODULE_3__["DriverRoutingModule"],
                    _fuse_shared_module__WEBPACK_IMPORTED_MODULE_9__["FuseSharedModule"]
                ],
                entryComponents: [COMPONENTS_DYNAMIC]
            }]
    }], null, null); })();


/***/ }),

/***/ "SHc3":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/driver/driver.service.ts ***!
  \**********************************************************/
/*! exports provided: DriverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverService", function() { return DriverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class DriverService {
    constructor(http) {
        this.http = http;
        this.apiUrl2 = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL2}/driver`;
    }
    create(params) {
        return this.http.post(`${this.apiUrl2}/crt/`, params);
    }
    update(params) {
        return this.http.post(`${this.apiUrl2}/upd/`, params);
    }
    getDriverById(login_id, cpo_id) {
        if (cpo_id == null || cpo_id == undefined || cpo_id == "") {
            cpo_id = 0;
        }
        return this.http.get(`${this.apiUrl2}/gtDriversCW/${login_id}/${cpo_id}`);
    }
    delete(driver_id) {
        return this.http.delete(`${this.apiUrl2}/dlt/${driver_id}`);
    }
    getUnmappedDriverByCpoId(cpo_id) {
        return this.http.get(`${this.apiUrl2}/gtDriverByCpoId/${cpo_id}`);
    }
}
DriverService.ɵfac = function DriverService_Factory(t) { return new (t || DriverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DriverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DriverService, factory: DriverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DriverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "b3ZU":
/*!**********************************************************************!*\
  !*** ./src/app/main/driver/action-dialog/action-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: ActionDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionDialogComponent", function() { return ActionDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/utils/message.constant */ "AgqY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/countries.service */ "XtJy");
/* harmony import */ var app_shared_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/driver/driver.service */ "SHc3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/cpo/cpo.service */ "k3ne");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "FKr1");























const _c0 = ["toggleElement"];
function ActionDialogComponent_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r22.name, " ");
} }
function ActionDialogComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select CPO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionDialogComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionDialogComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Special character are not allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionDialogComponent_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter mobile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionDialogComponent_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mobile number must be 10 digit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionDialogComponent_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter address line ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionDialogComponent_mat_error_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter address line ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionDialogComponent_mat_error_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter pin code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionDialogComponent_mat_error_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter valid pin code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionDialogComponent_mat_option_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r23.name, " ");
} }
function ActionDialogComponent_mat_error_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionDialogComponent_mat_option_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r24.name, " ");
} }
function ActionDialogComponent_mat_error_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select state ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionDialogComponent_mat_option_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r25.name, " ");
} }
function ActionDialogComponent_mat_error_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select city ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionDialogComponent_mat_error_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter landmark ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function autocompleteObjectValidator() {
    return (control) => {
        if (typeof control.value === 'string') {
            return { 'invalidAutocompleteObject': { value: control.value } };
        }
        return null; /* valid option selected */
    };
}
class ActionDialogComponent {
    constructor(fb, data, countryService, dialogRef, driverService, snackBar, cpoService) {
        this.fb = fb;
        this.data = data;
        this.countryService = countryService;
        this.dialogRef = dialogRef;
        this.driverService = driverService;
        this.snackBar = snackBar;
        this.cpoService = cpoService;
        this.isEditMode = false;
        this.status = false;
    }
    ngOnInit() {
        this.initialize();
    }
    initialize() {
        this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
        this.params = this.data;
        this.isEditMode = this.params.action == 'CREATE' ? false : true;
        this.form = this.fb.group({
            cpo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z0-9 ]*$/)]],
            addressLine1: [''],
            addressLine2: [''],
            landmark: [''],
            city: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            state: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            country: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            pincode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$')]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
            status: this.status == true ? 'Y' : 'N'
        });
        this.getCpos();
        this.getAllCountry();
        this.getAllState(this.params.data.country_id);
        this.getAllCity(this.params.data.state_id);
        if (this.isEditMode) {
            this.assignValues(this.params);
        }
    }
    getAllCountry() {
        this.countryService.getAllCountry().subscribe((data) => {
            //;
            this.countries = data;
            if (this.isEditMode) {
                //;
                const toSelect = this.countries.find(c => c.id == this.params.data.country_id);
                this.form.get('country').setValue(toSelect);
                this.filteredOptionCountry = this.form.controls.country.valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), 
                //tap(() => this.form.controls.chargingModel.setValue(toSelect)),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(name => name ? this._filterCountry(name) : this.countries));
            }
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
    getAllState(countryID) {
        this.countryService.getStateByCountry(countryID).subscribe((data) => {
            //;
            this.states = data;
            if (this.isEditMode) {
                //;
                const toSelect = this.states.find(c => c.id == this.params.data.state_id);
                this.form.get('state').setValue(toSelect);
                this.filteredOptionState = this.form.controls.state.valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), 
                //tap(() => this.form.controls.chargingModel.setValue(toSelect)),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(name => name ? this._filterState(name) : this.states));
            }
        }, (err) => {
        });
    }
    displayState(item) {
        return item && item.name ? item.name : '';
    }
    _filterState(name) {
        const filterValue = name.toLowerCase();
        return this.states.filter(option => option.name.toLowerCase().includes(filterValue));
    }
    getAllCity(stateID) {
        //this.getCitiesByStatesOnInit(state_id);
        this.countryService.getCityByState(stateID).subscribe((data) => {
            //;
            this.cities = data;
            if (this.isEditMode) {
                //;
                const toSelect = this.cities.find(c => c.id == this.params.data.city_id);
                this.form.get('city').setValue(toSelect);
                this.filteredOptionCity = this.form.controls.city.valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), 
                //tap(() => this.form.controls.chargingModel.setValue(toSelect)),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(name => name ? this._filterCity(name) : this.cities));
            }
        }, (err) => {
        });
    }
    displayCity(item) {
        return item && item.name ? item.name : '';
    }
    _filterCity(name) {
        const filterValue = name.toLowerCase();
        return this.cities.filter(option => option.name.toLowerCase().includes(filterValue));
    }
    assignValues(params) {
        // this.form.get('cpo').setValue(params.data.name);
        this.form.get('name').setValue(params.data.name);
        this.form.get('addressLine1').setValue(params.data.address1);
        this.form.get('addressLine2').setValue(params.data.address2);
        this.form.get('landmark').setValue(params.data.landmark);
        this.form.get('city').setValue(params.data.city_id);
        this.form.get('state').setValue(params.data.state_id);
        this.form.get('country').setValue(params.data.country_id);
        this.form.get('pincode').setValue(params.data.PIN);
        this.form.get('mobile').setValue(params.data.mobile);
        this.status = params.data.status == 'Y' ? true : false;
    }
    closeActionPanel() {
        this.dialogRef.close();
    }
    close() {
        this.dialogRef.close();
    }
    onYesClick() {
        if (this.form.valid) {
            let formValues = this.form.value;
            let params = {
                cpo_id: formValues.cpo.id,
                name: formValues.name,
                mobile: formValues.mobile,
                address1: formValues.addressLine1,
                address2: formValues.addressLine2,
                PIN: formValues.pincode,
                landmark: formValues.landmark,
                city_id: formValues.city.id,
                state_id: formValues.state.id,
                country_id: formValues.country.id,
                status: this.status == true ? 'Y' : 'N',
                created_by: this.localStorage.userId,
            };
            // tslint:disable-next-line: no-//
            if (this.isEditMode) {
                params.id = this.params.data.id,
                    params.modify_by = this.localStorage.userId;
            }
            else {
                params.created_by = this.localStorage.userId;
            }
            if (this.isEditMode) {
                this.driverService.update(params).subscribe((resp) => {
                    if (resp.status == true) {
                        this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].recordUpdateMessage, 'Dismiss', { duration: 5000 });
                        this.dialogRef.close();
                    }
                    else {
                        if (resp.err_code == "ERROR : ER_DUP_ENTRY") {
                            this.errorMsg = resp.message;
                            var index = this.errorMsg.lastIndexOf(" ");
                            this.splitted = this.errorMsg.substring(index + 1);
                            if (this.splitted == "'name'") {
                                this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].chargingStationDuplicate, 'Dismiss', { duration: 5000 });
                            }
                            if (this.splitted == "'mobile'") {
                                this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].mobileDuplicate, 'Dismiss', { duration: 5000 });
                            }
                        }
                        else {
                            this.snackBar.open(resp.message, 'Dismiss', { duration: 5000 });
                        }
                    }
                }, (err) => {
                    this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].errorMessage, 'Dismiss', { duration: 5000 });
                });
            }
            else {
                this.driverService.create(params).subscribe((data) => {
                    this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].chargerStationCreate, 'Dismiss', { duration: 5000 });
                    this.dialogRef.close();
                }, (err) => {
                    this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].errorMessage, 'Dismiss', { duration: 5000 });
                });
            }
            this.dialogRef.close(params);
        }
    }
    getCpos() {
        this.cpoService.getactivecposcw(this.localStorage.userId).subscribe((data) => {
            this.cpos = data;
            if (this.isEditMode) {
                const toSelect = this.cpos.find(c => c.id == this.params.data.cpo_id);
                this.form.get('cpo').setValue(toSelect);
                this.filteredOptionsCPO = this.form.controls.cpo.valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(name => name ? this._filterCPO(name) : this.cpos));
            }
        }, (err) => {
        });
    }
    _filterCPO(name) {
        const filterValue = name.toLowerCase();
        return this.cpos.filter(option => option.name.toLowerCase().includes(filterValue));
    }
    displayCPO(item) {
        return item && item.name ? item.name : '';
    }
    getStateCountry() {
        this.pin_code_id = this.form.value.pincode;
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
                    this.form.get('country').setValue(toSelect);
                    this.filteredOptionCountry = this.form.controls.country.valueChanges
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(name => name ? this._filterCountry(name) : this.countries));
                    //; 
                    this.country_id = data[0].country_id;
                    this.countryService.getStateByCountry(this.country_id).subscribe((statedata) => {
                        //this.form.reset();
                        this.states = statedata;
                        const toSelect = this.states.find(c => c.id == data[0].state_id);
                        this.form.get('state').setValue(toSelect);
                        this.filteredOptionState = this.form.controls.state.valueChanges
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(name => name ? this._filterState(name) : this.states));
                    }, (err) => {
                    });
                    //; 
                    this.state_id = data[0].state_id;
                    this.countryService.getCityByState(this.state_id).subscribe((Citydata) => {
                        //this.form.reset();
                        this.cities = Citydata;
                        //const toSelect = this.states.find(c => c.id == data[0].state_id);
                        // this.form.get('state').setValue(toSelect);
                        this.filteredOptionCity = this.form.controls.city.valueChanges
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(name => name ? this._filterCity(name) : this.cities));
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
        //this.form.get('pincode').setValue( "");
        this.form.get('state').setValue("");
        this.form.get('city').setValue("");
    }
    getStatesByCountry(state) {
        this.state_id = state.id;
        this.countryService.getStateByCountry(this.state_id).subscribe((statedata) => {
            //this.form.reset();
            this.states = statedata;
            // const toSelect = this.states.find(c => c.id == data[0].state_id);
            // this.form.get('state').setValue(toSelect);
            this.filteredOptionState = this.form.controls.state.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(name => name ? this._filterState(name) : this.states));
        }, (err) => {
        });
    }
    onStateChange(event) {
        this.getCitiesByStates(event);
        this.getCountryByState(event);
        this.form.get('city').setValue("");
        //this.form.get('pincode').setValue("");
    }
    onCityChange(event) {
        //this.form.get('pincode').setValue("");
    }
    getCitiesByStates(stateId) {
        this.state_id = stateId.id;
        this.countryService.getCityByState(this.state_id).subscribe((citiesdata) => {
            //this.form.reset();
            this.cities = citiesdata;
            // const toSelect = this.states.find(c => c.id == data[0].state_id);
            // this.form.get('state').setValue(toSelect);
            this.filteredOptionCity = this.form.controls.city.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(name => name ? this._filterCity(name) : this.cities));
        }, (err) => {
        });
    }
    getCountryByState(stateId) {
        this.state_id = stateId.id;
        this.countryService.getCountryByState(this.state_id).subscribe((countrydata) => {
            //this.form.reset();
            this.countries = countrydata;
            const toSelect = this.countries.find(c => c.id == countrydata[0].id);
            this.form.get('country').setValue(toSelect);
            this.filteredOptionCountry = this.form.controls.country.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(name => name ? this._filterCountry(name) : this.countries));
        }, (err) => {
        });
    }
    updateStatus(event) {
        this.status = event.checked;
        this.ref.checked = this.status;
    }
}
ActionDialogComponent.ɵfac = function ActionDialogComponent_Factory(t) { return new (t || ActionDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_5__["CountriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_6__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_8__["CpoService"])); };
ActionDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionDialogComponent, selectors: [["app-action-dialog"]], viewQuery: function ActionDialogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ref = _t.first);
    } }, decls: 122, vars: 37, consts: [["id", "dialog_action_close", "matTooltip", "Close window", 1, "material-icons-outlined", 2, "cursor", "pointer", "color", "white", 3, "click"], [1, "action_toolbar"], [2, "padding", "24px", "max-height", "32vw", "overflow", "auto"], ["id", "forms", "fxLayout", "column", 1, "page-layout", "simple", "fullwidth"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", "name", "form", 1, "mat-elevation-z4", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "50", 1, "pr-4"], ["type", "text", "matInput", "", "formControlName", "cpo", "required", "", 3, "matAutocomplete"], [3, "displayWith"], ["cpoAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 2, "display", "flex"], ["matSuffix", "", 1, "secondary-text"], ["matSuffix", "", "matTooltip", "Please enter CPO name", 1, "secondary-text"], [4, "ngIf"], ["matInput", "", "placeholder", "", "formControlName", "name", "maxlength", "200", "required", "", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter client name", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "mobile", "type", "number", "required", "", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter mobile", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "addressLine1", "required", "", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter address line", 1, "secondary-text"], ["fxLayout", "row ", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["matInput", "", "placeholder", "", "formControlName", "addressLine2", "required", "", "autocomplete", "off"], ["matInput", "", "placeholder", " ", "formControlName", "pincode", "type", "number", "autocomplete", "off", "required", "", 3, "change"], ["matSuffix", "", "matTooltip", "Please enter pin code", 1, "secondary-text"], ["fxLayout", "row ", "fxLayoutAlign", "start center ", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["type", "text", "matInput", "", "formControlName", "country", "autocomplete", "off", "required", "", 3, "matAutocomplete"], [3, "displayWith", "optionSelected"], ["countryAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select country", 1, "secondary-text"], ["type", "text", "matInput", "", "formControlName", "state", "autocomplete", "off", "required", "", 3, "matAutocomplete"], ["stateAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select state", 1, "secondary-text"], ["type", "text", "matInput", "", "formControlName", "city", "autocomplete", "off", "required", "", 3, "matAutocomplete"], ["cityAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select city", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "landmark", "maxlength", "50", "required", "", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter landmark", 1, "secondary-text"], ["fxFlex", "50", "color", "primary", 1, "example-margin", 3, "checked", "change"], ["toggleElement", ""], ["fxLayout", "row", "fxLayoutAlign", "start center", 2, "padding-top", "10px"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "mr-8", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "warn", 1, "mr-8", 3, "click"], [3, "value"]], template: function ActionDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionDialogComponent_Template_mat_icon_click_0_listener() { return ctx.closeActionPanel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Update Driver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "CPO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-autocomplete", 8, 9);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ActionDialogComponent_mat_error_28_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ActionDialogComponent_mat_error_29_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "settings_cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ActionDialogComponent_mat_error_37_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ActionDialogComponent_mat_error_38_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Address Line 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ActionDialogComponent_mat_error_45_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Address Line 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ActionDialogComponent_mat_error_53_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Pin Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ActionDialogComponent_Template_input_change_57_listener() { return ctx.getStateCountry(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "fiber_pin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, ActionDialogComponent_mat_error_60_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ActionDialogComponent_mat_error_61_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-autocomplete", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function ActionDialogComponent_Template_mat_autocomplete_optionSelected_67_listener($event) { return ctx.onCountryChange($event.option.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, ActionDialogComponent_mat_option_69_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](70, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "location_city");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, ActionDialogComponent_mat_error_76_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-autocomplete", 27, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function ActionDialogComponent_Template_mat_autocomplete_optionSelected_81_listener($event) { return ctx.onStateChange($event.option.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, ActionDialogComponent_mat_option_83_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](84, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-icon", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "location_city");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, ActionDialogComponent_mat_error_90_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-autocomplete", 27, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function ActionDialogComponent_Template_mat_autocomplete_optionSelected_96_listener($event) { return ctx.onCityChange($event.option.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, ActionDialogComponent_mat_option_98_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](99, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-icon", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "location_city");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, ActionDialogComponent_mat_error_105_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Landmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-icon", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "emoji_flags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, ActionDialogComponent_mat_error_112_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-slide-toggle", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ActionDialogComponent_Template_mat_slide_toggle_change_114_listener($event) { return ctx.updateStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionDialogComponent_Template_button_click_118_listener() { return ctx.onYesClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionDialogComponent_Template_button_click_120_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](82);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayCPO);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 29, ctx.filteredOptionsCPO));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("cpo").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("name").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("name").hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("mobile").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("mobile").hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("addressLine1").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("addressLine2").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("pincode").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("pincode").hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayCountry);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](70, 31, ctx.filteredOptionCountry));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("country").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](84, 33, ctx.filteredOptionState));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("state").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayCity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](99, 35, ctx.filteredOptionCity));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("city").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("landmark").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.status ? "Active" : "Inactive", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isEditMode ? "Save" : "Save");
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-action-dialog',
                templateUrl: './action-dialog.component.html',
                styleUrls: ['./action-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_5__["CountriesService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: app_shared_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_6__["DriverService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }, { type: app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_8__["CpoService"] }]; }, { ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["toggleElement"]
        }] }); })();


/***/ }),

/***/ "kkQa":
/*!********************************************************!*\
  !*** ./src/app/main/driver/create/create.component.ts ***!
  \********************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/utils/message.constant */ "AgqY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/master/master.service */ "auZQ");
/* harmony import */ var app_shared_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/driver/driver.service */ "SHc3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/countries.service */ "XtJy");
/* harmony import */ var app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/services/cpo/cpo.service */ "k3ne");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "FKr1");






















const _c0 = ["toggleElement"];
function CreateComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r22.name, " ");
} }
function CreateComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select CPO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Special character are not allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_mat_error_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter mobile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mobile number must be 10 digit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_mat_error_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter address line ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_mat_error_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter address line ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_mat_error_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter pin code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_mat_error_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter valid pin code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_mat_option_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r23.name, " ");
} }
function CreateComponent_mat_error_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_mat_option_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r24.name, " ");
} }
function CreateComponent_mat_error_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select state ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_mat_option_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r25.name, " ");
} }
function CreateComponent_mat_error_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select city ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_mat_error_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter landmark ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function autocompleteObjectValidator() {
    return (control) => {
        if (typeof control.value === 'string') {
            return { 'invalidAutocompleteObject': { value: control.value } };
        }
        return null; /* valid option selected */
    };
}
class CreateComponent {
    constructor(fb, masterService, driverService, snackBar, router, countryService, cpoService) {
        this.fb = fb;
        this.masterService = masterService;
        this.driverService = driverService;
        this.snackBar = snackBar;
        this.router = router;
        this.countryService = countryService;
        this.cpoService = cpoService;
        this.status = false;
    }
    ngOnInit() {
        this.initialize();
    }
    initialize() {
        this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
        this.form = this.fb.group({
            cpo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z0-9 ]*$/)]],
            addressLine1: [''],
            addressLine2: [''],
            landmark: [''],
            city: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            state: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            country: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            pincode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$')]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
            status: this.status == true ? 'Y' : 'N'
        });
        //this.getCountry();
        this.getAllCountry();
        this.getAllState();
        //this.getAllCity();
        this.getCpos();
    }
    getCpos() {
        this.cpoService.getactivecposcw(this.localStorage.userId).subscribe((data) => {
            this.cpos = data;
            this.filteredOptionsCPO = this.form.controls.cpo.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterCPO(name) : this.cpos));
        }, (err) => {
        });
    }
    _filterCPO(name) {
        const filterValue = name.toLowerCase();
        return this.cpos.filter(option => option.name.toLowerCase().includes(filterValue));
    }
    displayCPO(item) {
        return item && item.name ? item.name : '';
    }
    getAllCountry() {
        this.countryService.getAllCountry().subscribe((data) => {
            this.countries = data;
            this.filteredOptionCountry = this.form.controls.country.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterCountry(name) : this.countries));
        }, (err) => {
        });
    }
    getAllState() {
        this.countryService.getAllState().subscribe((stateData) => {
            this.states = stateData;
            this.filteredOptionState = this.form.controls.state.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterState(name) : this.states));
        }, (err) => {
        });
    }
    getAllCity() {
        this.countryService.getAllCities().subscribe((data) => {
            this.cities = data;
            this.filteredOptionCity = this.form.controls.city.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterCity(name) : this.cities));
        }, (err) => {
        });
    }
    onSubmit() {
        if (this.form.valid) {
            let formValues = this.form.value;
            ////
            let params = {
                cpo_id: formValues.cpo.id,
                name: formValues.name,
                mobile: formValues.mobile,
                address1: formValues.addressLine1,
                address2: formValues.addressLine2,
                PIN: formValues.pincode,
                landmark: formValues.landmark,
                city_id: formValues.city.id,
                state_id: formValues.state.id,
                country_id: formValues.country.id,
                status: this.status == true ? 'Y' : 'N',
                created_by: this.localStorage.userId,
            };
            this.driverService.create(params).subscribe((resp) => {
                if (resp.status == true) {
                    this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_2__["MessageConstant"].clientCreate, 'Dismiss', { duration: 5000 });
                    this.router.navigate(['/driverManagement/crud/list']);
                }
                else {
                    if (resp.err_code == "ERROR : ER_DUP_ENTRY") {
                        this.errorMsg = resp.message;
                        var index = this.errorMsg.lastIndexOf(" ");
                        this.splitted = this.errorMsg.substring(index + 1);
                        if (this.splitted == "'name'") {
                            this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_2__["MessageConstant"].clientDuplicate, 'Dismiss', { duration: 5000 });
                        }
                        if (this.splitted == "'mobile'") {
                            this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_2__["MessageConstant"].mobileDuplicateClient, 'Dismiss', { duration: 5000 });
                        }
                    }
                    else {
                        this.snackBar.open(resp.message, 'Dismiss', { duration: 5000 });
                    }
                }
            }, (err) => {
                ////
                this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_2__["MessageConstant"].errorMessage, 'Dismiss', { duration: 5000 });
            });
        }
        else {
            return;
        }
    }
    getErrorMessage(form) {
        return form.get('email').hasError('required')
            ? 'You must enter a value'
            : form.get('email').hasError('email')
                ? 'Not a valid email'
                : '';
    }
    getStateCountry() {
        this.pin_code_id = this.form.value.pincode;
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
                    this.form.get('country').setValue(toSelect);
                    this.filteredOptionCountry = this.form.controls.country.valueChanges
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterCountry(name) : this.countries));
                    //; 
                    this.country_id = data[0].country_id;
                    this.countryService.getStateByCountry(this.country_id).subscribe((statedata) => {
                        //this.form.reset();
                        this.states = statedata;
                        const toSelect = this.states.find(c => c.id == data[0].state_id);
                        this.form.get('state').setValue(toSelect);
                        this.filteredOptionState = this.form.controls.state.valueChanges
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
                        this.filteredOptionCity = this.form.controls.city.valueChanges
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterCity(name) : this.cities));
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
        //this.form.get('pincode').setValue( "");
        this.form.get('state').setValue("");
        this.form.get('city').setValue("");
    }
    getStatesByCountry(state) {
        this.state_id = state.id;
        this.countryService.getStateByCountry(this.state_id).subscribe((statedata) => {
            //this.form.reset();
            this.states = statedata;
            // const toSelect = this.states.find(c => c.id == data[0].state_id);
            // this.form.get('state').setValue(toSelect);
            this.filteredOptionState = this.form.controls.state.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterState(name) : this.states));
        }, (err) => {
        });
    }
    onStateChange(event) {
        this.getCitiesByStates(event);
        this.getCountryByState(event);
        this.form.get('city').setValue("");
        //this.form.get('pincode').setValue("");
    }
    onCityChange(event) {
        //this.form.get('pincode').setValue("");
    }
    getCitiesByStates(stateId) {
        this.state_id = stateId.id;
        this.countryService.getCityByState(this.state_id).subscribe((citiesdata) => {
            //this.form.reset();
            this.cities = citiesdata;
            // const toSelect = this.states.find(c => c.id == data[0].state_id);
            // this.form.get('state').setValue(toSelect);
            this.filteredOptionCity = this.form.controls.city.valueChanges
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
            this.form.get('country').setValue(toSelect);
            this.filteredOptionCountry = this.form.controls.country.valueChanges
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
    updateStatus(event) {
        this.status = event.checked;
        this.ref.checked = this.status;
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_4__["MasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_5__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_8__["CountriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_9__["CpoService"])); };
CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-create"]], viewQuery: function CreateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ref = _t.first);
    } }, decls: 117, vars: 36, consts: [["id", "forms", "fxLayout", "column", 1, "page-layout", "simple", "fullwidth"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", "name", "form", 1, "mat-card", "mat-elevation-z4", "p-24", 3, "formGroup", "submit", "keydown.enter"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "50", 1, "pr-4"], ["type", "text", "matInput", "", "formControlName", "cpo", "required", "", 3, "matAutocomplete"], [3, "displayWith"], ["cpoAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 2, "display", "flex"], ["matSuffix", "", 1, "secondary-text"], ["matSuffix", "", "matTooltip", "Please enter CPO name", 1, "secondary-text"], [4, "ngIf"], ["matInput", "", "placeholder", "", "formControlName", "name", "maxlength", "200", "required", "", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter client name", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "mobile", "type", "number", "required", "", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter mobile", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "addressLine1", "required", "", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter address line", 1, "secondary-text"], ["fxLayout", "row ", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["matInput", "", "placeholder", "", "formControlName", "addressLine2", "required", "", "autocomplete", "off"], ["matInput", "", "placeholder", " ", "formControlName", "pincode", "type", "number", "autocomplete", "off", "required", "", 3, "change"], ["matSuffix", "", "matTooltip", "Please enter pin code", 1, "secondary-text"], ["fxLayout", "row ", "fxLayoutAlign", "start center ", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["type", "text", "matInput", "", "formControlName", "country", "autocomplete", "off", "required", "", 3, "matAutocomplete"], [3, "displayWith", "optionSelected"], ["countryAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select country", 1, "secondary-text"], ["type", "text", "matInput", "", "formControlName", "state", "autocomplete", "off", "required", "", 3, "matAutocomplete"], ["stateAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select state", 1, "secondary-text"], ["type", "text", "matInput", "", "formControlName", "city", "autocomplete", "off", "required", "", 3, "matAutocomplete"], ["cityAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select city", 1, "secondary-text"], ["matInput", "", "placeholder", "", "formControlName", "landmark", "maxlength", "50", "required", "", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "Please enter landmark", 1, "secondary-text"], ["fxFlex", "50", "color", "primary", 1, "example-margin", 2, "height", "53px", 3, "checked", "change"], ["toggleElement", ""], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["mat-raised-button", "", "color", "primary", 1, "mr-8"], ["mat-raised-button", "", "color", "warn", "type", "button", "routerLink", "/clientManagement/crud/list", 1, "mr-8"], [3, "value"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CreateComponent_Template_form_submit_1_listener() { return ctx.onSubmit(); })("keydown.enter", function CreateComponent_Template_form_keydown_enter_1_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "CPO");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Name");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "settings_cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CreateComponent_mat_error_32_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CreateComponent_mat_error_33_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Address Line 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, CreateComponent_mat_error_40_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Address Line 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, CreateComponent_mat_error_48_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Pin Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateComponent_Template_input_change_52_listener() { return ctx.getStateCountry(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "fiber_pin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, CreateComponent_mat_error_55_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, CreateComponent_mat_error_56_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-autocomplete", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function CreateComponent_Template_mat_autocomplete_optionSelected_62_listener($event) { return ctx.onCountryChange($event.option.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, CreateComponent_mat_option_64_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "location_city");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, CreateComponent_mat_error_71_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-autocomplete", 24, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function CreateComponent_Template_mat_autocomplete_optionSelected_76_listener($event) { return ctx.onStateChange($event.option.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, CreateComponent_mat_option_78_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](79, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "location_city");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, CreateComponent_mat_error_85_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-autocomplete", 24, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function CreateComponent_Template_mat_autocomplete_optionSelected_91_listener($event) { return ctx.onCityChange($event.option.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, CreateComponent_mat_option_93_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](94, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-icon", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "location_city");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, CreateComponent_mat_error_100_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Landmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-icon", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "emoji_flags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, CreateComponent_mat_error_107_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "mat-slide-toggle", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateComponent_Template_mat_slide_toggle_change_109_listener($event) { return ctx.updateStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](63);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](77);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayCPO);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 28, ctx.filteredOptionsCPO));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("cpo").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("name").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("name").hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("mobile").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("mobile").hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("addressLine1").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("addressLine2").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("pincode").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("pincode").hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayCountry);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](65, 30, ctx.filteredOptionCountry));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("country").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](79, 32, ctx.filteredOptionState));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("state").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayCity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](94, 34, ctx.filteredOptionCity));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("city").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("landmark").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.status ? "Active" : "Inactive", " ");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create',
                templateUrl: './create.component.html',
                styleUrls: ['./create.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_4__["MasterService"] }, { type: app_shared_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_5__["DriverService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_8__["CountriesService"] }, { type: app_shared_services_cpo_cpo_service__WEBPACK_IMPORTED_MODULE_9__["CpoService"] }]; }, { ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["toggleElement"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=app-main-driver-driver-module-es2015.js.map