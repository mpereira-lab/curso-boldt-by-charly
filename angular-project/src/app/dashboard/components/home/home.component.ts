import { Component, OnInit } from '@angular/core';
import { InformacionCliente } from '../../model/informacion-cliente' ;
import {ClienteDataService} from '../../services/cliente-data-service.service';
import { AuthenticationService } from 'src/app/login/services/authentication.service';
import { Router } from '@angular/router';
declare function initJsFromTs(): any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ClienteDataService]
})
export class HomeComponent implements OnInit {

  informacionCliente: InformacionCliente;

  constructor(
    private clienteDataService: ClienteDataService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.clienteDataService.getInformacionCliente().subscribe(
      data => {
          this.informacionCliente = data;
      }, error => {
        console.log(error);
      }
    );
}

  ngOnInit(): void {
    this.clienteDataService.getInformacionCliente().subscribe(
      data => {
          this.informacionCliente = data;
      }, error => {
        console.log(error);
      }
    );

    // invoca una funcion llamda initJsFromTs() ubicada en el archivo init.js. Permite que funcione el menu laterar izquierdo.
    initJsFromTs()
  }

  executeLogout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
