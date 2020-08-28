import { Component, OnInit } from '@angular/core';
import { InformacionCliente } from '../model/informacion-cliente' ;
import {ClienteDataService} from '../cliente-data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ClienteDataService]
})
export class HomeComponent implements OnInit {

  informacionCliente: InformacionCliente;

  constructor(
    private clienteDataService: ClienteDataService
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

  public updateClientData() {

  }

}
