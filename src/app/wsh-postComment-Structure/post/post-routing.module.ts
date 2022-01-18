import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostAllComponent } from './post-all/post-all.component';
import { PostCreateComponent } from './post-create/post-create.component';

const routes: Routes = [
  { path: 'all', component: PostAllComponent,outlet: 'postCommentRouterOutlet' },
  { path: 'create', component: PostCreateComponent,outlet: 'postCommentRouterOutlet' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
