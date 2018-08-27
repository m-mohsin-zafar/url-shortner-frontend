import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UrlGeneratorComponent } from './url-generator/url-generator.component';
import { UrlDetailsComponent } from './url-details/url-details.component';

import { UrlInfoService } from './url-info.service';
import { AppRoutingModule } from './app-routing.module';
import { UrlDashboardComponent } from './url-dashboard/url-dashboard.component';
import { UrlMainComponent } from './url-main/url-main.component';
import {CommonChecks} from './common-checks';
import { UrlDashboardHeaderComponent } from './url-dashboard-header/url-dashboard-header.component';
import { UrlDashboardAnalyticsComponent } from './url-dashboard-analytics/url-dashboard-analytics.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlGeneratorComponent,
    UrlDetailsComponent,
    UrlDashboardComponent,
    UrlMainComponent,
    UrlDashboardHeaderComponent,
    UrlDashboardAnalyticsComponent,
    AlertDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [
    AlertDialogComponent
  ],
  providers: [UrlInfoService, CommonChecks],
  bootstrap: [AppComponent]
})
export class AppModule { }
