import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Buy } from '../Models/Buy';
import { Couponcode } from '../Models/Couponcode';

@Injectable({
  providedIn: 'root'
})
export class BuyService {

  constructor(private http:HttpClient) { }

  GetData()
  {
    return this.http.get<Buy[]>("https://localhost:7087/api/Buys");
  }
  AddData(buy: Buy): Observable<Buy> {
    console.log(buy);
    return this.http.post<Buy>("https://localhost:7087/api/Buys", buy)
      .pipe(
        catchError((error) => {
          console.error('Error:', error.message);
          throw error; // Re-throw the error if needed
        })
      );
  }
  Update(buy:Buy):Observable<Buy>
  {
    return this.http.put<Buy>("https://localhost:7087/api/Buys/",buy);
  }
  GetCoupons()
  {
    return this.http.get<Couponcode[]>("https://localhost:7087/api/CouponCodes");
  } 
  isFirstOrder(userName:string)
  {
    return this.http.get<boolean>("https://localhost:7087/api/Buys/IsFirstOrder?userName="+userName)
  }
}
