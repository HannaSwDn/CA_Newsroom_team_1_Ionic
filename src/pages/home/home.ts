import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  articles: any;
  constructor(public navCtrl: NavController, private http: HttpClient) {}

  ionViewDidLoad = () => {
    this.http.get('https://cors-anywhere.herokuapp.com/https://craftynews.herokuapp.com/api/articles').subscribe((response) => {
      this.articles = response.articles;
    });
  }
}

