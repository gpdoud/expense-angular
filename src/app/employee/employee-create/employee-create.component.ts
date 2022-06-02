import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.class';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(
    private emplsvc: EmployeeService,
    private router: Router
  ) { }

  save(): void {
    console.debug("B4:", this.employee);
    this.emplsvc.create(this.employee).subscribe({
      next: (res) => {
        console.debug("Employee created!");
        this.router.navigateByUrl("/empl/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
  }

}
