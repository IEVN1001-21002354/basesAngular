//Hacer referencia a componentes

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProductoFilterPipe } from './product/productos-fiter.pipe';
import { Ejemp01Component } from './formularios/ejemp01/ejemp01.component';
import { DistanciaComponent } from './formularios/distancia/distancia.component';
import { ZodiacoComponent } from './formularios/zodiaco/zodiaco.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductoFilterPipe,
    Ejemp01Component,
    DistanciaComponent,
    ZodiacoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
