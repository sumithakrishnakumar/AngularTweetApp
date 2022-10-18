import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../commonservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Email:any;
  password:any;
  successlogin:boolean=false;
  message:any;
  user:any;
 
  
  constructor(private commonService: CommonService,
    public router : Router) { }
  
  ngOnInit() {
    
  }
  myGroup = new FormGroup({
    email: new FormControl()
});
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  addUser(formObj:any){
     this.commonService.createUser(formObj).subscribe((response:any)=>{
      console.log(formObj)
      console.log(this.message);
      
      if(response.error==null){
      let data=response.userData
      this.user=data.username
      this.successlogin=true;
      setInterval(()=> {
      this.successlogin=false;
    },3000)
      this.router.navigate(['/home'],{queryParams:{data:this.user}})
    }else{
      this.message=response.error
      this.successlogin=true;
      setInterval(()=> {
        this.successlogin=false;
      },3000)
    }
  })
  }
  
  
  }

