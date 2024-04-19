import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../../../services/category-service.service';
import { RecipeByCategory } from '../../../interface/recipebycategory';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-recipe-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-category.component.html',
  styleUrl: './recipe-category.component.css'
})
export class RecipeCategoryComponent implements OnInit {


  constructor(private service: CategoryServiceService) { }

  categorySelected: string = this.service.categorySelected

  recipesByCategory: RecipeByCategory[] = []

  ngOnInit(): void {
    this.service.getRecipesByCategory().subscribe(data => this.recipesByCategory = data.meals)
    console.log(this.recipesByCategory);
  }

  ngOnChanges(): void {
    this.service.getRecipesByCategory().subscribe(data => {
      this.recipesByCategory = data.meals;
    });
  }

  onRecipeSelection(recipeId: string) {
    this.service.onRecipeSelection(recipeId)
  }
}
