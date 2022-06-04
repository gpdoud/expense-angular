import { Expense } from "../expense/expense.class";
import { Item } from "../item/item.class";

export class Expenseline {
    id: number = 0;
    quantity: number = 1;

    expenseId: number = 0;
    expense!: Expense;

    itemId: number = 0;
    item!: Item;
}