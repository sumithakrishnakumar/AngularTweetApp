import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from '../commonservice';
import { DialogAnimationsExampleDialogRegisterComponent } from '../dialog-animations-example-dialog-register/dialog-animations-example-dialog-register.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emailId:string='';
  contactNumber:string='';
  confirmPassword:any;
  password:any;
  loginId:any;
  username:any;
  lastname:any;
  firstNmae:any;
  registerForm: FormGroup;
 
  




  
  constructor(public formBuilder:FormBuilder,
    private commonService: CommonService,
    public dialog: MatDialog,) {
   
    this.registerForm=this.formBuilder.group({
      
    
    })
   }


  ngOnInit(): void {
  }
  ContactNumber= new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]);
  email = new FormControl('', [Validators.required, Validators.email]);
  Password=new FormControl('', [Validators.required]);
  ConfirmPassword=new FormControl('', [Validators.required]);

  
  getErrorContact() {
    if (this.ContactNumber.hasError('required')) {
      return 'you must enter a contact number';
    }

    return this.ContactNumber.hasError('pattern') ? 'Please, Enter 10 digit Mobile Number.' : '';
  }

  keyPressNumbers(event:any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  

  getErrorPassword(){
    if (this.Password.hasError('required')) {
      return 'You must enter a value';
    }
    return null;
  }
  

  

  getErrorConfirmPassword(){
    if (this.ConfirmPassword.hasError('required')) {
      return 'You must enter a value';
    }
  return null;
  }

  register(enterAnimationDuration: string, exitAnimationDuration: string,formObj:any){
    this.commonService.register(formObj).subscribe((response:any)=>{
    console.log(formObj)
    if(response.success!=null){
      this.dialog.open(DialogAnimationsExampleDialogRegisterComponent, {
        width: '250px',
        enterAnimationDuration,
        exitAnimationDuration,
      });
    }
  });
  
}

}
