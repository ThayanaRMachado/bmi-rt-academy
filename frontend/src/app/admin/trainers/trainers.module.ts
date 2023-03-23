import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';

import { TrainersRoutingModule } from './trainers-routing.module';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { TrainerFormComponent } from './trainer-form/trainer-form.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TrainerListComponent,
    TrainerFormComponent
  ],
  imports: [
    CommonModule,

    ButtonModule,
    SharedModule,
    TableModule,
    TooltipModule,
    TrainersRoutingModule
  ],
  exports: [
    TrainerListComponent,
    TrainerFormComponent
  ]
})
export class TrainersModule { }
