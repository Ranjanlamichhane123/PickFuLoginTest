import { login, loginTest } from "../resuable_function/helpers";
import { test, Page, expect } from "playwright/test";

test.describe("Login Tests Scenarios.", () => {
  test("Verifying successful login with valid credentials.", async ({
    page,
  }) => {
    await login(page);

    //As user gets redirected to template page when they successfully logged in.
    await page.waitForURL("https://app.pickfu.com/templates");
  });

  test("Verifying the error message by sending correct email and correct password.", async ({
    page,
  }) => {
    await loginTest(page, "lamichhaneranjan@gmail.com", "Password@12345");

    const errorMessage = page.locator(".alert-heading");

    //Expecting warning message to be visible
    await expect(errorMessage).toBeVisible();

    //Since Invalid Email or password warning gets dispalyed when user enter wrong email or password.
    await expect(errorMessage).toHaveText("Invalid email or password.");
  });

  test("Verifying the error message by sending correct email and wrong password.", async ({
    page,
  }) => {
    await loginTest(page, "lamichhaneranjan593@gmail.com", "wrongPassword");

    const errorMessage = page.locator(".alert-heading");

    await expect(errorMessage).toBeVisible();

    //Since Invalid Email or password warning gets dispalyed when user enter wrong email and wrong password.
    await expect(errorMessage).toHaveText("Invalid email or password.");
  });

  test("Verifying the error message by sending incorrect email and incorrect password.", async ({
    page,
  }) => {
    await loginTest(page, "wrongemail@gmail.com", "wrongPassword");

    const errorMessage = page.locator(".alert-heading");

    await expect(errorMessage).toBeVisible();

    //Since Invalid Email or password warning gets dispalyed when user enter wrong email and wrong password.
    await expect(errorMessage).toHaveText("Invalid email or password.");
  });

  test("Verifying the error message by sending correct email and blank password.", async ({
    page,
  }) => {
    await loginTest(page, "lamichhaneranjan593@gmail.com", "");

    const errorMessage = page.locator(".alert-heading");

    await expect(errorMessage).toBeVisible();

    //Since Invalid Email or password warning message gets dispalyed when user enter correct email and blank password.
    await expect(errorMessage).toHaveText("Invalid email or password.");
  });

  test("Verifying the error message by sending blank email and blank password.", async ({
    page,
  }) => {
    await loginTest(page, "lamichhaneranjan593@gmail.com", "wrongPassword");

    const errorMessage = page.locator(".alert-heading");

    await expect(errorMessage).toBeVisible();

    //Since Invalid Email or password warning message gets dispalyed when user enter correct email and blank password.
    await expect(errorMessage).toHaveText("Invalid email or password.");
  });
});
