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
    filterTodos() {
      
      if (this.filter === '') {
        this.filter = 'vegetable';
      } else if(this.filter === 'vegetable') {
        this.filter = 'fruit';
      } else {
        this.filter = ''
        
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
      
      (await this.items).sort((a, b) => a.id.localeCompare(b.id));
    }
}
