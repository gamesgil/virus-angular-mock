# VirusUiMock

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## General description & requirements
App Specifications
A virus is spreading worldwide. This web application shows its user a list of potential infection events.

The UI is comprised of the following sections:  
Top bar will display:  
- User’s full name
- Potential infections number (returned list length)  
Side bar will display a list of items representing the potential infections ordered by datetime
(latest on top).
- Each item will only display the datetime.
- Items are selectable. Selecting the item shows its details in the content view.  
Content view shows the selected item full details:  
- location (lat, lon)
- datetime.

Given - BE service which implements the following API:  
GET api/user/{id} – returns a User {id: number, fname: string, lname: string}  
GET api/user/{id}/infections – returns a list of Infection {location: {lon: number, lat: number}, datetime:
string}  
- the app should handle 10,000 list items.  
- the BE service should be mocked. (doesn’t matter how)  
- the application should be written with scalability in mind and contain all relevant layers.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# virus-angular-mock
