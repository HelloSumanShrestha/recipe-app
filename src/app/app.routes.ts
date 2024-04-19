import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MyRecipeComponent } from './pages/my-recipe/my-recipe.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { RecipeCategoryComponent } from './pages/recipe-category/recipe-category.component';
import { RecipeOnDetailComponent } from './pages/recipe-on-detail/recipe-on-detail.component';
import { MyRecipeOnDetailComponent } from './pages/my-recipe-on-detail/my-recipe-on-detail.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    {
        path: "my-recipes", children: [
            { path: "", component: MyRecipeComponent },
            { path: "detail", component: MyRecipeOnDetailComponent }
        ]
    },
    { path: "explore", component: ExploreComponent },
    { path: "categories", component: RecipeCategoryComponent },
    { path: "recipe", component: RecipeOnDetailComponent }
];
