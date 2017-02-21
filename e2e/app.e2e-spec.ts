import { NicholasWilliamPage } from './app.po';

describe('nicholas-william App', function() {
  let page: NicholasWilliamPage;

  beforeEach(() => {
    page = new NicholasWilliamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
