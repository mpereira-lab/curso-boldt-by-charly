import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoComponent } from '../contacto/contacto.component';
import { DatosEquipoComponent } from '../datos-equipo/datos-equipo.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NoEncontradoComponent } from '../no-encontrado/no-encontrado.component';
import { RecomendacionComponent } from '../recomendacion/recomendacion.component';
import { SaldoComponent } from '../saldo/saldo.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { ClienteService } from '../cliente.service';
import { ClienteDataService } from '../cliente-data-service.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ResolveService } from '../resolve.service';

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
    ResolveService
  ]
})
export class DashboardModule { }
