import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MerchantRegisterdService {

  constructor(private http:HttpClient ) { }
url="http://localhost:3000/Product"
users()
{
  return this.http.get(this.url)
}
saveUsers(data:any)
{
  return this.http.post<any>(this.url,data)
}
}
