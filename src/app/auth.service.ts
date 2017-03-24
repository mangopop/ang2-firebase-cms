import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {

  //Pitfall #1 - don't expose subjects directly

  private _isLoggedIn: BehaviorSubject<boolean>;
  public isLoggedIn: Observable<boolean>;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(public af: AngularFire) { }

  getEmail(): Observable<string> {
    return this.af.auth.map(auth => {
      if(auth != null) return auth.auth.email
    })
  }

  /**
   * returns the AF auth
   */
  checkLogin(): Observable<any> {
    console.log('checking login...');
    return this.af.auth;

  }

  //returns an observable boolean
  checkLogin2(): Observable<Boolean> {
    return this.af.auth.map(auth => auth != null ? true : false)
  }

  /**
   * calls auth logout
   */
  logout(): void {
    this.af.auth.logout();
    // this.isLoggedIn = false;
  }

  /**
   * logs in using auth
   * @param email 
   * @param password 
   */
  login(email, password): string {
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
