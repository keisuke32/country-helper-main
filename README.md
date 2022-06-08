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
