import { Component } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  tituloFrm1="DataBinding Actividad 1";
  hidden=true;
  nombreBtn="Mostrar Definición";
  color="btn-primary";
  MostrarOcultar(){
    if(this.nombreBtn=="Mostrar Definición"){
      this.hidden=false;
      this.nombreBtn="Ocultar Definición"
      this.color="btn__ocultar";
    }else{ 
      this.nombreBtn="Mostrar Definición";
      this.hidden=true;
      this.color="btn-primary";
    }
  }
}
