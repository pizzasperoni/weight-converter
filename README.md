# Weight converter
From kg -> pounds & pounds -> kg

Just a js module that returns weight converted to pounds or kg depending on the case.

### Installing

Clone this repo

```
npm install
```

### Usage

Once installed, just import the library from your js app:

```
const converter = require('..').default
```
Then you can run:

It expects 2 params, the first one is the weight you need to convert, you can use a value in kg or punds aswell.
The second one is the option, there are 2 options

* 1:
If the option is 1, it will return a value converted from kg to punds
* 2:
If the option is 2, it will return a value converted from pounds to kg
Any other case will return an exception

```
convert(10, 1) //10 kg are 22.0462 pounds
convert(22, 2) //22 pounds are 9.97903 kg
```

## Running the tests

```
npm run test
```

## Built With

* [ES6](http://es6-features.org/) - Vanilla
* [Babel](https://babeljs.io/) - A JavaScript compiler
* [Mocha](https://mochajs.org/) - JavaScript test framework


## Authors

* **Diego Speroni** - *Initial work* - [pizzasperoni](https://github.com/pizzasperoni) [twitter](https://twitter.com/PizzaSperoni)

See also the list of [contributors](https://github.com/pizzasperoni/weight-converter/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Everybody in this country should learn how to program a computer, because it teaches you how to think

