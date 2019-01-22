import { Page } from "./app.po";

describe("App", () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe("default screen", () => {
    beforeEach(() => {
      page.navigateTo("/");
    });

    it("should have a title Crafty News", () => {
      page.getTitle().then(title => {
        expect(title).toEqual("Crafty News");
      });
    });

    it("should see news title", () => {
      expect(page.getArticleTitle()).toContain("Breaking News");
    });
  });
});
