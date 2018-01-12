import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipes.modal'
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

recipes:Recipe[]=[
new Recipe('A test Recipe',"Kaju Paneer"'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
,new Recipe('A test Recipe',"Kaju Paneer"'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
,new Recipe('A test Recipe',"Kaju Paneer"'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
,new Recipe('A test Recipe',"Kaju Paneer"'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
];
  constructor() { }

  ngOnInit() {
  }

}
