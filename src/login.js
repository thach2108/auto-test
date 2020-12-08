// config domain
const domain = "http://localhost:8080/";

// setting driver
var origFn = browser.driver.controlFlow().execute;
browser.driver.controlFlow().execute = function() {
  var args = arguments;

  // queue <x> ms wait
  const x = 100;
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

    user.sendKeys("admin");
    pass.sendKeys("Abc@1234");
    login.click();
  });

  it("identity", function() {
    expect(browser.getTitle()).toEqual("SafeSAI");
  });
});
