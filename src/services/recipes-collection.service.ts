import { Injectable } from '@angular/core';
import { Recipe } from '../interface/recipe';
import { BrowserStorageService } from './browser-storage.service';

@Injectable({
  providedIn: 'root'
})

export class RecipesCollectionService {

  recipeCollection: Recipe[] = []

  recipe !: Recipe
  selectedMyRecipe: string = ""

  constructor(private localStorage: BrowserStorageService) {
    const data = this.localStorage.get("my-recipes")
    if (data) {
      this.recipeCollection = JSON.parse(data)
    }
  }

  addRecipe(recipe: Recipe) {
    console.log(recipe);
    this.recipeCollection.push(recipe)
    this.localStorage.set("my-recipes", JSON.stringify(this.recipeCollection))
    console.log('Added new recipe');
  }

  updateRecipes(recipeToUpdate: Recipe) {
    const index = this.recipeCollection.findIndex(recipe => recipe.idMeal === recipeToUpdate.idMeal)

    if (index != -1) {
      this.recipeCollection[index] = recipeToUpdate;
      this.localStorage.set("my-recipes", JSON.stringify(this.recipeCollection))
      console.log('Updated recipe ' + index);
    }
  }

  deleteRecipes(recipeToDelete: Recipe) {
    const index = this.recipeCollection.findIndex(recipe => recipeToDelete.idMeal === recipe.idMeal)

    if (index !== -1) {
      this.recipeCollection.splice(index, 1)
      this.localStorage.set("my-recipes", JSON.stringify(this.recipeCollection))
    }
    console.log('Deleted recipe ' + recipeToDelete.idMeal);
  }

  filterRecipes(recipeId: string) {
    this.recipeCollection.filter(recipe => recipe.idMeal !== recipeId)
  }

  getRecipe() {
    return this.recipeCollection.find(recipe => this.recipe === recipe)
  }

  setMyRecipe(recipe: Recipe) {
    console.log(recipe);
    this.recipe = recipe
  }
}
