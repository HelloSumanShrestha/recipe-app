import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Recipe } from '../../../interface/recipe';
import { RecipesCollectionService } from '../../../services/recipes-collection.service';

@Component({
  selector: 'app-my-recipe-on-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-recipe-on-detail.component.html',
  styleUrl: './my-recipe-on-detail.component.css'
})

export class MyRecipeOnDetailComponent {

  recipe !: Recipe

  instructions: string[] = []
  ingredients: string[] = []

  constructor(private service: RecipesCollectionService) {
    this.recipe = this.service.recipe
    this.instructions = this.recipe.strInstructions.split('.' || "\n");
    this.ingredients = this.recipe.strIngredients.split('\n' || ".");
  }
}
