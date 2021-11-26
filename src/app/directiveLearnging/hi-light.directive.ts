import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHiLight]'
})
export class HiLightDirective implements OnChanges{

 @Input()
 curVal:number;

 @Input()
 indexxx:number;

  constructor(private render: Renderer2, private el: ElementRef) { 
    this.curVal=0;
    this.indexxx=0;
    console.log(el);
  }

  bold(){
    if(this.indexxx!=this.curVal) {
      this.render.setStyle(this.el.nativeElement,"font-weight","normal")
      this.render.setStyle(this.el.nativeElement,"color","black")
      

      return;
    } else {
      this.render.setStyle(this.el.nativeElement,"color","red")
      this.render.setStyle(this.el.nativeElement,"font-weight","bold") 
      
    }
    
  }


  ngOnChanges(changes: SimpleChanges): void {
   this.bold();
    console.log(changes);
  }


  



}
