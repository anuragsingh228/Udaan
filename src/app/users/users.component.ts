import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


declare const $: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  username=""

  constructor(public authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
    this.username=JSON.parse(localStorage.getItem("user")).username;
    console.log(JSON.parse(localStorage.getItem("user")))
  }

  toggleMenuBar(){
    $('.ui.sidebar').sidebar('toggle');
  }

  initialiseRating(){
    $('.rating').rating({
    initialRating: 3,
    maxRating: 5
  })};

  signOut(){
    this.authService.logout();
    this.router.navigate(['home']);
  }

}
