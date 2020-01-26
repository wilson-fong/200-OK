import { HttpServiceService } from './../../services/http-service.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  currentUser;
  loaded = false;
  user$: Observable<any>;
  maleKey = "male";

  constructor(private httpService: HttpServiceService) {
    httpService.getUsers().then(data => {
      let authUserKey = Object.keys(window.localStorage).filter(item => item.startsWith('firebase:authUser'))[0];

      if (authUserKey) {
        this.currentUser = window.localStorage[authUserKey];
        if (this.currentUser) {
          this.user$ = data[JSON.parse(this.currentUser).uid];
          this.loaded = true;
        }
      }
    });
  }
}
