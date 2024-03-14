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

}
