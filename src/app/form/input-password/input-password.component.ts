import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss']
})
export class InputPasswordComponent{

  onSubmit(ngForm: NgForm): void {
    alert(`Submitted ${ngForm.form.value.password}`)
  }
}
