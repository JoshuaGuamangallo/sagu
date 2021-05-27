import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { GoogleMapsModule } from '@angular/google-maps';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
const materials =[
  MatMenuModule,
  FlexLayoutModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  GoogleMapsModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDividerModule,
  MatCardModule
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
