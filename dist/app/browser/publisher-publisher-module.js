(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["publisher-publisher-module"],{

/***/ "+caL":
/*!**********************************************************!*\
  !*** ./src/app/publisher/add-book/add-book.component.ts ***!
  \**********************************************************/
/*! exports provided: AddBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookComponent", function() { return AddBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_book_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-book.component.html */ "JwcC");
/* harmony import */ var _add_book_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-book.component.scss */ "oIQ6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "IYfF");
/* harmony import */ var src_app_shared_services_books_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/books.service */ "C7gO");
/* harmony import */ var src_app_shared_services_ui_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/ui.service */ "8nna");









let AddBookComponent = class AddBookComponent {
    constructor(bookService, authService, uiService, loadingController) {
        this.bookService = bookService;
        this.authService = authService;
        this.uiService = uiService;
        this.loadingController = loadingController;
    }
    ngOnInit() {
        this.authService.userInfo.subscribe((user) => {
            this.Publisher = user;
        });
        this.bookForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            inventory: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            isbn: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            translator: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            publisher: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.Publisher.name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            pubYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            gist: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            imageUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
    }
    onClear() {
        this.bookForm.reset();
        this.bookForm.patchValue({ publisher: this.Publisher.name });
    }
    onSave() {
        console.log(this.bookForm.value);
        this.loadingController
            .create({ message: 'لطفا کمی صبر کنید ' })
            .then((loadingEl) => {
            loadingEl.present();
            new Promise((resolve, reject) => {
                this.bookService
                    .uploadImage(this.fileInputEvent, this.Publisher.name, this.bookForm.value.name)
                    .then((url) => {
                    this.imageUrl = url;
                    resolve(url);
                });
            })
                .then((url) => {
                this.bookForm.patchValue({ imageUrl: url });
                this.bookService
                    .addBook(this.bookForm.value)
                    .then((message) => {
                    // this.onClear();
                    loadingEl.dismiss();
                    this.uiService.presentToast(message);
                })
                    .catch((message) => {
                    loadingEl.dismiss();
                    this.uiService.presentToast(message);
                });
            })
                .catch(() => {
                this.uiService.presentToast('مشکلی در آپلود عکس وجود دارد');
            });
        });
        // this.onClear();
    }
    uploadFile(event) {
        this.fileInputEvent = event;
    }
};
AddBookComponent.ctorParameters = () => [
    { type: src_app_shared_services_books_service__WEBPACK_IMPORTED_MODULE_7__["BookService"] },
    { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_shared_services_ui_service__WEBPACK_IMPORTED_MODULE_8__["UIService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
AddBookComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-book',
        template: _raw_loader_add_book_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_book_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddBookComponent);



/***/ }),

/***/ "0dcz":
/*!************************************************************!*\
  !*** ./src/app/publisher/edit-book/edit-book.component.ts ***!
  \************************************************************/
/*! exports provided: EditBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBookComponent", function() { return EditBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_book_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-book.component.html */ "wIwJ");
/* harmony import */ var _edit_book_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-book.component.scss */ "7rtt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var src_app_shared_services_books_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/books.service */ "C7gO");
/* harmony import */ var src_app_shared_services_ui_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/ui.service */ "8nna");








let EditBookComponent = class EditBookComponent {
    constructor(bookService, loadingController, uiService) {
        this.bookService = bookService;
        this.loadingController = loadingController;
        this.uiService = uiService;
        this.bookObj = null;
        this.editMode = false;
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        // if (this.bookIdToEdit) {
        this.bookObj = this.book;
        // }
        this.bookForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((_a = this.bookObj) === null || _a === void 0 ? void 0 : _a.name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((_b = this.bookObj) === null || _b === void 0 ? void 0 : _b.price, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            inventory: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((_c = this.bookObj) === null || _c === void 0 ? void 0 : _c.inventory, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            isbn: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((_d = this.bookObj) === null || _d === void 0 ? void 0 : _d.isbn, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            translator: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((_e = this.bookObj) === null || _e === void 0 ? void 0 : _e.translator),
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((_f = this.bookObj) === null || _f === void 0 ? void 0 : _f.author, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            publisher: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((_g = this.bookObj) === null || _g === void 0 ? void 0 : _g.publisher, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            pubYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((_h = this.bookObj) === null || _h === void 0 ? void 0 : _h.pubYear, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            gist: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((_j = this.bookObj) === null || _j === void 0 ? void 0 : _j.gist, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            imageUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((_k = this.bookObj) === null || _k === void 0 ? void 0 : _k.imageUrl, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
    }
    expandCollaps() {
        this.editMode = !this.editMode;
    }
    onSave() {
        this.loadingController
            .create({ message: 'لطفا کمی صبر کنید' })
            .then((wEl) => {
            wEl.present();
            if (this.bookForm.value !== this.bookObj) {
                if (this.bookForm.value.imageUrl !== this.bookObj.imageUrl) {
                    this.bookService
                        .uploadImage(this.imgEvent, Math.random().toString(), Math.random().toString())
                        .then((imgUlr) => {
                        console.log(imgUlr);
                        this.bookForm.patchValue({ imageUrl: imgUlr });
                        this.bookService.saveChanges(this.bookForm.value, this.book.id);
                        this.expandCollaps();
                        wEl.dismiss();
                        this.uiService.presentToast('کتاب با موفقیت اصلاح گردید');
                    })
                        .catch((err) => {
                        wEl.dismiss();
                        console.log(err);
                        this.uiService.presentToast('اصلاح کتاب ممکن نیست ');
                    });
                }
                else {
                    this.bookService.saveChanges(this.bookForm.value, this.book.id);
                    this.expandCollaps();
                    wEl.dismiss();
                    this.uiService.presentToast('کتاب با موفقیت اصلاح گردید');
                }
            }
        });
    }
    onDeleteBook() {
        this.bookService.deleteBook(this.book.id);
    }
    handleFileInput(event) {
        this.imgEvent = event;
    }
};
EditBookComponent.ctorParameters = () => [
    { type: src_app_shared_services_books_service__WEBPACK_IMPORTED_MODULE_6__["BookService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: src_app_shared_services_ui_service__WEBPACK_IMPORTED_MODULE_7__["UIService"] }
];
EditBookComponent.propDecorators = {
    book: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    bookId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
EditBookComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-book',
        template: _raw_loader_edit_book_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_book_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditBookComponent);



/***/ }),

/***/ "1h98":
/*!*********************************************!*\
  !*** ./src/app/publisher/publisher.page.ts ***!
  \*********************************************/
/*! exports provided: PublisherPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublisherPage", function() { return PublisherPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_publisher_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./publisher.page.html */ "4f8n");
/* harmony import */ var _publisher_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publisher.page.scss */ "q2mp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/auth.service */ "IYfF");
/* harmony import */ var _shared_services_books_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/books.service */ "C7gO");
/* harmony import */ var _shared_services_orderPayment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/orderPayment.service */ "t1Rf");
/* harmony import */ var _shared_services_ui_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/ui.service */ "8nna");








let PublisherPage = class PublisherPage {
    constructor(bookService, orderPaymentService, authService, uiService) {
        this.bookService = bookService;
        this.orderPaymentService = orderPaymentService;
        this.authService = authService;
        this.uiService = uiService;
        this.books = [];
        this.pageStatus = 'books';
        this.orders = [];
    }
    ngOnInit() {
        this.uiService.needSpinner.next(true);
        this.bookService.getAllBooks().subscribe((someBook) => {
            this.uiService.needSpinner.next(false);
            this.books = someBook;
        }, (error) => {
            this.uiService.needSpinner.next(false);
            this.uiService.presentToast('مشکلی در دریافت لیست کتاب ها وجود دارد .');
            throw new Error(error);
        });
        this.orderPaymentService.getPublisherOrder().then((orders) => {
            this.orders = orders;
        });
        this.authService.userInfo.subscribe((info) => {
            this.userInfo = info;
        });
    }
    segmentChanged(value) {
        this.pageStatus = value.detail.value;
        // console.log(this.pageStatus);
    }
};
PublisherPage.ctorParameters = () => [
    { type: _shared_services_books_service__WEBPACK_IMPORTED_MODULE_5__["BookService"] },
    { type: _shared_services_orderPayment_service__WEBPACK_IMPORTED_MODULE_6__["OrderPaymentService"] },
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _shared_services_ui_service__WEBPACK_IMPORTED_MODULE_7__["UIService"] }
];
PublisherPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-publisher',
        template: _raw_loader_publisher_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_publisher_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PublisherPage);



/***/ }),

/***/ "4f8n":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/publisher/publisher.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title slot=\"end\">{{ userInfo.name}} 🖨️</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-segment value=\"books\" #pubSegment (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"books\">\n      <ion-label>کتاب ها</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"add-books\">\n      <ion-label>اضافه کردن کتاب</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"orders\">\n      <ion-label>سفارش ها </ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <section *ngIf=\"userInfo.activatedStatus\">\n    <section *ngIf=\"pageStatus==='books'\">\n      <app-edit-book\n        *ngFor=\"let book of books;let i=index\"\n        [book]=\"book\"\n      >\n      </app-edit-book>\n    </section>\n    <section *ngIf=\"pageStatus==='add-books'\">\n      <app-add-book></app-add-book>\n    </section>\n    <section *ngIf=\"pageStatus==='about-pub'\">\n      <p>about pub</p>\n    </section>\n    <section *ngIf=\"pageStatus==='orders'\">\n      <ion-list>\n        <section *ngFor=\"let order of orders\">\n          <section *ngIf=\"order.status==='PAIED'\">\n            <app-orders [order]=\"order\"></app-orders>\n          </section>\n        </section>\n      </ion-list>\n    </section>\n  </section>\n  <section *ngIf=\"!userInfo.activatedStatus\" style=\"direction: rtl\">\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"12\">\n          <h2>\n            ناشر گرامی شما برای دسترسی به صفحه ی خود نیاز به تایید مدیریت سایت\n            دارید .\n          </h2>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </section>\n</ion-content>\n");

/***/ }),

/***/ "79Kz":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/publisher/orders/orders.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-spinner *ngIf=\"needSpinner\" name=\"dots\"></ion-spinner>\n<ion-item [ngClass]=\"{'d-none':!classDispaly}\" *ngIf=\"!needSpinner\" style=\"direction: rtl\">\n  <ion-grid fixed>\n    <ion-row style=\"direction: rtl\">\n      <ion-col size=\"6\">\n        نام کتاب :\n        {{ theBook.name }}\n      </ion-col>\n\n      <ion-col size=\"6\">\n        تعداد :\n        {{ order.count }}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        آدرس :\n        {{ order.customerAssredd }}\n      </ion-col>\n    </ion-row>\n\n    <form [formGroup]=\"postForm\" (ngSubmit)=\"sendBook()\">\n      <ion-row style=\"direction: rtl\">\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label position=\"fixed\">رهگیری پست : </ion-label>\n            <ion-input formControlName=\"postId\" type=\"number\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button\n            [disabled]=\"postForm.invalid\"\n            type=\"submit\"\n            fill=\"solid\"\n            color=\"success\"\n          >\n            ارسال مرسوله\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n</ion-item>\n");

/***/ }),

/***/ "7rtt":
/*!**************************************************************!*\
  !*** ./src/app/publisher/edit-book/edit-book.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input {\n  direction: rtl;\n}\n\nbody {\n  --ion-grid-padding: 0;\n}\n\nbody ion-col {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlZGl0LWJvb2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtBQUVGOztBQURFO0VBQ0UsU0FBQTtBQUdKIiwiZmlsZSI6ImVkaXQtYm9vay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dCB7XHJcbiAgZGlyZWN0aW9uOiBydGw7XHJcbn1cclxuYm9keSB7XHJcbiAgLS1pb24tZ3JpZC1wYWRkaW5nOiAwO1xyXG4gIGlvbi1jb2x7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "JwcC":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/publisher/add-book/add-book.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"bookForm\" (ngSubmit)=\"onSave()\">\n  <ion-grid fixed>\n    <ion-row>\n      <!-- inputs -->\n      <ion-col size=\"12\" sizeMd=\"9\" offset=\"0\">\n        <!-- name -->\n        <ion-item>\n          <ion-label position=\"fixed\" slot=\"end\"> : نام کتاب </ion-label>\n          <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n        </ion-item>\n        <!-- price -->\n        <ion-item>\n          <ion-label position=\"fixed\" slot=\"end\"> : قیمت کتاب </ion-label>\n          <ion-input type=\"number\" formControlName=\"price\"></ion-input>\n        </ion-item>\n        <!-- inventory -->\n        <ion-item>\n          <ion-label position=\"fixed\" slot=\"end\"> : موجودی کتاب </ion-label>\n          <ion-input type=\"number\" formControlName=\"inventory\"></ion-input>\n        </ion-item>\n        <!-- isbn -->\n        <ion-item>\n          <ion-label position=\"fixed\" slot=\"end\"> : شابک کتاب </ion-label>\n          <ion-input type=\"text\" formControlName=\"isbn\"></ion-input>\n        </ion-item>\n        <!-- author -->\n        <ion-item>\n          <ion-label position=\"fixed\" slot=\"end\"> : نویسنده کتاب </ion-label>\n          <ion-input type=\"text\" formControlName=\"author\"></ion-input>\n        </ion-item>\n        <!-- translator -->\n        <ion-item>\n          <ion-label position=\"fixed\" slot=\"end\"> : مترجم کتاب </ion-label>\n          <ion-input type=\"text\" formControlName=\"translator\"></ion-input>\n        </ion-item>\n        <!-- publisher -->\n        <ion-item>\n          <ion-label position=\"fixed\" slot=\"end\"> : ناشر </ion-label>\n          <ion-input\n            readonly\n            type=\"text\"\n            formControlName=\"publisher\"\n          ></ion-input>\n        </ion-item>\n        <!-- pubYear -->\n        <ion-item>\n          <ion-label position=\"fixed\" slot=\"end\"> : سال انتشار </ion-label>\n          <ion-input type=\"text\" formControlName=\"pubYear\"></ion-input>\n        </ion-item>\n        <!-- imageUrl -->\n        <ion-item>\n          <ion-label position=\"fixed\" slot=\"end\"> : عکس </ion-label>\n          <ion-input  (change)=\"uploadFile($event)\" type=\"file\" formControlName=\"imageUrl\"></ion-input>\n        </ion-item>\n        <!-- gist -->\n        <ion-item>\n          <ion-label position=\"fixed\" slot=\"end\"> : خلاصه کتاب </ion-label>\n          <ion-textarea rows=\"6\" formControlName=\"gist\" style=\"direction: rtl\">\n          </ion-textarea>\n        </ion-item>\n      </ion-col>\n      <!-- img -->\n      <ion-col size=\"4\" sizeMd=\"3\">\n        <ion-thumbnail style=\"width: 100%; height: auto\">\n          <ion-img [src]=\"bookForm.value?.imageUrl\"></ion-img>\n        </ion-thumbnail>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button (click)=\"onClear()\" color=\"danger\" type=\"button\">\n          پاک کردن\n        </ion-button>\n        <ion-button color=\"success\" type=\"submit\" [disabled]=\"bookForm.invalid\">\n          ذخیره تغییرات\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</form>\n");

/***/ }),

/***/ "TVfP":
/*!********************************************************!*\
  !*** ./src/app/publisher/orders/orders.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".d-none {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxvcmRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoib3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmQtbm9uZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "Tvgf":
/*!******************************************************!*\
  !*** ./src/app/publisher/orders/orders.component.ts ***!
  \******************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_orders_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./orders.component.html */ "79Kz");
/* harmony import */ var _orders_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders.component.scss */ "TVfP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_books_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/books.service */ "C7gO");
/* harmony import */ var src_app_shared_services_orderPayment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/orderPayment.service */ "t1Rf");







let OrdersComponent = class OrdersComponent {
    constructor(bookService, orderPaymentService) {
        this.bookService = bookService;
        this.orderPaymentService = orderPaymentService;
        this.needSpinner = true;
        this.classDispaly = true;
    }
    ngOnInit() {
        this.postForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            postId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(0),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4),
            ]),
        });
        new Promise((resolve, reject) => {
            this.bookService.returnBookById(this.order.bookId).subscribe((book) => {
                resolve(book);
            });
        }).then((book) => {
            this.theBook = book;
            this.needSpinner = false;
        });
    }
    sendBook() {
        console.log(this.order.id);
        this.orderPaymentService
            .sendPaiedOrder(this.order.id, this.postForm.value.postId)
            .then(() => {
            console.log('order sent successfully');
            this.classDispaly = false;
        })
            .catch((res) => {
            console.log('couldnt send order  ');
            console.log(res);
        });
    }
};
OrdersComponent.ctorParameters = () => [
    { type: src_app_shared_services_books_service__WEBPACK_IMPORTED_MODULE_5__["BookService"] },
    { type: src_app_shared_services_orderPayment_service__WEBPACK_IMPORTED_MODULE_6__["OrderPaymentService"] }
];
OrdersComponent.propDecorators = {
    order: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
OrdersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-orders',
        template: _raw_loader_orders_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_orders_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrdersComponent);



/***/ }),

/***/ "eWTq":
/*!***********************************************!*\
  !*** ./src/app/publisher/publisher.module.ts ***!
  \***********************************************/
/*! exports provided: PublisherPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublisherPageModule", function() { return PublisherPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _publisher_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./publisher-routing.module */ "mkJw");
/* harmony import */ var _publisher_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./publisher.page */ "1h98");
/* harmony import */ var _edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-book/edit-book.component */ "0dcz");
/* harmony import */ var _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-book/add-book.component */ "+caL");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./orders/orders.component */ "Tvgf");










let PublisherPageModule = class PublisherPageModule {
};
PublisherPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _publisher_routing_module__WEBPACK_IMPORTED_MODULE_5__["PublisherPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [
            _publisher_page__WEBPACK_IMPORTED_MODULE_6__["PublisherPage"],
            _edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_7__["EditBookComponent"],
            _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_8__["AddBookComponent"],
            _orders_orders_component__WEBPACK_IMPORTED_MODULE_9__["OrdersComponent"],
        ],
    })
], PublisherPageModule);



/***/ }),

/***/ "mkJw":
/*!*******************************************************!*\
  !*** ./src/app/publisher/publisher-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PublisherPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublisherPageRoutingModule", function() { return PublisherPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _publisher_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publisher.page */ "1h98");




const routes = [
    {
        path: '',
        component: _publisher_page__WEBPACK_IMPORTED_MODULE_3__["PublisherPage"]
    }
];
let PublisherPageRoutingModule = class PublisherPageRoutingModule {
};
PublisherPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PublisherPageRoutingModule);



/***/ }),

/***/ "oIQ6":
/*!************************************************************!*\
  !*** ./src/app/publisher/add-book/add-book.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtYm9vay5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "q2mp":
/*!***********************************************!*\
  !*** ./src/app/publisher/publisher.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-thumbnail {\n  width: 100px;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHB1Ymxpc2hlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6InB1Ymxpc2hlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGh1bWJuYWlsIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "wIwJ":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/publisher/edit-book/edit-book.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <section *ngIf=\"!editMode\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\" sizeMd=\"6\" offsetMd=\"3\" offset=\"0\">\n          <ion-list lines=\"inset\">\n            <ion-item>\n              <ion-thumbnail style=\"width: 100px; height: auto\" slot=\"end\">\n                <ion-img [src]=\"book.imageUrl\"></ion-img>\n              </ion-thumbnail>\n              <ion-label style=\"direction: rtl\">\n                <h2>{{ book.name }}</h2>\n                <p>موجودی : {{ book.inventory }}</p>\n                <p>قیمت : {{ book.price }}</p>\n                <ion-button (click)=\"expandCollaps()\" color=\"primary\">\n                  ویرایش\n                </ion-button>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </section>\n  <section *ngIf=\"editMode\">\n    <form [formGroup]=\"bookForm\" (ngSubmit)=\"onSave()\">\n      <ion-grid fixed>\n        <ion-row>\n          <!-- inputs -->\n          <ion-col size=\"12\" sizeMd=\"9\" offset=\"0\">\n            <!-- name -->\n            <ion-item>\n              <ion-label position=\"fixed\" slot=\"end\"> : نام کتاب </ion-label>\n              <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n            </ion-item>\n            <!-- price -->\n            <ion-item>\n              <ion-label position=\"fixed\" slot=\"end\"> : قیمت کتاب </ion-label>\n              <ion-input type=\"number\" formControlName=\"price\"></ion-input>\n            </ion-item>\n            <!-- inventory -->\n            <ion-item>\n              <ion-label position=\"fixed\" slot=\"end\"> : موجودی کتاب </ion-label>\n              <ion-input type=\"number\" formControlName=\"inventory\"></ion-input>\n            </ion-item>\n            <!-- isbn -->\n            <ion-item>\n              <ion-label position=\"fixed\" slot=\"end\"> : شابک کتاب </ion-label>\n              <ion-input type=\"text\" formControlName=\"isbn\"></ion-input>\n            </ion-item>\n            <!-- author -->\n            <ion-item>\n              <ion-label position=\"fixed\" slot=\"end\"> : نویسنده کتاب </ion-label>\n              <ion-input type=\"text\" formControlName=\"author\"></ion-input>\n            </ion-item>\n            <!-- translator -->\n            <ion-item>\n              <ion-label position=\"fixed\" slot=\"end\"> : مترجم کتاب </ion-label>\n              <ion-input type=\"text\" formControlName=\"translator\"></ion-input>\n            </ion-item>\n            <!-- publisher -->\n            <ion-item>\n              <ion-label position=\"fixed\" slot=\"end\"> : ناشر </ion-label>\n              <ion-input type=\"text\" formControlName=\"publisher\"></ion-input>\n            </ion-item>\n            <!-- pubYear -->\n            <ion-item>\n              <ion-label position=\"fixed\" slot=\"end\"> : سال انتشار </ion-label>\n              <ion-input type=\"text\" formControlName=\"pubYear\"></ion-input>\n            </ion-item>\n            <!-- imageUrl -->\n            <ion-item>\n              <ion-label position=\"fixed\" slot=\"end\"> : عکس </ion-label>\n              <ion-input  (change)=\"handleFileInput($event)\" type=\"file\" formControlName=\"imageUrl\"></ion-input>\n            </ion-item>\n            <!-- gist -->\n            <ion-item>\n              <ion-label position=\"fixed\" slot=\"end\"> : خلاصه کتاب </ion-label>\n              <ion-textarea\n                rows=\"6\"\n                formControlName=\"gist\"\n                style=\"direction: rtl\"\n              >\n              </ion-textarea>\n            </ion-item>\n          </ion-col>\n          <!-- img -->\n          <ion-col size=\"4\" sizeMd=\"3\">\n            <ion-thumbnail style=\"width: 100%; height: auto\">\n              <ion-img [src]=\"bookObj?.imageUrl\"></ion-img>\n            </ion-thumbnail>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-button (click)=\"expandCollaps()\" color=\"warning\" type=\"button\">\n              بستن کارت\n            </ion-button>\n            <ion-button (click)=\"onDeleteBook()\" color=\"danger\" type=\"button\"> حذف </ion-button>\n            <ion-button color=\"success\" type=\"submit\">\n              ذخیره تغییرات\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </section>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=publisher-publisher-module.js.map