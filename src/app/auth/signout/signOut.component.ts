import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { UserStorageService } from "../../shared";

@Component({
  selector: 'sign-out',
  templateUrl: 'signOut.component.html'
})
export class SignOutComponent implements OnInit{
  public username: string = '';
  constructor(
    private router: Router,
    private userStorageService: UserStorageService
  ) {  }

  signOut() {
    const response = this.userStorageService.deleteFromLocalStorage();
    if (!response) {
      alert('Logout was not successful, try again later');
      return;
    }

    alert('come again sooner :)');
    this.router.navigate(['signin']);
  }

  ngOnInit() {
    const response = this.userStorageService.getFromLocalStorage();
    if(!response) {
      this.router.navigate(['not-found']);
      return;
    }

    const { username, role } = response;
    this.username = username;
    // this.role = role;
  }
}
