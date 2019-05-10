# Word Search

This is a program built in NodeJS that will return the location of words in a word search. It will also optionally return the puzzle board with found words highlighted.

### Prerequisites

NodeJS is required to run the main program. Python 3 with Beautiful Soup installed is required to generate new test data.

```
On a Mac with Homebrew:
brew install node

Optional:
brew install python
pip install beautifulsoup4
```

### Installing

To begin clone the repository and install the dependencies for Node


```
npm install
```

Optionally you can generate test data by running generate_puzzle.py

```
python scripts/generate_puzzle.py <height> <number of words> <file name>
```

## Running the tests

To run all of the tests with jest simply run:

```
npm test
```

## Running the program

To run the program with randomly generated input:

```
node app.js <file name> <optional: print board (-b)>
```

To run the program with your own input:

```
node app.js <file name> <optional: print board (-b)>
```

## Built With

* [NodeJS](https://nodejs.org/) - JavaScript Runtime
* [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) - HTML parsing

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgements

* [Discovery](http://puzzlemaker.discoveryeducation.com/WordSearchSetupForm.asp) - Test puzzle creation
* [Creativity Games](https://creativitygames.net/random-word-generator/randomwords/) - Random word generation
