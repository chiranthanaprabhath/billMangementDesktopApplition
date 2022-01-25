import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./views/main-page/main-page.component";
import {LoginPageComponent} from "./views/login-page/login-page.component";

const routes: Routes = [
  {path: 'main-page', component: MainPageComponent},
  {path: '', component: LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
