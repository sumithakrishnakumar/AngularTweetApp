import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../commonservice';
import { DialogOverviewExampleDialogpostComponent } from '../dialog-overview-example-dialogpost/dialog-overview-example-dialogpost.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username:any;
  result:any;
  finalprofile: any[]=[];
  count: any;
  ishidebtn: boolean=true;
  constructor(private commonservice:CommonService,
    private route:ActivatedRoute,
    public dialog: MatDialog,
    public router : Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any)=>{
      console.log(params)
      this.username=params.data
      // if(params.ishide==='No'){
      //   this.ishidebtn=false
      // }else{
      //   this.ishidebtn=true
      // }
       });
      this.commonservice.getprofiledata(this.username).subscribe((response:any)=>{
    this.finalprofile=response.data.tweets;
        console.log(this.finalprofile)
    
  });
}
like(data:any){
  this.count++
  console.log(this.count)
  this.commonservice.getLikes(data,this.count).subscribe((response:any)=>{
  })
  this.count=0
}
delete(data:any){
  this.commonservice.delete(data).subscribe((response:any)=>{
    this.ngOnInit();
  })
}
NewPost(): void {
  const dialogRef = this.dialog.open(DialogOverviewExampleDialogpostComponent, {
    width: '250px',
    data:{'name':this.username}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    // this.animal = result;
  });
}
comments(data:any){

  this.router.navigate(['/comments'],{queryParams:{data:data.username,id:data.id}})
  
}
}


