import { Component, OnInit ,Output,Input,EventEmitter,} from '@angular/core';
import {Recipe} from '../../recipes.modal'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input()recipe:Recipe ;
  @Output() recipeSelected=new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onSelect(){
this.recipeSelected.emit();
  }

}
