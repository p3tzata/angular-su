import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faCoffee,faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-registration-form-td',
  templateUrl: './registration-form-td.component.html',
  styleUrls: ['./registration-form-td.component.css']
})
export class RegistrationFormTDComponent implements OnInit {

  phones: Array<any> = [{id: 1,phoneNumber:"+359"},{id:2,phoneNumber:"+555"},{id:3,phoneNumber:"+115"}]
  employeeTypes:Array<any> = [{id: 1,employeeType:"Manager"},{id:2,employeeType:"Director"},{id:3,employeeType:"Project Manager"}]

  @ViewChild('form')
  htmlForm!: NgForm;

  faCoffee=faCoffee;
  faEnvelope=faEnvelope;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  register(form: NgForm):void {
    console.log("htmlForm: "+this.htmlForm);
    this.htmlForm.resetForm();

    //console.log(form);
  }






}
