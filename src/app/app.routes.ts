import { Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { MealsPageComponent } from './meals/components/meals-page/meals-page.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "meals",
        component: MealsPageComponent
    }
];
