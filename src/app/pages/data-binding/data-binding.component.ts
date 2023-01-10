import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  //1. creo una variable para enviar al titulo del header
  tituloDataBinding="DataBinding";
  //2. constructor
  constructor(public dataservices:DataService){
  }
  //3. para cambiar cuando inicia
  ngOnInit(): void {
    this.dataservices.tituloheader=this.tituloDataBinding;
  }
}
