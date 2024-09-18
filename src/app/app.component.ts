import { Component } from '@angular/core';

//Decorador
@Component({
  selector: 'app-root', 
  
  templateUrl: './app.component.html',  //referencia html que contienen el componente
  styleUrl: './app.component.css' //estilo que pertenece el componente
})

//Typescript
export class AppComponent {
  title = 'basesAngular';
//funciones
  duplicarNumero(x:number):number{
    return x*2;
  }
//objetos
alumno={
  matricula:1234,
  nombre:'Axel',
  fechaInscrito:new Date(),
  pago:2220
};

}
