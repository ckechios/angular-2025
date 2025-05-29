import { Component } from '@angular/core';
import { Itemsmod } from '../../models/itemsmod';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-items',
  imports: [CommonModule],
  templateUrl: './items.html',
  styleUrl: './items.css'
})
export class Items {
  items_title = "Items List"

  items: Itemsmod[] = [];

  ngOnInit() {
    this.items = [
      { id: 1, desc: 'Item 1'},
      { id: 2, desc: 'Item 2'}
    ]
  }
}
