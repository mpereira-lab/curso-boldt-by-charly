import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';

// acá se definen las rutas y los componentes asociados
const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/home'
  },
  {
    path: '**', component: NoEncontradoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', useHash: true, enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
