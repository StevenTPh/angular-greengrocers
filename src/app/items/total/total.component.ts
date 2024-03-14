import { Component } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {
  constructor(public itemService: ItemService){}

}
