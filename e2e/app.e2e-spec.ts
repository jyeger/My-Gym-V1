import { GymPage } from './app.po';

describe('gym App', () => {
  let page: GymPage;

  beforeEach(() => {
    page = new GymPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
