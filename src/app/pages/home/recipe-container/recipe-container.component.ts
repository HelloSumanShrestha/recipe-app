import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from './../../../../interface/category';
import { ApiService } from '../../../../services/api.service';
import { RouterLink } from '@angular/router';
import { CategoryServiceService } from '../../../../services/category-service.service';

@Component({
  selector: 'app-recipe-container',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './recipe-container.component.html',
  styleUrls: ['./recipe-container.component.css']
})

export class RecipeContainerComponent implements OnInit {

  categories: Category[] = []

  apiService = inject(ApiService);
  categoryService = inject(CategoryServiceService)

  constructor() {
    const categoryData = localStorage.getItem("categories")
    if (categoryData) {
      this.categories = JSON.parse(categoryData)
    }
  }

  ngOnInit(): void {
    // to fetch the data from api, check if the data already exists in the localstorage
    if (localStorage.getItem("categories") === null) {

      this.apiService.getCategories().subscribe(data => {
        localStorage.setItem("categories", JSON.stringify(data.categories))
        this.categories = data.categories
      }
      )
    }
  }

  categoryOnClick(category: string | null) {
    if (category !== null) {
      console.log(category);
      this.categoryService.onCategorySelection(category)
    }
  }
}
