import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../Models/Cart';
import { Trash } from '../Models/Trash';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http:HttpClient) { }

  AddToJson(cart:Cart)
  {
   
    return this.http.post<Cart>("http://localhost:3000/cart/",cart)

  }
  GetJsonData(){
    return this.http.get<Trash[]>("http://localhost:3000/cart/");
  }
  DeleteJsonData(id:number)
  {
    return this.http.delete("http://localhost:3000/cart/"+id);
  }
}
