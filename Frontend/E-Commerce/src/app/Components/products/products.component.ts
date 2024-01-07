import { AfterViewInit, Component, EventEmitter, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { Cart } from '../../Models/Cart';
import { Products } from '../../Models/Products';
import { CartService } from '../../Services/cart.service';
import { JsonService } from '../../Services/json.service';
import { ProductsServiceService } from '../../Services/products-service.service';
import { SignupService } from '../../Services/signup.service';
import { StarRatingComponent } from 'ng-starrating';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Injectable, HostListener } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();


  sendMessage() {
    this.messageEvent.emit('Hello from Child');

  }

  productidarray = Array();

  products: Products[];
  cart: Cart[];
  c: Cart = new Cart();
  p: Products = new Products();
  e = Array();
  data: string = "";
  dropdowndata: Products[];
  productsfromdrop: Products[];
  dropdown = Array();
  rating = Array();
  halfstar = Array();
  l = Array();
  rolecheck: boolean = false;
  role: string;

  logincheck: boolean = false;

  Refresh: boolean = true;
  ProductIdArray: number[];
  length: number;
  searchkey: string = "";
  ProductQuantities=Array();
  numberarray:number[]=[5,4,3,2,1];

  FilteredProducts:Products[];
  totalproducts:Products[];
  

  constructor(private Productsservice: ProductsServiceService, private jsonservice: JsonService,
    private cartservice: CartService, private signupservice: SignupService, private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
    
    this.GetCart();
    this.Productsservice.search.subscribe(val => {
      this.searchkey = val;
    })

    this.logincheck = this.signupservice.isLoggedin();
    this.role = localStorage.getItem("role") as string;
    if (this.role == "User") {
      this.rolecheck = true;
    }
    else {
      this.rolecheck = false;
    }
    this.GetProducts();

    this.GetDropDown();
    
  }
  GetProducts() {
    this.Productsservice.GetProducts().subscribe((result) => {
      this.products = result;
      this.totalproducts=result;
      this.FilteredProducts=result;

    })
  }
  GetCart() {
    this.cartservice.Get().subscribe((res) => {
      this.cart = res;

    });
  }
  AddToCart(p: Products) {
    
    if (this.signupservice.isLoggedin()) 
    {

      this.c.userName = localStorage.getItem('userName') as string;
      this.c.productId = p.productId;
      this.c.quantity = 1;
      if (this.CheckExistance(this.c.productId)) 
      {
       
        this.cartservice.Add(this.c).subscribe((res) => {
        
        });
      }
     
    }
    else 
    {
      this.Productsservice.UpdateProductId(p.productId);
      
    }
  }
  CartWithOutLogin(product: Products) 
  {
    this.Productsservice.UpdateProductId(product.productId);
    
  }
  CheckExistance(productid: number): boolean 
  {

    let name = localStorage.getItem('userName') as string;

    let p = this.cart.filter(x => x.userName == name);
    let Quantity = p.filter(x => x.productId == productid)
   
    if (Quantity.length>0) 
    {
      let productquantity = this.dropdowndata.filter(x => x.productId == productid)
      let cartqty = Quantity[0].quantity;
      let qty = productquantity[0].noofstocks;
   
      let result = false;
      if (cartqty < qty) 
      {
        result = true;
      }
      return result;
    }
    else 
    {
      return true;
    }

  }

  GetDropDown() {
    this.Productsservice.GetProducts().subscribe((result) => {
      this.dropdowndata = result;

      this.productsfromdrop = result;

      for (var i = 0; i < this.dropdowndata.length; i++) 
      {
    
        this.dropdown.push(this.dropdowndata[i].productCategory)
        let c = this.dropdown.filter(x => x == this.dropdowndata[i].productCategory)

        if (c.length > 1) 
        {

          this.dropdown.pop();
        }
        let a = this.dropdowndata[i].productRating * 10;
        let b = a % 10;
        let cc = (a - b) / 10;
        this.rating.push(cc);
        this.halfstar.push(b);
      }
      for (var i = 0; i < this.dropdown.length; i++) 
      {
        let p=this.dropdowndata.filter(x=>x.productCategory==this.dropdown[i])
        this.ProductQuantities.push(p.length);
      }
    });
  }
  
  selectChange(dropdown: any) 
  {
    
    if (dropdown != "Category") {
      this.FilteredProducts = this.totalproducts.filter(x => x.productCategory == dropdown)
    }
    else {
      this.FilteredProducts = this.totalproducts;
    }
    this.products=this.FilteredProducts;

  }
  sortDropdown(f: any) 
  {
    this.e = this.products.sort((n1, n2) => n1.productPrice - n2.productPrice);
    if (f.target.value == "Price:Low to High") {
     
      this.products = this.e;
    }
    else if (f.target.value == "Sort By Price") {
      this.products = this.dropdowndata;
    }
    else {
      for (var i = this.e.length - 1; i >= 0; i--) {
        this.l.push(this.e[i])
      }
      this.products = this.l;
    }
  }
  sortprices(value:number) 
  {
    console.log(this.FilteredProducts)
    this.e = this.FilteredProducts.sort((n1, n2) => n1.productPrice - n2.productPrice);
    if ( value== 1) {
      this.products = this.e;
    }
    else if (value== 0) {
      this.dropdowndata = this.FilteredProducts.sort((n1, n2) => n1.productId - n2.productId);
      this.products = this.dropdowndata;
    }
    else 
    {
      this.products = this.e.reverse();
     
    }
  }
  FilterByRating(rating:number)
  {
    let filtered:Products[];
    console.log(this.products)
    
    if(rating==5)
    {
      filtered=this.FilteredProducts.filter(x=>x.productRating>=5);
    }
    else if(rating==4)
    {
     
      filtered=this.FilteredProducts.filter(x=>x.productRating>=4);
      console.log(filtered)
      this.products=filtered;
    }
    else if(rating==3)
    {
      
      filtered=this.FilteredProducts.filter(x=>x.productRating>=3);
    }
    else if(rating==2)
    {
      filtered=this.FilteredProducts.filter(x=>x.productRating>=2);
    }
    else
    {
      filtered=this.FilteredProducts.filter(x=>x.productRating>=0);
    }
    this.products=filtered;
    console.log(this.products)
  }


  onClick(pid: number, rating: number, halfstar: number) {

    this.Productsservice.updateData(pid, rating, halfstar);

    this.router.navigate(['productdetails']);
  }
  refresh(){
    window.location.reload()
  }
  

 
}
