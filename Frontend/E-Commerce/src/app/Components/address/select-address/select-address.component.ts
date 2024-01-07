import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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
  selector: 'app-select-address',
  templateUrl: './select-address.component.html',
  styleUrls: ['./select-address.component.css']
})
export class SelectAddressComponent implements OnInit {

  addresses: Address[];
  DefaultCheckArray = Array();
  selectedaddress: number = 0;
  buy: Buy[];
  FinalOrderPlace: Buy = new Buy();
  length: number;
  itemscount: number = 0;
  TotalPrice: number = 0;
  productsstatus: Products = new Products();
  date = new Date();
  formValue!: FormGroup;
  address: Address = new Address();
  addressarray: Address[];
  addressidtodelete: number;

  @ViewChild('closeBtn', { static: false }) closeBtn: ElementRef;
  @ViewChild('closeBtnDelete', { static: false }) closeBtnDelete: ElementRef;

  constructor(private addressservice: AddressService, private cartservice: CartService,
    private buyservice: BuyService, private productservice: ProductsServiceService,
    private formBuilder: FormBuilder, private location: Location,
    private router: Router) { }

  ngOnInit(): void {
    this.GetAllAddresses();
    this.GetCheckout();
    this.TotalProducts();
    this.TotalPrice = 0;
    localStorage.getItem('cartcount')

    this.formValue = this.formBuilder.group({
      addressId: [''],
      userName: [''],
      fullName: [''],
      country: [''],
      mobileNo: [''],
      pincode: [''],
      houseNo: [''],
      area: [''],
      landMark: [''],
      city: [''],
      state: [''],
    })

  }
  goback() {
    this.location.back();
  }

  Editaddress(id: number) {
    this.addressarray = this.addressarray.filter(x => x.addressId == id);
    console.log(this.addressarray)
    this.address.addressId = this.addressarray[0].addressId;
    this.address.userName = this.addressarray[0].userName;

    this.formValue.controls["fullName"].setValue(this.addressarray[0].fullName);
    this.formValue.controls["country"].setValue(this.addressarray[0].country);
    this.formValue.controls["mobileNo"].setValue(this.addressarray[0].mobileNo);
    this.formValue.controls["pincode"].setValue(this.addressarray[0].pincode);
    this.formValue.controls["houseNo"].setValue(this.addressarray[0].houseNo);

    this.formValue.controls["area"].setValue(this.addressarray[0].area);
    this.formValue.controls["landMark"].setValue(this.addressarray[0].landMark);
    this.formValue.controls["city"].setValue(this.addressarray[0].city);
    this.formValue.controls["state"].setValue(this.addressarray[0].state);

  }


  UpdateAddress() {

    this.address.fullName = this.formValue.value.fullName;
    this.address.country = this.formValue.value.country;
    this.address.mobileNo = this.formValue.value.mobileNo;
    this.address.pincode = this.formValue.value.pincode;
    this.address.houseNo = this.formValue.value.houseNo;
    this.address.area = this.formValue.value.area;
    this.address.landMark = this.formValue.value.landMark;
    this.address.city = this.formValue.value.city;
    this.address.state = this.formValue.value.state;

    this.addressservice.Update(this.address).subscribe({
      complete: () => {
        this.closeBtn.nativeElement.click();

      },
      error: () => {
        alert('Error');
      }
    })
  }

  DeleteAddress(addressid: number) {
    this.addressidtodelete = addressid;

  }
  ConfirmDelete() {
    this.addressservice.Delete(this.addressidtodelete).subscribe((res) => {

      this.closeBtnDelete.nativeElement.click();

    })
  }



  GetAllAddresses() {
    this.addressservice.GetData().subscribe((result) => {

      let name = localStorage.getItem('userName') as string;
      this.addresses = result.filter(x => x.userName == name);
      this.addressarray = this.addresses
      this.DefaultCheckArray = Array(this.addresses.length).fill(false);
      for (var i = 0; i < this.addresses.length; i++) {
        this.DefaultCheckArray[i] = this.addresses[i].isDefault;
        if (this.addresses[i].isDefault == true) {
          this.selectedaddress = this.addresses[i].addressId;
        }
      }

    })


  }

  AddressSelect(index: number) {
    this.DefaultCheckArray = Array(this.addresses.length).fill(false);
    this.DefaultCheckArray[index] = true;
    this.selectedaddress = this.addresses[index].addressId;

  }



  GetCheckout() {
    this.buy = this.cartservice.GetCheckOut()


  }

  TotalProducts() {
    this.buy = this.cartservice.GetCheckOut()

    this.length = Object.keys(this.buy).length;

    this.itemscount = 0;
    for (var i = 0; i < this.length; i++) {
      this.itemscount += parseInt(this.buy[i].noOfItems);
      let id = parseInt(this.buy[i].productId);
      this.productservice.GetProducts().subscribe((result) => {

        let prodarray = result.filter(x => x.productId == id)

        this.TotalPrice += prodarray[0].productPrice;
      })
    }

    //date.setHours(date.getHours() + 5);//To add in hours
    this.date.setMinutes(this.date.getMinutes() + 15); // increment by 15 minutes

  }
  PlaceOrder() {
    localStorage.setItem('addressid', JSON.stringify(this.selectedaddress))
    this.router.navigate(['ordersummary'])
  }



}
