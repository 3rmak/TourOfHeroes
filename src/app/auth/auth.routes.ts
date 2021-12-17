import { Routes } from "@angular/router";

import { AuthLayoutComponent } from "./auth-layout/auth-layout.component";
import { SignInComponent } from "./signIn/signIn.component";
import { SignOutComponent } from "./signout/signOut.component";
import { SignUpComponent } from "./signUp/signup.component";

export const authRoutes: Routes = [
  { path: '', component: AuthLayoutComponent, children: [
      { path: 'signin', component: SignInComponent},
      { path: 'signout', component: SignOutComponent},
      { path: 'signup', component: SignUpComponent}
    ]}
];
