import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { FilterComponent } from './filter/filter.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    MessageComponent,
    FilterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MessageComponent,
    FilterComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
