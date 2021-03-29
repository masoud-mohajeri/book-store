(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Web\BookStore\Front\book-store\src\main.ts */"zUnb");


/***/ }),

/***/ "6+lR":
/*!**********************************************!*\
  !*** ./src/app/shared/guards/admin.guard.ts ***!
  \**********************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "IYfF");




let AdminGuard = class AdminGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canLoad(route, segments) {
        return new Promise((resolve, reject) => {
            this.authService.userInfo.subscribe((user) => {
                resolve(user);
            });
        }).then((user) => {
            if (user != null && user.status === 'ADMIN') {
                return true;
            }
            else {
                this.router.navigate(['']);
            }
        });
    }
};
AdminGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AdminGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AdminGuard);



/***/ }),

/***/ "7S2x":
/*!***************************************************!*\
  !*** ./src/app/shared/services/shcard.service.ts ***!
  \***************************************************/
/*! exports provided: ShCardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShCardService", function() { return ShCardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _books_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./books.service */ "C7gO");
/* harmony import */ var _ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui.service */ "8nna");





let ShCardService = class ShCardService {
    constructor(bookService, uiService) {
        this.bookService = bookService;
        this.uiService = uiService;
        this.cardList = [];
        this.cardListEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.cardList);
    }
    addToCard(id) {
        this.cardList.push(id);
        const seen = {};
        const ret_arr = [];
        for (let i = 0; i < this.cardList.length; i++) {
            if (!(this.cardList[i] in seen)) {
                ret_arr.push(this.cardList[i]);
                seen[this.cardList[i]] = true;
            }
        }
        this.cardList = ret_arr;
        this.cardListEmitter.next(this.cardList);
        this.uiService.presentToast('کالا به سبد خرید اضافه شد ');
    }
    removeFromCard(id) {
        const theId = this.cardList.findIndex((item) => item === id);
        this.cardList.splice(theId, 1);
        this.cardListEmitter.next(this.cardList);
        // this.uiService.presentToast('کالا از سبد خرید حذف شد ');
    }
};
ShCardService.ctorParameters = () => [
    { type: _books_service__WEBPACK_IMPORTED_MODULE_3__["BookService"] },
    { type: _ui_service__WEBPACK_IMPORTED_MODULE_4__["UIService"] }
];
ShCardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], ShCardService);



/***/ }),

/***/ "8nna":
/*!***********************************************!*\
  !*** ./src/app/shared/services/ui.service.ts ***!
  \***********************************************/
/*! exports provided: UIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIService", function() { return UIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");




let UIService = class UIService {
    constructor(toastController) {
        this.toastController = toastController;
        this.needSpinner = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    presentToast(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: text,
                duration: 1000,
                cssClass: 'center-text',
            });
            toast.present();
        });
    }
};
UIService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
UIService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], UIService);



/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyACgI-zzxfBeEYoQ_z1VSsnpEGi1oKIb5s',
        authDomain: 'masoud-book-shop.firebaseapp.com',
        projectId: 'masoud-book-shop',
        storageBucket: 'masoud-book-shop.appspot.com',
        messagingSenderId: '1067874688924',
        appId: '1:1067874688924:web:0d70690c0bf6a0a8b0f259',
        measurementId: 'G-7P60HLM02H',
    },
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

/***/ "C7gO":
/*!**************************************************!*\
  !*** ./src/app/shared/services/books.service.ts ***!
  \**************************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "IYfF");
/* harmony import */ var _ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui.service */ "8nna");


// import { AngularFireStorage } from '@angular/fire/storage';




let BookService = class BookService {
    constructor(afStorage, afs, authService, uiService) {
        this.afStorage = afStorage;
        this.afs = afs;
        this.authService = authService;
        this.uiService = uiService;
        this.Publisher = null;
        this.booksCollection = afs.collection('Book');
        authService.userInfo.subscribe((user) => {
            this.Publisher = user;
        });
    }
    getAllBooks() {
        return this.booksCollection.valueChanges({ idField: 'id' });
    }
    getAllBooksForPub() {
        return this.afs
            .collection('Book', (ref) => ref.where('publisher', '==', this.Publisher.name))
            .valueChanges({ idField: 'id' });
    }
    returnBookById(id) {
        return this.afs.doc('Book/' + id).valueChanges({ idField: 'id' });
    }
    promiseBookById(id) {
        return this.afs
            .doc('Book/' + id)
            .valueChanges({ idField: 'id' })
            .toPromise();
    }
    saveChanges(book, id) {
        this.afs
            .doc('Book/' + id)
            .update(book)
            .then(() => {
            this.uiService.presentToast('کتاب با موفقیت اصلاح شد ');
        })
            .catch(() => {
            this.uiService.presentToast('اصلاح کتاب ممکن نیست ، لطفا بعدا امتحان کنید ');
        });
        // this.books[id] = book;
    }
    deleteBook(id) {
        this.afs
            .doc('Book/' + id)
            .delete()
            .then(() => {
            console.log('book is deleted successfully');
        })
            .catch((err) => {
            console.log('book is not deleted ');
            console.log(err);
        });
    }
    addBook(book) {
        // this.books.push(book);
        // this.bookEmitter.next(this.books);
        return new Promise((resolve, reject) => {
            this.booksCollection
                .add(book)
                .then(() => {
                resolve(' کتاب با موفقیت در سایت ثبت شد ');
            })
                .catch(() => {
                reject(' مشکلی در ثبت کتاب وجود دارد ');
            });
        });
    }
    uploadImage(event, publisher, book) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const file = event.target.files[0];
            const filePath = publisher + '/' + book;
            const ref = this.afStorage.ref(filePath);
            const task = yield ref.put(file);
            console.log('upload finished ');
            const ref2 = this.afStorage.ref(filePath);
            const promise = new Promise((resolve, reject) => {
                ref2.getDownloadURL().subscribe((url) => {
                    console.log(url);
                    resolve(url);
                });
            });
            return promise;
            // console.log('await 2 ');
        });
    }
    decreassInvestory(bookId, count) {
        new Promise((resolve, reject) => {
            this.afs
                .doc('Book/' + bookId)
                .get()
                .subscribe((book) => {
                resolve(book);
            });
        }).then((book) => {
            this.afs
                .doc('Book/' + bookId)
                .update({ inventory: book.inventory - count })
                .then((res) => {
                console.log('book investory decreased successfully');
            });
        });
        // const theId = this.books.findIndex((book) => book.id === bookId);
        // this.books[theId].inventory = this.books[theId].inventory - count;
        // this.bookEmitter.next(this.books);
    }
};
BookService.ctorParameters = () => [
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ui_service__WEBPACK_IMPORTED_MODULE_5__["UIService"] }
];
BookService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], BookService);



/***/ }),

/***/ "IYfF":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ui_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui.service */ "8nna");








let AuthService = class AuthService {
    constructor(afs, afAuth, router, route, uiService, loadingController) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.route = route;
        this.uiService = uiService;
        this.loadingController = loadingController;
        this.isAuth = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
        this.userInfo = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
    }
    login(email, password) {
        return new Promise((resolve, reject) => {
            this.loadingController
                .create({ message: 'لطفا کمی صبر کنید ' })
                .then((loadingEl) => {
                loadingEl.present();
                this.afAuth
                    .signInWithEmailAndPassword(email, password)
                    .then(() => {
                    new Promise((resolve, reject) => {
                        this.afs
                            .collection('User', (ref) => ref.where('email', '==', email))
                            .valueChanges({ idField: 'id' })
                            .subscribe((user) => {
                            resolve(user[0]);
                        });
                    }).then((user) => {
                        // console.log(user);
                        this.userInfo.next(user);
                        this.isAuth.next(true);
                        loadingEl.dismiss();
                        this.uiService.presentToast('خوش آمدید ');
                        resolve(user);
                    });
                })
                    .catch((err) => {
                    loadingEl.dismiss();
                    this.uiService.presentToast(err);
                    console.error(err);
                });
            });
        });
    }
    signUp(signupInfo) {
        this.loadingController
            .create({ message: 'لطفا کمی صبر کنید ' })
            .then((loadingEl) => {
            loadingEl.present();
            const newUser = {
                name: signupInfo.name,
                address: signupInfo.address,
                email: signupInfo.email,
                status: signupInfo.status,
            };
            this.afAuth
                .createUserWithEmailAndPassword(signupInfo.email, signupInfo.password1)
                .then(() => {
                new Promise((resolve, reject) => {
                    this.afs
                        .collection('User')
                        .add(newUser)
                        .then(() => {
                        resolve('success');
                    });
                }).then(() => {
                    new Promise((resolve, reject) => {
                        this.afs
                            .collection('User', (ref) => ref.where('email', '==', newUser.email))
                            .valueChanges({ idField: 'id' })
                            .subscribe((user) => {
                            resolve(user[0]);
                        });
                    }).then((user) => {
                        this.userInfo.next(user);
                        this.isAuth.next(true);
                        loadingEl.dismiss();
                        this.uiService.presentToast('کاربر با موفقیت ثبت شد ');
                        this.router.navigate(['']);
                    });
                });
            })
                .catch((err) => {
                this.uiService.presentToast(err);
                loadingEl.dismiss();
            });
        });
    }
    logOut() {
        this.afAuth.signOut().then(() => {
            this.userInfo.next(null);
            this.isAuth.next(false);
            this.uiService.presentToast('خروج موفقیت آمیز بود');
            this.router.navigate(['']);
        });
    }
    saveAddress(address) {
        let theUser = null;
        this.userInfo.subscribe((user) => {
            theUser = user;
        });
        this.afs
            .doc('User/' + theUser.id)
            .update({ address: address })
            .then(() => {
            this.uiService.presentToast('آدرس با موفقیت تغییر کرد ');
        })
            .catch(() => {
            this.uiService.presentToast('تغییر آدرس موفقیت آمیز نبود ، لطفا دوباره امتحان کنید ');
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ui_service__WEBPACK_IMPORTED_MODULE_7__["UIService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthService);



/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _customer_tab_customer_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-tab/customer-tab.component */ "TKl6");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");






let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_customer_tab_customer_tab_component__WEBPACK_IMPORTED_MODULE_3__["CustomerTabComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
        exports: [_customer_tab_customer_tab_component__WEBPACK_IMPORTED_MODULE_3__["CustomerTabComponent"]],
    })
], SharedModule);



/***/ }),

/***/ "S35q":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/customer-tab/customer-tab.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar slot=\"buttom\">\n    <ion-tab-button *ngIf=\"!user?.status\" [routerLink]=\"['/login']\">\n      <ion-icon name=\"log-in-outline\"></ion-icon>\n      <ion-label>ورود</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button\n      *ngIf=\"user?.status === 'CUSTOMER'\"\n      [routerLink]=\"['/customer']\"\n    >\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <ion-label>پنل کاربری</ion-label>\n    </ion-tab-button>\n    <ion-tab-button *ngIf=\"user?.status === 'ADMIN'\" [routerLink]=\"['/admin']\">\n      <ion-icon name=\"person-circle-outline\"></ion-icon>\n      <ion-label>پنل ادمین</ion-label>\n    </ion-tab-button>\n    <ion-tab-button\n      *ngIf=\"user?.status === 'PUBLISHER'\"\n      [routerLink]=\"['/publisher']\"\n    >\n      <ion-icon name=\"print-outline\"></ion-icon>\n      <ion-label>پنل ناشر</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button [routerLink]=\"['/products-buy']\">\n      <ion-icon name=\"book-outline\"></ion-icon>\n      <ion-label>محصولات</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button [routerLink]=\"['/shopping-card']\">\n      <ion-icon name=\"cart-outline\"></ion-icon>\n      <ion-label>سبد خرید</ion-label>\n      <ion-badge color=\"success\">{{ badgeNumber }}</ion-badge>\n    </ion-tab-button>\n\n    <ion-tab-button *ngIf=\"!!user\" (click)=\"onLogout()\">\n      <ion-icon name=\"log-out-outline\"></ion-icon>\n      <ion-label>خروج </ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/auth.service */ "IYfF");






let AppComponent = class AppComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() { }
};
AppComponent.ctorParameters = () => [
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "TKl6":
/*!***************************************************************!*\
  !*** ./src/app/shared/customer-tab/customer-tab.component.ts ***!
  \***************************************************************/
/*! exports provided: CustomerTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerTabComponent", function() { return CustomerTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_customer_tab_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./customer-tab.component.html */ "S35q");
/* harmony import */ var _customer_tab_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-tab.component.scss */ "zOxQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "IYfF");
/* harmony import */ var _services_shcard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/shcard.service */ "7S2x");






let CustomerTabComponent = class CustomerTabComponent {
    constructor(authService, shCardService) {
        this.authService = authService;
        this.shCardService = shCardService;
        this.status = 'none';
        this.badgeNumber = 0;
        this.isAuth = false;
    }
    ngOnInit() {
        this.authService.userInfo.subscribe((userSub) => {
            this.user = userSub;
        });
        this.shCardService.cardListEmitter.subscribe((shCardList) => {
            this.badgeNumber = shCardList.length;
        });
    }
    onLogout() {
        this.authService.logOut();
    }
    userLog() {
        console.log(this.user);
    }
};
CustomerTabComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_shcard_service__WEBPACK_IMPORTED_MODULE_5__["ShCardService"] }
];
CustomerTabComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-customer-tab',
        template: _raw_loader_customer_tab_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_customer_tab_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CustomerTabComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <!-- Menu 1  -->\n  <!-- <ion-menu side=\"end\" menuId=\"home\" contentId=\"main\">\n    <ion-header>\n      <ion-toolbar color=\"primary\">\n        <ion-title>Start Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <ion-menu-toggle>\n          <ion-item [routerLink]=\"['/publisher']\" lines=\"none\">\n            <ion-icon name=\"book\" mode=\"md\"></ion-icon>\n            <ion-label>Publisher</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n\n        <ion-menu-toggle>\n          <ion-item [routerLink]=\"['//products-buy']\" lines=\"none\">\n            <ion-icon name=\"card\"></ion-icon>\n            <ion-label>Products-buy</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n\n        <ion-menu-toggle>\n          <ion-item [routerLink]=\"['/publisher']\" lines=\"none\">\n            <ion-icon name=\"person-circle\"></ion-icon>\n            <ion-label>Publisher Area</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n\n        <ion-menu-toggle>\n          <ion-item [routerLink]=\"['/login']\" lines=\"none\">\n            <ion-icon name=\"person-circle\"></ion-icon>\n            <ion-label>login</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n\n        <ion-menu-toggle>\n          <ion-item [routerLink]=\"['/admin']\" lines=\"none\">\n            <ion-icon name=\"person-circle\"></ion-icon>\n            <ion-label>Admin</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu> -->\n\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n  <app-customer-tab ></app-customer-tab>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nguniversal/module-map-ngfactory-loader */ "/FyA");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebaseConfig),
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorageModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"],
            _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_13__["ModuleMapLoaderModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production }),
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "lrTF":
/*!*************************************************!*\
  !*** ./src/app/shared/guards/customer.guard.ts ***!
  \*************************************************/
/*! exports provided: CustomerGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerGuard", function() { return CustomerGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "IYfF");




let CustomerGuard = class CustomerGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canLoad(route, segments) {
        return new Promise((resolve, reject) => {
            this.authService.userInfo.subscribe((user) => {
                resolve(user);
            });
        }).then((user) => {
            if (user != null && user.status === 'CUSTOMER') {
                return true;
            }
            else {
                this.router.navigate(['']);
            }
        });
    }
};
CustomerGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CustomerGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], CustomerGuard);



/***/ }),

/***/ "qwSH":
/*!**************************************************!*\
  !*** ./src/app/shared/guards/publisher.guard.ts ***!
  \**************************************************/
/*! exports provided: PublisherGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublisherGuard", function() { return PublisherGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "IYfF");




let PublisherGuard = class PublisherGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canLoad(route, segments) {
        return new Promise((resolve, reject) => {
            this.authService.userInfo.subscribe((user) => {
                resolve(user);
            });
        }).then((user) => {
            if (user != null && user.status === 'PUBLISHER') {
                return true;
            }
            else {
                this.router.navigate(['']);
            }
        });
    }
};
PublisherGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PublisherGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], PublisherGuard);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_guards_admin_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/guards/admin.guard */ "6+lR");
/* harmony import */ var _shared_guards_publisher_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/guards/publisher.guard */ "qwSH");
/* harmony import */ var _shared_guards_customer_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/guards/customer.guard */ "lrTF");






const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then((m) => m.HomePageModule),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "Yj9t")).then((m) => m.AuthPageModule),
    },
    {
        path: 'admin',
        loadChildren: () => Promise.all(/*! import() | admin-admin-module */[__webpack_require__.e("default~admin-admin-module~products-buy-products-buy-module"), __webpack_require__.e("common"), __webpack_require__.e("admin-admin-module")]).then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "jkDv")).then((m) => m.AdminPageModule),
        canLoad: [_shared_guards_admin_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]],
    },
    {
        path: 'publisher',
        loadChildren: () => Promise.all(/*! import() | publisher-publisher-module */[__webpack_require__.e("common"), __webpack_require__.e("publisher-publisher-module")]).then(__webpack_require__.bind(null, /*! ./publisher/publisher.module */ "eWTq")).then((m) => m.PublisherPageModule),
        canLoad: [_shared_guards_publisher_guard__WEBPACK_IMPORTED_MODULE_4__["PublisherGuard"]],
    },
    {
        path: 'customer',
        loadChildren: () => Promise.all(/*! import() | customer-customer-module */[__webpack_require__.e("common"), __webpack_require__.e("customer-customer-module")]).then(__webpack_require__.bind(null, /*! ./customer/customer.module */ "d7gL")).then((m) => m.CustomerPageModule),
        canLoad: [_shared_guards_customer_guard__WEBPACK_IMPORTED_MODULE_5__["CustomerGuard"]],
    },
    {
        path: 'products-buy',
        loadChildren: () => Promise.all(/*! import() | products-buy-products-buy-module */[__webpack_require__.e("default~admin-admin-module~products-buy-products-buy-module"), __webpack_require__.e("products-buy-products-buy-module")]).then(__webpack_require__.bind(null, /*! ./products-buy/products-buy.module */ "cY5e")).then((m) => m.ProductsBuyPageModule),
    },
    {
        path: 'shopping-card',
        loadChildren: () => Promise.all(/*! import() | shopping-card-and-purchase-shopping-card-and-purchase-module */[__webpack_require__.e("common"), __webpack_require__.e("shopping-card-and-purchase-shopping-card-and-purchase-module")]).then(__webpack_require__.bind(null, /*! ./shopping-card-and-purchase/shopping-card-and-purchase.module */ "8o4l")).then((m) => m.ShoppingCardAndPurchasePageModule),
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"], initialNavigation: 'enabled' }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zOxQ":
/*!*****************************************************************!*\
  !*** ./src/app/shared/customer-tab/customer-tab.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci10YWIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "wAiw");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.log(err));
});


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map