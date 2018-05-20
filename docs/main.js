(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": [
		"./src/app/admin/admin.module.ts",
		"admin-admin-module"
	],
	"./pages/pages.module": [
		"./src/app/pages/pages.module.ts",
		"pages-pages-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/signin/signin.component */ "./src/app/pages/signin/signin.component.ts");
/* harmony import */ var _shared_firebase_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/firebase.module */ "./src/app/shared/firebase.module.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
                _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_11__["SigninComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _shared_firebase_module__WEBPACK_IMPORTED_MODULE_12__["FireBaseComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"]['ngsw'] ? _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["ServiceWorkerModule"].register('./ngsw-worker.js') : []
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/signin/signin.component */ "./src/app/pages/signin/signin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: 'order', pathMatch: 'full' },
    { path: 'signin', component: _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"] },
    { path: 'signup', component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    {
        path: '',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            { path: '', loadChildren: './pages/pages.module#PagesModule' },
            {
                path: 'admin',
                loadChildren: './admin/admin.module#AdminModule'
            }
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/component/loading/index.ts":
/*!********************************************!*\
  !*** ./src/app/component/loading/index.ts ***!
  \********************************************/
/*! exports provided: LoadingModule, LoadingComponent, SkeletonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ "./src/app/component/loading/public-api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["LoadingModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["LoadingComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SkeletonComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["SkeletonComponent"]; });

/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */



/***/ }),

/***/ "./src/app/component/loading/loading.component.html":
/*!**********************************************************!*\
  !*** ./src/app/component/loading/loading.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"logo\"><span>S</span></div>\n  <div class=\"info\">请稍等</div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/loading/loading.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/component/loading/loading.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  background: rgba(0, 0, 0, 0.5);\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0; }\n\n.wrapper {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.logo {\n  width: 96px;\n  height: 96px;\n  line-height: 96px;\n  margin: 10px auto;\n  background: #3F51B5;\n  text-align: center;\n  border-radius: 2px;\n  box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.22); }\n\n.logo > span {\n  display: inline-block;\n  color: #fff;\n  font-size: 56px;\n  -webkit-animation: rotate 1.5s infinite linear;\n          animation: rotate 1.5s infinite linear; }\n\n.info {\n  color: white;\n  text-align: center; }\n\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n"

/***/ }),

/***/ "./src/app/component/loading/loading.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/loading/loading.component.ts ***!
  \********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
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

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'stbui-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/component/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.scss */ "./src/app/component/loading/loading.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/component/loading/loading.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/component/loading/loading.module.ts ***!
  \*****************************************************/
/*! exports provided: LoadingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingModule", function() { return LoadingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading.component */ "./src/app/component/loading/loading.component.ts");
/* harmony import */ var _skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skeleton/skeleton.component */ "./src/app/component/loading/skeleton/skeleton.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoadingModule = /** @class */ (function () {
    function LoadingModule() {
    }
    LoadingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"]],
            declarations: [_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], _skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_4__["SkeletonComponent"]],
            exports: [_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], _skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_4__["SkeletonComponent"]]
        })
    ], LoadingModule);
    return LoadingModule;
}());



/***/ }),

/***/ "./src/app/component/loading/public-api.ts":
/*!*************************************************!*\
  !*** ./src/app/component/loading/public-api.ts ***!
  \*************************************************/
/*! exports provided: LoadingModule, LoadingComponent, SkeletonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loading_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.module */ "./src/app/component/loading/loading.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingModule", function() { return _loading_module__WEBPACK_IMPORTED_MODULE_0__["LoadingModule"]; });

/* harmony import */ var _loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.component */ "./src/app/component/loading/loading.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return _loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"]; });

/* harmony import */ var _skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skeleton/skeleton.component */ "./src/app/component/loading/skeleton/skeleton.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SkeletonComponent", function() { return _skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_2__["SkeletonComponent"]; });

/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */





/***/ }),

/***/ "./src/app/component/loading/skeleton/skeleton.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/loading/skeleton/skeleton.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>\n    <p class=\"card-loading-block\" style=\"width: 94%\"></p>\n  </mat-card-title>\n  <div class=\"card-loading-content\">\n    <p class=\"card-loading-block\" style=\"width: 94%\"></p>\n    <p>\n      <span class=\"card-loading-block\" style=\"width: 28%\"></span>\n      <span class=\"card-loading-block\" style=\"width: 62%\"></span>\n    </p>\n    <p>\n      <span class=\"card-loading-block\" style=\"width: 22%\"></span>\n      <span class=\"card-loading-block\" style=\"width: 66%\"></span>\n    </p>\n    <p>\n      <span class=\"card-loading-block\" style=\"width: 56%\"></span>\n      <span class=\"card-loading-block\" style=\"width: 39%\"></span>\n    </p>\n    <p>\n      <span class=\"card-loading-block\" style=\"width: 21%\"></span>\n      <span class=\"card-loading-block\" style=\"width: 15%\"></span>\n      <span class=\"card-loading-block\" style=\"width: 40%\"></span>\n    </p>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/component/loading/skeleton/skeleton.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/component/loading/skeleton/skeleton.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  margin: 10px; }\n\n.card-loading-content p {\n  margin: 0; }\n\n.card-loading-block {\n  display: inline-block;\n  margin: 5px 2% 0 0;\n  height: 14px;\n  border-radius: 2px;\n  background: linear-gradient(90deg, rgba(207, 216, 220, 0.2), rgba(207, 216, 220, 0.4), rgba(207, 216, 220, 0.2));\n  -webkit-animation: card-loading 1.4s ease infinite;\n          animation: card-loading 1.4s ease infinite;\n  background-size: 600% 600%; }\n\n@-webkit-keyframes card-loading {\n  0%,\n  100% {\n    background-position: 0 50%; }\n  50% {\n    background-position: 100% 50%; } }\n\n@keyframes card-loading {\n  0%,\n  100% {\n    background-position: 0 50%; }\n  50% {\n    background-position: 100% 50%; } }\n"

/***/ }),

/***/ "./src/app/component/loading/skeleton/skeleton.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/loading/skeleton/skeleton.component.ts ***!
  \******************************************************************/
/*! exports provided: SkeletonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonComponent", function() { return SkeletonComponent; });
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

var SkeletonComponent = /** @class */ (function () {
    function SkeletonComponent() {
    }
    SkeletonComponent.prototype.ngOnInit = function () {
    };
    SkeletonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'stbui-loading-skeleton',
            template: __webpack_require__(/*! ./skeleton.component.html */ "./src/app/component/loading/skeleton/skeleton.component.html"),
            styles: [__webpack_require__(/*! ./skeleton.component.scss */ "./src/app/component/loading/skeleton/skeleton.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SkeletonComponent);
    return SkeletonComponent;
}());



/***/ }),

/***/ "./src/app/core/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(afAuth, db) {
        var _this = this;
        this.afAuth = afAuth;
        this.db = db;
        this.authState = null; // 用户信息
        this.afAuth.authState.subscribe(function (auth) {
            _this.authState = auth;
        });
    }
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.authState !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUser", {
        // 当前用户
        get: function () {
            return this.authenticated ? this.authState : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserObservable", {
        get: function () {
            return this.afAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserId", {
        // 当前登录用户id
        get: function () {
            return this.authenticated ? this.authState.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserName", {
        // 用户账号
        get: function () {
            if (!this.authState) {
                return 'Admin';
            }
            else {
                return this.authState['displayName'] || '佚名';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserAnonymous", {
        // 匿名用户
        get: function () {
            return this.authenticated ? this.authState.anonymous : false;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.githubLogin = function () {
        var _this = this;
        var provide = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GithubAuthProvider();
        return this.afAuth.auth.signInWithPopup(provide).then(function (credential) {
            _this.authState = credential.user;
            _this.updateUserData();
        }).catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.googleLogin = function () {
        var _this = this;
        var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
        return this.afAuth.auth.signInWithPopup(provider).then(function (credential) {
            _this.authState = credential.user;
            _this.updateUserData();
        }).catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.twitterLogin = function () {
        var _this = this;
        var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].TwitterAuthProvider();
        return this.afAuth.auth.signInWithPopup(provider).then(function (credential) {
            _this.authState = credential.user;
            _this.updateUserData();
        }).catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.anonymousLogin = function () {
        var _this = this;
        return this.afAuth.auth.signInAnonymously().then(function (user) {
            _this.authState = user;
            _this.updateUserData();
        }).catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.emailLogin = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (user) {
            _this.authState = user;
            _this.updateUserData();
        });
    };
    /**
     *  邮箱注册
     * */
    AuthService.prototype.emailSignUp = function (email, password) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function (user) {
            _this.authState = user;
            _this.updateUserData();
        }).catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.resetPassword = function (email) {
        var fbAuth = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]();
        return fbAuth.sendPasswordResetEmail(email).then(function () {
            console.log('密码已发到你的邮箱中');
        }).catch(function (error) { return console.log('密码重置出错', error); });
    };
    /**
     *  退出登录
     * */
    AuthService.prototype.signOut = function () {
        var _this = this;
        return this.afAuth.auth.signOut().then(function () {
            _this.authState = null;
        }).catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.updateUserData = function () {
        var path = "users/" + this.currentUserId;
        this.userRef = this.db.object(path);
        var data = {
            email: this.authState.email,
            name: this.authState.displayName
        };
        this.userRef.update(data).catch(function (error) { return console.log('更新用户数据：', error); });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/config.service.ts":
/*!****************************************!*\
  !*** ./src/app/core/config.service.ts ***!
  \****************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.defaultSettings = {
            colorClasses: {
                header: 'stbui-background-white',
                footer: 'stbui-background-blue',
                brand: 'stbui-background-blue',
                navigation: 'stbui-background-dark'
            },
            layout: {
                mode: 'fullwidth',
                navigation: 'left',
                header: 'below',
                footer: 'below'
            }
        };
        this.settings = Object.assign({}, this.defaultSettings);
        this.onSettingsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.settings);
    }
    ConfigService.prototype.setSettings = function (setting) {
        this.settings = Object.assign({}, this.settings, setting);
        this.onSettingsChanged.next(this.settings);
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.service */ "./src/app/core/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/layout/brand/brand.component.html":
/*!***************************************************!*\
  !*** ./src/app/layout/brand/brand.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"brand-toolbar mat-elevation-z2\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n  <mat-icon>view_compact</mat-icon>\n  <img class=\"logo-image\" src=\"assets/logo.png\"/>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/brand/brand.component.scss":
/*!***************************************************!*\
  !*** ./src/app/layout/brand/brand.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n.brand-toolbar {\n  height: 64px;\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  padding: 20px;\n  width: 100%;\n  background: #ffab40; }\n\n.logo-image {\n  height: 100%;\n  margin-left: 15px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position-x: center;\n  background-position-y: center; }\n"

/***/ }),

/***/ "./src/app/layout/brand/brand.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/brand/brand.component.ts ***!
  \*************************************************/
/*! exports provided: BrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandComponent", function() { return BrandComponent; });
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

var BrandComponent = /** @class */ (function () {
    function BrandComponent() {
    }
    BrandComponent.prototype.ngOnInit = function () {
    };
    BrandComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brand',
            template: __webpack_require__(/*! ./brand.component.html */ "./src/app/layout/brand/brand.component.html"),
            styles: [__webpack_require__(/*! ./brand.component.scss */ "./src/app/layout/brand/brand.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BrandComponent);
    return BrandComponent;
}());



/***/ }),

/***/ "./src/app/layout/customizer/customizer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/customizer/customizer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"customizer-container\" fxLayout=\"column\">\r\n  <div class=\"m-t-10\">header</div>\r\n  <mat-radio-group class=\"customizer-radio-group\" [(ngModel)]=\"settings.colorClasses.header\"\r\n                   (ngModelChange)=\"onSettingsChange()\">\r\n    <mat-radio-button class=\"customizer-radio-button\" *ngFor=\"let color of _colors\" [value]=\"'stbui-background-'+color\">{{color}}\r\n    </mat-radio-button>\r\n  </mat-radio-group>\r\n\r\n  <div class=\"m-t-10\">brand</div>\r\n  <mat-radio-group class=\"customizer-radio-group\" [(ngModel)]=\"settings.colorClasses.brand\"\r\n                   (ngModelChange)=\"onSettingsChange()\">\r\n    <mat-radio-button class=\"customizer-radio-button\" *ngFor=\"let color of _colors\" [value]=\"'stbui-background-'+color\">{{color}}\r\n    </mat-radio-button>\r\n  </mat-radio-group>\r\n\r\n  <div class=\"m-t-10\">navigation</div>\r\n  <mat-radio-group class=\"customizer-radio-group\" [(ngModel)]=\"settings.colorClasses.navigation\"\r\n                   (ngModelChange)=\"onSettingsChange()\">\r\n    <mat-radio-button class=\"customizer-radio-button\" *ngFor=\"let color of _colors\" [value]=\"'stbui-background-'+color\">{{color}}\r\n    </mat-radio-button>\r\n  </mat-radio-group>\r\n\r\n  <div class=\"m-t-10\">layout</div>\r\n  <mat-radio-group class=\"customizer-radio-group\" [(ngModel)]=\"settings.layout.mode\"\r\n                   (ngModelChange)=\"onSettingsChange()\" fxLayout=\"row\">\r\n    <mat-radio-button class=\"customizer-radio-button\" value=\"boxed\">固定宽度</mat-radio-button>\r\n    <mat-radio-button class=\"customizer-radio-button\" value=\"fullwidth\">满屏宽度</mat-radio-button>\r\n  </mat-radio-group>\r\n\r\n  <div class=\"m-t-10\">navigation</div>\r\n  <mat-radio-group class=\"customizer-radio-group\" [(ngModel)]=\"settings.layout.navigation\"\r\n                   (ngModelChange)=\"onSettingsChange()\" fxLayout=\"row\">\r\n    <mat-radio-button class=\"customizer-radio-button\" value=\"left\">左侧</mat-radio-button>\r\n    <mat-radio-button class=\"customizer-radio-button\" value=\"right\">右侧</mat-radio-button>\r\n    <mat-radio-button class=\"customizer-radio-button\" value=\"none\">隐藏</mat-radio-button>\r\n  </mat-radio-group>\r\n\r\n  <div class=\"m-t-10\">header</div>\r\n  <mat-radio-group class=\"customizer-radio-group\" [(ngModel)]=\"settings.layout.header\"\r\n                   (ngModelChange)=\"onSettingsChange()\" fxLayout=\"row\">\r\n    <mat-radio-button class=\"customizer-radio-button\" value=\"below\">显示</mat-radio-button>\r\n    <mat-radio-button class=\"customizer-radio-button\" value=\"none\">隐藏</mat-radio-button>\r\n  </mat-radio-group>\r\n\r\n  <div class=\"m-t-10\">footer</div>\r\n  <mat-radio-group class=\"customizer-radio-group\" [(ngModel)]=\"settings.layout.footer\"\r\n                   (ngModelChange)=\"onSettingsChange()\" fxLayout=\"row\">\r\n    <mat-radio-button class=\"customizer-radio-button\" value=\"below\">显示</mat-radio-button>\r\n    <mat-radio-button class=\"customizer-radio-button\" value=\"none\">隐藏</mat-radio-button>\r\n  </mat-radio-group>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/customizer/customizer.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/layout/customizer/customizer.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customizer-container {\n  width: 250px;\n  padding: 10px; }\n\n.customizer-radio-group {\n  display: inline-flex;\n  flex-direction: column; }\n\n.customizer-radio-button {\n  margin: 5px; }\n"

/***/ }),

/***/ "./src/app/layout/customizer/customizer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/customizer/customizer.component.ts ***!
  \***********************************************************/
/*! exports provided: CustomizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerComponent", function() { return CustomizerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/config.service */ "./src/app/core/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomizerComponent = /** @class */ (function () {
    function CustomizerComponent(config) {
        var _this = this;
        this.config = config;
        this._colors = [
            'primary',
            'accent',
            'red',
            'blue',
            'orange',
            'material'
        ];
        this.onSettingsChanged = this.config.onSettingsChanged.subscribe(function (settings) {
            _this.settings = settings;
        });
    }
    CustomizerComponent.prototype.ngOnInit = function () {
    };
    CustomizerComponent.prototype.onSettingsChange = function () {
        this.config.setSettings(this.settings);
    };
    CustomizerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'stbui-customizer',
            template: __webpack_require__(/*! ./customizer.component.html */ "./src/app/layout/customizer/customizer.component.html"),
            styles: [__webpack_require__(/*! ./customizer.component.scss */ "./src/app/layout/customizer/customizer.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], CustomizerComponent);
    return CustomizerComponent;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div fxLayout=\"row\" class=\"footer-copyright\">\n      <span fxFlex></span>\n      <span>Copyright 2018. All Rights Reserved</span>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  background: #263238;\n  color: #80CBC4;\n  line-height: 36px;\n  padding: 0 20px;\n  font-size: 12px; }\n  .footer a {\n    color: #80CBC4;\n    cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'stbui-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/layout/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-toolbar mat-elevation-z2\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n  <button mat-icon-button (click)=\"sidenav.opened = !sidenav.opened\">\r\n    <mat-icon>menu</mat-icon>\r\n  </button>\r\n\r\n  <span fxFlex></span>\r\n\r\n  <button mat-icon-button [fxHide]=\"true\" [fxHide.gt-sm]=\"false\" (click)=\"toggleFullscreen()\">\r\n    <mat-icon *ngIf=\"!isFullscreen\">fullscreen</mat-icon>\r\n    <mat-icon *ngIf=\"isFullscreen\">fullscreen_exit</mat-icon>\r\n  </button>\r\n\r\n  <button mat-icon-button>\r\n    <mat-icon>search</mat-icon>\r\n  </button>\r\n\r\n  <stbui-toolbar-notification></stbui-toolbar-notification>\r\n  <stbui-toolbar-user></stbui-toolbar-user>\r\n\r\n  <button mat-button class=\"more-btn\">\r\n    <mat-icon>more_vert</mat-icon>\r\n  </button>\r\n\r\n</div>\r\n\r\n<stbui-loading *ngIf=\"showLoading\"></stbui-loading>\r\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  z-index: 4; }\n\n.main-toolbar {\n  height: 64px;\n  padding-left: 16px; }\n\n.more-btn {\n  height: 100%;\n  min-width: 70px; }\n\n.mat-icon-button {\n  margin-right: 10px; }\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        var _this = this;
        this.router = router;
        this.isFullscreen = false;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                _this.showLoading = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.showLoading = false;
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleFullscreen = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_1__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_1__["toggle"]();
            this.isFullscreen = !this.isFullscreen;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "customizer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "sidenav", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'stbui-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.module.ts":
/*!************************************************!*\
  !*** ./src/app/layout/header/header.module.ts ***!
  \************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _toolbar_user_toolbar_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toolbar-user/toolbar-user.component */ "./src/app/layout/header/toolbar-user/toolbar-user.component.ts");
/* harmony import */ var _toolbar_help_toolbar_help_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toolbar-help/toolbar-help.component */ "./src/app/layout/header/toolbar-help/toolbar-help.component.ts");
/* harmony import */ var _toolbar_notification_toolbar_notification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toolbar-notification/toolbar-notification.component */ "./src/app/layout/header/toolbar-notification/toolbar-notification.component.ts");
/* harmony import */ var _toolbar_notification_toolbar_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toolbar-notification/toolbar-notification.service */ "./src/app/layout/header/toolbar-notification/toolbar-notification.service.ts");
/* harmony import */ var _component_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../component/loading */ "./src/app/component/loading/index.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarModule"],
                _component_loading__WEBPACK_IMPORTED_MODULE_9__["LoadingModule"]
            ],
            declarations: [
                _header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _toolbar_user_toolbar_user_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarUserComponent"],
                _toolbar_help_toolbar_help_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarHelpComponent"],
                _toolbar_notification_toolbar_notification_component__WEBPACK_IMPORTED_MODULE_7__["ToolbarNotificationComponent"]
            ],
            providers: [
                { provide: 'toolbarNotificationService', useClass: _toolbar_notification_toolbar_notification_service__WEBPACK_IMPORTED_MODULE_8__["ToolbarNotificationService"] },
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ],
            exports: [
                _header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]
            ]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/layout/header/toolbar-help/toolbar-help.component.html":
/*!************************************************************************!*\
  !*** ./src/app/layout/header/toolbar-help/toolbar-help.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  toolbar-help works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/layout/header/toolbar-help/toolbar-help.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/layout/header/toolbar-help/toolbar-help.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/header/toolbar-help/toolbar-help.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/header/toolbar-help/toolbar-help.component.ts ***!
  \**********************************************************************/
/*! exports provided: ToolbarHelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarHelpComponent", function() { return ToolbarHelpComponent; });
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

var ToolbarHelpComponent = /** @class */ (function () {
    function ToolbarHelpComponent() {
    }
    ToolbarHelpComponent.prototype.ngOnInit = function () {
    };
    ToolbarHelpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toolbar-help',
            template: __webpack_require__(/*! ./toolbar-help.component.html */ "./src/app/layout/header/toolbar-help/toolbar-help.component.html"),
            styles: [__webpack_require__(/*! ./toolbar-help.component.scss */ "./src/app/layout/header/toolbar-help/toolbar-help.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolbarHelpComponent);
    return ToolbarHelpComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/toolbar-notification/toolbar-notification.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/header/toolbar-notification/toolbar-notification.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar-notification-container\">\n  <button mat-icon-button (click)=\"toggleDropdown()\" [ngClass]=\"[cssPrefix+'-btn']\" [class.open]=\"isOpen\">\n    <mat-icon>notifications_none</mat-icon>\n    <span class=\"badge\" *ngIf=\"notifications.length !== 0\">{{ notifications?.length }}</span>\n  </button>\n\n  <div class=\"dropdown mat-elevation-z1\" [class.open]=\"isOpen\">\n    <div class=\"card\">\n      <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        <div class=\"title\">\n          <div class=\"name\">notifications</div>\n          <div class=\"extra\">{{ notifications?.length }} unread</div>\n        </div>\n        <button type=\"button\" mat-icon-button>\n          <mat-icon class=\"icon\">settings</mat-icon>\n        </button>\n      </div>\n      <div *ngIf=\"notifications.length !== 0; then thenBlock else elseBlock;\"></div>\n      <div class=\"footer\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <div class=\"action\">Show All</div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<ng-template #thenBlock>\n  <perfect-scrollbar class=\"content\">\n    <ng-container *ngFor=\"let notification of notifications; last as isLast\">\n      <div class=\"notice\" fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-ripple>\n        <mat-icon class=\"icon\">notifications</mat-icon>\n        <div class=\"title\" fxLayout=\"column\">\n          <div class=\"name\">{{ notification.title }}</div>\n          <div class=\"time\">{{ notification.lastTime }}</div>\n        </div>\n        <span fxFlex></span>\n        <button type=\"button\" mat-icon-button (click)=\"delete($event, notification)\">\n          <mat-icon class=\"close\">close</mat-icon>\n        </button>\n      </div>\n      <div class=\"divider\" *ngIf=\"!isLast\"></div>\n    </ng-container>\n  </perfect-scrollbar>\n</ng-template>\n\n<ng-template #elseBlock>\n  <div class=\"no\" fxLayout=\"row\" fxLayoutAlign=\"center center\">暂无通知</div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/layout/header/toolbar-notification/toolbar-notification.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/header/toolbar-notification/toolbar-notification.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".badge {\n  background: #2196f3;\n  color: #fff; }\n\n.badge {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  font-weight: 700;\n  border-radius: 20px;\n  box-sizing: border-box;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  font-size: 11px; }\n\n.toolbar-notification-container {\n  position: relative;\n  display: flex;\n  align-items: center; }\n\n.toolbar-notification-btn {\n  display: flex;\n  justify-content: center;\n  margin-right: 10px; }\n\n.dropdown {\n  background: white;\n  position: absolute;\n  top: 55px;\n  right: 0;\n  min-width: 350px;\n  z-index: -1;\n  -webkit-transform: translateY(-110%) scale(0);\n          transform: translateY(-110%) scale(0);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n  visibility: hidden;\n  transition: visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n@media screen and (max-width: 599px) {\n    .dropdown {\n      min-width: 100vw;\n      right: -147px; } }\n\n.dropdown.open {\n    -webkit-transform: translateY(0) scale(1);\n            transform: translateY(0) scale(1);\n    visibility: visible; }\n\n.dropdown .card .header {\n    background: #EEEEEE;\n    min-height: 54px;\n    padding-left: 16px;\n    padding-right: 8px;\n    color: #555;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n    border-bottom: 1px solid #e0e0e0; }\n\n.dropdown .card .header .extra {\n      font-size: 12px;\n      color: #888; }\n\n.dropdown .card .content {\n    overflow: hidden;\n    max-height: 256px; }\n\n.dropdown .card .content .notice {\n      min-height: 64px;\n      padding: 0 16px 0 14px;\n      position: relative;\n      color: #666;\n      cursor: pointer; }\n\n.dropdown .card .content .notice .icon {\n        height: 28px;\n        width: 28px;\n        line-height: 28px;\n        font-size: 18px;\n        margin-right: 13px;\n        text-align: center;\n        border-radius: 50%;\n        background: #FFF;\n        color: #888;\n        border: 1px solid #EEE; }\n\n.dropdown .card .content .notice .title {\n        font-weight: 500;\n        font-size: 14px; }\n\n.dropdown .card .content .notice .time {\n        font-size: 12px; }\n\n.dropdown .card .content .notice .close {\n        font-size: 18px;\n        width: 18px;\n        height: 18px;\n        line-height: 18px; }\n\n.dropdown .card .content .notice.primary .icon {\n        background: #ccc;\n        color: #ddd; }\n\n.dropdown .card .content .notice.accent .icon {\n        background: #aaa;\n        color: #bbb; }\n\n.dropdown .card .content .notice.warn .icon {\n        background: #eee;\n        color: #ddd; }\n\n.dropdown .card .content .notice.read {\n        color: #999; }\n\n.dropdown .card .content .notice.read .name {\n          font-weight: normal; }\n\n.dropdown .card .footer {\n    min-height: 42px;\n    border-top: 1px solid #EEE; }\n\n.dropdown .card .footer .action {\n      cursor: pointer;\n      color: #AAA;\n      text-align: center;\n      font-size: 13px; }\n\n.dropdown .card .divider {\n    width: calc(100% - 30px);\n    height: 1px;\n    background: #EEE;\n    margin: 0 16px 0 14px; }\n\n.no {\n  padding: 20px;\n  color: #ccc; }\n"

/***/ }),

/***/ "./src/app/layout/header/toolbar-notification/toolbar-notification.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/header/toolbar-notification/toolbar-notification.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ToolbarNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarNotificationComponent", function() { return ToolbarNotificationComponent; });
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

var ToolbarNotificationComponent = /** @class */ (function () {
    function ToolbarNotificationComponent(_elementRef, service) {
        this._elementRef = _elementRef;
        this.service = service;
        this.cssPrefix = 'toolbar-notification';
        this.isOpen = false;
        this.notifications = [];
        this.select();
    }
    ToolbarNotificationComponent.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.isOpen = false;
        }
    };
    ToolbarNotificationComponent.prototype.toggleDropdown = function () {
        this.isOpen = !this.isOpen;
    };
    ToolbarNotificationComponent.prototype.select = function () {
        this.notifications = this.service.select();
    };
    ToolbarNotificationComponent.prototype.delete = function (event, notification) {
        event.stopPropagation();
        this.notifications = this.service.delete(notification);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event', '$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent, HTMLElement]),
        __metadata("design:returntype", void 0)
    ], ToolbarNotificationComponent.prototype, "onClick", null);
    ToolbarNotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'stbui-toolbar-notification',
            template: __webpack_require__(/*! ./toolbar-notification.component.html */ "./src/app/layout/header/toolbar-notification/toolbar-notification.component.html"),
            styles: [__webpack_require__(/*! ./toolbar-notification.component.scss */ "./src/app/layout/header/toolbar-notification/toolbar-notification.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('toolbarNotificationService')),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], Object])
    ], ToolbarNotificationComponent);
    return ToolbarNotificationComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/toolbar-notification/toolbar-notification.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layout/header/toolbar-notification/toolbar-notification.service.ts ***!
  \************************************************************************************/
/*! exports provided: ToolbarNotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarNotificationService", function() { return ToolbarNotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolbarNotificationService = /** @class */ (function () {
    function ToolbarNotificationService(http) {
        this.http = http;
        this.notifications = [
            {
                id: '1',
                title: 'notification',
                lastTime: '23 hrs',
                state: '1'
            },
            {
                id: '2',
                title: 'notification',
                lastTime: '23 hrs',
                state: 'state'
            },
            {
                id: '3',
                title: 'notification',
                lastTime: '23 hrs',
                state: 'state'
            },
            {
                id: '4',
                title: 'notification',
                lastTime: '23 hrs',
                state: 'state'
            },
            {
                id: '5',
                title: 'notification',
                lastTime: '23 hrs',
                state: 'state'
            }
        ];
    }
    ToolbarNotificationService.prototype.select = function () {
        return this.notifications;
    };
    ToolbarNotificationService.prototype.delete = function (notification) {
        var i = this.notifications.indexOf(notification);
        this.notifications = this.notifications.slice(0, i).concat(this.notifications.slice(i + 1));
        return this.notifications;
    };
    ToolbarNotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ToolbarNotificationService);
    return ToolbarNotificationService;
}());



/***/ }),

/***/ "./src/app/layout/header/toolbar-user/toolbar-user.component.html":
/*!************************************************************************!*\
  !*** ./src/app/layout/header/toolbar-user/toolbar-user.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar-user-container\">\r\n  <button mat-button (click)=\"toggleDropdown()\" class=\"toolbar-user-btn\" [class.open]=\"isOpen\">\r\n  <span fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n    <img class=\"avatar\" [src]=\"currentUser.currentUser?.photoURL || 'assets/images/avatars/noavatar.png'\">\r\n    <span class=\"name\" fxHide fxShow.gt-sm>{{currentUser.currentUserName}}</span>\r\n    <mat-icon class=\"icon\" fxHide fxShow.gt-sm>keyboard_arrow_down</mat-icon>\r\n  </span>\r\n  </button>\r\n\r\n  <div class=\"dropdown mat-elevation-z1\" [class.open]=\"isOpen\">\r\n    <div class=\"content\">\r\n      <div class=\"list\">\r\n        <div class=\"item\" fxLayout=\"row\" fxLayoutAlign=\"start center\" routerLink=\"/pages/profile\" mat-ripple>\r\n          <mat-icon class=\"icon\">account_circle</mat-icon>\r\n          <span class=\"title\">My Profile</span>\r\n        </div>\r\n        <div class=\"item\" fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-ripple>\r\n          <mat-icon class=\"icon\">settings</mat-icon>\r\n          <span class=\"title\">Settings</span>\r\n        </div>\r\n        <div class=\"item\" fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-ripple>\r\n          <mat-icon class=\"icon\">help</mat-icon>\r\n          <span class=\"title\">Help</span>\r\n        </div>\r\n        <mat-divider></mat-divider>\r\n        <div class=\"item\" fxLayout=\"row\" fxLayoutAlign=\"start center\" (click)=\"logout()\" mat-ripple>\r\n          <mat-icon class=\"icon\">exit_to_app</mat-icon>\r\n          <span class=\"title\">Exit</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/header/toolbar-user/toolbar-user.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/layout/header/toolbar-user/toolbar-user.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%; }\n\n.toolbar-user-container {\n  height: 100%;\n  position: relative; }\n\n.toolbar-user-container .toolbar-user-btn {\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    min-width: 160px; }\n\n.toolbar-user-container .toolbar-user-btn .avatar {\n      width: 40px;\n      height: 40px;\n      border-radius: 50%; }\n\n.toolbar-user-container .toolbar-user-btn .name {\n      margin: 0 8px 0 10px; }\n\n.toolbar-user-container .toolbar-user-btn .icon {\n      width: 16px;\n      height: 16px;\n      font-size: 16px;\n      -webkit-transform: rotate(0);\n              transform: rotate(0);\n      transition: -webkit-transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition: transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition: transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.toolbar-user-container .toolbar-user-btn.open {\n      background: rgba(0, 0, 0, 0.05); }\n\n.toolbar-user-container .toolbar-user-btn.open .icon {\n        -webkit-transform: rotate(-180deg);\n                transform: rotate(-180deg); }\n\n.toolbar-user-container .dropdown {\n    background: white;\n    position: absolute;\n    top: 64px;\n    right: 0;\n    width: 100%;\n    min-width: 160px;\n    z-index: -1;\n    -webkit-transform: translateY(-135%);\n            transform: translateY(-135%);\n    visibility: hidden;\n    transition: visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.toolbar-user-container .dropdown .content .list .item {\n      height: 48px;\n      padding: 0 16px;\n      position: relative;\n      cursor: pointer;\n      color: #000; }\n\n.toolbar-user-container .dropdown .content .list .item .icon {\n        padding-right: 12px; }\n\n.toolbar-user-container .dropdown.open {\n      -webkit-transform: translateY(0);\n              transform: translateY(0);\n      visibility: visible; }\n"

/***/ }),

/***/ "./src/app/layout/header/toolbar-user/toolbar-user.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/header/toolbar-user/toolbar-user.component.ts ***!
  \**********************************************************************/
/*! exports provided: ToolbarUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarUserComponent", function() { return ToolbarUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToolbarUserComponent = /** @class */ (function () {
    function ToolbarUserComponent(_elementRef, router, auth) {
        this._elementRef = _elementRef;
        this.router = router;
        this.auth = auth;
        this.isOpen = false;
        this.currentUser = null;
        this.currentUser = this.auth;
    }
    ToolbarUserComponent.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.isOpen = false;
        }
    };
    ToolbarUserComponent.prototype.ngOnInit = function () {
    };
    ToolbarUserComponent.prototype.toggleDropdown = function () {
        this.isOpen = !this.isOpen;
    };
    ToolbarUserComponent.prototype.logout = function () {
        var _this = this;
        this.auth.signOut().then(function () {
            _this.router.navigate(['/sigin']);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event', '$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent, HTMLElement]),
        __metadata("design:returntype", void 0)
    ], ToolbarUserComponent.prototype, "onClick", null);
    ToolbarUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'stbui-toolbar-user',
            template: __webpack_require__(/*! ./toolbar-user.component.html */ "./src/app/layout/header/toolbar-user/toolbar-user.component.html"),
            styles: [__webpack_require__(/*! ./toolbar-user.component.scss */ "./src/app/layout/header/toolbar-user/toolbar-user.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ToolbarUserComponent);
    return ToolbarUserComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container [class.boxed]=\"layoutMode\">\r\n\r\n  <mat-sidenav class=\"customizer\" [position]=\"customizerSidenavAlign\" mode=\"over\" #customizer>\r\n    <stbui-customizer></stbui-customizer>\r\n  </mat-sidenav>\r\n\r\n  <mat-sidenav class=\"sidenav\" [position]=\"sidenavAlign\" [mode]=\"sidenavMode\" [opened]=\"sidenavOpen\" #sidenav>\r\n    <app-brand [ngClass]=\"settings.colorClasses.brand\"></app-brand>\r\n    <stbui-navigation [ngClass]=\"settings.colorClasses.navigation\"></stbui-navigation>\r\n  </mat-sidenav>\r\n\r\n  <div class=\"sidenav-container\" fxLayout=\"column\">\r\n    <stbui-header [customizer]=\"customizer\" [sidenav]=\"sidenav\" [ngClass]=\"settings.colorClasses.header\" *ngIf=\"settings.layout.header=='below'\"></stbui-header>\r\n\r\n    <div class=\"main-container\" #scrollContainer>\r\n      <router-outlet (activate)=\"onActivate($event, scrollContainer)\"></router-outlet>\r\n    </div>\r\n\r\n    <stbui-footer *ngIf=\"settings.layout.footer=='below'\"></stbui-footer>\r\n  </div>\r\n\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  height: 100%;\n  background: #2f3d4a; }\n  :host:before, :host:after {\n    content: 'STBUI';\n    position: absolute;\n    top: 0;\n    color: rgba(255, 255, 255, 0.12);\n    overflow-wrap: break-word;\n    text-align: center;\n    -webkit-transform: translate(0, 50%);\n            transform: translate(0, 50%);\n    padding: 0 20px;\n    font-size: 62px;\n    width: 46px; }\n  :host:after {\n    right: 0; }\n  .sidenav {\n  width: 250px;\n  max-width: 250px;\n  overflow-x: hidden;\n  z-index: 4; }\n  .sidenav-container {\n  height: 100%; }\n  .main-container {\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: calc(100% - 64px);\n  position: relative; }\n  .boxed {\n  width: 1200px;\n  height: 100%;\n  display: block;\n  margin: 0 auto;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/config.service */ "./src/app/core/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(media, config) {
        var _this = this;
        this.config = config;
        this.layoutMode = false;
        this._media$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.sidenavOpen = true;
        this.sidenavMode = 'side';
        this.sidenavAlign = 'start';
        this.customizerSidenavAlign = 'end';
        media
            .asObservable()
            .subscribe(function (res) { return _this._media$.next(res); }, function (err) { return _this._media$.error(err); }, function () { return _this._media$.complete(); });
        this.onSettingsChanged = this.config.onSettingsChanged.subscribe(function (settings) {
            _this.settings = settings;
            if (_this.settings.layout.mode === 'boxed') {
                _this.layoutMode = true;
            }
            else {
                _this.layoutMode = false;
            }
            if (_this.settings.layout.navigation === 'left') {
                _this.sidenavAlign = 'start';
                _this.customizerSidenavAlign = 'end';
            }
            else if (_this.settings.layout.navigation === 'right') {
                _this.sidenavAlign = 'end';
                _this.customizerSidenavAlign = 'start';
            }
            else {
                _this.sidenavAlign = 'start';
                _this.customizerSidenavAlign = 'end';
                _this.sidenavOpen = false;
            }
        });
    }
    Object.defineProperty(LayoutComponent.prototype, "media$", {
        get: function () {
            return this._media$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    LayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._mediaSubscription = this.media$.subscribe(function (change) {
            var isMobile = change.mqAlias === 'xs' || change.mqAlias === 'sm';
            _this.sidenavMode = isMobile ? 'over' : 'side';
            _this.sidenavOpen = !isMobile;
        });
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 2000);
    };
    /**
     * @param event {Event}
     * @param scrollContainer {Object}
     */
    LayoutComponent.prototype.onActivate = function (event, scrollContainer) {
        scrollContainer.scrollTop = 0;
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["ObservableMedia"], _core_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/navigation.module */ "./src/app/layout/navigation/navigation.module.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.module */ "./src/app/layout/header/header.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _brand_brand_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./brand/brand.component */ "./src/app/layout/brand/brand.component.ts");
/* harmony import */ var _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customizer/customizer.component */ "./src/app/layout/customizer/customizer.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
                _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"]
            ],
            declarations: [
                _layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"],
                _brand_brand_component__WEBPACK_IMPORTED_MODULE_6__["BrandComponent"],
                _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_7__["CustomizerComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]
            ],
            providers: [],
            exports: []
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/navigation/nav-collapse/nav-collapse.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/layout/navigation/nav-collapse/nav-collapse.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a (click)=\"toggleOpen($event)\" class=\"navigation-link\" matRipple>\n  <mat-icon class=\"navigation-link-icon\" *ngIf=\"item.icon\">{{item.icon}}</mat-icon>\n  <span class=\"navigation-link-title\">{{item.title}}</span>\n  <span class=\"navigation-link-badge\" *ngIf=\"item.badge\"\n        [ngStyle]=\"{'background-color': item.badge.bg, 'color': item.badge.fg}\">{{item.badge.title}}</span>\n  <mat-icon class=\"navigation-collapse-arrow\">keyboard_arrow_right</mat-icon>\n</a>\n<div class=\"navigation-children\" [@slideInOut]=\"isOpen\">\n  <ng-container *ngFor=\"let item of item.children\">\n    <stbui-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></stbui-nav-item>\n    <stbui-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></stbui-nav-collapse>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/navigation/nav-collapse/nav-collapse.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/layout/navigation/nav-collapse/nav-collapse.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation-collapse-arrow {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  line-height: 16px;\n  transition: -webkit-transform .25s;\n  transition: transform .25s;\n  transition: transform .25s, -webkit-transform .25s;\n  -webkit-transform: rotate(0);\n          transform: rotate(0); }\n\n.navigation-children {\n  background: rgba(0, 0, 0, 0.12);\n  color: rgba(255, 255, 255, 0.65);\n  overflow: hidden; }\n\n.navigation-collapse {\n  display: block;\n  transition: -webkit-transform .25s;\n  transition: transform .25s;\n  transition: transform .25s, -webkit-transform .25s; }\n\n.navigation-collapse.open > .navigation-link:before {\n    content: \" \";\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 2px;\n    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2), transparent); }\n\n.navigation-collapse.open .navigation-collapse-arrow {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg); }\n"

/***/ }),

/***/ "./src/app/layout/navigation/nav-collapse/nav-collapse.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/navigation/nav-collapse/nav-collapse.component.ts ***!
  \**************************************************************************/
/*! exports provided: NavCollapseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavCollapseComponent", function() { return NavCollapseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navigation.service */ "./src/app/layout/navigation/navigation.service.ts");
/* harmony import */ var _navigation_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navigation.animation */ "./src/app/layout/navigation/navigation.animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavCollapseComponent = /** @class */ (function () {
    function NavCollapseComponent(service, router) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.classes = 'navigation-collapse navigation-item';
        this.isOpen = false;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (_this.isUrlInChildren(_this.item, event.urlAfterRedirects)) {
                    _this.expand();
                }
                else {
                    _this.collapse();
                }
            }
        });
        this.service.onNavigationCollapseToggled.subscribe(function (clickedItem) {
            if (clickedItem && clickedItem.children) {
                if (_this.isChildrenOf(_this.item, clickedItem)) {
                    return;
                }
                if (_this.isUrlInChildren(_this.item, _this.router.url)) {
                    return;
                }
                if (_this.item !== clickedItem) {
                    _this.collapse();
                }
            }
        });
    }
    NavCollapseComponent.prototype.ngOnInit = function () {
        if (this.isUrlInChildren(this.item, this.router.url)) {
            this.expand();
        }
        else {
            this.collapse();
        }
    };
    NavCollapseComponent.prototype.toggleOpen = function (e) {
        e.preventDefault();
        this.isOpen = !this.isOpen;
        this.service.onNavigationCollapseToggled.emit(this.item);
        this.service.onNavigationCollapseToggle.emit();
    };
    NavCollapseComponent.prototype.expand = function () {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        this.service.onNavigationCollapseToggle.emit();
    };
    NavCollapseComponent.prototype.collapse = function () {
        if (!this.isOpen) {
            return;
        }
        this.isOpen = false;
        this.service.onNavigationCollapseToggle.emit();
    };
    NavCollapseComponent.prototype.isChildrenOf = function (parent, item) {
        if (!parent.children) {
            return false;
        }
        if (parent.children.indexOf(item) !== -1) {
            return true;
        }
        for (var _i = 0, _a = parent.children; _i < _a.length; _i++) {
            var children = _a[_i];
            if (children.children) {
                return this.isChildrenOf(children, item);
            }
        }
    };
    NavCollapseComponent.prototype.isUrlInChildren = function (parent, url) {
        if (!parent.children) {
            return false;
        }
        for (var i = 0; i < parent.children.length; i++) {
            if (parent.children[i].children) {
                if (this.isUrlInChildren(parent.children[i], url)) {
                    return true;
                }
            }
            if (parent.children[i].url === url || url.includes(parent.children[i].url)) {
                return true;
            }
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavCollapseComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], NavCollapseComponent.prototype, "classes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.open'),
        __metadata("design:type", Object)
    ], NavCollapseComponent.prototype, "isOpen", void 0);
    NavCollapseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'stbui-nav-collapse',
            template: __webpack_require__(/*! ./nav-collapse.component.html */ "./src/app/layout/navigation/nav-collapse/nav-collapse.component.html"),
            styles: [__webpack_require__(/*! ./nav-collapse.component.scss */ "./src/app/layout/navigation/nav-collapse/nav-collapse.component.scss")],
            animations: _navigation_animation__WEBPACK_IMPORTED_MODULE_3__["NavigationAnimation"],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavCollapseComponent);
    return NavCollapseComponent;
}());



/***/ }),

/***/ "./src/app/layout/navigation/nav-item/nav-item.component.html":
/*!********************************************************************!*\
  !*** ./src/app/layout/navigation/nav-item/nav-item.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"navigation-link\" *ngIf=\"item.url\" [routerLink]=\"item.url\" routerLinkActive=\"stbui-background-black\" matRipple>\n  <mat-icon class=\"navigation-link-icon\" *ngIf=\"item.icon\">{{item.icon}}</mat-icon>\n  <span class=\"navigation-link-title\">{{item.title}}</span>\n  <span class=\"navigation-link-badge\" *ngIf=\"item.badge\"\n        [ngStyle]=\"{'background-color': item.badge.bg, 'color': item.badge.fg}\">{{item.badge.title}}</span>\n</a>\n"

/***/ }),

/***/ "./src/app/layout/navigation/nav-item/nav-item.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/layout/navigation/nav-item/nav-item.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation-link {\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 48px;\n  text-decoration: none;\n  padding: 0 24px;\n  overflow: hidden;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: currentColor; }\n  .navigation-link-icon {\n    font-size: 16px;\n    width: 16px;\n    height: 16px;\n    min-width: 16px;\n    min-height: 16px;\n    line-height: 16px;\n    margin-right: 16px; }\n  .navigation-link-title {\n    flex: 1;\n    white-space: nowrap; }\n  .navigation-link-badge {\n    display: flex;\n    align-items: center;\n    min-width: 20px;\n    height: 20px;\n    padding: 0 7px;\n    font-size: 11px;\n    font-weight: 500;\n    border-radius: 20px;\n    transition: opacity .2s ease-in-out .1s;\n    margin-left: 8px;\n    box-sizing: border-box;\n    line-height: 20px; }\n  .navigation-link:hover, .navigation-link:focus {\n  text-decoration: none;\n  color: white; }\n  .navigation-link.active {\n  background: #2196f3;\n  color: #fff; }\n  .navigation-children .navigation-link {\n  padding-left: 56px; }\n"

/***/ }),

/***/ "./src/app/layout/navigation/nav-item/nav-item.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/navigation/nav-item/nav-item.component.ts ***!
  \******************************************************************/
/*! exports provided: NavItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItemComponent", function() { return NavItemComponent; });
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

var NavItemComponent = /** @class */ (function () {
    function NavItemComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavItemComponent.prototype, "item", void 0);
    NavItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'stbui-nav-item',
            template: __webpack_require__(/*! ./nav-item.component.html */ "./src/app/layout/navigation/nav-item/nav-item.component.html"),
            styles: [__webpack_require__(/*! ./nav-item.component.scss */ "./src/app/layout/navigation/nav-item/nav-item.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
    ], NavItemComponent);
    return NavItemComponent;
}());



/***/ }),

/***/ "./src/app/layout/navigation/navigation.animation.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/navigation/navigation.animation.ts ***!
  \***********************************************************/
/*! exports provided: NavigationAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationAnimation", function() { return NavigationAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var customAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: '{{opacity}}',
        transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'))
], {
    params: {
        duration: '200ms',
        delay: '0ms',
        opacity: '0',
        scale: '1',
        x: '0',
        y: '0',
        z: '0'
    }
});
var NavigationAnimation = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('animate', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(customAnimation)])]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('animateStagger', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('50', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('100', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('200', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => 50', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@*', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('50ms', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()
            ])
        ], { optional: true })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => 100', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@*', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('100ms', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()
            ])
        ], { optional: true })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => 200', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@*', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('200ms', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()
            ])
        ], { optional: true }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            display: 'none',
            opacity: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            display: 'block',
            opacity: 1
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in'))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            height: '0px',
            display: 'none'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            height: '*',
            display: 'block'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in'))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInLeft', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateX(-100%)',
            display: 'none'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateX(0)',
            display: 'flex'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms'))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInRight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateX(100%)',
            display: 'none'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateX(0)',
            display: 'flex'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms'))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInTop', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateY(-100%)',
            display: 'none'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateY(0)',
            display: 'flex'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms'))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInBottom', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateY(100%)',
            display: 'none'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateY(0)',
            display: 'flex'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms'))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('expandCollapse', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            height: '0px'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            height: '*'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in'))
    ])
];


/***/ }),

/***/ "./src/app/layout/navigation/navigation.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/navigation/navigation.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation-container\">\n  <div class=\"navigation-scrollbar-container\">\n    <perfect-scrollbar>\n      <ng-container *ngFor=\"let navigation of navigationModel\">\n        <stbui-nav-collapse *ngIf=\"navigation.type == 'collapse'\" [item]=\"navigation\"></stbui-nav-collapse>\n        <stbui-nav-item *ngIf=\"navigation.type=='item'\" [item]=\"navigation\"></stbui-nav-item>\n      </ng-container>\n    </perfect-scrollbar>\n  </div>\n\n  <div class=\"navigation-footer\">\n    <a matRipple target=\"blank\">\n      <mat-icon>help</mat-icon>\n      Help</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/navigation/navigation.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/layout/navigation/navigation.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  height: calc(100% - 64px);\n  background-color: #3c4252;\n  color: rgba(255, 255, 255, 0.87); }\n\n.navigation-container {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n  height: 100%;\n  padding-top: 20px; }\n\n.navigation-scrollbar-container {\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n  height: 100%; }\n\n.navigation-footer {\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\n.navigation-footer > a {\n    display: flex;\n    align-items: center;\n    flex: 1 1 100%;\n    box-sizing: border-box;\n    max-width: 100%;\n    background-color: rgba(0, 0, 0, 0.12);\n    color: rgba(255, 255, 255, 0.8);\n    text-decoration: none;\n    text-align: center;\n    min-width: 88px;\n    line-height: 36px;\n    padding: 0 24px; }\n\n.navigation-footer > a > mat-icon {\n      font-size: 16px;\n      width: 16px;\n      height: 16px;\n      min-width: 16px;\n      min-height: 16px;\n      line-height: 16px;\n      margin-right: 16px; }\n"

/***/ }),

/***/ "./src/app/layout/navigation/navigation.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/navigation/navigation.component.ts ***!
  \***********************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.service */ "./src/app/layout/navigation/navigation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(service) {
        var _this = this;
        this.service = service;
        this.navigationModelChangeSubscription = this.service.onNavigationModelChange.subscribe(function (navigation) {
            _this.navigationModel = navigation;
        });
    }
    NavigationComponent.prototype.ngOnInit = function () {
        //this.addSubitemToNavigation()
    };
    NavigationComponent.prototype.ngOnDestroy = function () {
        this.navigationModelChangeSubscription.unsubscribe();
    };
    NavigationComponent.prototype.updateExtendBadge = function () {
        var extendNavItem = this.service.getNavigationItem('extend');
        extendNavItem.badge.title = 6;
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'stbui-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/layout/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/layout/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/layout/navigation/navigation.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/navigation/navigation.model.ts ***!
  \*******************************************************/
/*! exports provided: NavigationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationModel", function() { return NavigationModel; });
var NavigationModel = /** @class */ (function () {
    function NavigationModel() {
        this.model = [
            {
                'id': 'orders',
                'title': 'orders',
                'type': 'item',
                'icon': 'list',
                'url': '/order'
            },
            {
                'id': 'customers',
                'title': 'customers',
                'type': 'item',
                'icon': 'business',
                'url': '/customer'
            },
            {
                'id': 'users',
                'title': 'users',
                'type': 'item',
                'icon': 'bubble_chart',
                'url': '/user'
            },
            {
                'id': 'admin',
                'title': 'admin panel',
                'type': 'collapse',
                'icon': 'code',
                'children': [
                    {
                        'id': 'about',
                        'title': 'about',
                        'type': 'item',
                        'url': '/admin/about'
                    },
                    {
                        'id': 'project',
                        'title': 'project',
                        'type': 'item',
                        'url': '/admin/project'
                    }
                ]
            },
        ];
    }
    return NavigationModel;
}());



/***/ }),

/***/ "./src/app/layout/navigation/navigation.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/navigation/navigation.module.ts ***!
  \********************************************************/
/*! exports provided: NavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationModule", function() { return NavigationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation.component */ "./src/app/layout/navigation/navigation.component.ts");
/* harmony import */ var _nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-collapse/nav-collapse.component */ "./src/app/layout/navigation/nav-collapse/nav-collapse.component.ts");
/* harmony import */ var _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-item/nav-item.component */ "./src/app/layout/navigation/nav-item/nav-item.component.ts");
/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation.service */ "./src/app/layout/navigation/navigation.service.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var NavigationModule = /** @class */ (function () {
    function NavigationModule() {
    }
    NavigationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"]
            ],
            declarations: [_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"], _nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_5__["NavCollapseComponent"], _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_6__["NavItemComponent"]],
            providers: [
                _navigation_service__WEBPACK_IMPORTED_MODULE_7__["NavigationService"],
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ],
            exports: [_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"]]
        })
    ], NavigationModule);
    return NavigationModule;
}());



/***/ }),

/***/ "./src/app/layout/navigation/navigation.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/navigation/navigation.service.ts ***!
  \*********************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _navigation_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation.model */ "./src/app/layout/navigation/navigation.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationService = /** @class */ (function () {
    function NavigationService() {
        this.onNavigationCollapseToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onNavigationCollapseToggled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onNavigationModelChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.navigationModel = new _navigation_model__WEBPACK_IMPORTED_MODULE_2__["NavigationModel"]();
        this.onNavigationModelChange.next(this.navigationModel.model);
    }
    NavigationService.prototype.getNavigationModel = function () {
        return this.navigationModel.model;
    };
    NavigationService.prototype.setNavigationModel = function (model) {
        this.navigationModel = model;
        this.onNavigationModelChange.next(this.navigationModel.model);
    };
    NavigationService.prototype.addNavigationItem = function (location, item) {
        var locationArr = location.split('.');
        if (locationArr.length === 0) {
            return;
        }
        var navItem = this.findNavigationItemById(locationArr);
        switch (navItem.type) {
            case 'item':
                navItem.children = [];
                navItem.children.push(item);
                navItem.type = 'collapse';
                break;
            case 'collapse':
                navItem.children.push(item);
                break;
            case 'group':
                navItem.children.push(item);
                break;
            default:
                break;
        }
    };
    NavigationService.prototype.getNavigationItem = function (location) {
        var locationArr = location.split('.');
        if (locationArr.length === 0) {
            return;
        }
        return this.findNavigationItemById(locationArr);
    };
    NavigationService.prototype.findNavigationItemById = function (location, navigation) {
        if (!navigation) {
            navigation = this.navigationModel.model;
        }
        for (var _i = 0, navigation_1 = navigation; _i < navigation_1.length; _i++) {
            var navItem = navigation_1[_i];
            if (navItem.id === location[0]) {
                if (location.length > 1) {
                    location.splice(0, 1);
                    return this.findNavigationItemById(location, navItem.children);
                }
                else {
                    return navItem;
                }
            }
        }
    };
    NavigationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NavigationService);
    return NavigationService;
}());



/***/ }),

/***/ "./src/app/pages/signin/signin.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/signin/signin.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sigin-conainer\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n  <div class=\"sigin-main mat-elevation-z12\">\r\n    <mat-card>\r\n      <mat-card-title>用户登录\r\n        <a class=\"redirect\" [routerLink]=\"['/sigup']\">注册账号</a>\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <form [formGroup]=\"userForm\" (ngSubmit)=\"login()\">\r\n          <mat-form-field class=\"display-block\">\r\n            <input type=\"email\" placeholder=\"请输入您的邮箱\" formControlName=\"email\" required matInput>\r\n            <mat-error *ngIf=\"formErrors.email\">{{formErrors.email}}</mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"display-block\">\r\n            <input type=\"password\" placeholder=\"请输入您的密码\" formControlName=\"password\" required matInput>\r\n            <mat-error *ngIf=\"formErrors.password\">{{formErrors.password}}</mat-error>\r\n          </mat-form-field>\r\n\r\n          <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!userForm.valid\">登录</button>\r\n        </form>\r\n      </mat-card-content>\r\n      <mat-card-actions fxLayout=\"row\" fxLayoutAlign=\"space-around\">\r\n        <button mat-raised-button (click)=\"signInWithGithub()\">Github 账号登录</button>\r\n        <button mat-raised-button (click)=\"signInWithGoogle()\">Google 账号登录</button>\r\n        <button mat-raised-button (click)=\"signInAnonymously()\">游客 账号登录</button>\r\n      </mat-card-actions>\r\n\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/signin/signin.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/signin/signin.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sigin-conainer {\n  min-height: 100%;\n  background: #eceeef url(\"/assets/images/background/login.jpg\") no-repeat center center fixed;\n  background-size: cover; }\n\n.sigin-main {\n  position: relative;\n  margin: 0 auto;\n  width: 500px; }\n\n.redirect {\n  font-size: 14px;\n  margin-left: 10px;\n  color: #00AAAA; }\n\n.display-block {\n  display: block; }\n"

/***/ }),

/***/ "./src/app/pages/signin/signin.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/signin/signin.component.ts ***!
  \**************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninComponent = /** @class */ (function () {
    function SigninComponent(router, fb, auth) {
        this.router = router;
        this.fb = fb;
        this.auth = auth;
        this.formErrors = {
            email: '',
            password: ''
        };
        this.validationMessages = {
            email: {
                required: '请输入您的邮箱',
                email: '请输入正确的邮箱'
            },
            password: {
                required: '请输入您的密码',
                pattern: '密码中必须包含数字和字母',
                minlength: '请输入大于4个字符',
                maxlength: '请输入小于25个字符'
            }
        };
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    SigninComponent.prototype.buildForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)
                ]
            ]
        });
        this.userForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    SigninComponent.prototype.onValueChanged = function (data) {
        if (!this.userForm) {
            return;
        }
        var form = this.userForm;
        for (var field in this.formErrors) {
            if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    };
    SigninComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.auth.googleLogin().then(function () { return _this.afterSignIn(); });
    };
    SigninComponent.prototype.signInWithGithub = function () {
        var _this = this;
        this.auth.githubLogin().then(function () { return _this.afterSignIn(); });
    };
    SigninComponent.prototype.signInWithEmail = function () {
        this.auth
            .emailLogin(this.userForm.value['email'], this.userForm.value['password'])
            .catch(function (error) { return console.log('邮箱登录出错：', error); });
    };
    SigninComponent.prototype.signInAnonymously = function () {
        var _this = this;
        this.auth.anonymousLogin().then(function () { return _this.afterSignIn(); });
    };
    SigninComponent.prototype.login = function () {
        this.signInWithEmail();
    };
    SigninComponent.prototype.afterSignIn = function () {
        this.router.navigate(['/']);
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/pages/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.scss */ "./src/app/pages/signin/signin.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/signup/signup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100%;\">\r\n  <div class=\"register mat-elevation-z12\">\r\n    <div class=\"register-header\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n      注册账号\r\n    </div>\r\n    <form #form=\"ngForm\" (ngSubmit)=\"register()\">\r\n      <div class=\"register-content\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"昵称\" type=\"text\" name=\"name\" required [(ngModel)]=\"name\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"邮箱\" type=\"text\" name=\"email\" required [(ngModel)]=\"email\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"密码\" type=\"password\" name=\"password\" required [(ngModel)]=\"password\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"确认密码\" type=\"password\" name=\"password-confirm\" required [(ngModel)]=\"passwordConfirm\">\r\n        </mat-form-field>\r\n        <div class=\"extra-options\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n          <mat-checkbox class=\"remember-me\">我同意 <a href=\"javascript:;\">注册协议</a></mat-checkbox>\r\n        </div>\r\n        <button color=\"primary\" mat-raised-button [disabled]=\"!form.valid\">创建账户</button>\r\n        <p class=\"note\">已经有账户?<br/> <a [routerLink]=\"['/sigin']\">登录</a></p>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/signup/signup.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  background: #fff url(\"/assets/images/background/login.jpg\") no-repeat center center fixed;\n  background-size: cover;\n  height: 100%;\n  width: 100%; }\n\n.register {\n  background: white;\n  width: 380px; }\n\n.register .register-header {\n    background: #ccc;\n    padding: 24px; }\n\n.register .register-content {\n    padding: 24px 42px 42px; }\n\n.register .register-content mat-form-field {\n      width: 100%;\n      margin: 6px 0; }\n\n.register .register-content .extra-options {\n      margin: 16px 0 32px; }\n\n.register .register-content .extra-options .remember-me {\n        color: #777; }\n\n.register .register-content a {\n      text-decoration: none;\n      color: #2196F3; }\n\n.register .register-content a:hover {\n        text-decoration: underline; }\n\n.register .register-content .note {\n      color: #777;\n      margin: 24px 0 0;\n      text-align: center; }\n"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signUpWithEmail = function () {
        var _this = this;
        console.log(this.email, this.password);
        this.auth.emailSignUp(this.email, this.password).then(function () { return _this.afterSignIn(); });
    };
    SignupComponent.prototype.register = function () {
        this.signUpWithEmail();
    };
    SignupComponent.prototype.afterSignIn = function () {
        this.router.navigate(['/']);
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/pages/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/pages/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/shared/firebase.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/firebase.module.ts ***!
  \*******************************************/
/*! exports provided: FireBaseComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireBaseComponentsModule", function() { return FireBaseComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FireBaseComponentsModule = /** @class */ (function () {
    function FireBaseComponentsModule() {
    }
    FireBaseComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                angularfire2__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].firebase),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"]
            ],
            exports: [angularfire2__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthModule"], angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"]]
        })
    ], FireBaseComponentsModule);
    return FireBaseComponentsModule;
}());



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialComponentsModule", function() { return MaterialComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialComponentsModule = /** @class */ (function () {
    function MaterialComponentsModule() {
    }
    MaterialComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"]
            ]
        })
    ], MaterialComponentsModule);
    return MaterialComponentsModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material.module */ "./src/app/shared/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialComponentsModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialComponentsModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyAGcYsQtc9xqqEKstnoO3WasuZxJmKTwNc',
        authDomain: 'angular-material-app-stbui.firebaseapp.com',
        databaseURL: 'https://angular-material-app-stbui.firebaseio.com',
        projectId: 'angular-material-app-stbui',
        storageBucket: 'angular-material-app-stbui.appspot.com',
        messagingSenderId: '974351057659'
    },
    navigationApi: '/assets/data/navigation',
    todoApi: '/assets/data/todo/list.json',
    mailApi: '/assets/data/mail/list.json',
    chatsApi: '/assets/data/chats/list.json',
    analysisApi: '/assets/data/analysis',
    crmApi: '/assets/data/crm',
    tableApi: '/assets/data/table'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/chamidu/DATA/Protected/Work/freelance/intertek-mockup/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map