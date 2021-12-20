import {Component, Input } from "@angular/core";
import { AbstractControl, FormControl } from "@angular/forms";

import { signUpFormErrors } from "../../../config";

@Component({
  selector: 'field-validator',
  templateUrl: './validationError.component.html'
})
export class ValidationErrorComponent {
  @Input() fieldName: AbstractControl = new FormControl();

  validationErrors = Object.entries(signUpFormErrors);

}
