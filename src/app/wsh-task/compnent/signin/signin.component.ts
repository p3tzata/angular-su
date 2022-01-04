import { 
  Component, 
  OnInit, 
  ViewChild 
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../service/authentication/auth.service';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
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
        this.router.navigate(['/task', { outlets: { taskRouterOutlet: [ 'home' ] }}]);
       

      });
  }

}
