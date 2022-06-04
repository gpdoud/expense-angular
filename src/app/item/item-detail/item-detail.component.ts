import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item.class';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item!: Item;
  showVerify: boolean = false;

  constructor(
    private itemsvc: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  remove(): void {
    this.showVerify = !this.showVerify;
  }
  verify(): void {
    this.itemsvc.remove(this.item.id).subscribe({
      next: (res) => {
        console.debug("Item removed!");
        this.router.navigateByUrl("/item/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    let id: number = +this.route.snapshot.params["id"];
    this.itemsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Item:", res);
        this.item = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
