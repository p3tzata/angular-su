import { Component, OnInit } from '@angular/core';
import { Observable, Subject, zip } from 'rxjs';

import { Post } from '../../interfaces/post';
import { User } from '../../interfaces/user';
import {UserService} from "../user.service"
import {PostService} from "../post.service"
import { takeUntil } from 'rxjs/operators';
import { MovieService } from '../../moviesDb/movies-services/movie.service';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-pipe-learning',
  templateUrl: './pipe-learning.component.html',
  styleUrls: ['./pipe-learning.component.css']
})
export class PipeLearningComponent implements OnInit {

  date_ = new Date();
  someObj = {
    firstName: "Ivo",
    secondName: "Ivanov"
  }

  users = [
    {userId: 1,
    username: "pepi"},
    {userId:2,
    username: "gogo"},
    {userId:3,
     username: "ico"}
  ];

  posts = [
    {postId:1,
    userId:1},
    {postId:2,
    userId:1}

  ]


  users$!: Observable<User[]>;
  posts$!: Observable<Post[]>;
  zipped:any={};
  killSubscription$: Subject<any> = new Subject<any>();




  constructor(private movieSrv: MovieService, 
    private postService: PostService,
    private userService: UserService,
    private authService: AuthService,
    private router: Router) { 
    
    this.users$=userService.getUsers();
    this.posts$=postService.getPost();
    
    //Explain: this have to be used, when async is imposible to be used.
    zip(this.userService.getUsers(),this.postService.getPost())
    .pipe(takeUntil(this.killSubscription$))
    .subscribe( ([users,posts]) => {
      this.zipped["users"]=users, this.zipped["posts"]=posts;
     
    } )



  }

  ngOnInit(): void {
  }

  countPostsOfUser(userId:number) {
    console.log('Call method');
    return this.posts.reduce((acc,curEl) => {
      if (curEl.userId==userId) {return acc+1;} 
      else {return 0}

    } ,0);

  }


  clickHandlerWithoutChangeRef(){
    this.posts.push(
      {postId:33,
       userId:1}
    );
  }


  clickHandlerWithChangeRef(){
   this.posts= this.posts.concat({postId:33,
      userId:1});
  }


  ngOnDestroy(){
    this.killSubscription$.next();
    this.killSubscription$.complete();
  }


  testInterceptorHndlr(){
    this.movieSrv.getPopularMovies().subscribe(el => console.log(el));
  }

  signUpHndlr(){
    this.authService.singUp("admin","123456")
    .subscribe(data => {
      //this.router.navigate(['/login']);
      console.log(data)
    }, err => console.error(err));
  }

  signInHndlr() {

    this.authService.singIn("admin","123456")
    .subscribe( data => {
      localStorage.setItem("token",data.token);
      
    }, err => console.error(err))

  }

  dashboardHndlr(){
    this.userService.getDashBoard().subscribe(data => console.log(data));
  }




}
