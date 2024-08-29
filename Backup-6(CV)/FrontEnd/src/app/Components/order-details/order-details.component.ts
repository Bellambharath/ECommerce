import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Buy } from 'src/app/Models/Buy';
import { Cart } from 'src/app/Models/Cart';
import { Products } from 'src/app/Models/Products';
import { BuyService } from 'src/app/Services/buy.service';
import { CartService } from 'src/app/Services/cart.service';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import * as moment from 'moment';
import {MatBadgeModule} from '@angular/material/badge';
import { MyOrdersComponent } from '../my-orders/my-orders.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit, AfterViewInit {

  @ViewChild('btn', { static: true }) btn: ElementRef;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollFunction();
  }

  ngAfterViewInit() {
    this.btn.nativeElement.addEventListener("click", () => {
      this.backToTop();
    });
  }

  @ViewChild(MyOrdersComponent) viewtrackid!:MyOrdersComponent;


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
popuptrack:Buy=new Buy();

  constructor(private buyservice: BuyService, private cartservice: CartService,
    private productservice: ProductsServiceService, public datepipe: DatePipe,private router:Router) { }
  ngOnInit(): void 
  {
    this.productservice.GetProducts().subscribe((result) => {
      this.products = result;
     
    });
    this.GetAllData();
    this.CheckingDates();

  }
  ProductDetails(pid:number)
  {
    this.productservice.updateproductid(pid);
    let a="productdetails";
    localStorage.setItem('pdetails',a)
    this.router.navigate(['productdetails']);
  }

  GetAllData() {
    this.buyservice.GetData().subscribe((result) => {

      this.buy = result;
      this.buy=this.buy.reverse();
    
      this.FilterOrdersData();
    });
  }

  FilterOrdersData() 
  {
    let name = localStorage.getItem("userName") as string;

    this.shippingdata = this.buy.filter(x => x.userName == name)
   
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
    this.ExpectedDeliveryDates();
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


  Cancel(id: number) 
  {
    let buy = this.buy.filter(x => x.buyId == id);

    buy[0].status = 4;

    this.buyservice.Update(buy[0]).subscribe((result) => {
    })
  }
  TrackOrder(id:number)
  {
    let trackdata=this.buy.filter(x=>x.buyId==id);
    this.popuptrack=trackdata[0]
   
  }

  CheckingDates() 
  {
    // this.buyservice.GetData().subscribe((res) => {
    //   this.checkdates = res;
    //   for (var i = 0; i < this.checkdates.length; i++) {
    //     this.datestr = this.datepipe.transform(this.checkdates[i].orderPlacedTime, 'YYYYMMDDHHmmss') as string;

    //     this.duration = moment(this.checkdates[i].orderPlacedTime, "YYYYMMDDHHmmss").diff(moment(), 'minutes');
    //     let settimetoupdate = 1;
    //     let t = this.duration / settimetoupdate;

    //     let time = Math.abs(Math.floor(t));
    //     let val = 0;


    //     if (time >= 2) {
    //       val = 1;
    //     }
    //     if (time >= 5) {
    //       val = 2;
    //     }
    //     if (time >= 9) {
    //       val = 3;
    //     }
    //     this.checkdates[i].status = val;
    //     this.buyservice.Update(this.checkdates[i]).subscribe((res) => {
    //     });

    //   }
    // })

  }

  ExpectedDeliveryDates() 
  {

    for (var i = 0; i < this.shippingdata.length; i++) 
    {
      var date = new Date(this.shippingdata[i].orderPlacedTime);
     
      date.setMinutes(date.getMinutes() + 10); 
      this.DeliveryDate.push(date);
      
    }
  
  }


  scrollFunction() 
  {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      this.btn.nativeElement.style.display = "block";
    } else {
      this.btn.nativeElement.style.display = "none";
    }
  }

  backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }







}
