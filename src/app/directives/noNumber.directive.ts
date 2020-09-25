import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";


@Directive({
  selector:'[appNoNumberValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: NoNumberDirective, multi: true}]
})
export class NoNumberDirective implements Validator{
  validate(control: AbstractControl): { [key: string]: any} {
      const isValid = control.value && !/[0-9]/.test(control.value);
      return isValid ? null : {'number': true};
  }
}