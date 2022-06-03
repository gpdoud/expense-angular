import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee/employee.class';
import { EmployeeService } from 'src/app/employee/employee.service';
import { Expense } from '../expense.class';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-edit',
  templateUrl: './expense-edit.component.html',
  styleUrls: ['./expense-edit.component.css']
})
export class ExpenseEditComponent implements OnInit {

  expense!: Expense;
  employees!: Employee[];

  constructor(
    private expsvc: ExpenseService,
    private emplsvc: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.debug("B4:", this.expense);
    this.expsvc.change(this.expense).subscribe({
      next: (res) => {
        console.debug("Expense changed!");
        this.router.navigateByUrl("/exp/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.emplsvc.list().subscribe({
      next: (res) => {
        console.debug("Employees:", res);
        this.employees = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
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
