import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Products } from '../Models/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {



  numberarray = Array();
  Quantityarray = Array();
  constructor(private http: HttpClient) { }

  GetProducts(): Observable<Products[]> {

    return this.http.get<Products[]>("https://localhost:7053/api/Products");
  }




  UpdateStock(p: Products): Observable<Products> {
    p.imageurl = "str";
    p.productCategory = "str";
    p.productDescription = "str";
    p.productName = "str";
    p.productPrice = 1;
    p.productRating = 1;
    p.sellerName = "str";
    console.log(p)
    return this.http.put<Products>("https://localhost:7053/api/Products/" + p.productId, p);
  }
  AddProducts(P: Products) {
    return this.http.post<Products>("https://localhost:7053/api/Products/", P)
  }
  UpdateProducts(products: Products) {
    return this.http.put<Products>("https://localhost:7053/api/Products/Details", products);
  }
  DeleteProduct(id: number) {
    return this.http.delete("https://localhost:7053/api/Products/" + id);
  }

  private pid = new BehaviorSubject<number>(0);
  private dataSource = new BehaviorSubject<number>(0);
  private dataSource1 = new BehaviorSubject<number>(0);
  private dataSource2 = new BehaviorSubject<number>(0);
  public search = new BehaviorSubject<string>("");

  
  productid=this.pid.asObservable();
  currentData = this.dataSource.asObservable();
  rating = this.dataSource1.asObservable();
  halfstar = this.dataSource2.asObservable();

  updateData(data: number, rating: number, halfstar: number) {
    this.dataSource.next(data);
    this.dataSource1.next(rating);
    this.dataSource2.next(halfstar);
  }
updateproductid(pid:number)
{
  this.pid.next(pid);
}


  UpdateProductId(id: number) {

    this.numberarray = JSON.parse(localStorage.getItem('tempproductids') as string);
    this.Quantityarray = JSON.parse(localStorage.getItem('tempQuantity') as string);
    if (this.numberarray == undefined || this.numberarray == null) {
      this.numberarray = Array();
      this.Quantityarray = Array();
      this.numberarray.push(id);
      this.Quantityarray.push(1);
      console.log(this.numberarray)
      console.log(this.Quantityarray)
      localStorage.setItem('tempproductids', JSON.stringify(this.numberarray));
      localStorage.setItem('tempQuantity', JSON.stringify(this.Quantityarray));
    }
    else {
      if (!this.numberarray.includes(id)) 
      {
        this.numberarray.push(id);
        this.Quantityarray.push(1);

        localStorage.setItem('tempproductids', JSON.stringify(this.numberarray));
        localStorage.setItem('tempQuantity', JSON.stringify(this.Quantityarray));
      }
      else {
        var values = Object.values(this.numberarray)
        var index = values.indexOf(id);
        var qtyvalues = Object.values(this.Quantityarray)
        qtyvalues[index] = qtyvalues[index] + 1;
        this.Quantityarray = qtyvalues;
        localStorage.setItem('tempQuantity', JSON.stringify(this.Quantityarray));
        console.log("already Exist")
      }
    }

  }
  TempIncrement(id:number) 
  {
    this.numberarray = JSON.parse(localStorage.getItem('tempproductids') as string);
    this.Quantityarray = JSON.parse(localStorage.getItem('tempQuantity') as string);
    var values = Object.values(this.numberarray)
    var index = values.indexOf(id);
    var qtyvalues = Object.values(this.Quantityarray)
    qtyvalues[index] = qtyvalues[index] + 1;
    this.Quantityarray = qtyvalues;
    localStorage.setItem('tempQuantity', JSON.stringify(this.Quantityarray));

  }
  TempDecrement(id:number) 
  {
    this.numberarray = JSON.parse(localStorage.getItem('tempproductids') as string);
    this.Quantityarray = JSON.parse(localStorage.getItem('tempQuantity') as string);
    var values = Object.values(this.numberarray)
    var index = values.indexOf(id);
    var qtyvalues = Object.values(this.Quantityarray)
    qtyvalues[index] = qtyvalues[index] - 1;
    this.Quantityarray = qtyvalues;
    localStorage.setItem('tempQuantity', JSON.stringify(this.Quantityarray));
  }

  GetProductidArray() {
    this.numberarray = JSON.parse(localStorage.getItem('tempproductids') as string);
    console.log(this.numberarray)
    return Object.assign({}, this.numberarray);
  }
  GetQuantityArray() {
    this.Quantityarray = JSON.parse(localStorage.getItem('tempQuantity') as string);
    return Object.assign({}, this.Quantityarray);
  }


  DeleteProductidArray(id: number) {
    this.numberarray = JSON.parse(localStorage.getItem('tempproductids') as string);
    this.Quantityarray = JSON.parse(localStorage.getItem('tempQuantity') as string);

    let index = this.numberarray.indexOf(id);
    this.numberarray.splice(index, 1);
    this.Quantityarray.splice(index, 1);
    localStorage.setItem('tempproductids', JSON.stringify(this.numberarray));
    localStorage.setItem('tempQuantity', JSON.stringify(this.Quantityarray));

  }

}
