import {Component, Input } from '@angular/core';

@Component({
  selector: 'app-strength-bar',
  templateUrl: './strength-bar.component.html',
  styleUrls: ['./strength-bar.component.scss']
})
export class StrengthBarComponent {
  colorBar = '';
  invalChar = false;
  colorPoint: string = '';
  private regLettDigSymb = new RegExp(`^(?=.*[-!$#%@^&*()_+|~={}\\[\\]:"';<>?])(?=.*\\d)(?=.*[a-z])[-!$#%@^&*()_+|~={}\\[\\]:"';<>?\\da-z]{8,}$`);
  private regLettDig = new RegExp(`^(?=.*[a-z])(?=.*\\d)[a-z\\d]{8,}$`);
  private regDigSymb = new RegExp(`^(?=.*[-!$#%@^&*()_+|~={}\\[\\]:"';<>?])(?=.*\\d)[-!$#%@^&*()_+|~={}\\[\\]:"';<>?\\d]{8,}$`);
  private regLettSymb = new RegExp(`^(?=.*[a-z])(?=.*[-!$#%@^&*()_+|~={}\\[\\]:"';<>?])[a-z-!$#%@^&*()_+|~={}\\[\\]:"';<>?]{8,}$`);
  private regLettOrDigOrSymb = new RegExp(`(^[a-z]{8,}$)|(^[0-9]{8,}$)|(^[-!$#%@^&*()_+|~={}\\[\\]:"';<>?]{8,}$)`);

  @Input('passwordValue')
  set passwordValue(value: string){
    this.invalChar = false;
    this.colorBar = value && value.length < 8 ? 'red' : '';
    if (this.regLettDigSymb.test(value)) {
      this.colorPoint = 'green'
      return;
    }
    if (
      this.regLettDig.test(value) ||
      this.regDigSymb.test(value) ||
      this.regLettSymb.test(value)
    ){
      this.colorPoint = 'yellow';
      return;
    }
    if (this.regLettOrDigOrSymb.test(value)) {
      this.colorPoint = 'red';
      return;
    }
    this.invalChar = value?.length >= 8;
    this.colorPoint = '';
  };
}
