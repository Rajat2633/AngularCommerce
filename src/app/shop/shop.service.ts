import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ShopService {
baseurl="https://localhost:44331/api/";
  constructor(private http:HttpClient) { }

  getProducts(){
    
    return this.http.get(this.baseurl+'Products');
  }

  getCategory()
  {
    return this.http.get(this.baseurl+'Products/GetAllCategory');
  }
  
  
}
