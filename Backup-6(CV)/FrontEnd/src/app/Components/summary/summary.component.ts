
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
import confetti from 'canvas-confetti';
import { Couponcode } from 'src/app/Models/Couponcode';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  GrandTotal: number = 0;
  DiscountPrice: number = 0;
  Deliveryfee: number = 0;
  productsstatus: Products = new Products();
  date = new Date();
  promoCode: string = '';

  Products = Array();
  NoofItemsSelected = Array();
  promoCodes: Couponcode[]
  selectedPromoCode: string | null = null;
  promoDescription: string | null = null;
  userName = localStorage.getItem('userName') as string;

  constructor(private addressservice: AddressService, private cartservice: CartService,
    private buyservice: BuyService, private productservice: ProductsServiceService,
    private router: Router, private location: Location, private toastr: ToastrService,
    private snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.getCouponCodes()
    this.GetAllAddresses();
    this.GetCheckout();
    this.TotalProducts();
    this.TotalPrice = 0;
    this.DiscountPrice = 0;
    this.selectedaddress = JSON.parse(localStorage.getItem('addressid') as string);

  }
  openSnackBar(message: string,time:number) {
    this.snackBar.open(message, 'Close', {
      duration: time,
      panelClass: ['warning-snackbar'] 
    });
  }
  getCouponCodes() {
    this.buyservice.GetCoupons().subscribe((r) => {
      this.promoCodes = r
      this.buyservice.isFirstOrder(this.userName).subscribe((res) => {
        console.log('isFirstOrder', res)
        this.promoCodes.filter(x => x.couponcode == 'SAVE100')[0].isApplicable = res
      })
    })
  }

  triggerConfetti() {
    const duration = 3 * 1000; // 3 seconds
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
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

  onPromoCodeChange() {
    const selectedPromo = this.promoCodes.find(promo => promo.couponcode === this.selectedPromoCode);
    if (selectedPromo) {
      this.promoDescription = selectedPromo.description;
    } else {
      this.promoDescription = null;
    }
  }

  applyPromoCode() {
    if (this.selectedPromoCode) {
      const selectedPromo = this.promoCodes.find(promo => promo.couponcode === this.selectedPromoCode);

      if (selectedPromo) {
        if (!selectedPromo.isApplicable) {
          this.selectedPromoCode = null;
          this.openSnackBar('This promo code is not applicable to your order.',3000);
          return;
        }

        switch (this.selectedPromoCode.toUpperCase()) {
          case 'SHOPEASE200':
            if (this.TotalPrice >=599)
              {
                this.DiscountPrice = 200;
                this.GrandTotal = this.TotalPrice - this.DiscountPrice;
                this.triggerConfetti();
              }
              else{
                this.selectedPromoCode = null;
                this.openSnackBar('The total value of cart items applicable for this coupon should be more than Rs.599.',5000);
              }
            break;
          case 'SUMMERSALE':
            this.DiscountPrice = Math.round(this.TotalPrice * 0.25);
            this.GrandTotal = Math.round(this.TotalPrice * 0.75);
            this.triggerConfetti();
            break;
          case 'FREESHIP':
            if (this.Deliveryfee > 0 && this.TotalPrice >499) {
              this.GrandTotal = this.TotalPrice - this.Deliveryfee;
              this.Deliveryfee = 0;
              this.triggerConfetti();
            }
            else if (this.Deliveryfee == 0 && this.TotalPrice >499)
            {
              this.selectedPromoCode = null;
              this.openSnackBar('Offer already applied',3000)
              this.triggerConfetti();
            }
            break;
          case 'SAVE100':
            if(this.TotalPrice>=299)
            {
              this.DiscountPrice = 100;
              this.GrandTotal = this.TotalPrice - this.DiscountPrice;
              this.triggerConfetti();
            }
            else{
              this.selectedPromoCode = null;
              let remainingtoadd = 300-this.TotalPrice
              this.openSnackBar(`Shop for ${remainingtoadd} more to avail this offer.`,4000);
            }
            break;
          case 'BUY2GET50OFF':
            this.applyBuy2Get50Off();
            break;
          default:
            this.openSnackBar('Invalid promo code',3000);
        }
        this.DiscountPrice = Math.round(this.DiscountPrice);
        this.GrandTotal = Math.round(this.GrandTotal);
      }
    } else {
      this.openSnackBar('Please select a valid promo code - Invali Coupon code',5000)
    }
  }

  applyBuy2Get50Off() {
    const itemCounts = this.NoofItemsSelected.reduce((acc, count) => acc + count, 0);
    if (itemCounts >= 3) {
      const sortedProducts = this.Products.slice().sort((a, b) => a.productPrice - b.productPrice);
      const thirdCheapest = sortedProducts[2];
      if (thirdCheapest) {
        const discount = thirdCheapest.productPrice * 0.5;
        this.DiscountPrice = Math.round(discount);
        this.GrandTotal = Math.round(this.TotalPrice - discount);
        this.triggerConfetti();
      }
    } else {
      this.selectedPromoCode = null;
      this.openSnackBar('You need to buy at least 3 items to avail this offer',4000)
    }
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
    for (var i = 0; i < this.length; i++) {
      this.FinalOrderPlace.totalPrice = this.GrandTotal;
      this.FinalOrderPlace.productId += this.buy[i].productId;
      this.FinalOrderPlace.noOfItems += this.buy[i].noOfItems;
      if (i != this.length - 1) {
        this.FinalOrderPlace.productId += ",";
        this.FinalOrderPlace.noOfItems += ",";
      }
    }
    this.myFunction(this.FinalOrderPlace, this.length, this.buy);
  }

  async myFunction(finalorder: Buy, len: number, b: Buy[]) {
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
    console.log("cartservice", this.buy)
    this.length = Object.keys(this.buy).length;

    for (var i = 0; i < this.length; i++) {
      let id = parseInt(this.buy[i].productId);
      let noofitems = parseInt(this.buy[i].noOfItems)
      this.productservice.GetProducts().subscribe((result) => {
        let prodarray = result.filter(x => x.productId == id)
        console.log("price", prodarray)
        this.TotalPrice += prodarray[0].productPrice * noofitems;
        this.GrandTotal = this.TotalPrice

        if (this.GrandTotal < 299) {
          this.Deliveryfee = 50
        } else {
          console.log(this.GrandTotal)
          this.Deliveryfee = 0
          console.log(this.Deliveryfee)
        }

      })
    }

    this.date.setMinutes(this.date.getMinutes() + 15);

  }
  ProductDetails(pid: number) {
    this.productservice.updateproductid(pid);
    let a = "productdetails";
    localStorage.setItem('pdetails', a)
    this.router.navigate(['productdetails']);
  }
}
