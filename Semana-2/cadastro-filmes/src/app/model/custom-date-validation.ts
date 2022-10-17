import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomDateValidation{
    public static validDate(formControlName: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            var date = control.root.get(formControlName)
            const valid = date?.value.match(/([0-2][0-9]|(3)[0-1])[-|\/](((0)[0-9])|((1)[0-2]))[-|\/]\d{4}/);
            console.log(valid)
            return !valid ? {forbiddenName: {value: control.value}} : null;
          };
    }
}