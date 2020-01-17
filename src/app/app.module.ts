import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatNativeDateModule, MatDatepickerModule,MatMenuModule,MatFormFieldModule,MatInputModule } from "@angular/material";
import {MatListModule} from '@angular/material/list';
import { ChartsModule } from 'ng2-charts';


import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentService } from './services/content.service';
import { DetailsComponent } from './details/details.component';
import { ReportsComponent } from './reports/reports.component';
import { TableComponent } from './table/table.component';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    DetailsComponent,
    ReportsComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatListModule,
    HttpClientModule,
    ChartsModule,
    MatTableDataSource,
    MatPaginator,
    MatSort
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
