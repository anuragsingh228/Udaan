import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"


@Injectable( {providedIn: "root"})
export class UserService {

  constructor(private http: HttpClient){

  }

  addReview(title: string,content: string, subheader: string, tags: string[], isPublish: boolean){
    const reviewData= {
      title: title,
      content: content,
      subheader: subheader,
      tags: tags,
      isPublished: isPublish
    }
    this.http.post("http://localhost:3000/addreview", reviewData )
      .subscribe(response => {
        console.log(response);
      })
  }

  getReviewById(id: string, callback){
    this.http.get("http://localhost:3000/review/"+id )
    .subscribe(review => {
      callback(review);
    })
  }


  getAllReviews(callback) {
    this.http.get("http://localhost:3000")
    .subscribe(allreview => {
      callback(allreview)
    })
  }

  /*************************** User related calls ***************/

  getUserNames(userids: string[], callback){
    const data = {
      userids: userids
    }
    this.http.post("http://localhost:3000/users/getnames", data)
    .subscribe(usernames => {
      callback(usernames);
    })
  }

  getProfileByUserName(username: string, callback){
    this.http.get("http://localhost:3000/users/profile/"+ username)
    .subscribe(userprofile => {
      callback(userprofile);
    })
  }

  profileUpdate(name: string, status: string, interests: string[], callback) {
    const data = {
      name: name,
      status: status,
      interests: interests
    }
    this.http.post("http://localhost:3000/users/profileupdate", data)
    .subscribe(responce => {
      callback(responce)
    })
  }

  getAllReviewOfUser(id: string, callback) {
    this.http.get("http://localhost:3000/users/"+ id + "/reviews")
    .subscribe(reviews => {
      callback(reviews)
    })
  }
}
