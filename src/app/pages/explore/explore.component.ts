import { Component, OnInit } from '@angular/core';
import { BrowserStorageService } from '../../../services/browser-storage.service';
import { CommonModule } from '@angular/common';
import { Category } from '../../../interface/category';
import { CategoryServiceService } from '../../../services/category-service.service';
import { RecipeCategoryComponent } from "../recipe-category/recipe-category.component";
import { RecipeByCategory } from '../../../interface/recipebycategory';
import { Subscription } from 'rxjs';
import { Recipe } from '../../../interface/recipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-explore',
  standalone: true,
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css',
  imports: [CommonModule, RecipeCategoryComponent, RouterLink]
})

export class ExploreComponent implements OnInit {

  // categories

  categories: Category[] = []
  categoryChips: string[] = []
  recipesByCategory: RecipeByCategory[] = []
  active: string = ""
  localRecipes: Recipe[] = []

  private categorySubscription!: Subscription;

  constructor(private localStorage: BrowserStorageService, private categorySelected: CategoryServiceService) {
    const categoriesList = this.localStorage.get("categories")

    if (categoriesList) {
      this.categories = JSON.parse(categoriesList)
    }


    if (this.categories.length > 0) {
      for (let i of this.categories) {
        this.categoryChips.push(i.strCategory)
      }
    }

    // for local recipe collection
    const localData = this.localStorage.get("my-recipes")

    if (localData) {
      this.localRecipes = JSON.parse(localData)
    }

  }


  ngOnInit(): void {
    this.categorySubscription = this.categorySelected.categorySelected$.subscribe(category => {
      this.active = category;
      this.updateRecipes();
    });
  }

  ngOnDestroy() {
    this.categorySubscription.unsubscribe();
  }

  onChipSelection(chip: string) {
    this.active = chip
    this.categorySelected.onCategorySelection(chip)
    this.updateRecipes()
  }

  updateRecipes() {
    this.categorySelected.getRecipesByCategory().subscribe(data => {
      this.recipesByCategory = data.meals
    });
  }


  ngOnChanges() {
    this.categorySelected = this.categorySelected
  }

  /* For Local Recipe In detail view */

  onLocalClick(recipeId: string) {
    this.categorySelected.onRecipeSelection(recipeId)
  }

  onApiClick(recipeId: string) {
    this.categorySelected.onRecipeSelection(recipeId)
  }

}
