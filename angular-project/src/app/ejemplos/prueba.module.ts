import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './components/master/master.component';
import { DetailComponent } from './components/detail/detail.component';
import { TemplateDrivenComponent } from './components/formularios/template-driven/template-driven.component';
import { ReactiveComponent } from './components/formularios/reactive/reactive.component';
import { TemplateDriverv2Component } from './components/formularios/template-driverv2/template-driverv2.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { Prueba2Component } from './components/prueba2/prueba2.component';
import { ContenedorComponent } from './components/contenedor/contenedor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoldtCommonsModule } from '../commons/commons.module';
import { PeticionesService } from './services/peticiones.service';
import { DatosService } from './services/datos.service';
import { ResolveService } from './services/resolve.service';

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
