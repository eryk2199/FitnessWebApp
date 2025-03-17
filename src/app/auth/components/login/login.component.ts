import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = "";
  password = "";
  invalidCredentials = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(loginForm: NgForm) {
    if(loginForm.form.invalid) {
      loginForm.form.markAllAsTouched();
      return;
    }
    this.authService.login(this.email, this.password).subscribe({
      next: () => { this.router.navigateByUrl("/") },
      error: (e: any) => { 
        if(e.status === 401) {
          this.invalidCredentials = true;
        } 
        else {
          console.log(e);
        }
      }
    })
  }
}
