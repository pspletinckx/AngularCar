import { AngularCarAppPage } from './app.po';

describe('angular-car-app App', () => {
  let page: AngularCarAppPage;

  beforeEach(() => {
    page = new AngularCarAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to car!!'))
      .then(done, done.fail);
  });
});
