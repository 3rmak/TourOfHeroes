import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { SignInComponent } from "./signIn/signIn.component";
import { SignOutComponent } from "./signout/signOut.component";
import { SignUpComponent } from './signUp/signup.component';
import { ValidationErrorComponent } from "./signUp/validationError.component/validationError.component";

import { authRoutes } from "./auth.routes";

@NgModule({
  declarations: [
    AuthLayoutComponent,
    SignInComponent,
    SignOutComponent,
    SignUpComponent,
    ValidationErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(authRoutes)
  ],
  providers: [],
  exports: [RouterModule]
})
export class AuthModule {

}
