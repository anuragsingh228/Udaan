import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenuBar(){
    $('.ui.sidebar').sidebar('toggle');
  }

  initialiseRating(){
    $('.rating').rating({
    initialRating: 3,
    maxRating: 5
  })};

}
