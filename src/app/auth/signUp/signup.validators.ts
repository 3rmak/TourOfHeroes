import { FormControl } from "@angular/forms";

import { UserService } from "../../shared";

export function usernameValidator(service: UserService, control: FormControl) {
  return new Promise(resolve => {
    const user = service.isEmailTaken(control.value);
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
