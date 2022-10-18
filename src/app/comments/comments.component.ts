import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../commonservice';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  user: any;
  finalcomments:any[]=[];
  id: any;

  constructor(private route:ActivatedRoute,
    private commonservice:CommonService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any)=>{
      console.log(params.data)
      this.user=params.data
      this.id=params.id
      console.log(this.user)
      console.log(this.id)
      });
      this.commonservice.getComments(this.user,this.id).subscribe((response:any)=>{
        response.tweets.forEach((element:any) => {
        if(element.id==this.id){
       this.finalcomments=element.reply
       console.log(this.finalcomments)
        }
  });
  });
}
}
