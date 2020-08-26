import { Component } from '@angular/core';
import { Pais } from '../../modelo/pais';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-boldt-v2';
  saludo = 'hola';
  saludar = false;
  disabled = true;
  array = ['a', 'b', 'c'];
  paises: Pais [] = [
    {id: 1, pais: 'bra'},
    new Pais(2, 'arg')
  ];
  paisSeleccionado: Pais = null;

  public changeSaludar(): void {
    this.saludar = !this.saludar;
  }

  public cambiarPais(pais: Pais): void{
    debugger;
    this.paisSeleccionado = pais;
  }
}
