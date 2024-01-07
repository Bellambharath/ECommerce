import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/Services/signup.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  constructor(private auth:SignupService,private router:Router,) { }

  answer:string='';
  
  ngOnInit(): void {
  }
  onsubmit()
  {
    this.auth.forgotpassword(this.answer).subscribe((res)=>
    {
      if(res==1)
      {
        
        this.router.navigate(["update"])


      }
      else{
        
      }
      
    })
  }

}
