# superhero.js - [superheroapi.com](superheroapi.com) API Wrapper

## Install

Coming Soon..

```
npm install superhero.js
```

## Usage

To use `superhero.js` you will need to generate an API key on the [Superheroapi.com Site](https://superheroapi.com/index.html) and replace `your_api_key` with it:

```js
// Javascript
const SUPERHERO = require("superhero.js");
// Typescript
import SUPERHERO from "superhero.js";
const Superhero = new SUPERHERO(`your-api-key`);
```

You will now be able to test if your API key is correct by using the following function:

```js
console.log(await Superhero.validate());
```

If you get a response of `true` your API key is valid. If you get a response of `false` your API key is invalid.
