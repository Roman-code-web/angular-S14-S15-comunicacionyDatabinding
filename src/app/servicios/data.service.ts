import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //1.creo una variable que almacena el titulo;
  tituloheader:string="Comunicación";
  constructor() { }
}
