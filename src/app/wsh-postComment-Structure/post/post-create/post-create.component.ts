import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {PostService} from '../shared/post.service'
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  @ViewChild('f') creatPostForm!: NgForm;
  constructor(
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createPost() {
    const body = this.creatPostForm.value;
   

    this.postService.createPost(body)
      .subscribe(() => {
        this.router.navigate(['/postComentStructure/post', { outlets: { postCommentRouterOutlet: [ 'all' ] }}]);
      })
  }

}
