import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from '../expense.class';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.css']
})
export class ExpenseDetailComponent implements OnInit {

  expense!: Expense;
  showVerify: boolean = false;

  constructor(
    private expsvc: ExpenseService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  remove(): void {
    this.showVerify = !this.showVerify;
  }
  verify(): void {
    this.expsvc.remove(this.expense.id).subscribe({
      next: (res) => {
        console.debug("Expense removed!");
        this.router.navigateByUrl("/exp/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

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
