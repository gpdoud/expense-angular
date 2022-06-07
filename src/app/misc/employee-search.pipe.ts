import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../employee/employee.class';

@Pipe({
  name: 'employeeSearch'
})
export class EmployeeSearchPipe implements PipeTransform {

  transform(empls: Employee[], search: string = ""): Employee[] {
    if(search.length == 0)
      return empls;
    search = search.toLowerCase();
    let selectedEmployees: Employee[] = [];
    for(let e of empls) {
      if(
        e.id.toString().includes(search)
          || e.name.toLowerCase().includes(search)
          || e.email.toLowerCase().includes(search)
          || e.admin.toString().includes(search)
        ) {
            selectedEmployees.push(e);
          }
    }
    return selectedEmployees;
  }

}
