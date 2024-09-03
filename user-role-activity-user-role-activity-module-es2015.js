(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-role-activity-user-role-activity-module"],{

/***/ "JH8l":
/*!**************************************************************************************!*\
  !*** ./src/app/main/user-management/user-role-activity/user-role-activity.module.ts ***!
  \**************************************************************************************/
/*! exports provided: UserRoleActivityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoleActivityModule", function() { return UserRoleActivityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ "PCNd");
/* harmony import */ var _user_role_activity_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-role-activity-routing.module */ "Q05s");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "5HBU");
/* harmony import */ var _user_role_activity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-role-activity.component */ "QbSU");






const COMPONENTS = [_user_role_activity_component__WEBPACK_IMPORTED_MODULE_4__["UserRoleActivityComponent"]];
const COMPONENTS_DYNAMIC = [];
class UserRoleActivityModule {
}
UserRoleActivityModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserRoleActivityModule });
UserRoleActivityModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserRoleActivityModule_Factory(t) { return new (t || UserRoleActivityModule)(); }, imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _user_role_activity_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoleActivityRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserRoleActivityModule, { declarations: [_user_role_activity_component__WEBPACK_IMPORTED_MODULE_4__["UserRoleActivityComponent"]], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _user_role_activity_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoleActivityRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRoleActivityModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _user_role_activity_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoleActivityRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]],
                declarations: [COMPONENTS, COMPONENTS_DYNAMIC],
                entryComponents: [COMPONENTS_DYNAMIC]
            }]
    }], null, null); })();


/***/ }),

/***/ "Q05s":
/*!**********************************************************************************************!*\
  !*** ./src/app/main/user-management/user-role-activity/user-role-activity-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: UserRoleActivityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoleActivityRoutingModule", function() { return UserRoleActivityRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_role_activity_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-role-activity.component */ "QbSU");
/* harmony import */ var app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/interceptors/auth-gaurd */ "9gca");


//import { TABS_DEMO_ROUTES } from './role-crud/routes';
//import { RoleCrudComponent } from './role-crud/role-crud.component';




const routes = [
    // {
    //     path : 'crud',component : RoleCrudComponent,canActivate: [AuthGuard], children : TABS_DEMO_ROUTES
    // },
    {
        path: 'userRole-activityMapping', component: _user_role_activity_component__WEBPACK_IMPORTED_MODULE_2__["UserRoleActivityComponent"], canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }
];
class UserRoleActivityRoutingModule {
}
UserRoleActivityRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserRoleActivityRoutingModule });
UserRoleActivityRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserRoleActivityRoutingModule_Factory(t) { return new (t || UserRoleActivityRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserRoleActivityRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRoleActivityRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "QbSU":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/user-management/user-role-activity/user-role-activity.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TodoItemNodeTest, ActionNode, TodoItemFlatNode, ActionMenuNode, ChecklistDatabase, UserRoleActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemNodeTest", function() { return TodoItemNodeTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionNode", function() { return ActionNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemFlatNode", function() { return TodoItemFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionMenuNode", function() { return ActionMenuNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistDatabase", function() { return ChecklistDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoleActivityComponent", function() { return UserRoleActivityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/animations */ "PVWW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/utils/message.constant */ "AgqY");
/* harmony import */ var app_shared_services_menu_config_menu_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/services/menu-config/menu-config.service */ "E6JG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/shared/services/client/client.service */ "LKWI");
/* harmony import */ var app_shared_services_user_role_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/shared/services/user/role.service */ "HJ+f");
/* harmony import */ var app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/shared/services/utility/utility.service */ "xb2s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive */ "EwFO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
































const _c0 = ["tree"];
const _c1 = ["toggleElement"];
const _c2 = ["toggleCollasped"];
function UserRoleActivityComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r12.name, " ");
} }
function UserRoleActivityComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select client ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRoleActivityComponent_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r13.name, " ");
} }
function UserRoleActivityComponent_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select role ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRoleActivityComponent_mat_tree_node_62_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree-node", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-checkbox", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UserRoleActivityComponent_mat_tree_node_62_Template_mat_checkbox_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const node_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.todoLeafItemSelectionToggle(node_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r14 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r9.checklistSelection.isSelected(node_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](node_r14.item);
} }
function UserRoleActivityComponent_mat_tree_node_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree-node", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRoleActivityComponent_mat_tree_node_64_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree-node", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-checkbox", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UserRoleActivityComponent_mat_tree_node_64_Template_mat_checkbox_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const node_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.todoItemSelectionToggle(node_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r18 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Toggle " + node_r18.item);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.treeControl.isExpanded(node_r18) ? "expand_more" : "chevron_right", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r11.descendantsAllSelected(node_r18))("indeterminate", ctx_r11.descendantsPartiallySelected(node_r18));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](node_r18.item);
} }
const _c3 = function () { return { x: "50px" }; };
const _c4 = function (a1) { return { value: "*", params: a1 }; };
function autocompleteObjectValidator() {
    return (control) => {
        if (typeof control.value === 'string') {
            return { 'invalidAutocompleteObject': { value: control.value } };
        }
        return null; /* valid option selected */
    };
}
class TodoItemNodeTest {
    constructor() {
        this.isSelected = false;
    }
}
class ActionNode {
}
/** Flat to-do item node with expandable and level information */
class TodoItemFlatNode {
    constructor() {
        this.isSelected = false;
    }
}
class ActionMenuNode {
}
class ChecklistDatabase {
    constructor(_menuConfigService, changeDetectorRef) {
        this._menuConfigService = _menuConfigService;
        this.changeDetectorRef = changeDetectorRef;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
        this.initialize();
    }
    get data() { return this.dataChange.value; }
    initialize() {
        this.getRoleMenuList(this.localStorage.project_id, this.localStorage.client_id, this.localStorage.role_id);
    }
    getRoleMenuList(project_id, client_id, role_id) {
        this._menuConfigService.getMenusByClientIdWithAlreadyMappedToRole(project_id, client_id, role_id).subscribe((resp) => {
            if (resp.status == true) {
                let menuConfigLit = [];
                let menuChildList = [];
                for (let index = 0; index < resp.data.length; index++) {
                    let menuCfg = resp.data[index];
                    if (menuCfg.parent_id == null) {
                        menuConfigLit.push(menuCfg);
                    }
                    else {
                        let parentMenu = this.getParentMenu(menuConfigLit, menuCfg.parent_id);
                        menuChildList = parentMenu.children;
                        if (undefined == menuChildList) {
                            menuChildList = [];
                            parentMenu.children = menuChildList;
                        }
                        menuChildList.push(menuCfg);
                    }
                }
                this.changeDetectorRef.detectChanges();
                const data = this.buildFileTree(menuConfigLit, 0);
                this.dataChange.next(data);
            }
            else {
            }
        }, (err) => {
        });
    }
    getParentMenu(menuConfigList, parent_id) {
        let parentMenu;
        for (let index = 0; index < menuConfigList.length; index++) {
            let menuConfig = menuConfigList[index];
            if (menuConfig.menu_id == parent_id) {
                parentMenu = menuConfig;
                break;
            }
            else {
                let menuChildList = menuConfig.children;
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
    buildFileTree(menudata, level) {
        let todoItemList = [];
        for (let index = 0; index < menudata.length; index++) {
            let menuCfg = menudata[index];
            const node = new TodoItemFlatNode();
            node.item = menuCfg.title;
            node.id = menuCfg.id;
            node.title = menuCfg.title;
            node.menu_id = menuCfg.menu_id;
            node.map_id = menuCfg.map_id;
            node.parent_id = menuCfg.parent_id;
            node.rm_map_id = menuCfg.rm_map_id;
            this.changeDetectorRef.detectChanges();
            if (menuCfg.children != undefined)
                node.children = this.buildFileTree(menuCfg.children, level + 1);
            todoItemList.push(node);
        }
        return todoItemList;
    }
    insertItem(parent, name) {
        if (parent.children) {
            parent.children.push({ item: name });
            this.dataChange.next(this.data);
        }
    }
    updateItem(node, name) {
        node.item = name;
        this.dataChange.next(this.data);
    }
}
ChecklistDatabase.ɵfac = function ChecklistDatabase_Factory(t) { return new (t || ChecklistDatabase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](app_shared_services_menu_config_menu_config_service__WEBPACK_IMPORTED_MODULE_10__["MenuConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ChecklistDatabase.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChecklistDatabase, factory: ChecklistDatabase.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChecklistDatabase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: app_shared_services_menu_config_menu_config_service__WEBPACK_IMPORTED_MODULE_10__["MenuConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();
class UserRoleActivityComponent {
    constructor(snackBar, menuConfigService, changeDetectorRef, fb, clientService, _database, roleService, _utilityService) {
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
            subMenu: [
                { name: 'Add/Update', completed: false },
                { name: 'Delete', completed: false },
                { name: 'Download', completed: false }
            ]
        };
        /** Map from nested node to flattened node. This helps us to keep the same object for selection */
        this.nestedNodeMap = new Map();
        /** A selected parent node to be inserted */
        this.selectedParent = null;
        /** The new item's name */
        this.newItemName = '';
        /** The selection for checklist */
        this.checklistSelection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](true /* multiple */);
        this.selectChange = false;
        this.collaspedChange = false;
        this.selectedMenus = [];
        this.getLevel = (node) => node.level;
        this.isExpandable = (node) => node.expandable;
        this.menu_id = (node) => node.menu_id;
        this.parent_id = (node) => node.parent_id;
        this.getChildren = (node) => node.children;
        this.hasChild = (_, _nodeData) => _nodeData.expandable;
        this.hasNoContent = (_, _nodeData) => _nodeData.item === '';
        /**
         * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
         */
        this.transformer = (node, level) => {
            var _a;
            const existingNode = this.nestedNodeMap.get(node);
            const flatNode = existingNode && existingNode.item === node.item
                ? existingNode
                : new TodoItemFlatNode();
            flatNode.item = node.item;
            flatNode.level = level;
            flatNode.menu_id = node.menu_id;
            flatNode.parent_id = node.parent_id;
            flatNode.expandable = !!((_a = node.children) === null || _a === void 0 ? void 0 : _a.length);
            this.flatNodeMap.set(flatNode, node);
            this.nestedNodeMap.set(node, flatNode);
            if (node.rm_map_id != null) {
                this.nodeSelectionToggle(flatNode);
            }
            return flatNode;
        };
        this.allComplete = false;
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_8__["MatTreeFlattener"](this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_8__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        this.getMenuListClientWise();
    }
    ngOnInit() {
        this.initialize();
    }
    ngAfterViewInit() {
        this._utilityService.activeMenuItems$.subscribe(menuItemSelecte => {
            this.menuArray = menuItemSelecte;
            if (this.menuArray == null || this.menuArray == undefined || this.menuArray.title == null || this.menuArray.title == undefined) {
                this.menuArray = JSON.parse(localStorage.getItem('activeMenuItems'));
            }
            this.changeDetectorRef.detectChanges();
        });
        this.treeControl.expandAll();
    }
    initialize() {
        this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
        this.roleMenuForm = this.fb.group({
            client: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            role: ['', [autocompleteObjectValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.getClients();
        this.getRolesList(this.localStorage.client_id);
    }
    getMenuListClientWise() {
        this._database.dataChange.subscribe(data => {
            this.dataSource.data = data;
            this.treeControl.expandAll();
        });
    }
    nodeSelectionToggle(node) {
        this.checklistSelection.toggle(node);
        const descendants = this.treeControl.getDescendants(node);
        this.checklistSelection.isSelected(node)
            ? this.checklistSelection.select(...descendants, node)
            : this.checklistSelection.deselect(...descendants, node);
        this.changeDetectorRef.markForCheck();
    }
    checkParentIsSelected(data) {
        for (var k = 0; k < data.length; k++) {
            let node = data[k];
            if (node.children != undefined) {
                const children = node.children;
                this.checkParentIsSelected(children);
                let result = false;
                for (var i = 0; i < children.length; i++) {
                    const isSelected = this.selectedMenus.filter(t => { return children[i].menu_id == t.menu_id; });
                    if (isSelected != null && isSelected.length > 0) {
                        result = true;
                        break;
                    }
                }
                if (result == true) {
                    const isAlreadyPush = this.selectedMenus.filter(t => { return node.menu_id == t.menu_id; });
                    if (isAlreadyPush == null || isAlreadyPush.length == 0) {
                        this.selectedMenus.push(node);
                    }
                }
            }
        }
    }
    openSubmit() {
        let formValues = this.roleMenuForm.value;
        ////
        this.selectedMenus = [];
        this.selectedMenus = [...this.checklistSelection.selected];
        this.checkParentIsSelected(this.dataSource.data);
        //;
        let params = {
            role_id: formValues.role.id,
            menus: this.selectedMenus.map(v => ({ menu_id: v.menu_id })),
            status: "Y",
            created_by: this.localStorage.userId
        };
        this.menuConfigService.setRoleMenuMapping(params).subscribe((resp) => {
            // 
            if (resp.status = true) {
                this.snackBar.open(app_shared_utils_message_constant__WEBPACK_IMPORTED_MODULE_9__["MessageConstant"].roleMenuMappedSucess, 'Dismiss', { duration: 5000 });
                this._database.getRoleMenuList(this.localStorage.project_id, formValues.client.id, formValues.role.id);
            }
            else {
                this.snackBar.open('Please try again', 'Dismiss', { duration: 5000 });
            }
        }, (err) => {
            // 
            this.snackBar.open('Please try again', 'Dismiss', { duration: 5000 });
        });
    }
    getClients() {
        this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
        this.clientService.getActiveClientsCW(this.localStorage.userId).subscribe((data) => {
            this.clients = data;
            const toSelect = this.clients.find(c => c.id == this.localStorage.client_id);
            this.roleMenuForm.get('client').setValue(toSelect);
            this.selectedClientID = toSelect.id;
            this.filteredOptionsClient = this.roleMenuForm.controls.client.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(name => name ? this._filterClientModels(name) : this.clients));
        }, (err) => {
        });
    }
    displayClient(item) {
        return item && item.name ? item.name : '';
    }
    _filterClientModels(name) {
        const filterValue = name.toLowerCase();
        return this.clients.filter(option => option.name.toLowerCase().includes(filterValue));
    }
    onClientChange(value) {
        //this.dataSource.data =[];
        //this._database.dataChange.next(null);
        //this.checklistSelection.clear();
        //this.descendantsAllSelected( this.checklistSelection.);
        //this._database.getRoleMenuList(this.localStorage.project_id,value.id);
        this.getRolesList(value.id);
        this.roleMenuForm.get('role').setValue('');
        this.selectedClientID = value.id;
        //this.getMenuListClientWise();
    }
    getRolesList(client_id) {
        this.roles = [];
        this.roleService.getActiveRolesByClientId(this.localStorage.project_id, client_id).subscribe((resp) => {
            if (resp.status = true) {
                this.roles = resp.data;
                const toSelect = this.roles.find(c => c.id == this.localStorage.role_id);
                if (toSelect != null) {
                    if (toSelect.id = this.localStorage.role_id) {
                        this.roleMenuForm.get('role').setValue(toSelect);
                    }
                }
                this.filteredOptionsRole = this.roleMenuForm.controls.role.valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(name => name ? this._filterRoleModels(name) : this.roles));
                //this._database.getRoleMenuList(this.localStorage.project_id,client_id,toSelect.id); 
            }
        }, (err) => {
        });
    }
    displayRole(item) {
        return item && item.name ? item.name : '';
    }
    _filterRoleModels(name) {
        const filterValue = name.toLowerCase();
        return this.roles.filter(option => option.name.toLowerCase().includes(filterValue));
    }
    onRoleChange(value) {
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
    descendantsAllSelected(node) {
        const descendants = this.treeControl.getDescendants(node);
        const descAllSelected = descendants.length > 0 && descendants.every(child => {
            this.changeDetectorRef.markForCheck();
            return this.checklistSelection.isSelected(child);
        });
        return descAllSelected;
    }
    /** Whether part of the descendants are selected */
    descendantsPartiallySelected(node) {
        const descendants = this.treeControl.getDescendants(node);
        const result = descendants.some(child => this.checklistSelection.isSelected(child));
        return result && !this.descendantsAllSelected(node);
    }
    /** Toggle the to-do item selection. Select/deselect all the descendants node */
    todoItemSelectionToggle(node) {
        this.checklistSelection.toggle(node);
        const descendants = this.treeControl.getDescendants(node);
        this.checklistSelection.isSelected(node)
            ? this.checklistSelection.select(...descendants)
            : this.checklistSelection.deselect(...descendants);
        // Force update for the parent
        descendants.forEach(child => this.checklistSelection.isSelected(child));
        this.checkAllParentsSelection(node);
        this.actionMenu = true;
        this.menuNode = true;
    }
    /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
    todoLeafItemSelectionToggle(node) {
        this.checklistSelection.toggle(node);
        this.checkAllParentsSelection(node);
    }
    /* Checks all the parents when a leaf node is selected/unselected */
    checkAllParentsSelection(node) {
        let parent = this.getParentNode(node);
        while (parent) {
            this.checkRootNodeSelection(parent);
            parent = this.getParentNode(parent);
        }
        this.actionMenu = true;
    }
    /** Check root node checked state and change it accordingly */
    checkRootNodeSelection(node) {
        const nodeSelected = this.checklistSelection.isSelected(node);
        const descendants = this.treeControl.getDescendants(node);
        const descAllSelected = descendants.length > 0 && descendants.every(child => {
            return this.checklistSelection.isSelected(child);
        });
        if (nodeSelected && !descAllSelected) {
            this.checklistSelection.deselect(node);
        }
        else if (!nodeSelected && descAllSelected) {
            this.checklistSelection.select(node);
        }
    }
    /* Get the parent node of a node */
    getParentNode(node) {
        const currentLevel = this.getLevel(node);
        if (currentLevel < 1) {
            return null;
        }
        const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
        for (let i = startIndex; i >= 0; i--) {
            const currentNode = this.treeControl.dataNodes[i];
            if (this.getLevel(currentNode) < currentLevel) {
                return currentNode;
            }
        }
        return null;
    }
    /** Select the category so we can insert the new item. */
    addNewItem(node) {
        const parentNode = this.flatNodeMap.get(node);
        this._database.insertItem(parentNode, '');
        this.treeControl.expand(node);
    }
    /** Save the node to database */
    saveNode(node, itemValue) {
        const nestedNode = this.flatNodeMap.get(node);
        this._database.updateItem(nestedNode, itemValue);
    }
    updateAllComplete() {
        this.allComplete = this.menuAction.subMenu != null && this.menuAction.subMenu.every(t => t.completed);
    }
    someComplete(node) {
        const descendants = this.treeControl.getDescendants(node);
        const result = descendants.some(child => this.checklistSelection.isSelected(child));
        return result && !this.descendantsAllSelected(node);
        // if (node.this.menuAction.subMenu == null) {
        // return false;
        // }
        //return node.this.menuAction.subMenu.filter(t => t.completed).length > 0 && !this.allComplete;
    }
    setAll(completed) {
        this.allComplete = completed;
        if (this.menuAction.subMenu == null) {
            return;
        }
        this.menuAction.subMenu.forEach(t => t.completed = completed);
    }
    updateSelectChange(event) {
        this.selectChange = event.checked;
        this.ref.checked = this.selectChange;
        if (this.selectChange == true) {
            this.checklistSelection.clear();
            this.selectAll();
            // this.treeControl.collapseAll();
        }
        else {
            this.unSelectAll();
            this.checklistSelection.clear();
            //this.checklistSelection.selected
            //this.treeControl.expandAll();
        }
    }
    updatecollaspedChange(event) {
        this.collaspedChange = event.checked;
        this.collaspedRef.checked = this.collaspedChange;
        if (this.collaspedChange == true) {
            this.treeControl.collapseAll();
        }
        else {
            this.treeControl.expandAll();
        }
    }
    selectAll() {
        for (let i = 0; i < this.treeControl.dataNodes.length; i++) {
            if (!this.checklistSelection.isSelected(this.treeControl.dataNodes[i]))
                this.checklistSelection.toggle(this.treeControl.dataNodes[i]);
            this.treeControl.expand(this.treeControl.dataNodes[i]);
        }
    }
    unSelectAll() {
        for (let i = 0; i < this.treeControl.dataNodes.length; i++) {
            if (!this.checklistSelection.isSelected(this.treeControl.dataNodes[i]))
                this.checklistSelection.toggle(this.treeControl.dataNodes[i]);
            this.treeControl.expand(this.treeControl.dataNodes[i]);
        }
    }
}
UserRoleActivityComponent.ɵfac = function UserRoleActivityComponent_Factory(t) { return new (t || UserRoleActivityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_menu_config_menu_config_service__WEBPACK_IMPORTED_MODULE_10__["MenuConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_12__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ChecklistDatabase), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_user_role_service__WEBPACK_IMPORTED_MODULE_13__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_14__["UtilityService"])); };
UserRoleActivityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserRoleActivityComponent, selectors: [["app-user-role-activity"]], viewQuery: function UserRoleActivityComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tree = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ref = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.collaspedRef = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([ChecklistDatabase, _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])], decls: 65, vars: 27, consts: [[2, "display", "block", "width", "100%"], ["id", "", "fxLayout", "row", 1, "page-layout", "simple", "right-sidebar"], ["fusePerfectScrollbar", "", 1, "center"], ["fxLayout", "column", "fxLayoutAlign", "space-between", 1, "header", "accent", "px-24", "pt-16", "pb-0"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [1, "mat-display-1", "my-0", "my-sm-24", "welcome-message"], ["id", "forms", "fxLayout", "column", 1, "page-layout", "simple", "fullwidth"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxFlex", "1 0 auto", "name", "roleMenuForm", 1, "mat-card", "mat-elevation-z4", "p-24", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px", "fxFlex", "1 0 auto"], ["appearance", "outline", "fxFlex", "30", 1, "pr-4"], ["type", "text", "matInput", "", "formControlName", "client", "autocomplete", "off", "required", "", 3, "matAutocomplete"], [3, "displayWith", "optionSelected"], ["clientAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 2, "display", "flex"], ["matSuffix", "", 1, "secondary-text"], ["matSuffix", "", "matTooltip", "Please enter client name", 1, "secondary-text"], [4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "role", "autocomplete", "off", "required", "", 3, "matAutocomplete"], ["roleAuto", "matAutocomplete"], ["matSuffix", "", "matTooltip", "Please enter role name", 1, "secondary-text"], ["fxFlex", "20"], ["fxLayout", "row", "fxLayoutAlign", "start center", 2, "margin-bottom", "18px"], ["color", "primary", 1, "example-margin", 3, "checked", "change"], ["toggleElement", ""], ["toggleCollasped", ""], ["fxFlex", "20", 2, "margin-bottom", "18px"], ["mat-raised-button", "", "color", "primary", 1, "mr-8", 2, "float", "right", 3, "click"], ["fxFlex", "100", "fxFlex.lt-sm", "100", 2, "margin-top", "20px"], [1, "connector-toolbar", 2, "background-color", "#00acc1 !important", "color", "white"], [1, "m-0", "pl-16", "font-normal", "fz-1"], ["mat-icon-button", "", 1, "mr-16"], ["fxLayout", "row wrap", 2, "padding-top", "20px"], ["fxFlex", "100", "fxFlex.lt-sm", "100"], [3, "dataSource", "treeControl"], ["tree", ""], ["matTreeNodeToggle", "", "matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], [3, "value"], ["matTreeNodeToggle", "", "matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], [1, "checklist-leaf-node", 3, "checked", "change"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], [3, "checked", "indeterminate", "change"]], template: function UserRoleActivityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "User Role Activity ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function UserRoleActivityComponent_Template_mat_autocomplete_optionSelected_14_listener($event) { return ctx.onClientChange($event.option.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UserRoleActivityComponent_mat_option_16_Template, 2, 2, "mat-option", 13);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UserRoleActivityComponent_mat_error_23_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-autocomplete", 11, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function UserRoleActivityComponent_Template_mat_autocomplete_optionSelected_28_listener($event) { return ctx.onRoleChange($event.option.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, UserRoleActivityComponent_mat_option_30_Template, 2, 2, "mat-option", 13);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, UserRoleActivityComponent_mat_error_37_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-slide-toggle", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UserRoleActivityComponent_Template_mat_slide_toggle_change_40_listener($event) { return ctx.updateSelectChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-slide-toggle", 23, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UserRoleActivityComponent_Template_mat_slide_toggle_change_44_listener($event) { return ctx.updatecollaspedChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserRoleActivityComponent_Template_button_click_48_listener() { return ctx.openSubmit(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " \u00A0Menu List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-tree", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, UserRoleActivityComponent_mat_tree_node_62_Template, 4, 2, "mat-tree-node", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, UserRoleActivityComponent_mat_tree_node_63_Template, 2, 0, "mat-tree-node", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, UserRoleActivityComponent_mat_tree_node_64_Template, 6, 5, "mat-tree-node", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c3)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.roleMenuForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayClient);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 20, ctx.filteredOptionsClient));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.roleMenuForm.get("client").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 22, ctx.filteredOptionsRole));
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
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutDirective"], _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_16__["FusePerfectScrollbarDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButton"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__["MatToolbar"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_8__["MatTree"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_8__["MatTreeNodeDef"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatError"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_8__["MatTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_8__["MatTreeNodeToggle"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_8__["MatTreeNodePadding"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__["MatCheckbox"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".fill-space {\n  flex: 1 1 auto;\n}\n\n.mat-toolbar-row, .mat-toolbar-single-row {\n  height: 40px !important;\n  border-radius: 10px;\n}\n\n#checkboxes label {\n  float: left;\n}\n\nul {\n  margin: 0;\n  list-style: none;\n  float: left;\n}\n\nli {\n  height: 30p;\n}\n\n.cb-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: left;\n  flex-flow: row;\n}\n\n.mat-checkbox {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdXNlci1yb2xlLWFjdGl2aXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksY0FBQTtBQURKOztBQUdFO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUNDO0VBQ0MsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUFBO0VBQ0UsV0FBQTtBQUdGOztBQURBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFJRjs7QUFEQTtFQUNFLGlCQUFBO0FBSUYiLCJmaWxlIjoidXNlci1yb2xlLWFjdGl2aXR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGwtc3BhY2Uge1xyXG4gICAgLy8gVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LlxyXG4gICAgLy8gRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC5cclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuICAubWF0LXRvb2xiYXItcm93LCAubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XHJcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuI2NoZWNrYm94ZXMgbGFiZWwge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbiB1bCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxubGl7XHJcbiAgaGVpZ2h0OiAzMHA7XHJcbn1cclxuLmNiLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICBmbGV4LWZsb3c6IHJvdztcclxufVxyXG5cclxuLm1hdC1jaGVja2JveCB7XHJcbiAgbWFyZ2luLWxlZnQ6MjBweDtcclxufSBcclxuXHJcblxyXG4iXX0= */"], encapsulation: 2, data: { animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRoleActivityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-role-activity',
                templateUrl: './user-role-activity.component.html',
                styleUrls: ['./user-role-activity.component.scss'],
                providers: [ChecklistDatabase, _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"],
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"] }, { type: app_shared_services_menu_config_menu_config_service__WEBPACK_IMPORTED_MODULE_10__["MenuConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: app_shared_services_client_client_service__WEBPACK_IMPORTED_MODULE_12__["ClientService"] }, { type: ChecklistDatabase }, { type: app_shared_services_user_role_service__WEBPACK_IMPORTED_MODULE_13__["RoleService"] }, { type: app_shared_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_14__["UtilityService"] }]; }, { tree: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['tree']
        }], ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["toggleElement"]
        }], collaspedRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["toggleCollasped"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=user-role-activity-user-role-activity-module-es2015.js.map