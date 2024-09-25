import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejemp01',
  templateUrl: './ejemp01.component.html',
  styleUrl: './ejemp01.component.css'
})

export class Ejemp01Component implements OnInit{
  formulario!:FormGroup;
  resultado:number=0;
  constructor(){}
  ngOnInit(): void {
    this.formulario= new FormGroup({
    numero1: new FormControl('',Validators.required),
    numero2: new FormControl('',Validators.required),
    numero3: new FormControl('',Validators.required),
    numero4: new FormControl('',Validators.required),

  });

  
}


sumarNumeros() :void{
    const numero1=this.formulario.get('numero1')?.value;
    const numero2=this.formulario.get('numero2')?.value;
    const numero3=this.formulario.get('numero3')?.value;
    const numero4=this.formulario.get('numero4')?.value;
    this.resultado=Math.sqrt(Math.pow((numero1-numero2), 2)+Math.pow((numero1-numero2),2));
  }
}