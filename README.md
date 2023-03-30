Platform Science Candidate Assignment Response -- Ata Ahmad
==========================================

## Introduction

- This repo contains my submission for the Platform Science Candidate take-home assignment. It contains a test suite to test against a `cleaning-sessions` API, as well as documentation of all bugs that I was able to uncover.
    - All main source code and test data can be found in the following files:
        - `cypress/e2e/api/cleaning-sessions_spec.cy.js`
        - `cypress/support/commands.js`
        - `cypress/fixtures/e2e/api/testData,js`
    


## How to setup the test suite

### Requirements:
- [node v18.11.0](https://nodejs.dev/en/learn/how-to-install-nodejs/)
- [npm v8.19.2](https://www.newline.co/@Adele/how-to-install-nodejs-and-npm-on-macos--22782681)
- Docker v.18+
- Google Chrome v100+

### Steps:
1. Ensure you have all of the required tools installed above
2. [Navigate to this link](https://bitbucket.org/platformscience/pltsci-sdet-assignment/src/main/), and complete setup of the service. Be sure to have the service running before continuing here.
3. Clone this repo locally.
4. Run the following code:
    - `npm install`
    - `npx cypress run`  
  

- If you wish to interface with the Cypress TestRunner, then do the following:
  - Complete all steps above, but instead of running `npx cypress run`, run the following:
      - `npx cypress open`
  - The TestRunner will open, and follow any confiuguration steps as prompted.
  - Run E2E tests, and choose Chrome as the browser
  - Click on the `cleaning-sessions_spec.cy.js` file to run the spec file containing the test suite.

## Bug Reports:
- All findings are contained within the `bugReports` folder
  - The `main.md` file is the short report containing all bugs found, all other files go more in depth on each one.

## Notes:
- If I had more time, I would test in the limit of the inputs:
    - Examples: 
        - Testing a 100000000 x 100000000 grid with no patches
        - Testing a 100000000 x 100000000 grid with all patches
- I also would have tested properly formatted, but invalid inputs:
    - Examples:
        - Testing a 1 x 1 room with 100 patches
        - Testing negative values for grid dimensions and coordinates