// search vulnerabilities
describe("Mgmt vulnerabilities:", function() {
  it("search", async function() {
    await browser.get(`${domain}vulnerabilities`);

    let url = element(By.css(`[formcontrolname="url"]`));
    let form = element(By.css("form"));
    url.sendKeys("socnhi");
    form.submit();

    browser.sleep(2000);

    let status = element(By.css(`#statusAPI`));
    expect(status.getText()).toEqual("200");
  });
});
