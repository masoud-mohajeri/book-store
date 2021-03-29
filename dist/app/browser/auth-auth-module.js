(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "6epW":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageRoutingModule", function() { return AuthPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.page */ "kV0F");




const routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_3__["AuthPage"]
    }
];
let AuthPageRoutingModule = class AuthPageRoutingModule {
};
AuthPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AuthPageRoutingModule);



/***/ }),

/***/ "Buvn":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title slot=\"end\">ورود </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"html\">\n    <div id=\"body\" style=\"background-image: url('../../assets/tree.jpg')\">\n      <div class=\"container\">\n        <div class=\"modal\">\n          <ion-segment\n            (ionChange)=\"segmentChanged($event)\"\n            value=\"login\"\n            color=\"tertiary\"\n            mode=\"md\"\n          >\n            <ion-segment-button value=\"login\">\n              <ion-label>ورود</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"signup\">\n              <ion-label>ثبت نام</ion-label>\n            </ion-segment-button>\n          </ion-segment>\n          <section *ngIf=\"formStatus==='login'\">\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\">\n              <ion-item>\n                <ion-label position=\"fixed\" style=\"direction: rtl\" slot=\"end\">\n                  ایمیل :</ion-label\n                >\n                <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"fixed\" slot=\"end\" style=\"direction: rtl\"\n                  >رمز عبور :</ion-label\n                >\n                <ion-input\n                  type=\"password\"\n                  formControlName=\"password\"\n                ></ion-input>\n              </ion-item>\n              <ion-button\n                [disabled]=\"loginForm.invalid\"\n                type=\"submit\"\n                expand=\"block\"\n                fill=\"clear\"\n                color=\"tertiary\"\n              >\n                ورود\n              </ion-button>\n            </form>\n          </section>\n          <section *ngIf=\"formStatus==='signup'\">\n            <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSignup()\">\n              <ion-item>\n                <ion-label position=\"fixed\" style=\"direction: rtl\" slot=\"end\"\n                  >نام کامل :\n                </ion-label>\n                <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"fixed\" style=\"direction: rtl\" slot=\"end\"\n                  >ایمیل :</ion-label\n                >\n                <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"fixed\" style=\"direction: rtl\" slot=\"end\">\n                  رمز عبور :</ion-label\n                >\n                <ion-input\n                  type=\"password\"\n                  formControlName=\"password1\"\n                ></ion-input>\n              </ion-item>\n              <!-- <ion-item> -->\n              <ion-item>\n                <ion-label position=\"fixed\" style=\"direction: rtl\" slot=\"end\">\n                  تکرار رمز عبور :\n                </ion-label>\n                <ion-input #pr type=\"password\" formControlName=\"password2\">\n                </ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"fixed\" style=\"direction: rtl\" slot=\"end\">\n                  آدرس\n                </ion-label>\n                <ion-input type=\"text\" formControlName=\"address\"> </ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"fixed\" style=\"direction: rtl\" slot=\"end\">\n                  وضعیت\n                </ion-label>\n                <ion-select formControlName=\"status\" mode=\"ios\">\n                  <ion-select-option value=\"CUSTOMER\">مشتری</ion-select-option>\n                  <ion-select-option value=\"PUBLISHER\">ناشر</ion-select-option>\n                  <ion-select-option value=\"ADMIN\">ادمین</ion-select-option>\n                </ion-select>\n              </ion-item>\n              <ion-label\n                style=\"direction: rtl\"\n                *ngIf=\"signupForm.errors?.notSame && signupForm.controls.password2.dirty\"\n              >\n                <ion-text color=\"danger\"> رمز ها باید مشابه باشند* </ion-text>\n              </ion-label>\n              <ion-button\n                type=\"submit\"\n                expand=\"block\"\n                fill=\"clear\"\n                shape=\"round\"\n                [disabled]=\"signupForm.invalid\"\n              >\n                ثبت نام\n              </ion-button>\n            </form>\n          </section>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ "6epW");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.page */ "kV0F");







let AuthPageModule = class AuthPageModule {
};
AuthPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_6__["AuthPage"]],
    })
], AuthPageModule);



/***/ }),

/***/ "jMPm":
/*!*************************************!*\
  !*** ./src/app/auth/auth.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal {\n  background-color: rgba(255, 255, 255, 0.95);\n  border-radius: 5px;\n  color: #333;\n  font-family: sans-serif;\n  line-height: 1.5;\n  width: 40%;\n  padding: 0 2rem 1rem 2rem;\n}\n@media (max-width: 1300px) {\n  .modal {\n    width: 60%;\n  }\n}\n@media (max-width: 800px) {\n  .modal {\n    width: 90%;\n  }\n}\n@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {\n  .modal {\n    -webkit-backdrop-filter: blur(10px);\n    backdrop-filter: blur(10px);\n    background-color: rgba(255, 255, 255, 0.5);\n  }\n\n  .warning {\n    display: none;\n  }\n}\n#html,\n#body {\n  height: 100%;\n  width: 100%;\n}\n#body {\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.container {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n}\nion-item {\n  background-color: rgba(0, 0, 0, 0);\n  --ion-background-color: rgba(0,0,0,0);\n}\nion-label {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGF1dGgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFBRTtFQVJGO0lBU0ksVUFBQTtFQUdGO0FBQ0Y7QUFGRTtFQVhGO0lBWUksVUFBQTtFQUtGO0FBQ0Y7QUFGQTtFQUNFO0lBQ0UsbUNBQUE7SUFDQSwyQkFBQTtJQUNBLDBDQUFBO0VBS0Y7O0VBSEE7SUFDRSxhQUFBO0VBTUY7QUFDRjtBQUhBOztFQUVFLFlBQUE7RUFDQSxXQUFBO0FBS0Y7QUFIQTtFQUNFLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQU1GO0FBSEE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBTUY7QUFIQTtFQUNFLGtDQUFBO0VBQ0EscUNBQUE7QUFNRjtBQUpBO0VBQ0UsU0FBQTtBQU9GIiwiZmlsZSI6ImF1dGgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgcGFkZGluZzogMCAycmVtIDFyZW0gMnJlbTtcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG59XHJcblxyXG5Ac3VwcG9ydHMgKC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBub25lKSBvciAoYmFja2Ryb3AtZmlsdGVyOiBub25lKSB7XHJcbiAgLm1vZGFsIHtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gIH1cclxuICAud2FybmluZyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuI2h0bWwsXHJcbiNib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuI2JvZHkge1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pb24taXRlbSAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcclxufVxyXG5pb24tbGFiZWx7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "kV0F":
/*!***********************************!*\
  !*** ./src/app/auth/auth.page.ts ***!
  \***********************************/
/*! exports provided: AuthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPage", function() { return AuthPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./auth.page.html */ "Buvn");
/* harmony import */ var _auth_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.page.scss */ "jMPm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/auth.service */ "IYfF");







let AuthPage = class AuthPage {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.formStatus = 'login';
    }
    ngOnInit() {
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            password1: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6),
            ]),
            password2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        }, { validators: this.checkPasswords });
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
    }
    segmentChanged(value) {
        this.formStatus = value.detail.value;
    }
    checkPasswords(group) {
        const password = group.controls.password1.value;
        const confirmPassword = group.controls.password2.value;
        return password === confirmPassword ? null : { notSame: true };
    }
    onSignup() {
        this.authService.signUp(this.signupForm.value);
    }
    onLogin() {
        this.authService
            .login(this.loginForm.value.email, this.loginForm.value.password)
            .then(() => {
            console.log('here');
            this.loginForm.reset();
            this.router.navigate(['']);
        });
    }
};
AuthPage.ctorParameters = () => [
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AuthPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-auth',
        template: _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_auth_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AuthPage);



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map