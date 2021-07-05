import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

declare const $: any;
@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent implements OnInit {
  allreview: any;

  constructor( public userService: UserService) { }

  ngOnInit(): void {
    this.initialiseRating();
    this.getAllreview();

  }

  getAllreview(){
    this.userService.getAllReviews((allreview) => {
      this.allreview=allreview;
      console.log(this.allreview)
    })
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
