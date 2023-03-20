import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {

  signInForm: FormGroup;
  emailForm: FormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordForm: FormControl = new FormControl('', [Validators.required]);

  constructor(private authService: AuthService, private router: Router) {
    this.signInForm = new FormGroup({
      'email': this.emailForm,
      'password': this.passwordForm
    });
  }

  ngOnInit(): void {
  }

  async signIn() {
    const result = await this.authService.login(this.emailForm.value, this.passwordForm.value);
    this.router.navigateByUrl('admin');
  }
}
