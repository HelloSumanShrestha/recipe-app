import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule, ViewportScroller } from '@angular/common';
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

  constructor(private recipeService: RecipesCollectionService, private scroller: ViewportScroller) { }

  recipeCollection = this.recipeService.recipeCollection

  addActiveState: boolean = false

  changeState(addActiveState: boolean) {
    if (addActiveState === true) {
      this.scroller.scrollToAnchor("addRecipeDiv")
    }
    this.addActiveState = addActiveState
  }

}
