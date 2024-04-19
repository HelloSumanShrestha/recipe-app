import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../../../services/category-service.service';
import { RecipeApi } from '../../../interface/recipe-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-on-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-on-detail.component.html',
  styleUrls: ['./recipe-on-detail.component.css']
})

export class RecipeOnDetailComponent implements OnInit {
  constructor(private service: CategoryServiceService) { }

  recipe: RecipeApi[] = [];
  instructions: string[] = [];
  ingredients: string[] = [];

  ngOnInit() {
    this.service.getRecipe().subscribe(data => {
      this.recipe = data.meals;

      this.instructions = data.meals[0].strInstructions.split('.');

      for (let i = 1; i <= 20; i++) {
        const measureKey = `strMeasure${i}` as keyof RecipeApi;
        const ingredientKey = `strIngredient${i}` as keyof RecipeApi;

        if (data.meals[0][measureKey] && data.meals[0][ingredientKey]) {
          this.ingredients.push(`${data.meals[0][measureKey]} ${data.meals[0][ingredientKey]}`);
        }
      }
    });
  }
}
