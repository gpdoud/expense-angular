import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';

const routes: Routes = [
  { path: "", redirectTo: "empl/list", pathMatch: "full" },
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
