import { Component, OnInit } from '@angular/core';
import { RecipesCollectionService } from '../../../services/recipes-collection.service';
import { Recipe } from '../../../interface/recipe';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { EditRecipeComponent } from "../../../components/edit-recipe/edit-recipe.component";

@Component({
  selector: 'app-my-recipe',
  standalone: true,
  templateUrl: './my-recipe.component.html',
  styleUrl: './my-recipe.component.css',
  imports: [CommonModule, RouterLink, MatIconModule, EditRecipeComponent]
})

export class MyRecipeComponent implements OnInit {
  constructor(private service: RecipesCollectionService) { }

  collection: Recipe[] = []
  editState: boolean = false
  toUpdateRecipe !: Recipe

  ngOnInit(): void {
    this.collection = this.service.recipeCollection
  }

  onDelete(recipe: Recipe) {
    this.service.deleteRecipes(recipe)
  }

  onEdit(recipe: Recipe) {
    this.service.updateRecipes(recipe)
    this.editState = false
  }

  onClick(recipe: Recipe) {
    this.service.setMyRecipe(recipe)
  }

  onCancel(state: boolean) {
    this.editState = state
  }

  updateState(state: boolean, recipe: Recipe) {
    this.service.setMyRecipe(recipe)
    this.editState = state
  }
}
