import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatNativeDateModule, MatDatepickerModule,MatMenuModule,MatFormFieldModule } from "@angular/material";
import {MatListModule} from '@angular/material/list';
import { ChartsModule } from 'ng2-charts';
import { MatCardModule } from '@angular/material';

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
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
         MatSortModule, MatTableModule } from "@angular/material";

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
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatListModule,
    HttpClientModule,
    ChartsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
