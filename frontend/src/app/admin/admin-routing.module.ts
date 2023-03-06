import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'trainers',
        loadChildren: () =>
          import('../admin/trainers/trainers.module').then((m) => m.TrainersModule)
      },
      {
        path: 'users',
        loadChildren: () =>
        import('../admin/users/users.module').then((m) => m.UsersModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
