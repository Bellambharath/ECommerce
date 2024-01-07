import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/Models/Address';
import { AddressService } from 'src/app/Services/address.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  address: Address = new Address();



  addressid: number = 0;
  addressarray: Address[];

  formValue!: FormGroup;
  check: boolean = false;
  n: number;
  defaultaddresscheck: boolean = false;
  olddefaultaddressid: number = 0;

  constructor(private addressservice: AddressService, private router: Router,
    private formBuilder: FormBuilder, private location: Location) { }
  ngOnInit(): void {
    let id = localStorage.getItem("addressid") as string;
    this.addressid = parseInt(id);

    if (id != null) {
      this.EditAddress();
    }

    let m = localStorage.getItem("check") as string;
    this.n = parseInt(m);



    if (this.n == 1) {
      this.check = true;
    }
    else {
      this.check = false;
    }


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
    this.DefaultCheck();
  }

  goback() {
    this.location.back();
  }



  EditAddress() {
    this.addressservice.GetData().subscribe((res) => {

      this.addressarray = res.filter(x => x.addressId == this.addressid);

      this.editaddress();
    })
  }
  DefaultCheck() {
    this.addressservice.GetData().subscribe((result) => {

      let name = localStorage.getItem('userName') as string
      let defaultaddress = result.filter(x => x.userName == name)
      let address = defaultaddress.filter(x => x.isDefault == true)
      if (address.length > 0) {
        this.olddefaultaddressid = defaultaddress[0].addressId;
      }
      else {
        let oldid = defaultaddress[defaultaddress.length - 1].addressId;
        let newid = defaultaddress[0].addressId;
        this.addressservice.UpdateDefault(oldid, newid).subscribe((result) => {

        })
      }
    });
  }


  editaddress() {
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


        this.formValue.reset();
        localStorage.removeItem('addressid');
        localStorage.removeItem('check');

        this.addressid = 0;

        this.router.navigate(["address"]);

      },
      error: () => {
        alert('Error');
      }
    })
  }

  DefaultAddressSelect() {
    if (this.defaultaddresscheck == false) {
      this.defaultaddresscheck = true;
    }
    else {
      this.defaultaddresscheck = false;
    }

  }

  AddAddress() 
  {
    this.address.addressId=0;
    this.address.isDefault = this.defaultaddresscheck;
    let name = localStorage.getItem("userName") as string;
    this.address.userName = name;
    console.log(this.address)
    this.addressservice.AddAddress(this.address).subscribe((result) => {
      if (this.address.isDefault) {
        this.addressservice.UpdateDefault(this.olddefaultaddressid, result.addressId).subscribe((res) => {


        })
      }
      this.goback();
    })
  }

}
