import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Cart } from 'src/app/Models/Cart';
import { Products } from 'src/app/Models/Products';
import { CartService } from 'src/app/Services/cart.service';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { SignupService } from 'src/app/Services/signup.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {


  showChild = false;
  product: Products[];
  productdetails: Products = new Products();
  pid: number;
  rating: number;
  halfstar: number;
  cart: Cart[];
  c: Cart = new Cart();
  rolecheck: boolean = false;
  role: string;

  logincheck: boolean = false;

  constructor(private products: ProductsServiceService, private signupservice: SignupService,
    private router: Router, private cartservice: CartService, private toast: NgToastService,
    private location: Location) { }

  ngOnInit(): void {
    this.products.GetProducts().subscribe((result) => {
      this.product = result;
    });
    this.logincheck = this.signupservice.isLoggedin();
    this.role = localStorage.getItem("role") as string;
    if (this.role == "User") {
      this.rolecheck = true;
    }
    else {
      this.rolecheck = false;
    }

    let data = localStorage.getItem("pdetails") as string;
    if(data=="productdetails")
    {
      this.Details();
      let a="notproductdetails";
      localStorage.setItem('pdetails',a)
    }
    else
    {
      this.DataFromParent();
    }

    
    this.GetCart();
  }

  Details() 
  {
    this.products.GetProducts().subscribe((result) => {
      this.product = result;
    
    this.products.productid.subscribe((res) => {
      this.pid = res;
      this.ProductDetails();
      let productfiltered=this.product.filter(x=>x.productId==this.pid)
        let a = productfiltered[0].productRating * 10;
        let b = a % 10;

        let cc = (a - b) / 10;
        this.rating=cc;
        this.halfstar=b;
      console.log(this.rating)
      console.log(this.halfstar)
    });
  });
  }




  goback() {
    this.location.back();
  }

  GetCart() {
    this.cartservice.Get().subscribe((res) => {
      this.cart = res;
    });
  }

  AddToCart(p: Products) {
    if (this.signupservice.isLoggedin()) {

      this.c.userName = localStorage.getItem('userName') as string;
      this.c.productId = p.productId;
      this.c.quantity = 1;
      if (this.CheckExistance(this.c.productId)) {

        this.cartservice.Add(this.c).subscribe((res) => {
        });
      }

    }
    else {
      this.products.UpdateProductId(p.productId);
    }

  }

  CheckExistance(productid: number): boolean {

    let name = localStorage.getItem('userName') as string;

    let p = this.cart.filter(x => x.userName == name);
    let Quantity = p.filter(x => x.productId == productid)

    if (Quantity.length > 0) {
      let productquantity = this.product.filter(x => x.productId == productid)
      let cartqty = Quantity[0].quantity;
      let qty = productquantity[0].noofstocks;

      let result = false;
      if (cartqty < qty) {
        result = true;
      }
      return result;
    }
    else {
      return true;
    }

  }

  DataFromParent() 
  {
    this.products.currentData.subscribe((res) => {
      this.pid = res;
      if (this.pid >= 1) {
        this.ProductDetails();
        this.products.rating.subscribe((rstar) => {
          this.rating = rstar;
          this.products.halfstar.subscribe((rhalfstar) => {
            this.halfstar = rhalfstar;
          });
        });
      }
      else {
        this.router.navigate(['products']);
      }
    })
  }



  ProductDetails() {

    this.products.GetProducts().subscribe((result) => {
      this.product = result;
      let p = this.product.filter(x => x.productId == this.pid);
      this.productdetails = p[0];
    })
  }
}


