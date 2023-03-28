import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';

import { TrainersRoutingModule } from './trainers-routing.module';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { TrainerFormComponent } from './trainer-form/trainer-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InputTextModule } from 'primeng/inputtext';
import { TrainerService } from './trainer.service';



@NgModule({
  declarations: [
    TrainerListComponent,
    TrainerFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    ButtonModule,
    SharedModule,
    TableModule,
    TooltipModule,
    InputTextModule,
    InputMaskModule,
    TrainersRoutingModule,
  ],
  providers: [TrainerService],
})
export class TrainersModule { }
