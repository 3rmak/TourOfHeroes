import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

import { createUserValidators, userRolesEnum } from "../../config";

import { User, UserService } from "../../shared";

import { usernameValidator } from "./signup.validators";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
  createForm: FormGroup = this.fb.group({
    'name': new FormControl('', [
      Validators.minLength(createUserValidators.USER_NAME_MIN_LEN),
      Validators.maxLength(createUserValidators.USER_NAME_MAX_LEN),
      Validators.required
    ]),
    'surname': new FormControl('', [
      Validators.minLength(createUserValidators.USER_NAME_MIN_LEN),
      Validators.maxLength(createUserValidators.USER_NAME_MAX_LEN),
      Validators.required
    ]),
    'username': new FormControl('', [Validators.required], usernameValidator(this.userService)),
    'password': new FormControl('', [
      Validators.required,
      Validators.pattern(createUserValidators.PASSWORD_REGEXP)
    ]),
    'role': new FormControl('', [
      Validators.required
    ]),
  });

  userRoles: string[] = [];

  passwordMatches: boolean = true;


  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.userRoles = Object.values(userRolesEnum);
  }

  comparePassword(event: Event) {
    // @ts-ignore
    if (event.target?.value != this.createForm.controls['password'].value) {
      this.passwordMatches = false;
    }
  }

  submitForm() {
    const user: User = new User(
      this.createForm.controls['username'].value,
      this.createForm.controls['password'].value,
      this.createForm.controls['role'].value,
    )
    const response = this.userService.createUser(user);
    if (!response) {
      alert('user was not created');
      return;
    }

    alert('created!');
  }

  ngOnInit(): void {
  }

}
