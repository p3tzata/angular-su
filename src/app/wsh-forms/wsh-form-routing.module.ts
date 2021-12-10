import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationSelectionIndexComponent} from './index/registration-selection-index/registration-selection-index.component'
import { RegistrationFormTDComponent} from './td/registration-form-td/registration-form-td.component'
import { RegistrationFormReactiveComponent} from './reactive/registration-form-reactive/registration-form-reactive.component'

const routes: Routes = [
  {path: 'wsh-form',
   children: [
    {path: '', pathMatch: "full", component: RegistrationSelectionIndexComponent},
    {path: 'td', component: RegistrationFormTDComponent},
    {path: 'reactive', component: RegistrationFormReactiveComponent},
   ]


  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WshFormRoutingModule { }
