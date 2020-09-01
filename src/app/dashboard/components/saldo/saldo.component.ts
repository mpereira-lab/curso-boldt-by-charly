import { Component, OnInit, Input } from '@angular/core';
import { Saldos } from '../../model/informacion-cliente';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {

  @Input()
  saldos: Saldos;

  constructor() { }

  ngOnInit(): void {
  }

}
