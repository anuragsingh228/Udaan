import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor( public authService: AuthService) { }

  ngOnInit(): void {
  }

  onSignUp(form: NgForm){
    this.authService.createUser(form.value.username, form.value.name, form.value.email, form.value.password)
  }
}
