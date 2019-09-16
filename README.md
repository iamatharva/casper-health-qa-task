#  CASPER Test Automatino Framework
Welcome to CASPER test automation framework
Framework: Mocha using Webdriver IO
Pattern: Page Object Pattern
Assertions: Chai
Style: BDD

## Setup
This requires node version v10.16.1 to be installed 
To install node visit
```https://nodejs.org/en/download/```

## How to run the tests

To run the test, install the dependencies.

```
yarn install

```
Run the task from the root using the below commands.

```
yarn test

```
## Allure Reports

To view test reports navigate to root directory of repository and run command

```
allure generate -c allure-results/ && allure open

```