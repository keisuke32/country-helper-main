# Country Search Helper

## How to use?

Ensure you have `node.js` environment installed on your computer along with `npm`.

### Development
Run development server and check the port 4200 on the browser

```bash
$ npm install
$ npm run start
```

### Production Deployment

```bash
$ npm run build
```

This command will build the project in production mode. You just need to move the `dist` folder to the server and do some fallback redirection config which is 
required for the SPA. Here you can find more details [here](https://angular.io/guide/deployment#simple-deployment-options)

## Specifications

### Note from developer

To focus more on development, code quality and functional things, I selected the fastest way. Here are libraries I used for basic styling and programming.

* [Angular Material](https://material.angular.io/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Prettier](https://prettier.io/)
* [Ngrx](https://ngrx.io/)

### Answers to questions

#### Any style guides you used for your coding

I just followed very standard Typescript and HTML coding principal. Additionally I used prettier for the lint & quality improvement. 

#### Any CSS coding standards

I used Angular Material and Tailwind CSS for the project, so there was actually no need to write any CSS code. This was for just reduce the time costing which could be spent on cosmetic things.

#### Installation 

Installation guide can be found from [here](#development).

#### Description of how the application work

* User need to select the region from the dropdown.
* Then the API request will be sent with the selected region.
* That request will return countries.
* Now user can select the country from the dropdown list.
* Selected country will be rendered, along with information such as name, flag, population and etc.
* User can continue his searching with options...

#### If you ran out of time what else you would have done?

_Unit Testing_

There are many things that can be good for the improvement, but if I choose just one then - I will write Test-Cases (at least unit testing) for services, components and stores and so on.
My initial plan contains tests but duration was not enough, I didn't change the `spec` generation from the schematic configuration. 


### Additional updates

_It became apparent very quickly that some of the details of the spec were not adhered to. For example, the test details an application structure where we have one component for the country and another for the component country details with the implied testing point being a devs understanding of working with parent and child component, their inputs/outputs and how to structure an application. These details were omitted and all the core application logic were in a single component (.i.e. app.component). In the bigger picture, it becomes an issue if a business task with a specific acceptance criteria and approach decided by a dev team is completed without adhering to the task brief._

* I created a shared module - CountryModule which has two components which is country search and country detail.
* Those two components are being used for building the main page.
* As long as we are interacting via Ngrx Store, there's no need to use `@Input` and `@Output` decorators or services. Check those two components and see how they are interacting together via the store.

_Critically, the unit tests were also missing even though testing templates seemed to be defined for a few components either automatically via the CLI or manually. Although the candidate acknowledged the missing tests in the documentation and attributed it to time constraint, a slightly different approach would have been mitigated that. For example, an application that had 80% - 90% of the specified feature which provided a value to the end user but had comprehensive testing would have been viable. This ensures that the developed percentage  is comprehensively tested for potential issues or bugs._

* There are two types of tests I wrote one for unit test for service and second is the e2e test for the entire user flow.
* Tests are done based on the specifications you've provided.
* The API url should be equal as provided, this has been tested as unit test.
* Other requirements are mostly related with the user flow, so covered by the e2e tests.
* Page elements, select region, select country, rendering selected country, these requirements are tested via e2e.
