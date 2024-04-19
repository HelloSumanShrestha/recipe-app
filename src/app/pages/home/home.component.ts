import { Component } from '@angular/core';
import { RecipeContainerComponent } from "./recipe-container/recipe-container.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [RecipeContainerComponent]
})
export class HomeComponent {

}
