import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Buy } from 'src/app/Models/Buy';
import { Cart } from 'src/app/Models/Cart';
import { Products } from 'src/app/Models/Products';
import { BuyService } from 'src/app/Services/buy.service';
import { CartService } from 'src/app/Services/cart.service';
import { ProductsServiceService } from 'src/app/Services/products-service.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit{

  buy: Buy[];
  cart: Cart[];
  products: Products[];
  shippingdata = Array();
  ShippingProducts = Array();
  produ = Array();
  iterations = 5;
  numbers = Array.from({ length: this.iterations }, (_, i) => i + 1);
  currentDateTime = new Date();
  checkdates: Buy[];
  formattedDate: Date;
  datestr: string = "";
  duration: number;
  updatestatus: Buy = new Buy();

  DeliveryDate = Array();

  numberOfArrays: number = 0;
  productidsarrays: Products[][] = [];
  noofitemsarray:number[][]=[];
TrackId:number=1;

  constructor(private buyservice: BuyService, private cartservice: CartService,
    private productservice: ProductsServiceService, public datepipe: DatePipe) { }
  ngOnInit(): void 
  {
    this.productservice.GetProducts().subscribe((result) => {
      this.products = result;
  
    });
    
    this.GetAllData();
   

  }

  GetTrackId()
  {
    this.TrackId=JSON.parse(localStorage.getItem('trackid') as string);
    
    
  }
  GetAllData() {
    this.buyservice.GetData().subscribe((result) => 
    {
      this.buy = result;
      
      this.FilterOrdersData();
    });
  }



  FilterOrdersData() 
  {
    
    this.shippingdata = this.buy.filter(x => x.buyId == this.TrackId)
   
    this.numberOfArrays = this.shippingdata.length;
   

    for (let i = 0; i < this.numberOfArrays; i++) 
    {
      this.productidsarrays[i] = new Array();
      this.noofitemsarray[i] = new Array();
      

      let splitproductids= this.shippingdata[i].productId.split(",");
      let splitnoofitems= this.shippingdata[i].noOfItems.split(",");
      
      for(var j=0;j<splitproductids.length;j++)
      {
      
        let pid=parseInt(splitproductids[j])
        let productsfiltered=this.products.filter(x=>x.productId==pid);
        this.productidsarrays[i].push(productsfiltered[0]);
        this.noofitemsarray[i].push(parseInt(splitnoofitems[j]));
       
      }  
     
    }
    
   
    this.OrderedProducts();
  }

  OrderedProducts() 
  {
    this.productservice.GetProducts().subscribe((result) => {
      this.products = result;
      for (var i = 0; i < this.shippingdata.length; i++) {
        let p = this.products.filter(x => x.productId == this.shippingdata[i].productId)

        this.ShippingProducts.push(p[0]);
      }

    });
  }


  Cancel(id: number) {
    let buyid = this.shippingdata[id].buyId

    let buy = this.buy.filter(x => x.buyId == buyid);

    buy[0].status = 4;

    this.buyservice.Update(buy[0]).subscribe((result) => {
    })
  }
}