import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const params = new HttpParams()
      .set("useCookies", true)
    return this.http.post("/api" + "/login",  {email, password}, {params, observe: 'response', responseType: 'text'});
  }

  register(email: string, password: string) {
    return this.http.post("/api" + "/register",  {email, password}, {observe: 'response', responseType: 'text'});
  }
}
