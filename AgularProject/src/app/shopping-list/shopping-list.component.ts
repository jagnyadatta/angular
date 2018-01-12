import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.modal';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingrediants:Ingrediant[]=[
  new Ingrediant('Apple',5),   new Ingrediant('Pineapple',5),  new Ingrediant('Tomato',5),  new Ingrediant('Papaya',5),  new Ingrediant('Apple',5),
];
    constructor() { }

  ngOnInit() {
  }

}
