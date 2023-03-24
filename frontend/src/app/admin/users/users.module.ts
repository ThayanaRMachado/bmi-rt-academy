import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';

import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    UserFormComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,

    SharedModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
