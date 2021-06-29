import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-landing',
  templateUrl: './main-landing.component.html',
  styleUrls: ['./main-landing.component.scss']
})
export class MainLandingComponent implements OnInit {
  showPosts = true;
  showClients = true;
  showDownloader = true;
  showUploader = true;
  showSearch = true;

  constructor() { }

  ngOnInit(): void {
  }
  
  togglePosts() { this.showPosts = !this.showPosts; }
  toggleClients() { this.showClients = !this.showClients; }
  toggleDownloader() { this.showDownloader = !this.showDownloader; }
  toggleUploader() { this.showUploader = !this.showUploader; }
  toggleSearch() { this.showSearch = !this.showSearch; }

}
