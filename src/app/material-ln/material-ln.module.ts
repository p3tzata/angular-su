import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialLnRoutingModule } from './material-ln-routing.module';
import { MaterialLnComponent } from './index/material-ln.component';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button'
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    MaterialLnComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialLnRoutingModule,
    MatButtonModule,
    MatSliderModule
   ],
  
})
export class MaterialLnModule { }
