import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { left } from '@popperjs/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Buy } from '../Models/Buy';
import { Cart } from '../Models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  initialvalue:Buy=new Buy();
  checkoutarray=Array();
  constructor(private http:HttpClient) { }

  Add(cart:Cart)
  {
    console.log(cart)
    return this.http.post<Cart>("https://localhost:7025/api/Carts/",cart);
  }
  Get():Observable<Cart[]>
  {
    return this.http.get<Cart[]>("https://localhost:7025/api/Carts");
  }
  Delete(id:number):Observable<Cart>
  {
    let name = localStorage.getItem('userName') as string;
    console.log(id)
    console.log(name)
    console.log("https://localhost:7025/api/Carts/delete?username="+name+"&id="+id)
    return this.http.delete<Cart>("https://localhost:7025/api/Carts/delete?username="+name+"&id="+id);
  }
  UpdateQuantity(index:number,value:number)
  {
    let name = localStorage.getItem('userName') as string;
    return this.http.put<void>("https://localhost:7025/api/Carts?username="+name+"&index="+index+"&value="+value,{
      body:name
    });

  }

  CheckOut()
  {
    console.log(this.checkoutarray)
    let a= JSON.parse(localStorage.getItem('checkout') as string);
    // this.dataSource.next(a);
    
    this.checkoutarray.push(a)
    
    localStorage.setItem('checkoutarray',JSON.stringify(this.checkoutarray));
  }
  GetCheckOut()
  {
    let b= JSON.parse(localStorage.getItem('checkoutarray') as string);
    console.log(b)
    return Object.assign({}, b);
  }
}
 