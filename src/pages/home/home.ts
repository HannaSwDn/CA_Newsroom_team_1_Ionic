import { ArticlesCallProvider } from "./../../providers/articles-call/articles-call";

import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import "rxjs/add/operator/map";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  articles: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private articlesCall: ArticlesCallProvider
  ) {}

  ionViewDidLoad() {
    this.articlesCall.getArticles().subscribe(res => {
      this.articles = res.articles;
    });
  }
}
