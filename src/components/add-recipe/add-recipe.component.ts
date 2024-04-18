import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Recipe } from '../../interface/recipe';
import { RecipesCollectionService } from '../../services/recipes-collection.service';

@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})

export class AddRecipeComponent {

  recipeFormData = new FormGroup({

    idMeal: new FormControl(""),

    strMeal: new FormControl(""),

    strCategory: new FormControl(""),

    strArea: new FormControl(""),

    strInstructions: new FormControl(""),

    strMealThumb: new FormControl(""),

    strTags: new FormControl(""),

    ingredients: new FormControl(""),
  })

  constructor(private recipeService: RecipesCollectionService) { }

  onAdd() {
    console.log("I am here");

    if (this.recipeFormData.valid) {

      const recipeData: Recipe = {
        idMeal: this.recipeFormData.get("idMeal")!.value || "",

        strMeal: this.recipeFormData.get("strMeal")!.value || "",

        strCategory: this.recipeFormData.get("strCategory")!.value || "",

        strArea: this.recipeFormData.get("strArea")!.value || "",

        strInstructions: this.recipeFormData.get("strInstructions")!.value || "",

        strMealThumb: this.recipeFormData.get("strMealThumb")!.value || "",

        strTags: this.recipeFormData.get("strTags")!.value || "",

        ingredients: this.recipeFormData.get("ingredients")!.value || "",
      }
      console.log(JSON.stringify(recipeData));

      this.recipeService.addRecipe(recipeData)
    }
    console.log("Meal : " + JSON.stringify(this.recipeFormData!.value));

  }
}
