import { HeoresAppPage } from './app.po';

describe('heores-app App', function() {
  let page: HeoresAppPage;

  beforeEach(() => {
    page = new HeoresAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
