import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { GoogleMapsModule } from '@angular/google-maps';

const materials =[
  MatMenuModule,
  FlexLayoutModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  GoogleMapsModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materials
    
  ],
  exports:[materials]
})
export class ModulesShareModule { }
