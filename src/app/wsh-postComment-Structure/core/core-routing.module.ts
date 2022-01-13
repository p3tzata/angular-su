import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './component/home/home.component'


const routes: Routes = [
  { path: '', component: HomeComponent, outlet: 'postCommentRouterOutlet'}, 
  { path: 'auth', loadChildren: () => import('./component/auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
