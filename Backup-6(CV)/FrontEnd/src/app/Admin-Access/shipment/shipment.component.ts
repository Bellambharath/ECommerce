import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Buy } from 'src/app/Models/Buy';
import { Cart } from 'src/app/Models/Cart';
import { Products } from 'src/app/Models/Products';
import { BuyService } from 'src/app/Services/buy.service';
import { ProductsServiceService } from 'src/app/Services/products-service.service';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})
export class ShipmentComponent implements OnInit {

  buy: Buy[];
  cart: Cart[];
  
  products: Products[];
  ShippingProducts = Array();
  productidsarrays: Products[][] = [];
  Quantityarrays: string[][] = [];


  constructor(private buyservice: BuyService,
    private productservice: ProductsServiceService,private router: Router) { }
  ngOnInit(): void {
    this.GetAllData();

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
      this.buy.reverse();
    
      

      this.FilterOrdersData();
    });
  }
  FilterOrdersData() {
    this.productservice.GetProducts().subscribe((result) => 
    {
      let pro = result;
      for (var i = 0; i < this.buy.length; i++) 
      {
        this.productidsarrays[i] = new Array();
        this.Quantityarrays[i] = new Array();
        
        let pids=this.buy[i].productId.split(',')
        let quantities=this.buy[i].noOfItems.split(',')
        for(var j=0;j<pids.length;j++)
        {
          let p = pro.filter(x => x.productId ==parseInt(pids[j]))
          
           this.productidsarrays[i].push(p[0])
           this.Quantityarrays[i].push(quantities[j])
        }
       
        this.ShippingProducts.push(this.buy[i]);
        
      }

    })

  }

  Approve(buyid: number) 
  {

    let buystatus = this.buy.filter(x => x.buyId == buyid)
    buystatus[0].status = buystatus[0].status+1;

    this.buyservice.Update(buystatus[0]).subscribe((result) => {
      
    })

  }
  Cancel(buyid: number) 
  {
    let buystatus = this.buy.filter(x => x.buyId == buyid)
    buystatus[0].status = 4;
    
    this.buyservice.Update(buystatus[0]).subscribe((result) => {
      
    })
  }

}
