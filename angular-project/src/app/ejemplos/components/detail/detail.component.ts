import { Component, OnInit, Input } from '@angular/core';
import { Pais } from 'modelo/pais';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() paises: Pais[];

  constructor() {
    console.log(this.paises);
   }

  paisesLocales: Pais[];

  ngOnInit(): void {
    console.log(this.paises);
    this.paisesLocales = this.paises;
  }

}
