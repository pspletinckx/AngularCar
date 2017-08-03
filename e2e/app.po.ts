import { browser, by, element } from 'protractor';

export class AngularCarAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('car-root h1')).getText();
  }
}
