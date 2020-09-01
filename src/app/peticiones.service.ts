import { Injectable } from '@angular/core';
import { DatosService } from './datos.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map } from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';
@Injectable()
export class PeticionesService {

  constructor(
    private datosService: DatosService,
    private httpClient: HttpClient
  ) { }

  // metodos de acceso al backend
  findUsers(): Observable<any> {
    // guardar en local storage
    return this.httpClient.get('https://reqres.in/api/users?page=2')
      .pipe(
        map((data: any) => {
          //localStage
          localStorage.setItem('datosJson', JSON.stringify(data));
          return data;
        }
      ));
  }

  findUsersPage(page: number): Observable<any> {
    return this.httpClient.get(`https://reqres.in/apu/users?page=${page}`);
  }
}
