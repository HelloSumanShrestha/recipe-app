import { Injectable } from '@angular/core';
import { Recipe } from '../interface/recipe';

@Injectable({
  providedIn: 'root'
})

export class RecipesCollectionService {

  recipeCollection: Recipe[] = []
  constructor() { }

  addRecipe(recipe: Recipe) {
    this.recipeCollection.push(recipe)
  }

  updateRecipes(recipeToUpdate: Recipe) {
    const index = this.recipeCollection.findIndex(recipe => recipe.idMeal === recipeToUpdate.idMeal)

    if (index != -1) {
      this.recipeCollection[index] = recipeToUpdate;
    }
  }

  deleteRecipes(recipeToDelete: Recipe) {
    this.recipeCollection = this.recipeCollection.filter(recipe => recipe !== recipeToDelete)
  }

  filterRecipes(recipeId: string) {
    this.recipeCollection.filter(recipe => recipe.idMeal !== recipeId)
  }
}
