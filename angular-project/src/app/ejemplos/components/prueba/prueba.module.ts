import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from '../master/master.component';
import { DetailComponent } from '../detail/detail.component';
import { TemplateDrivenComponent } from '../formularios/template-driven/template-driven.component';
import { ReactiveComponent } from '../formularios/reactive/reactive.component';
import { TemplateDriverv2Component } from '../formularios/template-driverv2/template-driverv2.component';
import { PruebaComponent } from '../prueba/prueba.component';
import { Prueba2Component } from '../prueba2/prueba2.component';
import { ContenedorComponent } from '../contenedor/contenedor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoldtCommonsModule } from '../commons/commons.module';
import { PeticionesService } from '../peticiones.service';
import { DatosService } from '../datos.service';
import { ResolveService } from '../resolve.service';

@NgModule({
  declarations: [
    MasterComponent,
    DetailComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    TemplateDriverv2Component,
    PruebaComponent,
    Prueba2Component,
    ContenedorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BoldtCommonsModule
  ],
  providers: [
    DatosService,
    PeticionesService,
    ResolveService
  ]
})
export class PruebaModule { }
