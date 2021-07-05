import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../users.service';

declare const $: any;

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  isShowComments = false;
  id=""
  review: any;
  userids : any;
  userNames: any;
  viewOnlyEditorOption = {
		toolbar: false,
		clipboard: {
			matchVisual: false
		}
	};

  constructor(public userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
			if (true) {
				this.id = params['reviewId'];
        this.getReview();
			}
		});
  }

  ngAfterViewInit(){
    $('.popup').popup();
    $('.rating').rating();
  }

  toggleIsShowComments(){
    this.isShowComments=!this.isShowComments;
  }

  getReview(){
    this.userService.getReviewById(this.id, (review) => {
      this.review=review;
      this.userids=this.review.createdBy;
      this.getUserNames();
      console.log(review);
    })
  }
  getUserNames(){
    this.userService.getUserNames(this.userids, (usernames) => {
      console.log(usernames)
      let alluser  = '';
      for(let i =0; i< usernames.length; i++){
        alluser=alluser+usernames[i].name
        if(i === usernames.length-1){
          this.userNames= alluser;
        }
      }
    })
  }

}
