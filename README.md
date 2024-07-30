# Login Tests Project

## Description

The Login Tests project is designed to test the login functionality of the pickFU web application. This project includes both positive and negative test cases to validate the robustness and error handling of the login feature. It utilizes TypeScript, Playwright for browser automation with parallel test execution, and a `.env` file for configuration. Note that the `.env` file is included in the `.gitignore` file to avoid committing sensitive information.

## Approach

- **Positive Login Test**: Validates successful login with valid credentials.
- **Negative Login Test**: Tests the system's response to invalid or incomplete credentials.

## Project Structure

- **`helpers.ts`**: Contains encapsulated functions for positive login tests, including the `login` function and the `justLogin` function for simpler login operations.
- **`tests/loginTest.spec.ts`**: Includes both positive and negative login test cases.
- **`.env`**: Configuration file for environment variables such as Email and Password. Ensure this file is listed in `.gitignore` to prevent accidental commits.

## Installation

1. **Clone the Repository**:
   ```sh
    git clone https://github.com/Ranjanlamichhane123/PickFuLoginTest.git
   ```
   ```sh
   cd pickFuTest
   ```

2. **Install the Dependencies**:  
     ```sh
   npm ci
   ```

     #### Qnswer:Why npm ci instead of npm install or others?
     ##### npm ci stands for "clean install." It is used for Continuous Integration (CI) environments to ensure that the exact versions of  dependencies listed in the package-lock.json file are installed.

3. **Configure Environment Variables**:
   - Create a .env file in the root directory of the project with the  
    following content:

   * EMAIL=your_valid_username
   * PASSWORD=your_valid_password

   - Ensure the .env file is not committed to the repository by listing
   it in .gitignore.

4. **Install Playwright Browsers**:
      ```sh
        npx playwright install
     ```

5. **Running Tests**:
    ```sh
      npx playwright test
     ```
   
## Documentation

* [Playwright Documentation](https://playwright.dev/): Provides comprehensive details on using Playwright for browser automation.
* [dotenv Documentation](https://www.dotenv.org/docs/): Details how to use dotenv for managing environment variables.
* [TypeScript Documentation](https://www.typescriptlang.org/docs/): Official TypeScript documentation for understanding and using TypeScript.

