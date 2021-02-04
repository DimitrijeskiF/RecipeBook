
import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeChanged = new Subject<Recipe[]>()

  private recipes: Recipe[] = [
    new Recipe('This is recipe', 'First Recipe', 'https://www.handletheheat.com/nutella-cake/', 'https://www.mycakeschool.com/images/2019/10/Chocolate-Nutella-Cake-Recipe-Featured-Image--720x720.jpg', '1h10min',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('This is recipe', 'First Recipe', 'https://www.handletheheat.com/nutella-cake/', 'https://www.mycakeschool.com/images/2019/10/Chocolate-Nutella-Cake-Recipe-Featured-Image--720x720.jpg', '1h10min',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ])
  ];

  constructor(
    private slService: ShoppingListService
  ) { }


  getRecipes() {
    // returning copy of the array.
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe)
    this.recipeChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice())
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
