import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { CommonService } from '../commonservice';
import { DialogAnimationsComponentPasswordComponent } from '../dialog-animations-component-password/dialog-animations-component-password.component';
import { DialogAnimationsExampleDialogComponent } from '../dialog-animations-example-dialog/dialog-animations-example-dialog.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  username:any
  password:any
  confirmPassword:any
  opendialog: boolean=true;
  
  constructor(public dialog: MatDialog,
    private commonService: CommonService) { }
  
 
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, formObj:NgForm): void {
    
    this.commonService.forgotPassword(formObj.value).subscribe((response:any)=>{
      console.log(formObj.value)
      if(response.validationerror==null){
        this.dialog.open(DialogAnimationsExampleDialogComponent, {
          width: '250px',
          enterAnimationDuration,
          exitAnimationDuration,
        });
      }else{
        this.dialog.open(DialogAnimationsComponentPasswordComponent, {
          width: '250px',
          enterAnimationDuration,
          exitAnimationDuration,
        });
        formObj.reset();
      }
    })
    
  }
}

