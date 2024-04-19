import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../interface/recipe';
import { RecipeByCategory } from '../interface/recipebycategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  categorySelected: string = ""
  recipeSelected: string = ""

  constructor(private httpClient: HttpClient) { }

  onCategorySelection(categoryId: string) {
    this.categorySelected = categoryId
  }

  onRecipeSelection(categoryId: string) {
    this.categorySelected = categoryId
  }

  getRecipesByCategory() {
    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + this.categorySelected
    return this.httpClient.get<{ meals: RecipeByCategory[]; }>(`${url}`)
  }

}
