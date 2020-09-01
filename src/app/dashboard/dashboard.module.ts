import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoComponent } from './components/contacto/contacto.component';
import { DatosEquipoComponent } from './components/datos-equipo/datos-equipo.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoEncontradoComponent } from '../no-encontrado/no-encontrado.component';
import { RecomendacionComponent } from './components/recomendacion/recomendacion.component';
import { SaldoComponent } from './components/saldo/saldo.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ClienteService } from './services/cliente.service';
import { ClienteDataService } from './services/cliente-data-service.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { ResolveService } from '../resolve.service';
import { DashBoardRoutingModule } from './dashboard-routing.module';
@NgModule({
  declarations: [
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
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashBoardRoutingModule
  ],
  exports: [
    ContactoComponent,
    DatosEquipoComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    NoEncontradoComponent,
    RecomendacionComponent,
    SaldoComponent,
    TopbarComponent
  ], providers: [
    ClienteService,
    ClienteDataService,
    // ResolveService
  ]
})
export class DashboardModule { }
