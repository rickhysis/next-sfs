"use strict";
exports.id = 151;
exports.ids = [151];
exports.modules = {

/***/ 2445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ serviceAccount)
/* harmony export */ });
const serviceAccount = {
    "type": "service_account",
    "project_id": "sfs-db-e2130",
    "private_key_id": "b050d50d655d260624a01b4eba40b591187cc1e3",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCrmlhunliKHxhu\no3DYhhIi75shknpkbbaXpMl+NEklSupxEtNO2ITwGSl2LmlGgOqc6jEwkwDlsUJ1\nZ/vh6ZuBRhM6ty/H+a0bd/w0aWxFGKNWvlavMO2cJK7knm9FPIur1/7Gy/B/HV9U\nSJ8GQSYieeKakJO6RKGx04tprm+1UKNeKCBTzP6Ompd5v/jr6Idw7btRCZt2wlqZ\nDZvK9KTNPU0gq8pZXVO7wnZ4KzdTUq0Pq6CH4j57XaZ2HAkNfpMYwfvr+uk/TqTC\ntTEECbfhkLJtjXcCvnB5CrPLXSCUo+O/jknRZPaetutfE5E7YFXS2FOXBoqWh4H0\ng21kIrLtAgMBAAECggEAR7Tf1h2J3vGeeoEGgxwHER0xpGY6iaPE5HoiDoAXvqMe\n8zAMJ4rXhiLljfJX4HO3VemQs30CJ3kaTcgtW1oMNolLOMJaj4Q3/130gAw7h2YD\nvxgbTeqyp4g2oubHlVV3AdBosLaAoQVrk+MivHDV2Bs5gx/98xyBurasr3UKTeec\np5tig2jJrKKE/G+b8YmM2TkBn3T0vQhZTWfn/+N3nUdV8QolZwYV8mzTax3GI5Ov\ngzBl0CA1d486gp0hBoGT16XSsu0VZJOYatmCIFmIXv/PUDiGsqhMLNAEemfaLxmo\nfx89v9eCPe7EEx9lXZ+wLvj8vutCEaqK3TWPOqQ4SwKBgQDTqWxGJ1irVLnipTUX\nwcMUh1KyFyYqv+HtdBYTSOdHxHCx3JMRxEWOqdowCTVuAQxlrWxzkVxU8ic5igm8\nytklmsA7b73sPSS2FIfqOENs2DXe2OpkNjQFc6m06qmghj254jzPLul76zGty2rB\nSw+fFplD4x32nvfmplTysKPnbwKBgQDPjLlTwEuJ+AFTO5R/8aWe3BIv78RuXQqc\nXQ7HJ9gcyH6mwE62BPq1BPGZ6pmMFEtOpyzZTX8uScGndMoe3qsSFdJaruDiUE8B\nsdsiwr9iA38fNKv7nAngBj3lUixxp/SnhcbOoWen82syaC6delyPPj9fWUUn+Y5D\n0wgUB7F9YwKBgDbAl+KZ4QUI+MDZTZ+knssbqlepR1U9p7reEavRawqUlTZdQaoR\n5JBf/bH5X9nh6YwPzYMjsgfDUERBIf21V3Cz1FBLuox20J1NOE9tWHu6fkz0PcXI\ng7J5VggXv+NndmY0UNijYQCOOZ6khSwVN6hGl0UJZkHao3QFyOmyqeN/AoGAQSss\nnfGJRn8K23mfvTTBDkqHo2mjwguQ41wM4dfO8eq6ad2EWX7iwagVvIB/Sg6tPrsb\nR/gfcQdTuSLgvCSqjnkvna2/ixAwXpXb+uQvd7UlW0UMo2pxZ1hOYw0US3OzTE6j\nCAqCI6g5BpDT4jqjiY7AE05SeqTPWNiQdsmbn4UCgYB4WjNlj1uqpR8u1DBXiOOa\nM32LGb2P0OxIqgAyP7WARi2zYD5pP4PuUa5MDzpAX1APv17TG+7UCuKh6OGBDrA9\nLueZReaXyYE2/vQmlPaUcMzeVVFLbjLb0wtUZ6wsYCq3iOAB92ryF6BMsc/awmIZ\nS1ynt8siy7FJvLnz8MwCpA==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-fxvjy@sfs-db-e2130.iam.gserviceaccount.com",
    "client_id": "117275909660514879635",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fxvjy%40sfs-db-e2130.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
};


/***/ }),

/***/ 6151:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ customInitApp)
/* harmony export */ });
/* harmony import */ var firebase_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3263);
/* harmony import */ var _firebaseAdminConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2445);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_admin_app__WEBPACK_IMPORTED_MODULE_0__]);
firebase_admin_app__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const firebaseAdminConfig = {
    credential: (0,firebase_admin_app__WEBPACK_IMPORTED_MODULE_0__.cert)(_firebaseAdminConfig__WEBPACK_IMPORTED_MODULE_1__/* .serviceAccount */ .I)
};
function customInitApp() {
    if ((0,firebase_admin_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length <= 0) {
        (0,firebase_admin_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseAdminConfig);
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;