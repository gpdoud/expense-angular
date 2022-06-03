import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense.class';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  expenses!: Expense[];

  constructor(
    private expsvc: ExpenseService
  ) { }

  ngOnInit(): void {
    this.expsvc.list().subscribe({
      next: (res) => {
        console.debug("Expenses:", res);
        this.expenses = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
