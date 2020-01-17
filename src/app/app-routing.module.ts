import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from "./content/content.component";
import { DetailsComponent } from "./details/details.component";
import { ReportsComponent } from "./reports/reports.component";
import { TableComponent } from "./table/table.component";

const routes: Routes = [
  {
    path:'',
    component:ContentComponent
  },
  {
  	path:'Detail',
  	component:DetailsComponent
  },
  {
  	path:'Report',
  	component:ReportsComponent
  },
  {
    path:'Table',
    component:TableComponent
  }
  ]
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
