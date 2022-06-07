import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenselineService } from 'src/app/expenseline/expenseline.service';
import { Expense } from '../expense.class';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-review-item',
  templateUrl: './expense-review-item.component.html',
  styleUrls: ['./expense-review-item.component.css']
})
export class ExpenseReviewItemComponent implements OnInit {

  exp!: Expense;
  
  constructor(
    private expsvc: ExpenseService,
    private explsvc: ExpenselineService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  approve(exp: Expense): void {
    this.expsvc.approve(exp).subscribe({
      next: (res) => {
        console.debug(`Expense id:${exp.id} approved!`);
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }      
    });
  }

  reject(exp: Expense): void {
    this.expsvc.reject(exp).subscribe({
      next: (res) => {
        console.debug(`Expense id:${exp.id} rejected!`);
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
