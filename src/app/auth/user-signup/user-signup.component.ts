import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor( public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSignUp(form: NgForm){
    this.authService.createUser(form.value.username, form.value.name, form.value.email, form.value.password)
    form.resetForm();
    this.router.navigate(['/login']);
  }
}
