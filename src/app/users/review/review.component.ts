import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  isShowComments = false;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    $('.popup').popup();
    $('.rating').rating();

  }
  toggleIsShowComments(){
    this.isShowComments=!this.isShowComments;
  }

}
