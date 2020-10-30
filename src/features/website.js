// search website
describe("Mgmt website:", function() {
  it("search", async function() {
    await browser.get(`${domain}mgmt-website`);

    let url = element(By.css(`[formcontrolname="url"]`));
    let form = element(By.css("form"));
    url.sendKeys("motphim"); // add key for search
    form.submit();

    browser.sleep(2000);

    let status = element(By.css(`#statusAPI`));
    expect(status.getText()).toEqual("200");
  });
});
