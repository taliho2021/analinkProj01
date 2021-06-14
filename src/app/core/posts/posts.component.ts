import { Component, OnInit } from '@angular/core';

import { DynamicTableService } from '../../services/dynamic-table.service';
import { Posts } from 'src/app/models/posts.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private service: DynamicTableService) { }

  ngOnInit(): void {
    this.getPosts();   // calling the getTableData() after the constructor when the ngOnInit(0 is envoked)
  }

  getPosts() {
    this.service.getPosts().subscribe((res) => {
      this.posts = res as Posts[];  // response comes as data schema defined in model interface
    })
  }

}
