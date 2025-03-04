import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import {FormsModule} from '@angular/forms';

//componentes para un trabajador si esta en activo o no, con sus ultimos 3 sueldos y datos

@Component({
  selector: 'app-root',
  imports: [CommonModule, NgIf,NgFor, FormsModule], //IMPORTANTE RECUERDA IMPORTAR EN LOS COMPONENTES TODOS LOS MODULOS Y LAS DIRECTUVAS QUE NECESITES!!!
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
//creas un objeto con las propiedades de los datos del trabajador
export class AppComponent {
  nombre =  'Rodriguez Pablo';
  edad = 40;
  email = 'rpablo@gmail.com';
  sueldos = [1700, 1600, 1900];
  activo = true;

  //funcion que devuelve un texto en funcion de si el trabajador esta activo o no, if(....)
  estaActivo(){
    if(this.activo)
      return 'Trabajador Activo';
    else
    return 'Trabajador inactivo';
  }

  //devuelve la suma de sus ultimos 3 meses de trabajo que se almacenan en sueldos
  ultimos3Sueldos(){
    let suma = 0;
    for(let x=0; x<this.sueldos.length; x++)
      suma += this.sueldos[x];
    return suma;
  }
}
