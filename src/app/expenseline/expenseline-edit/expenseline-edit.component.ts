import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/item/item.class';
import { ItemService } from 'src/app/item/item.service';
import { Expenseline } from '../expenseline.class';
import { ExpenselineService } from '../expenseline.service';

@Component({
  selector: 'app-expl-edit',
  templateUrl: './expenseline-edit.component.html',
  styleUrls: ['./expenseline-edit.component.css']
})
export class ExpenselineEditComponent implements OnInit {

  expl!: Expenseline;
  items!: Item[];

  constructor(
    private explsvc: ExpenselineService,
    private itemsvc: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.debug("B4:", this.expl);
    this.explsvc.change(this.expl).subscribe({
      next: (res) => {
        console.debug("Expenseline changed!");
        this.router.navigateByUrl(`/exp/lines/${this.expl.expenseId}`);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    let id: number = +this.route.snapshot.params["id"];
    this.itemsvc.list().subscribe({
      next: (res) => {
        console.debug("Items:", res);
        this.items = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
    this.explsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Expenseline:", res);
        this.expl = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
