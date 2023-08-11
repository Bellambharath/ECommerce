import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/Models/Address';
import { Buy } from 'src/app/Models/Buy';
import { Products } from 'src/app/Models/Products';
import { AddressService } from 'src/app/Services/address.service';
import { BuyService } from 'src/app/Services/buy.service';
import { CartService } from 'src/app/Services/cart.service';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  addresses: Address[];
  selectedaddress: number = 0;
  buy: Buy[];
  FinalOrderPlace: Buy = new Buy();
  length: number;
  TotalPrice: number = 0;
  productsstatus: Products = new Products();
  date = new Date();

  Products = Array();
  NoofItemsSelected = Array();
  constructor(private addressservice: AddressService, private cartservice: CartService,
    private buyservice: BuyService, private productservice: ProductsServiceService,
    private router: Router,private location: Location) {}
 
  ngOnInit(): void {
    this.GetAllAddresses();
    this.GetCheckout();
    this.TotalProducts();
    this.TotalPrice = 0;
    this.selectedaddress = JSON.parse(localStorage.getItem('addressid') as string)
  }
  goback() { 
    this.location.back(); 
  }
  GetAllAddresses() {
    this.addressservice.GetData().subscribe((result) => {
      this.addresses = result;
    })
  }
  AddressSelect(addressid: number) {
    this.selectedaddress = addressid;

  }

  GetCheckout() {
    this.buy = this.cartservice.GetCheckOut()
    this.GetOrderedProducts();

  }
  GetOrderedProducts() {

    this.productservice.GetProducts().subscribe((res) => {

      this.length = Object.keys(this.buy).length;
      for (var i = 0; i < this.length; i++) {
        let a = res.filter(x => x.productId == parseInt(this.buy[i].productId))

        this.Products.push(a[0]);
        this.NoofItemsSelected.push(parseInt(this.buy[i].noOfItems));
      }
    })
   
  }

  PlaceOrder() {

    let user = localStorage.getItem('userName') as string;
    let currentDateTime = new Date();

    this.length = Object.keys(this.buy).length;
    this.FinalOrderPlace.addressId = this.selectedaddress;
    this.FinalOrderPlace.userName = user;
    this.FinalOrderPlace.status = 0;
    this.FinalOrderPlace.statusTime = currentDateTime;
    this.FinalOrderPlace.orderPlacedTime = currentDateTime;
    this.FinalOrderPlace.orderid = "orderid";
    this.FinalOrderPlace.productId = "";
    this.FinalOrderPlace.noOfItems = "";
    this.FinalOrderPlace.totalPrice = 0;
    for (var i = 0; i < this.length; i++) 
    {
      this.FinalOrderPlace.totalPrice += this.buy[i].totalPrice;

      this.FinalOrderPlace.productId += this.buy[i].productId;
      this.FinalOrderPlace.noOfItems += this.buy[i].noOfItems;
      if (i != this.length - 1) 
      {
        this.FinalOrderPlace.productId += ",";
        this.FinalOrderPlace.noOfItems += ",";
      }
    }
    this.myFunction(this.FinalOrderPlace, this.length, this.buy);
    
  }

  async myFunction(finalorder: Buy, len: number, b: Buy[]) 
  {
    this.FinalOrderPlace = finalorder;
    this.length = len;
    this.buy = b;

    await this.buyservice.AddData(this.FinalOrderPlace).toPromise();

    for (var i = 0; i < this.length; i++) {
      let check = false;
      this.productsstatus.noofstocks = parseInt(this.buy[i].noOfItems);
      this.productsstatus.productId = parseInt(this.buy[i].productId);

      await this.productservice.UpdateStock(this.productsstatus).toPromise();
      const res = await this.cartservice.Delete(this.productsstatus.productId).toPromise();

      if (res && res.productId == this.productsstatus.productId) {
        check = true;
      }

      while (!check) {
      
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    this.selectedaddress = 0;
    this.buy = Array();
    this.TotalPrice = 0;
    localStorage.setItem('tempproductids', JSON.stringify(this.buy));
    this.router.navigate(['myorders']);
  }

  TotalProducts() {
    this.buy = this.cartservice.GetCheckOut()

    this.length = Object.keys(this.buy).length;

    for (var i = 0; i < this.length; i++) {
      let id = parseInt(this.buy[i].productId);
      this.productservice.GetProducts().subscribe((result) => {

        let prodarray = result.filter(x => x.productId == id)

        this.TotalPrice += prodarray[0].productPrice;
      })
    }
    this.date.setMinutes(this.date.getMinutes() + 15); 

  }
  ProductDetails(pid:number)
  {
    this.productservice.updateproductid(pid);
    let a="productdetails";
    localStorage.setItem('pdetails',a)
    this.router.navigate(['productdetails']);
  }


}
