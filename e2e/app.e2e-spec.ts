import { GowthamKommineniPage } from './app.po';

describe('gowtham-kommineni App', () => {
  let page: GowthamKommineniPage;

  beforeEach(() => {
    page = new GowthamKommineniPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
