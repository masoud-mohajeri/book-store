(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shopping-card-and-purchase-shopping-card-and-purchase-module"],{

/***/ "+zbB":
/*!*******************************************************************************!*\
  !*** ./src/app/shopping-card-and-purchase/shopping-card-and-purchase.page.ts ***!
  \*******************************************************************************/
/*! exports provided: ShoppingCardAndPurchasePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCardAndPurchasePage", function() { return ShoppingCardAndPurchasePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_shopping_card_and_purchase_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./shopping-card-and-purchase.page.html */ "aQvo");
/* harmony import */ var _shopping_card_and_purchase_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-card-and-purchase.page.scss */ "ELq+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_services_orderPayment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/orderPayment.service */ "t1Rf");
/* harmony import */ var _shared_services_shcard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/shcard.service */ "7S2x");
/* harmony import */ var _shared_services_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/ui.service */ "8nna");







let ShoppingCardAndPurchasePage = class ShoppingCardAndPurchasePage {
    constructor(orderPayService, shCardService, uiService) {
        this.orderPayService = orderPayService;
        this.shCardService = shCardService;
        this.uiService = uiService;
        this.orders = [];
        // paymentStatus = true;
        this.needSpinner = true;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.orderPayService.getAllOrdersUser().then((oList) => {
            this.orders = oList;
            this.needSpinner = false;
        });
    }
};
ShoppingCardAndPurchasePage.ctorParameters = () => [
    { type: _shared_services_orderPayment_service__WEBPACK_IMPORTED_MODULE_4__["OrderPaymentService"] },
    { type: _shared_services_shcard_service__WEBPACK_IMPORTED_MODULE_5__["ShCardService"] },
    { type: _shared_services_ui_service__WEBPACK_IMPORTED_MODULE_6__["UIService"] }
];
ShoppingCardAndPurchasePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-shopping-card-and-purchase',
        template: _raw_loader_shopping_card_and_purchase_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_shopping_card_and_purchase_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ShoppingCardAndPurchasePage);



/***/ }),

/***/ "/v2w":
/*!*******************************************************************************!*\
  !*** ./src/app/shopping-card-and-purchase/item-card/item-card.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdGVtLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "6P/c":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-card-and-purchase/item-card/item-card.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-spinner *ngIf=\"needSpinner\" name=\"dots\"></ion-spinner>\n<section *ngIf=\"!needSpinner\">\n  <section *ngIf=\"order.status === 'CARD'\" style=\"direction: rtl\">\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-thumbnail>\n            <img [src]=\"book.imageUrl\" />\n          </ion-thumbnail>\n        </ion-col>\n        <ion-col size=\"3\">\n          {{ book.name }}\n        </ion-col>\n        <ion-col size=\"2\">\n          {{ book.price }}\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-item>\n            <ion-input\n              #count2\n              [disabled]=\"order.status !== 'CARD'\"\n              #input\n              type=\"number\"\n              color=\"warning\"\n              [value]=\"order.count\"\n              [max]=\"book.inventory\"\n              [min]=\"1\"\n            ></ion-input>\n          </ion-item>\n        </ion-col>\n\n        <ion-col *ngIf=\"order.status === 'CARD'\" size=\"3\">\n          <ion-button\n            [disabled]=\"input.value > book.inventory\"\n            (click)=\"payThisOrder(count2.value)\"\n            fill=\"outline\"\n            color=\"success\"\n          >\n            پرداخت\n          </ion-button>\n          <ion-button (click)=\"deleteThisOrder()\" fill=\"outline\" color=\"danger\">\n            حذف\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </section>\n</section>\n");

/***/ }),

/***/ "8o4l":
/*!*********************************************************************************!*\
  !*** ./src/app/shopping-card-and-purchase/shopping-card-and-purchase.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ShoppingCardAndPurchasePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCardAndPurchasePageModule", function() { return ShoppingCardAndPurchasePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _shopping_card_and_purchase_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-card-and-purchase-routing.module */ "maSp");
/* harmony import */ var _shopping_card_and_purchase_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shopping-card-and-purchase.page */ "+zbB");
/* harmony import */ var _item_card_item_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item-card/item-card.component */ "Hm/u");








let ShoppingCardAndPurchasePageModule = class ShoppingCardAndPurchasePageModule {
};
ShoppingCardAndPurchasePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shopping_card_and_purchase_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShoppingCardAndPurchasePageRoutingModule"],
        ],
        declarations: [_shopping_card_and_purchase_page__WEBPACK_IMPORTED_MODULE_6__["ShoppingCardAndPurchasePage"], _item_card_item_card_component__WEBPACK_IMPORTED_MODULE_7__["ItemCardComponent"]],
    })
], ShoppingCardAndPurchasePageModule);



/***/ }),

/***/ "ELq+":
/*!*********************************************************************************!*\
  !*** ./src/app/shopping-card-and-purchase/shopping-card-and-purchase.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wcGluZy1jYXJkLWFuZC1wdXJjaGFzZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "Hm/u":
/*!*****************************************************************************!*\
  !*** ./src/app/shopping-card-and-purchase/item-card/item-card.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ItemCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCardComponent", function() { return ItemCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_item_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./item-card.component.html */ "6P/c");
/* harmony import */ var _item_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-card.component.scss */ "/v2w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_books_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/books.service */ "C7gO");
/* harmony import */ var src_app_shared_services_orderPayment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/orderPayment.service */ "t1Rf");
/* harmony import */ var src_app_shared_services_shcard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/shcard.service */ "7S2x");







let ItemCardComponent = class ItemCardComponent {
    constructor(bookService, orderPayService, shCardService) {
        this.bookService = bookService;
        this.orderPayService = orderPayService;
        this.shCardService = shCardService;
        this.needSpinner = true;
    }
    ngOnInit() {
        new Promise((resolve, reject) => {
            this.bookService.returnBookById(this.order.bookId).subscribe((aBook) => {
                resolve(aBook);
            });
        }).then((aBook) => {
            this.book = aBook;
            // console.log('aBook:Book item order ', aBook);
            this.needSpinner = false;
        });
    }
    payThisOrder(count) {
        console.log(this.order);
        this.orderPayService.payOrder(this.order.bookId, count);
        this.shCardService.removeFromCard(this.order.bookId);
    }
    deleteThisOrder() {
        console.log(this.book.id);
        this.orderPayService.deleteOrder(this.order.bookId);
        this.shCardService.removeFromCard(this.order.bookId);
    }
};
ItemCardComponent.ctorParameters = () => [
    { type: src_app_shared_services_books_service__WEBPACK_IMPORTED_MODULE_4__["BookService"] },
    { type: src_app_shared_services_orderPayment_service__WEBPACK_IMPORTED_MODULE_5__["OrderPaymentService"] },
    { type: src_app_shared_services_shcard_service__WEBPACK_IMPORTED_MODULE_6__["ShCardService"] }
];
ItemCardComponent.propDecorators = {
    order: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ItemCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-item-card',
        template: _raw_loader_item_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_item_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ItemCardComponent);



/***/ }),

/***/ "aQvo":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-card-and-purchase/shopping-card-and-purchase.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"!needSpinner\" slot=\"end\">سبد خرید 🛒</ion-title>\n    <ion-spinner *ngIf=\"needSpinner\" name=\"dots\"></ion-spinner>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-spinner *ngIf=\"needSpinner\" name=\"dots\"></ion-spinner>\n  <section *ngIf=\"!needSpinner\">\n    <ion-grid style=\"direction: rtl\" fixed>\n      <ion-row>\n        <ion-col style=\"direction: rtl\" size=\"12\">\n          <h2>سفارش ها</h2>\n        </ion-col>\n        <!-- <ion-button (click)=\"payAllItems()\" color=\"success\"> پرداخت </ion-button> -->\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <section *ngIf=\"orders.length!=0\">\n            <section *ngFor=\"let order of orders\">\n              <!-- {{order.bookId}} {{order.count}} -->\n              <app-item-card [order]=\"order\"></app-item-card>\n            </section>\n          </section>\n          <section *ngIf=\"orders.length==0\">\n            <h2>سبد خرید شما خالی است ! 📚</h2>\n          </section>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </section>\n</ion-content>\n");

/***/ }),

/***/ "maSp":
/*!*****************************************************************************************!*\
  !*** ./src/app/shopping-card-and-purchase/shopping-card-and-purchase-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ShoppingCardAndPurchasePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCardAndPurchasePageRoutingModule", function() { return ShoppingCardAndPurchasePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shopping_card_and_purchase_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-card-and-purchase.page */ "+zbB");




const routes = [
    {
        path: '',
        component: _shopping_card_and_purchase_page__WEBPACK_IMPORTED_MODULE_3__["ShoppingCardAndPurchasePage"]
    }
];
let ShoppingCardAndPurchasePageRoutingModule = class ShoppingCardAndPurchasePageRoutingModule {
};
ShoppingCardAndPurchasePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShoppingCardAndPurchasePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=shopping-card-and-purchase-shopping-card-and-purchase-module.js.map