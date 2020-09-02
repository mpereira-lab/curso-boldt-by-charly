import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorComponent} from './components/contenedor/contenedor.component';
import { ResolveService } from './services/resolve.service';

const routes: Routes = [
  {
    // aca se pone la data del resolve bajo una clave
    path: 'contenedor', component: ContenedorComponent,
     resolve: {
       claveDeRetorno: ResolveService
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EjemplosRoutingModule { }
