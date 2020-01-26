import { HttpServiceService } from './../../services/http-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  hashtags;
  myHashtags;

  constructor(private httpService: HttpServiceService) { }

  ngOnInit() {    
      this.httpService.getHashtags().then(data => {
        this.hashtags = data;
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
}
