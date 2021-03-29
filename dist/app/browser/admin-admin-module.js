(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "0Em7":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageRoutingModule", function() { return AdminPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.page */ "yin/");




const routes = [
    {
        path: '',
        component: _admin_page__WEBPACK_IMPORTED_MODULE_3__["AdminPage"]
    }
];
let AdminPageRoutingModule = class AdminPageRoutingModule {
};
AdminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdminPageRoutingModule);



/***/ }),

/***/ "3z+A":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/offers/offer-item/offer-item.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item>\n  <ion-list lines=\"none\">\n    <ion-item\n      *ngFor=\"let book of books\"\n      style=\"display: inline-block; direction: rtl\"\n    >\n      <ion-chip color=\"dark\">\n        <ion-avatar>\n          <img [src]=\"book.imageUrl\" />\n        </ion-avatar>\n        <ion-label>{{ book.name }}</ion-label>\n      </ion-chip>\n    </ion-item>\n  </ion-list>\n</ion-item>\n");

/***/ }),

/***/ "5+W2":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/offers/offers.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid fixed>\n  <ion-row>\n    <ion-col sizeMd=\"5\" size=\"12\" offsetMd=\"3\">\n      <form [formGroup]=\"packageForm\" #pform>\n        <ion-item>\n          <ion-label position=\"fixed\" slot=\"end\"> : شناسه </ion-label>\n          <ion-input\n            style=\"direction: rtl\"\n            type=\"text\"\n            formControlName=\"id\"\n            readonly\n          >\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"fixed\" slot=\"end\"> : نام </ion-label>\n          <ion-input style=\"direction: rtl\" type=\"text\" formControlName=\"name\">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"fixed\" slot=\"end\"> : عکس </ion-label>\n          <ion-input\n            style=\"direction: rtl\"\n            type=\"file\"\n            formControlName=\"imageUrl\"\n            (change)=\"uploadFile($event)\"\n          >\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"fixed\" slot=\"end\"> : توضیحات </ion-label>\n          <ion-textarea style=\"direction: rtl\" formControlName=\"description\">\n          </ion-textarea>\n        </ion-item>\n        <ion-item>\n          <ion-label slot=\"end\">کتاب ها</ion-label>\n          <ion-select\n            style=\"direction: rtl\"\n            formControlName=\"bookIdArray\"\n            multiple=\"true\"\n            okText=\"Okay!\"\n          >\n            <ion-select-option *ngFor=\"let book of books\" [value]=\"book.id\">\n              {{ book.name }}-{{ book.publisher }}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-button\n          (click)=\"onClearButton()\"\n          fill=\"solid\"\n          color=\"warning\"\n          type=\"button\"\n        >\n          پاک کردن\n        </ion-button>\n        <ion-button\n          *ngIf=\"!editMode\"\n          (click)=\"onAddButton()\"\n          fill=\"solid\"\n          color=\"success\"\n          type=\"button\"\n        >\n          اضافه کردن\n        </ion-button>\n        <ion-button\n          *ngIf=\"editMode\"\n          (click)=\"onUpdateButton()\"\n          fill=\"solid\"\n          color=\"success\"\n          type=\"button\"\n        >\n          آپدیت کردن\n        </ion-button>\n        <ion-button\n          *ngIf=\"editMode\"\n          (click)=\"onDeleteButton()\"\n          fill=\"solid\"\n          color=\"danger\"\n          type=\"button\"\n        >\n          حذف کردن\n        </ion-button>\n      </form>\n    </ion-col>\n    <ion-col sizeMd=\"2\" size=\"6\" offset=\"3\" offsetMd=\"0\">\n      <ion-img [src]=\"onEditPackage?.imageUrl\" alt=\"image !!!!!!!!!!\"></ion-img>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col sizeMd=\"6\" size=\"12\" offsetMd=\"3\">\n      <ion-list style=\"direction: rtl\">\n        <section\n          *ngFor=\"\n            let pack of packages | async\n              | paginate: { itemsPerPage: 5, currentPage: paginationP }\n          \"\n        >\n          <ion-button\n            (click)=\"editPack(pack.id)\"\n            fill=\"outline\"\n            expand=\"block\"\n            color=\"medium\"\n          >\n            ویرایش {{ pack.name }} 👇\n          </ion-button>\n          <app-offer-item [package]=\"pack\"></app-offer-item>\n        </section>\n      </ion-list>\n      <div style=\"display: flex; justify-content: center\">\n        <pagination-controls\n          (pageChange)=\"paginationP = $event\"\n          previousLabel=\" \"\n          nextLabel=\" \"\n          [autoHide]=\"true\"\n          [responsive]=\"true\"\n        >\n        </pagination-controls>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n");

/***/ }),

/***/ "Dbf9":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/all-order-history/all-order-history.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-spinner *ngIf=\"needSpinner\" name=\"dots\"></ion-spinner>\n<ion-grid *ngIf=\"!needSpinner\" style=\"direction: rtl\" fixed>\n  <ion-row>\n    <ion-col size=\"3\"> نشر {{ book.publisher }} </ion-col>\n    <ion-col size=\"3\">\n      {{ book.name }}\n    </ion-col>\n    <ion-col size=\"3\">\n      تعداد :\n      {{ order.count }}\n    </ion-col>\n    <ion-col size=\"3\">\n      {{ order.paymentDate | date }}\n    </ion-col>\n  </ion-row>\n</ion-grid>\n");

/***/ }),

/***/ "FZ+c":
/*!*****************************************************************!*\
  !*** ./src/app/admin/offers/offer-item/offer-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: OfferItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferItemComponent", function() { return OfferItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_offer_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./offer-item.component.html */ "3z+A");
/* harmony import */ var _offer_item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offer-item.component.scss */ "wJZf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_books_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/books.service */ "C7gO");





let OfferItemComponent = class OfferItemComponent {
    constructor(bookService) {
        this.bookService = bookService;
        this.books = [];
    }
    ngOnInit() {
        for (const bookId of this.package.bookIdArray) {
            this.bookService.returnBookById(bookId).subscribe((book) => {
                this.books.push(book);
            });
            // this.books.push(this.bookService.returnBookById(bookId.toString()));
        }
    }
};
OfferItemComponent.ctorParameters = () => [
    { type: src_app_shared_services_books_service__WEBPACK_IMPORTED_MODULE_4__["BookService"] }
];
OfferItemComponent.propDecorators = {
    package: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
OfferItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-offer-item',
        template: _raw_loader_offer_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_offer_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OfferItemComponent);



/***/ }),

/***/ "OI/w":
/*!**************************************************************************!*\
  !*** ./src/app/admin/all-order-history/all-order-history.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtb3JkZXItaGlzdG9yeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "StMZ":
/*!****************************************************!*\
  !*** ./src/app/admin/offers/offers.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZmZlcnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "UqcN":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/publisher-card/publisher-card.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item>\n  <ion-label style=\"direction: rtl\">\n    <section *ngIf=\"!expanded\">\n      <h2>\n        نشر {{ publisher.name }}\n        <ion-icon\n          *ngIf=\"publisher.activatedStatus\"\n          name=\"cloud-done\"\n          color=\"success\"\n          style=\"font-size: 1.5rem\"\n        ></ion-icon>\n        <ion-icon\n          *ngIf=\"!publisher.activatedStatus\"\n          name=\"cloud-offline\"\n          color=\"danger\"\n          style=\"font-size: 1.5rem\"\n        ></ion-icon>\n      </h2>\n\n      <ion-button (click)=\"expandCollaps()\" color=\"tertiary\" fill=\"solid\">\n        نمایش جزئیات\n      </ion-button>\n    </section>\n    <section *ngIf=\"expanded\">\n      <h1>\n        نشر {{ publisher.name }}\n\n        <ion-icon\n          *ngIf=\"publisher.activatedStatus\"\n          name=\"cloud-done\"\n          color=\"success\"\n          style=\"font-size: 1.8rem\"\n        ></ion-icon>\n        <ion-icon\n          *ngIf=\"!publisher.activatedStatus\"\n          name=\"cloud-offline\"\n          color=\"danger\"\n          style=\"font-size: 1.8rem\"\n        ></ion-icon>\n      </h1>\n\n      <ion-button (click)=\"expandCollaps()\" color=\"tertiary\" fill=\"solid\">\n        عدم نمایش جزئیات\n      </ion-button>\n      <ion-button\n        *ngIf=\"!publisher.activatedStatus\"\n        (click)=\"changePublisherStatus()\"\n        color=\"success\"\n        fill=\"outline\"\n        shape=\"round\"\n      >\n        فعال کردن\n      </ion-button>\n      <ion-button\n        *ngIf=\"publisher.activatedStatus\"\n        (click)=\"changePublisherStatus()\"\n        color=\"danger\"\n        fill=\"outline\"\n        shape=\"round\"\n      >\n        مسدود کردن\n      </ion-button>\n\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"12\" sizeMd=\"10\" offsetMd=\"1\" offset=\"0\">\n            <ion-list lines=\"none\" inset=\"true\">\n              <ion-header>\n                <ion-toolbar>\n                  <ion-title>کتاب های نشر</ion-title>\n                </ion-toolbar>\n              </ion-header>\n              <ion-item\n                *ngFor=\"\n                  let book of books\n                    | paginate: { itemsPerPage: 5, currentPage: paginationP }\n                \"\n              >\n                <ion-avatar slot=\"start\">\n                  <ion-img [src]=\"book.imageUrl\"></ion-img>\n                </ion-avatar>\n                <ion-label style=\"direction: rtl\">{{ book.name }}</ion-label>\n              </ion-item>\n              <div style=\"display: flex; justify-content: center\">\n                <pagination-controls\n                  (pageChange)=\"paginationP = $event\"\n                  previousLabel=\" \"\n                  nextLabel=\" \"\n                  [autoHide]=\"true\"\n                  [responsive]=\"true\"\n                >\n                </pagination-controls>\n              </div>\n            </ion-list>\n            <ion-header>\n              <ion-toolbar>\n                <ion-title>آدرس </ion-title>\n              </ion-toolbar>\n            </ion-header>\n            <ion-item>\n              <ion-label class=\"ion-text-wrap\">\n                {{ publisher.address }}\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </section>\n  </ion-label>\n</ion-item>\n");

/***/ }),

/***/ "j+A+":
/*!******************************************************************!*\
  !*** ./src/app/admin/publisher-card/publisher-card.component.ts ***!
  \******************************************************************/
/*! exports provided: PublisherCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublisherCardComponent", function() { return PublisherCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_publisher_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./publisher-card.component.html */ "UqcN");
/* harmony import */ var _publisher_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publisher-card.component.scss */ "tuXE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_books_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/books.service */ "C7gO");
/* harmony import */ var src_app_shared_services_publishers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/publishers.service */ "pePv");
/* harmony import */ var src_app_shared_services_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/ui.service */ "8nna");







let PublisherCardComponent = class PublisherCardComponent {
    constructor(bookService, uiService, publisherService) {
        this.bookService = bookService;
        this.uiService = uiService;
        this.publisherService = publisherService;
        this.expanded = false;
        this.paginationP = 1;
    }
    ngOnInit() {
        this.uiService.needSpinner.next(true);
        this.bookService.getAllBooksForPub().subscribe((someBook) => {
            this.uiService.needSpinner.next(false);
            this.books = someBook;
        }, (error) => {
            this.uiService.needSpinner.next(false);
            this.uiService.presentToast('مشکلی در دریافت لیست کتاب ها وجود دارد .');
            throw new Error(error);
        });
    }
    changePublisherStatus() {
        this.publisherService.changePublisherStatus(!this.publisher.activatedStatus, this.publisher.id);
    }
    expandCollaps() {
        this.expanded = !this.expanded;
    }
};
PublisherCardComponent.ctorParameters = () => [
    { type: src_app_shared_services_books_service__WEBPACK_IMPORTED_MODULE_4__["BookService"] },
    { type: src_app_shared_services_ui_service__WEBPACK_IMPORTED_MODULE_6__["UIService"] },
    { type: src_app_shared_services_publishers_service__WEBPACK_IMPORTED_MODULE_5__["PublishersService"] }
];
PublisherCardComponent.propDecorators = {
    publisher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PublisherCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-publisher-card',
        template: _raw_loader_publisher_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_publisher_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PublisherCardComponent);



/***/ }),

/***/ "jkDv":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageModule", function() { return AdminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-routing.module */ "0Em7");
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin.page */ "yin/");
/* harmony import */ var _publisher_card_publisher_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./publisher-card/publisher-card.component */ "j+A+");
/* harmony import */ var _offers_offers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./offers/offers.component */ "vqe4");
/* harmony import */ var _offers_offer_item_offer_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./offers/offer-item/offer-item.component */ "FZ+c");
/* harmony import */ var _all_order_history_all_order_history_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./all-order-history/all-order-history.component */ "lb4T");












let AdminPageModule = class AdminPageModule {
};
AdminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdminPageRoutingModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"]
        ],
        declarations: [
            _admin_page__WEBPACK_IMPORTED_MODULE_7__["AdminPage"],
            _publisher_card_publisher_card_component__WEBPACK_IMPORTED_MODULE_8__["PublisherCardComponent"],
            _offers_offers_component__WEBPACK_IMPORTED_MODULE_9__["OffersComponent"],
            _offers_offer_item_offer_item_component__WEBPACK_IMPORTED_MODULE_10__["OfferItemComponent"],
            _all_order_history_all_order_history_component__WEBPACK_IMPORTED_MODULE_11__["AllOrderHistoryComponent"],
        ],
    })
], AdminPageModule);



/***/ }),

/***/ "lb4T":
/*!************************************************************************!*\
  !*** ./src/app/admin/all-order-history/all-order-history.component.ts ***!
  \************************************************************************/
/*! exports provided: AllOrderHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllOrderHistoryComponent", function() { return AllOrderHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_all_order_history_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./all-order-history.component.html */ "Dbf9");
/* harmony import */ var _all_order_history_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-order-history.component.scss */ "OI/w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "IYfF");
/* harmony import */ var src_app_shared_services_books_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/books.service */ "C7gO");
/* harmony import */ var src_app_shared_services_publishers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/publishers.service */ "pePv");







let AllOrderHistoryComponent = class AllOrderHistoryComponent {
    constructor(publisherService, booksService, authService) {
        this.publisherService = publisherService;
        this.booksService = booksService;
        this.authService = authService;
        this.needSpinner = true;
    }
    ngOnInit() {
        // console.log(this.order);
        new Promise((resolve, reject) => {
            this.booksService.returnBookById(this.order.bookId).subscribe((book) => {
                resolve(book);
            });
        }).then((book) => {
            this.book = book;
            this.needSpinner = false;
        });
    }
};
AllOrderHistoryComponent.ctorParameters = () => [
    { type: src_app_shared_services_publishers_service__WEBPACK_IMPORTED_MODULE_6__["PublishersService"] },
    { type: src_app_shared_services_books_service__WEBPACK_IMPORTED_MODULE_5__["BookService"] },
    { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
AllOrderHistoryComponent.propDecorators = {
    order: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AllOrderHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-all-order-history',
        template: _raw_loader_all_order_history_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_all_order_history_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AllOrderHistoryComponent);



/***/ }),

/***/ "lbtN":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <!-- <ion-buttons fxHide.lt-md slot=\"end\">\n      <ion-menu-button menu=\"home\"></ion-menu-button>\n    </ion-buttons> -->\n    <ion-title slot=\"end\">ادمین </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"offers\">\n    <ion-segment-button value=\"pubs\">\n      <ion-label>ناشران</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"offers\">\n      <ion-label>پیشنهاد ویژه </ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"sale-report\">\n      <ion-label>گزارش فروش</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <section *ngIf=\"pageState==='pubs'\">\n    <ion-list slot=\"end\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"12\" sizeMd=\"8\" offsetMd=\"2\" offset=\"0\">\n            <div *ngFor=\"let publisher of publishers\">\n              <app-publisher-card [publisher]=\"publisher\"> </app-publisher-card>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-list>\n  </section>\n  <section *ngIf=\"pageState==='offers'\">\n    <app-offers></app-offers>\n  </section>\n  <section *ngIf=\"pageState==='sale-report'\">\n    <ion-spinner *ngIf=\"needSpinner\" name=\"dots\"></ion-spinner>\n    <section *ngIf=\"!needSpinner\">\n      <app-all-order-history\n        *ngFor=\"let order of orders  | paginate: { itemsPerPage: 24, currentPage: paginationP }\"\n        [order]=\"order\"\n      ></app-all-order-history>\n    </section>\n    <section style=\"display: flex; justify-content: center\">\n      <pagination-controls\n        (pageChange)=\"paginationP = $event\"\n        previousLabel=\" \"\n        nextLabel=\" \"\n        [autoHide]=\"true\"\n        [responsive]=\"true\"\n      >\n      </pagination-controls>\n    </section>\n  </section>\n</ion-content>\n");

/***/ }),

/***/ "pePv":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/publishers.service.ts ***!
  \*******************************************************/
/*! exports provided: PublishersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishersService", function() { return PublishersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui.service */ "8nna");





let PublishersService = class PublishersService {
    constructor(afs, uiService) {
        this.afs = afs;
        this.uiService = uiService;
        this.publishers = [];
        this.publisherEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    getAllPublishers() {
        return this.afs
            .collection('User', (ref) => ref.where('status', '==', 'PUBLISHER'))
            .valueChanges({ idField: 'id' });
    }
    changePublisherStatus(status, pubId) {
        this.afs
            .doc('User/' + pubId)
            .update({ activatedStatus: status })
            .then(() => {
            if (status) {
                this.uiService.presentToast('ناشر با موفقیت تایید شد ');
            }
            else {
                this.uiService.presentToast('ناشر با موفقیت مسدود شد ');
            }
        })
            .catch((err) => {
            this.uiService.presentToast('مشکلی در تغییر وضعیت ناشر وجود دارد ');
            throw new Error(err);
        });
    }
    returnPublisherById(pub) {
        // let theId = this.publishers.findIndex((pub) => pub.id === id);
        // return this.publishers[theId];
        return this.afs
            .collection('User', (ref) => ref.where('name', '==', pub).where('status', '==', 'Publisher'))
            .valueChanges();
    }
};
PublishersService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _ui_service__WEBPACK_IMPORTED_MODULE_4__["UIService"] }
];
PublishersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], PublishersService);



/***/ }),

/***/ "tuXE":
/*!********************************************************************!*\
  !*** ./src/app/admin/publisher-card/publisher-card.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdWJsaXNoZXItY2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "vqe4":
/*!**************************************************!*\
  !*** ./src/app/admin/offers/offers.component.ts ***!
  \**************************************************/
/*! exports provided: OffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersComponent", function() { return OffersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_offers_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./offers.component.html */ "5+W2");
/* harmony import */ var _offers_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offers.component.scss */ "StMZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_shared_services_books_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/books.service */ "C7gO");
/* harmony import */ var src_app_shared_services_package_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/package.service */ "O/T3");
/* harmony import */ var src_app_shared_services_ui_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/ui.service */ "8nna");










let OffersComponent = class OffersComponent {
    constructor(packagesService, bookService, uiService, loadingController) {
        this.packagesService = packagesService;
        this.bookService = bookService;
        this.uiService = uiService;
        this.loadingController = loadingController;
        this.subs = [];
        this.paginationP = 1;
        this.editMode = false;
        this.onEditPackage = null;
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        this.bookService.getAllBooks().subscribe((someBook) => {
            this.books = someBook;
        }, (error) => {
            this.uiService.presentToast('مشکلی در دریافت لیست کتاب ها وجود دارد .');
            throw new Error(error);
        });
        this.packages = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"]((data) => {
            this.packagesService.getAllPackages().subscribe((packages) => {
                data.next(packages);
            });
        });
        this.packageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((_a = this.onEditPackage) === null || _a === void 0 ? void 0 : _a.name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            imageUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((_b = this.onEditPackage) === null || _b === void 0 ? void 0 : _b.imageUrl, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            bookIdArray: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((_c = this.onEditPackage) === null || _c === void 0 ? void 0 : _c.bookIdArray, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((_d = this.onEditPackage) === null || _d === void 0 ? void 0 : _d.description, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
    }
    editPack(pid) {
        this.loadingController
            .create({ message: 'لطفا کمی صبر کنید' })
            .then((wel) => {
            wel.present();
            this.editMode = true;
            this.packagesService
                .returnPackageById(pid)
                .then((p) => {
                this.onEditPackage = p;
                // console.log(this.onEditPackage);
                this.packageForm.setValue({
                    id: this.onEditPackage.id,
                    name: this.onEditPackage.name,
                    imageUrl: this.onEditPackage.imageUrl,
                    bookIdArray: this.onEditPackage.bookIdArray,
                    description: this.onEditPackage.description,
                });
                wel.dismiss();
            })
                .catch((err) => {
                wel.dismiss();
                // console.log('err');
                throw new Error(err);
            });
        });
    }
    onClearButton() {
        this.packageForm.reset();
        this.editMode = false;
        this.onEditPackage = null;
    }
    onDeleteButton() {
        this.packagesService.deletePackage(this.onEditPackage.id);
        this.onClearButton();
    }
    onAddButton() {
        this.loadingController
            .create({ message: 'لطفا کمی صبر کنید' })
            .then((wel) => {
            wel.present();
            this.packagesService
                .uploadImage(this.imageEvent, this.packageForm.value.name)
                .then((url) => {
                this.packageForm.patchValue({ imageUrl: url });
                this.packagesService.addPackage(this.packageForm.value);
                this.uiService.presentToast('عکس با موفقیت اپلود شد ');
                this.onClearButton();
                wel.dismiss();
            })
                .catch((err) => {
                this.uiService.presentToast('عکس با موفقیت اپلود نشد ');
                wel.dismiss();
                throw new Error(err);
            });
        });
    }
    uploadFile(event) {
        this.imageEvent = event;
    }
    onUpdateButton() {
        this.packagesService.updatePackage(this.packageForm.value);
        this.onClearButton();
    }
    ngOnDestroy() {
        this.subs.forEach((sub) => sub.unsubscribe());
    }
};
OffersComponent.ctorParameters = () => [
    { type: src_app_shared_services_package_service__WEBPACK_IMPORTED_MODULE_8__["PackagesService"] },
    { type: src_app_shared_services_books_service__WEBPACK_IMPORTED_MODULE_7__["BookService"] },
    { type: src_app_shared_services_ui_service__WEBPACK_IMPORTED_MODULE_9__["UIService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
OffersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-offers',
        template: _raw_loader_offers_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_offers_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OffersComponent);



/***/ }),

/***/ "wJZf":
/*!*******************************************************************!*\
  !*** ./src/app/admin/offers/offer-item/offer-item.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZmZlci1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "x35V":
/*!***************************************!*\
  !*** ./src/app/admin/admin.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "yin/":
/*!*************************************!*\
  !*** ./src/app/admin/admin.page.ts ***!
  \*************************************/
/*! exports provided: AdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPage", function() { return AdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin.page.html */ "lbtN");
/* harmony import */ var _admin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.page.scss */ "x35V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_services_orderPayment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/orderPayment.service */ "t1Rf");
/* harmony import */ var _shared_services_publishers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/publishers.service */ "pePv");
/* harmony import */ var _shared_services_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/ui.service */ "8nna");







let AdminPage = class AdminPage {
    // orders;
    constructor(publishersService, orderPayService, uiService) {
        this.publishersService = publishersService;
        this.orderPayService = orderPayService;
        this.uiService = uiService;
        this.pageState = 'offers';
        this.subscriptions = [];
        this.needSpinner = true;
        this.orders = [];
        this.paginationP = 1;
    }
    ngOnInit() {
        this.subscriptions.push(this.publishersService.getAllPublishers().subscribe((pubs) => {
            this.publishers = pubs;
        }, (error) => {
            this.uiService.presentToast('مشکلی در دریافت لیست ناشران وجود دارد ');
            throw new Error(error);
        }));
        new Promise((resolve, reject) => {
            this.orderPayService.getAllOrders().subscribe((order) => {
                resolve(order);
            });
        }).then((order) => {
            // console.log(order);
            this.orders = order;
            this.needSpinner = false;
        });
    }
    segmentChanged(event) {
        this.pageState = event.detail.value;
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => {
            sub.unsubscribe();
        });
    }
};
AdminPage.ctorParameters = () => [
    { type: _shared_services_publishers_service__WEBPACK_IMPORTED_MODULE_5__["PublishersService"] },
    { type: _shared_services_orderPayment_service__WEBPACK_IMPORTED_MODULE_4__["OrderPaymentService"] },
    { type: _shared_services_ui_service__WEBPACK_IMPORTED_MODULE_6__["UIService"] }
];
AdminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin',
        template: _raw_loader_admin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminPage);



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map