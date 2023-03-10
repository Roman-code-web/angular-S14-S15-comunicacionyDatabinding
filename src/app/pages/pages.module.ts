import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { FormsModule } from '@angular/forms';
import { DataBindingComponent } from './data-binding/data-binding.component';



@NgModule({
  declarations: [
    HomeComponent,
    DataBindingComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule,
    FormsModule
  ]
})
export class PagesModule { }
