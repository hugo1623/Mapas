import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [AppComponent, MapaComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNOu2JQ001PxZY-GVwFvVou0_6h_Sj-14'
//Clave Fernando:AIzaSyDNOu2JQ001PxZY-GVwFvVou0_6h_Sj-14
//Clave Luis:AIzaSyCZTLv6_STNtje-Br-C7dydWYryyzKoHyc
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
