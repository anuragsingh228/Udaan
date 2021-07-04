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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReviewCreationComponent } from './users/review-creation/review-creation.component';
import { QuillModule } from 'ngx-quill';
import { ProfileComponent } from './users/profile/profile.component';
import { UsersListComponent } from './shared/users-list/users-list.component';
import { ReviewComponent } from './users/review/review.component';
import { PostCreationComponent } from './users/post-creation/post-creation.component'
import { AuthInterceptor } from './app.http.inteceptor';
import { AuthGuardService } from './auth/auth-guard.service';
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
    RateNowBooksComponent,
    ReviewCreationComponent,
    ProfileComponent,
    UsersListComponent,
    ReviewComponent,
    PostCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    QuillModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
