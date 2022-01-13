import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { StoreService } from '../../../core/service/store.service';
import { IState, IUser } from '../../../shared/interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  userList$! : Observable<IUser[]>;
  constructor(private storeService:StoreService) { 
    this.userList$=storeService.select<IUser[]>( (x)=>x.userList )
    //.pipe(shareReplay()) //Explain: this will cause to return last value on second subscriber.

  }

  ngOnInit(): void {
  }

}
