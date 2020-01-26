import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
//import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  users$: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    let users = db.list('/users').subscribe(x => console.log(x));
  }

  getUsers() {
    return this.db.list('/users');
  }
}
