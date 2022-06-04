import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';

import { MenuComponent } from './misc/menu/menu/menu.component';

import { ExpenseListComponent } from './expense/expense-list/expense-list.component';
import { ExpenseDetailComponent } from './expense/expense-detail/expense-detail.component';
import { ExpenseCreateComponent } from './expense/expense-create/expense-create.component';
import { ExpenseEditComponent } from './expense/expense-edit/expense-edit.component';
import { ExpenseLinesComponent } from './expense/expense-lines/expense-lines.component';

import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemDetailComponent } from './item/item-detail/item-detail.component';
import { ItemCreateComponent } from './item/item-create/item-create.component';
import { ItemEditComponent } from './item/item-edit/item-edit.component';

import { ExpenselineCreateComponent } from './expenseline/expenseline-create/expenseline-create.component';
import { ExpenselineEditComponent } from './expenseline/expenseline-edit/expenseline-edit.component';
import { ExpensePayListComponent } from './expense/expense-pay-list/expense-pay-list.component';
import { ExpenseReviewListComponent } from './expense/expense-review-list/expense-review-list.component';
import { ExpenseReviewItemComponent } from './expense/expense-review-item/expense-review-item.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeLoginComponent,
    MenuComponent,
    ExpenseListComponent,
    ExpenseDetailComponent,
    ExpenseCreateComponent,
    ExpenseEditComponent,
    ExpenseLinesComponent,
    ItemListComponent,
    ItemDetailComponent,
    ItemCreateComponent,
    ItemEditComponent,
    ExpenselineCreateComponent,
    ExpenselineEditComponent,
    ExpensePayListComponent,
    ExpenseReviewListComponent,
    ExpenseReviewItemComponent
  ],
  imports: [
    BrowserModule, RouterModule, FormsModule, HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
