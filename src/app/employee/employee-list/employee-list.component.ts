import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.class';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];
  searchCriteria: string = "";

  constructor(
    private emplsvc: EmployeeService
  ) { }

  reset(empl: Employee): void {
    this.emplsvc.reset(empl).subscribe({
      next: (res) => {
        console.debug("Employee reset!");
        this.refresh();
      },
      error: (err) => { 
        console.error(err); 
      }
    });
  }

  refresh(): void {
    this.emplsvc.list().subscribe({
      next: (res) => {
        console.debug("Employees:", res);
        this.employees = res;
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
