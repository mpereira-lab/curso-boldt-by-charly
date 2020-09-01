import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driverv2',
  templateUrl: './template-driverv2.component.html',
  styleUrls: ['./template-driverv2.component.css']
})
export class TemplateDriverv2Component implements OnInit {

  paises: string[] = ['arg', 'bra', 'per'];
  pais = '';

  valorRadio = 'xyz';
  constructor() { }

  ngOnInit(): void {
  }

}
