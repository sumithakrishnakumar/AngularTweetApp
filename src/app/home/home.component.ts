import { Component, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../commonservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:any;
  profilename:any;
  likes:any;
  tag:any;
  tweetdata: any;
  tweets: any[] = [];
  tweetstr: any[] = [];
  data:any;
  finaltweets: any=[];
  count=0;
  replyhide:boolean=false;
  myFormPost:any;

  reply:any[] =[];
  replyfinal: any;
  
  

  constructor(private commonService: CommonService,
    private route:ActivatedRoute,
    public router : Router) {
  }

  comments(data:any){
    this.router.navigate(['/comments'],{queryParams:{data:data.username,id:data.id}})
  }
  profile(){
    this.router.navigate(['/profile'],{queryParams:{data:this.user,ishide:"No"}})
  }

  profileothers(data:any){
    this.user=data.username
    this.router.navigate(['/profile'],{queryParams:{data:this.user,ishide:"Yes"}})
  }
  
  post(form:NgForm,data:any){
    let arr=form.value
    this.reply.push({username:this.user,tag:arr.tag,replyData:arr.post})
    this.replyfinal=({'reply':this.reply})
    console.log(this.replyfinal)
    this.commonService.postreply(this.replyfinal,data).subscribe((response:any)=>{
    })
   form.reset();
 
  }


  like(data:any){
    this.count++
    console.log(this.count)
    this.commonService.getLikes(data,this.count).subscribe((response:any)=>{
    })
    this.count=0
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params:any)=>{
    console.log(params)
    this.user=params.data
    });
    this.commonService.getTweets().subscribe((response:any)=>{
      // console.log(response.tweetData)
      // this.tweetstr=response.tweetData
      response.tweetData.forEach((element:any) => {
        this.profilename=element.username
        this.tweetstr=element.tweets
       let alltweet=this.tweetstr[this.tweetstr.length-1]
      //  console.log(alltweet);
        this.finaltweets.push(alltweet)
        console.log(this.finaltweets);
        // element=element.tweets.forEach((element :any)=> {
          // this.tweets=element;
          // console.log(this.tweets)
          // this.likes=element.likes;
          // this.tag=element.tag;
          // this.tweetdata=element.tweetData;
          // console.log("tag"+this.tag)
          // console.log("Likes"+this.likes)
          // console.log("tweet"+this.tweetdata)
          // console.log("name"+this.profilename)


        // });
        
      });
  })

  }
}
