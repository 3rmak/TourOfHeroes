import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

import { createUserValidators, userRolesEnum } from "../../config";

import { TeamService } from "../../team/shared";
import { HeroService } from "../../heroes/shared";
import { PreviousPageService, UserStorageService, UserService } from "../../shared";

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
    'username': new FormControl('', [Validators.required], usernameValidator(this.userService, this.createForm.controls.username)),
    'password': new FormControl(),
    'role': new FormControl('', [
      Validators.required
    ]),
  });

  userRoles: string[] = [];
  rePassword: string = '';


  constructor(
    private fb: FormBuilder,
    // private teamService: TeamService,
    // private heroService: HeroService,
    // private userStorageService: UserStorageService,
    // private previousPageService: PreviousPageService
    private userService: UserService
  ) {
    this.userRoles = Object.values(userRolesEnum);
  }

  comparePassword(event: Event) {
    // @ts-ignore
    console.log(event.target?.value)
  }

  submitForm() {
    console.log(this.createForm);
  }

  ngOnInit(): void {
  }

}
