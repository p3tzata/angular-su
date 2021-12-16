import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postCount',
  pure: false //Explain: this "false" will cause call,on every change detection, every times.
})
export class PostCountPipe implements PipeTransform {

  transform(value: any[], userId:number): unknown {

    console.log('Call NO Pure pipe');

    return value.reduce((acc,curEl) => {
      if (curEl.userId==userId) {return acc+1;} 
      else {return acc}

    } ,10);
  }

}
