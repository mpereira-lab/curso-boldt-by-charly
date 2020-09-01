import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { LoginModule } from './login/login.module';
import {PruebaModule} from './ejemplos/prueba.module';
import {DashboardModule} from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    PruebaModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
