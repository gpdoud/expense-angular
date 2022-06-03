import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';
import { ExpenseCreateComponent } from './expense/expense-create/expense-create.component';
import { ExpenseDetailComponent } from './expense/expense-detail/expense-detail.component';
import { ExpenseEditComponent } from './expense/expense-edit/expense-edit.component';
import { ExpenseListComponent } from './expense/expense-list/expense-list.component';
import { ExpenseLinesComponent } from './expense/expense-lines/expense-lines.component';

const routes: Routes = [
  { path: "", redirectTo: "empl/login", pathMatch: "full" },

  { path: "exp/list", component: ExpenseListComponent },
  { path: "exp/detail/:id", component: ExpenseDetailComponent },
  { path: "exp/create", component: ExpenseCreateComponent },
  { path: "exp/edit/:id", component: ExpenseEditComponent },
  { path: "exp/lines/:id", component: ExpenseLinesComponent },

  { path: "empl/list", component: EmployeeListComponent },
  { path: "empl/detail/:id", component: EmployeeDetailComponent },
  { path: "empl/create", component: EmployeeCreateComponent },
  { path: "empl/edit/:id", component: EmployeeEditComponent },
  { path: "empl/login", component: EmployeeLoginComponent },
  { path: "**", component: EmployeeListComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
