import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHiLight]',
  exportAs: 'appHiLightExport'
})
export class HiLightDirective implements OnChanges{

 @Input()
 curVal:number;

 @Input()
 indexxx:number;

  fontColor: string="";


 constructor(private render: Renderer2, private el: ElementRef) { 
    this.curVal=0;
    this.indexxx=0;
    console.log(el);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.bold();
     console.log(changes);
   }

   //Explain: this is default behavior of DOM element which we are bond.
   @HostBinding('style.color')
   color="green"; 

   @HostListener('mouseover',["$event"]) 
   mouseOverHandler($event:any):any {
      //console.log($event)
      this.render.setStyle(this.el.nativeElement,"font-weight","bold");
   }

   @HostListener('mouseout',["$event"]) 
   mouseOutHandler($event:any):any {
      //console.log($event)
      this.render.setStyle(this.el.nativeElement,"font-weight","normal");
   }


  bold(){

    const colorStyle = (this.indexxx!=this.curVal) ?  "black" : "red" ;
    this.fontColor=colorStyle;
    this.render.setStyle(this.el.nativeElement,"color",colorStyle);

    
  }


  


  



}
