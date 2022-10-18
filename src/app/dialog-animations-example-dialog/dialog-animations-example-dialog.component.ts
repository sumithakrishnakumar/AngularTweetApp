import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-animations-example-dialog',
  templateUrl: './dialog-animations-example-dialog.component.html',
  styleUrls: ['./dialog-animations-example-dialog.component.css']
})
export class DialogAnimationsExampleDialogComponent implements OnInit {

  popuphide: boolean=false;
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialogComponent>) { }
 
  popup(){
    
  //   setInterval(()=> {
  //     this.popuphide = true;
  // },1000)
  this.dialogRef.close();
  }
  ngOnInit(): void {
  }
  
}
