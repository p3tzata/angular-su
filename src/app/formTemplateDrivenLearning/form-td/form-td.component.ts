import { Component, NgModule, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTDComponent implements OnInit {
  //Explain: Template driven form is suitable for small forms without complex logic
  
  @ViewChild('loginForm', {read : NgForm}) form!: NgForm;

  testVal:string="init val"
  constructor() { }
  

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.form.valueChanges!.subscribe(console.log);
  }
  

  submitHandler(values: any){
    console.log(values);
  }

}
