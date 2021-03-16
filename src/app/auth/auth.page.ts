import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  formStatus = 'login';
  signupForm: FormGroup;
  loginForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.signupForm = new FormGroup(
      {
        name: new FormControl(null, Validators.required),
        password1: new FormControl(null, [
          Validators.required,
          Validators.minLength(6),
        ]),
        password2: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        address: new FormControl(null, Validators.required),
        status: new FormControl(null, Validators.required),
      },
      { validators: this.checkPasswords }
    );
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }
  segmentChanged(value: any) {
    this.formStatus = value.detail.value;
  }

  checkPasswords(group: FormGroup) {
    const password = group.controls.password1.value;
    const confirmPassword = group.controls.password2.value;
    return password === confirmPassword ? null : { notSame: true };
  }

  onSignup() {
    console.log(this.signupForm);
  }
  onLogin() {
    this.authService.login('a', 1);
    this.router.navigate(['/']);
  }
}
