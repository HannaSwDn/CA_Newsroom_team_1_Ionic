import { browser, by, element } from 'protractor';

export class Page {

  navigateTo(destination) {
    console.log(browser)
    return browser.get(destination);
    
  }

  getTitle() {
    return browser.getTitle();
  }

  getArticleTitle() {
    return element(by.css("a")).getText()
  }

}