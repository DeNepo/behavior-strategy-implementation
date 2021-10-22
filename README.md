# Behavior, Strategy, Implementation

Examples, exercises and guides for the
[Behavior, Strategy Implementation module](https://home.hackyourfuture.be/curriculum/behavior-strategy-implementation)

---

## Getting Started

> You will need
> [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and
> [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) on your computer
> to study this material
>
> Using a browser with good DevTools will make your life easier:
> [Chromium](http://www.chromium.org/getting-involved/download-chromium),
> [FireFox](https://www.mozilla.org/en-US/firefox/new/),
> [Edge](https://www.microsoft.com/edge),
> [Chrome](https://www.google.com/chrome/)

1. Install o update the `study-lenses` package globally
   - `$ npm install -g study-lenses` (if you do not have it installed)
   - `$ npm update -g study-lenses` (if you already have it installed)
   - Didn't work? you may need to try:
     - (mac) `$ sudo npm install -g study-lenses`
   - having trouble updating?
     - try this:
       `$ npm uninstall -g study-lenses && npm install -g study-lenses`
2. Fork and clone this repository:
   1. fork the HackYourFuture repository to your personal account
      - `git@github.com:HackYourFutureBelgium/behavior-strategy-implementation.git`
   2. clone your fork to your computer
   3. when there are updates to the module:
      1. update your fork with a PR
      2. pull the changes from your fork to your computer
3. Navigate to the module repository in terminal
   - `$ cd behavior-strategy-implementation`
4. Run the `study` command from your CLI
   - `$ study`
5. The material will open in your default browser, you're good to go!
   - you can read the `study-lenses` user guide from your browser by navigating
     to `localhost:xxxx?--help`

> If you have a windows computer and get this error:
>
> - `... /study.ps1 cannot be loaded because running scripts ...`
>
> follow the instructions in
> [this StackOverflow answer](https://stackoverflow.com/a/63424744), that should
> take care of it ; )

---

## Materials

- **JavaScript**: Learn important features of the JavaScript language:
  - 🥚 **[./array-methods](./array-methods)**: Learn array methods by first understanding the strategies they are designed for.
  - 🥚 **[./ecmascript-modules](./ecmascript-modules)**: Learn the first basics of using `import` and `export`. Just enough to complete this module's group exercises. (week 3)
  - 🐣 **[./prototype-delegation](./prototype-delegation)**: you _do not_ need to master this! but it will help understand what you see in the debugger, where methods come from, and how to read MDN documentation.
  - 🐥 **[./throw-and-catch](./throw-and-catch)**: Go deeper into errors and error handling by throwing and catching your own errors.
  - 🐥 **[./js-koans](./js-koans)**: study how JS works with unit testing syntax. like `/isolate` from Debugging but with tests instead of `console.assert`
- **Skills**: Build your programming skills with these exercises:
  - 🥚,🐣,🐥 **[Solution Write-Ups](https://github.com/HackYourFutureBelgium/solution-write-ups)** Learn to solve coding challenges by studying other people's solutions. (_separate repository_)
  - 🥚 **[./unit-testing](./unit-testing)**: An introduction to writing unit tests with `describe`, `it`, and `expect`
  - 🐣 **[./parsons-problems](./parsons-problems)**: Explore behavior, strategy and implementation by reconstructing different solutions to coding challenges.
  - 🐣 **[./function-design](./function-design)**: Learn a structured approach to understanding and solving coding challenges
  - 🐣 **[./fuzz-testing](./fuzz-testing)**: Write multiple solutions to the same problem, and test your code with random test cases. Using random test cases makes it easier to catch sneaky bugs that you wouldn't think of testing yourself.
  - 🐣 **[practice-code-review](https://github.com/HackYourFutureBelgium/practice-code-review)**: The Chapter 3 group exercises. (_separate repo_)
  - 🐣 **[document-and-pass](https://github.com/HackYourFutureBelgium/document-and-pass)**: write your own solutions and documentation to some coding challenges. Practice behavior-strategy-implementation and using testing libraries in VSCode. (_separate repo_)

### Chapter 1

You're not expected to master this material in one week, but starting to
practice in week 1 will make everything else easier. Practicing a little bit
every day is the best way to improve.

- 🥚,🐣,🐥 **[Solution Write-Ups](https://github.com/HackYourFutureBelgium/solution-write-ups)**
- 🥚 **[./unit-testing](./unit-testing)**
- 🥚 **[./array-methods](./array-methods)**
- 🐣 **[./parsons-problems](./parsons-problems)**
- 🐣 **[./prototype-delegation](./prototype-delegation)**

### Chapter 2

- 🥚,🐣,🐥 **[Solution Write-Ups](https://github.com/HackYourFutureBelgium/solution-write-ups)**
- 🐣 **[./function-design](./function-design)**
- 🐣 **[./fuzz-testing](./fuzz-testing)**
- 🐥 **[./throw-and-catch](./throw-and-catch)**

### Chapter 3

- 🥚,🐣,🐥 **[Solution Write-Ups](https://github.com/HackYourFutureBelgium/solution-write-ups)**
- 🥚 **[./ecmascript-modules](./ecmascript-modules)**
- 🐣 **[practice-code-review](https://github.com/HackYourFutureBelgium/practice-code-review)**: The Chapter 3 group exercises. (_separate repo_)
- 🐣 **[document-and-pass](https://github.com/HackYourFutureBelgium/document-and-pass)**: (_separate repo_)

---

## Study Tips

<details>
<summary>expand/collapse</summary>
<br>

- Don't rush, understand! Programming is hard.
  - The examples and exercises will still be there to study later.
  - It's better to fail tests slowly and learn from your mistakes than to pass
    tests quickly and not understand why.
- Don't skip the examples! Understanding and experimenting with working code is
  a very effective way to learn programming.
- Write lots of comments in the examples and exercises. The code in this
  repository is yours to study, modify and re-use in projects.
- Practice
  [Pair Programming](https://home.hackyourfuture.be/students/study-tips/pair-programming):
  two people, one computer.
- Take a look through the
  [Learning From Code](https://home.hackyourfuture.be/students/study-tips/learning-from-code)
  guide for more study tips

### Priorities

If you can't finish all the material in this repository, that's expected!
Anything you don't finish now will always be waiting for you to review when you
need it. These 4 emoji's will help you prioritize your study time and to measure
your progress:

- 🥚: Understanding this material is required, it covers the base skills you'll
  need for this module and the next. You do not need to finish all of them but
  should feel comfortable that you could with enough time.
- 🐣: You have started all of these exercises and feel you could complete them
  all if you just had more time. It may not be easy for you but with effort you
  can make it through.
- 🐥: You have studied the examples and started some exercises if you had time.
  You should have a big-picture understanding of these concepts/skills, but may
  not be confident completing the exercises.
- 🐔: These concepts or skills are not necessary but are related to this module.
  If you are finished with 🥚, 🐣 and 🐥 you can use the 🐔 exercises to push
  yourself without getting distracted from the module's main objectives.

### Hashtags

There's so many examples and exercises in this repository, it's easy to forget
of what you still need to finish or what you want to review again. Luckily
VSCode is really good at searching through folders of code.

You can write hashtags in your comments while you're studying, then search for
those hashtags later so you don't miss anything. Here's some ideas:

- `// #todo, still a few blanks left` - search for `#todo` in Study Lenses or
  VScode to find all the exercises you still need to study
- `// #review, coercion is confusing this again next week` - search for
  `#review` to find the files you need to study again
- ... anything goes! Find the hashtags that work for you

### Study Board

Creating a project board on your GitHub account for tracking your study at HYF
can help you keep track of everything you're learning. You can create the board
at this link: `https://github.com/your_user_name?tab=projects`.

These 4 columns may be helpful:

- **todo**: material you have not studied yet
- **studying**: material you are currently studying
- **to review**: material you want to review again in the future
- **learned**: material you know well enough that you could help your classmates
  learn it

</details>

[TOP](#behavior-strategy-implementation)

---

## Code Quality Scripts

<details>
<summary>expand/collapse</summary>
<br>

This repository comes with some scripts to check the quality of this code. You
can run these scripts to check the code provided by HYF, and to check the code
you write when experiment with the examples and complete the exercises.

### `npm run format`

This script will format all of the code in this repository making sure that all
the indentations are correct, the code is easy to read, and letting you know if
there are any syntax errors.

### `npm run spell-check`

This script will check all of the files in your repository for spelling
mistakes. Spelling is not just a detail, is important! Good spelling helps
others read and understand your programs with less effort.

`spell-check` is not so clever though, it doesn't have _all_ possible words in
it's dictionary and it won't know if you _wanted_ to spell a word incorrectly.
If you think one of it's "Unknown word"s is not a problem, you can either ignore
the suggestion or add the word to the `"words": [ ... ],` list in
[.cspell.json](./.cspell.json).

### `npm run lint:md`

This script will [lint](https://en.wikipedia.org/wiki/Lint_%28software%29) all
the Markdown files in this repository, checking for syntax mistakes and other
bad practices. Fixing linting errors will help you learn to write better code by
pointing out your mistakes _before_ they cause problems in your program.

Some linting errors will take some practice to understand and fix, but it will
be a good use of time.

### `npm run lint:js -- ./path/to/code`

Just like `lint:md`, but for `.js` files. This script will lint all of the JS
files in this repository, letting you know if there are any syntax errors or bad
practices.

</details>

[TOP](#behavior-strategy-implementation)
