import { Component, OnInit } from '@angular/core';
import { Item } from '../item.class';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items!: Item[];

  constructor(
    private itemsvc: ItemService
  ) { }

  ngOnInit(): void {
    this.itemsvc.list().subscribe({
      next: (res) => {
        console.debug("Items:", res);
        this.items = res;
      },
      error: (err) => { 
        console.error(err); 
      }
    });
  }

}
