import { Pipe, PipeTransform } from '@angular/core';
import { Expense } from '../expense/expense.class';

@Pipe({
  name: 'expenseSearch'
})
export class ExpenseSearchPipe implements PipeTransform {

  transform(expenses: Expense[], search: string = ""): Expense[] {
    if(search.length == 0) 
      return expenses;
    search = search.toLowerCase();
    let selectedExpenses: Expense[] = [];
    for(let e of expenses) {
      if(
        e.id.toString().includes(search)
          || e.desc.toLowerCase().includes(search)
          || e.total.toString().includes(search)
          || e.employee.name.toLowerCase().includes(search)
      ) {
        selectedExpenses.push(e);
      }
    }
    return selectedExpenses;
  }

}
