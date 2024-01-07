import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/Services/share.service';
import { SignupService } from 'src/app/Services/signup.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
 
  public users:any= [];
  constructor(private service:SignupService,private router:Router) { }

  status:boolean;

  ngOnInit(): void 
  {
    this.status = this.service.isLoggedin();
   
  }
  
  onLogOut(){
    this.service.isLoggedIn=false;
    this.service.signOut();
    localStorage.clear();
    this.router.navigate(['/products']);
  }
  onCancel(){    
    this.router.navigate(['/products']);
  }
}
