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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-navigator animation=\"slide\" swipeable [page]=\"initialPage\"></ons-navigator>\n"

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
/* harmony import */ var _modules_children_menu_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/children/menu/menu */ "./src/app/modules/children/menu/menu.ts");
/* harmony import */ var _services_IndexedDbService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/IndexedDbService */ "./src/app/services/IndexedDbService.ts");
/* harmony import */ var _services_GetJsonService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/GetJsonService */ "./src/app/services/GetJsonService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var AppComponent = /** @class */ (function () {
    function AppComponent(indexedDbService, getJsonService) {
        this.indexedDbService = indexedDbService;
        this.getJsonService = getJsonService;
        this.initialPage = _modules_children_menu_menu__WEBPACK_IMPORTED_MODULE_1__["Menu"];
    }
    AppComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var flg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.CheckInitData()];
                    case 1:
                        flg = _a.sent();
                        if (flg) {
                            console.log('データ初期化するよ');
                            //var MstLocationInfo = await this.getJsonService.GetJson('MstLocation').toPromise();
                            //console.log(MstLocationInfo);
                            //this.indexedDbService.addMultipleLocationInfo(MstLocationInfo);
                            //var TrnPhotoInfo = await this.getJsonService.GetJson('TrnPhoto').toPromise();
                            //console.log(TrnPhotoInfo);
                            //this.indexedDbService.addMultiplePhotoInfo(TrnPhotoInfo);
                            this.indexedDbService.cheakedInitData();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.CheckInitData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.indexedDbService.cheakInitData()];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_IndexedDbService__WEBPACK_IMPORTED_MODULE_2__["IndexedDbService"], _services_GetJsonService__WEBPACK_IMPORTED_MODULE_3__["GetJsonService"]])
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ngx_onsenui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-onsenui */ "./node_modules/ngx-onsenui/ngx-onsenui.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_children_menu_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/children/menu/menu */ "./src/app/modules/children/menu/menu.ts");
/* harmony import */ var _modules_children_map_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/children/map/map */ "./src/app/modules/children/map/map.ts");
/* harmony import */ var _modules_children_registrationList_registrationList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/children/registrationList/registrationList */ "./src/app/modules/children/registrationList/registrationList.ts");
/* harmony import */ var _modules_children_upload_upload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/children/upload/upload */ "./src/app/modules/children/upload/upload.ts");
/* harmony import */ var _modules_children_timeTrip_timeTrip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/children/timeTrip/timeTrip */ "./src/app/modules/children/timeTrip/timeTrip.ts");
/* harmony import */ var _modules_children_httpTest_httpTest__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/children/httpTest/httpTest */ "./src/app/modules/children/httpTest/httpTest.ts");
/* harmony import */ var _services_IndexedDbService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/IndexedDbService */ "./src/app/services/IndexedDbService.ts");
/* harmony import */ var _services_DexieServiceEx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/DexieServiceEx */ "./src/app/services/DexieServiceEx.ts");
/* harmony import */ var _services_GetJsonService__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/GetJsonService */ "./src/app/services/GetJsonService.ts");
/* harmony import */ var _services_GoogleMapsAPIWrapperEx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/GoogleMapsAPIWrapperEx */ "./src/app/services/GoogleMapsAPIWrapperEx.ts");
/* harmony import */ var _services_ngx_dexie__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/ngx-dexie */ "./src/app/services/ngx-dexie/index.js");
/* harmony import */ var _services_HttpService__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/HttpService */ "./src/app/services/HttpService.ts");
/* harmony import */ var src_app_services_ReduceImageSizeService__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/services/ReduceImageSizeService */ "./src/app/services/ReduceImageSizeService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Application code starts here









// Add






// Service







var config = {
    databaseName: 'TimeTripPhotoGallery',
    schema: {
        CheakInitData: '++ID',
        TrnPhotoInfo: '++PhotoID,Year,LocationID,Comment,Bin,LastUpdateDateTime',
        MstLocationInfo: '++LocationID,Title,Address,Latitude,Longitude'
    } // any schema of your choice
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                ngx_onsenui__WEBPACK_IMPORTED_MODULE_6__["OnsenModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCju8LIyDfOiDbk53jDrNnW1ifs7F-4tEU'
                }),
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _services_ngx_dexie__WEBPACK_IMPORTED_MODULE_19__["DexieModule"].forRoot(config)
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _modules_children_menu_menu__WEBPACK_IMPORTED_MODULE_9__["Menu"],
                _modules_children_map_map__WEBPACK_IMPORTED_MODULE_10__["Map"],
                _modules_children_registrationList_registrationList__WEBPACK_IMPORTED_MODULE_11__["RegistrationList"],
                _modules_children_upload_upload__WEBPACK_IMPORTED_MODULE_12__["Upload"],
                _modules_children_timeTrip_timeTrip__WEBPACK_IMPORTED_MODULE_13__["TimeTrip"],
                _modules_children_httpTest_httpTest__WEBPACK_IMPORTED_MODULE_14__["httpTest"],
            ],
            entryComponents: [
                _modules_children_menu_menu__WEBPACK_IMPORTED_MODULE_9__["Menu"],
                _modules_children_map_map__WEBPACK_IMPORTED_MODULE_10__["Map"],
                _modules_children_registrationList_registrationList__WEBPACK_IMPORTED_MODULE_11__["RegistrationList"],
                _modules_children_upload_upload__WEBPACK_IMPORTED_MODULE_12__["Upload"],
                _modules_children_timeTrip_timeTrip__WEBPACK_IMPORTED_MODULE_13__["TimeTrip"],
                _modules_children_httpTest_httpTest__WEBPACK_IMPORTED_MODULE_14__["httpTest"],
            ],
            providers: [
                _services_IndexedDbService__WEBPACK_IMPORTED_MODULE_15__["IndexedDbService"],
                _services_DexieServiceEx__WEBPACK_IMPORTED_MODULE_16__["DexieServiceEx"],
                _services_GetJsonService__WEBPACK_IMPORTED_MODULE_17__["GetJsonService"],
                _services_GoogleMapsAPIWrapperEx__WEBPACK_IMPORTED_MODULE_18__["GoogleMapsAPIWrapperEx"],
                _services_HttpService__WEBPACK_IMPORTED_MODULE_20__["HttpService"],
                src_app_services_ReduceImageSizeService__WEBPACK_IMPORTED_MODULE_21__["ReduceImageSizeService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modules/children/httpTest/httpTest.css":
/*!********************************************************!*\
  !*** ./src/app/modules/children/httpTest/httpTest.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content{\r\n  background-color:#f9d3d3;\r\n}\r\n.menu_title{\r\n  text-align:center;\r\n  font-family:Impact;\r\n  font-size:50px;\r\n  color:brown;\r\n  margin:40px 0 10px 0;\r\n}\r\n.content ons-button{\r\n  width:220px;\r\n  height:90px;\r\n  line-height: 20px;\r\n  margin:13px;\r\n  padding-top:10px;\r\n  font-size:25px;\r\n  padding-top:30px;\r\n}\r\n.material-icons{\r\n  font-size:45px;\r\n  line-height:0.8px;\r\n}\r\n.menu_btn_Time_Trip{\r\n  background-color:#ffb553;\r\n}\r\n.menu_btn_Registrations{\r\n  background-color:#4bb5e0;\r\n}\r\n.menu_btn_map{\r\n  background-color:#ff716e;\r\n}\r\n.menu_btn_Upload{\r\n  background-color:#34314b;\r\n}"

/***/ }),

/***/ "./src/app/modules/children/httpTest/httpTest.html":
/*!*********************************************************!*\
  !*** ./src/app/modules/children/httpTest/httpTest.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ons-toolbar>\r\n  <div class=\"center\" (click)=\"goToMenu()\">Menu</div>\r\n</ons-toolbar>\r\n<div class=\"content\">\r\n  <div class=\"menu_title\">\r\n    Http Request\r\n    <br>\r\n    Test\r\n  </div>\r\n  <div style=\"text-align: center; margin: 10px\">\r\n    <ons-input placeholder=\"引数１\" [(value)]=\"arg1\"></ons-input>\r\n    <ons-input placeholder=\"引数２\" [(value)]=\"arg2\"></ons-input>\r\n    <ons-input placeholder=\"引数３\" [(value)]=\"arg3\"></ons-input>\r\n    <ons-input placeholder=\"引数４\" [(value)]=\"arg4\"></ons-input>\r\n  </div>\r\n  <div style=\"text-align: center; margin: 10px\">\r\n    <ons-button (click)=\"goGetLocation()\" class=\"menu_btn_Time_Trip\">\r\n      <i class=\"material-icons\">location_on</i><br>GetLocation\r\n    </ons-button>\r\n    <br>\r\n    <ons-button (click)=\"goAddLocation()\" class=\"menu_btn_Registrations\">\r\n      <i class=\"material-icons\">add_location</i><br>AddLocation\r\n    </ons-button>\r\n    <br>\r\n    <ons-button (click)=\"goGetPhoto()\"  class=\"menu_btn_map\">\r\n        <i class=\"material-icons\">photo</i><br>GetPhoto\r\n    </ons-button>\r\n    <br>\r\n    <ons-button (click)=\"goAddPhoto()\" class=\"menu_btn_Upload\">\r\n      <i class=\"material-icons\">add_photo_alternate</i><br>AddPhoto\r\n    </ons-button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/children/httpTest/httpTest.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/children/httpTest/httpTest.ts ***!
  \*******************************************************/
/*! exports provided: httpTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpTest", function() { return httpTest; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var onsenui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! onsenui */ "./node_modules/onsenui/js/onsenui.js");
/* harmony import */ var onsenui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(onsenui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_onsenui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-onsenui */ "./node_modules/ngx-onsenui/ngx-onsenui.js");
/* harmony import */ var _services_IndexedDbService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/IndexedDbService */ "./src/app/services/IndexedDbService.ts");
/* harmony import */ var src_app_services_HttpService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/HttpService */ "./src/app/services/HttpService.ts");
/* harmony import */ var _menu_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu/menu */ "./src/app/modules/children/menu/menu.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



 //ﾃﾞｭｸｼ


var httpTest = /** @class */ (function () {
    function httpTest(_navigator, _indexedDbService, _httpService) {
        this._navigator = _navigator;
        this._indexedDbService = _indexedDbService;
        this._httpService = _httpService;
        this.arg1 = "タイトル１";
        this.arg2 = "府中市";
        this.arg3 = "35.672074";
        this.arg4 = "139.480319";
    }
    httpTest.prototype.goToMenu = function () {
        this._navigator.nativeElement.pushPage(_menu_menu__WEBPACK_IMPORTED_MODULE_5__["Menu"], { data: { hoge: "fuga" } });
    };
    httpTest.prototype.goGetLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var location, m, _i, _a, key;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._httpService.GetLocation(Number(this.arg1), Number(this.arg2), Number(this.arg3))];
                    case 1:
                        location = _b.sent();
                        for (_i = 0, _a = Object.keys(location); _i < _a.length; _i++) {
                            key = _a[_i];
                            console.log(key, location[key]);
                        }
                        if (location.locations && location.locations.length > 0) {
                            location.locations.map(function (v) {
                                m = [
                                    "locationID:" + v.locationID,
                                    "title:" + v.title,
                                    "address:" + v.address,
                                    "latitude:" + v.latitude,
                                    "longitude:" + v.longitude,
                                    "distance:" + v.distance
                                ];
                                onsenui__WEBPACK_IMPORTED_MODULE_1__["notification"].alert({ messageHTML: _this.forHtml(m), title: 'GetLocation' });
                            }, this);
                        }
                        else {
                            onsenui__WEBPACK_IMPORTED_MODULE_1__["notification"].alert({ message: "StatusCd:" + location.statusCd + "<br>message:" + location.messages, title: 'GetLocation' });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    httpTest.prototype.goAddLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var location, _i, _a, key;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._httpService.AddLocation(this.arg1, this.arg2, Number(this.arg3), Number(this.arg4))];
                    case 1:
                        location = _b.sent();
                        for (_i = 0, _a = Object.keys(location); _i < _a.length; _i++) {
                            key = _a[_i];
                            console.log(key, location[key]);
                        }
                        onsenui__WEBPACK_IMPORTED_MODULE_1__["notification"].alert({ messageHTML: "statusCd:" + location.statusCd + "<br>locationCd:" + location.locationID, title: 'AddLocation' });
                        return [2 /*return*/];
                }
            });
        });
    };
    httpTest.prototype.goGetPhoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var photo, m, _i, _a, k;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._httpService.GetPhoto(Number(this.arg1), Number(this.arg2))];
                    case 1:
                        photo = _b.sent();
                        for (_i = 0, _a = Object.keys(photo); _i < _a.length; _i++) {
                            k = _a[_i];
                            console.log(k, photo[k]);
                        }
                        photo.photos.map(function (v) {
                            m = [
                                "year:" + v.year,
                                "comment:" + v.comment,
                                "bin:" + v.bin
                            ];
                            onsenui__WEBPACK_IMPORTED_MODULE_1__["notification"].alert({ messageHTML: _this.forHtml(m), title: 'GetPhoto' });
                        }, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    httpTest.prototype.goAddPhoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var photo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._httpService.AddPhoto(Number(this.arg1), Number(this.arg2), this.arg3, this.arg4)];
                    case 1:
                        photo = _a.sent();
                        onsenui__WEBPACK_IMPORTED_MODULE_1__["notification"].alert({ messageHTML: "statusCd:" + photo.statusCd + "<br>photoId:" + photo.photoID, title: 'AddPhoto' });
                        return [2 /*return*/];
                }
            });
        });
    };
    httpTest.prototype.forHtml = function (str) {
        var s = "";
        str.map(function (m) {
            s += m + "<br>";
        });
        return s.slice(0, -4);
    };
    httpTest = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ons-page[title='httpTest']",
            template: __webpack_require__(/*! ./httpTest.html */ "./src/app/modules/children/httpTest/httpTest.html"),
            styles: [__webpack_require__(/*! ./httpTest.css */ "./src/app/modules/children/httpTest/httpTest.css")]
        }),
        __metadata("design:paramtypes", [ngx_onsenui__WEBPACK_IMPORTED_MODULE_2__["OnsNavigator"], _services_IndexedDbService__WEBPACK_IMPORTED_MODULE_3__["IndexedDbService"], src_app_services_HttpService__WEBPACK_IMPORTED_MODULE_4__["HttpService"]])
    ], httpTest);
    return httpTest;
}());



/***/ }),

/***/ "./src/app/modules/children/map/map.css":
/*!**********************************************!*\
  !*** ./src/app/modules/children/map/map.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  .map_area {\r\n    height:90%;\r\n  }\r\n  agm-map {\r\n    height: 90%;\r\n  }\r\n  .btn_area {\r\n    height:10%;\r\n    width:100%;\r\n    display:inline-bock;\r\n  }\r\n  .btn_area img {\r\n    height: 100%;\r\n  }\r\n  .btn_icon_style {\r\n    height: 100%;\r\n    width:33.3333%;\r\n    background-color:transparent;\r\n  }\r\n  .btn_icon_style_left {\r\n    text-align: left;\r\n  }\r\n  .btn_icon_style_center {\r\n    text-align: center;\r\n  }\r\n  .btn_icon_style_right {\r\n    text-align: right;\r\n  }\r\n  .btn_regist_point {\r\n    background-color:red;\r\n  }\r\n  .w-100 {\r\n    width: 100%;\r\n  }\r\n  .w-90 {\r\n    width: 90%;\r\n  }\r\n  .w-80 {\r\n    width: 80%;\r\n  }\r\n  .w-50 {\r\n    width: 50%;\r\n  }\r\n  .w-40 {\r\n    width: 50%;\r\n  }\r\n  .w-30 {\r\n    width: 30%;\r\n  }\r\n  .w-20 {\r\n    width: 20%;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/modules/children/map/map.html":
/*!***********************************************!*\
  !*** ./src/app/modules/children/map/map.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-toolbar>\r\n  <div class=\"left\"><ons-back-button>Back</ons-back-button></div>\r\n  <div class=\"center\">地図から探す</div>\r\n</ons-toolbar>\r\n<agm-map [latitude]=\"centerLat\" [longitude]=\"centerLng\" [zoom]=15 [disableDoubleClickZoom]=\"true\" (mapDblClick)=\"dblClickMap($event)\">\r\n  <agm-marker\r\n    [latitude]=\"lastClicklat\" \r\n    [longitude]=\"lastClicklng\"\r\n    [iconUrl]=\"{\r\n      url:markerPinSelected,\r\n      scaledSize: {\r\n      width: 40,\r\n      height: 40\r\n      }\r\n    }\"\r\n    [label]=\"{\r\n      text: '選択した地点',\r\n      fontSize: '10px',\r\n      fontWeight: '700'\r\n    }\r\n  \">\r\n    <agm-info-window #infoWindow>\r\n      <table>\r\n        <tr>\r\n          <td colspan=\"2\">この地点を登録する</td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"w-30\">地点名</td>\r\n            <td class=\"w-70\"><ons-input id=\"mapTitle\" [(value)]=\"txtTitle\"></ons-input></td>     \r\n        </tr>\r\n        <tr>\r\n            <td>住所</td>\r\n            <td>\r\n              <ons-select [(ngModel)]=\"selectedAddresses\">\r\n                <option *ngFor=\"let address of addressList\">{{address?.formatted_address}}</option>\r\n              </ons-select>\r\n            </td>          \r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\"><ons-button (click)=\"registMapMst(lastClicklat, lastClicklng, infoWindow)\" modifier=\"large\" class=\"btn_regist_point\">登録</ons-button></td>\r\n        </tr>\r\n      </table>\r\n    </agm-info-window>\r\n  </agm-marker>\r\n  <agm-marker *ngFor=\"let m of markers;\" \r\n    [latitude]=\"m.Latitude\" \r\n    [longitude]=\"m.Longitude\" \r\n    [label]=\r\n    \"{\r\n      text: m.Title,\r\n      fontSize: '10px',\r\n      fontWeight: '700'\r\n    }\"\r\n    [iconUrl]=\"{\r\n      url:m.iconUrl,\r\n      scaledSize: {\r\n      width: 40,\r\n      height: 40\r\n      }\r\n    }\"\r\n    (markerClick)=\"clickMarker(m)\"\r\n    >\r\n    <agm-info-window>\r\n      <table>\r\n        <tr>\r\n          <td class=\"w-30\">名称：</td>\r\n          <td class=\"w-70\">{{m.Title}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td>住所：</td>\r\n          <td>{{m.Address}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\"><ons-button (click)=\"sendToTweet(m.Title)\" modifier=\"large\" class=\"btn_regist_point\">ツイートする</ons-button></td>\r\n        </tr>\r\n      </table>\r\n    </agm-info-window>\r\n  </agm-marker>\r\n  <agm-marker\r\n      [latitude]=\"presentLat\" \r\n      [longitude]=\"presentLng\"\r\n      [iconUrl]=\"{\r\n        url:nowPlacePin,\r\n        scaledSize: {\r\n        width: 40,\r\n        height: 40\r\n        }\r\n      }\"\r\n      [label]=\"{\r\n        text: '現在地',\r\n        fontSize: '10px',\r\n        fontWeight: '700'\r\n      }\r\n      \">\r\n    </agm-marker>\r\n</agm-map>\r\n<div class=\"btn_area\">\r\n  <ons-button (click)=\"helpPopup()\" class=\"btn_icon_style btn_icon_style_center\"><img [src]=\"iconPathInfo\" alt=\"登録の仕方\"></ons-button>\r\n  <ons-button (click)=\"goToTimeTrip()\" class=\"btn_icon_style btn_icon_style_center\"><img [src]=\"iconPathTrip\" alt=\"TimeTrip画面へ\"></ons-button>\r\n  <ons-button (click)=\"goToUpload()\" class=\"btn_icon_style btn_icon_style_center\"><img [src]=\"iconPathRegist\" alt=\"画像アップロード画面へ\"></ons-button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/children/map/map.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/children/map/map.ts ***!
  \*********************************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var onsenui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! onsenui */ "./node_modules/onsenui/js/onsenui.js");
/* harmony import */ var onsenui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(onsenui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _upload_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../upload/upload */ "./src/app/modules/children/upload/upload.ts");
/* harmony import */ var _timeTrip_timeTrip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../timeTrip/timeTrip */ "./src/app/modules/children/timeTrip/timeTrip.ts");
/* harmony import */ var ngx_onsenui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-onsenui */ "./node_modules/ngx-onsenui/ngx-onsenui.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _services_IndexedDbService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/IndexedDbService */ "./src/app/services/IndexedDbService.ts");
/* harmony import */ var _services_HttpService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/HttpService */ "./src/app/services/HttpService.ts");
/* harmony import */ var _services_GoogleMapsAPIWrapperEx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/GoogleMapsAPIWrapperEx */ "./src/app/services/GoogleMapsAPIWrapperEx.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






 //ﾃﾞｭｸｼ
 //HTTPｻｰﾋﾞｽ
 //ｸﾞｰｸﾞﾙ
var Map = /** @class */ (function () {
    // #endregion
    function Map(_navigator, _httpService, _indexedDbService, _googleMapsAPIWrapperEx, _params) {
        this._navigator = _navigator;
        this._httpService = _httpService;
        this._indexedDbService = _indexedDbService;
        this._googleMapsAPIWrapperEx = _googleMapsAPIWrapperEx;
        this._params = _params;
        this.markers = [];
        this.createWindow = null;
        this.txtTitle = '';
        this.selectedAddresses = ''; // 住所を選択した値が入る
        this.markerPinNormal = './assets/contents/icons/pin_normal.svg';
        this.markerPinSelected = './assets/contents/icons/pin_free.svg';
        this.nowPlacePin = './assets/contents/icons/pin_nowPlace.svg';
        this.iconPathTrip = './assets/contents/buttons/goToTrip.png';
        this.iconPathRegist = './assets/contents/buttons/goToRegist.png';
        this.iconPathInfo = './assets/contents/buttons/showInfo.png';
    }
    Map.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var comp;
            return __generator(this, function (_a) {
                this.presentLat = this._params.data.PresentLat;
                this.presentLng = this._params.data.PresentLng;
                comp = this;
                if (this.presentLat != null || this.presentLng != null) {
                    this.changeCenter(comp.presentLat, comp.presentLng);
                    this.getMapData(comp.centerLat, comp.centerLng);
                    this.displayPin();
                }
                else {
                    onsenui__WEBPACK_IMPORTED_MODULE_0__["notification"].alert({ message: '地点情報を取得できるように設定してからご使用くださいね！', title: '現在地が取得できませんでした', callback: function () {
                            // comp.presentLat = 35.690694;
                            // comp.presentLng = 139.691971;
                            comp.changeCenter(comp.presentLat, comp.presentLng);
                            comp.getMapData(comp.centerLat, comp.centerLng);
                            comp.displayPin();
                        } });
                }
                return [2 /*return*/];
            });
        });
    };
    // #region 現在地を取得する
    Map.prototype.getGeo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var option, comp;
            return __generator(this, function (_a) {
                option = { timeout: 6000 };
                comp = this;
                navigator.geolocation.getCurrentPosition(function (position) {
                    comp.presentLat = position.coords.latitude;
                    comp.presentLng = position.coords.longitude;
                    // comp.presentLat =  42.319744;// 室蘭NISCO仕様
                    // comp.presentLng = 140.986007;// 室蘭NISCO仕様
                    //comp.presentLat =  39.640479;// 宮古駅仕様
                    //comp.presentLng = 141.946646;// 宮古駅仕様
                    comp.changeCenter(comp.presentLat, comp.presentLng);
                    comp.getMapData(comp.centerLat, comp.centerLng);
                    comp.displayPin();
                }, function () {
                    onsenui__WEBPACK_IMPORTED_MODULE_0__["notification"].alert({ message: '地点情報を取得できるように設定してからご使用くださいね！', title: '現在地が取得できませんでした', callback: function () {
                            // comp.presentLat =  42.319744;// 室蘭NISCO仕様
                            // comp.presentLng = 140.986007;// 室蘭NISCO仕様
                            //comp.presentLat =  39.640479;// 宮古駅仕様
                            //comp.presentLng = 141.946646;// 宮古駅仕様
                            // comp.presentLat = 35.690694;
                            // comp.presentLng = 139.691971;
                            comp.changeCenter(comp.presentLat, comp.presentLng);
                            comp.getMapData(comp.centerLat, comp.centerLng);
                            comp.displayPin();
                        } });
                }, option);
                return [2 /*return*/];
            });
        });
    };
    // #endregion
    // #region ◆表示系◆
    // #region 画面にピンを表示する
    Map.prototype.displayPin = function () {
        this.apiWrapper = new _agm_core__WEBPACK_IMPORTED_MODULE_5__["GoogleMapsAPIWrapper"](this.apiLoader, this.zone);
        this.apiWrapper.getCenter()
            .then(function (value) {
            console.log(value);
        })
            .catch(function (value) {
            console.log(value);
        });
    };
    // #endregion
    // #region ダブルタップした地点の情報を登録するための情報を取得する
    Map.prototype.dblClickMap = function ($event) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.lastOpenWindow = this;
                        this.resetInput();
                        this.lastClicklat = $event.coords.lat;
                        this.lastClicklng = $event.coords.lng;
                        _a = this;
                        return [4 /*yield*/, this._googleMapsAPIWrapperEx.getAddress(this.lastClicklat, this.lastClicklng)];
                    case 1:
                        _a.addressList = _b.sent(); //座標から住所を取得する
                        this.address = this.addressList[0].formatted_address;
                        return [2 /*return*/];
                }
            });
        });
    };
    // #endregion
    // #region タップした地点の情報を取得する
    Map.prototype.clickMarker = function (m) {
        this.lastOpenWindow = this;
        this.locationID = m.LocationID;
        this.address = m.Address;
        this.resetPinMarker(); //ピンマーカーをすべて初期化する
        m.iconUrl = this.markerPinSelected;
        this.selectedMarkerPin = m.iconUrl; // 新しいアイコン情報を取得する
        this.changeCenter(m.Latitude, m.Longitude);
    };
    // #endregion
    // #region 指定した座標を中心にする
    Map.prototype.changeCenter = function (lat, lng) {
        this.centerLat = lat;
        this.centerLng = lng;
    };
    // #endregion
    // #endregion
    // #region ◆DBアクセス系◆
    // #region データ取得
    Map.prototype.getMapData = function (lat, lng) {
        return __awaiter(this, void 0, void 0, function () {
            var res, _i, _a, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._httpService.GetLocation(lat, lng, null)];
                    case 1:
                        res = _b.sent();
                        if (!(res.statusCd == _services_HttpService__WEBPACK_IMPORTED_MODULE_7__["StatusCd"].success)) return [3 /*break*/, 6];
                        console.log('データ取得完了');
                        console.log('データの長さ：' + res.locations.length);
                        _i = 0, _a = res.locations;
                        _b.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        data = _a[_i];
                        this.markers.push({
                            LocationID: data.locationID,
                            Title: data.title,
                            Address: data.address,
                            Latitude: data.latitude,
                            Longitude: data.longitude,
                            iconUrl: this.markerPinNormal
                        });
                        return [4 /*yield*/, this._httpService.GetPhoto(data.locationID, null)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5:
                        ;
                        return [3 /*break*/, 7];
                    case 6:
                        console.log('データが取得できなかった');
                        this.markers = [];
                        _b.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    // #endregion
    // #region 地点登録
    Map.prototype.registMapMst = function (lat, lng, infoWindow) {
        return __awaiter(this, void 0, void 0, function () {
            var address, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        address = this._googleMapsAPIWrapperEx.getAddress(lat, lng);
                        if (!(this.txtTitle == '')) return [3 /*break*/, 1];
                        this.alertNonInputTxt();
                        return [3 /*break*/, 5];
                    case 1: return [4 /*yield*/, this._httpService.AddLocation(this.txtTitle, this.selectedAddresses, lat, lng)];
                    case 2:
                        ret = _a.sent();
                        if (!(ret.statusCd != _services_HttpService__WEBPACK_IMPORTED_MODULE_7__["StatusCd"].success)) return [3 /*break*/, 3];
                        onsenui__WEBPACK_IMPORTED_MODULE_0__["notification"].alert(ret.messages.join('\r\n'));
                        return [3 /*break*/, 5];
                    case 3:
                        this.changeCenter(lat, lng);
                        return [4 /*yield*/, this.getMapData(lat, lng)];
                    case 4:
                        _a.sent();
                        this.displayPin();
                        infoWindow.close();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    // #endregion
    // #endregion
    // #region ◆地点登録DBオブジェクト生成◆
    Map.prototype.createObj = function (locationID, lat, lng, tit, address) {
        return { LocationID: locationID, Title: tit, Address: address, Latitude: lat, Longitude: lng };
    };
    // #endregion
    // #region ◆画面遷移系◆
    // #region TimeTrip画面へ遷移
    Map.prototype.goToTimeTrip = function () {
        if (this.locationID == undefined) {
            this.alertNonSelectPin();
        }
        else {
            this._navigator.nativeElement.pushPage(_timeTrip_timeTrip__WEBPACK_IMPORTED_MODULE_2__["TimeTrip"], { data: { LocationID: this.locationID } });
        }
    };
    // #endregion
    // #region アップロード画面へ遷移
    Map.prototype.goToUpload = function () {
        if (this.locationID == undefined) {
            this.alertNonSelectPin();
        }
        else {
            this._navigator.nativeElement.pushPage(_upload_upload__WEBPACK_IMPORTED_MODULE_1__["Upload"], { data: { LocationID: this.locationID, Address: this.address } });
        }
    };
    // #endregion
    // #endregion
    // #region ◆アラート系◆
    // #region ピン未選択
    Map.prototype.alertNonSelectPin = function () {
        onsenui__WEBPACK_IMPORTED_MODULE_0__["notification"].alert({ message: '閲覧したいピンを選択すると、その地点の情報を確認できます', title: 'ピンを選びましょう！' });
    };
    // #endregion
    // #region 地点名未入力
    Map.prototype.alertNonInputTxt = function () {
        onsenui__WEBPACK_IMPORTED_MODULE_0__["notification"].alert({ message: 'この地点がどこなのか分かる地点名を入力しましょう', title: '地点の名前を入力しましょう！' });
    };
    // #endregion
    // #region 使い方
    Map.prototype.helpPopup = function () {
        onsenui__WEBPACK_IMPORTED_MODULE_0__["notification"].alert({ message: '地図上をダブルタップして<br/>地点を登録できます', title: '地点登録の仕方' });
    };
    // #endregion
    // #endregion
    // #region ◆初期化系◆
    // #region 入力項目リセット
    Map.prototype.resetInput = function () {
        this.txtTitle = '';
        this.selectedAddresses = '';
        this.addressList = [];
    };
    // #endregion
    // #region ピンマーカーアイコンリセット
    Map.prototype.resetPinMarker = function () {
        var pin = this;
        pin.markers.filter(function (value) {
            if (value.iconUrl === pin.markerPinSelected) {
                value.iconUrl = pin.markerPinNormal;
            }
        });
    };
    // #endregion
    // #endregion
    // Twitterに投稿する
    Map.prototype.sendToTweet = function (Title) {
        console.log("Twitterに投稿するボタンを押下");
        var base_url = 'https://twitter.com/intent/tweet';
        var text = Title + 'についてツイートしています '; //ツイート本文
        var hashtags = 'TimeTripPhotoGallery';
        var tweetLink = base_url + '?text=' + encodeURIComponent(text) + '&hashtags=' + hashtags + '&target=_blank';
        window.open(encodeURI(decodeURI(tweetLink)), 'この地点についてツイートする');
    };
    Map = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: "ons-page[title='map']",
            template: __webpack_require__(/*! ./map.html */ "./src/app/modules/children/map/map.html"),
            styles: [__webpack_require__(/*! ./map.css */ "./src/app/modules/children/map/map.css")]
        }),
        __metadata("design:paramtypes", [ngx_onsenui__WEBPACK_IMPORTED_MODULE_3__["OnsNavigator"],
            _services_HttpService__WEBPACK_IMPORTED_MODULE_7__["HttpService"],
            _services_IndexedDbService__WEBPACK_IMPORTED_MODULE_6__["IndexedDbService"],
            _services_GoogleMapsAPIWrapperEx__WEBPACK_IMPORTED_MODULE_8__["GoogleMapsAPIWrapperEx"],
            ngx_onsenui__WEBPACK_IMPORTED_MODULE_3__["Params"]])
    ], Map);
    return Map;
}());

// #endregion
// #endregion


/***/ }),

/***/ "./src/app/modules/children/menu/menu.css":
/*!************************************************!*\
  !*** ./src/app/modules/children/menu/menu.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content{\r\n  background-color:#f9d3d3;\r\n}\r\n.menu_title{\r\n  text-align:center;\r\n  font-family:Impact;\r\n  font-size:50px;\r\n  color:brown;\r\n  margin:40px 0 10px 0;\r\n}\r\n.content ons-button{\r\n  width:220px;\r\n  height:90px;\r\n  line-height: 20px;\r\n  margin:13px;\r\n  padding-top:10px;\r\n  font-size:25px;\r\n  padding-top:30px;\r\n}\r\n.material-icons{\r\n  font-size:45px;\r\n  line-height:0.8px;\r\n}\r\n.menu_btn_Time_Trip{\r\n  background-color:#ffb553;\r\n}\r\n.menu_btn_Registrations{\r\n  background-color:#4bb5e0;\r\n}\r\n.menu_btn_map{\r\n  background-color:#ff716e;\r\n}\r\n.menu_btn_Upload{\r\n  background-color:#34314b;\r\n}"

/***/ }),

/***/ "./src/app/modules/children/menu/menu.html":
/*!*************************************************!*\
  !*** ./src/app/modules/children/menu/menu.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ons-toolbar>\r\n  <div class=\"center\" (click)=\"deleteDataBase()\">Menu</div>\r\n</ons-toolbar>\r\n<div class=\"content\">\r\n  <div class=\"menu_title\"><!-- (click)=\"goToHttpTest()\">-->\r\n    Time Trip\r\n    <br>\r\n    Photo Gallery\r\n  </div>\r\n  <div *ngIf=\"false\" id=\"message\">{{msg}}</div>\r\n  <div style=\"text-align: center; margin: 10px\">\r\n    <ons-button *ngIf=\"false\" (click)=\"goToTimeTrip()\" class=\"menu_btn_Time_Trip\">\r\n      <i class=\"material-icons\">restore</i><br>Time Trip\r\n    </ons-button>\r\n    <br>\r\n    <ons-button (click)=\"goToRegistrationList()\" class=\"menu_btn_Registrations\">\r\n      <i class=\"material-icons\">view_list</i><br>Registrations\r\n    </ons-button>\r\n    <br>\r\n    <ons-button (click)=\"goToMap()\" class=\"menu_btn_map\">\r\n        <i class=\"material-icons\">place</i><br>Map\r\n    </ons-button>\r\n    <br>\r\n    <ons-button (click)=\"goToUpload()\" class=\"menu_btn_Upload\" *ngIf=\"false\">\r\n      <i class=\"material-icons\">arrow_upward</i><br>Upload\r\n    </ons-button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/children/menu/menu.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/children/menu/menu.ts ***!
  \***********************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var onsenui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! onsenui */ "./node_modules/onsenui/js/onsenui.js");
/* harmony import */ var onsenui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(onsenui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_onsenui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-onsenui */ "./node_modules/ngx-onsenui/ngx-onsenui.js");
/* harmony import */ var _map_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../map/map */ "./src/app/modules/children/map/map.ts");
/* harmony import */ var _registrationList_registrationList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../registrationList/registrationList */ "./src/app/modules/children/registrationList/registrationList.ts");
/* harmony import */ var _upload_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../upload/upload */ "./src/app/modules/children/upload/upload.ts");
/* harmony import */ var _timeTrip_timeTrip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../timeTrip/timeTrip */ "./src/app/modules/children/timeTrip/timeTrip.ts");
/* harmony import */ var _httpTest_httpTest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../httpTest/httpTest */ "./src/app/modules/children/httpTest/httpTest.ts");
/* harmony import */ var _services_IndexedDbService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/IndexedDbService */ "./src/app/services/IndexedDbService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








 //ﾃﾞｭｸｼ
var Menu = /** @class */ (function () {
    function Menu(_navigator, _indexedDbService) {
        this._navigator = _navigator;
        this._indexedDbService = _indexedDbService;
        this.afterGetGeo = false;
    }
    Menu.prototype.show = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getGeo()];
                    case 1:
                        _a.sent();
                        this.afterGetGeo = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Menu.prototype.deleteDataBase = function () {
        var _this = this;
        onsenui__WEBPACK_IMPORTED_MODULE_1__["notification"].confirm({
            title: "確認",
            message: "キャッシュを削除しますか？",
            cancelable: true,
            callback: function (i) {
                if (i == 1) {
                    //this._indexedDbService.deleteDatabase();
                    _this._indexedDbService.deleteAllMstLocationInfo();
                    _this._indexedDbService.deleteAllTrnPhotoInfo();
                }
            }
        });
    };
    Menu.prototype.ngOnInit = function () {
    };
    Menu.prototype.goToTimeTrip = function () {
        return __awaiter(this, void 0, void 0, function () {
            var min, max, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // GetGeo未完了時は処理を中断させる
                        if (this.afterGetGeo == false) {
                            return [2 /*return*/];
                        }
                        min = 1;
                        return [4 /*yield*/, this._indexedDbService.countLocationInfo()];
                    case 1:
                        max = _a.sent();
                        r = Math.floor(Math.random() * (max + 1 - min)) + min;
                        this._navigator.nativeElement.pushPage(_timeTrip_timeTrip__WEBPACK_IMPORTED_MODULE_6__["TimeTrip"], { data: { "LocationID": r } });
                        return [2 /*return*/];
                }
            });
        });
    };
    Menu.prototype.goToHttpTest = function () {
        // GetGeo未完了時は処理を中断させる
        if (this.afterGetGeo == false) {
            return;
        }
        this._navigator.nativeElement.pushPage(_httpTest_httpTest__WEBPACK_IMPORTED_MODULE_7__["httpTest"], { data: { hoge: "fuga" } });
    };
    Menu.prototype.goToMap = function () {
        // GetGeo未完了時は処理を中断させる
        if (this.afterGetGeo == false) {
            return;
        }
        this._navigator.nativeElement.pushPage(_map_map__WEBPACK_IMPORTED_MODULE_3__["Map"], { data: { "PresentLat": this.presentLat, "PresentLng": this.presentLng } });
    };
    Menu.prototype.goToRegistrationList = function () {
        // GetGeo未完了時は処理を中断させる
        if (this.afterGetGeo == false) {
            return;
        }
        this._navigator.nativeElement.pushPage(_registrationList_registrationList__WEBPACK_IMPORTED_MODULE_4__["RegistrationList"], { data: { "PresentLat": this.presentLat, "PresentLng": this.presentLng } });
    };
    Menu.prototype.goToUpload = function () {
        // GetGeo未完了時は処理を中断させる
        if (this.afterGetGeo == false) {
            return;
        }
        this._navigator.nativeElement.pushPage(_upload_upload__WEBPACK_IMPORTED_MODULE_5__["Upload"], { data: { hoge: "fuga" } });
    };
    // 現在地を取得する
    Menu.prototype.getGeo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var option, comp;
            return __generator(this, function (_a) {
                option = { timeout: 6000 };
                comp = this;
                navigator.geolocation.getCurrentPosition(function (position) {
                    comp.presentLat = position.coords.latitude;
                    comp.presentLng = position.coords.longitude;
                    console.log("Get Geo OK.");
                }, function () {
                    console.error("Get Geo NG.");
                    // ons.notification.alert({ message: '地点情報を取得できるように設定してからご使用くださいね！', title:'現在地が取得できませんでした', callback:function(){
                    // }});
                }, option);
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('show'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Menu.prototype, "show", null);
    Menu = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ons-page[title='menu']",
            template: __webpack_require__(/*! ./menu.html */ "./src/app/modules/children/menu/menu.html"),
            styles: [__webpack_require__(/*! ./menu.css */ "./src/app/modules/children/menu/menu.css")]
        }),
        __metadata("design:paramtypes", [ngx_onsenui__WEBPACK_IMPORTED_MODULE_2__["OnsNavigator"], _services_IndexedDbService__WEBPACK_IMPORTED_MODULE_8__["IndexedDbService"]])
    ], Menu);
    return Menu;
}());



/***/ }),

/***/ "./src/app/modules/children/registrationList/registrationList.css":
/*!************************************************************************!*\
  !*** ./src/app/modules/children/registrationList/registrationList.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.registration_title{\r\n    font-size:20px;\r\n    font-weight:bold;\r\n  }\r\n.registration_comment{\r\n  font-size:14px; \r\n}\r\n.dataPicArea {\r\n  width: 100%;\r\n}\r\n.dataPicArea img {\r\n  text-align:center;\r\n}\r\n.dataMemoArea {\r\n  width:30%;\r\n}\r\n.dataMemoArea-title {\r\n  margin-left:5px;\r\n  margin-right:20px;\r\n  /*font-size:16px;*/\r\n  font-weight:700;\r\n}\r\n.dataMemoArea-text {\r\n  margin-left:5px;\r\n  margin-right:20px;\r\n  /*font-size:10px;*/\r\n}"

/***/ }),

/***/ "./src/app/modules/children/registrationList/registrationList.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/children/registrationList/registrationList.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-toolbar>\r\n　<div class=\"left\"><ons-back-button>Back</ons-back-button></div>\r\n  <div class=\"center\">写真一覧から探す</div>\r\n</ons-toolbar>\r\n<div class=\"content\">\r\n  <div *ngIf=\"isVisible\">\r\n      <ons-list>\r\n          <ons-list-item modifier=\"chevron\" tappable *ngFor=\"let Registration of RegistrationLists\" [value]=\"Registration.Title\" (click)=\"clickPhoto(Registration.LocationID,Registration.PhotoID)\">\r\n            <div>\r\n                <img [src]=\"sanitize(Registration.Bin)\" [alt]=\"Registration.Title\" class=\"dataPicArea\">\r\n            </div>\r\n            <br>\r\n            <div>\r\n              <p class=\"dataMemoArea-text\">{{ Registration.Comment }}</p>\r\n            </div>\r\n          </ons-list-item>\r\n        </ons-list>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/children/registrationList/registrationList.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/children/registrationList/registrationList.ts ***!
  \***********************************************************************/
/*! exports provided: RegistrationList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationList", function() { return RegistrationList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var onsenui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! onsenui */ "./node_modules/onsenui/js/onsenui.js");
/* harmony import */ var onsenui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(onsenui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_onsenui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-onsenui */ "./node_modules/ngx-onsenui/ngx-onsenui.js");
/* harmony import */ var _timeTrip_timeTrip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../timeTrip/timeTrip */ "./src/app/modules/children/timeTrip/timeTrip.ts");
/* harmony import */ var _services_IndexedDbService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/IndexedDbService */ "./src/app/services/IndexedDbService.ts");
/* harmony import */ var _services_HttpService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/HttpService */ "./src/app/services/HttpService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var RegistrationList = /** @class */ (function () {
    function RegistrationList(_navigator, _indexedDbService, _httpService, _params, _domSanitizer) {
        this._navigator = _navigator;
        this._indexedDbService = _indexedDbService;
        this._httpService = _httpService;
        this._params = _params;
        this._domSanitizer = _domSanitizer;
        this.RegistrationLists = [];
        this.isVisible = false;
    }
    RegistrationList.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.getRegistList();
                return [2 /*return*/];
            });
        });
    };
    RegistrationList.prototype.getRegistList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var presentLat, presentLng, location, _i, _a, l, photo, _b, _c, p;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        presentLat = this._params.data.PresentLat;
                        presentLng = this._params.data.PresentLng;
                        if (!presentLat || !presentLng) {
                            onsenui__WEBPACK_IMPORTED_MODULE_2__["notification"].alert({ message: '地点情報を取得できるように設定してからご使用くださいね！', title: '現在地が取得できませんでした' });
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this._httpService.GetLocation(presentLat, presentLng, 15)];
                    case 1:
                        location = _d.sent();
                        if (location.statusCd != _services_HttpService__WEBPACK_IMPORTED_MODULE_6__["StatusCd"].success) {
                            //ons.notification.alert({ messageHTML: `ステータスコード：${location.statusCd}<br>location.messages.join()`, title:'エラー'});
                            return [2 /*return*/];
                        }
                        this.isVisible = false;
                        _i = 0, _a = location.locations;
                        _d.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        l = _a[_i];
                        return [4 /*yield*/, this._httpService.GetPhoto(l.locationID, null)];
                    case 3:
                        photo = _d.sent();
                        if (photo.statusCd != _services_HttpService__WEBPACK_IMPORTED_MODULE_6__["StatusCd"].success) {
                            return [3 /*break*/, 4];
                        }
                        for (_b = 0, _c = photo.photos; _b < _c.length; _b++) {
                            p = _c[_b];
                            // 表示用リストに追加
                            this.RegistrationLists.push({
                                PhotoID: p.photoID,
                                Year: p.year,
                                LocationID: l.locationID,
                                Title: l.title,
                                Comment: p.comment,
                                Bin: decodeURIComponent(p.bin) //p.bin.replace(/\s+/g, "")
                            });
                        }
                        _d.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5:
                        this.isVisible = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    // 写真をタップした時のイベント
    RegistrationList.prototype.clickPhoto = function (_locatonID, _photoId) {
        this._navigator.nativeElement.pushPage(_timeTrip_timeTrip__WEBPACK_IMPORTED_MODULE_4__["TimeTrip"], { data: { PhotoID: _photoId, LocationID: _locatonID } });
        console.log('クリックしたLocationID' + _locatonID);
        console.log('クリックしたPhotoId' + _photoId);
    };
    RegistrationList.prototype.sanitize = function (url) {
        return this._domSanitizer.bypassSecurityTrustUrl(url);
    };
    RegistrationList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ons-page[title='registrationList']",
            template: __webpack_require__(/*! ./registrationList.html */ "./src/app/modules/children/registrationList/registrationList.html"),
            styles: [__webpack_require__(/*! ./registrationList.css */ "./src/app/modules/children/registrationList/registrationList.css")]
        }),
        __metadata("design:paramtypes", [ngx_onsenui__WEBPACK_IMPORTED_MODULE_3__["OnsNavigator"],
            _services_IndexedDbService__WEBPACK_IMPORTED_MODULE_5__["IndexedDbService"],
            _services_HttpService__WEBPACK_IMPORTED_MODULE_6__["HttpService"],
            ngx_onsenui__WEBPACK_IMPORTED_MODULE_3__["Params"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], RegistrationList);
    return RegistrationList;
}());

var RegistrationInfo = /** @class */ (function () {
    function RegistrationInfo() {
    }
    return RegistrationInfo;
}());


/***/ }),

/***/ "./src/app/modules/children/timeTrip/timeTrip.css":
/*!********************************************************!*\
  !*** ./src/app/modules/children/timeTrip/timeTrip.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  .left {\r\n    float: left;\r\n    margin-right: 3px;\r\n  }\r\n   \r\n  .item {\r\n    margin-bottom: 30px;\r\n  }\r\n   \r\n  .title {\r\n    font-size: 24px;\r\n    \r\n  }\r\n   \r\n  .material-icons {\r\n    font-size:30px;\r\n  }\r\n   \r\n  .btn {\r\n    color: black;\r\n    background-color: transparent;\r\n    box-shadow: none;\r\n    height: 35px;\r\n    width: 35px;\r\n    padding: 0px;\r\n    margin-right: 10px;\r\n  }\r\n   \r\n  .addressSelect{\r\n    width: calc(100% - 35px - 10px);\r\n  }\r\n   \r\n  .carousel_text {\r\n    position: absolute; \r\n    bottom: 0; \r\n    right: 30px; \r\n    margin-bottom: 10px;\r\n    font-size: 30px;\r\n    color: darkgray;\r\n  }\r\n   \r\n  .carousel_photo {\r\n    margin: auto;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    max-height: 100%;\r\n    max-width: 100%;\r\n  }\r\n   \r\n  .carousel_erricon {\r\n    margin: auto;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 35px;\r\n    height: 35px;\r\n  }\r\n   \r\n  .photoModal {\r\n    height: 300px;\r\n    width: 300px;\r\n    margin: auto;\r\n  }\r\n   \r\n  .modal_text {\r\n    position: relative;\r\n    top: 250px;\r\n    left: 90px;\r\n    font-size: 30px;\r\n    color: dimgray;\r\n  }\r\n   \r\n  @media screen and (min-width:0px){\r\n    #carousel {\r\n      height: 200px; \r\n      width: 80%;\r\n      margin: 0 auto;\r\n    }\r\n  }\r\n   \r\n  @media screen and (min-width:600px){\r\n    #carousel {\r\n      height: 400px; \r\n      width: 80%; \r\n      margin: 0 auto;\r\n    }\r\n  } \r\n"

/***/ }),

/***/ "./src/app/modules/children/timeTrip/timeTrip.html":
/*!*********************************************************!*\
  !*** ./src/app/modules/children/timeTrip/timeTrip.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-toolbar>\r\n  <div class=\"left\"><ons-back-button>Back</ons-back-button></div>\r\n  <div class=\"center\">TimeTrip</div>\r\n</ons-toolbar>\r\n<div class=\"content\">\r\n  <ons-list>\r\n    <!-- 上段エリア -->\r\n    <ons-list-item style=\"width: 100%;\">\r\n      <ons-button class=\"btn\" (click)=\"goToMenu()\">\r\n        <i class=\"material-icons\">home</i>\r\n      </ons-button>\r\n      {{location.Address}}\r\n      <!-- <ons-select class=\"addressSelect\" [(ngModel)]=\"locationId\" (change)=\"changeAddress($event)\">\r\n        <option *ngFor=\"let addressItem of addressListDB\" [value]=\"addressItem.LocationID\">\r\n          {{ addressItem.Address }}\r\n        </option>\r\n      </ons-select> -->\r\n    </ons-list-item>\r\n\r\n    <!-- 写真エリア -->\r\n    <ons-list-item style=\"width: 100%;\">\r\n      <div (click)=\"prev()\" style=\"z-index: 100;\" style=\"width: 30px;\">\r\n        <i [style.display]=\"!isPrev() ? 'none' : 'block'\" class=\"material-icons\">arrow_back</i>\r\n      </div>\r\n      <ons-carousel #carousel swipeable auto-scroll centered id=\"carousel\"\r\n        (postchange)=\"toPostChange($event)\">\r\n        <ons-carousel-item *ngFor=\"let item of photoInfoList;let i = index\" (click)=\"openModal(i)\">\r\n          <img class=\"carousel_photo\" [src]=\"item.Bin\" alt=\"\" (error)=\"isImgErrList[i] = true\" style=\"height: 100%;\">\r\n          <div *ngIf=\"isImgErrList[i]\" class=\"carousel_erricon\"><i class=\"material-icons\">cancel</i></div>\r\n        </ons-carousel-item>\r\n      </ons-carousel>\r\n      <div (click)=\"next()\" style=\"z-index: 100;\" style=\"width: 30px;\">\r\n        <i [style.display]=\"!isNext() ? 'none' : 'block'\" class=\"material-icons\">arrow_forward</i>\r\n      </div>\r\n    </ons-list-item>\r\n    \r\n    <!-- 情報エリア -->\r\n    <ons-list-item>\r\n      <div align=\"center\" style=\"width: 100%;\">\r\n        <div *ngIf=\"photoInfo && photoInfo.Year\" class=\"item title\">{{photoInfo.Year}} 年</div>\r\n        <div *ngIf=\"false\" class=\"item title\">{{location.Title}}</div><!--廃止-->\r\n        <div class=\"item\" style=\"margin-top: 50px;\">{{photoInfo?.Comment}}</div>\r\n        <div class=\"item\">\r\n          <ons-button (click)=\"goToUpload()\" class=\"btn\"><i class=\"material-icons\">edit</i></ons-button>\r\n        </div>\r\n      </div>\r\n    </ons-list-item>\r\n  </ons-list>\r\n</div>\r\n\r\n<!-- 画像拡大モーダル -->\r\n<ons-modal #modal (click)=\"modal.hide()\" *ngIf=\"photoInfo?.Bin\">\r\n  <div class=\"photoModal\">\r\n    <img class=\"carousel_photo\" [src]=\"photoInfo.Bin\">\r\n  </div>\r\n</ons-modal>"

/***/ }),

/***/ "./src/app/modules/children/timeTrip/timeTrip.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/children/timeTrip/timeTrip.ts ***!
  \*******************************************************/
/*! exports provided: TimeTrip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeTrip", function() { return TimeTrip; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/menu */ "./src/app/modules/children/menu/menu.ts");
/* harmony import */ var _upload_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../upload/upload */ "./src/app/modules/children/upload/upload.ts");
/* harmony import */ var onsenui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! onsenui */ "./node_modules/onsenui/js/onsenui.js");
/* harmony import */ var onsenui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(onsenui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_onsenui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-onsenui */ "./node_modules/ngx-onsenui/ngx-onsenui.js");
/* harmony import */ var _services_IndexedDbService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/IndexedDbService */ "./src/app/services/IndexedDbService.ts");
/* harmony import */ var _services_HttpService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/HttpService */ "./src/app/services/HttpService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var TimeTrip = /** @class */ (function () {
    function TimeTrip(_navigator, _indexedDbService, _params) {
        this._navigator = _navigator;
        this._indexedDbService = _indexedDbService;
        this._params = _params;
        this.photoInfo = new _services_HttpService__WEBPACK_IMPORTED_MODULE_6__["LocalPhotoInfo"]();
        this.isImgErrList = [];
        this.locationInfoList = [];
        this.photoInfoAllList = [];
        this.photoInfoList = [];
        this.location = new _services_HttpService__WEBPACK_IMPORTED_MODULE_6__["LocalLocationInfo"]();
        this.baseDistance = 0;
        this.activeIndex = 0;
        this.photoId = 0;
        this.check = true;
        this.isConstructor = false;
        this.isVisible = false;
        this.params = null;
        this.isConstructor = true;
    }
    TimeTrip.prototype.timeTripShow = function (e) {
        if (this.isConstructor) {
            this.params = this._params.data;
        }
        else {
            this.params = this._navigator.nativeElement.topPage.data;
        }
        this.init();
    };
    TimeTrip.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this.check && this.photoInfoList && this.photoInfoList.length > 0) {
            var index = this.photoInfoList.findIndex(function (s) { return s.PhotoID == _this.photoId; });
            var activeIndex = index == -1 ? 0 : index;
            this.carousel.nativeElement.setActiveIndex(activeIndex, { animation: "none" });
            this.check = false;
        }
    };
    TimeTrip.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var locationId, _a, array;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.isVisible = false;
                        locationId = this.params.LocationID;
                        this.photoId = this.params.PhotoID;
                        this.photoInfoList = [];
                        this.check = true;
                        // 位置情報リスト取得
                        //console.log(await this._indexedDbService.getMstLocationInfo());
                        _a = this;
                        return [4 /*yield*/, this._indexedDbService.getMstLocationInfo()];
                    case 1:
                        // 位置情報リスト取得
                        //console.log(await this._indexedDbService.getMstLocationInfo());
                        _a.locationInfoList = _b.sent();
                        if (this.locationInfoList) {
                            this.location = this.locationInfoList.find(function (f) { return f.LocationID == locationId; });
                            this.isVisible = !this.location ? false : true;
                        }
                        // 写真情報取得
                        return [4 /*yield*/, this.setPhotoInfo(locationId, this.photoId)];
                    case 2:
                        // 写真情報取得
                        _b.sent();
                        array = new Array(this.photoInfoList.length);
                        this.isImgErrList = this.isImgErrList.fill(false, 0, array.length);
                        if (this.photoInfoList.length == 0) {
                            onsenui__WEBPACK_IMPORTED_MODULE_3__["notification"].toast('写真がありません！', { timeout: 1500, animation: 'fall' });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // カルーセル切り替え時
    TimeTrip.prototype.toPostChange = function (event) {
        this.activeIndex = event.activeIndex;
        this.photoInfo = this.photoInfoList[event.activeIndex];
    };
    TimeTrip.prototype.isPrev = function () {
        return this.activeIndex != 0;
    };
    TimeTrip.prototype.isNext = function () {
        return this.photoInfoList.length != 0 && this.activeIndex != this.photoInfoList.length - 1;
    };
    TimeTrip.prototype.prev = function () {
        this.carousel.nativeElement.prev();
    };
    TimeTrip.prototype.next = function () {
        this.carousel.nativeElement.next();
    };
    // メニューに遷移
    TimeTrip.prototype.goToMenu = function () {
        this._navigator.nativeElement.resetToPage(_menu_menu__WEBPACK_IMPORTED_MODULE_1__["Menu"]);
    };
    // uploadに遷移
    TimeTrip.prototype.goToUpload = function () {
        this.isConstructor = false;
        this._navigator.nativeElement.pushPage(_upload_upload__WEBPACK_IMPORTED_MODULE_2__["Upload"], { data: { LocationID: this.location.LocationID, Address: this.location.Address } });
    };
    // 画像拡大モーダルを開く
    TimeTrip.prototype.openModal = function (index) {
        if (!this.isImgErrList[index]) {
            this.modal.nativeElement.show();
        }
    };
    // カルーセルの初期設定
    TimeTrip.prototype.initCrousel = function (comp, photoID) {
        // カルーセルの初期位置設定
        var index = comp.photoInfoList.findIndex(function (s) { return s.PhotoID == photoID; });
        console.log(index);
        var activeIndex = index == -1 ? 0 : index;
        comp.carousel.nativeElement.refresh();
        comp.carousel.nativeElement.setActiveIndex(activeIndex);
        //this.carousel.nativeElement.setAttribute("initial-index", activeIndex.toString());
    };
    TimeTrip.prototype.setindex = function (n) {
        this.carousel.nativeElement.setActiveIndex(n);
    };
    // 写真情報設定
    TimeTrip.prototype.setPhotoInfo = function (locationID, photoID) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, tempPhotoInfo;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // 時系列写真情報リスト取得
                        //console.log(await this._indexedDbService.getTrnPhotoInfo());
                        _a = this;
                        return [4 /*yield*/, this._indexedDbService.getTrnPhotoInfo()];
                    case 1:
                        // 時系列写真情報リスト取得
                        //console.log(await this._indexedDbService.getTrnPhotoInfo());
                        _a.photoInfoAllList = _b.sent();
                        // timeTrip情報を設定
                        if (this.photoInfoAllList) {
                            this.photoInfoList = this.photoInfoAllList
                                .sort(function (a, b) {
                                if (a.Year < b.Year)
                                    return -1;
                                if (a.Year > b.Year)
                                    return 1;
                                return 0;
                            })
                                .filter(function (f) { return f.LocationID == locationID; });
                        }
                        // activeな写真情報
                        if (this.photoInfoList && this.photoInfoList.length > 0) {
                            tempPhotoInfo = this.photoInfoList.find(function (f) { return f.PhotoID == photoID; });
                            this.photoInfo = tempPhotoInfo ? tempPhotoInfo : this.photoInfoList[0];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 距離を測る関数
    TimeTrip.prototype.getDistance = function (event) {
        event.preventDefault();
        var touches = event.changedTouches;
        // 2本以上の指の場合だけ処理
        if (touches.length > 1) {
            // 座標1 (1本目の指)
            var x1 = touches[0].pageX;
            var y1 = touches[0].pageY;
            // 座標2 (2本目の指)
            var x2 = touches[1].pageX;
            var y2 = touches[1].pageY;
            // 2点間の距離
            return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        }
        return 1;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('carousel'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TimeTrip.prototype, "carousel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TimeTrip.prototype, "modal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('show'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TimeTrip.prototype, "timeTripShow", null);
    TimeTrip = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ons-page[title='timeTrip']",
            template: __webpack_require__(/*! ./timeTrip.html */ "./src/app/modules/children/timeTrip/timeTrip.html"),
            styles: [__webpack_require__(/*! ./timeTrip.css */ "./src/app/modules/children/timeTrip/timeTrip.css")]
        }),
        __metadata("design:paramtypes", [ngx_onsenui__WEBPACK_IMPORTED_MODULE_4__["OnsNavigator"],
            _services_IndexedDbService__WEBPACK_IMPORTED_MODULE_5__["IndexedDbService"],
            ngx_onsenui__WEBPACK_IMPORTED_MODULE_4__["Params"]])
    ], TimeTrip);
    return TimeTrip;
}());



/***/ }),

/***/ "./src/app/modules/children/upload/upload.html":
/*!*****************************************************!*\
  !*** ./src/app/modules/children/upload/upload.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-toolbar>\r\n  <div class=\"left\"><ons-back-button>Back</ons-back-button></div>\r\n  <div class=\"center\">写真アップロード</div>\r\n</ons-toolbar>\r\n\r\n<div class=\"content\">\r\n\r\n  <!-- 位置 -->\r\n  <ons-list>\r\n    <ons-list-item style=\"width: 100%;\">\r\n      <ons-button class=\"btn\" style=\"background:transparent; color: black; box-shadow: none;\" (click)=\"goToHome()\">\r\n        <i style=\"font-size: 30px\" class=\"material-icons\">home</i>\r\n      </ons-button>\r\n      {{ photoAddress }}\r\n    </ons-list-item>\r\n  </ons-list>\r\n\r\n    <!-- 写真 -->\r\n    <div id=\"previewArea\">\r\n      <img #photoPreview id=\"photoPreview\" style=\"width: 100%; height: auto; text-align: center\">\r\n      <!-- <amp-img #photoPreview [src]=\"binary\" id=\"photoPreview\" height=\"300\" width=\"300\" layout=\"responsive\" style=\"width: 100%; height: auto; text-align: center\"></amp-img> -->\r\n    </div>\r\n\r\n  <ons-list>\r\n    <!-- 写真の情報 -->\r\n    <!-- 年 -->\r\n    <ons-list-header>いつの写真？</ons-list-header>\r\n    <ons-list-item>\r\n      <ons-input type=\"tel\" style=\"width: 130px\" [(value)]=\"photoYear\"></ons-input>\r\n    </ons-list-item>\r\n    <!-- コメント -->\r\n    <ons-list-header>写真のコメント</ons-list-header>\r\n    <ons-list-item>\r\n      <ons-input type=\"textarea\" style=\"width: 100%\" [(value)]=\"photoComment\"></ons-input>\r\n    </ons-list-item>\r\n  </ons-list>\r\n\r\n  <!-- フッター -->\r\n  <div class=\"footer\">\r\n\r\n    <!-- 写真をアップロード -->\r\n    <ons-button id=\"uploadBtn\" class=\"btn\" style=\"background:transparent; color: black; box-shadow: none\" (click)=\"uploadPhotoConfirm();\">\r\n      <label style=\"font-size: 30px\" class=\"material-icons\">cloud_upload</label>\r\n    </ons-button>\r\n\r\n    <!-- 写真を開く -->\r\n    <ons-button id=\"openBtn\" class=\"btn\" style=\"background:transparent; color: black; box-shadow: none\" for=\"openPhoto\">\r\n      <label style=\"font-size: 30px\" class=\"material-icons\">\r\n        insert_photo\r\n        <input id=\"openPhoto\" style=\"display: none\" type=\"file\" (change)=\"changePhoto($event)\" [accept]=\"inputAccept\">\r\n      </label>\r\n    </ons-button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/children/upload/upload.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/children/upload/upload.ts ***!
  \***************************************************/
/*! exports provided: Upload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Upload", function() { return Upload; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_HttpService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/HttpService */ "./src/app/services/HttpService.ts");
/* harmony import */ var src_app_services_ReduceImageSizeService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ReduceImageSizeService */ "./src/app/services/ReduceImageSizeService.ts");
/* harmony import */ var ngx_onsenui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-onsenui */ "./node_modules/ngx-onsenui/ngx-onsenui.js");
/* harmony import */ var _timeTrip_timeTrip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../timeTrip/timeTrip */ "./src/app/modules/children/timeTrip/timeTrip.ts");
/* harmony import */ var _menu_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu/menu */ "./src/app/modules/children/menu/menu.ts");
/* harmony import */ var onsenui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! onsenui */ "./node_modules/onsenui/js/onsenui.js");
/* harmony import */ var onsenui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(onsenui__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var Upload = /** @class */ (function () {
    function Upload(_navigator, _httpService, _params, _reduceImageSizeService) {
        this._navigator = _navigator;
        this._httpService = _httpService;
        this._params = _params;
        this._reduceImageSizeService = _reduceImageSizeService;
        this.photoLocationID = 0;
        this.photoID = 0;
        this.photoYear = 0;
        this.photoAddress = '';
        this.photoComment = '';
        this.inputAccept = '';
    }
    Upload.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // パラメタ取得
                this.photoLocationID = this._params.data.LocationID;
                this.photoAddress = this._params.data.Address;
                // 年初期値
                this.photoYear = new Date().getFullYear();
                // Element情報設定
                this.inputAccept = "image/*";
                return [2 /*return*/];
            });
        });
    };
    //#region 公開処理
    // ファイル選択ボタン
    Upload.prototype.changePhoto = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var size, files, file, imgElem, fileInfo, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        size = 1024 * 300;
                        files = event.target.files;
                        file = files[0];
                        imgElem = document.getElementById('photoPreview');
                        if (!(file.size != null && file.size > size)) return [3 /*break*/, 2];
                        console.log("changePhotoStart --reduce");
                        return [4 /*yield*/, this._reduceImageSizeService.reduceImageSize(file, size)];
                    case 1:
                        fileInfo = _b.sent();
                        imgElem.src = fileInfo.fileDataUrl;
                        console.log("fileInfoEnd --reduce");
                        return [3 /*break*/, 4];
                    case 2:
                        console.log("changePhotoStart --normal");
                        _a = imgElem;
                        return [4 /*yield*/, this._reduceImageSizeService.readDataUrl(file)];
                    case 3:
                        _a.src = _b.sent();
                        console.log("fileInfoEnd --normal");
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // 写真アップロード
    Upload.prototype.uploadPhotoConfirm = function () {
        var _this = this;
        if (this.errorCheck() == false) {
            return;
        }
        onsenui__WEBPACK_IMPORTED_MODULE_6__["notification"].confirm({
            title: "確認",
            message: "写真をアップロードしますか？",
            cancelable: true,
            callback: function (i) {
                if (i == 1) {
                    _this.uploadPhoto();
                }
            }
        });
    };
    // ホームへ戻る
    Upload.prototype.goToHome = function () {
        this._navigator.nativeElement.resetToPage(_menu_menu__WEBPACK_IMPORTED_MODULE_5__["Menu"]);
    };
    //#endregion
    //#region 非公開処理
    // 写真情報DB登録処理
    Upload.prototype.uploadPhoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var imgElem, photoInfo, photo, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        imgElem = document.getElementById('photoPreview');
                        photoInfo = null;
                        photoInfo = new TimeTripPhotoInfo();
                        photoInfo.Year = Number(this.photoYear);
                        photoInfo.LocationID = Number(this.photoLocationID);
                        photoInfo.Comment = this.photoComment;
                        photoInfo.Bin = imgElem.src;
                        return [4 /*yield*/, this._httpService.AddPhoto(Number(this.photoYear), Number(this.photoLocationID), this.photoComment, imgElem.src)];
                    case 1:
                        photo = _a.sent();
                        this.photoID = photo.photoID;
                        console.log('AddPhoto' + this.photoID);
                        onsenui__WEBPACK_IMPORTED_MODULE_6__["notification"].alert({
                            title: 'ありがとう！',
                            message: '素敵な写真ですね！',
                            callback: function (i) {
                                onsenui__WEBPACK_IMPORTED_MODULE_6__["notification"].toast('写真が更新されたよ！', { timeout: 1500, animation: 'fall' });
                                _this.pageChange();
                            }
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [2 /*return*/];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // アップロード後の画面遷移
    Upload.prototype.pageChange = function () {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            return __generator(this, function (_a) {
                p = this._navigator.nativeElement.pages.filter(function (page) { return page.title == 'timetrip'; });
                if (p.length > 0) {
                    // TimeTripページ経由であれば、１つ前の画面（TimeTripページ）に戻る
                    this._navigator.nativeElement.popPage({ data: { LocationID: this.photoLocationID, PhotoID: this.photoID } });
                }
                else {
                    // TimeTripページを経由していなければ、新たにTimeTripページを開く
                    this._navigator.nativeElement.replacePage(_timeTrip_timeTrip__WEBPACK_IMPORTED_MODULE_4__["TimeTrip"], { data: { LocationID: this.photoLocationID, PhotoID: this.photoID } });
                }
                return [2 /*return*/];
            });
        });
    };
    // エラーチェック
    Upload.prototype.errorCheck = function () {
        var imgElem = document.getElementById('photoPreview');
        if (imgElem.src == "") {
            onsenui__WEBPACK_IMPORTED_MODULE_6__["notification"].alert({ title: 'お願い', message: 'アップロードする写真を選んでね！' });
            return false;
        }
        if (!this.photoYear) {
            onsenui__WEBPACK_IMPORTED_MODULE_6__["notification"].alert({ title: 'お願い', message: 'いつの写真か入力してね！' });
            return false;
        }
        ;
        if (isNaN(this.photoYear) == true) {
            onsenui__WEBPACK_IMPORTED_MODULE_6__["notification"].alert({ title: 'お願い', message: 'いつの写真かは数値で入力してね！' });
            return false;
        }
        return true;
    };
    Upload = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ons-page[title='upload']",
            template: __webpack_require__(/*! ./upload.html */ "./src/app/modules/children/upload/upload.html"),
            styles: [__webpack_require__(/*! ./upload.html */ "./src/app/modules/children/upload/upload.html")]
        }),
        __metadata("design:paramtypes", [ngx_onsenui__WEBPACK_IMPORTED_MODULE_3__["OnsNavigator"], src_app_services_HttpService__WEBPACK_IMPORTED_MODULE_1__["HttpService"], ngx_onsenui__WEBPACK_IMPORTED_MODULE_3__["Params"], src_app_services_ReduceImageSizeService__WEBPACK_IMPORTED_MODULE_2__["ReduceImageSizeService"]])
    ], Upload);
    return Upload;
}());

var TimeTripPhotoInfo = /** @class */ (function () {
    function TimeTripPhotoInfo() {
    }
    return TimeTripPhotoInfo;
}());


/***/ }),

/***/ "./src/app/services/DexieServiceEx.ts":
/*!********************************************!*\
  !*** ./src/app/services/DexieServiceEx.ts ***!
  \********************************************/
/*! exports provided: DexieServiceEx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DexieServiceEx", function() { return DexieServiceEx; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_dexie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngx-dexie */ "./src/app/services/ngx-dexie/index.js");
/* harmony import */ var _ngx_dexie_dexie_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-dexie/dexie.database */ "./src/app/services/ngx-dexie/dexie.database.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DexieServiceEx = /** @class */ (function (_super) {
    __extends(DexieServiceEx, _super);
    function DexieServiceEx(_db) {
        var _this = _super.call(this, _db) || this;
        _this._db = _db;
        return _this;
    }
    DexieServiceEx.prototype.where = function (table, index) {
        return this._db.table(table).where(index);
    };
    DexieServiceEx.prototype.deleteDataBase = function () {
        this._db.delete();
    };
    DexieServiceEx = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngx_dexie_dexie_database__WEBPACK_IMPORTED_MODULE_2__["DexieDatabase"]])
    ], DexieServiceEx);
    return DexieServiceEx;
}(_ngx_dexie__WEBPACK_IMPORTED_MODULE_1__["DexieService"]));



/***/ }),

/***/ "./src/app/services/GetJsonService.ts":
/*!********************************************!*\
  !*** ./src/app/services/GetJsonService.ts ***!
  \********************************************/
/*! exports provided: GetJsonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetJsonService", function() { return GetJsonService; });
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


var GetJsonService = /** @class */ (function () {
    function GetJsonService(http) {
        this.http = http;
    }
    GetJsonService.prototype.GetJson = function (fileName) {
        var url = "./assets/initData/" + fileName + ".json";
        return this.http.get(url);
    };
    GetJsonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GetJsonService);
    return GetJsonService;
}());



/***/ }),

/***/ "./src/app/services/GoogleMapsAPIWrapperEx.ts":
/*!****************************************************!*\
  !*** ./src/app/services/GoogleMapsAPIWrapperEx.ts ***!
  \****************************************************/
/*! exports provided: GoogleMapsAPIWrapperEx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapperEx", function() { return GoogleMapsAPIWrapperEx; });
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var GoogleMapsAPIWrapperEx = /** @class */ (function (_super) {
    __extends(GoogleMapsAPIWrapperEx, _super);
    function GoogleMapsAPIWrapperEx(__loader, __zone) {
        var _this = _super.call(this, __loader, __zone) || this;
        _this.__loader = __loader;
        _this.__zone = __zone;
        return _this;
    }
    GoogleMapsAPIWrapperEx.prototype.getAddress = function (lat, lng) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var sss;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('1');
                        return [4 /*yield*/, this.__loader.load().then(function () { return __awaiter(_this, void 0, void 0, function () {
                                var geocoder, latlng;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            geocoder = new google.maps.Geocoder();
                                            latlng = new google.maps.LatLng(lat, lng);
                                            console.log('2');
                                            return [4 /*yield*/, new Promise(function (resolve, reject) {
                                                    geocoder.geocode({ 'location': latlng }, function (results, status) {
                                                        console.log('3');
                                                        if (status == google.maps.GeocoderStatus.OK) {
                                                            results.forEach(function (resultsData) {
                                                                console.log(results);
                                                            });
                                                            resolve(results);
                                                        }
                                                        else {
                                                            console.log('住所を特定できなかった');
                                                            reject([]);
                                                        }
                                                    });
                                                })];
                                        case 1:
                                            sss = _a.sent();
                                            console.log('4');
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        console.log('5');
                        return [2 /*return*/, sss];
                }
            });
        });
    };
    GoogleMapsAPIWrapperEx = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_0__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], GoogleMapsAPIWrapperEx);
    return GoogleMapsAPIWrapperEx;
}(_agm_core__WEBPACK_IMPORTED_MODULE_0__["GoogleMapsAPIWrapper"]));



/***/ }),

/***/ "./src/app/services/HttpService.ts":
/*!*****************************************!*\
  !*** ./src/app/services/HttpService.ts ***!
  \*****************************************/
/*! exports provided: HttpService, StatusCd, LocationModel, PhotoModel, HttpResponseModel, GetLocationResponseModel, AddLocationResponseModel, GetPhotoResponseModel, AddPhotoResponseModel, LocalLocationInfo, LocalPhotoInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusCd", function() { return StatusCd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationModel", function() { return LocationModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoModel", function() { return PhotoModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponseModel", function() { return HttpResponseModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetLocationResponseModel", function() { return GetLocationResponseModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLocationResponseModel", function() { return AddLocationResponseModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPhotoResponseModel", function() { return GetPhotoResponseModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPhotoResponseModel", function() { return AddPhotoResponseModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalLocationInfo", function() { return LocalLocationInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalPhotoInfo", function() { return LocalPhotoInfo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _IndexedDbService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexedDbService */ "./src/app/services/IndexedDbService.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var HttpService = /** @class */ (function () {
    function HttpService(http, _indexedDbService) {
        this.http = http;
        this._indexedDbService = _indexedDbService;
        //private webApiEndPoint = "http://172.16.0.50/TimeTripPhotoGallery.Web/api";
        this.webApiEndPoint = "http://test01.nisco.ne.jp/TimeTripPhotoGallery.Web/api";
    }
    /**
     * DBに登録されている位置情報を取得して返します。
     * @param latitude 現在地の緯度。
     * @param longitude 現在地の経度。
     * @param zoom 検索範囲（GoogleMAPのZoom値）、未指定時は全件。
     */
    HttpService.prototype.GetLocation = function (latitude, longitude, zoom) {
        return __awaiter(this, void 0, void 0, function () {
            var params, res, locationList, _i, _a, l;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                            .append("Latitude", String(latitude))
                            .append("Longitude", String(longitude))
                            .append("Zoom", zoom != null ? String(zoom) : "");
                        console.log("\u7DEF\u5EA6\uFF1A" + latitude + "\u3001\u7D4C\u5EA6\uFF1A" + longitude + "\u3001\u30BA\u30FC\u30E0\uFF1A" + zoom);
                        return [4 /*yield*/, this.http.get(this.webApiEndPoint + "/GetLocation", { params: params }).toPromise()];
                    case 1:
                        res = _b.sent();
                        if (!(res.statusCd == StatusCd.success && res.locations.length > 0)) return [3 /*break*/, 3];
                        locationList = [];
                        for (_i = 0, _a = res.locations; _i < _a.length; _i++) {
                            l = _a[_i];
                            locationList.push({
                                LocationID: l.locationID,
                                Address: l.address,
                                Latitude: l.latitude,
                                Longitude: l.longitude
                            });
                        }
                        return [4 /*yield*/, this._indexedDbService.mergeMultipleLocationInfo(locationList)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/, {
                            statusCd: res.statusCd,
                            messages: res.messages,
                            locations: res.locations
                        }];
                }
            });
        });
    };
    /**
     * 新しい位置情報をDBに登録して採番した位置IDを返します。
     * @param title 入力されたタイトル。
     * @param address 位置の住所。
     * @param latitude ピンを立てた位置の緯度。
     * @param longitude ピンを立てた位置の経度
     */
    HttpService.prototype.AddLocation = function (title, address, latitude, longitude) {
        return __awaiter(this, void 0, void 0, function () {
            var params, res, location_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                            .append("Title", title)
                            .append("Address", address)
                            .append("Latitude", String(latitude))
                            .append("Longitude", String(longitude));
                        return [4 /*yield*/, this.http.put(this.webApiEndPoint + "/AddLocation", params).toPromise()];
                    case 1:
                        res = _a.sent();
                        if (!(res.statusCd == StatusCd.success)) return [3 /*break*/, 3];
                        location_1 = {
                            LocationID: res.locationID,
                            Address: address,
                            Latitude: latitude,
                            Longitude: longitude
                        };
                        return [4 /*yield*/, this._indexedDbService.addOneLocationInfo(location_1)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, {
                            statusCd: res.statusCd,
                            messages: res.messages,
                            locationID: res.locationID
                        }];
                }
            });
        });
    };
    /**
     * DBに登録されている写真情報を取得して返します。
     * @param locationID 取得したい写真の位置を特定するキー。
     * @param photoID 取得したい写真を特定するキー、未指定時はすべての写真が対象となる。
     */
    HttpService.prototype.GetPhoto = function (locationID, photoID) {
        return __awaiter(this, void 0, void 0, function () {
            var params, res, photoList, _i, _a, p;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                            .append("LocationID", String(locationID))
                            .append("PhotoID", photoID != null ? String(photoID) : "");
                        return [4 /*yield*/, this.http.get(this.webApiEndPoint + "/GetPhoto", { params: params }).toPromise()];
                    case 1:
                        res = _b.sent();
                        if (!(res.statusCd == StatusCd.success && res.photos.length > 0)) return [3 /*break*/, 3];
                        photoList = [];
                        for (_i = 0, _a = res.photos; _i < _a.length; _i++) {
                            p = _a[_i];
                            photoList.push({
                                PhotoID: p.photoID,
                                LocationID: locationID,
                                Year: p.year,
                                Comment: p.comment,
                                Bin: decodeURIComponent(p.bin)
                            });
                        }
                        return [4 /*yield*/, this._indexedDbService.mergeMultiplePhotoInfo(photoList)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/, {
                            statusCd: res.statusCd,
                            messages: res.messages,
                            photos: res.photos
                        }];
                }
            });
        });
    };
    /**
     * 新しい写真情報をDBに登録して採番した位置IDを返します。
     * @param year 入力された年。
     * @param locationID 追加する写真の位置を識別するキー。
     * @param comment 入力されたコメント。
     * @param bin 写真のバイナリデータ。
     */
    HttpService.prototype.AddPhoto = function (year, locationID, comment, bin) {
        return __awaiter(this, void 0, void 0, function () {
            var params, headers, res, photo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                            .append("Year", String(year))
                            .append("LocationID", String(locationID))
                            .append("Comment", comment)
                            .append("Bin", encodeURIComponent(bin));
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', "Bearer " + '');
                        return [4 /*yield*/, this.http.put(this.webApiEndPoint + "/AddPhoto", params, { headers: headers }).toPromise()];
                    case 1:
                        res = _a.sent();
                        if (!(res.statusCd == StatusCd.success)) return [3 /*break*/, 3];
                        photo = {
                            PhotoID: res.photoID,
                            LocationID: locationID,
                            Year: year,
                            Comment: comment,
                            Bin: bin
                        };
                        return [4 /*yield*/, this._indexedDbService.addOnePhotoInfo(photo)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, {
                            statusCd: res.statusCd,
                            messages: res.messages,
                            photoID: res.photoID
                        }];
                }
            });
        });
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _IndexedDbService__WEBPACK_IMPORTED_MODULE_2__["IndexedDbService"]])
    ], HttpService);
    return HttpService;
}());

//#region 型定義情報
/**
 * TimeTripPhotoGalleryのサーバ側の処理の結果を表します。
 */
var StatusCd;
(function (StatusCd) {
    /**
     * 処理が正常に終了したことを表します。
     */
    StatusCd["success"] = "0";
    /**
     * 要求パラメータ等の検証を行った結果、エラーがあったことを表します。
     */
    StatusCd["validationError"] = "101";
})(StatusCd || (StatusCd = {}));
/**
 * TimeTripPhotoGalleryで使用する形式に加工した位置情報。
 */
var LocationModel = /** @class */ (function () {
    function LocationModel() {
    }
    return LocationModel;
}());

/**
 * TimeTripPhotoGalleryで使用する形式に加工した写真情報。
 */
var PhotoModel = /** @class */ (function () {
    function PhotoModel() {
    }
    return PhotoModel;
}());

//#endregion
//#region 応答パラメータ
/**
 * 応答パラメータモデル。
 */
var HttpResponseModel = /** @class */ (function () {
    function HttpResponseModel() {
    }
    return HttpResponseModel;
}());

/**
 * GetLocationの応答パラメータモデル。
 */
var GetLocationResponseModel = /** @class */ (function (_super) {
    __extends(GetLocationResponseModel, _super);
    function GetLocationResponseModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GetLocationResponseModel;
}(HttpResponseModel));

/**
 * AddLocationの応答パラメータモデル。
 */
var AddLocationResponseModel = /** @class */ (function (_super) {
    __extends(AddLocationResponseModel, _super);
    function AddLocationResponseModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AddLocationResponseModel;
}(HttpResponseModel));

/**
 * GetPhotoの応答パラメータモデル。
 */
var GetPhotoResponseModel = /** @class */ (function (_super) {
    __extends(GetPhotoResponseModel, _super);
    function GetPhotoResponseModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GetPhotoResponseModel;
}(HttpResponseModel));

/**
 * AddPhotoの応答パラメータモデル。
 */
var AddPhotoResponseModel = /** @class */ (function (_super) {
    __extends(AddPhotoResponseModel, _super);
    function AddPhotoResponseModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AddPhotoResponseModel;
}(HttpResponseModel));

//#endregion
//#region localDBの型定義情報
var LocalLocationInfo = /** @class */ (function () {
    function LocalLocationInfo() {
    }
    return LocalLocationInfo;
}());

var LocalPhotoInfo = /** @class */ (function () {
    function LocalPhotoInfo() {
    }
    return LocalPhotoInfo;
}());

//#endregion


/***/ }),

/***/ "./src/app/services/IndexedDbService.ts":
/*!**********************************************!*\
  !*** ./src/app/services/IndexedDbService.ts ***!
  \**********************************************/
/*! exports provided: IndexedDbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedDbService", function() { return IndexedDbService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _DexieServiceEx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DexieServiceEx */ "./src/app/services/DexieServiceEx.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var IndexedDbService = /** @class */ (function () {
    // https://www.npmjs.com/package/ngx-dexie
    function IndexedDbService(dexieService) {
        this.dexieService = dexieService;
        this.flg = '1';
        this.CheakInitData = 'CheakInitData';
        this.MstLocationInfo = 'MstLocationInfo';
        this.TrnPhotoInfo = 'TrnPhotoInfo';
    }
    IndexedDbService.prototype.cheakInitData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = null;
                        return [4 /*yield*/, this.dexieService.getByPrimaryKey(this.CheakInitData, this.flg, function (item) {
                                data = item;
                            })];
                    case 1:
                        _a.sent();
                        if (data) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    IndexedDbService.prototype.cheakedInitData = function () {
        this.dexieService.addOne(this.CheakInitData, { "ID": this.flg });
    };
    IndexedDbService.prototype.addMultipleLocationInfo = function (locationInfoObjects) {
        this.dexieService.addMultiple(this.MstLocationInfo, locationInfoObjects);
    };
    IndexedDbService.prototype.mergeMultipleLocationInfo = function (locationInfoObjects) {
        this.dexieService.addOrUpdateMultiple(this.MstLocationInfo, locationInfoObjects);
    };
    IndexedDbService.prototype.addOneLocationInfo = function (LocationInfoObject) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dexieService.addOne(this.MstLocationInfo, LocationInfoObject)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    IndexedDbService.prototype.addOnePhotoInfo = function (photoInfoObject) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dexieService.addOne(this.TrnPhotoInfo, photoInfoObject)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    IndexedDbService.prototype.addMultiplePhotoInfo = function (photoInfoObjects) {
        this.dexieService.addMultiple(this.TrnPhotoInfo, photoInfoObjects);
    };
    IndexedDbService.prototype.mergeMultiplePhotoInfo = function (photoInfoObjects) {
        this.dexieService.addOrUpdateMultiple(this.TrnPhotoInfo, photoInfoObjects);
    };
    IndexedDbService.prototype.getTrnPhotoInfoByKey = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = null;
                        return [4 /*yield*/, this.dexieService.getByPrimaryKey(this.TrnPhotoInfo, key, function (item) {
                                data = item;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    IndexedDbService.prototype.countLocationInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dexieService.count(this.MstLocationInfo)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // 位置情報マスタ全件取得
    IndexedDbService.prototype.getMstLocationInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dexieService.toArray(this.MstLocationInfo)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // 登録されている画像を全取得する
    IndexedDbService.prototype.getTrnPhotoInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dexieService.toArray(this.TrnPhotoInfo)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // 指定した座標付近のマスタを取得する
    IndexedDbService.prototype.getMstLocationByRange = function (latitude, longitude) {
        return __awaiter(this, void 0, void 0, function () {
            var half, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        half = 0.015;
                        return [4 /*yield*/, this.dexieService
                                .where(this.MstLocationInfo, 'Latitude').between(latitude - half, latitude + half)
                                .and(function (data) {
                                return longitude - half <= data.Longitude && data.Longitude <= longitude + half;
                            })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.toArray()];
                }
            });
        });
    };
    IndexedDbService.prototype.deleteDatabase = function () {
        this.dexieService.deleteDataBase();
    };
    IndexedDbService.prototype.deleteAllMstLocationInfo = function () {
        this.dexieService.clearAll(this.MstLocationInfo);
    };
    IndexedDbService.prototype.deleteAllTrnPhotoInfo = function () {
        this.dexieService.clearAll(this.TrnPhotoInfo);
    };
    IndexedDbService.prototype.deleteMstLocationInfoMutiple = function (keys) {
        this.dexieService.deleteMultiple(this.MstLocationInfo, keys);
    };
    IndexedDbService.prototype.deleteTrnPhotoInfoMutiple = function (keys) {
        this.dexieService.deleteMultiple(this.TrnPhotoInfo, keys);
    };
    // 画像をマスタ登録する
    IndexedDbService.prototype.createMstImg = function (locationInfoObjects) {
        this.dexieService.addOne(this.MstLocationInfo, locationInfoObjects);
    };
    IndexedDbService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_DexieServiceEx__WEBPACK_IMPORTED_MODULE_1__["DexieServiceEx"]])
    ], IndexedDbService);
    return IndexedDbService;
}());



/***/ }),

/***/ "./src/app/services/ReduceImageSizeService.ts":
/*!****************************************************!*\
  !*** ./src/app/services/ReduceImageSizeService.ts ***!
  \****************************************************/
/*! exports provided: ReduceImageSizeService, FileInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReduceImageSizeService", function() { return ReduceImageSizeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileInfo", function() { return FileInfo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * 画像ファイルサイズ削減サービス
 */
var ReduceImageSizeService = /** @class */ (function () {
    function ReduceImageSizeService() {
    }
    /**
     * 画像ファイルサイズ削減
     * @param target 対象
     */
    ReduceImageSizeService.prototype.reduceImageSize = function (target, size) {
        var info = this.ConvertFileInfo(target);
        var comp = this;
        var p1 = new Promise(function (resolve, reject) {
            // 画像ファイル以外は処理中止
            if (!target.type || target.type.trim() == '' || !target.type.match(/^image\/.*$/)) {
                resolve(info);
            }
            try {
                var image = new Image();
                var reader = new FileReader();
                reader.onloadend = function () {
                    image.onload = function () {
                        // canvasの要素を生成
                        var canvas = document.createElement("canvas");
                        // 2次元コンテキストを取得
                        var ctx = canvas.getContext('2d');
                        // 縮小する割合を指定
                        var scale = (size / target.size) * Math.sqrt(2);
                        var imageWidth = Math.round(image.width * scale);
                        var imageHeight = Math.round(image.height * scale);
                        canvas.width = imageWidth;
                        canvas.height = imageHeight;
                        // 画像imageのサイズを縮小する
                        // drawImage(画像, x座標, y座標, 幅, 高さ)で画像サイズを変更
                        ctx.clearRect(0, 0, imageWidth, imageHeight);
                        ctx.drawImage(image, 0, 0, imageWidth, imageHeight);
                        var base64 = canvas.toDataURL(target.type);
                        var tmp = base64.split(',');
                        if (!tmp[1]) {
                            resolve(info);
                        }
                        // base64データの文字列をデコード
                        var data = atob(tmp[1]);
                        // tmp[0]の文字列（data:image/png;base64）からコンテンツタイプ（image/png）部分を取得
                        var mime = tmp[0].split(':')[1].split(';')[0];
                        //  1文字ごとにUTF-16コードを表す 0から65535 の整数を取得
                        var buf = new Uint8Array(data.length);
                        for (var i = 0; i < data.length; i++) {
                            buf[i] = data.charCodeAt(i);
                        }
                        info.fileDataUrl = base64;
                        info.fileSize = buf.byteLength;
                        // IE 非対応
                        //var ret: File = new File([buf], target.name, { type: target.type });
                        resolve(info);
                    };
                    image.src = reader.result;
                };
                reader.readAsDataURL(target);
            }
            catch (e) {
                reject(info);
            }
        }).then(
        // Promiseが成功したとき
        function (value) {
            return value;
        }).catch(
        // Promiseが失敗したとき
        function (reason) {
            return info;
        });
        return p1;
    };
    ReduceImageSizeService.prototype.ConvertFileInfo = function (target) {
        var ret = new FileInfo();
        var reader = new FileReader();
        var comp = this;
        reader.onloadend = function () {
            ret.fileDataUrl = reader.result;
            ret.fileName = target.name;
            ret.fileSize = target.size;
            ret.fileType = target.type;
            return ret;
        };
        reader.readAsDataURL(target);
        return ret;
    };
    ReduceImageSizeService.prototype.readDataUrl = function (blob) {
        var fr = new FileReader();
        var pr = new Promise(function (resolve, reject) {
            fr.onload = function (eve) {
                resolve(fr.result);
            };
            fr.onerror = function (eve) {
                reject(fr.error);
            };
        });
        fr.readAsDataURL(blob);
        return pr;
    };
    ReduceImageSizeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ReduceImageSizeService);
    return ReduceImageSizeService;
}());

var FileInfo = /** @class */ (function () {
    function FileInfo() {
    }
    return FileInfo;
}());



/***/ }),

/***/ "./src/app/services/ngx-dexie/dexie.database.ts":
/*!******************************************************!*\
  !*** ./src/app/services/ngx-dexie/dexie.database.ts ***!
  \******************************************************/
/*! exports provided: DexieDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DexieDatabase", function() { return DexieDatabase; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dexie */ "./node_modules/dexie/dist/dexie.es.js");
/* harmony import */ var _dexie_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dexie.module */ "./src/app/services/ngx-dexie/dexie.module.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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



var DexieDatabase = /** @class */ (function (_super) {
    __extends(DexieDatabase, _super);
    function DexieDatabase(config) {
        var _this = this;
        var databaseName = config.databaseName;
        var schema = config.schema;
        _this = _super.call(this, databaseName) || this;
        _this.version(1).stores(schema);
        return _this;
    }
    DexieDatabase = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_dexie_module__WEBPACK_IMPORTED_MODULE_2__["DEXIE_CONFIG_TOKEN"])),
        __metadata("design:paramtypes", [Object])
    ], DexieDatabase);
    return DexieDatabase;
}(dexie__WEBPACK_IMPORTED_MODULE_1__["default"]));



/***/ }),

/***/ "./src/app/services/ngx-dexie/dexie.module.ts":
/*!****************************************************!*\
  !*** ./src/app/services/ngx-dexie/dexie.module.ts ***!
  \****************************************************/
/*! exports provided: DexieFactory, DEXIE_CONFIG_TOKEN, DexieModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DexieFactory", function() { return DexieFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEXIE_CONFIG_TOKEN", function() { return DEXIE_CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DexieModule", function() { return DexieModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dexie_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dexie.database */ "./src/app/services/ngx-dexie/dexie.database.ts");
/* harmony import */ var _dexie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dexie.service */ "./src/app/services/ngx-dexie/dexie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



function DexieFactory(config) {
    return new _dexie_database__WEBPACK_IMPORTED_MODULE_1__["DexieDatabase"](config);
}
var DEXIE_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('__DEXIE_CONFIG__');
var DexieModule = /** @class */ (function () {
    function DexieModule() {
    }
    DexieModule_1 = DexieModule;
    DexieModule.forRoot = function (config) {
        return {
            ngModule: DexieModule_1,
            providers: [
                { provide: DEXIE_CONFIG_TOKEN, useValue: config },
                {
                    provide: _dexie_database__WEBPACK_IMPORTED_MODULE_1__["DexieDatabase"],
                    useFactory: DexieFactory,
                    deps: [DEXIE_CONFIG_TOKEN]
                },
                _dexie_service__WEBPACK_IMPORTED_MODULE_2__["DexieService"]
            ]
        };
    };
    DexieModule = DexieModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({})
    ], DexieModule);
    return DexieModule;
    var DexieModule_1;
}());



/***/ }),

/***/ "./src/app/services/ngx-dexie/dexie.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/ngx-dexie/dexie.service.ts ***!
  \*****************************************************/
/*! exports provided: DexieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DexieService", function() { return DexieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dexie_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dexie.database */ "./src/app/services/ngx-dexie/dexie.database.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DexieService = /** @class */ (function () {
    function DexieService(db) {
        this.db = db;
    }
    DexieService.prototype.addOne = function (table, object) {
        return this.db.table(table).add(object);
    };
    DexieService.prototype.addMultiple = function (table, objects) {
        return this.db.table(table).bulkAdd(objects);
    };
    DexieService.prototype.count = function (table) {
        return this.db.table(table).count();
    };
    DexieService.prototype.addOrUpdateOne = function (table, object, key) {
        if (key) {
            return this.db.table(table).put(object, key);
        }
        else {
            return this.db.table(table).put(object);
        }
    };
    DexieService.prototype.addOrUpdateMultiple = function (table, objects, keys) {
        if (keys) {
            return this.db.table(table).bulkPut(objects, keys);
        }
        else {
            return this.db.table(table).bulkPut(objects);
        }
    };
    DexieService.prototype.deleteOne = function (table, primaryKey) {
        return this.db.table(table).delete(primaryKey);
    };
    DexieService.prototype.deleteMultiple = function (table, primaryKeys) {
        return this.db.table(table).bulkDelete(primaryKeys);
    };
    DexieService.prototype.clearAll = function (table) {
        return this.db.table(table).clear();
    };
    DexieService.prototype.operateOnEach = function (table, callback) {
        return this.db.table(table).each(callback);
    };
    DexieService.prototype.filter = function (table, filterFunction) {
        return this.db.table(table).filter(filterFunction);
    };
    DexieService.prototype.getByPrimaryKey = function (table, primaryKey, callback) {
        if (callback) {
            return this.db.table(table).get(primaryKey, callback);
        }
        else {
            return this.db.table(table).get(primaryKey);
        }
    };
    DexieService.prototype.getByKeyToValueMap = function (table, keyValueMap, callback) {
        if (callback) {
            return this.db.table(table).get(keyValueMap, callback);
        }
        else {
            return this.db.table(table).get(keyValueMap);
        }
    };
    DexieService.prototype.getFirstNItemsOfTable = function (table, num) {
        return this.db.table(table).limit(num);
    };
    DexieService.prototype.orderBy = function (table, index) {
        return this.db.table(table).orderBy(index);
    };
    DexieService.prototype.offset = function (table, ignoreUpto) {
        return this.db.table(table).offset(ignoreUpto);
    };
    DexieService.prototype.reverse = function (table) {
        return this.db.table(table).reverse();
    };
    DexieService.prototype.toArray = function (table, callback) {
        if (callback) {
            return this.db.table(table).toArray(callback);
        }
        else {
            return this.db.table(table).toArray();
        }
    };
    DexieService.prototype.toCollection = function (table) {
        return this.db.table(table).toCollection();
    };
    DexieService.prototype.update = function (table, key, changes) {
        return this.db.table(table).update(key, changes);
    };
    DexieService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_dexie_database__WEBPACK_IMPORTED_MODULE_1__["DexieDatabase"]])
    ], DexieService);
    return DexieService;
}());



/***/ }),

/***/ "./src/app/services/ngx-dexie/index.js":
/*!*********************************************!*\
  !*** ./src/app/services/ngx-dexie/index.js ***!
  \*********************************************/
/*! exports provided: DexieModule, DexieDatabase, DexieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dexie_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dexie.module */ "./src/app/services/ngx-dexie/dexie.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DexieModule", function() { return _dexie_module__WEBPACK_IMPORTED_MODULE_0__["DexieModule"]; });

/* harmony import */ var _dexie_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dexie.database */ "./src/app/services/ngx-dexie/dexie.database.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DexieDatabase", function() { return _dexie_database__WEBPACK_IMPORTED_MODULE_1__["DexieDatabase"]; });

/* harmony import */ var _dexie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dexie.service */ "./src/app/services/ngx-dexie/dexie.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DexieService", function() { return _dexie_service__WEBPACK_IMPORTED_MODULE_2__["DexieService"]; });




//# sourceMappingURL=index.js.map

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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\work\monaca\ttpg\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map