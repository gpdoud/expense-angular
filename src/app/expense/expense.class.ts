import { Employee } from "../employee/employee.class";

export class Expense {
    id: number = 0;
    desc: string = "";
    status: string = "NEW";
    total: number = 0;

    employeeId: number = 0;
    employee!: Employee;
}