import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DatosService {

  private datos: BehaviorSubject<any> = new BehaviorSubject({});
  private datoActual: Observable<any> = this.datos.asObservable();

  constructor() { }

  public getDatoActual(): Observable<any> {
    return this.datoActual;
  }

  // next, update de la data en el datos
  public updateDatos(dato: any): void {
    this.datos.next(dato);
  }

  public clearDatos(): void {
    this.datos.next(null);
  }

}
