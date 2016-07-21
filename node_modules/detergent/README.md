![Detergent](https://detergent.io/images/code-and-send-detergent-io_108x204.gif)

# Detergent

[![Build Status](https://travis-ci.org/code-and-send/detergent.svg?branch=master)](https://travis-ci.org/code-and-send/detergent) [![Dependency Status](https://david-dm.org/code-and-send/detergent.svg)](https://david-dm.org/code-and-send/detergent) [![devDependency Status](https://david-dm.org/code-and-send/detergent/dev-status.svg)](https://david-dm.org/code-and-send/detergent#info=devDependencies) [![Downloads/Month](https://img.shields.io/npm/dm/detergent.svg)](https://www.npmjs.com/package/detergent)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Detergent is a JavaScript library that prepares text to be pasted into email's or website's HTML code. There is also a front-end shell (internally called "the plastic") on [Detergent.io](http://detergent.io) with all current features implemented.

## Rationale

Let's say you are an agency and you have clients that pay you to create email newsletters for them. Newsletters are filled with text, and that text can be given to you in various file formats. Adobe products (Photoshop and Illustrator, for example) are notorious for adding invisible characters such as ETX as line breaks. Ideally, we need a tool to replace them with `<BR>`'s. To the best of my knowledge, no tool on the market can do that currently besides Detergent. Other cleaners either strip ETX'es (wasting your time) or ignore them (causing rendering problems later).

Sometimes the text you copy-paste into your email code can contain other invisible characters from the Unicode range. Detergent cleans them all.

Email messages' RAW source is in ASCII. If you use any other characters in your email newsletter outside of ASCII, you need to encode them - either do it manually using [Detergent](http://detergent.io) (the best way) or rely on your ESP to do it for you (risky).

Ideally, we need a tool to encode all the special characters within Unicode, including astral-ones (such as &#119558; or emoji's in general). There are few character converters on the Internet but some either [fail](http://www.emailonacid.com/character_converter/) at encoding astral characters and emoji's; or don't offer the option to encode using named entities. Latter makes it impossible to proof-read the emails before sending.

If you take care to encode your copy, your converter must be smart-enough to:
* strip the HTML, retaining bold/italic/strong/em tags
* offer to typographically-correct the text (to set typographically-correct dashes, quotes etc.)
* skip the entity encoding on non-latin characters because there is not point to work on soup of entities — email will surely be sent in UTF-8 anyway. Yet, unencoded pound signs will trigger email code linters, so proper converter should encode what is _usually_ encoded (although, technically, not required in non-latin email).

Detergent does all of this, and comes in two shapes: [NPM library](https://www.npmjs.com/package/detergent) and web app (http://detergent.io).

While Detergent is essential for email coding, it is also very handy for coding websites. How many times have you pasted text into Notepad just to get rid of invisible characters? Well, with Detergent you don't need to do that anymore.

## API

Optionally, you can customize the Detergent's functionality by providing an options object. Here's an overview of the default settings object's values.

```js
detergent('text to clean', {
  removeWidows: true,             // replace the last space in paragraph with &nbsp;
  convertEntities: true,          // encode all non-ASCII chars
  convertDashes: true,            // typographically-correct the n/m-dashes
  convertApostrophes: true,       // typographically-correct the apostrophes
  replaceLineBreaks: true,        // replace all line breaks with BR's
  removeLineBreaks: false,        // put everything on one line
  useXHTML: true,                 // add closing slashes on BR's
  removeSoftHyphens: true,        // remove character which encodes to &#173; or &shy;
  dontEncodeNonLatin: true,       // skip non-latin character encoding
  keepBoldEtc: true               // any bold, strong, i or em tags are stripped of attributes and retained
});
```

## Example

Simple encoding using default settings:

```js
detergent('clean this text £');
```

Using custom settings object:

```js
detergent('clean this text £',{
	convertEntities: false
});
```

## Contributing & testing

Flush the repo onto your SSD and have a butchers at tests/detergent.js. It's very minimalistic testing setup using [Tape](https://ponyfoo.com/articles/testing-javascript-modules-with-tape). Faucet helps to gang the tests, so each one sits on one line. Without Faucet you would get more than 40,000 lines of console output, all beastly in black and white.

```bash
node tests/detergent.js | faucet
```

If you want to contribute, please do. If it's code contribution, please supplement tests/detergent.js with tests covering your code.

## Licence

MIT © Roy Reveltas
