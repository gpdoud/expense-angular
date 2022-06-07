import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense.class';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-review-list',
  templateUrl: './expense-review-list.component.html',
  styleUrls: ['./expense-review-list.component.css']
})
export class ExpenseReviewListComponent implements OnInit {

  expenses!: Expense[];

  constructor(
    private expsvc: ExpenseService
  ) { }



  refresh(): void {
    this.expsvc.getReviewed().subscribe({
      next: (res) => {
        console.debug("Expenses:", res);
        this.expenses = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.refresh();
  }

}
