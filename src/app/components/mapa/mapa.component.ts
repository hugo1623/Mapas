import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/classes/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];

  lat = -8.1159897;
  lng = -79.0299835;

  constructor() { 

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

  }

  guardarStorage(){

    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

}
