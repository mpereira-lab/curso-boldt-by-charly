import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { AlertService } from './services/alert.service';

@NgModule({
  declarations: [
    // componentes
    AlertComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AlertService
  ],
  exports: [
      AlertComponent
  ]
})
export class BoldtCommonsModule { }
