import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Profile } from '../Models/Profile';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  isLoggedIn: boolean = true;


  
  constructor(private http: HttpClient, private router: Router) { }

 
  signUp(signObj: any) {
    
    return this.http.post<any>("https://localhost:7192/api/Logins/register", signObj)
  }
  login(loginObj: any) {
    return this.http.post<any>("https://localhost:7192/api/Logins/authenticate/", loginObj)
  }
  forgotpassword(s: string) {
    return this.http.get<number>("https://localhost:7192/api/Logins/forgot?forgot=" + s);
  }
  Updatepwd(user: any) {
    return this.http.put<any>("https://localhost:7192/api/Logins/", user)
  }

  getuserdetails():Observable<Profile>
  {
    let name=localStorage.getItem("userName")
    return this.http.get<Profile>("https://localhost:7192/api/Logins?username="+name);
  }

UpdateProfile(profile:Profile)
{
  return this.http.put<Profile>("https://localhost:7192/api/Logins/profile/",profile)
}



  signOut() {
    localStorage.clear();
  
    this.router.navigate(['login'])

  }





  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue)
  }
  storeRole(role: string) 
  {
   
    localStorage.setItem('role', role)
  }
  StoreUserName(name:string)
  {
    localStorage.setItem('userName',name)
  }
  StoreFullName(name:string)
  {
    localStorage.setItem('fullName',name)
  }

  getToken() {

    return localStorage.getItem('token')

  }
  getRole() 
  {
    if (localStorage.getItem('role') == "Admin") 
    {
      return true;
    }
    else {
      return false;
    }
  }
  isLoggedin(): boolean 
  {
    return !!localStorage.getItem('token')

  }
}
