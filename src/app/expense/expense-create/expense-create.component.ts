import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/employee/employee.class';
import { EmployeeService } from 'src/app/employee/employee.service';
import { Expense } from '../expense.class';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-create',
  templateUrl: './expense-create.component.html',
  styleUrls: ['./expense-create.component.css']
})
export class ExpenseCreateComponent implements OnInit {

  expense: Expense = new Expense();
  employees!: Employee[];

  constructor(
    private expsvc: ExpenseService,
    private emplsvc: EmployeeService,
    private router: Router
  ) { }

  save(): void {
    console.debug("B4:", this.expense);
    this.expsvc.create(this.expense).subscribe({
      next: (res) => {
        console.debug("Expense Created!");
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
        console.debug(res);
        this.employees = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
