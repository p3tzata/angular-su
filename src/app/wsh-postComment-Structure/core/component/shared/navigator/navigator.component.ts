import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/service/auth.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }


  logOut(){
    this.authService.logout();
  }

}
