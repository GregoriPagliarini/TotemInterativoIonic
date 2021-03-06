import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { TrocaSenhaPage } from './troca-senha.page';
var routes = [
    {
        path: '',
        component: TrocaSenhaPage
    }
];
var TrocaSenhaPageModule = /** @class */ (function () {
    function TrocaSenhaPageModule() {
    }
    TrocaSenhaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                HttpClientModule,
            ],
            declarations: [TrocaSenhaPage]
        })
    ], TrocaSenhaPageModule);
    return TrocaSenhaPageModule;
}());
export { TrocaSenhaPageModule };
//# sourceMappingURL=troca-senha.module.js.map