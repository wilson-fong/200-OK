import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.css']
})
export class PoolComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() {


    //getMethod: getBestMatch 
  }

  //Get all profiles that have at least 1 machtching tag 
  //then push profiles in an array
  //sort the array where first element is profile with most matching tags 
  //present first match, if swipe right then succes, if swipe left present 2nd match and so on 
  getPortentialMatches() {
        //query to get objects with similar tags 
  }

  sortPotentialMatches() {
  
  }
}
