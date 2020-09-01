import { Component, OnInit } from '@angular/core';
import { InformacionCliente } from '../../model/informacion-cliente' ;
import {ClienteDataService} from '../../services/cliente-data-service.service';
import { AuthenticationService } from 'src/app/login/services/authentication.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

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
  }

  executeLogout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
