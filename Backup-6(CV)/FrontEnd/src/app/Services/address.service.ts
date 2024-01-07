import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Address } from '../Models/Address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http:HttpClient) { }

  GetData()
  {
    return this.http.get<Address[]>("https://localhost:7174/api/Addresses");
  }
  AddAddress(address:Address):Observable<Address>
  {
    console.log(address)
    return this.http.post<Address>("https://localhost:7174/api/Addresses",address);
  } 
  UpdateDefault(oldid:number,newid:number)
  {
    return this.http.put<boolean>("https://localhost:7174/api/Addresses/default?oldid="+oldid+"&newid="+newid,{
      body:name
    });
  }

  Update(address:Address):Observable<Address>
  {
    return this.http.put<Address>("https://localhost:7174/api/Addresses/",address);
  } 
  Delete(id:number):Observable<boolean>
  {
    return this.http.delete<boolean>("https://localhost:7174/api/Addresses/"+id);
  }
}
