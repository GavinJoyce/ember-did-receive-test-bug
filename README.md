# ember-did-receive-test-bug

ISSUE: https://github.com/emberjs/ember.js/pull/17266

This repo demonstrates an Ember.js issue when testing a component which mutates a property in the `didReceiveAttrs` component hook. The test added in https://github.com/GavinJoyce/ember-did-receive-test-bug/commit/157a0cdd3763510a44353750cb84462d0efe88f1 passes in 3.1, but fails in all versions from 3.2 to 3.5:

<img width="750" alt="screen shot 2018-12-06 at 10 02 22" src="https://user-images.githubusercontent.com/2526/49577244-e9c39e00-f93e-11e8-8867-e436c21668b2.png">
<img width="749" alt="screen shot 2018-12-06 at 10 02 29" src="https://user-images.githubusercontent.com/2526/49577250-ed572500-f93e-11e8-8eee-c346cc5be876.png">


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd did-receive`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
