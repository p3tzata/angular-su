import { Component, Input, OnInit } from '@angular/core';
import {User} from '../../interfaces/user'
import {Post} from '../../interfaces/post'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input()
  users!: User[]

  @Input()
  posts!: Post[]

  constructor() { }

  ngOnInit(): void {
  }

}
