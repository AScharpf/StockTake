import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewStockEntryComponent } from './new-stock-entry/new-stock-entry.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { OneStatisticComponent } from './one-statistic/one-statistic.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NewStockEntryComponent,
    LandingPageComponent,
    StatisticsComponent,
    OneStatisticComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
