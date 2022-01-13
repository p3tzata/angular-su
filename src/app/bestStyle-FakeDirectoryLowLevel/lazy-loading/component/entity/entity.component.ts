import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../core/service/store.service';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit {

  constructor(private storeService:StoreService) {

    this.storeService.update(x=>
       { return {userList: (x.userList.concat({username: "Pepi"}))} }
    )

   }

  ngOnInit(): void {
  }

}
