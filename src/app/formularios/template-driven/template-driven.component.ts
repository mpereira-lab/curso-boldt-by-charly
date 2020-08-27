import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login';
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  // loginModel: any = {};

  loginModel: LoginModel;
  paises: string[] = ['arg','bra','per'];
  pais: string;
  constructor() {
    this.loginModel = new LoginModel('email', '12', false);
  }

  ngOnInit(): void {
  }

  public submitForm(formulario: any): void{
    console.log(formulario.value);
  }

  public log(email: string): void {
    console.log(email);
  }
}
