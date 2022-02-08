import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.form=this.fb.group({

      username: [null, [Validators.required]]

    });

  }

  ngOnInit(): void {
  }

}
