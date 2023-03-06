import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityComponent } from './security.component';

const routes: Routes = [
  {
    path: '',
    component: SecurityComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('../security/login/login.module').then((m) => m.LoginModule)
      },
      {
        path: '',
        loadChildren: () =>
          import('../security/login/login.module').then((m) => m.LoginModule)
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
