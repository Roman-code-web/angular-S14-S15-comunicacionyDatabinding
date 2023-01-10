import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoComponent } from './hijo/hijo.component';
import { Form2Component } from './form2/form2.component';
import { Form1Component } from './form1/form1.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HijoComponent,
    Form2Component,
    Form1Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HijoComponent,
    Form2Component,
    Form1Component
  ]
})
export class ComponentesModule { }
