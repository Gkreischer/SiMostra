(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\nh1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUNBQXVDO0FBQ3ZDO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtDQUNoQjtBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLGVBQWU7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFwcENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuaDEge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogIzk5OTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbmgyIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxubmF2IGEge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbm5hdiBhOnZpc2l0ZWQsIGE6bGluayB7XG4gIGNvbG9yOiAjNjA3RDhCO1xufVxubmF2IGE6aG92ZXIge1xuICBjb2xvcjogIzAzOWJlNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQztcbn1cbm5hdiBhLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDM5YmU1O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-carousel></app-carousel>\n<app-infoempresa></app-infoempresa>\n<app-servicos></app-servicos>\n<app-parceiros></app-parceiros>\n<app-contato></app-contato>\n<app-rodape></app-rodape>\n"

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
        this.title = 'MSK Informática';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _infoempresa_infoempresa_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./infoempresa/infoempresa.component */ "./src/app/infoempresa/infoempresa.component.ts");
/* harmony import */ var _servicos_servicos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./servicos/servicos.component */ "./src/app/servicos/servicos.component.ts");
/* harmony import */ var _contato_contato_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contato/contato.component */ "./src/app/contato/contato.component.ts");
/* harmony import */ var _rodape_rodape_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./rodape/rodape.component */ "./src/app/rodape/rodape.component.ts");
/* harmony import */ var _parceiros_parceiros_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./parceiros/parceiros.component */ "./src/app/parceiros/parceiros.component.ts");
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


















var AppModule = /** @class */ (function () {
    function AppModule(platformId, appId) {
        this.platformId = platformId;
        this.appId = appId;
        var platform = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["isPlatformBrowser"])(platformId) ?
            'in the browser' : 'on the server';
        console.log("Running " + platform + " with appId=" + appId);
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'tour-of-heroes' }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__["InMemoryDataService"], { dataEncapsulation: false }),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__["CarouselComponent"],
                _infoempresa_infoempresa_component__WEBPACK_IMPORTED_MODULE_12__["InfoempresaComponent"],
                _servicos_servicos_component__WEBPACK_IMPORTED_MODULE_13__["ServicosComponent"],
                _contato_contato_component__WEBPACK_IMPORTED_MODULE_14__["ContatoComponent"],
                _rodape_rodape_component__WEBPACK_IMPORTED_MODULE_15__["RodapeComponent"],
                _parceiros_parceiros_component__WEBPACK_IMPORTED_MODULE_16__["ParceirosComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"])),
        __metadata("design:paramtypes", [Object, String])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/carousel/carousel.component.css":
/*!*************************************************!*\
  !*** ./src/app/carousel/carousel.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img_carousel {\r\n    width: 100% !important;\r\n}\r\n\r\n@media screen and (max-width: 787px) {\r\n    h3, p {\r\n        display: none;\r\n    }\r\n\r\n    .carousel-item {\r\n        height: 1vh!important;\r\n        min-height: 1vh!important;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJO1FBQ0ksY0FBYztLQUNqQjs7SUFFRDtRQUNJLHNCQUFzQjtRQUN0QiwwQkFBMEI7S0FDN0I7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nX2Nhcm91c2VsIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4N3B4KSB7XHJcbiAgICBoMywgcCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxdmghaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDF2aCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/carousel/carousel.component.html":
/*!**************************************************!*\
  !*** ./src/app/carousel/carousel.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-carousel *ngIf=\"images\">\n  <ng-template ngbSlide>\n    <img class=\"img_carousel\" [src]=\"images[0]\" alt=\"Random first slide\">\n    <div class=\"carousel-caption\">\n      <h3>10 seconds between slides...</h3>\n      <p>This carousel uses customized default values.</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <img class=\"img_carousel\" [src]=\"images[1]\" alt=\"Random second slide\">\n    <div class=\"carousel-caption\">\n      <h3>No mouse events...</h3>\n      <p>This carousel doesn't pause or resume on mouse events</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <img class=\"img_carousel\" [src]=\"images[2]\"  alt=\"Random third slide\">\n    <div class=\"carousel-caption\">\n      <h3>No keyboard...</h3>\n      <p>This carousel uses customized default values.</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <img class=\"img_carousel\" [src]=\"images[3]\" alt=\"Random fourth slide\">\n    <div class=\"carousel-caption\">\n      <h3>And no wrap after last slide.</h3>\n      <p>This carousel uses customized default values.</p>\n    </div>\n  </ng-template>\n</ngb-carousel>"

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(config) {
        this.images = [1, 2, 3, 4].map(function () { return "https://picsum.photos/900/500?random&t=" + Math.random(); });
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
        config.pauseOnHover = false;
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/carousel/carousel.component.css")],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/contato/contato.component.css":
/*!***********************************************!*\
  !*** ./src/app/contato/contato.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes fadeIn{\r\n    0%{\r\n        -webkit-transform: rotate(xx) scale(0);\r\n                transform: rotate(xx) scale(0);\r\n        opacity: 0;\r\n        }\r\n    12%{\r\n        }\r\n    36%{\r\n        }\r\n    61%{\r\n        }\r\n    100%{\r\n        -webkit-transform: rotate(xx) scale(0);\r\n                transform: rotate(xx) scale(0);\r\n        opacity: 1;\r\n        }\r\n}\r\n\r\n@keyframes fadeIn{\r\n    0%{\r\n        -webkit-transform: rotate(xx) scale(0);\r\n                transform: rotate(xx) scale(0);\r\n        opacity: 0;\r\n        }\r\n    12%{\r\n        }\r\n    36%{\r\n        }\r\n    61%{\r\n        }\r\n    100%{\r\n        -webkit-transform: rotate(xx) scale(0);\r\n                transform: rotate(xx) scale(0);\r\n        opacity: 1;\r\n        }\r\n}\r\n\r\n.container{\r\n    -webkit-animation: fadeIn 3s 0s linear;\r\n            animation: fadeIn 3s 0s linear;\r\n\r\n    /* Formato do elemento *//*Safari, Chrome*//*Firefox*/\r\n    border-radius: 200px 200px 0 0;\r\n\r\n    /* Gradiente *//* FF3.6+ *//* Chrome,Safari4+ *//* Chrome10+,Safari5.1+ *//* Opera 11.10+ */\r\n    background: -ms-linear-gradient(180deg, #1301FE 0, #42B4F6 100%);/* IE10+ */\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1301FE', endColorstr='#F4F60C', GradientType='1'); /* for IE */\r\n    background: linear-gradient(180deg, #1301FE 0, #42B4F6 100%);/* W3C */\r\n}\r\n\r\nh1 {\r\n    font-size: 20px;\r\n    font-weight: bolder;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGF0by9jb250YXRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLHVDQUErQjtnQkFBL0IsK0JBQStCO1FBQy9CLFdBQVc7U0FDVjtJQUNMO1NBQ0s7SUFDTDtTQUNLO0lBQ0w7U0FDSztJQUNMO1FBQ0ksdUNBQStCO2dCQUEvQiwrQkFBK0I7UUFDL0IsV0FBVztTQUNWO0NBQ1I7O0FBZkQ7SUFDSTtRQUNJLHVDQUErQjtnQkFBL0IsK0JBQStCO1FBQy9CLFdBQVc7U0FDVjtJQUNMO1NBQ0s7SUFDTDtTQUNLO0lBQ0w7U0FDSztJQUNMO1FBQ0ksdUNBQStCO2dCQUEvQiwrQkFBK0I7UUFDL0IsV0FBVztTQUNWO0NBQ1I7O0FBRUQ7SUFDSSx1Q0FBK0I7WUFBL0IsK0JBQStCOztJQUUvQix5QkFBeUIsQUFDYyxrQkFBa0IsQUFDckIsV0FBVztJQUMvQywrQkFBK0I7O0lBRS9CLGVBQWUsQUFDbUQsWUFBWSxBQUNnQixxQkFBcUIsQUFDOUMsMEJBQTBCLEFBQy9CLGtCQUFrQjtJQUNsRixpRUFBaUUsV0FBVztJQUM1RSxxSEFBcUgsQ0FBQyxZQUFZO0lBQ2xJLDZEQUE2RCxTQUFTO0NBQ3pFOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhdG8vY29udGF0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBmYWRlSW57XHJcbiAgICAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSh4eCkgc2NhbGUoMCk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICAxMiV7XHJcbiAgICAgICAgfVxyXG4gICAgMzYle1xyXG4gICAgICAgIH1cclxuICAgIDYxJXtcclxuICAgICAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKHh4KSBzY2FsZSgwKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIGFuaW1hdGlvbjogZmFkZUluIDNzIDBzIGxpbmVhcjtcclxuXHJcbiAgICAvKiBGb3JtYXRvIGRvIGVsZW1lbnRvICovXHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwMHB4IDIwMHB4IDAgMDsvKlNhZmFyaSwgQ2hyb21lKi9cclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMjAwcHggMjAwcHggMCAwOy8qRmlyZWZveCovXHJcbiAgICBib3JkZXItcmFkaXVzOiAyMDBweCAyMDBweCAwIDA7XHJcblxyXG4gICAgLyogR3JhZGllbnRlICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgxODBkZWcsICMxMzAxRkUgMCwgIzQyQjRGNiAxMDAlKTsvKiBGRjMuNisgKi9cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAxODBkZWcsIGNvbG9yLXN0b3AoMCwgMTMwMUZFKSwgY29sb3Itc3RvcCgxMDAlLCA0MkI0RjYpKTsvKiBDaHJvbWUsU2FmYXJpNCsgKi9cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzEzMDFGRSAwLCAjNDJCNEY2IDEwMCUpOy8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMTMwMUZFIDAsICM0MkI0RjYgMTAwJSk7LyogT3BlcmEgMTEuMTArICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzEzMDFGRSAwLCAjNDJCNEY2IDEwMCUpOy8qIElFMTArICovXHJcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjMTMwMUZFJywgZW5kQ29sb3JzdHI9JyNGNEY2MEMnLCBHcmFkaWVudFR5cGU9JzEnKTsgLyogZm9yIElFICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMTMwMUZFIDAsICM0MkI0RjYgMTAwJSk7LyogVzNDICovXHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/contato/contato.component.html":
/*!************************************************!*\
  !*** ./src/app/contato/contato.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container py-5 mt-5 bg-primary text-white\">\n  <div class=\"row justify-content-center\">\n    <h1 class=\"h3\">Entre em contato conosco</h1>\n  </div>\n  <div class=\"row justify-content-center\">\n    <div class=\" col-10 col-md-5\">\n      <form>\n        <div class=\"form-group\">\n          <label>Nome</label>\n          <input class=\"form-control\" type=\"text\">\n        </div>\n        <div class=\"form-group\">\n          <label>Telefone</label>\n          <input class=\"form-control\" type=\"tel\">\n        </div>\n        <div class=\"form-group\">\n          <label>Email</label>\n          <input class=\"form-control\" type=\"text\">\n        </div>\n        <div class=\"form-group\">\n          <label>Mensagem</label>\n          <textarea class=\"form-control\" rows=\"5\"></textarea>\n        </div>\n        <div class=\"form-group text-center\">\n          <button class=\"btn\">Enviar</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contato/contato.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contato/contato.component.ts ***!
  \**********************************************/
/*! exports provided: ContatoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoComponent", function() { return ContatoComponent; });
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

var ContatoComponent = /** @class */ (function () {
    function ContatoComponent() {
    }
    ContatoComponent.prototype.ngOnInit = function () {
    };
    ContatoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contato',
            template: __webpack_require__(/*! ./contato.component.html */ "./src/app/contato/contato.component.html"),
            styles: [__webpack_require__(/*! ./contato.component.css */ "./src/app/contato/contato.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContatoComponent);
    return ContatoComponent;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/infoempresa/infoempresa.component.css":
/*!*******************************************************!*\
  !*** ./src/app/infoempresa/infoempresa.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 787px) {\r\n    img {\r\n        display: none;\r\n    }\r\n\r\n    h1 {\r\n        font-size: 36px!important;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-content: center;\r\n        font-weight: bolder;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mb2VtcHJlc2EvaW5mb2VtcHJlc2EuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksY0FBYztLQUNqQjs7SUFFRDtRQUNJLDBCQUEwQjtRQUMxQixjQUFjO1FBQ2Qsd0JBQXdCO1FBQ3hCLHNCQUFzQjtRQUN0QixvQkFBb0I7S0FDdkI7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL2luZm9lbXByZXNhL2luZm9lbXByZXNhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3ODdweCkge1xyXG4gICAgaW1nIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDM2cHghaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/infoempresa/infoempresa.component.html":
/*!********************************************************!*\
  !*** ./src/app/infoempresa/infoempresa.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-3\">\r\n    <div class=\"row my-4\">\r\n        <div class=\"col-12\">\r\n            <h1 class=\"display-4\">Seja Bem-Vindo</h1>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12 col-md-8\">\r\n            <p class=\"lead\">\r\n                Aqui vai um texto básico sobre a empresa. Exemplos de conteúdo nesse texto: história da empresa, visão, produto ofertado e etc.\r\n            </p>\r\n        </div>\r\n        <div class=\"col-4\">\r\n            <img class=\"img-fluid\" src=\"https://automacaodevendas.com/wp-content/uploads/sites/6/2017/05/7-Dicas-Infal%C3%ADveis-Para-a-sua-Empresa-fazer-Sucesso-no-Facebook-e-Crescer-mais.jpg\" alt=\"Informações da empresa\">\r\n        </div>\r\n        \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/infoempresa/infoempresa.component.ts":
/*!******************************************************!*\
  !*** ./src/app/infoempresa/infoempresa.component.ts ***!
  \******************************************************/
/*! exports provided: InfoempresaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoempresaComponent", function() { return InfoempresaComponent; });
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

var InfoempresaComponent = /** @class */ (function () {
    function InfoempresaComponent() {
    }
    InfoempresaComponent.prototype.ngOnInit = function () {
    };
    InfoempresaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-infoempresa',
            template: __webpack_require__(/*! ./infoempresa.component.html */ "./src/app/infoempresa/infoempresa.component.html"),
            styles: [__webpack_require__(/*! ./infoempresa.component.css */ "./src/app/infoempresa/infoempresa.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoempresaComponent);
    return InfoempresaComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- Navigation -->\n  <nav class=\"navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"index.html\">MSK Informática</a>\n      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"about.html\">About</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"services.html\">Services</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"contact.html\">Contact</a>\n          </li>\n          <li class=\"nav-item dropdown\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownPortfolio\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              Portfolio\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownPortfolio\">\n              <a class=\"dropdown-item\" href=\"portfolio-1-col.html\">1 Column Portfolio</a>\n              <a class=\"dropdown-item\" href=\"portfolio-2-col.html\">2 Column Portfolio</a>\n              <a class=\"dropdown-item\" href=\"portfolio-3-col.html\">3 Column Portfolio</a>\n              <a class=\"dropdown-item\" href=\"portfolio-4-col.html\">4 Column Portfolio</a>\n              <a class=\"dropdown-item\" href=\"portfolio-item.html\">Single Portfolio Item</a>\n            </div>\n          </li>\n          <li class=\"nav-item dropdown\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownBlog\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              Blog\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownBlog\">\n              <a class=\"dropdown-item\" href=\"blog-home-1.html\">Blog Home 1</a>\n              <a class=\"dropdown-item\" href=\"blog-home-2.html\">Blog Home 2</a>\n              <a class=\"dropdown-item\" href=\"blog-post.html\">Blog Post</a>\n            </div>\n          </li>\n          <li class=\"nav-item dropdown\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownBlog\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              Other Pages\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownBlog\">\n              <a class=\"dropdown-item\" href=\"full-width.html\">Full Width Page</a>\n              <a class=\"dropdown-item\" href=\"sidebar.html\">Sidebar Page</a>\n              <a class=\"dropdown-item\" href=\"faq.html\">FAQ</a>\n              <a class=\"dropdown-item\" href=\"404.html\">404</a>\n              <a class=\"dropdown-item\" href=\"pricing.html\">Pricing Table</a>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/parceiros/parceiros.component.css":
/*!***************************************************!*\
  !*** ./src/app/parceiros/parceiros.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-fluid__diminuiTamanho {\r\n    width: 300px!;\r\n    height: 80px!;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFyY2Vpcm9zL3BhcmNlaXJvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGNBQWM7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9wYXJjZWlyb3MvcGFyY2Vpcm9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWZsdWlkX19kaW1pbnVpVGFtYW5obyB7XHJcbiAgICB3aWR0aDogMzAwcHghO1xyXG4gICAgaGVpZ2h0OiA4MHB4ITtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/parceiros/parceiros.component.html":
/*!****************************************************!*\
  !*** ./src/app/parceiros/parceiros.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container bg-secondary d-none d-sm-block\">\n  <div class=\"row justify-content-center text-center text-white\">\n    <div class=\"col-12 col-md-12\">\n      <h1 class=\"display-4\">Parceiros</h1>\n      <p class=\"lead\">Abaixo serão exibidos as logomarcas dos parceiros. É conveniente ter autorização de uso da\n        logomarca.</p>\n    </div>\n  </div>\n</div>\n<div class=\"container d-none d-sm-block\">\n  <div class=\"row mt-3\">\n    <div class=\"col-12 col-md-12\">\n      <div class=\"d-flex justify-content-around\">\n        <img class=\"img-fluid img-fluid__diminuiTamanho mt-5\" src=\"https://static.wixstatic.com/media/a14e74_74ec67e4d3494857a62c9c4bfe65bf4d~mv2.png/v1/crop/x_0,y_0,w_1483,h_842/fill/w_190,h_106,al_c,q_80,usm_0.66_1.00_0.01/a14e74_74ec67e4d3494857a62c9c4bfe65bf4d~mv2.webp\">\n        <img class=\"img-fluid img-fluid__diminuiTamanho mt-5\" src=\"http://www.louispasteur.com.br/imagens/home/logo.png\">\n        <img class=\"img-lfuid\" src=\"data:image/png;base64,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\">\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/parceiros/parceiros.component.ts":
/*!**************************************************!*\
  !*** ./src/app/parceiros/parceiros.component.ts ***!
  \**************************************************/
/*! exports provided: ParceirosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParceirosComponent", function() { return ParceirosComponent; });
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

var ParceirosComponent = /** @class */ (function () {
    function ParceirosComponent() {
    }
    ParceirosComponent.prototype.ngOnInit = function () {
    };
    ParceirosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parceiros',
            template: __webpack_require__(/*! ./parceiros.component.html */ "./src/app/parceiros/parceiros.component.html"),
            styles: [__webpack_require__(/*! ./parceiros.component.css */ "./src/app/parceiros/parceiros.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ParceirosComponent);
    return ParceirosComponent;
}());



/***/ }),

/***/ "./src/app/rodape/rodape.component.css":
/*!*********************************************!*\
  !*** ./src/app/rodape/rodape.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvZGFwZS9yb2RhcGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/rodape/rodape.component.html":
/*!**********************************************!*\
  !*** ./src/app/rodape/rodape.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"py-5 bg-dark\">\n  <div class=\"container\">\n    <p class=\"m-0 text-center text-white\">Copyright &copy; Sua Empresa 2018</p>\n  </div>\n  <!-- /.container -->\n</footer>"

/***/ }),

/***/ "./src/app/rodape/rodape.component.ts":
/*!********************************************!*\
  !*** ./src/app/rodape/rodape.component.ts ***!
  \********************************************/
/*! exports provided: RodapeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RodapeComponent", function() { return RodapeComponent; });
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

var RodapeComponent = /** @class */ (function () {
    function RodapeComponent() {
    }
    RodapeComponent.prototype.ngOnInit = function () {
    };
    RodapeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rodape',
            template: __webpack_require__(/*! ./rodape.component.html */ "./src/app/rodape/rodape.component.html"),
            styles: [__webpack_require__(/*! ./rodape.component.css */ "./src/app/rodape/rodape.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RodapeComponent);
    return RodapeComponent;
}());



/***/ }),

/***/ "./src/app/servicos/servicos.component.css":
/*!*************************************************!*\
  !*** ./src/app/servicos/servicos.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 787px) {\r\n\r\n    h1 {\r\n        font-size: 36px!important;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-content: center;\r\n        font-weight: bolder;\r\n    }\r\n    \r\n    .container {\r\n        margin-top: 0rem !important;\r\n        margin-bottom: 0rem !important;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vydmljb3Mvc2Vydmljb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSTtRQUNJLDBCQUEwQjtRQUMxQixjQUFjO1FBQ2Qsd0JBQXdCO1FBQ3hCLHNCQUFzQjtRQUN0QixvQkFBb0I7S0FDdkI7O0lBRUQ7UUFDSSw0QkFBNEI7UUFDNUIsK0JBQStCO0tBQ2xDO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNvcy9zZXJ2aWNvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzg3cHgpIHtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4IWltcG9ydGFudDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/servicos/servicos.component.html":
/*!**************************************************!*\
  !*** ./src/app/servicos/servicos.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-5\">\n  <div class=\"row my-4 text-center\">\n    <div class=\"col-12\">\n      <h1 class=\"display-4\">Serviços</h1>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card-deck text-center\">\n        <div class=\"card\">\n          <img class=\"card-img-top\" src=\"https://i.ytimg.com/vi/bPoTA9nVK2s/maxresdefault.jpg\" alt=\"Manutenção em computadores, notebooks e redes.\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Titulo do serviço</h5>\n            <p class=\"card-text\">Explique brevemente quais serviços sua empresa oferece</p>\n          </div>\n        </div>\n        <div class=\"card\">\n          <img class=\"card-img-top\" src=\"https://i.ytimg.com/vi/7mFvBPLOzGE/maxresdefault.jpg\" alt=\"Configuração de equipamentos de rede.\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Titulo do serviço</h5>\n            <p class=\"card-text\">Procure utilizar termos do ramo, porém, com coesão e coerência. Não exagere.</p>\n          </div>\n        </div>\n        <div class=\"card\">\n          <img class=\"card-img-top\" src=\"http://marketingestetica.com.br/wp-content/uploads/2017/03/Chave-de-Ouro-no-Atendimento-ao-cliente-8-Dicas-fant%C3%A1sticas-1.jpg\"\n            alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Titulo do serviço</h5>\n            <p class=\"card-text\"></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/servicos/servicos.component.ts":
/*!************************************************!*\
  !*** ./src/app/servicos/servicos.component.ts ***!
  \************************************************/
/*! exports provided: ServicosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicosComponent", function() { return ServicosComponent; });
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

var ServicosComponent = /** @class */ (function () {
    function ServicosComponent() {
    }
    ServicosComponent.prototype.ngOnInit = function () {
    };
    ServicosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-servicos',
            template: __webpack_require__(/*! ./servicos.component.html */ "./src/app/servicos/servicos.component.html"),
            styles: [__webpack_require__(/*! ./servicos.component.css */ "./src/app/servicos/servicos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicosComponent);
    return ServicosComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Gustavo\Documents\GitHub\msk\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map