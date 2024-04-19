import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Input() addActiveState: boolean = false
  @Output() updateState = new EventEmitter<boolean>

  recipeFormData = new FormGroup({
    idMeal: new FormControl(''),
    strMeal: new FormControl('', Validators.required),
    strCategory: new FormControl('', Validators.required),
    strArea: new FormControl('', Validators.required),
    strInstructions: new FormControl('', Validators.required),
    strMealThumb: new FormControl('', Validators.required),
    strTags: new FormControl('', Validators.required),
    ingredients: new FormControl('', Validators.required)
  });


  constructor(private recipeService: RecipesCollectionService) { }

  onAdd() {
    if (this.recipeFormData.valid) {

      const recipeData: Recipe = {

        idMeal: (this.recipeService.recipeCollection.length + 1).toString(),

        strMeal: this.recipeFormData.get("strMeal")!.value || "",

        strCategory: this.recipeFormData.get("strCategory")!.value || "",

        strArea: this.recipeFormData.get("strArea")!.value || "",

        strInstructions: this.recipeFormData.get("strInstructions")!.value || "",

        strMealThumb: this.recipeFormData.get("strMealThumb")!.value || "",

        strTags: this.recipeFormData.get("strTags")!.value || "",

        stringredients: this.recipeFormData.get("ingredients")!.value || "",
      }

      this.recipeService.addRecipe(recipeData)
    }

    this.updateState.emit(false)
  }
}
