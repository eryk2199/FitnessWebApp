import { Component } from '@angular/core';

@Component({
  selector: 'app-meals-page',
  imports: [],
  templateUrl: './meals-page.component.html',
  styleUrl: './meals-page.component.css'
})
export class MealsPageComponent {
  test = "default";
  currentDay = { id:0, date: new Date(), calories: 2000, meals: [{id:0, time: "Breakfast", name: "Avocado toast"}, {id: 1,time: "Dinner", name: "Avocado toast"}]}
  modalDay = { id:0, date: new Date(), calories: 0, meals: []};

  constructor() {}

  editDay(day: any) {
    this.modalDay = day;
    this.test = "change"
  }
}
