import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { PruebaModule} from './ejemplos/prueba.module';
import { DashboardModule} from './dashboard/dashboard.module';
import { DashBoardRoutingModule } from './dashboard/dashboard-routing.module';
import { LoginRoutingModule } from './login/login/login-routing.module';
import { EjemplosRoutingModule } from './ejemplos/ejemplos-routing.module';
import { BoldtCommonsModule } from './commons/commons.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    EjemplosRoutingModule,
    LoginRoutingModule,
    DashBoardRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    BoldtCommonsModule,
    LoginModule,
    PruebaModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
