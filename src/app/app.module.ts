import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { UserSignupComponent } from './auth/user-signup/user-signup.component';
import { UserFeedComponent } from './users/user-feed/user-feed.component';
import { AppRoutingModule } from './app-routing.module';
import { ReviewListComponent } from './users/review-list/review-list.component';
import { NotificationComponent } from './users/notification/notification.component';
import { BooksComponent } from './books/books.component';
import { RateNowBooksComponent } from './books/rate-now-books/rate-now-books.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserLoginComponent,
    UserSignupComponent,
    UsersComponent,
    UserFeedComponent,
    ReviewListComponent,
    NotificationComponent,
    BooksComponent,
    RateNowBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
