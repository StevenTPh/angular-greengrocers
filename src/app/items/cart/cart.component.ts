import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private readonly itemService: ItemService) {}

  cartItem = this.itemService.carts;

  addToCart(item: Item): void {
    this.itemService.addItemToCart(item);
  }

  decreaseToCart(item: Item): void {
    this.itemService.decreaseItemToCart(item);
  }
}
