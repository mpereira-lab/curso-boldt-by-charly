import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
  // providers: [DatosService]
})
export class PruebaComponent implements OnInit {

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
