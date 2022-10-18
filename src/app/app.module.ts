import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { MatToolbarModule }   from '@angular/material/toolbar';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogAnimationsExampleDialogComponent } from './dialog-animations-example-dialog/dialog-animations-example-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAnimationsComponentPasswordComponent } from './dialog-animations-component-password/dialog-animations-component-password.component';
import { DialogAnimationsExampleDialogRegisterComponent } from './dialog-animations-example-dialog-register/dialog-animations-example-dialog-register.component';
import {MatIconModule} from '@angular/material/icon';
import { ProfileComponent } from './profile/profile.component';
import {MatMenuModule} from '@angular/material/menu';
import { DialogOverviewExampleDialogpostComponent } from './dialog-overview-example-dialogpost/dialog-overview-example-dialogpost.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    HomeComponent,
    DialogAnimationsExampleDialogComponent,
    DialogAnimationsComponentPasswordComponent,
    DialogAnimationsExampleDialogRegisterComponent,
    ProfileComponent,
    DialogOverviewExampleDialogpostComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatToolbarModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
