import * as tslib_1 from "tslib";
import { ModalMatriculaPage } from './../modal-matricula/modal-matricula.page';
import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
var TrocaSenhaPage = /** @class */ (function () {
    function TrocaSenhaPage(nav, modalmatriculaController, httpClient) {
        this.nav = nav;
        this.modalmatriculaController = modalmatriculaController;
        this.httpClient = httpClient;
    }
    TrocaSenhaPage.prototype.openDetails = function () {
        this.retornoObservable = this.httpClient.get('https://httpbin.org/get?encontrou=true&nome=Eduardo&sobrenome=Balbinot&matricula=5200192');
    };
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
    TrocaSenhaPage.prototype.ngOnDestroy = function () {
    };
    TrocaSenhaPage = tslib_1.__decorate([
        Component({
            selector: 'app-troca-senha',
            templateUrl: './troca-senha.page.html',
            styleUrls: ['./troca-senha.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController, ModalController,
            HttpClient])
    ], TrocaSenhaPage);
    return TrocaSenhaPage;
}());
export { TrocaSenhaPage };
//# sourceMappingURL=troca-senha.page.js.map