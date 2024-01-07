import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationGuard } from '../Guards/authorization.guard';
import { Cart } from '../Models/Cart';
import { Products } from '../Models/Products';
import { CartService } from '../Services/cart.service';
import { ProductsServiceService } from '../Services/products-service.service';
import { ShareService } from '../Services/share.service';
import { SignupService } from '../Services/signup.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  data: string = '';
  dropdowndata: Products[];
  prodCount: number = 0;
  usercheck: boolean;
  fullname: string;
  role: string;
  rolecheck: boolean = false;
  public searchTerm: string = "";
  count: number = 0;
  cart: Cart[];
  c: any;
  ProductIdArray: number[];
  length: number;
  loggedin$: any;
  constructor(private productservice: ProductsServiceService,
    //private jwtHelper: JwtHelperService,
    private router: Router,
    public auth: SignupService,
    private service: ShareService,
    private authori: AuthorizationGuard,
    private cartservice: CartService) { }

  ngOnInit(): void {

    this.GetCart();
    this.role = localStorage.getItem("role") as string;
    if (this.role == "User") {
      this.rolecheck = true;
    }
    else {
      this.rolecheck = false;
    }
    this.UserType();
    this.fullname = localStorage.getItem("fullName") as string;
    this.loggedin$ = this.service.loggedin$;

    this.length = JSON.parse(localStorage.getItem('cartcount') as string)
    if (!(this.count == undefined || this.count == null)) 
    {
      
      this.count=this.length;
     
    }
  }



  GetCart() {
    this.cartservice.Get().subscribe((r) => {
      this.cart = r;

     
    })

  }
  



  UserType() {
    if (this.auth.getRole()) {
      this.usercheck = true;

    }
    else {
      this.usercheck = false;
    }
  }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.productservice.search.next(this.searchTerm)

  }
  onLogOut()
  {
    this.auth.isLoggedIn=false;
    this.auth.signOut();
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  

}
