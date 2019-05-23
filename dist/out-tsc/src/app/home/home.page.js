import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
var HomePage = /** @class */ (function () {
    function HomePage(nav, modalmatriculaController) {
        this.nav = nav;
        this.modalmatriculaController = modalmatriculaController;
    }
    HomePage.prototype.pushPage = function () {
        this.nav.navigateForward('/troca-senha/');
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            ModalController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map