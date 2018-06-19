import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  reactForms: FormGroup;
  name  = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email, this.validateEmail]);

  constructor() { }

  ngOnInit() {
    this.reactForms = new FormGroup({
      name: this.name,
      email: this.email
    });
  }

  saveData(data) {
    console.log(data);
  }

  validateEmail (control: AbstractControl) {
    if (control.value.startsWith('www')) {
      return null;
    } else {
      return { validUrl: true};
    }
  }

}
