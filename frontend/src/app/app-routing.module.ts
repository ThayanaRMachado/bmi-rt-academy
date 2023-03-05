import { UserListComponent } from './admin/users/user-list/user-list.component';
import { TrainerListComponent } from './admin/trainers/trainer-list/trainer-list.component';
import { TrainerFormComponent } from './admin/trainers/trainer-form/trainer-form.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './members/member-form/member-form.component';
import { LoginFormComponent } from './security/login/login-form/login-form.component';

const routes: Routes = [
  {
    path: 'security/login/create',
    component: LoginFormComponent
   },
   {
    path: '',
    redirectTo: 'security/login/create',
    pathMatch: 'full'
   },
  {
    path: 'members/list',
    component: MemberListComponent
   },
   {
    path: 'members/create',
    component: MemberFormComponent
   },
   {
    path: 'members/:memberId',
    component: MemberFormComponent
   },
   {
    path: 'trainers/list',
    component: TrainerListComponent
   },
   {
    path: 'trainers/create',
    component: TrainerFormComponent
   },
   {
    path: 'trainers/:memberId',
    component: TrainerFormComponent
   },
   {
    path: 'users/list',
    component: UserListComponent
   },
   {
    path: 'users/create',
    component: TrainerFormComponent
   },
   {
    path: 'users/:memberId',
    component: TrainerFormComponent
   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
