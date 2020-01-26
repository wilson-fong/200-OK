import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {  
  url = "https://app-conuhacks.firebaseio.com/";

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get(this.url + "users.json").toPromise();
  }

  getHashtags() {
    return this.httpClient.get(this.url + "hashtags.json").toPromise();
  }

  getMyHashtags() {
    return this.httpClient.get(this.url + "/user-hashtags.json").toPromise();
  }
}
