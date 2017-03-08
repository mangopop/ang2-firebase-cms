import { Ang2FirebaseCmsPage } from './app.po';

describe('ang2-firebase-cms App', () => {
  let page: Ang2FirebaseCmsPage;

  beforeEach(() => {
    page = new Ang2FirebaseCmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
