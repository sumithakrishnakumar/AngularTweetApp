import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-animations-example-dialog-register',
  templateUrl: './dialog-animations-example-dialog-register.component.html',
  styleUrls: ['./dialog-animations-example-dialog-register.component.css']
})
export class DialogAnimationsExampleDialogRegisterComponent implements OnInit {
  popupreghide:boolean=false;
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialogRegisterComponent>) { }
  loginpage(){
    this.dialogRef.close();
    this.popupreghide=true;
  }
  ngOnInit(): void {
  }

}
