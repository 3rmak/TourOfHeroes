import { Component, DoCheck, OnInit } from "@angular/core";

import { UserStorageService } from "../shared";

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {
  public username: string = '';
  // public role: string = '';
  public test: string = '5';
  loginLogoutText: string = 'Login';
  loginLogoutUrl: string = '/signin';
  constructor(
    private userStorageService: UserStorageService
  ) { }

  ngOnInit() {
    const response = this.userStorageService.getFromLocalStorage();
    if (!response) {
      return;
    }

    const { username, role } = response;
    this.username = username;
    // this.role = role;

    this.loginLogoutText = `Hello, ${this.username}`;
    this.loginLogoutUrl = `/signout`
  }

  ngDoCheck() {
    const response = this.userStorageService.getFromLocalStorage();
    if ((!response && !this.username) || (response && this.username)) {
      return;
    } else if (!response) {
      this.loginLogoutText = `Login`;
      this.loginLogoutUrl = `/signin`
    } else if (response) {
      const { username, role } = response;
      this.username = username;
      // this.role = role;

      this.loginLogoutText = `Hello, ${this.username}`;
      this.loginLogoutUrl = `/signout`
    }
  }
}
