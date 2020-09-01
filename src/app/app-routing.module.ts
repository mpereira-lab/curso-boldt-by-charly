import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorComponent } from './ejemplos/components/contenedor/contenedor.component';
import { HomeComponent } from './dashboard/components/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { ResolveService } from './ejemplos/services/resolve.service';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';

// acá se definen las rutas y los componentes asociados
const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
     path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    // aca se pone la data del resolve bajo una clave
    path: 'contenedor', component: ContenedorComponent,
     resolve: {
       claveDeRetorno: ResolveService
    }
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
