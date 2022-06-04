import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expenseline } from 'src/app/expenseline/expenseline.class';
import { Expense } from '../expense.class';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-lines',
  templateUrl: './expense-lines.component.html',
  styleUrls: ['./expense-lines.component.css']
})
export class ExpenseLinesComponent implements OnInit {

  exp!: Expense;
  
  constructor(
    private expsvc: ExpenseService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  submit(): void {
    this.expsvc.review(this.exp).subscribe({
      next: (res) => {
        console.debug("Expense:", res);
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  edit(expl: Expenseline): void {
    this.router.navigateByUrl(`/expl/edit/${expl.id}`);
  }

  remove(expl: Expenseline): void {
    this.expsvc.remove(expl.id).subscribe({
      next: (res) => {
        console.debug("Expenseline Deleted!");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  refresh(): void {
    let id: number = +this.route.snapshot.params["id"];
    this.expsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Expense:", res);
        this.exp = res;
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
