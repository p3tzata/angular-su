import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../home/home.component'


const routes: Routes = [
  { path: '', component: HomeComponent, outlet: 'postCommentRouterOutlet'},
  { path: 'home', loadChildren: () => import('../home/home.module').then(m => m.AuthModule)},
  { path: 'auth', loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule) },
  { path: 'post', loadChildren: () => import('../post/post.module').then(m => m.PostModule) },
  { path: 'comment', loadChildren: () => import('../comment/comment.module').then(m => m.CommentModule) },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
