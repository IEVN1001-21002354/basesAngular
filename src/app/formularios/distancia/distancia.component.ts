import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-distancia',
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent implements OnInit {
  formulario2!:FormGroup;
  resultado:number=0;
  constructor(){}
  ngOnInit(): void {
    this.formulario2= new FormGroup({
    numero1: new FormControl('',Validators.required),
    numero2: new FormControl('',Validators.required)

  });

  
}


sumarNumeros() :void{
    const numero1=this.formulario2.get('numero1')?.value;
    const numero2=this.formulario2.get('numero2')?.value;
    this.resultado=numero1+numero2;
  }
}