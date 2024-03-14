import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from './models/item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private count = 1;
  http = inject(HttpClient);
  private itemList: Item[] = [];
  cartList: Item[] = [];
  total: number = 0;

  items: Promise<Item[]> = this.getItems();

  carts: Promise<Item[]> = Promise.resolve(this.cartList);

  async getItems() {
    const result = await firstValueFrom(this.http.get(`${environment.apiUrl}`));
    //@ts-ignore
    this.itemList = result;
    console.log(this.itemList);
    return this.itemList;
  }

  getCartItems(): Item[] {
    return this.cartList;
  }
  addItemToCart(item: Item): void {
    const existingItem = this.cartList.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      existingItem.count++;
    } else {
      const createItem = {
        id: item.id,
        name: item.name,
        price: item.price,
        type: item.type,
        count: 1,
      };
      this.cartList.push(createItem);
    }
    console.log(this.cartList);
    this.totalPrice();
  }

  decreaseItemToCart(item: Item): void {
    const index = this.cartList.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (this.cartList[index].count > 1) {
      this.cartList[index].count--;
    } else {
      this.cartList.splice(index, 1);
    }
    console.log(this.cartList);
    this.totalPrice();
  }

  totalPrice(): number {
    this.total = 0;

    for (const item of this.cartList) {
      this.total += item.count * item.price;
    }
    return this.total;
  }

  

  constructor() {}
}
