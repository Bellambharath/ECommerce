import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buy } from '../Models/Buy';

@Injectable({
  providedIn: 'root'
})
export class BuyService {

  constructor(private http:HttpClient) { }

  GetData()
  {
    return this.http.get<Buy[]>("https://localhost:7087/api/Buys");
  }
  AddData(buy:Buy):Observable<Buy>
  {
    console.log(buy)
    return this.http.post<Buy>("https://localhost:7087/api/Buys/",buy);
  } 
  Update(buy:Buy):Observable<Buy>
  {
    return this.http.put<Buy>("https://localhost:7087/api/Buys/",buy);
  } 
}
