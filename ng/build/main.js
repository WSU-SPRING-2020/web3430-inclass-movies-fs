(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\n  <div class=\"navbar-brand\">\n    <a class=\"navbar-item\" routerLink=\"/movies\">\n      <img src=\"images/logo.svg\" alt=\"Favorite movies\" width=\"112\" height=\"28\">\n    </a>\n\n    <a role=\"button\" class=\"navbar-burger\" aria-label=\"menu\" aria-expanded=\"false\">\n      <span aria-hidden=\"true\"></span>\n      <span aria-hidden=\"true\"></span>\n      <span aria-hidden=\"true\"></span>\n    </a>\n  </div>\n  <div class=\"navbar-end\">\n    <a *ngIf=\"signedIn\" (click)=\"signout()\" class=\"navbar-item\">Sign out</a>\n    <a *ngIf=\"notSignedIn\" routerLink=\"/register\" class=\"navbar-item\">Register</a>\n    <a *ngIf=\"notSignedIn\" routerLink=\"/signin\" class=\"navbar-item\">Sign in</a>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-detail/movie-detail.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-detail/movie-detail.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" *ngIf=\"movie$ | async as m\">\n  <div class=\"columns\">\n    <div class=\"column is-one-quarter\">\n      <img src=\"{{ m.poster }}\" alt=\"movie poster\">\n    </div>\n    <div class=\"column is-three-quarters\">\n      <p class=\"title\">{{ m.title }}</p>\n      <p class=\"subtitle\">{{ m.releaseDate | date: 'mediumDate' }}</p>\n      <p>{{ m.plot }}</p>\n      <div class=\"buttons\">\n        <button routerLink=\"/movies/{{ m.id }}/edit\" class=\"button is-primary\">Edit</button>\n        <button class=\"button is-danger\" (click)=\"toggleConfirmDelete()\">Delete</button>\n      </div>\n\n      <div class=\"modal\" [ngClass]=\"{'is-active': isToConfirmDelete}\">\n        <div class=\"modal-background\"></div>\n        <div class=\"modal-card\">\n          <header class=\"modal-card-head\">\n            <p class=\"modal-card-title\">Delete confirmation</p>\n            <button class=\"delete\" aria-label=\"close\" (click)=\"toggleConfirmDelete()\"></button>\n          </header>\n          <section class=\"modal-card-body\">\n            Are you sure you want to delete {{ m.title }}?\n          </section>\n          <footer class=\"modal-card-foot\">\n            <button class=\"button is-danger\" (click)=\"deleteMovie(m)\">Delete</button>\n            <button class=\"button\" (click)=\"toggleConfirmDelete()\">Cancel</button>\n          </footer>\n        </div>\n      </div>\n\n\n\n\n    </div>\n  </div>\n\n  <movie-review-el [movie]=\"m\"></movie-review-el>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-form/movie-form.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-form/movie-form.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div *ngIf=\"isEdit; then editTitle else addTitle\"></div>\n  <ng-template #editTitle>\n    <p class=\"title\">Edit a movie</p>\n  </ng-template>\n  <ng-template #addTitle>\n    <p class=\"title\">Add a new movie</p>\n  </ng-template>\n  \n  <form #f=\"ngForm\" [formGroup]=\"movieForm\" (ngSubmit)=\"submitForm(f)\">\n    <div class=\"field is-horizontal\">\n      <div class=\"field-body\">\n        <div class=\"field\">\n          <label for=\"imdbID\" class=\"label\">IMDB ID</label>\n          <div class=\"control\">\n            <input type=\"hidden\" formControlName=\"id\">\n            <input type=\"text\" class=\"input\" formControlName=\"imdbID\">\n          </div>\n          <p class=\"help is-danger\" *ngIf=\"f.submitted && imdbID.invalid\">\n            IMDB ID is required\n          </p>\n        </div>\n        <div class=\"field\">\n          <label for=\"year\" class=\"label\">Year</label>\n          <div class=\"control\">\n            <input type=\"number\" class=\"input\" formControlName=\"year\">\n          </div>\n          <p class=\"help is-danger\" *ngIf=\"f.submitted && year.invalid\">\n            Year is required\n          </p>\n        </div>\n\n        <div class=\"field\">\n          <label for=\"genre\" class=\"label\">Genre</label>\n          <div class=\"control\">\n            <input type=\"text\" class=\"input\" formControlName=\"genre\">\n          </div>\n          <p class=\"help is-danger\" *ngIf=\"f.submitted && genre.invalid\">\n            Genre is required\n          </p>\n        </div>\n\n        <div class=\"field\">\n          <label for=\"rated\" class=\"label\">Rated</label>\n          <div class=\"control\">\n            <input type=\"text\" class=\"input\" formControlName=\"rated\">\n          </div>\n          <p class=\"help is-danger\" *ngIf=\"f.submitted && rated.invalid\">\n            Rated is required.\n          </p>\n        </div>\n\n        <div class=\"field\">\n          <label for=\"rating\" class=\"label\">Rating</label>\n          <div class=\"control\">\n            <input type=\"text\" class=\"input\" formControlName=\"rating\">\n          </div>\n          <p class=\"help is-danger\" *ngIf=\"f.submitted && rating.invalid\">\n            Rating must be between 0.0 and 10.0.\n          </p>\n        </div>\n\n        <div class=\"field\">\n          <label for=\"votes\" class=\"label\">Votes</label>\n          <div class=\"control\">\n            <input type=\"text\" class=\"input\" formControlName=\"votes\">\n          </div>\n          <p class=\"help is-danger\" *ngIf=\"f.submitted && votes.invalid\">\n            Votes must be positive.\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"field\">\n      <label for=\"title\" class=\"label\">Title</label>\n      <div class=\"control\">\n        <input type=\"text\" class=\"input\" formControlName=\"title\">\n      </div>\n      <p class=\"help is-danger\" *ngIf=\"f.submitted && title.invalid\">\n        Title is required\n      </p>\n    </div>\n\n    <div class=\"field\">\n      <label for=\"poster\" class=\"label\">Poster</label>\n      <div class=\"control\">\n        <input type=\"url\" class=\"input\" formControlName=\"poster\">\n      </div>\n      <p class=\"help is-danger\" *ngIf=\"f.submitted && poster.invalid\">\n        Poster is required and must be a valid image url.\n      </p>\n    </div>\n\n    <div class=\"field\">\n      <label for=\"releaseDate\" class=\"label\">Release Date</label>\n      <div class=\"control\">\n        <input class=\"input\" type=\"date\" formControlName=\"releaseDate\">\n      </div>\n      <p class=\"help is-danger\" *ngIf=\"f.submitted && releaseDate.invalid\">\n        Release date is required\n      </p>\n    </div>\n\n    <div class=\"field\">\n      <label for=\"plot\" class=\"label\">Plot</label>\n      <div class=\"control\">\n        <textarea class=\"textarea\" formControlName=\"plot\"></textarea>\n      </div>\n      <p class=\"help is-danger\" *ngIf=\"f.submitted && plot.invalid\">\n        Plot is required\n      </p>\n    </div>\n\n    <div class=\"field\">\n      <div class=\"control\">\n        <button class=\"button is-primary\">Submit</button>\n      </div>\n    </div>\n  </form>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-list-item/movie-list-item.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-list-item/movie-list-item.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-image\">\n      <figure class=\"image\">\n          <img src=\"{{ movie.poster }}\" alt=\"{{ movie.title }}\">\n      </figure>\n  </div>\n  <div class=\"card-content\">\n      <div class=\"content\">\n          <p class=\"title\">{{ movie.title }}</p>\n          <p class=\"subtitle\">{{ movie.releaseDate | date: 'mediumDate' }}</p>\n          <p>{{ movie.plot }}</p>\n\n          <input type=\"text\" [(ngModel)]=\"movie.title\">\n          <button class=\"button is-primary\" routerLink=\"/movies/{{ movie.id }}\" (click)=\"select.emit(movie)\">Select</button>\n\n      </div>\n  </div>\n\n  <footer class=\"card-footer\">\n    <span class=\"card-footer-item\">{{ views }} views</span>\n    <span class=\"card-footer-item\">{{ likes }} likes</span>\n  </footer>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-list/movie-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-list/movie-list.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"buttons is-pulled-right\">\n        <button (click)=\"sortBy('title')\" class=\"button\">Sort by title</button>\n        <button (click)=\"sortBy('id')\" class=\"button\">Sort by id</button>\n        <button routerLink=\"/movies/new\" class=\"button is-primary\">Add new movie</button>\n    </div>\n    <div class=\"columns is-multiline\">\n        <movie-list-item-el (select)=\"logSelectionAndLikes($event)\" [movie]=\"m\" class=\"column is-one-third\" *ngFor=\"let m of sortMovies(movies$ | async)\"></movie-list-item-el>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-review/movie-review.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-review/movie-review.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<hr>\n<p class=\"title\">Movie reviews</p>\n<article class=\"media\" *ngFor=\"let r of movie.reviews\">\n  <figure class=\"media-left\">\n    <p class=\"image\">\n      <img src=\"http://via.placeholder.com/64.png\" alt=\"\">\n    </p>\n  </figure>\n  <div class=\"media-content\">\n    <div class=\"content\">\n      <p>\n        {{ r.comment }} <br>\n        <small>Posted at {{ r.postedAt | date: 'MMMM, dd yyyy' }}</small>\n      </p>\n    </div>\n  </div>\n</article>\n<article class=\"media\">\n  <figure class=\"media-left\">\n    <p class=\"image\">\n      <img src=\"http://via.placeholder.com/64.png\" alt=\"\">\n    </p>\n  </figure>\n  <div class=\"media-content\">\n    <form #f=\"ngForm\" (ngSubmit)=\"submitForm(f)\">\n      <div class=\"field\">\n        <textarea class=\"textarea\" required name=\"comment\" id=\"comment\" \n                  #c=\"ngModel\" [(ngModel)]=\"comment\"></textarea>\n\n        <p class=\"help is-danger\" *ngIf=\"f.submitted && c.invalid\">\n          Comment is required.\n        </p>\n      </div>\n      <div class=\"field\">\n        <p class=\"control\">\n          <button class=\"button is-primary\">Post review</button>\n          <button class=\"button\" type=\"reset\">Cancel</button>\n        </p>\n      </div>\n    </form>\n  </div>\n</article>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-register/user-register.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-register/user-register.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <p class=\"title\">User registration</p>\n  <p>If you have a account please \n    <a routerLink=\"/signin\" class=\"button is-success\">signin</a>\n  </p>\n  <form #f=\"ngForm\" (ngSubmit)=\"submitForm(f)\" [formGroup]=\"userRegister\">\n    <div class=\"field\">\n      <label for=\"firstName\" class=\"label\">First name</label>\n      <div class=\"control\">\n        <input type=\"text\" class=\"input\" formControlName=\"firstName\">\n      </div>\n      <p class=\"help is-danger\" *ngIf=\"f.submitted && firstName.invalid\">\n        First name is required\n      </p>\n    </div>\n    <div class=\"field\">\n      <label for=\"lastN ame\" class=\"label\">Last name</label>\n      <div class=\"control\">\n        <input type=\"text\" class=\"input\" formControlName=\"lastName\">\n      </div>\n      <p class=\"help is-danger\" *ngIf=\"f.submitted && lastName.invalid\">\n        Last name is required\n      </p>\n    </div>\n    <div class=\"field\">\n      <label for=\"email\" class=\"label\">Email</label>\n      <div class=\"control\">\n        <input type=\"text\" class=\"input\" formControlName=\"email\">\n      </div>\n      <p class=\"help is-danger\" *ngIf=\"f.submitted && email.invalid\">\n        Email is required\n      </p>\n    </div>\n    <div class=\"field\">\n      <label for=\"username\" class=\"label\">Username</label>\n      <div class=\"control\">\n        <input type=\"text\" class=\"input\" formControlName=\"username\">\n      </div>\n      <p class=\"help is-danger\" *ngIf=\"f.submitted && username.invalid\">\n        Username is required\n      </p>\n    </div>\n    <div class=\"field\">\n      <label for=\"password\" class=\"label\">Password</label>\n      <div class=\"control\">\n        <input type=\"password\" class=\"input\" formControlName=\"password\">\n      </div>\n      <p class=\"help is-danger\" *ngIf=\"f.submitted && password.invalid\">\n        Password is required\n      </p>\n    </div>\n\n    <div class=\"field\">\n      <div class=\"control\">\n        <button class=\"button is-primary\">Submit</button>\n        <button class=\"button\" routerLink=\"/movies\">Cancel</button>\n      </div>\n    </div>\n  </form>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-signin/user-signin.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-signin/user-signin.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <p class=\"title\">User sign in</p>\n  <p>If you don't have a account please \n    <a routerLink=\"/register\" class=\"button is-success\">Register</a>\n  </p>\n  <form #f=\"ngForm\" (ngSubmit)=\"submitForm(f)\">\n    <div class=\"field\">\n      <label for=\"username\" class=\"label\">Username</label>\n      <div class=\"control\">\n        <input type=\"text\" class=\"input\" name=\"username\" id=\"username\" \n          required #username=\"ngModel\" [(ngModel)]=\"user.username\">\n      </div>\n      <p class=\"help is-danger\" *ngIf=\"f.submitted && username.invalid\">\n        Username is required\n      </p>\n    </div>\n    <div class=\"field\">\n      <label for=\"password\" class=\"label\">Password</label>\n      <div class=\"control\">\n        <input type=\"password\" class=\"input\" name=\"password\" id=\"password\" \n          required #password=\"ngModel\" [(ngModel)]=\"user.password\">\n      </div>\n      <p class=\"help is-danger\" *ngIf=\"f.submitted && password.invalid\">\n        Password is required\n      </p>\n    </div>\n\n    <div class=\"field\">\n      <div class=\"control\">\n        <button class=\"button is-primary\">Submit</button>\n        <button class=\"button\" routerLink=\"/movies\">Cancel</button>\n      </div>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");




let AppComponent = class AppComponent {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
        this.title = 'TOP 10 Movies';
    }
    get signedIn() {
        return _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"].isAuthenticated();
    }
    get notSignedIn() {
        return !this.signedIn;
    }
    signout() {
        this.userService.signout();
        this.router.navigate(["/movies"]);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/movie-list/movie-list.component */ "./src/app/components/movie-list/movie-list.component.ts");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var _components_movie_list_item_movie_list_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/movie-list-item/movie-list-item.component */ "./src/app/components/movie-list-item/movie-list-item.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _components_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/movie-detail/movie-detail.component */ "./src/app/components/movie-detail/movie-detail.component.ts");
/* harmony import */ var _components_movie_form_movie_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/movie-form/movie-form.component */ "./src/app/components/movie-form/movie-form.component.ts");
/* harmony import */ var _components_movie_review_movie_review_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/movie-review/movie-review.component */ "./src/app/components/movie-review/movie-review.component.ts");
/* harmony import */ var _components_user_register_user_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/user-register/user-register.component */ "./src/app/components/user-register/user-register.component.ts");
/* harmony import */ var _components_user_signin_user_signin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/user-signin/user-signin.component */ "./src/app/components/user-signin/user-signin.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _components_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_9__["MovieListComponent"],
            _components_movie_list_item_movie_list_item_component__WEBPACK_IMPORTED_MODULE_11__["MovieListItemComponent"],
            _components_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_13__["MovieDetailComponent"],
            _components_movie_form_movie_form_component__WEBPACK_IMPORTED_MODULE_14__["MovieFormComponent"],
            _components_movie_review_movie_review_component__WEBPACK_IMPORTED_MODULE_15__["MovieReviewComponent"],
            _components_user_register_user_register_component__WEBPACK_IMPORTED_MODULE_16__["UserRegisterComponent"],
            _components_user_signin_user_signin_component__WEBPACK_IMPORTED_MODULE_17__["UserSigninComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_12__["routes"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ],
        providers: [_services_movie_service__WEBPACK_IMPORTED_MODULE_10__["MovieService"], _services_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_19__["CookieService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/movie-detail/movie-detail.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/movie-detail/movie-detail.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWUtZGV0YWlsL21vdmllLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/movie-detail/movie-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/movie-detail/movie-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let MovieDetailComponent = class MovieDetailComponent {
    constructor(movieService, route, toastr, router) {
        this.movieService = movieService;
        this.route = route;
        this.toastr = toastr;
        this.router = router;
        this.isToConfirmDelete = false;
    }
    ngOnInit() {
        this.movie$ = this.movieService.getMovie(this.route.snapshot.params['id']);
    }
    toggleConfirmDelete() {
        this.isToConfirmDelete = !this.isToConfirmDelete;
    }
    deleteMovie(movie) {
        this.movieService.deleteMovie(movie).subscribe(data => {
            this.toastr.success("Movie delete succesfully");
            this.router.navigate(['/movies']);
        });
    }
};
MovieDetailComponent.ctorParameters = () => [
    { type: src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
MovieDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movie-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-detail/movie-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie-detail.component.scss */ "./src/app/components/movie-detail/movie-detail.component.scss")).default]
    })
], MovieDetailComponent);



/***/ }),

/***/ "./src/app/components/movie-form/movie-form.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/movie-form/movie-form.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWUtZm9ybS9tb3ZpZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/movie-form/movie-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/movie-form/movie-form.component.ts ***!
  \***************************************************************/
/*! exports provided: MovieFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieFormComponent", function() { return MovieFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _validators_rage_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../validators/rage.validator */ "./src/app/validators/rage.validator.ts");
/* harmony import */ var bulma_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bulma-calendar */ "./node_modules/bulma-calendar/dist/js/bulma-calendar.js");
/* harmony import */ var bulma_calendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bulma_calendar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var date_fns_parse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns/parse */ "./node_modules/date-fns/parse/index.js");
/* harmony import */ var date_fns_parse__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(date_fns_parse__WEBPACK_IMPORTED_MODULE_8__);









let MovieFormComponent = class MovieFormComponent {
    constructor(route, movieService, fb, router, toastr) {
        this.route = route;
        this.movieService = movieService;
        this.fb = fb;
        this.router = router;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.movieForm = this.fb.group({
            id: [null],
            title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            year: [2020, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1900), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(2020)]],
            releaseDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            rated: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            genre: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            plot: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            poster: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/https?:\/\/.+(svg|jpg|png|gif)/)]],
            rating: [0.0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^1?\d(\.\d\d?)?$/), Object(_validators_rage_validator__WEBPACK_IMPORTED_MODULE_6__["rangeValidator"])(0, 10)]],
            votes: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^\d+$/)],
            imdbID: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.isEdit = !!this.route.snapshot.params['id'];
        if (this.isEdit) {
            this.movieService.getMovie(this.route.snapshot.params['id']).subscribe(m => this.movieForm.patchValue(m));
        }
        let releaseDatePicker = bulma_calendar__WEBPACK_IMPORTED_MODULE_7___default.a.attach('[type="date"]', {
            dateFormat: "MM/DD/YYYY",
            startDate: this.movieForm.get('releaseDate').value
        })[0];
        releaseDatePicker.on("select", date => {
            this.movieForm.patchValue({ releaseDate: date_fns_parse__WEBPACK_IMPORTED_MODULE_8__(date.data.value()) });
        });
    }
    submitForm(f) {
        console.log("submitted");
        if (f.valid) {
            console.log("submitted 1");
            const movie = Object.assign({}, this.movieForm.value);
            if (this.isEdit) {
                this.movieService.updateMovie(movie).subscribe(data => {
                    this.toastr.success("Movie updated successfully");
                    this.router.navigate([`/movies/${movie.id}`]);
                });
            }
            else {
                console.log("submitted 2");
                this.movieService.addMovie(movie).subscribe(data => {
                    this.toastr.success("Movie added successfully");
                    this.router.navigate(['/movies']);
                });
            }
        }
        else {
            console.log(f.errors);
            console.log(this.imdbID.errors);
            console.log(this.title.errors);
            console.log(this.year.errors);
            console.log(this.poster.errors);
            console.log(this.plot.errors);
            console.log(this.rated.errors);
            console.log(this.rating.errors);
            console.log(this.genre.errors);
            console.log(this.votes.errors);
        }
    }
    get title() { return this.movieForm.get('title'); }
    get year() { return this.movieForm.get('year'); }
    get releaseDate() { return this.movieForm.get('releaseDate'); }
    get rated() { return this.movieForm.get('rated'); }
    get genre() { return this.movieForm.get('genre'); }
    get plot() { return this.movieForm.get('plot'); }
    get poster() { return this.movieForm.get('poster'); }
    get rating() { return this.movieForm.get('rating'); }
    get votes() { return this.movieForm.get('votes'); }
    get imdbID() { return this.movieForm.get('imdbID'); }
};
MovieFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
MovieFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movie-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-form/movie-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie-form.component.scss */ "./src/app/components/movie-form/movie-form.component.scss")).default]
    })
], MovieFormComponent);



/***/ }),

/***/ "./src/app/components/movie-list-item/movie-list-item.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/movie-list-item/movie-list-item.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWUtbGlzdC1pdGVtL21vdmllLWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/movie-list-item/movie-list-item.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/movie-list-item/movie-list-item.component.ts ***!
  \*************************************************************************/
/*! exports provided: MovieListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListItemComponent", function() { return MovieListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movie.service */ "./src/app/services/movie.service.ts");



let MovieListItemComponent = class MovieListItemComponent {
    constructor(movieService) {
        this.movieService = movieService;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    get views() {
        return this.movieService.getStatsFor(this.movie.id);
    }
    get likes() {
        return this.movieService.getStatsFor(this.movie.id, true);
    }
};
MovieListItemComponent.ctorParameters = () => [
    { type: src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MovieListItemComponent.prototype, "movie", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MovieListItemComponent.prototype, "select", void 0);
MovieListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'movie-list-item-el',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-list-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-list-item/movie-list-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie-list-item.component.scss */ "./src/app/components/movie-list-item/movie-list-item.component.scss")).default]
    })
], MovieListItemComponent);



/***/ }),

/***/ "./src/app/components/movie-list/movie-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/movie-list/movie-list.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWUtbGlzdC9tb3ZpZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/movie-list/movie-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/movie-list/movie-list.component.ts ***!
  \***************************************************************/
/*! exports provided: MovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListComponent", function() { return MovieListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movie.service */ "./src/app/services/movie.service.ts");



let MovieListComponent = class MovieListComponent {
    constructor(movieService) {
        this.movieService = movieService;
        this.sortField = 'id';
    }
    ngOnInit() {
        this.movies$ = this.movieService.getMovies();
    }
    sortBy(field) {
        this.sortField = field;
    }
    sortMovies(movies) {
        switch (this.sortField) {
            case 'id':
                return movies.sort((a, b) => { return a.id - b.id; });
            case 'title':
                return movies.sort(function (a, b) {
                    return a.title < b.title ? -1 : (a.title > b.title ? 1 : 0);
                });
        }
    }
    logSelectionAndLikes(movie, like = false) {
        this.movieService.logStats(movie.id, like);
    }
};
MovieListComponent.ctorParameters = () => [
    { type: src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] }
];
MovieListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'movie-list-el',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-list/movie-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie-list.component.scss */ "./src/app/components/movie-list/movie-list.component.scss")).default]
    })
], MovieListComponent);



/***/ }),

/***/ "./src/app/components/movie-review/movie-review.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/movie-review/movie-review.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWUtcmV2aWV3L21vdmllLXJldmlldy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/movie-review/movie-review.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/movie-review/movie-review.component.ts ***!
  \*******************************************************************/
/*! exports provided: MovieReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieReviewComponent", function() { return MovieReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MovieReviewComponent = class MovieReviewComponent {
    constructor() {
        this.comment = '';
    }
    ngOnInit() {
    }
    submitForm(f) {
        if (f.valid) {
            this.movie.reviews.push({
                comment: this.comment, postedAt: new Date()
            });
            f.resetForm();
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MovieReviewComponent.prototype, "movie", void 0);
MovieReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'movie-review-el',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-review.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-review/movie-review.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie-review.component.scss */ "./src/app/components/movie-review/movie-review.component.scss")).default]
    })
], MovieReviewComponent);



/***/ }),

/***/ "./src/app/components/user-register/user-register.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/user-register/user-register.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1yZWdpc3Rlci91c2VyLXJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/user-register/user-register.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-register/user-register.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterComponent", function() { return UserRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");






let UserRegisterComponent = class UserRegisterComponent {
    constructor(fb, toastr, router, userService) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.userService = userService;
    }
    ngOnInit() {
        this.userRegister = this.fb.group({
            _id: [null],
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/.+@.+\..+/)]],
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    submitForm(f) {
        if (f.valid) {
            const user = Object.assign({}, this.userRegister.value);
            this.userService.register(user).subscribe(res => {
                this.toastr.success("Successfully registered");
                this.router.navigate(["/movies"]);
            }, err => {
                this.toastr.error("Unable to register user");
            });
        }
    }
    get firstName() { return this.userRegister.get('firstName'); }
    get lastName() { return this.userRegister.get('lastName'); }
    get email() { return this.userRegister.get('email'); }
    get username() { return this.userRegister.get('username'); }
    get password() { return this.userRegister.get('password'); }
};
UserRegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
UserRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-register/user-register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-register.component.scss */ "./src/app/components/user-register/user-register.component.scss")).default]
    })
], UserRegisterComponent);



/***/ }),

/***/ "./src/app/components/user-signin/user-signin.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-signin/user-signin.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1zaWduaW4vdXNlci1zaWduaW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/user-signin/user-signin.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/user-signin/user-signin.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserSigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSigninComponent", function() { return UserSigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let UserSigninComponent = class UserSigninComponent {
    constructor(userService, router, toastr) {
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    ngOnInit() {
    }
    submitForm(f) {
        if (f.valid) {
            this.userService.signin(this.user).subscribe(res => {
                this.toastr.success("Successfully signed in");
                this.router.navigate(["/movies"]);
            }, err => {
                this.toastr.error("Unable to sign in");
            });
        }
    }
};
UserSigninComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
UserSigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-signin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-signin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-signin/user-signin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-signin.component.scss */ "./src/app/components/user-signin/user-signin.component.scss")).default]
    })
], UserSigninComponent);



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
}


/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/movie-list/movie-list.component */ "./src/app/components/movie-list/movie-list.component.ts");
/* harmony import */ var _components_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/movie-detail/movie-detail.component */ "./src/app/components/movie-detail/movie-detail.component.ts");
/* harmony import */ var _components_movie_form_movie_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/movie-form/movie-form.component */ "./src/app/components/movie-form/movie-form.component.ts");
/* harmony import */ var _components_user_register_user_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user-register/user-register.component */ "./src/app/components/user-register/user-register.component.ts");
/* harmony import */ var _components_user_signin_user_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user-signin/user-signin.component */ "./src/app/components/user-signin/user-signin.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");







const routes = [
    { path: 'movies', component: _components_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_1__["MovieListComponent"] },
    { path: 'movies/new', component: _components_movie_form_movie_form_component__WEBPACK_IMPORTED_MODULE_3__["MovieFormComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'movies/:id', component: _components_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_2__["MovieDetailComponent"] },
    { path: 'movies/:id/edit', component: _components_movie_form_movie_form_component__WEBPACK_IMPORTED_MODULE_3__["MovieFormComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'register', component: _components_user_register_user_register_component__WEBPACK_IMPORTED_MODULE_4__["UserRegisterComponent"] },
    { path: 'signin', component: _components_user_signin_user_signin_component__WEBPACK_IMPORTED_MODULE_5__["UserSigninComponent"] },
    { path: "", redirectTo: "movies", pathMatch: "full" }
];


/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        if (_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"].isAuthenticated()) {
            return true;
        }
        this.router.navigate(["/signin"]);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/services/movie.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/movie.service.ts ***!
  \*******************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpHeaders = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let MovieService = class MovieService {
    constructor(http) {
        this.http = http;
        this.moviesUrl = "/api/movies";
        this.stats = {};
    }
    getStatsFor(id, like = false) {
        if (this.stats[id]) {
            return like ? this.stats[id]['likes'] : this.stats[id]['views'];
        }
        else {
            return 0;
        }
    }
    logStats(id, like = false) {
        if (this.stats[id] === undefined) {
            this.stats[id] = { views: like ? 0 : 1, likes: like ? 1 : 0 };
        }
        else {
            if (like) {
                this.stats[id]['likes']++;
            }
            else {
                this.stats[id]['views']++;
            }
        }
    }
    getMovie(id) {
        let url = `${this.moviesUrl}/${id}`;
        return this.http.get(url);
    }
    getMovies() {
        return this.http.get(this.moviesUrl);
    }
    addMovie(movie) {
        return this.http.post(this.moviesUrl, movie, httpHeaders);
    }
    updateMovie(movie) {
        let url = `${this.moviesUrl}/${movie.id}`;
        return this.http.put(url, movie, httpHeaders);
    }
    deleteMovie(movie) {
        let url = `${this.moviesUrl}/${movie.id}`;
        return this.http.delete(url, httpHeaders);
    }
};
MovieService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MovieService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





const httpHeaders = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let UserService = class UserService {
    constructor(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
    }
    register(user) {
        return this.http.post("/api/users/register", user, httpHeaders);
    }
    signin(user) {
        let res = this.http.post("/api/users/signin", user, httpHeaders);
        return res.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            if (data["token"]) {
                localStorage.setItem("token", data["token"]);
                return true;
            }
            else {
                return false;
            }
        }));
    }
    signout() {
        this.cookieService.delete("token");
        localStorage.removeItem("token");
    }
    static isAuthenticated() {
        return localStorage.getItem("token") !== null;
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], UserService);



/***/ }),

/***/ "./src/app/validators/rage.validator.ts":
/*!**********************************************!*\
  !*** ./src/app/validators/rage.validator.ts ***!
  \**********************************************/
/*! exports provided: rangeValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeValidator", function() { return rangeValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function rangeValidator(min, max) {
    return (control) => {
        let value = parseFloat(control.value);
        return value === NaN || value < min || value > max ?
            { invalidRange: { valid: false, value: value } } : null;
    };
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aalgahmi/Documents/classes/web3430/vidoes/web3430-inclass-movies-fs/ng/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map