import { Component, OnInit } from '@angular/core';

declare const $: any;
@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initialiseRating();
  }


  toggleMenuBar(){
    $('.ui.sidebar').sidebar('toggle');
  }

  initialiseRating(){
    $('.rating').rating({
    initialRating: 3,
    maxRating: 5
  })
;
  }

  justChecking(){
    console.log("Hello");
  }
}
