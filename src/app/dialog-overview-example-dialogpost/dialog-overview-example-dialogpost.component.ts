import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from '../commonservice';

@Component({
  selector: 'app-dialog-overview-example-dialogpost',
  templateUrl: './dialog-overview-example-dialogpost.component.html',
  styleUrls: ['./dialog-overview-example-dialogpost.component.css']
})
export class DialogOverviewExampleDialogpostComponent implements OnInit {
  replyfinal:any;
  

  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialogpostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private commonservice:CommonService) { }
tweets: any[]=[];
  ngOnInit(): void {
  }
  onNoClick(myFormPost:any) {
    this.dialogRef.close();
    this.tweets.push({likes:0,tag:myFormPost.tag,tweetData:myFormPost.tweet})
    console.log(this.tweets)
    this.replyfinal=({'tweets':this.tweets})
    console.log(this.replyfinal)
    this.commonservice.addtweet(this.replyfinal,this.data).subscribe((response:any)=>{
    })
  }
}

export interface DialogData {
  name: string;
}

