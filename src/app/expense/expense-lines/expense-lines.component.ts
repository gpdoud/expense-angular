import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Expense } from '../expense.class';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-lines',
  templateUrl: './expense-lines.component.html',
  styleUrls: ['./expense-lines.component.css']
})
export class ExpenseLinesComponent implements OnInit {

  expense!: Expense;
  
  constructor(
    private expsvc: ExpenseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id: number = +this.route.snapshot.params["id"];
    this.expsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Expense:", res);
        this.expense = res;
      },
      error: (err) => {
        console.error(err);
      }

    });
  }

}
