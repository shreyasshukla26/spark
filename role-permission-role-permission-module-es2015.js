(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["role-permission-role-permission-module"],{

/***/ "GYAT":
/*!*********************************************************************************!*\
  !*** ./src/app/main/user-management/role-permission/create/create.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TodoItemNode, ActionNode, TodoItemFlatNode, ActionMenuNode, ChecklistDatabase, CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemNode", function() { return TodoItemNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionNode", function() { return ActionNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemFlatNode", function() { return TodoItemFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionMenuNode", function() { return ActionMenuNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistDatabase", function() { return ChecklistDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/animations */ "PVWW");
/* harmony import */ var app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/master/master.service */ "auZQ");
/* harmony import */ var app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/services/rfid/rfid.service */ "QtQ4");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");




























function CreateComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", role_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", role_r5.name, " ");
} }
function CreateComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Role required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_mat_tree_node_24_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-checkbox", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add/Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-checkbox", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_mat_tree_node_24_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree-node", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateComponent_mat_tree_node_24_Template_mat_checkbox_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const node_r6 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.todoLeafItemSelectionToggle(node_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateComponent_mat_tree_node_24_div_4_Template, 11, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r2.checklistSelection.isSelected(node_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](node_r6.item);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.checklistSelection.isSelected(node_r6));
} }
function CreateComponent_mat_tree_node_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree-node", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { standalone: true }; };
function CreateComponent_mat_tree_node_26_div_6_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateComponent_mat_tree_node_26_div_6_div_5_Template_mat_checkbox_ngModelChange_1_listener($event) { const subMenu_r14 = ctx.$implicit; return subMenu_r14.completed = $event; })("ngModelChange", function CreateComponent_mat_tree_node_26_div_6_div_5_Template_mat_checkbox_ngModelChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.updateAllComplete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subMenu_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", subMenu_r14.completed)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subMenu_r14.name, " ");
} }
const _c1 = function (a0) { return { "cb-vertival": a0 }; };
function CreateComponent_mat_tree_node_26_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-checkbox", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateComponent_mat_tree_node_26_div_6_Template_mat_checkbox_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.setAll($event.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateComponent_mat_tree_node_26_div_6_div_5_Template, 4, 4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, !ctx_r12.tmp));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r12.allComplete)("indeterminate", ctx_r12.someComplete(node_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r12.menuAction.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.menuAction.subMenu);
} }
function CreateComponent_mat_tree_node_26_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree-node", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-checkbox", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateComponent_mat_tree_node_26_Template_mat_checkbox_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const node_r11 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.todoItemSelectionToggle(node_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreateComponent_mat_tree_node_26_div_6_Template, 6, 7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r11 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Toggle " + node_r11.item);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.treeControl.isExpanded(node_r11) ? "expand_more" : "chevron_right", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r4.descendantsAllSelected(node_r11))("indeterminate", ctx_r4.descendantsPartiallySelected(node_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", node_r11.item, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.descendantsAllSelected(node_r11));
} }
class TodoItemNode {
}
class ActionNode {
}
/** Flat to-do item node with expandable and level information */
class TodoItemFlatNode {
}
class ActionMenuNode {
}
/**
 * The Json object for to-do list data.
 */
const TREE_DATA = {
    'Home': {
        'Map View': null,
        'List View': null,
    },
    'Asset Management': {
        'Charger Name': null,
        'Charger Model': null,
        'Vehicle On-board': null,
        'RFID Management': {
            'RFID': null,
            'CPO-RFID Mapping': null,
        }
    },
    'Client Management': {
        'Client': null
    },
    'Operation Management': {
        'CPOs': null,
        'Station': null,
    },
    'Vehicle Registration': {
        'End User - Vehicle Registation': null
    },
    'User Management': {
        'User': null,
        'End User': null,
        'Role Permission': null,
    },
    'Charger Monitoring': {
        'Charger Logs': null,
    },
    'Logs History': {
        'OCCP Logs': null,
    }
};
/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
class ChecklistDatabase {
    constructor() {
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this.initialize();
    }
    get data() { return this.dataChange.value; }
    initialize() {
        // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
        //     file node as children.
        const data = this.buildFileTree(TREE_DATA, 0);
        // Notify the change.
        this.dataChange.next(data);
    }
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     */
    buildFileTree(obj, level) {
        return Object.keys(obj).reduce((accumulator, key) => {
            const value = obj[key];
            const node = new TodoItemNode();
            node.item = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = this.buildFileTree(value, level + 1);
                }
                else {
                    node.item = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    }
    /** Add an item to to-do list */
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
ChecklistDatabase.ɵfac = function ChecklistDatabase_Factory(t) { return new (t || ChecklistDatabase)(); };
ChecklistDatabase.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChecklistDatabase, factory: ChecklistDatabase.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChecklistDatabase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
class CreateComponent {
    constructor(fb, masterService, rfidService, snackBar, router, datePipe, _database) {
        this.fb = fb;
        this.masterService = masterService;
        this.rfidService = rfidService;
        this.snackBar = snackBar;
        this.router = router;
        this.datePipe = datePipe;
        this._database = _database;
        this.menuAction = {
            name: 'select All',
            completed: false,
            subMenu: [
                { name: 'Add/Update', completed: false },
                { name: 'Delete', completed: false },
                { name: 'Download', completed: false }
            ]
        };
        this.actionMenu = false;
        this.menuNode = false;
        this.roleType = [
            { id: '1', name: 'Admin' },
            { id: '2', name: 'CMS User' },
            { id: '3', name: 'End User' }
        ];
        this.flatNodeMap = new Map();
        /** Map from nested node to flattened node. This helps us to keep the same object for selection */
        this.nestedNodeMap = new Map();
        /** A selected parent node to be inserted */
        this.selectedParent = null;
        /** The new item's name */
        this.newItemName = '';
        /** The selection for checklist */
        this.checklistSelection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](true /* multiple */);
        this.getLevel = (node) => node.level;
        this.isExpandable = (node) => node.expandable;
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
            flatNode.expandable = !!((_a = node.children) === null || _a === void 0 ? void 0 : _a.length);
            this.flatNodeMap.set(flatNode, node);
            this.nestedNodeMap.set(node, flatNode);
            return flatNode;
        };
        this.allComplete = false;
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlattener"](this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        _database.dataChange.subscribe(data => {
            this.dataSource.data = data;
        });
    }
    ngOnInit() {
        this.initialize();
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    initialize() {
        this.localStorage = JSON.parse(localStorage.getItem('userDetails'));
        this.permissionForm = this.fb.group({
            roleType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    onSubmit() {
    }
    /** Whether all the descendants of the node are selected. */
    descendantsAllSelected(node) {
        const descendants = this.treeControl.getDescendants(node);
        const descAllSelected = descendants.length > 0 && descendants.every(child => {
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
        if (node.this.menuAction.subMenu == null) {
            return false;
        }
        return node.this.menuAction.subMenu.filter(t => t.completed).length > 0 && !this.allComplete;
    }
    setAll(completed) {
        this.allComplete = completed;
        if (this.menuAction.subMenu == null) {
            return;
        }
        this.menuAction.subMenu.forEach(t => t.completed = completed);
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_8__["MasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_9__["RfidService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ChecklistDatabase)); };
CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-create"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([ChecklistDatabase, _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])], decls: 27, vars: 9, consts: [["autocomplete", "off", 1, "example-form", 3, "formGroup", "submit"], ["fxLayout", "row wrap", "fxLayoutGap", "8px grid"], ["fxFlex", "50", "fxFlex.lt-sm", "100"], [2, "width", "100%"], ["placeholder", "Role", "formControlName", "roleType", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "mat-text-warn", 4, "ngIf"], ["fxFlex", "100", "fxFlex.lt-sm", "100", 2, "margin-top", "20px"], ["fxLayout", "row wrap", 2, "padding-top", "20px"], ["fxFlex", "100", "fxFlex.lt-sm", "100", 2, "border", "1px solid #ddd", ";border-radius", "10px"], ["color", "primary", 1, "connector-toolbar"], [1, "m-0", "pl-16", "font-normal", "fz-1"], ["mat-icon-button", "", 1, "mr-16"], ["fxFlex", "100", "fxFlex.lt-sm", "100"], [3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", "matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], [3, "value"], [1, "mat-text-warn"], ["matTreeNodeToggle", "", "matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], [1, "checklist-leaf-node", 3, "checked", "change"], ["style", "text-align: end;display: flex; margin-left: auto;", 4, "ngIf"], [2, "text-align", "end", "display", "flex", "margin-left", "auto"], ["fxLayout", "row wrap", 2, "padding-right", "10px"], ["id", "selectAdd", 1, "checklist-leaf-node"], ["id", "selectDelete", 1, "checklist-leaf-node"], ["id", "selectDownload", 1, "checklist-leaf-node"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], [3, "checked", "indeterminate", "change"], [1, "cb-wrapper", 3, "ngClass"], [1, "checklist-leaf-node", 3, "checked", "indeterminate", "change"], [4, "ngFor", "ngForOf"], [3, "ngModel", "ngModelOptions", "ngModelChange"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CreateComponent_Template_form_submit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CreateComponent_mat_option_7_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CreateComponent_mat_error_8_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-toolbar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u00A0Menu List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-tree", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CreateComponent_mat_tree_node_24_Template, 5, 3, "mat-tree-node", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CreateComponent_mat_tree_node_25_Template, 2, 0, "mat-tree-node", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CreateComponent_mat_tree_node_26_Template, 7, 6, "mat-tree-node", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.permissionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roleType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.permissionForm.get("roleType").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("align-self", "center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.hasNoContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDivider"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTree"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeNodeDef"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatError"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeNodeToggle"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeNodePadding"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckbox"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_22__["DefaultClassDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".fill-space {\n  flex: 1 1 auto;\n}\n\n.mat-toolbar-row, .mat-toolbar-single-row {\n  height: 40px !important;\n  border-radius: 10px;\n}\n\n#checkboxes label {\n  float: left;\n}\n\nul {\n  margin: 0;\n  list-style: none;\n  float: left;\n}\n\nli {\n  height: 30p;\n}\n\n.cb-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: left;\n  flex-flow: row;\n}\n\n.mat-checkbox {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLGNBQUE7QUFESjs7QUFHRTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFDQztFQUNDLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFFRjs7QUFBQTtFQUNFLFdBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBSUY7O0FBREE7RUFDRSxpQkFBQTtBQUlGIiwiZmlsZSI6ImNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxsLXNwYWNlIHtcclxuICAgIC8vIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC5cclxuICAgIC8vIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuXHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbiAgLm1hdC10b29sYmFyLXJvdywgLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xyXG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbiNjaGVja2JveGVzIGxhYmVsIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4gdWwge1xyXG4gIG1hcmdpbjogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbmxpe1xyXG4gIGhlaWdodDogMzBwO1xyXG59XHJcbi5jYi13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgZmxleC1mbG93OiByb3c7XHJcbn1cclxuXHJcbi5tYXQtY2hlY2tib3gge1xyXG4gIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbn0gXHJcblxyXG5cclxuIl19 */"], encapsulation: 2, data: { animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_7__["fuseAnimations"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create',
                templateUrl: './create.component.html',
                styleUrls: ['./create.component.scss'],
                providers: [ChecklistDatabase, _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_7__["fuseAnimations"],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: app_shared_services_master_master_service__WEBPACK_IMPORTED_MODULE_8__["MasterService"] }, { type: app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_9__["RfidService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }, { type: ChecklistDatabase }]; }, null); })();


/***/ }),

/***/ "Li1Y":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/user-management/role-permission/action-dialog/action-dialog.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ActionDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionDialogComponent", function() { return ActionDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/animations */ "PVWW");
/* harmony import */ var app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/rfid/rfid.service */ "QtQ4");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





















const _c0 = ["toggleElement"];
function ActionDialogComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionDialogComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionDialogComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter RFID number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionDialogComponent_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter expiry date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ActionDialogComponent {
    constructor(fb, rfidService, snackBar, datePipe, dialogRef, data) {
        this.fb = fb;
        this.rfidService = rfidService;
        this.snackBar = snackBar;
        this.datePipe = datePipe;
        this.dialogRef = dialogRef;
        this.data = data;
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
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            rfid_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            rfid_expDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        if (this.isEditMode) {
            this.assignValues(this.params);
        }
    }
    close() {
        this.dialogRef.close();
    }
    closeActionPanel() {
        this.dialogRef.close();
    }
    onYesClick() {
        let formValues = this.form.value;
        const params = {
            name: formValues.name,
            description: formValues.description,
            rfid_no: formValues.rfid_no,
            expiry_date: this.datePipe.transform(formValues.rfid_expDate, "yyyy-MM-dd"),
            created_date: this.datePipe.transform(formValues.rfid_expDate, "yyyy-MM-dd"),
            created_by: this.localStorage.userId,
            status: this.status == true ? 'Y' : 'N'
            // tslint:disable-next-line: semicolon
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
            this.rfidService.update(params).subscribe((data) => {
                this.snackBar.open('Record updated successfully!', 'Dismiss', { duration: 5000 });
                this.dialogRef.close();
            }, (err) => {
                this.snackBar.open('Please try again', 'Dismiss', { duration: 5000 });
            });
        }
        else {
            this.rfidService.create(params).subscribe((data) => {
                this.snackBar.open('Rfid created!', 'Dismiss', { duration: 5000 });
                this.dialogRef.close();
            }, (err) => {
                this.snackBar.open('Please try again', 'Dismiss', { duration: 5000 });
            });
        }
        this.dialogRef.close(params);
    }
    getErrorMessage(form) {
        return form.get('email').hasError('required')
            ? 'You must enter a value'
            : form.get('email').hasError('email')
                ? 'Not a valid email'
                : '';
    }
    assignValues(params) {
        this.form.get('name').setValue(params.data.name);
        this.form.get('description').setValue(params.data.description);
        this.form.get('rfid_no').setValue(params.data.rf_id_no);
        this.form.get('rfid_expDate').setValue(params.data.expiry_date);
        this.status = params.data.status == 'Y' ? true : false;
    }
    updateStatus(event) {
        this.status = event.checked;
        this.ref.checked = this.status;
    }
}
ActionDialogComponent.ɵfac = function ActionDialogComponent_Factory(t) { return new (t || ActionDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_5__["RfidService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
ActionDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionDialogComponent, selectors: [["app-action-dialog"]], viewQuery: function ActionDialogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ref = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])], decls: 42, vars: 10, consts: [["id", "dialog_action_close", "matTooltip", "Close window", 1, "material-icons-outlined", 2, "cursor", "pointer", "color", "white", 3, "click"], ["fxLayout", "row wrap", 1, "matero-row"], ["fxFlex", "100", 1, "matero-col"], [1, "form-field-full", 3, "formGroup"], ["fxLayout", "row wrap", "fxLayoutGap", "8px grid"], ["fxFlex", "50", "fxFlex.lt-sm", "100"], ["matInput", "", "placeholder", "", "formControlName", "name", "required", ""], [4, "ngIf"], ["matInput", "", "placeholder", "", "formControlName", "description", "required", ""], ["matInput", "", "placeholder", "", "formControlName", "rfid_no", "required", ""], ["matInput", "", "formControlName", "rfid_expDate", "disabled", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["disabled", "false"], ["dp3", ""], ["color", "primary", 1, "example-margin", 3, "checked", "change"], ["toggleElement", ""], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "m-t-8", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "warn", 1, "m-t-8", 2, "margin-left", "1%", 3, "click"]], template: function ActionDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionDialogComponent_Template_mat_icon_click_0_listener() { return ctx.closeActionPanel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ActionDialogComponent_mat_error_12_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ActionDialogComponent_mat_error_18_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "RFID Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ActionDialogComponent_mat_error_24_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Expiry Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-datepicker-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-datepicker", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ActionDialogComponent_mat_error_33_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-slide-toggle", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ActionDialogComponent_Template_mat_slide_toggle_change_35_listener($event) { return ctx.updateStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionDialogComponent_Template_button_click_38_listener() { return ctx.onYesClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionDialogComponent_Template_button_click_40_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("name").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("description").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("rfid_no").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("rfid_expDate").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.status ? "Active" : "Inactive", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isEditMode ? "Save" : "Save");
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepicker"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"], encapsulation: 2, data: { animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-action-dialog',
                templateUrl: './action-dialog.component.html',
                styleUrls: ['./action-dialog.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_5__["RfidService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, { ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["toggleElement"]
        }] }); })();


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

/***/ "Sy14":
/*!****************************************************************************************!*\
  !*** ./src/app/main/user-management/role-permission/role-permission-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: RolePermissionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolePermissionRoutingModule", function() { return RolePermissionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _role_permission_crud_role_permission_crud_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role-permission-crud/role-permission-crud.component */ "aMVU");
/* harmony import */ var _role_permission_crud_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./role-permission-crud/routes */ "TTq3");
/* harmony import */ var app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/interceptors/auth-gaurd */ "9gca");







const routes = [
    {
        path: 'crud', component: _role_permission_crud_role_permission_crud_component__WEBPACK_IMPORTED_MODULE_2__["RolePermissionCrudComponent"], canActivate: [app_shared_interceptors_auth_gaurd__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]], children: _role_permission_crud_routes__WEBPACK_IMPORTED_MODULE_3__["TABS_DEMO_ROUTES"]
    }
];
class RolePermissionRoutingModule {
}
RolePermissionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RolePermissionRoutingModule });
RolePermissionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RolePermissionRoutingModule_Factory(t) { return new (t || RolePermissionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RolePermissionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolePermissionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "TTq3":
/*!*************************************************************************************!*\
  !*** ./src/app/main/user-management/role-permission/role-permission-crud/routes.ts ***!
  \*************************************************************************************/
/*! exports provided: TABS_DEMO_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABS_DEMO_ROUTES", function() { return TABS_DEMO_ROUTES; });
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create/create.component */ "GYAT");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list/list.component */ "tEGF");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const TABS_DEMO_ROUTES = [
    { path: 'create', component: _create_create_component__WEBPACK_IMPORTED_MODULE_0__["CreateComponent"] },
    { path: 'list', component: _list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"] },
    { path: '', redirectTo: 'list', pathMatch: 'full' },
];


/***/ }),

/***/ "aMVU":
/*!*************************************************************************************************************!*\
  !*** ./src/app/main/user-management/role-permission/role-permission-crud/role-permission-crud.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: RolePermissionCrudComponent, SunnyTabContentComponent, RainyTabContentComponent, FoggyTabContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolePermissionCrudComponent", function() { return RolePermissionCrudComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SunnyTabContentComponent", function() { return SunnyTabContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RainyTabContentComponent", function() { return RainyTabContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoggyTabContentComponent", function() { return FoggyTabContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ "PVWW");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive */ "EwFO");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");









function RolePermissionCrudComponent_a_8_Template(rf, ctx) { if (rf & 1) {
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
class RolePermissionCrudComponent {
    constructor() {
        // Nav bar demo
        this.tabLinks = [
            { label: 'User', link: 'list' },
            { label: 'Add New', link: 'create' }
        ];
    }
    ngOnInit() {
        this.menuArray = JSON.parse(localStorage.getItem('activeMenuItems'));
    }
}
RolePermissionCrudComponent.ɵfac = function RolePermissionCrudComponent_Factory(t) { return new (t || RolePermissionCrudComponent)(); };
RolePermissionCrudComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RolePermissionCrudComponent, selectors: [["app-role-permission-crud"]], decls: 10, vars: 6, consts: [[2, "display", "block", "width", "100%"], ["id", "", "fxLayout", "row", 1, "page-layout", "simple", "right-sidebar"], ["fusePerfectScrollbar", "", 1, "center"], ["fxLayout", "column", "fxLayoutAlign", "space-between", 1, "header", "accent", "px-24", "pt-16", "pb-0"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [1, "mat-display-1", "my-0", "my-sm-24", "welcome-message"], ["mat-tab-nav-bar", "", "aria-label", "weather navigation links"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active"], ["rla", "routerLinkActive"]], template: function RolePermissionCrudComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RolePermissionCrudComponent_a_8_Template, 3, 3, "a", 7);
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
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_3__["FusePerfectScrollbarDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabNav"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabLink"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlLXBlcm1pc3Npb24tY3J1ZC5jb21wb25lbnQuc2NzcyJ9 */"], encapsulation: 2, data: { animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolePermissionCrudComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-role-permission-crud',
                templateUrl: './role-permission-crud.component.html',
                styleUrls: ['./role-permission-crud.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"],
            }]
    }], null, null); })();
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

/***/ "lCTU":
/*!********************************************************************************!*\
  !*** ./src/app/main/user-management/role-permission/role-permission.module.ts ***!
  \********************************************************************************/
/*! exports provided: RolePermissionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolePermissionModule", function() { return RolePermissionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ "PCNd");
/* harmony import */ var _role_permission_crud_role_permission_crud_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role-permission-crud/role-permission-crud.component */ "aMVU");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create/create.component */ "GYAT");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "tEGF");
/* harmony import */ var _role_permission_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./role-permission-routing.module */ "Sy14");
/* harmony import */ var _action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action-dialog/action-dialog.component */ "Li1Y");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/shared.module */ "5HBU");









const COMPONENTS = [_role_permission_crud_role_permission_crud_component__WEBPACK_IMPORTED_MODULE_2__["RolePermissionCrudComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_3__["CreateComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]];
const COMPONENTS_DYNAMIC = [_action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ActionDialogComponent"]];
class RolePermissionModule {
}
RolePermissionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RolePermissionModule });
RolePermissionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RolePermissionModule_Factory(t) { return new (t || RolePermissionModule)(); }, imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _role_permission_routing_module__WEBPACK_IMPORTED_MODULE_5__["RolePermissionRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RolePermissionModule, { declarations: [_role_permission_crud_role_permission_crud_component__WEBPACK_IMPORTED_MODULE_2__["RolePermissionCrudComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_3__["CreateComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ActionDialogComponent"]], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _role_permission_routing_module__WEBPACK_IMPORTED_MODULE_5__["RolePermissionRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolePermissionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _role_permission_routing_module__WEBPACK_IMPORTED_MODULE_5__["RolePermissionRoutingModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"]],
                declarations: [COMPONENTS, COMPONENTS_DYNAMIC],
                entryComponents: [COMPONENTS_DYNAMIC]
            }]
    }], null, null); })();


/***/ }),

/***/ "tEGF":
/*!*****************************************************************************!*\
  !*** ./src/app/main/user-management/role-permission/list/list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _action_dialog_action_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action-dialog/action-dialog.component */ "Li1Y");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/animations */ "PVWW");
/* harmony import */ var app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/rfid/rfid.service */ "QtQ4");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");


















function ListComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r17.id, " ");
} }
function ListComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r18.name, " ");
} }
function ListComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r19.description, " ");
} }
function ListComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " RFID Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r20.rf_id_no, " ");
} }
function ListComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Expiry Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, row_r21.expiry_date, "dd/MM/yyyy"), " ");
} }
function ListComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", row_r22.status == "Y" ? "green" : "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r22.status == "Y" ? "Active" : "Inactive", " ");
} }
function ListComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_td_24_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const element_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.openDialog("EDIT", element_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_td_24_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const element_r23 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.delete(element_r23.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 24);
} }
function ListComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
} }
function ListComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No data matching the filter \"", ctx_r16.input.value, "\" ");
} }
const _c0 = function () { return [10, 30, 50, 100]; };
/**
 * @title Data table with sorting, pagination, and filtering.
 */
class ListComponent {
    constructor(rfidService, dialog, snackBar) {
        // Create 100 users
        // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
        this.rfidService = rfidService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.displayedColumns = ['name', 'description', 'rf_id_no',
            'expiry_date', 'status', 'action'];
        // Assign the data to the data source for the table to render
    }
    ngOnInit() {
        this.getRFids();
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    getRFids() {
        this.rfidService.getAllRfid().subscribe((data) => {
            this.rfid = data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.rfid);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }, (err) => {
        });
    }
    delete(id) {
        // this.rfidService.delete(id).subscribe(
        //   (data:any)=>{
        //     this.getRFids();
        //     this.snackBar.open('Deleted successfully','Dismiss',{duration:2000});
        //   },(err)=>{
        //   }
        // )
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
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(result => {
            // this.moderate(result);
            this.getRFids();
        });
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_6__["RfidService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], viewQuery: function ListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 29, vars: 5, consts: [["fxLayout", "row wrap", 1, "matero-row"], ["fxFlex", "100", 1, "matero-col"], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "description"], ["matColumnDef", "rf_id_no"], ["matColumnDef", "expiry_date"], ["matColumnDef", "status"], ["mat-cell", "", 3, "color", 4, "matCellDef"], ["matColumnDef", "action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["color", "primary", "matTooltip", "Edit", 2, "cursor", "pointer", 3, "click"], ["color", "warn", "matTooltip", "Remove", 2, "cursor", "pointer", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListComponent_th_5_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ListComponent_td_6_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ListComponent_th_8_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListComponent_td_9_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ListComponent_th_11_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ListComponent_td_12_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ListComponent_th_14_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ListComponent_td_15_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ListComponent_th_17_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ListComponent_td_18_Template, 3, 4, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ListComponent_th_20_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ListComponent_td_21_Template, 2, 3, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ListComponent_th_23_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ListComponent_td_24_Template, 5, 0, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ListComponent_tr_25_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ListComponent_tr_26_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ListComponent_tr_27_Template, 3, 1, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-paginator", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatNoDataRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]], styles: ["table {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0E7RUFDSSxXQUFBO0FBYko7O0FBZ0JFO0VBQ0UsWUFBQTtBQWJKIiwiZmlsZSI6Imxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0YWJsZSB7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIH1cclxuICBcclxuLy8gICB0ZCwgdGgge1xyXG4vLyAgICAgd2lkdGg6IDI1JTtcclxuLy8gICB9XHJcbiAgXHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICAiXX0= */"], encapsulation: 2, data: { animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"],
            }]
    }], function () { return [{ type: app_shared_services_rfid_rfid_service__WEBPACK_IMPORTED_MODULE_6__["RfidService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=role-permission-role-permission-module-es2015.js.map