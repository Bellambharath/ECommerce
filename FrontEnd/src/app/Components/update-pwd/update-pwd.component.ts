import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/Models/Validateform';
import { SignupService } from 'src/app/Services/signup.service';

@Component({
  selector: 'app-update-pwd',
  templateUrl: './update-pwd.component.html',
  styleUrls: ['./update-pwd.component.css']
})
export class UpdatePWDComponent implements OnInit{

  signUpForm!: FormGroup;
  isText:boolean=false;
  type:string="password";
  eyeIcon:string="fa-eye-slash";
  constructor(private fb: FormBuilder, private auth: SignupService, private router: Router,private toast:NgToastService,) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      username: ['', Validators.required],
      password: ['', Validators.required],
      role:[''],
      token:[''],
      securityanswer:['']
    })
  }


  onSignUp(){
    if(this.signUpForm.valid){
       
      
      this.auth.Updatepwd(this.signUpForm.value)
      .subscribe({
        next:(res=>
        {
          this.toast.success({detail:"Password updated successfully",summary:res.message,duration:1000});
          
          
          this.router.navigate(['login']);
        })

        ,error:(err=>{
          alert(err?.error.message)
        })
      })
        
     }
    else{
         ValidateForm.validateAllFormFields(this.signUpForm)
         
    }

    
  
  }
  hideShowPass(){
    this.isText=!this.isText;
    this.isText?this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
    this.isText?this.type="text":this.type="password";
  }

}

