import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Angular Material
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSliderModule,
    MatCardModule,
    MatSnackBarModule
  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatSliderModule,
    MatCardModule,
    MatSnackBarModule

  ]
})
export class MaterialModule { }
