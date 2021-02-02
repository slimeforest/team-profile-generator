const Engineer = require("../lib/Engineer");

test("Can set github account", () => {
  const testValue = "githubUsername";
  const e = new Engineer("Jack", 1, "testing@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Jack", 1, "testing@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get github username", () => {
  const testValue = "githubUser";
  const e = new Engineer("Jack", 1, "testing@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});