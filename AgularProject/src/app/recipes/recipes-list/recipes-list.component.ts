import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Recipe} from '../recipes.modal';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {


@Output() recipeWasSelected=new EventEmitter<Recipe>();
recipes:Recipe[]=[
new Recipe('A Butter Paneer Recipe',"Butter Paneer",'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
,new Recipe('A Kaju Paneer Recipe',"Kaju Paneer",'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
,new Recipe('A Muttor Paneer Recipe',"Muttor Paneer",'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
,new Recipe('A Masala Paneer Recipe',"Masala Paneer",'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
];
  constructor() { }

  ngOnInit() {
  }

 onRecipeSelected(recipe:Recipe){
this.recipeWasSelected.emit(recipe);
 }
}
