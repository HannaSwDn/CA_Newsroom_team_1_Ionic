import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

/*
  Generated class for the ArticlesCallProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ArticlesCallProvider {
  constructor(public http: HttpClient) {}

  getArticles() {
    return this.http.get(
      "https://cors-anywhere.herokuapp.com/https://craftynews.herokuapp.com/api/articles"
    );
  }
}
