// test get element by class name
describe("Get element by class name:", function() {
  it("search", async function() {
    await browser.get(`${domain}`);

    browser.sleep(5000);

    let text = await $$(`.font-25.text-danger`).then(function(items) {
      expect(items.length).toBe(2);
      expect(items[0].getText()).toBe("1");
    });

    let text2 = await $$(`.font-25.text-danger`).then(function(items) {
      expect(items.length).toBe(2);
      expect(items[1].getText()).toBe("0");
    });
  });
});
