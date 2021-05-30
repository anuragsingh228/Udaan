import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { UserSignupComponent } from './auth/user-signup/user-signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotificationComponent } from './users/notification/notification.component';
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
    }

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
