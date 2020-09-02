import { Component, OnInit, Input } from '@angular/core';
import { Recomendaciones } from '../../model/informacion-cliente';

@Component({
  selector: 'app-recomendacion',
  templateUrl: './recomendacion.component.html',
  styleUrls: ['./recomendacion.component.css']
})
export class RecomendacionComponent implements OnInit {

  @Input()
  recomendaciones: Recomendaciones;

  constructor() { }

  ngOnInit(): void {
  }

}
