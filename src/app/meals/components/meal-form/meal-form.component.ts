import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-meal-form',
  imports: [ReactiveFormsModule],
  templateUrl: './meal-form.component.html',
  styleUrl: './meal-form.component.css'
})
export class MealFormComponent {
  form = new FormGroup({
    name: new FormControl(""),
    calories: new FormControl(""),
    protein: new FormControl(""),
  });
}
