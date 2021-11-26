import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning-directive',
  templateUrl: './learning-directive.component.html',
  styleUrls: ['./learning-directive.component.css']
})
export class LearningDirectiveComponent implements OnInit {

  curentVal:number;

  constructor() { 
    this.curentVal=1;
  }

  ngOnInit(): void {
  }

  clickHandler($event:any) {
    this.curentVal=$event.target.value;
  }

}
