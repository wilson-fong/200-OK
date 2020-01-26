import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  users;
  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get("https:app-conuhacks.firebaseio.com/users.json").toPromise();
  }
}
