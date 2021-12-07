import { Component } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

import { PreviousPageService, UserStorageService } from '../../shared'
import { UserService } from "../shared";

import { userRolesEnum } from "../../config";

@Component({
  selector: 'sign-in',
  templateUrl: './signIn.component.html'
})
export class SignInComponent{
  options : Array<string> = Object.values(userRolesEnum);
  constructor(
    private fb: FormBuilder,
    private previousPageService: PreviousPageService,
    private router: Router,
    private userService: UserService,
    private userStorageService: UserStorageService
  ) {};

  signInForm: FormGroup = this.fb.group({
    "username": new FormControl(),
    "password": new FormControl()
  });

  sendLoginForm() {
    const { username, password } = this.signInForm.value;
    const response = this.userService.verifyUserCredentials(username, password);
    if (response.message == 'unauthorized') {
      alert('User credentials incorrect');
      return;
    }

    // if authorized user will be in response
    const { user } = response;
    if (user?.username && user?.role) {
      const response = this.userStorageService.putToLocalStorage(user);

      if (!response) {
        alert('Something went wrong')
        return;
      }

      alert(`Welcome ${user.username}`);
      this.router.navigate([this.previousPageService.getPreviousUrl()]);
    }
  }

}
