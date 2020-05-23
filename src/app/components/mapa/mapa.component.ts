import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/classes/marcador.class';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];

  lat = -8.1159897;
  lng = -79.0299835;

  constructor(private snackBar: MatSnackBar) { 

    if( localStorage.getItem('marcadores')){
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
    // const nuevoMarcador = new Marcador(-8.1159897,-79.0299835);
    // this.marcadores.push(nuevoMarcador);
  }

  ngOnInit(): void {
  }
  agregarMarcador(evento){

    const coords: {lat: number, lng:number}= evento.coords;
    
    console.log(evento);
    const nuevoMarcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
    this.snackBar.open('Marcador Agregado', 'Cerrar',{duration: 1000});

  }

  borrarMarcador(i: number){
    this.marcadores.splice(i, 1);
    this.guardarStorage();
    this.snackBar.open('Marcador Borrado', 'Cerrar',{duration: 1000});

  }

  guardarStorage(){

    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

}
