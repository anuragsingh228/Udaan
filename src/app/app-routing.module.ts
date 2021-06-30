import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { UserSignupComponent } from './auth/user-signup/user-signup.component';
import { BooksComponent } from './books/books.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotificationComponent } from './users/notification/notification.component';
import { ProfileComponent } from './users/profile/profile.component';
import { ReviewCreationComponent } from './users/review-creation/review-creation.component';
import { ReviewComponent } from './users/review/review.component';
import { UserFeedComponent } from './users/user-feed/user-feed.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'signup', component: UserSignupComponent },
  { path: '', component: UsersComponent,
  children: [
    {
      path: '',
      component: UserFeedComponent
    },
    {
      path: 'notification',
      component: NotificationComponent
    },
    {
      path: 'new',
      component: ReviewCreationComponent
    },
    {
      path: 'profile',
      component: ProfileComponent
    },
    {
      path:'awin',
      component: ReviewComponent
    },
    {
      path:'books',
      component: BooksComponent
    }

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
