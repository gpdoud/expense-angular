import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense.class';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-pay-list',
  templateUrl: './expense-pay-list.component.html',
  styleUrls: ['./expense-pay-list.component.css']
})
export class ExpensePayListComponent implements OnInit {

  expenses!: Expense[];

  constructor(
    private expsvc: ExpenseService
  ) { }

  pay(exp: Expense): void {
    this.expsvc.payExpense(exp.id).subscribe({
      next: (res) => {
        console.debug(`Expense id:${exp.id} paid!`);
        this.expenses = res;
      },
      error: (err) => {
        console.error(err);
      }      
    });
  }

  refresh(): void {
    this.expsvc.getApproved().subscribe({
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
