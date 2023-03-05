import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [
    UserFormComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserFormComponent,
    UserListComponent
  ]
})
export class UsersModule { }
