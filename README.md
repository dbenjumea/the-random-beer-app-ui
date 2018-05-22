# Webapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.

## Pre-requirements

Install last version of NodeJS and npm for project dependencies management in package.json.
Run 'which node' in order to check if NodeJS is installed
Run 'node --version' in order to check what version of NodeJS is installed

In case you have not installed NodeJS yet, there is a tool which manages easily the NodeJS versioning in our system: nvm (Node Version Manager)

Steps to configure the Ubuntu system:

- Install a C++ Compiler
    1) sudo apt-get update
    2) sudo apt-get install build-essential libss1-dev (The build-essential package (C++ Compiler) should exist on the server, however, we will still include it in our installation process)
- Install NVM:
    1) curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash (check version in official webpage --> https://github.com/creationix/nvm))
    2) Close and reopen the terminal
    3) source ~/.profile
- Check nvm is installed: nvm --version
- Install Node by NVM: nvm install node
- Check node version: node -v
- Check npm version: npm -v
- Compile project by: npm install 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
