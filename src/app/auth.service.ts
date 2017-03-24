import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import {AngularFire} from 'angularfire2';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(public af: AngularFire) {

  }

  /**
   * returns the AF auth
   */
  checkLogin(): Observable<any> {
    console.log('checking login...');
    return this.af.auth;
    // this.af.auth.subscribe(auth => {
    //   console.log(auth);
    //   if (auth != null) {        
    //     return new BehaviorSubject(true).do(val => this.isLoggedIn = true);
    //   }
    // });
    // return new BehaviorSubject(false);    
    // // return Observable.of(false);
  }

  /**
   * calls auth logout
   */
  logout() :void {
    this.af.auth.logout();
    this.isLoggedIn = false;
  }

  /**
   * logs in using auth
   * @param email 
   * @param password 
   */
  login(email,password): string {
    // console.log(this.user.value);
    this.af.auth.login({
      email: email,
      password: password,
    }).catch(error => {
      console.log(error);
      return error
    });

    return 'Success';
  }



}
