import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-animations-component-password',
  templateUrl: './dialog-animations-component-password.component.html',
  styleUrls: ['./dialog-animations-component-password.component.css']
})
export class DialogAnimationsComponentPasswordComponent implements OnInit {
  confirmPasswordVal:boolean=false
  constructor(public dialogRef: MatDialogRef<DialogAnimationsComponentPasswordComponent>) { }

  dismiss(){
    // this.confirmPasswordVal=true
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
