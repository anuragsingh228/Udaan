import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginerrors=[];

  constructor(public authService: AuthService,  private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm){
    this.authService.login(form.value.email, form.value.password, (authData) => {
      if(authData["errors"]){
        this.loginerrors=authData.errors;
        form.resetForm();
      } else {
        this.router.navigate(['']);
      }
    });
  }
}
