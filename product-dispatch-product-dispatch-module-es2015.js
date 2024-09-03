(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-dispatch-product-dispatch-module"],{

/***/ "BvKb":
/*!********************************************************************************************!*\
  !*** ./src/app/main/asset/charger/product-dispatch/add-nickname/add-nickname.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AddNicknameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNicknameComponent", function() { return AddNicknameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/utils/message.constant */ "AgqY");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/animations */ "PVWW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var app_shared_services_charger_charger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/charger/charger.service */ "izXn");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/countries.service */ "XtJy");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






















const _c0 = ["toggleElement"];
const _c1 = ["toggleChargerAsElement"];
function AddNicknameComponent_mat_chip_9_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddNicknameComponent_mat_chip_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function AddNicknameComponent_mat_chip_9_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r2 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.removeSerial(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddNicknameComponent_mat_chip_9_mat_icon_2_Template, 2, 0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", ctx_r0.selectable)("removable", ctx_r0.removable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r1 == null ? null : option_r1.serial_no, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.removable);
} }
function autocompleteObjectValidator() {
    return (control) => {
        if (typeof control.value === 'string') {
            return { 'invalidAutocompleteObject': { value: control.value } };
        }
        return null; /* valid option selected */
    };
}
class AddNicknameComponent {
    constructor(fb, chargerService, snackBar, datePipe, dialogRef, data, countryService) {
        this.fb = fb;
        this.chargerService = chargerService;
        this.snackBar = snackBar;
        this.datePipe = datePipe;
        this.dialogRef = dialogRef;
        this.data = data;
        this.countryService = countryService;
        this.isEditMode = true;
        this.status = false;
        this.maxDate = new Date();
        this.chargerAs = false;
        this.removable = true;
    }
    ngOnInit() {
        this.initialize();
    }
    initialize() {
        this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
        this.params = this.data;
        this.isEditMode = this.params.action == 'CREATE' ? false : true;
        this.form = this.fb.group({
            nickname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        if (this.isEditMode) {
            this.assignValues(this.params);
        }
        //this.getCountry();
    }
    close() {
        this.dialogRef.close();
    }
    closeActionPanel() {
        this.dialogRef.close();
    }
    onYesClick() {
        if (this.form.valid) {
            if (this.selectedCharger.length > 0) {
                let formValues = this.form.value;
                const params = {
                    data: this.selectedCharger.map(v => ({ id: v.id, nick_name: formValues.nick_name })),
                };
                // tslint:disable-next-line: no-//
                if (this.isEditMode) {
                    params.loginid = this.localStorage.userId;
                    params.updatedby = this.localStorage.userId;
                }
                if (this.isEditMode) {
                    this.chargerService.updateNickName(params).subscribe((data) => {
                        this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].recordUpdateMessage, 'Dismiss', { duration: 5000 });
                        this.dialogRef.close();
                    }, (err) => {
                        this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].errorMessage, 'Dismiss', { duration: 5000 });
                    });
                }
                this.dialogRef.close(params);
            }
            else {
                this.snackBar.open("No charger is selected to add nickname", 'Dismiss', { duration: 5000 });
            }
        }
    }
    getErrorMessage(form) {
        return form.get('email').hasError('required')
            ? 'You must enter a value'
            : form.get('email').hasError('email')
                ? 'Not a valid email'
                : '';
    }
    assignValues(params) {
        this.selectedCharger = params.data;
    }
    updateStatus(event) {
        this.status = event.checked;
        this.ref.checked = this.status;
    }
    updateChargerAsStatus(event) {
        this.chargerAs = event.checked;
        this.chargerAsRef.checked = this.chargerAs;
    }
    removeSerial(i) {
        this.selectedCharger.splice(i, 1);
    }
}
AddNicknameComponent.ɵfac = function AddNicknameComponent_Factory(t) { return new (t || AddNicknameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_charger_charger_service__WEBPACK_IMPORTED_MODULE_6__["ChargerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_8__["CountriesService"])); };
AddNicknameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddNicknameComponent, selectors: [["app-add-nickname"]], viewQuery: function AddNicknameComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ref = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chargerAsRef = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])], decls: 22, vars: 3, consts: [["id", "dialog_action_close", "matTooltip", "Close window", 1, "material-icons-outlined", 2, "cursor", "pointer", "color", "white", 3, "click"], [1, "action_toolbar"], [2, "padding", "24px", "max-height", "22vw", "overflow", "auto"], ["id", "forms", "fxLayout", "column", 1, "page-layout", "simple", "fullwidth"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", "name", "form", 1, "mat-elevation-z4", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto", 2, "display", "block  !important", "padding-top", "10px", "width", "100%"], ["aria-label", "Fish selection"], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto", 2, "margin-top", "2rem"], ["appearance", "outline", "fxFlex", "33", 1, "pr-4"], ["type", "text", "matInput", "", "formControlName", "nickname", "autocomplete", "off"], ["matSuffix", "", "matTooltip", "nickname", 1, "secondary-text"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["mat-raised-button", "", "color", "primary", 1, "mr-8", 3, "click"], ["mat-raised-button", "", "color", "warn", 1, "mr-8", 3, "click"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""]], template: function AddNicknameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddNicknameComponent_Template_mat_icon_click_0_listener() { return ctx.closeActionPanel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sales Dispatch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-chip-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddNicknameComponent_mat_chip_9_Template, 3, 4, "mat-chip", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add Nickname ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddNicknameComponent_Template_button_click_18_listener() { return ctx.onYesClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddNicknameComponent_Template_button_click_20_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedCharger);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isEditMode ? "Save" : "Save", "");
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatSuffix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChip"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipRemove"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtbmlja25hbWUuY29tcG9uZW50LnNjc3MifQ== */"], encapsulation: 2, data: { animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddNicknameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-nickname',
                templateUrl: './add-nickname.component.html',
                styleUrls: ['./add-nickname.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: app_shared_services_charger_charger_service__WEBPACK_IMPORTED_MODULE_6__["ChargerService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_8__["CountriesService"] }]; }, { ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["toggleElement"]
        }], chargerAsRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["toggleChargerAsElement"]
        }] }); })();


/***/ }),

/***/ "IkzP":
/*!*************************************************************************************!*\
  !*** ./src/app/main/asset/charger/product-dispatch/product-dispatch-crud/routes.ts ***!
  \*************************************************************************************/
/*! exports provided: TABS_DEMO_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABS_DEMO_ROUTES", function() { return TABS_DEMO_ROUTES; });
/* harmony import */ var app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/interceptors/auth-gaurd */ "9gca");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create/create.component */ "JZaj");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list/list.component */ "pzpv");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



const TABS_DEMO_ROUTES = [
    { path: 'create', component: _create_create_component__WEBPACK_IMPORTED_MODULE_1__["CreateComponent"], canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] },
    { path: 'list', component: _list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"], canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] },
    { path: '', redirectTo: 'list', pathMatch: 'full' },
];


/***/ }),

/***/ "JZaj":
/*!********************************************************************************!*\
  !*** ./src/app/main/asset/charger/product-dispatch/create/create.component.ts ***!
  \********************************************************************************/
/*! exports provided: Charger, SerialData, CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Charger", function() { return Charger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerialData", function() { return SerialData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/utils/message.constant */ "AgqY");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/animations */ "PVWW");
/* harmony import */ var app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/services/master/master.service */ "auZQ");
/* harmony import */ var app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/services/excel.service */ "/nqz");
/* harmony import */ var app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/services/client/client.service */ "LKWI");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var app_shared_services_charger_charger_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/shared/services/charger/charger.service */ "izXn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/shared/services/countries.service */ "XtJy");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");


































const _c0 = ["toggleElement"];
const _c1 = ["toggleChargerAsElement"];
const _c2 = ["serialInput"];
const _c3 = ["auto"];
const _c4 = ["importPaginator"];
const _c5 = ["mappedPaginator"];
const _c6 = ["unmappedPaginator"];
function CreateComponent_mat_radio_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const op_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", op_r13.name, "");
} }
function CreateComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r14.name, " ");
} }
function CreateComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select client");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter expiry date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_div_46_mat_chip_3_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_div_46_mat_chip_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function CreateComponent_div_46_mat_chip_3_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const i_r17 = ctx.index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.removeSerial(i_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateComponent_div_46_mat_chip_3_mat_icon_2_Template, 2, 0, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", ctx_r15.selectable)("removable", ctx_r15.removable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r16 == null ? null : option_r16.serial_no, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.removable);
} }
function CreateComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-chip-list", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateComponent_div_46_mat_chip_3_Template, 3, 4, "mat-chip", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.selectedSerialNo);
} }
function CreateComponent_div_47_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_div_47_mat_option_14_Template_mat_option_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.selectionMade($event, _r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r25.serial_no, " ");
} }
function CreateComponent_div_47_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select part number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Serial No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "help");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-autocomplete", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function CreateComponent_div_47_Template_mat_autocomplete_optionSelected_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.onSerialSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CreateComponent_div_47_mat_option_14_Template, 2, 2, "mat-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CreateComponent_div_47_mat_error_16_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r10.displaySerial);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 4, ctx_r10.filteredOptionSerial));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.form.get("serialNumber").invalid);
} }
function CreateComponent_div_48_div_13_mat_header_cell_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " SERIAL No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_div_48_div_13_mat_cell_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r38.serial_no);
} }
function CreateComponent_div_48_div_13_mat_header_row_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row", 69);
} }
function CreateComponent_div_48_div_13_mat_row_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row", 70);
} }
const _c7 = function () { return [10, 30, 50, 100]; };
function CreateComponent_div_48_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-table", 58, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateComponent_div_48_div_13_mat_header_cell_4_Template, 2, 0, "mat-header-cell", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateComponent_div_48_div_13_mat_cell_5_Template, 2, 1, "mat-cell", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreateComponent_div_48_div_13_mat_header_row_6_Template, 1, 0, "mat-header-row", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CreateComponent_div_48_div_13_mat_row_7_Template, 1, 0, "mat-row", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-paginator", 65, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r31.dataSource)("cdkTable", _r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r31.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r31.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", 5)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c7));
} }
function CreateComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Click hear to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "download file ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "format (CSV only)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_div_48_Template_input_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return _r30.value = null; })("change", function CreateComponent_div_48_Template_input_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.uploadedFile($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_div_48_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return _r30.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Browse File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CreateComponent_div_48_div_13_Template, 10, 7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.uploadExcelTable);
} }
function CreateComponent_div_49_mat_header_cell_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " SERIAL No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_div_49_mat_cell_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r60.serial_no);
} }
function CreateComponent_div_49_mat_header_cell_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remarks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_div_49_mat_cell_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r61.remarks);
} }
function CreateComponent_div_49_mat_header_row_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row", 69);
} }
function CreateComponent_div_49_mat_header_row_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row", 70);
} }
function CreateComponent_div_49_mat_header_cell_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " SERIAL No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_div_49_mat_cell_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r63.serial_no);
} }
function CreateComponent_div_49_mat_header_cell_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remarks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_div_49_mat_cell_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r64.remarks);
} }
function CreateComponent_div_49_mat_header_row_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row", 69);
} }
function CreateComponent_div_49_mat_header_row_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row", 70);
} }
function CreateComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Charger Mapped");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_div_49_Template_img_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r66.mappedTableExport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-table", 78, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CreateComponent_div_49_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CreateComponent_div_49_mat_cell_13_Template, 2, 1, "mat-cell", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CreateComponent_div_49_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CreateComponent_div_49_mat_cell_16_Template, 2, 1, "mat-cell", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CreateComponent_div_49_mat_header_row_17_Template, 1, 0, "mat-header-row", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CreateComponent_div_49_mat_header_row_18_Template, 1, 0, "mat-header-row", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-paginator", 65, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Charger not Mapped");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_div_49_Template_img_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.unmappedTableExport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-table", 78, 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CreateComponent_div_49_mat_header_cell_31_Template, 2, 0, "mat-header-cell", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CreateComponent_div_49_mat_cell_32_Template, 2, 1, "mat-cell", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](33, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, CreateComponent_div_49_mat_header_cell_34_Template, 2, 0, "mat-header-cell", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CreateComponent_div_49_mat_cell_35_Template, 2, 1, "mat-cell", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, CreateComponent_div_49_mat_header_row_36_Template, 1, 0, "mat-header-row", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, CreateComponent_div_49_mat_header_row_37_Template, 1, 0, "mat-header-row", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "mat-paginator", 65, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r12.mappedDataSource)("cdkTable", _r44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r12.mappedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r12.mappedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", 5)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r12.unmappedDataSource)("cdkTable", _r52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r12.unmappedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r12.unmappedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", 5)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c7));
} }
const _c8 = function () { return { standalone: true }; };
function autocompleteObjectValidator() {
    return (control) => {
        if (typeof control.value === 'string') {
            return { 'invalidAutocompleteObject': { value: control.value } };
        }
        return null; /* valid option selected */
    };
}
class Charger {
}
class SerialData {
    constructor() {
        //SERIAL_No: string;
        this.serial_no = "";
        this.remarks = "";
    }
}
class CreateComponent {
    constructor(fb, masterService, excelSrv, clientService, snackBar, chargerService, router, countryService, datePipe, cdr) {
        this.fb = fb;
        this.masterService = masterService;
        this.excelSrv = excelSrv;
        this.clientService = clientService;
        this.snackBar = snackBar;
        this.chargerService = chargerService;
        this.router = router;
        this.countryService = countryService;
        this.datePipe = datePipe;
        this.cdr = cdr;
        this.status = false;
        this.chargerAs = false;
        this.UserInputType = [
            { "name": "Table View", ID: "D1" },
            { "name": "Upload CSV", ID: "D2" }
        ];
        this.selectedInputType = this.UserInputType[0].name;
        this.totalSerial = [];
        this.displayedColumns = ['serial_no'];
        this.mappedColumns = ['serial_no', 'remarks'];
        this.unmappedColumns = ['serial_no', 'remarks'];
        this.excelSerial = [];
        this.maxDate = new Date();
        this.uploadExcelTable = false;
        this.importSerialNo = [];
        this.selectedChargerSerial = [];
        this.chipSelectedSerialNo = [];
        this.allowFreeTextAddEngineer = false;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["COMMA"]];
        this.validSerialNo = [];
        this.selectedSerialNo = [];
        this.response_mapped = [];
        this.response_unmapped = [];
        this.returnDataStatus = false;
        this.removable = true;
    }
    ngOnInit() {
        this.initialize();
    }
    initialize() {
        this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
        this.form = this.fb.group({
            client: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            serialNumber: [''],
            dispatch_date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            status: this.status == true ? 'Y' : 'N',
            chargerAs: this.chargerAs == true ? 0 : 1
        });
        //this.getCountry();
        this.getClients();
        this.getSerialNo();
        //this.getAllCity();
    }
    // ngAfterViewInit() {
    //   this.dataSource.paginator = this.paginator
    //   this.mappedDataSource.paginator = this.mappedPaginator;
    //   this.unmappedDataSource.paginator = this.unmappedPaginator;
    // }
    createSerial() {
        return this.fb.group({
            serialNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, autocompleteObjectValidator()]],
        });
    }
    getSerialNo() {
        this.chargerService.getPlantChargers().subscribe((data) => {
            if (data != null) {
                this.chargerSerials = data;
                this.chargerSerialsOrg = [...this.chargerSerials];
                this.filteredOptionSerial = this.form.controls.serialNumber.valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => typeof value === 'string' ? value : value.serial_no), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(serial_no => serial_no ? this._filterSerial(serial_no) : this.chargerSerials));
            }
        }, (err) => {
        });
    }
    getClients() {
        this.clientService.getActiveClientsCW(this.localStorage.userId).subscribe((data) => {
            if (data != null) {
                this.clients = data;
                this.filteredOptionsClient = this.form.controls.client.valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(name => name ? this._filterClientModels(name) : this.clients));
            }
        }, (err) => {
        });
    }
    displaySerial(item) {
        return item && item.serial_no ? item.serial_no : '';
    }
    _filterSerial(name) {
        const filterValue = name.toLowerCase();
        this.chargerSerials = this.resetChrgerList();
        return this.chargerSerials.filter(option => option.serial_no.toLowerCase().includes(filterValue));
    }
    resetChrgerList() {
        var chargerSerials = [];
        if (this.selectedSerialNo != undefined && this.selectedSerialNo.length > 0) {
            var isExist = true;
            for (var k = 0; k < this.chargerSerialsOrg.length; k++) {
                var serialNo = this.chargerSerialsOrg[k];
                isExist = false;
                for (var i = 0; i < this.selectedSerialNo.length; i++) {
                    var selectedSerialNo = this.selectedSerialNo[i];
                    if (selectedSerialNo.serial_no == serialNo.serial_no) {
                        isExist = true;
                    }
                }
                if (!isExist) {
                    chargerSerials.push(serialNo);
                }
            }
        }
        else {
            chargerSerials = [...this.chargerSerialsOrg];
        }
        return chargerSerials;
    }
    displayClient(item) {
        return item && item.name ? item.name : '';
    }
    _filterClientModels(name) {
        const filterValue = name.toLowerCase();
        return this.clients.filter(option => option.name.toLowerCase().includes(filterValue));
    }
    onSerialSelected(event) {
        this.selectedSerialNo.push(event.option.value);
        //this.form.controls['serialNumber'].setValue('');
        this.form.get('serialNumber').setValue('');
        this.chargerSerials = this.resetChrgerList();
        this.unitType += 1;
        this.filteredOptionSerial = this.form.controls.serialNumber.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => typeof value === 'string' ? value : value.serial_no), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(serial_no => serial_no ? this._filterSerial(serial_no) : this.chargerSerials));
    }
    onSubmit(formDirective) {
        if (this.form.valid) {
            let formValues = this.form.value;
            if (this.selectedSerialNo.length == 0) {
                this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].serialBoxEmpty, 'Dismiss', { duration: 5000 });
            }
            else {
                let params = {
                    client_id: formValues.client.id,
                    sub_client_id: "12",
                    dispatch_status: "Y",
                    dispatch_date: this.datePipe.transform(formValues.dispatch_date, "yyyy-MM-dd"),
                    charger_data: this.selectedSerialNo.map(v => ({ id: v.id, serial_no: v.serial_no })),
                    status: this.status == true ? 'Y' : 'N',
                    is_private: this.chargerAs == true ? 1 : 0,
                    created_by: this.localStorage.userId,
                    dispatch_by: this.localStorage.userId
                };
                this.chargerService.getProductDispatch(params).subscribe((data) => {
                    if (data.status = true) {
                        this.returnDataStatus = true;
                        this.selectedSerialNo = [];
                        this.getClients();
                        this.response_mapped = data.data[0].chargers_mapped;
                        this.response_unmapped = data.data[0].chargers_not_mapped;
                        formDirective.resetForm();
                        this.form.reset();
                        this.form.markAsPristine();
                    }
                    if (this.response_mapped.length < 0) {
                    }
                    else {
                        this.cdr.detectChanges();
                        this.mappedDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.response_mapped);
                        this.mappedDataSource.paginator = this.mappedPaginator;
                    }
                    if (this.response_unmapped.length < 0) {
                    }
                    else {
                        this.cdr.detectChanges();
                        this.unmappedDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.response_unmapped);
                        this.unmappedDataSource.paginator = this.unmappedPaginator;
                    }
                    this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].salesDispatch, 'Dismiss', { duration: 5000 });
                }, (err) => {
                    this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_3__["MessageConstant"].errorMessage, 'Dismiss', { duration: 5000 });
                });
            }
        }
        else {
            return;
        }
    }
    uploadedFile(evt) {
        let target = (evt.target);
        if (target.files.length !== 1)
            throw new Error('Cannot use multiple files');
        this.selectedSerialNo = [];
        let reader = new FileReader();
        reader.onload = (e) => {
            let bstr = e.target.result;
            let data = this.excelSrv.importFromFile(bstr);
            let header = Object.getOwnPropertyNames(new SerialData());
            let importedData = data.slice(1);
            this.importSerialNo = importedData.map(arr => {
                let obj = {};
                for (let i = 0; i < header.length; i++) {
                    const k = header[i];
                    obj[k] = arr[i];
                }
                return obj;
            });
            // let tempSerialArray = [];
            //  this.importSerialNo.map(element => {
            //   element.Tag = "Unverified";
            //  });
            for (var i = 0; i < this.importSerialNo.length; i++) {
                for (var j = 0; j < this.chargerSerials.length; j++) {
                    if (this.importSerialNo[i].serial_no == this.chargerSerials[j].serial_no) {
                        this.selectedSerialNo.push(this.chargerSerials[j]);
                    }
                }
            }
            // this.selectedSerialNo.push(this.importSerialNo);
            this.uploadExcelTable = true;
            this.cdr.detectChanges();
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.selectedSerialNo);
            this.dataSource.paginator = this.importPaginator;
        };
        reader.readAsBinaryString(target.files[0]);
    }
    getErrorMessage(form) {
        return form.get('email').hasError('required')
            ? 'You must enter a value'
            : form.get('email').hasError('email')
                ? 'Not a valid email'
                : '';
    }
    updateStatus(event) {
        this.status = event.checked;
        this.ref.checked = this.status;
    }
    updateChargerAsStatus(event) {
        this.chargerAs = event.checked;
        this.chargerAsRef.checked = this.chargerAs;
    }
    removeSerial(i) {
        this.selectedSerialNo.splice(i, 1);
        this.chargerSerials = this.resetChrgerList();
        this.unitType - 1;
        this.filteredOptionSerial = this.form.controls.serialNumber.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => typeof value === 'string' ? value : value.serial_no), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(serial_no => serial_no ? this._filterSerial(serial_no) : this.chargerSerials));
    }
    selectionMade(event, trigger) {
        event.stopPropagation();
        trigger.openPanel();
    }
    mappedTableExport() {
        const workSheet = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].json_to_sheet(this.mappedDataSource.data);
        const workBook = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_append_sheet(workBook, workSheet, 'SheetName');
        xlsx__WEBPACK_IMPORTED_MODULE_4__["writeFile"](workBook, 'Mapped Charger.xlsx');
    }
    unmappedTableExport() {
        const workSheet = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].json_to_sheet(this.unmappedDataSource.data);
        const workBook = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_append_sheet(workBook, workSheet, 'SheetName');
        xlsx__WEBPACK_IMPORTED_MODULE_4__["writeFile"](workBook, 'UnMapped Charger.xlsx');
    }
    backForm() {
        //this.returnDataStatus= false;
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_9__["MasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_10__["ExcelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_11__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_charger_charger_service__WEBPACK_IMPORTED_MODULE_13__["ChargerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_15__["CountriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-create"]], viewQuery: function CreateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ref = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chargerAsRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.serialInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.matAutocomplete = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.importPaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mappedPaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.unmappedPaginator = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]])], decls: 55, vars: 23, consts: [["id", "forms", "fxLayout", "column", 1, "page-layout", "simple", "fullwidth"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", "name", "form", 1, "mat-card", "mat-elevation-z4", "p-24", 3, "formGroup", "submit"], ["formDirective", "ngForm"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["fxFlex", "100", 2, "padding-bottom", "20px"], ["name", "opList", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["style", "padding-right:10px", "name", "opList", 3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", "fxFlex", "50", 1, "pr-4"], ["type", "text", "matInput", "", "formControlName", "client", "autocomplete", "off", "required", "", 3, "matAutocomplete"], [3, "displayWith"], ["clientAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 2, "display", "flex"], ["matSuffix", "", 1, "secondary-text"], ["matSuffix", "", "matTooltip", "Please select client", 1, "secondary-text"], [4, "ngIf"], ["matInput", "", "formControlName", "dispatch_date", "disabled", "", 3, "max", "matDatepicker"], ["matTooltip", "Please enter expiry date", 1, "secondary-text", 2, "padding-top", "7px"], [3, "for"], ["disabled", "false"], ["dp3", ""], ["fxFlex", "10", 1, "pr-4"], ["color", "primary", 1, "example-margin", 3, "checked", "change"], ["toggleElement", ""], ["toggleChargerAsElement", ""], [2, "padding-top", "10px"], ["style", "display: block  !important;", 4, "ngIf"], ["style", "display: block  !important;padding-top: 10px;", 4, "ngIf"], ["fxLayout", "column", "style", "padding-top:30px;", 4, "ngIf"], ["class", "mat-card p-24 ", "fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", "style", "padding-top:20px", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "start center", 2, "padding-top", "20px"], ["mat-raised-button", "", "color", "primary", 1, "mr-8"], ["mat-raised-button", "", "color", "warn", "routerLink", "/assetManagement/chargerManagement/salesDispatch/crud/list", 1, "mr-8"], ["name", "opList", 2, "padding-right", "10px", 3, "value"], [3, "value"], [2, "display", "block  !important"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto", 2, "display", "block  !important", "padding-top", "10px", "width", "100%"], ["aria-label", "Fish selection"], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], [2, "display", "block  !important", "padding-top", "10px"], ["appearance", "outline", "fxFlex", "100", 1, "pr-4"], ["type", "text", "matInput", "", "formControlName", "serialNumber", "type", "search", "autocomplete", "off", 3, "matAutocomplete"], ["trigger", "matAutocompleteTrigger"], ["matSuffix", "", "matTooltip", "Please enter serial no", 1, "secondary-text"], [3, "displayWith", "optionSelected"], ["seialAuto", "matAutocomplete"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], ["fxLayout", "column", 2, "padding-top", "30px"], [2, "text-align", "right"], ["href", "assets/images/serialno.csv", "download", ""], [2, "text-align", "center"], ["hidden", "", "type", "file", "value", "", "id", "excel-upload", "accept", ".csv", "multiple", "false", 3, "click", "change"], ["fileInput", ""], ["mat-raised-button", "", "color", "primary", "type", "button", "aria-label", "Add file", 1, "add-file-button", 3, "click"], [3, "dataSource", "cdkTable"], ["importTable", ""], ["matColumnDef", "serial_no"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSize", "pageSizeOptions"], ["importPaginator", ""], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", 1, "mat-card", "p-24", 2, "padding-top", "20px"], ["fxLayout", "row wrap", "fxLayoutGap", "8px grid"], ["fxFlex", "50", "fxFlex.lt-sm", "100"], [2, "margin-bottom", "12px"], [2, "font-size", "16px"], ["src", "/assets/images/excel_icon.png", "width", "24px", "height", "auto", 2, "cursor", "pointer", 3, "click"], ["id", "mapTable"], [1, "mat-elevation-z2", 3, "dataSource", "cdkTable"], ["mappedTable", ""], ["matColumnDef", "remarks"], ["mappedPaginator", ""], ["unmappedTable", ""], ["unmappedPaginator", ""]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CreateComponent_Template_form_submit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "User Input \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-radio-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_mat_radio_group_ngModelChange_7_listener($event) { return ctx.selectedInputType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CreateComponent_mat_radio_button_8_Template, 2, 2, "mat-radio-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-autocomplete", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CreateComponent_mat_option_17_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CreateComponent_mat_error_24_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Dispatch Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "help ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "mat-datepicker-toggle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "mat-datepicker", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CreateComponent_mat_error_35_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-slide-toggle", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateComponent_Template_mat_slide_toggle_change_38_listener($event) { return ctx.updateStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-slide-toggle", 22, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateComponent_Template_mat_slide_toggle_change_42_listener($event) { return ctx.updateChargerAsStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, CreateComponent_div_46_Template, 4, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, CreateComponent_div_47_Template, 17, 6, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, CreateComponent_div_48_Template, 14, 1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, CreateComponent_div_49_Template, 40, 14, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedInputType)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.UserInputType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayClient);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 20, ctx.filteredOptionsClient));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("client").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx.maxDate)("matDatepicker", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("dispatch_date").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.status ? "Active" : "Inactive", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.chargerAs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.chargerAs ? "Private" : "Public", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedInputType == "Table View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedInputType == "Table View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedInputType == "Upload CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.returnDataStatus);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatLabel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocomplete"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepicker"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLink"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatError"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__["MatChip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__["MatChipRemove"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".upload_class {\n  text-align: center;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  border: 1px solid;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  align-items: center;\n  justify-content: center;\n  border-radius: 20px;\n  padding: 10px;\n  margin-right: 10px;\n}\n\n.chip {\n  display: inline-block;\n  padding: 0 25px;\n  height: 50px;\n  font-size: 16px;\n  line-height: 50px;\n  border-radius: 25px;\n  background-color: #f1f1f1;\n}\n\n.closebtn {\n  padding-left: 10px;\n  color: #999;\n  font-weight: bold;\n  font-size: 19px;\n  cursor: pointer;\n  vertical-align: middle;\n}\n\nul li {\n  width: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxjcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQUdKOztBQURBO0VBQ0Usc0JBQUE7QUFJRiIsImZpbGUiOiJjcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBsb2FkX2NsYXNze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5jaGlwIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAgMjVweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgfVxyXG4gIC5jbG9zZWJ0biB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG51bCBsaXtcclxuICB3aWR0aDogYXV0byAgIWltcG9ydGFudDtcclxufSJdfQ== */"], encapsulation: 2, data: { animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_8__["fuseAnimations"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create',
                templateUrl: './create.component.html',
                styleUrls: ['./create.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_8__["fuseAnimations"],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_9__["MasterService"] }, { type: app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_10__["ExcelService"] }, { type: app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_11__["ClientService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"] }, { type: app_shared_services_charger_charger_service__WEBPACK_IMPORTED_MODULE_13__["ChargerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"] }, { type: app_shared_services_countries_service__WEBPACK_IMPORTED_MODULE_15__["CountriesService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["toggleElement"]
        }], chargerAsRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["toggleChargerAsElement"]
        }], serialInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['serialInput']
        }], matAutocomplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['auto']
        }], importPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['importPaginator']
        }], mappedPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mappedPaginator']
        }], unmappedPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['unmappedPaginator']
        }] }); })();


/***/ }),

/***/ "T/OE":
/*!********************************************************************************!*\
  !*** ./src/app/main/asset/charger/product-dispatch/product-dispatch.module.ts ***!
  \********************************************************************************/
/*! exports provided: ProductDispatchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDispatchModule", function() { return ProductDispatchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ "PCNd");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create/create.component */ "JZaj");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "pzpv");
/* harmony import */ var _product_dispatch_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-dispatch-routing.module */ "sZqr");
/* harmony import */ var _action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action-dialog/action-dialog.component */ "5Mf5");
/* harmony import */ var _product_dispatch_crud_product_dispatch_crud_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-dispatch-crud/product-dispatch-crud.component */ "YAPP");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/shared.module */ "5HBU");
/* harmony import */ var _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-dialog/view-dialog.component */ "8iHA");
/* harmony import */ var _add_nickname_add_nickname_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-nickname/add-nickname.component */ "BvKb");
/* harmony import */ var _add_list_add_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-list/add-list.component */ "AOCH");
/* harmony import */ var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular-material-components/datetime-picker */ "n1FK");


// import { ClientCrudComponent } from './client-crud/client-crud.component';





//import {MatTableExporterModule} from 'mat-table-exporter';






const COMPONENTS = [_product_dispatch_crud_product_dispatch_crud_component__WEBPACK_IMPORTED_MODULE_6__["ProductDispatchCrudComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_2__["CreateComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"], _add_list_add_list_component__WEBPACK_IMPORTED_MODULE_10__["AddListComponent"]];
const COMPONENTS_DYNAMIC = [_action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ActionDialogComponent"], _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ViewDialogComponent"], _add_nickname_add_nickname_component__WEBPACK_IMPORTED_MODULE_9__["AddNicknameComponent"]];
class ProductDispatchModule {
}
ProductDispatchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductDispatchModule });
ProductDispatchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductDispatchModule_Factory(t) { return new (t || ProductDispatchModule)(); }, imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _product_dispatch_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProductDispatchRoutingModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_11__["NgxMatDatetimePickerModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"],
            _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_11__["NgxMatNativeDateModule"],
            _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_11__["NgxMatTimepickerModule"],]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductDispatchModule, { declarations: [_product_dispatch_crud_product_dispatch_crud_component__WEBPACK_IMPORTED_MODULE_6__["ProductDispatchCrudComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_2__["CreateComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"], _add_list_add_list_component__WEBPACK_IMPORTED_MODULE_10__["AddListComponent"], _action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ActionDialogComponent"], _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ViewDialogComponent"], _add_nickname_add_nickname_component__WEBPACK_IMPORTED_MODULE_9__["AddNicknameComponent"]], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _product_dispatch_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProductDispatchRoutingModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_11__["NgxMatDatetimePickerModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"],
        _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_11__["NgxMatNativeDateModule"],
        _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_11__["NgxMatTimepickerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDispatchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _product_dispatch_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProductDispatchRoutingModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_11__["NgxMatDatetimePickerModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"],
                    _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_11__["NgxMatNativeDateModule"],
                    _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_11__["NgxMatTimepickerModule"],],
                declarations: [COMPONENTS, COMPONENTS_DYNAMIC],
                entryComponents: [COMPONENTS_DYNAMIC]
            }]
    }], null, null); })();


/***/ }),

/***/ "YAPP":
/*!**************************************************************************************************************!*\
  !*** ./src/app/main/asset/charger/product-dispatch/product-dispatch-crud/product-dispatch-crud.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ProductDispatchCrudComponent, SunnyTabContentComponent, RainyTabContentComponent, FoggyTabContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDispatchCrudComponent", function() { return ProductDispatchCrudComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SunnyTabContentComponent", function() { return SunnyTabContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RainyTabContentComponent", function() { return RainyTabContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoggyTabContentComponent", function() { return FoggyTabContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ "PVWW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/utility/utility.service */ "xb2s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive */ "EwFO");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function ProductDispatchCrudComponent_a_8_Template(rf, ctx) { if (rf & 1) {
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
/**
 * @title Basic use of the tab group
 */
class ProductDispatchCrudComponent {
    constructor(router, cdr, _utilityService) {
        this.router = router;
        this.cdr = cdr;
        this._utilityService = _utilityService;
        this.tabLinks = [
        // { label: 'Sales Dispatch', link: 'list' },
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
            if (x.id === "chargerManagement") {
                this.objectData = x;
                if (this.objectData.children != undefined) {
                    this.objectData.children.filter((y) => {
                        if (y.id === "crud") {
                            this.objectChildData = y;
                            if (this.objectChildData.children != undefined) {
                                this.objectChildData.children.filter((z) => {
                                    let isDefaultRoutePermeted = false;
                                    if (z.id === "salesDispatch") {
                                        isDefaultRoutePermeted = true;
                                        this.tempLinks.push({ label: 'Sales Dispatch', link: 'list' });
                                    }
                                    if (z.id === "addNew") {
                                        this.tempLinks.push({ label: 'Add New', link: 'create' });
                                    }
                                    this.tabLinks = this.tempLinks;
                                    if (!isDefaultRoutePermeted) {
                                        this.router.navigate(['/assetManagement/chargerManagement/salesDispatch/crud/' + this.tempLinks[0].link]);
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });
    }
}
ProductDispatchCrudComponent.ɵfac = function ProductDispatchCrudComponent_Factory(t) { return new (t || ProductDispatchCrudComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"])); };
ProductDispatchCrudComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDispatchCrudComponent, selectors: [["app-product-dispatch-crud"]], decls: 10, vars: 6, consts: [[2, "display", "block", "width", "100%"], ["id", "", "fxLayout", "row", 1, "page-layout", "simple", "right-sidebar"], ["fusePerfectScrollbar", "", 1, "center"], ["fxLayout", "column", "fxLayoutAlign", "space-between", 1, "header", "accent", "px-24", "pt-16", "pb-0"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [1, "mat-display-1", "my-0", "my-sm-24", "welcome-message"], ["mat-tab-nav-bar", "", "aria-label", "weather navigation links"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active"], ["rla", "routerLinkActive"]], template: function ProductDispatchCrudComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductDispatchCrudComponent_a_8_Template, 3, 3, "a", 7);
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
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_5__["FusePerfectScrollbarDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabNav"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRpc3BhdGNoLWNydWQuY29tcG9uZW50LnNjc3MifQ== */"], encapsulation: 2, data: { animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDispatchCrudComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-dispatch-crud',
                templateUrl: './product-dispatch-crud.component.html',
                styleUrls: ['./product-dispatch-crud.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"] }]; }, null); })();
class SunnyTabContentComponent {
}
SunnyTabContentComponent.ɵfac = function SunnyTabContentComponent_Factory(t) { return new (t || SunnyTabContentComponent)(); };
SunnyTabContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SunnyTabContentComponent, selectors: [["sunny-routed-content"]], decls: 1, vars: 0, template: function SunnyTabContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Having a lot of light from the sun.");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SunnyTabContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sunny-routed-content',
                template: 'Having a lot of light from the sun.',
            }]
    }], null, null); })();
class RainyTabContentComponent {
}
RainyTabContentComponent.ɵfac = function RainyTabContentComponent_Factory(t) { return new (t || RainyTabContentComponent)(); };
RainyTabContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RainyTabContentComponent, selectors: [["rainy-routed-content"]], decls: 1, vars: 0, template: function RainyTabContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "A rainy period of time is one when it rains a lot");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RainyTabContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rainy-routed-content',
                template: 'A rainy period of time is one when it rains a lot',
            }]
    }], null, null); })();
class FoggyTabContentComponent {
}
FoggyTabContentComponent.ɵfac = function FoggyTabContentComponent_Factory(t) { return new (t || FoggyTabContentComponent)(); };
FoggyTabContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FoggyTabContentComponent, selectors: [["foggy-routed-content"]], decls: 1, vars: 0, template: function FoggyTabContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "If the weather is foggy, there is fog");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FoggyTabContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'foggy-routed-content',
                template: 'If the weather is foggy, there is fog',
            }]
    }], null, null); })();


/***/ }),

/***/ "pzpv":
/*!****************************************************************************!*\
  !*** ./src/app/main/asset/charger/product-dispatch/list/list.component.ts ***!
  \****************************************************************************/
/*! exports provided: Client, ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action-dialog/action-dialog.component */ "5Mf5");
/* harmony import */ var app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/utils/message.constant */ "AgqY");
/* harmony import */ var mat_table_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mat-table-filter */ "6Ugt");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/animations */ "PVWW");
/* harmony import */ var _fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/components/confirm-dialog/confirm-dialog.component */ "2nsM");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../view-dialog/view-dialog.component */ "8iHA");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var app_shared_services_charger_charger_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/shared/services/charger/charger.service */ "izXn");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_shared_services_charging_station_charging_station_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/shared/services/charging-station/charging-station.service */ "HZ2m");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");





































function ListComponent_mat_card_8_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r26.client_name, " ");
} }
function ListComponent_mat_card_8_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please select client ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_mat_card_8_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r27.cpo_name, " ");
} }
function ListComponent_mat_card_8_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please select CPO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_mat_card_8_mat_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r28.station_name, " ");
} }
function ListComponent_mat_card_8_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please select charging station ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_mat_card_8_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select Client");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-autocomplete", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function ListComponent_mat_card_8_Template_mat_autocomplete_optionSelected_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.onClientChange($event.option.value.client_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListComponent_mat_card_8_mat_option_10_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "expand_more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ListComponent_mat_card_8_mat_error_14_Template, 2, 0, "mat-error", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Select CPO's");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-autocomplete", 27, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function ListComponent_mat_card_8_Template_mat_autocomplete_optionSelected_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.onCPOChange($event.option.value.cpo_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ListComponent_mat_card_8_mat_option_21_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ListComponent_mat_card_8_mat_error_25_Template, 2, 0, "mat-error", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Select Charging Station");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-autocomplete", 27, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function ListComponent_mat_card_8_Template_mat_autocomplete_optionSelected_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.onStationChange($event.option.value.station_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ListComponent_mat_card_8_mat_option_32_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ListComponent_mat_card_8_mat_error_36_Template, 2, 0, "mat-error", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r0.displayCharClient);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 13, ctx_r0.filteredOptionsCharClient));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("charClient").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r0.displayCharCPO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 15, ctx_r0.filteredOptionsCharCPO));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("charCPO").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r0.displayCharStat);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 17, ctx_r0.filteredOptionsCharStat));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("charStat").invalid);
} }
function ListComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ListComponent_th_14_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return $event ? ctx_r33.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1.selection.hasValue() && ctx_r1.isAllSelected())("indeterminate", ctx_r1.selection.hasValue() && !ctx_r1.isAllSelected())("aria-label", ctx_r1.checkboxLabel());
} }
function ListComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_td_15_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function ListComponent_td_15_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const row_r35 = ctx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return $event ? ctx_r37.selection.toggle(row_r35) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r35 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r2.selection.isSelected(row_r35))("aria-label", ctx_r2.checkboxLabel(row_r35));
} }
function ListComponent_th_17_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Client Name \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_17_span_1_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.changeVisibility("clientSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_th_17_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_th_17_mat_form_field_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r43.filterEntity.client_name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_17_mat_form_field_2_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r45.changeVisibility("clientSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r40.filterEntity.client_name);
} }
function ListComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_th_17_span_1_Template, 4, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_th_17_mat_form_field_2_Template, 4, 1, "mat-form-field", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.clientSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.clientSearch);
} }
function ListComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r46.client_name, " ");
} }
function ListComponent_th_20_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_20_span_1_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r49.changeVisibility("nameSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_th_20_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_th_20_mat_form_field_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r51.filterEntity.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_20_mat_form_field_2_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r53.changeVisibility("nameSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r48.filterEntity.name);
} }
function ListComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_th_20_span_1_Template, 4, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_th_20_mat_form_field_2_Template, 4, 1, "mat-form-field", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.nameSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.nameSearch);
} }
function ListComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r54.name, " ");
} }
function ListComponent_th_23_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Serial No \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_23_span_1_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r57.changeVisibility("serialSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_th_23_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_th_23_mat_form_field_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r59.filterEntity.serial_no = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_23_mat_form_field_2_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r61.changeVisibility("serialSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r56.filterEntity.serial_no);
} }
function ListComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_th_23_span_1_Template, 4, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_th_23_mat_form_field_2_Template, 4, 1, "mat-form-field", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.serialSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.serialSearch);
} }
function ListComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r62.serial_no, " ");
} }
function ListComponent_th_26_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Model Name \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_26_span_1_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r65.changeVisibility("modelSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_th_26_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_th_26_mat_form_field_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r67.filterEntity.model_name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_26_mat_form_field_2_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r69.changeVisibility("modelSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r64.filterEntity.model_name);
} }
function ListComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_th_26_span_1_Template, 4, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_th_26_mat_form_field_2_Template, 4, 1, "mat-form-field", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.modelSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.modelSearch);
} }
function ListComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r70.model_name, " ");
} }
function ListComponent_th_29_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_29_span_1_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r73.changeVisibility("statusSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_th_29_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_th_29_mat_form_field_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r75.filterEntity.statusString = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_29_mat_form_field_2_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r77.changeVisibility("statusSearch", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "highlight_off ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r72.filterEntity.statusString);
} }
function ListComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_th_29_span_1_Template, 4, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_th_29_mat_form_field_2_Template, 4, 1, "mat-form-field", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.statusSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.statusSearch);
} }
function ListComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", row_r78.status == "Y" ? "green" : "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r78.statusString, " ");
} }
function ListComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_td_33_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const element_r79 = ctx.$implicit; const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.viewDialog("VIEW", element_r79); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_td_33_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const element_r79 = ctx.$implicit; const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r82.openDialog("EDIT", element_r79); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_td_33_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const element_r79 = ctx.$implicit; const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r83.delete(element_r79.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 60);
} }
function ListComponent_tr_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 61);
} }
const _c0 = function () { return [10, 30, 50, 100]; };
function autocompleteObjectValidator() {
    return (control) => {
        if (typeof control.value === 'string') {
            return { 'invalidAutocompleteObject': { value: control.value } };
        }
        return null; /* valid option selected */
    };
}
class Client {
}
/**
 * @title Data table with sorting, pagination, and filtering.
 */
class ListComponent {
    constructor(chargerService, dialog, snackBar, fb, chargingStationService) {
        this.chargerService = chargerService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.fb = fb;
        this.chargingStationService = chargingStationService;
        this.displayedColumns = ['client_name', 'name', 'serial_no', 'model_name', 'status', 'action'];
        this.head = [['Client Name', 'Name', 'Serial Number', 'Model Name', 'Status']];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_14__["SelectionModel"](true, []);
        this.clientSearch = false;
        this.nameSearch = false;
        this.serialSearch = false;
        this.modelSearch = false;
        this.statusSearch = false;
        this.form = this.fb.group({
            charClient: ['', [autocompleteObjectValidator()]],
            charCPO: ['', [autocompleteObjectValidator()]],
            charStat: ['', [autocompleteObjectValidator()]]
        });
    }
    ngOnInit() {
        this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
        this.clientCpoStaDetails = JSON.parse(localStorage.getItem('clientCpoStaDetails'));
        //this.getAllClientChargers(this.localStorage.userId);
        this.filterEntity = new Client();
        this.filterType = mat_table_filter__WEBPACK_IMPORTED_MODULE_6__["MatTableFilter"].ANYWHERE;
        this.getClients();
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    getAllClientChargers(id) {
        this.chargerService.getAllClientChargers(id).subscribe((data) => {
            if (data != null) {
                this.allChargers = data;
                for (var i = 0; i < this.allChargers.length; i++) {
                    if (this.allChargers[i].status == 'N') {
                        this.allChargers[i].statusString = 'Inactive';
                    }
                    else {
                        this.allChargers[i].statusString = 'Active';
                    }
                }
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.allChargers);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }
            else {
                this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].NoRecordFoundMessage, 'Dismiss', { duration: 3000 });
                return;
            }
        }, (err) => {
        });
    }
    delete(id) {
        this.confirmDialogRef = this.dialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__["FuseConfirmDialogComponent"], {
            disableClose: true
        });
        //this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.chargerService.deleteChargerFromClient(id, this.localStorage.userId).subscribe((data) => {
                    this.getAllClientChargers(this.localStorage.userId);
                    this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_5__["MessageConstant"].deleteMessage, 'Dismiss', { duration: 2000 });
                }, (err) => {
                });
            }
            this.confirmDialogRef = null;
        });
    }
    openDialog(action, data) {
        let params = {
            action: action,
            data: data
        };
        const dialogRef = this.dialog.open(_action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ActionDialogComponent"], {
            width: '800px',
            data: params,
            autoFocus: false,
            disableClose: true,
            panelClass: 'app-action-dialog',
        });
        dialogRef.afterClosed().subscribe(result => {
            // this.moderate(result);
            this.getAllClientChargers(this.localStorage.userId);
        });
    }
    changeVisibility(visibleOption, ev) {
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
    tableExport() {
        this.exportedData = [];
        for (let i = 0; i < this.dataSource.filteredData.length; i++) {
            var chargerModel = this.dataSource.filteredData[i];
            //this.exportedData.push({name: `name${i}`, description: `description${i}`,
            //statusString: `statusString${i}`});
            var data = {
                'Client Name': chargerModel.client_name, 'Name': chargerModel.name, 'Serial No': chargerModel.serial_no,
                'Model Name': chargerModel.model_name, 'Status': chargerModel.statusString
            };
            this.exportedData.push(data);
        }
        const workSheet = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].json_to_sheet(this.exportedData);
        const workBook = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].book_append_sheet(workBook, workSheet, 'sales disptch');
        xlsx__WEBPACK_IMPORTED_MODULE_9__["writeFile"](workBook, 'Sales Dispatch.xlsx');
    }
    viewDialog(action, data) {
        let params = {
            action: action,
            data: data
        };
        const dialogRef = this.dialog.open(_view_dialog_view_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ViewDialogComponent"], {
            width: '800px',
            data: params,
            panelClass: 'app-action-dialog',
            autoFocus: false,
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(result => {
            // this.moderate(result);
            this.getClients();
        });
    }
    pdfExport() {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_11__["jsPDF"]({ // set needed dimensions for any elemen 
        });
        this.exportedData = [];
        for (let i = 0; i < this.dataSource.filteredData.length; i++) {
            var chrger = this.dataSource.filteredData[i];
            //this.exportedData.push({name: `name${i}`, description: `description${i}`,
            //statusString: `statusString${i}`});
            var data = [chrger.client_name, chrger.name, chrger.serial_no, chrger.model_name, chrger.statusString];
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
                doc.text('Product Dispatch Report', doc.internal.pageSize.getWidth() / 2, 11, { align: 'center' });
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
        // below line for Download PDF document  
        doc.save('Product Dispatch Report.pdf');
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
    getClients() {
        this.clientList = JSON.parse(localStorage.getItem('ClientList'));
        if (this.localStorage.role_code != 'END') {
            if (this.clientList != null && this.clientList != undefined) {
                const toSelect = this.clientList[0];
                this.form.get('charClient').setValue(toSelect);
                this.getCPOByClient(toSelect.client_id);
            }
            this.filteredOptionsCharClient = this.form.controls.charClient.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(value => typeof value === 'string' ? value : value.client_name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(name => name ? this._filterCharClient(name) : this.clientList));
        }
    }
    _filterCharClient(name) {
        this.form.get('charCPO').setValue('');
        this.form.get('charStat').setValue('');
        const filterValue = name.toLowerCase();
        return this.clientList.filter(option => option.client_name.toLowerCase().includes(filterValue));
    }
    displayCharClient(item) {
        return item && item.client_name ? item.client_name : '';
    }
    onClientChange(client_id) {
        this.cpoList = [];
        this.stationList = [];
        this.form.get('charCPO').setValue("");
        this.form.get('charStat').setValue("");
        this.getCPOByClient(client_id);
    }
    getCPOByClient(client_id) {
        this.cpoList = JSON.parse(localStorage.getItem('CpoList'));
        if (this.localStorage.role_code != "END") {
            if (this.cpoList != null && this.cpoList != undefined) {
                const toSelect = this.cpoList.length == 1 ? this.cpoList[0] : this.cpoList[1];
                this.form.get('charCPO').setValue(toSelect);
                this.getStationByCPO(toSelect.cpo_id);
            }
            this.filteredOptionsCharCPO = this.form.controls.charCPO.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(value => typeof value === 'string' ? value : value.cpo_name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(name => name ? this._filterCharCPO(name) : this.cpoList));
        }
    }
    _filterCharCPO(name) {
        this.form.get('charStat').setValue('');
        const filterValue = name.toLowerCase();
        return this.cpoList.filter(option => option.cpo_name.toLowerCase().includes(filterValue));
    }
    displayCharCPO(item) {
        return item && item.cpo_name ? item.cpo_name : '';
    }
    onCPOChange(id) {
        this.stationList = [];
        this.form.get('charStat').setValue("");
        this.getStationByCPO(id);
    }
    getStationByCPO(id) {
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
                const toSelect = this.station[0];
                this.form.get('charStat').setValue(toSelect);
                this.getAllClientChargers(this.localStorage.userId);
            }
            this.filteredOptionsCharStat = this.form.controls.charStat.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(value => typeof value === 'string' ? value : value.station_name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(station_name => station_name ? this._filterCharStat(station_name) : this.station));
        }
    }
    _filterCharStat(name) {
        const filterValue = name.toLowerCase();
        return this.station.filter(option => option.station_name.toLowerCase().includes(filterValue));
    }
    displayCharStat(item) {
        return item && item.station_name ? item.station_name : '';
    }
    onStationChange(event) {
        this.getAllClientChargers(this.localStorage.userId);
        //this.getAllClientChargers(event);
    }
    isAllSelected() {
        if (this.dataSource != null) {
            const numSelected = this.selection.selected.length;
            const numRows = this.dataSource.data.length;
            return numSelected === numRows;
        }
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.dataSource.data);
    }
    /** The label for the checkbox on the passed row */
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_charger_charger_service__WEBPACK_IMPORTED_MODULE_15__["ChargerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_charging_station_charging_station_service__WEBPACK_IMPORTED_MODULE_19__["ChargingStationService"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], viewQuery: function ListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 37, vars: 8, consts: [[2, "text-align", "left", "margin-left", "10px", "margin-bottom", "10px", "margin-top", "10px"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Excel Download", 3, "click"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "PDF Download", 3, "click"], ["style", "padding:16px  !important;display:none;", 4, "ngIf"], ["fxLayout", "row wrap", 1, "page-layout", "simple", "fullwidth", 2, "overflow", "scroll"], [1, "content", 2, "min-width", "auto"], [1, ""], ["mat-table", "", "matTableFilter", "", "matSort", "", "mat-sort", "", 1, "mat-elevation-z8", 3, "dataSource", "exampleEntity", "filterType"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "client_name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "name"], ["matColumnDef", "serial_no"], ["matColumnDef", "model_name"], ["matColumnDef", "status"], ["mat-cell", "", 3, "color", 4, "matCellDef"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], [2, "padding", "16px  !important", "display", "none"], ["fxLayoutAlign", "start", "fxFlex", "1 0 auto", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "33", 1, "pr-4", 2, "height", "60px"], ["type", "text", "matInput", "", "formControlName", "charClient", "readonly", "", 3, "matAutocomplete"], [3, "displayWith", "optionSelected"], ["autoClient", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", "matTooltip", "Please select client", 1, "secondary-text"], [4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "charCPO", "readonly", "", 3, "matAutocomplete"], ["auto1", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select CPO", 1, "secondary-text"], ["type", "text", "matInput", "", "formControlName", "charStat", "readonly", "", 3, "matAutocomplete"], ["auto2", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please select charging station", 1, "secondary-text"], [3, "value"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "aria-label", "change"], ["mat-cell", ""], [3, "checked", "aria-label", "click", "change"], ["mat-header-cell", "", "mat-sort-header", ""], ["class", "custom_font_size", "style", "display: flex;", 4, "ngIf"], ["appearance", "outline", "class", "list_input", 4, "ngIf"], [1, "custom_font_size", 2, "display", "flex"], ["matSuffix", "", 3, "click"], ["appearance", "outline", 1, "list_input"], ["matInput", "", "placeholder", " Client Name ", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", " Name", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Serial no", 3, "ngModel", "ngModelChange"], ["appearance", "outline", "style", "width: 70%;", "class", "list_input", 4, "ngIf"], ["appearance", "outline", 1, "list_input", 2, "width", "70%"], ["matInput", "", "placeholder", " Model Name ", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Status", 3, "ngModel", "ngModelChange"], [1, "custom_font_size"], ["color", "primary", "matTooltip", "View", 2, "cursor", "pointer", 3, "click"], ["color", "primary", "matTooltip", "Edit", 2, "cursor", "pointer", 3, "click"], ["color", "warn", "matTooltip", "Remove", 2, "cursor", "pointer", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_button_click_1_listener() { return ctx.tableExport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "sim_card_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_button_click_5_listener() { return ctx.pdfExport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "picture_as_pdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ListComponent_mat_card_8_Template, 37, 19, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ListComponent_th_14_Template, 2, 3, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ListComponent_td_15_Template, 2, 2, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ListComponent_th_17_Template, 3, 2, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ListComponent_td_18_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ListComponent_th_20_Template, 3, 2, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ListComponent_td_21_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ListComponent_th_23_Template, 3, 2, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ListComponent_td_24_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ListComponent_th_26_Template, 3, 2, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ListComponent_td_27_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](28, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ListComponent_th_29_Template, 3, 2, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ListComponent_td_30_Template, 2, 3, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](31, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ListComponent_th_32_Template, 3, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ListComponent_td_33_Template, 9, 0, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ListComponent_tr_34_Template, 1, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ListComponent_tr_35_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "mat-paginator", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.localStorage.role_code != "END");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("exampleEntity", ctx.filterEntity)("filterType", ctx.filterType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__["DefaultLayoutDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], mat_table_filter__WEBPACK_IMPORTED_MODULE_6__["MatTableFilterDirective"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_card__WEBPACK_IMPORTED_MODULE_25__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_25__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatSuffix"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_23__["AsyncPipe"]], styles: ["mat-form-field.list_input div.mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\n.mat-header-cell .custom_font_size {\n  font-size: 15px !important;\n  text-align: left;\n}\n\nmat-form-field.list_input div.mat-form-field-infix {\n  padding: 0.5em 0 0.5em 0 !important;\n}\n\ntable {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBO0VBQ0UsNEJBQUE7QUFYRjs7QUFhQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7QUFWRjs7QUFZQTtFQUNFLG1DQUFBO0FBVEY7O0FBV0E7RUFDSSxXQUFBO0FBUko7O0FBV0U7RUFDRSxZQUFBO0FBUkoiLCJmaWxlIjoibGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRhYmxlIHtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAubWF0LWZvcm0tZmllbGQge1xyXG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIHRkLCB0aCB7XHJcbi8vICAgICB3aWR0aDogMjUlO1xyXG4vLyAgIH1cclxubWF0LWZvcm0tZmllbGQubGlzdF9pbnB1dCAgZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XHJcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG4ubWF0LWhlYWRlci1jZWxsIC5jdXN0b21fZm9udF9zaXple1xyXG4gIGZvbnQtc2l6ZTogMTVweCAgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbm1hdC1mb3JtLWZpZWxkLmxpc3RfaW5wdXQgZGl2Lm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICBwYWRkaW5nOiAwLjVlbSAwIDAuNWVtIDAgIWltcG9ydGFudDtcclxufVxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICAiXX0= */"], encapsulation: 2, data: { animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_7__["fuseAnimations"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_7__["fuseAnimations"],
            }]
    }], function () { return [{ type: app_shared_services_charger_charger_service__WEBPACK_IMPORTED_MODULE_15__["ChargerService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBar"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormBuilder"] }, { type: app_shared_services_charging_station_charging_station_service__WEBPACK_IMPORTED_MODULE_19__["ChargingStationService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }]
        }] }); })();


/***/ }),

/***/ "sZqr":
/*!****************************************************************************************!*\
  !*** ./src/app/main/asset/charger/product-dispatch/product-dispatch-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ProductDispatchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDispatchRoutingModule", function() { return ProductDispatchRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _product_dispatch_crud_product_dispatch_crud_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-dispatch-crud/product-dispatch-crud.component */ "YAPP");
/* harmony import */ var _product_dispatch_crud_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-dispatch-crud/routes */ "IkzP");
/* harmony import */ var app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/interceptors/auth-gaurd */ "9gca");







const routes = [
    {
        path: 'crud', component: _product_dispatch_crud_product_dispatch_crud_component__WEBPACK_IMPORTED_MODULE_2__["ProductDispatchCrudComponent"], canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]], children: _product_dispatch_crud_routes__WEBPACK_IMPORTED_MODULE_3__["TABS_DEMO_ROUTES"]
    },
];
class ProductDispatchRoutingModule {
}
ProductDispatchRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductDispatchRoutingModule });
ProductDispatchRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductDispatchRoutingModule_Factory(t) { return new (t || ProductDispatchRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductDispatchRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDispatchRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=product-dispatch-product-dispatch-module-es2015.js.map