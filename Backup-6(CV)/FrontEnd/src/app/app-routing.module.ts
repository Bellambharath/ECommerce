import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAccessComponent } from './Admin-Access/admin-access/admin-access.component';
import { ShipmentComponent } from './Admin-Access/shipment/shipment.component';
import { CartComponent } from './Components/cart/cart.component';
import { ForgotComponent } from './Components/forgot/forgot.component';
import { LoginComponent } from './Components/login/login.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { UpdatePWDComponent } from './Components/update-pwd/update-pwd.component';
import { AuthenticationGuard } from './Guards/authentication.guard';
import { AuthorizationGuard } from './Guards/authorization.guard';

import { ProductsComponent } from './Components/products/products.component';
import { OrderDetailsComponent } from './Components/order-details/order-details.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AddressComponent } from './Components/address/address.component';

import { SelectAddressComponent } from './Components/address/select-address/select-address.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { MyOrdersComponent } from './Components/my-orders/my-orders.component';
import { SummaryComponent } from './Components/summary/summary.component';
import { AddAddressComponent } from './Components/Address/add-address/add-address.component';
 


const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  {path:"signup",component:SignUpComponent},
  {path:"login",component:LoginComponent},
  {path:"logout",component:LogoutComponent},
 
  {path:"forgot",component:ForgotComponent},
  {path:"update",component:UpdatePWDComponent},

  {path:"admin",component:AdminAccessComponent,canActivate:[AuthorizationGuard]},
  {path:"shipment",component:ShipmentComponent,canActivate:[AuthorizationGuard]},

  {path:"products",component:ProductsComponent},
  {path:"productdetails",component:ProductDetailsComponent}, 
  {path:"cart",component:CartComponent},
  {path:"myorders",component:OrderDetailsComponent},
  {path:"ordertracking",component:MyOrdersComponent},
  {path:"address",component:AddressComponent},
  {path:"addaddress",component:AddAddressComponent},
  {path:"selectaddress",component:SelectAddressComponent},
  {path:"profile",component:ProfileComponent},
  {path:"ordersummary",component:SummaryComponent}
  

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
