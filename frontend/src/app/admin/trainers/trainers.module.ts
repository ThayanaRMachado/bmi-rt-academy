import { TrainersRoutingModule } from './trainers-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { TrainerFormComponent } from './trainer-form/trainer-form.component';



@NgModule({
  declarations: [
    TrainerListComponent,
    TrainerFormComponent
  ],
  imports: [
    CommonModule,

    TrainersRoutingModule
  ],
  exports: [
    TrainerListComponent,
    TrainerFormComponent
  ]
})
export class TrainersModule { }
