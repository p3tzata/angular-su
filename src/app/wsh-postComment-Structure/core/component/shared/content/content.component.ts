import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivationStart, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @ViewChild(RouterOutlet) outlet!: RouterOutlet;
  constructor(private router: Router) { }
  
  ngOnInit(): void {
    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "postCommentRouterOutlet")
        this.outlet.deactivate();
    });
  }
  

}
