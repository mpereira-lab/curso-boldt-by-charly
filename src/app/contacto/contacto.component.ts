import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../model/informacion-cliente';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  @Input()
  cliente: Cliente;

  constructor() { }

  ngOnInit(): void {
  }

}
