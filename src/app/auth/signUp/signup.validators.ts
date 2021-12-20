import { AbstractControl, AsyncValidatorFn } from "@angular/forms";

import { UserService } from "../../shared";

export function usernameValidator(service: UserService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return new Promise(resolve => {
      const user = service.isUsernameTaken(control.value);
      if (user) {
        resolve({
          "usernameValidator": {
            valid: false
          }
        })
      }

      resolve(null);
    })
  }
}
