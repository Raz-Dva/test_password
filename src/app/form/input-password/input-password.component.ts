import {Component, ViewChild} from '@angular/core';
import {NgControl, NgForm} from "@angular/forms";
import {PatternLetters, PatternNumbers, PatternSymbols} from "src/app/constants/patterns.constants";

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss']
})
export class InputPasswordComponent{
  validCharacters =`[${PatternLetters}${PatternNumbers}${PatternSymbols}]+$`;

  @ViewChild('controlPassword') input: NgControl | undefined;

  get isEmptyPassword(): boolean {
    if (this.input) {
      return !this.input.value && Boolean(this.input.dirty || this.input.touched)
    }
     return false;
  }

  onSubmit(ngForm: NgForm): void {
    alert(`Submitted ${ngForm.form.value.password}`)
  }
}
