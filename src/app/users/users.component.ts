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

  constructor(public authService: AuthService, private router: Router ) { }

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

  signOut(){
    this.authService.logout();
    this.router.navigate(['home']);
  }

}
