import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivationStart, Router} from '@angular/router'
import {AuthService} from '../shared/auth.service'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm!: NgForm;

  constructor(
    private authService : AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signIn() {
    this.authService
      .login(this.loginForm.value)
      .subscribe((data) => {
        console.log(data);
        this.authService.setToken(data.token);
        this.authService.setUsername(data.user.name);
        
        this.router.navigate(['/postComentStructure/home', { outlets: { postCommentRouterOutlet: [ '' ] }}]);
       

      });
  }

}




