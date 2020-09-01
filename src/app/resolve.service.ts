import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PeticionesService } from './peticiones.service';

@Injectable()
export class ResolveService implements Resolve<any>{

  constructor(
    private peticionesService: PeticionesService
  ) {
    console.log('ResolveService');
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<any> | any {
      console.log('.resolve()');
      // precarga de

      const datosDesdeLocalStorage = localStorage.getItem('datosJson');

      if (datosDesdeLocalStorage) {
        return JSON.parse(datosDesdeLocalStorage);
      }

      return this.peticionesService.findUsers();
  }
}
