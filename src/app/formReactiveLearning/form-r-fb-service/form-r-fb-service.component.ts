import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import uuidValidatorFn from '../../formTemplateDrivenLearning/uuid-validator-fn';

@Component({
  selector: 'app-form-r-fb-service',
  templateUrl: './form-r-fb-service.component.html',
  styleUrls: ['./form-r-fb-service.component.css']
})
export class FormRFbServiceComponent implements OnInit {

  //https://www.digitalocean.com/community/tutorials/angular-reactive-forms-formarray-dynamic-fields


  form!: FormGroup;
  countAddresses=2;

  incAddreses(){
    this.countAddresses++;
    this.buildForm();
  }

  constructor(private fb:FormBuilder) {
    this.buildForm();
    
   }

buildForm(){
  this.form = this.fb.group({
    email: ['default value',[Validators.required] ] , 
    uuid: ['',[uuidValidatorFn(5),Validators.required] ],
    addresses: this.fb.array(new Array(this.countAddresses).fill(null).map(x => 
      this.createAddressGroupObj()
    ))  
  });
}
  
putAddressControl(){
   let addresses = this.form.controls.addresses as FormArray;
   addresses.push( this.createAddressGroupObj() );

}

removeAddressControl(){
  let addresses = this.form.controls.addresses as FormArray;
  addresses.removeAt(addresses.length-1);

}



  createAddressGroupObj(){
    
    return this.fb.group (
      {
        street: ['',[Validators.required]],
        zip: ['',Validators.required]
      }
    )
    
  }


  ngOnInit(): void {
  }

}
