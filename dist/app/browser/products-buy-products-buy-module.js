(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-buy-products-buy-module"],{

/***/ "9Kfl":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products-buy/book-page/book-page.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"products-buy\"></ion-back-button>\n    </ion-buttons>\n    <section *ngIf=\"pageSpinner\">\n      <ion-spinner name=\"dots\"></ion-spinner>\n    </section>\n    <ion-title slot=\"end\" *ngIf=\"!pageSpinner\"> {{ book.name }}</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <section *ngIf=\"pageSpinner\">\n    <ion-spinner name=\"dots\"></ion-spinner>\n  </section>\n  <section *ngIf=\"!pageSpinner\">\n    <div id=\"container\" style=\"background-image: url('{{ book.imageUrl }}')\">\n      <div id=\"parrent\">\n        <div class=\"modal\">\n          <div style=\"display: inline-block\">\n            <img src=\"{{ book.imageUrl }}\" class=\"rainbow-box\" />\n            <ion-button\n              (click)=\"addToCard()\"\n              expand=\"block\"\n              fill=\"solid\"\n              color=\"success\"\n            >\n              اضافه به سبد خرید\n            </ion-button>\n          </div>\n\n          <!-- <div id=\"list-container\"> -->\n          <ion-list\n            style=\"display: inline-block\"\n            mode=\"ios\"\n            lines=\"none\"\n            inset=\"true\"\n          >\n            <ion-list-header>\n              <ion-label>\n                {{ book.name }}\n              </ion-label>\n            </ion-list-header>\n            <ion-item>\n              <ion-label> نویسنده : {{ book.author }} </ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"book.translator\">\n              <ion-label> مترجم : {{ book.translator }} </ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label> ژانر : {{ book.genere }} </ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label> ناشر : {{ book.publisher }} </ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label> سال انتشار : {{ book.pubYear }} </ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label> شابک : {{ book.isbn }} </ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label>\n                قیمت : {{ book.price }} <small> ريال</small>\n              </ion-label>\n            </ion-item>\n            <ion-item> خلاصه : {{ book.gist }} </ion-item>\n          </ion-list>\n        </div>\n      </div>\n    </div>\n    <!-- </div> -->\n  </section>\n</ion-content>\n");

/***/ }),

/***/ "DvDh":
/*!*********************************************************************!*\
  !*** ./src/app/products-buy/package-card/package-card.component.ts ***!
  \*********************************************************************/
/*! exports provided: PackageCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageCardComponent", function() { return PackageCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_package_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./package-card.component.html */ "vHrH");
/* harmony import */ var _package_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./package-card.component.scss */ "IjHY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_shcard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/shcard.service */ "7S2x");






let PackageCardComponent = class PackageCardComponent {
    constructor(router, route, scService) {
        this.router = router;
        this.route = route;
        this.scService = scService;
    }
    ngOnInit() { }
    goToPackage() {
        console.log(this.package.id);
        this.router.navigate(['package', this.package.id], {
            relativeTo: this.route,
        });
    }
    addToCard() {
        for (let bookId of this.package.bookIdArray) {
            this.scService.addToCard(bookId.toString());
        }
    }
};
PackageCardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_services_shcard_service__WEBPACK_IMPORTED_MODULE_5__["ShCardService"] }
];
PackageCardComponent.propDecorators = {
    package: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PackageCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-package-card',
        template: _raw_loader_package_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_package_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PackageCardComponent);



/***/ }),

/***/ "IjHY":
/*!***********************************************************************!*\
  !*** ./src/app/products-buy/package-card/package-card.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  max-width: 230px;\n  height: 450px;\n  direction: rtl;\n  overflow: show;\n  font-size: 64%;\n  display: inline-block;\n}\nion-card ion-img {\n  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);\n  height: 300px;\n  object-fit: cover;\n  margin: auto;\n}\nion-card ion-button {\n  font-size: 75%;\n}\nion-card ion-card-title {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwYWNrYWdlLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUNGO0FBQUU7RUFDRSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFFSjtBQUNFO0VBQ0UsY0FBQTtBQUNKO0FBQ0U7RUFDRSxlQUFBO0FBQ0oiLCJmaWxlIjoicGFja2FnZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xyXG4gIG1heC13aWR0aDogMjMwcHg7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICBkaXJlY3Rpb246IHJ0bDtcclxuICBvdmVyZmxvdzogc2hvdztcclxuICBmb250LXNpemU6IDY0JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaW9uLWltZyB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogNzUlO1xyXG4gIH1cclxuICBpb24tY2FyZC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIFxyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "K+z1":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products-buy/products-buy.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title slot=\"end\">محصولات 🏬</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <section id=\"slides\">\n      <ion-slides mode=\"ios\" pager=\"ios\" [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let package of packagesObs|async;let i =index\">\n          <app-package-card [package]=\"package\"></app-package-card>\n        </ion-slide>\n      </ion-slides>\n    </section>\n    <section class=\"book-container ion-justify-content-center\">\n      <app-book-card\n        *ngFor=\"let book of books | paginate: { itemsPerPage: 24, currentPage: paginationP }\"\n        [book]=\"book\"\n      ></app-book-card>\n    </section>\n    <section style=\"display: flex; justify-content: center\">\n      <pagination-controls\n        (pageChange)=\"paginationP = $event\"\n        previousLabel=\" \"\n        nextLabel=\" \"\n        [autoHide]=\"true\"\n        [responsive]=\"true\"\n      >\n      </pagination-controls>\n    </section>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "LWwy":
/*!*************************************************************!*\
  !*** ./src/app/products-buy/products-buy-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ProductsBuyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsBuyPageRoutingModule", function() { return ProductsBuyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _book_page_book_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book-page/book-page.component */ "w36/");
/* harmony import */ var _package_page_package_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./package-page/package-page.component */ "Xvob");
/* harmony import */ var _products_buy_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products-buy.page */ "mMtk");






const routes = [
    {
        path: '',
        component: _products_buy_page__WEBPACK_IMPORTED_MODULE_5__["ProductsBuyPage"],
    },
    {
        path: 'book/:id',
        component: _book_page_book_page_component__WEBPACK_IMPORTED_MODULE_3__["BookPageComponent"],
    },
    {
        path: 'package/:pid',
        component: _package_page_package_page_component__WEBPACK_IMPORTED_MODULE_4__["PackagePageComponent"],
    },
];
let ProductsBuyPageRoutingModule = class ProductsBuyPageRoutingModule {
};
ProductsBuyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductsBuyPageRoutingModule);



/***/ }),

/***/ "PG8w":
/*!***************************************************************!*\
  !*** ./src/app/products-buy/book-card/book-card.component.ts ***!
  \***************************************************************/
/*! exports provided: BookCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookCardComponent", function() { return BookCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_book_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./book-card.component.html */ "ohZT");
/* harmony import */ var _book_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book-card.component.scss */ "tYRh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_shcard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/shcard.service */ "7S2x");






let BookCardComponent = class BookCardComponent {
    constructor(router, route, scService) {
        this.router = router;
        this.route = route;
        this.scService = scService;
    }
    ngOnInit() { }
    goToBook() {
        this.router.navigate(['/products-buy', 'book', this.book.id]);
    }
    addToCard() {
        this.scService.addToCard(this.book.id);
    }
};
BookCardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_services_shcard_service__WEBPACK_IMPORTED_MODULE_5__["ShCardService"] }
];
BookCardComponent.propDecorators = {
    book: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
BookCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-book-card',
        template: _raw_loader_book_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_book_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BookCardComponent);



/***/ }),

/***/ "R5eB":
/*!*****************************************************************!*\
  !*** ./src/app/products-buy/book-page/book-page.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  width: 100%;\n  height: auto;\n  padding: 15px 0;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n@media (max-width: 1500px) {\n  #container {\n    height: auto;\n  }\n}\n#parrent {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n}\n.modal {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  column-gap: normal;\n  background-color: rgba(255, 255, 255, 0.95);\n  border-radius: 5px;\n  color: #333;\n  font-family: sans-serif;\n  line-height: 1.5;\n  max-width: 50%;\n  padding: 1rem 2rem;\n}\n@media (max-width: 800px) {\n  .modal {\n    max-width: 86%;\n    padding: 1rem 0.5rem;\n  }\n}\n@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {\n  .modal {\n    -webkit-backdrop-filter: blur(10px);\n    backdrop-filter: blur(10px);\n    background-color: rgba(255, 255, 255, 0.5);\n  }\n\n  #container {\n    -webkit-backdrop-filter: blur(10px);\n            backdrop-filter: blur(10px);\n  }\n}\nion-list {\n  direction: rtl;\n  margin: 0;\n}\nion-list-header {\n  --background: transparent;\n}\n.rainbow-box {\n  border: 5px solid transparent;\n  border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);\n  border-image-slice: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib29rLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUNFO0VBUkY7SUFTSSxZQUFBO0VBRUY7QUFDRjtBQUNBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUVGO0FBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFHRjtBQUZFO0VBWkY7SUFhSSxjQUFBO0lBQ0Esb0JBQUE7RUFLRjtBQUNGO0FBSEE7RUFDRTtJQUNFLG1DQUFBO0lBQ0EsMkJBQUE7SUFDQSwwQ0FBQTtFQU1GOztFQUpBO0lBQ0UsbUNBQUE7WUFBQSwyQkFBQTtFQU9GO0FBQ0Y7QUFKQTtFQUNFLGNBQUE7RUFDQSxTQUFBO0FBTUY7QUFKQTtFQUNFLHlCQUFBO0FBT0Y7QUFKQTtFQUNFLDZCQUFBO0VBQ0EsK0dBQUE7RUFRQSxxQkFBQTtBQUFGIiwiZmlsZSI6ImJvb2stcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNTAwcHgpIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbiNwYXJyZW50IHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sdW1uLWdhcDogbm9ybWFsO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgbWF4LXdpZHRoOiA4NiU7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcclxuICB9XHJcbn1cclxuQHN1cHBvcnRzICgtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogbm9uZSkgb3IgKGJhY2tkcm9wLWZpbHRlcjogbm9uZSkge1xyXG4gIC5tb2RhbCB7XHJcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICB9XHJcbiAgI2NvbnRhaW5lciB7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgZGlyZWN0aW9uOiBydGw7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbmlvbi1saXN0LWhlYWRlciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnJhaW5ib3ctYm94IHtcclxuICBib3JkZXI6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIGJvdHRvbSByaWdodCxcclxuICAgICNiODI3ZmMgMCUsXHJcbiAgICAjMmM5MGZjIDI1JSxcclxuICAgICNiOGZkMzMgNTAlLFxyXG4gICAgI2ZlYzgzNyA3NSUsXHJcbiAgICAjZmQxODkyIDEwMCVcclxuICApO1xyXG4gIGJvcmRlci1pbWFnZS1zbGljZTogMTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "V4by":
/*!*****************************************************!*\
  !*** ./src/app/products-buy/products-buy.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".book-container {\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.book-container app-book-card {\n  justify-self: center;\n  align-self: center;\n}\n.book-container ion-virtual-scroll {\n  justify-self: center;\n  align-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3RzLWJ1eS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQUU7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FBRUo7QUFBRTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUFFSiIsImZpbGUiOiJwcm9kdWN0cy1idXkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2stY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhcHAtYm9vay1jYXJkIHtcclxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIH1cclxuICBpb24tdmlydHVhbC1zY3JvbGx7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "Xvob":
/*!*********************************************************************!*\
  !*** ./src/app/products-buy/package-page/package-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: PackagePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagePageComponent", function() { return PackagePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_package_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./package-page.component.html */ "ihqZ");
/* harmony import */ var _package_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./package-page.component.scss */ "lzMw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_books_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/books.service */ "C7gO");
/* harmony import */ var src_app_shared_services_package_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/package.service */ "O/T3");
/* harmony import */ var src_app_shared_services_shcard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/shcard.service */ "7S2x");
/* harmony import */ var src_app_shared_services_ui_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/ui.service */ "8nna");









let PackagePageComponent = class PackagePageComponent {
    constructor(bookService, route, packagesService, scService, uiService) {
        this.bookService = bookService;
        this.route = route;
        this.packagesService = packagesService;
        this.scService = scService;
        this.uiService = uiService;
        this.booksInPack = [];
        this.pageSpinner = true;
    }
    ngOnInit() {
        // this.uiService.needSpinner.subscribe((spinner) => {});
        let packageId = this.route.snapshot.params['pid'];
        // console.log(this.route.snapshot);
        // console.log('this.pageSpinner',this.pageSpinner);
        this.packagesService.returnPackageById(packageId).then((p) => {
            this.thePackage = p;
            // console.log(this.thePackage);
            for (let bId of this.thePackage.bookIdArray) {
                new Promise((resolve, reject) => {
                    this.bookService.returnBookById(bId).subscribe((book) => {
                        resolve(book);
                    });
                }).then((book) => {
                    // console.log('books recived ! ');
                    this.booksInPack.push(book);
                });
            }
            this.pageSpinner = false;
            // console.log('this.pageSpinner',this.pageSpinner);
        });
    }
    addPackToCard() {
        for (let bookId of this.thePackage.bookIdArray) {
            this.scService.addToCard(bookId);
        }
    }
    ngOnDestroy() {
        this.booksInPack = [];
    }
};
PackagePageComponent.ctorParameters = () => [
    { type: src_app_shared_services_books_service__WEBPACK_IMPORTED_MODULE_5__["BookService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_services_package_service__WEBPACK_IMPORTED_MODULE_6__["PackagesService"] },
    { type: src_app_shared_services_shcard_service__WEBPACK_IMPORTED_MODULE_7__["ShCardService"] },
    { type: src_app_shared_services_ui_service__WEBPACK_IMPORTED_MODULE_8__["UIService"] }
];
PackagePageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-package-page',
        template: _raw_loader_package_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_package_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PackagePageComponent);



/***/ }),

/***/ "cY5e":
/*!*****************************************************!*\
  !*** ./src/app/products-buy/products-buy.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductsBuyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsBuyPageModule", function() { return ProductsBuyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _products_buy_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products-buy-routing.module */ "LWwy");
/* harmony import */ var _products_buy_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products-buy.page */ "mMtk");
/* harmony import */ var _book_card_book_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./book-card/book-card.component */ "PG8w");
/* harmony import */ var _book_page_book_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./book-page/book-page.component */ "w36/");
/* harmony import */ var _package_card_package_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./package-card/package-card.component */ "DvDh");
/* harmony import */ var _package_page_package_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./package-page/package-page.component */ "Xvob");












let ProductsBuyPageModule = class ProductsBuyPageModule {
};
ProductsBuyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _products_buy_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProductsBuyPageRoutingModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
        ],
        declarations: [
            _products_buy_page__WEBPACK_IMPORTED_MODULE_7__["ProductsBuyPage"],
            _book_card_book_card_component__WEBPACK_IMPORTED_MODULE_8__["BookCardComponent"],
            _book_page_book_page_component__WEBPACK_IMPORTED_MODULE_9__["BookPageComponent"],
            _package_card_package_card_component__WEBPACK_IMPORTED_MODULE_10__["PackageCardComponent"],
            _package_page_package_page_component__WEBPACK_IMPORTED_MODULE_11__["PackagePageComponent"],
        ],
    })
], ProductsBuyPageModule);



/***/ }),

/***/ "ihqZ":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products-buy/package-page/package-page.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"products-buy\"></ion-back-button>\n    </ion-buttons>\n    <section *ngIf=\"pageSpinner\">\n      <ion-spinner name=\"dots\"></ion-spinner>\n    </section>\n    <ion-title slot=\"end\" *ngIf=\"!pageSpinner\"> {{  thePackage.name }} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <section *ngIf=\"pageSpinner\">\n    <ion-spinner name=\"dots\"></ion-spinner>\n  </section>\n  <section *ngIf=\"!pageSpinner\">\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"12\" style=\"direction: rtl\">\n          <h2>\n            {{ thePackage.name }}\n          </h2>\n          <p>\n            {{ thePackage.description }}\n          </p>\n          <ion-button (click)=\"addPackToCard()\" fill=\"outline\" color=\"success\">\n            اضافه کردن همه محصولات به سبد خرید\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col\n          size=\"12\"\n          style=\"display: flex; justify-content: center; flex-wrap: wrap\"\n        >\n          <app-book-card *ngFor=\"let book of booksInPack\" [book]=\"book\">\n          </app-book-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </section>\n</ion-content>\n");

/***/ }),

/***/ "lzMw":
/*!***********************************************************************!*\
  !*** ./src/app/products-buy/package-page/package-page.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWNrYWdlLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "mMtk":
/*!***************************************************!*\
  !*** ./src/app/products-buy/products-buy.page.ts ***!
  \***************************************************/
/*! exports provided: ProductsBuyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsBuyPage", function() { return ProductsBuyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_products_buy_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./products-buy.page.html */ "K+z1");
/* harmony import */ var _products_buy_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-buy.page.scss */ "V4by");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_services_books_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/books.service */ "C7gO");
/* harmony import */ var _shared_services_package_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/package.service */ "O/T3");







let ProductsBuyPage = class ProductsBuyPage {
    constructor(bookService, packagesService) {
        this.bookService = bookService;
        this.packagesService = packagesService;
        this.subs = [];
        this.slideOpts = {
            initialSlide: 1,
            slidesPerView: Math.round(window.innerWidth / 275),
            speed: 400,
        };
        this.paginationP = 1;
    }
    ngOnInit() {
        this.subs.push(this.bookService.getAllBooks().subscribe((bookArray) => {
            this.books = bookArray;
        }));
        this.subs.push(this.packagesService.getAllPackages().subscribe((packages) => {
            this.packages = packages;
        }));
        this.packagesObs = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]((Packageo) => {
            this.packagesService.getAllPackages().subscribe((packages) => {
                Packageo.next(packages);
            });
        });
        // console.log(this.packages);
    }
    ngOnDestroy() {
        this.subs.forEach((sub) => sub.unsubscribe());
    }
};
ProductsBuyPage.ctorParameters = () => [
    { type: _shared_services_books_service__WEBPACK_IMPORTED_MODULE_5__["BookService"] },
    { type: _shared_services_package_service__WEBPACK_IMPORTED_MODULE_6__["PackagesService"] }
];
ProductsBuyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-products-buy',
        template: _raw_loader_products_buy_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_products_buy_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductsBuyPage);



/***/ }),

/***/ "ohZT":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products-buy/book-card/book-card.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card mode=\"ios\">\n  <ion-img [src]=\"book.imageUrl\"></ion-img>\n  <ion-card-header>\n    <ion-card-subtitle>📚 {{ book.genere }}</ion-card-subtitle>\n    <ion-card-title>{{ book.name }}</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <h3>💰 {{ book.price }} <small> ریال </small></h3>\n    <h3>✍ {{ book.author }}</h3>\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button (click)=\"addToCard()\" fill=\"solid\" color=\"success\">\n            خرید کالا\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-button\n            (click)=\"goToBook()\"\n            type=\"unbounded\"\n            fill=\"clear\"\n            color=\"tertiary\"\n          >\n            <ion-ripple-effect> </ion-ripple-effect>\n            نمایش جزئیات\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card-content>\n\n</ion-card>\n");

/***/ }),

/***/ "tYRh":
/*!*****************************************************************!*\
  !*** ./src/app/products-buy/book-card/book-card.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  max-width: 240px;\n  height: 510px;\n  direction: rtl;\n  overflow: show;\n  font-size: 64%;\n  display: inline-block;\n}\nion-card ion-img {\n  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);\n  height: 320px;\n  object-fit: cover;\n  margin: auto;\n}\nion-card ion-button {\n  font-size: 75%;\n}\nion-card ion-card-title {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib29rLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUNGO0FBQUU7RUFDRSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFFSjtBQUNFO0VBQ0UsY0FBQTtBQUNKO0FBQ0U7RUFDRSxlQUFBO0FBQ0oiLCJmaWxlIjoiYm9vay1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xyXG4gIG1heC13aWR0aDogMjQwcHg7XHJcbiAgaGVpZ2h0OiA1MTBweDtcclxuICBkaXJlY3Rpb246IHJ0bDtcclxuICBvdmVyZmxvdzogc2hvdztcclxuICBmb250LXNpemU6IDY0JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaW9uLWltZyB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBoZWlnaHQ6IDMyMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogNzUlO1xyXG4gIH1cclxuICBpb24tY2FyZC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIFxyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "vHrH":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products-buy/package-card/package-card.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card mode=\"ios\">\n  <ion-img [src]=\"package.imageUrl\"></ion-img>\n  <ion-card-header>\n    <ion-card-title>{{ package.name }}</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button\n            (click)=\"addToCard()\"\n            type=\"unbounded\"\n            fill=\"solid\"\n            color=\"success\"\n          >\n            خرید کالا\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-button\n            (click)=\"goToPackage()\"\n            type=\"unbounded\"\n            fill=\"clear\"\n            color=\"tertiary\"\n          >\n            نمایش جزئیات\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card-content>\n</ion-card>\n");

/***/ }),

/***/ "w36/":
/*!***************************************************************!*\
  !*** ./src/app/products-buy/book-page/book-page.component.ts ***!
  \***************************************************************/
/*! exports provided: BookPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookPageComponent", function() { return BookPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_book_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./book-page.component.html */ "9Kfl");
/* harmony import */ var _book_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book-page.component.scss */ "R5eB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_books_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/books.service */ "C7gO");
/* harmony import */ var src_app_shared_services_shcard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/shcard.service */ "7S2x");







let BookPageComponent = class BookPageComponent {
    constructor(route, bookService, scService) {
        this.route = route;
        this.bookService = bookService;
        this.scService = scService;
        this.pageSpinner = true;
    }
    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        this.bookService.returnBookById(id).subscribe((book) => {
            this.book = book;
            this.pageSpinner = false;
        });
    }
    addToCard() {
        this.scService.addToCard(this.book.id);
    }
};
BookPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_services_books_service__WEBPACK_IMPORTED_MODULE_5__["BookService"] },
    { type: src_app_shared_services_shcard_service__WEBPACK_IMPORTED_MODULE_6__["ShCardService"] }
];
BookPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-book-page',
        template: _raw_loader_book_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_book_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BookPageComponent);



/***/ })

}]);
//# sourceMappingURL=products-buy-products-buy-module.js.map