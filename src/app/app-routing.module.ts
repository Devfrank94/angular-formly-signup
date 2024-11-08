import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Pages
import {Error404Component} from './pages/error404/error404.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',title: "Home", loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'signup', title: "Registrati", loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) },
  { path: "404", component: Error404Component, title: "Errore 404 Pagina non trovata" },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
