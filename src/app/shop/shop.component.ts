import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { Iproduct } from '../models/products';
import { ShopParams } from '../models/shopParams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products:any;
  
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.shopService.getProducts().subscribe(response => {
      this.products = response;
    
    })
  }
  onSearch(){}
  onReset(){}
  // onSortSelected(sort: string) {
  //   this.shopParams.sort = sort;
  //   this.getProducts();
  // }

}
