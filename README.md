# Event Manager

Event Manager is currently available at [Open at speak.exhange](https://www.speak.exchange 'Speak Exchange').

## What does our page look like?

<!-- insert screenshot -->

## How is our project structured?

```
.
+-- .github
| +-- workflows
| | +-- push.yml > Provides github configs that enables contionous deployment
+-- .next
| +-- ...
+-- container
| +-- Exchange.js
| +-- SearchExchange.js
+-- node_modules
| +-- ...
+-- pages
| +-- _app.js
| +-- _document.js
| +-- index.js
+-- presentational
| +-- fragments
| | +-- Container.js
| +-- Meta.js
| +-- Navbar.js
| +-- Page.js
| +-- SearchBar.js
+-- public
| +-- ...
+-- utils
| +-- apiConfig.js
| +-- debounce.js
| +-- fetchers.js
| +-- screen-sizes.js
| +-- theme.js
+-- .eslintignore
+-- .gitignore
+-- LICENSE
+-- package-lock.json
+-- package.json

```

**Container**
|||
|--|--|
| Exchange.js | Provides logic for search result.Container component for search results |
| SearchExchange.js | Provides logic for searchbar. ontainer component for searchbar |
| | |

| /pages        |             |
| ------------- | ----------- |
| \_app.js      | description |
| \_document.js |             |
| index.js      |             |
|               |             |

| /presentational     |                                                                                    |
| ------------------- | ---------------------------------------------------------------------------------- |
| fragments/Container | Sets presentational fragment component used in different presentational components |
| Meta.js             |                                                                                    |
| Navbar.js           | Provides presentational code for navbar                                            |
| Page.js             |                                                                                    |
| SearchBar.js        |                                                                                    |

| /public |     |
| ------- | --- |
|         |     |
|         |     |
|         |     |

| /utils       |                                                    |
| ------------ | -------------------------------------------------- |
| apiConfig.js | Sets api url                                       |
| debounce.js  | Creates a debounce feature for the search function |
| fetchers.js  | Creates an api requests and recieves the response  |
| screen-sizes | Sets sreen sizes used throughout the project       |
| theme.js     | Sets color scheme used throughout the project      |
|              |                                                    |

| Miscellaneous     |     |
| ----------------- | --- |
| .eslintignore     |     |
| .gitignore        |     |
| LICENSE           |     |
| package-lock.json |     |
| package.json      |     |
|                   |     |
|                   |     |
|                   |     |

## Web App Link and Repository Link?

Web Link : speak.exchange
Git Repository : https://github.com/juliuscc/speak.exchange.git
