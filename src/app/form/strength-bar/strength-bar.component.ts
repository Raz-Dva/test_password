import {Component, Input} from '@angular/core';
import {PatternLetters, PatternNumbers, PatternSymbols} from "src/app/constants/patterns.constants";

@Component({
  selector: 'app-strength-bar',
  templateUrl: './strength-bar.component.html',
  styleUrls: ['./strength-bar.component.scss']
})
export class StrengthBarComponent {
  colorPoint: string = 'grey';
  private regLettDigSymb = new RegExp(`^(?=.*[${PatternSymbols}])(?=.*${PatternNumbers})(?=.*[${PatternLetters}])[${PatternSymbols}${PatternNumbers}${PatternLetters}]{8,}$`);
  private regLettDig = new RegExp(`^(?=.*[${PatternLetters}])(?=.*${PatternNumbers})[${PatternLetters}${PatternNumbers}]{8,}$`);
  private regDigSymb = new RegExp(`^(?=.*[${PatternSymbols}])(?=.*${PatternNumbers})[${PatternSymbols}${PatternNumbers}]{8,}$`);
  private regLettSymb = new RegExp(`^(?=.*[${PatternLetters}])(?=.*[${PatternSymbols}])[${PatternLetters}${PatternSymbols}]{8,}$`);
  private regLettOrDigOrSymb = new RegExp(`(^[${PatternLetters}]{8,}$)|(^[${PatternNumbers}]{8,}$)|(^[${PatternSymbols}]{8,}$)`);

  @Input('passwordValue')
  set passwordValue(value: string) {
    this.colorPoint = '';

    if (this.regLettDigSymb.test(value)) {
      this.colorPoint = 'green'
      return;
    }
    if (
      this.regLettDig.test(value) ||
      this.regDigSymb.test(value) ||
      this.regLettSymb.test(value)
    ) {
      this.colorPoint = 'yellow';
      return;
    }
    if (this.regLettOrDigOrSymb.test(value)) {
      this.colorPoint = 'red';
      return;
    }
  };
}
