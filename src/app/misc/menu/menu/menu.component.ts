import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("Employees", "/empl/list"),
    new Menu("Expenses", "/exp/list"),
    new Menu("Items", "/item/list")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
