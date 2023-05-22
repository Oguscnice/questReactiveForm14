import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  street = new FormControl('');
  zip = new FormControl('');
  city = new FormControl('');
  submit: boolean = false;
  newUser!: any;

  inscription() {
    this.submit = true;

    this.newUser = {
      username: this.username.value,
      email: this.email.value,
      password: this.password.value,
      adress: {
        street: this.street.value,
        zip: this.zip.value,
        city: this.city.value,
      },
    };
  }
}
