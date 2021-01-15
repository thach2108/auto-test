// demo get element
describe("Get every element:", function() {
  it("Demo", async function() {
    await browser.get(`${domain}`);

    browser.sleep(5000);

    // select by css
    let disconnectByClass = await $$(`.font-25.text-danger`).then(function(
      items
    ) {
      expect(items.length).toBe(2);
      expect(items[0].getText()).toBe("0");
    });

    let issuesByClass = await $$(`.font-25.text-danger`).then(function(items) {
      expect(items.length).toBe(2);
      expect(items[1].getText()).toBe("0");
    });

    // select by XPath
    let issuesByXPath = await element(
      by.xpath(
        "/html/body/vadar-root/div/vadar-main-layout/div/div/div/div[2]/div/div/div[2]/vadar-dashboard/section/div/div/div[1]/div[1]/vadar-ds-summary/div/div/div[4]/div/div/a/span"
      )
    );
    expect(issuesByXPath.getText()).toBe("0");

    // select input by attribute name in aglular
    let url = element(By.css(`[formcontrolname="url"]`));

    // select input by tag name
    let form = element(By.css("form2"));

    // select input by id
    let status = element(By.css(`#statusAPI`));
  });
});
