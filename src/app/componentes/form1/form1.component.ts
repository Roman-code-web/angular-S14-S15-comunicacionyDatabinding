import { Component } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  hidden=true;
  nombreBtn="Mostrar Definición";
  MostrarOcultar(){
    if(this.nombreBtn=="Mostrar Definición"){
      this.hidden=false;
      this.nombreBtn="Ocultar Definición"
    }else{ 
      this.nombreBtn="Mostrar Definición";
      this.hidden=true;
    }
  }
}
