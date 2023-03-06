import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { MembersRoutingModule } from './members-routing.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    MemberListComponent,
    MemberFormComponent
  ],
  imports: [
    CommonModule,

    MembersRoutingModule
  ],
  exports: [
    MemberListComponent,
    MemberFormComponent
  ]
})
export class MembersModule { }
