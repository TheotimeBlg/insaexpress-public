import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';


import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbListModule } from '@nebular/theme';



import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import { CharteComponent } from './charte/charte.component';
import { DefisComponent } from './defis/defis.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import {OrderModule} from 'ngx-order-pipe';


@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    CharteComponent,
    DefisComponent,
    TeamDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    NoopAnimationsModule,
    LeafletModule.forRoot(),
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbCardModule,
    NbListModule,
    OrderModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
