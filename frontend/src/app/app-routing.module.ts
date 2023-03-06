import { SecurityModule } from './security/security.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('../app/admin/admin.module').then((m) => m.AdminModule)
  },
  {
    path: 'members',
    loadChildren: () =>
    import('../app/members/members.module').then((m) => m.MembersModule)
  },
  {
    path: 'security',
    loadChildren: () =>
    import('../app/security/security.module').then((m) => m.SecurityModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
