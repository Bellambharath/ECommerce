import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Buy } from 'src/app/Models/Buy';
import { Cart } from 'src/app/Models/Cart';
import { Products } from 'src/app/Models/Products';
import { Trash } from 'src/app/Models/Trash';
import { BuyService } from 'src/app/Services/buy.service';
import { CartService } from 'src/app/Services/cart.service';
import { JsonService } from 'src/app/Services/json.service';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { SignupService } from 'src/app/Services/signup.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, AfterViewInit {

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

  products: Products[];
  p: Products[];
  productstobuy: Products[];
  cart: Cart[];
  c: Cart = new Cart();
  ProductsInCart: Products[];
  UserBasedCart = Array();
  uname: string = '';
  Trash: boolean = false;
  trashdata: Trash[];
  TrashdatatoDisplay: Trash[];
  UserbasedTrash = Array();
  CartCount: number = 1;
  noOfProducts: number;
  buy: Buy = new Buy();
  n: number;
  Quantity = Array();
  data: number;
  productsstatus: Products = new Products();
  QuentityCount: any[];
  size: number;
  totalquantity: number = 0;
  totalmrp: number = 0;
  SelectArray: any[];
  currentDateTime = new Date();
  originalDate = new Date();
  originalDateofdelivery = new Date();
  incrementedDate = new Date();
  ProductIdArray: number[];
  TempQuantityArray: number[];
  cartids = Array();
  length: number;

  logincheck: boolean = false;

  CheckOutProducts = Array();

  constructor(private jsonservice: JsonService, private cartservice: CartService,
    private productservice: ProductsServiceService, private toastr: ToastrService,
    private buyservice: BuyService, private auth: SignupService, private router: Router,) {
    this.QuentityCount = Array.from({ length: this.size }, () => 0);
  }

  ngOnInit(): void {
    this.GetCart();
    this.uname = localStorage.getItem('userName') as string;
    this.originalDateofdelivery.setDate(this.incrementedDate.getDate() + 2);
    this.incrementedDate.setDate(this.incrementedDate.getDate() + 4);

    this.ProductIdArray = this.productservice.GetProductidArray();
    this.TempQuantityArray = this.productservice.GetQuantityArray();

    this.length = Object.keys(this.ProductIdArray).length;
    this.logincheck = this.auth.isLoggedin();


    if (!(this.ProductIdArray == undefined || this.ProductIdArray == null)) {
      this.length = Object.keys(this.ProductIdArray).length;
    }

    this.AddingProductsToCart();
   

  }



  scrollFunction() {
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

  createArray() 
  {
    this.size = this.UserBasedCart.length;
    this.QuentityCount = Array(this.size).fill(1);
    
    let name = localStorage.getItem('userName') as string;
    let usercart = this.cart.filter(x => x.userName == name)
   
    for (var i = 0; i < this.size; i++) 
    {
      this.QuentityCount[i] = usercart[i].quantity;
      this.totalquantity += usercart[i].quantity;
    }
    
    this.SelectArray = Array(this.size).fill(true);
    
    localStorage.setItem('cartcount',JSON.stringify(this.totalquantity))

  }
  Trashvalue() {
    if (this.Trash) {
      this.Trash = false;
    }
    else {
      this.Trash = true;
    }

  }

  TrashData() {
    this.jsonservice.GetJsonData().subscribe((result) => {
      this.trashdata = result;

      this.GetUserCartTrash();

    })
  }

  GetUserCartTrash() {
    let name = localStorage.getItem('userName') as string;
    let carttrash = this.trashdata.filter(x => x.userName == name);

    for (var i = 0; i < carttrash.length; i++) {
      let products = this.p.filter(x => x.productId == carttrash[i].productId)
      this.UserbasedTrash.push(products[0]);
    }
  }


  GetCart() {

    this.cartservice.Get().subscribe((res) => {

      this.cart = res;

      this.GetProducts();
    });
  }
  GetProducts() 
  {
    if (this.auth.isLoggedin()) 
    {
      this.productservice.GetProducts().subscribe((result) => {
        let name = localStorage.getItem('userName') as string;
        this.p = result;

        for (var i = 0; i < this.cart.length; i++) 
        {
          this.products = result.filter(item => item.productId == this.cart[i].productId);
          if (this.products != null && this.cart[i].userName == name) 
          {
            this.UserBasedCart.push(this.products[0]);
          }
        }

        this.createArray();
        this.TrashData();
        for (var i = 0; i < this.UserBasedCart.length; i++) {
          this.totalmrp += this.QuentityCount[i] * this.UserBasedCart[i].productPrice
        }
      });
  
    }
    else {
      this.productservice.GetProducts().subscribe((result) => {

        this.p = result;

        for (var i = 0; i < this.length; i++) {
          this.products = result.filter(item => item.productId == this.ProductIdArray[i]);

          if (this.products != null) {
            this.UserBasedCart.push(this.products[0]);
          }
        }

        this.CreateArrayWithoutLogin();
        this.TrashData();
        this.totalmrp=0;
        for (var i = 0; i < this.UserBasedCart.length; i++) 
        {
          
          this.totalmrp += this.QuentityCount[i] * this.UserBasedCart[i].productPrice;
          
        }
      });
    }

  }
  CreateArrayWithoutLogin() 
  {
    this.TempQuantityArray = this.productservice.GetQuantityArray();
    this.size = this.UserBasedCart.length;
    this.QuentityCount = Array(this.size).fill(1);
    for (var i = 0; i < this.size; i++) 
    {
      this.QuentityCount[i] = this.TempQuantityArray[i];
    }
   
    this.totalquantity = this.QuentityCount.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
   
    
   
    localStorage.setItem('cartcount',JSON.stringify(this.totalquantity))
    this.SelectArray = Array(this.size).fill(true);
    this.totalmrp = 0;
    for (var i = 0; i < this.UserBasedCart.length; i++) 
    {
      this.totalmrp += this.QuentityCount[i] * this.UserBasedCart[i].productPrice;
    }
  }
  DeleteFromCart(id: number) {
    console.log(id)
    let user = localStorage.getItem('userName') as string;
    let deletedcart = this.cart.filter(cart => cart.productId == id);
    deletedcart[0].productId = id;
    deletedcart[0].userName = user;

    this.jsonservice.AddToJson(deletedcart[0]).subscribe((res) => {

      this.cartservice.Delete(id).subscribe((res) => {

        this.toastr.success("Deleted Successfully", "Cart")
      });
    });
  }

  DeleteFromtempCart(id: number) {
    this.productservice.DeleteProductidArray(id);
  }



  DeleteFromTrash(productid: number) {
    let name = localStorage.getItem('userName') as string;
    let carttrashdata = this.trashdata.filter(x => x.userName == name);
    let trashtodelete = carttrashdata.filter(x => x.productId == productid);
    let Idinjson = trashtodelete[0].id;

    this.jsonservice.DeleteJsonData(Idinjson).subscribe((res) => {

    });

  }
  Restore(productid: number) {
    this.c.userName = localStorage.getItem('userName') as string;
    this.c.productId = productid;


    this.cartservice.Add(this.c).subscribe((res) => {
      this.GetProducts();

      this.DeleteFromTrash(productid);


    });
  }


  Buy(productid: number) {
    this.n = productid
    this.productstobuy = this.p.filter(x => x.productId == productid)

    this.noOfProducts = this.productstobuy[0].noofstocks;

    for (var i = 1; i <= this.noOfProducts; i++) {
      this.Quantity.push(i);
    }


  }

  Increment(index: number, n: number)
   {
    this.cartservice.UpdateQuantity(index, 1).subscribe((res) => {
      
    })
    this.QuentityCount[index] = n + 1;

    this.totalquantity = this.QuentityCount.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    this.totalmrp += this.UserBasedCart[index].productPrice;
    localStorage.setItem('cartcount',JSON.stringify(this.totalquantity))

  }

  Decrement(index: number, n: number) 
  {
    this.cartservice.UpdateQuantity(index, -1).subscribe((res) => {
     
    })
    this.QuentityCount[index] = n - 1;
    this.totalquantity = this.QuentityCount.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    this.totalmrp -= this.UserBasedCart[index].productPrice;
    
    localStorage.setItem('cartcount',JSON.stringify(this.totalquantity))
  }
  IncrementWithoutLogin(id: number) 
  {

    this.productservice.TempIncrement(id);
    
    this.CreateArrayWithoutLogin();
    

  }
  DecrementWithoutLogin(id: number) {
    this.productservice.TempDecrement(id);
    this.CreateArrayWithoutLogin();
    

  }

  TotalPricing() {
    this.totalquantity = this.QuentityCount.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    this.totalmrp = 0;
    for (var i = 0; i < this.QuentityCount.length; i++) {

      this.totalmrp += this.QuentityCount[i] * this.UserBasedCart[i].productPrice;

    }
  
    localStorage.setItem('cartcount',JSON.stringify(this.totalquantity))

  }

  SelectItems(index: number) 
  {
    if (this.SelectArray[index]) 
    {

      this.totalquantity -= this.QuentityCount[index];
      this.totalmrp -= this.QuentityCount[index] * this.UserBasedCart[index].productPrice;

      this.SelectArray[index] = false;
      this.QuentityCount[index] = 1;

    }
    else 
    {
      this.QuentityCount[index] = 1;
      this.totalquantity += this.QuentityCount[index];
      this.totalmrp += this.QuentityCount[index] * this.UserBasedCart[index].productPrice;
      this.SelectArray[index] = true;

    }
   
    localStorage.setItem('cartcount',JSON.stringify(this.totalquantity))
  }

  PlaceOrder(productid: number, cartcount: number): Buy 
  {
    let user = localStorage.getItem('userName') as string;
    let pro = this.cart.filter(cart => cart.productId == productid);

    let produc = pro.filter(item => item.userName == user);
    this.buy.status = 0;
    this.buy.noOfItems = cartcount.toString();

    this.buy.userName = user;
    this.buy.productId = productid.toString();
    this.buy.orderPlacedTime = this.currentDateTime;

    let price = this.p.filter(x => x.productId == productid);

    this.buy.totalPrice = price[0].productPrice * parseInt(this.buy.noOfItems);

    this.productsstatus.noofstocks = parseInt(this.buy.noOfItems);
    this.productsstatus.productId = productid;

    return this.buy

  }

  CheckOut() 
  {
    localStorage.removeItem("checkout");
    this.cartservice.checkoutarray = Array();

    for (var i = 0; i < this.SelectArray.length; i++) 
    {
      if (this.SelectArray[i] == true) 
      {
        let aa = this.PlaceOrder(this.UserBasedCart[i].productId, this.QuentityCount[i]);

        localStorage.setItem('checkout', JSON.stringify(aa));
        this.cartservice.CheckOut();

      }
    }

    this.router.navigate(['selectaddress'])

  }
  CheckOutWithOutLogin() 
  {
    localStorage.setItem('itemcount', JSON.stringify(this.QuentityCount))
    let a = "cart";
    localStorage.setItem('loginfromcart', a)
    this.router.navigate(["login"]);
  }

  AddingProductsToCart() 
  {
    if (this.auth.isLoggedin()) 
    {
      let name = localStorage.getItem('userName') as string;
      let values = Object.values(this.ProductIdArray);
      let ProductQuantity = Object.values(this.TempQuantityArray);
     
      for (var i = 0; i < values.length; i++) 
      {
        let check = false;
        this.c.userName = name;
        this.c.productId = values[i];
        this.c.quantity=ProductQuantity[i];

        this.cartservice.Add(this.c).subscribe((r) => 
        {
         
          if (r.productId == this.c.productId) 
          {
            check = true;
          }
        });
        if (!check)
        {
          
          const start = new Date().getTime();
          while (new Date().getTime() < start + 1000);
        }
      }
      this.ProductIdArray = Array();
      localStorage.setItem('tempproductids', JSON.stringify(this.ProductIdArray));
      this.TempQuantityArray = Array();
      localStorage.setItem('tempproductids', JSON.stringify(this.TempQuantityArray));

    }
  }

  ProductDetails(pid:number)
  {
    this.productservice.updateproductid(pid);
    let a="productdetails";
    localStorage.setItem('pdetails',a)
    this.router.navigate(['productdetails']);
  }


}
