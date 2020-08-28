import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { InformacionCliente } from './model/informacion-cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlSearch = environment.apiUrl;
  private endPoint = '/assets/datos2.json';
  constructor(private http: HttpClient) { }

  /**
   * Busca datos dado el numero de telefono
   * @param querySearch texto buscado
   */
  search(numeroTelefono: string): Observable<InformacionCliente> {
    return this.http.get<InformacionCliente>(this.endPoint );
  }
}
