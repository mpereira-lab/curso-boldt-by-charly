import { Component, OnInit } from '@angular/core';
import { Pais } from 'modelo/pais';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor() { }

  paises: Pais [] = [
    {id: 1, pais: 'bra'},
    new Pais(2, 'arg')
  ];

  ngOnInit(): void {
  }

}
