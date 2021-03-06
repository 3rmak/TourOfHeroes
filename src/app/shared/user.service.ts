import { Injectable } from "@angular/core";

import { userRolesEnum } from '../config';

import { CustomResponse } from "./customResponse";
import { User } from './user';

const userList: User[] = [
  new User('admin', 'admin', userRolesEnum.ADMIN),
  new User('roman', 'roman', userRolesEnum.USER),
  new User('dima', 'dima123', userRolesEnum.USER),
  new User('alina', 'aline345', userRolesEnum.USER),
  new User('grisha', 'grizha', userRolesEnum.ADMIN),
];

@Injectable()
export class UserService {
  private users: User[] = userList;

  isUsernameTaken(username: string): boolean {
    const user = this.users.find(item => item.username == username);
    if (user) {
      return true;
    }

    return false;
  }

  verifyUserCredentials(username: string, password: string): CustomResponse {
    const user = this.users.find(item => item.username == username);
    if (user?.password == password) {
      return {
        message: 'authorized',
        user: {
          username: user.username,
          role: user.role
        }
      };
    }
    return { message: 'unauthorized' }
  };

  createUser(user: User): boolean {
    if (this.isUsernameTaken(user.username)) {
      return false;
    }

    this.users.push(user);

    return true;
  }


}
