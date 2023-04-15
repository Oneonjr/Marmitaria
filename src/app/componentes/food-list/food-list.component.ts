import { Component } from '@angular/core';
import { Food } from '../shared/food.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {

  foodList:Food[] = [
    new Food('Carne', 1),
    new Food('Arooz', 2),
    new Food('Couve Refogada', 2)
  ];

}
