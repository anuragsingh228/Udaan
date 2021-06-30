import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  activeTab = '';

  constructor() { }

  ngOnInit(): void {
    this.activeTab='home'
  }
  ngAfterViewInit() {
    $('.dropdown').dropdown();
	}

  changeTab(tabName){
    console.log(tabName);
    this.activeTab=tabName;
  }
  openEditProfileModal(){
    $('#editProfile').modal({ blurring: true, observeChanges: true }).modal('show');
  }

}
