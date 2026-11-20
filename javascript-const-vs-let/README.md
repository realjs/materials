# JavaScript const vs let: When to Use Each

This folder contains the sample code for the RealJS tutorial [JavaScript const vs let: When to Use Each](https://realjs.com/javascript-const-vs-let/).

## Running the Code

The examples run on Node. Open a terminal in one of the folders and run a file:

```console
$ cd 01-const-basics/
$ node game.js
Hits: 2
Max lives: 3
```

The `package.json` file sets `"type": "module"`, so Node runs every `.js` file below it as an ES module, in strict mode, as in the tutorial. Keep it next to the folders if you move them.

## What's in Each Folder

| Folder | Tutorial sections | Files |
|---|---|---|
| `01-const-basics/` | Declare Fixed Values With const, Read the Two const Errors | `game.js` (a fixed setting with `const` and a changing counter with `let`), `lives.js` (a `const` with no value gives a `SyntaxError`), `hits.js` (reassigning a `const` gives a `TypeError`) |
| `02-whole-program/` | Choose const or let for Each Name, Read What Runs Before Each Error | `game.js` (the game script with `const` or `let` chosen for each name), `misses.js` (`Game on!` prints, then the `TypeError` stops the program), `no-value.js` (the `SyntaxError` stops the program before any line runs), `hits.js` (`Ready!` prints before the `TypeError`) |

Some files fail on purpose. They show the errors that the tutorial explains.
