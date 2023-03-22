import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './shared/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,

    AdminRoutingModule
  ]
})
export class AdminModule { }
