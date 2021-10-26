import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TablePopupComponent } from './table-popup/table-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PiechartPopupComponent } from './piechart-popup/piechart-popup.component';
import { ExportComponent } from './export/export.component';
import {NgxPrintModule} from 'ngx-print';

@NgModule({
  declarations: [
    AppComponent,
    TablePopupComponent,
    PiechartPopupComponent,
    ExportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NgxPrintModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
