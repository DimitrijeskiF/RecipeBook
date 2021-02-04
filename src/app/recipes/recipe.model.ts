import {Ingredient} from '../shared/ingredient.model';

export class Recipe {
    public name: string;
    public description: string;
    public comesFrom: string;
    public imagePath: string;
    public time: string;
  public ingredients: Ingredient[];

    constructor(name: string, description: string,  comesFrom: string, imagePath: string, time: string,  ingredients: Ingredient[]){
        this.name = name;
        this.comesFrom = comesFrom;
        this.imagePath = imagePath;
        this.description = description;
        this.time = time;
        this.ingredients = ingredients;
    }
}
