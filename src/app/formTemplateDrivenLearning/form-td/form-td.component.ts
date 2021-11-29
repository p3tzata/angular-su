import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTDComponent implements OnInit {
  //Explain: Template driven form is suitable for small forms without complex logic
  
  testVal:string="init val"
  constructor() { }
  

  ngOnInit(): void {
  }

  

  submitHandler(values: any){
    console.log(values);
  }

}
