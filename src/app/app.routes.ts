import { Routes } from '@angular/router';
import { TreinamentoComponent } from './components/treinamento/treinamento.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'treinamento',
        component: TreinamentoComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
];
