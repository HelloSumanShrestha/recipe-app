import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeByCategory } from '../interface/recipebycategory';
import { RecipeApi } from '../interface/recipe-api';
import { BehaviorSubject, catchError, switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CategoryServiceService {

  private _categorySelected = new BehaviorSubject<string>("Chicken");
  categorySelected$ = this._categorySelected.asObservable();
  recipeSelected: string = "52885"

  constructor(private httpClient: HttpClient) { }

  onCategorySelection(categoryId: string) {
    console.log(categoryId);
    this._categorySelected.next(categoryId)
  }

  onRecipeSelection(recipeId: string) {
    console.log(recipeId);
    this.recipeSelected = recipeId
  }

  getRecipesByCategory() {
    return this.categorySelected$.pipe(
      switchMap(category => {
        const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category;
        return this.httpClient.get<{ meals: RecipeByCategory[]; }>(url);
      })
    );
  }
  getRecipe() {
    const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + this.recipeSelected;
    return this.httpClient.get<{ meals: RecipeApi[]; }>(url)
  }

}


