import { Injectable } from '@angular/core';

@Injectable()
export class UserStorageService {
  putToLocalStorage(user: any) {
    const { username, role } = user;
    if (username && role) {
      localStorage.setItem('username', username);
      localStorage.setItem('role', role);
      return true;
    }

    return false;
  };

  getFromLocalStorage() {
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('role');

    if (username && role) {
      return { username, role };
    }

    return false;
  }

  deleteFromLocalStorage() {
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('role');

    if (username && role) {
      localStorage.removeItem('username');
      localStorage.removeItem('role');
      return true;
    }

    return false;
  }
}
