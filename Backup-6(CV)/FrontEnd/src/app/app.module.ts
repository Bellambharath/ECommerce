import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './Components/products/products.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TopbarComponent } from './topbar/topbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { CartComponent } from './Components/cart/cart.component';
import { ForgotComponent } from './Components/forgot/forgot.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { UpdatePWDComponent } from './Components/update-pwd/update-pwd.component';
import { AdminAccessComponent } from './Admin-Access/admin-access/admin-access.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { ShipmentComponent } from './Admin-Access/shipment/shipment.component';
import { OrderDetailsComponent } from './Components/order-details/order-details.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { RatingModule } from 'ng-starrating';
import { NgToastModule } from 'ng-angular-popup';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { AddressComponent } from './Components/address/address.component';
import { AddAddressComponent } from './Components/Address/add-address/add-address.component';
import { SelectAddressComponent } from './Components/address/select-address/select-address.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { FilterPipe } from './filter.pipe';
import { MyOrdersComponent } from './Components/my-orders/my-orders.component';
import { MatBadgeModule } from '@angular/material/badge';
import { SummaryComponent } from './Components/summary/summary.component';
import { ShareService } from './Services/share.service';
import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarModule,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    TopbarComponent,
    LoginComponent,
    SignUpComponent,
    CartComponent,
    ForgotComponent,
    LogoutComponent,
    UpdatePWDComponent,
    AdminAccessComponent,
    ShipmentComponent,
    OrderDetailsComponent,
    ProductDetailsComponent,
    AddressComponent,
    AddAddressComponent,
    SelectAddressComponent,
    ProfileComponent,
    FilterPipe,
    MyOrdersComponent,
    SummaryComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    MatSelectModule, NgbModule,
    MatButtonModule,
    MatExpansionModule,
    RatingModule,
    NgToastModule,
    DatePipe,
    MatBadgeModule,
    MatSnackBarModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }), // ToastrModule added


  ],
  providers: [DatePipe, ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
