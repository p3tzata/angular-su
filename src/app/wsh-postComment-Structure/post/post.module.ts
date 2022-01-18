import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostAllComponent } from './post-all/post-all.component';
import { PostComponent } from './post/post.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostAllComponent,
    PostComponent,
    PostCreateComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule
  ]
})
export class PostModule { }
