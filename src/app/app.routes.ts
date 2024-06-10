import { Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';

import { UserModule } from './user/user.module';

import { AdmModule } from './adm/adm.module';

export const routes: Routes = [
    {path: 'index', component: IndexComponent, pathMatch: "full"},
    {path: '', redirectTo: "index", pathMatch: "full"},
    {path: 'user', loadChildren: () => UserModule, pathMatch: "full"},
    {path: 'adm', loadChildren: () => AdmModule, pathMatch: "full"}
];
