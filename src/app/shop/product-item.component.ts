import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../models/products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product:Iproduct

  constructor() { }

  ngOnInit(): void {
  }

}
