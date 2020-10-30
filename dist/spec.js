// config domain
const domain = "http://localhost:8080/";

// setting driver
var origFn = browser.driver.controlFlow().execute;
browser.driver.controlFlow().execute = function() {
  var args = arguments;

  // queue <x> ms wait
  const x = 1000;
  origFn.call(browser.driver.controlFlow(), function() {
    return protractor.promise.delayed(x);
  });

  return origFn.apply(browser.driver.controlFlow(), args);
};

browser.driver
  .manage()
  .window()
  .maximize();

// login
describe("Login:", function() {
  beforeEach(async function() {
    browser.waitForAngularEnabled(false);
    await browser.get(domain);

    let user = element(By.css("#Username"));
    let pass = element(By.css("#Password"));
    let login = element(By.css(`[name="button"]`));

    user.sendKeys("hantttest02+101@gmail.com");
    pass.sendKeys("Ha@123456");
    login.click();
  });

  it("identity", function() {
    expect(browser.getTitle()).toEqual("SafeSAI");
  });
});

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
