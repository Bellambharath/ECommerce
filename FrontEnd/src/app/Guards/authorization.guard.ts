import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';
import { SignupService } from '../Services/signup.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(private auth:SignupService,private router:Router,private toast:NgToastService){}
  canActivate():boolean{
    if(this.auth.getRole())
    {
      return true
    }
    else
    {
      
      this.toast.error({detail:"ERROR",summary:"No Access for this"});
      this.router.navigate(['logout'])
      return false;
    }
  }
  
}
  
