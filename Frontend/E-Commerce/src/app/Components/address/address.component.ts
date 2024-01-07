import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/Models/Address';
import { AddressService } from 'src/app/Services/address.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @ViewChild('closeBtn', { static: false }) closeBtn: ElementRef;

  address: Address = new Address();
  alladdresses: Address[];
  addresses: Address[];
  UserBasedAddresses: Address[];
  addressidtodelete: number;
  olddefaultaddressid: number = 0;
  constructor(private addressservice: AddressService, private router: Router,private location: Location) { }


  ngOnInit(): void {
    this.GetAllAddresses();
    
  }
  GetAllAddresses() {
    this.addressservice.GetData().subscribe((res) => {
      this.alladdresses = res;
      this.DefaultCheck();
      this.FilterAddresses();
    })
  }

  goback() 
  { 
    this.location.back(); 
  }

  FilterAddresses() {
    let username = localStorage.getItem("userName") as string;
    for (var i = 0; i < this.alladdresses.length; i++) {
      this.addresses = this.alladdresses.filter(x => x.userName == username);

      this.address.userName = username;
      this.addresses.push(this.address);
      this.UserBasedAddresses = this.addresses;

    }

  }
  AddAddress() {
    let a = 2;
    let b = a.toString();

    localStorage.setItem('check', b);
    this.router.navigate(["addaddress"]);
  }
  EditAddress(addressid: number) {
    let address = addressid.toString();
    let a = 1;
    let b = a.toString();
    localStorage.setItem('addressid', address);
    localStorage.setItem('check', b);
    this.router.navigate(["addaddress"])

  }

  DeleteAddress(addressid: number) {
    this.addressidtodelete = addressid;

  }
  ConfirmDelete() {
    this.addressservice.Delete(this.addressidtodelete).subscribe((res) => {

      this.closeBtn.nativeElement.click();

    })
  }
  DefaultCheck() 
  {


    let name = localStorage.getItem('userName') as string
    let defaultaddress = this.alladdresses.filter(x => x.userName == name)
    let address = defaultaddress.filter(x => x.isDefault == true)
    if (address.length > 0) {
      this.olddefaultaddressid = address[0].addressId;
    }
    else {
      let oldid = defaultaddress[defaultaddress.length - 1].addressId;
      this.olddefaultaddressid = defaultaddress[0].addressId;
      this.addressservice.UpdateDefault(oldid, this.olddefaultaddressid).subscribe((result) => {
       
      })
    }
   

  }

  SetAsDefaultAddress(addressid: number) 
  {
    this.addressservice.UpdateDefault(this.olddefaultaddressid, addressid).subscribe((res) => {
      
      this.DefaultCheck();
      this.GetAllAddresses();


    })

  }

}
