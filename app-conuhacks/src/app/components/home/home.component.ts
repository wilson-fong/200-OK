import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userIsLogged = false;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    let authUserKey = Object.keys(window.localStorage).filter(item => item.startsWith('firebase:authUser'))[0];
    
      if (authUserKey) {
        let currentUser = window.localStorage[authUserKey];
        if (currentUser) {
          this.userIsLogged = true;            
        }
      }
   }

  login() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    this.router.navigate(["/search"]);
  }
}
