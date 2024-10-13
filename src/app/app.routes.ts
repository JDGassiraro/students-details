import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

import { authGuardGuard } from './auth/auth-guard.guard';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

export const routes: Routes = [
    {
        /*The path you need to display on the web application and the route the component will need to be routed*/
        path: 'login',
        component: LoginComponent
    },
    {
        /*The path you need to display on the web application and the route the component will need to be routed*/
        path: 'dashboard',
        //Lazy Loading property is LoadChildren. This property expects you to write a function.
        loadChildren: () => import('./dashboard/dashboard.module').then(m=>m.DashboardModule),
        canMatch: [authGuardGuard]
    },
];
