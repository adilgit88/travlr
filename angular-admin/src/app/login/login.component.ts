import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  message = '';

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['admin@example.com', [Validators.required, Validators.email]],
      password: ['Password123', Validators.required]
    });
  }

  onSubmit(): void {
    this.message = '';

    if (this.loginForm.invalid) {
      this.message = 'Enter a valid email and password.';
      return;
    }

    this.authenticationService.login(this.loginForm.value as User).subscribe({
      next: () => this.router.navigate(['']),
      error: (err: unknown) => {
        this.message = 'Login failed. Check your email and password.';
        console.error(err);
      }
    });
  }
}
