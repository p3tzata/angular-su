import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postCountPure',
  pure:true //Explain: this "true" will cause call, on every change detection, only if refferance of value is changed.

})
export class PostCountPurePipe implements PipeTransform {

  transform(value: any[], userId:number,index: number): unknown {

    console.log('Call Pure pipe:'+index);

    return value.reduce((acc,curEl) => {
      if (curEl.userId==userId) {return acc+1;} 
      else {return acc}

    } ,0);
  }

}
