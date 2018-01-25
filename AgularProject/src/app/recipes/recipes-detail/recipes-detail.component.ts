import { Component, OnInit ,Input} from '@angular/core';
import {Recipe} from '../recipes.modal';
@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  constructor() { }
@Input() recipe:Recipe;
  ngOnInit() {
  }

}
