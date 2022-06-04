import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/item/item.class';
import { ItemService } from 'src/app/item/item.service';
import { Expenseline } from '../expenseline.class';
import { ExpenselineService } from '../expenseline.service';

@Component({
  selector: 'app-expenseline-create',
  templateUrl: './expenseline-create.component.html',
  styleUrls: ['./expenseline-create.component.css']
})
export class ExpenselineCreateComponent implements OnInit {

  expl: Expenseline = new Expenseline();
  items!: Item[];
  
  constructor(
    private explsvc: ExpenselineService,
    private itemsvc: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.explsvc.create(this.expl).subscribe({
      next: (res) => {
        console.debug("Expenseline created!");
        this.router.navigateByUrl(`/exp/lines/${this.expl.expenseId}`);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

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
    this.expl.expenseId = +this.route.snapshot.params["eid"];
  }

}
