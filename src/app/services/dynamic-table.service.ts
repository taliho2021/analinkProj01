import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicTableService {

  private url : any = 'https://jsonplaceholder.typicode.com' ;     //Added url to fetch json data //

  constructor(private http: HttpClient) { }

  getTableDatas() {
      return this.http.get(this.url + '/users');   //Fetch the data from REST api //
  }

  getPosts() {
    return this.http.get(this.url + '/posts');  //Fetch the post data from REST api//
  }
}
