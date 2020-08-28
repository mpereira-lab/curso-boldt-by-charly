import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenComponent } from './formularios/template-driven/template-driven.component';
import { ReactiveComponent } from './formularios/reactive/reactive.component';
import { TemplateDriverv2Component } from './formularios/template-driverv2/template-driverv2.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DatosEquipoComponent } from './datos-equipo/datos-equipo.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { RecomendacionComponent } from './recomendacion/recomendacion.component';
import { SaldoComponent } from './saldo/saldo.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HttpClientModule} from '@angular/common/http';
import { ClienteDataService } from './cliente-data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    DetailComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    TemplateDriverv2Component,
    LoginComponent,
    RegisterComponent,
    ContactoComponent,
    DatosEquipoComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    NoEncontradoComponent,
    RecomendacionComponent,
    SaldoComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
