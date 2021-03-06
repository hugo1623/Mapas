import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { MapaComponent } from './components/mapa/mapa.component';
import { AgmCoreModule } from '@agm/core';

import { MapaEditarComponent } from './components/mapa/mapa-editar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  entryComponents:[
    MapaEditarComponent
  ],
  declarations: [
    AppComponent, 
    MapaComponent, 
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNOu2JQ001PxZY-GVwFvVou0_6h_Sj-14'
//Clave 01:AIzaSyDNOu2JQ001PxZY-GVwFvVou0_6h_Sj-14
//Clave Luis:AIzaSyCZTLv6_STNtje-Br-C7dydWYryyzKoHyc
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
