import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SignInRoutingModule} from './sign-in-routing.module';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SignInPageComponent
  ],
  imports: [
    CommonModule,
    SignInRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class SignInModule {
}
