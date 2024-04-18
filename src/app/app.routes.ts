import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MyRecipeComponent } from './pages/my-recipe/my-recipe.component';
import { ExploreComponent } from './pages/explore/explore.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "my-recipes", component: MyRecipeComponent },
    { path: "explore", component: ExploreComponent },
];
