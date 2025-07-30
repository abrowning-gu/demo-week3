import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { Account } from './components/account/account';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

    {
        path:'',
        component:Home,
        title:"Home",
    },
    {
        path:'login',
        component:Login,
        title:"Login",
    },
    {
        path:'account',
        component:Account,
        title:"Account",
        canActivate:[authGuard],
    },
];
