import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  articles = [
    { title: "Breaking News", lede: "This is fun!", category: "Sports" },
    { title: "An Article", lede: "Cool!!", category: "Culture" }
  ];
  constructor(public navCtrl: NavController) {}
}
