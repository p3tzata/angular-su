import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import uuidValidatorFn from '../../formTemplateDrivenLearning/uuid-validator-fn';

@Component({
  selector: 'app-form-r',
  templateUrl: './form-r.component.html',
  styleUrls: ['./form-r.component.css']
})
export class FormRComponent implements OnInit {

  public form!: FormGroup;

  constructor() {
 
    this.buildForm();
    //console.log(this.form.controls['email']);
  }

  buildForm(){
    this.form = new FormGroup({
      email: new FormControl('default value',[Validators.required] ), 
      uuid: new FormControl('',[uuidValidatorFn(5),Validators.required] ) 
    });
  }

  get getEmail() {
    return this.form.controls['email'];
  }


  ngOnInit(): void {
  }

}
