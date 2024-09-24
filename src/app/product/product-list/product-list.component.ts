import { Component } from '@angular/core';
import { IProductos } from '../productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})


export class ProductListComponent {
  imagewidth:number=150;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFiter:string='';
  mostrarImagen():void{
    this.muestraImg=!this.muestraImg;
  }

  productos:IProductos[]=[
    {
      "ProductoId":1,
      "Modelo":"Sentra",
      "Descripcion":"2 puertas",
      "Year": "Enero 3 2019",
      "Precio":160000,
      "Marca":"KIA",  
      "Color":"Verde",
      "ImagenUrl":"https://lumiere-a.akamaihd.net/v1/images/og_cars_lightningmcqueenday_18244_4435f27a.jpeg?region=40,0,1120,630&width=960"
    },
    {
      "ProductoId":2,
      "Modelo":"A4",
      "Descripcion":"4 puertas",
      "Year": "febrero 2 2020",
      "Precio":180000,
      "Marca":"BMW",
      "Color":"Azul",
      "ImagenUrl":"https://pm1.aminoapps.com/6964/fe7473bad6642f61d9bb14c84df92ad126061b4er1-480-475v2_uhq.jpg"
    },
    {
      "ProductoId":3,
      "Modelo":"A4",
      "Descripcion":"6 puertas",
      "Year": "febrero 2 2022",
      "Precio":2000000,
      "Marca":"Toyota",
      "Color":"Rojo",
      "ImagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS27lUz6fqx4tCcpZaQ0_poUYaSdeCJfVksCw&s"
    },

  ]


}
