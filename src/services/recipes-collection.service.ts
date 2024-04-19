import { Injectable } from '@angular/core';
import { Recipe } from '../interface/recipe';

@Injectable({
  providedIn: 'root'
})

export class RecipesCollectionService {

  recipeCollection: Recipe[] = [{
    idMeal: "1",
    strMeal: "Pad Thai",
    strCategory: "Seafood",
    strArea: "Thai",
    strInstructions: "1. Soak noodles in warm water until soft, about 20 minutes. Drain.\n2. Heat oil in a wok or large heavy skillet over medium heat. Cook and stir garlic in the hot oil until fragrant, 1 to 2 minutes. Add chicken; cook and stir until chicken is browned and no longer pink in the center, 5 to 7 minutes.\n3. Move chicken mixture to the side of the wok and add egg to the empty space. Scramble egg until cooked through, about 2 minutes. Add noodles; cook and stir until heated through, about 2 minutes.\n4. Stir in fish sauce, tamarind paste, sugar, and red pepper flakes. Add bean sprouts, green onions, and peanuts; cook and stir until heated through, 2 to 3 minutes. Remove from heat and stir in lime juice. Serve with lime wedges.",
    strMealThumb: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
    strTags: "Main Course, Vegetarian, Curry",
    stringredients: "8 ounces dried rice noodles\n2 tablespoons vegetable oil\n3 cloves garlic, minced\n8 ounces boneless, skinless chicken breasts, cut into bite-sized pieces\n1 egg\n2 tablespoons fish sauce\n2 tablespoons tamarind paste\n2 tablespoons sugar\n1/2 teaspoon crushed red pepper flakes\n1 cup bean sprouts\n1/2 cup chopped green onions\n1/4 cup chopped unsalted peanuts\n1 lime, cut into wedges"
  }]

  recipe !: Recipe
  selectedMyRecipe: string = ""

  constructor() { }

  addRecipe(recipe: Recipe) {
    console.log(recipe);
    this.recipeCollection.push(recipe)
    console.log('Added new recipe');
  }

  updateRecipes(recipeToUpdate: Recipe) {
    const index = this.recipeCollection.findIndex(recipe => recipe.idMeal === recipeToUpdate.idMeal)

    if (index != -1) {
      this.recipeCollection[index] = recipeToUpdate;
      console.log('Updated recipe ' + index);
    }
  }

  deleteRecipes(recipeToDelete: Recipe) {
    this.recipeCollection = this.recipeCollection.filter(recipe => recipe !== recipeToDelete)
    console.log('Deleted recipe ' + recipeToDelete.idMeal);
  }

  filterRecipes(recipeId: string) {
    this.recipeCollection.filter(recipe => recipe.idMeal !== recipeId)
  }

  getRecipe() {
    return this.recipeCollection.find(recipe => this.recipe === recipe)
  }

  setMyRecipe(recipe: Recipe) {
    this.recipe = recipe
  }
}
