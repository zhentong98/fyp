import {NgModule} from '@angular/core';

import {LoginComponent} from "./auth/login/login.component";

import {AdminRoutingModule} from "./admin-routing.module";
import {DashboardComponent} from './pages/dashboard/dashboard.component';

import {NzTableModule} from "ng-zorro-antd/table";
import {CommonModule} from "@angular/common";
import {NzDividerModule} from "ng-zorro-antd/divider";

import {PagesComponent} from './pages/pages.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzModalModule} from "ng-zorro-antd/modal";

@NgModule({
    declarations: [
        LoginComponent,
        DashboardComponent,
        PagesComponent
    ],
    imports: [
        AdminRoutingModule,
        NzTableModule,
        CommonModule,
        NzDividerModule,
        NzLayoutModule,
        NzMenuModule,
        NzIconModule,
        NzBreadCrumbModule,
        NzCardModule,
        NzFormModule,
        NzInputModule,
        FormsModule,
        NzButtonModule,
        ReactiveFormsModule,
        NzModalModule
    ]
})
export class AdminModule {

}
