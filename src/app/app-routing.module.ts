import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AuthGuard} from "./admin/auth/auth.guard";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'admin',
                loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
            }
        ]
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
