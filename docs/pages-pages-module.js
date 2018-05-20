(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/layout/base-layout/base-layout.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/base-layout/base-layout.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n"

/***/ }),

/***/ "./src/app/layout/base-layout/base-layout.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/base-layout/base-layout.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 24px; }\n"

/***/ }),

/***/ "./src/app/layout/base-layout/base-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/base-layout/base-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: BaseLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLayoutComponent", function() { return BaseLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BaseLayoutComponent = /** @class */ (function () {
    function BaseLayoutComponent() {
    }
    BaseLayoutComponent.prototype.ngOnInit = function () {
    };
    BaseLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'stbui-base-layout',
            template: __webpack_require__(/*! ./base-layout.component.html */ "./src/app/layout/base-layout/base-layout.component.html"),
            styles: [__webpack_require__(/*! ./base-layout.component.scss */ "./src/app/layout/base-layout/base-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BaseLayoutComponent);
    return BaseLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/base-layout/base-layout.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/base-layout/base-layout.module.ts ***!
  \**********************************************************/
/*! exports provided: BaseLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLayoutModule", function() { return BaseLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _base_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-layout.component */ "./src/app/layout/base-layout/base-layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BaseLayoutModule = /** @class */ (function () {
    function BaseLayoutModule() {
    }
    BaseLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_base_layout_component__WEBPACK_IMPORTED_MODULE_2__["BaseLayoutComponent"]],
            exports: [_base_layout_component__WEBPACK_IMPORTED_MODULE_2__["BaseLayoutComponent"]]
        })
    ], BaseLayoutModule);
    return BaseLayoutModule;
}());



/***/ }),

/***/ "./src/app/pages/customer/customer.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/customer/customer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<stbui-base-layout>\r\n\r\n  <div class=\"user-container mat-elevation-z4\">\r\n\r\n  \r\n  </div>\r\n\r\n</stbui-base-layout>\r\n"

/***/ }),

/***/ "./src/app/pages/customer/customer.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/customer/customer.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-container {\n  height: 100%; }\n  .user-container mat-sidenav {\n    width: 240px; }\n  .table {\n  width: 100%;\n  border-spacing: 0; }\n  .table > thead > tr > th {\n    padding: 10px; }\n  .table > tbody > tr > td {\n    padding: 10px;\n    text-align: center; }\n  .table-bordered {\n  border: 1px solid #ccc; }\n  .table-bordered > thead > tr > th {\n    border-left: 1px solid #ccc;\n    border-bottom: 1px solid #ccc; }\n  .table-bordered > thead > tr > th:first-child {\n      border-left: 0; }\n  .table-bordered > tbody > tr > td {\n    border-bottom: 1px solid #ccc;\n    border-left: 1px solid #ccc; }\n  .table-bordered > tbody > tr > td:first-child {\n      border-left: 0; }\n  .nav-list .nav-item {\n  color: #616161;\n  margin: 8px 0; }\n  .nav-list .nav-item .nav-title .icon {\n    margin-right: 12px;\n    font-size: 22px;\n    width: 22px;\n    height: 22px; }\n  .nav-list .nav-item .nav-title .text {\n    font-size: 14px; }\n  .nav-list .nav-item .nav-title .icon, .nav-list .nav-item .nav-title .text {\n    font-weight: 500;\n    vertical-align: middle; }\n  .nav-list .nav-item.active {\n    color: #3F51B5; }\n  .toolbar {\n  color: #616161;\n  position: absolute;\n  background: #ececec;\n  left: 70px;\n  top: 10px;\n  display: none !important; }\n  .toolbar::before {\n    content: \" \";\n    position: absolute;\n    left: -20px;\n    width: 0;\n    height: 0px;\n    border: 10px solid transparent;\n    border-right-color: #ececec; }\n  .toolbar-separator {\n  height: 48px;\n  width: 1px;\n  border-right: 1px solid rgba(0, 0, 0, 0.12);\n  margin: 0 12px; }\n  .show {\n  display: flex !important; }\n"

/***/ }),

/***/ "./src/app/pages/customer/customer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/customer/customer.component.ts ***!
  \******************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(_service) {
        this._service = _service;
        this.checked = false;
        this.sideOpen = true;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        this.getUserList();
    };
    CustomerComponent.prototype.getUserList = function () {
        var _this = this;
        this._service.getUserList();
        this._service.userList$.subscribe(function (res) {
            _this.users = res;
        });
    };
    CustomerComponent.prototype.onEditTriggered = function (user) {
        console.log(user);
    };
    CustomerComponent.prototype.onDeleteTriggered = function (user) {
        var i = this.users.indexOf(user);
        this.users = this.users.slice(0, i).concat(this.users.slice(i + 1));
    };
    CustomerComponent.prototype.onSideTriggered = function () {
        this.sideOpen = false;
    };
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/pages/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.scss */ "./src/app/pages/customer/customer.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('CustomerService')),
        __metadata("design:paramtypes", [Object])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/pages/customer/customer.service.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/customer/customer.service.ts ***!
  \****************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerService = /** @class */ (function () {
    function CustomerService(_http) {
        this._http = _http;
        this.apiUrl = '/assets/data/pages';
        this._userList$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    Object.defineProperty(CustomerService.prototype, "userList$", {
        get: function () {
            return this._userList$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    CustomerService.prototype.getUserList = function () {
        var _this = this;
        var url = this.apiUrl + "/userList.json";
        return this._http.get(url).subscribe(function (res) {
            _this._userList$.next(res);
        });
    };
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/pages/order/order-detail/order-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/order/order-detail/order-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<stbui-base-layout>\r\n\r\n  <mat-horizontal-stepper [linear]=\"false\" #stepper>\r\n    <mat-step>\r\n      <ng-template matStepLabel>General Order Info</ng-template>\r\n      <mat-card class=\"form-container p-4\" >\r\n        <mat-grid-list cols=\"6\" rowHeight=\"70px\">\r\n          <mat-grid-tile  [colspan]=\"3\" [rowspan]=\"1\">\r\n            <mat-form-field style=\"width:100%;\">\r\n              <input matInput placeholder=\"Order Name\" required>\r\n            </mat-form-field>\r\n          </mat-grid-tile>\r\n          <mat-grid-tile  [colspan]=\"3\" [rowspan]=\"1\">\r\n            <mat-form-field style=\"width:100%;\">\r\n              <input matInput [matDatepicker]=\"picker\" placeholder=\"Date of Placement\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker></mat-datepicker>\r\n            </mat-form-field>\r\n          </mat-grid-tile>\r\n        </mat-grid-list>\r\n        \r\n        <mat-form-field>\r\n          <textarea matInput placeholder=\"Order Description\"></textarea>\r\n        </mat-form-field>\r\n        <br/>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input type=\"text\" placeholder=\"Choose Order Type\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\r\n          <mat-autocomplete #auto=\"matAutocomplete\">\r\n            <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n              {{ option }}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n        \r\n        <form class=\"form-container\">\r\n          <div>\r\n            <label>Other Option: </label>\r\n            <mat-radio-group>\r\n              <mat-radio-button value=\"auto\">Option 1</mat-radio-button>\r\n              <mat-radio-button value=\"always\">Option 2</mat-radio-button>\r\n              <mat-radio-button value=\"never\">Option 3</mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n        </form>\r\n      </mat-card>\r\n    </mat-step>\r\n    \r\n    \r\n    <mat-step>\r\n      <ng-template matStepLabel>Samples / Tests</ng-template>\r\n      <mat-grid-list cols=\"5\" rowHeight=\"100px\">\r\n        <mat-grid-tile  [colspan]=\"4\" [rowspan]=\"5\" style=\"position:relative;\">\r\n        <mat-sidenav-container style=\"width: 100%;\">\r\n          <mat-sidenav class=\"mat-elevation-z4\" mode=\"side\" [opened]=\"sideOpen\">\r\n      \r\n            <mat-nav-list class=\"nav-list\">\r\n              <h3 mat-subheader>\r\n                <mat-form-field>\r\n                  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n                </mat-form-field>\r\n                <span fxFlex></span>\r\n              </h3>\r\n              <table class=\"table table-hover\" mat-table #table [dataSource]=\"navItems\">\r\n                <ng-container matColumnDef=\"name\">\r\n                  <td mat-cell *matCellDef=\"let element\" matRipple [ngClass]=\"{'active' : element.id == selectedId}\" (click)=\"elementClicked(element.id)\"> {{element.name}} </td>\r\n                </ng-container>\r\n                <tr mat-row *matRowDef=\"let row; columns: ['name']\"></tr>\r\n              </table>\r\n      \r\n            </mat-nav-list>\r\n          </mat-sidenav>\r\n          \r\n          <div @list class=\"card-item-container\" fxLayout=\"row wrap\">\r\n            \r\n              <div @items fxFlex=\"100\" fxFlex.gt-md=\"32\" fxFlex.gt-sm=\"40\" fxFlex.gt-xs=\"50\" *ngFor=\"let l of list; let i=index\" (click)=\"remove(i)\">\r\n                <mat-card class=\"card-item p-1\">\r\n                  <!--\r\n                  <div class=\"card-item-mask\">\r\n                    <div class=\"card-item-logo\" [ngStyle]=\"{}\"></div>\r\n                  </div>\r\n                  -->\r\n                  <mat-card-header class=\"p-1\">\r\n                    <mat-card-title class=\"card-title p-0\">\r\n                      Flexural properties\r\n                    </mat-card-title>\r\n                    <mat-card-subtitle class=\"card-desc p-0\">Energy required to deform a test..</mat-card-subtitle>\r\n                  </mat-card-header>\r\n\r\n                  <button mat-icon-button>\r\n                    <mat-icon>add</mat-icon>\r\n                    Add\r\n                  </button>\r\n                </mat-card>\r\n              </div>\r\n            </div>\r\n      \r\n        </mat-sidenav-container>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile  [colspan]=\"1\" [rowspan]=\"5\">\r\n      <div class=\"selected-items\" flex>\r\n        <mat-list role=\"list\">\r\n          <mat-list-item role=\"listitem\" *ngFor=\"let l of selectedList; let i=index\">Flexural properties</mat-list-item>\r\n        </mat-list>\r\n      </div>\r\n    </mat-grid-tile>\r\n    </mat-grid-list>\r\n    </mat-step>\r\n    <mat-step>\r\n      <ng-template matStepLabel>Overview / XML</ng-template>\r\n    </mat-step>\r\n  </mat-horizontal-stepper>\r\n\r\n</stbui-base-layout>\r\n"

/***/ }),

/***/ "./src/app/pages/order/order-detail/order-detail.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/order/order-detail/order-detail.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected-items {\n  width: 100%;\n  min-height: calc(100vh - 200px); }\n\n.example-container {\n  display: flex;\n  flex-direction: column; }\n\n.form-container > * {\n  width: 100%; }\n\n.form-container form {\n  margin-bottom: 20px; }\n\n.form-container form > * {\n  margin: 5px 0; }\n\n.form-container .mat-radio-button {\n  margin: 0 5px; }\n\nmat-card {\n  margin: 10px; }\n\nmat-sidenav-container {\n  min-height: calc(100vh - 200px); }\n\n.nav-list {\n  padding-top: 15px; }\n\n.nav-list td {\n    position: relative;\n    padding-top: 15px;\n    border: 0;\n    cursor: pointer; }\n\n.nav-list .active {\n    background: #ffab40; }\n\n.card-item-container {\n  margin-left: 15px;\n  overflow: hidden; }\n\n.card-title a {\n  font-size: 16px;\n  text-decoration: none; }\n\n.card-desc {\n  max-height: 100px;\n  overflow: hidden; }\n\n.card-item {\n  height: 150px;\n  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n  cursor: pointer;\n  /*\r\n  &-mask {\r\n    position: relative;\r\n    height: 44px;\r\n    width: calc(100% + 48px);\r\n    top: -24px;\r\n    left: -24px;\r\n    border-radius: 4px 4px 0 0;\r\n    background: #1956ef;\r\n    background: linear-gradient(90deg, #1956ef, #30a0f8);\r\n  }\r\n\r\n  &-logo {\r\n    height: 40px;\r\n    width: 56%;\r\n    margin: 0 22%;\r\n    text-align: center;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    background-position: center;\r\n  }*/ }\n\n.card-item:hover {\n    -webkit-transform: translate(0, -1px);\n            transform: translate(0, -1px);\n    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.16); }\n\n.card-item > img {\n    height: 40px; }\n"

/***/ }),

/***/ "./src/app/pages/order/order-detail/order-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/order/order-detail/order-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: OrderDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailComponent", function() { return OrderDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderDetailComponent = /** @class */ (function () {
    function OrderDetailComponent() {
        this.sideOpen = true;
        this.selectedId = 0;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.navItems = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](NAV_ITEM_DATA);
        this.options = [
            'One',
            'Two',
            'Three'
        ];
        //animation
        this.list = [1, 2, 3, 4, 5, 6, 7, 8];
        this.selectedList = [];
        this.counter = this.list.length + 1;
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (val) { return _this.filterOption(val); }));
    };
    OrderDetailComponent.prototype.filterOption = function (val) {
        return this.options.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    OrderDetailComponent.prototype.add = function () {
        this.list.push(this.counter++);
    };
    OrderDetailComponent.prototype.remove = function (index) {
        if (!this.list.length) {
            return;
        }
        this.list.splice(index, 1);
        this.selectedList.push(index);
    };
    OrderDetailComponent.prototype.elementClicked = function (id) {
        this.list = [];
        this.selectedId = id;
        var length = Math.floor(Math.random() * 4) + 4;
        this.add();
        this.recursiveAdd(length);
    };
    OrderDetailComponent.prototype.recursiveAdd = function (length) {
        var self = this;
        setTimeout(function () {
            self.add();
            length--;
            if (length > 0) {
                self.recursiveAdd(length);
            }
            else {
                return;
            }
        }, 100);
    };
    OrderDetailComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.navItems.filter = filterValue;
    };
    OrderDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-detail',
            template: __webpack_require__(/*! ./order-detail.component.html */ "./src/app/pages/order/order-detail/order-detail.component.html"),
            styles: [__webpack_require__(/*! ./order-detail.component.scss */ "./src/app/pages/order/order-detail/order-detail.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('items', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'scale(0.5)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.7s cubic-bezier(.8, -0.6, 0.26, 1.6)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'scale(1)', opacity: 1 })) // final
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('list', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('@items', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])(150, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animateChild"])()))
                    ]),
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], OrderDetailComponent);
    return OrderDetailComponent;
}());

var NAV_ITEM_DATA = [
    { id: 0, name: 'Mechanical Testing', icon: 'mail' },
    { id: 1, name: 'Ageing Testing', icon: 'mail' },
    { id: 2, name: 'Analytical Service for Polymers', icon: 'mail' },
    { id: 3, name: 'PolymerChemistry', icon: 'mail' },
];


/***/ }),

/***/ "./src/app/pages/order/order-detail/order-detail.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/order/order-detail/order-detail.service.ts ***!
  \******************************************************************/
/*! exports provided: OrderDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailService", function() { return OrderDetailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderDetailService = /** @class */ (function () {
    function OrderDetailService(_http) {
        this._http = _http;
        this.apiUrl = '/assets/data/pages';
        this._userList$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    Object.defineProperty(OrderDetailService.prototype, "userList$", {
        get: function () {
            return this._userList$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    OrderDetailService.prototype.getUserList = function () {
        var _this = this;
        var url = this.apiUrl + "/userList.json";
        return this._http.get(url).subscribe(function (res) {
            _this._userList$.next(res);
        });
    };
    OrderDetailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrderDetailService);
    return OrderDetailService;
}());



/***/ }),

/***/ "./src/app/pages/order/order.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/order/order.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<stbui-base-layout>\r\n  <h5>Orders</h5>\r\n  <div class=\"order-container mat-elevation-z4\">\r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n      <!-- Checkbox Column -->\r\n      <ng-container matColumnDef=\"select\">\r\n        <mat-header-cell *matHeaderCellDef>\r\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n                        [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\r\n          </mat-checkbox>\r\n        </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\">\r\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\r\n                        (change)=\"$event ? selection.toggle(row) : null\"\r\n                        [checked]=\"selection.isSelected(row)\">\r\n          </mat-checkbox>\r\n        </mat-cell>\r\n      </ng-container>\r\n      \r\n      <ng-container matColumnDef=\"id\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> order id </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.userId}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <!-- User name Definition -->\r\n      <ng-container matColumnDef=\"email\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> order name </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.loginName}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <!-- User name Definition -->\r\n      <ng-container matColumnDef=\"status\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> order state </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.state}} </mat-cell>\r\n      </ng-container>\r\n    \r\n      <!-- Age Definition -->\r\n      <ng-container matColumnDef=\"date\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Date of Placement </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.lastLoginTime}} </mat-cell>\r\n      </ng-container>\r\n    \r\n      <!-- Title Definition -->\r\n      <ng-container matColumnDef=\"ip\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> IP adderess </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.lastLoginIp}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <!-- Delete Action -->\r\n      <ng-container matColumnDef=\"action\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header></mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\">\r\n          <td>\r\n            <button mat-icon-button (click)=\"onDeleteTriggered(row)\">\r\n              <mat-icon>delete</mat-icon>\r\n            </button>\r\n          </td>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n    \r\n      <!-- Header and Row Declarations -->\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns\" (click)=\"selection.toggle(row)\"></mat-row>\r\n    </mat-table>\r\n    <mat-paginator #paginator\r\n      [pageSize]=\"5\"\r\n      [pageSizeOptions]=\"[5, 10, 20]\"\r\n      [showFirstLastButtons]=\"true\">\r\n    </mat-paginator>\r\n\r\n  </div>\r\n  <div class=\"add-order-button-container\">\r\n    <button mat-fab (click)=\"onNewOrderClicked()\">\r\n      <mat-icon>playlist_add</mat-icon>\r\n    </button>\r\n  </div>\r\n\r\n</stbui-base-layout>\r\n"

/***/ }),

/***/ "./src/app/pages/order/order.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/order/order.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".order-container {\n  height: 100%; }\n  .order-container mat-sidenav {\n    width: 240px; }\n  .add-order-button-container {\n  position: absolute;\n  bottom: 15px;\n  right: 50px; }\n  .mat-column-select {\n  overflow: visible; }\n  .mat-header-cell.mat-sort-header-sorted {\n  color: black; }\n  .table {\n  width: 100%;\n  border-spacing: 0; }\n  .table > thead > tr > th {\n    padding: 10px; }\n  .table > tbody > tr > td {\n    padding: 10px;\n    text-align: center; }\n  .table-bordered {\n  border: 1px solid #ccc; }\n  .table-bordered > thead > tr > th {\n    border-left: 1px solid #ccc;\n    border-bottom: 1px solid #ccc; }\n  .table-bordered > thead > tr > th:first-child {\n      border-left: 0; }\n  .table-bordered > thead > tr > th .table {\n      width: 100%;\n      border-spacing: 0; }\n  .table-bordered > thead > tr > th .table > thead > tr > th {\n        padding: 10px; }\n  .table-bordered > thead > tr > th .table > tbody > tr > td {\n        padding: 10px;\n        text-align: center; }\n  .table-bordered > thead > tr > th .table-bordered {\n      border: 1px solid #ccc; }\n  .table-bordered > thead > tr > th .table-bordered > thead > tr > th {\n        border-left: 1px solid #ccc;\n        border-bottom: 1px solid #ccc; }\n  .table-bordered > thead > tr > th .table-bordered > thead > tr > th:first-child {\n          border-left: 0; }\n  .table-bordered > thead > tr > th .table-bordered > tbody > tr > td {\n        border-bottom: 1px solid #ccc;\n        border-left: 1px solid #ccc; }\n  .table-bordered > thead > tr > th .table-bordered > tbody > tr > td:first-child {\n          border-left: 0; }\n  .table-bordered > thead > tr > th .nav-list .nav-item {\n      color: #616161;\n      margin: 8px 0; }\n  .table-bordered > thead > tr > th .nav-list .nav-item .nav-title .icon {\n        margin-right: 12px;\n        font-size: 22px;\n        width: 22px;\n        height: 22px; }\n  .table-bordered > thead > tr > th .nav-list .nav-item .nav-title .text {\n        font-size: 14px; }\n  .table-bordered > thead > tr > th .nav-list .nav-item .nav-title .icon, .table-bordered > thead > tr > th .nav-list .nav-item .nav-title .text {\n        font-weight: 500;\n        vertical-align: middle; }\n  .table-bordered > thead > tr > th .nav-list .nav-item.active {\n        color: #3F51B5; }\n  .table-bordered > thead > tr > th .toolbar {\n      color: #616161;\n      position: absolute;\n      background: #ececec;\n      left: 70px;\n      top: 10px;\n      display: none !important; }\n  .table-bordered > thead > tr > th .toolbar::before {\n        content: \" \";\n        position: absolute;\n        left: -20px;\n        width: 0;\n        height: 0px;\n        border: 10px solid transparent;\n        border-right-color: #ececec; }\n  .table-bordered > thead > tr > th .toolbar-separator {\n      height: 48px;\n      width: 1px;\n      border-right: 1px solid rgba(0, 0, 0, 0.12);\n      margin: 0 12px; }\n  .table-bordered > thead > tr > th .show {\n      display: flex !important; }\n  .table-bordered > tbody > tr > td {\n    border-bottom: 1px solid #ccc;\n    border-left: 1px solid #ccc; }\n  .table-bordered > tbody > tr > td:first-child {\n      border-left: 0; }\n  .nav-list .nav-item {\n  color: #616161;\n  margin: 8px 0; }\n  .nav-list .nav-item .nav-title .icon {\n    margin-right: 12px;\n    font-size: 22px;\n    width: 22px;\n    height: 22px; }\n  .nav-list .nav-item .nav-title .text {\n    font-size: 14px; }\n  .nav-list .nav-item .nav-title .icon, .nav-list .nav-item .nav-title .text {\n    font-weight: 500;\n    vertical-align: middle; }\n  .nav-list .nav-item.active {\n    color: #3F51B5; }\n  .toolbar {\n  color: #616161;\n  position: absolute;\n  background: #ececec;\n  left: 70px;\n  top: 10px;\n  display: none !important; }\n  .toolbar::before {\n    content: \" \";\n    position: absolute;\n    left: -20px;\n    width: 0;\n    height: 0px;\n    border: 10px solid transparent;\n    border-right-color: #ececec; }\n  .toolbar-separator {\n  height: 48px;\n  width: 1px;\n  border-right: 1px solid rgba(0, 0, 0, 0.12);\n  margin: 0 12px; }\n  .show {\n  display: flex !important; }\n"

/***/ }),

/***/ "./src/app/pages/order/order.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/order/order.component.ts ***!
  \************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderComponent = /** @class */ (function () {
    function OrderComponent(router) {
        this.router = router;
        this.dataList = [
            {
                "userId": 9,
                "loginName": "my order1",
                "loginCount": 39340,
                "state": "pending",
                "lastLoginTime": "2017-07-24 18:37:28",
                "lastLoginIp": "49.77.233.147",
                "createTime": "2017-04-13 12:15:43",
                "tenantId": 8
            },
            {
                "userId": 10,
                "loginName": "my order2",
                "loginCount": 8524,
                "state": "pending",
                "lastLoginTime": "2017-07-24 18:50:12",
                "lastLoginIp": "180.173.34.254",
                "createTime": "2017-04-13 12:30:59",
                "tenantId": 8
            },
            {
                "userId": 11,
                "loginName": "my order2",
                "loginCount": 3843,
                "state": "pending",
                "lastLoginTime": "2017-07-24 18:46:18",
                "lastLoginIp": "123.14.28.60",
                "createTime": "2017-04-14 15:19:09",
                "tenantId": 8
            },
            {
                "userId": 12,
                "loginName": "my order5",
                "loginCount": 1663,
                "state": "pending",
                "lastLoginTime": "2017-07-24 18:19:11",
                "lastLoginIp": "221.214.13.226",
                "createTime": "2017-04-14 15:19:43",
                "tenantId": 8
            },
            {
                "userId": 13,
                "loginName": "my order 6",
                "loginCount": 1648,
                "state": "pending",
                "lastLoginTime": "2017-07-24 17:48:35",
                "lastLoginIp": "171.221.227.31",
                "createTime": "2017-04-14 15:20:10",
                "tenantId": 8
            },
            {
                "userId": 14,
                "loginName": "my order 8",
                "loginCount": 1471,
                "state": "pending",
                "lastLoginTime": "2017-07-24 17:36:46",
                "lastLoginIp": "42.228.9.138",
                "createTime": "2017-04-14 15:20:39",
                "tenantId": 8
            },
            {
                "userId": 15,
                "loginName": "my order",
                "loginCount": 1459,
                "state": "pending",
                "lastLoginTime": "2017-07-24 16:55:04",
                "lastLoginIp": "123.118.189.185",
                "createTime": "2017-04-14 15:21:01",
                "tenantId": 8
            }
        ];
        this.checked = false;
        this.sideOpen = true;
        this.displayedColumns = ['select', 'id', 'email', 'status', 'date', 'ip', 'action'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](null);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
    }
    OrderComponent.prototype.ngOnInit = function () {
        this.dataSource.data = this.dataList;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    /** Whether the number of selected elements matches the total number of rows. */
    OrderComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    OrderComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    OrderComponent.prototype.onEditTriggered = function (user) {
        console.log(user);
    };
    OrderComponent.prototype.onDeleteTriggered = function (user) {
        var i = this.dataSource.data.indexOf(user);
        this.dataSource.data = this.dataSource.data.slice(0, i).concat(this.dataSource.data.slice(i + 1));
    };
    OrderComponent.prototype.onSideTriggered = function () {
        this.sideOpen = false;
    };
    OrderComponent.prototype.onNewOrderClicked = function () {
        this.router.navigate(['/order/detail']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], OrderComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], OrderComponent.prototype, "paginator", void 0);
    OrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/pages/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.scss */ "./src/app/pages/order/order.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/pages/order/order.service.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/order/order.service.ts ***!
  \**********************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderService = /** @class */ (function () {
    function OrderService(_http) {
        this._http = _http;
        this.apiUrl = '/assets/data/pages';
        this._userList$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    Object.defineProperty(OrderService.prototype, "userList$", {
        get: function () {
            return this._userList$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    OrderService.prototype.getUserList = function () {
        var _this = this;
        var url = this.apiUrl + "/userList.json";
        return this._http.get(url).subscribe(function (res) {
            _this._userList$.next(res);
        });
    };
    OrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.html":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/pages.component.scss":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagesComponent = /** @class */ (function () {
    function PagesComponent() {
    }
    PagesComponent.prototype.ngOnInit = function () {
    };
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/pages/pages.component.html"),
            styles: [__webpack_require__(/*! ./pages.component.scss */ "./src/app/pages/pages.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _layout_base_layout_base_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/base-layout/base-layout.module */ "./src/app/layout/base-layout/base-layout.module.ts");
/* harmony import */ var _pages_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages.routing */ "./src/app/pages/pages.routing.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user.component */ "./src/app/pages/user/user.component.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/user.service */ "./src/app/pages/user/user.service.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/pages/customer/customer.component.ts");
/* harmony import */ var _customer_customer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customer/customer.service */ "./src/app/pages/customer/customer.service.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./order/order.component */ "./src/app/pages/order/order.component.ts");
/* harmony import */ var _order_order_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./order/order.service */ "./src/app/pages/order/order.service.ts");
/* harmony import */ var _order_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./order/order-detail/order-detail.component */ "./src/app/pages/order/order-detail/order-detail.component.ts");
/* harmony import */ var _order_order_detail_order_detail_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./order/order-detail/order-detail.service */ "./src/app/pages/order/order-detail/order-detail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _pages_routing__WEBPACK_IMPORTED_MODULE_4__["PagesRoutingModule"], _layout_base_layout_base_layout_module__WEBPACK_IMPORTED_MODULE_3__["BaseLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]],
            declarations: [
                _pages_component__WEBPACK_IMPORTED_MODULE_5__["PagesComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"],
                _customer_customer_component__WEBPACK_IMPORTED_MODULE_9__["CustomerComponent"],
                _order_order_component__WEBPACK_IMPORTED_MODULE_11__["OrderComponent"],
                _order_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_13__["OrderDetailComponent"],
            ],
            providers: [
                { provide: 'UserService', useClass: _user_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
                { provide: 'CustomerService', useClass: _customer_customer_service__WEBPACK_IMPORTED_MODULE_10__["CustomerService"] },
                { provide: 'OrderService', useClass: _order_order_service__WEBPACK_IMPORTED_MODULE_12__["OrderService"] },
                { provide: 'OrderDetailService', useClass: _order_order_detail_order_detail_service__WEBPACK_IMPORTED_MODULE_14__["OrderDetailService"] },
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.routing.ts":
/*!****************************************!*\
  !*** ./src/app/pages/pages.routing.ts ***!
  \****************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user.component */ "./src/app/pages/user/user.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/pages/customer/customer.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order/order.component */ "./src/app/pages/order/order.component.ts");
/* harmony import */ var _order_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order/order-detail/order-detail.component */ "./src/app/pages/order/order-detail/order-detail.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"]
    },
    {
        path: 'user',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"]
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]
    },
    {
        path: 'order',
        component: _order_order_component__WEBPACK_IMPORTED_MODULE_4__["OrderComponent"]
    },
    {
        path: 'order/detail',
        component: _order_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_5__["OrderDetailComponent"]
    },
    {
        path: 'customer',
        component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"]
    },
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/profile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<stbui-base-layout>\r\n\r\n  <div fxLayout=\"row\">\r\n    <div class=\"profile m-r-20\" fxFlex=\"340px\">\r\n      <mat-card fxFlex>\r\n        <div mat-card-image class=\"profile-image\"></div>\r\n        <div class=\"profile-image-avatar text-center\">\r\n          <img class=\"avatar\"\r\n               src=\"https://lh5.googleusercontent.com/-hcRNe540rco/AAAAAAAAAAI/AAAAAAAAAAk/DfS45tpAR-A/photo.jpg\">\r\n        </div>\r\n        <mat-card-content class=\"text-center\">\r\n          <h4 class=\"mat-card-title\">stbui</h4>\r\n          <h6 class=\"mat-card-subtitle\">前端工程师</h6>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n\r\n\r\n    <mat-card fxFlex>\r\n      <mat-card-title>我的信息</mat-card-title>\r\n      <mat-card-content>\r\n        <form fxLayout=\"column\" #formContact=\"ngForm\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"您的名字\" name=\"name\" ngModel required minlength=\"4\" maxlength=\"10\">\r\n          </mat-form-field>\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"您的邮箱\" name=\"email\" ngModel required>\r\n          </mat-form-field>\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"您的手机\" name=\"phone\" ngModel required>\r\n          </mat-form-field>\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"请您的网址\" name=\"website ngModel\" required>\r\n          </mat-form-field>\r\n          <mat-form-field class=\"full-width\">\r\n            <textarea matInput placeholder=\"留言\" rows=\"3\" name=\"message\" ngModel required></textarea>\r\n          </mat-form-field>\r\n          <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!formContact.valid\">更新资料</button>\r\n        </form>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</stbui-base-layout>\r\n"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/profile.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-image {\n  background: linear-gradient(90deg, #00d9bf, #00d977);\n  height: 180px; }\n\n.profile-image-avatar {\n  margin-top: -80px;\n  margin-bottom: 20px; }\n\n.profile-image-avatar > .avatar {\n    border-radius: 100%;\n    width: 100px;\n    height: 100px;\n    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2); }\n\n.full-width {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/pages/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/pages/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/user/user.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/user/user.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<stbui-base-layout>\r\n\r\n  <div class=\"user-container mat-elevation-z4\">\r\n\r\n  </div>\r\n\r\n</stbui-base-layout>\r\n"

/***/ }),

/***/ "./src/app/pages/user/user.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/user/user.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-container {\n  height: 100%; }\n  .user-container mat-sidenav {\n    width: 240px; }\n  .table {\n  width: 100%;\n  border-spacing: 0; }\n  .table > thead > tr > th {\n    padding: 10px; }\n  .table > tbody > tr > td {\n    padding: 10px;\n    text-align: center; }\n  .table-bordered {\n  border: 1px solid #ccc; }\n  .table-bordered > thead > tr > th {\n    border-left: 1px solid #ccc;\n    border-bottom: 1px solid #ccc; }\n  .table-bordered > thead > tr > th:first-child {\n      border-left: 0; }\n  .table-bordered > tbody > tr > td {\n    border-bottom: 1px solid #ccc;\n    border-left: 1px solid #ccc; }\n  .table-bordered > tbody > tr > td:first-child {\n      border-left: 0; }\n  .nav-list .nav-item {\n  color: #616161;\n  margin: 8px 0; }\n  .nav-list .nav-item .nav-title .icon {\n    margin-right: 12px;\n    font-size: 22px;\n    width: 22px;\n    height: 22px; }\n  .nav-list .nav-item .nav-title .text {\n    font-size: 14px; }\n  .nav-list .nav-item .nav-title .icon, .nav-list .nav-item .nav-title .text {\n    font-weight: 500;\n    vertical-align: middle; }\n  .nav-list .nav-item.active {\n    color: #3F51B5; }\n  .toolbar {\n  color: #616161;\n  position: absolute;\n  background: #ececec;\n  left: 70px;\n  top: 10px;\n  display: none !important; }\n  .toolbar::before {\n    content: \" \";\n    position: absolute;\n    left: -20px;\n    width: 0;\n    height: 0px;\n    border: 10px solid transparent;\n    border-right-color: #ececec; }\n  .toolbar-separator {\n  height: 48px;\n  width: 1px;\n  border-right: 1px solid rgba(0, 0, 0, 0.12);\n  margin: 0 12px; }\n  .show {\n  display: flex !important; }\n"

/***/ }),

/***/ "./src/app/pages/user/user.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/user/user.component.ts ***!
  \**********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var UserComponent = /** @class */ (function () {
    function UserComponent(_service) {
        this._service = _service;
        this.checked = false;
        this.sideOpen = true;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getUserList();
    };
    UserComponent.prototype.getUserList = function () {
        var _this = this;
        this._service.getUserList();
        this._service.userList$.subscribe(function (res) {
            _this.users = res;
        });
    };
    UserComponent.prototype.onEditTriggered = function (user) {
        console.log(user);
    };
    UserComponent.prototype.onDeleteTriggered = function (user) {
        var i = this.users.indexOf(user);
        this.users = this.users.slice(0, i).concat(this.users.slice(i + 1));
    };
    UserComponent.prototype.onSideTriggered = function () {
        this.sideOpen = false;
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/pages/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/pages/user/user.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('UserService')),
        __metadata("design:paramtypes", [Object])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/pages/user/user.service.ts":
/*!********************************************!*\
  !*** ./src/app/pages/user/user.service.ts ***!
  \********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        this.apiUrl = '/assets/data/pages';
        this._userList$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    Object.defineProperty(UserService.prototype, "userList$", {
        get: function () {
            return this._userList$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.getUserList = function () {
        var _this = this;
        var url = this.apiUrl + "/userList.json";
        return this._http.get(url).subscribe(function (res) {
            _this._userList$.next(res);
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map