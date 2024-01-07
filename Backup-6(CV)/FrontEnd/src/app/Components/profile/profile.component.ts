import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/Models/Profile';
import { SignupService } from 'src/app/Services/signup.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  errormessage:string="";
  formValue!: FormGroup;
  profile: Profile = new Profile();
  constructor(private loginservice: SignupService, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.getprofiledetails();
    this.formValue = this.formBuilder.group({

      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      securityAnswer: [''],
      passwordreentry1:[''],
      passwordreentry2:[''],
    })

  }

  

  getprofiledetails() {
    if (this.loginservice.isLoggedin()) {
      this.loginservice.getuserdetails().subscribe((res) => {
        this.profile = res;
      })
    }
   
  }

  editData() 
  {
    this.formValue.controls["firstName"].setValue(this.profile.firstName);
    this.formValue.controls["lastName"].setValue(this.profile.lastName);
    this.formValue.controls["email"].setValue(this.profile.email);
    this.formValue.controls["password"].setValue("**********");
    this.formValue.controls["securityAnswer"].setValue(this.profile.securityAnswer);
    this.formValue.controls["passwordreentry1"].setValue("");
    this.formValue.controls["passwordreentry2"].setValue("");
  }
  updateData() 
  {
    this.profile.userName= this.profile.userName;
    this.profile.firstName = this.formValue.value.firstName;
    this.profile.lastName = this.formValue.value.lastName;
    this.profile.email = this.formValue.value.email;
    this.profile.password = this.formValue.value.password;
    this.profile.securityAnswer = this.formValue.value.securityAnswer;

    this.loginservice.UpdateProfile(this.profile).subscribe((res)=>
    {
    })
    
  }  
  updatePassword()
  {
    let passwordreentry1 = this.formValue.value.passwordreentry1;
    let passwordreentry2 = this.formValue.value.passwordreentry2;
    
    if((passwordreentry1==passwordreentry2)&&(passwordreentry1!=null))
    {

    }
    else{
      this.errormessage="password mismatch";
    }
  }
}
