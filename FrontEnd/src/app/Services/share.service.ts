import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  login: boolean = true;
  public loggedin = new ReplaySubject<number>(0);
  loggedin$ = this.loggedin.asObservable();
  
  isLoggedIn: boolean = true;
  redirecturl: string = "";
  val: string = 'Initial Shared Value';

  constructor() { this.doLogin(); }
  
  doLogin() {
    this.loggedin.next(1);
    
  }

  doLogout() {
    this.loggedin.next(0);
    
  }

}
