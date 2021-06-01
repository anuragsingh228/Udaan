import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable( {providedIn: "root"})
export class AuthService {

  constructor(private http: HttpClient){

  }

  createUser(userName: string, name: string, email: string, password: string){
    const userData= {
      name: name,
      email: email,
      password: password,
      username: userName
    }
    this.http.post("http://localhost:3000/users/signup", userData )
      .subscribe(response => {
        console.log(response);
      })
  }

  login(email: string, password: string) {
    const authData = {
      email: email,
      password: password
    }
    this.http.post("http://localhost:3000/users/login",  authData)
    .subscribe(response => {
      console.log(response);
    })
  }
}
