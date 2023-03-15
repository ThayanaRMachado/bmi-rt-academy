import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { FilterComponent } from './filter/filter.component';



@NgModule({
  declarations: [
    MessageComponent,
    FilterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MessageComponent,
    FilterComponent
  ]
})
export class SharedModule { }
