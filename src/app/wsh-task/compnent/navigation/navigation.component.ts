import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/authentication/auth.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @ViewChild('navbarToggler') navbarToggler!:ElementRef;

  constructor(
    public authService: AuthService,
    private router: Router,
    private render: Renderer2
  ) {  }

  ngOnInit() {
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['/task', { outlets: { taskRouterOutlet: [ 'signin' ] }}]);
  }

}
