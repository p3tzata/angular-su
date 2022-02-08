import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialLnRoutingModule } from './material-ln-routing.module';

import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button'
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NavigatorComponent} from './shared/navigator/navigator.component'
import {MatIconModule} from '@angular/material/icon'
import {FlexLayoutModule} from '@angular/flex-layout'
import {MatSidenavModule} from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'

@NgModule({
  declarations: [
    HomeComponent,
    NavigatorComponent,



  ],
  imports: [
    CommonModule,
    MaterialLnRoutingModule,
    MatButtonModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    
   ],
  
})
export class MaterialLnModule { }
