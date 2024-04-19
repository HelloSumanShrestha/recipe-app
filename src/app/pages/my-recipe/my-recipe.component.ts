import { Component, OnInit } from '@angular/core';
import { RecipesCollectionService } from '../../../services/recipes-collection.service';
import { Recipe } from '../../../interface/recipe';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-recipe',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './my-recipe.component.html',
  styleUrl: './my-recipe.component.css'
})

export class MyRecipeComponent implements OnInit {
  constructor(private service: RecipesCollectionService) { }

  collection: Recipe[] = []

  ngOnInit(): void {
    this.collection = this.service.recipeCollection
  }

  onDelete(recipe: Recipe) {
    this.service.deleteRecipes(recipe)
  }

  onEdit(recipe: Recipe) {
    this.service.updateRecipes(recipe)
  }

  onClick(recipe: Recipe) {
    this.service.setMyRecipe(recipe)
  }

}
