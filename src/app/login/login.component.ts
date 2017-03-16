import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../interfaces/signup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn: Boolean;
  user: FormGroup;

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => {
      console.log(auth);
      if (auth != null) { this.loggedIn = true }
    });
  }

  login(userEmail, userPassword) {
    console.log(userEmail.value, userPassword.value);
    this.af.auth.login({
      email: userEmail.value,
      password: userPassword.value,
    });
  }

  logout() {
    this.af.auth.logout();
    this.loggedIn = false;
  }

  onSubmit() {
    console.log(this.user.value);
    this.af.auth.login({
      email: this.user.value.email,
      password: this.user.value.password,
    });
  }

  ngOnInit() {
    this.user = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

}
