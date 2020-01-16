import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from "./content/content.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
  {
    path:'',
    component:ContentComponent
  },
  {
  	path:'Detail',
  	component:DetailsComponent
  }]
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
