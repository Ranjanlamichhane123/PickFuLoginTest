import { Page } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

export async function login(page: Page) {
  if (!EMAIL || !PASSWORD) {
    throw new Error("EMAIL or password in not defined in environment vairalbe");
  }
  await page.goto("https://www.pickfu.com/users/sign_in");

  await page.fill("#user_email", EMAIL);
  await page.fill("#user_password", PASSWORD);

  await page.click("#submit-signup");
}

export async function loginTest(
  page: Page,
  username: string,
  password: string
) {
  await page.goto("https://www.pickfu.com/users/sign_in");

  await page.fill("#user_email", username);
  await page.fill("#user_password", password);

  await page.click("#submit-signup");
}
