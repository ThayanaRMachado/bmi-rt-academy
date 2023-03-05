import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { TrainersModule } from './trainers/trainers.module';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
