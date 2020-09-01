import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-prueba2',
  templateUrl: './prueba2.component.html',
  styleUrls: ['./prueba2.component.css']
})
export class Prueba2Component implements OnInit {

  datos: any;

  constructor(
    private datosService: DatosService
    ) { }

  ngOnInit(): void {
    this.datosService.getDatoActual().subscribe(
      data => {
        this.datos = data;
      }, error => {
        this.datos = {};
        console.log(error);
      }
    );
  }


}
