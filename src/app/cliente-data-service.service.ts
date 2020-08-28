import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InformacionCliente } from './model/informacion-cliente';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class ClienteDataService {
  public datosVacios = {
    saldos: {datosSaldos: []},
    equipo: {datosEquipo: []},
    cliente: {contactos: []},
    recomendaciones: { recomendaciones: []}
  };

  private informacionClienteSubject = new BehaviorSubject<InformacionCliente>(null);

  private currentInformacionCliente: Observable<InformacionCliente> = this.informacionClienteSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  public getInformacionCliente(): Observable<InformacionCliente> {
    // return this.httpClient.get<InformacionCliente>('assets/datos.json');
    return this.currentInformacionCliente;
  }

  public updateCliente(nuevaInformacionCliente: InformacionCliente): void{
    this.informacionClienteSubject.next(nuevaInformacionCliente);
  }

  public clear(): void {
    // clear by calling subject.next() without parameters
    this.informacionClienteSubject.next(this.datosVacios);
  }
}
