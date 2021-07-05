import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../users.service';
declare const $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  mode = ""
  activeTab = '';
  username=''
  profile: any;
  profileStatus = {"name": "", "status": "", "interests": []}

  constructor(public userService: UserService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activeTab='home'
    this.route.params.subscribe((params: any) => {
			if (true) {
				this.username = params['username'];
        this.getProfile();
			}
		});
  }
  ngAfterViewInit() {
    $('.dropdown').dropdown();
	}

  changeTab(tabName){
    this.activeTab=tabName;
  }
  openEditProfileModal(){
    $('#editProfile').modal({ blurring: true, observeChanges: true }).modal('show');
  }

  getProfile(){
    this.userService.getProfileByUserName(this.username, (profile) => {
      if(profile?.followers){
        this.mode="private"
      } else{
        this.mode="public"
      }
      this.profile= profile;
      this.profileStatus.name=profile.name;
      this.profileStatus.status= profile.status;
      this.profileStatus.interests=profile.interests
      console.log(profile)
      this.getAllReviewsByUser(profile._id)
    })
  }


  randomColour(index){
    let colors =["red", "teal"]
    return(colors[index % 2])
  }

  onProfileUpdate(form: NgForm){
    console.log(form);
    console.log(this.profileStatus)
    let status = this.profileStatus+" : "+ form.value.statusbookname;
    let interests = form.value.interests.split(',');
    this.userService.profileUpdate(form.value.name, status, interests, (response)=> {
      console.log("hello");
      console.log(response);
      form.resetForm();
      $('#editProfile').modal().modal('hide');
      this.getProfile();

    })
  }

  setStatus(status){
    this.profileStatus.status=status;
  }

  getAllReviewsByUser(id){
    this.userService.getAllReviewOfUser(id, (reviews) => {
      console.log(reviews);
    })
  }
}
