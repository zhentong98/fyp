import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from '@angular/common';

import {UserListComponent} from './user-list/user-list.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {EditUserComponent} from './edit-user/edit-user.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: UserListComponent
            },
            {
                path: 'create',
                component: CreateUserComponent
            },
            {
                path: 'edit/:id',
                component: EditUserComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        UserListComponent,
        CreateUserComponent,
        EditUserComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class UserModule {
}
