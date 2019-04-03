import * as tslib_1 from "tslib";
import { ModalMatriculaPage } from './../modal-matricula/modal-matricula.page';
import { Component } from '@angular/core';
import { NavController, ModalController, PopoverController } from '@ionic/angular';
var TrocaSenhaPage = /** @class */ (function () {
    function TrocaSenhaPage(nav, modalmatriculaController, popoverController, httpClient) {
        this.nav = nav;
        this.modalmatriculaController = modalmatriculaController;
        this.popoverController = popoverController;
        this.httpClient = httpClient;
    }
    TrocaSenhaPage.prototype.openModalMatricula = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalmatriculaController.create({
                            component: ModalMatriculaPage
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    TrocaSenhaPage.prototype.ngOnInit = function () {
    };
    var _a;
    TrocaSenhaPage = tslib_1.__decorate([
        Component({
            selector: 'app-troca-senha',
            templateUrl: './troca-senha.page.html',
            styleUrls: ['./troca-senha.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController, ModalController, PopoverController, typeof (_a = typeof HttpClient !== "undefined" && HttpClient) === "function" ? _a : Object])
    ], TrocaSenhaPage);
    return TrocaSenhaPage;
}());
export { TrocaSenhaPage };
//# sourceMappingURL=troca-senha.page.js.map