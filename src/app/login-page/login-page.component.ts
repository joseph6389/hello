
// ✅ login-page.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const email = this.email?.value;
    const password = this.password?.value;

    const success = this.authService.login(email, password);
    if (success) {
      const role = this.authService.getRole();
      this.router.navigate([role === 'admin' ? '/dashboard/found' : '/dashboard/lost']);
    } else {
      alert('❌ Invalid email or password');
    }
  }

  onForgotPassword(): void {
    this.router.navigate(['/forgot-password']);
  }

  onCreateAccount(): void {
    this.router.navigate(['/register']);
  }
}