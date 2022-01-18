import { Component, OnInit } from '@angular/core';
import { IPost } from '../shared/post.model';
import {AuthService} from '../../auth/shared/auth.service'

@Component({
  selector: 'app-post-all',
  templateUrl: './post-all.component.html',
  styleUrls: ['./post-all.component.css']
})
export class PostAllComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  isAuthor(post: IPost) {
    return post.creator === this.authService.getUserId();
  }

}
