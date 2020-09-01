import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from '../alert.service';

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
