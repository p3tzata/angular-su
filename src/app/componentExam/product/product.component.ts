import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../entity/product.entity';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  productInput!: Product;
  
  descriptionMoreSymbols: number=5;

  shownDescrLenght: number;
  showReadMoreBtn: boolean=true;
  showHideBtn: boolean=false;
  imageButtonTitle:string="hide img";
  descriptionToShow!: string;
  imageIsShown:boolean=true;
  descriptionLenght!:number;


  constructor() { 
    this.shownDescrLenght=0;
  
  }

  ngOnInit(): void {
    this.descriptionLenght=this.productInput.description.length;
  }

  readMore() {
    this.imageIsShown=false;
    this.shownDescrLenght+=this.shownDescrLenght + this.descriptionMoreSymbols;
    this.descriptionToShow=this.productInput.description.substring(0,this.shownDescrLenght);
    this.imageIsShown=false;
    this.imageButtonTitle="show img";
    if (this.shownDescrLenght >this.descriptionLenght ) {
      this.showReadMoreBtn=false;
      this.showHideBtn=true;
    }



  }

  hideDescription() {
    this.shownDescrLenght=0;
    this.showReadMoreBtn=true;
    this.showHideBtn=false;
    this.imageIsShown=true;
  }

  toggleImage() {

    if(this.imageIsShown) {
      this.imageButtonTitle="show img";
    } else {
      this.imageButtonTitle="hide img";
      this.shownDescrLenght=0;
    }

    this.imageIsShown=!this.imageIsShown;

  }

}
