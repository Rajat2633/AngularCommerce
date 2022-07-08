import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { SharedModule } from '../shared/shared.module';
import { ProductItemComponent } from './product-item.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
  ],
  imports: [
    CommonModule, SharedModule,
    Ng2SearchPipeModule,
    FormsModule,
  ], exports: [ShopComponent]
})
export class ShopModule { }
