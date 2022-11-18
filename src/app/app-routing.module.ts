import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"reactive", component:ReactiveComponent},
  {path:"template", component:TemplateDrivenComponent},
  {path:"**", redirectTo:"",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
