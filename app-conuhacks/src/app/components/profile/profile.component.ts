import { HttpServiceService } from './../../services/http-service.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {
  users$;
  data;

  constructor(private httpService: HttpServiceService) {
    let currentUser = JSON.parse(localStorage.getItem('user'));
    
    this.users$ = httpService.getUsers().then(data => {
      this.users$ = data;
      console.log(data);
    });
  }
}
