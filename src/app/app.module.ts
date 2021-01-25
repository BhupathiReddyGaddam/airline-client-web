import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFlightsComponent } from './my-flights/my-flights.component';
import { FlightsService } from 'src/app/service/flights.service';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyFlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    OverlayPanelModule,
    PanelModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
  ],
  providers: [FlightsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
