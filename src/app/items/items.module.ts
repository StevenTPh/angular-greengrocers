import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';
import { TotalComponent } from './total/total.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    ListComponent,
    CartComponent,
    TotalComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [
    ListComponent,
    CartComponent,
    TotalComponent
  ]
})
export class ItemsModule { }
