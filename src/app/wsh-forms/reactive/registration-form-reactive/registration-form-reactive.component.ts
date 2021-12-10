import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup,  Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form-reactive',
  templateUrl: './registration-form-reactive.component.html',
  styleUrls: ['./registration-form-reactive.component.css']
})
export class RegistrationFormReactiveComponent implements OnInit {
  formHtml!:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    
    this.formHtml = this.fb.group({
    fullname:['',[Validators.required,Validators.pattern("[A-Z][a-z]+\\s[A-Z][a-z]+") ]]

    })
  
  }

  get f(){
    return this.formHtml.controls;
  }

  submitHandler(){
    console.log(this.formHtml);
  }


}
