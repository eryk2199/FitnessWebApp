import { Component, OnInit } from '@angular/core';
import { MealService } from '../../meal.service';

@Component({
  selector: 'app-meal-list',
  imports: [],
  templateUrl: './meal-list.component.html',
  styleUrl: './meal-list.component.css'
})
export class MealListComponent implements OnInit{
  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.mealService.getMealDays().subscribe({
      next: (res) => { console.log(res) },
      error: (e: any) => { console.error(e) }
    })
  }


}
