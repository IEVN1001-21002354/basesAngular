import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-zodiaco',  // Selector del componente
  templateUrl: './zodiaco.component.html',  // Archivo HTML del componente
  styleUrls: ['./zodiaco.component.css']  // Archivo CSS del componente
})
export class ZodiacoComponent {
  formulario3!: FormGroup;
  signoZodiacoChino: string  = '';
  imagenSignoZodiaco: string = '';
  nombre2:string='';
  edad2:number=0;
  

  constructor() {}

  ngOnInit(): void {
    this.formulario3 = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apaterno: new FormControl('', Validators.required),
      amaterno: new FormControl('', Validators.required),
      dia: new FormControl('', Validators.required),
      mes: new FormControl('', Validators.required),
      ano: new FormControl('', Validators.required),
    });
  }

  calcularsignozodiacal(): void {
    const nombre = this.formulario3.get('nombre')?.value;
    const apaterno = this.formulario3.get('apaterno')?.value;
    const amaterno = this.formulario3.get('amaterno')?.value;
    const dia = this.formulario3.get('dia')?.value;
    const mes = this.formulario3.get('mes')?.value;
    const ano = this.formulario3.get('ano')?.value;
    
    

    this.nombre2 =nombre;
    this.edad2 =2024-ano;

    // Cálculo del signo zodiacal chino
    const signosChinos = [
      'Mono', 'Gallo', 'Perro', 'Cerdo', 'Rata', 
      'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 
      'Caballo', 'Cabra'
    ];

    const imagenzodiaco=[
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR36Cr-dEF7FIwGIw75wLfOweuMcIJSKMahSA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGZgYvLEIUN5caVtJH_n637JUvuakyRtWzw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVnMpehrMnYMoQV3749EB4ZSKiEuiS-zJM_Q&s',
    'https://peopleenespanol.com/thmb/3_4ezJWMT8DtQSEuV5vMg3X8DUE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165969332-2000-eea5e27d3f4145c9b01121f4c61ccaef.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgvu0mENA3H71tXPab8EV_aAspHjp0aVJHWw&s',
    'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Buey.jpg',
    'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Tigre.jpg',
    'https://media.todojujuy.com/p/f8a8a76d966e915d49b528e019a04376/adjuntos/227/imagenes/003/271/0003271961/1200x675/smart/proyecto-nuevo-2023-01-28t200543052jpg.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCY6i3Hwb2td_X84xj6vF6qTXjTl-qpIykSg&s',
    'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Serpiente.jpg',
    'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Caballo.jpg',
    'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Cabra.jpg'
    
    ];

    const indiceSigno = ano % 12;
    this.signoZodiacoChino = signosChinos[indiceSigno];
    this.imagenSignoZodiaco=imagenzodiaco[indiceSigno];
  }
}