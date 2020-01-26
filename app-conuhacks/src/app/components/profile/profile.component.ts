import { HttpServiceService } from './../../services/http-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {
  constructor(private httpService: HttpServiceService) {
    httpService.getUsers().subscribe(x => console.log(x));
  }
}
