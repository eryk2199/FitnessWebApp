import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  
  constructor(private http: HttpClient) { }

  getMealDays() {
    return this.http.get("/api" + "/api/days", { withCredentials: true });
  }
}
