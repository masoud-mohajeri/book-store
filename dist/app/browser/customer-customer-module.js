(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-customer-module"],{

/***/ "38CP":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/order-history/order-history.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-spinner *ngIf=\"needSpinner\" name=\"dots\"></ion-spinner>\n<section *ngIf=\"!needSpinner\">\n  <ion-grid fixed style=\"direction: rtl\">\n    <ion-row>\n      <ion-col size=\"3\">\n        <ion-thumbnail>\n          <img [src]=\"book.imageUrl\" />\n        </ion-thumbnail>\n      </ion-col>\n      <ion-col size=\"3\">\n        {{ book.name }}\n      </ion-col>\n      <ion-col size=\"3\">\n        تعداد : {{ order.count }} \n      </ion-col>\n      <ion-col *ngIf=\"order.status === 'PAIED'\" size=\"3\">\n        <P>درحال پردازش</P>\n      </ion-col>\n      <ion-col *ngIf=\"order.status === 'SENT'\" size=\"3\">\n        پیگیری پست : {{ order.postId }}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</section>\n");

/***/ }),

/***/ "74xG":
/*!*******************************************!*\
  !*** ./src/app/customer/customer.page.ts ***!
  \*******************************************/
/*! exports provided: CustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPage", function() { return CustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_customer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./customer.page.html */ "jQy8");
/* harmony import */ var _customer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer.page.scss */ "BoSF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/auth.service */ "IYfF");
/* harmony import */ var _shared_services_orderPayment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/orderPayment.service */ "t1Rf");







let CustomerPage = class CustomerPage {
    constructor(orderPaymentService, authService) {
        this.orderPaymentService = orderPaymentService;
        this.authService = authService;
        this.orders = [];
        this.needSpinner = true;
        this.User = null;
    }
    ngOnInit() {
        var _a;
        this.authService.userInfo.subscribe((u) => {
            this.User = u;
        });
        this.addressForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((_a = this.User) === null || _a === void 0 ? void 0 : _a.address, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
    }
    ionViewWillEnter() {
        new Promise((resolve, reject) => {
            this.orderPaymentService.getPaiedOrdersUser().subscribe((ol) => {
                resolve(ol);
            });
        }).then((ol) => {
            this.orders = ol;
            console.log(ol);
            this.needSpinner = false;
        });
    }
    saveNewAddress() {
        this.authService.saveAddress(this.addressForm.value.address);
    }
};
CustomerPage.ctorParameters = () => [
    { type: _shared_services_orderPayment_service__WEBPACK_IMPORTED_MODULE_6__["OrderPaymentService"] },
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
CustomerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-customer',
        template: _raw_loader_customer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_customer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CustomerPage);



/***/ }),

/***/ "BoSF":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "JNh8":
/*!*********************************************************************!*\
  !*** ./src/app/customer/order-history/order-history.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "NVWZ":
/*!*******************************************************************!*\
  !*** ./src/app/customer/order-history/order-history.component.ts ***!
  \*******************************************************************/
/*! exports provided: OrderHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryComponent", function() { return OrderHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_history_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order-history.component.html */ "38CP");
/* harmony import */ var _order_history_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-history.component.scss */ "JNh8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_books_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/books.service */ "C7gO");





let OrderHistoryComponent = class OrderHistoryComponent {
    constructor(bookService) {
        this.bookService = bookService;
        this.needSpinner = true;
    }
    ngOnInit() {
        new Promise((resolve, reject) => {
            this.bookService.returnBookById(this.order.bookId).subscribe((book) => {
                resolve(book);
            });
        }).then((b) => {
            this.book = b;
            this.needSpinner = false;
        });
    }
};
OrderHistoryComponent.ctorParameters = () => [
    { type: src_app_shared_services_books_service__WEBPACK_IMPORTED_MODULE_4__["BookService"] }
];
OrderHistoryComponent.propDecorators = {
    order: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
OrderHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order-history',
        template: _raw_loader_order_history_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_history_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrderHistoryComponent);



/***/ }),

/***/ "d7gL":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.module.ts ***!
  \*********************************************/
/*! exports provided: CustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPageModule", function() { return CustomerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-routing.module */ "k7Q7");
/* harmony import */ var _customer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer.page */ "74xG");
/* harmony import */ var _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order-history/order-history.component */ "NVWZ");








let CustomerPageModule = class CustomerPageModule {
};
CustomerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _customer_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_customer_page__WEBPACK_IMPORTED_MODULE_6__["CustomerPage"], _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_7__["OrderHistoryComponent"]],
    })
], CustomerPageModule);



/***/ }),

/***/ "jQy8":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title slot=\"end\">مشتری 👨‍🚀</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid fixed>\n    <ion-row style=\"direction: rtl\">\n      <h2>تغییر آدرس 🏠</h2>\n      <ion-col size=\"12\">\n        <form [formGroup]=\"addressForm\" (ngSubmit)=\"saveNewAddress()\">\n          <ion-item style=\"direction: rtl\">\n            <ion-label position=\"fixed\"> آدرس جدید : </ion-label>\n            <ion-textarea formControlName=\"address\" row=\"4\"></ion-textarea>\n          </ion-item>\n          <ion-button type=\"submit\" fill=\"solid\" shape=\"success\">\n            ذخیره آدرس جدید\n          </ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"direction: rtl\">\n      <h2>پیگیری سفارش ها 📦</h2>\n      <ion-col size=\"12\">\n        <ion-spinner *ngIf=\"needSpinner\" name=\"dots\"></ion-spinner>\n        <section *ngIf=\"!needSpinner\">\n          <app-order-history\n            *ngFor=\"let order of orders\"\n            [order]=\"order\"\n          ></app-order-history>\n        </section>\n\n        <section *ngIf=\"orders.length==0\">\n          <h4>شما هیج سفارشی نداشته اید.</h4>\n        </section>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "k7Q7":
/*!*****************************************************!*\
  !*** ./src/app/customer/customer-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CustomerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPageRoutingModule", function() { return CustomerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _customer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer.page */ "74xG");




const routes = [
    {
        path: '',
        component: _customer_page__WEBPACK_IMPORTED_MODULE_3__["CustomerPage"]
    }
];
let CustomerPageRoutingModule = class CustomerPageRoutingModule {
};
CustomerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CustomerPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=customer-customer-module.js.map