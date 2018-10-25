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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-md-8{\r\n  margin-left: 17%;\r\n  margin-top: 5%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <img width=\"\" alt=\"Angular Logo\" src=\"https://seguros-falabella.com.co/blog/wp-content/uploads/2017/08/Arte_9_Ventajas_Seguro_En_L%C3%ADnea.jpg\">\n</div>\n<div class=\"row\">\n  <div class=\"col-md-8\">\n    <app-menu></app-menu>\n    <app-compra></app-compra>\n  </div>\n</div>\n\n"

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
        this.title = 'seguros';
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _compra_compra_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compra/compra.component */ "./src/app/compra/compra.component.ts");
/* harmony import */ var _services_compra_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/compra.service */ "./src/app/services/compra.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// services



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _compra_compra_component__WEBPACK_IMPORTED_MODULE_4__["CompraComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [
                _services_compra_service__WEBPACK_IMPORTED_MODULE_5__["CompraService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/compra/compra.component.html":
/*!**********************************************!*\
  !*** ./src/app/compra/compra.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <form (submit)=\"addCompras($event)\">\n      <div class=\"\">\n        <input type=\"text\" name=\"nombre\" [(ngModel)]=\"nombre\" placeholder=\"Nombre\" class=\"form-control\">\n        <input type=\"text\" name=\"cedula\" [(ngModel)]=\"cedula\" placeholder=\"Cedula\" class=\"form-control\">\n        <div class=\"sub\">\n          <p>Seleccione el tipo de poliza a comprar</p>\n          <input type=\"checkbox\"  name=\"soat\" [(ngModel)]=\"soat\" checked > Poliza SOAT <p></p>\n          <input type=\"checkbox\" name=\"riesgo\" [(ngModel)]=\"riesgo\"  checked >Pólizas todo riesgo<p></p>\n        </div>\n        <span class=\"input-group-addon\">\n          <button type=\"submit\" class=\"btn btn-primary\">Guardar</button>\n        </span>\n      </div>\n    </form>\n  </div>\n</div>\n\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>seleccion</th>\n      <th>Nombre</th>\n      <th>Cedula</th>\n      <th>Tipo de poliza</th>\n      <th>Valor de poliza</th>\n        <th>eliminar</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let c1 of compra\" >\n      <td>\n        <input type=\"checkbox\" [checked]=\"c1.isDone\" (click)=\"updatecompra(c1)\" >\n      </td>\n      <td> {{c1.nombre}} </td>\n      <td>\n        {{c1.cedula}}\n      </td>\n      <td>\n        {{c1.ver}}\n      </td>\n      <td>\n        {{c1.valorSoap}}\n      </td>\n      <td>\n        <button class=\"btn btn-danger\" (click)=\"deleteCompra(c1._id)\">\n          <i class=\"fa fa-trash\"></i>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n  <span class=\"input-group-addon\">\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"end()\">Confirmar Compra</button>\n    </span>\n</table>\n"

/***/ }),

/***/ "./src/app/compra/compra.component.scss":
/*!**********************************************!*\
  !*** ./src/app/compra/compra.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-body .form-control {\n  margin-top: 2%; }\n\n.card-body .sub {\n  margin-top: 2%; }\n\n.card-body .sub .span {\n    margin-left: 2%; }\n\n.table .btn-danger {\n  border-color: green; }\n\n.table .btn-danger:active {\n    background-color: green; }\n\n.btn {\n  background-color: green;\n  border: green; }\n"

/***/ }),

/***/ "./src/app/compra/compra.component.ts":
/*!********************************************!*\
  !*** ./src/app/compra/compra.component.ts ***!
  \********************************************/
/*! exports provided: CompraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompraComponent", function() { return CompraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_compra_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/compra.service */ "./src/app/services/compra.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompraComponent = /** @class */ (function () {
    function CompraComponent(Compras) {
        var _this = this;
        this.Compras = Compras;
        this.ver = 'Poliza SOAT';
        this.valorSoap = '300.000 COP';
        this.Compras.getCompra().subscribe(function (res) {
            _this.compra = res;
        });
    }
    CompraComponent.prototype.ngOnInit = function () {
    };
    CompraComponent.prototype.addCompras = function (event) {
        var _this = this;
        event.preventDefault();
        var newCompra = {
            nombre: this.nombre,
            isDone: false,
            cedula: this.cedula,
            ver: this.ver,
            valorSoap: this.valorSoap,
            soat: this.soat,
            riesgo: this.riesgo,
        };
        if (newCompra.soat === true) {
            this.ver = 'Poliza SOAT';
            this.valorSoap = '300.000 COP';
        }
        if (newCompra.riesgo === true) {
            this.ver = 'Las pólizas todo riesgo de vehiculos';
            this.valorSoap = '900.000 COP';
        }
        this.Compras.addCompra(newCompra)
            .subscribe(function (task) {
            _this.compra.push(task);
            _this.nombre = '';
            _this.cedula = '';
            console.log(task);
            console.log(_this.ver);
        });
    };
    CompraComponent.prototype.deleteCompra = function (id) {
        var resp = confirm('esta seguro de eliminar el dato?');
        if (resp === true) {
            var comprar_1 = this.compra;
            this.Compras.deleteCompra(id).subscribe(function (data) {
                if (data.n === 1) {
                    for (var i = 0; i < comprar_1.length; i++) {
                        if (comprar_1[i]._id === id) {
                            comprar_1.splice(i, 1);
                        }
                    }
                }
            });
        }
        return;
    };
    CompraComponent.prototype.updatecompra = function (c1) {
        var newcompra = {
            _id: c1._id,
            nombre: c1.nombre,
            isDone: !c1.isDone,
            soat: this.soat,
            riesgos: this.riesgo,
        };
        this.Compras.updateCompra(newcompra).subscribe(function (respu) {
            c1.isDone = !c1.isDone;
        });
    };
    CompraComponent.prototype.end = function () {
        alert('compra finalizada');
    };
    CompraComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-compra',
            template: __webpack_require__(/*! ./compra.component.html */ "./src/app/compra/compra.component.html"),
            styles: [__webpack_require__(/*! ./compra.component.scss */ "./src/app/compra/compra.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_compra_service__WEBPACK_IMPORTED_MODULE_1__["CompraService"]])
    ], CompraComponent);
    return CompraComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">Falabella  - </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n      <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link active\" href=\"#\">Compre su poliza todo riesgo <span class=\"sr-only\">(current)</span></a>\n      </div>\n    </div>\n  </nav>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
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

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/services/compra.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/compra.service.ts ***!
  \********************************************/
/*! exports provided: CompraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompraService", function() { return CompraService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompraService = /** @class */ (function () {
    function CompraService(http) {
        this.http = http;
        this.ver = 'http://localhost:3000';
    }
    CompraService.prototype.getCompra = function () {
        return this.http.get(this.ver + "/task")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    CompraService.prototype.addCompra = function (newCompra) {
        return this.http.post(this.ver + "/task", newCompra)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    CompraService.prototype.updateCompra = function (newCompra) {
        return this.http.put(this.ver + "/task/" + newCompra._id, newCompra)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    CompraService.prototype.deleteCompra = function (id) {
        return this.http.delete(this.ver + "/task/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    CompraService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CompraService);
    return CompraService;
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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\programas\fallabella\mongo\src\seguros\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map