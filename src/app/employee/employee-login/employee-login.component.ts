import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  message: string = "";

  constructor(
    private emplsvc: EmployeeService,
    private router: Router
  ) { }

  login(): void {
    this.message = "";
    this.emplsvc.login(this.email, this.password).subscribe({
      next: (res) => {
        console.debug("Employee", res);
        this.router.navigateByUrl("/empl/list");
      },
      error: (err) => {
        if(err.status == 404) {
          this.message = "Email and password is invalid!";
        } else {
          console.error(err);
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
