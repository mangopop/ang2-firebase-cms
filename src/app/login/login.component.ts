import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './../auth.service';

import { User } from '../../interfaces/signup';
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn: Boolean = false; // was having trouble using this as an Observable
  email: string;
  message:String;
  error: Boolean = false;
  user: FormGroup;

  constructor(public Auth: AuthService, public af:AngularFire) {
    // this.Auth.checkLogin().subscribe(status => {
    //   console.log('log even happend in constructor');
    //   if (status != null)  {
    //     this.loggedIn = true;
    //     this.email = status.auth.email;
    //   }else{
    //     this.loggedIn = false;
    //     this.email = '';
    //   }
    // });
  }

  onSubmit(){
    this.message = this.Auth.login(this.user.value.email, this.user.value.password);
    // this.checkLogin();
  }

  logout(){
    this.af.auth.logout();
    // this.checkLogin();
  }

  // subscribe to the AF service, which on a login/out should update
  checkLogin(){
    this.Auth.checkLogin().subscribe(status => {
      console.log('log even happend in check login');
      if (status != null)  {
        this.loggedIn = true;
        this.email = status.auth.email;
      }else{
        this.loggedIn = false;
        this.email = '';
      }
    });  
  }

  ngOnInit() {
    this.checkLogin();

    this.user = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

}
