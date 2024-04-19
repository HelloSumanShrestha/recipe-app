import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecipesCollectionService } from '../services/recipes-collection.service';
import { AddRecipeComponent } from '../components/add-recipe/add-recipe.component';
import { HeaderComponent } from "../components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, CommonModule, AddRecipeComponent, HeaderComponent, RouterOutlet, RouterLink, RouterLinkActive]
})

export class AppComponent {
  constructor(private recipeService: RecipesCollectionService) { }

  recipeCollection = this.recipeService.recipeCollection

  addActiveState: boolean = false

  changeState(addActiveState: boolean) {
    console.log("I am here to test the state of the button " + addActiveState);
    this.addActiveState = addActiveState
  }

}
