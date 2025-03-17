import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form = new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });

  constructor(private authService: AuthService, private router: Router) {}

  get email() {
    return this.form.get("email");
  }

  get password() {
    return this.form.get("password");
  }

  onSubmit() {
    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return
    }
    const email = this.email?.value;
    const password = this.password?.value

    if(email ==null || password == null) {
      throw Error("Register form: email or password is null");
    }
    this.authService.register(email, password).subscribe({
      next: () => { this.router.navigateByUrl("/login") },
      error: (e: any) => { 
        console.error(e)
      }
    })
  }
}
