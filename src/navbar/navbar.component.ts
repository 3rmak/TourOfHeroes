import { Component, OnInit } from "@angular/core";

import { UserStorageService } from "../shared";

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  public username: string = '';
  // public role: string = '';
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
}
