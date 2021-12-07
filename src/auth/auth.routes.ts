import { Routes } from "@angular/router";

import { AuthLayoutComponent } from "./auth-layout/auth-layout.component";
import { SignInComponent } from "./signIn/signIn.component";
import { SignOutComponent } from "./signout/signOut.component";

export const authRoutes: Routes = [
  { path: '', component: AuthLayoutComponent, children: [
      { path: 'signin', component: SignInComponent},
      { path: 'signout', component: SignOutComponent}
    ]}
];
