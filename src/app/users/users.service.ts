import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"


@Injectable( {providedIn: "root"})
export class UserService {

  constructor(private http: HttpClient){

  }

  addReview(bookName: string, content: string){
    const reviewData= {
      bookName: bookName,
      content: content
    }
    // console.log(JSON.stringify(localStorage.getItem("user")));
    this.http.post("http://localhost:3000/addreview", reviewData )
      .subscribe(response => {
        console.log(response);
      })
  }



}
