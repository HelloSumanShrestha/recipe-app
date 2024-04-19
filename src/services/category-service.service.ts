import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeByCategory } from '../interface/recipebycategory';
import { RecipeApi } from '../interface/recipe-api';

@Injectable({
  providedIn: 'root'
})

export class CategoryServiceService {

  categorySelected: string = "Chicken"
  recipeSelected: string = "52885"

  constructor(private httpClient: HttpClient) { }

  onCategorySelection(categoryId: string) {
    this.categorySelected = categoryId
  }

  onRecipeSelection(recipeId: string) {
    console.log(recipeId);
    this.recipeSelected = recipeId
  }

  getRecipesByCategory() {
    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + this.categorySelected
    return this.httpClient.get<{ meals: RecipeByCategory[]; }>(`${url}`)
  }

  getRecipe() {
    const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + this.recipeSelected;
    return this.httpClient.get<{ meals: RecipeApi[]; }>(url);
  }

}
