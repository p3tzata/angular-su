import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUserModuleState } from '../../+store';
import { Book } from '../../../interfaces/book';
import {booksCountSelector, booksOfUserSelector} from '../../+store/user/user.selector'
@Component({
  selector: 'app-books-of-user',
  templateUrl: './books-of-user.component.html',
  styleUrls: ['./books-of-user.component.css']
})
export class BooksOfUserComponent implements OnInit {

  booksOfUser$!: Observable<Book[] | undefined>
  constructor(private store: Store<{userModule: IUserModuleState}>) { }

  ngOnInit(): void {
    this.booksOfUser$=this.store.select(booksOfUserSelector);
  }



}
