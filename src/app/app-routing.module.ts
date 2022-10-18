import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {path:'register',component:RegisterComponent},
  {path:'resetPassword',component:ForgotPasswordComponent},
  {path:'home',component:HomeComponent},
  {path:'profile',component:ProfileComponent},
  {path:'comments',component:CommentsComponent}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
