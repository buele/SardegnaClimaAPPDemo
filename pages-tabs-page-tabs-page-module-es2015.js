(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-page-tabs-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/about/about.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/about/about.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>About</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"presentPopover($event)\">\n        <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"about-header\">\n    <img src=\"assets/img/ionic-logo-white.svg\" alt=\"ionic logo\">\n  </div>\n  <div class=\"about-info\">\n    <h4 class=\"ion-padding-start\">Ionic Conference</h4>\n\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-icon name=\"calendar\" slot=\"start\"></ion-icon>\n        <ion-label position=\"stacked\">Date</ion-label>\n        <ion-datetime displayFormat=\"MMM DD, YYYY\" max=\"2056\" [(ngModel)]=\"conferenceDate\"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n        <ion-label position=\"stacked\">Location</ion-label>\n        <ion-select>\n          <ion-select-option value=\"madison\" selected>Madison, WI</ion-select-option>\n          <ion-select-option value=\"austin\">Austin, TX</ion-select-option>\n          <ion-select-option value=\"chicago\">Chicago, IL</ion-select-option>\n          <ion-select-option value=\"seattle\">Seattle, WA</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <p class=\"ion-padding-start ion-padding-end\">\n      The Ionic Conference is a one-day conference featuring talks from the Ionic team. It is focused on Ionic applications being\n      built with Ionic 2. This includes migrating apps from Ionic 1 to Ionic 2, Angular concepts, Webpack, Sass, and many\n      other technologies used in Ionic 2. Tickets are completely sold out, and we’re expecting more than 1000 developers\n      – making this the largest Ionic conference ever!\n    </p>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/map/map.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/map/map.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Sardegna Clima</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #mapCanvas class=\"map-canvas\"></div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/schedule-filter/schedule-filter.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/schedule-filter/schedule-filter.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button *ngIf=\"ios\" (click)=\"dismiss()\">Cancel</ion-button>\n      <ion-button *ngIf=\"!ios\" (click)=\"selectAll(false)\">Reset</ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      Filter Sessions\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"applyFilters()\" strong>Done</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <ion-list [lines]=\"ios ? 'inset' : 'full'\">\n    <ion-list-header>Tracks</ion-list-header>\n\n    <ion-item *ngFor=\"let track of tracks\" [attr.track]=\"track.name | lowercase\">\n      <ion-icon *ngIf=\"ios\" slot=\"start\" [name]=\"track.icon\" color=\"medium\"></ion-icon>\n      <ion-label>{{track.name}}</ion-label>\n      <ion-checkbox [(ngModel)]=\"track.isChecked\"></ion-checkbox>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer translucent *ngIf=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"selectAll(false)\">Deselect All</ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"selectAll(true)\">Select All</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/schedule/schedule.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/schedule/schedule.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <ion-segment [(ngModel)]=\"segment\" (ionChange)=\"updateSchedule()\">\n      <ion-segment-button value=\"all\">\n        All\n      </ion-segment-button>\n      <ion-segment-button value=\"favorites\">\n        Favorites\n      </ion-segment-button>\n    </ion-segment>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"presentFilter()\">\n        <ion-icon slot=\"icon-only\" name=\"options\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <ion-searchbar [(ngModel)]=\"queryText\" (ionChange)=\"updateSchedule()\" placeholder=\"Search\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list #scheduleList [hidden]=\"shownSessions === 0\">\n    <ion-item-group *ngFor=\"let group of groups\" [hidden]=\"group.hide\">\n      <ion-item-divider sticky>\n        <ion-label>\n          {{group.time}}\n        </ion-label>\n      </ion-item-divider>\n\n      <ion-item-sliding *ngFor=\"let session of group.sessions\" #slidingItem [attr.track]=\"session.tracks[0] | lowercase\" [hidden]=\"session.hide\">\n        <ion-item routerLink=\"/app/tabs/schedule/session/{{session.id}}\">\n          <ion-label>\n            <h3>{{session.name}}</h3>\n            <p>\n              {{session.timeStart}} &mdash; {{session.timeEnd}}: {{session.location}}\n            </p>\n          </ion-label>\n        </ion-item>\n        <ion-item-options>\n          <ion-item-option color=\"favorite\" (click)=\"addFavorite(slidingItem, session)\" *ngIf=\"segment === 'all'\">\n            Favorite\n          </ion-item-option>\n          <ion-item-option color=\"danger\" (click)=\"removeFavorite(slidingItem, session, 'Remove Favorite')\" *ngIf=\"segment === 'favorites'\">\n            Remove\n          </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-item-group>\n  </ion-list>\n\n  <ion-list-header [hidden]=\"shownSessions > 0\">\n    No Sessions Found\n  </ion-list-header>\n\n  <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\" #fab>\n    <ion-fab-button><ion-icon name=\"share\"></ion-icon></ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button color=\"vimeo\" (click)=\"openSocial('Vimeo', fab)\">\n        <ion-icon name=\"logo-vimeo\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"google\" (click)=\"openSocial('Google+', fab)\">\n        <ion-icon name=\"logo-googleplus\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"twitter\" (click)=\"openSocial('Twitter', fab)\">\n        <ion-icon name=\"logo-twitter\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"facebook\" (click)=\"openSocial('Facebook', fab)\">\n        <ion-icon name=\"logo-facebook\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/session-detail/session-detail.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/session-detail/session-detail.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [defaultHref]=\"defaultHref\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{session?.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"session\" class=\"ion-padding\">\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"6\">\n          <span *ngFor=\"let track of session?.tracks\" [class]=\"'session-track-'+track.toLowerCase()\">{{track}}</span>\n        </ion-col>\n        <ion-col size=\"6\" [ngClass]=\"{'show-favorite': isFavorite}\" class=\"ion-text-right\">\n          <ion-icon name=\"heart-empty\" size=\"large\" class=\"icon-heart-empty\" (click)=\"toggleFavorite()\"></ion-icon>\n          <ion-icon name=\"heart\" color=\"danger\" size=\"large\" class=\"icon-heart\" (click)=\"toggleFavorite()\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <h1>{{session.name}}</h1>\n    <p>{{session.description}}</p>\n    <ion-text color=\"medium\">\n      {{session.timeStart}} &ndash; {{session.timeEnd}}\n      <br /> {{session.location}}\n    </ion-text>\n  </div>\n\n  <ion-list>\n    <ion-item (click)=\"sessionClick('watch')\" button>\n      <ion-label color=\"primary\">Watch</ion-label>\n    </ion-item>\n    <ion-item (click)=\"sessionClick('add to calendar')\" button>\n      <ion-label color=\"primary\">Add to Calendar</ion-label>\n    </ion-item>\n    <ion-item (click)=\"sessionClick('mark as unwatched')\" button>\n      <ion-label color=\"primary\">Mark as Unwatched</ion-label>\n    </ion-item>\n    <ion-item (click)=\"sessionClick('download video')\" button>\n      <ion-label color=\"primary\">Download Video</ion-label>\n      <ion-icon slot=\"end\" color=\"primary\" size=\"small\" name=\"cloud-download\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"sessionClick('leave feedback')\" button>\n      <ion-label color=\"primary\">Leave Feedback</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/speaker-detail/speaker-detail.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/speaker-detail/speaker-detail.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/app/tabs/speakers\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{speaker?.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding speaker-detail\">\n  <div *ngIf=\"speaker\" class=\"ion-text-center\">\n    <img [src]=\"speaker.profilePic\" [alt]=\"speaker.name\">\n    <br>\n\n    <ion-button fill=\"clear\" size=\"small\" color=\"twitter\">\n      <ion-icon name=\"logo-twitter\" slot=\"icon-only\"></ion-icon>\n    </ion-button>\n    <ion-button fill=\"clear\" size=\"small\" color=\"github\">\n      <ion-icon name=\"logo-github\" slot=\"icon-only\"></ion-icon>\n    </ion-button>\n    <ion-button fill=\"clear\" size=\"small\" color=\"instagram\">\n      <ion-icon name=\"logo-instagram\" slot=\"icon-only\"></ion-icon>\n    </ion-button>\n  </div>\n\n  <p>{{speaker?.about}}</p>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/speaker-list/speaker-list.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/speaker-list/speaker-list.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Speakers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"outer-content\">\n  <ion-list>\n    <ion-grid fixed>\n      <ion-row class=\"ion-align-items-stretch\">\n        <ion-col size=\"12\" size-md=\"6\" *ngFor=\"let speaker of speakers\">\n          <ion-card class=\"speaker-card\">\n            <ion-card-header>\n              <ion-item detail=\"false\" lines=\"none\" routerLink=\"/app/tabs/speakers/speaker-details/{{speaker.id}}\">\n                <ion-avatar slot=\"start\">\n                  <img [src]=\"speaker.profilePic\" alt=\"Speaker profile pic\">\n                </ion-avatar>\n                {{speaker.name}}\n              </ion-item>\n            </ion-card-header>\n\n            <ion-card-content>\n              <ion-list>\n                <ion-item *ngFor=\"let session of speaker.sessions\" routerLink=\"/app/tabs/speakers/session/{{session.id}}\">\n                  <h3>{{session.name}}</h3>\n                </ion-item>\n\n                <ion-item routerLink=\"/app/tabs/speakers/speaker-details/{{speaker.id}}\">\n                  <h3>About {{speaker.name}}</h3>\n                </ion-item>\n              </ion-list>\n            </ion-card-content>\n\n            <ion-row class=\"ion-no-padding ion-justify-content-center\">\n              <ion-col size=\"4\" class=\"ion-text-left\">\n                <ion-button fill=\"clear\" size=\"small\" color=\"primary\" (click)=\"goToSpeakerTwitter(speaker)\">\n                  <ion-icon name=\"logo-twitter\" slot=\"start\"></ion-icon>\n                  Tweet\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"4\" class=\"ion-text-center\">\n                <ion-button fill=\"clear\" size=\"small\" color=\"primary\" (click)=\"openSpeakerShare(speaker)\">\n                  <ion-icon name=\"share-alt\" slot=\"start\"></ion-icon>\n                  Share\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"4\" lass=\"ion-text-right\">\n                <ion-button fill=\"clear\" size=\"small\" color=\"primary\" (click)=\"openContact(speaker)\">\n                  <ion-icon name=\"chatboxes\" slot=\"start\"></ion-icon>\n                  Contact\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tabs-page/tabs-page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tabs-page/tabs-page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"schedule\">\n      <ion-icon name=\"calendar\"></ion-icon>\n      <ion-label>Schedule</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"speakers\">\n      <ion-icon name=\"contacts\"></ion-icon>\n      <ion-label>Speakers</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"map\">\n      <ion-icon name=\"map\"></ion-icon>\n      <ion-label>Map</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"about\">\n      <ion-icon name=\"information-circle\"></ion-icon>\n      <ion-label>About</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/pages/about-popover/about-popover.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/about-popover/about-popover.ts ***!
  \******************************************************/
/*! exports provided: PopoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPage", function() { return PopoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let PopoverPage = class PopoverPage {
    constructor(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    support() {
        // this.app.getRootNavs()[0].push('/support');
        this.popoverCtrl.dismiss();
    }
    close(url) {
        window.open(url, '_blank');
        this.popoverCtrl.dismiss();
    }
};
PopoverPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
PopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `
    <ion-list>
      <ion-item button (click)="close('https://ionicframework.com/getting-started')">
        <ion-label>Learn Ionic</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://ionicframework.com/docs/')">
        <ion-label>Documentation</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://showcase.ionicframework.com')">
        <ion-label>Showcase</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://github.com/ionic-team/ionic')">
        <ion-label>GitHub Repo</ion-label>
      </ion-item>
      <ion-item button (click)="support()">
        <ion-label>Support</ion-label>
      </ion-item>
    </ion-list>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], PopoverPage);



/***/ }),

/***/ "./src/app/pages/about/about-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/about/about-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AboutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function() { return AboutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/app/pages/about/about.ts");




const routes = [
    {
        path: '',
        component: _about__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AboutPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/about/about.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about */ "./src/app/pages/about/about.ts");
/* harmony import */ var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../about-popover/about-popover */ "./src/app/pages/about-popover/about-popover.ts");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/pages/about/about-routing.module.ts");








let AboutModule = class AboutModule {
};
AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_7__["AboutPageRoutingModule"]
        ],
        declarations: [_about__WEBPACK_IMPORTED_MODULE_5__["AboutPage"], _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]],
        entryComponents: [_about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]],
        bootstrap: [_about__WEBPACK_IMPORTED_MODULE_5__["AboutPage"]],
    })
], AboutModule);



/***/ }),

/***/ "./src/app/pages/about/about.scss":
/*!****************************************!*\
  !*** ./src/app/pages/about/about.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-header {\n  background-color: var(--ion-color-dark);\n  padding: 16px;\n  width: 100%;\n  height: 30%;\n  text-align: center;\n}\n\n.about-header img {\n  max-height: 100%;\n}\n\n.about-info p {\n  color: var(--ion-color-dark);\n  text-align: left;\n}\n\n.about-info ion-icon {\n  -webkit-margin-end: 32px;\n          margin-inline-end: 32px;\n}\n\n.ios .about-info {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2J1ZWxlL2dpdC9TYXJkZWduYUNsaW1hMi4wL3NhcmRlZ25hMi9zcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBwYWRkaW5nOiAxNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFib3V0LWhlYWRlciBpbWcge1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4uYWJvdXQtaW5mbyBwIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmFib3V0LWluZm8gaW9uLWljb24ge1xuICBtYXJnaW4taW5saW5lLWVuZDogMzJweDtcbn1cblxuLmlvcyAuYWJvdXQtaW5mbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsIi5hYm91dC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWJvdXQtaGVhZGVyIGltZyB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5hYm91dC1pbmZvIHAge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYWJvdXQtaW5mbyBpb24taWNvbiB7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAzMnB4O1xufVxuXG4uaW9zIC5hYm91dC1pbmZvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/about/about.ts":
/*!**************************************!*\
  !*** ./src/app/pages/about/about.ts ***!
  \**************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about-popover/about-popover */ "./src/app/pages/about-popover/about-popover.ts");




let AboutPage = class AboutPage {
    constructor(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.conferenceDate = '2047-05-17';
    }
    presentPopover(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                component: _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_3__["PopoverPage"],
                event
            });
            yield popover.present();
        });
    }
};
AboutPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-about',
        template: __webpack_require__(/*! raw-loader!./about.html */ "./node_modules/raw-loader/index.js!./src/app/pages/about/about.html"),
        styles: [__webpack_require__(/*! ./about.scss */ "./src/app/pages/about/about.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], AboutPage);



/***/ }),

/***/ "./src/app/pages/map/map-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/map/map-routing.module.ts ***!
  \*************************************************/
/*! exports provided: MapPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageRoutingModule", function() { return MapPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map */ "./src/app/pages/map/map.ts");




const routes = [
    {
        path: '',
        component: _map__WEBPACK_IMPORTED_MODULE_3__["MapPage"]
    }
];
let MapPageRoutingModule = class MapPageRoutingModule {
};
MapPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MapPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/map/map.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.module.ts ***!
  \*****************************************/
/*! exports provided: MapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModule", function() { return MapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map */ "./src/app/pages/map/map.ts");
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-routing.module */ "./src/app/pages/map/map-routing.module.ts");






let MapModule = class MapModule {
};
MapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _map_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapPageRoutingModule"]
        ],
        declarations: [
            _map__WEBPACK_IMPORTED_MODULE_4__["MapPage"],
        ]
    })
], MapModule);



/***/ }),

/***/ "./src/app/pages/map/map.scss":
/*!************************************!*\
  !*** ./src/app/pages/map/map.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map-canvas {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  opacity: 0;\n  -webkit-transition: opacity 150ms ease-in;\n  transition: opacity 150ms ease-in;\n}\n\n.show-map {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2J1ZWxlL2dpdC9TYXJkZWduYUNsaW1hMi4wL3NhcmRlZ25hMi9zcmMvYXBwL3BhZ2VzL21hcC9tYXAuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFwL21hcC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLDZCQUFBO0VBRUEsVUFBQTtFQUNBLHlDQUFBO0VBQUEsaUNBQUE7QUNGRjs7QURLQTtFQUNFLFVBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcC9tYXAuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtY2FudmFzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xufVxuXG4uc2hvdy1tYXAge1xuICBvcGFjaXR5OiAxO1xufVxuIiwiLm1hcC1jYW52YXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW47XG59XG5cbi5zaG93LW1hcCB7XG4gIG9wYWNpdHk6IDE7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/map/map.ts":
/*!**********************************!*\
  !*** ./src/app/pages/map/map.ts ***!
  \**********************************/
/*! exports provided: MapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPage", function() { return MapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/conference-data */ "./src/app/providers/conference-data.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let MapPage = class MapPage {
    constructor(confData, platform) {
        this.confData = confData;
        this.platform = platform;
    }
    ngAfterViewInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const googleMaps = yield getGoogleMaps('AIzaSyB8pf6ZdFQj5qw7rc_HSGrhUwQKfIe9ICw');
            this.confData.getMap().subscribe((mapData) => {
                const mapEle = this.mapElement.nativeElement;
                const map = new googleMaps.Map(mapEle, {
                    center: mapData.find((d) => d.center),
                    zoom: 16
                });
                mapData.forEach((markerData) => {
                    const infoWindow = new googleMaps.InfoWindow({
                        content: `<h5>${markerData.name}</h5>`
                    });
                    const marker = new googleMaps.Marker({
                        position: markerData,
                        map,
                        title: markerData.name
                    });
                    marker.addListener('click', () => {
                        infoWindow.open(map, marker);
                    });
                });
                googleMaps.event.addListenerOnce(map, 'idle', () => {
                    mapEle.classList.add('show-map');
                });
            });
        });
    }
};
MapPage.ctorParameters = () => [
    { type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapCanvas', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], MapPage.prototype, "mapElement", void 0);
MapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-map',
        template: __webpack_require__(/*! raw-loader!./map.html */ "./node_modules/raw-loader/index.js!./src/app/pages/map/map.html"),
        styles: [__webpack_require__(/*! ./map.scss */ "./src/app/pages/map/map.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
], MapPage);

function getGoogleMaps(apiKey) {
    const win = window;
    const googleModule = win.google;
    if (googleModule && googleModule.maps) {
        return Promise.resolve(googleModule.maps);
    }
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.31`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        script.onload = () => {
            const googleModule2 = win.google;
            if (googleModule2 && googleModule2.maps) {
                resolve(googleModule2.maps);
            }
            else {
                reject('google maps not available');
            }
        };
    });
}


/***/ }),

/***/ "./src/app/pages/schedule-filter/schedule-filter.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/schedule-filter/schedule-filter.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.md {\n  --background: #eee;\n}\n\n.md ion-toolbar {\n  --background: white;\n  --color: #424242;\n}\n\n.md ion-toolbar ion-button {\n  text-transform: capitalize;\n  letter-spacing: 0;\n}\n\n.md ion-content {\n  --background: #eee;\n}\n\n.md ion-list {\n  background: transparent;\n}\n\n.md ion-checkbox {\n  --background-checked: transparent;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  --checkmark-color: var(--ion-color-primary);\n}\n\n.ios ion-list-header {\n  height: 50px;\n  font-size: 22px;\n  letter-spacing: 0;\n  text-transform: capitalize;\n}\n\n.ios ion-label {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2J1ZWxlL2dpdC9TYXJkZWduYUNsaW1hMi4wL3NhcmRlZ25hMi9zcmMvYXBwL3BhZ2VzL3NjaGVkdWxlLWZpbHRlci9zY2hlZHVsZS1maWx0ZXIuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2NoZWR1bGUtZmlsdGVyL3NjaGVkdWxlLWZpbHRlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7QUNBRjs7QURJRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJRTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURLRTtFQUNFLGtCQUFBO0FDSEo7O0FETUU7RUFDRSx1QkFBQTtBQ0pKOztBRE9FO0VBQ0UsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkNBQUE7QUNMSjs7QURZRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQ1RKOztBRFlFO0VBQ0UsK0JBQUE7QUNWSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NjaGVkdWxlLWZpbHRlci9zY2hlZHVsZS1maWx0ZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNvbnRlbnQubWQge1xuICAtLWJhY2tncm91bmQ6ICNlZWU7XG59XG5cbi5tZCB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC0tY29sb3I6ICM0MjQyNDI7XG4gIH1cblxuICBpb24tdG9vbGJhciBpb24tYnV0dG9uIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgfVxuXG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNlZWU7XG4gIH1cblxuICBpb24tbGlzdCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICBpb24tY2hlY2tib3gge1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1jaGVja21hcmstY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxufVxuXG4uaW9zIHtcbiAgLy8gVE9ETyB0aGlzIG5lZWRzIHRvIGJlIGFkZGVkIHRvIElvbmljOlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy9wdWxsLzE2NTc0XG4gIGlvbi1saXN0LWhlYWRlciB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgfVxuXG4gIGlvbi1sYWJlbCB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxufSIsImlvbi1jb250ZW50Lm1kIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZWVlO1xufVxuXG4ubWQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiAjNDI0MjQyO1xufVxuLm1kIGlvbi10b29sYmFyIGlvbi1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4ubWQgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNlZWU7XG59XG4ubWQgaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5tZCBpb24tY2hlY2tib3gge1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5pb3MgaW9uLWxpc3QtaGVhZGVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5pb3MgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/schedule-filter/schedule-filter.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/schedule-filter/schedule-filter.ts ***!
  \**********************************************************/
/*! exports provided: ScheduleFilterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleFilterPage", function() { return ScheduleFilterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/conference-data */ "./src/app/providers/conference-data.ts");




let ScheduleFilterPage = class ScheduleFilterPage {
    constructor(confData, config, modalCtrl, navParams) {
        this.confData = confData;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.tracks = [];
    }
    ionViewWillEnter() {
        this.ios = this.config.get('mode') === `ios`;
    }
    // TODO use the ionViewDidEnter event
    ngAfterViewInit() {
        // passed in array of track names that should be excluded (unchecked)
        const excludedTrackNames = this.navParams.get('excludedTracks');
        this.confData.getTracks().subscribe((tracks) => {
            tracks.forEach(track => {
                this.tracks.push({
                    name: track.name,
                    icon: track.icon,
                    isChecked: (excludedTrackNames.indexOf(track.name) === -1)
                });
            });
        });
    }
    selectAll(check) {
        // set all to checked or unchecked
        this.tracks.forEach(track => {
            track.isChecked = check;
        });
    }
    applyFilters() {
        // Pass back a new array of track names to exclude
        const excludedTrackNames = this.tracks.filter(c => !c.isChecked).map(c => c.name);
        this.dismiss(excludedTrackNames);
    }
    dismiss(data) {
        // using the injected ModalController this page
        // can "dismiss" itself and pass back data
        this.modalCtrl.dismiss(data);
    }
};
ScheduleFilterPage.ctorParameters = () => [
    { type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Config"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
];
ScheduleFilterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-schedule-filter',
        template: __webpack_require__(/*! raw-loader!./schedule-filter.html */ "./node_modules/raw-loader/index.js!./src/app/pages/schedule-filter/schedule-filter.html"),
        styles: [__webpack_require__(/*! ./schedule-filter.scss */ "./src/app/pages/schedule-filter/schedule-filter.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Config"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
], ScheduleFilterPage);



/***/ }),

/***/ "./src/app/pages/schedule/schedule-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/schedule/schedule-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SchedulePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePageRoutingModule", function() { return SchedulePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule */ "./src/app/pages/schedule/schedule.ts");




const routes = [
    {
        path: '',
        component: _schedule__WEBPACK_IMPORTED_MODULE_3__["SchedulePage"]
    }
];
let SchedulePageRoutingModule = class SchedulePageRoutingModule {
};
SchedulePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SchedulePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/schedule/schedule.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/schedule/schedule.module.ts ***!
  \***************************************************/
/*! exports provided: ScheduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleModule", function() { return ScheduleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedule */ "./src/app/pages/schedule/schedule.ts");
/* harmony import */ var _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../schedule-filter/schedule-filter */ "./src/app/pages/schedule-filter/schedule-filter.ts");
/* harmony import */ var _schedule_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./schedule-routing.module */ "./src/app/pages/schedule/schedule-routing.module.ts");








let ScheduleModule = class ScheduleModule {
};
ScheduleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _schedule_routing_module__WEBPACK_IMPORTED_MODULE_7__["SchedulePageRoutingModule"]
        ],
        declarations: [
            _schedule__WEBPACK_IMPORTED_MODULE_5__["SchedulePage"],
            _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_6__["ScheduleFilterPage"]
        ],
        entryComponents: [
            _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_6__["ScheduleFilterPage"]
        ]
    })
], ScheduleModule);



/***/ }),

/***/ "./src/app/pages/schedule/schedule.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/schedule/schedule.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item-sliding[track=ionic] ion-label {\n  border-left: 2px solid var(--ion-color-primary);\n  padding-left: 10px;\n}\n\nion-item-sliding[track=angular] ion-label {\n  border-left: 2px solid #ac282b;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=communication] ion-label {\n  border-left: 2px solid #8e8d93;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=tooling] ion-label {\n  border-left: 2px solid #fe4c52;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=services] ion-label {\n  border-left: 2px solid #fd8b2d;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=design] ion-label {\n  border-left: 2px solid #fed035;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=workshop] ion-label {\n  border-left: 2px solid #69bb7b;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=food] ion-label {\n  border-left: 2px solid #3bc7c4;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=documentation] ion-label {\n  border-left: 2px solid #b16be3;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=navigation] ion-label {\n  border-left: 2px solid #6600cc;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2J1ZWxlL2dpdC9TYXJkZWduYUNsaW1hMi4wL3NhcmRlZ25hMi9zcmMvYXBwL3BhZ2VzL3NjaGVkdWxlL3NjaGVkdWxlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NjaGVkdWxlL3NjaGVkdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0U7RUFDRSwrQ0FBQTtFQUNBLGtCQUFBO0FDYko7O0FEV0U7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDUko7O0FETUU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDSEo7O0FEQ0U7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FESkU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDT0o7O0FEVEU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDWUo7O0FEZEU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDaUJKOztBRG5CRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUNzQko7O0FEeEJFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQzJCSjs7QUQ3QkU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDZ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2NoZWR1bGUvc2NoZWR1bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjYXRlZ29yaWVzOiAoXG4gIGlvbmljOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSksXG4gIGFuZ3VsYXI6ICNhYzI4MmIsXG4gIGNvbW11bmljYXRpb246ICM4ZThkOTMsXG4gIHRvb2xpbmc6ICNmZTRjNTIsXG4gIHNlcnZpY2VzOiAjZmQ4YjJkLFxuICBkZXNpZ246ICNmZWQwMzUsXG4gIHdvcmtzaG9wOiAjNjliYjdiLFxuICBmb29kOiAjM2JjN2M0LFxuICBkb2N1bWVudGF0aW9uOiAjYjE2YmUzLFxuICBuYXZpZ2F0aW9uOiAjNjYwMGNjXG4pO1xuXG5AZWFjaCAkdHJhY2ssICR2YWx1ZSBpbiBtYXAtcmVtb3ZlKCRjYXRlZ29yaWVzKSB7XG4gIGlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9JyN7JHRyYWNrfSddIGlvbi1sYWJlbCB7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkdmFsdWU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG59XG4iLCJpb24taXRlbS1zbGlkaW5nW3RyYWNrPWlvbmljXSBpb24tbGFiZWwge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPWFuZ3VsYXJdIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2FjMjgyYjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPWNvbW11bmljYXRpb25dIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzhlOGQ5MztcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPXRvb2xpbmddIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZlNGM1MjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPXNlcnZpY2VzXSBpb24tbGFiZWwge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmZDhiMmQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz1kZXNpZ25dIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZlZDAzNTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPXdvcmtzaG9wXSBpb24tbGFiZWwge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM2OWJiN2I7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz1mb29kXSBpb24tbGFiZWwge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMzYmM3YzQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz1kb2N1bWVudGF0aW9uXSBpb24tbGFiZWwge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNiMTZiZTM7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz1uYXZpZ2F0aW9uXSBpb24tbGFiZWwge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM2NjAwY2M7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/schedule/schedule.ts":
/*!********************************************!*\
  !*** ./src/app/pages/schedule/schedule.ts ***!
  \********************************************/
/*! exports provided: SchedulePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePage", function() { return SchedulePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../schedule-filter/schedule-filter */ "./src/app/pages/schedule-filter/schedule-filter.ts");
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/conference-data */ "./src/app/providers/conference-data.ts");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/user-data */ "./src/app/providers/user-data.ts");







let SchedulePage = class SchedulePage {
    constructor(alertCtrl, confData, loadingCtrl, modalCtrl, router, toastCtrl, user) {
        this.alertCtrl = alertCtrl;
        this.confData = confData;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.user = user;
        this.dayIndex = 0;
        this.queryText = '';
        this.segment = 'all';
        this.excludeTracks = [];
        this.shownSessions = [];
        this.groups = [];
    }
    ngOnInit() {
        this.updateSchedule();
    }
    updateSchedule() {
        // Close any open sliding items when the schedule updates
        if (this.scheduleList) {
            this.scheduleList.closeSlidingItems();
        }
        this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data) => {
            this.shownSessions = data.shownSessions;
            this.groups = data.groups;
        });
    }
    presentFilter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_4__["ScheduleFilterPage"],
                componentProps: { excludedTracks: this.excludeTracks }
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data) {
                this.excludeTracks = data;
                this.updateSchedule();
            }
        });
    }
    addFavorite(slidingItem, sessionData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.user.hasFavorite(sessionData.name)) {
                // woops, they already favorited it! What shall we do!?
                // prompt them to remove it
                this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
            }
            else {
                // remember this session as a user favorite
                this.user.addFavorite(sessionData.name);
                // create an alert instance
                const alert = yield this.alertCtrl.create({
                    header: 'Favorite Added',
                    buttons: [{
                            text: 'OK',
                            handler: () => {
                                // close the sliding item
                                slidingItem.close();
                            }
                        }]
                });
                // now present the alert on top of all other content
                yield alert.present();
            }
        });
    }
    removeFavorite(slidingItem, sessionData, title) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: title,
                message: 'Would you like to remove this session from your favorites?',
                buttons: [
                    {
                        text: 'Cancel',
                        handler: () => {
                            // they clicked the cancel button, do not remove the session
                            // close the sliding item and hide the option buttons
                            slidingItem.close();
                        }
                    },
                    {
                        text: 'Remove',
                        handler: () => {
                            // they want to remove this session from their favorites
                            this.user.removeFavorite(sessionData.name);
                            this.updateSchedule();
                            // close the sliding item and hide the option buttons
                            slidingItem.close();
                        }
                    }
                ]
            });
            // now present the alert on top of all other content
            yield alert.present();
        });
    }
    openSocial(network, fab) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: `Posting to ${network}`,
                duration: (Math.random() * 1000) + 500
            });
            yield loading.present();
            yield loading.onWillDismiss();
            fab.close();
        });
    }
};
SchedulePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__["ConferenceData"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserData"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scheduleList', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"])
], SchedulePage.prototype, "scheduleList", void 0);
SchedulePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-schedule',
        template: __webpack_require__(/*! raw-loader!./schedule.html */ "./node_modules/raw-loader/index.js!./src/app/pages/schedule/schedule.html"),
        styles: [__webpack_require__(/*! ./schedule.scss */ "./src/app/pages/schedule/schedule.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__["ConferenceData"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserData"]])
], SchedulePage);



/***/ }),

/***/ "./src/app/pages/session-detail/session-detail-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/session-detail/session-detail-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SessionDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionDetailPageRoutingModule", function() { return SessionDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _session_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session-detail */ "./src/app/pages/session-detail/session-detail.ts");




const routes = [
    {
        path: '',
        component: _session_detail__WEBPACK_IMPORTED_MODULE_3__["SessionDetailPage"]
    }
];
let SessionDetailPageRoutingModule = class SessionDetailPageRoutingModule {
};
SessionDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SessionDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/session-detail/session-detail.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/session-detail/session-detail.module.ts ***!
  \***************************************************************/
/*! exports provided: SessionDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionDetailModule", function() { return SessionDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _session_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session-detail */ "./src/app/pages/session-detail/session-detail.ts");
/* harmony import */ var _session_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session-detail-routing.module */ "./src/app/pages/session-detail/session-detail-routing.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let SessionDetailModule = class SessionDetailModule {
};
SessionDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _session_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["SessionDetailPageRoutingModule"]
        ],
        declarations: [
            _session_detail__WEBPACK_IMPORTED_MODULE_3__["SessionDetailPage"],
        ]
    })
], SessionDetailModule);



/***/ }),

/***/ "./src/app/pages/session-detail/session-detail.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/session-detail/session-detail.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".session-track-ionic {\n  color: var(--ion-color-primary);\n}\n\n.session-track-angular {\n  color: var(--ion-color-angular);\n}\n\n.session-track-communication {\n  color: var(--ion-color-communication);\n}\n\n.session-track-tooling {\n  color: var(--ion-color-tooling);\n}\n\n.session-track-services {\n  color: var(--ion-color-services);\n}\n\n.session-track-design {\n  color: var(--ion-color-design);\n}\n\n.session-track-workshop {\n  color: var(--ion-color-workshop);\n}\n\n.session-track-food {\n  color: var(--ion-color-food);\n}\n\n.session-track-documentation {\n  color: var(--ion-color-documentation);\n}\n\n.session-track-navigation {\n  color: var(--ion-color-navigation);\n}\n\n.show-favorite {\n  position: relative;\n}\n\n.icon-heart-empty {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n}\n\n.icon-heart {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n}\n\n.show-favorite .icon-heart {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n.show-favorite .icon-heart-empty {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2J1ZWxlL2dpdC9TYXJkZWduYUNsaW1hMi4wL3NhcmRlZ25hMi9zcmMvYXBwL3BhZ2VzL3Nlc3Npb24tZGV0YWlsL3Nlc3Npb24tZGV0YWlsLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Nlc3Npb24tZGV0YWlsL3Nlc3Npb24tZGV0YWlsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsK0JBQUE7QUNDRjs7QURFQTtFQUNFLHFDQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7QUNDRjs7QURFQTtFQUNFLHFDQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQ0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsK0NBQUE7RUFBQSx1Q0FBQTtFQUFBLCtCQUFBO0VBQUEsNERBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsK0NBQUE7RUFBQSx1Q0FBQTtFQUFBLCtCQUFBO0VBQUEsNERBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO1VBQUEsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO1VBQUEsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nlc3Npb24tZGV0YWlsL3Nlc3Npb24tZGV0YWlsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Vzc2lvbi10cmFjay1pb25pYyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5zZXNzaW9uLXRyYWNrLWFuZ3VsYXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWFuZ3VsYXIpO1xufVxuXG4uc2Vzc2lvbi10cmFjay1jb21tdW5pY2F0aW9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb21tdW5pY2F0aW9uKTtcbn1cblxuLnNlc3Npb24tdHJhY2stdG9vbGluZyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdG9vbGluZyk7XG59XG5cbi5zZXNzaW9uLXRyYWNrLXNlcnZpY2VzIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZXJ2aWNlcyk7XG59XG5cbi5zZXNzaW9uLXRyYWNrLWRlc2lnbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGVzaWduKTtcbn1cblxuLnNlc3Npb24tdHJhY2std29ya3Nob3Age1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdvcmtzaG9wKTtcbn1cblxuLnNlc3Npb24tdHJhY2stZm9vZCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZm9vZCk7XG59XG5cbi5zZXNzaW9uLXRyYWNrLWRvY3VtZW50YXRpb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRvY3VtZW50YXRpb24pO1xufVxuXG4uc2Vzc2lvbi10cmFjay1uYXZpZ2F0aW9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1uYXZpZ2F0aW9uKTtcbn1cblxuLnNob3ctZmF2b3JpdGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pY29uLWhlYXJ0LWVtcHR5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDVweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cblxuLmljb24taGVhcnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogNXB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xufVxuXG4uc2hvdy1mYXZvcml0ZSAuaWNvbi1oZWFydCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5zaG93LWZhdm9yaXRlIC5pY29uLWhlYXJ0LWVtcHR5IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cbiIsIi5zZXNzaW9uLXRyYWNrLWlvbmljIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLnNlc3Npb24tdHJhY2stYW5ndWxhciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYW5ndWxhcik7XG59XG5cbi5zZXNzaW9uLXRyYWNrLWNvbW11bmljYXRpb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbW11bmljYXRpb24pO1xufVxuXG4uc2Vzc2lvbi10cmFjay10b29saW5nIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10b29saW5nKTtcbn1cblxuLnNlc3Npb24tdHJhY2stc2VydmljZXMge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlcnZpY2VzKTtcbn1cblxuLnNlc3Npb24tdHJhY2stZGVzaWduIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kZXNpZ24pO1xufVxuXG4uc2Vzc2lvbi10cmFjay13b3Jrc2hvcCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd29ya3Nob3ApO1xufVxuXG4uc2Vzc2lvbi10cmFjay1mb29kIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1mb29kKTtcbn1cblxuLnNlc3Npb24tdHJhY2stZG9jdW1lbnRhdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZG9jdW1lbnRhdGlvbik7XG59XG5cbi5zZXNzaW9uLXRyYWNrLW5hdmlnYXRpb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW5hdmlnYXRpb24pO1xufVxuXG4uc2hvdy1mYXZvcml0ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmljb24taGVhcnQtZW1wdHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogNXB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xufVxuXG4uaWNvbi1oZWFydCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG5cbi5zaG93LWZhdm9yaXRlIC5pY29uLWhlYXJ0IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnNob3ctZmF2b3JpdGUgLmljb24taGVhcnQtZW1wdHkge1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/session-detail/session-detail.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/session-detail/session-detail.ts ***!
  \********************************************************/
/*! exports provided: SessionDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionDetailPage", function() { return SessionDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/conference-data */ "./src/app/providers/conference-data.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/user-data */ "./src/app/providers/user-data.ts");





let SessionDetailPage = class SessionDetailPage {
    constructor(dataProvider, userProvider, route) {
        this.dataProvider = dataProvider;
        this.userProvider = userProvider;
        this.route = route;
        this.isFavorite = false;
        this.defaultHref = '';
    }
    sessionClick(item) {
        console.log('Clicked', item);
    }
    toggleFavorite() {
        if (this.userProvider.hasFavorite(this.session.name)) {
            this.userProvider.removeFavorite(this.session.name);
            this.isFavorite = false;
        }
        else {
            this.userProvider.addFavorite(this.session.name);
            this.isFavorite = true;
        }
    }
    ionViewWillEnter() {
        this.dataProvider.load().subscribe((data) => {
            if (data &&
                data.schedule &&
                data.schedule[0] &&
                data.schedule[0].groups) {
                const sessionId = this.route.snapshot.paramMap.get('sessionId');
                for (const group of data.schedule[0].groups) {
                    if (group && group.sessions) {
                        for (const session of group.sessions) {
                            if (session && session.id === sessionId) {
                                this.session = session;
                                this.isFavorite = this.userProvider.hasFavorite(this.session.name);
                                break;
                            }
                        }
                    }
                }
            }
        });
    }
    ionViewDidEnter() {
        this.defaultHref = `/app/tabs/schedule`;
    }
};
SessionDetailPage.ctorParameters = () => [
    { type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
SessionDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-session-detail',
        template: __webpack_require__(/*! raw-loader!./session-detail.html */ "./node_modules/raw-loader/index.js!./src/app/pages/session-detail/session-detail.html"),
        styles: [__webpack_require__(/*! ./session-detail.scss */ "./src/app/pages/session-detail/session-detail.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"],
        _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], SessionDetailPage);



/***/ }),

/***/ "./src/app/pages/speaker-detail/speaker-detail-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/speaker-detail/speaker-detail-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SpeakerDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerDetailPageRoutingModule", function() { return SpeakerDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _speaker_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./speaker-detail */ "./src/app/pages/speaker-detail/speaker-detail.ts");




const routes = [
    {
        path: '',
        component: _speaker_detail__WEBPACK_IMPORTED_MODULE_3__["SpeakerDetailPage"]
    }
];
let SpeakerDetailPageRoutingModule = class SpeakerDetailPageRoutingModule {
};
SpeakerDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SpeakerDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/speaker-detail/speaker-detail.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/speaker-detail/speaker-detail.module.ts ***!
  \***************************************************************/
/*! exports provided: SpeakerDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerDetailModule", function() { return SpeakerDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _speaker_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./speaker-detail */ "./src/app/pages/speaker-detail/speaker-detail.ts");
/* harmony import */ var _speaker_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./speaker-detail-routing.module */ "./src/app/pages/speaker-detail/speaker-detail-routing.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let SpeakerDetailModule = class SpeakerDetailModule {
};
SpeakerDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _speaker_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["SpeakerDetailPageRoutingModule"]
        ],
        declarations: [
            _speaker_detail__WEBPACK_IMPORTED_MODULE_3__["SpeakerDetailPage"],
        ]
    })
], SpeakerDetailModule);



/***/ }),

/***/ "./src/app/pages/speaker-detail/speaker-detail.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/speaker-detail/speaker-detail.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".speaker-detail img {\n  max-width: 140px;\n  border-radius: 50%;\n}\n\n.speaker-detail p {\n  color: #60646b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2J1ZWxlL2dpdC9TYXJkZWduYUNsaW1hMi4wL3NhcmRlZ25hMi9zcmMvYXBwL3BhZ2VzL3NwZWFrZXItZGV0YWlsL3NwZWFrZXItZGV0YWlsLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NwZWFrZXItZGV0YWlsL3NwZWFrZXItZGV0YWlsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zcGVha2VyLWRldGFpbC9zcGVha2VyLWRldGFpbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwZWFrZXItZGV0YWlsIGltZyB7XG4gIG1heC13aWR0aDogMTQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnNwZWFrZXItZGV0YWlsIHAge1xuICBjb2xvcjogIzYwNjQ2Yjtcbn1cbiIsIi5zcGVha2VyLWRldGFpbCBpbWcge1xuICBtYXgtd2lkdGg6IDE0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5zcGVha2VyLWRldGFpbCBwIHtcbiAgY29sb3I6ICM2MDY0NmI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/speaker-detail/speaker-detail.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/speaker-detail/speaker-detail.ts ***!
  \********************************************************/
/*! exports provided: SpeakerDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerDetailPage", function() { return SpeakerDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/conference-data */ "./src/app/providers/conference-data.ts");




let SpeakerDetailPage = class SpeakerDetailPage {
    constructor(dataProvider, router, route) {
        this.dataProvider = dataProvider;
        this.router = router;
        this.route = route;
    }
    ionViewWillEnter() {
        this.dataProvider.load().subscribe((data) => {
            const speakerId = this.route.snapshot.paramMap.get('speakerId');
            if (data && data.speakers) {
                for (const speaker of data.speakers) {
                    if (speaker && speaker.id === speakerId) {
                        this.speaker = speaker;
                        break;
                    }
                }
            }
        });
    }
};
SpeakerDetailPage.ctorParameters = () => [
    { type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
SpeakerDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-speaker-detail',
        template: __webpack_require__(/*! raw-loader!./speaker-detail.html */ "./node_modules/raw-loader/index.js!./src/app/pages/speaker-detail/speaker-detail.html"),
        styles: [__webpack_require__(/*! ./speaker-detail.scss */ "./src/app/pages/speaker-detail/speaker-detail.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], SpeakerDetailPage);



/***/ }),

/***/ "./src/app/pages/speaker-list/speaker-list-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/speaker-list/speaker-list-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SpeakerListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerListPageRoutingModule", function() { return SpeakerListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _speaker_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./speaker-list */ "./src/app/pages/speaker-list/speaker-list.ts");




const routes = [
    {
        path: '',
        component: _speaker_list__WEBPACK_IMPORTED_MODULE_3__["SpeakerListPage"]
    }
];
let SpeakerListPageRoutingModule = class SpeakerListPageRoutingModule {
};
SpeakerListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SpeakerListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/speaker-list/speaker-list.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/speaker-list/speaker-list.module.ts ***!
  \***********************************************************/
/*! exports provided: SpeakerListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerListModule", function() { return SpeakerListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _speaker_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./speaker-list */ "./src/app/pages/speaker-list/speaker-list.ts");
/* harmony import */ var _speaker_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./speaker-list-routing.module */ "./src/app/pages/speaker-list/speaker-list-routing.module.ts");






let SpeakerListModule = class SpeakerListModule {
};
SpeakerListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _speaker_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["SpeakerListPageRoutingModule"]
        ],
        declarations: [_speaker_list__WEBPACK_IMPORTED_MODULE_4__["SpeakerListPage"]],
    })
], SpeakerListModule);



/***/ }),

/***/ "./src/app/pages/speaker-list/speaker-list.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/speaker-list/speaker-list.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroll {\n  background: #ededed;\n}\n\n.speaker-card {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.speaker-card ion-card-header {\n  padding: 0;\n}\n\n.speaker-card ion-card-header .item {\n  padding: 4px 16px;\n}\n\n.speaker-card ion-card-content {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2J1ZWxlL2dpdC9TYXJkZWduYUNsaW1hMi4wL3NhcmRlZ25hMi9zcmMvYXBwL3BhZ2VzL3NwZWFrZXItbGlzdC9zcGVha2VyLWxpc3Quc2NzcyIsInNyYy9hcHAvcGFnZXMvc3BlYWtlci1saXN0L3NwZWFrZXItbGlzdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtVQUFBLGNBQUE7RUFFQSxVQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zcGVha2VyLWxpc3Qvc3BlYWtlci1saXN0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsIHtcbiAgYmFja2dyb3VuZDogI2VkZWRlZDtcbn1cblxuLnNwZWFrZXItY2FyZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNwZWFrZXItY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc3BlYWtlci1jYXJkIGlvbi1jYXJkLWhlYWRlciAuaXRlbSB7XG4gIHBhZGRpbmc6IDRweCAxNnB4O1xufVxuXG4uc3BlYWtlci1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBmbGV4OiAxIDEgYXV0bztcblxuICBwYWRkaW5nOiAwO1xufVxuIiwiLnNjcm9sbCB7XG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XG59XG5cbi5zcGVha2VyLWNhcmQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zcGVha2VyLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNwZWFrZXItY2FyZCBpb24tY2FyZC1oZWFkZXIgLml0ZW0ge1xuICBwYWRkaW5nOiA0cHggMTZweDtcbn1cblxuLnNwZWFrZXItY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgZmxleDogMSAxIGF1dG87XG4gIHBhZGRpbmc6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/speaker-list/speaker-list.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/speaker-list/speaker-list.ts ***!
  \****************************************************/
/*! exports provided: SpeakerListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerListPage", function() { return SpeakerListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/conference-data */ "./src/app/providers/conference-data.ts");






let SpeakerListPage = class SpeakerListPage {
    constructor(actionSheetCtrl, confData, inAppBrowser, router) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.confData = confData;
        this.inAppBrowser = inAppBrowser;
        this.router = router;
        this.speakers = [];
    }
    ionViewDidEnter() {
        this.confData.getSpeakers().subscribe((speakers) => {
            this.speakers = speakers;
        });
    }
    goToSpeakerTwitter(speaker) {
        this.inAppBrowser.create(`https://twitter.com/${speaker.twitter}`, '_blank');
    }
    openSpeakerShare(speaker) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Share ' + speaker.name,
                buttons: [
                    {
                        text: 'Copy Link',
                        handler: () => {
                            console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);
                            if (window['cordova'] &&
                                window['cordova'].plugins.clipboard) {
                                window['cordova'].plugins.clipboard.copy('https://twitter.com/' + speaker.twitter);
                            }
                        }
                    },
                    {
                        text: 'Share via ...'
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    openContact(speaker) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const mode = 'ios'; // this.config.get('mode');
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Contact ' + speaker.name,
                buttons: [
                    {
                        text: `Email ( ${speaker.email} )`,
                        icon: mode !== 'ios' ? 'mail' : null,
                        handler: () => {
                            window.open('mailto:' + speaker.email);
                        }
                    },
                    {
                        text: `Call ( ${speaker.phone} )`,
                        icon: mode !== 'ios' ? 'call' : null,
                        handler: () => {
                            window.open('tel:' + speaker.phone);
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
};
SpeakerListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__["ConferenceData"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SpeakerListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-speaker-list',
        template: __webpack_require__(/*! raw-loader!./speaker-list.html */ "./node_modules/raw-loader/index.js!./src/app/pages/speaker-list/speaker-list.html"),
        styles: [__webpack_require__(/*! ./speaker-list.scss */ "./src/app/pages/speaker-list/speaker-list.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__["ConferenceData"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SpeakerListPage);



/***/ }),

/***/ "./src/app/pages/tabs-page/tabs-page-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs-page */ "./src/app/pages/tabs-page/tabs-page.ts");
/* harmony import */ var _schedule_schedule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../schedule/schedule */ "./src/app/pages/schedule/schedule.ts");





const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'schedule',
                children: [
                    {
                        path: '',
                        component: _schedule_schedule__WEBPACK_IMPORTED_MODULE_4__["SchedulePage"],
                    },
                    {
                        path: 'session/:sessionId',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../session-detail/session-detail.module */ "./src/app/pages/session-detail/session-detail.module.ts")).then(m => m.SessionDetailModule)
                    }
                ]
            },
            {
                path: 'speakers',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../speaker-list/speaker-list.module */ "./src/app/pages/speaker-list/speaker-list.module.ts")).then(m => m.SpeakerListModule)
                    },
                    {
                        path: 'session/:sessionId',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../session-detail/session-detail.module */ "./src/app/pages/session-detail/session-detail.module.ts")).then(m => m.SessionDetailModule)
                    },
                    {
                        path: 'speaker-details/:speakerId',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../speaker-detail/speaker-detail.module */ "./src/app/pages/speaker-detail/speaker-detail.module.ts")).then(m => m.SpeakerDetailModule)
                    }
                ]
            },
            {
                path: 'map',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../map/map.module */ "./src/app/pages/map/map.module.ts")).then(m => m.MapModule)
                    }
                ]
            },
            {
                path: 'about',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../about/about.module */ "./src/app/pages/about/about.module.ts")).then(m => m.AboutModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/app/tabs/schedule',
                pathMatch: 'full'
            }
        ]
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tabs-page/tabs-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page.module.ts ***!
  \*****************************************************/
/*! exports provided: TabsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs-page */ "./src/app/pages/tabs-page/tabs-page.ts");
/* harmony import */ var _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-page-routing.module */ "./src/app/pages/tabs-page/tabs-page-routing.module.ts");
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../about/about.module */ "./src/app/pages/about/about.module.ts");
/* harmony import */ var _map_map_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../map/map.module */ "./src/app/pages/map/map.module.ts");
/* harmony import */ var _schedule_schedule_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../schedule/schedule.module */ "./src/app/pages/schedule/schedule.module.ts");
/* harmony import */ var _session_detail_session_detail_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../session-detail/session-detail.module */ "./src/app/pages/session-detail/session-detail.module.ts");
/* harmony import */ var _speaker_detail_speaker_detail_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../speaker-detail/speaker-detail.module */ "./src/app/pages/speaker-detail/speaker-detail.module.ts");
/* harmony import */ var _speaker_list_speaker_list_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../speaker-list/speaker-list.module */ "./src/app/pages/speaker-list/speaker-list.module.ts");












let TabsModule = class TabsModule {
};
TabsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _about_about_module__WEBPACK_IMPORTED_MODULE_6__["AboutModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _map_map_module__WEBPACK_IMPORTED_MODULE_7__["MapModule"],
            _schedule_schedule_module__WEBPACK_IMPORTED_MODULE_8__["ScheduleModule"],
            _session_detail_session_detail_module__WEBPACK_IMPORTED_MODULE_9__["SessionDetailModule"],
            _speaker_detail_speaker_detail_module__WEBPACK_IMPORTED_MODULE_10__["SpeakerDetailModule"],
            _speaker_list_speaker_list_module__WEBPACK_IMPORTED_MODULE_11__["SpeakerListModule"],
            _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [
            _tabs_page__WEBPACK_IMPORTED_MODULE_4__["TabsPage"],
        ]
    })
], TabsModule);



/***/ }),

/***/ "./src/app/pages/tabs-page/tabs-page.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page.ts ***!
  \**********************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabsPage = class TabsPage {
};
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./tabs-page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tabs-page/tabs-page.html")
    })
], TabsPage);



/***/ }),

/***/ "./src/app/providers/conference-data.ts":
/*!**********************************************!*\
  !*** ./src/app/providers/conference-data.ts ***!
  \**********************************************/
/*! exports provided: ConferenceData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConferenceData", function() { return ConferenceData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _user_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-data */ "./src/app/providers/user-data.ts");






let ConferenceData = class ConferenceData {
    constructor(http, user) {
        this.http = http;
        this.user = user;
    }
    load() {
        if (this.data) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.data);
        }
        else {
            return this.http
                .get('assets/data/data.json')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.processData, this));
        }
    }
    processData(data) {
        // just some good 'ol JS fun with objects and arrays
        // build up the data by linking speakers to sessions
        this.data = data;
        // loop through each day in the schedule
        this.data.schedule.forEach((day) => {
            // loop through each timeline group in the day
            day.groups.forEach((group) => {
                // loop through each session in the timeline group
                group.sessions.forEach((session) => {
                    session.speakers = [];
                    if (session.speakerNames) {
                        session.speakerNames.forEach((speakerName) => {
                            const speaker = this.data.speakers.find((s) => s.name === speakerName);
                            if (speaker) {
                                session.speakers.push(speaker);
                                speaker.sessions = speaker.sessions || [];
                                speaker.sessions.push(session);
                            }
                        });
                    }
                });
            });
        });
        return this.data;
    }
    getTimeline(dayIndex, queryText = '', excludeTracks = [], segment = 'all') {
        return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            const day = data.schedule[dayIndex];
            day.shownSessions = 0;
            queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
            const queryWords = queryText.split(' ').filter(w => !!w.trim().length);
            day.groups.forEach((group) => {
                group.hide = true;
                group.sessions.forEach((session) => {
                    // check if this session should show or not
                    this.filterSession(session, queryWords, excludeTracks, segment);
                    if (!session.hide) {
                        // if this session is not hidden then this group should show
                        group.hide = false;
                        day.shownSessions++;
                    }
                });
            });
            return day;
        }));
    }
    filterSession(session, queryWords, excludeTracks, segment) {
        let matchesQueryText = false;
        if (queryWords.length) {
            // of any query word is in the session name than it passes the query test
            queryWords.forEach((queryWord) => {
                if (session.name.toLowerCase().indexOf(queryWord) > -1) {
                    matchesQueryText = true;
                }
            });
        }
        else {
            // if there are no query words then this session passes the query test
            matchesQueryText = true;
        }
        // if any of the sessions tracks are not in the
        // exclude tracks then this session passes the track test
        let matchesTracks = false;
        session.tracks.forEach((trackName) => {
            if (excludeTracks.indexOf(trackName) === -1) {
                matchesTracks = true;
            }
        });
        // if the segment is 'favorites', but session is not a user favorite
        // then this session does not pass the segment test
        let matchesSegment = false;
        if (segment === 'favorites') {
            if (this.user.hasFavorite(session.name)) {
                matchesSegment = true;
            }
        }
        else {
            matchesSegment = true;
        }
        // all tests must be true if it should not be hidden
        session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
    }
    getSpeakers() {
        return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            return data.speakers.sort((a, b) => {
                const aName = a.name.split(' ').pop();
                const bName = b.name.split(' ').pop();
                return aName.localeCompare(bName);
            });
        }));
    }
    getTracks() {
        return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            return data.tracks.sort();
        }));
    }
    getMap() {
        return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            return data.map;
        }));
    }
};
ConferenceData.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"] }
];
ConferenceData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"]])
], ConferenceData);



/***/ })

}]);
//# sourceMappingURL=pages-tabs-page-tabs-page-module-es2015.js.map