import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Recipe } from '../../interface/recipe';
import { RecipesCollectionService } from '../../services/recipes-collection.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-recipe',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})

export class EditRecipeComponent implements OnInit {

  @Output() updateState = new EventEmitter<boolean>();
  recipeFormData!: FormGroup;

  constructor(private recipeService: RecipesCollectionService) { }

  ngOnInit() {

    this.recipeFormData = new FormGroup({
      idMeal: new FormControl('', Validators.required),
      strMeal: new FormControl('', Validators.required),
      strCategory: new FormControl('', Validators.required),
      strArea: new FormControl('', Validators.required),
      strInstructions: new FormControl('', Validators.required),
      strMealThumb: new FormControl('', Validators.required),
      strTags: new FormControl('', Validators.required),
      strIngredients: new FormControl('', Validators.required)
    });

    this.loadRecipeData();
  }

  loadRecipeData() {
    const recipe = this.recipeService.recipe;
    if (recipe) {
      this.recipeFormData.patchValue(recipe);
    }
  }

  onUpdate() {
    if (this.recipeFormData.valid) {
      this.recipeService.updateRecipes(this.recipeFormData.value as Recipe);
      this.updateState.emit(false);
    }
  }

  onCancel() {
    this.updateState.emit(false);
  }
}
