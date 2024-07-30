# Login Tests Project

## Description

The Login Tests project is designed to test the login functionality of a pickFU web application. This project includes both positive and negative test cases to validate the login feature's robustness and error handling. It uses TypeScript, Playwright for browser automation using parallel test execution, and a .env file for configuration. Also most important .env file is included .gitignore file

## Approach

--Positive Login Test: Validates successful login with valid credentials.
--Negative Login Test: Tests the system's response to invalid or  
 incomplete credentials.

## Project Structure

--helpers.ts: Contains the encapsulated functions for positive login tests i.e login and for just login only there is justLogin .
--tests/loginTest.spec.ts: Contains the both positive and negative login test cases.
--.env: Configuration file for environment variables i.e Email and Password.

## Installation

1. **Clone the repository**:

   ```sh
   cmd@user: git clone
   cmd@user: cd PICKFUTEST

   ```

2. **Install the Dependencies**:  
   cmd@user: npm ci

   Q.Why npm ci other than npm install or others?
   A.npm ci stands for "clean install." It is used for Continuous  
    Integration (CI) environments to ensure that the exact versions of
   dependencies listed in the package-lock.json file are installed.

3. **Configure Environment Variables**:
   -- Create a .env file in the root directory of the project with the  
    following content:

   USERNAME=your_valid_username
   PASSWORD=your_valid_password

   --Ensure the .env file is not committed to the repository by listing
   it in .gitignore.

4. **Install Playwright Browsers**:
   cmd@user: npx playwright install

5. **Running Tests**:
   cmd@user: npx playwright test

## Documentation

For more information on the tools used:

Playwright Documentation : https://playwright.dev/
dotenv Documentation : https://www.dotenv.org/docs/
TypeScript Documentation : https://www.typescriptlang.org/docs/
