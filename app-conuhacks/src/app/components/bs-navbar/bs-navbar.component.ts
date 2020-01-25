import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import {parse, stringify} from 'flatted/esm';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;

    localStorage.setItem('user', stringify(this.user$));
    //JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit() {
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
