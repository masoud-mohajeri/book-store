(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title slot=\"end\">کتاب فروشی 🏪</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <section class=\"slises-class\">\n    <ion-slides pager=\"true\">\n      <ion-slide>\n        <section>\n          <img src=\"../../assets/imgs/angular.png\" alt=\"\" />\n        </section>\n        <div>\n          <h2>سلام</h2>\n          <p>\n            این فروشگاه یک نمونه کار پروژه انگولار و آیونیک ، نوشته شده توسط\n            مسعود مهاجری است\n            <br />\n            لطفا ورق بزنید 👉\n          </p>\n        </div>\n      </ion-slide>\n\n      <ion-slide>\n        <section>\n          <img src=\"../../assets/imgs/shop.png\" alt=\"\" />\n        </section>\n        <div>\n          <h2>حالا چه امکاناتی داره ؟</h2>\n          <p>\n            اول ناشر ها ثبت نام میکنن و بعد از تایید ادمین میتونن کتاب هاشون رو\n            ثبت کنن برای فروش . اگر مشکلی هم بود میتونن مشخصات کتاب ها رو ادیت\n            کنن و همچنین در پنل ناشر سفارش های اون نشار نشون داده میشه تا ناشر\n            اونا رو بفرسته و کد پیگیری پست رو ثبت کنه تا مشتری بتونه از .ضعیت\n            مرسوله اش با خبر باشه\n          </p>\n        </div>\n      </ion-slide>\n\n      <ion-slide>\n        <section>\n          <img src=\"../../assets/imgs/books.png\" alt=\"\" />\n        </section>\n        <div>\n          <h2>متشری</h2>\n          <p>\n            مشتری هم میتونه از بین کتاب ها یی که ناشر ها ثبت کردن و یا مجموعه\n            هایی که ادمین ثبت کرده خرید کنه و وضعیت خرید هاش رو توی پنلش ببینه\n          </p>\n        </div>\n      </ion-slide>\n\n      <ion-slide>\n        <section>\n          <img src=\"../../assets/imgs/admin.png\" alt=\"\" />\n        </section>\n        <div>\n          <h2>ادمین</h2>\n          <p>\n            ادمین هم به همه ی فعالیت های سایت نظارت داره و وضعیت همه ی سفارش ها\n            رو میبینه\n          </p>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <section>\n          <img src=\"../../assets/imgs/snap.png\" alt=\"\" />\n        </section>\n        <div>\n          <h2>امتحانش کن !</h2>\n          <p>\n            ثبت نام کن و سایت رو امتحان کن ! خوشحال میشم نظرتونو در باره سایت\n            بدونم\n          </p>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <section>\n          <img src=\"../../assets/imgs/github.png\" alt=\"\" />\n        </section>\n        <div>\n          <h2>به گیت هابم سر بزنید</h2>\n          <ion-button color=\"dark\" (click)=\"goToGit()\"> GitHub </ion-button>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </section>\n</ion-content>\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]],
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".slises-class {\n  display: flex;\n  justify-content: center;\n  padding-top: 0;\n}\n\nion-slide {\n  display: inline;\n  width: 310px;\n  height: auto;\n  margin: auto;\n  text-align: center;\n}\n\nion-slide section {\n  width: 600px;\n  margin: auto;\n  padding: 25px;\n  padding-top: 0;\n}\n\n@media (max-width: 800px) {\n  ion-slide section {\n    width: 350px;\n  }\n}\n\nion-slide div {\n  width: 600px;\n  margin: auto;\n  padding: 25px;\n}\n\n@media (max-width: 800px) {\n  ion-slide div {\n    width: 350px;\n  }\n}\n\nion-slide img {\n  margin: auto;\n  width: 280px;\n  margin: auto;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBREU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBR0o7O0FBRkk7RUFMRjtJQU1JLFlBQUE7RUFLSjtBQUNGOztBQUhFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBS0o7O0FBSkk7RUFKRjtJQUtJLFlBQUE7RUFPSjtBQUNGOztBQUxFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQU9KIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaXNlcy1jbGFzcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG5pb24tc2xpZGUge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICB3aWR0aDogMzEwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBkaXYge1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/auth.service */ "IYfF");





let HomePage = class HomePage {
    //
    constructor(authService) {
        this.authService = authService;
        this.user = null;
        //
        this.slideOpts = {
            slidesPerView: 3,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            on: {
                beforeInit() {
                    const swiper = this;
                    swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
                    swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
                    swiper.params.watchSlidesProgress = true;
                    swiper.originalParams.watchSlidesProgress = true;
                },
                setTranslate() {
                    const swiper = this;
                    const { width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid, $, } = swiper;
                    const params = swiper.params.coverflowEffect;
                    const isHorizontal = swiper.isHorizontal();
                    const transform$$1 = swiper.translate;
                    const center = isHorizontal
                        ? -transform$$1 + swiperWidth / 2
                        : -transform$$1 + swiperHeight / 2;
                    const rotate = isHorizontal ? params.rotate : -params.rotate;
                    const translate = params.depth;
                    // Each slide offset from center
                    for (let i = 0, length = slides.length; i < length; i += 1) {
                        const $slideEl = slides.eq(i);
                        const slideSize = slidesSizesGrid[i];
                        const slideOffset = $slideEl[0].swiperSlideOffset;
                        const offsetMultiplier = ((center - slideOffset - slideSize / 2) / slideSize) *
                            params.modifier;
                        let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                        let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
                        // var rotateZ = 0
                        let translateZ = -translate * Math.abs(offsetMultiplier);
                        let translateY = isHorizontal ? 0 : params.stretch * offsetMultiplier;
                        let translateX = isHorizontal ? params.stretch * offsetMultiplier : 0;
                        // Fix for ultra small values
                        if (Math.abs(translateX) < 0.001)
                            translateX = 0;
                        if (Math.abs(translateY) < 0.001)
                            translateY = 0;
                        if (Math.abs(translateZ) < 0.001)
                            translateZ = 0;
                        if (Math.abs(rotateY) < 0.001)
                            rotateY = 0;
                        if (Math.abs(rotateX) < 0.001)
                            rotateX = 0;
                        const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                        $slideEl.transform(slideTransform);
                        $slideEl[0].style.zIndex =
                            -Math.abs(Math.round(offsetMultiplier)) + 1;
                        if (params.slideShadows) {
                            // Set shadows
                            let $shadowBeforeEl = isHorizontal
                                ? $slideEl.find('.swiper-slide-shadow-left')
                                : $slideEl.find('.swiper-slide-shadow-top');
                            let $shadowAfterEl = isHorizontal
                                ? $slideEl.find('.swiper-slide-shadow-right')
                                : $slideEl.find('.swiper-slide-shadow-bottom');
                            if ($shadowBeforeEl.length === 0) {
                                $shadowBeforeEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
                                $slideEl.append($shadowBeforeEl);
                            }
                            if ($shadowAfterEl.length === 0) {
                                $shadowAfterEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
                                $slideEl.append($shadowAfterEl);
                            }
                            if ($shadowBeforeEl.length)
                                $shadowBeforeEl[0].style.opacity =
                                    offsetMultiplier > 0 ? offsetMultiplier : 0;
                            if ($shadowAfterEl.length)
                                $shadowAfterEl[0].style.opacity =
                                    -offsetMultiplier > 0 ? -offsetMultiplier : 0;
                        }
                    }
                    // Set correct perspective for IE10
                    if (swiper.support.pointerEvents ||
                        swiper.support.prefixedPointerEvents) {
                        const ws = $wrapperEl[0].style;
                        ws.perspectiveOrigin = `${center}px 50%`;
                    }
                },
                setTransition(duration) {
                    const swiper = this;
                    swiper.slides
                        .transition(duration)
                        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                        .transition(duration);
                },
            },
        };
    }
    ngOnInit() {
        this.authService.userInfo.subscribe((userSub) => {
            this.user = userSub;
        });
    }
    goToGit() {
        window.location.href = 'https://github.com/mohajerimasoud';
    }
};
HomePage.ctorParameters = () => [
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map