import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {
  campaignOne: FormGroup;
  campaignTwo: FormGroup;

  bookTitle: string ="Becoming";
  author: string = "Michell Obama";
  
  sideBarOpen = false;
  serverName ='Test Server';
  username ='';
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverCreated = false;

  constructor() { 
    setTimeout(() =>{ 
      this.sideBarOpen = true;
    }, 2000);

    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16))
    });

    this.campaignTwo = new FormGroup({
      start: new FormControl(new Date(year, month, 15)),
      end: new FormControl(new Date(year, month, 19))
    });
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created!  Name is ' + this.serverName;
  }
  
  onUpdateServerName(event:Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    
  }
}
