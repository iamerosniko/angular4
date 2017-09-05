# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

$ ng new --ng4 projectName         creating a new project
$ ng generate component NameOfNewwComponent

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
$ ng build --target=production --base-href '/' --aot --build-optimizer
$ ng build --target=development --base-href '/' --aot --build-optimizer


JIT - Compile TypeScript just in time for executing it.

Compiled in the browser.
Each file compiled separately.
No need to build after changing your code and before reloading the browser page.
Suitable for local development.


AOT - Compile TypeScript during build phase.

Compiled by the machine itself, via the command line (Faster).
All code compiled together, inlining HTML/CSS in the scripts.
No need to deploy the compiler (Half of Angular size).
More secure, original source not disclosed.
Suitable for production builds.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
