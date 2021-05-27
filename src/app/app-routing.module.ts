import { ServiceVetComponent } from './service-vet/service-vet.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:"home",
    component:HomePageComponent,    
  },
  {
    path:"service",
    component:ServiceVetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
