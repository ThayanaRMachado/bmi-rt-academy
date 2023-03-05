import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberFormComponent } from './member-form/member-form.component';

@NgModule({
  declarations: [
    MemberListComponent,
    MemberFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MemberListComponent,
    MemberFormComponent
  ]
})
export class MembersModule { }
