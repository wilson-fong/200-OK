import { HttpServiceService } from './../../services/http-service.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GuidComponent } from './../guid/guid.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  hashtags;
  myHashtags;
  newHashtag;
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
    this.httpService.getMyHashtags().then(data => {
      let userHashtags, allUserHashTags; 
      allUserHashTags = data;
      let userResult = [];
      userResult = allUserHashTags.filter(i => i.userGuid == "pzK0ytLJCkRw5nrcqhfT8VmXRTe2")[0];
      
      if (userResult) {
        this.myHashtags = userResult["tags"];
      }
  }); 

  }

  addHashtag() {
    this.myHashtags.push({ "guid": this.newGuid(), "name": this.newHashtag });
  }

  deleteHashtag(hashtag) {
    let indexToDelete = -1;
    for (let i = 0; i < this.myHashtags.length; i++) {
      if (this.myHashtags[i].guid == hashtag.guid) {
        indexToDelete = i;
      }
    }
    
    this.myHashtags.splice(indexToDelete, 1);
  }
  
  newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
