import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IUserModuleState } from '../../+store';
import { addBookToUser } from '../../+store/user/user.action';
import { Book } from '../../../interfaces/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  public form!: FormGroup;
  constructor(private fb:FormBuilder,private store: Store<{userModule: IUserModuleState}>) {
    this.buildForm();
   }


   buildForm(){
    this.form = this.fb.group({
      userId: ['',[Validators.required] ] , 
      name: ['',[Validators.required] ],
       
    });
  }

  ngOnInit(): void {
  }

  submitHandler(value: Book) {
   

    let valueObj:Book = Object.assign({},value,{id: Math.floor(Math.random() * 999)})
    console.log(valueObj)
    this.store.dispatch(addBookToUser({book: valueObj}));

  }

}
