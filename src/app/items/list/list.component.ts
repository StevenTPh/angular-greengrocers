import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private readonly itemService: ItemService){}

  items = this.itemService.items;

  addToCart(item: Item): void {
    this.itemService.addItemToCart(item);
  }

    // filter list
    filter = '';
    count: number = 0;
    filterTodos() {
      this.count++;
      if (this.count === 1) {
        this.filter = 'vegetable';
      } else if(this.count === 2) {
        this.filter = 'fruit';
      } else {
        this.filter = ''
        this.count = 0;
      }
    }

    async sortByPrice() {
      (await this.items).sort((a, b) => a.price - b.price);
    }

    async sortByName() {
      (await this.items).sort((a, b) => a.name.localeCompare(b.name));
    }

    async unFilter() {
      this.filter = '',
      this.count = 0,
      (await this.items).sort((a, b) => a.id.localeCompare(b.id));
    }
}
