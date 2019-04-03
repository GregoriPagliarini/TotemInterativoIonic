import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ModalMatriculaPage } from './modal-matricula.page';
var routes = [
    {
        path: '',
        component: ModalMatriculaPage
    }
];
var ModalMatriculaPageModule = /** @class */ (function () {
    function ModalMatriculaPageModule() {
    }
    ModalMatriculaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ModalMatriculaPage]
        })
    ], ModalMatriculaPageModule);
    return ModalMatriculaPageModule;
}());
export { ModalMatriculaPageModule };
//# sourceMappingURL=modal-matricula.module.js.map