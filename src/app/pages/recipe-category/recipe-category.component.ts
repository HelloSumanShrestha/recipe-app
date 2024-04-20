import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../../../services/category-service.service';
import { RecipeByCategory } from '../../../interface/recipebycategory';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-recipe-category',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './recipe-category.component.html',
  styleUrl: './recipe-category.component.css'
})

export class RecipeCategoryComponent implements OnInit {

  categorySelected: string = '';

  recipesByCategory: RecipeByCategory[] = [];

  constructor(private service: CategoryServiceService) { }

  ngOnInit(): void {
    this.service.categorySelected$.subscribe(category => {

      this.categorySelected = category;

      this.service.getRecipesByCategory().subscribe(data => {

        this.recipesByCategory = data.meals;
        console.log(this.recipesByCategory);

      });
    });
  }

  onRecipeSelection(recipeId: string) {
    this.service.onRecipeSelection(recipeId);
  }

}
