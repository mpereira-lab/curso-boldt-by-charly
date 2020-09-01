import { Component, OnInit } from '@angular/core';
import { PeticionesService} from '../peticiones.service';
import { DatosService } from '../datos.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent implements OnInit {

  constructor(
    private peticionesService: PeticionesService,
    private datosService: DatosService,
    private activatedRouter: ActivatedRoute,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
   const datosCargadoEnElResolve = this.activatedRouter.snapshot.data.claveDeRetorno; //tipo any
   this.datosService.updateDatos(datosCargadoEnElResolve);
  }

  public findUserList(page: number): void {
    this.peticionesService.findUsersPage(page).subscribe(
      data => this.datosService.updateDatos(data),
      error => {
        // this.datosService.updateDatos({error: error});
        this.alertService.error(error.error, true);
      }
    );
  }

}
