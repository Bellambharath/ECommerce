import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import ValidateForm from 'src/app/Models/Validateform';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { SignupService } from 'src/app/Services/signup.service';
import { TopbarComponent } from 'src/app/topbar/topbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;
  length: number = 0;
  constructor(private toastr: ToastrService, private sharing: SignupService,
    private router: Router, private formbuilder: FormBuilder, private Productsservice: ProductsServiceService) { }
 
    ngOnInit(): void {
     
    //this.topbar.UserType();
    this.loginForm = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  Fogetpassword() {

    this.router.navigate(["forgot"])
  }


  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }
  onLogin() {
    if (this.loginForm.valid) {

      this.sharing.login(this.loginForm.value).subscribe({
        next: (res) => {

          this.loginForm.reset();
          this.sharing.storeToken(res.token);
          this.sharing.storeRole(res.role);
          this.sharing.StoreUserName(res.userName)
          this.sharing.StoreFullName(res.name)

         
          if (res.role == "Admin") 
          {
            this.router.navigate(['shipment']);


          }
          else {
            let cartlogincheck = localStorage.getItem('loginfromcart')
            if (cartlogincheck == "cart") {
              this.router.navigate(['cart']);
              let a = "notcart";
              localStorage.setItem('loginfromcart', a)
            }
            else {
              this.router.navigate(['products']);
            }
          }


        },
        error: (err) => {

          this.toastr.error("Something Went Wrong!");
        }
      })

    }
    else {
      ValidateForm.validateAllFormFields(this.loginForm);
      alert("Your form is invalid")
    }


  }
}

