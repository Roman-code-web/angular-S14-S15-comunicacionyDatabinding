import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  palabra!:string;
  //variable
  titulohome="Comunicación";
  //constructor
  constructor(public dataservices:DataService){
  }
  ngOnInit(): void {
    this.dataservices.tituloheader=this.titulohome;
  }
}
